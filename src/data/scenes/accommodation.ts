import type { PresetScene } from "../scene-types";

// ============================================================
// 住宿替代场景 — Alternative Accommodation Scenes
// 覆盖：Airbnb民宿、青年旅舍、短租公寓
// ============================================================

export const ACCOMMODATION_SCENES: PresetScene[] = [
  // ==================== Airbnb 民宿入住 ====================
  {
    id: "accommodation-airbnb",
    category: "accommodation",
    titleZh: "Airbnb民宿入住",
    titleEn: "Airbnb Check-in",
    description: "到达Airbnb民宿后的入住流程，包括找到房源、使用密码锁/钥匙盒、了解房屋设施和规则",
    otherRole: "Airbnb房东",
    otherRoleIcon: "🏡",
    flows: [
      // --- Flow 1: 到达+找钥匙/密码锁+了解房屋设施 ---
      {
        id: "airbnb-arrival",
        titleZh: "到达入住",
        titleEn: "Arrival & Self Check-in",
        description: "到达Airbnb后自助入住、找到钥匙/密码锁、了解房屋基本设施",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just arrived at the apartment. I'm looking for the lockbox — where exactly is it?",
            textZh: "你好，我刚到公寓了。我在找钥匙盒，它具体在哪里？",
            culturalNote:
              "Airbnb很多房源使用lockbox（钥匙盒）或keypad（密码锁）实现自助入住，房东不一定到场。到了之后主动联系房东确认是常见做法。",
            casualVersion: "Hey, I'm here! Can't seem to find the lockbox though.",
            commonMistake: {
              wrong: "Hi, I just arrived at the apartment. I find the lockbox. Where is it?",
              correct: "Hi, I just arrived at the apartment. I'm looking for the lockbox — where exactly is it?",
              explanation: "“I find” 是现在时，语气太直接，不自然。“looking for” 更符合寻找的语境。",
            },
            formalityVariants: {
              casual: "Hey, just got to the apartment. Lookin' for the lockbox, where is it?",
              standard: "Hi, I've just arrived at the apartment. I'm looking for the lockbox — could you tell me where it is?",
              formal: "Good evening, I have just arrived at the property. I am attempting to locate the lockbox for entry; could you please provide its precise location?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Welcome! The lockbox is on the wall to the left of the front door, behind the small plant. The code is 4829.",
            textZh: "欢迎！钥匙盒在大门左边的墙上，小盆栽后面。密码是4829。",
            keyPhrases: [
              { en: "lockbox", zh: "钥匙盒" },
              { en: "to the left of the front door", zh: "在大门左边" },
              { en: "the code is", zh: "密码是" },
            ],
            variations: [
              {
                textEn: "Hey! There's a keypad on the door — the code is 4829. No lockbox needed.",
                textZh: "嘿！门上有密码锁，密码是4829，不需要钥匙盒。",
              },
              {
                textEn: "Hi there! The key is under the doormat in a small envelope.",
                textZh: "你好！钥匙在门垫下面的一个小信封里。",
              },
            ],
            responseTip: "记下密码，找到钥匙盒后输入密码取出钥匙",
            alternativeExpressions: [
              { textEn: "Hey! So the lockbox — it's right by the front door, left side, tucked behind a plant. Code's 4829.", textZh: "嘿！钥匙盒就在前门旁边，左边，藏在植物后面。密码4829。", actionHint: "口语化的指路，注意 tucked behind = 藏在后面", frequency: "common" },
              { textEn: "You'll see a little black box on the wall when you're facing the door. Punch in 4829 and the key's inside.", textZh: "面对门的时候你会看到墙上有个小黑盒子。输入4829，钥匙在里面。", actionHint: "punch in = 输入密码", frequency: "common" },
              { textEn: "It's a combo lockbox mounted next to the entrance — can't miss it. 4829 gets you in.", textZh: "是个密码钥匙盒，装在入口旁边——很好找。4829就能打开。", actionHint: "combo = combination 密码；mounted = 安装在墙上", frequency: "occasional" },
            ],
            casualVersion: "Hey! Keypad's on the door, code's 4829. No lockbox.",
            formalityVariants: {
              casual: "Hey! Keypad's on the door, code's 4829. No lockbox.",
              standard: "There's a keypad on the door; the code is 4829. You won't need a lockbox.",
              formal: "Please note, there is a keypad located directly on the door. The access code is 4829. A physical lockbox is not required for entry.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it, I found the lockbox and I'm in now. The place looks great!",
            textZh: "找到了，我已经进来了。房间看起来很不错！",
            casualVersion: "Found it, I'm in! Place looks awesome.",
            commonMistake: {
              wrong: "I found the lockbox. I am in now. The place is great.",
              correct: "Got it, I found the lockbox and I'm in now. The place looks great!",
              explanation: "“Got it” 自然表达理解。“looks great” 更生动，比“is great”更常用。",
            },
            formalityVariants: {
              casual: "Okay, found the lockbox, I'm in! Place looks awesome!",
              standard: "Understood. I've located the lockbox and successfully entered. The apartment looks lovely!",
              formal: "Thank you for the clarification. I have successfully accessed the property via the lockbox. I must commend you, the accommodations are indeed splendid.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Glad to hear it! Let me walk you through a few things. The Wi-Fi password is on the fridge — the network name is \"AptGuest\" and the password is \"sunshine2026\".",
            textZh: "太好了！我跟你说一下几个重要的东西。Wi-Fi密码贴在冰箱上，网络名是「AptGuest」，密码是「sunshine2026」。",
            keyPhrases: [
              { en: "Wi-Fi password", zh: "Wi-Fi密码" },
              { en: "on the fridge", zh: "在冰箱上" },
              { en: "network name", zh: "网络名称" },
            ],
            responseTip: "建议拍照记录Wi-Fi信息，方便以后使用",
            alternativeExpressions: [
              { textEn: "Awesome! So Wi-Fi — there's a card on the fridge with everything. Network's 'AptGuest', password's 'sunshine2026'.", textZh: "太好了！Wi-Fi的话，冰箱上有张卡写着所有信息。网络名'AptGuest'，密码'sunshine2026'。", actionHint: "card on the fridge = 冰箱上贴的卡片", frequency: "common" },
              { textEn: "Oh good, you're in! Here's the deal with Wi-Fi — look for the sticker on the fridge. It's all there.", textZh: "哦太好了，你进来了！Wi-Fi的话——看冰箱上的贴纸，都写在上面了。", actionHint: "here's the deal = 是这样的", frequency: "common" },
            ],
            casualVersion: "Awesome! Lemme run through some stuff. Wi-Fi password's on the fridge — network's AptGuest, pass's sunshine2026.",
            formalityVariants: {
              casual: "Awesome! Lemme run through some stuff. Wi-Fi password's on the fridge — network's AptGuest, pass's sunshine2026.",
              standard: "That's wonderful to hear! Allow me to provide some essential information. The Wi-Fi password can be found on the fridge. The network name is 'AptGuest', and the password is 'sunshine2026'.",
              formal: "I'm delighted to receive that feedback! Now, allow me to elaborate on a few pertinent details regarding the property. The Wi-Fi credentials are posted on the refrigerator; specifically, the network identifier is 'AptGuest' and the corresponding password is 'sunshine2026'.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks! How does the air conditioning work? I can't figure out the remote.",
            textZh: "谢谢！空调怎么用？我搞不懂遥控器。",
            culturalNote:
              "国外空调遥控器和国内的可能不同，有些是墙上的恒温器（thermostat），直接调温度即可。",
            casualVersion: "Cheers! AC remote's got me stumped, how's it work?",
            commonMistake: {
              wrong: "Thanks! AC how to use? I don't know the remote.",
              correct: "Thanks! How does the air conditioning work? I can't figure out the remote.",
              explanation: "“How does X work?” 是问使用方法的常用句式，“how to use” 不自然。",
            },
            formalityVariants: {
              casual: "Cheers! AC remote's got me stumped, how's it work?",
              standard: "Thank you! Could you explain how the air conditioning operates? I'm having trouble with the remote.",
              formal: "Much appreciated. I would greatly appreciate some guidance on the operation of the air conditioning system. I seem to be encountering difficulty understanding the remote control device.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "There's a thermostat on the wall in the hallway. Just press the up or down arrows to set your temperature. It's set to Fahrenheit — 72 is a comfortable room temperature.",
            textZh: "走廊墙上有个恒温器。按上下箭头调温度就行。温度是华氏的——72度是比较舒适的室温。",
            keyPhrases: [
              { en: "thermostat", zh: "恒温器" },
              { en: "up or down arrows", zh: "上下箭头" },
              { en: "Fahrenheit", zh: "华氏度" },
            ],
            culturalNote:
              "美国用华氏度：72°F ≈ 22°C。一般68-74°F是舒适区间。记住公式：(°F - 32) × 5/9 = °C",
            alternativeExpressions: [
              { textEn: "So for the AC, there's no remote — it's a thermostat on the wall in the hall. Just bump it up or down. It's in Fahrenheit, so 72 is like normal room temp.", textZh: "空调的话，没有遥控器——走廊墙上有个恒温器。调上调下就行。是华氏的，72度就是正常室温。", actionHint: "bump it up/down = 往上/下调一点", frequency: "common" },
              { textEn: "The heating and cooling is all controlled by the thermostat in the hallway. You can't miss it — just use the arrows. Keep it around 70-72 and you'll be fine.", textZh: "制热和制冷都是走廊的恒温器控制的。很好找——用箭头调就行。保持在70-72度就很舒服。", actionHint: "you can't miss it = 很好找", frequency: "common" },
            ],
            casualVersion: "Thermostat's on the hallway wall. Just hit the up/down arrows for temp. It's in Fahrenheit – 72's good.",
            formalityVariants: {
              casual: "Thermostat's on the hallway wall. Just hit the up/down arrows for temp. It's in Fahrenheit – 72's good.",
              standard: "You'll find a thermostat on the hallway wall. Simply use the up or down arrows to adjust the temperature. Please note, it operates in Fahrenheit, and 72 degrees is generally considered a comfortable room temperature.",
              formal: "The temperature control system, a thermostat, is located on the wall in the main hallway. To regulate the climate, kindly utilize the directional arrows to modify your desired temperature setting. It is calibrated to Fahrenheit, and a setting of 72 degrees is typically regarded as an optimal and comfortable ambient temperature.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Is there a washing machine I can use?",
            textZh: "明白了。有洗衣机可以用吗？",
            casualVersion: "Got it. Got a washing machine I can use?",
            commonMistake: {
              wrong: "Understood. Have washing machine can I use?",
              correct: "Got it. Is there a washing machine I can use?",
              explanation: "“Is there a X I can use?” 是询问是否有某物的自然表达。",
            },
            formalityVariants: {
              casual: "Got it. Got a washing machine I can use?",
              standard: "Understood. Is there a washing machine available for my use?",
              formal: "Thank you. May I inquire if laundry facilities, specifically a washing machine, are available for guest utilization?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Yes, there's a washer and dryer in the closet by the bathroom. Detergent is on the shelf above. Please don't run it after 10 PM — the neighbors can hear it.",
            textZh: "有的，洗衣机和烘干机在浴室旁边的壁橱里。洗衣液在上面的架子上。请晚上10点以后不要用——邻居能听到。",
            keyPhrases: [
              { en: "washer and dryer", zh: "洗衣机和烘干机" },
              { en: "detergent", zh: "洗衣液" },
              { en: "don't run it after 10 PM", zh: "10点以后不要用" },
            ],
            responseTip: "注意使用时间限制，尊重邻居",
            alternativeExpressions: [
              { textEn: "Yep, washer-dryer combo is in the closet near the bathroom. Soap's up top. Just don't run it late — like, after 10 — the walls are thin.", textZh: "有的，洗烘一体机在浴室附近的壁橱里。洗衣液在上面。别太晚用——10点以后别开——墙薄。", actionHint: "walls are thin = 隔音不好", frequency: "common" },
              { textEn: "There's a stacked unit in the hall closet by the bathroom. Detergent's on the shelf. I'd ask you not to do laundry past 10 PM though — noise carries.", textZh: "浴室旁边走廊壁橱里有个叠放的洗烘机。洗衣液在架子上。不过请10点以后别洗——声音会传开。", actionHint: "stacked unit = 上下叠放的洗烘机；noise carries = 声音会传", frequency: "occasional" },
            ],
            casualVersion: "Yep, washer and dryer in the closet by the bathroom. Detergent's on the shelf above. Try not to run it after 10 PM, neighbors'll hear.",
            culturalNote: "美国公寓隔音可能不如国内，晚间噪音需注意",
            formalityVariants: {
              casual: "Yep, washer and dryer in the closet by the bathroom. Detergent's on the shelf above. Try not to run it after 10 PM, neighbors'll hear.",
              standard: "Yes, both a washer and dryer are located in the closet adjacent to the bathroom. Detergent is provided on the shelf directly above them. We kindly request that you refrain from operating them after 10 PM, as the noise may disturb the neighbors.",
              formal: "Affirmative. A washer and dryer unit is situated within the closet proximate to the bathroom. Laundry detergent is conveniently placed on the overhead shelving. We respectfully request that these appliances not be operated beyond 10:00 PM, due to potential noise disturbance to neighboring residents.",
            },
          },
          {
            speaker: "you",
            textEn: "No problem. One more question — where do I put the trash?",
            textZh: "没问题。再问一下，垃圾放哪里？",
            casualVersion: "No prob. One more thing – where do I put the trash?",
            culturalNote: "美国垃圾分类和回收标准与国内不同",
            commonMistake: {
              wrong: "No problem. Another question: trash put where?",
              correct: "No problem. One more question — where do I put the trash?",
              explanation: "“where do I put X?” 是问垃圾放置位置的自然句式。",
            },
            formalityVariants: {
              casual: "No prob. One more thing – where do I put the trash?",
              standard: "Understood. I have one additional question: where should I dispose of the trash?",
              formal: "Acknowledged. I have a further query regarding waste management: could you please advise on the designated location for refuse disposal?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "There are two bins under the kitchen sink — gray for regular trash, blue for recycling. Trash pickup is on Tuesdays. Just leave the bags by the curb before 7 AM.",
            textZh: "厨房水槽下面有两个垃圾桶——灰色是普通垃圾，蓝色是可回收物。每周二收垃圾。早上7点前把垃圾袋放到路边就行。",
            keyPhrases: [
              { en: "recycling", zh: "可回收物" },
              { en: "trash pickup", zh: "垃圾收取" },
              { en: "by the curb", zh: "路边" },
            ],
            culturalNote:
              "欧美很多地方垃圾分类是强制的。常见分类：trash/garbage（普通垃圾）、recycling（可回收）、compost（厨余堆肥）。",
            alternativeExpressions: [
              { textEn: "For trash, there's two bins under the sink — one for garbage, one for recycling. Pickup's on Tuesdays, just drag the bags out front by 7.", textZh: "垃圾的话，水槽下面有两个桶——一个普通垃圾，一个回收。周二收，7点前把袋子拖到门前就行。", actionHint: "drag out front = 拖到门前；by 7 = 7点之前", frequency: "common" },
              { textEn: "Under the kitchen sink you'll find the bins — gray is trash, blue is recycling. They come get it on Tuesdays. Just set it out on the curb the night before if you want.", textZh: "厨房水槽下面你会看到垃圾桶——灰色是普通垃圾，蓝色是回收。周二来收。你也可以前一天晚上放到路边。", actionHint: "set it out = 摆出去", frequency: "common" },
            ],
            casualVersion: "Two bins under the kitchen sink – gray for regular, blue for recycling. Trash pickup's Tuesdays. Just leave bags by the curb before 7 AM.",
            formalityVariants: {
              casual: "Two bins under the kitchen sink – gray for regular, blue for recycling. Trash pickup's Tuesdays. Just leave bags by the curb before 7 AM.",
              standard: "You'll find two bins located under the kitchen sink: a gray one for regular trash and a blue one for recycling. Trash collection occurs on Tuesdays. Please ensure the bags are placed by the curb before 7 AM on that day.",
              formal: "Beneath the kitchen sink, you will find two designated receptacles: a gray bin for general refuse and a blue bin for recyclable materials. Waste collection services are scheduled for Tuesdays. Kindly place the bagged refuse at the curbside prior to 7:00 AM on the aforementioned day.",
            },
          },
          {
            speaker: "you",
            textEn: "That's really helpful, thank you! I think I'm all set.",
            textZh: "太有用了，谢谢！我觉得都清楚了。",
            casualVersion: "Awesome, thanks! I think I'm good.",
            commonMistake: {
              wrong: "Very useful, thanks! I think I am ready.",
              correct: "That's really helpful, thank you! I think I'm all set.",
              explanation: "“That's really helpful” 更自然。 “I'm all set” 指万事俱备，准备就绪，比“I am ready”更常用。",
            },
            formalityVariants: {
              casual: "Super helpful, thanks! Think I'm good to go.",
              standard: "That information is very helpful, thank you! I believe I have everything I need now.",
              formal: "I genuinely appreciate your thorough assistance; that was exceedingly helpful. I believe all necessary preparations are now complete.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Great! If you need anything, just message me through the app. Enjoy your stay!",
            textZh: "好的！如果需要什么，通过App给我发消息就行。祝你住得愉快！",
            keyPhrases: [
              { en: "message me through the app", zh: "通过App给我发消息" },
              { en: "enjoy your stay", zh: "祝你住得愉快" },
            ],
            alternativeExpressions: [
              { textEn: "You're all set! Hit me up on the app if anything comes up. Have a great stay!", textZh: "一切搞定！有什么事通过App联系我。祝你住得开心！", actionHint: "hit me up = 联系我（很口语化）", frequency: "common" },
              { textEn: "Cool, you're good to go! Just shoot me a message if you need anything. Enjoy!", textZh: "好了，都安排好了！有需要就给我发个消息。好好享受！", actionHint: "shoot me a message = 给我发条消息", frequency: "common" },
            ],
            casualVersion: "Awesome! Need anything, just hit me up on the app. Enjoy!",
            formalityVariants: {
              casual: "Awesome! Need anything, just hit me up on the app. Enjoy!",
              standard: "Excellent! Should you require any further assistance, please feel free to message me via the application. I hope you have a very pleasant stay!",
              formal: "Splendid! Should any further requirements or inquiries arise, please do not hesitate to contact me through the designated application. I extend my sincerest wishes for a most enjoyable occupancy.",
            },
          },
        ],
      },
      // --- Flow 2: 设施有问题（热水/WiFi/空调）→联系房东 ---
      {
        id: "airbnb-issues",
        titleZh: "设施故障报修",
        titleEn: "Reporting Issues to Host",
        description: "入住后发现热水、WiFi或空调等设施有问题，联系房东解决",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, sorry to bother you. I'm having some issues with the hot water — it's not getting warm at all.",
            textZh: "你好，不好意思打扰了。热水有点问题——完全不热。",
            culturalNote:
              "\"Sorry to bother you\" 是联系房东报修时很得体的开头，不会显得太aggressive。",
            casualVersion: "Hey, sorry to bug you — the hot water isn't working.",
            commonMistake: {
              wrong: "Hot water has problem.",
              correct: "I'm having some issues with the hot water.",
              explanation: "直接翻译“有问题”听起来不自然。用\"issues\"或\"not working\"更地道。",
            },
            formalityVariants: {
              casual: "Hey, sorry to bother, but the hot water's not getting warm at all.",
              standard: "Hi, sorry to bother you. I'm having some issues with the hot water — it's not getting warm at all.",
              formal: "Good morning/afternoon, apologies for the interruption. I am experiencing a problem with the hot water system; it is not producing any warm water.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Oh no, sorry about that! Can you check the water heater? It's in the utility closet next to the kitchen. Make sure the switch is turned on — sometimes it gets accidentally flipped off.",
            textZh: "哎呀，抱歉！你能看一下热水器吗？在厨房旁边的杂物间里。确认一下开关是不是开着的——有时会不小心被关掉。",
            keyPhrases: [
              { en: "water heater", zh: "热水器" },
              { en: "utility closet", zh: "杂物间" },
              { en: "switch is turned on", zh: "开关是否打开" },
              { en: "flipped off", zh: "被关掉" },
            ],
            responseTip: "先按房东说的自己检查一下，很多时候是简单的开关问题",
            alternativeExpressions: [
              { textEn: "Ugh, sorry about that! There's a water heater in the little closet by the kitchen. Can you check if the switch got bumped off? That happens sometimes.", textZh: "啊，抱歉！厨房旁边的小储物间里有热水器。你能看看开关是不是被碰关了吗？这种情况时有发生。", actionHint: "got bumped off = 被不小心碰关了", frequency: "common" },
              { textEn: "Oh man, that's no good. Check the utility room next to the kitchen — there's a hot water heater in there. Make sure it's switched on.", textZh: "哦天，那不太好。看看厨房旁边的设备间——里面有热水器。确认一下是不是开着的。", actionHint: "oh man 表示遗憾/同情", frequency: "common" },
            ],
            casualVersion: "Oh no, shoot! Can you check the water heater? It's in the utility closet by the kitchen. Just make sure the switch is on – sometimes it gets flipped off by accident.",
            commonMistake: {
              wrong: "Check if the switch is on.",
              correct: "Make sure the switch is turned on.",
              explanation: "“Check if”偏书面化，口语中“make sure”更自然流畅。",
            },
            formalityVariants: {
              casual: "Oops, my bad! Could you peek at the water heater? It's in that closet by the kitchen. Just check the switch, sometimes it gets bumped off.",
              standard: "Oh no, sorry about that! Can you check the water heater? It's in the utility closet next to the kitchen. Make sure the switch is turned on — sometimes it gets accidentally flipped off.",
              formal: "My apologies for this inconvenience. Could you please inspect the water heater? It is located in the utility closet adjacent to the kitchen. Kindly ensure that its power switch is in the 'on' position, as it occasionally gets inadvertently deactivated.",
            },
          },
          {
            speaker: "you",
            textEn: "I checked — the switch is on, but the water is still cold even after running it for five minutes.",
            textZh: "我看了——开关是开着的，但水放了五分钟还是冷的。",
            casualVersion: "Yeah, I checked – switch is on, but water's still cold, even after running it five minutes.",
            commonMistake: {
              wrong: "I checked it, the switch is open.",
              correct: "I checked — the switch is on.",
              explanation: "“Open”通常指门窗，开关用“on/off”。“checked”后跟内容更自然。",
            },
            formalityVariants: {
              casual: "Yep, checked it. Switch is on, water's still freezing though, even after five minutes.",
              standard: "I checked — the switch is on, but the water is still cold even after running it for five minutes.",
              formal: "I have confirmed that the switch is indeed in the 'on' position; however, the water remains cold even after being run for a full five minutes.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "I see. Let me contact my maintenance person. He can come by this afternoon, probably around 3 PM. Would that work for you?",
            textZh: "我明白了。我联系一下维修工。他今天下午能过来，大概3点左右。你方便吗？",
            keyPhrases: [
              { en: "maintenance person", zh: "维修工" },
              { en: "come by", zh: "过来/上门" },
              { en: "would that work for you", zh: "你方便吗" },
            ],
            isBranchPoint: true,
            responseTip: "如果时间不方便，可以协商其他时间",
            alternativeExpressions: [
              { textEn: "OK, sounds like it needs a pro. Let me get my repair guy over there. He could probably swing by around 3 this afternoon — does that work?", textZh: "好吧，听起来需要专业人员了。我让我的维修师傅过去。他大概下午3点能来——你方便吗？", actionHint: "swing by = 顺便过来一趟（很口语）", frequency: "common" },
              { textEn: "Alright, I'll call a handyman. He's usually free in the afternoons. I'll try to get him there by 3. That OK with you?", textZh: "好吧，我叫一个维修工。他下午通常有空。我尽量让他3点前到。你OK吗？", actionHint: "handyman = 杂修工/万能修理工", frequency: "common" },
            ],
            casualVersion: "Got it. I'll hit up my maintenance guy. He can swing by this afternoon, probably 'round 3. That work for you?",
            commonMistake: {
              wrong: "Is that convenient for you?",
              correct: "Would that work for you?",
              explanation: "“Convenient”更多指是否方便做某事，“work for you”更地道询问时间是否合适。",
            },
            formalityVariants: {
              casual: "Okay. I'll call my guy. He can be there this afternoon, 'round 3. Is that good?",
              standard: "I see. Let me contact my maintenance person. He can come by this afternoon, probably around 3 PM. Would that work for you?",
              formal: "Understood. I will proceed to contact my maintenance technician. He would be available to visit this afternoon, likely around 3:00 PM. Would that proposed time be suitable for your schedule?",
            },
          },
          {
            speaker: "you",
            textEn: "That works. Also, I noticed the Wi-Fi is really slow. Pages take forever to load.",
            textZh: "可以。另外，Wi-Fi特别慢，网页半天打不开。",
            casualVersion: "Sure, 3 works. Oh and the Wi-Fi is super slow too.",
            commonMistake: {
              wrong: "Wi-Fi very slow. Pages open very slowly.",
              correct: "The Wi-Fi is really slow. Pages take forever to load.",
              explanation: "“非常慢”用\"really slow\"更自然。\"take forever to load\"比\"open very slowly\"生动形象。",
            },
            formalityVariants: {
              casual: "Yeah, that's fine. Oh, also, the Wi-Fi's super slow. Pages are taking ages to load.",
              standard: "That works. Also, I noticed the Wi-Fi is really slow. Pages take forever to load.",
              formal: "That arrangement is acceptable. Additionally, I have observed that the Wi-Fi connectivity is exceptionally sluggish, with web pages experiencing prolonged loading times.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Try restarting the router — unplug it for 30 seconds and then plug it back in. It's the white box on top of the bookshelf in the living room.",
            textZh: "试试重启路由器——拔掉电源等30秒再插回去。路由器是客厅书架上面的白色盒子。",
            keyPhrases: [
              { en: "restarting the router", zh: "重启路由器" },
              { en: "unplug", zh: "拔掉电源" },
              { en: "plug it back in", zh: "插回去" },
            ],
            culturalNote:
              "\"Have you tried turning it off and on again?\" 是欧美解决技术问题的经典第一步，重启确实能解决很多问题。",
            alternativeExpressions: [
              { textEn: "Classic fix — try unplugging the router for like 30 seconds and plugging it back in. It's the white thing on the bookshelf.", textZh: "经典修复方法——把路由器拔掉大概30秒再插回去。就是书架上那个白色的东西。", actionHint: "classic fix = 经典的解决方法", frequency: "common" },
              { textEn: "Have you tried resetting the router? Just pull the plug, wait half a minute, and pop it back in. It's on the shelf in the living room.", textZh: "你试过重置路由器吗？拔掉插头，等半分钟，再插回去。在客厅架子上。", actionHint: "pull the plug = 拔插头；pop it back in = 插回去", frequency: "common" },
            ],
            casualVersion: "Try restarting the router — just unplug it for 30 seconds, then plug it back in. It's that white box on the living room bookshelf.",
            commonMistake: {
              wrong: "Try restart the router. Unplug it 30 seconds then plug it again.",
              correct: "Try restarting the router — unplug it for 30 seconds and then plug it back in.",
              explanation: "\"restarting the router\"比\"restart the router\"更自然。\"plug it back in\"比\"plug it again\"更地道。",
            },
            formalityVariants: {
              casual: "Just restart the router – unplug for 30, plug back in. It's the white box on the living room bookshelf.",
              standard: "Try restarting the router — unplug it for 30 seconds and then plug it back in. It's the white box on top of the bookshelf in the living room.",
              formal: "Please attempt to restart the router by disconnecting it from its power source for a duration of 30 seconds, and then re-connecting it. It is the white apparatus situated on the bookshelf within the living room.",
            },
          },
          {
            speaker: "you",
            textEn: "I restarted it but it's still really slow. I'm getting maybe 1-2 Mbps.",
            textZh: "重启了，但还是很慢。速度大概只有1-2 Mbps。",
            casualVersion: "Yeah, restarted it, but it's still super slow. Only getting like 1-2 Mbps.",
            commonMistake: {
              wrong: "I restarted it, but still very slow. The speed is 1-2 Mbps.",
              correct: "I restarted it but it's still really slow. I'm getting maybe 1-2 Mbps.",
              explanation: "\"really slow\"更口语化。\"I'm getting\"比\"the speed is\"更自然描述网速。",
            },
            formalityVariants: {
              casual: "Restarted it, but it's still crawling. Only getting like 1-2 Mbps.",
              standard: "I restarted it but it's still really slow. I'm getting maybe 1-2 Mbps.",
              formal: "I have performed the restart, yet the connection remains exceedingly slow. My current download speed appears to be only 1-2 Mbps.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "That's definitely not normal — it should be around 50 Mbps. I'll call the internet provider tomorrow morning. In the meantime, I can share my mobile hotspot password with you — would that help?",
            textZh: "那肯定不正常——应该有50 Mbps左右。我明天早上打电话给网络供应商。现在我可以把手机热点密码分享给你，能帮上忙吗？",
            keyPhrases: [
              { en: "internet provider", zh: "网络供应商" },
              { en: "mobile hotspot", zh: "手机热点" },
              { en: "in the meantime", zh: "在这期间" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Yeah, that's way too slow. It should be way faster than that. I'll get the ISP on the phone tomorrow. Want me to share my hotspot in the meantime?", textZh: "是的，那太慢了。应该快得多才对。我明天打电话给运营商。你要不要先用我的热点？", actionHint: "ISP = Internet Service Provider 网络运营商", frequency: "common" },
              { textEn: "Hmm, 1-2 Mbps is definitely not right. Let me reach out to the internet company. For now I can give you my personal hotspot — would that tide you over?", textZh: "嗯，1-2 Mbps肯定不对。我联系一下网络公司。现在可以给你我的个人热点——能先凑合用吗？", actionHint: "tide you over = 暂时应付/凑合一下", frequency: "occasional" },
            ],
            casualVersion: "Yeah, that's definitely not right – should be closer to 50 Mbps. I'll call the internet company tomorrow morning. For now, I can share my mobile hotspot, if that helps?",
            commonMistake: {
              wrong: "Is that helpful for you?",
              correct: "Would that help?",
              explanation: "“helpful”是形容词，“would that help”询问是否能解决问题，更自然。",
            },
            formalityVariants: {
              casual: "Yeah, that's not right at all – you should be getting about 50. I'll call the ISP tomorrow. For now, I can just share my mobile hotspot, might that work?",
              standard: "That's definitely not normal — it should be around 50 Mbps. I'll call the internet provider tomorrow morning. In the meantime, I can share my mobile hotspot password with you — would that help?",
              formal: "That speed is certainly abnormal; it should typically be approximately 50 Mbps. I will contact the internet service provider tomorrow morning. As an interim solution, I am able to share my mobile hotspot credentials with you — would that be a satisfactory temporary measure?",
            },
          },
          {
            speaker: "you",
            textEn: "That would be great, thanks. One more thing — the AC seems to be making a loud buzzing noise when I turn it on.",
            textZh: "那太好了，谢谢。还有一个问题——空调开的时候有很大的嗡嗡声。",
            casualVersion: "Awesome, thanks! Oh, one more thing – the AC's making a loud buzzing noise when I turn it on.",
            commonMistake: {
              wrong: "AC has loud buzzing noise when I open it.",
              correct: "The AC seems to be making a loud buzzing noise when I turn it on.",
              explanation: "“has noise”不自然，用“making a noise”更地道。“open”不用于电器，用“turn it on”。",
            },
            formalityVariants: {
              casual: "Perfect, thanks! Also, the AC's buzzing loudly when I switch it on.",
              standard: "That would be great, thanks. One more thing — the AC seems to be making a loud buzzing noise when I turn it on.",
              formal: "That assistance would be greatly appreciated, thank you. I must also bring to your attention that the air conditioning unit emits a distinct and loud buzzing sound upon activation.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Hmm, that might be a filter issue. When was the last time you turned it on? Try running it on fan-only mode first and see if the noise goes away. If not, I'll have the maintenance guy look at that too when he comes at 3.",
            textZh: "嗯，可能是滤网的问题。你什么时候开的？先试试只开送风模式，看噪音是否消失。如果还是有声音，维修工3点来的时候一起看看。",
            keyPhrases: [
              { en: "filter", zh: "滤网" },
              { en: "fan-only mode", zh: "送风模式" },
              { en: "noise goes away", zh: "噪音消失" },
            ],
            alternativeExpressions: [
              { textEn: "Could be the filter — when's the last time it was run? Try just the fan mode first and see if it quiets down. If not, I'll have the guy check it at 3.", textZh: "可能是滤网——上次什么时候用的？先试试只开风扇模式看看会不会安静下来。不行的话让维修工3点来看。", actionHint: "quiets down = 安静下来", frequency: "common" },
              { textEn: "That buzzing might mean the filter's dirty. Try switching it to fan-only and see what happens. The repair guy can take a look when he's there.", textZh: "那个嗡嗡声可能是滤网脏了。试试切到纯送风模式看看。维修工来的时候可以一起看看。", actionHint: "see what happens = 看看效果怎样", frequency: "common" },
            ],
            casualVersion: "Hmm, could be a filter thing. When'd you last turn it on? Try just the fan-only mode first, see if the noise stops. If not, I'll have the maintenance guy check that out too when he's here at 3.",
            commonMistake: {
              wrong: "When did you turn it on last time?",
              correct: "When was the last time you turned it on?",
              explanation: "\"When was the last time...\"是更自然的询问过去某个行为时间点的句式。",
            },
            formalityVariants: {
              casual: "Could be a filter problem. When'd you use it last? Try just the fan mode first, see if the buzz stops. If not, my guy can check it out when he's here at 3.",
              standard: "Hmm, that might be a filter issue. When was the last time you turned it on? Try running it on fan-only mode first and see if the noise goes away. If not, I'll have the maintenance guy look at that too when he comes at 3.",
              formal: "That particular issue may indicate a problem with the filter. Could you please recall the last occasion you operated the unit? I recommend attempting to run it exclusively on fan mode initially, to ascertain if the noise subsides. Should the noise persist, I will instruct the maintenance technician to inspect it during his scheduled visit at 3 PM.",
            },
          },
          {
            speaker: "you",
            textEn: "OK, I'll try that. Should I be here when the maintenance person comes, or can you let them in?",
            textZh: "好，我试试。维修工来的时候我需要在吗，还是你可以让他进来？",
            culturalNote:
              "确认维修时是否需要在场很重要。有些房东有备用钥匙可以让维修工直接进入。",
            casualVersion: "Okay, I'll try it. Do I need to be here when the maintenance guy shows up, or can you let him in?",
            commonMistake: {
              wrong: "I need to be here when maintenance person comes?",
              correct: "Should I be here when the maintenance person comes?",
              explanation: "疑问句语序错误，且\"should I be here\"比\"I need to be here\"更委婉。",
            },
            formalityVariants: {
              casual: "Alright, I'll try. Do I gotta be here when the maintenance guy comes, or can you just let him in?",
              standard: "OK, I'll try that. Should I be here when the maintenance person comes, or can you let them in?",
              formal: "Very well, I shall attempt that. Regarding the maintenance technician's visit, is my presence required, or would you be able to grant them access to the property?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "You don't need to be there — I have a spare key and I'll meet him at the apartment. I'll text you once everything is fixed. Really sorry for the trouble!",
            textZh: "你不需要在。我有备用钥匙，我会在公寓跟他碰面。修好了我发消息告诉你。真的很抱歉给你添麻烦了！",
            keyPhrases: [
              { en: "spare key", zh: "备用钥匙" },
              { en: "text you", zh: "发消息给你" },
              { en: "sorry for the trouble", zh: "抱歉添麻烦" },
            ],
            alternativeExpressions: [
              { textEn: "No worries, you don't need to stick around. I've got a spare key — I'll let him in myself. I'll drop you a text when it's all sorted. Sorry again!", textZh: "没事，你不用待着。我有备用钥匙——我自己让他进去。搞定了给你发条消息。再次抱歉！", actionHint: "stick around = 留在那里；drop you a text = 给你发条短信；sorted = 搞定", frequency: "common" },
              { textEn: "Don't worry about being there — I can handle it. I'll keep you posted once everything's taken care of. Really sorry for all the hassle!", textZh: "你不在没关系——我来处理。修好了会通知你的。真的很抱歉这么麻烦！", actionHint: "keep you posted = 随时通知你；hassle = 麻烦", frequency: "common" },
            ],
            casualVersion: "Nah, no need for you to be there – I've got a spare key and I'll meet him at the apartment. I'll text you when it's all fixed. So sorry for the hassle!",
            commonMistake: {
              wrong: "I will meet him at apartment.",
              correct: "I'll meet him at the apartment.",
              explanation: "“at the apartment”比“at apartment”更自然，需要冠词。",
            },
            formalityVariants: {
              casual: "Nope, no need to be there. I've got a spare key and I'll meet him. I'll shoot you a text once it's all done. Super sorry for the trouble!",
              standard: "You don't need to be there — I have a spare key and I'll meet him at the apartment. I'll text you once everything is fixed. Really sorry for the trouble!",
              formal: "Your presence is not required; I possess a spare key and will personally meet the technician at the apartment. I will send you a text message upon completion of the repairs. My sincere apologies for any inconvenience this may have caused.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 青年旅舍 ====================
  {
    id: "accommodation-hostel",
    category: "accommodation",
    titleZh: "青年旅舍入住",
    titleEn: "Hostel Check-in",
    description: "入住青年旅舍的完整流程，了解宿舍规则、公共设施使用方法和社交礼仪",
    otherRole: "前台",
    otherRoleIcon: "🛏️",
    flows: [
      // --- Flow 1: 入住+了解规则（安静时间/厨房/储物柜）---
      {
        id: "hostel-checkin",
        titleZh: "办理入住",
        titleEn: "Hostel Check-in & Rules",
        description: "到达青年旅舍后办理入住、了解宿舍规则和公共设施",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a booking for a bed in a 6-bed mixed dorm. The name is Li Wei.",
            textZh: "你好，我预订了一个6人混合宿舍的床位。名字是李伟。",
            culturalNote:
              "青年旅舍按床位（bed）而非房间（room）预订。mixed dorm是男女混住，female-only dorm是女生专属。",
            casualVersion: "Hey, I booked a bed in the 6-bed dorm. Name's Li Wei.",
            commonMistake: {
              wrong: "My name is Li Wei",
              correct: "The name is Li Wei.",
              explanation: "直接说 'My name is...' 也可以，但 'The name is...' 在报预订时更常见且自然。",
            },
            formalityVariants: {
              casual: "Hey, I booked a bed in a 6-bed mixed dorm, name's Li Wei.",
              standard: "Hi, I have a booking for a bed in a 6-bed mixed dorm. The name is Li Wei.",
              formal: "Good afternoon, I have a reservation for a bed in a 6-bed mixed dormitory. The name on the booking is Li Wei.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Hi Li Wei! Welcome. Can I see your ID? And I'll need a credit card on file for the security deposit — it's $20, fully refundable at checkout.",
            textZh: "你好李伟！欢迎。能看一下你的证件吗？另外需要一张信用卡做押金——20美元，退房时全额退还。",
            keyPhrases: [
              { en: "credit card on file", zh: "留一张信用卡信息" },
              { en: "security deposit", zh: "押金" },
              { en: "fully refundable", zh: "全额退还" },
            ],
            variations: [
              {
                textEn: "Welcome! I'll need your passport and a $20 deposit. You'll get it back when you check out.",
                textZh: "欢迎！我需要你的护照和20美元押金。退房时退还。",
              },
            ],
            responseTip: "准备好护照和信用卡",
            alternativeExpressions: [
              { textEn: "Hey, welcome! Got your ID on you? I'll also need a card for the deposit — it's 20 bucks, you get it back when you leave.", textZh: "嘿，欢迎！带证件了吗？还需要一张卡做押金——20块，走的时候退给你。", actionHint: "got your ID on you = 带证件了吗（很口语）；20 bucks = 20美元", frequency: "common" },
              { textEn: "Welcome! Can I grab your passport? And we take a $20 hold on a credit card for the deposit — totally refundable.", textZh: "欢迎！能看一下护照吗？我们会在信用卡上预扣20美元押金——完全可退。", actionHint: "grab = 看一下；hold = 预扣/冻结", frequency: "common" },
            ],
            casualVersion: "Welcome! I'll need your passport and a twenty dollar deposit. You'll get it back when you check out.",
            formalityVariants: {
              casual: "Hey, welcome! Just need your passport and a twenty dollar deposit. Get it back when you check out.",
              standard: "Welcome! I'll need your passport and a $20 deposit. You'll get it back when you check out.",
              formal: "Welcome. I will require your passport and a $20 security deposit, which will be fully refunded upon your departure.",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, here's my passport and credit card.",
            textZh: "好的，这是我的护照和信用卡。",
            casualVersion: "Yep, here's my passport and card.",
            formalityVariants: {
              casual: "Yep, here's my passport and card.",
              standard: "Sure, here's my passport and credit card.",
              formal: "Certainly, please find my passport and credit card.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Great. You're in Room 3, Bed B — it's the bottom bunk on the left. Here's your key card. It opens both the front door and your room. Don't lose it — replacement is $10.",
            textZh: "好的。你在3号房，B号床位——左边的下铺。这是你的门卡。大门和房间门都用这张卡开。不要弄丢——补办要10美元。",
            keyPhrases: [
              { en: "bottom bunk", zh: "下铺" },
              { en: "key card", zh: "门卡" },
              { en: "replacement", zh: "补办" },
            ],
            culturalNote:
              "bunk bed是上下铺。top bunk上铺，bottom bunk下铺。有些旅舍可以选，有些随机分配。",
            alternativeExpressions: [
              { textEn: "You're in Room 3, lower left bunk — Bed B. Here's your card — works on the front door and your room. Heads up, it's $10 to replace if you lose it.", textZh: "你在3号房，左下铺——B号床。这是你的卡——大门和房间都能用。提醒一下，丢了补办要10美元。", actionHint: "heads up = 提醒你一下", frequency: "common" },
              { textEn: "Room 3, Bed B — that's the bottom bunk on your left when you walk in. Take this key card. Don't lose it — replacement fee is 10 bucks.", textZh: "3号房B床位——进去后左边的下铺。拿好门卡。别丢了——补办费10美元。", actionHint: "when you walk in = 你走进去的时候", frequency: "common" },
            ],
            casualVersion: "Alright. You're in Room 3, Bed B — that's the bottom bunk on the left. Key card's for the front door and your room. Don't lose it, ten bucks to replace.",
            formalityVariants: {
              casual: "Alright. You're in Room 3, Bed B, bottom bunk left. Key card's for the front door and your room. Don't lose it, ten bucks to replace.",
              standard: "Great. You're in Room 3, Bed B — it's the bottom bunk on the left. Here's your key card. It opens both the front door and your room. Don't lose it — replacement is $10.",
              formal: "Excellent. Your assigned accommodation is Room 3, Bed B, which is the lower bunk on the left side. Here is your key card, which provides access to both the main entrance and your room. Please be advised that a replacement fee of $10 will be incurred if the card is misplaced.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks. Is there a locker for my stuff?",
            textZh: "谢谢。有储物柜放东西吗？",
            casualVersion: "Thanks. Got a locker for my stuff?",
            formalityVariants: {
              casual: "Thanks. Got a locker for my stuff?",
              standard: "Thanks. Is there a locker for my stuff?",
              formal: "Thank you. May I inquire if a locker is provided for my belongings?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, each bed has a locker underneath. You'll need your own padlock — we sell them at the front desk for $5 if you need one. I'd strongly recommend locking up your valuables.",
            textZh: "有的，每个床位下面都有储物柜。你需要自带锁——前台也有卖，5美元一把。强烈建议把贵重物品锁好。",
            keyPhrases: [
              { en: "locker", zh: "储物柜" },
              { en: "padlock", zh: "挂锁" },
              { en: "valuables", zh: "贵重物品" },
            ],
            responseTip: "如果没带锁就在前台买一把，保管好贵重物品",
            alternativeExpressions: [
              { textEn: "Yeah, there's a locker under your bed. You'll need to bring your own lock though. We sell 'em here for five bucks if you don't have one. Definitely lock up anything valuable.", textZh: "有的，你床下面有储物柜。不过得自己带锁。没有的话我们这卖，五块钱。贵重东西一定要锁好。", actionHint: "'em = them 的口语缩写", frequency: "common" },
              { textEn: "Each bunk's got a locker. BYOL — bring your own lock! Or grab one from us for $5. Seriously though, lock your stuff up.", textZh: "每个床位都有储物柜。自带锁！或者花5美元从我们这买一个。说真的，把东西锁好。", actionHint: "BYOL = Bring Your Own Lock（自带锁，类似 BYOB 自带酒水）", frequency: "occasional" },
            ],
            casualVersion: "Yeah, each bed's got a locker underneath. Need your own padlock. We sell 'em at the front desk for five bucks if you need one. Definitely lock up your valuables.",
            formalityVariants: {
              casual: "Yeah, each bed's got a locker underneath. Need your own padlock. We sell 'em at the front desk for five bucks if you need one. Definitely lock up your valuables.",
              standard: "Yes, each bed has a locker underneath. You'll need your own padlock — we sell them at the front desk for $5 if you need one. I'd strongly recommend locking up your valuables.",
              formal: "Indeed, each bed is equipped with a locker located underneath. Please note that you will be required to provide your own padlock. We do offer them for purchase at the front desk for $5 should you require one. I highly recommend securing your valuables.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take one, please. Can you tell me about the house rules?",
            textZh: "那我买一把。能跟我说说旅舍的规定吗？",
            casualVersion: "Okay, I'll grab one. What're the house rules?",
            commonMistake: {
              wrong: "Can you tell me the house rules?",
              correct: "Can you tell me about the house rules?",
              explanation: "加 'about' 使问句更自然，避免直接询问规则本身略显生硬。",
            },
            formalityVariants: {
              casual: "Okay, I'll grab one. What're the house rules?",
              standard: "I'll take one, please. Can you tell me about the house rules?",
              formal: "I will purchase one, please. Could you kindly inform me of the house rules?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Sure! Quiet hours are from 10 PM to 8 AM — no talking or music in the dorms. The common room stays open 24/7 if you want to hang out. The kitchen is free to use — just clean up after yourself and label your food in the fridge.",
            textZh: "当然！安静时间是晚上10点到早上8点——宿舍里不能说话或放音乐。公共休息区24小时开放，可以去那里聊天。厨房免费使用——用完自己收拾干净，冰箱里的食物要贴上名字。",
            keyPhrases: [
              { en: "quiet hours", zh: "安静时间" },
              { en: "common room", zh: "公共休息区" },
              { en: "clean up after yourself", zh: "自己收拾干净" },
              { en: "label your food", zh: "食物贴上名字" },
            ],
            culturalNote:
              "青年旅舍的quiet hours是非常重要的规则。违反可能被警告甚至要求退房。在安静时间段，用手机也请戴耳机。",
            alternativeExpressions: [
              { textEn: "OK so, big one — lights out and no noise in the dorms from 10 to 8. If you wanna chat or whatever, the common area's open all night. Kitchen's free to use, just don't leave a mess. And put your name on stuff in the fridge.", textZh: "好，重点——10点到8点宿舍熄灯禁声。想聊天什么的去公共区，通宵开放。厨房随便用，别留一堆乱。冰箱里的东西写上名字。", actionHint: "lights out = 熄灯；don't leave a mess = 别弄得乱七八糟", frequency: "common" },
              { textEn: "Quiet hours are 10 PM to 8 AM — that's a hard rule. Common room's 24/7 though, so no worries there. Feel free to cook — just clean up after. Oh, and label anything you put in the fridge.", textZh: "安静时间晚10到早8——这是硬规定。公共区24小时开着倒是不用担心。随便做饭——用完收拾好就行。哦，冰箱里放的东西贴个标签。", actionHint: "hard rule = 硬规定，不能违反", frequency: "common" },
            ],
            casualVersion: "Totally! Quiet hours: 10 PM to 8 AM. No talking/music in dorms. Common room's open 24/7 if you wanna hang. Kitchen's free to use – just clean up and label your stuff in the fridge.",
            formalityVariants: {
              casual: "Totally! Quiet hours: 10 PM to 8 AM. No talking/music in dorms. Common room's open 24/7 if you wanna hang. Kitchen's free to use – just clean up and label your stuff in the fridge.",
              standard: "Sure! Quiet hours are from 10 PM to 8 AM — no talking or music in the dorms. The common room stays open 24/7 if you want to hang out. The kitchen is free to use — just clean up after yourself and label your food in the fridge.",
              formal: "Certainly. Quiet hours are observed from 10 PM to 8 AM, during which time no talking or music is permitted within the dormitories. The common room remains accessible 24 hours a day should you wish to socialize. The kitchen facilities are complimentary for your use; however, we request that you please clean up thoroughly after yourself and clearly label any food stored in the refrigerator.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. What about the bathroom situation?",
            textZh: "明白了。浴室是什么情况？",
            casualVersion: "Cool. And the showers?",
            commonMistake: {
              wrong: "How is the bathroom?",
              correct: "What about the bathroom situation?",
              explanation: "询问设施使用方式或布局时，用 'situation' 比 'how is' 更自然地道。",
            },
            formalityVariants: {
              casual: "Got it. So, bathrooms?",
              standard: "Got it. What about the bathroom situation?",
              formal: "I understand. Could you please provide information regarding the bathroom facilities?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Shared bathrooms are at the end of the hallway. Showers are free, and towels are available for rent — $2 for your whole stay. Please keep shower time under 10 minutes during peak hours, mornings between 7 and 9.",
            textZh: "公共浴室在走廊尽头。淋浴免费，毛巾可以租——整个住宿期间2美元。早上7到9点高峰期请把淋浴时间控制在10分钟以内。",
            keyPhrases: [
              { en: "shared bathrooms", zh: "公共浴室" },
              { en: "towels are available for rent", zh: "毛巾可以租" },
              { en: "peak hours", zh: "高峰时段" },
            ],
            alternativeExpressions: [
              { textEn: "Bathrooms are down the hall. Showers are free, towels you can rent for 2 bucks for your whole stay. Just try to keep it quick in the mornings — it gets packed between 7 and 9.", textZh: "浴室在走廊那头。淋浴免费，毛巾可以租，整个住宿期间2美元。早上尽量快点——7到9点人很多。", actionHint: "gets packed = 人挤人", frequency: "common" },
              { textEn: "Shared showers are at the end of the hall — no charge. We rent towels for $2 if you need one. Morning rush is 7 to 9, so try to keep showers under 10 minutes then.", textZh: "公共淋浴在走廊尽头——免费。需要毛巾的话2美元租。早高峰7到9点，那时候淋浴尽量10分钟以内。", actionHint: "morning rush = 早高峰", frequency: "common" },
            ],
            casualVersion: "Shared bathrooms are down the hall. Showers are free, towels are two bucks for your whole stay if you wanna rent one. Try to keep showers under 10 mins during busy times, like 7-9 AM.",
            formalityVariants: {
              casual: "Shared bathrooms are down the hall. Showers are free, towels are two bucks for your whole stay if you wanna rent one. Try to keep showers under 10 mins during busy times, like 7-9 AM.",
              standard: "Shared bathrooms are at the end of the hallway. Showers are free, and towels are available for rent — $2 for your whole stay. Please keep shower time under 10 minutes during peak hours, mornings between 7 and 9.",
              formal: "The shared bathroom facilities are located at the end of the hallway. Showers are complimentary, and towels are available for rental at a cost of $2 for the entirety of your stay. During peak hours, specifically between 7 AM and 9 AM, we kindly request that you limit your shower time to under 10 minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll rent a towel, please. Is checkout just returning the key card?",
            textZh: "那租一条毛巾。退房就是还门卡吗？",
            casualVersion: "Okay, I'll get a towel. Is checkout just dropping off the key card?",
            commonMistake: {
              wrong: "Is checkout just return the key card?",
              correct: "Is checkout just returning the key card?",
              explanation: "动词 'return' 在这里需要用动名词 'returning'。",
            },
            formalityVariants: {
              casual: "Okay, I'll get a towel. Is checkout just dropping off the key card?",
              standard: "I'll rent a towel, please. Is checkout just returning the key card?",
              formal: "I would like to rent a towel, please. Is the checkout procedure simply returning the key card?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yep, just drop off the key card and towel at the front desk before 11 AM. We'll refund your deposit on the spot. Have a great stay — and don't miss our free walking tour at 10 AM every morning!",
            textZh: "对，11点前把门卡和毛巾还到前台就行。押金当场退给你。祝你住得开心——每天早上10点有免费的步行导览，别错过哦！",
            keyPhrases: [
              { en: "drop off", zh: "归还" },
              { en: "before 11 AM", zh: "11点之前" },
              { en: "refund your deposit", zh: "退还押金" },
              { en: "free walking tour", zh: "免费步行导览" },
            ],
            alternativeExpressions: [
              { textEn: "Just bring the card and towel back to the desk by 11 and you're good. We'll hand back your deposit right then. Oh, and we do a free walking tour every morning at 10 — you should totally check it out!", textZh: "11点前把卡和毛巾拿回前台就行。押金当场退。哦对了，每天早上10点有免费步行导览——你一定要去看看！", actionHint: "you're good = 就行了/就没问题了；check it out = 去看看", frequency: "common" },
              { textEn: "Checkout's easy — card and towel at the front desk before 11 AM. Deposit goes straight back to you. And hey, don't miss our free walking tour at 10 every day!", textZh: "退房很简单——11点前卡和毛巾交到前台。押金直接退给你。还有，别错过每天10点的免费步行导览！", actionHint: "goes straight back to you = 直接退给你", frequency: "common" },
            ],
            casualVersion: "Yep, just drop the key card and towel at the front desk by 11 AM. We'll give you your deposit back right then. Have fun — and don't miss the free walking tour, 10 AM every morning!",
            formalityVariants: {
              casual: "Yep, just drop the key card and towel at the front desk by 11 AM. We'll give you your deposit back right then. Have fun — and don't miss the free walking tour, 10 AM every morning!",
              standard: "Yep, just drop off the key card and towel at the front desk before 11 AM. We'll refund your deposit on the spot. Have a great stay — and don't miss our free walking tour at 10 AM every morning!",
              formal: "Yes, simply return the key card and towel to the front desk prior to 11 AM. Your deposit will be refunded immediately. We hope you have a pleasant stay and encourage you not to miss our complimentary walking tour, which commences daily at 10 AM.",
            },
          },
        ],
      },
      // --- Flow 2: 室友问题（打呼/偷东西）→找前台 ---
      {
        id: "hostel-roommate-issues",
        titleZh: "室友问题求助",
        titleEn: "Roommate Issues",
        description: "遇到室友打呼噜、噪音或丢失物品等问题，向前台求助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm in Room 3 and I'm having some trouble sleeping. One of my roommates has been snoring incredibly loudly all night.",
            textZh: "不好意思，我住在3号房，睡不着觉。有个室友打呼噜特别响，整晚都是。",
            culturalNote:
              "在青年旅舍遇到打呼的室友是非常常见的问题。自己可以准备耳塞（earplugs），也可以找前台帮忙。",
            casualVersion: "Hey, the snoring in Room 3 is insane. I literally can't sleep.",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm sorry to hear that. Unfortunately, snoring is pretty common in dorms. We do have free earplugs — would you like a pair? If it's really unbearable, I can check if there's an empty bed in another room.",
            textZh: "很抱歉听到这个。不幸的是，宿舍里打呼噜很常见。我们有免费耳塞——要一副吗？如果实在受不了，我可以看看其他房间有没有空床位。",
            keyPhrases: [
              { en: "earplugs", zh: "耳塞" },
              { en: "unbearable", zh: "受不了的/无法忍受的" },
              { en: "empty bed in another room", zh: "其他房间的空床位" },
            ],
            isBranchPoint: true,
            responseTip: "可以先试耳塞，不行再要求换房间",
            alternativeExpressions: [
              { textEn: "Oof, yeah, that's the worst. Snoring's tough in dorms. Want some earplugs? We've got free ones. Or if you really can't deal, I might be able to find you a bed somewhere else.", textZh: "唉，是啊，那最烦了。宿舍里打呼真没办法。要耳塞吗？我们有免费的。或者你实在受不了的话，我看看能不能给你找个别的床位。", actionHint: "that's the worst = 那是最糟糕的；can't deal = 受不了", frequency: "common" },
              { textEn: "I'm sorry, that's a common complaint unfortunately. I can give you earplugs — they work pretty well. Otherwise, I can see if there's a spot open in another room.", textZh: "抱歉，这是个常见问题。我可以给你耳塞——效果还不错。不然我看看其他房间有没有空位。", actionHint: "spot open = 有空位", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the earplugs, but honestly I'd prefer to move if possible. I have three more nights here.",
            textZh: "耳塞给我一副，但如果可以的话我还是想换房间。我还要住三晚呢。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Let me check... Room 7 has an empty bottom bunk. It's a 4-bed room so it's a bit quieter. I can move you there right now. Same key card will work after I update it.",
            textZh: "我查一下……7号房有一个空的下铺。是4人间，会安静一些。我现在就可以帮你换过去。门卡我更新一下就能用。",
            keyPhrases: [
              { en: "4-bed room", zh: "4人间" },
              { en: "move you there", zh: "帮你换过去" },
              { en: "update it", zh: "更新一下（门卡）" },
            ],
            alternativeExpressions: [
              { textEn: "Let me see... Room 7 has a free bottom bunk. It's only a 4-bed so way quieter. I can switch you right now — same key card, I'll just reprogram it.", textZh: "我看看……7号房有个空下铺。只有4个人所以安静多了。我现在就给你换——同一张门卡，重新编程一下就行。", actionHint: "reprogram = 重新编程", frequency: "common" },
              { textEn: "Good news — there's an open bed in a 4-person room. Bottom bunk too. Want me to move you over? I can update your card in a sec.", textZh: "好消息——有个4人间有空床。也是下铺。要给你换过去吗？卡我一下子就能更新好。", actionHint: "in a sec = 一下子就好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be great, thanks. Actually, there's another issue I wanted to mention. I think something was taken from my bag yesterday. My portable charger is missing.",
            textZh: "那太好了，谢谢。另外还有一件事想说。我觉得昨天有人动了我的包。我的充电宝不见了。",
            culturalNote:
              "虽然青年旅舍盗窃不常见，但确实会发生。贵重物品一定要锁在储物柜里。报告时用 \"I think\" 比 \"someone stole\" 更得体。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm really sorry to hear that. Was it in your locker or just in your bag by the bed?",
            textZh: "真的很抱歉。它是在储物柜里还是放在床边包里的？",
            keyPhrases: [
              { en: "in your locker", zh: "在储物柜里" },
              { en: "by the bed", zh: "在床边" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, I'm sorry. Was it locked up in your locker, or was it just sitting in your bag?", textZh: "哦不，很抱歉。它锁在储物柜里了还是就放在包里？", actionHint: "just sitting in your bag = 就放在包里没锁", frequency: "common" },
              { textEn: "That's really unfortunate. Do you remember — did you have it in the locker or was it out by your bed?", textZh: "那真是太不幸了。你记得吗——是放在储物柜里还是放在床边了？", actionHint: "was it out = 放在外面", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It was in my backpack next to the bed. I hadn't put it in the locker yet.",
            textZh: "在床边的背包里。我还没来得及放进储物柜。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "OK, I understand. First, let me check our lost and found — sometimes things get mixed up or moved by housekeeping. I'll also check the security camera in the hallway. Can you describe what it looks like?",
            textZh: "好的，我明白了。首先我查一下失物招领处——有时候东西会被搞混或者被保洁移动了。我也会看一下走廊的监控。你能描述一下它的样子吗？",
            keyPhrases: [
              { en: "lost and found", zh: "失物招领处" },
              { en: "mixed up", zh: "搞混了" },
              { en: "housekeeping", zh: "保洁" },
              { en: "security camera", zh: "监控摄像头" },
            ],
            alternativeExpressions: [
              { textEn: "Alright, let me check the lost and found first — stuff gets moved around by cleaning crew sometimes. I'll also pull up the hallway cameras. What does it look like?", textZh: "好的，我先查一下失物招领——保洁有时候会把东西挪来挪去。我也调一下走廊监控。它长什么样？", actionHint: "pull up = 调出来看；cleaning crew = 保洁团队", frequency: "common" },
              { textEn: "Let me look into it. Sometimes things end up in lost and found — the cleaners might've moved it. I can also check the security footage. Can you tell me what it looks like?", textZh: "我查一下。有时候东西会出现在失物招领处——保洁可能挪了。我也能查监控录像。你能描述一下它的样子吗？", actionHint: "end up in = 最终出现在；footage = 录像", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's a small white power bank, about the size of a phone. Anker brand, with a blue logo.",
            textZh: "是一个白色的小充电宝，手机大小。Anker品牌的，有蓝色的logo。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Got it. I'll look into it and get back to you within a couple of hours. For the future, I'd strongly recommend keeping all electronics in your locker. If we can't find it, I can help you file a report — you might need it for travel insurance.",
            textZh: "记下了。我查一下，两个小时内回复你。以后建议把所有电子设备都锁进储物柜。如果找不到，我可以帮你填一份报告——你的旅行保险可能用得到。",
            keyPhrases: [
              { en: "look into it", zh: "调查一下" },
              { en: "get back to you", zh: "回复你" },
              { en: "file a report", zh: "提交/填写报告" },
              { en: "travel insurance", zh: "旅行保险" },
            ],
            culturalNote:
              "如果有旅行保险，遗失/被盗物品需要正式的报告（report）才能理赔。有些情况可能还需要去当地警局报案（police report）。",
            alternativeExpressions: [
              { textEn: "I'll check around and get back to you in a couple hours. Going forward, keep your electronics locked up. If it doesn't turn up, I can help you fill out an incident report — might need it for insurance.", textZh: "我四处查一下，两个小时内回复你。以后电子设备都锁好。如果找不到，我可以帮你填一份事件报告——保险可能用得到。", actionHint: "check around = 四处查一下；turn up = 找到/出现", frequency: "common" },
              { textEn: "Give me a couple hours to dig into this. And yeah, for the future, definitely lock up all your stuff. If we can't track it down, we'll get you a report for your travel insurance.", textZh: "给我几个小时查一下。以后确实要把东西都锁好。如果找不到，我们会给你一份报告用于旅行保险。", actionHint: "dig into = 深入调查；track it down = 追踪到", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you, I really appreciate your help. I'll make sure to lock everything up from now on.",
            textZh: "谢谢你，真的很感激你的帮助。以后我一定把东西锁好。",
            casualVersion: "Thanks so much. Lesson learned — locking everything up from now on.",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No worries. I'll send you a message on the app once I have an update. And I've moved your reservation to Room 7 — you can go settle in whenever you're ready.",
            textZh: "没关系。有消息了我通过App通知你。你的预订已经换到7号房了——什么时候方便都可以搬过去。",
            keyPhrases: [
              { en: "send you a message", zh: "给你发消息" },
              { en: "settle in", zh: "安顿下来" },
              { en: "whenever you're ready", zh: "什么时候方便都行" },
            ],
            alternativeExpressions: [
              { textEn: "All good. I'll ping you on the app if I hear anything. You're all set for Room 7 — head over whenever.", textZh: "没事。有消息了我App上通知你。7号房已经安排好了——什么时候过去都行。", actionHint: "ping you = 通知你；head over = 过去", frequency: "common" },
              { textEn: "No problem at all. I'll message you with an update. And your new room's ready — Room 7, go whenever you like.", textZh: "完全没问题。有进展了给你发消息。你的新房间已经好了——7号房，什么时候去都行。", actionHint: "with an update = 有进展的时候", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 短租公寓 ====================
  {
    id: "accommodation-rental",
    category: "accommodation",
    titleZh: "短租公寓入住",
    titleEn: "Short-term Rental",
    description: "短租公寓的签约入住、了解设施规则、报修流程等完整场景",
    otherRole: "物业管理员",
    otherRoleIcon: "🏢",
    flows: [
      // --- Flow 1: 签约入住+了解设施/规则/垃圾分类 ---
      {
        id: "rental-move-in",
        titleZh: "签约入住",
        titleEn: "Move-in & Orientation",
        description: "到达短租公寓后签合同、交接钥匙、了解大楼设施和住户规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm Li Wei. I'm here for the key handover for Unit 4B. We spoke on the phone yesterday.",
            textZh: "你好，我是李伟。来拿4B单元的钥匙的。我们昨天电话联系过。",
            culturalNote:
              "短租公寓通常通过物业管理员（property manager）交接，不一定见到房东本人。提前电话确认到达时间是好习惯。",
            casualVersion: "Hey, I'm Li Wei — here for the keys to 4B.",
            commonMistake: {
              wrong: "I am Li Wei, I come to get the key for Unit 4B.",
              correct: "Hi, I'm Li Wei. I'm here for the key handover for Unit 4B.",
              explanation: "Chinese speakers often translate '来拿' literally. 'I'm here for/to' 更自然。",
            },
            formalityVariants: {
              casual: "Hey, I'm Li Wei. Here for the 4B keys. We talked yesterday.",
              standard: "Hi, I'm Li Wei. I'm here for the key handover for Unit 4B. We spoke on the phone yesterday.",
              formal: "Good morning/afternoon, my name is Li Wei. I'm here regarding the key handover for Unit 4B. We had a conversation yesterday by telephone.",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "Hi Li Wei, welcome! Before we go up, I'll need you to sign the lease agreement and the building rules acknowledgment. I have the documents right here.",
            textZh: "你好李伟，欢迎！上楼之前，需要你签一下租赁合同和大楼规则确认书。文件我都准备好了。",
            keyPhrases: [
              { en: "lease agreement", zh: "租赁合同" },
              { en: "building rules acknowledgment", zh: "大楼规则确认书" },
              { en: "sign", zh: "签字" },
            ],
            variations: [
              {
                textEn: "Welcome! Let's do the paperwork first. I'll need your signature on the rental contract and the house rules.",
                textZh: "欢迎！我们先办手续。需要你在租赁合同和住户规则上签字。",
              },
            ],
            responseTip: "签字前仔细阅读合同，特别是租金、押金和退房条款",
            alternativeExpressions: [
              { textEn: "Hey Li Wei! So before we head up, I've got some paperwork for you — just the lease and a form acknowledging the building rules. Won't take long.", textZh: "嗨李伟！上去之前我这有些文件要签——就是租约和一份确认大楼规则的表格。不会太久。", actionHint: "won't take long = 不会太久", frequency: "common" },
              { textEn: "Welcome! Let's get the boring stuff out of the way first — lease agreement and building rules sign-off. I've got everything right here.", textZh: "欢迎！先把无聊的手续办了——租赁合同和大楼规则签字。文件都在这儿。", actionHint: "get it out of the way = 先把（不想做的事）处理掉；sign-off = 签字确认", frequency: "common" },
            ],
            casualVersion: "Welcome! Let's get the paperwork done first. Need your signature on the rental contract and house rules.",
            formalityVariants: {
              casual: "Welcome! Let's do the paperwork. Need your signature on the contract and rules.",
              standard: "Welcome! Let's do the paperwork first. I'll need your signature on the rental contract and the house rules.",
              formal: "Welcome. We'll begin with the necessary documentation. I will require your signature on both the rental agreement and the established house rules.",
            },
          },
          {
            speaker: "you",
            textEn: "Sure. Let me read through it first. Can you explain the security deposit policy?",
            textZh: "好的，我先看一下。能说明一下押金政策吗？",
            culturalNote:
              "签合同前一定要仔细阅读，特别关注deposit（押金）、cancellation（取消政策）和damage（损坏赔偿）条款。不明白就问。",
            casualVersion: "Okay. Lemme read it first. What's the deal with the security deposit?",
            commonMistake: {
              wrong: "What is the security deposit policy?",
              correct: "Can you explain the security deposit policy?",
              explanation: "'explain' 更自然，直接问 'What is...' 有时听起来像在考问。",
            },
            formalityVariants: {
              casual: "Okay, lemme read it first. Can you explain the deposit?",
              standard: "Sure. Let me read through it first. Can you explain the security deposit policy?",
              formal: "Certainly. I would appreciate the opportunity to review the documents thoroughly. Could you please elaborate on the security deposit policy?",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "Of course. The security deposit is one month's rent — $1,800. It covers any damages beyond normal wear and tear. You'll get it back within 14 business days after your move-out inspection, minus any deductions if needed.",
            textZh: "当然。押金是一个月的租金——1800美元。用于覆盖超出正常磨损的任何损坏。搬出检查后14个工作日内退还，如有需要会扣除相应费用。",
            keyPhrases: [
              { en: "one month's rent", zh: "一个月租金" },
              { en: "normal wear and tear", zh: "正常磨损" },
              { en: "move-out inspection", zh: "搬出检查" },
              { en: "deductions", zh: "扣除" },
              { en: "business days", zh: "工作日" },
            ],
            alternativeExpressions: [
              { textEn: "Sure. It's one month's rent for the deposit — so $1,800. Covers anything beyond normal wear. You get it back within two weeks of moving out, as long as nothing's damaged.", textZh: "好的。押金是一个月租金——1800美元。覆盖正常磨损以外的损坏。搬出后两周内退还，只要没有损坏。", actionHint: "as long as = 只要", frequency: "common" },
              { textEn: "The deposit's equal to one month — $1,800. It's there in case there's damage beyond the usual stuff. After your move-out walk-through, you'll have it back in about 14 business days.", textZh: "押金等于一个月租金——1800美元。是为了以防有超出正常使用的损坏。搬出验房后，大概14个工作日退还。", actionHint: "the usual stuff = 正常的磨损；walk-through = 验房检查", frequency: "common" },
            ],
            casualVersion: "Sure. It's one month's rent—1,800 bucks. Covers any major damage. You'll get it back in like two weeks after you move out, less any deductions.",
            formalityVariants: {
              casual: "Sure. It's one month's rent—1,800 bucks. Covers major damage. Get it back in like two weeks after move-out, minus any deductions.",
              standard: "Of course. The security deposit is one month's rent — $1,800. It covers any damages beyond normal wear and tear. You'll get it back within 14 business days after your move-out inspection, minus any deductions if needed.",
              formal: "Certainly. The security deposit is equivalent to one month's rent, totaling $1,800. This is to cover any damages incurred beyond ordinary wear and tear. The deposit will be returned to you within 14 business days following your move-out inspection, subject to any necessary deductions.",
            },
          },
          {
            speaker: "you",
            textEn: "OK, that sounds fair. I've signed everything. Can we go see the apartment now?",
            textZh: "好的，听起来合理。我都签好了。我们现在可以去看公寓了吗？",
            casualVersion: "Sounds good. Everything's signed. Can we see the place now?",
            commonMistake: {
              wrong: "OK, that sounds fair. I finished signing all documents. Can we go see the apartment now?",
              correct: "OK, that sounds fair. I've signed everything. Can we go see the apartment now?",
              explanation: "'I've signed everything' 比 'I finished signing' 更地道和简洁。",
            },
            formalityVariants: {
              casual: "Sounds good. Everything's signed. Can we see the place now?",
              standard: "OK, that sounds fair. I've signed everything. Can we go see the apartment now?",
              formal: "Very well, that sounds perfectly acceptable. I have completed signing all required documents. May we proceed to view the apartment at your convenience?",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "Let's go! Here are your two keys — the silver one is for the main entrance downstairs, and the gold one is for your unit. The mailbox key is the small one. Your mailbox is number 4B in the lobby.",
            textZh: "走吧！这是你的两把钥匙——银色的是楼下大门的，金色的是你房间的。小钥匙是信箱的。你的信箱在大厅里，编号4B。",
            keyPhrases: [
              { en: "main entrance", zh: "大门/正门" },
              { en: "unit", zh: "单元/房间" },
              { en: "mailbox", zh: "信箱" },
              { en: "lobby", zh: "大厅" },
            ],
            alternativeExpressions: [
              { textEn: "Alright, here's your keys. Silver one's for the building, gold one's for your unit. Oh, and the little one — that's your mailbox. Box 4B, down in the lobby.", textZh: "好了，这是你的钥匙。银色的开楼门，金色的开你的房间。哦，小的那个——是你的信箱。4B号，在大厅楼下。", actionHint: "down in the lobby = 在下面大厅里", frequency: "common" },
              { textEn: "Here you go — two keys plus a mailbox key. The bigger silver one is the main entrance, gold is your apartment. Mailbox is in the lobby, number 4B.", textZh: "给你——两把钥匙加一把信箱钥匙。大的银色的是大门，金色的是你的公寓。信箱在大厅，编号4B。", actionHint: "here you go = 给你", frequency: "common" },
            ],
            casualVersion: "Alright, let's head up! Here are your keys: silver's for downstairs entrance, gold's for your unit. Little one's for the mailbox, it's 4B in the lobby.",
            formalityVariants: {
              casual: "Alright, let's head up! Keys: silver for downstairs, gold for your unit. Small one's for mailbox 4B in the lobby.",
              standard: "Let's go! Here are your two keys — the silver one is for the main entrance downstairs, and the gold one is for your unit. The mailbox key is the small one. Your mailbox is number 4B in the lobby.",
              formal: "Excellent, let us proceed. Here are your keys: the silver key grants access to the main entrance on the ground floor, and the gold key is for your specific unit. The smaller key is for your mailbox, which is designated as 4B and located in the main lobby.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. What are the building rules I should know about?",
            textZh: "明白了。有什么大楼规定需要了解的？",
            casualVersion: "Got it. Any building rules I should know?",
            commonMistake: {
              wrong: "What building rules I need to know?",
              correct: "What are the building rules I should know about?",
              explanation: "'I should know about' 比 'I need to know' 更地道和客气。",
            },
            formalityVariants: {
              casual: "Got it. Any building rules I should know?",
              standard: "Got it. What are the building rules I should know about?",
              formal: "Understood. Could you please inform me of any important building regulations or guidelines?",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "A few important ones: no noise after 10 PM, no smoking anywhere in the building including balconies, and no guests staying overnight without prior notice. The laundry room in the basement is open from 7 AM to 10 PM — it's coin-operated, $2 per wash and $1.50 per dry.",
            textZh: "几个重要的：晚上10点以后不能有噪音，全楼禁烟包括阳台，留宿客人需要提前通知。地下室的洗衣房早7点到晚10点开放——投币式的，洗一次2美元，烘干1.5美元。",
            keyPhrases: [
              { en: "no noise after 10 PM", zh: "10点后不能有噪音" },
              { en: "no smoking", zh: "禁烟" },
              { en: "overnight guests", zh: "留宿的客人" },
              { en: "prior notice", zh: "提前通知" },
              { en: "coin-operated", zh: "投币式的" },
            ],
            culturalNote:
              "欧美公寓大多全楼禁烟，连阳台和公共区域也不行。违反可能被罚款甚至终止租约。",
            alternativeExpressions: [
              { textEn: "Main things: keep it down after 10, absolutely no smoking anywhere — not even the balcony. And if you have someone sleeping over, give us a heads-up. Laundry's in the basement, runs on quarters — 2 bucks to wash, buck fifty to dry.", textZh: "主要的：10点以后小声，任何地方绝对禁烟——阳台也不行。有人留宿的话提前打个招呼。洗衣房在地下室，投硬币——洗2美元，烘1.5美元。", actionHint: "keep it down = 小声点；give us a heads-up = 提前告知我们；runs on quarters = 投25美分硬币", frequency: "common" },
              { textEn: "Few rules to know: quiet after 10 PM, no smoking in the building at all, and let us know if you're having overnight guests. There's a coin laundry downstairs — open 7 to 10.", textZh: "几个规定要知道：晚10后保持安静，全楼禁烟，留宿客人提前通知我们。楼下有投币洗衣房——7点到10点开放。", actionHint: "coin laundry = 投币洗衣房", frequency: "common" },
            ],
            casualVersion: "Okay, big ones: no noise after 10. No smoking anywhere, even balconies. No overnight guests without a heads-up. Laundry's in the basement, 7 AM to 10 PM, coin-op, two bucks a wash, dollar-fifty a dry.",
            formalityVariants: {
              casual: "Big ones: no noise after 10. No smoking anywhere, even balconies. No overnight guests without notice. Laundry's basement, 7 AM-10 PM, coin-op, $2 wash, $1.50 dry.",
              standard: "A few important ones: no noise after 10 PM, no smoking anywhere in the building including balconies, and no guests staying overnight without prior notice. The laundry room in the basement is open from 7 AM to 10 PM — it's coin-operated, $2 per wash and $1.50 per dry.",
              formal: "Certainly, there are several key regulations. Firstly, a quiet hour policy is enforced after 10 PM. Secondly, smoking is strictly prohibited throughout the entire building, including all balconies. Additionally, any overnight guests must be registered with prior notification. The laundry facility, located in the basement, operates from 7 AM to 10 PM daily. It is coin-operated, with a charge of $2 per wash cycle and $1.50 per dry cycle.",
            },
          },
          {
            speaker: "you",
            textEn: "What about garbage? How does trash and recycling work here?",
            textZh: "垃圾怎么处理？这里的垃圾分类是怎样的？",
            casualVersion: "Garbage? How's trash and recycling handled?",
            culturalNote: "美国垃圾分类比中国复杂，常细分普通、回收和堆肥。",
            formalityVariants: {
              casual: "Garbage? How's trash and recycling handled?",
              standard: "What about garbage? How does trash and recycling work here?",
              formal: "Regarding waste management, could you please explain the procedures for trash disposal and recycling here?",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "There are three bins in the trash room at the end of the hallway on each floor. Black bin for general waste, blue for recyclables — paper, plastic, glass, and metal. Green bin is for compost — food scraps and yard waste. Please break down all cardboard boxes before putting them in recycling.",
            textZh: "每层走廊尽头的垃圾间有三个桶。黑色是普通垃圾，蓝色是可回收物——纸、塑料、玻璃和金属。绿色是堆肥——厨余和庭院废物。纸箱请拆平后再放入回收桶。",
            keyPhrases: [
              { en: "general waste", zh: "普通垃圾" },
              { en: "recyclables", zh: "可回收物" },
              { en: "compost", zh: "堆肥/厨余" },
              { en: "food scraps", zh: "厨余/食物残渣" },
              { en: "break down cardboard boxes", zh: "把纸箱拆平" },
            ],
            culturalNote:
              "垃圾分类在很多欧美城市是强制的，分错可能被罚款。compost（堆肥）在美国西海岸城市如旧金山、西雅图很常见。",
            alternativeExpressions: [
              { textEn: "Trash room's at the end of each hallway. Black bin for regular garbage, blue for recycling, green for food waste and compost. Oh, and flatten your boxes before tossing them in recycling.", textZh: "垃圾间在每层走廊尽头。黑桶普通垃圾，蓝桶回收，绿桶厨余堆肥。哦，纸箱压扁了再扔回收桶。", actionHint: "flatten = 压扁；tossing = 扔", frequency: "common" },
              { textEn: "Each floor's got a trash room — can't miss it, end of the hall. Three bins: black for trash, blue for recyclables, green for compost. Make sure to break down any cardboard.", textZh: "每层都有垃圾间——走廊尽头，很好找。三个桶：黑色普通垃圾，蓝色可回收，绿色堆肥。纸箱一定要拆平。", actionHint: "break down = 拆平/拆解", frequency: "common" },
            ],
            casualVersion: "Okay, three bins in the trash room, end of the hall, each floor. Black for regular trash, blue for recycling (paper, plastic, glass, metal). Green's for compost (food, yard waste). And make sure to flatten cardboard boxes for recycling.",
            formalityVariants: {
              casual: "Three bins in the trash room, end of hall, each floor. Black for trash, blue for recycling (paper, plastic, glass, metal). Green for compost (food, yard waste). Flatten cardboard boxes for recycling.",
              standard: "There are three bins in the trash room at the end of the hallway on each floor. Black bin for general waste, blue for recyclables — paper, plastic, glass, and metal. Green bin is for compost — food scraps and yard waste. Please break down all cardboard boxes before putting them in recycling.",
              formal: "You will find three designated bins in the trash room, located at the end of the hallway on each floor. The black bin is for general waste, the blue bin is for recyclables—comprising paper, plastic, glass, and metal. The green bin is for compostable materials, such as food scraps and yard waste. Kindly ensure all cardboard boxes are flattened prior to placing them in the recycling bin.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks for the thorough walkthrough. If I have any questions later, what's the best way to reach you?",
            textZh: "谢谢你这么详细的介绍。以后有问题的话，怎么联系你最方便？",
            casualVersion: "Thanks for showing me around. If I got questions later, how's best to reach you?",
            commonMistake: {
              wrong: "If I have any questions later, how to contact you?",
              correct: "If I have any questions later, what's the best way to reach you?",
              explanation: "'reach you' 比 'contact you' 更口语化、自然。",
            },
            formalityVariants: {
              casual: "Thanks for the walkthrough. If I got questions later, how's best to reach you?",
              standard: "Thanks for the thorough walkthrough. If I have any questions later, what's the best way to reach you?",
              formal: "Thank you for the comprehensive overview. Should any further questions arise, what would be the most convenient method to contact you?",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "You can text or call me at this number — I usually respond within an hour during business hours. For emergencies after hours, like a burst pipe or power outage, there's a 24-hour emergency line posted on the bulletin board in the lobby.",
            textZh: "你可以给这个号码发短信或打电话——工作时间内我通常一小时内回复。下班后的紧急情况，比如水管爆裂或停电，大厅公告栏上有24小时紧急电话。",
            keyPhrases: [
              { en: "within an hour", zh: "一小时内" },
              { en: "business hours", zh: "工作时间" },
              { en: "burst pipe", zh: "水管爆裂" },
              { en: "power outage", zh: "停电" },
              { en: "emergency line", zh: "紧急电话" },
              { en: "bulletin board", zh: "公告栏" },
            ],
            alternativeExpressions: [
              { textEn: "Best way is to text or call me — I'm pretty quick during work hours. After hours, if it's an emergency like a pipe burst or the power goes out, there's a 24/7 number on the board in the lobby.", textZh: "最好发短信或打电话——工作时间我回复很快。下班后如果是紧急情况比如水管爆了或停电，大厅公告栏上有24小时电话。", actionHint: "pretty quick = 相当快", frequency: "common" },
              { textEn: "Just shoot me a text anytime. I usually get back to people within an hour. For after-hours emergencies — flooding, power out, that kind of thing — there's an emergency number posted downstairs.", textZh: "随时给我发短信就行。我通常一小时内回复。下班后的紧急情况——水灾、停电之类的——楼下贴着紧急电话号码。", actionHint: "shoot me a text = 给我发条短信", frequency: "common" },
            ],
            casualVersion: "Just text or call me here—I usually get back to you within an hour during business hours. For after-hours emergencies, like a burst pipe or power's out, there's a 24/7 emergency line on the lobby's bulletin board.",
            formalityVariants: {
              casual: "Text or call me here—I usually respond within an hour during business hours. For after-hours emergencies (burst pipe, power out), 24/7 line's on the lobby bulletin board.",
              standard: "You can text or call me at this number — I usually respond within an hour during business hours. For emergencies after hours, like a burst pipe or power outage, there's a 24-hour emergency line posted on the bulletin board in the lobby.",
              formal: "You may contact me via text message or phone call at this provided number; I typically respond within one hour during standard business hours. For any after-hours emergencies, such as a burst pipe or a power outage, a 24-hour emergency contact number is prominently displayed on the bulletin board in the main lobby.",
            },
          },
        ],
      },
      // --- Flow 2: 维修问题（水管/电器）→报修流程 ---
      {
        id: "rental-maintenance",
        titleZh: "报修流程",
        titleEn: "Maintenance Requests",
        description: "公寓水管漏水、电器故障等问题的报修沟通流程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, this is Li Wei in Unit 4B. I've got a problem — the kitchen faucet is leaking pretty badly. There's water pooling under the sink.",
            textZh: "你好，我是4B的李伟。有个问题——厨房水龙头漏水漏得挺严重。水槽下面积水了。",
            culturalNote:
              "报修时描述要清楚具体：什么东西坏了、在哪里、严重程度。这样维修效率最高。",
            casualVersion: "Hey, it's Li Wei from 4B. My kitchen faucet is leaking everywhere — water all under the sink.",
            commonMistake: {
              wrong: "I have a problem — kitchen faucet is leaking seriously.",
              correct: "I've got a problem — the kitchen faucet is leaking pretty badly.",
              explanation: "“I have a problem”虽然语法正确，但口语中常用“I’ve got a problem”。“seriously”在这里不如“pretty badly”自然。",
            },
            formalityVariants: {
              casual: "Hey, Li Wei from 4B. My kitchen faucet's leaking bad. Water's pooling under the sink.",
              standard: "Hi, this is Li Wei in Unit 4B. I've got a problem — the kitchen faucet is leaking pretty badly. There's water pooling under the sink.",
              formal: "Good morning/afternoon. This is Li Wei from Unit 4B. I am contacting you regarding a significant issue with the kitchen faucet. It appears to be leaking quite severely, and there is a considerable amount of water accumulating beneath the sink.",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "Oh, that's not good. Is it a steady drip or more like a stream? And is the water coming from the faucet itself or from the pipes underneath?",
            textZh: "哦，那不太好。是一直在滴还是像水流一样？水是从龙头本身漏的还是下面的管道？",
            keyPhrases: [
              { en: "steady drip", zh: "持续滴水" },
              { en: "stream", zh: "水流" },
              { en: "faucet", zh: "水龙头" },
              { en: "pipes underneath", zh: "下面的管道" },
            ],
            responseTip: "尽量准确描述漏水的位置和程度，方便维修人员判断问题",
            alternativeExpressions: [
              { textEn: "Yikes. Is it like a drip or is it really flowing? And where exactly — the faucet itself or the pipes below?", textZh: "哎呀。是滴水还是真在流？具体在哪——龙头本身还是下面的管道？", actionHint: "yikes = 哎呀（表示担心）", frequency: "common" },
              { textEn: "Oh no. OK, how bad is it — just dripping or like a steady leak? Is the water coming from up top or from underneath the sink?", textZh: "哦不。好吧，严重吗——只是滴水还是持续漏？水是从上面来的还是从水槽下面？", actionHint: "how bad is it = 有多严重", frequency: "common" },
            ],
            casualVersion: "Ugh, not good. Is it dripping or like, a stream? And, water from the faucet or the pipes under it?",
            commonMistake: {
              wrong: "Is it dripping little by little or flowing like water? And is water coming from the faucet or pipes under it?",
              correct: "Is it a steady drip or more like a stream? And is the water coming from the faucet itself or from the pipes underneath?",
              explanation: "“steady drip”和“stream”是更地道的描述水流状态的词汇。",
            },
            formalityVariants: {
              casual: "Ugh, not good. Is it dripping or like, a stream? And, water from the faucet or the pipes under it?",
              standard: "Oh, that's not good. Is it a steady drip or more like a stream? And is the water coming from the faucet itself or from the pipes underneath?",
              formal: "I understand. To clarify, is the leakage a consistent drip, or is it manifesting as a more continuous stream? Furthermore, could you ascertain if the water is originating directly from the faucet mechanism or from the plumbing connections beneath it?",
            },
          },
          {
            speaker: "you",
            textEn: "It seems to be coming from the pipe connection under the sink, not the faucet itself. It's more than a drip — there's a small but steady stream of water.",
            textZh: "看起来是从水槽下面的管道连接处漏的，不是龙头本身。不只是滴水——是一小股持续的水流。",
            casualVersion: "Looks like it's from the pipe connection under the sink, not the faucet. It's more than a drip, like a small, steady stream.",
            commonMistake: {
              wrong: "It seems to be from the pipe under the sink, not faucet. It's more than drip — it's a small but steady water flow.",
              correct: "It seems to be coming from the pipe connection under the sink, not the faucet itself. It's more than a drip — there's a small but steady stream of water.",
              explanation: "“pipe connection”比“pipe”更具体。形容水流用“stream of water”比“water flow”更自然。",
            },
            formalityVariants: {
              casual: "Looks like it's from the pipe connection under the sink, not the faucet. It's more than a drip, like a small, steady stream.",
              standard: "It seems to be coming from the pipe connection under the sink, not the faucet itself. It's more than a drip — there's a small but steady stream of water.",
              formal: "The leakage appears to be originating from the pipe connection located beneath the sink, rather than the faucet mechanism itself. It is exhibiting more than a mere drip; specifically, it presents as a small yet continuous stream of water.",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "OK, that could be a loose connection or a worn gasket. For now, can you turn off the valve under the sink? It should be a small round knob — turn it clockwise to shut off the water to that faucet.",
            textZh: "好的，可能是连接处松了或者垫圈磨损了。现在你能先关一下水槽下面的阀门吗？是一个小圆形旋钮——顺时针转就能关掉那个龙头的水。",
            keyPhrases: [
              { en: "loose connection", zh: "连接松了" },
              { en: "worn gasket", zh: "垫圈磨损" },
              { en: "valve", zh: "阀门" },
              { en: "clockwise", zh: "顺时针" },
              { en: "shut off the water", zh: "关掉水" },
            ],
            responseTip: "先按指示关闭阀门止水，减少损失",
            alternativeExpressions: [
              { textEn: "Sounds like it might be a bad gasket or a loose fitting. Can you do me a favor and shut off the valve under the sink? Little round handle — righty-tighty.", textZh: "听起来可能是垫圈坏了或者接头松了。能帮个忙把水槽下面的阀门关了吗？一个小圆把手——顺时针拧紧。", actionHint: "righty-tighty = 向右拧紧（口诀：右紧左松）", frequency: "common" },
              { textEn: "That could be a loose connection. For now, turn off the water — there should be a shutoff valve right under the sink. Just twist it clockwise till it stops.", textZh: "可能是连接处松了。先把水关了——水槽正下面应该有个截止阀。顺时针拧到底就行。", actionHint: "shutoff valve = 截止阀；twist it = 拧它", frequency: "common" },
            ],
            casualVersion: "Okay, could be a loose connection or a bad gasket. For now, can you shut off the valve under the sink? It's usually a small round knob – turn it clockwise to cut the water to that faucet.",
            commonMistake: {
              wrong: "OK, you can turn off the switch under the sink? It's a small round knob — turn it to the right to shut off the water.",
              correct: "OK, can you turn off the valve under the sink? It should be a small round knob — turn it clockwise to shut off the water to that faucet.",
              explanation: "“switch”指开关，而水管上的是“valve”（阀门）。“clockwise”比“to the right”更准确。",
            },
            formalityVariants: {
              casual: "Okay, could be a loose connection or a bad gasket. For now, can you shut off the valve under the sink? It's usually a small round knob – turn it clockwise to cut the water to that faucet.",
              standard: "OK, that could be a loose connection or a worn gasket. For now, can you turn off the valve under the sink? It should be a small round knob — turn it clockwise to shut off the water to that faucet.",
              formal: "Understood. This suggests a potential issue with either a loose connection or a deteriorated gasket. As an immediate measure, would you be able to close the shut-off valve located beneath the sink? It is typically identified as a small, circular knob; please rotate it in a clockwise direction to isolate the water supply to the faucet in question.",
            },
          },
          {
            speaker: "you",
            textEn: "Done — I turned it off and the leaking has stopped. When can someone come fix it?",
            textZh: "搞定了——关上了，不漏了。什么时候能来修？",
            casualVersion: "Done — turned it off, leaking stopped. When can someone fix it?",
            commonMistake: {
              wrong: "Done — I turned it off and no more leaking. When can fix it?",
              correct: "Done — I turned it off and the leaking has stopped. When can someone come fix it?",
              explanation: "“no more leaking”不如“the leaking has stopped”自然。通常会包含主语“someone”或“they”来指代维修人员。",
            },
            formalityVariants: {
              casual: "Done — turned it off, leaking stopped. When can someone fix it?",
              standard: "Done — I turned it off and the leaking has stopped. When can someone come fix it?",
              formal: "It is now completed; I have successfully turned off the valve, and the leakage has ceased. Could you please inform me of the earliest available time for a repair technician to address this issue?",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "I'll submit a work order right now. Our plumber is usually available within 24 hours for non-emergency issues. I'll try to get him there tomorrow morning. Can you be home between 9 and 12?",
            textZh: "我现在就提交报修单。非紧急问题的话，水管工通常24小时内可以来。我尽量安排他明天上午来。你9点到12点在家吗？",
            keyPhrases: [
              { en: "work order", zh: "报修单/维修工单" },
              { en: "plumber", zh: "水管工" },
              { en: "within 24 hours", zh: "24小时内" },
              { en: "non-emergency", zh: "非紧急" },
            ],
            culturalNote:
              "美国维修通常给一个时间段（window）而非精确时间，如 \"between 9 and 12\"。在这个时间段内你需要在家等候。",
            alternativeExpressions: [
              { textEn: "I'll put in a work order now. Our plumber can usually get there within a day. How about tomorrow morning — can you be around between 9 and noon?", textZh: "我现在就下工单。我们的水管工通常一天内能到。明天上午怎么样——你9点到中午能在家吗？", actionHint: "put in a work order = 提交工单；be around = 在附近/在家", frequency: "common" },
              { textEn: "I'm filing the repair request right now. The plumber should be available tomorrow — probably morning, 9 to 12 window. Will you be home?", textZh: "我现在就提交维修请求。水管工应该明天能来——大概上午，9到12的时间段。你在家吗？", actionHint: "window = 时间窗口/时间段", frequency: "common" },
            ],
            casualVersion: "I'll put in a work order now. Plumber's usually available within 24 for non-emergencies. I'll try to get him there tomorrow morning. You home between 9 and 12?",
            commonMistake: {
              wrong: "I will make a repair order right now. Plumber usually can come within 24 hours. Can you be at home between 9 and 12?",
              correct: "I'll submit a work order right now. Our plumber is usually available within 24 hours for non-emergency issues. Can you be home between 9 and 12?",
              explanation: "“submit a work order”是更地道的表达。“available within 24 hours”更自然。口语中“be home”比“be at home”更常见。",
            },
            formalityVariants: {
              casual: "I'll put in a work order now. Plumber's usually available within 24 for non-emergencies. I'll try to get him there tomorrow morning. You home between 9 and 12?",
              standard: "I'll submit a work order right now. Our plumber is usually available within 24 hours for non-emergency issues. I'll try to get him there tomorrow morning. Can you be home between 9 and 12?",
              formal: "I will initiate a work order immediately. For non-emergency maintenance requests, our plumber is typically available within a 24-hour timeframe. I will endeavor to schedule his visit for tomorrow morning. Would you be present at your residence between 9 AM and 12 PM?",
            },
          },
          {
            speaker: "you",
            textEn: "9 to 12 works. While I have you, the dishwasher has also been acting up. It stops mid-cycle and shows an error code — \"E3\" on the display.",
            textZh: "9到12点可以。趁你在，洗碗机也有问题。它会在运行中途停掉，显示屏上显示错误代码「E3」。",
            casualVersion: "Sure. Oh, and the dishwasher's been weird too — stops halfway and flashes 'E3'.",
            commonMistake: {
              wrong: "9 to 12 OK. While I have you, the dishwasher has problem. It stops in the middle and shows an error code.",
              correct: "9 to 12 works. While I have you, the dishwasher has also been acting up. It stops mid-cycle and shows an error code — \\",
              explanation: "“works”比“OK”更自然。“acting up”指机器出故障，比“has problem”更地道。“mid-cycle”比“in the middle”更精确。",
            },
            formalityVariants: {
              casual: "9 to 12 works. Oh, and while I gotcha, the dishwasher's been acting up too. Stops mid-cycle, shows an error code.",
              standard: "9 to 12 works. While I have you, the dishwasher has also been acting up. It stops mid-cycle and shows an error code — \\",
              formal: "The timeframe of 9 AM to 12 PM is suitable. Additionally, while we are on the line, I wish to report that the dishwasher has also been malfunctioning. It frequently ceases operation mid-cycle and displays an error code.",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "E3 usually means a drainage problem. Have you checked the drain filter at the bottom of the dishwasher? It might be clogged with food particles. Pull it out, clean it, and try running it again.",
            textZh: "E3通常表示排水问题。你检查过洗碗机底部的排水滤网吗？可能被食物残渣堵住了。把它拉出来清理一下，再试试运行。",
            keyPhrases: [
              { en: "drainage problem", zh: "排水问题" },
              { en: "drain filter", zh: "排水滤网" },
              { en: "clogged", zh: "堵住了" },
              { en: "food particles", zh: "食物残渣" },
            ],
            alternativeExpressions: [
              { textEn: "E3 is usually a drain issue. Have a look at the filter in the bottom of the machine — it probably needs cleaning. Pull it out, rinse it off, and give it another shot.", textZh: "E3通常是排水问题。看一下机器底部的滤网——大概需要清洗。拉出来冲一下，再试一次。", actionHint: "give it another shot = 再试一次", frequency: "common" },
              { textEn: "That error code means the drain's blocked. Check the bottom of the dishwasher — there's a little filter down there. It gets gunked up with food. Clean it out and try running it again.", textZh: "那个错误代码表示排水堵了。看看洗碗机底部——下面有个小滤网。会被食物残渣堵住。清理一下再试。", actionHint: "gunked up = 被粘糊糊的东西堵住了（很口语）", frequency: "occasional" },
            ],
            casualVersion: "E3 usually means a drainage issue. You check the drain filter at the bottom? Might be clogged with food. Pull it out, clean it, and try running it again.",
            commonMistake: {
              wrong: "E3 usually means drainage problem. Did you check the filter at the bottom of the dishwasher? It might be dirty with food. Pull it out, clean it, and try again.",
              correct: "E3 usually means a drainage problem. Have you checked the drain filter at the bottom of the dishwasher? It might be clogged with food particles. Pull it out, clean it, and try running it again.",
              explanation: "“drainage problem”更具体。使用“drain filter”更准确。形容脏污，用“clogged with food particles”比“dirty with food”更地道和具体。",
            },
            formalityVariants: {
              casual: "E3 usually means a drainage issue. You check the drain filter at the bottom? Might be clogged with food. Pull it out, clean it, and try running it again.",
              standard: "E3 usually means a drainage problem. Have you checked the drain filter at the bottom of the dishwasher? It might be clogged with food particles. Pull it out, clean it, and try running it again.",
              formal: "An E3 code typically indicates a drainage malfunction. May I inquire if you have inspected the drain filter situated at the base of the dishwasher? It is possible it has become obstructed by food particles. I recommend removing, cleaning, and then reattempting to operate the appliance.",
            },
          },
          {
            speaker: "you",
            textEn: "I didn't know that was a thing. I'll clean it and try again. If it still doesn't work, can the plumber take a look at that too?",
            textZh: "我不知道还有这个。我清理一下再试。如果还是不行，水管工来的时候能一起看看吗？",
            casualVersion: "Didn't know that was a thing! I'll clean it and try again. If it still doesn't work, can the plumber check that out too?",
            commonMistake: {
              wrong: "I didn't know this. I'll clean it and try again. If it still doesn't work, can plumber check that too?",
              correct: "I didn't know that was a thing. I'll clean it and try again. If it still doesn't work, can the plumber take a look at that too?",
              explanation: "“I didn't know that was a thing”是更自然的口语表达。在疑问句中，通常会加上冠词“the”或“a”。“take a look at”比“check”更口语化和礼貌。",
            },
            formalityVariants: {
              casual: "Didn't know that was a thing! I'll clean it and try again. If it still doesn't work, can the plumber check that out too?",
              standard: "I didn't know that was a thing. I'll clean it and try again. If it still doesn't work, can the plumber take a look at that too?",
              formal: "I was not aware of that particular maintenance requirement. I will proceed to clean it and re-test the appliance. Should the issue persist, would it be possible for the plumber to examine the dishwasher as well during his visit?",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "Absolutely, I'll add it to the work order. Just so you know, repairs for appliances that came with the unit are covered by the landlord — you don't pay anything. But if there's damage from misuse, that might come out of your deposit.",
            textZh: "当然，我加到报修单里。跟你说一下，公寓自带的电器维修费用由房东承担——你不用付钱。但如果是使用不当造成的损坏，可能会从押金里扣。",
            keyPhrases: [
              { en: "covered by the landlord", zh: "由房东承担" },
              { en: "appliances that came with the unit", zh: "公寓自带的电器" },
              { en: "damage from misuse", zh: "使用不当造成的损坏" },
              { en: "come out of your deposit", zh: "从押金里扣" },
            ],
            culturalNote:
              "在欧美租房中，房东有义务维修房屋自带的设施和电器（除非租客过错导致）。这是租客的合法权益。",
            alternativeExpressions: [
              { textEn: "For sure, I'll add it to the ticket. Just so you know, anything that came with the apartment — appliances, fixtures — repairs are on the landlord. But if something breaks because of misuse, that could come out of your deposit.", textZh: "当然，我加到工单里。跟你说一下，公寓自带的东西——电器、固定装置——维修费房东出。但如果是使用不当造成的，可能从押金扣。", actionHint: "on the landlord = 由房东承担；fixtures = 固定装置", frequency: "common" },
              { textEn: "No problem, I'll note that down. And don't worry about the cost — built-in appliances are the landlord's responsibility to fix. Only thing you'd pay for is if there's damage from improper use.", textZh: "没问题，我记下来。费用别担心——内置电器是房东负责修的。你需要付费的只有使用不当造成的损坏。", actionHint: "note that down = 记下来", frequency: "common" },
            ],
            casualVersion: "Yeah, for sure, I'll add it to the work order. FYI, repairs for appliances that came with the unit are covered by the landlord – you don't pay a thing. But if it's damage from misuse, that might come out of your deposit.",
            commonMistake: {
              wrong: "Just let you know, repairs for appliances that came with the unit are paid by landlord — you don't need to pay. But if there's damage from wrong use, that might come out of your deposit.",
              correct: "Just so you know, repairs for appliances that came with the unit are covered by the landlord — you don't pay anything. But if there's damage from misuse, that might come out of your deposit.",
              explanation: "“Just so you know”是地道的表达，而非直译“Just let you know”。“covered by the landlord”比“paid by landlord”更准确。“misuse”是更专业的词语，而非“wrong use”。",
            },
            formalityVariants: {
              casual: "Yeah, for sure, I'll add it to the work order. FYI, repairs for appliances that came with the unit are covered by the landlord – you don't pay a thing. But if it's damage from misuse, that might come out of your deposit.",
              standard: "Absolutely, I'll add it to the work order. Just so you know, repairs for appliances that came with the unit are covered by the landlord — you don't pay anything. But if there's damage from misuse, that might come out of your deposit.",
              formal: "Certainly, I will append this to the existing work order. Please be advised that repairs for appliances originally provided with the unit are the landlord's responsibility, and you will incur no charge. However, any damage resulting from misuse may be deducted from your security deposit.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. Will I get a confirmation for the work order?",
            textZh: "了解了。报修单我会收到确认吗？",
            casualVersion: "Good to know. Get a confirmation for the work order?",
            commonMistake: {
              wrong: "I know now. Will I get a confirmation of the work order?",
              correct: "Good to know. Will I get a confirmation for the work order?",
              explanation: "“Good to know”是比“I know now”更自然的口语回应。通常用“confirmation for”而不是“confirmation of”。",
            },
            formalityVariants: {
              casual: "Good to know. Get a confirmation for the work order?",
              standard: "Good to know. Will I get a confirmation for the work order?",
              formal: "Thank you for that information. Will I receive a confirmation regarding the work order?",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "Yes, I'll email you a confirmation with the work order number and the scheduled time. The plumber will also call you 30 minutes before he arrives. If you need to reschedule, just text me and we'll find another time.",
            textZh: "会的，我会邮件发给你确认信，包含报修单号和预约时间。水管工到达前30分钟也会给你打电话。如果需要改时间，给我发短信就行。",
            keyPhrases: [
              { en: "confirmation", zh: "确认信" },
              { en: "work order number", zh: "报修单号" },
              { en: "scheduled time", zh: "预约时间" },
              { en: "reschedule", zh: "改时间/重新预约" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, I'll email you a confirmation with the work order number and time slot. The plumber will give you a ring about 30 minutes out. Need to change anything, just text me.", textZh: "会的，我会邮件发确认信，包含工单号和时间段。水管工到前30分钟会给你打电话。有什么要改的给我发短信就行。", actionHint: "give you a ring = 给你打电话（口语）；30 minutes out = 到之前30分钟", frequency: "common" },
              { textEn: "I'll send over a confirmation email with all the details — order number, time, everything. He'll call before he shows up. If the timing doesn't work, just let me know and we'll reschedule.", textZh: "我会发一封确认邮件，所有细节都有——工单号、时间、全部信息。他来之前会打电话。如果时间不合适告诉我，我们改时间。", actionHint: "shows up = 出现/到达", frequency: "common" },
            ],
            casualVersion: "Yep, I'll email you a confirmation with the work order number and time. Plumber'll call you 30 mins before he gets there. If you gotta reschedule, just text me, and we'll figure out another time.",
            commonMistake: {
              wrong: "Yes, I'll email you a confirmation with the work order number and appointed time. The plumber will also call you 30 minutes in advance. If you need to reschedule, send me a message and we'll find another time.",
              correct: "Yes, I'll email you a confirmation with the work order number and the scheduled time. The plumber will also call you 30 minutes before he arrives. If you need to reschedule, just text me and we'll find another time.",
              explanation: "“scheduled time”比“appointed time”更常用。“before he arrives”比“in advance”更自然地描述了即将发生的事情。“text me”是口语中更地道的说法。",
            },
            formalityVariants: {
              casual: "Yep, I'll email you a confirmation with the work order number and time. Plumber'll call you 30 mins before he gets there. If you gotta reschedule, just text me, and we'll figure out another time.",
              standard: "Yes, I'll email you a confirmation with the work order number and the scheduled time. The plumber will also call you 30 minutes before he arrives. If you need to reschedule, just text me and we'll find another time.",
              formal: "Yes, I will send you an email confirmation containing the work order number and the scheduled appointment time. The plumber will also contact you approximately 30 minutes prior to his arrival. Should you need to reschedule, kindly send me a text message, and we will arrange an alternative time.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 露营 ====================
  {
    id: "accommodation-camping",
    category: "accommodation",
    titleZh: "露营",
    titleEn: "Camping",
    description: "在国外露营地预订营位、租借装备、了解营地规则和周边环境",
    otherRole: "营地管理员",
    otherRoleIcon: "⛺",
    flows: [
      // --- Flow 1: 预订营位+租装备+了解规则 ---
      {
        id: "camping-checkin",
        titleZh: "预订营位与装备",
        titleEn: "Campsite Booking & Equipment",
        description: "到达营地后办理入住、租借露营装备、了解营地设施和规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we'd like to book a campsite for two nights. Do you have anything available?",
            textZh: "你好，我们想预订一个营位住两晚。还有空位吗？",
            casualVersion: "Hey, any campsites open for tonight and tomorrow?",
          },
          {
            speaker: "them",
            role: "营地管理员",
            textEn: "Welcome! Let me check... We have a few tent sites available — Site 14 is next to the river, and Site 22 is closer to the bathhouse. Tent sites are $30 per night. We also have RV sites with hookups for $50 if you need electricity.",
            textZh: "欢迎！我看看……还有几个帐篷位——14号营位靠河边，22号营位离浴室近一些。帐篷位每晚30美元。如果需要电源，我们也有带接口的房车位，每晚50美元。",
            keyPhrases: [
              { en: "tent sites", zh: "帐篷位" },
              { en: "bathhouse", zh: "浴室/公共淋浴间" },
              { en: "RV sites", zh: "房车位" },
              { en: "hookups", zh: "（水电）接口" },
            ],
            culturalNote: "美国露营地分 tent site（帐篷位）和 RV site（房车位）。hookups 指水、电、排污的接口。很多国家公园露营地需要提前数月预订。",
            alternativeExpressions: [
              { textEn: "Hey! Yeah, we've got a few spots open. Site 14 is right along the river — nice and scenic. Site 22 is closer to the showers. Tent sites run $30 a night. If you need power, RV spots are $50 with full hookups.", textZh: "嘿！是的，还有几个位子。14号就在河边——风景很好。22号离淋浴近。帐篷位每晚30。需要电的话，房车位50带全套接口。", actionHint: "run $30 = 要30美元（口语表达价格）；nice and scenic = 风景很好", frequency: "common" },
              { textEn: "Welcome! Let me pull up what's available... We've got tent sites at $30 a night and RV sites with hookups at $50. Site 14 has a great river view if you're interested.", textZh: "欢迎！我看看有什么空的……帐篷位每晚30美元，带接口的房车位50美元。14号有很棒的河景，如果你感兴趣的话。", actionHint: "pull up = 调出/查看", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Site 14 by the river sounds great. We actually don't have camping gear — do you rent equipment here?",
            textZh: "河边的14号营位听起来不错。我们其实没有露营装备——这里可以租吗？",
          },
          {
            speaker: "them",
            role: "营地管理员",
            textEn: "We do! We rent two-person tents for $20 per night, sleeping bags for $10 each, sleeping pads for $5, and a basic cooking set with a portable stove for $15. I'd also recommend a lantern for $5 — it gets really dark out here at night.",
            textZh: "可以的！双人帐篷每晚20美元，睡袋每个10美元，防潮垫每个5美元，带便携炉的基础炊具套装15美元。还推荐租一个营灯5美元——这里晚上真的很黑。",
            keyPhrases: [
              { en: "two-person tent", zh: "双人帐篷" },
              { en: "sleeping bags", zh: "睡袋" },
              { en: "sleeping pads", zh: "防潮垫" },
              { en: "portable stove", zh: "便携炉" },
              { en: "lantern", zh: "营灯" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! Two-person tent is 20 a night, sleeping bags are 10 each, pads are 5 each, and we've got a cook kit with a camp stove for 15. Oh, grab a lantern too — five bucks. Trust me, it's pitch black out here.", textZh: "没问题！双人帐篷每晚20，睡袋每个10，防潮垫每个5，还有带营地炉的炊具套装15。哦，带个营灯——5块。相信我，这里晚上漆黑一片。", actionHint: "pitch black = 漆黑一片；grab = 拿/买一个", frequency: "common" },
              { textEn: "Absolutely! Tents, sleeping bags, pads, cooking gear — we rent it all. For two people you're looking at about $20 for the tent, $10 per sleeping bag, $5 per pad. I'd throw in a lantern too — it gets seriously dark at night.", textZh: "当然！帐篷、睡袋、防潮垫、炊具——我们都租。两个人的话大概帐篷20，每个睡袋10，每个防潮垫5。我建议加个营灯——晚上真的很黑。", actionHint: "you're looking at = 大约需要；throw in = 建议加上", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll take the tent, two sleeping bags, two pads, and the lantern. What about firewood — can we make a campfire?",
            textZh: "我们要帐篷、两个睡袋、两个防潮垫和营灯。柴火呢——可以生篝火吗？",
          },
          {
            speaker: "them",
            role: "营地管理员",
            textEn: "Campfires are allowed in the designated fire rings only — every site has one. Firewood bundles are $8 each at the camp store. Please don't bring outside firewood — it can carry invasive insects. And make sure to fully extinguish your fire before going to sleep. We have a bucket at each site for water.",
            textZh: "只能在指定的火圈里生篝火——每个营位都有一个。柴火捆在营地商店卖，每捆8美元。请不要带外面的柴火——可能携带入侵性昆虫。睡觉前一定要把火完全扑灭。每个营位都有一个水桶。",
            keyPhrases: [
              { en: "fire rings", zh: "火圈/篝火坑" },
              { en: "firewood bundles", zh: "柴火捆" },
              { en: "camp store", zh: "营地商店" },
              { en: "invasive insects", zh: "入侵性昆虫" },
              { en: "fully extinguish", zh: "完全扑灭" },
            ],
            culturalNote: "美国国家公园和州立公园有严格的防火规定。干旱季节可能完全禁止生火（fire ban）。外来柴火禁令是为了防止松木甲虫等害虫传播。",
            alternativeExpressions: [
              { textEn: "Yeah, campfires are fine — just keep 'em in the fire ring at your site. Wood's $8 a bundle at the store. One thing — don't bring your own firewood from outside, bugs and all that. And make sure the fire's dead out before you hit the sack.", textZh: "可以，篝火没问题——就在你营位的火圈里烧。柴火在商店8块一捆。一件事——别从外面带柴火，怕有虫子。睡觉前确保火完全熄灭。", actionHint: "dead out = 完全熄灭；hit the sack = 去睡觉", frequency: "common" },
              { textEn: "Fires are allowed in the fire pits only. Pick up firewood at the camp store for 8 bucks a bundle — and please, no outside wood. We're really strict about that because of invasive species. Just make sure it's fully out before bed.", textZh: "只能在火坑里烧。营地商店买柴火8美元一捆——请不要带外面的柴火。这方面我们很严格，因为入侵物种的问题。睡前确保完全扑灭。", actionHint: "fire pits = 火坑；invasive species = 入侵物种", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Understood. What about wildlife? Should we be worried about bears?",
            textZh: "明白了。野生动物方面呢？需要担心熊吗？",
          },
          {
            speaker: "them",
            role: "营地管理员",
            textEn: "We do have black bears in the area, but they're generally not aggressive. The most important rule is: NEVER leave food outside your tent or in your car with the windows down. We have bear-proof food lockers at each site — store ALL food, coolers, and anything with a scent in there. That includes toothpaste and sunscreen.",
            textZh: "这一带确实有黑熊，但一般不会攻击人。最重要的规则是：绝对不要把食物放在帐篷外面或开着窗的车里。每个营位都有防熊食物柜——所有食物、保温箱和任何有气味的东西都要放进去。包括牙膏和防晒霜。",
            keyPhrases: [
              { en: "black bears", zh: "黑熊" },
              { en: "not aggressive", zh: "不会攻击人" },
              { en: "bear-proof food lockers", zh: "防熊食物柜" },
              { en: "coolers", zh: "保温箱/冷藏箱" },
              { en: "anything with a scent", zh: "任何有气味的东西" },
            ],
            alternativeExpressions: [
              { textEn: "Bears are around, yeah, but they won't bother you if you're smart about food. Number one rule: everything goes in the bear box — food, cooler, anything smelly. Even your toothpaste. Don't leave anything out.", textZh: "这一带有熊，但只要食物处理得当就没事。第一条规则：所有东西都放进防熊箱——食物、保温箱、任何有味道的东西。连牙膏都算。别把任何东西留在外面。", actionHint: "bear box = 防熊箱；won't bother you = 不会打扰你", frequency: "common" },
              { textEn: "We've got black bears in the area — nothing to panic about, but food storage is serious business. Use the bear locker at your site for ALL food and scented items. Toothpaste, sunscreen, snacks — all of it.", textZh: "这一带有黑熊——不用恐慌，但食物储存是很严肃的事。用你营位的防熊柜存放所有食物和有气味的东西。牙膏、防晒霜、零食——全部。", actionHint: "nothing to panic about = 不用恐慌；serious business = 很严肃的事", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Where are the bathrooms and showers?",
            textZh: "了解了。卫生间和淋浴在哪里？",
          },
          {
            speaker: "them",
            role: "营地管理员",
            textEn: "The bathhouse is about a 3-minute walk from your site — I'll mark it on the map. Showers are free but limited to 5 minutes to conserve water. The water is drinkable from the spigot at your site. Quiet hours are 10 PM to 6 AM. Here's your campsite map and vehicle pass. Enjoy the great outdoors!",
            textZh: "浴室离你们的营位步行大约3分钟——我在地图上给你们标出来。淋浴免费但限时5分钟，节约用水。你们营位的水龙头出的水可以直接喝。安静时间是晚上10点到早上6点。给你们营地地图和车辆通行证。好好享受大自然！",
            keyPhrases: [
              { en: "bathhouse", zh: "浴室" },
              { en: "conserve water", zh: "节约用水" },
              { en: "drinkable", zh: "可以喝的" },
              { en: "spigot", zh: "水龙头" },
              { en: "quiet hours", zh: "安静时间" },
              { en: "vehicle pass", zh: "车辆通行证" },
            ],
            alternativeExpressions: [
              { textEn: "Showers are at the bathhouse — about a 3-minute walk, I'll mark it on your map. They're free but try to keep it to 5 minutes — we're on well water. Tap at your site is safe to drink. Quiet hours 10 to 6. Here's your map and parking pass. Have fun out there!", textZh: "淋浴在浴室——走路大概3分钟，我在地图上标出来。免费但尽量5分钟内——我们用井水。你营位的水龙头可以直接喝。安静时间10到6。给你地图和停车证。好好享受！", actionHint: "on well water = 用井水；have fun out there = 在那边玩得开心", frequency: "common" },
              { textEn: "Bathhouse is a short walk — I'll circle it on the map for you. Free showers, 5-minute limit to save water. The spigot at your site has potable water. Oh, and quiet hours are 10 PM to 6 AM. Here's your camp map and vehicle pass — enjoy!", textZh: "浴室走一小段路——我在地图上给你圈出来。免费淋浴，限时5分钟节约水。你营位的水龙头是饮用水。哦，安静时间晚10到早6。给你营地地图和车辆通行证——好好享受！", actionHint: "potable water = 饮用水", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This is going to be amazing. Thank you for all the information!",
            textZh: "这一定会很棒的。谢谢你提供的信息！",
          },
        ],
      },

      // --- Flow 2: 营地问题/天气变化/提前离开 ---
      {
        id: "camping-issues",
        titleZh: "营地问题处理",
        titleEn: "Campsite Issues",
        description: "露营遇到天气变化、设备问题或需要提前离开时的沟通",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, the weather forecast says there's a big storm coming tonight. Is it safe to camp through it, or should we leave?",
            textZh: "你好，天气预报说今晚有大风暴。继续露营安全吗，还是应该离开？",
            casualVersion: "Hey, forecast says there's a big storm tonight. Safe to camp through it, or should we bail?",
            commonMistake: {
              wrong: "Weather forecast says tonight has a big storm.",
              correct: "The weather forecast says there's a big storm coming tonight.",
              explanation: "中文习惯说“今晚有”，英文通常用there is/are表示存在。",
            },
            formalityVariants: {
              casual: "Hey, forecast says big storm tonight. Safe to camp, or should we bail?",
              standard: "Hi, the weather forecast says there's a big storm coming tonight. Is it safe to camp through it, or should we leave?",
              formal: "Excuse me, I've seen the weather forecast indicating a significant storm is expected tonight. I'm inquiring if it would be advisable or safe to continue camping, or if we should consider evacuating.",
            },
          },
          {
            speaker: "them",
            role: "营地管理员",
            textEn: "Thanks for checking. We're expecting heavy rain and possible thunderstorms, but no tornado warnings. Your tent site by the river could be at risk of flooding though. I'd recommend moving to a higher site — Site 30 is on a hill and much safer in storms. No extra charge for the move.",
            textZh: "谢谢你来问。预计会有大雨和可能的雷暴，但没有龙卷风预警。你们河边的帐篷位有被淹的风险。建议转移到高处的营位——30号营位在小山上，暴风雨时安全得多。转移不额外收费。",
            keyPhrases: [
              { en: "heavy rain", zh: "大雨" },
              { en: "thunderstorms", zh: "雷暴" },
              { en: "tornado warnings", zh: "龙卷风预警" },
              { en: "at risk of flooding", zh: "有被淹的风险" },
              { en: "higher site", zh: "高处的营位" },
            ],
            alternativeExpressions: [
              { textEn: "We're issuing a severe weather advisory. I'd move you to higher ground.", textZh: "我们发布了恶劣天气提醒。建议您转移到高处。", actionHint: "听从建议转移", frequency: "occasional" },
            ],
            casualVersion: "Thanks for asking. Expecting heavy rain, maybe thunder, no tornado warnings. Your river site could flood though. I'd move you to a higher spot – Site 30's on a hill, way safer. No extra charge.",
            formalityVariants: {
              casual: "Thanks for asking. Expecting heavy rain, maybe thunder, no tornado warnings. Your river site could flood though. I'd move you to a higher spot – Site 30's on a hill, way safer. No extra charge.",
              standard: "Thanks for checking. We're expecting heavy rain and possible thunderstorms, but no tornado warnings. Your tent site by the river could be at risk of flooding though. I'd recommend moving to a higher site — Site 30 is on a hill and much safer in storms. No extra charge for the move.",
              formal: "Thank you for your inquiry. We are anticipating heavy precipitation and potential thunderstorms; however, there are no tornado warnings currently issued. Your current tent site adjacent to the river, however, does present a risk of flooding. I would strongly advise relocating to a higher elevation site; Site 30, situated on a hill, offers significantly greater safety during inclement weather. There will be no additional charge for this relocation.",
            },
          },
          {
            speaker: "you",
            textEn: "Let's move then. Also, our tent is leaking from the seam. Is there a way to fix it, or can we switch to a different tent?",
            textZh: "那我们搬吧。另外，我们的帐篷缝合处在漏水。有办法修吗，还是可以换一顶？",
            casualVersion: "Okay, let's move. Also, our tent's leaking at the seam. Can we fix it, or just swap tents?",
            commonMistake: {
              wrong: "Our tent is leaking from the sewing line.",
              correct: "Our tent is leaking from the seam.",
              explanation: "“缝合线”在英文中更常用“seam”来指衣物或帐篷的缝合处。",
            },
            formalityVariants: {
              casual: "Okay, let's move. Also, our tent's leaking at the seam. Can we fix it, or just swap tents?",
              standard: "Let's move then. Also, our tent is leaking from the seam. Is there a way to fix it, or can we switch to a different tent?",
              formal: "We agree to relocate. Furthermore, we've discovered that our current tent is experiencing a leak along the seam. We'd like to inquire if a repair is feasible, or if an exchange for an alternative tent is an option.",
            },
          },
          {
            speaker: "them",
            role: "营地管理员",
            textEn: "I have some seam sealer and waterproof tape here that might help temporarily. But given the incoming storm, I'd recommend swapping it for a different tent. We have a newer one available. I can also offer you a cabin if you'd prefer — we have one vacancy tonight at $75. It has a bed, heater, and a roof over your head.",
            textZh: "我这里有缝合密封剂和防水胶带，临时可能有帮助。但考虑到暴风雨要来，我建议换一顶帐篷。有一顶新一点的可以用。如果你们愿意的话，也可以住小木屋——今晚有一间空的，75美元。有床、暖气、有屋顶。",
            keyPhrases: [
              { en: "seam sealer", zh: "缝合密封剂" },
              { en: "waterproof tape", zh: "防水胶带" },
              { en: "swapping", zh: "换/替换" },
              { en: "cabin", zh: "小木屋" },
              { en: "vacancy", zh: "空房/空位" },
            ],
            isBranchPoint: true,
            responseTip: "暴风雨天气下，小木屋比帐篷安全得多",
            alternativeExpressions: [
              { textEn: "I've got some tape and sealer that might patch it up, but with this storm coming, I'd honestly just swap out the tent. We also have a cabin open tonight — 75 bucks, proper bed, heater, the works. Might be worth it.", textZh: "我有一些胶带和密封剂也许能补一下，但暴风雨要来了，说实话我建议换顶帐篷。我们还有一间小木屋今晚空着——75美元，正经的床、暖气、一应俱全。也许值得考虑。", actionHint: "the works = 一切/一应俱全；patch it up = 临时补一下", frequency: "common" },
              { textEn: "I can try to fix it with waterproof tape, but honestly with the storm, you'd be better off in a different tent or even a cabin. We've got one open at $75 — bed, heat, roof. Up to you.", textZh: "我可以试试用防水胶带修，但说实话暴风雨来了，换顶帐篷或者住小木屋更好。有一间空着75美元——床、暖气、屋顶。你决定。", actionHint: "you'd be better off = 你最好...；up to you = 你来决定", frequency: "common" },
            ],
            casualVersion: "Got some seam sealer and tape, might help for now. But with the storm coming, probably better to just swap tents. Got a newer one. Or hey, I can offer you a cabin if you want – got one open tonight for $75. It's got a bed, heater, and a roof, you know.",
            formalityVariants: {
              casual: "Got some seam sealer and tape, might help for now. But with the storm coming, probably better to just swap tents. Got a newer one. Or hey, I can offer you a cabin if you want – got one open tonight for $75. It's got a bed, heater, and a roof, you know.",
              standard: "I have some seam sealer and waterproof tape here that might help temporarily. But given the incoming storm, I'd recommend swapping it for a different tent. We have a newer one available. I can also offer you a cabin if you'd prefer — we have one vacancy tonight at $75. It has a bed, heater, and a roof over your head.",
              formal: "I possess some seam sealer and waterproof tape that could offer a temporary solution. However, in light of the approaching storm, I would strongly advise exchanging it for an alternative tent, as we have a newer model available. As another option, I could extend an offer for a cabin, should that be your preference. We have one vacancy this evening at a rate of $75, which includes a bed, a heating unit, and full overhead shelter.",
            },
          },
          {
            speaker: "you",
            textEn: "The cabin sounds like a much better idea with the storm coming. Can we still use the campfire ring at the cabin?",
            textZh: "暴风雨要来的话，小木屋是更好的选择。小木屋那边还可以用篝火坑吗？",
            casualVersion: "Cabin sounds way better with this storm. Can we still do a campfire there?",
            commonMistake: {
              wrong: "Cabin is a better idea.",
              correct: "The cabin sounds like a much better idea.",
              explanation: "加上\"sounds like\"会显得更自然，表示一种判断或看法。",
            },
            formalityVariants: {
              casual: "Cabin sounds way better with this storm. Can we still do a campfire there?",
              standard: "The cabin sounds like a much better idea with the storm coming. Can we still use the campfire ring at the cabin?",
              formal: "The cabin option appears to be a far more suitable solution, considering the impending storm. May we inquire if the campfire ring at the cabin site remains available for use?",
            },
          },
          {
            speaker: "them",
            role: "营地管理员",
            textEn: "No campfires during storms, unfortunately — it's a safety rule. But the cabin has a small kitchenette with a microwave and a mini fridge. You can cook inside. I'll help you move your gear over — the cabin is just a 5-minute walk from here.",
            textZh: "暴风雨期间不能生篝火——这是安全规定。但小木屋有一个小厨房，带微波炉和小冰箱。可以在里面做饭。我帮你们把装备搬过去——小木屋从这里走5分钟就到。",
            keyPhrases: [
              { en: "no campfires during storms", zh: "暴风雨期间不能生篝火" },
              { en: "kitchenette", zh: "小厨房" },
              { en: "microwave", zh: "微波炉" },
              { en: "mini fridge", zh: "小冰箱" },
            ],
            alternativeExpressions: [
              { textEn: "No open fires during a storm, sorry — safety thing. But the cabin's got a little kitchenette — microwave, mini fridge, everything you need. I'll help carry your stuff over, it's just down the path.", textZh: "暴风雨期间不能生火，抱歉——安全原因。但小木屋有个小厨房——微波炉、小冰箱，你需要的都有。我帮你把东西搬过去，就在小路那边。", actionHint: "safety thing = 安全方面的规定；down the path = 沿小路走", frequency: "common" },
              { textEn: "Can't do campfires in a storm — that's the rule. But hey, the cabin has a kitchenette so you can cook inside. Let me give you a hand with your gear — it's a quick walk.", textZh: "暴风雨不能生篝火——规定如此。但嘿，小木屋有小厨房所以你可以在里面做饭。我帮你搬装备——走几步就到。", actionHint: "give you a hand = 帮你一把；quick walk = 走几步就到", frequency: "common" },
            ],
            casualVersion: "Nah, no campfires in storms, safety rule. But the cabin's got a small kitchen, microwave, mini fridge. You can cook in there. I'll help you with your stuff – cabin's only like a 5-min walk.",
            formalityVariants: {
              casual: "Nah, no campfires in storms, safety rule. But the cabin's got a small kitchen, microwave, mini fridge. You can cook in there. I'll help you with your stuff – cabin's only like a 5-min walk.",
              standard: "No campfires during storms, unfortunately — it's a safety rule. But the cabin has a small kitchenette with a microwave and a mini fridge. You can cook inside. I'll help you move your gear over — the cabin is just a 5-minute walk from here.",
              formal: "Regrettably, campfires are prohibited during stormy conditions, as per our established safety regulations. However, the cabin is equipped with a compact kitchenette, including a microwave and a mini-refrigerator, allowing for indoor meal preparation. I would be pleased to assist you with transporting your equipment; the cabin is conveniently located approximately a five-minute walk from your current position.",
            },
          },
          {
            speaker: "you",
            textEn: "That's great. What's the total cost now? The tent site was $30 per night and we've already paid for two nights.",
            textZh: "太好了。现在总费用是多少？帐篷位每晚30美元，我们已经付了两晚。",
            casualVersion: "Awesome. So what's the total cost now? Tent site was $30 a night, paid for two.",
            commonMistake: {
              wrong: "How much is the total cost now?",
              correct: "What's the total cost now?",
              explanation: "英文口语中，\"What's the cost\" 比 \"How much is the cost\" 更常用。",
            },
            formalityVariants: {
              casual: "Awesome. So what's the total cost now? Tent site was $30 a night, paid for two.",
              standard: "That's great. What's the total cost now? The tent site was $30 per night and we've already paid for two nights.",
              formal: "That is excellent. Could you please clarify the revised total cost? Our tent site was $30 per night, and we have previously remitted payment for two nights.",
            },
          },
          {
            speaker: "them",
            role: "营地管理员",
            textEn: "Since the tent was leaking, I'll refund tonight's tent fee and just charge you the $75 cabin rate. You'll still keep tomorrow's tent site if the weather clears up. So the extra charge today is $45 — the difference between the cabin and what you already paid. Sound fair?",
            textZh: "因为帐篷漏水，我把今晚的帐篷费退给你，只收75美元的小木屋费用。如果明天天气好了，你们还保留明天的帐篷位。所以今天的额外费用是45美元——小木屋和已付费用的差价。合理吗？",
            keyPhrases: [
              { en: "refund", zh: "退款" },
              { en: "cabin rate", zh: "小木屋价格" },
              { en: "clears up", zh: "（天气）放晴" },
              { en: "extra charge", zh: "额外费用" },
              { en: "the difference", zh: "差价" },
            ],
            alternativeExpressions: [
              { textEn: "Tell you what — since the tent was leaking, I'll comp tonight's tent fee. Just pay the $75 cabin rate, so you owe $45 extra. Tomorrow you can go back to your tent site if the weather's nice. Fair enough?", textZh: "这样吧——帐篷漏水嘛，今晚帐篷费我免了。只付75美元小木屋费，所以你额外付45。明天天好了可以回帐篷位。公平吧？", actionHint: "comp = 免费/免单（complimentary 的缩写）；fair enough = 公平吧", frequency: "common" },
              { textEn: "Since the tent had issues, I'm not gonna charge you for tonight's tent site. The cabin is $75, minus what you already paid — so $45 on top. You still have your tent site booked for tomorrow. Sound good?", textZh: "帐篷有问题嘛，今晚帐篷位我不收了。小木屋75，减去你已经付的——所以额外45。明天帐篷位还给你留着。可以吗？", actionHint: "on top = 额外/另外", frequency: "common" },
            ],
            casualVersion: "Tent was leaking, so I'll refund tonight's tent fee and just charge you the $75 cabin. You still keep tomorrow's tent site if it clears up. So, extra $45 today – that's the difference. Sound fair?",
            culturalNote: "美国服务业常问'Sound fair?'来确认客户满意度",
            formalityVariants: {
              casual: "Tent was leaking, so I'll refund tonight's tent fee and just charge you the $75 cabin. You still keep tomorrow's tent site if it clears up. So, extra $45 today – that's the difference. Sound fair?",
              standard: "Since the tent was leaking, I'll refund tonight's tent fee and just charge you the $75 cabin rate. You'll still keep tomorrow's tent site if the weather clears up. So the extra charge today is $45 — the difference between the cabin and what you already paid. Sound fair?",
              formal: "Given the issue with the leaking tent, I will process a refund for tonight's tent fee and will only charge the $75 cabin rate. You will, however, retain your reservation for tomorrow's tent site should the weather improve. Therefore, the additional charge for today will be $45, representing the difference between the cabin rate and your previous payment. Does that arrangement seem equitable?",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds very fair. Thank you for being so flexible and helpful!",
            textZh: "很合理。谢谢你这么灵活又热心！",
            casualVersion: "Yeah, that sounds totally fair. Thanks for being so flexible and helpful!",
            commonMistake: {
              wrong: "Thank you for your flexibility and help.",
              correct: "Thank you for being so flexible and helpful!",
              explanation: "使用\"being so...\"听起来更自然，更像表扬对方的特质。",
            },
            formalityVariants: {
              casual: "Yeah, that sounds totally fair. Thanks for being so flexible and helpful!",
              standard: "That sounds very fair. Thank you for being so flexible and helpful!",
              formal: "That arrangement sounds entirely fair and reasonable. I sincerely appreciate your exceptional flexibility and assistance in this matter.",
            },
          },
          {
            speaker: "them",
            role: "营地管理员",
            textEn: "That's what we're here for. Safety first! The storm should pass by early morning. If you need anything during the night, there's an emergency phone at the office — just dial zero. Stay safe and dry!",
            textZh: "这是我们该做的。安全第一！暴风雨应该会在凌晨过去。晚上如果需要什么，办公室有紧急电话——拨零就行。注意安全，别淋湿了！",
            keyPhrases: [
              { en: "safety first", zh: "安全第一" },
              { en: "pass by", zh: "过去/结束" },
              { en: "emergency phone", zh: "紧急电话" },
              { en: "stay safe and dry", zh: "注意安全别淋湿" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help — that's what I'm here for! Storm should blow through by morning. If you need anything overnight, the office phone is right there — just dial zero. Stay warm and dry!", textZh: "很高兴能帮上忙——这是我的工作！暴风雨应该早上就过去了。晚上需要什么的话，办公室电话就在那——拨零就行。保暖别淋湿！", actionHint: "blow through = 过去/结束（指风暴）", frequency: "common" },
              { textEn: "No worries, safety comes first! The weather should clear up by sunrise. There's an emergency phone at the main office if anything comes up tonight. Hang tight and enjoy the cabin!", textZh: "别客气，安全第一！日出前天气应该就好了。如果今晚有什么事，主办公室有紧急电话。安心待在小木屋里享受吧！", actionHint: "hang tight = 安心待着；clear up = 放晴", frequency: "common" },
            ],
            casualVersion: "No problem, that's what we're here for. Safety first! Storm should be gone by early morning. If you need anything tonight, emergency phone's at the office – just dial zero. Stay safe and dry!",
            formalityVariants: {
              casual: "No problem, that's what we're here for. Safety first! Storm should be gone by early morning. If you need anything tonight, emergency phone's at the office – just dial zero. Stay safe and dry!",
              standard: "That's what we're here for. Safety first! The storm should pass by early morning. If you need anything during the night, there's an emergency phone at the office — just dial zero. Stay safe and dry!",
              formal: "It is our responsibility to ensure your well-being. Safety is paramount. The storm is anticipated to dissipate by early morning. Should you require any assistance during the night, an emergency telephone is located at the office; please dial zero to connect. I wish you a safe and dry evening.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 寄宿家庭 ====================
  {
    id: "accommodation-homestay",
    category: "accommodation",
    titleZh: "寄宿家庭",
    titleEn: "Homestay",
    description: "入住寄宿家庭，了解家规、用餐安排和文化交流",
    otherRole: "寄宿家庭主人",
    otherRoleIcon: "🏠",
    flows: [
      // --- Flow 1: 入住+了解家规+用餐 ---
      {
        id: "homestay-arrival",
        titleZh: "到达与家规",
        titleEn: "Arrival & House Rules",
        description: "到达寄宿家庭后了解房间、家规、用餐安排和日常生活",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, Mrs. Johnson? I'm Li Wei, your homestay guest. Thank you so much for having me!",
            textZh: "你好，Johnson太太？我是李伟，你的寄宿客人。非常感谢你接待我！",
            culturalNote: "初次见面时用 Mr./Mrs. + 姓氏是礼貌的。等对方说 \"Please call me [名]\" 后再用名字称呼。",
            casualVersion: "Hey, Mrs. Johnson? I'm Li Wei, your homestay guest. Thanks a ton for having me!",
            commonMistake: {
              wrong: "Thank you for host me",
              correct: "Thank you for having me",
              explanation: "中文的“接待”直接翻译成host不太自然，常用“have someone”来表达接待、款待。",
            },
            formalityVariants: {
              casual: "Hey Mrs. Johnson, I'm Li Wei, your homestay guest. Thanks for having me!",
              standard: "Hi, Mrs. Johnson? I'm Li Wei, your homestay guest. Thank you so much for having me!",
              formal: "Good afternoon, Mrs. Johnson. My name is Li Wei, and I am your homestay guest. Thank you very much for your kind hospitality.",
            },
          },
          {
            speaker: "them",
            role: "女主人",
            textEn: "Li Wei! Welcome, welcome! Come on in. Oh, please leave your shoes at the door — we're a shoes-off house. Let me show you to your room. And please, call me Karen.",
            textZh: "李伟！欢迎欢迎！快进来。哦，请在门口脱鞋——我们家里不穿鞋。我带你去看房间。还有，叫我Karen就好。",
            keyPhrases: [
              { en: "leave your shoes at the door", zh: "在门口脱鞋" },
              { en: "shoes-off house", zh: "进屋不穿鞋的家" },
              { en: "show you to your room", zh: "带你去看房间" },
              { en: "call me", zh: "叫我（名字）" },
            ],
            alternativeExpressions: [
              { textEn: "Oh Li Wei, hi! Come in, come in! Just kick your shoes off at the door — we don't wear shoes inside. I'll take you to your room. And drop the 'Mrs. Johnson' — just call me Karen!", textZh: "哦李伟，你好！进来进来！门口把鞋踢掉——我们家里不穿鞋。我带你去看房间。别叫Johnson太太了——叫我Karen就好！", actionHint: "kick your shoes off = 把鞋脱掉（很随意的说法）", frequency: "common" },
              { textEn: "You must be Li Wei! Welcome, honey. Shoes off at the door, if you don't mind. Let me give you the tour. Oh, and please — it's Karen.", textZh: "你一定是李伟！欢迎，亲爱的。进门脱鞋，如果你不介意的话。我带你参观一下。哦，叫我Karen就好。", actionHint: "honey = 亲爱的（美国中年女性常用的称呼）；give you the tour = 带你参观", frequency: "common" },
            ],
            casualVersion: "Li Wei! Welcome, welcome! Come on in. Oh, leave your shoes at the door — we're a no-shoes house. Lemme show you to your room. And please, just call me Karen.",
            culturalNote: "进屋脱鞋在美国并非普遍习俗，通常会注明或要求",
            commonMistake: {
              wrong: "Please, call my Karen.",
              correct: "And please, call me Karen.",
              explanation: "通常不说“call my Karen”，而是“call me Karen”，或者“my name is Karen”",
            },
            formalityVariants: {
              casual: "Li Wei! Welcome! Come on in. Hey, take your shoes off here, we're a no-shoes house. I'll show you your room. Just call me Karen.",
              standard: "Li Wei! Welcome, welcome! Come on in. Oh, please leave your shoes at the door — we're a shoes-off house. Let me show you to your room. And please, call me Karen.",
              formal: "Welcome, Li Wei! Please, do come in. Kindly remove your footwear at the entrance, as it is our custom to go shoeless indoors. I'll escort you to your accommodations. And please, feel free to address me by my first name, Karen.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you, Karen. The room looks lovely! Is it okay if I use the desk for studying?",
            textZh: "谢谢你，Karen。房间很漂亮！我可以用书桌学习吗？",
            casualVersion: "Thanks, Karen. Room looks great! Can I use the desk for studying?",
            commonMistake: {
              wrong: "I want to use the desk to study?",
              correct: "Is it okay if I use the desk for studying?",
              explanation: "直接说“I want to use...”听起来有些生硬，用“Is it okay if I...”更委婉礼貌。",
            },
            formalityVariants: {
              casual: "Thanks, Karen. Room looks great! Can I use the desk for studying?",
              standard: "Thank you, Karen. The room looks lovely! Is it okay if I use the desk for studying?",
              formal: "Thank you very much, Karen. The room is quite delightful. May I inquire if it would be permissible for me to utilize the desk for my studies?",
            },
          },
          {
            speaker: "them",
            role: "女主人",
            textEn: "Absolutely, the desk is all yours. Here's a spare key for the front door — please lock up if you're the last one to leave or come home late. The Wi-Fi password is on the fridge. Let me go over a few house rules.",
            textZh: "当然，书桌随便用。这是一把大门备用钥匙——如果你最后一个离开或晚回来，请锁门。Wi-Fi密码在冰箱上。我跟你说一下几条家规。",
            keyPhrases: [
              { en: "spare key", zh: "备用钥匙" },
              { en: "lock up", zh: "锁门" },
              { en: "the last one to leave", zh: "最后一个离开的人" },
              { en: "house rules", zh: "家规" },
            ],
            alternativeExpressions: [
              { textEn: "Of course, it's all yours! Here's a key to the front door — make sure to lock up if you're the last one out or you come home late. Wi-Fi info is stuck on the fridge. Oh, and I've got a few house rules to go over real quick.", textZh: "当然，随便用！这是大门钥匙——如果你最后一个出门或晚回来记得锁门。Wi-Fi信息贴在冰箱上。哦，还有几条家规快速过一下。", actionHint: "go over real quick = 快速过一下", frequency: "common" },
              { textEn: "The desk is yours, absolutely. Oh, here — spare key for the house. If you're out late, just lock the door behind you. Wi-Fi password's on the fridge. Now let me fill you in on the house rules.", textZh: "书桌随便用，当然。哦，给——房子的备用钥匙。晚回来的话记得锁门。Wi-Fi密码在冰箱上。现在跟你说一下家规。", actionHint: "fill you in on = 告诉你关于...", frequency: "common" },
            ],
            casualVersion: "Yep, desk's all yours. Here's a spare key for the front door — just lock up if you're the last one out or come home late. Wi-Fi password's on the fridge. Let me just run through some house rules.",
            commonMistake: {
              wrong: "Let me tell you some house rules.",
              correct: "Let me go over a few house rules.",
              explanation: "“go over”更自然地表达“回顾、讨论”规则，而“tell”听起来像直接命令。",
            },
            formalityVariants: {
              casual: "Yep, desk's all yours. Key for the front door — lock up if you're last out or late home. Wi-Fi's on the fridge. Let's just do some house rules.",
              standard: "Absolutely, the desk is all yours. Here's a spare key for the front door — please lock up if you're the last one to leave or come home late. The Wi-Fi password is on the fridge. Let me go over a few house rules.",
              formal: "Certainly, the desk is entirely at your disposal. I'm providing you with a spare key for the main entrance; kindly ensure the door is secured if you are the last to depart or if you return late in the evening. The Wi-Fi access credentials are affixed to the refrigerator. Now, I shall briefly review our household guidelines.",
            },
          },
          {
            speaker: "you",
            textEn: "Of course, I'd like to know the rules.",
            textZh: "当然，我想了解一下规定。",
            casualVersion: "Yeah, totally. I wanna hear the rules.",
            commonMistake: {
              wrong: "I want to know the rules.",
              correct: "I'd like to know the rules.",
              explanation: "“I want to”听起来比较直接和不礼貌，用“I'd like to”更委婉、客气。",
            },
            formalityVariants: {
              casual: "Yep, I wanna hear the rules.",
              standard: "Of course, I'd like to know the rules.",
              formal: "Certainly. I would appreciate it if you could elaborate on the house rules.",
            },
          },
          {
            speaker: "them",
            role: "女主人",
            textEn: "Nothing too strict. Breakfast is at 7:30 and dinner is at 6:30 — let me know if you won't be home for dinner so I don't make too much. You're welcome to use the kitchen to make lunch, but please clean up after yourself. The bathroom is shared — I usually shower in the morning, so evenings would be better for you. And laundry — you can do your laundry on Wednesdays. I'll show you how the washer works.",
            textZh: "不算太严格。早餐7:30，晚餐6:30——如果不回来吃晚饭提前告诉我，我好少做一些。厨房你可以随便用来做午餐，但用完请收拾干净。浴室共用——我通常早上洗澡，你晚上洗比较好。洗衣服的话，每周三可以洗。我教你用洗衣机。",
            keyPhrases: [
              { en: "let me know", zh: "提前告诉我" },
              { en: "clean up after yourself", zh: "自己收拾干净" },
              { en: "shared bathroom", zh: "共用浴室" },
              { en: "do your laundry", zh: "洗衣服" },
            ],
            culturalNote: "寄宿家庭通常包含早晚两餐。提前告知用餐计划是基本礼貌。共用空间（厨房、浴室）的使用要互相体谅。",
            alternativeExpressions: [
              { textEn: "Pretty relaxed around here. Breakfast at 7:30, dinner at 6:30 — just give me a heads-up if you're not gonna make dinner so I don't cook too much. Kitchen's yours for lunch, just tidy up. Bathroom — I shower mornings, so evenings work better for you. Laundry day is Wednesday.", textZh: "我们这儿挺随意的。早餐7:30，晚餐6:30——不来吃晚饭提前说一声，我少做点。厨房午饭随便用，收拾干净就行。浴室——我早上洗澡，你晚上洗比较好。洗衣日是周三。", actionHint: "give me a heads-up = 提前告诉我；not gonna make dinner = 不来吃晚饭", frequency: "common" },
              { textEn: "OK so, meals — breakfast is 7:30, dinner 6:30. If your plans change and you won't be here for dinner, just text me. You can use the kitchen for lunch anytime, just clean up. We share the bathroom — I'm a morning showerer, so you might wanna shower at night. Laundry's on Wednesdays.", textZh: "好，吃饭——早餐7:30，晚餐6:30。如果计划变了不来吃晚饭，给我发条短信。厨房做午饭随时可以用，收拾干净。浴室共用——我早上洗，你可能晚上洗比较好。洗衣服是周三。", actionHint: "morning showerer = 早上洗澡的人", frequency: "common" },
            ],
            casualVersion: "Nothing crazy. Breakfast at 7:30, dinner at 6:30 — just give me a heads up if you're not here for dinner so I don't cook too much. Feel free to use the kitchen for lunch, but clean up your own mess. Bathroom's shared — I usually shower in the mornings, so evenings are probably best for you. Laundry? Wednesdays. I'll show ya how the washer works.",
            commonMistake: {
              wrong: "please clean by yourself",
              correct: "please clean up after yourself",
              explanation: "“clean up after yourself”是固定表达，表示“收拾好自己制造的脏乱”。",
            },
            formalityVariants: {
              casual: "Nothing crazy. Breakfast 7:30, dinner 6:30 — heads up if you're out so I don't make extra. Kitchen's open for lunch, just clean up. Bathroom's shared; I'm mornings, so evenings for you. Laundry's Wednesdays. I'll show you the machine.",
              standard: "Nothing too strict. Breakfast is at 7:30 and dinner is at 6:30 — let me know if you won't be home for dinner so I don't make too much. You're welcome to use the kitchen to make lunch, but please clean up after yourself. The bathroom is shared — I usually shower in the morning, so evenings would be better for you. And laundry — you can do your laundry on Wednesdays. I'll show you how the washer works.",
              formal: "These guidelines are not unduly stringent. Breakfast is served at 7:30 AM and dinner at 6:30 PM; kindly inform me in advance if you anticipate not joining us for dinner, to prevent excess preparation. You are welcome to utilize the kitchen for preparing your lunch, provided you clean up thoroughly afterwards. The bathroom is a shared facility; as I typically shower in the mornings, the evenings would likely be more convenient for your use. Laundry services are available to you on Wednesdays, and I will demonstrate the operation of the washing machine.",
            },
          },
          {
            speaker: "you",
            textEn: "That all makes sense. I should mention — I'm allergic to shellfish. Will that be a problem for meals?",
            textZh: "都明白了。我需要说一下——我对贝类海鲜过敏。吃饭方面会有问题吗？",
            casualVersion: "Makes sense. Oh, quick thing — I'm allergic to shellfish. Is that gonna be an issue for meals?",
            commonMistake: {
              wrong: "I need say",
              correct: "I should mention",
              explanation: "“I need say”不地道，通常说“I need to say”或用“I should mention”更自然。",
            },
            formalityVariants: {
              casual: "Makes sense. Oh, quick thing — I'm allergic to shellfish. Gonna be a problem for food?",
              standard: "That all makes sense. I should mention — I'm allergic to shellfish. Will that be a problem for meals?",
              formal: "I understand completely. I feel it necessary to inform you that I have an allergy to shellfish. Might this present a difficulty concerning meal preparations?",
            },
          },
          {
            speaker: "them",
            role: "女主人",
            textEn: "Thanks for telling me! No shellfish, got it. I'll keep that in mind when cooking. If there's any food you really can't eat or really love, just let me know. I try to make a variety — tonight we're having chicken pot pie. Have you ever had that?",
            textZh: "谢谢你告诉我！不吃贝类海鲜，记住了。做饭的时候我会注意。如果有什么完全不能吃的或者特别喜欢吃的，跟我说就好。我尽量做不同的菜——今晚做鸡肉馅饼。你吃过吗？",
            keyPhrases: [
              { en: "keep that in mind", zh: "记住/注意" },
              { en: "a variety", zh: "各种不同的" },
              { en: "chicken pot pie", zh: "鸡肉馅饼" },
            ],
            alternativeExpressions: [
              { textEn: "Oh good to know — no shellfish, I'll remember that. If there's anything else you can't eat or anything you really like, just tell me! I try to mix it up. Tonight I'm making chicken pot pie — ever had it?", textZh: "哦好的记住了——不吃贝类。如果还有什么不能吃的或者特别喜欢吃的，告诉我就好！我尽量换着做。今晚做鸡肉馅饼——你吃过吗？", actionHint: "mix it up = 换着花样做", frequency: "common" },
              { textEn: "No worries at all! I'll steer clear of shellfish. Let me know your favorites too — I love to cook! We're having chicken pot pie tonight, by the way. Have you tried it before?", textZh: "完全没问题！我会避开贝类。你喜欢吃什么也告诉我——我喜欢做饭！对了今晚做鸡肉馅饼。你以前试过吗？", actionHint: "steer clear of = 避开/远离", frequency: "common" },
            ],
            casualVersion: "Thanks for the heads up! No shellfish, got it. I'll remember that when I cook. If there's anything else you really can't eat or totally love, just tell me. I try to mix it up — tonight's chicken pot pie. Ever had it?",
            commonMistake: {
              wrong: "I get it.",
              correct: "Got it.",
              explanation: "“Got it”在口语中表示“明白了”，比“I get it”更常见和自然。",
            },
            formalityVariants: {
              casual: "Thanks for the heads up! No shellfish, got it. I'll remember. Any other food you can't stand or love, just say. I try to mix it up — tonight's chicken pot pie. Ever had it?",
              standard: "Thanks for telling me! No shellfish, got it. I'll keep that in mind when cooking. If there's any food you really can't eat or really love, just let me know. I try to make a variety — tonight we're having chicken pot pie. Have you ever had that?",
              formal: "Thank you for informing me. I have noted your allergy to shellfish and will certainly bear that in mind when preparing meals. Please do not hesitate to communicate any other dietary preferences or restrictions you may have. I endeavor to offer a diverse menu; this evening, we will be serving chicken pot pie. Have you had the pleasure of tasting that dish before?",
            },
          },
          {
            speaker: "you",
            textEn: "I haven't! I'm excited to try it. Is there anything I can help with around the house?",
            textZh: "没吃过！很期待试试。有什么我可以帮忙做的吗？",
            casualVersion: "Nope! Excited to try it. Anything I can help with around the house?",
            culturalNote: "美国人通常不会期望寄宿客人做家务，这种提议更多是礼貌",
            commonMistake: {
              wrong: "I'm looking forward to try it.",
              correct: "I'm excited to try it.",
              explanation: "“be looking forward to”后接动名词(ing)，“excited to”后接动词原形，表示迫不及待。",
            },
            formalityVariants: {
              casual: "Nope! Excited to try it. Can I help with anything around the house?",
              standard: "I haven't! I'm excited to try it. Is there anything I can help with around the house?",
              formal: "I have not yet had that experience! I am quite eager to sample it. Is there anything I might assist with around the residence?",
            },
          },
          {
            speaker: "them",
            role: "女主人",
            textEn: "That's very sweet of you! You don't have to do much, but helping set the table for dinner and putting your dishes in the dishwasher would be great. Oh, and one more thing — my husband David gets up very early for work, so please keep it quiet after 10 PM.",
            textZh: "你真贴心！不用做太多，但帮忙摆晚餐的碗筷和把用完的餐具放进洗碗机就很好了。哦，还有一件事——我丈夫David上班很早，所以晚上10点以后请保持安静。",
            keyPhrases: [
              { en: "set the table", zh: "摆碗筷" },
              { en: "putting dishes in the dishwasher", zh: "把餐具放进洗碗机" },
              { en: "keep it quiet", zh: "保持安静" },
            ],
            alternativeExpressions: [
              { textEn: "Aw, that's so nice of you! Just helping with the table at dinner and rinsing your dishes would be great. Oh, and my husband David's an early riser, so try to keep it quiet after 10, if you don't mind.", textZh: "哦你真好！帮忙摆晚饭的桌和把碗碟冲一下就很好了。哦，我丈夫David起得很早，所以10点以后尽量安静一点，如果你不介意的话。", actionHint: "early riser = 早起的人；rinsing = 冲洗", frequency: "common" },
              { textEn: "That's really thoughtful! Nothing big — just set the table for dinner and load your dishes in the dishwasher after. One more thing — David's up at the crack of dawn for work, so after 10 PM, keep the noise down, OK?", textZh: "你真周到！不用做大事——帮忙摆晚餐桌和把碗放进洗碗机就行。还有件事——David天一亮就起来上班，所以晚上10点以后声音小点，好吗？", actionHint: "at the crack of dawn = 天刚亮；keep the noise down = 声音小点", frequency: "common" },
            ],
            casualVersion: "That's sweet of you! You don't gotta do a lot, but if you could help set the table for dinner and put your dishes in the dishwasher, that'd be awesome. Oh, and one more thing — my husband David's up super early for work, so keep it down after 10 PM.",
            commonMistake: {
              wrong: "please be quiet after 10 PM",
              correct: "please keep it quiet after 10 PM",
              explanation: "“keep it quiet”更自然，指保持安静的状态，而“be quiet”通常是命令。",
            },
            formalityVariants: {
              casual: "That's sweet! Don't gotta do much, but setting the table for dinner and dishes in the dishwasher would be great. Oh, and my husband David's up super early, so keep it quiet after 10 PM.",
              standard: "That's very sweet of you! You don't have to do much, but helping set the table for dinner and putting your dishes in the dishwasher would be great. Oh, and one more thing — my husband David gets up very early for work, so please keep it quiet after 10 PM.",
              formal: "That is very thoughtful of you to offer! You are not obligated to undertake extensive tasks, however, assisting with setting the table for dinner and placing your used dishes into the dishwasher would be most appreciated. Additionally, please be advised that my husband, David, rises quite early for his work, so we kindly request that you maintain a quiet environment after 10 PM.",
            },
          },
          {
            speaker: "you",
            textEn: "Absolutely, no problem at all. I really appreciate your hospitality, Karen. I feel very welcome already.",
            textZh: "当然，完全没问题。真的很感谢你的热情招待，Karen。我已经感觉很受欢迎了。",
            culturalNote: "在寄宿家庭适当表达感谢很重要，但不需要过度客气。自然地融入日常生活是最好的方式。",
            casualVersion: "Totally, no prob. Really appreciate your hospitality, Karen. Already feel super welcome.",
            commonMistake: {
              wrong: "I feel welcome.",
              correct: "I feel very welcome already.",
              explanation: "“I feel welcome”虽然不错，但加上“very”和“already”能更好地表达感激和被接纳的感觉。",
            },
            formalityVariants: {
              casual: "Totally, no prob. Appreciate your hospitality, Karen. Already feel super welcome.",
              standard: "Absolutely, no problem at all. I really appreciate your hospitality, Karen. I feel very welcome already.",
              formal: "Most certainly, that poses no difficulty whatsoever. I genuinely appreciate your hospitality, Karen. I already feel exceptionally well-received.",
            },
          },
        ],
      },

      // --- Flow 2: 文化交流+冲突处理 ---
      {
        id: "homestay-cultural",
        titleZh: "文化交流与适应",
        titleEn: "Cultural Exchange & Adjustment",
        description: "和寄宿家庭进行文化交流，处理生活习惯差异和小冲突",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "女主人",
            textEn: "Li Wei, we're having some friends over for a barbecue this Saturday. Would you like to join us? They'd love to meet you!",
            textZh: "李伟，这周六我们请朋友来烧烤。你想一起参加吗？他们很想认识你！",
            keyPhrases: [
              { en: "having friends over", zh: "请朋友到家里来" },
              { en: "barbecue", zh: "烧烤" },
              { en: "join us", zh: "加入我们" },
            ],
            alternativeExpressions: [
              { textEn: "Hey Li Wei! We're throwing a barbecue this Saturday with some friends. You should totally come! They're all dying to meet you.", textZh: "嘿李伟！这周六我们办烧烤请一些朋友来。你一定要来！他们都特别想认识你。", actionHint: "throwing a barbecue = 办烧烤；dying to = 特别想", frequency: "common" },
              { textEn: "So, Saturday we're having a little cookout in the backyard with some friends. Want to join? Everyone's excited to meet our guest from China!", textZh: "这周六我们在后院跟朋友搞个小烧烤。要一起吗？大家都很期待见到我们从中国来的客人！", actionHint: "cookout = 户外烧烤聚会（美式说法）", frequency: "common" },
            ],
            casualVersion: "Hey Li Wei, we're having some friends over for a barbecue this Saturday. Wanna join? They'd love to meet ya!",
            formalityVariants: {
              casual: "Hey Li Wei, we're having friends over for a BBQ Saturday. Wanna join? They wanna meet ya!",
              standard: "Li Wei, we're having some friends over for a barbecue this Saturday. Would you like to join us? They'd love to meet you!",
              formal: "Li Wei, we are hosting a barbecue for some friends this Saturday. We would be delighted if you could join us. Our friends are very much looking forward to meeting you.",
            },
          },
          {
            speaker: "you",
            textEn: "I'd love that! Can I contribute something? Maybe I could make a Chinese dish to share?",
            textZh: "我很想去！我可以带点什么吗？也许我可以做一道中国菜分享？",
            casualVersion: "Totally! Can I bring somethin'? Maybe make a Chinese dish?",
            culturalNote: "主动提出贡献食物是美国聚餐礼仪，会给人留下好印象",
            commonMistake: {
              wrong: "I want bring something?",
              correct: "Can I contribute something?",
              explanation: "中国人常说'我想要'，但直接说 'Can I...' 更自然礼貌。",
            },
            formalityVariants: {
              casual: "Oh, totally! Can I bring somethin'? Maybe make a Chinese dish?",
              standard: "I'd love that! Can I contribute something? Maybe I could make a Chinese dish to share?",
              formal: "That would be delightful! May I inquire if there is anything I might contribute? Perhaps I could prepare a traditional Chinese dish to share?",
            },
          },
          {
            speaker: "them",
            role: "女主人",
            textEn: "That would be absolutely wonderful! Everyone would be so excited to try authentic Chinese food. The kitchen is all yours on Saturday morning. What do you need? I can pick up ingredients from the store.",
            textZh: "那太棒了！大家肯定很开心能尝到正宗的中国菜。周六早上厨房随便你用。你需要什么食材？我可以去超市买。",
            keyPhrases: [
              { en: "contribute", zh: "贡献/带东西" },
              { en: "authentic", zh: "正宗的" },
              { en: "pick up ingredients", zh: "去买食材" },
            ],
            alternativeExpressions: [
              { textEn: "Oh my gosh, that would be amazing! Everyone would flip! The kitchen's all yours Saturday morning. Just tell me what you need and I'll grab it from the store.", textZh: "天哪，那太棒了！大家会疯掉的！周六早上厨房随便用。告诉我你需要什么我去超市买。", actionHint: "would flip = 会疯掉/特别兴奋；grab it = 去买", frequency: "common" },
              { textEn: "Are you kidding? That would be incredible! People would love to try real Chinese cooking. Kitchen's yours on Saturday — what ingredients do you need? I can swing by the grocery store.", textZh: "你开玩笑吧？那太好了！大家肯定很想尝正宗中餐。周六厨房你用。你需要什么食材？我可以去趟超市。", actionHint: "swing by = 顺便去一趟", frequency: "common" },
            ],
            casualVersion: "That'd be awesome! Everyone'd be super excited to try real Chinese food. Kitchen's all yours Sat morning. Whaddya need? I can grab ingredients from the store.",
            formalityVariants: {
              casual: "Oh, that'd be awesome! Everyone'd be super excited to try real Chinese food. Kitchen's all yours Sat morning. Whaddya need? I can grab ingredients.",
              standard: "That would be absolutely wonderful! Everyone would be so excited to try authentic Chinese food. The kitchen is all yours on Saturday morning. What do you need? I can pick up ingredients from the store.",
              formal: "That would be truly magnificent! Everyone would undoubtedly be very enthusiastic to experience authentic Chinese cuisine. The kitchen facilities will be entirely at your disposal on Saturday morning. Please inform me of any ingredients you may require, and I can procure them from the store.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll make spring rolls and fried rice — they're crowd pleasers. I just need some rice paper wrappers, ground pork, and a few vegetables. I can go with you to the store if that's easier.",
            textZh: "我做春卷和炒饭——大家一般都喜欢。我需要一些春卷皮、猪肉末和几种蔬菜。如果方便的话我可以跟你一起去超市。",
            casualVersion: "I'll make spring rolls and fried rice — they're crowd pleasers. Just need some rice paper, ground pork, and a few veggies. I can go with you to the store if it's easier.",
            commonMistake: {
              wrong: "I need some rice paper wrappers, ground pork, and a few vegetables.",
              correct: "I just need some rice paper wrappers, ground pork, and a few vegetables.",
              explanation: "直接说'我需要'语气较硬，加'just'会更柔和自然。",
            },
            formalityVariants: {
              casual: "I'll make spring rolls and fried rice — they're crowd pleasers. Just need some rice paper, ground pork, and a few veggies. I can go with you to the store if it's easier.",
              standard: "I'll make spring rolls and fried rice — they're crowd pleasers. I just need some rice paper wrappers, ground pork, and a few vegetables. I can go with you to the store if that's easier.",
              formal: "I plan to prepare spring rolls and fried rice, as they are generally quite popular. I will require some rice paper wrappers, ground pork, and a selection of vegetables. I am available to accompany you to the store, should that be more convenient.",
            },
          },
          {
            speaker: "them",
            role: "女主人",
            textEn: "Let's go together — that way you can find exactly what you need. Li Wei, I also wanted to mention something. I noticed you've been cooking late at night — David said the cooking smell woke him up last night around midnight. Would it be possible to finish cooking by 10 PM?",
            textZh: "一起去吧——这样你能找到你要的东西。李伟，我还想提一件事。我注意到你一直很晚做饭——David说昨天半夜12点左右做饭的味道把他弄醒了。能不能10点之前做完饭？",
            keyPhrases: [
              { en: "I wanted to mention", zh: "我想提一下" },
              { en: "the cooking smell", zh: "做饭的味道" },
              { en: "woke him up", zh: "把他弄醒了" },
              { en: "would it be possible to", zh: "能不能/可不可以" },
            ],
            culturalNote: "寄宿家庭的主人用 \"I wanted to mention...\" 或 \"Would it be possible to...\" 是很委婉的提意见方式。认真对待并改正是最好的回应。",
            alternativeExpressions: [
              { textEn: "Let's hit the store together — easier that way. Oh, Li Wei, one thing though. David mentioned the cooking smell woke him up last night around midnight. Would you mind wrapping up in the kitchen by 10?", textZh: "一起去超市吧——那样方便。哦，李伟，有件事。David说昨晚大概12点做饭的味道把他弄醒了。你能10点前在厨房弄完吗？", actionHint: "wrapping up = 结束/收工", frequency: "common" },
              { textEn: "Perfect, let's go together! By the way, Li Wei, I hope you don't mind me bringing this up — David said the late-night cooking kind of kept him up. Think you could finish up by 10 PM?", textZh: "太好了，一起去吧！对了李伟，希望你不介意我提一下——David说深夜做饭有点影响他睡觉。你觉得能在晚上10点前做完吗？", actionHint: "bringing this up = 提起这件事；kind of = 有点", frequency: "common" },
            ],
            casualVersion: "Let's go together — that way you can find exactly what you need. Hey Li Wei, also wanted to mention something. Noticed you've been cooking late — David said the cooking smell woke him up last night around midnight. Any chance you could finish by 10 PM?",
            commonMistake: {
              wrong: "Would you not cook after 10 PM?",
              correct: "Would it be possible to finish cooking by 10 PM?",
              explanation: "'Would you not...' 听起来像命令，用 'Would it be possible to...' 更委婉。",
            },
            formalityVariants: {
              casual: "Let's go together — that way you can find exactly what you need. Hey Li Wei, also wanted to mention something. Noticed you've been cooking late — David said the smell woke him up last night around midnight. Any chance you could finish by 10 PM?",
              standard: "Let's go together — that way you can find exactly what you need. Li Wei, I also wanted to mention something. I noticed you've been cooking late at night — David said the cooking smell woke him up last night around midnight. Would it be possible to finish cooking by 10 PM?",
              formal: "We shall go together, as that will ensure you are able to locate precisely what you require. Li Wei, I also wished to bring a matter to your attention. I have observed that you have been cooking rather late in the evening; David mentioned the cooking aromas disturbed his sleep last night around midnight. Would it be possible to conclude your culinary activities by 10:00 PM?",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, I'm so sorry about that! I didn't realize the smell traveled that far. Of course, I'll make sure to finish cooking before 10. Would it help if I opened the window while cooking?",
            textZh: "哦，真的很抱歉！我不知道味道会传那么远。当然，我保证10点之前做完饭。做饭时开窗户会有帮助吗？",
            casualVersion: "Oh, super sorry about that! Didn't realize the smell went that far. Course, I'll make sure to finish before 10. Would opening the window help while cookin'?",
            commonMistake: {
              wrong: "I will finish cooking before 10.",
              correct: "Of course, I'll make sure to finish cooking before 10.",
              explanation: "加上 'Of course' 或 'Certainly' 会让承诺更真诚和礼貌。",
            },
            formalityVariants: {
              casual: "Oh, super sorry about that! Didn't realize the smell went that far. Course, I'll make sure to finish before 10. Would opening the window help while cookin'?",
              standard: "Oh, I'm so sorry about that! I didn't realize the smell traveled that far. Of course, I'll make sure to finish cooking before 10. Would it help if I opened the window while cooking?",
              formal: "My sincerest apologies for that oversight! I was unaware the aroma would permeate to such an extent. Certainly, I shall ensure to conclude my culinary preparations prior to 10:00 PM. Would it be beneficial if I were to open the window whilst cooking?",
            },
          },
          {
            speaker: "them",
            role: "女主人",
            textEn: "Opening the window and turning on the kitchen fan would be great. And please don't feel bad — it's totally normal to have different routines. That's part of living together! By the way, how are you adjusting? Is there anything you miss from home?",
            textZh: "开窗户再开厨房排风扇就好了。别不好意思——作息不同是很正常的。这是一起生活的一部分嘛！对了，你适应得怎么样？有什么想念家里的东西吗？",
            keyPhrases: [
              { en: "kitchen fan", zh: "厨房排风扇" },
              { en: "don't feel bad", zh: "别不好意思" },
              { en: "different routines", zh: "不同的作息/生活习惯" },
              { en: "adjusting", zh: "适应" },
            ],
            alternativeExpressions: [
              { textEn: "The window plus the fan should do the trick. And really, don't worry about it — it's just a learning curve! We all have different habits. So how are you doing overall? Missing anything from home?", textZh: "开窗加排风扇应该就行了。真的，别担心——这只是磨合期！大家习惯不同嘛。你总体怎么样？有想念家里的东西吗？", actionHint: "do the trick = 管用；learning curve = 磨合/适应过程", frequency: "common" },
              { textEn: "Opening the window and running the fan should help a lot. Honestly, don't sweat it — different routines are totally normal. That's part of the experience! How are you settling in? Anything you're missing from back home?", textZh: "开窗开排风扇应该很有帮助。说真的，别在意——作息不同太正常了。这就是体验的一部分！你适应得怎么样？有什么想念家乡的吗？", actionHint: "don't sweat it = 别在意/别紧张", frequency: "common" },
            ],
            casualVersion: "Opening the window and turning on the kitchen fan'd be great. And please don't feel bad — it's totally normal to have different routines. That's part of livin' together! BTW, how's it goin'? Miss anything from home?",
            formalityVariants: {
              casual: "Opening the window and turning on the kitchen fan'd be great. And please don't feel bad — it's totally normal to have different routines. That's part of livin' together! BTW, how's it goin'? Miss anything from home?",
              standard: "Opening the window and turning on the kitchen fan would be great. And please don't feel bad — it's totally normal to have different routines. That's part of living together! By the way, how are you adjusting? Is there anything you miss from home?",
              formal: "Indeed, opening the window and activating the kitchen exhaust fan would be most helpful. And please do not feel distressed — it is entirely natural for individuals to have differing routines. Such is an inherent aspect of cohabitation! Incidentally, how are you finding your adjustment? Is there anything you particularly miss from your home country?",
            },
          },
          {
            speaker: "you",
            textEn: "Everything's great, honestly! I really enjoy our dinners together. I do miss Chinese breakfast though — congee and steamed buns. The cereal and toast here is still taking some getting used to.",
            textZh: "一切都很好，真的！我很喜欢我们一起吃晚饭。不过我确实想念中式早餐——粥和包子。这里的麦片和烤面包还在慢慢适应。",
            casualVersion: "Everything's great, honestly! Really enjoy our dinners together. Do miss Chinese breakfast though — congee and steamed buns. Cereal and toast here is still takin' some gettin' used to.",
            commonMistake: {
              wrong: "I miss Chinese breakfast.",
              correct: "I do miss Chinese breakfast though.",
              explanation: "用 'I do miss' 强调想念，'though' 表示转折，语气更自然。",
            },
            formalityVariants: {
              casual: "Everything's great, honestly! Really enjoy our dinners together. Do miss Chinese breakfast though — congee and steamed buns. Cereal and toast here is still takin' some gettin' used to.",
              standard: "Everything's great, honestly! I really enjoy our dinners together. I do miss Chinese breakfast though — congee and steamed buns. The cereal and toast here is still taking some getting used to.",
              formal: "Everything is proceeding splendidly, truthfully! I genuinely appreciate our shared dinners. However, I must confess I do miss traditional Chinese breakfast fare — congee and steamed buns. The cereal and toast offered here are still requiring some adjustment on my part.",
            },
          },
          {
            speaker: "them",
            role: "女主人",
            textEn: "Oh, I can understand that! Food from home is always special. You're welcome to make your own breakfast too — if you show me how to make congee sometime, I'd love to try! In fact, David and I have been wanting to learn more about Chinese culture. Maybe you could teach us some Chinese words?",
            textZh: "哦，我理解！家乡的食物总是特别的。你也可以自己做早餐——如果你什么时候教我煮粥，我很想试试！其实，David和我一直想多了解中国文化。也许你能教我们几个中文词？",
            keyPhrases: [
              { en: "food from home", zh: "家乡的食物" },
              { en: "show me how to make", zh: "教我怎么做" },
              { en: "learn more about", zh: "多了解" },
            ],
            alternativeExpressions: [
              { textEn: "I totally get that! There's nothing like home cooking. Feel free to make your own breakfast anytime — and honestly, if you teach me how to make congee, I'm so down! David and I have been wanting to learn some Chinese too. Maybe you could teach us a few words?", textZh: "我完全理解！没有什么比得上家乡的味道。随时可以自己做早餐——说真的，你教我煮粥的话我超想学！David和我也一直想学点中文。也许你能教我们几个词？", actionHint: "I'm so down = 我超想/我非常愿意（口语）", frequency: "common" },
              { textEn: "Oh I can imagine! Comfort food is comfort food, right? You're totally welcome to cook your own breakfast. Actually — would you show me how to make that rice porridge sometime? And David and I have been dying to pick up some Chinese!", textZh: "哦我能想象！comfort food就是comfort food嘛。你完全可以自己做早餐。其实——你什么时候教我做那个粥好不好？David和我一直特别想学点中文！", actionHint: "comfort food = 让人感到温暖/怀念的食物；pick up = 学会", frequency: "common" },
            ],
            casualVersion: "Oh, I get that! Food from home's always special. You're welcome to make your own breakfast too — if you show me how to make congee sometime, I'd love to try! Actually, David and I've been wanting to learn more about Chinese culture. Maybe you could teach us some Chinese words?",
            culturalNote: "美国人很乐意尝试新文化体验，尤其是食物和语言，这体现了开放和包容。",
            formalityVariants: {
              casual: "Oh, I get that! Food from home's always special. You're welcome to make your own breakfast too — if you show me how to make congee sometime, I'd love to try! Actually, David and I've been wanting to learn more about Chinese culture. Maybe you could teach us some Chinese words?",
              standard: "Oh, I can understand that! Food from home is always special. You're welcome to make your own breakfast too — if you show me how to make congee sometime, I'd love to try! In fact, David and I have been wanting to learn more about Chinese culture. Maybe you could teach us some Chinese words?",
              formal: "Oh, I can certainly empathize with that sentiment! Culinary traditions from one's homeland always hold a particular significance. You are, of course, most welcome to prepare your own breakfast as well — should you be inclined to demonstrate the preparation of congee at some point, I would be most keen to try! Indeed, David and I have been desirous of broadening our understanding of Chinese culture. Perhaps you might be able to impart some Chinese vocabulary to us?",
            },
          },
          {
            speaker: "you",
            textEn: "I'd love to! How about this — I'll teach you a Chinese word every day at dinner. Today's word: 谢谢 — xièxie — it means 'thank you'. Xièxie for being such a wonderful host family!",
            textZh: "我很乐意！这样吧——我每天晚餐时教你们一个中文词。今天的词：谢谢——xièxie——意思是'thank you'。谢谢你们做这么好的寄宿家庭！",
            casualVersion: "Totally! How about this — I'll teach you a Chinese word every night at dinner. Today's word: 谢谢 — xièxie — it means 'thank you'. Xièxie for being such a great host family!",
            formalityVariants: {
              casual: "Totally! How about this — I'll teach you a Chinese word every night at dinner. Today's word: 谢谢 — xièxie — it means 'thank you'. Xièxie for being such a great host family!",
              standard: "I'd love to! How about this — I'll teach you a Chinese word every day at dinner. Today's word: 谢谢 — xièxie — it means 'thank you'. Xièxie for being such a wonderful host family!",
              formal: "I would be absolutely delighted to! May I propose the following: I shall teach you a Chinese word each day at dinner. For today, the word is: 谢谢 — xièxie — which translates to 'thank you'. Xièxie for being such an exceptionally gracious host family!",
            },
          },
          {
            speaker: "them",
            role: "女主人",
            textEn: "Xièxie! How was that? Ha, I love it! This is going to be so fun. We're really glad to have you here, Li Wei. It feels like having another family member in the house.",
            textZh: "Xièxie！我说得怎么样？哈哈，我喜欢！这会很有趣的。我们真的很高兴你住在这里，李伟。感觉家里多了一个家人。",
            keyPhrases: [
              { en: "how was that", zh: "我说得怎么样" },
              { en: "another family member", zh: "又一个家人" },
            ],
            alternativeExpressions: [
              { textEn: "Xièxie! Did I say it right? Ha, I love this! This is gonna be so much fun. We're so happy you're here, Li Wei. It really feels like you're part of the family.", textZh: "Xièxie！我说对了吗？哈，我太喜欢了！这会特别有意思。我们太高兴你住在这里了，李伟。真的感觉你是家人。", actionHint: "part of the family = 家人的一部分", frequency: "common" },
              { textEn: "Sheh-sheh! Was that close? Oh this is great, I'm going to practice every day! Li Wei, having you here has been such a joy. You really do feel like family.", textZh: "Sheh-sheh！说得接近吗？太好了，我要每天练习！李伟，有你在家里真的太开心了。你真的就像家人。", actionHint: "such a joy = 太开心了", frequency: "common" },
            ],
            casualVersion: "Xièxie! How was that? Ha, I love it! This is gonna be so fun. We're really glad to have ya here, Li Wei. Feels like having another family member in the house.",
            formalityVariants: {
              casual: "Xièxie! How was that? Ha, I love it! This is gonna be so fun. We're really glad to have ya here, Li Wei. Feels like having another family member in the house.",
              standard: "Xièxie! How was that? Ha, I love it! This is going to be so fun. We're really glad to have you here, Li Wei. It feels like having another family member in the house.",
              formal: "Xièxie! How did I fare? Haha, I find this truly delightful! This promises to be quite enjoyable. We are genuinely pleased to have you with us, Li Wei. It genuinely feels as though we have gained an additional family member within our home.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 住宿投诉 ====================
  {
    id: "accommodation-complaint",
    category: "accommodation",
    titleZh: "住宿投诉",
    titleEn: "Accommodation Complaint",
    description: "住宿遇到问题时的投诉流程，包括噪音、卫生和退款请求",
    otherRole: "酒店/民宿客服",
    otherRoleIcon: "📞",
    flows: [
      // --- Flow 1: 噪音/卫生投诉 ---
      {
        id: "complaint-noise-cleanliness",
        titleZh: "噪音与卫生投诉",
        titleEn: "Noise & Cleanliness Complaint",
        description: "在酒店或民宿遇到噪音和卫生问题，向前台投诉要求解决",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm in Room 412 and I have a couple of issues I need help with. First, the room next door has been extremely loud — music and yelling until 2 AM. I couldn't sleep at all last night.",
            textZh: "你好，我住412房间，有几个问题需要帮忙。首先，隔壁房间非常吵——音乐声和喊叫声持续到凌晨2点。我昨晚完全没法睡。",
            casualVersion: "The room next to mine was insanely loud last night — I literally couldn't sleep.",
            commonMistake: {
              wrong: "I have some problems. The next room is very noisy.",
              correct: "I have a couple of issues I need help with. First, the room next door has been extremely loud.",
              explanation: "“问题” (problem) 在英文中通常指负面、麻烦的事，用 “issues” 更委婉礼貌。 “隔壁很吵” 表达更直接，用 “has been extremely loud” 强调持续性。",
            },
            formalityVariants: {
              casual: "Hey, I'm in 412. Got a couple issues. First, the room next door was super loud—music, yelling till 2 AM. Couldn't sleep at all.",
              standard: "Hi, I'm in Room 412 and I have a couple of issues I need help with. First, the room next door has been extremely loud — music and yelling until 2 AM. I couldn't sleep at all last night.",
              formal: "Good morning/afternoon, I am currently occupying Room 412 and would like to bring a couple of significant concerns to your attention. Primarily, the adjacent room has been a source of excessive noise, with music and shouting continuing until approximately 2 AM, which severely disrupted my rest last night.",
            },
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "I'm so sorry to hear that, sir. We do have a quiet hours policy after 10 PM. I'll look into who was in that room and issue a warning. If it happens again tonight, please call the front desk immediately and we'll send security up right away.",
            textZh: "非常抱歉，先生。我们有晚上10点以后的安静时段规定。我会查一下那个房间是谁并发出警告。如果今晚再发生，请立即打电话给前台，我们会马上派保安上去。",
            keyPhrases: [
              { en: "quiet hours policy", zh: "安静时段规定" },
              { en: "issue a warning", zh: "发出警告" },
              { en: "call the front desk", zh: "打电话给前台" },
              { en: "send security", zh: "派保安" },
            ],
            alternativeExpressions: [
              { textEn: "That's unacceptable. I apologize. Let me address this immediately.", textZh: "这不可接受。我道歉。让我立刻处理。", actionHint: "他们会认真对待", frequency: "common" },
            ],
            casualVersion: "Oh man, sorry to hear that. We've got quiet hours after 10. I'll check who was in there and tell 'em off. If it happens again tonight, just call the front desk, and we'll send security up right away.",
            formalityVariants: {
              casual: "Oh man, sorry to hear that. We've got quiet hours after 10. I'll check who was in there and tell 'em off. If it happens again tonight, just call the front desk, and we'll send security up right away.",
              standard: "I'm so sorry to hear that, sir. We do have a quiet hours policy after 10 PM. I'll look into who was in that room and issue a warning. If it happens again tonight, please call the front desk immediately and we'll send security up right away.",
              formal: "Please accept my sincerest apologies for this unfortunate experience, sir. Our establishment strictly enforces a quiet hours policy after 10 PM. I will promptly investigate the occupants of that room and issue a formal warning. Should this disturbance reoccur this evening, I kindly request that you contact the front desk without delay, and we will dispatch security personnel to address the situation immediately.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. The second issue is about cleanliness. When I checked in yesterday, there were stains on the bedsheets, the bathroom floor was dirty, and there were used towels left from the previous guest. It looks like the room wasn't properly cleaned.",
            textZh: "谢谢。第二个问题是卫生方面。昨天入住时，床单上有污渍，浴室地板很脏，还有上一位客人留下的用过的毛巾。看起来房间没有被好好清洁。",
            casualVersion: "Thanks. Second thing: cleanliness. Checked in yesterday, bedsheets had stains, bathroom floor was dirty, and used towels from the last guest were still there. Room clearly wasn't cleaned right.",
            commonMistake: {
              wrong: "My room is not clean. / The room cleaning is not good.",
              correct: "The second issue is about cleanliness. / It looks like the room wasn't properly cleaned.",
              explanation: "“不干净” 可以用 “cleanliness” (卫生状况) 来表达，或者用被动语态 “wasn't properly cleaned” (没有好好清洁) 更自然。",
            },
            formalityVariants: {
              casual: "Thanks. Second thing: cleanliness. Checked in yesterday, bedsheets had stains, bathroom floor was dirty, and used towels from the last guest were still there. Room clearly wasn't cleaned right.",
              standard: "Thank you. The second issue is about cleanliness. When I checked in yesterday, there were stains on the bedsheets, the bathroom floor was dirty, and there were used towels left from the previous guest. It looks like the room wasn't properly cleaned.",
              formal: "Thank you. My second concern pertains to the cleanliness of the room. Upon my arrival yesterday, I observed visible stains on the bedsheets, a soiled bathroom floor, and the presence of used towels from a previous occupant. This suggests the room had not undergone a thorough cleaning prior to my check-in.",
            },
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "That is absolutely unacceptable, and I sincerely apologize. That should never happen. I'll send housekeeping to completely remake your room with fresh linens right away. I can also have them do a deep clean while you're at breakfast. Would you like to be moved to a different room instead?",
            textZh: "这绝对不可接受，我真诚地道歉。这不应该发生。我马上派客房服务去你的房间重新铺上全新的床品。也可以在你吃早餐时给房间做一次深度清洁。您想换一个房间吗？",
            keyPhrases: [
              { en: "unacceptable", zh: "不可接受的" },
              { en: "housekeeping", zh: "客房服务" },
              { en: "fresh linens", zh: "全新的床品" },
              { en: "deep clean", zh: "深度清洁" },
              { en: "moved to a different room", zh: "换一个房间" },
            ],
            alternativeExpressions: [
              { textEn: "Oh my God, I'm so sorry. That should never have happened. I'll get housekeeping up there right now with fresh everything. Or I can move you to a completely different room if you'd rather — your call.", textZh: "天哪，太抱歉了。这绝不应该发生。我马上派客房服务上去全部换新的。或者你愿意的话可以换一间全新的房间——你决定。", actionHint: "your call = 你来决定", frequency: "common" },
              { textEn: "I'm horrified to hear that. That's completely unacceptable. Let me send someone up immediately to re-do the room — new sheets, full clean. Would you prefer to just move to a different room altogether?", textZh: "听到这个我太震惊了。完全不可接受。我马上派人上去重新整理——新床单、全面清洁。你更愿意直接换个房间吗？", actionHint: "horrified = 震惊的；altogether = 完全/干脆", frequency: "common" },
            ],
            casualVersion: "Wow, that's totally not okay, I'm really sorry. That shouldn't ever happen. I'll get housekeeping to totally redo your room with fresh sheets right now. They can also deep clean it while you're at breakfast. Or, wanna move to a different room?",
            formalityVariants: {
              casual: "Wow, that's totally not okay, I'm really sorry. That shouldn't ever happen. I'll get housekeeping to totally redo your room with fresh sheets right now. They can also deep clean it while you're at breakfast. Or, wanna move to a different room?",
              standard: "That is absolutely unacceptable, and I sincerely apologize. That should never happen. I'll send housekeeping to completely remake your room with fresh linens right away. I can also have them do a deep clean while you're at breakfast. Would you like to be moved to a different room instead?",
              formal: "That is indeed entirely unacceptable, and I extend my sincerest apologies for such a lapse. This is certainly not our standard. I will immediately dispatch our housekeeping team to thoroughly refresh your room with completely new linens. Alternatively, we can arrange for a comprehensive deep cleaning of your current room while you are at breakfast. May I offer you the option of relocating to an alternative room?",
            },
          },
          {
            speaker: "you",
            textEn: "I'd prefer to move to a different room if possible — maybe on a higher floor, away from the noisy room. Can you also make sure the new room has been properly inspected?",
            textZh: "如果可以的话我想换个房间——最好在高一点的楼层，远离吵闹的房间。能确保新房间经过了检查吗？",
            casualVersion: "Yeah, I'd rather just move rooms if that's cool—maybe higher up, away from that loud one. And can you just make sure the new one's actually been checked out okay?",
            commonMistake: {
              wrong: "Can you make sure the new room is OK? / Can you check the new room?",
              correct: "Can you also make sure the new room has been properly inspected?",
              explanation: "“被检查” 强调的是动作的完整性和专业性，用 “properly inspected” 更准确、自然。",
            },
            formalityVariants: {
              casual: "Yeah, I'd rather just move rooms if that's cool—maybe higher up, away from that loud one. And can you just make sure the new one's actually been checked out okay?",
              standard: "I'd prefer to move to a different room if possible — maybe on a higher floor, away from the noisy room. Can you also make sure the new room has been properly inspected?",
              formal: "I would indeed prefer to relocate to an alternative room, if that is a viable option — perhaps on a higher floor, situated away from the source of the aforementioned noise. Furthermore, could you please ensure that the prospective room has undergone a thorough and proper inspection?",
            },
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "Absolutely. I have a room on the 8th floor — Room 805, a corner room with a city view. It was just cleaned this morning and I'll personally inspect it before you move in. I'll also upgrade you from a standard room to a deluxe room at no extra charge as an apology.",
            textZh: "当然可以。8楼有一间——805房间，转角房有城市景观。今天早上刚清洁过，您入住前我亲自去检查。作为道歉，我还会免费为您从标准间升级到豪华间。",
            keyPhrases: [
              { en: "corner room", zh: "转角房" },
              { en: "city view", zh: "城市景观" },
              { en: "personally inspect", zh: "亲自检查" },
              { en: "upgrade", zh: "升级" },
              { en: "at no extra charge", zh: "不额外收费" },
            ],
            alternativeExpressions: [
              { textEn: "Of course. I've got a gorgeous corner room on 8 — Room 805, city view. Just cleaned this morning, and I'll go check it myself before you move in. I'm also bumping you up to a deluxe room, no charge. It's the least I can do.", textZh: "当然。8楼有一间漂亮的转角房——805，城市景观。今早刚清洁过，你入住前我亲自去检查。我还免费给你升级到豪华间。这是我最起码能做的。", actionHint: "bumping you up = 给你升级；the least I can do = 最起码能做的", frequency: "common" },
              { textEn: "Absolutely. Room 805 on the 8th floor — corner unit, great view. I'll personally walk through it before you move. And as an apology, I'm upgrading you to deluxe at no additional cost.", textZh: "当然。8楼805房间——转角房，景观很好。你搬过去之前我亲自检查一遍。作为道歉，免费给你升到豪华间。", actionHint: "walk through it = 亲自检查", frequency: "common" },
            ],
            casualVersion: "For sure. Got a room on the 8th—805, corner spot, city view. Just got cleaned this morning and I'll personally check it out before you move. Plus, I'll upgrade you from a standard to a deluxe, no extra charge, just to say sorry.",
            formalityVariants: {
              casual: "For sure. Got a room on the 8th—805, corner spot, city view. Just got cleaned this morning and I'll personally check it out before you move. Plus, I'll upgrade you from a standard to a deluxe, no extra charge, just to say sorry.",
              standard: "Absolutely. I have a room on the 8th floor — Room 805, a corner room with a city view. It was just cleaned this morning and I'll personally inspect it before you move in. I'll also upgrade you from a standard room to a deluxe room at no extra charge as an apology.",
              formal: "Certainly. I have identified a suitable room on the 8th floor, specifically Room 805, which is a corner unit offering a city view. It was meticulously cleaned this morning, and I assure you I will personally conduct a thorough inspection prior to your relocation. Furthermore, as a gesture of apology, I will gladly upgrade your accommodation from a standard to a deluxe room at no additional cost.",
            },
          },
          {
            speaker: "you",
            textEn: "I appreciate the upgrade. Given the terrible experience last night, I'd also like some form of compensation — maybe a discount on my stay?",
            textZh: "感谢升级。考虑到昨晚糟糕的体验，我还希望能有某种形式的补偿——也许住宿折扣？",
            culturalNote: "在欧美酒店，因为服务问题要求补偿是完全合理的。用 \"I'd like some form of compensation\" 比较礼貌但明确。",
            casualVersion: "Appreciate the upgrade. But after that mess last night, I'd also like some kind of compensation—maybe a discount on the stay?",
            commonMistake: {
              wrong: "I want compensation. / Can you give me compensation?",
              correct: "I'd also like some form of compensation / maybe a discount on my stay?",
              explanation: "“I'd like” 比 “I want” 更有礼貌。用 “some form of compensation” (某种形式的补偿) 或具体提出 “discount” (折扣) 更自然。",
            },
            formalityVariants: {
              casual: "Appreciate the upgrade. But after that mess last night, I'd also like some kind of compensation—maybe a discount on the stay?",
              standard: "I appreciate the upgrade. Given the terrible experience last night, I'd also like some form of compensation — maybe a discount on my stay?",
              formal: "I certainly appreciate the generous upgrade. However, given the profoundly unsatisfactory experience I encountered last night, I would also respectfully request some form of compensation — perhaps a reduction in the overall cost of my stay?",
            },
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "You're absolutely right to ask. I'll credit one night's stay to your account — so you won't be charged for last night at all. I'll also add complimentary breakfast for the rest of your stay. Is there anything else I can do to make up for this?",
            textZh: "您提出来完全合理。我会在您的账户上减免一晚的费用——昨晚的完全不收费。剩余住宿期间还为您加上免费早餐。还有什么我能做的来弥补这次经历吗？",
            keyPhrases: [
              { en: "credit one night's stay", zh: "减免一晚费用" },
              { en: "won't be charged", zh: "不收费" },
              { en: "complimentary breakfast", zh: "免费早餐" },
              { en: "make up for", zh: "弥补" },
            ],
            alternativeExpressions: [
              { textEn: "That's completely fair. I'm taking last night off your bill entirely — no charge for that night. And I'm throwing in free breakfast for the rest of your stay. What else can I do to make it right?", textZh: "完全合理。昨晚的费用我全部免掉——那晚不收费。剩余住宿期间还送你免费早餐。还有什么我能做来弥补的？", actionHint: "taking it off your bill = 从账单上去掉；throwing in = 附赠", frequency: "common" },
              { textEn: "You're absolutely right to bring that up. I'll credit last night's room charge, and I'm adding complimentary breakfast for the remainder of your stay. Anything else I can do?", textZh: "你提出来完全对。我会退掉昨晚的房费，并且在剩余住宿期间加上免费早餐。还有什么我能做的吗？", actionHint: "bring that up = 提出来", frequency: "common" },
            ],
            casualVersion: "Totally fair to ask. I'll take a night off your bill—so last night's free. Plus, you get free breakfast for the rest of your stay. Anything else I can do to fix this?",
            formalityVariants: {
              casual: "Totally fair to ask. I'll take a night off your bill—so last night's free. Plus, you get free breakfast for the rest of your stay. Anything else I can do to fix this?",
              standard: "You're absolutely right to ask. I'll credit one night's stay to your account — so you won't be charged for last night at all. I'll also add complimentary breakfast for the rest of your stay. Is there anything else I can do to make up for this?",
              formal: "You are absolutely justified in making that request. I will ensure that one night's stay is credited to your account, effectively waiving the charge for last night. Additionally, I will arrange for complimentary breakfast to be provided for the duration of your remaining stay. Is there anything further I may do to redress this inconvenience?",
            },
          },
          {
            speaker: "you",
            textEn: "That's very generous, thank you. I appreciate you taking this seriously. I'll go ahead and move to Room 805.",
            textZh: "非常慷慨，谢谢你。感谢你认真对待这件事。我这就搬去805房间。",
            casualVersion: "That's super generous, thanks. Appreciate you actually dealing with this. I'll just head over to 805 then.",
            commonMistake: {
              wrong: "Thank you for seriousness.",
              correct: "I appreciate you taking this seriously.",
              explanation: "“认真对待” 翻译成 “taking this seriously” 是更自然的表达。",
            },
            formalityVariants: {
              casual: "That's super generous, thanks. Appreciate you actually dealing with this. I'll just head over to 805 then.",
              standard: "That's very generous, thank you. I appreciate you taking this seriously. I'll go ahead and move to Room 805.",
              formal: "That is indeed very generous of you, and I thank you. I sincerely appreciate your diligent and serious approach to resolving these matters. I shall proceed with relocating to Room 805 as arranged.",
            },
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "I'll have a bellman come to help you move your luggage. Again, I'm truly sorry for the experience. Here's my direct number — if you have any more issues at all during your stay, please call me personally. We want the rest of your stay to be perfect.",
            textZh: "我安排一个行李员来帮你搬行李。再次为这次经历道歉。这是我的直线电话——住宿期间如果还有任何问题，请直接打给我。我们希望你剩下的住宿体验是完美的。",
            keyPhrases: [
              { en: "bellman", zh: "行李员" },
              { en: "direct number", zh: "直线电话" },
              { en: "call me personally", zh: "直接打给我" },
            ],
            alternativeExpressions: [
              { textEn: "I'll have someone come up to help with your bags. And here — take my card. Anything at all during your stay, you call me directly. I want to make sure the rest of your time here is perfect.", textZh: "我安排人上来帮你拿行李。给——拿着我的名片。住宿期间有任何事直接打给我。我要确保你剩下的时间是完美的。", actionHint: "take my card = 拿我的名片", frequency: "common" },
              { textEn: "A bellman will be up shortly to help you move. Once again, I'm really sorry. Here's my direct line — don't hesitate to reach out if anything else comes up. We're committed to making the rest of your stay exceptional.", textZh: "行李员马上上来帮你搬。再次道歉。这是我的直线电话——有什么问题别犹豫直接联系。我们会确保你剩下的住宿体验是卓越的。", actionHint: "don't hesitate = 别犹豫", frequency: "common" },
            ],
            casualVersion: "I'll get a bellman to help with your bags. Seriously, so sorry again about all this. Here's my direct number—any other problems during your stay, just call me personally. We want the rest of your visit to be perfect.",
            formalityVariants: {
              casual: "I'll get a bellman to help with your bags. Seriously, so sorry again about all this. Here's my direct number—any other problems during your stay, just call me personally. We want the rest of your visit to be perfect.",
              standard: "I'll have a bellman come to help you move your luggage. Again, I'm truly sorry for the experience. Here's my direct number — if you have any more issues at all during your stay, please call me personally. We want the rest of your stay to be perfect.",
              formal: "I will arrange for a bellman to assist you with the relocation of your luggage. Once more, please accept my profound apologies for the inconvenience you have endured. Here is my direct contact information — should any further concerns arise during the remainder of your stay, please do not hesitate to contact me personally. Our utmost desire is for the remainder of your visit to be entirely impeccable.",
            },
          },
        ],
      },

      // --- Flow 2: 退款请求+在线平台投诉 ---
      {
        id: "complaint-refund",
        titleZh: "退款与平台投诉",
        titleEn: "Refund Request & Platform Complaint",
        description: "住宿严重不符合预期，要求退款或通过Airbnb等平台投诉",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I booked this apartment through Airbnb and I'm very disappointed. The listing showed a clean, modern apartment, but what I found is completely different — the photos are misleading.",
            textZh: "你好，我通过Airbnb预订了这间公寓，非常失望。页面展示的是一间干净现代的公寓，但实际完全不一样——照片有误导性。",
            casualVersion: "Hey, booked this Airbnb and honestly, super disappointed. The pics showed a clean, modern spot, but this? Totally different. The photos are totally misleading.",
            culturalNote: "直接表达不满是OK的，无需过多铺垫",
            commonMistake: {
              wrong: "The photos are not real.",
              correct: "The photos are misleading.",
              explanation: "“misleading”更准确地表达了照片造成了误解。",
            },
            formalityVariants: {
              casual: "Hey, booked this Airbnb, super disappointed. Pics showed a clean, modern spot, but this? Total bait and switch. The photos are totally misleading.",
              standard: "Hello, I booked this apartment through Airbnb and I'm very disappointed. The listing showed a clean, modern apartment, but what I found is completely different — the photos are misleading.",
              formal: "Good afternoon. I reserved this accommodation via Airbnb, and I must express my considerable disappointment. The online listing depicted a clean, contemporary apartment, however, the actual premises are significantly divergent, and I find the photographs to be highly deceptive.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "I'm sorry you feel that way. Can you be more specific about what's different from the listing?",
            textZh: "很抱歉你这样觉得。能具体说说跟页面有什么不同吗？",
            keyPhrases: [
              { en: "listing", zh: "页面/房源展示" },
              { en: "misleading", zh: "有误导性的" },
              { en: "be more specific", zh: "具体说说" },
            ],
            alternativeExpressions: [
              { textEn: "I'm sorry to hear that. What exactly is different from what you saw online?", textZh: "很抱歉听到这个。具体哪里和你网上看到的不一样？", actionHint: "直接的询问方式", frequency: "common" },
              { textEn: "I apologize you're not happy with the place. Can you walk me through what doesn't match the listing?", textZh: "很抱歉你对住处不满意。能跟我说说哪些地方跟页面不符吗？", actionHint: "walk me through = 跟我详细说说", frequency: "common" },
            ],
            casualVersion: "Sorry you feel that way. What exactly's different from the listing?",
            formalityVariants: {
              casual: "Sorry to hear that. What's actually different from the listing?",
              standard: "I'm sorry you feel that way. Can you be more specific about what's different from the listing?",
              formal: "I regret that you are experiencing dissatisfaction. Could you please elaborate on the specific discrepancies between the accommodation and its description?",
            },
          },
          {
            speaker: "you",
            textEn: "Several things. The listing says 'air conditioning' but there's only a fan. The 'fully equipped kitchen' has no microwave and the stove doesn't work. The bathroom has mold on the walls. And the 'quiet neighborhood' — there's construction right outside starting at 7 AM.",
            textZh: "好几个方面。页面写着\"有空调\"但只有一个风扇。\"全配厨房\"没有微波炉而且炉灶不能用。浴室墙上有霉菌。还有所谓的\"安静社区\"——外面早上7点就开始施工。",
            casualVersion: "Oh, lots of stuff. Said 'AC', but it's just a fan. 'Fully equipped kitchen'? No microwave, stove's dead. Bathroom's got mold. And this 'quiet neighborhood'? There's construction happening right outside at 7 AM!",
            commonMistake: {
              wrong: "Bathroom has mold. Stove not work.",
              correct: "The bathroom has mold on the walls. And the stove doesn't work.",
              explanation: "英语中陈述事实时，动词时态和介词通常需要完整。",
            },
            formalityVariants: {
              casual: "Loads of stuff. Said 'AC', just a fan. 'Fully equipped kitchen'? No microwave, stove's broken. Bathroom's moldy. And 'quiet neighborhood'? Construction outside at 7 AM!",
              standard: "Several things. The listing says 'air conditioning' but there's only a fan. The 'fully equipped kitchen' has no microwave and the stove doesn't work. The bathroom has mold on the walls. And the 'quiet neighborhood' — there's construction right outside starting at 7 AM.",
              formal: "There are multiple discrepancies. The description indicated 'air conditioning', yet only a fan is present. The 'fully equipped kitchen' lacks a microwave oven, and the stove is non-functional. Furthermore, the bathroom walls exhibit significant mold growth. Lastly, contrary to the 'quiet neighborhood' claim, there is ongoing construction directly outside commencing at 7 AM.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "I understand your frustration. The construction just started this week and I wasn't aware of it. About the AC, the unit broke down last week — I have someone coming to fix it tomorrow. I can offer you a 20% discount for the inconvenience.",
            textZh: "我理解你的不满。施工这周才开始的，我不知道。空调的话，上周坏了——我明天安排人来修。可以给你打八折来弥补不便。",
            keyPhrases: [
              { en: "frustration", zh: "不满/沮丧" },
              { en: "broke down", zh: "坏了" },
              { en: "discount for the inconvenience", zh: "给你打折弥补不便" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, I get why you're upset. The construction caught me off guard too — it literally just started. The AC broke last week, repair guy's coming tomorrow. How about I knock 20% off your stay?", textZh: "是的，我理解你为什么不高兴。施工我也没想到——真的刚开始。空调上周坏了，维修工明天来。给你打个八折怎么样？", actionHint: "caught me off guard = 让我措手不及；knock off = 减去/打折", frequency: "common" },
              { textEn: "I hear you, and I totally understand your frustration. I had no idea about the construction. The AC unit went down last week — someone's fixing it tomorrow. I can do 20% off to make up for the trouble.", textZh: "我听到了，完全理解你的不满。施工的事我真不知道。空调上周坏了——明天有人来修。可以给你打八折弥补。", actionHint: "went down = 坏了/停了; I hear you = 我理解", frequency: "common" },
            ],
            casualVersion: "Yeah, I get it. Construction just started this week, totally new to me. AC died last week, got someone coming tomorrow to fix it. Can give you 20% off for the hassle.",
            formalityVariants: {
              casual: "Totally get your frustration. Construction's new this week, didn't know. AC broke last week, getting it fixed tomorrow. How about 20% off for the trouble?",
              standard: "I understand your frustration. The construction just started this week and I wasn't aware of it. About the AC, the unit broke down last week — I have someone coming to fix it tomorrow. I can offer you a 20% discount for the inconvenience.",
              formal: "I fully comprehend your frustration. The construction commenced only this week, and I was unfortunately not informed. Regarding the air conditioning, the unit malfunctioned last week, and I have arranged for a repair technician to attend tomorrow. I am prepared to offer a 20% discount as compensation for the inconvenience caused.",
            },
          },
          {
            speaker: "you",
            textEn: "I appreciate the offer, but honestly, a 20% discount doesn't make up for a broken stove, mold in the bathroom, and no AC in this heat. I'd like a full refund for the remaining nights. I'm going to check out tomorrow and find somewhere else to stay.",
            textZh: "感谢你的提议，但说实话，打八折弥补不了坏炉灶、浴室霉菌和这么热没空调的情况。我想要剩余晚数的全额退款。我明天退房去找别的地方住。",
            casualVersion: "Appreciate the offer, but honestly, 20% off ain't gonna cut it for a broken stove, moldy bathroom, and no AC in this heat. I want a full refund for the rest of my stay. I'm checking out tomorrow and finding a new place.",
            commonMistake: {
              wrong: "20% discount cannot solve the problem.",
              correct: "20% discount doesn't make up for a broken stove...",
              explanation: "“make up for” 表示补偿、弥补，更自然地表达了折扣不足以弥补损失。",
            },
            formalityVariants: {
              casual: "Thanks for the offer, but seriously, 20% off won't fix a broken stove, moldy bathroom, and no AC in this heat. I need a full refund for the rest of my nights. I'm checking out tomorrow and getting another place.",
              standard: "I appreciate the offer, but honestly, a 20% discount doesn't make up for a broken stove, mold in the bathroom, and no AC in this heat. I'd like a full refund for the remaining nights. I'm going to check out tomorrow and find somewhere else to stay.",
              formal: "While I appreciate the gesture, a 20% discount is insufficient to compensate for the significant deficiencies, including a non-functional stove, mold in the bathroom, and the absence of air conditioning in these temperatures. I formally request a full refund for the entirety of my remaining reservation. I intend to vacate the premises tomorrow and secure alternative accommodation.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "I can refund the remaining nights, but I'd need you to go through the Airbnb resolution center for that. I can't do a direct refund — the platform handles it. Do you know how to open a case with Airbnb?",
            textZh: "剩余晚数我可以退款，但需要你通过Airbnb的纠纷解决中心来操作。我不能直接退款——是平台处理的。你知道怎么在Airbnb上开一个案例吗？",
            keyPhrases: [
              { en: "resolution center", zh: "纠纷解决中心" },
              { en: "direct refund", zh: "直接退款" },
              { en: "open a case", zh: "开一个案例/投诉" },
            ],
            alternativeExpressions: [
              { textEn: "I can refund the remaining nights, but it has to go through Airbnb — I can't process it on my end. You'd need to open a dispute in the resolution center. Have you done that before?", textZh: "剩余晚数我可以退，但必须走Airbnb——我这边处理不了。你需要在纠纷中心开一个争议。你以前操作过吗？", actionHint: "on my end = 在我这边；dispute = 争议", frequency: "common" },
              { textEn: "For the refund, we'd need to go through the Airbnb platform — I'm not able to do direct refunds. Do you know how to file a claim with Airbnb support?", textZh: "退款的话需要通过Airbnb平台——我没法直接退。你知道怎么向Airbnb客服提出申诉吗？", actionHint: "file a claim = 提出申诉", frequency: "common" },
            ],
            casualVersion: "I can refund the rest of the nights, but you gotta go through Airbnb's resolution center. Can't do a direct refund, the platform handles all that. You know how to open a case with them?",
            formalityVariants: {
              casual: "Yeah, I can refund the rest of the nights, but you'll have to use the Airbnb resolution center. Can't give you a direct refund myself, the platform does it. Know how to open a case with them?",
              standard: "I can refund the remaining nights, but I'd need you to go through the Airbnb resolution center for that. I can't do a direct refund — the platform handles it. Do you know how to open a case with Airbnb?",
              formal: "I am able to process a refund for the outstanding nights; however, this transaction must be initiated and completed through the Airbnb resolution center. Direct refunds are not within my purview, as the platform manages all such financial adjustments. Are you familiar with the procedure for initiating a case with Airbnb?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll contact Airbnb support. Before I go, I want to document everything. I've taken photos of the mold, the broken stove, and the missing AC unit. Is that okay?",
            textZh: "我会联系Airbnb客服。走之前，我想记录一切。我已经拍了霉菌、坏炉灶和没有空调的照片。可以吗？",
            culturalNote: "在任何住宿投诉或纠纷中，拍照留证据是最重要的一步。照片是理赔和评价的关键依据。",
            casualVersion: "Okay, I'll hit up Airbnb support. Before I leave, just wanna document everything. Got pics of the mold, broken stove, and no AC. That cool?",
            commonMistake: {
              wrong: "I took photos. It is okay?",
              correct: "I've taken photos... Is that okay?",
              explanation: "“I've taken photos” 强调动作的完成和当前结果，更自然。",
            },
            formalityVariants: {
              casual: "Alright, I'll contact Airbnb. Just wanna document everything before I leave. Took pics of the mold, broken stove, no AC. Cool?",
              standard: "I'll contact Airbnb support. Before I go, I want to document everything. I've taken photos of the mold, the broken stove, and the missing AC unit. Is that okay?",
              formal: "I shall proceed to contact Airbnb support. Prior to my departure, I wish to thoroughly document all existing issues. I have already photographed the mold, the non-functional stove, and the absence of an air conditioning unit. Is this acceptable?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Yes, that's fine. I understand. Look, I'll cooperate with the Airbnb resolution process. I'll accept the refund request for the remaining nights. I apologize that the place didn't meet your expectations.",
            textZh: "可以的，没问题。我理解。这样吧，我会配合Airbnb的处理流程。剩余晚数的退款请求我会同意。很抱歉这里没有达到你的期望。",
            keyPhrases: [
              { en: "cooperate", zh: "配合" },
              { en: "resolution process", zh: "处理流程" },
              { en: "accept the refund request", zh: "同意退款请求" },
              { en: "meet your expectations", zh: "达到你的期望" },
            ],
            alternativeExpressions: [
              { textEn: "That's fine, go ahead and take photos. Look, I'll work with Airbnb on the resolution. I'll approve the refund for the remaining nights. I'm sorry it didn't work out.", textZh: "没问题，拍照吧。这样，我会配合Airbnb处理。剩余晚数的退款我会同意。很抱歉没能让你满意。", actionHint: "didn't work out = 没能成功/没能让你满意", frequency: "common" },
              { textEn: "Sure, document whatever you need. I'll cooperate fully with Airbnb. The remaining nights — I'll accept the refund. Sorry things aren't up to standard.", textZh: "当然，你需要记录什么都可以。我会完全配合Airbnb。剩余晚数——退款我同意。很抱歉没达到标准。", actionHint: "up to standard = 达到标准", frequency: "common" },
            ],
            casualVersion: "Yeah, that's fine. I get it. Look, I'll totally cooperate with the Airbnb resolution. I'll approve the refund for the rest of the nights. Sorry the place wasn't what you expected.",
            commonMistake: {
              wrong: "Sorry the place not meet your expectations.",
              correct: "I apologize that the place didn't meet your expectations.",
              explanation: "“didn't” 是过去时态的助动词，不可省略，使表达更符合语法。",
            },
            formalityVariants: {
              casual: "Yep, that's fine. Understandable. Look, I'll work with the Airbnb resolution process. I'll agree to the refund for the rest of the nights. My bad the place wasn't up to par.",
              standard: "Yes, that's fine. I understand. Look, I'll cooperate with the Airbnb resolution process. I'll accept the refund request for the remaining nights. I apologize that the place didn't meet your expectations.",
              formal: "Yes, that is perfectly acceptable. I comprehend the necessity for documentation. Please be assured that I will fully cooperate with the Airbnb resolution process. I will approve your refund request for the remaining nights. I sincerely apologize that the accommodation failed to meet your expectations.",
            },
          },
          {
            speaker: "you",
            textEn: "I also want to be refunded for tonight since the stove and AC issues existed from day one. That means a full refund, not just the remaining nights.",
            textZh: "我还想退今晚的费用，因为炉灶和空调问题从第一天就存在。也就是说全额退款，不只是剩余晚数。",
            casualVersion: "I also want tonight refunded 'cause the stove and AC were busted from day one. So, full refund, not just the rest of my stay.",
            commonMistake: {
              wrong: "From first day.",
              correct: "from day one.",
              explanation: "“From day one” 是一个常用习语，表示从一开始，更地道。",
            },
            formalityVariants: {
              casual: "And I want tonight refunded too, since the stove and AC were messed up from the start. So, a full refund, not just the other nights.",
              standard: "I also want to be refunded for tonight since the stove and AC issues existed from day one. That means a full refund, not just the remaining nights.",
              formal: "Furthermore, I request a refund for the current night, given that the issues with the stove and air conditioning were present from the commencement of my stay. This implies a complete refund, rather than solely for the subsequent nights.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "That's something you'll need to discuss with Airbnb directly. I can agree to the remaining nights, but the first night refund would need Airbnb to step in. They usually side with the guest when there's clear evidence like photos. Open the case through the app and they'll get back to you within 24 hours.",
            textZh: "这个你需要直接跟Airbnb讨论。剩余晚数我可以同意退，但第一晚的退款需要Airbnb介入。在有明确证据如照片的情况下，他们通常会站在客人这边。通过App开一个案例，他们24小时内会回复你。",
            keyPhrases: [
              { en: "discuss with Airbnb directly", zh: "直接跟Airbnb讨论" },
              { en: "step in", zh: "介入" },
              { en: "side with the guest", zh: "站在客人这边" },
              { en: "clear evidence", zh: "明确证据" },
            ],
            alternativeExpressions: [
              { textEn: "That's really between you and Airbnb at that point. I can agree to the remaining nights, but the first night — you'd have to take that up with their support team. Usually if you've got photos, they'll back you up. Just open a case in the app.", textZh: "那个就需要你跟Airbnb直接谈了。剩余晚数我可以同意退，但第一晚——你得跟他们的客服团队谈。通常如果你有照片，他们会支持你。在App里开个案例就行。", actionHint: "take that up with = 跟...交涉；back you up = 支持你", frequency: "common" },
              { textEn: "The first night refund isn't something I can approve — that would need Airbnb to weigh in. But with photos as evidence, they typically side with guests. File through the app and they should get back to you pretty quick.", textZh: "第一晚的退款我没权限批——需要Airbnb介入。但有照片作证据的话，他们通常站在客人这边。通过App提交，他们应该很快回复你。", actionHint: "weigh in = 介入/表态", frequency: "common" },
            ],
            casualVersion: "You gotta talk to Airbnb directly about that. I can approve the rest of the nights, but for the first night refund, Airbnb needs to step in. They usually side with the guest if there's clear evidence, like photos. Just open a case through the app and they'll hit you back in 24 hours.",
            commonMistake: {
              wrong: "They will reply you.",
              correct: "they'll get back to you.",
              explanation: "“Get back to you” 是更自然、常用的表达方式，表示会回复你。",
            },
            formalityVariants: {
              casual: "Yeah, you'll have to take that up with Airbnb. I can agree to the rest of the nights, but the first night refund needs Airbnb involved. They usually back the guest with solid evidence, like pictures. Just open a case on the app, they'll respond in 24 hours.",
              standard: "That's something you'll need to discuss with Airbnb directly. I can agree to the remaining nights, but the first night refund would need Airbnb to step in. They usually side with the guest when there's clear evidence like photos. Open the case through the app and they'll get back to you within 24 hours.",
              formal: "Regarding a refund for the initial night, that particular matter will require direct negotiation with Airbnb. While I can authorize the refund for the subsequent nights, the first night's refund necessitates intervention from Airbnb themselves. They typically support the guest's claim when presented with clear evidence, such as photographic documentation. I advise you to open a case via the application, and they should respond within a 24-hour timeframe.",
            },
          },
          {
            speaker: "you",
            textEn: "Fine, I'll do that. I'll also be leaving an honest review about my experience.",
            textZh: "好的，我会的。我也会留下一个关于我的经历的如实评价。",
            casualVersion: "Fine, I'll do it. And yeah, I'm gonna leave a totally honest review about what happened.",
            culturalNote: "直接提及差评在西方文化中是消费者表达不满的常见方式。",
            commonMistake: {
              wrong: "I will leave a real review.",
              correct: "I'll also be leaving an honest review.",
              explanation: "“honest review” 是更常用且自然的表达，强调内容的真实性。",
            },
            formalityVariants: {
              casual: "Okay, I'll do that. And I'll definitely be leaving an an honest review about this whole experience.",
              standard: "Fine, I'll do that. I'll also be leaving an honest review about my experience.",
              formal: "Very well, I shall proceed accordingly. Additionally, I intend to submit an honest and comprehensive review detailing my experience.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "That's your right. Again, I'm sorry about the experience. I hope you find a better place for the rest of your trip.",
            textZh: "那是你的权利。再次为这次经历道歉。希望你旅途接下来能找到更好的住处。",
            keyPhrases: [
              { en: "that's your right", zh: "那是你的权利" },
              { en: "honest review", zh: "如实评价" },
            ],
            alternativeExpressions: [
              { textEn: "That's totally within your right. I'm sorry it didn't live up to expectations. I hope you find a great place for the rest of your trip.", textZh: "那完全是你的权利。很抱歉没能达到期望。希望你旅途接下来能找到好地方。", actionHint: "live up to expectations = 达到期望", frequency: "common" },
              { textEn: "I understand. I really am sorry about everything. Good luck finding something better for the rest of your stay.", textZh: "我理解。我真的为一切感到抱歉。祝你接下来能找到更好的住处。", actionHint: "good luck finding = 祝你找到", frequency: "common" },
            ],
            casualVersion: "That's your right. Again, real sorry about all this. Hope you find a way better place for the rest of your trip.",
            commonMistake: {
              wrong: "Hope you have better trip.",
              correct: "I hope you find a better place for the rest of your trip.",
              explanation: "句子结构不完整，“find a better place for the rest of your trip” 更具体、地道。",
            },
            formalityVariants: {
              casual: "Totally your right. Seriously, my apologies again about everything. Hope you get a much better spot for the rest of your travels.",
              standard: "That's your right. Again, I'm sorry about the experience. I hope you find a better place for the rest of your trip.",
              formal: "Indeed, that is entirely within your prerogative. Once more, I extend my apologies for the unsatisfactory experience. I sincerely hope you are able to secure more suitable accommodation for the remainder of your journey.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 长期租房/公寓 ====================
  {
    id: "accommodation-7",
    category: "accommodation",
    titleZh: "长期租房找房",
    titleEn: "Apartment Hunting",
    description: "在国外找长期租住的公寓，看房、谈租约和搬入",
    otherRole: "房东/中介",
    otherRoleIcon: "🔑",
    flows: [
      // --- Flow 1: 看房+询问细节 ---
      {
        id: "apartment-viewing",
        titleZh: "看房",
        titleEn: "Apartment Viewing",
        description: "预约看房并详细了解公寓情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I saw your listing on Zillow for the one-bedroom apartment on Oak Street. Is it still available? I'd like to schedule a viewing.",
            textZh: "你好，我在 Zillow 上看到你在 Oak Street 的一居室出租信息。还有空吗？我想预约看房。",
            culturalNote: "在美国找房常用 Zillow、Apartments.com、Craigslist。看房前先在网上了解社区安全和评价。",
            casualVersion: "Hey, saw your Zillow listing for the one-bed on Oak Street. Still available? Wanna check it out.",
            commonMistake: {
              wrong: "Is it still has availability?",
              correct: "Is it still available?",
              explanation: "询问物品或时间是否“可用/有空”用 'available' 更地道。",
            },
            formalityVariants: {
              casual: "Hey, saw your Zillow listing for the one-bed on Oak Street. Still open? Wanna check it out.",
              standard: "Hi, I saw your listing on Zillow for the one-bedroom apartment on Oak Street. Is it still available? I'd like to schedule a viewing.",
              formal: "Good morning/afternoon, I am contacting you regarding your one-bedroom apartment listing on Zillow for the property located on Oak Street. I would like to inquire about its current availability and schedule a prospective viewing at your earliest convenience.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Yes, it's still available! I can show you the place this Saturday at 2 PM. The rent is $1,800 per month. Can you tell me a little about yourself?",
            textZh: "是的，还有空！这周六下午2点可以带你看。月租1800美元。能简单介绍一下你自己吗？",
            keyPhrases: [
              { en: "listing", zh: "出租信息/挂牌" },
              { en: "available", zh: "有空的/可租的" },
              { en: "schedule a viewing", zh: "预约看房" },
              { en: "per month", zh: "每月" },
            ],
            alternativeExpressions: [
              { textEn: "It is! We've had a lot of interest though, so I'd suggest coming soon. How's tomorrow at 11 AM?", textZh: "还有！不过很多人感兴趣，建议尽快来。明天上午11点怎么样？", actionHint: "尽快安排看房", frequency: "common" },
            ],
            casualVersion: "Yep, still open! Can show you Saturday at 2 PM. Rent's 1800/month. So, tell me a bit about yourself?",
            culturalNote: "在美国，房东询问租客背景很常见。",
            formalityVariants: {
              casual: "Yep, still open! I can show you Saturday at 2. Rent's $1800. What about you?",
              standard: "Yes, it's still available! I can show you the place this Saturday at 2 PM. The rent is $1,800 per month. Can you tell me a little about yourself?",
              formal: "Yes, the property remains available. I can arrange a showing for you this Saturday at 2:00 PM. The monthly rental rate is $1,800. Could you please provide some background information about yourself?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm Wang, I work as a software engineer. I'm looking for a quiet place close to downtown. What's included in the rent?",
            textZh: "我叫王，做软件工程师。我在找市中心附近安静的住处。租金包括什么？",
            casualVersion: "I'm Wang, software engineer. Looking for a quiet spot near downtown. What's included with rent?",
            culturalNote: "美国人介绍自己时会说全名或名，而不是只说姓。",
            commonMistake: {
              wrong: "I am Wang, software engineer.",
              correct: "I'm Wang, I work as a software engineer.",
              explanation: "介绍职业时通常需要冠词 'a/an'，且用 'I work as' 更自然。",
            },
            formalityVariants: {
              casual: "Wang, software engineer. Need somewhere quiet downtown. What's rent cover?",
              standard: "I'm Wang, I work as a software engineer. I'm looking for a quiet place close to downtown. What's included in the rent?",
              formal: "My name is Wang, and I am employed as a software engineer. I am seeking a quiet residence in proximity to the downtown area. Could you please clarify what utilities or services are encompassed within the monthly rent?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Rent includes water and trash pickup. You'll need to set up your own electricity, gas, and internet. There's also a $50 monthly fee for building amenities — that covers the gym, rooftop terrace, and package locker.",
            textZh: "租金包含水费和垃圾处理。你需要自己开通电、燃气和网络。还有每月50美元的楼栋设施费——包括健身房、楼顶露台和快递柜。",
            keyPhrases: [
              { en: "included in the rent", zh: "包含在租金里" },
              { en: "set up", zh: "开通/设置" },
              { en: "building amenities", zh: "楼栋设施" },
              { en: "package locker", zh: "快递柜" },
            ],
            vocabNotes: {
              "amenities": {
                meaningInContext: "在这句话里表示：公寓楼提供的便利设施，如健身房、泳池等",
                similarUsage: "类似用法：This building has great amenities including a pool.",
              },
            },
            alternativeExpressions: [
              { textEn: "Rent covers water and garbage. Electric, gas, and internet are on you — you'll set those up yourself. There's also a $50 amenity fee each month for the gym, rooftop, and package room.", textZh: "租金包水和垃圾处理。电、气、网你自己开通。每月还有50美元的设施费，包括健身房、天台和快递室。", actionHint: "on you = 你自己负责的", frequency: "common" },
              { textEn: "Water and trash are included. You'd be responsible for setting up power, gas, and Wi-Fi. Oh, and there's a monthly building fee — $50 — covers the gym, rooftop terrace, and the package lockers.", textZh: "水费和垃圾处理包含了。电、气、WiFi你自己负责开通。哦，还有每月50美元的楼栋费——包括健身房、楼顶露台和快递柜。", actionHint: "you'd be responsible for = 你需要负责", frequency: "common" },
            ],
            casualVersion: "Rent covers water and trash. You gotta set up your own electric, gas, and internet. Plus, there's a $50/month amenities fee for the gym, rooftop, and package lockers.",
            formalityVariants: {
              casual: "Rent's got water and trash. You handle electric, gas, internet. $50/month extra for gym, rooftop, lockers.",
              standard: "Rent includes water and trash pickup. You'll need to set up your own electricity, gas, and internet. There's also a $50 monthly fee for building amenities — that covers the gym, rooftop terrace, and package locker.",
              formal: "The rental agreement includes water and trash removal services. However, tenants are responsible for establishing their own accounts for electricity, gas, and internet. Additionally, there is a $50 per month amenity fee, which grants access to the building's gymnasium, rooftop terrace, and package locker system.",
            },
          },
          {
            speaker: "you",
            textEn: "Is the neighborhood safe? I'll be coming home late sometimes because of work.",
            textZh: "这个社区安全吗？我有时候因为工作会很晚回家。",
            casualVersion: "Is the area safe? I'll be getting back late sometimes with work.",
            commonMistake: {
              wrong: "The neighborhood is safe?",
              correct: "Is the neighborhood safe?",
              explanation: "疑问句开头通常需要助动词 (如 'is', 'do')。",
            },
            formalityVariants: {
              casual: "Safe 'round here? I work late sometimes.",
              standard: "Is the neighborhood safe? I'll be coming home late sometimes because of work.",
              formal: "Could you please describe the general safety of the neighborhood? My work schedule occasionally requires me to return home during late hours.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "It's a pretty safe area. There's good street lighting and the building has a secured entrance with a key fob. We also have security cameras in the parking garage and lobby. I'd say it's one of the safer neighborhoods in the city.",
            textZh: "这是一个比较安全的区域。路灯充足，楼有刷卡门禁。停车场和大堂都有安保摄像头。我觉得这是城里比较安全的社区之一。",
            keyPhrases: [
              { en: "street lighting", zh: "路灯" },
              { en: "secured entrance", zh: "门禁入口" },
              { en: "key fob", zh: "门禁卡/钥匙扣" },
              { en: "security cameras", zh: "安保摄像头" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yeah, it's a really safe neighborhood. The building has keycard entry, cameras in the garage and lobby, and the street's well lit. You'd have no issues coming home late.", textZh: "哦是的，这是个很安全的社区。楼有刷卡门禁，车库和大堂有监控，街道灯光充足。晚回家完全没问题。", actionHint: "well lit = 灯光充足", frequency: "common" },
              { textEn: "It's one of the safer parts of the city, honestly. Good lighting, secure building with a fob system, cameras everywhere. You'll feel comfortable coming and going at any hour.", textZh: "说实话这是城里比较安全的区域之一。灯光好，楼有刷卡门禁系统，到处都有监控。什么时间出入你都会觉得安全。", actionHint: "fob system = 感应卡门禁系统；coming and going = 出入", frequency: "common" },
            ],
            casualVersion: "It's pretty safe. Good street lights, and the building's got a secure entrance with a key fob. Cameras in the garage and lobby too. Definitely one of the safer spots in town.",
            formalityVariants: {
              casual: "Yeah, it's safe. Good lights, key fob entry, cameras in garage/lobby. Super safe neighborhood.",
              standard: "It's a pretty safe area. There's good street lighting and the building has a secured entrance with a key fob. We also have security cameras in the parking garage and lobby. I'd say it's one of the safer neighborhoods in the city.",
              formal: "This area is considered quite secure. The neighborhood benefits from ample street lighting, and the building features a secured entrance accessible via a key fob. Furthermore, security cameras are installed in both the parking garage and the lobby. I would categorize it as one of the more secure neighborhoods within the metropolitan area.",
            },
          },
          {
            speaker: "you",
            textEn: "Sounds good. One more question — is the apartment pet-friendly? I'm thinking about getting a cat.",
            textZh: "听起来不错。再问一个——这个公寓允许养宠物吗？我在考虑养一只猫。",
            casualVersion: "Sounds good. One more thing — is it pet-friendly? Thinking 'bout getting a cat.",
            commonMistake: {
              wrong: "Can I keep pet?",
              correct: "Is the apartment pet-friendly?",
              explanation: "询问公寓是否允许养宠物，用 'pet-friendly' 更自然。",
            },
            formalityVariants: {
              casual: "Cool. Pet-friendly? Wanna get a cat.",
              standard: "Sounds good. One more question — is the apartment pet-friendly? I'm thinking about getting a cat.",
              formal: "That's good to hear. I have one additional inquiry: Is the apartment pet-friendly? I am contemplating acquiring a cat.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Cats are welcome! We do require a $300 pet deposit, which is refundable if there's no damage. Dogs under 25 pounds are also allowed, but there's an additional $25 monthly pet rent. No exotic animals though.",
            textZh: "猫可以！我们需要300美元的宠物押金，如果没有损坏可以退。25磅以下的狗也可以，但要额外每月25美元的宠物租金。不允许养异宠。",
            keyPhrases: [
              { en: "pet-friendly", zh: "允许养宠物的" },
              { en: "pet deposit", zh: "宠物押金" },
              { en: "refundable", zh: "可退的" },
              { en: "pet rent", zh: "宠物租金" },
              { en: "exotic animals", zh: "异宠/稀有动物" },
            ],
            culturalMeaning: "在美国租房，很多公寓收「宠物押金」和「宠物月租」，这在中国不常见。养宠物会增加租房成本。",
            alternativeExpressions: [
              { textEn: "Cats? Totally fine! We just ask for a $300 pet deposit — you get it back if there's no damage. Dogs are OK too if they're under 25 pounds, but there's a $25 monthly pet fee. No snakes or anything exotic though.", textZh: "猫？完全可以！我们只要300美元宠物押金——没有损坏就退。25磅以下的狗也行，但有每月25美元的宠物费。蛇或者异宠不行。", actionHint: "totally fine = 完全可以", frequency: "common" },
              { textEn: "We're pet-friendly! There's a refundable $300 deposit for cats. Small dogs are welcome too — under 25 pounds — with an extra $25 a month. No exotic pets, though.", textZh: "我们允许养宠物！猫的话有300美元可退押金。小狗也可以——25磅以下——每月额外加25美元。不过异宠不行。", actionHint: "small dogs = 小型犬", frequency: "common" },
            ],
            casualVersion: "Cats are fine! Just a $300 refundable pet deposit if no damage. Dogs under 25 lbs are okay too, but it's an extra $25/month for pet rent. No exotic animals though.",
            culturalNote: "宠物押金(pet deposit)和宠物租金(pet rent)是美国租房常见费用。",
            formalityVariants: {
              casual: "Cats are cool! $300 refundable pet deposit. Small dogs (under 25 lbs) are also cool, but that's $25 extra a month. No weird pets.",
              standard: "Cats are welcome! We do require a $300 pet deposit, which is refundable if there's no damage. Dogs under 25 pounds are also allowed, but there's an additional $25 monthly pet rent. No exotic animals though.",
              formal: "Cats are permitted; however, a refundable pet deposit of $300 is required, which will be returned in full provided no damage occurs. Dogs weighing under 25 pounds are also allowed, subject to an additional monthly pet rent of $25. Please note that exotic animals are not permitted.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, I'll see you Saturday at 2 PM then. Is there parking available?",
            textZh: "好的，那周六下午2点见。有停车位吗？",
            casualVersion: "Cool, see ya Saturday at 2. Parking available?",
            commonMistake: {
              wrong: "Do you have parking?",
              correct: "Is there parking available?",
              explanation: "询问是否有停车位时，用 'Is there parking available?' 更自然、地道。",
            },
            formalityVariants: {
              casual: "Awesome, catch you Saturday at 2. Parking?",
              standard: "Great, I'll see you Saturday at 2 PM then. Is there parking available?",
              formal: "Excellent, I will plan to meet you this Saturday at 2:00 PM. Regarding the property, is parking readily available?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "There's underground parking — one spot is included with the apartment. Additional spots are $100 per month. There's also street parking, but it's metered during weekdays. See you Saturday!",
            textZh: "有地下停车场——公寓带一个车位。额外车位每月100美元。街边也可以停但工作日要投币。周六见！",
            keyPhrases: [
              { en: "underground parking", zh: "地下停车场" },
              { en: "included with", zh: "随...附带" },
              { en: "metered", zh: "计费的/要投币的" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, there's a garage underneath — one spot comes with the unit. Need more? Extra spots are $100 a month. Street parking is an option too, but it's metered during the week. See you Saturday!", textZh: "有的，楼下有车库——公寓带一个车位。需要更多？额外车位每月100。街边也可以停，但工作日要投币。周六见！", actionHint: "comes with the unit = 公寓自带的", frequency: "common" },
              { textEn: "There's underground parking — you get one spot included. If you've got two cars, additional spots are $100/month. There's also street parking but it's metered on weekdays. Looking forward to Saturday!", textZh: "有地下停车场——你有一个自带车位。如果有两辆车，额外车位100美元/月。街边也有停车位但工作日计费。期待周六见！", actionHint: "you get one spot included = 你有一个免费车位", frequency: "common" },
            ],
            casualVersion: "There's underground parking — one spot's included. Extra spots are $100/month. Street parking's an option too, but it's metered weekdays. See ya Saturday!",
            formalityVariants: {
              casual: "Underground parking, one spot's yours. Extra spots are $100. Street parking's metered weekdays. Later!",
              standard: "There's underground parking — one spot is included with the apartment. Additional spots are $100 per month. There's also street parking, but it's metered during weekdays. See you Saturday!",
              formal: "We offer underground parking; one designated parking space is included with the apartment. Additional parking spaces are available for an extra charge of $100 per month. Street parking is also an option, although it is metered on weekdays. I look forward to seeing you on Saturday.",
            },
          },
        ],
      },

      // --- Flow 2: 签租约+了解条款 ---
      {
        id: "signing-lease",
        titleZh: "签租约",
        titleEn: "Signing the Lease",
        description: "看完房决定租，了解租约条款并签字",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "I love the apartment and I'd like to move forward. What do I need to do to sign the lease?",
            textZh: "我很喜欢这个公寓，想继续推进。签租约需要做什么？",
            casualVersion: "Love the apt, wanna move forward. What's next to sign the lease?",
            commonMistake: {
              wrong: "I want to sign the lease.",
              correct: "I'd like to sign the lease.",
              explanation: "“I want” 听起来不够礼貌，用 “I'd like to” 更委婉客气。",
            },
            formalityVariants: {
              casual: "Love the apt, wanna move forward. What's next to sign the lease?",
              standard: "I love the apartment and I'd like to move forward. What do I need to do to sign the lease?",
              formal: "I'm very pleased with the apartment and would like to proceed with the lease agreement. Could you please advise on the necessary steps to finalize the signing?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Great! First, I'll need to run a background check and credit check. You'll need to fill out an application and provide proof of income — usually two recent pay stubs or a bank statement. There's a $50 non-refundable application fee.",
            textZh: "太好了！首先，我需要做背景调查和信用调查。你需要填一份申请表并提供收入证明——通常是最近两个月的工资单或银行流水。申请费50美元，不可退。",
            keyPhrases: [
              { en: "background check", zh: "背景调查" },
              { en: "credit check", zh: "信用调查" },
              { en: "proof of income", zh: "收入证明" },
              { en: "pay stubs", zh: "工资单" },
              { en: "non-refundable", zh: "不可退的" },
            ],
            vocabNotes: {
              "credit check": {
                meaningInContext: "在这句话里表示：查你的信用记录分数。美国的信用分（credit score）影响租房审批。新移民可能没有信用记录",
                similarUsage: "类似用法：Your credit score needs to be at least 650 to qualify.",
              },
            },
            alternativeExpressions: [
              { textEn: "Awesome! So here's the deal — we run a background and credit check on all applicants. I'll need you to fill out an app and show proof of income. Pay stubs or a bank statement works. There's a $50 app fee, non-refundable.", textZh: "太好了！是这样——我们对所有申请人做背调和信用检查。你需要填一份申请表并提供收入证明。工资单或银行流水都行。申请费50美元，不退。", actionHint: "here's the deal = 是这样的；app = application 的缩写", frequency: "common" },
              { textEn: "Great! Standard process — I'll need to run your background and credit. Fill out the application, and bring two recent pay stubs or a bank statement. There's a $50 processing fee, just a heads-up.", textZh: "太好了！标准流程——我需要做背调和信用调查。填一下申请表，带最近两份工资单或银行流水。有50美元的处理费，提醒一下。", actionHint: "just a heads-up = 提醒一下", frequency: "common" },
            ],
            casualVersion: "Awesome! First, gotta run background and credit checks. You'll fill out an application and show proof of income – like two recent pay stubs or a bank statement. Application fee's $50, non-refundable.",
            culturalNote: "美国租房常要求背景和信用检查，隐私观念不同",
            formalityVariants: {
              casual: "Awesome! First, gotta run background & credit checks. You'll fill out an application, show income proof – like two recent pay stubs or a bank statement. Application fee's $50, non-refundable.",
              standard: "Great! First, I'll need to run a background check and credit check. You'll need to fill out an application and provide proof of income — usually two recent pay stubs or a bank statement. There's a $50 non-refundable application fee.",
              formal: "Excellent! Initially, a comprehensive background check and credit assessment will be conducted. Applicants are required to complete an application form and furnish documentation of income, such as two recent pay stubs or a current bank statement. A non-refundable application fee of $50 applies.",
            },
          },
          {
            speaker: "you",
            textEn: "I just moved to the US six months ago, so I might not have a strong credit history. Is that a problem?",
            textZh: "我半年前才搬到美国，所以信用记录可能不太好。这有问题吗？",
            casualVersion: "Just moved to the US six months ago, so my credit might not be great. Is that an issue?",
            culturalNote: "初到美国信用记录是难题，需提前了解应对方式",
            commonMistake: {
              wrong: "My credit history is not good.",
              correct: "My credit history might not be strong/great.",
              explanation: "用 “not good” 描述信用记录听起来过于直接，“not strong” 或 “not great” 更地道委婉。",
            },
            formalityVariants: {
              casual: "Just moved to the US six months ago, so my credit might not be great. Is that an issue?",
              standard: "I just moved to the US six months ago, so I might not have a strong credit history. Is that a problem?",
              formal: "Having only recently relocated to the United States six months prior, my credit history may not be fully established. Would this pose a significant concern?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "That's not uncommon for international tenants. In that case, I can accept a larger security deposit — typically an extra month's rent — or a co-signer who has good credit. You could also provide a reference letter from your employer.",
            textZh: "这对国际租户来说很常见。这种情况我可以接受更大的押金——通常多一个月租金——或者一个信用良好的担保人。你也可以提供雇主的推荐信。",
            keyPhrases: [
              { en: "credit history", zh: "信用记录" },
              { en: "security deposit", zh: "押金/保证金" },
              { en: "co-signer", zh: "担保人/共同签署人" },
              { en: "reference letter", zh: "推荐信" },
            ],
            alternativeExpressions: [
              { textEn: "No worries — we work with international renters all the time. We can figure out an alternative arrangement.", textZh: "没问题——我们经常和国际租户合作。我们可以想其他办法。", actionHint: "讨论替代方案", frequency: "common" },
            ],
            casualVersion: "Yeah, that's pretty common for international folks. If that's the case, I can take a bigger security deposit – usually an extra month's rent – or a co-signer with good credit. Also, you could get an employer reference letter.",
            formalityVariants: {
              casual: "Yeah, that's pretty common for international folks. If that's the case, I can take a bigger security deposit – usually an extra month's rent – or a co-signer with good credit. Also, you could get an employer reference letter.",
              standard: "That's not uncommon for international tenants. In that case, I can accept a larger security deposit — typically an extra month's rent — or a co-signer who has good credit. You could also provide a reference letter from your employer.",
              formal: "Such circumstances are not unusual for international applicants. In these situations, I am able to accept either an increased security deposit, typically equivalent to an additional month's rent, or require a co-signer possessing a favorable credit standing. Alternatively, a letter of reference from your current employer would be acceptable.",
            },
          },
          {
            speaker: "you",
            textEn: "I can pay a larger deposit. What are the key terms in the lease I should know about?",
            textZh: "我可以付更多押金。租约里有什么关键条款需要了解的？",
            casualVersion: "I can do a bigger deposit. What are the main things I should know in the lease?",
            commonMistake: {
              wrong: "What is important terms?",
              correct: "What are the key/important terms?",
              explanation: "“terms” 是复数，动词应用 “are” 而非 “is”；“key” 或 “important” 前需加定冠词 “the”。",
            },
            formalityVariants: {
              casual: "I can do a bigger deposit. What are the main things I should know in the lease?",
              standard: "I can pay a larger deposit. What are the key terms in the lease I should know about?",
              formal: "I am prepared to provide an increased deposit. Could you please outline the principal terms and conditions of the lease agreement that I should be aware of?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "The lease is 12 months. Here are the main points: rent is due on the first of each month. There's a $75 late fee after the 5th. You'll need renter's insurance — that's typically $15 to $30 a month. Early termination requires 60 days' notice and a penalty equal to two months' rent.",
            textZh: "租约是12个月。主要条款：每月1号交租。5号之后有75美元的滞纳金。你需要买租客保险——通常每月15到30美元。提前终止需要提前60天通知并支付两个月租金的违约金。",
            keyPhrases: [
              { en: "lease", zh: "租约" },
              { en: "due on the first", zh: "每月1号到期" },
              { en: "late fee", zh: "滞纳金" },
              { en: "renter's insurance", zh: "租客保险" },
              { en: "early termination", zh: "提前终止" },
              { en: "penalty", zh: "违约金" },
            ],
            culturalMeaning: "在美国，renter's insurance（租客保险）几乎是强制的。它保障你个人物品被盗或火灾损失，也保障你意外造成的损害。价格很便宜但非常重要。",
            alternativeExpressions: [
              { textEn: "It's a 12-month lease. Rent's due on the 1st — after the 5th, there's a $75 late fee. You'll need renter's insurance, runs about 15 to 30 bucks a month. If you need to break the lease early, it's 60 days' notice plus two months' rent as a penalty.", textZh: "12个月租约。每月1号交租——5号以后有75美元滞纳金。你需要买租客保险，大约每月15到30美元。如果需要提前解约，提前60天通知加两个月租金违约金。", actionHint: "break the lease = 提前解约", frequency: "common" },
              { textEn: "Lease runs 12 months. Rent's due the 1st of each month, $75 late charge after the 5th. Renter's insurance is required — it's cheap, like 15-30 a month. Early termination means 60 days' notice and a two-month penalty.", textZh: "租约12个月。每月1号交租，5号后收75美元滞纳金。租客保险是必须的——很便宜，每月大概15到30。提前终止需要提前60天通知和两个月违约金。", actionHint: "lease runs 12 months = 租约持续12个月", frequency: "common" },
            ],
            casualVersion: "It's a 12-month lease. Main stuff: rent's due on the 1st. $75 late fee after the 5th. You'll need renter's insurance – usually $15-30 a month. Breaking the lease early means 60 days' notice and a penalty of two months' rent.",
            culturalNote: "美国租房常要求购买租客保险，这是租客的责任。",
            formalityVariants: {
              casual: "It's a 12-month lease. Main stuff: rent's due on the 1st. $75 late fee after the 5th. You'll need renter's insurance – usually $15-30 a month. Breaking the lease early means 60 days' notice and a penalty of two months' rent.",
              standard: "The lease is 12 months. Here are the main points: rent is due on the first of each month. There's a $75 late fee after the 5th. You'll need renter's insurance — that's typically $15 to $30 a month. Early termination requires 60 days' notice and a penalty equal to two months' rent.",
              formal: "The lease term is for a duration of 12 months. Key provisions include rent being due on the first calendar day of each month, with a $75 late fee imposed after the fifth day. Renter's insurance is mandatory, typically costing between $15 and $30 monthly. Early termination of the lease necessitates a 60-day written notice and incurs a penalty equivalent to two months' rent.",
            },
          },
          {
            speaker: "you",
            textEn: "What's renter's insurance exactly? We don't have that in China. And can I negotiate the rent at all?",
            textZh: "租客保险具体是什么？中国没有这个。还有，租金可以商量吗？",
            casualVersion: "So, what exactly is renter's insurance? We don't have that back home. And can I haggle on the rent at all?",
            culturalNote: "在中国，租客保险不普及，租金可协商但有技巧",
            commonMistake: {
              wrong: "Can I negotiate the rent?",
              correct: "Can I negotiate the rent at all?",
              explanation: "“at all” 强调是否“完全”有可能协商，语气更自然、委婉。",
            },
            formalityVariants: {
              casual: "So, what exactly is renter's insurance? We don't have that back home. And can I haggle on the rent at all?",
              standard: "What's renter's insurance exactly? We don't have that in China. And can I negotiate the rent at all?",
              formal: "Could you please elaborate on the nature of renter's insurance, as this concept is not prevalent in China? Furthermore, is there any flexibility regarding the rental amount?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Renter's insurance covers your personal belongings if there's theft, fire, or water damage. It also covers liability — like if someone gets injured in your apartment. Most people get it through Lemonade or State Farm. As for the rent, I can offer $1,750 if you sign an 18-month lease instead of 12.",
            textZh: "租客保险保障你的个人物品在被盗、火灾或水灾时的损失。也保障责任——比如有人在你公寓受伤。大多数人通过 Lemonade 或 State Farm 买。至于租金，如果你签18个月而不是12个月，我可以给1750美元。",
            keyPhrases: [
              { en: "personal belongings", zh: "个人物品" },
              { en: "liability", zh: "责任/赔偿责任" },
              { en: "water damage", zh: "水灾损失" },
              { en: "negotiate", zh: "谈判/商量" },
            ],
            vocabNotes: {
              "liability": {
                meaningInContext: "在保险中表示：如果别人在你的住处受伤，你需要承担的法律赔偿责任",
                similarUsage: "类似用法：Liability insurance protects you from lawsuits.",
              },
            },
            alternativeExpressions: [
              { textEn: "Renter's insurance basically protects your stuff — like if there's a fire or a break-in. It also covers you if someone gets hurt in your place. Most people use Lemonade or State Farm, super easy to set up. As for the rent, I could do $1,750 if you're willing to sign for 18 months.", textZh: "租客保险基本上保护你的东西——比如发生火灾或入室盗窃。也保障如果有人在你住处受伤的情况。大多数人用Lemonade或State Farm，很容易办。至于租金，如果你愿意签18个月，我可以给1750。", actionHint: "break-in = 入室盗窃", frequency: "common" },
              { textEn: "It covers your personal property — theft, fire, water damage, all that. Plus liability in case someone gets injured at your place. Lemonade or State Farm are the go-to options. On the rent, if you'd do an 18-month lease, I can bring it down to $1,750.", textZh: "保障你的个人财产——盗窃、火灾、水灾都包。加上如果有人在你家受伤的责任险。Lemonade或State Farm是最常用的选择。租金方面，如果你签18个月，我可以降到1750。", actionHint: "go-to options = 首选；bring it down to = 降到", frequency: "common" },
            ],
            casualVersion: "Renter's insurance covers your stuff if it gets stolen, or from fire/water damage. Plus, it covers you if someone gets hurt in your place. Folks usually go with Lemonade or State Farm. On the rent, I can do $1,750 if you go for an 18-month lease instead of 12.",
            formalityVariants: {
              casual: "Renter's insurance covers your stuff if it gets stolen, or from fire/water damage. Plus, it covers you if someone gets hurt in your place. Folks usually go with Lemonade or State Farm. On the rent, I can do $1,750 if you go for an 18-month lease instead of 12.",
              standard: "Renter's insurance covers your personal belongings if there's theft, fire, or water damage. It also covers liability — like if someone gets injured in your apartment. Most people get it through Lemonade or State Farm. As for the rent, I can offer $1,750 if you sign an 18-month lease instead of 12.",
              formal: "Renter's insurance provides coverage for your personal possessions against incidents such as theft, fire, or water damage. Additionally, it includes liability protection, for instance, in the event an individual sustains an injury within your apartment. Popular providers include Lemonade and State Farm. Regarding the rental rate, I am prepared to offer $1,750 per month, contingent upon committing to an 18-month lease term as opposed to a 12-month agreement.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds fair. When can I move in, and how do I pay the first month's rent and deposit?",
            textZh: "听起来合理。什么时候可以搬进去？第一个月租金和押金怎么付？",
            casualVersion: "Sounds good. When can I move in? And how do I pay the first month's rent and deposit?",
            formalityVariants: {
              casual: "Sounds good. When can I move in? And how do I pay the first month's rent and deposit?",
              standard: "That sounds fair. When can I move in, and how do I pay the first month's rent and deposit?",
              formal: "That arrangement seems equitable. Could you please inform me of the earliest move-in date and specify the accepted methods for the initial rent and security deposit payment?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "The apartment will be ready on the 1st. Before move-in, you'll need to pay first month's rent, last month's rent, and the security deposit — that's $5,250 total. I accept certified checks or bank transfers. No cash, no Venmo for the initial payment. We'll do a walk-through together on move-in day to document the condition of the apartment.",
            textZh: "公寓1号可以入住。搬入前需要支付第一个月租金、最后一个月租金和押金——总共5250美元。我接受银行支票或转账。首次付款不收现金，也不收 Venmo。搬入当天我们会一起检查公寓记录房屋状况。",
            keyPhrases: [
              { en: "first month's rent", zh: "第一个月租金" },
              { en: "last month's rent", zh: "最后一个月租金" },
              { en: "certified checks", zh: "银行支票" },
              { en: "bank transfers", zh: "银行转账" },
              { en: "walk-through", zh: "检查/验房" },
              { en: "document the condition", zh: "记录房屋状况" },
            ],
            alternativeExpressions: [
              { textEn: "You can move in on the 1st. Before that, I'll need first and last month's rent plus the deposit — that's $5,250 total. Certified check or wire transfer only for the first payment. On move-in day, we'll walk through the place together and note everything.", textZh: "1号可以搬进来。之前需要付首月和末月租金加押金——总共5250美元。首次付款只接受银行支票或电汇。搬入当天我们会一起验房并记录所有情况。", actionHint: "wire transfer = 电汇；note everything = 记录一切", frequency: "common" },
              { textEn: "Place'll be ready the 1st. Before you get the keys, I need first month, last month, and the security deposit — $5,250 all in. I take certified checks or bank transfers, no cash or Venmo for this. And on day one, we'll do a full walk-through to document everything.", textZh: "1号就准备好了。拿钥匙之前我需要首月、末月和押金——总共5250美元。接受银行支票或转账，这笔不收现金或Venmo。第一天我们会做一次完整的验房记录一切。", actionHint: "all in = 总共；day one = 第一天", frequency: "common" },
            ],
            casualVersion: "Apt's ready on the 1st. Before moving in, you'll pay first month's, last month's, and the security deposit – that's $5,250 total. I take certified checks or bank transfers. No cash, no Venmo for the first payment. We'll walk through the place together on move-in day to document its condition.",
            culturalNote: "美国租房通常会收首月、末月租金加押金，总额较高。",
            formalityVariants: {
              casual: "Apt's ready on the 1st. Before moving in, you'll pay first month's, last month's, and the security deposit – that's $5,250 total. I take certified checks or bank transfers. No cash, no Venmo for the first payment. We'll walk through the place together on move-in day to document its condition.",
              standard: "The apartment will be ready on the 1st. Before move-in, you'll need to pay first month's rent, last month's rent, and the security deposit — that's $5,250 total. I accept certified checks or bank transfers. No cash, no Venmo for the initial payment. We'll do a walk-through together on move-in day to document the condition of the apartment.",
              formal: "The apartment will be available for occupancy on the first of the month. Prior to move-in, the payment of the first month's rent, the final month's rent, and the security deposit will be required, totaling $5,250. Accepted payment methods include certified checks or bank transfers; please note that cash or Venmo are not permissible for this initial transaction. A joint walk-through will be conducted on the day of move-in to formally document the apartment's pre-occupancy condition.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 酒店延住/换房 ====================
  {
    id: "accommodation-8",
    category: "accommodation",
    titleZh: "酒店延住与换房",
    titleEn: "Hotel Extension & Room Change",
    description: "在酒店需要延长住宿或换房间时的沟通",
    otherRole: "酒店前台",
    otherRoleIcon: "🏨",
    flows: [
      // --- Flow 1: 延长住宿 ---
      {
        id: "extend-stay",
        titleZh: "延长住宿",
        titleEn: "Extending Your Stay",
        description: "旅行计划改变需要多住几天",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm in Room 512. I was supposed to check out tomorrow, but my plans have changed. Is it possible to extend my stay for three more nights?",
            textZh: "你好，我住512房间。原定明天退房，但计划有变。能延住三个晚上吗？",
            casualVersion: "Hey, I'm in 512. Was supposed to check out tomorrow, but plans changed. Can I extend three more nights?",
            commonMistake: {
              wrong: "My plans changed.",
              correct: "My plans have changed.",
              explanation: "“计划有变” 英文常用完成时表达，更自然。",
            },
            formalityVariants: {
              casual: "Hey, I'm in 512. Plans changed, can I stay three more nights?",
              standard: "Hi, I'm in Room 512. My plans have changed, and I was wondering if it's possible to extend my stay for three more nights.",
              formal: "Good morning/afternoon, I am a guest residing in Room 512. My original check-out date was scheduled for tomorrow, however, there has been a change in my travel arrangements. Might I inquire about the possibility of extending my reservation for an additional three evenings?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Let me check our availability... Good news, we can accommodate you through Thursday. However, the rate might change since you're extending beyond your original booking.",
            textZh: "我查一下空房……好消息，可以给你安排到周四。不过因为超出了原来的预订，房价可能会有变化。",
            keyPhrases: [
              { en: "extend my stay", zh: "延住/延长住宿" },
              { en: "availability", zh: "空房情况" },
              { en: "accommodate you", zh: "给你安排" },
              { en: "rate might change", zh: "房价可能变化" },
            ],
            alternativeExpressions: [
              { textEn: "I'll look into it. We're quite busy this week, so I might need to move you to a different room for the extra nights.", textZh: "我查一下。这周很忙，额外的晚上可能需要给你换个房间。", actionHint: "确认是否可以接受换房", frequency: "occasional" },
            ],
            casualVersion: "Lemme check... Good news, you're good 'til Thursday. But the rate might be different 'cause you're extending.",
            formalityVariants: {
              casual: "Lemme check... Yeah, you can stay 'til Thursday. But the price might be different.",
              standard: "Let me just check our availability for you... Good news, we can certainly accommodate you through Thursday. Please note, however, that the room rate may differ as this extends beyond your original booking.",
              formal: "Allow me a moment to ascertain our current availability... I am pleased to inform you that we can indeed accommodate your request to extend your stay through Thursday. Please be advised, however, that the applicable room rate may be subject to adjustment, as this period extends beyond your initial reservation.",
            },
          },
          {
            speaker: "you",
            textEn: "What would the rate be? I was paying $129 per night through my original booking.",
            textZh: "房价是多少？我原来的预订是每晚129美元。",
            casualVersion: "What's the rate? I was paying 129 a night.",
            commonMistake: {
              wrong: "How much for the rate?",
              correct: "What would the rate be?",
              explanation: "询问价格直接用 \"What's the rate?\" 或 \"How much is it?\"",
            },
            formalityVariants: {
              casual: "So, what's the new rate? I was paying 129.",
              standard: "Could you please inform me of the new rate? My original booking was $129 per night.",
              formal: "Might I inquire as to the revised nightly rate? My initial reservation was secured at a rate of $129 per evening.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "The current walk-in rate for the same room type is $179 per night. But since you're an existing guest, I can offer you a loyalty discount — $149 per night for the three extra nights. Would that work?",
            textZh: "同房型目前的散客价是每晚179美元。但因为你是在住客人，我可以给你忠诚度折扣——额外三晚每晚149美元。可以吗？",
            keyPhrases: [
              { en: "walk-in rate", zh: "散客价/现场价" },
              { en: "room type", zh: "房型" },
              { en: "loyalty discount", zh: "忠诚度折扣" },
              { en: "existing guest", zh: "在住客人" },
            ],
            vocabNotes: {
              "walk-in rate": {
                meaningInContext: "在这句话里表示：没有提前预订、现场直接入住的价格，通常比网上预订贵",
                similarUsage: "类似用法：Walk-in rates are always higher than online prices.",
              },
            },
            alternativeExpressions: [
              { textEn: "Normally the rack rate is $179 for that room type. But since you're already staying with us, I can do $149 a night for the extra three. How's that sound?", textZh: "那个房型正常挂牌价是179美元。但因为你已经住在这了，额外三晚我可以给你149一晚。怎么样？", actionHint: "rack rate = 挂牌价/门市价；how's that sound = 怎么样", frequency: "common" },
              { textEn: "The going rate right now is $179, but I can give you a returning guest rate of $149 per night. That's for the three additional nights.", textZh: "现在的行情价是179，但我可以给你回头客价149一晚。这是额外三晚的价格。", actionHint: "going rate = 行情价；returning guest rate = 回头客价", frequency: "occasional" },
            ],
            casualVersion: "Walk-in rate's 179 for that room. But since you're already here, I can do 149 a night for the three extra nights. Sound good?",
            formalityVariants: {
              casual: "Walk-in rate's 179. But, you're here, so I can do 149 for the three nights. Cool?",
              standard: "The standard walk-in rate for this room type is $179 per night. However, as a gesture of appreciation for our existing guests, I can offer you a loyalty discount, bringing the rate to $149 per night for the additional three nights. Would that be acceptable?",
              formal: "The prevailing published rate for this specific room category is $179 per evening. Nevertheless, in consideration of your current residency with us, I am authorized to extend a loyalty discount, adjusting the rate to $149 per night for the three supplementary evenings. Would this arrangement be amenable to you?",
            },
          },
          {
            speaker: "you",
            textEn: "Is there any way to get it closer to my original rate? I'm a member of your rewards program.",
            textZh: "有没有办法接近我原来的价格？我是你们会员计划的会员。",
            casualVersion: "Any way to get it closer to my old rate? I'm in your rewards program.",
            commonMistake: {
              wrong: "Can I closer to my original rate?",
              correct: "Is there any way to get it closer to my original rate?",
              explanation: "英文表达“接近某个价格”用 \"get it closer to\" 更自然。",
            },
            formalityVariants: {
              casual: "Can't get it closer to what I was paying? I'm a rewards member.",
              standard: "Would it be possible to obtain a rate more aligned with my original booking? I am also a member of your rewards program.",
              formal: "I was wondering if there might be any possibility of achieving a rate that more closely approximates my initial reservation. Furthermore, I am a registered participant in your esteemed rewards program.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Let me check your membership level... You're a Gold member! With your member rate, I can bring it down to $139 per night. I can also add 500 bonus points per night to your account. Shall I go ahead and extend your reservation?",
            textZh: "我查一下你的会员等级……你是金卡会员！用会员价可以降到每晚139美元。我还可以每晚给你账户加500积分。要我帮你延长预订吗？",
            keyPhrases: [
              { en: "membership level", zh: "会员等级" },
              { en: "member rate", zh: "会员价" },
              { en: "bonus points", zh: "奖励积分" },
              { en: "extend your reservation", zh: "延长预订" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, you're Gold! Nice. That gets you the member rate — $139 a night. Plus I'll throw 500 points per night onto your account. Want me to go ahead and book it?", textZh: "哦，你是金卡！不错。可以用会员价——每晚139。加上我每晚给你账户加500积分。要我帮你订吗？", actionHint: "throw points onto = 给你加积分", frequency: "common" },
              { textEn: "Ah, Gold member — that helps! I can bring the rate down to $139 with your member discount, plus 500 bonus points a night. Shall I extend it?", textZh: "啊，金卡会员——那就好办了！用会员折扣可以降到139，加上每晚500奖励积分。要我延长吗？", actionHint: "that helps = 那就好办了", frequency: "common" },
            ],
            casualVersion: "Lemme check your member level... Oh, you're Gold! Okay, for you, it's 139 a night. And I'll throw in 500 bonus points each night. Wanna extend?",
            formalityVariants: {
              casual: "Checking your membership... Gold! Okay, 139 a night for you, plus 500 bonus points. Want me to extend it?",
              standard: "Allow me to verify your membership level... Ah, I see you are a Gold member! With your preferred member rate, I can offer you $139 per night. Additionally, I can credit your account with 500 bonus points per night. Would you like me to proceed with extending your reservation?",
              formal: "Kindly permit me to ascertain your membership tier... Indeed, you hold Gold status! Based on your distinguished membership, I am authorized to adjust the rate to $139 per evening. Furthermore, I can append 500 supplementary bonus points per night to your esteemed account. Shall I proceed with the extension of your reservation?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. Can I keep the same room? I've already unpacked everything.",
            textZh: "好的，麻烦了。我能保留同一间房间吗？我东西都拆开了。",
            casualVersion: "Yeah, sounds good. Can I stay in this room? Already unpacked.",
            commonMistake: {
              wrong: "I have unpacked all things.",
              correct: "I've already unpacked everything.",
              explanation: "英文中 \"everything\" 比 \"all things\" 更常用。",
            },
            formalityVariants: {
              casual: "Yeah, great. Can I just keep this room? Everything's out.",
              standard: "Yes, that would be wonderful, thank you. Is it possible for me to retain the same room? I have already fully unpacked my belongings.",
              formal: "Indeed, that would be most acceptable. I was wondering if it would be feasible to remain in my current room, as I have already fully organized my personal effects within it.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Yes, you can stay in Room 512. I've extended your reservation through Thursday checkout at 11 AM. I'll update the key card as well — just tap it on the reader next time and it will work. Anything else I can help with?",
            textZh: "可以，你继续住512房间。我已经把你的预订延长到周四上午11点退房。门卡也会更新——下次在读卡器上刷一下就行。还有什么需要帮忙的吗？",
            keyPhrases: [
              { en: "checkout", zh: "退房" },
              { en: "key card", zh: "门卡/房卡" },
              { en: "tap it on the reader", zh: "在读卡器上刷一下" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely, Room 512 is yours through Thursday. Checkout's at 11 AM. I'll reprogram your key card — just give it a tap next time and you'll be good. Anything else?", textZh: "当然，512房间到周四都是你的。上午11点退房。我重新编程一下你的房卡——下次刷一下就行。还有别的吗？", actionHint: "you'll be good = 就没问题了", frequency: "common" },
              { textEn: "Done! You're all set in 512 through Thursday, 11 AM checkout. Card's updated — it'll work fine. Need anything else?", textZh: "搞定！512到周四，上午11退房。卡更新好了——正常使用。还需要什么？", actionHint: "you're all set = 都安排好了", frequency: "common" },
            ],
            casualVersion: "Yep, you're good for 512. Extended you through Thursday, 11 AM checkout. Key card's updated too — just tap it on the reader. Need anything else?",
            formalityVariants: {
              casual: "Yep, 512's all yours. Extended 'til Thursday, 11 AM checkout. Key card's updated, just tap it. Anything else?",
              standard: "Yes, you may certainly remain in Room 512. I have successfully extended your reservation through Thursday, with an 11 AM checkout time. Your key card has also been updated; simply tap it on the reader for future access. Is there anything further I can assist you with?",
              formal: "Affirmative, you are confirmed to retain Room 512. Your reservation has been duly extended through Thursday, with a scheduled departure time of 11:00 AM. Furthermore, your key card has been re-encoded; subsequent access can be gained by simply presenting it to the reader. Might there be any additional assistance I can provide at this juncture?",
            },
          },
          {
            speaker: "you",
            textEn: "Actually, could I also get some extra towels? And is late checkout possible on Thursday?",
            textZh: "对了，能多给几条毛巾吗？周四可以延迟退房吗？",
            casualVersion: "Uh, actually, can I get more towels? And can I check out late Thursday?",
            commonMistake: {
              wrong: "Can give me extra towels?",
              correct: "Could I also get some extra towels?",
              explanation: "英文中请求别人时通常需要主语 \"you\" 或 \"I\" 开头。",
            },
            formalityVariants: {
              casual: "Actually, can I get extra towels? And, uh, late checkout on Thursday?",
              standard: "Actually, I was wondering if it would be possible to request some additional towels? Also, may I inquire about the possibility of a late checkout on Thursday?",
              formal: "Actually, might I also respectfully request some supplementary towels? Furthermore, I would be most grateful if you could advise whether a late departure on Thursday would be an available option.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I'll have housekeeping bring extra towels to your room. As for late checkout, we can offer 1 PM for Gold members at no extra charge. If you need until 3 PM, there's a $30 fee. Just let us know on Thursday morning.",
            textZh: "我让客房服务送额外毛巾到你房间。至于延迟退房，金卡会员可以免费延到下午1点。如果需要到下午3点要加30美元。周四早上告诉我们就行。",
            keyPhrases: [
              { en: "housekeeping", zh: "客房服务" },
              { en: "late checkout", zh: "延迟退房" },
              { en: "at no extra charge", zh: "不额外收费" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, I'll send some towels up. For late checkout, as a Gold member you get 1 PM free. If you need until 3, it's an extra $30. Just let us know Thursday morning.", textZh: "没问题，我让人送毛巾上去。延迟退房的话，金卡会员可以免费到下午1点。需要到3点的话加30美元。周四早上告诉我们就行。", actionHint: "send some up = 送上去", frequency: "common" },
              { textEn: "Towels — I'm on it, housekeeping will bring them up. Late checkout — Gold members get a free extension to 1 PM. Want 3 PM? That's $30. No rush, decide Thursday morning.", textZh: "毛巾——我安排，客房服务会送上来。延迟退房——金卡会员免费延到下午1点。要到3点？30美元。不急，周四早上决定就行。", actionHint: "I'm on it = 我来处理；no rush = 不急", frequency: "common" },
            ],
            casualVersion: "I'll get housekeeping to bring up some extra towels. For late checkout, Gold members get 1 PM free. If you need 'til 3 PM, it's 30 bucks. Just tell us Thursday morning.",
            formalityVariants: {
              casual: "Housekeeping will bring up towels. Gold members get 1 PM late checkout free. 3 PM is 30 bucks. Just tell us Thursday.",
              standard: "Certainly, I will arrange for housekeeping to deliver extra towels to your room. Regarding late checkout, as a Gold member, we can offer you a complimentary extension until 1 PM. Should you require checkout until 3 PM, there would be an additional charge of $30. Please simply inform us of your preference on Thursday morning.",
              formal: "Most certainly, I shall arrange for our housekeeping department to deliver the requested additional towels to your room. Pertaining to your inquiry regarding a late checkout, as a valued Gold member, we are pleased to offer a complimentary extension until 1:00 PM. Should your requirements necessitate a departure time as late as 3:00 PM, a supplementary fee of $30 would apply. Kindly advise us of your decision on Thursday morning.",
            },
          },
        ],
      },

      // --- Flow 2: 换房间 ---
      {
        id: "room-change",
        titleZh: "换房间",
        titleEn: "Requesting a Room Change",
        description: "对当前房间不满意要求换房",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to request a room change. My current room faces the street and the traffic noise is keeping me up at night.",
            textZh: "你好，我想要求换房间。我现在的房间朝街，交通噪音让我晚上睡不着。",
            casualVersion: "Hey, need to change rooms. My current one faces the street and the traffic noise is totally keeping me up.",
            commonMistake: {
              wrong: "I want to change room.",
              correct: "I'd like to request a room change.",
              explanation: "“I want to” 听起来比较直接生硬，用 “I'd like to” 更礼貌客气；“room” 是可数名词，但通常习惯用复数 “rooms” 来指代酒店房间。",
            },
            formalityVariants: {
              casual: "Hey, can I switch rooms? This one's facing the street and it's super noisy at night.",
              standard: "Hi, I'd like to request a room change. My current room faces the street and the traffic noise is keeping me up at night.",
              formal: "Good morning/afternoon. I am calling to inquire about the possibility of changing rooms. My current accommodations are situated facing the street, and regrettably, the ambient traffic noise has been disruptive to my sleep.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I'm sorry to hear that. Let me see what's available. Would you prefer a room facing the courtyard? Those tend to be much quieter.",
            textZh: "很抱歉。我看看有什么空房。你想要朝院子的房间吗？那些通常安静很多。",
            keyPhrases: [
              { en: "room change", zh: "换房间" },
              { en: "facing the street", zh: "朝街的" },
              { en: "traffic noise", zh: "交通噪音" },
              { en: "facing the courtyard", zh: "朝院子的" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, that's no fun. Let me see what we've got. How about a room facing the courtyard? Those are way quieter — you won't hear any street noise.", textZh: "哦，那可不好。我看看有什么房。朝院子的房间怎么样？那些安静多了——听不到街上的噪音。", actionHint: "that's no fun = 那不好/那可烦人了", frequency: "common" },
              { textEn: "Sorry about that — street-facing rooms can be noisy. Let me pull up what's open. Would a courtyard-view room work? Much more peaceful.", textZh: "抱歉——朝街的房间可能比较吵。我看看有什么空的。朝院子的房间可以吗？安静多了。", actionHint: "pull up = 查看/调出", frequency: "common" },
            ],
            casualVersion: "Oh, sorry to hear that. Lemme see what we got. Wanna room facing the courtyard? They're usually way quieter.",
            formalityVariants: {
              casual: "Bummer. Let me check what's open. Courtyard room sound good? Way quieter back there.",
              standard: "I'm sorry to hear that. Let me see what's available. Would you prefer a room facing the courtyard? Those tend to be much quieter.",
              formal: "I sincerely apologize for the inconvenience you've experienced. Allow me to ascertain our current room availability. Would you perhaps prefer an accommodation facing the courtyard? These particular rooms typically offer a significantly quieter environment.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, a courtyard-facing room would be great. And if possible, could I get a higher floor? I'm currently on the 2nd floor.",
            textZh: "好的，朝院子的房间就太好了。如果可能的话，能不能住高一点的楼层？我现在住2楼。",
            casualVersion: "Yeah, a courtyard room'd be awesome. And if you can, higher floor? I'm stuck on the second right now.",
            commonMistake: {
              wrong: "I want a higher floor.",
              correct: "Could I get a higher floor?",
              explanation: "直接说“我想要”会显得不礼貌，用 “Could I get...” 或者 “I'd like...” 更委婉礼貌。",
            },
            formalityVariants: {
              casual: "Totally, courtyard sounds perfect. And maybe a higher floor too? I'm on the second.",
              standard: "Yes, a courtyard-facing room would be great. And if possible, could I get a higher floor? I'm currently on the 2nd floor.",
              formal: "Indeed, a room facing the courtyard would be highly desirable. Furthermore, if feasible, I would appreciate being placed on a higher floor. My current room is situated on the second level.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I have a courtyard-facing room on the 8th floor available. It's the same room type as yours — king bed, same rate. I can have you moved within the hour. Would you like housekeeping to help move your belongings?",
            textZh: "8楼有一间朝院子的空房。和你现在的房型一样——大床房，同样价格。一小时内可以搬。需要客房服务帮你搬东西吗？",
            keyPhrases: [
              { en: "king bed", zh: "大床" },
              { en: "same rate", zh: "同样价格" },
              { en: "within the hour", zh: "一小时内" },
              { en: "move your belongings", zh: "搬你的东西" },
            ],
            alternativeExpressions: [
              { textEn: "The only available room on a higher floor is a suite — it's a $40 upgrade per night. Would you be interested?", textZh: "高楼层只剩一间套房了——每晚要加40美元升级。你有兴趣吗？", actionHint: "考虑是否愿意加钱升级", frequency: "occasional" },
            ],
            casualVersion: "Okay, got an 8th-floor courtyard room open. Same type as yours—king bed, same price. Can get you moved in like an hour. Want housekeeping to help with your stuff?",
            formalityVariants: {
              casual: "Got an 8th floor, courtyard room. Same as yours, king, same price. Can move you in an hour. Want help with your bags?",
              standard: "I have a courtyard-facing room on the 8th floor available. It's the same room type as yours — king bed, same rate. I can have you moved within the hour. Would you like housekeeping to help move your belongings?",
              formal: "I have located a suitable courtyard-facing room on the eighth floor. It is identical to your current room type, featuring a king-sized bed, and will be offered at the same rate. We can facilitate your relocation within the hour. Would you require assistance from our housekeeping staff with your personal belongings?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please have someone help me. I have a few suitcases. Also, will the Wi-Fi password be the same in the new room?",
            textZh: "好的，请派人帮我搬。我有几个行李箱。还有，新房间的Wi-Fi密码一样吗？",
            casualVersion: "Yeah, please send someone up. Got a few suitcases. Oh, and is the Wi-Fi password the same in the new room?",
            commonMistake: {
              wrong: "Wi-Fi password same?",
              correct: "Will the Wi-Fi password be the same?",
              explanation: "疑问句省略主谓会显得不够正式和完整，加上 “Will the...be the same” 更地道。",
            },
            formalityVariants: {
              casual: "Yep, please send help. Got a couple bags. Wi-Fi password still the same?",
              standard: "Yes, please have someone help me. I have a few suitcases. Also, will the Wi-Fi password be the same in the new room?",
              formal: "Yes, I would greatly appreciate assistance with my luggage, as I have several suitcases. Additionally, could you confirm whether the Wi-Fi password remains consistent in the new room?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Yes, the Wi-Fi is the same throughout the hotel. I'll send a bellhop to your room in about 15 minutes with a cart for your luggage. Your new room is 812. Here are the new key cards. Is there anything in your minibar or safe that you need to move?",
            textZh: "是的，整个酒店的Wi-Fi都一样。我大概15分钟后派一个行李员带推车到你房间。你的新房间是812。这是新的房卡。你的迷你吧或保险箱里有东西需要搬吗？",
            keyPhrases: [
              { en: "bellhop", zh: "行李员" },
              { en: "cart", zh: "推车" },
              { en: "minibar", zh: "迷你吧" },
              { en: "safe", zh: "保险箱" },
            ],
            vocabNotes: {
              "bellhop": {
                meaningInContext: "在这句话里表示：酒店帮客人搬运行李的工作人员，也叫 bellboy 或 porter",
                similarUsage: "类似用法：The bellhop will bring your bags to the room.",
              },
            },
            alternativeExpressions: [
              { textEn: "Wi-Fi's the same everywhere in the hotel, so you're good. I'll send someone up with a luggage cart in about 15. New room is 812 — here are your cards. Oh, got anything in the minibar or safe you need to grab?", textZh: "全酒店Wi-Fi都一样，不用担心。我大概15分钟后派人带行李车上来。新房间812——给你卡。哦，迷你吧或保险箱里有东西要拿吗？", actionHint: "you're good = 没问题的；grab = 拿", frequency: "common" },
              { textEn: "Same Wi-Fi throughout the building, no worries. A bellhop will be at your door in 15 minutes with a cart. Your new room is 812 — here are the key cards. Anything in your safe or minibar to move?", textZh: "整栋楼Wi-Fi一样，不用担心。行李员15分钟后带推车到你门口。新房间812——这是房卡。保险箱或迷你吧里有东西要搬吗？", actionHint: "throughout the building = 整栋楼", frequency: "common" },
            ],
            casualVersion: "Yep, Wi-Fi's hotel-wide. I'll send a bellhop up with a cart in like 15 minutes. New room's 812. Here are your new keys. Got anything in the minibar or safe you need to grab?",
            formalityVariants: {
              casual: "Yup, Wi-Fi's everywhere. Bellhop's coming up in about 15 with a cart for your bags. Room 812. New keys here. Anything in the minibar or safe?",
              standard: "Yes, the Wi-Fi is the same throughout the hotel. I'll send a bellhop to your room in about 15 minutes with a cart for your luggage. Your new room is 812. Here are the new key cards. Is there anything in your minibar or safe that you need to move?",
              formal: "Indeed, the Wi-Fi connectivity is uniform across the entire hotel premises. I shall dispatch a bellhop to your current room within approximately fifteen minutes, equipped with a cart for your luggage. Your new room assignment is 812. Here are your updated key cards. Kindly advise if you have any items in your minibar or safe deposit box that require transfer.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, I have my passport and some cash in the safe. Let me grab those first. And should I tip the bellhop?",
            textZh: "哦，保险箱里有我的护照和一些现金。让我先拿出来。行李员需要给小费吗？",
            culturalNote: "在美国，行李员帮你搬行李通常给2-5美元小费。如果行李很多可以适当多给。",
            casualVersion: "Oh, right, passport and cash are in the safe. Lemme get those first. And, uh, do I tip the bellhop?",
            formalityVariants: {
              casual: "Whoops, passport and cash are in the safe. Gotta get 'em. So, tip the bellhop?",
              standard: "Oh, I have my passport and some cash in the safe. Let me grab those first. And should I tip the bellhop?",
              formal: "Oh, I nearly forgot; my passport and some cash are secured in the safe. I must retrieve those first. Also, I wanted to inquire about the customary practice regarding gratuities for the bellhop.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Yes, definitely grab your valuables first. As for the bellhop, tipping is customary — usually two to five dollars depending on how much luggage. I apologize again for the noise issue. To make up for the inconvenience, I've added a complimentary breakfast for tomorrow to your room. Enjoy your stay!",
            textZh: "对，先把贵重物品拿好。行李员的话，给小费是惯例——通常2到5美元看行李多少。再次为噪音问题道歉。为了补偿不便，我给你房间加了明天的免费早餐。祝住宿愉快！",
            keyPhrases: [
              { en: "valuables", zh: "贵重物品" },
              { en: "customary", zh: "惯例的" },
              { en: "complimentary breakfast", zh: "免费早餐" },
              { en: "make up for", zh: "补偿" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, definitely get your passport and cash first. Tipping the bellhop is the norm — couple of bucks is fine, more if you've got a lot of bags. And hey, sorry again about the noise. I put a free breakfast on your room for tomorrow. Enjoy!", textZh: "对，先把护照和现金拿好。给行李员小费是惯例——两三块就行，行李多可以多给点。再次为噪音道歉。给你房间加了明天的免费早餐。享受！", actionHint: "couple of bucks = 两三美元；put it on your room = 加到你的房间账上", frequency: "common" },
              { textEn: "Good call — grab your valuables from the safe first. As for the bellhop, yeah, a couple dollars tip is customary. And to make up for the trouble, I've comped breakfast for tomorrow. Apologies again, and enjoy the new room!", textZh: "好主意——先从保险箱拿好贵重物品。行李员的话，给几美元小费是惯例。为了补偿不便，明天的早餐我免了。再次道歉，享受新房间！", actionHint: "good call = 好主意；comped = 免单了", frequency: "common" },
            ],
            casualVersion: "Yeah, for sure grab your valuables first. And about the bellhop, totally customary to tip — usually like two to five bucks, depends on your bags. Again, so sorry 'bout the noise. To make it up to you, I've put a free breakfast for tomorrow on your room. Enjoy!",
            formalityVariants: {
              casual: "Yep, get your important stuff first. Bellhop? Yeah, definitely tip 'em, like 2-5 bucks depending on the bags. So sorry about the noise again. Put a free breakfast on your room for tomorrow to say thanks. Have a good stay!",
              standard: "Yes, definitely grab your valuables first. As for the bellhop, tipping is customary — usually two to five dollars depending on how much luggage. I apologize again for the noise issue. To make up for the inconvenience, I've added a complimentary breakfast for tomorrow to your room. Enjoy your stay!",
              formal: "Indeed, I would strongly advise securing your valuables prior to the move. Regarding the bellhop, offering a gratuity is customary; typically, an amount between two and five dollars is appropriate, contingent upon the volume of luggage. I reiterate my apologies for the disruption caused by the noise. To compensate for this inconvenience, I have arranged for a complimentary breakfast to be added to your room for tomorrow. We hope you enjoy the remainder of your stay.",
            },
          },
          {
            speaker: "you",
            textEn: "That's very kind of you. Thank you for resolving this so quickly!",
            textZh: "你太好了。谢谢这么快解决了问题！",
            casualVersion: "That's super nice of you. Thanks for sorting this out so fast!",
            commonMistake: {
              wrong: "You are very kind.",
              correct: "That's very kind of you.",
              explanation: "表达感谢别人帮助时，用 “That's very kind of you” 更自然地道，而不是直接说“你很善良”。",
            },
            formalityVariants: {
              casual: "Oh, that's awesome. Thanks for fixing it so fast!",
              standard: "That's very kind of you. Thank you for resolving this so quickly!",
              formal: "That is exceedingly gracious of you. I truly appreciate your prompt and efficient resolution of this matter.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 退房与账单争议 ====================
  {
    id: "accommodation-9",
    category: "accommodation",
    titleZh: "退房与账单争议",
    titleEn: "Checkout & Billing Disputes",
    description: "酒店退房时发现账单有问题，需要核对和争议处理",
    otherRole: "酒店前台/经理",
    otherRoleIcon: "💳",
    flows: [
      // --- Flow 1: 账单核对与争议 ---
      {
        id: "billing-dispute",
        titleZh: "账单争议",
        titleEn: "Billing Dispute",
        description: "退房时发现额外收费需要核实和争议",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to check out. Room 408. Can I review my bill before I pay?",
            textZh: "你好，我要退房。408房间。付款前能看一下账单吗？",
            casualVersion: "Hey, checking out. Room 408. Can I just see the bill before I pay?",
            commonMistake: {
              wrong: "I want to check out.",
              correct: "I'd like to check out.",
              explanation: "用 \"I'd like to\" 比 \"I want to\" 更礼貌客气，尤其是在服务场合。",
            },
            formalityVariants: {
              casual: "Hey, checking out, room 408. Can I see the bill first?",
              standard: "Hi, I'd like to check out. Room 408. Can I review my bill before I pay?",
              formal: "Good morning/afternoon, I'm ready to check out. My room number is 408. May I please review the detailed invoice prior to processing payment?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Of course. Here's your itemized bill. Your room charges come to $387 for three nights, plus tax. There are also two charges from the restaurant and a minibar charge.",
            textZh: "当然。这是您的逐项账单。三晚房费387美元加税。还有两笔餐厅消费和一笔迷你吧消费。",
            keyPhrases: [
              { en: "check out", zh: "退房" },
              { en: "itemized bill", zh: "逐项账单/明细账单" },
              { en: "room charges", zh: "房费" },
              { en: "plus tax", zh: "加税" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! Here's your breakdown. Room comes to $387 for three nights, plus tax. You've also got two restaurant charges and one from the minibar on here.", textZh: "没问题！这是你的明细。三晚房费387美元加税。上面还有两笔餐厅消费和一笔迷你吧消费。", actionHint: "breakdown = 明细/分项列表", frequency: "common" },
              { textEn: "Of course — here's the full rundown. Three nights at $129 is $387 before tax. Then there's a couple of restaurant charges and a minibar charge.", textZh: "当然——这是完整的清单。三晚每晚129美元，税前387。然后有两笔餐厅消费和一笔迷你吧消费。", actionHint: "rundown = 清单/概要", frequency: "common" },
            ],
            casualVersion: "Sure, here's the itemized bill. Room was $387 for three nights, plus tax. And you've got two restaurant charges, plus a minibar charge.",
            formalityVariants: {
              casual: "Sure, here's the bill. Room's $387 for three nights, plus tax. Got two restaurant charges and a minibar, too.",
              standard: "Of course. Here's your itemized bill. Your room charges come to $387 for three nights, plus tax. There are also two charges from the restaurant and a minibar charge.",
              formal: "Certainly, here is your fully itemized statement. The accommodation charges total $387 for three nights, exclusive of tax. Additionally, you will see two separate charges from our restaurant and one from the minibar.",
            },
          },
          {
            speaker: "you",
            textEn: "Wait, I see a $45 minibar charge, but I didn't use the minibar at all. And there's a $22 restaurant charge from Tuesday — I wasn't even at the hotel that day.",
            textZh: "等一下，我看到一笔45美元的迷你吧消费，但我完全没有用迷你吧。还有周二一笔22美元的餐厅消费——那天我根本不在酒店。",
            casualVersion: "Hold on, minibar charge for $45? I didn't even *touch* the minibar. And a $22 restaurant charge from Tuesday? I wasn't even here that day.",
            commonMistake: {
              wrong: "I didn't use minibar.",
              correct: "I didn't use the minibar.",
              explanation: "minibar是特指的酒店设备，前面需要加定冠词 the。",
            },
            formalityVariants: {
              casual: "Wait, $45 for the minibar? I didn't use it. And a $22 restaurant charge from Tuesday — I wasn't even here then.",
              standard: "Wait, I see a $45 minibar charge, but I didn't use the minibar at all. And there's a $22 restaurant charge from Tuesday — I wasn't even at the hotel that day.",
              formal: "Excuse me, I seem to have a $45 charge for the minibar, which I did not utilize during my stay. Additionally, there is a $22 restaurant charge on Tuesday, when I was not present at the hotel.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Let me look into that. The minibar charge might be from our sensor system — sometimes it triggers when items are moved but not consumed. I can remove that right away. For the restaurant charge, let me check with the restaurant. Can you hold on a moment?",
            textZh: "我查一下。迷你吧的消费可能是我们的传感器系统——有时候物品被移动但没有消费也会触发计费。我可以马上删除。餐厅那笔我去跟餐厅核实。能稍等一下吗？",
            keyPhrases: [
              { en: "sensor system", zh: "传感器系统" },
              { en: "triggers", zh: "触发" },
              { en: "consumed", zh: "消费/使用" },
              { en: "remove that", zh: "删除/移除" },
              { en: "hold on a moment", zh: "稍等一下" },
            ],
            vocabNotes: {
              "triggers": {
                meaningInContext: "在这句话里表示：自动触发/激活计费系统。很多高档酒店的迷你吧有传感器，拿起物品就自动计费",
                similarUsage: "类似用法：Moving the bottle triggered the minibar charge.",
              },
            },
            alternativeExpressions: [
              { textEn: "Let me check on that. The minibar has sensors — sometimes just moving a bottle around sets it off. I'll go ahead and take that off. The restaurant charge, give me a sec to verify — can you hang on?", textZh: "我查一下。迷你吧有传感器——有时候只是挪了一下瓶子就触发计费了。我把那个先删掉。餐厅那笔我核实一下——你稍等一下？", actionHint: "sets it off = 触发了；take that off = 删掉", frequency: "common" },
              { textEn: "Hmm, the minibar charge could be a false reading from the sensors — happens more than you'd think. I'll remove it right now. For the restaurant one, let me double-check. Mind waiting a moment?", textZh: "嗯，迷你吧那笔可能是传感器误读——比你想象的更常见。我现在就删除。餐厅那笔我再核实一下。能等一下吗？", actionHint: "false reading = 误读；mind waiting = 介意等一下吗", frequency: "common" },
            ],
            casualVersion: "Lemme check on that. Minibar's probably the sensor system — sometimes it charges if you just move stuff. I can take that off right now. Restaurant charge, I'll go check with them. Can you wait a sec?",
            formalityVariants: {
              casual: "Lemme check. Minibar's probably just the sensor, I can take that off. For the restaurant charge, I'll check with them. Just a sec?",
              standard: "Let me look into that. The minibar charge might be from our sensor system — sometimes it triggers when items are moved but not consumed. I can remove that right away. For the restaurant charge, let me check with the restaurant. Can you hold on a moment?",
              formal: "Certainly, allow me to investigate that for you. The minibar charge is likely an automated sensor activation, which can occur if items are shifted without being consumed. I can immediately reverse that charge. Regarding the restaurant charge, I will need to verify with the restaurant directly. Would you be so kind as to hold for a brief moment?",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, I'll wait. Also, I noticed the nightly rate is $129, but three nights should be $387. With the tax of 14.5%, the total should be about $443. But the bill shows $468. Can you explain the difference?",
            textZh: "好的，我等。另外我注意到每晚是129美元，三晚应该是387美元。加上14.5%的税应该是大约443美元。但账单显示468美元。能解释一下差额吗？",
            casualVersion: "Yeah, I'll wait. Also, the nightly rate's $129, so three nights is $387. With 14.5% tax, that's like $443. But my bill says $468. What's up with the difference?",
            commonMistake: {
              wrong: "What is the difference?",
              correct: "Can you explain the difference?",
              explanation: "直接问 \"What is...\" 听起来像在质疑，用 \"Can you explain...\" 更委婉礼貌。",
            },
            formalityVariants: {
              casual: "Okay, I'll wait. Also, nightly rate is $129, so three nights is $387. With 14.5% tax, that's around $443. My bill says $468. What's that difference?",
              standard: "Sure, I'll wait. Also, I noticed the nightly rate is $129, but three nights should be $387. With the tax of 14.5%, the total should be about $443. But the bill shows $468. Can you explain the difference?",
              formal: "Yes, I can certainly wait. Furthermore, I've calculated that at a nightly rate of $129 for three nights, the subtotal is $387. Adding 14.5% tax, the estimated total should be approximately $443. However, my statement reflects a total of $468. Could you please clarify this discrepancy?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Good eye. The difference is our city tourism fee — it's $5 per night, plus a resort fee of $10 per night. Those are standard fees that apply to all guests. They should have been disclosed when you booked.",
            textZh: "观察得仔细。差额是我们的城市旅游费——每晚5美元，加上度假设施费每晚10美元。这些是所有客人都适用的标准费用。预订时应该已经告知了。",
            keyPhrases: [
              { en: "tourism fee", zh: "旅游费" },
              { en: "resort fee", zh: "度假设施费" },
              { en: "standard fees", zh: "标准费用" },
              { en: "disclosed", zh: "告知/披露" },
            ],
            alternativeExpressions: [
              { textEn: "Those extra charges are our mandatory facility fee and city tax. I understand it can be surprising — many guests ask about it.", textZh: "那些额外费用是我们的强制设施费和城市税。我理解这可能让人意外——很多客人都会问。", actionHint: "如果不满意可以要求详细解释或投诉", frequency: "common" },
            ],
            culturalMeaning: "在美国很多城市，酒店会收 resort fee/facility fee（度假设施费），这是除了标准税之外的额外费用。预订时要仔细看总价。",
            casualVersion: "Good catch. The difference is our city tourism fee — that's $5 a night — plus a $10 a night resort fee. Those are standard for everyone. Should've been mentioned when you booked.",
            formalityVariants: {
              casual: "Good eye. That's our city tourism fee — $5 a night — and a $10 a night resort fee. Standard for all guests. Should've been disclosed when you booked.",
              standard: "Good eye. The difference is our city tourism fee — it's $5 per night, plus a resort fee of $10 per night. Those are standard fees that apply to all guests. They should have been disclosed when you booked.",
              formal: "Excellent observation. The additional charges comprise our city tourism fee, which is $5 per night, and a resort fee of $10 per night. These are standard, mandatory fees applicable to all guests, which should have been clearly outlined at the time of your reservation.",
            },
          },
          {
            speaker: "you",
            textEn: "I don't remember seeing that when I booked. That's frustrating. Can you at least waive the resort fee since I didn't use the pool or gym?",
            textZh: "我不记得预订时看到了。挺烦的。能不能至少免掉度假设施费？我没用过泳池和健身房。",
            casualVersion: "Don't remember seeing that when I booked. That's kinda annoying. Can you at least just waive the resort fee since I didn't use the pool or gym?",
            culturalNote: "美国酒店的度假村费通常即使不用设施也要交，很难免除。",
            commonMistake: {
              wrong: "Can you waive the resort fee?",
              correct: "Can you at least waive the resort fee?",
              explanation: "加入 \"at least\" 表达退而求其次的要求，语气更自然。",
            },
            formalityVariants: {
              casual: "I don't recall seeing that when I booked. That's annoying. Can you just waive the resort fee since I didn't use the pool or gym?",
              standard: "I don't remember seeing that when I booked. That's frustrating. Can you at least waive the resort fee since I didn't use the pool or gym?",
              formal: "I genuinely do not recall being informed of those specific fees during the booking process, which I find rather frustrating. Would it be possible to consider waiving the resort fee, especially given that I did not utilize any of the associated facilities such as the pool or gymnasium?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I understand your frustration. Unfortunately, the resort fee is mandatory regardless of usage — it's a hotel policy. However, I've spoken with my manager and we can remove the Tuesday restaurant charge of $22, which was incorrectly charged to your room. Let me also remove the minibar charge. Your adjusted total will be $401 including all taxes and fees.",
            textZh: "理解您的不满。不幸的是，度假设施费是强制的，不管用没用——这是酒店政策。不过我跟经理确认了，我们可以删除周二22美元的餐厅错误收费。迷你吧的也删掉。调整后的总计是401美元，包含所有税费。",
            keyPhrases: [
              { en: "mandatory regardless of usage", zh: "不管用没用都是强制的" },
              { en: "hotel policy", zh: "酒店政策" },
              { en: "incorrectly charged", zh: "错误收费" },
              { en: "adjusted total", zh: "调整后的总计" },
            ],
            alternativeExpressions: [
              { textEn: "I hear you, but unfortunately the resort fee is a flat charge for everyone — doesn't matter if you use the amenities or not. It's hotel policy, I can't waive it. But I did get the OK to drop the restaurant charge and the minibar. Your new total is $401, all in.", textZh: "我理解，但度假设施费是所有人统一收的——不管用没用都一样。酒店政策，我没法免。但我已经获批删除了餐厅和迷你吧的收费。新的总计是401美元，全含。", actionHint: "flat charge = 固定收费；all in = 全含", frequency: "common" },
              { textEn: "I totally get your frustration. The resort fee is mandatory though — it applies to all guests, no exceptions. What I can do is remove the wrong restaurant charge and the minibar one. That brings your total down to $401 with everything included.", textZh: "我完全理解你的不满。但度假设施费是强制的——适用于所有客人，没有例外。我能做的是删除错误的餐厅收费和迷你吧收费。这样总计降到401美元，全部包含。", actionHint: "no exceptions = 没有例外；brings your total down = 把你的总计降到", frequency: "common" },
            ],
            casualVersion: "Yeah, I get why you're frustrated. But sorry, the resort fee's mandatory, even if you don't use stuff — it's hotel policy. Good news, though, I talked to my manager, and we can take off that $22 Tuesday restaurant charge, which was definitely a mistake. And I'll remove the minibar charge too. So your new total's $401, all taxes and fees included.",
            formalityVariants: {
              casual: "I get your frustration. But sorry, resort fee's mandatory, even if you don't use it — policy. Good news, though, manager says we can remove that $22 Tuesday restaurant charge, which was wrong. And the minibar charge too. Your new total's $401, taxes and fees included.",
              standard: "I understand your frustration. Unfortunately, the resort fee is mandatory regardless of usage — it's a hotel policy. However, I've spoken with my manager and we can remove the Tuesday restaurant charge of $22, which was incorrectly charged to your room. Let me also remove the minibar charge. Your adjusted total will be $401 including all taxes and fees.",
              formal: "I sincerely empathize with your frustration regarding the resort fee. Regrettably, it is a mandatory charge, irrespective of facility utilization, as per our hotel policy. However, following a discussion with my manager, we have approved the removal of the $22 restaurant charge from Tuesday, which was indeed an erroneous billing. Furthermore, I will also remove the minibar charge. Your revised total will amount to $401, inclusive of all applicable taxes and fees.",
            },
          },
          {
            speaker: "you",
            textEn: "Alright, that's better. Can I get a receipt with all the adjustments clearly shown? I need it for my expense report.",
            textZh: "好吧，这样好多了。能给我一张清楚显示所有调整的收据吗？我需要用来报销。",
            casualVersion: "Okay, that's better. Can I get a receipt that shows all the changes? Need it for my expense report.",
            commonMistake: {
              wrong: "I need a receipt.",
              correct: "Can I get a receipt?",
              explanation: "直接说 \"I need\" 听起来比较生硬，用 \"Can I get...\" 更礼貌客气。",
            },
            formalityVariants: {
              casual: "Yeah, that's better. Can I get a receipt showing all the adjustments? It's for my expense report.",
              standard: "Alright, that's better. Can I get a receipt with all the adjustments clearly shown? I need it for my expense report.",
              formal: "Very well, that is a much more satisfactory resolution. Would it be possible to obtain an itemized receipt that clearly delineates all the adjustments made, as I will require it for my corporate expense report?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Absolutely. I'll print a corrected receipt showing the original charges, the removed items, and the final total. I can also email you a PDF copy. We appreciate your patience with this, and we hope the billing issue won't overshadow your stay. Thank you for choosing us!",
            textZh: "当然。我打印一份修正后的收据，显示原始费用、删除的项目和最终总价。也可以给您发一份PDF邮件。感谢您的耐心，希望账单问题不会影响您的住宿体验。谢谢您选择我们！",
            keyPhrases: [
              { en: "corrected receipt", zh: "修正后的收据" },
              { en: "expense report", zh: "报销单" },
              { en: "overshadow your stay", zh: "影响您的住宿体验" },
            ],
            alternativeExpressions: [
              { textEn: "For sure. I'll print out a corrected receipt showing everything — the original charges, what we removed, and the final number. I can also email you a PDF. Thanks for your patience, and sorry about the mix-up!", textZh: "当然。我打印一份修正的收据，显示所有内容——原始费用、删除的项目和最终数字。也可以给你发一份PDF邮件。感谢你的耐心，抱歉搞混了！", actionHint: "mix-up = 搞混了/弄错了", frequency: "common" },
              { textEn: "Absolutely. Here's your updated receipt — it shows the original charges, the adjustments, and the final total. Want me to email a copy too? Again, sorry about the confusion, and thank you for choosing us.", textZh: "当然。这是你更新后的收据——显示原始费用、调整和最终总计。要我也发一份邮件吗？再次为搞混道歉，感谢您选择我们。", actionHint: "confusion = 搞混/混乱", frequency: "common" },
            ],
            casualVersion: "Totally. I'll print out a new receipt with the original charges, what we removed, and the final total. Can also email you a PDF. Appreciate your patience, and hope this bill stuff didn't ruin your stay. Thanks for choosing us!",
            formalityVariants: {
              casual: "Absolutely. I'll print a corrected receipt showing originals, removed items, and final total. Can email you a PDF too. Appreciate your patience, and hope this billing stuff didn't mess up your stay. Thanks for choosing us!",
              standard: "Absolutely. I'll print a corrected receipt showing the original charges, the removed items, and the final total. I can also email you a PDF copy. We appreciate your patience with this, and we hope the billing issue won't overshadow your stay. Thank you for choosing us!",
              formal: "Most certainly. I will print a comprehensive, corrected receipt that clearly itemizes the original charges, all removed items, and the final adjusted total. Furthermore, I would be pleased to email you a PDF copy for your records. We sincerely appreciate your patience and understanding in this matter, and we genuinely hope this billing oversight did not detract from your overall enjoyment of your stay. Thank you for choosing our establishment.",
            },
          },
        ],
      },

      // --- Flow 2: 退房后发现多扣费 ---
      {
        id: "post-checkout-charge",
        titleZh: "退房后发现多扣费",
        titleEn: "Post-Checkout Overcharge",
        description: "退房后发现信用卡被多扣了钱，需要远程解决",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I checked out of your hotel last week — Room 408, under the name Wang Wei. I just noticed an extra charge of $189 on my credit card that wasn't on my final bill. Can you look into it?",
            textZh: "你好，我上周从你们酒店退房的——408房间，王伟名下。我刚发现信用卡上多了一笔189美元的扣费，最终账单上没有这笔费用。能帮我查一下吗？",
            casualVersion: "Hey, checked out last week from room 408, Wang Wei. Just saw an extra $189 charge on my card that wasn't on the bill. Can you check it out?",
            commonMistake: {
              wrong: "Can you help me look into it?",
              correct: "Can you look into it?",
              explanation: "中式英语常多用 \"help me\"，直接说 \"Can you...\" 更自然。",
            },
            formalityVariants: {
              casual: "Hey, I checked out from room 408, Wang Wei, last week. Just saw an extra $189 charge on my card that wasn't on the bill. Can you check it out?",
              standard: "Hello, I checked out of your hotel last week — Room 408, under the name Wang Wei. I just noticed an extra charge of $189 on my credit card that wasn't on my final bill. Can you look into it?",
              formal: "Good morning/afternoon, I am contacting you regarding a discrepancy on my credit card statement. I departed from your establishment last week, specifically Room 408, registered under the name Wang Wei. I've identified an additional charge of $189 that was not present on my final invoice. Would it be possible for you to investigate this matter?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I'm sorry about that. Let me look up your account. Can you give me your reservation number or the email address on file?",
            textZh: "很抱歉。让我查一下你的账户。能给我你的预订号或者登记的邮箱地址吗？",
            keyPhrases: [
              { en: "extra charge", zh: "额外收费" },
              { en: "final bill", zh: "最终账单" },
              { en: "reservation number", zh: "预订号" },
              { en: "on file", zh: "登记在档的" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, I'm sorry about that. Let me pull up your account. Do you have your booking number handy, or the email you used?", textZh: "哦，很抱歉。让我调出你的账户。你的预订号方便告诉我吗，或者你用的邮箱地址？", actionHint: "pull up = 调出来；handy = 手边有", frequency: "common" },
              { textEn: "I apologize for the surprise charge. Let me look into this. Can you give me your confirmation number or the name on the reservation?", textZh: "为意外扣费道歉。让我查一下。能给我你的确认号或者预订用的名字吗？", actionHint: "surprise charge = 意外扣费", frequency: "common" },
            ],
            casualVersion: "Oh, sorry 'bout that. Lemme pull up your account. Got your reservation number or email?",
            formalityVariants: {
              casual: "Oh, sorry 'bout that. Lemme pull up your account. Got your reservation number or email?",
              standard: "I'm sorry about that. Let me look up your account. Can you give me your reservation number or the email address on file?",
              formal: "I sincerely apologize for the inconvenience. Kindly allow me a moment to access your account. May I request your reservation number or the email address associated with your booking?",
            },
          },
          {
            speaker: "you",
            textEn: "My reservation number is HY-889234. The charge appeared on my card two days after checkout.",
            textZh: "我的预订号是 HY-889234。扣费是退房两天后出现在卡上的。",
            casualVersion: "It's HY-889234. Charge showed up two days after I checked out.",
            commonMistake: {
              wrong: "The charge appear on my card after two days checkout.",
              correct: "The charge appeared on my card two days after checkout.",
              explanation: "注意动词时态 (appeared) 和介词搭配 (after checkout)。",
            },
            formalityVariants: {
              casual: "It's HY-889234. Charge showed up two days after I checked out.",
              standard: "My reservation number is HY-889234. The charge appeared on my card two days after checkout.",
              formal: "Certainly, my reservation number is HY-889234. The aforementioned charge manifested on my credit card statement approximately two days subsequent to my departure.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I found your account. It looks like there was a damage charge assessed after your checkout. The housekeeping report notes a stain on the carpet and a broken lamp in the room. Were you aware of this?",
            textZh: "我找到你的账户了。看起来退房后有一笔损坏费。客房服务报告记录了地毯上有污渍和房间里一个灯坏了。你知道这个情况吗？",
            keyPhrases: [
              { en: "damage charge", zh: "损坏费" },
              { en: "housekeeping report", zh: "客房服务报告" },
              { en: "stain on the carpet", zh: "地毯污渍" },
              { en: "assessed", zh: "评定/收取" },
            ],
            alternativeExpressions: [
              { textEn: "OK, I see your file. It looks like housekeeping flagged some damage after you left — a carpet stain and a broken lamp. That's where the $189 came from. Did you know about any of that?", textZh: "好的，我看到你的档案了。看起来客房服务在你离开后标记了一些损坏——地毯污渍和一个坏灯。189美元就是这来的。你知道这些情况吗？", actionHint: "flagged = 标记/报告了", frequency: "common" },
              { textEn: "Found it. So after checkout, the cleaning crew reported a stain on the carpet and a lamp that was broken. They assessed a damage charge of $189. Were you aware of these issues?", textZh: "找到了。退房后，保洁人员报告了地毯上的污渍和一个坏灯。他们收取了189美元的损坏费。你知道这些问题吗？", actionHint: "cleaning crew = 保洁团队", frequency: "common" },
            ],
            casualVersion: "Got your account. Looks like a damage charge after you checked out. Housekeeping report says there's a carpet stain and a broken lamp. Did you know about this?",
            formalityVariants: {
              casual: "Got your account. Looks like a damage charge after you checked out. Housekeeping report says there's a carpet stain and a broken lamp. Did you know about this?",
              standard: "I found your account. It looks like there was a damage charge assessed after your checkout. The housekeeping report notes a stain on the carpet and a broken lamp in the room. Were you aware of this?",
              formal: "Thank you. I have located your account. It appears a damage charge was applied following your departure. Our housekeeping report indicates the presence of a carpet stain and a non-functional lamp within the room. Were you cognizant of these issues?",
            },
          },
          {
            speaker: "you",
            textEn: "The lamp was already broken when I checked in! I remember noticing it on the first day. And I don't know about any carpet stain — it wasn't me. I didn't receive any notification about this charge either.",
            textZh: "那个灯我入住时就坏了！我记得第一天就注意到了。地毯污渍我不知道——不是我弄的。我也没收到任何关于这笔费用的通知。",
            casualVersion: "That lamp? Broke when I got here! Noticed it day one. And a carpet stain? Wasn't me. Plus, got no notice about this charge.",
            commonMistake: {
              wrong: "The lamp already broken when I check in! I don't know the carpet stain. I also did not receive any notification.",
              correct: "The lamp was already broken when I checked in! I don't know about any carpet stain. I didn't receive any notification about this charge either.",
              explanation: "注意动词时态，介词搭配，以及“也没”的表达 (either)。",
            },
            formalityVariants: {
              casual: "That lamp? Broke when I got here! Noticed it day one. And a carpet stain? Wasn't me. Plus, got no notice about this charge.",
              standard: "The lamp was already broken when I checked in! I remember noticing it on the first day. And I don't know about any carpet stain — it wasn't me. I didn't receive any notification about this charge either.",
              formal: "I must respectfully state that the lamp was, in fact, already in a non-functional condition upon my arrival. I distinctly recall observing this on my initial day of occupancy. Furthermore, I have no knowledge pertaining to any carpet stain, and I can confirm it was not caused by myself. Additionally, I did not receive any prior notification regarding this particular charge.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I apologize for not notifying you first. Let me check the pre-arrival room inspection report. You're right — I can see here that the lamp issue was noted before your check-in. I'll reverse that portion of the charge immediately. For the carpet stain, I need to consult with the housekeeping manager. Can I call you back within 24 hours?",
            textZh: "很抱歉没有事先通知您。让我查一下入住前的房间检查报告。您说得对——我能看到灯的问题在您入住前就有记录。我立刻撤销这部分费用。地毯污渍的事我需要跟客房经理确认。24小时内回电话给您可以吗？",
            keyPhrases: [
              { en: "pre-arrival room inspection", zh: "入住前房间检查" },
              { en: "reverse the charge", zh: "撤销费用" },
              { en: "consult with", zh: "和...确认/商量" },
            ],
            vocabNotes: {
              "reverse": {
                meaningInContext: "在这句话里表示：撤销/退回已经收取的费用到你的信用卡上",
                similarUsage: "类似用法：The bank reversed the fraudulent charge.",
              },
            },
            alternativeExpressions: [
              { textEn: "I'm really sorry we didn't reach out first. Let me check the pre-check inspection... Yeah, you're right — the lamp was already documented before you arrived. I'll reverse that right away. The carpet part, I need to run by the housekeeping manager. Can I get back to you within 24 hours?", textZh: "很抱歉没有先联系你。让我查一下入住前检查……是的，你说得对——灯的问题在你到之前就记录了。我马上撤销那部分。地毯的事我需要跟客房经理确认。24小时内回复你可以吗？", actionHint: "run by = 跟...确认；get back to you = 回复你", frequency: "common" },
              { textEn: "You're absolutely right, we should have contacted you first. Looking at the records... the lamp issue was noted prior to your stay. That charge is coming off immediately. For the carpet, give me 24 hours to investigate — I'll call you back.", textZh: "你完全对，我们应该先联系你。看记录……灯的问题在你入住前就有记录。那笔费用马上取消。地毯的事给我24小时调查——我会回电话给你。", actionHint: "coming off = 取消/去掉；prior to = 在...之前", frequency: "common" },
            ],
            casualVersion: "My bad for not telling you sooner. Lemme check the pre-arrival report. Yup, you're right — lamp was noted broken before you got here. I'll take that part off right now. For the carpet, gotta check with the housekeeping manager. Can I call you back in 24 hours?",
            formalityVariants: {
              casual: "My bad for not telling you sooner. Lemme check the pre-arrival report. Yup, you're right — lamp was noted broken before you got here. I'll take that part off right now. For the carpet, gotta check with the housekeeping manager. Can I call you back in 24 hours?",
              standard: "I apologize for not notifying you first. Let me check the pre-arrival room inspection report. You're right — I can see here that the lamp issue was noted before your check-in. I'll reverse that portion of the charge immediately. For the carpet stain, I need to consult with the housekeeping manager. Can I call you back within 24 hours?",
              formal: "My sincere apologies for the oversight in prior notification. Allow me to review the pre-arrival room inspection report. Indeed, you are correct — our records indicate the lamp issue was documented prior to your arrival. I will process a reversal for that specific portion of the charge forthwith. Regarding the carpet stain, I must consult with the housekeeping manager for further clarification. Would it be convenient for me to contact you again within a 24-hour period?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please call me back. My number is 555-123-4567. I want the full $189 reversed. I took photos of the room when I checked in as a precaution — I can email them to you as evidence.",
            textZh: "好的，请回电话给我。号码是 555-123-4567。我要求全额退回189美元。入住时我作为预防拍了房间的照片——我可以发邮件给你作为证据。",
            culturalNote: "入住时拍照记录房间状况是很好的习惯。退房后如果被收取损坏费，有照片就是最好的证据。",
            casualVersion: "Yeah, call me back. 555-123-4567. I want the whole $189 reversed, though. I actually took pics of the room when I checked in, just in case — can email 'em to you for proof.",
            commonMistake: {
              wrong: "I want all $189 return. I took photos for the room when I check in, I can send to you as evidence.",
              correct: "I want the full $189 reversed. I took photos of the room when I checked in, I can email them to you as evidence.",
              explanation: "\"Return money\" 用 reverse/refund 更自然。拍照是 \"of the room\"。",
            },
            formalityVariants: {
              casual: "Yeah, call me back. 555-123-4567. I want the whole $189 reversed, though. I actually took pics of the room when I checked in, just in case — can email 'em to you for proof.",
              standard: "Yes, please call me back. My number is 555-123-4567. I want the full $189 reversed. I took photos of the room when I checked in as a precaution — I can email them to you as evidence.",
              formal: "Yes, I would appreciate a return call. My contact number is 555-123-4567. I insist on the complete reversal of the $189 charge. As a precautionary measure, I documented the condition of the room upon my check-in, and I am prepared to submit these photographs via email as corroborating evidence.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "That would be very helpful. Please email the photos to billing@hotelname.com with your reservation number in the subject line. I'll make sure this gets resolved promptly. Again, I apologize for the inconvenience — we should have verified the pre-existing conditions before charging your card.",
            textZh: "那会很有帮助。请把照片发到 billing@hotelname.com，邮件标题写上预订号。我会确保尽快解决。再次为不便道歉——我们应该在扣费前确认之前已存在的问题。",
            keyPhrases: [
              { en: "subject line", zh: "邮件标题" },
              { en: "resolved promptly", zh: "尽快解决" },
              { en: "pre-existing conditions", zh: "之前已存在的问题" },
            ],
            alternativeExpressions: [
              { textEn: "That would really help. Send the photos to billing@hotelname.com — put your reservation number in the subject. I'll make sure this gets sorted out fast. And again, we should've checked before charging you. That's on us.", textZh: "那太有帮助了。照片发到 billing@hotelname.com——标题写上预订号。我确保尽快处理。再次说，我们应该在扣费前核实。这是我们的失误。", actionHint: "that's on us = 那是我们的失误/责任", frequency: "common" },
              { textEn: "Perfect, email them to billing@hotelname.com with your booking reference in the subject line. I'll personally make sure this gets resolved ASAP. We definitely should have verified things before hitting your card.", textZh: "太好了，发邮件到 billing@hotelname.com，标题写上预订号。我亲自确保尽快解决。我们确实应该在扣你卡之前核实清楚。", actionHint: "ASAP = as soon as possible 尽快；hitting your card = 从你卡上扣钱", frequency: "common" },
            ],
            casualVersion: "That'd be super helpful. Just email the pics to billing@hotelname.com, put your reservation number in the subject. I'll make sure this gets sorted fast. Really sorry about the hassle — we should've checked the pre-existing stuff before charging you.",
            formalityVariants: {
              casual: "That'd be super helpful. Just email the pics to billing@hotelname.com, put your reservation number in the subject. I'll make sure this gets sorted fast. Really sorry about the hassle — we should've checked the pre-existing stuff before charging you.",
              standard: "That would be very helpful. Please email the photos to billing@hotelname.com with your reservation number in the subject line. I'll make sure this gets resolved promptly. Again, I apologize for the inconvenience — we should have verified the pre-existing conditions before charging your card.",
              formal: "Your cooperation in this matter would be greatly appreciated. Kindly forward the photographs to billing@hotelname.com, ensuring your reservation number is included in the subject line. I will personally ensure this issue is addressed with the utmost urgency. Once more, I extend my apologies for any inconvenience incurred — we should have thoroughly verified all pre-existing conditions prior to processing any charges to your card.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. If this isn't resolved in 24 hours, I'll need to dispute the charge with my credit card company. I hope it doesn't come to that.",
            textZh: "谢谢。如果24小时内没解决，我就需要向信用卡公司提出争议了。希望不用走到那一步。",
            casualVersion: "Thanks. If it's not fixed in 24 hours, I'll have to dispute it with my credit card company. Really hope we don't go there.",
            commonMistake: {
              wrong: "If this not solve in 24 hours, I will need to dispute the charge to my credit card company. I hope not come to that.",
              correct: "If this isn't resolved in 24 hours, I'll need to dispute the charge with my credit card company. I hope it doesn't come to that.",
              explanation: "注意动词时态和搭配 (resolved, dispute with)，以及省略的部分 (it doesn't)。",
            },
            formalityVariants: {
              casual: "Thanks. If it's not fixed in 24 hours, I'll have to dispute it with my credit card company. Really hope we don't go there.",
              standard: "Thank you. If this isn't resolved in 24 hours, I'll need to dispute the charge with my credit card company. I hope it doesn't come to that.",
              formal: "Thank you for your assistance. Please be advised that should this matter not be satisfactorily resolved within the stipulated 24-hour period, I will be compelled to initiate a dispute with my credit card provider. I sincerely hope such an action will not be necessary.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Understood. I'll personally make sure this is handled by tomorrow. You have my direct line — 555-987-6543 — if you need to follow up. We value your business and want to make this right.",
            textZh: "明白。我会亲自确保明天处理好。有需要跟进的话，这是我的直线号码——555-987-6543。我们重视您的惠顾，希望把事情处理好。",
            keyPhrases: [
              { en: "dispute the charge", zh: "向信用卡公司提出争议" },
              { en: "direct line", zh: "直线电话" },
              { en: "follow up", zh: "跟进" },
              { en: "make this right", zh: "把事情处理好" },
            ],
            alternativeExpressions: [
              { textEn: "I hear you. I'll handle this personally and have it resolved by tomorrow. Here's my direct number — 555-987-6543 — call me anytime. We don't want to lose your business over this.", textZh: "我听到了。我亲自处理，明天之前解决。这是我的直线——555-987-6543——随时打。我们不想因为这件事失去你这个客户。", actionHint: "lose your business = 失去你这个客户", frequency: "common" },
              { textEn: "Totally understand. I'll get this taken care of by end of day tomorrow, guaranteed. My direct line is 555-987-6543 if you need to follow up. We really value you as a guest and want to make things right.", textZh: "完全理解。我保证明天下班前处理好。有需要跟进的话我的直线是555-987-6543。我们非常重视你这位客人，想要把事情处理好。", actionHint: "taken care of = 处理好；guaranteed = 保证", frequency: "common" },
            ],
            casualVersion: "Got it. I'll personally make sure this is handled by tomorrow. Here's my direct line — 555-987-6543 — if you gotta follow up. We value your business and wanna make this right.",
            formalityVariants: {
              casual: "Got it. I'll personally make sure this is handled by tomorrow. Here's my direct line — 555-987-6543 — if you gotta follow up. We value your business and wanna make this right.",
              standard: "Understood. I'll personally make sure this is handled by tomorrow. You have my direct line — 555-987-6543 — if you need to follow up. We value your business and want to make this right.",
              formal: "Understood. I will personally oversee the resolution of this matter by tomorrow's end. Please feel free to utilize my direct contact number — 555-987-6543 — should you require any further updates. We genuinely value your patronage and are committed to rectifying this situation to your satisfaction.",
            },
          },
        ],
      },
    ],
  },

  // ==================== Airbnb 自助入住 ====================
  {
    id: "accommodation-airbnb-checkin",
    category: "accommodation",
    titleZh: "Airbnb自助入住",
    titleEn: "Airbnb Self Check-in",
    description: "使用密码锁、钥匙盒或智能门锁自助入住Airbnb，包括找到入口、输入密码、确认入住",
    otherRole: "Airbnb房东",
    otherRoleIcon: "🔑",
    flows: [
      {
        id: "airbnb-checkin-basic",
        titleZh: "密码锁自助入住",
        titleEn: "Keypad Self Check-in",
        description: "到达后使用密码锁或钥匙盒完成自助入住",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm at the front door but I can't find the keypad. Is it on the door itself or on the wall?",
            textZh: "你好，我在大门口了，但找不到密码锁。它是在门上还是墙上？",
            culturalNote: "国外Airbnb大多数是自助入住，房东不会到场。密码锁（keypad）和钥匙盒（lockbox）是最常见的两种方式。",
            casualVersion: "Hey, I'm at the door but can't find the keypad anywhere. Door or wall?",
            commonMistake: {
              wrong: "I can't find the password lock.",
              correct: "I can't find the keypad.",
              explanation: "密码锁的英文是 keypad 或 keypad lock，不说 password lock。",
            },
            formalityVariants: {
              casual: "Hey, at the door — where's the keypad exactly?",
              standard: "Hi, I'm at the front door but I can't find the keypad. Is it on the door or the wall?",
              formal: "Good evening, I have arrived at the property. Could you please advise me on the exact location of the keypad?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "It's a smart lock right on the door handle. Just punch in the code 7721 and turn the handle.",
            textZh: "是门把手上的智能锁。输入密码7721然后转动把手就行。",
            keyPhrases: [
              { en: "smart lock", zh: "智能锁" },
              { en: "punch in the code", zh: "输入密码" },
            ],
            alternativeExpressions: [
              { textEn: "There's a keypad built into the handle — tap 7721 and twist to open.", textZh: "把手上有个内置密码锁——按7721然后转开。", actionHint: "built into = 内置于", frequency: "common" },
            ],
            casualVersion: "It's on the handle. Code's 7721, just punch it in and turn.",
            formalityVariants: {
              casual: "It's on the handle. Code's 7721, just punch it in and turn.",
              standard: "The smart lock is on the door handle. Enter 7721 and turn the handle to open.",
              formal: "The electronic lock is integrated into the door handle. Please enter the code 7721 and rotate the handle to gain entry.",
            },
          },
          {
            speaker: "you",
            textEn: "I entered the code but the door won't open. Should I press a button after entering the numbers?",
            textZh: "我输入了密码但门打不开。输入数字之后需要按什么按钮吗？",
            culturalNote: "智能锁种类很多，有的需要按确认键，有的自动识别。遇到问题直接问房东最快。",
            casualVersion: "Typed in the code but nothing happened. Do I need to hit a button or something?",
            commonMistake: {
              wrong: "The door can't open.",
              correct: "The door won't open.",
              explanation: "门打不开用 won't open（不愿打开），不用 can't open（没有能力打开）。won't 暗示尝试了但没反应。",
            },
            formalityVariants: {
              casual: "Code's in but door's not budging. Do I hit enter or what?",
              standard: "I entered the code but the door won't open. Is there a confirm button?",
              formal: "I have entered the access code; however, the door does not appear to be unlocking. Is there an additional step required?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "After entering the code, press the checkmark button at the bottom. You should hear a click — then turn the handle.",
            textZh: "输入密码之后，按底部的对勾按钮。你应该会听到一声咔嗒——然后转把手。",
            keyPhrases: [
              { en: "checkmark button", zh: "对勾按钮" },
              { en: "you should hear a click", zh: "你应该会听到咔嗒声" },
            ],
            alternativeExpressions: [
              { textEn: "Hit the little check button after the code. Wait for the beep, then turn.", textZh: "输完密码后按那个小对勾。等滴一声，然后转。", actionHint: "beep = 电子提示音", frequency: "common" },
            ],
            casualVersion: "Press the check button at the bottom after the code. Should click, then turn.",
            formalityVariants: {
              casual: "Hit the check button after the code. Should click, then turn.",
              standard: "Press the checkmark button at the bottom after the code. You'll hear a click, then turn the handle.",
              formal: "Upon completing the code entry, please press the checkmark symbol located at the base of the keypad. You should hear an audible click confirming the unlock, after which you may turn the handle.",
            },
          },
          {
            speaker: "you",
            textEn: "It worked! I'm inside now. Just to confirm — is the same code used to lock the door when I leave?",
            textZh: "成功了！我进来了。确认一下——出门的时候也是用同一个密码锁门吗？",
            culturalNote: "有些智能锁出门时自动上锁，有些需要再输一次密码。提前确认可以避免被锁在外面。",
            casualVersion: "Got in! Same code to lock up when I head out?",
            commonMistake: {
              wrong: "Is the same password used to close the door?",
              correct: "Is the same code used to lock the door?",
              explanation: "锁门用 lock the door，不用 close the door（关门）。密码锁的密码用 code，不用 password。",
            },
            formalityVariants: {
              casual: "I'm in! Same code to lock up when I leave?",
              standard: "It worked! Is the same code used to lock the door when I leave?",
              formal: "I have successfully entered. May I confirm whether the same code is used to secure the door upon departure?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Yes, same code. When you leave, just close the door firmly and it auto-locks after 30 seconds. No need to enter the code again.",
            textZh: "对，同一个密码。出门时把门关紧就行，30秒后自动上锁。不需要再输密码。",
            keyPhrases: [
              { en: "auto-locks", zh: "自动上锁" },
              { en: "close the door firmly", zh: "把门关紧" },
            ],
            alternativeExpressions: [
              { textEn: "Yep! Just pull it shut and it locks itself. Make sure you hear the click.", textZh: "对！拉上就自动锁了。确保听到咔嗒声。", actionHint: "pull it shut = 拉上关好", frequency: "common" },
            ],
            casualVersion: "Yep, same code. Just shut the door tight and it locks itself.",
            formalityVariants: {
              casual: "Yep, same code. Just shut the door tight and it locks itself.",
              standard: "Yes, same code. Close the door firmly and it auto-locks after 30 seconds.",
              formal: "Indeed, the same code applies. Simply ensure the door is securely closed upon exit, and the mechanism will engage automatically within thirty seconds.",
            },
          },
        ],
      },
      {
        id: "airbnb-checkin-lockbox",
        titleZh: "钥匙盒取钥匙入住",
        titleEn: "Lockbox Key Retrieval",
        description: "在指定位置找到钥匙盒，取出钥匙完成入住",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I found the lockbox by the gate but the combination isn't working. I'm turning the dials to 0-8-3-5 — am I doing it right?",
            textZh: "你好，我在门口找到钥匙盒了，但密码不对。我把转盘转到0-8-3-5——我操作对吗？",
            culturalNote: "国外常见的lockbox有转盘式和按键式两种。转盘式需要对齐数字后拉开盖子，不像国内常见的电子密码锁。",
            casualVersion: "Found the lockbox but the combo isn't working. I'm on 0-8-3-5 — that right?",
            commonMistake: {
              wrong: "The combination can't work.",
              correct: "The combination isn't working.",
              explanation: "描述当前不起作用用 isn't working，不用 can't work。后者暗示永远不可能起作用。",
            },
            formalityVariants: {
              casual: "Got the lockbox but combo's not working. 0-8-3-5, right?",
              standard: "I found the lockbox by the gate but the combination isn't working. Am I entering 0-8-3-5 correctly?",
              formal: "I have located the lockbox near the gate; however, the combination does not appear to be functioning. I am entering 0-8-3-5 — could you please confirm the correct sequence?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "The code is correct! Make sure you line up the numbers with the notch on the side, then slide the cover down — don't pull it.",
            textZh: "密码没错！确保数字对准侧边的凹槽，然后把盖子往下滑——不是拉。",
            keyPhrases: [
              { en: "line up the numbers", zh: "把数字对齐" },
              { en: "slide the cover down", zh: "把盖子往下滑" },
            ],
            alternativeExpressions: [
              { textEn: "Code's right. Align the digits with the mark on the left, then push the latch down to pop it open.", textZh: "密码对的。把数字跟左边的标记对齐，然后按下卡扣打开。", actionHint: "latch = 卡扣; pop it open = 弹开", frequency: "common" },
            ],
            casualVersion: "Code's right. Line up the numbers with the notch, then slide the cover down, don't pull.",
            formalityVariants: {
              casual: "Code's right. Line 'em up with the notch and slide it down, don't pull.",
              standard: "The code is correct. Line up the numbers with the notch on the side, then slide the cover down.",
              formal: "The code you have entered is indeed correct. Please ensure the numerals are precisely aligned with the indicator notch, then gently slide the cover downward rather than pulling it.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it open! There are two keys inside — a gold one and a silver one. Which one is for the front door?",
            textZh: "打开了！里面有两把钥匙——一把金色的和一把银色的。哪把是开大门的？",
            culturalNote: "多把钥匙很常见：一把开大门，一把开单元门或邮箱。问清楚每把钥匙的用途可以避免混淆。",
            casualVersion: "Got it! Two keys — gold and silver. Which one's the front door?",
            commonMistake: {
              wrong: "Which key is the front door?",
              correct: "Which one is for the front door?",
              explanation: "钥匙不是门，需要加 for 表示用途：which one is for the front door。",
            },
            formalityVariants: {
              casual: "Opened it! Gold key and silver key — which one for the door?",
              standard: "Got it open. There are two keys inside. Which one is for the front door?",
              formal: "I have successfully opened the lockbox. There are two keys enclosed — one gold and one silver. Could you please indicate which is designated for the front door?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "The gold one is for the front door. The silver one is for the building entrance downstairs — you'll need it to get into the lobby.",
            textZh: "金色的是大门的。银色的是楼下公寓大门的——你进大厅需要用它。",
            keyPhrases: [
              { en: "building entrance", zh: "公寓大门" },
              { en: "get into the lobby", zh: "进入大厅" },
            ],
            alternativeExpressions: [
              { textEn: "Gold = your apartment. Silver = the main building door on the ground floor.", textZh: "金色 = 你的公寓。银色 = 一楼公寓大门。", actionHint: "ground floor = 一楼（美式英语也用 first floor）", frequency: "common" },
            ],
            casualVersion: "Gold one's your door, silver one's for the building downstairs.",
            formalityVariants: {
              casual: "Gold one's your door, silver's the building entrance downstairs.",
              standard: "The gold key opens the front door. The silver one is for the building entrance downstairs.",
              formal: "The gold key is designated for your unit's front door. The silver key provides access to the building's main entrance on the ground floor.",
            },
          },
          {
            speaker: "you",
            textEn: "One more thing — I noticed the deadbolt above the handle. Do I need a key for that too, or does it lock from inside only?",
            textZh: "还有一个问题——我注意到门把手上面有个插销锁。那个也需要钥匙吗，还是只能从里面锁？",
            culturalNote: "Deadbolt（插销锁/死锁）在北美很常见，是除了门把手锁之外的第二道锁，安全性更高。",
            casualVersion: "Oh, what about the deadbolt? Need a key for that or is it inside-only?",
            commonMistake: {
              wrong: "I saw the dead bolt.",
              correct: "I noticed the deadbolt.",
              explanation: "deadbolt 是一个词（或连字符 dead-bolt），不是两个词。用 noticed 比 saw 更自然，表示留意到。",
            },
            formalityVariants: {
              casual: "What about the deadbolt above? Key needed or inside only?",
              standard: "I noticed the deadbolt above the handle. Do I need a key for it, or is it inside only?",
              formal: "I have observed a deadbolt mechanism above the door handle. Does this require a key for external operation, or is it operable solely from the interior?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "The deadbolt uses the same gold key. Turn it clockwise to lock, counterclockwise to unlock. Always lock it when you're inside for safety.",
            textZh: "插销锁用同一把金色钥匙。顺时针转锁上，逆时针转解锁。在室内时记得锁上保安全。",
            keyPhrases: [
              { en: "clockwise to lock", zh: "顺时针锁上" },
              { en: "counterclockwise to unlock", zh: "逆时针解锁" },
            ],
            alternativeExpressions: [
              { textEn: "Same gold key. Righty-tighty to lock, lefty-loosey to open. Lock up at night!", textZh: "同一把金钥匙。右转锁，左转开。晚上记得锁！", actionHint: "righty-tighty, lefty-loosey 是口语记忆口诀", frequency: "occasional" },
            ],
            casualVersion: "Same gold key. Turn right to lock, left to unlock. Lock it when you're in!",
            formalityVariants: {
              casual: "Same gold key. Right to lock, left to unlock. Lock it when you're in.",
              standard: "The deadbolt uses the same gold key. Turn clockwise to lock and counterclockwise to unlock. Always lock it when inside.",
              formal: "The deadbolt mechanism operates with the same gold key. A clockwise rotation secures the lock, while counterclockwise disengages it. For your safety, I recommend always engaging the deadbolt while you are present in the unit.",
            },
          },
        ],
      },
    ],
  },

  // ==================== Airbnb 退房 ====================
  {
    id: "accommodation-airbnb-checkout",
    category: "accommodation",
    titleZh: "Airbnb退房",
    titleEn: "Airbnb Checkout",
    description: "Airbnb退房流程，包括清洁规则、垃圾处理、钥匙归还等",
    otherRole: "Airbnb房东",
    otherRoleIcon: "🧹",
    flows: [
      {
        id: "airbnb-checkout-basic",
        titleZh: "基本退房流程",
        titleEn: "Basic Checkout Process",
        description: "确认退房时间、清洁要求和钥匙归还方式",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm checking out tomorrow morning. What do I need to do before I leave?",
            textZh: "你好，我明天早上退房。离开前我需要做什么？",
            culturalNote: "Airbnb退房通常有一份checkout instructions。提前问房东具体要求是礼貌且负责的做法。",
            casualVersion: "Hey, checking out tomorrow. Anything I need to do before I go?",
            commonMistake: {
              wrong: "What should I do before I check out?",
              correct: "What do I need to do before I leave?",
              explanation: "两种都正确，但 what do I need to do 更直接询问必须完成的事项。",
            },
            formalityVariants: {
              casual: "Heading out tomorrow — anything I gotta do?",
              standard: "Hi, I'm checking out tomorrow morning. What do I need to do before I leave?",
              formal: "Good evening, I will be checking out tomorrow morning. Could you kindly outline the checkout procedures I should follow?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Thanks for letting me know! Please strip the bed sheets and leave them in a pile on the floor. Start the dishwasher if there are any dishes, and take out the trash.",
            textZh: "谢谢提前告诉我！请把床单被套拆下来堆在地上。如果有脏碗碟就启动洗碗机，还有把垃圾倒掉。",
            keyPhrases: [
              { en: "strip the bed sheets", zh: "拆下床单被套" },
              { en: "take out the trash", zh: "倒垃圾" },
            ],
            alternativeExpressions: [
              { textEn: "Just pull the sheets off, run the dishwasher, and toss the garbage in the bin outside.", textZh: "把床单拉下来，开洗碗机，垃圾扔到外面的垃圾桶。", actionHint: "toss = 扔; bin = 垃圾桶（英式常用）", frequency: "common" },
            ],
            casualVersion: "Pull the sheets off, run the dishwasher, and take the trash out. Easy!",
            formalityVariants: {
              casual: "Pull the sheets off, run the dishwasher, and take the trash out. Easy!",
              standard: "Please strip the bed sheets, start the dishwasher, and take out the trash.",
              formal: "I would appreciate it if you could remove the bed linens and leave them on the floor, initiate the dishwasher cycle, and dispose of any refuse in the outdoor receptacle.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Where should I put the trash? Are there separate bins for recycling?",
            textZh: "明白了。垃圾放哪里？有分类回收的垃圾桶吗？",
            culturalNote: "欧美国家垃圾分类很严格，常分 recycling（可回收）、compost（有机）、landfill（不可回收）。不分类可能会被罚款。",
            casualVersion: "Where does the trash go? Separate bins for recycling?",
            commonMistake: {
              wrong: "Is there a classify garbage bin?",
              correct: "Are there separate bins for recycling?",
              explanation: "垃圾分类不说 classify garbage，说 separate bins for recycling 或 recycling bins。",
            },
            formalityVariants: {
              casual: "Where's the trash go? Got recycling bins?",
              standard: "Where should I put the trash? Are there separate bins for recycling?",
              formal: "Could you please advise where the refuse should be placed? Are there designated receptacles for recyclable materials?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "There are two bins in the alley behind the building — blue for recycling and black for regular trash. No need to sort beyond that.",
            textZh: "楼后面的小巷里有两个垃圾桶——蓝色是可回收的，黑色是普通垃圾。不用再细分了。",
            keyPhrases: [
              { en: "in the alley behind the building", zh: "楼后面的小巷里" },
              { en: "blue for recycling", zh: "蓝色是可回收" },
            ],
            alternativeExpressions: [
              { textEn: "Bins are out back — blue is recycling, black is everything else. Pretty straightforward.", textZh: "垃圾桶在后面——蓝色可回收，黑色其他。很简单。", actionHint: "out back = 在后面", frequency: "common" },
            ],
            casualVersion: "Bins are out back. Blue = recycling, black = regular. Simple!",
            formalityVariants: {
              casual: "Bins are out back. Blue = recycling, black = regular. Simple!",
              standard: "Two bins behind the building — blue for recycling, black for regular trash.",
              formal: "You will find two waste receptacles in the rear alleyway: the blue container is designated for recyclables, and the black one is for general waste.",
            },
          },
          {
            speaker: "you",
            textEn: "And for the key — should I leave it inside or put it back in the lockbox?",
            textZh: "钥匙怎么处理——留在屋里还是放回钥匙盒？",
            culturalNote: "钥匙归还方式因房源而异。有的放回lockbox，有的留在桌上，有的需要交给前台。一定要确认。",
            casualVersion: "What about the key? Leave it inside or back in the lockbox?",
            commonMistake: {
              wrong: "How to deal with the key?",
              correct: "What should I do with the key?",
              explanation: "how to deal with 太生硬。what should I do with 更自然。",
            },
            formalityVariants: {
              casual: "Key — leave inside or lockbox?",
              standard: "Should I leave the key inside or put it back in the lockbox?",
              formal: "Regarding the key, would you prefer that I leave it within the unit or return it to the lockbox?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Please put both keys back in the lockbox and scramble the code. Just make sure the door is locked when you leave — it should click shut on its own.",
            textZh: "请把两把钥匙放回钥匙盒，然后打乱密码。确保走的时候门锁好了——门会自动咔嗒锁上。",
            keyPhrases: [
              { en: "scramble the code", zh: "打乱密码" },
              { en: "click shut on its own", zh: "自动咔嗒锁上" },
            ],
            alternativeExpressions: [
              { textEn: "Drop the keys back in the lockbox and spin the dials so the code's not showing. Door locks automatically.", textZh: "把钥匙放回盒子，转一下转盘别让密码显示出来。门会自动锁。", actionHint: "spin the dials = 转动转盘", frequency: "common" },
            ],
            casualVersion: "Keys back in the lockbox, scramble the code, and the door locks itself. Easy!",
            formalityVariants: {
              casual: "Keys back in the lockbox, scramble the code, and the door locks itself.",
              standard: "Put both keys back in the lockbox and scramble the code. The door locks automatically.",
              formal: "Kindly return both keys to the lockbox and randomize the combination dials. The door is equipped with an auto-lock mechanism and will secure itself upon closing.",
            },
          },
        ],
      },
      {
        id: "airbnb-checkout-cleaning",
        titleZh: "清洁要求详细沟通",
        titleEn: "Detailed Cleaning Instructions",
        description: "与房东确认详细的清洁要求和退房注意事项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I saw the checkout instructions say 'leave the place as you found it.' Does that mean I need to mop the floors too?",
            textZh: "我看退房说明写着'保持原样离开'。这意味着我还需要拖地吗？",
            culturalNote: "leave the place as you found it 是Airbnb常见要求，但具体标准因房东而异。大多数只要求基本整理，不需要深度清洁。",
            casualVersion: "Instructions say leave it as I found it — does that mean mopping too?",
            commonMistake: {
              wrong: "Do I need to drag the floor?",
              correct: "Do I need to mop the floors?",
              explanation: "拖地是 mop the floor，不是 drag the floor。drag 是拖拽物体的意思。",
            },
            formalityVariants: {
              casual: "So 'leave it as you found it' — I gotta mop too?",
              standard: "The instructions say to leave the place as I found it. Does that include mopping?",
              formal: "The checkout guidelines indicate leaving the premises in the condition in which I found them. Does this expectation extend to mopping the floors?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "No, no mopping needed! Just do a basic tidy-up — wipe down the kitchen counters, don't leave food out, and make sure there's no standing water in the bathroom.",
            textZh: "不用拖地！做基本整理就行——擦一下厨房台面，不要把食物放在外面，确保浴室没有积水。",
            keyPhrases: [
              { en: "tidy-up", zh: "基本整理" },
              { en: "standing water", zh: "积水" },
            ],
            alternativeExpressions: [
              { textEn: "Nah, no deep cleaning. Just a quick wipe of the counters, put food away, and dry up the bathroom a bit.", textZh: "不需要深度清洁。快速擦下台面，食物收好，浴室擦干点就行。", actionHint: "put food away = 把食物收好", frequency: "common" },
            ],
            casualVersion: "Nah, no mopping. Quick wipe of the counters, no food out, bathroom dry. That's it.",
            formalityVariants: {
              casual: "Nah, no mopping. Quick wipe of the counters, no food out, bathroom dry.",
              standard: "No mopping needed. Just a basic tidy-up — wipe the counters, don't leave food out, and no standing water in the bathroom.",
              formal: "Mopping is not necessary. I simply request a basic tidy-up: wiping down the kitchen surfaces, ensuring no perishables are left out, and verifying there is no standing water in the bathroom.",
            },
          },
          {
            speaker: "you",
            textEn: "What about the towels? Should I put them in the washing machine or just leave them in the bathroom?",
            textZh: "毛巾怎么处理？放进洗衣机还是留在浴室就行？",
            culturalNote: "大多数Airbnb不要求洗毛巾，但要求集中放在一个地方方便清洁人员收取。",
            casualVersion: "Towels — washer or just leave them in the bathroom?",
            commonMistake: {
              wrong: "Should I wash the towels by the washing machine?",
              correct: "Should I put them in the washing machine?",
              explanation: "put in the washing machine 是正确搭配，不用 wash by the machine。",
            },
            formalityVariants: {
              casual: "Towels go in the washer or just leave 'em?",
              standard: "Should I put the towels in the washing machine or leave them in the bathroom?",
              formal: "Regarding the used towels, would you prefer I place them in the washing machine or simply leave them in the bathroom?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Just toss them in the bathtub. Our cleaning crew will handle the laundry. Please don't start the washer — they have a specific routine.",
            textZh: "扔浴缸里就行。我们的保洁团队会处理洗涤。请不要启动洗衣机——他们有专门的流程。",
            keyPhrases: [
              { en: "toss them in the bathtub", zh: "扔浴缸里" },
              { en: "cleaning crew", zh: "保洁团队" },
            ],
            alternativeExpressions: [
              { textEn: "Leave them in a pile in the tub. The cleaners will take care of it — no need to do laundry.", textZh: "堆在浴缸里就行。保洁会处理——不需要你洗。", actionHint: "take care of it = 会处理", frequency: "common" },
            ],
            casualVersion: "Just throw them in the tub. Cleaners will deal with it. Don't start the washer.",
            formalityVariants: {
              casual: "Throw 'em in the tub. Cleaners got it. Don't run the washer.",
              standard: "Just toss them in the bathtub. The cleaning crew will handle the laundry.",
              formal: "Please place the used towels in the bathtub. Our housekeeping team will attend to the laundering. I kindly ask that you refrain from operating the washing machine.",
            },
          },
          {
            speaker: "you",
            textEn: "Last thing — checkout is at 11 AM, right? Is there any flexibility? My flight isn't until 4 PM and I'd love a late checkout if possible.",
            textZh: "最后一个问题——退房是上午11点对吧？有弹性空间吗？我的航班下午4点，如果可以的话想晚点退房。",
            culturalNote: "Airbnb的late checkout不像酒店那么灵活，因为保洁和下一位客人的时间都安排好了。但礼貌地问通常不会被拒绝得很难堪。",
            casualVersion: "Checkout's at 11, right? Any chance of a late checkout? Flight's not till 4.",
            commonMistake: {
              wrong: "Can I delay the checkout time?",
              correct: "Is there any flexibility with the checkout time?",
              explanation: "delay 听起来像要拖延。flexibility 更委婉，表达'有没有弹性空间'。",
            },
            formalityVariants: {
              casual: "Checkout's at 11, right? Any wiggle room? My flight's at 4.",
              standard: "Checkout is at 11 AM. Is there any flexibility? My flight isn't until 4 PM.",
              formal: "I understand checkout is scheduled for 11 AM. Would it be possible to arrange a late checkout? My departure flight is not until 4 PM.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "I have another guest arriving at 3 PM, so the latest I can do is 12:30. Would that work for you? You can also leave your bags here and pick them up later.",
            textZh: "下午3点有另一位客人入住，最迟到12:30。可以吗？你也可以把行李留在这里晚点来取。",
            keyPhrases: [
              { en: "the latest I can do", zh: "我最迟能做到" },
              { en: "leave your bags here", zh: "把行李留在这里" },
            ],
            alternativeExpressions: [
              { textEn: "Next guest checks in at 3, so 12:30 is the absolute latest. But feel free to stash your luggage here if you need.", textZh: "下一位客人3点入住，12:30是最晚了。但行李可以先放在这。", actionHint: "stash = 暂存/藏放", frequency: "common" },
            ],
            casualVersion: "Next guest's at 3, so 12:30 tops. You can leave your bags here though.",
            formalityVariants: {
              casual: "Next guest's at 3, so 12:30 max. Leave your bags here if you want.",
              standard: "The latest I can do is 12:30 since another guest arrives at 3. You're welcome to leave your bags.",
              formal: "As I have a subsequent guest arriving at 3 PM, the latest checkout I can accommodate would be 12:30 PM. You are, of course, welcome to leave your luggage on the premises for later collection.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 和Airbnb房东沟通 ====================
  {
    id: "accommodation-airbnb-host-msg",
    category: "accommodation",
    titleZh: "和Airbnb房东沟通",
    titleEn: "Messaging Airbnb Host",
    description: "通过消息与Airbnb房东沟通，包括晚到通知、设备问题、额外需求等",
    otherRole: "Airbnb房东",
    otherRoleIcon: "💬",
    flows: [
      {
        id: "airbnb-host-late-arrival",
        titleZh: "通知晚到",
        titleEn: "Notifying Late Arrival",
        description: "航班延误或行程变化，通知房东晚到并确认入住安排",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, just a heads-up — my flight got delayed and I won't arrive until around midnight. Is that okay for check-in?",
            textZh: "你好，提前说一声——我的航班延误了，大概要半夜才能到。那个时间入住可以吗？",
            culturalNote: "heads-up 是提前通知的意思，在国外非常常用。及时通知房东晚到既礼貌又实用。",
            casualVersion: "Hey, heads up — flight's delayed, won't get there till around midnight. Still cool?",
            commonMistake: {
              wrong: "My flight is delay.",
              correct: "My flight got delayed.",
              explanation: "delay 用被动语态 got delayed 或 was delayed，不能直接说 is delay。",
            },
            formalityVariants: {
              casual: "Hey, flight's delayed. Gonna be there around midnight — that cool?",
              standard: "Hi, just a heads-up — my flight got delayed and I won't arrive until midnight. Is late check-in okay?",
              formal: "Good evening, I wanted to inform you that my flight has been delayed. I anticipate arriving at approximately midnight. Would it still be possible to check in at that hour?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "No problem at all! Since it's self check-in with the keypad, you can arrive anytime. Just be mindful of noise after 10 PM — the neighbors are pretty close.",
            textZh: "完全没问题！因为是密码锁自助入住，你什么时候到都行。只是晚上10点之后注意噪音——邻居住得比较近。",
            keyPhrases: [
              { en: "be mindful of noise", zh: "注意噪音" },
              { en: "self check-in", zh: "自助入住" },
            ],
            alternativeExpressions: [
              { textEn: "Totally fine! Keypad's 24/7, so come whenever. Just keep it quiet since neighbors are close by.", textZh: "完全没问题！密码锁24小时都能用。安静一点就行，邻居挺近的。", actionHint: "24/7 = 全天候; close by = 附近", frequency: "common" },
            ],
            casualVersion: "All good! Keypad works anytime. Just keep it down after 10, neighbors are close.",
            formalityVariants: {
              casual: "All good! Keypad works anytime. Just keep it down after 10.",
              standard: "No problem! Self check-in works anytime. Just be mindful of noise after 10 PM.",
              formal: "That is perfectly fine. The keypad-based self check-in system is available around the clock. I would simply ask that you please be mindful of noise levels after 10 PM, as the neighboring residences are in close proximity.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks! Is there a place nearby to grab a quick bite? I probably won't have time for dinner before arriving.",
            textZh: "谢谢！附近有能快速吃点东西的地方吗？到之前我可能没时间吃晚饭。",
            culturalNote: "grab a bite 是非常地道的表达，意思是快速吃点东西。半夜到达时问房东附近的餐饮选择很实用。",
            casualVersion: "Thanks! Anywhere nearby to grab food? Probably won't eat before I get there.",
            commonMistake: {
              wrong: "Is there a place to eat something near?",
              correct: "Is there a place nearby to grab a quick bite?",
              explanation: "near 放句末不自然，用 nearby 放在名词后面。grab a bite 比 eat something 更地道。",
            },
            formalityVariants: {
              casual: "Anywhere close to grab food late?",
              standard: "Is there a place nearby to grab a quick bite? I won't have dinner before arriving.",
              formal: "Could you recommend any nearby establishments where I might obtain a light meal? I likely will not have an opportunity to dine prior to my arrival.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "There's a 24-hour convenience store two blocks down on Main Street. Also, I left some snacks and water bottles in the kitchen — help yourself!",
            textZh: "Main Street往前两个街区有一家24小时便利店。另外，我在厨房放了一些零食和瓶装水——随便吃！",
            keyPhrases: [
              { en: "two blocks down", zh: "往前两个街区" },
              { en: "help yourself", zh: "随便吃/自己拿" },
            ],
            alternativeExpressions: [
              { textEn: "There's a corner store open late just down the street. I also stocked the fridge with some basics — feel free to dig in.", textZh: "街上有家开到很晚的街角商店。冰箱里也放了些基本的——随意吃。", actionHint: "dig in = 开吃", frequency: "common" },
            ],
            casualVersion: "Convenience store two blocks down, open 24/7. I left snacks and water — help yourself!",
            formalityVariants: {
              casual: "Convenience store two blocks down is 24/7. Left you snacks and water — dig in!",
              standard: "There's a 24-hour convenience store two blocks away. I also left snacks and water in the kitchen — help yourself.",
              formal: "There is a convenience store operating twenty-four hours approximately two blocks south on Main Street. Additionally, I have arranged some light refreshments and bottled water in the kitchen for your convenience.",
            },
          },
          {
            speaker: "you",
            textEn: "That's so thoughtful, thank you! One last question — will the Wi-Fi connect automatically, or do I need a password?",
            textZh: "太贴心了，谢谢！最后一个问题——WiFi是自动连接的还是需要密码？",
            culturalNote: "到达后WiFi是首要需求。Airbnb通常会在房内贴WiFi密码，但提前问可以更方便。",
            casualVersion: "Aw, thanks! Does the Wi-Fi auto-connect or do I need a password?",
            commonMistake: {
              wrong: "How to connect the Wi-Fi?",
              correct: "Will the Wi-Fi connect automatically, or do I need a password?",
              explanation: "How to connect 太生硬。具体问是否需要密码更自然、更有针对性。",
            },
            formalityVariants: {
              casual: "Thanks! Wi-Fi auto-connect or do I need a password?",
              standard: "Thank you! Does the Wi-Fi connect automatically, or do I need a password?",
              formal: "How very thoughtful of you, thank you. One final inquiry — does the Wi-Fi network connect automatically, or will I require credentials?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "The network name is 'CozyStay5G' and the password is on the card next to the TV. You should see it right when you walk in. Have a safe trip!",
            textZh: "网络名是'CozyStay5G'，密码在电视旁边的小卡片上。进门就能看到。一路平安！",
            keyPhrases: [
              { en: "network name", zh: "网络名" },
              { en: "have a safe trip", zh: "一路平安" },
            ],
            alternativeExpressions: [
              { textEn: "Wi-Fi's called 'CozyStay5G' — password's on a little card by the TV. Can't miss it. Safe travels!", textZh: "WiFi叫'CozyStay5G'——密码在电视旁边的小卡片上。很好找。旅途平安！", actionHint: "safe travels = 旅途平安（比 safe trip 更常见）", frequency: "common" },
            ],
            casualVersion: "Wi-Fi is CozyStay5G, password's on the card by the TV. Safe travels!",
            formalityVariants: {
              casual: "Wi-Fi: CozyStay5G. Password's on a card by the TV. Safe trip!",
              standard: "The network is 'CozyStay5G' and the password is on the card by the TV. Have a safe trip!",
              formal: "The wireless network is named 'CozyStay5G,' and the access credentials are printed on a card positioned beside the television. I wish you safe and pleasant travels.",
            },
          },
        ],
      },
      {
        id: "airbnb-host-issues",
        titleZh: "反映房屋问题",
        titleEn: "Reporting Property Issues",
        description: "入住后发现设备或设施问题，与房东沟通解决",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just settled in and noticed the hot water isn't working in the shower. I tried both knobs but only cold water comes out.",
            textZh: "你好，我刚安顿好，发现淋浴没热水。我试了两个旋钮但只有冷水出来。",
            culturalNote: "在国外反映问题要直接描述现象和你已经尝试过什么，这样房东更容易判断问题。",
            casualVersion: "Hey, just got settled — no hot water in the shower. Tried both knobs, only cold.",
            commonMistake: {
              wrong: "The shower has no hot water come out.",
              correct: "The hot water isn't working in the shower.",
              explanation: "用 isn't working 描述功能故障更地道。has no hot water come out 语法不对。",
            },
            formalityVariants: {
              casual: "Hey, no hot water in the shower. Tried both knobs — nothing.",
              standard: "Hi, the hot water isn't working in the shower. I tried both knobs but only cold water comes out.",
              formal: "Good evening, I wanted to bring to your attention that the hot water does not appear to be functioning in the shower. I have attempted both control knobs, but only cold water is being dispensed.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Oh no, sorry about that! Can you check the water heater in the closet next to the bathroom? There should be a switch — make sure it's turned on. Sometimes it gets toggled off by accident.",
            textZh: "啊抱歉！你能检查一下浴室旁边壁橱里的热水器吗？应该有个开关——确保是打开的。有时候会被不小心关掉。",
            keyPhrases: [
              { en: "water heater", zh: "热水器" },
              { en: "toggled off by accident", zh: "被不小心关掉" },
            ],
            alternativeExpressions: [
              { textEn: "Check the utility closet by the bathroom — there's a hot water boiler with a switch. It might've been flipped off accidentally.", textZh: "查一下浴室旁边的设备柜——里面有个带开关的热水炉。可能被不小心关了。", actionHint: "utility closet = 设备柜; flipped off = 被关掉", frequency: "common" },
            ],
            casualVersion: "Ah sorry! Check the closet by the bathroom — water heater switch might be off.",
            formalityVariants: {
              casual: "Oh sorry! Water heater's in the closet by the bathroom. Switch might've been turned off.",
              standard: "Can you check the water heater in the closet next to the bathroom? The switch may have been toggled off.",
              formal: "My sincere apologies for the inconvenience. Would you be able to inspect the water heater located in the utility closet adjacent to the bathroom? There is a power switch that may have been inadvertently toggled off.",
            },
          },
          {
            speaker: "you",
            textEn: "Found it! The switch was off. I turned it on — how long does it usually take to heat up?",
            textZh: "找到了！开关确实是关的。我打开了——一般要多久才能热起来？",
            culturalNote: "国外很多热水器是tank式的，需要加热时间。有些是on-demand（即热式）的会快很多。",
            casualVersion: "Found it, switch was off! How long for hot water?",
            commonMistake: {
              wrong: "How long time does it take to become hot?",
              correct: "How long does it usually take to heat up?",
              explanation: "不说 how long time，直接说 how long。become hot 换成 heat up 更自然。",
            },
            formalityVariants: {
              casual: "Got it, switch was off. How long to heat up?",
              standard: "Found it! The switch was off. How long does it usually take to heat up?",
              formal: "I have located and activated the switch. Approximately how long does the water heater typically require to reach adequate temperature?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "It should take about 15 to 20 minutes to get fully hot. If it's still cold after 30 minutes, let me know and I'll send someone over.",
            textZh: "大概15到20分钟就完全热了。如果30分钟后还是冷的，告诉我，我派人过去。",
            keyPhrases: [
              { en: "get fully hot", zh: "完全热起来" },
              { en: "send someone over", zh: "派人过去" },
            ],
            alternativeExpressions: [
              { textEn: "Give it about 20 minutes. If it's not warming up after half an hour, shoot me a message and I'll get a plumber out there.", textZh: "等大概20分钟。半小时后还不热，发我消息，我叫水管工过去。", actionHint: "shoot me a message = 发我消息; plumber = 水管工", frequency: "common" },
            ],
            casualVersion: "About 15-20 mins. If still cold after 30, hit me up and I'll send someone.",
            formalityVariants: {
              casual: "Give it 15-20 mins. Still cold after 30? Let me know, I'll send someone.",
              standard: "It should take 15 to 20 minutes. If still cold after 30, let me know and I'll send someone.",
              formal: "The heater typically requires approximately fifteen to twenty minutes to reach full temperature. Should the water remain cold after thirty minutes, please inform me and I will arrange for a technician to attend to the matter.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, I'll wait. Also, the bedroom window doesn't close all the way — there's a small gap and I can feel a draft. Is there a trick to it?",
            textZh: "好的，我等一下。另外，卧室的窗户关不严——有个小缝隙，能感觉到穿堂风。有什么技巧吗？",
            culturalNote: "老房子的窗户经常关不严。draft（穿堂风）在冬天特别烦人。问 is there a trick to it 是很自然的问法。",
            casualVersion: "Cool, I'll wait. Oh, the bedroom window won't shut all the way — there's a draft. Any trick?",
            commonMistake: {
              wrong: "The window can't close completely.",
              correct: "The window doesn't close all the way.",
              explanation: "close all the way 比 close completely 更口语化、更自然。can't close 暗示不可能关，doesn't close 表示事实上关不上。",
            },
            formalityVariants: {
              casual: "Also, the bedroom window won't shut — gap and a draft. Any trick?",
              standard: "Also, the bedroom window doesn't close all the way. There's a gap and I can feel a draft.",
              formal: "Additionally, I have noticed that the bedroom window does not seal completely. There is a visible gap through which a noticeable draft is entering. Is there a particular technique for securing it?",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Ah yes, that window sticks a bit. Try lifting the handle up while pushing the bottom of the window in. If it still won't close, there's a draft stopper in the closet you can place along the sill.",
            textZh: "啊对，那个窗户有点卡。试试一边把把手向上提，一边推窗户底部。如果还关不上，壁橱里有挡风条，可以放在窗台上。",
            keyPhrases: [
              { en: "the window sticks", zh: "窗户卡住了" },
              { en: "draft stopper", zh: "挡风条" },
            ],
            alternativeExpressions: [
              { textEn: "That window's a bit finicky. Jiggle the handle while pressing the window in at the bottom. Worst case, grab the draft blocker from the closet.", textZh: "那扇窗户有点难弄。一边晃把手一边往里推窗户底部。实在不行，壁橱里有挡风条。", actionHint: "finicky = 难弄的; jiggle = 晃动", frequency: "common" },
            ],
            casualVersion: "Yeah, it sticks. Lift the handle while pushing the bottom in. There's a draft stopper in the closet if it won't budge.",
            formalityVariants: {
              casual: "Yeah, it sticks. Lift the handle and push the bottom in. Draft stopper's in the closet.",
              standard: "That window sticks a bit. Lift the handle up while pushing the bottom in. There's a draft stopper in the closet.",
              formal: "Yes, that particular window does tend to stick. I would suggest lifting the handle upward while simultaneously applying inward pressure at the base. Should it remain resistant, you will find a draft stopper in the closet that can be positioned along the window sill.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 写Airbnb评价 ====================
  {
    id: "accommodation-airbnb-review",
    category: "accommodation",
    titleZh: "写Airbnb评价",
    titleEn: "Writing Airbnb Reviews",
    description: "退房后给Airbnb写评价，包括打分、描述体验、提出建议等",
    otherRole: "朋友",
    otherRoleIcon: "⭐",
    flows: [
      {
        id: "airbnb-review-basic",
        titleZh: "写好评",
        titleEn: "Writing a Positive Review",
        description: "朋友帮你用英文写Airbnb好评，描述愉快的住宿体验",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, can you help me write an Airbnb review? The place was amazing but I'm not sure how to say it naturally in English.",
            textZh: "嘿，能帮我写个Airbnb评价吗？那个地方超棒但我不确定怎么用英文自然地表达。",
            culturalNote: "Airbnb评价对房东很重要，好评帮助他们获得更多订单。用英文写评价是练习写作的好机会。",
            casualVersion: "Can you help me write a review? Place was great but my English isn't great for writing.",
            commonMistake: {
              wrong: "The place was very good.",
              correct: "The place was amazing.",
              explanation: "very good 太平淡。amazing, wonderful, fantastic 更能表达真正的好体验。",
            },
            formalityVariants: {
              casual: "Help me with a review? Place was awesome, just dunno how to write it.",
              standard: "Can you help me write an Airbnb review? The place was amazing.",
              formal: "Would you mind assisting me with composing an Airbnb review? The accommodation was truly exceptional.",
            },
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Sure! Start with the overall vibe — was it cozy, modern, spacious? Then mention something specific that stood out, like the view or the host's communication.",
            textZh: "当然！先说整体感觉——温馨的、现代的、还是宽敞的？然后提一个突出的亮点，比如风景或者房东的沟通。",
            keyPhrases: [
              { en: "overall vibe", zh: "整体感觉" },
              { en: "stood out", zh: "突出/出众" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely! Start with the feel of the place, then mention one thing that really impressed you — like cleanliness or the neighborhood.", textZh: "当然！先描述感觉，然后说一个最让你印象深刻的——比如干净程度或者社区环境。", actionHint: "feel of the place = 这个地方的感觉", frequency: "common" },
            ],
            casualVersion: "For sure! What was the vibe — cozy? Modern? Then pick something that was really great.",
            formalityVariants: {
              casual: "For sure! What was the vibe? Cozy? Modern? Then pick one standout thing.",
              standard: "Sure! Start with the overall vibe, then mention something specific that stood out.",
              formal: "Of course, I would be happy to help. I suggest beginning with the general ambiance, then highlighting a particular aspect that distinguished the property.",
            },
          },
          {
            speaker: "you",
            textEn: "It was really cozy and clean. The best part was the rooftop terrace with a city view. How about: 'Lovely apartment, very clean, nice view from the rooftop'?",
            textZh: "又温馨又干净。最棒的是有城市景观的天台。这样写行吗：'可爱的公寓，很干净，天台景色不错'？",
            culturalNote: "中国人写评价容易用短句罗列。英文评价更推荐写完整的句子，有具体细节会显得更真实可信。",
            casualVersion: "Super cozy and clean. Rooftop view was the best part. Is 'lovely apartment, clean, nice view' okay?",
            commonMistake: {
              wrong: "Lovely apartment, very clean, nice view from the rooftop.",
              correct: "We loved the cozy apartment! It was spotless and the rooftop terrace had a stunning city view.",
              explanation: "短语罗列不够生动。用完整句子、具体形容词（spotless, stunning）让评价更有感染力。",
            },
            formalityVariants: {
              casual: "Cozy and clean. The rooftop was sick. Is 'lovely place, clean, nice view' good enough?",
              standard: "It was cozy and clean. The rooftop city view was the best part. How does my draft sound?",
              formal: "The accommodation was impeccably clean and exuded warmth. The highlight was undoubtedly the rooftop terrace offering panoramic city views.",
            },
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Good start, but try making it flow better. How about: 'We loved this cozy apartment! Everything was spotless and the rooftop terrace had a stunning city view — perfect for morning coffee.'",
            textZh: "不错的开始，但可以写得更流畅。这样呢：'我们超爱这个温馨的公寓！一切都一尘不染，天台上有惊艳的城市景观——早上喝咖啡完美。'",
            keyPhrases: [
              { en: "spotless", zh: "一尘不染" },
              { en: "stunning city view", zh: "惊艳的城市景观" },
            ],
            alternativeExpressions: [
              { textEn: "Try something like: 'Such a gem! Incredibly clean, beautifully decorated, and the rooftop views were the cherry on top.'", textZh: "试试这样：'真是个宝藏！超干净，装修漂亮，天台风景是锦上添花。'", actionHint: "gem = 宝藏; cherry on top = 锦上添花", frequency: "common" },
            ],
            casualVersion: "Not bad! Try: 'Loved this cozy spot! Super clean and the rooftop view was amazing — great for morning coffee.'",
            formalityVariants: {
              casual: "Try: 'Loved this cozy spot! Super clean, rooftop view was insane — great for coffee.'",
              standard: "Try: 'We loved this cozy apartment! Everything was spotless and the rooftop terrace had a stunning view.'",
              formal: "Consider: 'This charming apartment exceeded our expectations. The premises were impeccably maintained, and the rooftop terrace afforded breathtaking panoramic views of the cityscape.'",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds great! Should I also mention the host? She replied to all my messages within minutes.",
            textZh: "听起来很好！我还需要提到房东吗？她每条消息都是几分钟内回复的。",
            culturalNote: "提到房东的沟通效率是Airbnb评价的重要部分。房东看重 responsive 和 helpful 这样的评价词。",
            casualVersion: "Love it! Should I mention the host too? She was super fast at replying.",
            commonMistake: {
              wrong: "She replied my messages very quickly.",
              correct: "She replied to all my messages within minutes.",
              explanation: "reply 后面要加 to：replied to my messages。within minutes 比 very quickly 更具体。",
            },
            formalityVariants: {
              casual: "That's perfect! Should I say something about the host? She was crazy fast at texting back.",
              standard: "Should I also mention the host? She replied to all my messages within minutes.",
              formal: "Excellent suggestion. Would it be advisable to include commentary regarding the host? She demonstrated exceptional responsiveness to all communications.",
            },
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Definitely! You could add: 'The host was incredibly responsive and helpful — she answered every question within minutes and even gave us great restaurant recommendations.' Hosts love that kind of feedback.",
            textZh: "一定要提！你可以加：'房东超级及时和热心——每个问题几分钟内就回复了，还给我们推荐了很棒的餐厅。'房东很喜欢这种反馈。",
            keyPhrases: [
              { en: "incredibly responsive", zh: "超级及时" },
              { en: "restaurant recommendations", zh: "餐厅推荐" },
            ],
            alternativeExpressions: [
              { textEn: "Add something like: 'Communication was top-notch — the host was always quick to respond and went above and beyond with local tips.'", textZh: "加上类似的：'沟通一流——房东回复总是很快，还超用心给了很多本地建议。'", actionHint: "top-notch = 一流的; went above and beyond = 超出期望", frequency: "common" },
            ],
            casualVersion: "For sure! Say she was super responsive and gave great food recs. Hosts eat that up.",
            formalityVariants: {
              casual: "Yeah! Say she was super responsive and gave awesome food recs. Hosts love hearing that.",
              standard: "Definitely mention the host! Say she was incredibly responsive and gave great restaurant recommendations.",
              formal: "Absolutely. You might append: 'The host demonstrated exemplary communication — responding to every inquiry within minutes and graciously providing outstanding dining recommendations.'",
            },
          },
        ],
      },
      {
        id: "airbnb-review-constructive",
        titleZh: "写含建议的评价",
        titleEn: "Writing Constructive Feedback",
        description: "写一个整体不错但有改进建议的评价",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "The Airbnb was okay overall, but a few things bothered me. How do I write honest feedback without sounding too harsh?",
            textZh: "Airbnb总体还行，但有几个地方让我不满意。怎么写诚实的反馈又不会听起来太严厉？",
            culturalNote: "英文评价文化讲究'三明治反馈法'：先说好的，再说建议，最后总结。直接批评被认为不太礼貌。",
            casualVersion: "Place was alright but had some issues. How do I write it without being mean?",
            commonMistake: {
              wrong: "The place has some problems I want to say.",
              correct: "A few things bothered me and I'd like to give honest feedback.",
              explanation: "用 bothered me 比 has some problems 更委婉。给反馈说 give feedback，不说 want to say。",
            },
            formalityVariants: {
              casual: "Place was okay but some stuff bugged me. How do I not sound like a jerk?",
              standard: "How do I write honest feedback without sounding too harsh?",
              formal: "How might I articulate constructive criticism in a manner that remains respectful and fair?",
            },
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Use the sandwich method — start with something positive, then the issue, then end on a good note. What were the problems?",
            textZh: "用三明治法——先说好的，然后说问题，最后以好的结尾。有什么问题？",
            keyPhrases: [
              { en: "sandwich method", zh: "三明治法" },
              { en: "end on a good note", zh: "以好的结尾" },
            ],
            alternativeExpressions: [
              { textEn: "Lead with the positives, slip in the feedback, then wrap up nicely. What didn't you like?", textZh: "先说优点，插入反馈，然后漂亮收尾。你不满意什么？", actionHint: "slip in = 插入; wrap up = 收尾", frequency: "common" },
            ],
            casualVersion: "Sandwich it — good stuff first, then the issues, then end positive. What went wrong?",
            formalityVariants: {
              casual: "Sandwich it! Good stuff, then the issues, then end nice. What bugged you?",
              standard: "Use the sandwich method — positive, then the issue, then a good ending. What were the problems?",
              formal: "I recommend employing the sandwich approach — commence with positive observations, address the concerns, then conclude on an affirmative note. What specifically were the issues?",
            },
          },
          {
            speaker: "you",
            textEn: "The location was great and the host was nice, but the mattress was really uncomfortable and the bathroom wasn't very clean when we arrived.",
            textZh: "位置很好，房东也很好，但床垫真的很不舒服，而且到的时候浴室不太干净。",
            culturalNote: "mattress quality 和 cleanliness 是Airbnb评价中最重要的两个因素。这类问题值得诚实反馈。",
            casualVersion: "Location was great, host was cool, but the mattress was awful and the bathroom was kinda dirty.",
            commonMistake: {
              wrong: "The bed was not comfortable to sleep.",
              correct: "The mattress was really uncomfortable.",
              explanation: "不舒服的是 mattress（床垫）不是 bed（床）。uncomfortable 后面不需要加 to sleep。",
            },
            formalityVariants: {
              casual: "Location rocked, host was cool, but mattress was brutal and the bathroom wasn't clean.",
              standard: "The location was great and the host was nice, but the mattress was uncomfortable and the bathroom wasn't clean.",
              formal: "While the location was excellent and the host was gracious, the mattress was quite uncomfortable and the bathroom had not been adequately cleaned prior to our arrival.",
            },
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Here's how I'd phrase it: 'Great location and the host was very welcoming. However, the mattress could use an upgrade — it was quite firm and made sleeping difficult. The bathroom also needed a deeper clean upon arrival. That said, we still enjoyed our stay overall.'",
            textZh: "我会这样写：'位置很好，房东非常热情。不过床垫需要升级——太硬了，影响睡眠。到达时浴室也需要更深度的清洁。话虽如此，我们整体还是享受了这次住宿。'",
            keyPhrases: [
              { en: "could use an upgrade", zh: "需要升级" },
              { en: "that said", zh: "话虽如此" },
            ],
            alternativeExpressions: [
              { textEn: "Try: 'Wonderful location and friendly host. The sleeping situation wasn't ideal — the mattress was on the firmer side. Cleanliness in the bathroom could be improved. Overall, a decent stay with room for improvement.'", textZh: "试试：'位置棒，房东友好。睡眠条件不太理想——床垫偏硬。浴室清洁度有待提高。总体来说，住得还行，有进步空间。'", actionHint: "on the firmer side = 偏硬; room for improvement = 进步空间", frequency: "common" },
            ],
            casualVersion: "Say: 'Location was awesome and host was super nice. Mattress needs upgrading though — too firm. Bathroom coulda been cleaner. Still had a good time overall.'",
            formalityVariants: {
              casual: "Say: 'Awesome location, nice host. Mattress was rough though and bathroom coulda been cleaner. Still a good stay.'",
              standard: "Try: 'Great location and welcoming host. The mattress could use an upgrade and the bathroom needed a deeper clean. Still enjoyed our stay overall.'",
              formal: "Consider: 'The property boasts an excellent location and the host extended a warm welcome. However, the mattress would benefit from an upgrade, and the bathroom sanitation upon arrival did not meet expectations. Nevertheless, the overall experience remained positive.'",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. What star rating should I give? I'm thinking 3 out of 5 — is that too low?",
            textZh: "完美。打几颗星好？我想给3颗星——会不会太低了？",
            culturalNote: "Airbnb的评分体系里，4星已经算不好了。大多数房源都是4.5+。3星会严重影响房东的排名。",
            casualVersion: "What rating — 3 stars? Too low?",
            commonMistake: {
              wrong: "How many stars should I give to them?",
              correct: "What star rating should I give?",
              explanation: "star rating 是固定搭配。不需要说 give to them，直接说 give 就行。",
            },
            formalityVariants: {
              casual: "Stars? I'm thinking 3 — too harsh?",
              standard: "What star rating should I give? Is 3 out of 5 too low?",
              formal: "What rating would you recommend? I am considering three out of five stars — would that be considered unduly severe?",
            },
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "On Airbnb, anything below 4 stars is considered pretty bad — it can tank the host's ranking. If the issues weren't dealbreakers, I'd say 3.5 to 4 is fair. Save 3 stars for truly bad experiences.",
            textZh: "在Airbnb上，4星以下就算很差了——会严重拉低房东的排名。如果那些问题不是不能忍的，3.5到4星比较公平。3星留给真正糟糕的体验。",
            keyPhrases: [
              { en: "tank the host's ranking", zh: "严重拉低排名" },
              { en: "dealbreakers", zh: "不能忍的问题" },
            ],
            alternativeExpressions: [
              { textEn: "Anything under 4 really hurts them on Airbnb. If it was livable, go with 4 and mention the issues in the text. 3 stars is only for really rough stays.", textZh: "Airbnb上4星以下真的会伤害房东。如果还过得去，给4星然后在文字里提问题。3星只给真正糟糕的。", actionHint: "livable = 还过得去的", frequency: "common" },
            ],
            casualVersion: "Under 4 on Airbnb is basically a death sentence. Give 4 if it was okay but not great. 3 means it was really bad.",
            formalityVariants: {
              casual: "Under 4 is basically a death blow on Airbnb. Give 4 if it was fine-ish. Save 3 for disasters.",
              standard: "Below 4 stars is considered poor on Airbnb. If the issues weren't dealbreakers, 4 stars is fair.",
              formal: "On Airbnb's rating scale, anything below four stars is regarded as a significantly negative assessment and can substantially diminish the host's visibility. Unless the issues were truly prohibitive, a rating of four stars with detailed written feedback would be the most equitable approach.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 青旅床位 ====================
  {
    id: "accommodation-hostel-bunk",
    category: "accommodation",
    titleZh: "青旅床位",
    titleEn: "Hostel Bunk Bed",
    description: "青年旅舍入住时选择上下铺、使用储物柜、了解安静时间等",
    otherRole: "青旅前台",
    otherRoleIcon: "🛏️",
    flows: [
      {
        id: "hostel-bunk-basic",
        titleZh: "选择床位和储物柜",
        titleEn: "Choosing Bunk & Locker",
        description: "入住青旅时选择上下铺、领取储物柜钥匙",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a reservation for a dorm bed. Is it possible to get a bottom bunk? I'm not great with ladders.",
            textZh: "你好，我预订了一个宿舍床位。能安排下铺吗？我不太擅长爬梯子。",
            culturalNote: "国外青旅（hostel）的 dorm 就是多人间，bunk bed 是上下铺。下铺更方便但经常被先到的人选走。",
            casualVersion: "Hey, I booked a dorm bed. Any chance I can get a bottom bunk? Not a fan of ladders.",
            commonMistake: {
              wrong: "Can I have a down bed?",
              correct: "Can I get a bottom bunk?",
              explanation: "下铺是 bottom bunk，不是 down bed。上铺是 top bunk。",
            },
            formalityVariants: {
              casual: "Booked a dorm — got a bottom bunk available?",
              standard: "I have a reservation for a dorm bed. Could I get a bottom bunk?",
              formal: "Good afternoon, I have a reservation for a dormitory bed. Would it be possible to be assigned a lower bunk? I have some difficulty with ladders.",
            },
          },
          {
            speaker: "them",
            role: "青旅前台",
            textEn: "Sure, bed 3 is a bottom bunk by the window. Here's your locker key — number 12. The lockers are inside the dorm room, right next to your bed.",
            textZh: "当然，3号床是窗边的下铺。这是你的储物柜钥匙——12号。储物柜在宿舍房间里，就在你床旁边。",
            keyPhrases: [
              { en: "locker key", zh: "储物柜钥匙" },
              { en: "bottom bunk by the window", zh: "窗边的下铺" },
            ],
            alternativeExpressions: [
              { textEn: "You're in luck — bed 3 is a lower bunk near the window. Locker 12 is right beside it, here's the key.", textZh: "你运气好——3号床是窗边的下铺。12号储物柜就在旁边，给你钥匙。", actionHint: "you're in luck = 你运气好", frequency: "common" },
            ],
            casualVersion: "Bed 3's a bottom bunk by the window. Here's your locker key — number 12, right next to your bed.",
            formalityVariants: {
              casual: "Bed 3 — bottom bunk, by the window. Locker 12's right there, here's the key.",
              standard: "Bed 3 is a bottom bunk by the window. Here's your locker key for number 12.",
              formal: "Certainly, bed number three is a lower bunk positioned by the window. Your designated locker is number twelve, located directly adjacent to your bed. Here is your key.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, thanks! Is the locker big enough to fit a backpack? I have a 40-liter one.",
            textZh: "太好了，谢谢！储物柜能放下背包吗？我的是40升的。",
            culturalNote: "青旅的储物柜大小差异很大。贵重物品一定要锁好，有些旅客会自带挂锁。",
            casualVersion: "Nice! Will a 40-liter backpack fit in the locker?",
            commonMistake: {
              wrong: "Is the locker enough big for my backpack?",
              correct: "Is the locker big enough to fit a backpack?",
              explanation: "enough 放在形容词后面：big enough，不是 enough big。",
            },
            formalityVariants: {
              casual: "Will my 40-liter backpack fit in there?",
              standard: "Is the locker big enough for a 40-liter backpack?",
              formal: "Would the locker accommodate a forty-liter backpack?",
            },
          },
          {
            speaker: "them",
            role: "青旅前台",
            textEn: "It should fit! The lockers are pretty tall — most backpacks up to 50 liters fit fine. If it doesn't, we have a luggage storage area behind the front desk.",
            textZh: "应该放得下！储物柜挺高的——50升以下的背包基本都能放。如果放不下，前台后面有一个行李寄存区。",
            keyPhrases: [
              { en: "luggage storage area", zh: "行李寄存区" },
              { en: "fit fine", zh: "放得下" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, they're tall enough for most packs. Worst case, you can stash it in our secure luggage room by reception.", textZh: "是的，大多数包都放得下。实在不行，可以放到前台旁边的安全行李间。", actionHint: "stash = 暂存; by reception = 前台旁边", frequency: "common" },
            ],
            casualVersion: "Should fit! Up to 50 liters works. If not, we've got luggage storage out back.",
            formalityVariants: {
              casual: "Should fit! 50 liters max. If not, there's luggage storage behind the desk.",
              standard: "It should fit. Lockers hold up to 50 liters. We also have luggage storage behind the front desk.",
              formal: "The lockers should accommodate your backpack, as they can hold packs of up to fifty liters. Should additional space be required, we maintain a secure luggage storage facility behind the reception area.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. What are the quiet hours? I want to make sure I don't disturb anyone when I come back late.",
            textZh: "好的。安静时间是几点到几点？我想确保晚回来的时候不打扰到别人。",
            culturalNote: "quiet hours（安静时间）是青旅的重要规则，通常晚10点到早8点。违反会影响其他旅客，可能被投诉。",
            casualVersion: "What are quiet hours? I might come back late and don't wanna wake anyone up.",
            commonMistake: {
              wrong: "When is the silent time?",
              correct: "What are the quiet hours?",
              explanation: "安静时间的固定说法是 quiet hours，不是 silent time。",
            },
            formalityVariants: {
              casual: "When are quiet hours? Might be back late.",
              standard: "What are the quiet hours? I don't want to disturb anyone if I come back late.",
              formal: "Could you please inform me of the designated quiet hours? I wish to ensure I do not disturb fellow guests upon a late return.",
            },
          },
          {
            speaker: "them",
            role: "青旅前台",
            textEn: "Quiet hours are from 10 PM to 8 AM. If you come back late, just use the flashlight on your phone instead of turning on the room lights. And please don't rustle plastic bags — that's the number one complaint!",
            textZh: "安静时间是晚上10点到早上8点。如果晚回来，用手机手电筒别开房间的灯。还有请不要翻弄塑料袋——这是投诉第一名！",
            keyPhrases: [
              { en: "quiet hours", zh: "安静时间" },
              { en: "rustle plastic bags", zh: "翻弄塑料袋发出声响" },
            ],
            alternativeExpressions: [
              { textEn: "10 PM to 8 AM — keep it down, use your phone light, and for the love of all that's holy, no crinkling plastic bags at 2 AM!", textZh: "晚10到早8——保持安静，用手机灯，拜托半夜2点别弄塑料袋！", actionHint: "crinkling = 弄出沙沙响声; for the love of... = 拜托（幽默夸张）", frequency: "common" },
            ],
            casualVersion: "10 PM to 8 AM. Phone flashlight, no room lights. And seriously, no plastic bag noise — biggest complaint ever.",
            formalityVariants: {
              casual: "10 to 8. Use your phone light. And please — no plastic bag rustling!",
              standard: "Quiet hours are 10 PM to 8 AM. Use your phone flashlight and avoid rustling plastic bags.",
              formal: "Quiet hours are observed from ten o'clock in the evening until eight in the morning. We ask that late-arriving guests utilize their mobile phone torch rather than the overhead lights, and kindly refrain from handling plastic bags, which is our most frequently reported disturbance.",
            },
          },
        ],
      },
      {
        id: "hostel-bunk-etiquette",
        titleZh: "宿舍礼仪问题",
        titleEn: "Dorm Room Etiquette",
        description: "处理青旅宿舍里的噪音、空间和礼仪问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, would you mind turning down your music? It's past quiet hours and I'm trying to sleep.",
            textZh: "不好意思，能把音乐调小声点吗？已经过了安静时间了，我在睡觉。",
            culturalNote: "在青旅直接但礼貌地提出问题是被接受的。would you mind 是最常用的礼貌请求方式。",
            casualVersion: "Hey, could you turn that down? It's quiet hours and I'm trying to sleep.",
            commonMistake: {
              wrong: "Can you close your music? I want to sleep.",
              correct: "Would you mind turning down your music?",
              explanation: "音乐调小声用 turn down，不用 close。would you mind 比 can you 更礼貌。",
            },
            formalityVariants: {
              casual: "Hey, mind turning that down? Trying to sleep here.",
              standard: "Would you mind turning down your music? It's past quiet hours.",
              formal: "Pardon me, would you mind lowering the volume of your music? It is past the designated quiet hours and I am attempting to rest.",
            },
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "Oh, sorry! I didn't realize it was that loud. I'll use my headphones. Really sorry about that.",
            textZh: "哦，抱歉！我没意识到这么大声。我戴耳机吧。真的很抱歉。",
            keyPhrases: [
              { en: "I didn't realize", zh: "我没意识到" },
              { en: "I'll use my headphones", zh: "我戴耳机" },
            ],
            alternativeExpressions: [
              { textEn: "My bad! Didn't know it was carrying. Switching to headphones now.", textZh: "我的错！不知道声音传这么远。现在换耳机。", actionHint: "carrying = （声音）传得远", frequency: "common" },
            ],
            casualVersion: "Oh shoot, my bad! Putting headphones on now. Sorry!",
            formalityVariants: {
              casual: "Oh man, my bad! Headphones going on now.",
              standard: "Sorry, I didn't realize it was that loud. I'll use headphones.",
              formal: "I do apologize — I was not aware the volume was carrying. I shall switch to headphones immediately.",
            },
          },
          {
            speaker: "you",
            textEn: "No worries, thanks for understanding. By the way, is it okay if I use the reading light, or does it bother you?",
            textZh: "没关系，谢谢理解。顺便问一下，我用阅读灯可以吗，会不会打扰你？",
            culturalNote: "青旅多人间的相互体谅很重要。主动询问自己的行为是否影响他人是好的宿舍礼仪。",
            casualVersion: "All good! Hey, does my reading light bother you?",
            commonMistake: {
              wrong: "Can I open the reading light?",
              correct: "Is it okay if I use the reading light?",
              explanation: "灯用 turn on 或 use，不用 open。is it okay if 比 can I 更体贴。",
            },
            formalityVariants: {
              casual: "No prob! Does my reading light bug you?",
              standard: "No worries. Is it okay if I use the reading light?",
              formal: "Not at all. Would you mind if I utilized the reading lamp? I want to ensure it does not disturb you.",
            },
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "Go ahead, the reading light is fine! It doesn't reach my bunk. I've got an eye mask anyway, so I'm good.",
            textZh: "用吧，阅读灯没问题！照不到我的铺位。我反正有眼罩，没事的。",
            keyPhrases: [
              { en: "go ahead", zh: "用吧/请便" },
              { en: "eye mask", zh: "眼罩" },
            ],
            alternativeExpressions: [
              { textEn: "Totally fine, it won't bother me. I always sleep with an eye mask in hostels anyway.", textZh: "完全没问题，不会打扰我。我在青旅都是戴眼罩睡的。", actionHint: "won't bother me = 不会打扰我", frequency: "common" },
            ],
            casualVersion: "Yeah, go for it. Reading light doesn't bother me at all. Got my eye mask.",
            formalityVariants: {
              casual: "Yeah go for it! Doesn't reach me and I've got my eye mask.",
              standard: "Go ahead, the reading light is fine. I have an eye mask anyway.",
              formal: "Please feel free. The reading lamp does not extend to my area, and I have an eye mask for additional comfort.",
            },
          },
          {
            speaker: "you",
            textEn: "One more thing — I need to pack my bag early tomorrow morning around 6 AM. I'll try to be as quiet as possible. Should I pack tonight instead?",
            textZh: "还有一件事——明天早上6点左右我需要收拾行李。我会尽量安静。还是今晚先收拾好？",
            culturalNote: "早起收拾行李是青旅最容易产生矛盾的场景之一。提前整理好或者把行李拿到公共区域收拾是公认的好做法。",
            casualVersion: "Oh, gotta pack at 6 AM tomorrow. Should I just pack tonight so I don't wake everyone up?",
            commonMistake: {
              wrong: "I need to tidy my luggage at morning.",
              correct: "I need to pack my bag early tomorrow morning.",
              explanation: "收拾行李用 pack my bag。at morning 改为 in the morning 或 tomorrow morning。",
            },
            formalityVariants: {
              casual: "Heads up — gotta pack at 6 AM. Better to do it tonight?",
              standard: "I need to pack around 6 AM tomorrow. Should I pack tonight instead to avoid disturbing everyone?",
              formal: "I should mention that I will need to prepare my luggage at approximately 6 AM tomorrow. Would it be more considerate to pack this evening?",
            },
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "That's really considerate! If you can get your stuff organized tonight, that would be awesome. Or just take your bag to the common area in the morning — no one minds that.",
            textZh: "你真体贴！如果今晚能整理好就太好了。或者早上把包拿到公共区域去收拾——没人会介意的。",
            keyPhrases: [
              { en: "that's really considerate", zh: "你真体贴" },
              { en: "common area", zh: "公共区域" },
            ],
            alternativeExpressions: [
              { textEn: "Super thoughtful of you! Yeah, pack tonight or just grab your bag and sort it out in the lounge. Either works.", textZh: "你真周到！是的，今晚收拾好或者早上拿到休息室整理都行。", actionHint: "sort it out = 整理好; lounge = 休息室", frequency: "common" },
            ],
            casualVersion: "That's really nice of you! Pack tonight or just take your bag out to the lounge in the morning. All good!",
            formalityVariants: {
              casual: "That's sweet! Pack tonight or just grab it and sort it in the lounge.",
              standard: "That's considerate! Pack tonight, or take your bag to the common area in the morning.",
              formal: "How very considerate of you. Preparing your belongings this evening would be ideal, though you are also welcome to take your bag to the communal area in the morning to organize it there.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 青旅公共区域 ====================
  {
    id: "accommodation-hostel-common-area",
    category: "accommodation",
    titleZh: "青旅公共区域",
    titleEn: "Hostel Common Area",
    description: "使用青旅的公共厨房、客厅等公共区域，了解使用规则，与其他旅客社交",
    otherRole: "其他旅客",
    otherRoleIcon: "🍳",
    flows: [
      {
        id: "hostel-kitchen-basic",
        titleZh: "使用公共厨房",
        titleEn: "Using the Shared Kitchen",
        description: "了解青旅公共厨房的使用规则、标记食物、清理餐具",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, is it okay if I use this pan? I'm not sure which ones are for guests.",
            textZh: "嘿，我能用这个平底锅吗？我不确定哪些是给客人用的。",
            culturalNote: "青旅公共厨房的锅碗瓢盆通常是共用的。用完必须立刻清洗，这是最基本的礼仪。",
            casualVersion: "Can I use this pan? Which stuff is for guests?",
            commonMistake: {
              wrong: "Can I borrow this pan?",
              correct: "Is it okay if I use this pan?",
              explanation: "公共厨房的东西不是 borrow（借），是 use（使用），因为它就是给大家用的。",
            },
            formalityVariants: {
              casual: "This pan cool to use? Not sure what's fair game.",
              standard: "Is it okay to use this pan? I'm not sure which items are for guests.",
              formal: "Excuse me, may I use this particular pan? I am uncertain which kitchen items are designated for guest use.",
            },
          },
          {
            speaker: "them",
            role: "其他旅客",
            textEn: "Yeah, everything in the cabinets is shared! Just make sure you wash it right after you're done. People get annoyed if you leave dirty dishes in the sink.",
            textZh: "对，柜子里的东西都是共用的！用完马上洗就行。把脏碗放水槽里不洗的话别人会不高兴的。",
            keyPhrases: [
              { en: "everything is shared", zh: "都是共用的" },
              { en: "leave dirty dishes in the sink", zh: "把脏碗留在水槽里" },
            ],
            alternativeExpressions: [
              { textEn: "Help yourself to any of the pots and pans. Just clean up after yourself — that's like the golden rule here.", textZh: "锅碗随便用。用完自己清理——这是这里的铁律。", actionHint: "golden rule = 铁律/黄金法则", frequency: "common" },
            ],
            casualVersion: "Yeah, all shared. Just wash it when you're done. Nobody likes a dirty sink.",
            formalityVariants: {
              casual: "All shared! Just wash your stuff. People hate dirty dishes in the sink.",
              standard: "Everything in the cabinets is shared. Just wash up right after you're done.",
              formal: "All kitchenware in the cabinets is communal. The expectation is that guests wash their items immediately after use to maintain a clean environment for everyone.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Can I store some food in the fridge? I bought groceries for a few days.",
            textZh: "明白了。我能在冰箱里存点食物吗？我买了几天的食材。",
            culturalNote: "青旅冰箱空间有限，食物必须用袋子装好并标记名字和日期。未标记的食物可能被扔掉。",
            casualVersion: "Can I put some food in the fridge? Got groceries for a couple days.",
            commonMistake: {
              wrong: "Can I put food in the ice box?",
              correct: "Can I store some food in the fridge?",
              explanation: "冰箱日常说 fridge，不说 ice box（冰柜/古老说法）。store 比 put 更准确表达存放。",
            },
            formalityVariants: {
              casual: "Cool if I stash some food in the fridge?",
              standard: "Can I store some food in the fridge? I bought groceries for a few days.",
              formal: "Would it be permissible to store some food items in the refrigerator? I have purchased provisions for several days.",
            },
          },
          {
            speaker: "them",
            role: "其他旅客",
            textEn: "Sure, just label your stuff with your name and the date. They clean out the fridge every Friday and toss anything that's not labeled.",
            textZh: "当然可以，记得贴上名字和日期。每周五他们会清理冰箱，没标记的东西都会被扔掉。",
            keyPhrases: [
              { en: "label your stuff", zh: "给你的东西贴标签" },
              { en: "clean out the fridge", zh: "清理冰箱" },
            ],
            alternativeExpressions: [
              { textEn: "Totally — but write your name and date on it or it'll get tossed during the weekly cleanout.", textZh: "完全可以——但写上名字和日期，不然每周清理的时候会被扔掉。", actionHint: "cleanout = 清理; get tossed = 被扔掉", frequency: "common" },
            ],
            casualVersion: "Yeah, just put your name and date on it. Unlabeled stuff gets chucked every Friday.",
            formalityVariants: {
              casual: "Yeah! Name and date on it or it gets tossed on Fridays.",
              standard: "Sure, just label everything with your name and date. They clean the fridge out every Friday.",
              formal: "Certainly. Please ensure all items are labeled with your name and date. The staff conducts a refrigerator purge each Friday, and any unlabeled items are discarded.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks for the tip! By the way, is there dish soap and sponges here, or do I need to bring my own?",
            textZh: "谢谢提醒！对了，这里有洗洁精和海绵吗，还是要自己带？",
            culturalNote: "大多数青旅提供基本的清洁用品，但不一定总是有。提前问可以避免尴尬。",
            casualVersion: "Thanks! Is there dish soap here or do I need my own?",
            commonMistake: {
              wrong: "Is there washing liquid and cleaning sponge?",
              correct: "Is there dish soap and sponges?",
              explanation: "洗碗液在口语中说 dish soap，海绵就是 sponge。washing liquid 也对但不太常用。",
            },
            formalityVariants: {
              casual: "Is there soap and sponges or do I gotta get my own?",
              standard: "Is there dish soap and sponges here, or should I bring my own?",
              formal: "Are dish soap and cleaning sponges provided, or would I need to supply my own?",
            },
          },
          {
            speaker: "them",
            role: "其他旅客",
            textEn: "Dish soap is by the sink and there are sponges in the drawer below. If you need oil or salt, there's a shared shelf with basics that anyone can use.",
            textZh: "洗洁精在水槽旁边，海绵在下面的抽屉里。如果你需要油或盐，有个共用调料架，谁都能用。",
            keyPhrases: [
              { en: "shared shelf", zh: "共用架子" },
              { en: "in the drawer below", zh: "在下面的抽屉里" },
            ],
            alternativeExpressions: [
              { textEn: "Soap's by the sink, sponges in the bottom drawer. There's also a community shelf with oil, salt, and basic spices — free for all.", textZh: "洗洁精在水槽旁，海绵在最下面的抽屉。还有个公用架子有油、盐和基本调料——大家随意用。", actionHint: "free for all = 人人可用", frequency: "common" },
            ],
            casualVersion: "Soap's by the sink. Sponges in the drawer. There's a shared shelf with oil and salt too — help yourself.",
            formalityVariants: {
              casual: "Soap's at the sink, sponges in the drawer. Shared shelf has oil and salt — go for it.",
              standard: "Dish soap is by the sink and sponges are in the drawer. There's also a shared shelf with cooking basics.",
              formal: "Dish soap is situated beside the sink, and sponges are available in the drawer beneath. Additionally, there is a communal shelf stocked with basic provisions such as oil and salt for general use.",
            },
          },
        ],
      },
      {
        id: "hostel-socializing",
        titleZh: "公共区域社交",
        titleEn: "Socializing in Common Areas",
        description: "在青旅公共区域与其他旅客聊天、交换旅行信息",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, mind if I sit here? I just checked in and don't really know anyone yet.",
            textZh: "嘿，我能坐这里吗？我刚入住，还不认识任何人。",
            culturalNote: "青旅文化非常开放，主动搭讪是很正常的。大多数旅客都很愿意聊天交朋友。",
            casualVersion: "Hey, cool if I sit here? Just got in, don't know anybody.",
            commonMistake: {
              wrong: "Can I sit here? I just arrive and don't know people.",
              correct: "Mind if I sit here? I just checked in and don't know anyone yet.",
              explanation: "mind if I 比 can I 更礼貌。just arrive 改为 just checked in（刚入住），don't know people 改为 don't know anyone。",
            },
            formalityVariants: {
              casual: "This seat taken? Just got here, flying solo.",
              standard: "Mind if I sit here? I just checked in and don't know anyone yet.",
              formal: "Would you mind if I joined you? I have just arrived and have not yet had the opportunity to meet anyone.",
            },
          },
          {
            speaker: "them",
            role: "其他旅客",
            textEn: "Of course, go ahead! Where are you traveling from? I got here yesterday from Berlin — doing a two-month backpacking trip.",
            textZh: "当然可以！你从哪里来旅行的？我昨天从柏林来的——在做两个月的背包旅行。",
            keyPhrases: [
              { en: "where are you traveling from", zh: "你从哪里来旅行的" },
              { en: "backpacking trip", zh: "背包旅行" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, sit down! So where you coming from? I've been on the road for about two months — started in Berlin.", textZh: "坐吧！你从哪来？我已经在路上两个月了——从柏林出发的。", actionHint: "on the road = 在旅途中", frequency: "common" },
            ],
            casualVersion: "Yeah, totally! Where you from? I'm backpacking — came from Berlin yesterday.",
            formalityVariants: {
              casual: "Yeah, sit! Where you coming from? I'm two months into a backpacking trip.",
              standard: "Of course! Where are you traveling from? I arrived from Berlin yesterday.",
              formal: "Please, do have a seat. Where are you traveling from? I arrived yesterday from Berlin as part of a two-month backpacking itinerary.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds amazing! I'm from China — this is my first solo trip abroad. Any tips for getting around the city?",
            textZh: "听起来太棒了！我从中国来——这是我第一次独自出国旅行。有什么在这个城市里出行的建议吗？",
            culturalNote: "solo trip（独自旅行）在国外青旅文化中很常见。中国旅客出国越来越多选择独自背包游。",
            casualVersion: "Awesome! I'm from China, first solo trip. Any tips for getting around?",
            commonMistake: {
              wrong: "Do you have some advices for travel in this city?",
              correct: "Any tips for getting around the city?",
              explanation: "advice 是不可数名词，没有 advices。tips 更口语化。getting around 比 travel in 更自然。",
            },
            formalityVariants: {
              casual: "So cool! First solo trip, coming from China. How do you get around here?",
              standard: "I'm from China — my first solo trip abroad. Any tips for getting around?",
              formal: "How wonderful. I am visiting from China — this is my inaugural solo journey abroad. Would you have any recommendations for navigating the city?",
            },
          },
          {
            speaker: "them",
            role: "其他旅客",
            textEn: "Get a day pass for public transit — it's way cheaper than buying single tickets. And download the city's transit app, it shows real-time schedules. Oh, and the walking tour that leaves from the hostel at 10 AM is totally worth it!",
            textZh: "买个公交日票——比单次票便宜多了。下载这个城市的公交APP，有实时时刻表。对了，每天上午10点从青旅出发的步行导览超值得！",
            keyPhrases: [
              { en: "day pass", zh: "日票/一日通票" },
              { en: "walking tour", zh: "步行导览" },
            ],
            alternativeExpressions: [
              { textEn: "Grab a daily transit pass and use the local transit app for schedules. Also, the free walking tour from the hostel is a must-do — great way to see the city.", textZh: "买个日票，用当地的公交APP查时刻表。还有，青旅的免费步行导览一定要参加——看城市的最好方式。", actionHint: "a must-do = 必做之事", frequency: "common" },
            ],
            casualVersion: "Day pass for transit, download the transit app, and do the walking tour from the hostel at 10. Trust me!",
            formalityVariants: {
              casual: "Day pass, transit app, and the 10 AM walking tour. Trust me, do all three.",
              standard: "Get a day pass for transit and download the transit app. The walking tour from the hostel at 10 AM is also worth doing.",
              formal: "I would recommend purchasing a daily transit pass, which is considerably more economical than individual tickets. The city's transit application provides real-time schedules. Additionally, the guided walking tour departing from the hostel at ten o'clock is highly worthwhile.",
            },
          },
          {
            speaker: "you",
            textEn: "A walking tour sounds great! Are you going tomorrow? It'd be nice to go with someone I know.",
            textZh: "步行导览听起来很不错！你明天去吗？跟认识的人一起去就好了。",
            culturalNote: "青旅是结交旅伴的最佳场所。一起参加活动是建立旅途友谊最自然的方式。",
            casualVersion: "Walking tour sounds awesome! Going tomorrow? Would be cool to go together.",
            commonMistake: {
              wrong: "Will you go to the walking tour?",
              correct: "Are you going tomorrow?",
              explanation: "问近期计划用 Are you going（进行时表将来），比 will you go 更自然口语。go to walking tour 不需要 to。",
            },
            formalityVariants: {
              casual: "Walking tour! You going? Wanna go together?",
              standard: "Are you going tomorrow? It'd be nice to go with someone I know.",
              formal: "The walking tour sounds delightful. Will you be attending tomorrow? It would be lovely to have some company.",
            },
          },
          {
            speaker: "them",
            role: "其他旅客",
            textEn: "I was actually planning to! Let's meet in the lobby at 9:45. I'll introduce you to a couple of other people I've met here — we can all go together. The more the merrier!",
            textZh: "我正好打算去呢！9:45在大厅见吧。我把这里认识的几个人也介绍给你——我们一起去。人多更开心！",
            keyPhrases: [
              { en: "the more the merrier", zh: "人多更开心" },
              { en: "meet in the lobby", zh: "在大厅见" },
            ],
            alternativeExpressions: [
              { textEn: "Was already planning on it! Let's link up at 9:45 downstairs. I'll bring a few others along — gonna be a blast!", textZh: "正好打算去！9:45楼下碰面。我带几个人一起——肯定超好玩！", actionHint: "link up = 碰面; gonna be a blast = 肯定很好玩", frequency: "common" },
            ],
            casualVersion: "Yeah, I'm going! Meet at 9:45 in the lobby. I'll bring some people — the more the merrier!",
            formalityVariants: {
              casual: "I'm in! 9:45, lobby. I'll bring some folks — more the merrier!",
              standard: "I was planning to! Let's meet at 9:45 in the lobby. I'll introduce you to some others.",
              formal: "I was indeed planning to attend. Shall we convene in the lobby at quarter to ten? I would be happy to introduce you to several other guests I have befriended, and we can all attend together.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 度假租房钥匙 ====================
  {
    id: "accommodation-vacation-rental-keys",
    category: "accommodation",
    titleZh: "度假租房钥匙",
    titleEn: "Vacation Rental Keys",
    description: "度假租房的钥匙交接，包括与房东/管理员面对面交接、大门密码等",
    otherRole: "物业管理员",
    otherRoleIcon: "🗝️",
    flows: [
      {
        id: "vacation-rental-key-handoff",
        titleZh: "钥匙面交",
        titleEn: "In-Person Key Handoff",
        description: "与房东或物业管理员面对面交接钥匙",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm here for the key pickup. I rented the beach house on Ocean Drive for this week. My name is Li Wei.",
            textZh: "你好，我来取钥匙。我租了Ocean Drive上的海滩别墅，这周入住。我叫李伟。",
            culturalNote: "度假租房（vacation rental）常常需要跟物业管理员（property manager）面交钥匙，而不是自助入住。",
            casualVersion: "Hey, I'm picking up keys for the beach house on Ocean Drive. Name's Li Wei.",
            commonMistake: {
              wrong: "I come to take the key.",
              correct: "I'm here for the key pickup.",
              explanation: "I come 改为 I'm here（我到了）。take the key 改为 key pickup（取钥匙），更地道。",
            },
            formalityVariants: {
              casual: "Hey, here for the keys — beach house on Ocean Drive. Li Wei.",
              standard: "Hi, I'm here for the key pickup for the beach house on Ocean Drive. My name is Li Wei.",
              formal: "Good afternoon, I am here to collect the keys for the beach house located on Ocean Drive. The reservation is under the name Li Wei.",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "Welcome, Li Wei! I have your keys right here. There are three — the front door, the back patio gate, and the garage. Let me walk you through each one.",
            textZh: "欢迎，李伟！钥匙在这里。一共三把——前门、后院门和车库的。我给你一个一个说明。",
            keyPhrases: [
              { en: "walk you through", zh: "给你一一说明" },
              { en: "patio gate", zh: "后院门" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, welcome! Got your key set here — three keys total: front door, patio, garage. Let me show you which is which.", textZh: "嘿，欢迎！你的钥匙套装在这——三把：前门、院子、车库。我告诉你哪把对哪个。", actionHint: "which is which = 哪个是哪个", frequency: "common" },
            ],
            casualVersion: "Hey, welcome! Three keys — front door, patio gate, garage. Let me explain.",
            formalityVariants: {
              casual: "Welcome! Three keys here — front, patio, garage. Let me run you through 'em.",
              standard: "Welcome! I have three keys for you — front door, patio gate, and garage. Let me explain each one.",
              formal: "Welcome, Mr. Li. I have prepared your key set, which consists of three keys: one for the front entrance, one for the rear patio gate, and one for the garage. Allow me to walk you through each.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks! Is there also a gate code for the community entrance? I noticed there's a gate when you drive in.",
            textZh: "谢谢！小区入口有大门密码吗？我开车进来时注意到有个大门。",
            culturalNote: "美国很多度假社区（gated community）有大门和密码。访客需要密码或遥控器才能开门进入。",
            casualVersion: "Is there a gate code for the community? I saw a gate driving in.",
            commonMistake: {
              wrong: "Does the community gate have password?",
              correct: "Is there a gate code for the community entrance?",
              explanation: "大门密码用 gate code，不用 password。用 is there 开头的问句更自然。",
            },
            formalityVariants: {
              casual: "What's the gate code for the community?",
              standard: "Is there a gate code for the community entrance?",
              formal: "May I also inquire about the access code for the community gate? I noticed the gated entrance upon arrival.",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "Yes, the gate code is pound-2468-pound. That's the hashtag key, then 2468, then hashtag again. It works for both the car gate and the pedestrian gate.",
            textZh: "是的，大门密码是井号-2468-井号。先按井号键，然后2468，再按井号。车辆大门和行人小门都通用。",
            keyPhrases: [
              { en: "pound key / hashtag key", zh: "井号键" },
              { en: "pedestrian gate", zh: "行人小门" },
            ],
            alternativeExpressions: [
              { textEn: "Gate code: press hash, 2468, hash. Same code for the car entrance and the walk-in gate.", textZh: "大门密码：按井号，2468，井号。开车和步行入口都一样。", actionHint: "walk-in gate = 步行入口", frequency: "common" },
            ],
            casualVersion: "Gate code's #2468#. Works for cars and the walking gate.",
            formalityVariants: {
              casual: "Pound-2468-pound. Works for cars and walking.",
              standard: "The gate code is pound-2468-pound. It works for both the car and pedestrian gates.",
              formal: "The community gate code is pound-2468-pound — that is the hash symbol, followed by 2468, followed by the hash symbol once more. This code operates both the vehicular entrance and the pedestrian access point.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. When I check out on Sunday, should I drop the keys off at your office, or is there a drop box?",
            textZh: "明白了。周日退房时，钥匙是送到你们办公室还是有投递箱？",
            culturalNote: "度假租房退房通常不需要见面，放到指定地点（drop box, lockbox, 信箱）就行。提前确认可以避免多跑一趟。",
            casualVersion: "Where do I leave the keys on Sunday? Your office or a drop box?",
            commonMistake: {
              wrong: "Where should I return back the keys?",
              correct: "Should I drop the keys off at your office?",
              explanation: "return back 重复了。用 drop off（交还/放到指定地点）更地道。",
            },
            formalityVariants: {
              casual: "Sunday checkout — where do the keys go? Office or drop box?",
              standard: "Should I drop the keys off at your office, or is there a drop box?",
              formal: "Upon checking out on Sunday, should I return the keys to your office, or is there a designated drop box available?",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "There's a lockbox on the front porch — just put all three keys inside and scramble the combination. The code to open it is 1234. My office is closed on Sundays, so the lockbox is your best bet.",
            textZh: "前廊上有个钥匙盒——把三把钥匙都放进去然后打乱密码。打开密码是1234。我的办公室周日不开门，所以钥匙盒是最好的选择。",
            keyPhrases: [
              { en: "front porch", zh: "前廊" },
              { en: "your best bet", zh: "你最好的选择" },
            ],
            alternativeExpressions: [
              { textEn: "Drop them in the lockbox out front — code's 1234. Mix up the combo after. We're closed Sundays so that's the easiest way.", textZh: "放到门前的钥匙盒——密码1234。放完打乱密码。周日我们休息所以这是最方便的方式。", actionHint: "mix up the combo = 打乱密码", frequency: "common" },
            ],
            casualVersion: "Lockbox on the porch, code 1234. Drop them in and scramble the code. We're closed Sundays.",
            formalityVariants: {
              casual: "Lockbox out front, code 1234. Drop 'em in and scramble it. We're closed Sundays.",
              standard: "Use the lockbox on the front porch — code 1234. Put the keys in and scramble the code.",
              formal: "There is a lockbox situated on the front porch. The access code is 1234. Please deposit all three keys inside and randomize the combination afterward. As our office is not open on Sundays, this would be the most convenient method.",
            },
          },
        ],
      },
      {
        id: "vacation-rental-gate-trouble",
        titleZh: "大门密码问题",
        titleEn: "Gate Code Trouble",
        description: "大门密码不起作用或遇到门禁问题时求助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm at the community gate but the code isn't working. I've tried pound-2468-pound three times and the gate won't open.",
            textZh: "你好，我在小区大门前，但密码不管用。我试了三次井号-2468-井号，门打不开。",
            culturalNote: "密码门禁系统有时会因为输入太快、按键不灵、或者密码刚被更换而失败。保持耐心，打电话给管理员是最快的解决方式。",
            casualVersion: "Hey, the gate code's not working. Tried #2468# three times — nothing.",
            commonMistake: {
              wrong: "The password is not useful.",
              correct: "The code isn't working.",
              explanation: "密码不起作用说 isn't working 或 doesn't work，不说 not useful（没用处）。",
            },
            formalityVariants: {
              casual: "Gate code won't work. Tried it three times, no luck.",
              standard: "I'm at the community gate but the code isn't working after three attempts.",
              formal: "I am currently at the community entrance gate; however, the access code does not appear to be functioning. I have attempted the sequence pound-2468-pound three times without success.",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "Oh, sorry! They actually changed the gate code last week. The new one is pound-3579-pound. Make sure you press each key firmly — the keypad is a bit old and sometimes doesn't register.",
            textZh: "啊，抱歉！他们上周刚换了大门密码。新密码是井号-3579-井号。确保每个键按实了——键盘有点旧，有时候按不上。",
            keyPhrases: [
              { en: "changed the gate code", zh: "换了大门密码" },
              { en: "doesn't register", zh: "按不上/没反应" },
            ],
            alternativeExpressions: [
              { textEn: "My bad — code was updated recently. New one is #3579#. Press the buttons hard, the keypad's flaky sometimes.", textZh: "我的错——密码最近更新了。新密码 #3579#。使劲按，键盘有时候不太灵。", actionHint: "flaky = 不稳定的/不太灵的", frequency: "common" },
            ],
            casualVersion: "Oh, they changed it! New code is #3579#. Press hard, the keypad's kinda janky.",
            formalityVariants: {
              casual: "Oh whoops — code changed. New one's #3579#. Mash the buttons, keypad's old.",
              standard: "Sorry, the code was changed last week. The new code is #3579#. Press each key firmly.",
              formal: "I apologize for the confusion. The gate code was updated last week. The current code is pound-3579-pound. Please press each key with deliberate pressure, as the keypad is aging and may not register light touches.",
            },
          },
          {
            speaker: "you",
            textEn: "That worked, I'm through the gate now. But I'm having trouble finding the house — the GPS took me to the wrong street. Is it the white house with the blue shutters?",
            textZh: "成功了，我进来了。但是找不到房子——GPS把我带到了错误的街道。是那个有蓝色百叶窗的白色房子吗？",
            culturalNote: "美国很多度假社区的房子外观相似，加上GPS不准确，找房子经常需要确认视觉特征（颜色、门牌号等）。",
            casualVersion: "I'm in! But can't find the house — GPS is wrong. Is it the white one with blue shutters?",
            commonMistake: {
              wrong: "The GPS brought me to wrong road.",
              correct: "The GPS took me to the wrong street.",
              explanation: "GPS 用 took me to（带我到），不用 brought me to。街道用 street，不用 road（泛指公路）。",
            },
            formalityVariants: {
              casual: "Got in! GPS is off though. The white house with blue shutters — that it?",
              standard: "I'm through the gate, but the GPS led me to the wrong street. Is it the white house with blue shutters?",
              formal: "The code worked successfully. However, I am having difficulty locating the property, as the GPS directed me to an incorrect street. Is the residence the white structure with blue shutters?",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "Yes, that's the one! White house, blue shutters, number 47 on the mailbox. If you're coming from the gate, take the second right and it's the third house on the left.",
            textZh: "对，就是那个！白房子、蓝色百叶窗，信箱上写着47号。从大门进来的话，第二个路口右转，左边第三栋。",
            keyPhrases: [
              { en: "on the mailbox", zh: "在信箱上" },
              { en: "second right", zh: "第二个路口右转" },
            ],
            alternativeExpressions: [
              { textEn: "That's it — 47 on the mailbox, white with blue shutters. From the gate: second right, third house on your left. Can't miss it.", textZh: "就是那个——信箱47号，白房子蓝百叶窗。从大门：第二个右转，左边第三栋。很好找。", actionHint: "can't miss it = 很好找/不会错过", frequency: "common" },
            ],
            casualVersion: "That's it! Number 47. From the gate, second right, third on the left.",
            formalityVariants: {
              casual: "Yep, that's it! 47 on the mailbox. Second right from the gate, third on the left.",
              standard: "Yes, that's the one. Number 47. From the gate, take the second right and it's the third house on the left.",
              formal: "That is indeed the correct property — number forty-seven, identifiable by the blue shutters. From the gate entrance, proceed to the second right turn, and the house will be the third residence on the left side.",
            },
          },
          {
            speaker: "you",
            textEn: "Found it! Oh, one more thing — the front door key seems really stiff. I can get it in but it won't turn. Am I doing something wrong?",
            textZh: "找到了！对了还有一个问题——前门钥匙很紧。能插进去但转不动。是我操作有问题吗？",
            culturalNote: "老房子的锁经常需要技巧才能打开。有时需要一边推门一边转钥匙，或者上下抖动钥匙。",
            casualVersion: "Found it! The front door key's super stiff though — goes in but won't turn. What am I doing wrong?",
            commonMistake: {
              wrong: "The key is very tight and can't turn.",
              correct: "The key seems really stiff and won't turn.",
              explanation: "钥匙紧/涩用 stiff，不用 tight（紧绷）。can't turn 改为 won't turn 更自然。",
            },
            formalityVariants: {
              casual: "Got it! Key's super stiff though — won't turn. What's the trick?",
              standard: "Found the house! But the front door key is stiff — it goes in but won't turn.",
              formal: "I have located the property. However, the front door key appears to be quite resistant. It inserts properly but will not rotate. Could there be a technique I am missing?",
            },
          },
          {
            speaker: "them",
            role: "物业管理员",
            textEn: "That lock is a bit tricky. Push the door inward with your shoulder while turning the key — the door frame swells in humid weather. Give it a firm push and turn at the same time.",
            textZh: "那个锁有点难开。用肩膀往里推门的同时转钥匙——潮湿天气门框会膨胀。用力推的同时转。",
            keyPhrases: [
              { en: "door frame swells", zh: "门框膨胀" },
              { en: "firm push", zh: "用力推" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, it's a quirky lock. Lean into the door while you turn the key — humidity makes the frame expand. A little body weight does the trick.", textZh: "是的，那锁有点怪。靠在门上一边转钥匙——潮湿让门框膨胀。稍微用点身体重量就行。", actionHint: "lean into = 靠在...上; does the trick = 管用", frequency: "common" },
            ],
            casualVersion: "Push the door with your shoulder while you turn the key. The frame swells up when it's humid. Push and turn at the same time.",
            formalityVariants: {
              casual: "Shoulder into the door while you turn. Frame swells from humidity. Push and turn together.",
              standard: "Push the door inward with your shoulder while turning the key. The frame swells in humidity.",
              formal: "That particular lock requires a specific technique. Please apply inward pressure to the door with your shoulder while simultaneously rotating the key. Due to humidity, the door frame tends to expand, creating additional resistance.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 住宿WiFi问题 ====================
  // ==================== 泳池使用规则 ====================
  {
    id: "accommodation-pool-rules",
    category: "accommodation",
    titleZh: "泳池使用规则",
    titleEn: "Pool Rules & Access",
    description: "了解酒店或度假村泳池的使用时间、规则和设施",
    otherRole: "泳池管理员",
    otherRoleIcon: "🏊",
    flows: [
      {
        id: "pool-rules-basic",
        titleZh: "泳池时间与规则",
        titleEn: "Pool Hours & Rules",
        description: "询问泳池开放时间、基本规则和毛巾领取",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, what are the pool hours? And do I need to bring my own towel?",
            textZh: "你好，泳池几点开放？我需要自己带毛巾吗？",
            culturalNote:
              "国外酒店泳池一般提供pool towels（泳池专用毛巾），通常在泳池旁的架子上或需要到前台领取。不要用房间毛巾去泳池。",
            casualVersion: "Hey, when's the pool open? Do I need my own towel?",
            commonMistake: {
              wrong: "What time does the pool open and close?",
              correct: "What are the pool hours?",
              explanation: "pool hours 是更地道的说法，一个词组涵盖开放和关闭时间。",
            },
            formalityVariants: {
              casual: "When's the pool open? Need a towel?",
              standard: "What are the pool hours? Do I need to bring my own towel?",
              formal: "Could you please inform me of the pool operating hours? Additionally, are towels provided or should I bring my own?",
            },
          },
          {
            speaker: "them",
            role: "泳池管理员",
            textEn: "The pool is open from 7 a.m. to 10 p.m. daily. We provide pool towels — just grab one from the rack by the entrance. Please return used towels to the bin when you're done.",
            textZh: "泳池每天早上7点到晚上10点开放。我们提供泳池毛巾——在入口旁的架子上拿就行。用完后请把毛巾放到回收箱里。",
            keyPhrases: [
              { en: "pool towels", zh: "泳池毛巾" },
              { en: "return used towels to the bin", zh: "把用过的毛巾放到回收箱" },
            ],
            alternativeExpressions: [
              { textEn: "Pool's open 7 to 10 every day. Towels are on the rack right by the gate. Toss 'em in the hamper when you're finished.", textZh: "泳池每天7到10点开。毛巾在门口架子上。用完扔洗衣篮里。", actionHint: "hamper = 洗衣篮/回收篮; toss = 扔", frequency: "common" },
            ],
            casualVersion: "7 a.m. to 10 p.m. Towels are on the rack by the entrance. Just toss them in the bin after.",
            formalityVariants: {
              casual: "Open 7 to 10. Towels on the rack. Toss 'em in the bin when done.",
              standard: "The pool is open 7 a.m. to 10 p.m. Towels are provided on the rack. Please return them to the bin.",
              formal: "The pool operates daily from seven o'clock in the morning until ten in the evening. Complimentary pool towels are available on the rack near the entrance. We kindly ask that used towels be deposited in the designated return bin.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, thanks. Are kids allowed in the pool, or is there a separate children's area?",
            textZh: "好的，谢谢。小孩可以去泳池吗，还是有专门的儿童区域？",
            culturalNote:
              "很多酒店有adult-only pool（仅限成人泳池）和family pool（家庭泳池）之分。有些泳池要求儿童必须有家长陪同。",
            casualVersion: "Can kids use the pool, or is there a kids' area?",
            commonMistake: {
              wrong: "Can children enter the pool?",
              correct: "Are kids allowed in the pool?",
              explanation: "allowed in 比 enter 更自然。kids 比 children 更口语化。",
            },
            formalityVariants: {
              casual: "Kids allowed? Or is there a kiddie pool?",
              standard: "Are children allowed in the pool, or is there a separate area for them?",
              formal: "May I ask whether children are permitted in the main pool, or is there a designated children's swimming area?",
            },
          },
          {
            speaker: "them",
            role: "泳池管理员",
            textEn: "Kids under 12 need to be accompanied by an adult at all times. There's a shallow wading pool on the east side that's perfect for younger children. The main pool is 1.5 meters deep throughout.",
            textZh: "12岁以下的小孩必须有成人陪同。东边有一个浅水池，非常适合小朋友。主泳池全程1.5米深。",
            keyPhrases: [
              { en: "accompanied by an adult", zh: "有成人陪同" },
              { en: "shallow wading pool", zh: "浅水池/戏水池" },
            ],
            alternativeExpressions: [
              { textEn: "Under-12s need a grown-up with them. There's a kiddie pool on the east side — nice and shallow. Main pool is about five feet deep.", textZh: "12岁以下需要大人陪。东边有个儿童池——又浅又安全。主池大约五英尺深。", actionHint: "grown-up = 大人（口语）; kiddie pool = 儿童池", frequency: "common" },
            ],
            casualVersion: "Kids under 12 need a parent with them. There's a little wading pool on the east side for the little ones. Main pool is about 5 feet.",
            formalityVariants: {
              casual: "Under 12? Need a parent. There's a kiddie pool on the east side. Main pool's about 5 feet.",
              standard: "Children under 12 must be accompanied by an adult. There's a wading pool on the east side for younger kids.",
              formal: "Children under the age of twelve must be accompanied by an adult at all times. We have a shallow wading pool on the east side designed for younger guests. The main pool maintains a uniform depth of 1.5 meters.",
            },
          },
          {
            speaker: "you",
            textEn: "One more thing — is there a lifeguard on duty, or is swimming at our own risk?",
            textZh: "再问一下——有救生员值班吗，还是游泳风险自负？",
            culturalNote:
              "美国很多酒店泳池会写'No lifeguard on duty. Swim at your own risk.'这不代表泳池不安全，只是法律免责声明。",
            casualVersion: "Is there a lifeguard, or is it swim at your own risk?",
            commonMistake: {
              wrong: "Is there someone to save people?",
              correct: "Is there a lifeguard on duty?",
              explanation: "lifeguard 是救生员。on duty 表示值班中。这是固定搭配。",
            },
            formalityVariants: {
              casual: "Lifeguard here or nah?",
              standard: "Is there a lifeguard on duty?",
              formal: "Could you please advise whether a lifeguard is stationed at the pool during operating hours, or is swimming undertaken at one's own risk?",
            },
          },
          {
            speaker: "them",
            role: "泳池管理员",
            textEn: "We have a lifeguard on duty from 9 a.m. to 6 p.m. Outside those hours, it's swim at your own risk. We also ask that no glass containers be brought to the pool area — only plastic cups are allowed.",
            textZh: "上午9点到下午6点有救生员值班。其他时间游泳风险自负。另外请不要带玻璃容器到泳池区域——只允许塑料杯。",
            keyPhrases: [
              { en: "swim at your own risk", zh: "游泳风险自负" },
              { en: "no glass containers", zh: "不允许玻璃容器" },
            ],
            alternativeExpressions: [
              { textEn: "Lifeguard's here 9 to 6. After that you're on your own. Oh, and no glass by the pool — plastic only.", textZh: "救生员9点到6点在。之后你自己注意。对了，泳池边不能带玻璃——只能用塑料杯。", actionHint: "you're on your own = 你自己负责", frequency: "common" },
            ],
            casualVersion: "Lifeguard's here 9 to 6. After that, swim at your own risk. And no glass by the pool — plastic only.",
            formalityVariants: {
              casual: "Lifeguard 9 to 6. After that, you're on your own. No glass — plastic cups only.",
              standard: "There's a lifeguard from 9 a.m. to 6 p.m. After hours, swim at your own risk. No glass containers in the pool area.",
              formal: "A certified lifeguard is on duty from nine in the morning until six in the evening. Outside these hours, swimming is at your own discretion and risk. Additionally, please note that glass containers are strictly prohibited in the pool area; only plastic receptacles are permitted.",
            },
          },
        ],
      },
      {
        id: "pool-rules-intermediate",
        titleZh: "泳池设施与特殊请求",
        titleEn: "Pool Facilities & Special Requests",
        description: "预约泳池边躺椅、询问私人泳池包场及特殊设施",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I noticed the poolside loungers are all taken. Is there a way to reserve one, or do I just have to wait?",
            textZh: "我看到池边的躺椅都被占了。可以预约吗，还是只能等？",
            culturalNote:
              "在度假酒店，用毛巾占躺椅（towel reserving）是常见现象但通常被酒店禁止。有些酒店提供付费预约躺椅服务。",
            casualVersion: "All the loungers are taken. Can I reserve one or just wait?",
            commonMistake: {
              wrong: "The lying chairs are all occupied.",
              correct: "The poolside loungers are all taken.",
              explanation: "躺椅叫 lounger 或 lounge chair，不叫 lying chair。被占了用 taken，不用 occupied（更适用于房间/厕所）。",
            },
            formalityVariants: {
              casual: "Loungers are all gone. Any way to snag one?",
              standard: "The loungers are all taken. Is there a way to reserve one?",
              formal: "I've noticed that all poolside loungers appear to be occupied. Is there a reservation system in place, or must I wait for one to become available?",
            },
          },
          {
            speaker: "them",
            role: "泳池管理员",
            textEn: "Unfortunately we don't take reservations for the loungers — it's first come, first served. But I can set up a complimentary umbrella and chairs for you on the grass area just past the pool. Would that work?",
            textZh: "很遗憾，躺椅不能预约——先到先得。但我可以在泳池旁边的草坪上给你搭一把免费的遮阳伞和椅子。可以吗？",
            keyPhrases: [
              { en: "first come, first served", zh: "先到先得" },
              { en: "complimentary umbrella", zh: "免费遮阳伞" },
            ],
            alternativeExpressions: [
              { textEn: "No reservations — it's first come, first served. But I can throw up an umbrella and a couple of chairs on the lawn for you. No charge.", textZh: "不能预约——先到先得。但我可以在草坪上给你支把伞，摆两把椅子。免费的。", actionHint: "throw up = 快速搭建（口语）", frequency: "common" },
            ],
            casualVersion: "No reservations, first come first served. But I can set up an umbrella and chairs on the grass for you — no charge.",
            formalityVariants: {
              casual: "Can't reserve 'em — first come, first served. Want me to throw up an umbrella on the lawn?",
              standard: "No reservations, it's first come, first served. I can set up an umbrella and chairs on the grass for you.",
              formal: "Regrettably, poolside lounger reservations are not available; seating is allocated on a first-come, first-served basis. However, I would be pleased to arrange a complimentary umbrella and seating on the adjacent lawn area for your comfort.",
            },
          },
          {
            speaker: "you",
            textEn: "That would be great, thank you. Also, is there a hot tub or sauna in the pool area?",
            textZh: "太好了，谢谢。另外，泳池区域有热水浴缸或桑拿吗？",
            culturalNote:
              "hot tub（热水浴缸）和jacuzzi（按摩浴缸）在酒店泳池区域很常见。jacuzzi 是品牌名但已成为通用词。",
            casualVersion: "That'd be great. Is there a hot tub or sauna here?",
            commonMistake: {
              wrong: "Do you have hot water pool?",
              correct: "Is there a hot tub in the pool area?",
              explanation: "热水浴缸叫 hot tub，不叫 hot water pool。hot water pool 不是常用英语表达。",
            },
            formalityVariants: {
              casual: "Awesome. Got a hot tub or sauna around here?",
              standard: "Also, is there a hot tub or sauna nearby?",
              formal: "That would be most appreciated, thank you. Might I also inquire whether there is a hot tub or sauna facility within the pool area?",
            },
          },
          {
            speaker: "them",
            role: "泳池管理员",
            textEn: "Yes, there's a jacuzzi next to the main pool — it fits about eight people. The sauna is inside the fitness center on the ground floor. Both are included with your stay, no extra fee.",
            textZh: "有的，主泳池旁边有个按摩浴缸——大约能坐8个人。桑拿在一楼健身中心里面。两个都是住宿免费包含的，不额外收费。",
            keyPhrases: [
              { en: "included with your stay", zh: "住宿免费包含" },
              { en: "no extra fee", zh: "不额外收费" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, jacuzzi's right next to the pool — holds about eight. Sauna's in the gym on the ground floor. Both are free for guests.", textZh: "有，按摩浴缸就在泳池旁——能坐八个人。桑拿在一楼健身房里。住客都免费。", actionHint: "holds about eight = 能容纳约八人", frequency: "common" },
            ],
            casualVersion: "Jacuzzi's right by the pool. Sauna's in the gym downstairs. Both free for guests.",
            formalityVariants: {
              casual: "Jacuzzi's by the pool, sauna's in the gym. Both free.",
              standard: "There's a jacuzzi by the main pool and a sauna in the ground-floor fitness center. Both are complimentary.",
              formal: "Certainly. A jacuzzi accommodating approximately eight guests is situated adjacent to the main pool. The sauna is located within the fitness center on the ground floor. Both amenities are included with your accommodation at no additional charge.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. One last question — can I bring food and drinks to the pool area, or do I need to order from the pool bar?",
            textZh: "太好了。最后一个问题——我可以带食物和饮料到泳池区吗，还是必须从泳池吧台点？",
            culturalNote:
              "大多数酒店泳池区不允许自带食物和玻璃瓶，但允许塑料瓶装水。高档酒店通常有pool bar（泳池酒吧）提供服务。",
            casualVersion: "Can I bring my own food and drinks, or do I have to use the pool bar?",
            commonMistake: {
              wrong: "Can I carry food to the swimming pool?",
              correct: "Can I bring food and drinks to the pool area?",
              explanation: "bring 比 carry 更自然。pool area 指整个泳池区域，包括周围的休息区。",
            },
            formalityVariants: {
              casual: "Can I bring snacks and drinks, or gotta order from the bar?",
              standard: "Can I bring food and drinks, or should I order from the pool bar?",
              formal: "May I inquire whether outside food and beverages are permitted in the pool area, or are guests required to order exclusively from the pool bar?",
            },
          },
          {
            speaker: "them",
            role: "泳池管理员",
            textEn: "Outside food is fine, but please no glass bottles — for safety. The pool bar serves light bites and cocktails if you'd prefer. You can charge poolside orders to your room as well.",
            textZh: "可以自带食物，但请不要带玻璃瓶——为了安全。泳池吧也有小食和鸡尾酒。泳池边的点单也可以记到房费。",
            keyPhrases: [
              { en: "charge poolside orders to your room", zh: "泳池消费记到房费" },
              { en: "light bites and cocktails", zh: "小食和鸡尾酒" },
            ],
            alternativeExpressions: [
              { textEn: "Bring whatever you like, just no glass. The pool bar does food and drinks too, and you can put it on your room tab.", textZh: "随便带，就是别带玻璃的。泳池吧也有吃喝，可以挂房账。", actionHint: "put it on your room tab = 记到房间账上", frequency: "common" },
            ],
            casualVersion: "Bring your own food, no problem. Just no glass. Pool bar has snacks and drinks too — you can charge it to your room.",
            formalityVariants: {
              casual: "Bring whatever, just no glass. Bar's got snacks and drinks if you want. Charge it to your room.",
              standard: "Outside food is allowed, no glass bottles please. The pool bar serves snacks and cocktails, chargeable to your room.",
              formal: "Outside food is most welcome; however, for safety reasons, glass bottles and containers are not permitted. Our pool bar offers a selection of light refreshments and cocktails, and all poolside purchases may be conveniently charged to your room account.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 住宿噪音投诉 ====================
  // ==================== 延长住宿 ====================
  // ==================== 提前入住 ====================
  {
    id: "accommodation-early-checkin",
    category: "accommodation",
    titleZh: "提前入住",
    titleEn: "Early Check-in",
    description: "请求比标准入住时间更早入住酒店房间",
    otherRole: "酒店前台",
    otherRoleIcon: "⏰",
    flows: [
      {
        id: "early-checkin-basic",
        titleZh: "请求提前入住",
        titleEn: "Requesting Early Check-in",
        description: "到达酒店后请求提前入住并寄存行李",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I know check-in isn't until 3 p.m., but my flight got in early. Is there any chance I could check in now?",
            textZh: "你好，我知道入住时间是下午3点，但我的航班到得早。有没有可能现在就入住？",
            culturalNote:
              "大多数酒店的标准入住时间是下午3点。提前入住取决于房间是否已打扫完毕。有些酒店收取early check-in fee。",
            casualVersion: "Hey, I'm super early — flight got in ahead of schedule. Any way I can check in now?",
            commonMistake: {
              wrong: "I come early. Can I go to room now?",
              correct: "My flight got in early. Is there any chance I could check in now?",
              explanation: "check in 是入住的标准说法。Is there any chance 是礼貌请求的常用句式。",
            },
            formalityVariants: {
              casual: "Got here way early. Any chance I can check in now?",
              standard: "My flight arrived early. Is there any possibility of an early check-in?",
              formal: "Good morning. I appreciate that the standard check-in time is three o'clock; however, my flight arrived earlier than anticipated. Would it be possible to arrange an early check-in?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Let me check if your room is ready. It looks like housekeeping just finished with room 507 — you're in luck! I can check you in right now. May I see your ID and the credit card for the reservation?",
            textZh: "我查一下你的房间是否准备好了。看起来客房清洁刚打扫完507房间——你运气不错！我现在就可以帮你办理入住。能看一下你的证件和预订用的信用卡吗？",
            keyPhrases: [
              { en: "housekeeping just finished", zh: "客房清洁刚打扫完" },
              { en: "you're in luck", zh: "你运气不错" },
            ],
            alternativeExpressions: [
              { textEn: "Let me pull up your reservation... oh, you lucked out! Your room's already clean. I can get you in right now. Just need your ID and credit card.", textZh: "我调出你的预订...你走运了！房间已经打扫干净了。现在就能让你入住。只需要你的证件和信用卡。", actionHint: "lucked out = 走运了; get you in = 让你入住", frequency: "common" },
            ],
            casualVersion: "Let me check... room's ready! I can check you in now. Just need your ID and card.",
            formalityVariants: {
              casual: "Lemme look... you're in luck — room's done! ID and card, please.",
              standard: "Your room is ready. I can check you in now. May I see your ID and credit card?",
              formal: "Allow me to verify the status of your room. I am pleased to report that housekeeping has just completed preparations for room 507. I can proceed with your check-in immediately. May I kindly request your identification and the credit card associated with your reservation?",
            },
          },
          {
            speaker: "you",
            textEn: "Here you go. Is there an extra charge for early check-in, or is it complimentary?",
            textZh: "给你。提前入住要额外收费吗，还是免费的？",
            culturalNote:
              "有些酒店会收取early check-in fee（约$20-50），有些则免费。提前问清楚可以避免账单上的意外费用。",
            casualVersion: "Here. Is early check-in free or is there a charge?",
            commonMistake: {
              wrong: "Do I need to pay money for early check-in?",
              correct: "Is there an extra charge for early check-in?",
              explanation: "extra charge 比 pay money 更专业。or is it complimentary 是酒店常用的委婉问法。",
            },
            formalityVariants: {
              casual: "Here ya go. Free early check-in or nah?",
              standard: "Here you go. Is there a charge for early check-in?",
              formal: "Here are my documents. May I inquire whether an additional fee applies for the early check-in, or is it offered on a complimentary basis?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "No extra charge — it's complimentary since the room was available. Here's your key card. The elevators are to your right, and your room is on the fifth floor. Enjoy your stay!",
            textZh: "不额外收费——因为房间正好空出来了，所以免费。这是你的房卡。电梯在右手边，你的房间在5楼。祝你住得愉快！",
            keyPhrases: [
              { en: "no extra charge — it's complimentary", zh: "不额外收费——免费的" },
              { en: "here's your key card", zh: "这是你的房卡" },
            ],
            alternativeExpressions: [
              { textEn: "No charge at all — room was ready so it's on us. Here's your key. Elevators on the right, fifth floor. Enjoy!", textZh: "完全不收费——房间好了就免费给你。这是钥匙。电梯在右边，5楼。祝好！", actionHint: "it's on us = 我们请客/免费的", frequency: "common" },
            ],
            casualVersion: "No charge! Room was ready. Here's your key — elevators on the right, 5th floor. Enjoy!",
            formalityVariants: {
              casual: "Free! Room's ready. Key card, elevators to the right, 5th floor. Enjoy!",
              standard: "No extra charge. Here's your key card. Elevators to the right, room is on the fifth floor.",
              formal: "There is no additional charge for the early check-in, as the room was available. Here is your key card. The elevators are located to your right, and your room is situated on the fifth floor. We hope you have a most enjoyable stay.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you so much! Actually, what time does breakfast start? I haven't eaten since my flight.",
            textZh: "太感谢了！对了，早餐几点开始？我坐飞机到现在还没吃东西。",
            culturalNote:
              "到达后马上问早餐时间是常见的。如果已过早餐时间，可以问酒店附近的用餐推荐。",
            casualVersion: "Thanks! When's breakfast? I'm starving from the flight.",
            commonMistake: {
              wrong: "What time is the breakfast?",
              correct: "What time does breakfast start?",
              explanation: "问早餐开始时间用 does breakfast start，加 the 会显得不自然。",
            },
            formalityVariants: {
              casual: "Thanks! Breakfast — when? Haven't eaten since the flight.",
              standard: "Thank you! What time does breakfast start?",
              formal: "Thank you very much. Could you please advise what time breakfast service begins? I have not had a meal since my flight.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Breakfast is served from 6:30 to 10:30 a.m. in the restaurant on the second floor. You're just in time! It's a buffet with both Western and local options.",
            textZh: "早餐在二楼餐厅，早上6:30到10:30。你正好赶上！是自助餐，有西式和当地特色菜。",
            keyPhrases: [
              { en: "you're just in time", zh: "你正好赶上" },
              { en: "a buffet with both Western and local options", zh: "有西式和当地菜的自助餐" },
            ],
            alternativeExpressions: [
              { textEn: "Breakfast runs from 6:30 to 10:30, second-floor restaurant. Still time! It's a buffet — mix of Western stuff and local dishes.", textZh: "早餐6:30到10:30，二楼餐厅。还来得及！自助餐——西式和当地菜都有。", actionHint: "runs from...to = 从...到...（持续时间）", frequency: "common" },
            ],
            casualVersion: "6:30 to 10:30, second floor. You're right on time! Buffet — Western and local food.",
            formalityVariants: {
              casual: "Breakfast's 6:30 to 10:30, second floor. You made it! Buffet style.",
              standard: "Breakfast is 6:30 to 10:30 a.m. on the second floor. You're just in time. It's a buffet.",
              formal: "Breakfast is served daily from six-thirty until ten-thirty in the morning, in the restaurant located on the second floor. You have arrived with ample time remaining. The breakfast is presented in a buffet format, offering both Western and locally inspired cuisine.",
            },
          },
        ],
      },
      {
        id: "early-checkin-intermediate",
        titleZh: "房间未准备好时的应对",
        titleEn: "When the Room Isn't Ready",
        description: "房间未准备好时寄存行李并利用酒店设施等待",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just arrived and I know it's early, but I'm exhausted from an overnight flight. Is there any way to get into my room early?",
            textZh: "你好，我刚到，我知道还早，但我坐了一夜的红眼航班，累坏了。有没有可能提前进房间？",
            culturalNote:
              "提到overnight flight或red-eye flight（红眼航班）能让工作人员更理解你的疲惫程度，增加获得通融的可能性。",
            casualVersion: "Hey, just got off a red-eye. I know it's early but I really need to crash. Room ready?",
            commonMistake: {
              wrong: "I am very tired from night airplane. Can I go to room?",
              correct: "I'm exhausted from an overnight flight. Is there any way to get into my room early?",
              explanation: "overnight flight 是过夜航班的标准说法。get into my room early 表示提前进房间。",
            },
            formalityVariants: {
              casual: "Red-eye flight, I'm dead. Any way I can get my room now?",
              standard: "I'm exhausted from an overnight flight. Any chance of getting into my room early?",
              formal: "Good morning. I have just arrived following an overnight transatlantic flight, and I must confess I am quite fatigued. Would there be any possibility of arranging an early check-in to my room?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I understand — overnight flights are tough. Unfortunately, your room isn't quite ready yet; housekeeping should finish by noon. In the meantime, I can store your luggage and you're welcome to freshen up in our lobby restroom or relax in our lounge area.",
            textZh: "我理解——坐过夜航班很累。不过你的房间还没准备好，客房清洁大概中午能完成。在那之前，我可以帮你寄存行李，你可以去大堂洗手间洗漱一下，或者在休息区放松。",
            keyPhrases: [
              { en: "store your luggage", zh: "寄存行李" },
              { en: "freshen up", zh: "洗漱/整理一下" },
            ],
            alternativeExpressions: [
              { textEn: "Totally get it — red-eyes are brutal. Room won't be ready till around noon though. I can stash your bags and you can hang out in the lounge or use the bathroom to freshen up.", textZh: "完全理解——红眼航班太折磨人了。不过房间大约中午才好。我可以帮你放行李，你可以在休息区待着或者去洗手间洗漱。", actionHint: "stash = 存放（口语）; brutal = 很折磨人", frequency: "common" },
            ],
            casualVersion: "Overnight flights are rough. Room's not ready till noon. I can hold your bags — lounge or restroom to freshen up?",
            formalityVariants: {
              casual: "Red-eyes are killer. Room's not ready yet — noon-ish. Drop your bags here, chill in the lounge.",
              standard: "I understand. The room will be ready around noon. I can store your luggage and you can use the lounge.",
              formal: "I completely understand the rigors of an overnight flight. Regrettably, your room is not yet available, as housekeeping is anticipated to complete preparations by approximately noon. In the interim, I would be happy to arrange secure storage for your luggage, and you are most welcome to refresh yourself in our lobby facilities or relax in our guest lounge.",
            },
          },
          {
            speaker: "you",
            textEn: "Could you store my bags, please? Also, is there somewhere I can take a quick shower while I wait? I feel pretty grimy after the flight.",
            textZh: "能帮我寄存行李吗？另外有没有地方能快速冲个澡？坐了一夜飞机感觉脏兮兮的。",
            culturalNote:
              "有些高端酒店提供day-use room（日用房间）或arrival lounge（到达休息室）供提前到达的客人使用。游泳池的更衣室淋浴也是一个选择。",
            casualVersion: "Can you hold my bags? And is there a shower I can use? I feel gross.",
            commonMistake: {
              wrong: "Can I wash my body somewhere?",
              correct: "Is there somewhere I can take a quick shower?",
              explanation: "take a shower 是标准说法。wash my body 太直译，不自然。",
            },
            formalityVariants: {
              casual: "Hold my bags? And anywhere I can grab a shower? I feel gross.",
              standard: "Please store my bags. Is there a shower I can use while I wait?",
              formal: "Would you kindly arrange storage for my luggage? Additionally, is there a shower facility available where I might freshen up while awaiting my room?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Absolutely, I'll tag your bags right now. For a shower, you can use the fitness center on the third floor — it has full changing rooms with showers. I'll give you a temporary access card. Towels are provided there.",
            textZh: "当然，我现在给你的行李挂上标签。冲澡的话，你可以用三楼健身中心——里面有完整的更衣室和淋浴。我给你一张临时通行卡。那里提供毛巾。",
            keyPhrases: [
              { en: "tag your bags", zh: "给行李挂标签" },
              { en: "temporary access card", zh: "临时通行卡" },
            ],
            alternativeExpressions: [
              { textEn: "I'll label your bags and lock 'em up. Hit the gym on the third floor for a shower — they've got full locker rooms. Here's a temp card to get in. Towels are there.", textZh: "我给你行李贴标签锁好。去三楼健身房冲澡——有完整的更衣室。给你张临时卡进去。毛巾那边有。", actionHint: "hit the gym = 去健身房; temp card = 临时卡", frequency: "common" },
            ],
            casualVersion: "I'll tag your bags. Use the gym on 3F for a shower — they've got changing rooms. Here's a temp card.",
            formalityVariants: {
              casual: "Bags tagged. Gym's on 3 — showers and changing rooms. Here's a temp card.",
              standard: "I'll tag your bags now. The fitness center on the third floor has showers. Here's a temporary access card.",
              formal: "I will tag and securely store your luggage immediately. For showering, our fitness center on the third floor is equipped with full changing facilities including individual shower stalls. I shall provide you with a temporary access card. Fresh towels are available within the changing rooms.",
            },
          },
          {
            speaker: "you",
            textEn: "That's perfect. Will you be able to text me or call me when the room is ready? I don't want to keep coming back to check.",
            textZh: "太好了。房间好了能发短信或打电话通知我吗？我不想一直回来问。",
            culturalNote:
              "请求酒店在房间准备好后通知你是很常见的做法。大多数酒店都乐意这样做。提供手机号码即可。",
            casualVersion: "Can you text me when the room's ready? Don't wanna keep checking back.",
            commonMistake: {
              wrong: "Can you tell me when room is OK?",
              correct: "Will you be able to text me when the room is ready?",
              explanation: "text me 比 tell me 更具体。the room is ready 是标准说法，不用 OK。",
            },
            formalityVariants: {
              casual: "Text me when it's ready? Don't wanna keep bugging you.",
              standard: "Could you notify me when the room is ready? A text or call would be great.",
              formal: "Would it be possible for you to send me a text message or telephone me once the room has been prepared? I would prefer not to make repeated inquiries at the desk.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Of course! I'll send you a text as soon as it's ready. Can I have your mobile number? I expect it'll be ready by noon, maybe sooner. Go relax and we'll take care of everything.",
            textZh: "当然！房间一好就发短信给你。能留个手机号吗？预计中午能好，也许更早。去放松吧，一切交给我们。",
            keyPhrases: [
              { en: "as soon as it's ready", zh: "一好就/准备好就" },
              { en: "we'll take care of everything", zh: "一切交给我们" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! Drop me your number and I'll ping you the second it's ready. Should be noon-ish, maybe earlier. Go chill — we've got you covered.", textZh: "没问题！给我你的号码，好了马上通知你。大概中午，也许更早。去休息吧——我们搞定一切。", actionHint: "ping you = 发消息通知你; we've got you covered = 我们搞定了", frequency: "common" },
            ],
            casualVersion: "Sure! Give me your number. Should be ready by noon or earlier. Go chill, I'll text you.",
            formalityVariants: {
              casual: "Yep! Number? Probably ready by noon. Go relax, I'll text.",
              standard: "Of course. I'll text you as soon as the room is ready. May I have your mobile number?",
              formal: "Certainly. I will send you a text message the moment your room becomes available. May I take your mobile number? I anticipate the room will be ready by noon, possibly sooner. Please feel free to relax and enjoy our facilities in the meantime; we will attend to everything.",
            },
          },
        ],
      },
    ],
  },

  // ==================== Airbnb投诉问题 ====================
  {
    id: "accommodation-airbnb-complaint",
    category: "accommodation",
    titleZh: "Airbnb投诉问题",
    titleEn: "Airbnb Complaint",
    description: "住Airbnb时遇到与房源描述不符或设施问题，向房东投诉并寻求解决",
    otherRole: "Airbnb房东",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "airbnb-complaint-basic",
        titleZh: "房源与描述不符",
        titleEn: "Listing Doesn't Match Description",
        description: "到达后发现Airbnb房源与照片和描述不一致",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just checked in and I noticed a few things that don't match the listing. The photos showed a king-size bed, but it's actually a double. Also, the listing said there's a balcony, but I don't see one.",
            textZh: "你好，我刚入住，发现有几个地方和房源描述不一样。照片上是大床，但实际是双人床。另外，描述说有阳台，但我没看到。",
            culturalNote:
              "Airbnb投诉要具体对比listing（房源描述）和实际情况。拍照留证据很重要，方便后续通过Airbnb平台申诉退款。",
            casualVersion: "Hey, just got in and some stuff doesn't match the listing. Bed's smaller than shown, and there's no balcony.",
            commonMistake: {
              wrong: "Your house is different from the picture.",
              correct: "A few things don't match the listing.",
              explanation: "listing 指Airbnb上的房源页面。don't match 表示不一致。your house 太笼统。",
            },
            formalityVariants: {
              casual: "Hey, bed's way smaller than the pics and there's no balcony like the listing says.",
              standard: "A few things don't match the listing — the bed is smaller than shown and there's no balcony.",
              formal: "Good evening. Having just arrived, I have noted several discrepancies between the listing and the actual property. The photographs indicated a king-size bed, whereas a double bed has been provided. Furthermore, the listing referenced a balcony, which does not appear to be present.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Oh, I'm sorry about that! The king bed was recently replaced because it got damaged — I forgot to update the listing. As for the balcony, it's actually a Juliet balcony — you can open the glass doors in the bedroom for fresh air, but there's no step-out space.",
            textZh: "哦，很抱歉！大床最近因为损坏换了——我忘记更新房源了。至于阳台，其实是朱丽叶阳台——你可以打开卧室的玻璃门透气，但没有可以站出去的空间。",
            keyPhrases: [
              { en: "forgot to update the listing", zh: "忘记更新房源" },
              { en: "Juliet balcony", zh: "朱丽叶阳台（不能站出去的装饰性阳台）" },
            ],
            alternativeExpressions: [
              { textEn: "My bad — the king got swapped out last month and I totally spaced on updating the photos. The 'balcony' is a Juliet-style one — glass doors that open, but you can't walk out. I know that's misleading, sorry.", textZh: "我的错——上个月换了床，完全忘了更新照片。'阳台'是朱丽叶式的——玻璃门能打开，但不能走出去。我知道这有误导性，抱歉。", actionHint: "spaced on = 忘记了（口语）; misleading = 有误导性", frequency: "common" },
            ],
            casualVersion: "Sorry! The king bed got damaged and I forgot to update it. The balcony is a Juliet style — doors open but no step-out area.",
            formalityVariants: {
              casual: "My bad! Bed got swapped, forgot to update. The balcony's a Juliet — doors open but can't step out.",
              standard: "I apologize. The bed was replaced and I forgot to update the listing. The balcony is a Juliet-style — doors open but no step-out space.",
              formal: "I sincerely apologize for the discrepancies. The king-size bed was recently replaced due to damage, and regrettably I neglected to update the listing photographs. Regarding the balcony, it is what is known as a Juliet balcony — the French doors open for ventilation, but there is no external platform upon which to stand.",
            },
          },
          {
            speaker: "you",
            textEn: "I understand things happen, but these are pretty significant differences from what I booked. I was counting on a larger bed for two adults. Is there anything you can do to make it right?",
            textZh: "我理解意外会发生，但这些和我预订的差别挺大的。两个大人住需要大床。有什么补偿方案吗？",
            culturalNote:
              "make it right 是一个有力但礼貌的说法，暗示你期望某种补偿。在Airbnb文化中，房东通常会主动提供部分退款来维持评分。",
            casualVersion: "I get it, but this is a big difference. Two adults need a bigger bed. What can you do?",
            commonMistake: {
              wrong: "You must give me compensation.",
              correct: "Is there anything you can do to make it right?",
              explanation: "make it right 比 give me compensation 更礼貌且地道。用疑问句而非命令句更容易获得积极回应。",
            },
            formalityVariants: {
              casual: "Stuff happens, but two adults in a double is tight. Can you do something about it?",
              standard: "I understand, but these are significant differences. Is there anything you can do to make up for it?",
              formal: "I appreciate your candor; however, these represent rather substantial departures from what was advertised. As two adults, we were relying on a king-size bed. I would be grateful if we could discuss an appropriate remedy.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "You're right, and I feel bad about it. I can offer you a 20% refund for the inconvenience. I can also bring over an extra mattress topper to make the double bed more comfortable. Would that work for you?",
            textZh: "你说得对，我很抱歉。我可以给你退20%的费用作为补偿。我也可以送一个额外的床垫褥来让双人床更舒适。你觉得可以吗？",
            keyPhrases: [
              { en: "20% refund", zh: "退20%费用" },
              { en: "mattress topper", zh: "床垫褥/加厚垫" },
            ],
            alternativeExpressions: [
              { textEn: "Totally fair. How about I knock 20% off your stay? And I'll drop off a memory foam topper to make the bed comfier. Does that work?", textZh: "完全合理。给你住宿费减20%怎么样？我再送个记忆棉垫过去让床更舒服。行吗？", actionHint: "knock off = 减价; drop off = 送过来", frequency: "common" },
            ],
            casualVersion: "You're right, my bad. 20% refund and I'll bring a topper for the bed. Sound good?",
            formalityVariants: {
              casual: "Fair enough. 20% back and I'll bring a mattress topper. Cool?",
              standard: "You're right. I can offer a 20% refund and bring over a mattress topper.",
              formal: "You raise a valid point, and I sincerely apologize. I would like to offer a twenty percent refund on your booking as compensation. Additionally, I can provide a premium mattress topper to enhance the comfort of the bed. Would this arrangement be satisfactory?",
            },
          },
          {
            speaker: "you",
            textEn: "The mattress topper would help, thanks. But I think 30% off would be fairer, considering the balcony situation too. I'd hate to have to mention it in my review.",
            textZh: "加厚垫会有帮助，谢谢。但考虑到阳台的问题，我觉得打7折更合理。我不太想在评价里提这些。",
            culturalNote:
              "提到review（评价）是Airbnb文化中一种常见的谈判策略。房东非常在意评分，因为它直接影响未来的订单。但注意不要变成威胁。",
            casualVersion: "Topper would help. But 30% off seems fairer with the balcony thing too. Don't wanna bring it up in the review.",
            commonMistake: {
              wrong: "If you don't give me 30%, I will write bad review.",
              correct: "I'd hate to have to mention it in my review.",
              explanation: "I'd hate to 是委婉暗示。直接威胁差评不仅不礼貌，还可能违反Airbnb政策。",
            },
            formalityVariants: {
              casual: "Topper's great, but 30% is fairer with the balcony issue. Wanna keep the review positive.",
              standard: "The topper would help. I think 30% off is fairer considering both issues.",
              formal: "The mattress topper would certainly be appreciated. However, taking into account both the bed and balcony discrepancies, I feel a thirty percent adjustment would more accurately reflect the situation. I would very much prefer to leave a positive review.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "That's fair — let's do 30%. I'll process the partial refund through Airbnb right now, and I'll bring the mattress topper over this evening. I really appreciate your understanding, and I'll update the listing today so future guests aren't confused.",
            textZh: "合理——就30%吧。我现在通过Airbnb处理部分退款，今晚把床垫褥送过去。非常感谢你的理解，我今天就更新房源，这样以后的客人不会被误导。",
            keyPhrases: [
              { en: "partial refund through Airbnb", zh: "通过Airbnb部分退款" },
              { en: "update the listing", zh: "更新房源描述" },
            ],
            alternativeExpressions: [
              { textEn: "Deal — 30% it is. I'll submit the refund on the app now and swing by tonight with the topper. And I'll fix the listing ASAP. Thanks for being cool about it.", textZh: "成交——30%。我现在在APP上提交退款，今晚带垫子过来。我会尽快修改房源。谢谢你这么好说话。", actionHint: "swing by = 顺便过来; being cool about it = 好说话/通情达理", frequency: "common" },
            ],
            casualVersion: "Deal, 30%. Refund through the app now. I'll bring the topper tonight and fix the listing today.",
            formalityVariants: {
              casual: "Done, 30%. Refund coming through the app. Topper tonight. I'll fix the listing too.",
              standard: "Agreed, 30% refund. I'll process it through Airbnb now and bring the topper tonight. I'll update the listing today.",
              formal: "That is perfectly reasonable. I shall process the thirty percent partial refund through the Airbnb platform immediately, and I will personally deliver the mattress topper this evening. I am grateful for your understanding, and I will update the listing today to ensure accuracy for future guests.",
            },
          },
        ],
      },
      {
        id: "airbnb-complaint-intermediate",
        titleZh: "设施故障投诉",
        titleEn: "Facility Malfunction Complaint",
        description: "住Airbnb时遇到热水器、空调等设施故障的投诉与解决",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm having trouble with the hot water — it runs for about 30 seconds and then goes completely cold. I've tried adjusting the water heater but nothing seems to work.",
            textZh: "你好，热水有问题——热水只能持续大约30秒就变成完全冷水了。我试着调热水器了但没用。",
            culturalNote:
              "Airbnb房源的设施问题比酒店更常见，因为没有专业维护团队。先尝试自己解决（如调热水器）再联系房东会显得更合理。",
            casualVersion: "Hey, hot water's broken — runs hot for 30 seconds then goes cold. Tried the heater, no luck.",
            commonMistake: {
              wrong: "The hot water doesn't work. Fix it.",
              correct: "I'm having trouble with the hot water — it runs for about 30 seconds and then goes cold.",
              explanation: "描述具体症状比笼统说不工作更有助于解决问题。避免命令语气。",
            },
            formalityVariants: {
              casual: "Hot water's busted. Goes cold after like 30 seconds. Tried messing with the heater, nothing.",
              standard: "The hot water runs for about 30 seconds then goes cold. I've tried adjusting the heater.",
              formal: "I am writing to report an issue with the hot water supply. It runs at the appropriate temperature for approximately thirty seconds before turning entirely cold. I have attempted to adjust the water heater settings, but the problem persists.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Sorry about that! It sounds like the water heater may need to be reset. There's a small red button on the side of the unit — can you press and hold it for five seconds? If that doesn't work, I'll send a plumber over within the hour.",
            textZh: "抱歉！听起来热水器可能需要重置。机器侧面有一个红色小按钮——你能按住它5秒吗？如果不行，我一小时内派水管工过去。",
            keyPhrases: [
              { en: "reset the water heater", zh: "重置热水器" },
              { en: "send a plumber over", zh: "派水管工过去" },
            ],
            alternativeExpressions: [
              { textEn: "Ugh, sorry! Try this — find the little red reset button on the side of the heater. Hold it down for 5 seconds. If that doesn't do the trick, I'll get a plumber out there ASAP.", textZh: "抱歉！试试这个——找到热水器侧面的红色重置按钮。按住5秒。如果不管用，我马上叫水管工过去。", actionHint: "do the trick = 管用/起作用", frequency: "common" },
            ],
            casualVersion: "Sorry! There's a reset button on the heater — red, on the side. Press it for 5 secs. No luck? I'll send a plumber ASAP.",
            formalityVariants: {
              casual: "Oops, sorry! Red button on the heater — hold it 5 secs. Doesn't work? Plumber's coming.",
              standard: "Sorry about that. Try the reset button on the side of the heater. If it doesn't work, I'll send a plumber within the hour.",
              formal: "I do apologize for the inconvenience. It appears the water heater may require a reset. There is a small red button on the side of the unit; please press and hold it for approximately five seconds. Should this not resolve the issue, I will arrange for a qualified plumber to attend the property within the hour.",
            },
          },
          {
            speaker: "you",
            textEn: "I tried the reset button but it's still the same. Also, I just noticed the air conditioning isn't cooling properly — it's blowing warm air even on the coldest setting.",
            textZh: "我试了重置按钮，还是一样。另外，我刚发现空调也不制冷——即使调到最冷的档位也在吹暖风。",
            culturalNote:
              "当多个设施同时出问题时，记录所有问题一起反馈，这样房东可以一次性安排维修。也为后续可能的退款申请提供依据。",
            casualVersion: "Tried the reset, same deal. And the AC is blowing warm air too. Even on the lowest setting.",
            commonMistake: {
              wrong: "The cold air machine also broken.",
              correct: "The air conditioning isn't cooling properly — it's blowing warm air.",
              explanation: "air conditioning 或 AC 是空调的标准说法。isn't cooling properly 描述具体问题。",
            },
            formalityVariants: {
              casual: "Reset didn't help. And now the AC's blowing warm air too. Great.",
              standard: "The reset didn't work. Also, the AC is blowing warm air even on the coldest setting.",
              formal: "I attempted the reset procedure; however, the issue persists. Additionally, I have observed that the air conditioning unit is not functioning correctly — it is producing warm air even when configured to the lowest temperature setting.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "I'm really sorry — that's unacceptable. I'll call a technician right now for both issues. In the meantime, would you be okay staying there tonight, or would you prefer I help you find alternative accommodation nearby? I'll cover any price difference.",
            textZh: "真的很抱歉——这不应该的。我现在就叫维修工来处理两个问题。在那之前，你今晚愿意继续住那里吗，还是想让我帮你找附近的替代住处？差价我来承担。",
            keyPhrases: [
              { en: "alternative accommodation", zh: "替代住处" },
              { en: "cover any price difference", zh: "承担差价" },
            ],
            alternativeExpressions: [
              { textEn: "That's really not okay. I'm calling a repair person now. But if you don't wanna deal with this tonight, I can find you another place nearby and eat the cost difference.", textZh: "这真的不行。我现在叫维修人员。但如果你今晚不想忍受这些，我可以帮你找附近的地方，差价我出。", actionHint: "eat the cost = 自己承担费用", frequency: "common" },
            ],
            casualVersion: "Really sorry — calling a tech now. Want to stay tonight or want me to find you another place? I'll pay the difference.",
            formalityVariants: {
              casual: "Ugh, that's bad. Getting a repair person now. Stay or want me to find somewhere else? I'll cover the difference.",
              standard: "I apologize. I'll call a technician now. Would you prefer to stay or shall I find alternative accommodation? I'll cover the difference.",
              formal: "I am deeply sorry — this situation is entirely unacceptable. I will contact a technician immediately to address both issues. In the interim, would you be comfortable remaining at the property this evening, or would you prefer that I arrange alternative accommodation in the vicinity? I will of course absorb any difference in cost.",
            },
          },
          {
            speaker: "you",
            textEn: "If the technician can come today, I'll stay. But if these issues aren't fixed by tonight, I'll need to request a refund for the affected nights through Airbnb.",
            textZh: "如果维修工今天能来，我就留下。但如果今晚问题没解决，我需要通过Airbnb申请受影响几晚的退款。",
            culturalNote:
              "Airbnb有正式的Resolution Center（解决中心）用于处理退款申请。通过平台申请比私下协商更有保障。保留所有沟通记录。",
            casualVersion: "If the tech comes today, I'll stay. But if nothing's fixed tonight, I'm requesting a refund through Airbnb.",
            commonMistake: {
              wrong: "If not fixed, I want my money back.",
              correct: "I'll need to request a refund through Airbnb for the affected nights.",
              explanation: "通过 Airbnb 平台申请退款更正式更有保障。affected nights 指受影响的晚上，比 my money back 更精确。",
            },
            formalityVariants: {
              casual: "If the tech shows up today, fine. But if it's not fixed tonight, I'm going through Airbnb for a refund.",
              standard: "I'll stay if the technician comes today. If it's not resolved tonight, I'll request a refund through Airbnb.",
              formal: "I am willing to remain at the property provided the technician is able to attend today. However, should these issues not be rectified by this evening, I will regrettably need to submit a refund request through the Airbnb Resolution Center for the affected nights.",
            },
          },
          {
            speaker: "them",
            role: "Airbnb房东",
            textEn: "Completely understandable. The technician confirmed he'll be there by 4 p.m. I'll also refund tonight proactively through the app — you shouldn't have to deal with a broken AC on top of the water issue. I'll make sure everything is working before he leaves.",
            textZh: "完全理解。维修工确认下午4点前到。我也会主动通过APP退今晚的费用——你不应该在热水问题之上还要忍受空调不制冷。我会确保他走之前一切都修好。",
            keyPhrases: [
              { en: "refund tonight proactively", zh: "主动退今晚的费用" },
              { en: "on top of", zh: "在...之上/除了...还" },
            ],
            alternativeExpressions: [
              { textEn: "Totally fair. Tech's coming by 4. And you know what — I'll go ahead and refund tonight through the app without you asking. Water AND AC? That's too much. I'll stick around to make sure everything's fixed before the tech leaves.", textZh: "完全合理。维修工4点前到。而且——我先通过APP退今晚的钱，不用你开口。热水和空调同时坏？太过分了。我会确保维修工走之前一切修好。", actionHint: "stick around = 留在附近; without you asking = 不用你开口", frequency: "common" },
            ],
            casualVersion: "Totally fair. Tech's coming by 4. I'll refund tonight through the app — you shouldn't have to deal with all this. I'll make sure it's all fixed.",
            formalityVariants: {
              casual: "Fair. Tech by 4. I'll refund tonight through the app myself. I'll make sure everything works.",
              standard: "Understood. The technician will arrive by 4 p.m. I'll proactively refund tonight through the app. I'll ensure everything is fixed.",
              formal: "That is entirely understandable, and I appreciate your patience. The technician has confirmed arrival by four o'clock this afternoon. As a gesture of good faith, I will proactively issue a refund for this evening through the Airbnb application — you should not have to endure a malfunctioning air conditioner in addition to the hot water issue. I will personally ensure that all systems are fully operational before the technician departs.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 青旅储物柜 ====================
  {
    id: "accommodation-hostel-locker",
    category: "accommodation",
    titleZh: "青旅储物柜",
    titleEn: "Hostel Locker",
    description: "在青年旅舍使用储物柜存放贵重物品，了解锁具和安全规则",
    otherRole: "青旅前台",
    otherRoleIcon: "🔐",
    flows: [
      {
        id: "hostel-locker-basic",
        titleZh: "使用储物柜",
        titleEn: "Using the Locker",
        description: "了解储物柜位置、使用方法和是否需要自带锁",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just checked into the dorm room. Is there a locker where I can store my valuables?",
            textZh: "你好，我刚入住宿舍房。有储物柜可以存放贵重物品吗？",
            culturalNote:
              "青年旅舍的dorm room（多人间）通常配有locker（储物柜），但很多需要自带padlock（挂锁）。护照、现金、电子设备等贵重物品一定要锁好。",
            casualVersion: "Hey, just checked in. Where can I lock up my stuff?",
            commonMistake: {
              wrong: "Do you have a box to put my expensive things?",
              correct: "Is there a locker where I can store my valuables?",
              explanation: "locker 是储物柜。valuables 是贵重物品的标准说法，不说 expensive things。",
            },
            formalityVariants: {
              casual: "Just got in. Got a locker for my stuff?",
              standard: "Is there a locker available for storing valuables?",
              formal: "Good afternoon. I have just checked into the dormitory. Could you please advise whether there are lockers available for the secure storage of personal valuables?",
            },
          },
          {
            speaker: "them",
            role: "青旅前台",
            textEn: "Yes, there's a locker under each bunk bed. You'll need your own padlock though — we don't provide them. If you don't have one, we sell combination locks at the front desk for $5.",
            textZh: "有的，每个床位下面都有一个储物柜。不过你需要自带挂锁——我们不提供。如果没有的话，前台卖密码锁，5美元一个。",
            keyPhrases: [
              { en: "padlock", zh: "挂锁" },
              { en: "combination lock", zh: "密码锁" },
            ],
            alternativeExpressions: [
              { textEn: "Yep! Each bunk has a locker underneath. BYOL though — bring your own lock. We sell combo locks at reception for five bucks if you need one.", textZh: "有！每个床位下面有储物柜。但要自带锁。没有的话前台有密码锁卖，五块钱。", actionHint: "BYOL = bring your own lock; combo lock = 密码锁", frequency: "common" },
            ],
            casualVersion: "Yeah, locker under each bunk. Bring your own lock. We sell combo locks for $5 if you need one.",
            formalityVariants: {
              casual: "Yep, under your bunk. Need your own lock. We sell 'em for $5.",
              standard: "There's a locker under each bunk. You'll need your own padlock. We sell combination locks for $5.",
              formal: "Certainly. Each bunk bed is equipped with an individual locker situated beneath the frame. Please note that guests are required to provide their own padlock. Should you not have one, we offer combination locks for purchase at the front desk for five dollars.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take a combination lock, please. Is the locker big enough for a backpack, or just small items?",
            textZh: "我买一个密码锁。储物柜能放得下背包吗，还是只能放小东西？",
            culturalNote:
              "青旅储物柜大小差异很大。有些只能放笔记本电脑和钱包，有些能放整个背包。问清楚大小有助于安排行李。",
            casualVersion: "I'll grab a lock. How big is the locker — backpack-size or just small stuff?",
            commonMistake: {
              wrong: "How many size is the locker?",
              correct: "Is the locker big enough for a backpack?",
              explanation: "问储物柜大小用 big enough for...更自然。how many size 语法不对。",
            },
            formalityVariants: {
              casual: "I'll take a lock. Will my backpack fit in the locker?",
              standard: "I'll take a combination lock. Is the locker large enough for a backpack?",
              formal: "I would like to purchase a combination lock, please. Could you advise whether the locker is spacious enough to accommodate a full-sized backpack, or is it designed for smaller personal items only?",
            },
          },
          {
            speaker: "them",
            role: "青旅前台",
            textEn: "It should fit a standard backpack — around 40 liters. Anything bigger, like a large suitcase, you can store in our luggage room down the hall. That's free for guests.",
            textZh: "放一个标准背包应该没问题——大约40升。更大的东西，比如大行李箱，可以放在走廊尽头的行李间。住客免费使用。",
            keyPhrases: [
              { en: "luggage room", zh: "行李间" },
              { en: "free for guests", zh: "住客免费" },
            ],
            alternativeExpressions: [
              { textEn: "A regular backpack fits no problem. If you've got a big suitcase, there's a locked luggage room at the end of the hall — totally free.", textZh: "普通背包完全放得下。如果有大行李箱，走廊尽头有个上锁的行李间——完全免费。", actionHint: "no problem = 没问题; totally free = 完全免费", frequency: "common" },
            ],
            casualVersion: "A regular backpack fits fine. Big suitcases go in the luggage room down the hall — free for guests.",
            formalityVariants: {
              casual: "Backpack fits. Big bags? Luggage room down the hall, free.",
              standard: "A standard backpack should fit. Larger items go in the luggage room. It's free for guests.",
              formal: "The locker should comfortably accommodate a standard backpack of up to approximately forty liters. For larger items such as suitcases, we have a secure luggage storage room located at the end of the corridor, which is available to guests at no charge.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, I'll use the luggage room for my suitcase. One more thing — should I keep my passport in the locker, or does the hostel have a safe?",
            textZh: "好的，我把行李箱放行李间。还有一个问题——我应该把护照放储物柜里，还是旅舍有保险箱？",
            culturalNote:
              "护照等重要证件最好锁在个人储物柜或使用酒店保险箱。有些旅行者会随身携带护照并把复印件留在储物柜里作为备用。",
            casualVersion: "I'll put my suitcase there. Should I lock my passport in the locker, or do you have a safe?",
            commonMistake: {
              wrong: "Where should I put my passport to be safe?",
              correct: "Should I keep my passport in the locker, or does the hostel have a safe?",
              explanation: "safe 作名词指保险箱。to be safe 是安全的意思，容易混淆。直接问两个选项更清楚。",
            },
            formalityVariants: {
              casual: "Passport — locker or do you have a safe?",
              standard: "Should I keep my passport in the locker, or is there a safe I can use?",
              formal: "I intend to store my suitcase in the luggage room. Regarding my passport, would you recommend keeping it in the locker, or does the hostel provide a safe for important documents?",
            },
          },
          {
            speaker: "them",
            role: "青旅前台",
            textEn: "We do have a safe at the front desk — you can store your passport and any other important documents there for free. Just come to the desk whenever you need to access it. We're staffed 24 hours.",
            textZh: "我们前台有保险箱——你可以免费存放护照和其他重要文件。需要取的时候来前台就行。我们24小时有人值班。",
            keyPhrases: [
              { en: "safe at the front desk", zh: "前台保险箱" },
              { en: "staffed 24 hours", zh: "24小时有人值班" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, we've got a safe right here at reception. Passport, cash, whatever — toss it in, no charge. Just swing by whenever you need it. Someone's always here.", textZh: "有，前台就有保险箱。护照、现金什么的——放进去，免费。需要的时候过来就行。随时有人在。", actionHint: "toss it in = 放进去（口语）; swing by = 过来", frequency: "common" },
            ],
            casualVersion: "We've got a safe here. Passports, cash — store it free. Come by anytime, we're here 24/7.",
            formalityVariants: {
              casual: "Safe's right here. Free. Come grab your stuff whenever — we're here 24/7.",
              standard: "There's a safe at the front desk for passports and documents. Free, and accessible 24 hours.",
              formal: "We do indeed maintain a secure safe at the front desk, available free of charge for the storage of passports and other important documents. You may access it at your convenience, as our reception desk is staffed around the clock.",
            },
          },
        ],
      },
      {
        id: "hostel-locker-intermediate",
        titleZh: "储物柜问题处理",
        titleEn: "Locker Issues",
        description: "储物柜卡住、忘记密码或物品丢失等问题的处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a problem — I set my combination lock last night but now the code isn't working. I've tried it at least ten times and it won't open.",
            textZh: "你好，我遇到问题了——我昨晚设好了密码锁，但现在密码不对了。我至少试了十次，打不开。",
            culturalNote:
              "密码锁出问题在青旅很常见。可能是记错了密码、锁本身故障、或者不小心重置了密码。保持冷静，前台通常有工具帮忙。",
            casualVersion: "My combo lock won't open! I've tried the code like ten times. Help?",
            commonMistake: {
              wrong: "My lock password is not working.",
              correct: "My combination lock code isn't working.",
              explanation: "锁的密码叫 code 或 combination，不叫 password。password 用于电子设备和账户。",
            },
            formalityVariants: {
              casual: "Lock's stuck — code isn't working. Tried it a bunch of times.",
              standard: "My combination lock code isn't working. I've tried it at least ten times.",
              formal: "Excuse me, I am experiencing an issue with my combination lock. I configured the code last evening; however, it is no longer accepting the combination despite numerous attempts.",
            },
          },
          {
            speaker: "them",
            role: "青旅前台",
            textEn: "That happens sometimes. First, can you verify you're at the right locker? They all look the same. If it's definitely yours, I have bolt cutters we can use, but I'll need to verify your identity first — can I see your booking confirmation and ID?",
            textZh: "这种情况时有发生。首先，你确定是你的储物柜吗？它们看起来都一样。如果确定是你的，我有断线钳可以剪开，但需要先核实你的身份——能看一下你的预订确认和证件吗？",
            keyPhrases: [
              { en: "bolt cutters", zh: "断线钳" },
              { en: "verify your identity", zh: "核实身份" },
            ],
            alternativeExpressions: [
              { textEn: "Happens more than you'd think. Sure it's your locker? They're identical. If so, I can cut it off with bolt cutters — just need to see your ID and booking first. Security thing.", textZh: "比你想的更常见。确定是你的柜子？它们长一样。如果是，我可以用断线钳剪开——先看下证件和预订。安全规定。", actionHint: "cut it off = 剪掉; security thing = 安全规定", frequency: "common" },
            ],
            casualVersion: "Happens a lot. Sure it's your locker? I can cut the lock if you show me your ID and booking confirmation.",
            formalityVariants: {
              casual: "Classic. Right locker? They look the same. I can snip it — just need your ID.",
              standard: "It happens. Are you sure it's the right locker? I can use bolt cutters if you show me your ID and booking.",
              formal: "This does occur from time to time. Firstly, may I ask that you verify you are attempting to open the correct locker, as they are identical in appearance. If it is indeed yours, I have bolt cutters available. However, for security purposes, I must first verify your identity. May I see your booking confirmation and a form of identification?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I'm sure it's mine — bed 4, bottom bunk. Here's my booking confirmation and passport. I think the lock might be jammed.",
            textZh: "是的，确定是我的——4号床位，下铺。这是我的预订确认和护照。我觉得锁可能卡住了。",
            culturalNote:
              "在青旅中，每个储物柜通常对应一个床位号。提供床位信息有助于工作人员确认你的身份。",
            casualVersion: "Yeah, it's mine — bed 4, bottom bunk. Here's my stuff. I think the lock's jammed.",
            commonMistake: {
              wrong: "The lock is blocked.",
              correct: "The lock might be jammed.",
              explanation: "锁卡住用 jammed，不用 blocked。blocked 一般指路径被阻挡。",
            },
            formalityVariants: {
              casual: "Bed 4, bottom. Here's my ID. Lock's probably jammed.",
              standard: "It's bed 4, bottom bunk. Here's my booking and passport. I think the lock is jammed.",
              formal: "I can confirm it is my locker — bed number four, lower bunk. Here is my booking confirmation along with my passport. I believe the locking mechanism may have jammed.",
            },
          },
          {
            speaker: "them",
            role: "青旅前台",
            textEn: "Everything checks out. Let me grab the bolt cutters and I'll come up with you. Once we cut the lock off, you'll need a new one — I can give you a replacement lock for free since it seems like a defective product.",
            textZh: "信息核实了。我去拿断线钳，跟你一起上去。剪掉锁之后你需要一个新的——看起来是产品缺陷，我可以免费给你一个替换的。",
            keyPhrases: [
              { en: "everything checks out", zh: "信息核实了" },
              { en: "defective product", zh: "有缺陷的产品" },
            ],
            alternativeExpressions: [
              { textEn: "All good — ID matches. Let me get the cutters and we'll head up together. You'll need a new lock after, but since it was probably a dud, I'll give you one on the house.", textZh: "没问题——身份匹配。我去拿钳子，我们一起上去。之后你需要新锁，但这个可能本来就有问题，免费给你一个。", actionHint: "a dud = 有缺陷的东西; on the house = 免费", frequency: "common" },
            ],
            casualVersion: "ID checks out. Let me grab the cutters and we'll go up. I'll give you a free replacement since the lock was defective.",
            formalityVariants: {
              casual: "Looks good. Lemme grab the cutters. Free replacement since it was a dud.",
              standard: "Identity confirmed. I'll get the bolt cutters. You'll get a free replacement lock since it was defective.",
              formal: "Your identity has been verified. Allow me to retrieve the bolt cutters and accompany you to the locker. Once the lock has been removed, I will provide a complimentary replacement, as the malfunction appears to be attributable to a product defect.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks, I appreciate that. While we're at it, can I ask — has there been any issue with theft in the dorm rooms? I want to make sure my laptop is safe.",
            textZh: "谢谢，太好了。顺便问一下——宿舍房有过失窃的情况吗？我想确认笔记本电脑是安全的。",
            culturalNote:
              "青旅偷窃问题确实存在，但大多数信誉好的青旅有安全措施（如监控、门禁）。贵重物品一定要锁好，不要放在床上。",
            casualVersion: "Thanks! Quick question — any theft issues in the dorms? Worried about my laptop.",
            commonMistake: {
              wrong: "Are there stealing problems?",
              correct: "Has there been any issue with theft in the dorm rooms?",
              explanation: "theft 是名词指偷窃。stealing problems 虽然能理解但不地道。",
            },
            formalityVariants: {
              casual: "Thanks! Any theft problems? Got a laptop in there.",
              standard: "Thanks. Has there been any theft in the dorms? I want to make sure my laptop is safe.",
              formal: "Thank you, that is most appreciated. If I may, I would also like to inquire whether there have been any incidents of theft in the dormitory rooms. I am concerned about the security of my laptop.",
            },
          },
          {
            speaker: "them",
            role: "青旅前台",
            textEn: "We haven't had any incidents recently — we've got security cameras in the hallways and key-card access on every dorm door. But always lock your valuables in the locker when you leave the room. Never leave a laptop on your bed, even for a minute.",
            textZh: "最近没有发生过。走廊有安全摄像头，每个宿舍门都有门禁卡。但离开房间时一定要把贵重物品锁在储物柜里。永远不要把笔记本放在床上，哪怕只是一分钟。",
            keyPhrases: [
              { en: "key-card access", zh: "门禁卡" },
              { en: "never leave a laptop on your bed", zh: "永远不要把笔记本放在床上" },
            ],
            alternativeExpressions: [
              { textEn: "Nothing recently. We've got cameras and card-only doors. Just always lock your stuff up when you head out. Biggest rule: never leave your laptop sitting out, even for a bathroom break.", textZh: "最近没有。有监控和刷卡门。出门一定锁好东西。最重要的规则：笔记本不要放在外面，哪怕去上个厕所也不行。", actionHint: "sitting out = 暴露在外面; head out = 出门", frequency: "common" },
            ],
            casualVersion: "No issues lately. Cameras in the halls, key-card doors. Just always lock your stuff. Never leave your laptop out.",
            formalityVariants: {
              casual: "Nope, all good. Cameras, card doors. Just lock your stuff. Don't leave your laptop out.",
              standard: "No recent incidents. We have cameras and key-card doors. Always lock valuables and never leave electronics unattended.",
              formal: "We have not experienced any theft incidents in recent memory. The property is equipped with security cameras throughout the corridors and key-card access on all dormitory doors. That said, I would strongly advise always securing your valuables in the locker when leaving the room. Under no circumstances should a laptop or other electronics be left unattended on the bed, even momentarily.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 度假租房损坏报告 ====================
  {
    id: "accommodation-vacation-rental-damage",
    category: "accommodation",
    titleZh: "度假租房损坏报告",
    titleEn: "Vacation Rental Damage Report",
    description: "入住度假租房后发现已有损坏或意外造成损坏时向房东报告",
    otherRole: "房东/物业经理",
    otherRoleIcon: "🏖️",
    flows: [
      {
        id: "rental-damage-basic",
        titleZh: "报告入住前已有损坏",
        titleEn: "Reporting Pre-existing Damage",
        description: "入住后发现房屋已有损坏，及时记录并通知房东以避免被追责",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just checked in and I want to report some damage I noticed before I unpacked. There's a crack in the bathroom mirror and a stain on the living room carpet.",
            textZh: "你好，我刚入住，想在收拾行李之前报告一下发现的损坏。浴室镜子有一条裂缝，客厅地毯上有一块污渍。",
            culturalNote:
              "入住度假租房后第一件事就是检查并记录已有损坏，拍照留证据。这能避免退房时被追责，尤其在需要缴纳damage deposit（损坏押金）的情况下。",
            casualVersion: "Hey, just got in. Wanted to flag some damage I found — cracked mirror in the bathroom and a stain on the carpet.",
            commonMistake: {
              wrong: "I want to tell you that your house has some broken things.",
              correct: "I want to report some damage I noticed before I unpacked.",
              explanation: "report damage 是报告损坏的标准说法。before I unpacked 强调不是你造成的。",
            },
            formalityVariants: {
              casual: "Hey, heads up — cracked bathroom mirror and carpet stain. Found them when I walked in.",
              standard: "I want to report some pre-existing damage — a cracked mirror and a carpet stain.",
              formal: "Good afternoon. I would like to formally report some damage that I observed upon arrival, prior to unpacking. There is a visible crack in the bathroom mirror and a noticeable stain on the living room carpet.",
            },
          },
          {
            speaker: "them",
            role: "房东/物业经理",
            textEn: "Thanks so much for letting me know right away — I really appreciate it. Could you take a few photos and send them to me? I'll make a note in your file so you won't be held responsible for those when you check out.",
            textZh: "非常感谢你第一时间告知——我很感激。能拍几张照片发给我吗？我会在你的档案里备注，这样退房时不会追究这些。",
            keyPhrases: [
              { en: "won't be held responsible", zh: "不会被追究责任" },
              { en: "make a note in your file", zh: "在档案里备注" },
            ],
            alternativeExpressions: [
              { textEn: "Appreciate you flagging that! Snap a few pics and shoot them over. I'll log it so there's no confusion at checkout — you won't be on the hook for any of it.", textZh: "感谢你提醒！拍几张照片发过来。我会记录好，退房时不会搞混——这些不会算在你头上。", actionHint: "on the hook = 被追责; flagging = 提醒/标记", frequency: "common" },
            ],
            casualVersion: "Thanks for telling me! Send me some pics and I'll note it. You won't be charged for those.",
            formalityVariants: {
              casual: "Good catch! Send me pics. I'll note it so you're not on the hook.",
              standard: "Thank you for reporting this. Please send photos and I'll note it in your file. You won't be held responsible.",
              formal: "I am most grateful for your prompt notification. Would you be so kind as to photograph the damage and forward the images to me? I shall make a detailed annotation in your file to ensure that these pre-existing conditions are not attributed to you upon checkout.",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, I'll send the photos now. I also took a short video walkthrough of the whole apartment when I arrived, just to be safe. Should I send that too?",
            textZh: "好的，我现在发照片。我到的时候还拍了整个公寓的简短视频巡查，以防万一。也需要发吗？",
            culturalNote:
              "做video walkthrough（视频巡查）是保护自己的最佳做法。进门后用手机录一段完整的公寓视频，记录所有区域的状态。",
            casualVersion: "I'll send pics now. I also did a video walkthrough when I got here. Want that too?",
            commonMistake: {
              wrong: "I also made a video of all the rooms.",
              correct: "I also took a short video walkthrough of the whole apartment.",
              explanation: "video walkthrough 是巡查视频的标准说法，比 video of all the rooms 更专业。",
            },
            formalityVariants: {
              casual: "Sending pics now. Also did a walk-around video. Want it?",
              standard: "I'll send the photos now. I also did a video walkthrough. Should I send that as well?",
              formal: "I will forward the photographs immediately. Additionally, I recorded a brief video walkthrough of the entire apartment upon my arrival as a precautionary measure. Would you like me to provide that documentation as well?",
            },
          },
          {
            speaker: "them",
            role: "房东/物业经理",
            textEn: "That would be really helpful, yes! You're clearly an experienced renter. Go ahead and send the video too. I'll keep everything on file. And don't worry — your security deposit is safe.",
            textZh: "那太有帮助了，是的！看得出你是有经验的租客。视频也发过来吧。我会全部存档。别担心——你的安全押金不会有问题。",
            keyPhrases: [
              { en: "security deposit", zh: "安全押金/损坏押金" },
              { en: "keep everything on file", zh: "全部存档" },
            ],
            alternativeExpressions: [
              { textEn: "Please do! Smart move doing a walkthrough. Send it all over and I'll file it. Your deposit's totally safe — no worries there.", textZh: "请发！做巡查视频很聪明。全发过来我存档。你的押金完全没问题——不用担心。", actionHint: "smart move = 聪明的做法", frequency: "common" },
            ],
            casualVersion: "Yeah, send the video too. Smart thinking! Your deposit is totally fine.",
            formalityVariants: {
              casual: "Yes, send it! Smart. Your deposit's safe, no stress.",
              standard: "Please send the video as well. I'll file everything. Your security deposit is safe.",
              formal: "That would be extremely helpful, yes. It is clear you are a conscientious guest. Please do send the video along with the photographs. I shall maintain all documentation securely on file. Rest assured, your security deposit is entirely protected.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, all sent. One more question — the crack in the mirror is pretty sharp. Is there any chance you could have it fixed while I'm here? I don't want anyone to get cut.",
            textZh: "好，都发了。还有一个问题——镜子上的裂缝挺锋利的。有没有可能在我住的时候修一下？我不想有人被划伤。",
            culturalNote:
              "如果损坏存在安全隐患，要求维修是完全合理的。房东有义务保证住宿安全。",
            casualVersion: "All sent. The mirror crack is pretty sharp though — can you get it fixed? Don't want anyone getting cut.",
            commonMistake: {
              wrong: "The mirror can hurt someone.",
              correct: "The crack in the mirror is pretty sharp. I don't want anyone to get cut.",
              explanation: "具体描述安全隐患（sharp crack, get cut）比笼统说 hurt someone 更有效。",
            },
            formalityVariants: {
              casual: "Sent! The mirror crack is kinda dangerous though. Any chance of getting it fixed?",
              standard: "All sent. The mirror crack is sharp — can it be fixed while I'm here? Safety concern.",
              formal: "All documentation has been submitted. I would also like to raise a safety concern: the crack in the bathroom mirror has rather sharp edges. Would it be possible to arrange a repair during my stay to prevent any potential injury?",
            },
          },
          {
            speaker: "them",
            role: "房东/物业经理",
            textEn: "Absolutely — safety first. I'll have someone come by tomorrow morning to replace the mirror. I'll text you before they arrive so you can let them in. Thanks again for being so thorough!",
            textZh: "当然——安全第一。我明天上午安排人来换镜子。他们到之前我会发短信给你，方便你开门。再次感谢你这么细致！",
            keyPhrases: [
              { en: "safety first", zh: "安全第一" },
              { en: "text you before they arrive", zh: "他们到之前发短信给你" },
            ],
            alternativeExpressions: [
              { textEn: "For sure — can't have that. I'll get someone out tomorrow AM to swap the mirror. I'll give you a heads-up before they show. Thanks for being on top of this!", textZh: "当然——不能有这种隐患。明天上午安排人来换镜子。他们来之前我会提前通知你。感谢你这么仔细！", actionHint: "heads-up = 提前通知; on top of this = 做事仔细/及时", frequency: "common" },
            ],
            casualVersion: "For sure, safety first. Someone'll come tomorrow morning. I'll text you first. Thanks for being so on it!",
            formalityVariants: {
              casual: "Definitely. I'll send someone tomorrow. Text before they come. Thanks!",
              standard: "Absolutely. I'll arrange a replacement tomorrow morning and text you in advance. Thank you.",
              formal: "Without question — safety is our foremost concern. I will arrange for a contractor to replace the mirror tomorrow morning. I shall notify you via text message prior to their arrival so that you may grant them access. Thank you most sincerely for your thoroughness and diligence in reporting these matters.",
            },
          },
        ],
      },
      {
        id: "rental-damage-intermediate",
        titleZh: "意外造成损坏的报告",
        titleEn: "Reporting Accidental Damage",
        description: "住宿期间意外造成损坏后如何诚实报告并协商处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to let you know about something. I accidentally knocked a vase off the shelf and it broke. I'm really sorry — it was a total accident. I've cleaned up all the broken pieces.",
            textZh: "你好，有件事需要告诉你。我不小心把架子上的花瓶碰掉了，摔碎了。真的很抱歉——完全是意外。我已经把碎片都清理干净了。",
            culturalNote:
              "诚实报告意外损坏是正确的做法。大多数房东会理解事故，隐瞒损坏被发现后会更麻烦。主动报告通常能获得更宽容的处理。",
            casualVersion: "Hey, bad news — I accidentally broke a vase. Knocked it off the shelf. Super sorry. Already cleaned it up.",
            commonMistake: {
              wrong: "I broke your vase. Sorry.",
              correct: "I accidentally knocked a vase off the shelf and it broke. I'm really sorry.",
              explanation: "说明意外经过（accidentally knocked off）比直接说 I broke 更完整，也暗示不是故意的。",
            },
            formalityVariants: {
              casual: "So... I knocked over a vase and it smashed. Totally my bad. Cleaned it all up.",
              standard: "I accidentally broke a vase. It was knocked off the shelf. I'm very sorry and I've cleaned up.",
              formal: "I feel I must inform you of an unfortunate incident. I inadvertently displaced a vase from the shelf, which resulted in its breaking. I am sincerely sorry — it was entirely accidental. I have thoroughly cleaned up all the fragments.",
            },
          },
          {
            speaker: "them",
            role: "房东/物业经理",
            textEn: "Oh, accidents happen — don't worry too much. Thanks for being honest and letting me know. Could you send me a photo of the damage? Do you know if it was the blue ceramic vase or the glass one?",
            textZh: "哦，意外难免——别太担心。感谢你的诚实和告知。能发一张损坏的照片吗？你知道是那个蓝色陶瓷花瓶还是玻璃的那个？",
            keyPhrases: [
              { en: "accidents happen", zh: "意外难免" },
              { en: "thanks for being honest", zh: "感谢你的诚实" },
            ],
            alternativeExpressions: [
              { textEn: "These things happen, no biggie. Really appreciate you telling me though. Snap a pic? Was it the blue ceramic one or the clear glass one?", textZh: "这种事会发生，没什么大不了的。真的感谢你告诉我。拍张照？是蓝色陶瓷的还是透明玻璃的？", actionHint: "no biggie = 没什么大不了; snap a pic = 拍张照", frequency: "common" },
            ],
            casualVersion: "No worries, stuff happens! Thanks for telling me. Send a pic? Which vase — the blue one or the glass one?",
            formalityVariants: {
              casual: "Don't sweat it! Things break. Which vase — blue or glass? Send a pic.",
              standard: "Accidents happen, don't worry. Thanks for telling me. Could you send a photo and let me know which vase it was?",
              formal: "Please do not distress yourself — such accidents are entirely understandable. I am grateful for your honesty in bringing this to my attention. Would you kindly forward a photograph of the damage? Could you also clarify whether it was the blue ceramic vase or the glass one?",
            },
          },
          {
            speaker: "you",
            textEn: "It was the blue ceramic one. Here's the photo — it broke into several large pieces. I'd like to replace it or pay for it. How much was it worth?",
            textZh: "是蓝色陶瓷的那个。这是照片——碎成了几大块。我想赔偿或者重新买一个。值多少钱？",
            culturalNote:
              "主动提出赔偿或替换是诚意的表现。问how much was it worth比直接给钱更尊重对方的物品。",
            casualVersion: "The blue one. Here's a pic — broke into big pieces. How much do I owe you?",
            commonMistake: {
              wrong: "How much money do you want?",
              correct: "How much was it worth? I'd like to replace it or pay for it.",
              explanation: "how much was it worth 更尊重。I'd like to replace it 表示主动承担责任。",
            },
            formalityVariants: {
              casual: "Blue one. Pic attached. What do I owe ya?",
              standard: "It was the blue ceramic vase. Here's a photo. I'd like to pay for it or replace it.",
              formal: "It was the blue ceramic vase. I have attached a photograph. I would like to offer to either replace the item or provide fair compensation. Could you kindly advise its value?",
            },
          },
          {
            speaker: "them",
            role: "房东/物业经理",
            textEn: "Thanks for the photo. That vase was from a local market — about $30. But honestly, since you were so upfront about it, let's just call it $20. I'll deduct it from your security deposit and refund the rest as usual.",
            textZh: "谢谢照片。那个花瓶是在当地市场买的——大概30美元。但说实话，因为你这么坦诚，就算20美元吧。我从押金里扣，剩下的照常退还。",
            keyPhrases: [
              { en: "deduct it from your security deposit", zh: "从押金里扣" },
              { en: "you were so upfront about it", zh: "你这么坦诚" },
            ],
            alternativeExpressions: [
              { textEn: "Got the photo. It was about $30 from a local shop, but since you came clean right away, let's make it $20. I'll take it out of the deposit and send the rest back.", textZh: "收到照片了。大概30美元买的，但你这么坦白，就20吧。从押金扣，剩下的退给你。", actionHint: "came clean = 坦白; take it out of = 从...中扣除", frequency: "common" },
            ],
            casualVersion: "That was about $30 but let's just say $20 since you told me right away. I'll take it from the deposit.",
            formalityVariants: {
              casual: "It was 30 bucks, but let's do $20 since you were honest. From the deposit.",
              standard: "It was worth about $30. I'll call it $20 since you were upfront. I'll deduct it from your deposit.",
              formal: "Thank you for the photograph. The vase was purchased at a local market for approximately thirty dollars. However, given your commendable honesty in reporting the incident, I am happy to reduce the charge to twenty dollars. This amount will be deducted from your security deposit, and the remainder will be refunded to you as per standard procedure.",
            },
          },
          {
            speaker: "you",
            textEn: "That's very kind of you, thank you. Could I also get a receipt or written confirmation of the $20 charge? I want to keep things clear for both of us.",
            textZh: "你太客气了，谢谢。能给我一个收据或者20美元扣款的书面确认吗？我想让双方都清楚明确。",
            culturalNote:
              "任何涉及金钱的协商都要留书面记录。这保护双方，也是专业的做法。Airbnb等平台也建议所有协商通过平台消息记录。",
            casualVersion: "That's nice of you, thanks. Can I get a receipt for the $20? Just want everything documented.",
            commonMistake: {
              wrong: "Give me a paper for the money.",
              correct: "Could I get a receipt or written confirmation of the charge?",
              explanation: "receipt 是收据。written confirmation 是书面确认。这比 paper for the money 专业得多。",
            },
            formalityVariants: {
              casual: "Thanks, that's fair. Any chance of a receipt? Just wanna keep it clean.",
              standard: "Thank you. Could I get a receipt for the $20 deduction?",
              formal: "That is most generous, thank you. Would it be possible to receive a written receipt or confirmation documenting the twenty-dollar charge? I believe it is in both our interests to maintain clear records.",
            },
          },
          {
            speaker: "them",
            role: "房东/物业经理",
            textEn: "Of course. I'll send you a message through the booking platform confirming the $20 deduction for the vase. That way it's officially documented. And really — thanks for handling this the right way. Most guests wouldn't say anything.",
            textZh: "当然。我会通过预订平台发消息确认花瓶的20美元扣款。这样就有正式记录了。真的——感谢你用正确的方式处理这件事。大多数客人不会说的。",
            keyPhrases: [
              { en: "through the booking platform", zh: "通过预订平台" },
              { en: "officially documented", zh: "有正式记录" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. I'll message you on the app to confirm the $20 for the vase — keeps it all official. Seriously though, props for being honest. Most people just bail and pretend nothing happened.", textZh: "没问题。我在APP上发消息确认花瓶20美元——保持正式记录。说真的，佩服你的诚实。大多数人直接走了假装什么都没发生。", actionHint: "props = 赞扬/佩服; bail = 走人/跑掉", frequency: "common" },
            ],
            casualVersion: "Sure. I'll confirm the $20 through the platform. Thanks for being honest — most people wouldn't bother.",
            formalityVariants: {
              casual: "Yep, I'll send it through the app. Keeps it official. Seriously, thanks for being cool about it.",
              standard: "I'll send confirmation through the booking platform for the $20 deduction. Thank you for handling this honestly.",
              formal: "Certainly. I will send a formal confirmation through the booking platform documenting the twenty-dollar deduction for the vase, ensuring that the matter is officially recorded for both parties. I must commend you for your integrity in addressing this situation — it is genuinely appreciated, as many guests would not have disclosed the damage voluntarily.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 携带宠物住宿 ====================
  {
    id: "accommodation-pet-friendly",
    category: "accommodation",
    titleZh: "携带宠物住宿",
    titleEn: "Pet-Friendly Accommodation",
    description: "携带宠物入住酒店或民宿，了解宠物政策、费用和规则",
    otherRole: "酒店前台",
    otherRoleIcon: "🐾",
    flows: [
      {
        id: "pet-friendly-basic",
        titleZh: "了解宠物政策",
        titleEn: "Understanding Pet Policy",
        description: "入住前了解酒店的宠物政策、费用和限制",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm checking in today and I have my dog with me. I booked a pet-friendly room — could you confirm the pet policy?",
            textZh: "你好，我今天入住，带了我的狗。我预订了允许宠物的房间——能确认一下宠物政策吗？",
            culturalNote:
              "pet-friendly是宠物友好的标准说法。即使已预订宠物房间，入住时再次确认政策是好习惯，因为不同酒店的宠物规定差异很大。",
            casualVersion: "Hey, checking in with my dog. I booked a pet-friendly room. What's the pet policy?",
            commonMistake: {
              wrong: "I bring my dog. Is it OK?",
              correct: "I booked a pet-friendly room. Could you confirm the pet policy?",
              explanation: "pet-friendly room 是标准说法。confirm the pet policy 比 is it OK 更具体专业。",
            },
            formalityVariants: {
              casual: "Here with my dog — booked a pet room. What are the rules?",
              standard: "I have my dog with me and I booked a pet-friendly room. Could you confirm the policy?",
              formal: "Good afternoon. I am checking in today accompanied by my dog. I reserved a pet-friendly room and would appreciate it if you could confirm the hotel's pet policy and any applicable guidelines.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Welcome! Yes, I can see you've booked a pet-friendly room. We allow dogs up to 50 pounds. There's a one-time pet fee of $35, and we ask that dogs be leashed in all common areas. What breed is your dog?",
            textZh: "欢迎！是的，我看到您预订了宠物友好房间。我们允许50磅以下的狗。一次性宠物费35美元，我们要求在所有公共区域狗必须拴绳。你的狗是什么品种？",
            keyPhrases: [
              { en: "one-time pet fee", zh: "一次性宠物费" },
              { en: "leashed in all common areas", zh: "在所有公共区域拴绳" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, pet room booked! We take dogs under 50 lbs. There's a $35 pet fee — flat, one-time. Just keep your pup on a leash in the lobby, hallways, elevator, all that. What kind of dog?", textZh: "是的，宠物房已预订！我们接受50磅以下的狗。宠物费35美元——统一价，一次性。在大堂、走廊、电梯这些地方拴绳就行。什么品种的狗？", actionHint: "flat = 统一的; pup = 狗（亲切称呼）", frequency: "common" },
            ],
            casualVersion: "Pet room confirmed! Dogs under 50 lbs, $35 pet fee, leash in common areas. What breed?",
            formalityVariants: {
              casual: "Yep, pet room! Under 50 lbs, $35 fee, leash everywhere except the room. Breed?",
              standard: "Your pet-friendly room is confirmed. Dogs under 50 pounds, $35 pet fee. Please leash in common areas. What breed?",
              formal: "Welcome. I can confirm your pet-friendly room reservation. Our policy permits dogs weighing up to fifty pounds. A one-time pet fee of thirty-five dollars applies. We kindly request that all dogs remain leashed in common areas, including the lobby, corridors, and elevators. May I ask the breed of your dog?",
            },
          },
          {
            speaker: "you",
            textEn: "She's a golden retriever, about 45 pounds. Very well-behaved. Is there a designated area outside where I can walk her?",
            textZh: "她是金毛犬，大概45磅。很听话。外面有专门的遛狗区吗？",
            culturalNote:
              "很多酒店有designated pet area（专门的宠物区域），通常在建筑后面或侧面，配有垃圾袋和垃圾桶。有些高端酒店甚至有dog park。",
            casualVersion: "Golden retriever, 45 pounds. Super chill. Where can I walk her?",
            commonMistake: {
              wrong: "Where can my dog go to toilet?",
              correct: "Is there a designated area where I can walk her?",
              explanation: "walk her 是遛狗的标准说法。直接说 go to toilet 不够委婉。designated area 指专门区域。",
            },
            formalityVariants: {
              casual: "She's a golden, 45 lbs. Total sweetheart. Where do I walk her?",
              standard: "She's a golden retriever, about 45 pounds. Is there a designated walking area?",
              formal: "She is a golden retriever, approximately forty-five pounds, and is very well-trained. Could you please direct me to a designated outdoor area where I may walk her?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Golden retrievers are the best! There's a pet relief area behind the building with grass and a waste station — bags and a trash can are provided. There's also a nice walking trail along the creek if you go out the side entrance.",
            textZh: "金毛最好了！楼后面有一个宠物方便区，有草坪和清洁站——提供袋子和垃圾桶。从侧门出去还有一条沿小溪的散步道。",
            keyPhrases: [
              { en: "pet relief area", zh: "宠物方便区" },
              { en: "waste station", zh: "清洁站（配有垃圾袋和垃圾桶）" },
            ],
            alternativeExpressions: [
              { textEn: "Love goldens! There's a little dog area out back — grass, poop bags, trash can, the works. Plus there's a path by the creek from the side door. Perfect for morning walks.", textZh: "喜欢金毛！后面有个小狗区——草坪、便便袋、垃圾桶，一应俱全。侧门出去还有小溪边的步道。特别适合早上遛狗。", actionHint: "the works = 一应俱全; poop bags = 便便袋", frequency: "common" },
            ],
            casualVersion: "Goldens are great! Dog area out back with bags and a trash can. Also a nice trail by the creek from the side door.",
            formalityVariants: {
              casual: "Goldens rule! Dog area out back. Bags, trash can, plus a creek trail from the side door.",
              standard: "There's a pet relief area behind the building with a waste station. There's also a walking trail by the creek from the side entrance.",
              formal: "Golden retrievers are wonderful companions. We have a dedicated pet relief area located behind the building, equipped with grass, waste disposal bags, and a receptacle. Additionally, there is a scenic walking trail along the creek, accessible from the side entrance — perfect for leisurely walks.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds perfect. Last question — can I leave my dog in the room if I go out for dinner, or does she need to be supervised at all times?",
            textZh: "听起来很好。最后一个问题——如果我出去吃饭，能把狗留在房间里吗，还是必须一直有人看着？",
            culturalNote:
              "有些酒店允许宠物单独留在房间，但通常要求宠物不能持续吠叫。如果狗有分离焦虑问题，需要提前考虑解决方案。",
            casualVersion: "Can I leave her in the room when I go out? Or does someone need to be with her?",
            commonMistake: {
              wrong: "Can my dog stay alone in room?",
              correct: "Can I leave my dog in the room if I go out for dinner?",
              explanation: "leave my dog in the room 比 dog stay alone 更自然。给出具体场景（go out for dinner）让问题更清晰。",
            },
            formalityVariants: {
              casual: "Can she stay in the room alone if I go grab dinner?",
              standard: "Can I leave her in the room if I go out, or must she be supervised?",
              formal: "One final question — am I permitted to leave my dog unattended in the room should I wish to dine out, or must she be supervised at all times?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "You can leave her in the room for short periods, but we ask that she doesn't bark continuously — if other guests complain, we may need to contact you. Also, please don't leave her on the furniture or the bed. We provide a complimentary pet bed and water bowl in the room.",
            textZh: "可以短时间把她留在房间里，但我们要求她不能持续吠叫——如果其他客人投诉，我们可能需要联系你。另外，请不要让她上家具或床。我们在房间里提供免费的宠物床和水碗。",
            keyPhrases: [
              { en: "doesn't bark continuously", zh: "不能持续吠叫" },
              { en: "complimentary pet bed and water bowl", zh: "免费的宠物床和水碗" },
            ],
            alternativeExpressions: [
              { textEn: "Short periods are fine. Just no nonstop barking — if we get complaints, we'll have to call you. Keep her off the bed and furniture. Oh, and there's a free doggy bed and water bowl waiting in your room!", textZh: "短时间没问题。别一直叫就行——收到投诉我们得联系你。别让她上床和家具。对了，房间里有免费的狗床和水碗等着呢！", actionHint: "nonstop = 不停地; doggy bed = 狗床（口语）", frequency: "common" },
            ],
            casualVersion: "Short periods, sure. No nonstop barking though or we'll call you. Keep her off the furniture. There's a free pet bed and water bowl in the room.",
            formalityVariants: {
              casual: "Yeah, short trips out are fine. No barking marathons though. Pet bed and bowl are in the room — free!",
              standard: "She can stay in the room briefly. No continuous barking and please keep her off the furniture. There's a complimentary pet bed and bowl.",
              formal: "You may leave her in the room for brief periods. We do request that she refrain from continuous barking, as this may disturb other guests, and we would need to contact you in such an event. Additionally, we ask that pets not be permitted on the furniture or bedding. For your convenience, a complimentary pet bed and water bowl have been placed in your room.",
            },
          },
        ],
      },
      {
        id: "pet-friendly-intermediate",
        titleZh: "宠物突发问题处理",
        titleEn: "Handling Pet-Related Issues",
        description: "宠物在酒店造成意外状况或需要紧急帮助时的沟通",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm really sorry but my dog had an accident on the carpet in the room. I cleaned up as much as I could, but there's still a stain. I feel terrible about it.",
            textZh: "你好，非常抱歉，但我的狗在房间地毯上出了意外。我尽量清理了，但还有污渍。我觉得很过意不去。",
            culturalNote:
              "had an accident 是表示宠物在室内排泄的委婉说法。诚实报告并表示已尝试清理会让酒店更理解。大多数宠物友好酒店对此有准备。",
            casualVersion: "My dog had an accident on the carpet. I cleaned what I could but there's a stain. So sorry.",
            commonMistake: {
              wrong: "My dog made pee on the floor.",
              correct: "My dog had an accident on the carpet.",
              explanation: "had an accident 是关于宠物室内排泄的委婉说法。made pee 不是标准英语表达。",
            },
            formalityVariants: {
              casual: "So my dog had an accident on the carpet. Cleaned most of it. Stain's still there though. Sorry!",
              standard: "My dog had an accident on the carpet. I cleaned up but there's still a stain. I'm very sorry.",
              formal: "I must apologize — my dog unfortunately had an accident on the room carpet. I have attempted to clean the area as thoroughly as possible; however, a stain remains. I feel quite terrible about the situation.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Don't worry, it happens! That's actually one of the reasons we have a pet fee — it covers extra cleaning. I'll send housekeeping up with a carpet cleaner right away. No additional charge beyond the pet fee you already paid.",
            textZh: "别担心，这种事会发生的！其实这就是我们收宠物费的原因之一——用来覆盖额外清洁费用。我马上派客房清洁带地毯清洁剂上去。不会收你已付宠物费之外的额外费用。",
            keyPhrases: [
              { en: "that's one of the reasons we have a pet fee", zh: "这就是我们收宠物费的原因之一" },
              { en: "no additional charge", zh: "不额外收费" },
            ],
            alternativeExpressions: [
              { textEn: "Honestly, happens all the time — that's what the pet fee's for. I'll get housekeeping up there with a steam cleaner. Nothing extra to pay. Don't stress!", textZh: "说实话，经常发生——宠物费就是干这个的。我让清洁人员带蒸汽清洁机上去。不用额外付费。别紧张！", actionHint: "steam cleaner = 蒸汽清洁机; don't stress = 别紧张", frequency: "common" },
            ],
            casualVersion: "No worries, happens all the time! That's what the pet fee covers. Housekeeping's on the way with carpet cleaner. No extra charge.",
            formalityVariants: {
              casual: "Don't sweat it! Happens a lot. Pet fee covers it. Sending someone up with a carpet cleaner.",
              standard: "Don't worry, it happens. The pet fee covers extra cleaning. Housekeeping is on the way. No additional charge.",
              formal: "Please do not be concerned — such occurrences are not uncommon and are, in fact, one of the considerations factored into the pet fee. I will dispatch housekeeping immediately with a professional carpet cleaning solution. You will not incur any charges beyond the pet fee already paid.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you for being so understanding. I also wanted to ask — my dog seems a little off today. Is there a vet clinic nearby that you'd recommend?",
            textZh: "谢谢你这么理解。我还想问——我的狗今天状态不太好。附近有推荐的宠物诊所吗？",
            culturalNote:
              "在国外旅行时宠物生病是紧急情况。酒店前台通常有当地兽医的信息。了解emergency vet（急诊兽医）的位置很重要。",
            casualVersion: "Thanks for being cool about it. Also — my dog seems a bit off. Any vet clinics nearby?",
            commonMistake: {
              wrong: "My dog is not feeling well. Where is animal hospital?",
              correct: "My dog seems a little off. Is there a vet clinic nearby?",
              explanation: "seems a little off 比 not feeling well 更口语化。vet clinic 比 animal hospital 更常用。",
            },
            formalityVariants: {
              casual: "Thanks! Also, my dog's acting kinda weird today. Know a vet nearby?",
              standard: "Thanks for understanding. My dog seems off today. Can you recommend a nearby vet clinic?",
              formal: "I greatly appreciate your understanding. On a separate matter, my dog appears somewhat unwell today. Would you happen to know of a reputable veterinary clinic in the vicinity that you could recommend?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Oh no, I hope she's okay. There's a vet clinic about 10 minutes away — Green Valley Animal Hospital. They accept walk-ins. If it's after hours, there's a 24-hour emergency vet on Oak Street. I can write down both addresses for you.",
            textZh: "哦不，希望她没事。大约10分钟车程有一家宠物诊所——Green Valley动物医院。接受直接上门。如果是下班时间，Oak Street有一家24小时急诊兽医。我可以写下两个地址给你。",
            keyPhrases: [
              { en: "accept walk-ins", zh: "接受直接上门/不需要预约" },
              { en: "24-hour emergency vet", zh: "24小时急诊兽医" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no! Green Valley Animal Hospital is about 10 minutes out — no appointment needed, just walk in. For after-hours emergencies, there's a 24/7 vet on Oak Street. Want me to jot down both?", textZh: "哦不！Green Valley动物医院开车10分钟——不用预约，直接去。下班后急诊的话，Oak Street有24/7兽医。要我写下来吗？", actionHint: "jot down = 快速写下; 24/7 = 全天候", frequency: "common" },
            ],
            casualVersion: "Hope she's alright! Green Valley vet is 10 min away — walk-ins OK. Emergency vet on Oak Street is 24/7. Want me to write it down?",
            formalityVariants: {
              casual: "Oh no! There's a vet 10 mins away, walk-ins fine. Emergency one on Oak Street, open 24/7. I'll write it down.",
              standard: "There's Green Valley Animal Hospital 10 minutes away — walk-ins accepted. For emergencies, a 24-hour vet on Oak Street. I'll write both addresses.",
              formal: "I do hope she is well. The nearest veterinary clinic is Green Valley Animal Hospital, approximately ten minutes away, which accepts patients without prior appointment. For after-hours emergencies, there is a twenty-four-hour emergency veterinary facility located on Oak Street. I would be happy to provide you with written directions to both establishments.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please write those down. Also, would it be possible to get a late checkout tomorrow? If I need to take her to the vet tonight, I might need extra time in the morning.",
            textZh: "好的，请写下来。另外，明天能延迟退房吗？如果今晚要带她去看兽医，早上可能需要更多时间。",
            culturalNote:
              "因为宠物紧急情况要求延迟退房通常会得到理解和通融。在特殊情况下酒店更愿意灵活处理。",
            casualVersion: "Yeah, write them down please. Any chance of late checkout tomorrow? Might need extra time if we hit the vet tonight.",
            commonMistake: {
              wrong: "Can I leave the hotel late tomorrow because of my dog?",
              correct: "Would it be possible to get a late checkout tomorrow?",
              explanation: "late checkout 是延迟退房的标准说法。would it be possible 比 can I 更礼貌。",
            },
            formalityVariants: {
              casual: "Write those down? And can I get a late checkout tomorrow? Vet trip might throw off my morning.",
              standard: "Please write those down. Also, could I get a late checkout tomorrow in case the vet visit runs late?",
              formal: "Yes, please do. Additionally, would it be possible to arrange a late checkout for tomorrow? Should a veterinary visit be necessary this evening, I may require additional time in the morning.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Of course — given the circumstances, I'll extend your checkout to 1 p.m. at no charge. Here are both vet addresses. And if you need anything tonight — extra towels for your dog, or anything at all — just call the front desk. We're here to help.",
            textZh: "当然——鉴于情况，免费把你的退房时间延到下午1点。这是两家兽医的地址。如果今晚需要什么——给狗的额外毛巾，或者任何东西——打前台电话就行。我们随时帮忙。",
            keyPhrases: [
              { en: "given the circumstances", zh: "鉴于情况" },
              { en: "extend your checkout", zh: "延长退房时间" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely — no charge, checkout bumped to 1 p.m. Here are the addresses. And seriously, if you need anything tonight — towels, water, whatever for your pup — ring us. Hope she feels better!", textZh: "没问题——免费，退房延到下午1点。地址在这。说真的，今晚需要什么——毛巾、水、给狗的什么都行——打电话给我们。希望她快好！", actionHint: "bumped to = 延到; ring us = 打电话给我们", frequency: "common" },
            ],
            casualVersion: "For sure — checkout's at 1 p.m., no charge. Here are the vet addresses. Call us if you need anything tonight. Hope your pup feels better!",
            formalityVariants: {
              casual: "Done — 1 p.m. checkout, free. Vet addresses here. Call us for anything. Hope she's OK!",
              standard: "Your checkout is extended to 1 p.m., no charge. Here are the vet addresses. Call if you need anything tonight.",
              formal: "Given the circumstances, I am pleased to extend your checkout to one o'clock in the afternoon at no additional charge. Here are the addresses for both veterinary facilities. Should you require anything this evening — additional towels for your dog, or any assistance whatsoever — please do not hesitate to contact the front desk. We sincerely hope your dog recovers quickly.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 客房送餐 ====================
  // ==================== 洗衣服务 ====================
  {
    id: "accommodation-laundry-service",
    category: "accommodation",
    titleZh: "洗衣服务",
    titleEn: "Laundry Service",
    description: "使用酒店洗衣服务，了解价格、取送时间和特殊衣物处理",
    otherRole: "酒店前台",
    otherRoleIcon: "👔",
    flows: [
      {
        id: "laundry-basic",
        titleZh: "基本洗衣",
        titleEn: "Basic Laundry Request",
        description: "询问洗衣服务流程、价格和取送时间",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to get some clothes laundered. How does the hotel laundry service work?",
            textZh: "你好，我需要洗几件衣服。酒店的洗衣服务是怎么运作的？",
            culturalNote:
              "酒店洗衣服务一般按件收费，房间里会有洗衣袋和价目表。也可以问有没有自助洗衣房（self-service laundry），价格便宜很多。",
            casualVersion: "Hey, I need some laundry done. How does it work here?",
            commonMistake: {
              wrong: "I want to wash my clothes in the hotel.",
              correct: "I need to get some clothes laundered.",
              explanation: "get clothes laundered 是使用洗衣服务的标准说法。wash my clothes 听起来像自己洗。",
            },
            formalityVariants: {
              casual: "Need some laundry done. How's that work?",
              standard: "I'd like to use the laundry service. How does it work?",
              formal: "Good morning. I would like to avail myself of the hotel's laundry service. Could you kindly explain the process?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Sure! There's a laundry bag and price list in your closet. Fill out the form, put your clothes in the bag, and leave it outside your door before 9 a.m. for same-day service. You'll have them back by 6 p.m.",
            textZh: "当然！衣柜里有洗衣袋和价目表。填好表格，把衣服装进袋子里，早上9点前放在门外就能当天取回。下午6点前送还。",
            keyPhrases: [
              { en: "same-day service", zh: "当天洗好取回" },
              { en: "laundry bag and price list", zh: "洗衣袋和价目表" },
            ],
            alternativeExpressions: [
              { textEn: "There's a laundry bag in the closet with a checklist. Bag it up, leave it by the door before 9, and you'll get everything back by 6 that evening.", textZh: "衣柜里有洗衣袋和清单。装好，9点前放门口，当天傍晚6点前送回来。", actionHint: "bag it up = 装进袋子; checklist = 清单", frequency: "common" },
            ],
            casualVersion: "Laundry bag's in the closet with a price list. Fill the form, bag your clothes, and leave it by the door before 9 a.m. Back by 6 p.m.",
            formalityVariants: {
              casual: "Bag's in the closet. Fill the form, leave it by 9 a.m. Back by 6.",
              standard: "You'll find a laundry bag and price list in the closet. Leave it outside by 9 a.m. for same-day return by 6 p.m.",
              formal: "Certainly. You will find a laundry bag and detailed price list within your wardrobe. Please complete the accompanying form, place your garments in the bag, and leave it outside your door prior to nine o'clock in the morning. Your items will be returned to your room by six o'clock that evening.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. How much does it cost per item? I have about five shirts and two pairs of pants.",
            textZh: "好的。每件衣服多少钱？我有大概五件衬衫和两条裤子。",
            culturalNote:
              "酒店洗衣按件计费，衬衫通常$5-10，裤子$8-12。比外面洗衣店贵很多。如果预算有限，可以问有没有 self-service laundry room。",
            casualVersion: "How much per item? Got five shirts and two pants.",
            commonMistake: {
              wrong: "How much money for one clothes?",
              correct: "How much does it cost per item?",
              explanation: "clothes 是不可数名词，不能说 one clothes。per item（每件）是询问单价的标准说法。",
            },
            formalityVariants: {
              casual: "What's it cost per piece? Five shirts, two pants.",
              standard: "How much per item? I have five shirts and two pairs of pants.",
              formal: "Could you advise me of the per-item pricing? I have approximately five shirts and two pairs of trousers to be laundered.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Shirts are $6 each and pants are $9. So for five shirts and two pants, that would be $48 before tax. We also have an express service if you need them back sooner — that's a 50% surcharge.",
            textZh: "衬衫每件6美元，裤子每条9美元。五件衬衫加两条裤子税前48美元。如果需要加急，有快洗服务——加收50%。",
            keyPhrases: [
              { en: "express service", zh: "快洗/加急服务" },
              { en: "surcharge", zh: "附加费" },
            ],
            alternativeExpressions: [
              { textEn: "Shirts are six bucks, pants are nine. That's $48 before tax. Need 'em faster? Express is 50% extra.", textZh: "衬衫六块，裤子九块。税前48美元。要更快？加急多50%。", actionHint: "bucks = 美元（口语）", frequency: "common" },
            ],
            casualVersion: "Shirts $6, pants $9. Total's $48 before tax. Express is 50% more if you need them faster.",
            formalityVariants: {
              casual: "Six bucks a shirt, nine for pants. Forty-eight total. Express is half again on top.",
              standard: "Shirts are $6, pants $9. Total is $48 before tax. Express service adds 50%.",
              formal: "The rate is six dollars per shirt and nine dollars per pair of trousers. Your total would come to forty-eight dollars before applicable taxes. Should you require expedited service, a fifty percent surcharge applies.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll go with the regular service, no rush. Is there a self-service laundry room in the hotel as well?",
            textZh: "我选普通服务就行，不急。酒店里有自助洗衣房吗？",
            culturalNote:
              "很多酒店（特别是长住型和经济型）有 self-service laundry room，投币或刷房卡使用，比酒店洗衣服务便宜得多。",
            casualVersion: "Regular's fine. Do you guys have a self-service laundry room too?",
            commonMistake: {
              wrong: "Is there a place I can wash clothes myself?",
              correct: "Is there a self-service laundry room?",
              explanation: "self-service laundry room 是自助洗衣房的标准说法。coin-operated laundry 也常用。",
            },
            formalityVariants: {
              casual: "Regular's good. Got a laundry room I can use myself?",
              standard: "Regular service is fine. Is there also a self-service laundry room?",
              formal: "The standard service will suffice, thank you. Might I also inquire whether the hotel provides a self-service laundry facility?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Yes, there's a coin-operated laundry room on the second floor near the ice machine. Washers are $3 and dryers are $2 per load. Detergent pods are available from the vending machine next to it for $1.",
            textZh: "有的，二楼制冰机旁边有一个投币洗衣房。洗衣机每次3美元，烘干机每次2美元。旁边自动贩卖机有洗衣液胶囊，1美元一个。",
            keyPhrases: [
              { en: "coin-operated laundry room", zh: "投币洗衣房" },
              { en: "detergent pods", zh: "洗衣液胶囊" },
            ],
            alternativeExpressions: [
              { textEn: "Yep — second floor by the ice machine. Three bucks to wash, two to dry. Soap pods are a dollar from the vending machine right there.", textZh: "有——二楼制冰机旁边。洗3块，烘2块。洗衣球旁边贩卖机一块钱。", actionHint: "soap pods = 洗衣球/洗衣胶囊", frequency: "common" },
            ],
            casualVersion: "Yeah, second floor by the ice machine. Wash is $3, dry is $2. Detergent pods are $1 from the vending machine.",
            formalityVariants: {
              casual: "Second floor by the ice machine. Three bucks to wash, two to dry. Soap's a dollar.",
              standard: "There's a laundry room on the second floor. Washers $3, dryers $2, and detergent pods $1.",
              formal: "Indeed, a coin-operated laundry facility is located on the second floor, adjacent to the ice machine. The washing machines operate at three dollars per load, and dryers at two dollars. Single-use detergent pods may be purchased from the neighboring vending machine for one dollar each.",
            },
          },
        ],
      },
      {
        id: "laundry-intermediate",
        titleZh: "特殊衣物与加急处理",
        titleEn: "Special Garments & Rush Service",
        description: "处理需要干洗、熨烫的特殊衣物和加急需求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have a silk dress and a wool suit that need special care. Can the hotel handle dry cleaning, or do you send it out?",
            textZh: "我有一件丝绸裙子和一套羊毛西装需要特殊处理。酒店能干洗吗，还是送到外面去？",
            culturalNote:
              "高端酒店通常有自己的干洗设施，普通酒店会外包给专业干洗店。外包可能需要更长时间（24-48小时）。silk 和 wool 属于 delicate fabrics，需要干洗。",
            casualVersion: "Got a silk dress and a wool suit — need dry cleaning. Do you do that here or send it out?",
            commonMistake: {
              wrong: "Can you clean my special clothes with chemicals?",
              correct: "Can the hotel handle dry cleaning?",
              explanation: "dry cleaning 是干洗的标准说法。不需要解释干洗的原理。",
            },
            formalityVariants: {
              casual: "I've got a silk dress and wool suit. Can you dry-clean them here?",
              standard: "I have a silk dress and wool suit for dry cleaning. Is that done on-site or outsourced?",
              formal: "I have a silk dress and a wool suit requiring professional dry cleaning. Does the hotel operate its own dry-cleaning facility, or are such items sent to an external service provider?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "We partner with a professional dry cleaner nearby. Silk dresses are $18 and wool suits are $25. Turnaround is 24 hours. We inspect every item before and after, and they're returned on hangers with garment bags.",
            textZh: "我们与附近一家专业干洗店合作。丝绸裙子18美元，羊毛西装25美元。24小时取回。每件衣物送洗前后都会检查，送回时会挂在衣架上套上防尘袋。",
            keyPhrases: [
              { en: "turnaround is 24 hours", zh: "24小时内完成" },
              { en: "garment bags", zh: "防尘袋" },
            ],
            alternativeExpressions: [
              { textEn: "We use a pro dry cleaner down the road. Eighteen for the dress, twenty-five for the suit. Back in 24 hours, inspected and bagged on hangers.", textZh: "我们用附近一家专业干洗店。裙子18，西装25。24小时取回，检查后挂好套袋。", actionHint: "pro = professional 的缩写; bagged = 套上袋子", frequency: "common" },
            ],
            casualVersion: "We use a dry cleaner nearby. $18 for the dress, $25 for the suit. Back in 24 hours, on hangers with garment bags.",
            formalityVariants: {
              casual: "Pro dry cleaner nearby. Eighteen for the dress, twenty-five for the suit. Back tomorrow.",
              standard: "We partner with a professional dry cleaner. $18 for silk, $25 for wool suits. 24-hour turnaround, returned on hangers.",
              formal: "We maintain a partnership with a reputable professional dry-cleaning establishment nearby. The silk dress would be eighteen dollars and the wool suit twenty-five dollars. The turnaround time is twenty-four hours. Each garment is thoroughly inspected prior to and following cleaning, and will be returned on proper hangers within protective garment bags.",
            },
          },
          {
            speaker: "you",
            textEn: "The suit actually has a small stain on the lapel. Can they treat that, or should I point it out specifically?",
            textZh: "西装翻领上有个小污渍。他们能处理吗，还是我需要特别指出来？",
            culturalNote:
              "送干洗时指出污渍位置很重要，这样干洗店会做预处理（pre-treat）。不指出的话可能按常规处理，污渍不一定能完全去除。",
            casualVersion: "There's a stain on the suit's lapel. Should I point it out?",
            commonMistake: {
              wrong: "The suit has dirty on the collar part.",
              correct: "The suit has a small stain on the lapel.",
              explanation: "stain 是污渍（名词），dirty 是形容词不能这样用。lapel 是西装翻领，collar 是衬衫领子。",
            },
            formalityVariants: {
              casual: "There's a stain on the lapel. Should I tell them?",
              standard: "There's a stain on the lapel. Should I point it out to them specifically?",
              formal: "I should mention that there is a small stain on the suit's lapel. Would it be advisable to indicate this specifically, or will they identify and treat it as part of their standard process?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Definitely point it out — I'll note it on the form for you. They'll pre-treat the stain before cleaning. If it doesn't come out completely, they'll let us know and won't charge for that service. Do you know what the stain is from?",
            textZh: "一定要指出来——我会在表格上帮您备注。他们会在清洗前预处理污渍。如果没完全洗掉，会通知我们并且不收那项费用。您知道污渍是什么吗？",
            keyPhrases: [
              { en: "pre-treat the stain", zh: "预处理污渍" },
              { en: "note it on the form", zh: "在表格上备注" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, always flag stains. I'll mark it on the slip. They'll spot-treat it first. If it won't budge, no charge for the attempt. Any idea what caused it?", textZh: "是的，污渍一定要标出来。我在单子上标一下。他们会先做局部处理。洗不掉的话不收费。知道是什么弄的吗？", actionHint: "spot-treat = 局部处理; won't budge = 洗不掉", frequency: "common" },
            ],
            casualVersion: "Yes, always point out stains. I'll note it down. They'll pre-treat it. If it won't come out, no charge. Know what it is?",
            formalityVariants: {
              casual: "Yeah, flag it. I'll note it. They'll treat it first. No charge if it doesn't come out. Know what it's from?",
              standard: "Please do point it out. I'll note it on the form. They'll pre-treat it, and if unsuccessful, there's no charge.",
              formal: "I would strongly recommend identifying the stain. I shall make a detailed notation on the service form. The cleaners will apply a pre-treatment to the affected area before proceeding. Should the stain prove resistant to removal, you will not be charged for the treatment attempt. May I ask if you are aware of the stain's origin?",
            },
          },
          {
            speaker: "you",
            textEn: "I think it's red wine. Also, I need the suit back by tomorrow morning — I have a conference. Is express dry cleaning possible?",
            textZh: "应该是红酒渍。另外，我明天早上有会议，需要西装提前拿回来。可以加急干洗吗？",
            culturalNote:
              "红酒渍是干洗店最常处理的污渍之一。express/rush service（加急服务）通常加收50-100%费用。如果是重要场合的衣服，建议提前说明用途。",
            casualVersion: "Pretty sure it's red wine. I need the suit by tomorrow morning though — got a conference. Can you rush it?",
            commonMistake: {
              wrong: "Can you make the dry clean faster?",
              correct: "Is express dry cleaning possible?",
              explanation: "express 或 rush 表示加急。dry cleaning 是名词，不能说 make it faster。",
            },
            formalityVariants: {
              casual: "Red wine, I think. Need it back by tomorrow morning — conference. Can you rush it?",
              standard: "I believe it's red wine. I need the suit by tomorrow morning for a conference. Is express service available?",
              formal: "I believe the stain is red wine. I have a conference tomorrow morning and require the suit by then. Would it be possible to arrange express dry-cleaning service?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Red wine is very treatable. Yes, we offer express dry cleaning — there's a 75% surcharge, so the suit would be $43.75. We can have it back by 7 a.m. tomorrow, pressed and ready to wear. Shall I arrange that?",
            textZh: "红酒渍很好处理。是的，我们有加急干洗——加收75%，西装是43.75美元。明早7点前送回，熨好可以直接穿。需要安排吗？",
            keyPhrases: [
              { en: "pressed and ready to wear", zh: "熨好可以直接穿" },
              { en: "treatable", zh: "可处理的/好去除的" },
            ],
            alternativeExpressions: [
              { textEn: "Red wine? No problem, that comes out. Express is 75% extra — so $43.75 for the suit. Back by 7 a.m., pressed and good to go. Want me to set it up?", textZh: "红酒？没问题，洗得掉。加急多75%——西装43.75美元。明早7点前送到，熨好穿就行。要我安排吗？", actionHint: "good to go = 准备好了; comes out = 洗得掉", frequency: "common" },
            ],
            casualVersion: "Red wine comes out easy. Express is 75% extra — $43.75 for the suit. Back by 7 a.m., pressed and ready. Want me to set it up?",
            formalityVariants: {
              casual: "Red wine? Easy. Express adds 75% — $43.75. Back by 7 a.m., pressed. Want me to book it?",
              standard: "Red wine is treatable. Express adds 75%, so $43.75. Suit back by 7 a.m., pressed and ready.",
              formal: "Red wine stains are quite treatable with professional methods. Our express dry-cleaning service carries a seventy-five percent surcharge, bringing the suit total to forty-three dollars and seventy-five cents. I can guarantee delivery to your room by seven o'clock tomorrow morning, fully pressed and ready to wear. Shall I proceed with the arrangement?",
            },
          },
        ],
      },
    ],
  },

  // ==================== 接驳车服务 ====================
  {
    id: "accommodation-shuttle-service",
    category: "accommodation",
    titleZh: "接驳车服务",
    titleEn: "Shuttle Service",
    description: "预约酒店往返机场、景点或市中心的接驳车服务",
    otherRole: "酒店前台",
    otherRoleIcon: "🚌",
    flows: [
      {
        id: "shuttle-basic",
        titleZh: "机场接驳车",
        titleEn: "Airport Shuttle",
        description: "预约酒店到机场的免费或付费接驳车",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, does the hotel offer a shuttle to the airport? My flight is at 2 p.m. tomorrow.",
            textZh: "你好，酒店有到机场的接驳车吗？我明天下午2点的航班。",
            culturalNote:
              "很多酒店提供免费机场接驳车（complimentary airport shuttle），通常按固定时刻表运行。提前预约很重要，尤其是旺季。",
            casualVersion: "Hey, do you have an airport shuttle? My flight's at 2 p.m. tomorrow.",
            commonMistake: {
              wrong: "Does the hotel have a bus to airport?",
              correct: "Does the hotel offer a shuttle to the airport?",
              explanation: "shuttle 是接驳车的标准说法，比 bus 更准确。酒店接驳车不是公共汽车。",
            },
            formalityVariants: {
              casual: "Got an airport shuttle? Flight's at 2 tomorrow.",
              standard: "Does the hotel offer an airport shuttle? My flight is at 2 p.m. tomorrow.",
              formal: "Good evening. I was wondering whether the hotel provides a shuttle service to the airport. My flight departs at two o'clock tomorrow afternoon.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Yes, we have a complimentary airport shuttle that departs every hour on the hour. For a 2 p.m. flight, I'd recommend the 11 a.m. shuttle to give you plenty of time for check-in and security.",
            textZh: "有的，我们有免费机场接驳车，每整点发车。2点的航班建议坐11点的车，这样有充足时间办值机和过安检。",
            keyPhrases: [
              { en: "complimentary shuttle", zh: "免费接驳车" },
              { en: "departs every hour on the hour", zh: "每整点发车" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, free shuttle to the airport — leaves every hour on the dot. For a 2 p.m. flight, catch the 11 o'clock one so you've got time for check-in and security.", textZh: "有，免费机场接驳——每整点准时出发。2点航班坐11点那班，留够值机和安检时间。", actionHint: "on the dot = 准时; catch the shuttle = 赶上接驳车", frequency: "common" },
            ],
            casualVersion: "Yep, free shuttle every hour. For a 2 p.m. flight, take the 11 o'clock one — plenty of time.",
            formalityVariants: {
              casual: "Free shuttle, every hour. Take the 11 o'clock for a 2 p.m. flight.",
              standard: "We offer a complimentary shuttle departing on the hour. I'd suggest the 11 a.m. departure for your 2 p.m. flight.",
              formal: "Indeed, the hotel provides a complimentary airport shuttle service departing on every hour. For a two o'clock flight, I would recommend the eleven o'clock departure to ensure ample time for check-in and security procedures.",
            },
          },
          {
            speaker: "you",
            textEn: "The 11 a.m. shuttle sounds perfect. Do I need to book it in advance, or can I just show up at the lobby?",
            textZh: "11点的车正好。需要提前预约吗，还是直接到大堂就行？",
            culturalNote:
              "酒店接驳车通常建议提前预约（reserve/book in advance），特别是早高峰和节假日，座位有限可能坐不上。",
            casualVersion: "11 a.m. works. Do I need to book, or just show up?",
            commonMistake: {
              wrong: "Should I reserve or just go to the hall?",
              correct: "Do I need to book in advance, or can I just show up at the lobby?",
              explanation: "酒店大堂是 lobby，不是 hall。show up 表示直接到场。book in advance 是提前预约。",
            },
            formalityVariants: {
              casual: "11 works. Book it or just show up?",
              standard: "The 11 a.m. shuttle is perfect. Do I need to reserve a spot?",
              formal: "The eleven o'clock shuttle would be ideal. Is an advance reservation required, or may I simply present myself in the lobby at the designated time?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I'd recommend booking — the shuttle seats 14 and it fills up fast, especially on weekday mornings. I can put you down for the 11 a.m. right now. How many passengers?",
            textZh: "建议预约——车上只有14个座位，特别是工作日早上很快就满了。我现在就帮您登记11点的。几位乘客？",
            keyPhrases: [
              { en: "put you down for", zh: "帮您登记/预约" },
              { en: "fills up fast", zh: "很快就满了" },
            ],
            alternativeExpressions: [
              { textEn: "Better to book — only 14 seats and they go quick in the morning. I'll slot you in for 11. How many people?", textZh: "最好预约——只有14个座位，早上很快就没了。我帮你排11点的。几个人？", actionHint: "slot you in = 给你安排位置; go quick = 很快就没了", frequency: "common" },
            ],
            casualVersion: "Better to book — 14 seats and it fills up. I'll put you down for 11. How many?",
            formalityVariants: {
              casual: "Book it — only 14 spots. I'll put you on the 11. How many?",
              standard: "I'd recommend booking. The shuttle seats 14 and fills quickly. How many passengers for the 11 a.m.?",
              formal: "I would strongly advise making a reservation, as the shuttle accommodates only fourteen passengers and availability is quickly exhausted, particularly on weekday mornings. I can register you for the eleven o'clock departure immediately. How many passengers will there be?",
            },
          },
          {
            speaker: "you",
            textEn: "Just me. And I have two large suitcases — is there enough luggage space on the shuttle?",
            textZh: "就我一个人。我有两个大行李箱——接驳车上行李空间够吗？",
            culturalNote:
              "酒店接驳车通常是中巴车，有一定行李空间但不是无限的。大件行李多的话建议提前说明，方便司机安排。",
            casualVersion: "Just me. Got two big suitcases though — enough room on the shuttle?",
            commonMistake: {
              wrong: "Is there place for my bags?",
              correct: "Is there enough luggage space on the shuttle?",
              explanation: "luggage space 是行李空间的标准说法。place 太笼统，不够具体。",
            },
            formalityVariants: {
              casual: "Just one. Two big bags though — room for those?",
              standard: "One passenger. I have two large suitcases — is there enough luggage space?",
              formal: "It will be just myself. I do have two rather large suitcases, however. Would there be sufficient luggage capacity on the shuttle to accommodate them?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "One passenger, noted. Two suitcases is no problem — the shuttle has a luggage compartment underneath. Just be in the lobby by 10:50 a.m. The driver will help load your bags. You're all set!",
            textZh: "一位乘客，记下了。两个行李箱没问题——接驳车下面有行李舱。10点50分到大堂就行。司机会帮您搬行李。搞定了！",
            keyPhrases: [
              { en: "luggage compartment", zh: "行李舱" },
              { en: "you're all set", zh: "您都安排好了" },
            ],
            alternativeExpressions: [
              { textEn: "Got it — one person, 11 a.m. Two bags, no worries, there's storage underneath. Show up by 10:50 and the driver'll grab your bags. You're good to go!", textZh: "收到——一位，11点。两个包没问题，下面有储物空间。10:50到就行，司机会帮你拿行李。搞定！", actionHint: "grab your bags = 帮你拿行李; good to go = 没问题了", frequency: "common" },
            ],
            casualVersion: "One person, got it. Two bags are fine — storage underneath. Be there by 10:50, driver'll help with the bags. All set!",
            formalityVariants: {
              casual: "Done — one person, 11 a.m. Two bags, no problem. Be in the lobby by 10:50.",
              standard: "One passenger booked for 11 a.m. Two suitcases are fine. Please arrive by 10:50. The driver will assist with luggage.",
              formal: "I have registered one passenger for the eleven o'clock departure. Two large suitcases will be perfectly accommodated in the shuttle's dedicated luggage compartment. I would kindly request that you arrive in the lobby by ten-fifty. Our driver will be pleased to assist with loading your luggage. Everything is arranged for you.",
            },
          },
        ],
      },
      {
        id: "shuttle-intermediate",
        titleZh: "景点与市区接驳",
        titleEn: "Attractions & City Shuttle",
        description: "询问往返景点或市中心的付费接驳服务和替代交通",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Besides the airport shuttle, does the hotel run any shuttles to the city center or popular tourist spots?",
            textZh: "除了机场接驳车，酒店有到市中心或热门景点的接驳车吗？",
            culturalNote:
              "度假酒店和郊区酒店经常提供定时接驳车到市中心或购物区。有些是免费的，有些收取少量费用。也有些酒店提供按需的私人接送服务。",
            casualVersion: "Any shuttles to downtown or tourist spots besides the airport one?",
            commonMistake: {
              wrong: "Do you have bus to go to city and famous places?",
              correct: "Does the hotel run shuttles to the city center or tourist spots?",
              explanation: "run a shuttle 是运营接驳车的标准说法。tourist spots 比 famous places 更地道。",
            },
            formalityVariants: {
              casual: "Got any shuttles to downtown or tourist stuff?",
              standard: "Are there shuttles to the city center or tourist attractions?",
              formal: "In addition to the airport shuttle, does the hotel operate any scheduled shuttle services to the city center or principal tourist attractions?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "We run a free shuttle to the downtown shopping district — it leaves at 10 a.m. and 2 p.m. with return trips at 4 p.m. and 8 p.m. For specific attractions, we offer a private car service starting at $35 one way.",
            textZh: "我们有免费接驳车到市中心商业区——上午10点和下午2点出发，回程是下午4点和晚上8点。去特定景点的话，有私人接送服务，单程35美元起。",
            keyPhrases: [
              { en: "return trips", zh: "回程" },
              { en: "private car service", zh: "私人接送服务" },
            ],
            alternativeExpressions: [
              { textEn: "Free shuttle to the shopping area — goes at 10 and 2, comes back at 4 and 8. If you need a ride to a specific spot, we've got private cars from $35 each way.", textZh: "免费接驳到购物区——10点和2点走，4点和8点回。去特定地方的话，私人车35美元起。", actionHint: "each way = 单程; ride = 搭车", frequency: "common" },
            ],
            casualVersion: "Free shuttle to downtown at 10 and 2, returns at 4 and 8. Private car to specific places from $35 one way.",
            formalityVariants: {
              casual: "Free shuttle downtown — 10 and 2, back at 4 and 8. Private car from $35.",
              standard: "Free shuttle to downtown at 10 a.m. and 2 p.m., returning at 4 and 8 p.m. Private car service from $35 one way.",
              formal: "We provide a complimentary shuttle to the downtown shopping district with departures at ten in the morning and two in the afternoon, and return services at four and eight in the evening. For transportation to specific attractions, our private car service is available commencing at thirty-five dollars per journey.",
            },
          },
          {
            speaker: "you",
            textEn: "What if I miss the last return shuttle at 8 p.m.? Are there other ways to get back to the hotel?",
            textZh: "如果错过晚上8点最后一班回程怎么办？还有其他方式回酒店吗？",
            culturalNote:
              "酒店通常可以帮忙叫出租车或推荐打车软件。在国外 Uber 和 Lyft 是最常用的打车方式。有些酒店也提供付费的 on-demand 接送。",
            casualVersion: "What if I miss the 8 p.m. shuttle? How do I get back?",
            commonMistake: {
              wrong: "If I can't catch the last bus, how to come back?",
              correct: "What if I miss the last return shuttle? Are there other ways to get back?",
              explanation: "miss the shuttle 表示错过接驳车。how to come back 不完整，应该说 how do I get back 或 are there other ways。",
            },
            formalityVariants: {
              casual: "What if I miss the 8 p.m. one? How do I get back?",
              standard: "If I miss the last shuttle, what are my options for getting back?",
              formal: "In the event that I am unable to make the final return shuttle at eight o'clock, could you advise on alternative transportation options back to the hotel?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "No worries — you can take an Uber or Lyft, which usually runs about $15 from downtown. Or call us and we can arrange a hotel car for $30. The front desk is staffed 24 hours, so don't hesitate to call.",
            textZh: "不用担心——可以用 Uber 或 Lyft，从市中心过来大约15美元。或者打电话给我们，可以安排酒店专车30美元。前台24小时有人，随时打电话。",
            keyPhrases: [
              { en: "arrange a hotel car", zh: "安排酒店专车" },
              { en: "staffed 24 hours", zh: "24小时有人值班" },
            ],
            alternativeExpressions: [
              { textEn: "No problem — grab an Uber or Lyft, about fifteen bucks from downtown. Or ring the front desk and we'll send a car for thirty. We're here round the clock.", textZh: "没问题——打个 Uber 或 Lyft，从市中心大约15块。或打前台电话，我们派车30块。我们全天候在。", actionHint: "round the clock = 24小时全天候", frequency: "common" },
            ],
            casualVersion: "No problem — Uber's about $15. Or call us, we'll send a car for $30. Front desk is 24/7.",
            formalityVariants: {
              casual: "Just Uber it — about fifteen bucks. Or call us, we'll send a car. We're here 24/7.",
              standard: "Uber or Lyft costs about $15. Or call us for a hotel car at $30. Front desk is open 24 hours.",
              formal: "There is no cause for concern. Ride-sharing services such as Uber or Lyft typically cost approximately fifteen dollars from the downtown area. Alternatively, you may contact our front desk, and we shall arrange a hotel car for thirty dollars. Please be assured that our front desk is staffed around the clock and we are always happy to assist.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. Can I also book a round-trip shuttle to the national park for Saturday? We're a group of four.",
            textZh: "好的。我能预约周六去国家公园的往返接驳吗？我们一行四人。",
            culturalNote:
              "团体包车（group charter）通常比单独打车划算。问清楚是否按人收费还是按车收费，以及等待时间是否另收。",
            casualVersion: "Can I book a round-trip to the national park for Saturday? Four of us.",
            commonMistake: {
              wrong: "I want to go to national park and come back on Saturday with four people.",
              correct: "Can I book a round-trip shuttle to the national park for Saturday? We're a group of four.",
              explanation: "round-trip 表示往返。group of four 比 four people 更自然。book 表示预约。",
            },
            formalityVariants: {
              casual: "Can we book a round-trip to the national park Saturday? Four people.",
              standard: "Could I arrange a round-trip shuttle to the national park for four people this Saturday?",
              formal: "Would it be possible to arrange a round-trip shuttle service to the national park for this Saturday? Our party consists of four guests.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Absolutely! For four guests, I'd suggest our private SUV — it's $80 round trip, and the driver will wait for you at the park. You choose the pickup and return times. Much more flexible than a shared shuttle. Shall I book it?",
            textZh: "当然可以！四位客人的话，建议用我们的私人SUV——往返80美元，司机会在公园等您。出发和返回时间您来定。比拼车灵活很多。需要预约吗？",
            keyPhrases: [
              { en: "round trip", zh: "往返" },
              { en: "the driver will wait", zh: "司机会等候" },
            ],
            alternativeExpressions: [
              { textEn: "For four people, go with the private SUV — eighty bucks round trip, driver waits at the park, and you pick the times. Way better than the shared van. Want me to lock it in?", textZh: "四个人的话选私人SUV——往返80块，司机在公园等，时间你定。比拼车好多了。要我定下来吗？", actionHint: "lock it in = 确定下来/预订", frequency: "common" },
            ],
            casualVersion: "For four, take our private SUV — $80 round trip, driver waits, you pick the times. Way better than a shared shuttle. Want me to book it?",
            formalityVariants: {
              casual: "Private SUV — 80 bucks, driver waits, you pick times. Done?",
              standard: "A private SUV is $80 round trip for four. Driver waits at the park, flexible timing. Shall I book it?",
              formal: "For a party of four, I would recommend our private SUV service at eighty dollars for the round trip. The driver will remain at the park for the duration of your visit, and departure and return times are entirely at your discretion. This offers considerably more flexibility than a shared shuttle. Shall I proceed with the reservation?",
            },
          },
        ],
      },
    ],
  },

  // ==================== 礼宾服务 ====================
  {
    id: "accommodation-concierge",
    category: "accommodation",
    titleZh: "礼宾服务",
    titleEn: "Concierge Service",
    description: "向酒店礼宾咨询餐厅推荐、景点门票和当地活动",
    otherRole: "酒店礼宾",
    otherRoleIcon: "🔑",
    flows: [
      {
        id: "concierge-basic",
        titleZh: "餐厅推荐",
        titleEn: "Restaurant Recommendations",
        description: "请礼宾推荐附近餐厅并帮忙预订",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, could you recommend a good restaurant nearby for dinner tonight? Preferably somewhere with local cuisine.",
            textZh: "你好，能推荐一家附近不错的晚餐餐厅吗？最好有当地特色菜的。",
            culturalNote:
              "concierge（礼宾）是高级酒店提供的专属服务，帮客人安排餐厅、演出、交通等。问他们推荐餐厅时，可以说明预算、菜系偏好和人数。",
            casualVersion: "Can you recommend a good spot for dinner tonight? Something local.",
            commonMistake: {
              wrong: "Where should I eat tonight?",
              correct: "Could you recommend a good restaurant nearby for dinner?",
              explanation: "向礼宾咨询时，用 recommend 比 where should I eat 更礼貌。加上 nearby 和时间（tonight）更明确。",
            },
            formalityVariants: {
              casual: "Know any good dinner spots nearby? Looking for local food.",
              standard: "Could you recommend a nearby restaurant for dinner tonight, preferably local cuisine?",
              formal: "Good afternoon. I was hoping you might recommend an excellent restaurant in the vicinity for dinner this evening, ideally one that specializes in local cuisine.",
            },
          },
          {
            speaker: "them",
            role: "酒店礼宾",
            textEn: "I'd highly recommend La Mesa — it's a ten-minute walk from here and specializes in farm-to-table local dishes. Very popular with both locals and visitors. Would you like me to make a reservation?",
            textZh: "强烈推荐 La Mesa——步行十分钟，主打农场到餐桌的本地菜。本地人和游客都很喜欢。需要我帮您订位吗？",
            keyPhrases: [
              { en: "farm-to-table", zh: "农场到餐桌" },
              { en: "make a reservation", zh: "预订/订位" },
            ],
            alternativeExpressions: [
              { textEn: "Try La Mesa — ten-minute walk, great farm-to-table stuff, super popular. Want me to book you a table?", textZh: "试试 La Mesa——走十分钟，很棒的农场到餐桌菜，超受欢迎。要我帮你订桌吗？", actionHint: "book you a table = 帮你订桌", frequency: "common" },
            ],
            casualVersion: "La Mesa is great — ten-minute walk, farm-to-table, locals love it. Want me to book a table?",
            formalityVariants: {
              casual: "La Mesa — ten minutes away, awesome local food. Book it?",
              standard: "I'd recommend La Mesa, a ten-minute walk. Farm-to-table local cuisine, very popular. Shall I reserve a table?",
              formal: "I would highly recommend La Mesa, an acclaimed restaurant approximately ten minutes on foot from the hotel. They specialize in farm-to-table preparations featuring locally sourced ingredients, and the establishment is very well regarded by both residents and visitors alike. Shall I arrange a reservation on your behalf?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please — a table for two at 7:30 p.m. Also, is there a dress code I should know about?",
            textZh: "好的，请帮我订两人桌，7:30。另外，有什么着装要求吗？",
            culturalNote:
              "很多中高档餐厅有 dress code（着装要求）。常见的有 smart casual（休闲正装）、business casual（商务休闲）和 formal（正装）。穿拖鞋和短裤通常不被允许。",
            casualVersion: "Sure — table for two at 7:30. Any dress code?",
            commonMistake: {
              wrong: "What clothes should I wear to the restaurant?",
              correct: "Is there a dress code I should know about?",
              explanation: "dress code 是着装要求的固定说法。比问 what clothes 更地道。",
            },
            formalityVariants: {
              casual: "Yeah, two at 7:30. Dress code?",
              standard: "A table for two at 7:30, please. Is there a dress code?",
              formal: "That would be wonderful — a table for two at half past seven, if possible. Might I also inquire whether the restaurant observes a particular dress code?",
            },
          },
          {
            speaker: "them",
            role: "酒店礼宾",
            textEn: "It's smart casual — no shorts or flip-flops, but you don't need a jacket or tie. I'll call right now and confirm. Is the reservation under your name?",
            textZh: "着装要求是 smart casual——不能穿短裤和拖鞋，但不需要西装外套或领带。我现在就打电话确认。订位用您的名字吗？",
            keyPhrases: [
              { en: "smart casual", zh: "休闲正装" },
              { en: "under your name", zh: "用您的名字" },
            ],
            alternativeExpressions: [
              { textEn: "Smart casual — skip the shorts and flip-flops, but no need for a suit. Let me call them now. What name for the reservation?", textZh: "休闲正装——别穿短裤拖鞋，但不用穿西装。我现在打电话。订位用什么名字？", actionHint: "skip = 不要穿", frequency: "common" },
            ],
            casualVersion: "Smart casual — no shorts or flip-flops, but no suit needed. I'll call now. What name?",
            formalityVariants: {
              casual: "Smart casual — no shorts. I'll call. What name?",
              standard: "The dress code is smart casual. I'll confirm the reservation now. Under what name?",
              formal: "The restaurant adheres to a smart casual dress code — shorts and open-toed sandals are not permitted, though a formal jacket and tie are not required. I shall telephone the restaurant immediately to confirm availability. Under which name shall I place the reservation?",
            },
          },
          {
            speaker: "you",
            textEn: "Under Chen, please. Could you also let them know it's our anniversary? It would be nice to have a special table if possible.",
            textZh: "Chen。能告诉他们这是我们的结婚纪念日吗？如果可以的话，安排一个特别的位置就好了。",
            culturalNote:
              "在国外告诉餐厅是特殊场合（anniversary、birthday）通常会得到额外关照，比如更好的位置、免费甜点或装饰。礼宾帮忙传达更有效。",
            casualVersion: "Chen. Oh, and it's our anniversary — any chance of a nice table?",
            commonMistake: {
              wrong: "Tell them today is our marry day.",
              correct: "Could you let them know it's our anniversary?",
              explanation: "anniversary 是纪念日的标准说法。marry day 不是英语表达。let them know 比 tell them 更委婉。",
            },
            formalityVariants: {
              casual: "Chen. It's our anniversary — can you ask for a good table?",
              standard: "Under Chen, please. Could you mention it's our anniversary? A special table would be lovely.",
              formal: "Under the name Chen, please. I wonder if you might also inform the restaurant that we are celebrating our wedding anniversary this evening. A table with a pleasant ambiance would be greatly appreciated.",
            },
          },
          {
            speaker: "them",
            role: "酒店礼宾",
            textEn: "Happy anniversary! I'll request a window table with a view for you and mention the occasion. They often prepare a little complimentary dessert for celebrations. I'll text you a confirmation once it's booked.",
            textZh: "结婚纪念日快乐！我会帮您要一个靠窗有景观的位置，并告知是庆祝场合。他们通常会为庆祝准备一份免费甜点。订好后我会发短信确认。",
            keyPhrases: [
              { en: "window table with a view", zh: "靠窗有景观的位置" },
              { en: "complimentary dessert", zh: "免费甜点" },
            ],
            alternativeExpressions: [
              { textEn: "Congrats! I'll ask for a nice window seat and let them know it's your anniversary. They usually do a free dessert for special occasions. I'll shoot you a text once it's confirmed.", textZh: "恭喜！我帮你要靠窗好位置，告诉他们是纪念日。特殊场合通常有免费甜点。确认后给你发消息。", actionHint: "shoot you a text = 给你发条短信", frequency: "common" },
            ],
            casualVersion: "Congrats! I'll ask for a window table and mention the anniversary. They usually do a free dessert. I'll text you once it's confirmed.",
            formalityVariants: {
              casual: "Happy anniversary! Window table, I'll mention it. They'll probably do a free dessert. I'll text you.",
              standard: "Happy anniversary! I'll request a window table and note the occasion. Expect a confirmation text shortly.",
              formal: "Many congratulations on your anniversary. I shall request a window table with an excellent view and inform the restaurant of the celebratory occasion. They frequently offer a complimentary dessert for such events. I will send you a text message with the confirmed reservation details momentarily.",
            },
          },
        ],
      },
      {
        id: "concierge-intermediate",
        titleZh: "景点与活动安排",
        titleEn: "Attractions & Activities",
        description: "请礼宾帮忙安排景点门票、城市游览和当地体验活动",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We have a free day tomorrow. What are the must-see attractions around here? We're interested in history and nature.",
            textZh: "我们明天有一天自由时间。这附近有什么必去的景点？我们对历史和自然景观感兴趣。",
            culturalNote:
              "礼宾通常比网上攻略更了解本地情况，能推荐游客不太知道的隐藏景点（hidden gems）。告诉他们兴趣爱好能得到更精准的推荐。",
            casualVersion: "Free day tomorrow — what's worth seeing? We like history and nature stuff.",
            commonMistake: {
              wrong: "What famous place should I visit tomorrow?",
              correct: "What are the must-see attractions around here?",
              explanation: "must-see attractions 比 famous places 更地道。加上兴趣方向（history and nature）能得到更好的推荐。",
            },
            formalityVariants: {
              casual: "Got a free day tomorrow. What's worth checking out? We're into history and nature.",
              standard: "We have a free day tomorrow. What must-see attractions would you recommend for history and nature lovers?",
              formal: "We find ourselves with a free day tomorrow and are keen to explore the area. Might you recommend the most noteworthy attractions, particularly those of historical and natural significance?",
            },
          },
          {
            speaker: "them",
            role: "酒店礼宾",
            textEn: "For history, the Old Town district is a must — it has a walking tour at 10 a.m. that covers colonial architecture and local stories. For nature, the coastal trail at Sunset Point is stunning, about a two-hour hike. I'd suggest doing the walking tour in the morning and the hike in the afternoon.",
            textZh: "历史方面，老城区必去——上午10点有步行导览，涵盖殖民时期建筑和当地故事。自然方面，日落角的海岸步道很壮观，大约两小时的徒步。建议上午走导览，下午去徒步。",
            keyPhrases: [
              { en: "walking tour", zh: "步行导览" },
              { en: "coastal trail", zh: "海岸步道" },
            ],
            alternativeExpressions: [
              { textEn: "Old Town's a must — there's a 10 a.m. guided walk through the historic quarter. Then hit Sunset Point in the afternoon for a gorgeous two-hour coastal hike. Perfect combo.", textZh: "老城区必去——10点有历史街区导览。下午去日落角，两小时海岸徒步超美。完美组合。", actionHint: "hit = 去（口语）; combo = 组合", frequency: "common" },
            ],
            casualVersion: "Old Town walking tour at 10 a.m. for history. Then Sunset Point coastal trail in the afternoon — amazing hike. Great combo.",
            formalityVariants: {
              casual: "Old Town tour at 10, then Sunset Point hike in the afternoon. You'll love both.",
              standard: "I'd suggest the Old Town walking tour in the morning and the Sunset Point coastal trail in the afternoon.",
              formal: "For historical interest, I would strongly recommend the Old Town district, where a guided walking tour departs at ten o'clock covering colonial architecture and local heritage. For nature, the coastal trail at Sunset Point offers a truly spectacular two-hour hike. I would suggest the walking tour for the morning and the coastal hike for the afternoon.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds perfect. Do we need to buy tickets in advance for the walking tour, or can we just show up?",
            textZh: "听起来太好了。步行导览需要提前买票吗，还是直接去就行？",
            culturalNote:
              "热门导览和景点建议提前买票，特别是旺季。礼宾通常可以代购门票，有时还能拿到优惠价或 skip-the-line（免排队）票。",
            casualVersion: "Sounds great. Need tickets for the walking tour, or just show up?",
            commonMistake: {
              wrong: "Should I buy ticket before going?",
              correct: "Do we need to buy tickets in advance?",
              explanation: "in advance 是提前的标准说法。ticket 需要复数 tickets。before going 太口语化。",
            },
            formalityVariants: {
              casual: "Awesome. Need to buy tickets or just rock up?",
              standard: "Do we need tickets in advance, or can we walk in?",
              formal: "That itinerary sounds excellent. Is it necessary to purchase tickets for the walking tour in advance, or does the tour accept walk-in participants?",
            },
          },
          {
            speaker: "them",
            role: "酒店礼宾",
            textEn: "I'd recommend booking ahead — the 10 a.m. tour fills up quickly. I can book it for you right here. Tickets are $25 per person, but we have a hotel guest discount — $20 each. The hike at Sunset Point is free, no tickets needed.",
            textZh: "建议提前订——10点的导览很快就满了。我可以在这里帮您订。门票每人25美元，酒店客人有折扣——每人20美元。日落角徒步免费，不需要门票。",
            keyPhrases: [
              { en: "hotel guest discount", zh: "酒店住客折扣" },
              { en: "fills up quickly", zh: "很快就满了" },
            ],
            alternativeExpressions: [
              { textEn: "Book ahead — the morning tour sells out fast. I can grab tickets now. Twenty-five normally, but hotel guests pay twenty. Sunset Point's free — just show up.", textZh: "提前订——早上的导览很快卖完。我现在就能买。正常25，酒店客人20。日落角免费——直接去。", actionHint: "sells out = 卖完; grab tickets = 抢票/买票", frequency: "common" },
            ],
            casualVersion: "Better book — 10 a.m. tour fills fast. I can do it now. $25 normally, $20 with hotel discount. Sunset Point is free.",
            formalityVariants: {
              casual: "Book it now — morning tour sells out. Twenty bucks with our discount. Sunset Point's free.",
              standard: "I'd suggest booking ahead. I can arrange tickets at a discounted $20 per person. The coastal hike is free.",
              formal: "I would strongly recommend securing your place in advance, as the ten o'clock tour frequently reaches capacity. I can arrange tickets for you immediately. While the standard rate is twenty-five dollars per person, hotel guests enjoy a preferential rate of twenty dollars each. The Sunset Point coastal trail requires no admission fee whatsoever.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, please book two tickets for the walking tour. Are there any hidden gems in the area that most tourists miss? We like authentic local experiences.",
            textZh: "好的，请帮我订两张导览票。这附近有什么大多数游客会错过的隐藏宝藏吗？我们喜欢地道的本地体验。",
            culturalNote:
              "hidden gems（隐藏宝藏）是旅游中常用的表达，指不太为游客所知但值得一去的地方。礼宾通常最了解这些地方。",
            casualVersion: "Two tickets, please. Any hidden gems most tourists don't know about? We want the real local experience.",
            commonMistake: {
              wrong: "Is there a secret place that no tourist knows?",
              correct: "Are there any hidden gems that most tourists miss?",
              explanation: "hidden gems 是形容小众好去处的固定说法。most tourists miss 比 no tourist knows 更自然。",
            },
            formalityVariants: {
              casual: "Two tickets! Any hidden gems around here? We want the real local stuff.",
              standard: "Two tickets, please. Any hidden gems or authentic local experiences you'd recommend?",
              formal: "Two tickets, if you would be so kind. I also wonder whether you might share any lesser-known destinations in the area — hidden gems, so to speak — that offer authentic local experiences beyond the typical tourist itinerary.",
            },
          },
          {
            speaker: "them",
            role: "酒店礼宾",
            textEn: "Absolutely — there's a local fish market about fifteen minutes east that turns into an outdoor food court in the evening. Incredible seafood, live music, very few tourists. Also, the botanical garden behind the cathedral is free and almost always empty. I'll mark both on a map for you.",
            textZh: "当然——往东走15分钟有个本地鱼市场，晚上变成露天美食广场。海鲜特别好，有现场音乐，游客很少。还有，大教堂后面的植物园免费开放，几乎没人去。我帮您在地图上标出来。",
            keyPhrases: [
              { en: "hidden gems", zh: "隐藏宝藏/小众好去处" },
              { en: "mark on a map", zh: "在地图上标出来" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yeah — the fish market east of here turns into a food court at night. Amazing seafood, live music, total local vibe. And the botanical garden behind the cathedral — free, super peaceful. I'll pin them on a map for you.", textZh: "当然——东边的鱼市场晚上变美食广场。海鲜绝了，有音乐，完全本地氛围。还有教堂后面的植物园——免费，超安静。帮你标在地图上。", actionHint: "total local vibe = 完全本地氛围; pin = 标注", frequency: "common" },
            ],
            casualVersion: "The fish market east of here becomes a food court at night — amazing seafood, live music, no tourists. And the botanical garden behind the cathedral is free and empty. I'll mark them on a map.",
            formalityVariants: {
              casual: "Fish market east — food court at night, crazy good seafood. Botanical garden behind the cathedral — free, super quiet. I'll map it.",
              standard: "There's a fish market that becomes a food court in the evening — great seafood and local atmosphere. Also, the botanical garden behind the cathedral is free and uncrowded. I'll mark both on a map.",
              formal: "I would be delighted to share two personal favorites. Approximately fifteen minutes to the east, there is a local fish market that transforms into a vibrant outdoor food court each evening, featuring exceptional seafood and live music with remarkably few tourists. Additionally, the botanical garden situated behind the cathedral offers free admission and is wonderfully serene. I shall mark both locations on a map for your convenience.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 无障碍房间 ====================
  {
    id: "accommodation-accessible-room",
    category: "accommodation",
    titleZh: "无障碍房间",
    titleEn: "Accessible Room",
    description: "预订或咨询无障碍房间设施，包括轮椅通道、扶手和辅助设备",
    otherRole: "酒店前台",
    otherRoleIcon: "♿",
    flows: [
      {
        id: "accessible-room-basic",
        titleZh: "预订无障碍房间",
        titleEn: "Booking an Accessible Room",
        description: "咨询和预订无障碍房间，了解基本设施",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need an accessible room for three nights starting Friday. My mother uses a wheelchair — what do your accessible rooms include?",
            textZh: "你好，我需要一间无障碍房间，从周五开始住三晚。我母亲用轮椅——你们的无障碍房间有哪些设施？",
            culturalNote:
              "在国外预订酒店时，accessible room（无障碍房间）是标准用法。ADA-compliant 是美国的无障碍标准。预订时说明具体需求（轮椅、视觉辅助等）能确保分配合适的房间。",
            casualVersion: "I need an accessible room from Friday, three nights. Mom's in a wheelchair — what's included?",
            commonMistake: {
              wrong: "I need a room for disabled people.",
              correct: "I need an accessible room.",
              explanation: "accessible room 是无障碍房间的标准、礼貌说法。避免用 disabled people's room。",
            },
            formalityVariants: {
              casual: "Need an accessible room Friday through Sunday. Mom uses a wheelchair. What's included?",
              standard: "I'd like to book an accessible room for three nights from Friday. My mother uses a wheelchair. What amenities are included?",
              formal: "Good afternoon. I would like to reserve an accessible room for three nights commencing this Friday. My mother is a wheelchair user, and I would appreciate a detailed description of the accessibility features your rooms provide.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Of course. Our accessible rooms feature a roll-in shower with grab bars and a shower bench, a lowered bed frame, wider doorways, and a lowered closet rod. The room is on the ground floor with step-free access from the parking lot.",
            textZh: "当然。我们的无障碍房间配有无门槛淋浴间（带扶手和淋浴凳）、低床架、加宽门框和降低高度的衣柜挂杆。房间在一楼，从停车场到房间全程无台阶。",
            keyPhrases: [
              { en: "roll-in shower", zh: "无门槛淋浴间" },
              { en: "step-free access", zh: "无台阶通道" },
            ],
            alternativeExpressions: [
              { textEn: "Sure. The room has a roll-in shower with grab bars, lowered bed, wider doors, and it's on the ground floor — no steps from the lot to the room.", textZh: "当然。房间有无门槛淋浴带扶手、低床、宽门，一楼——停车场到房间没台阶。", actionHint: "the lot = 停车场（简称）", frequency: "common" },
            ],
            casualVersion: "Sure. Roll-in shower with grab bars, low bed, wide doorways, ground floor — no steps from parking to the room.",
            formalityVariants: {
              casual: "Roll-in shower, grab bars, low bed, wide doors, ground floor. No steps at all.",
              standard: "Accessible rooms include a roll-in shower with grab bars, lowered bed, wider doorways, and ground-floor step-free access.",
              formal: "Certainly. Our accessible accommodations feature a roll-in shower equipped with safety grab bars and a shower bench, a lowered bed frame for ease of transfer, widened doorways to accommodate wheelchair passage, and a lowered closet rod. The room is situated on the ground floor with completely step-free access from the parking area.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds good. Is the bathroom big enough for a wheelchair to turn around in? That's usually the issue we run into.",
            textZh: "听起来不错。卫生间空间够轮椅转身吗？这通常是我们遇到的问题。",
            culturalNote:
              "ADA 标准要求卫生间有60英寸（约150cm）的轮椅转身空间。但不是所有酒店都严格执行，特别是老建筑改造的。提前确认很重要。",
            casualVersion: "Is the bathroom big enough for a wheelchair to turn? That's always the problem.",
            commonMistake: {
              wrong: "Can the wheelchair move around in the toilet?",
              correct: "Is the bathroom big enough for a wheelchair to turn around in?",
              explanation: "bathroom 包含整个卫生间。toilet 只指马桶。turn around 表示转身/掉头。",
            },
            formalityVariants: {
              casual: "Bathroom big enough for the wheelchair to spin around? That's always an issue.",
              standard: "Is the bathroom spacious enough for a wheelchair to turn around? That's often a problem we face.",
              formal: "May I ask whether the bathroom provides sufficient space for a wheelchair to maneuver and turn? This has been a recurring concern in our experience with accessible accommodations.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Absolutely — our accessible bathrooms have a 60-inch turning radius, which meets ADA standards. There's also an emergency pull cord in the bathroom and next to the bed in case your mother needs assistance.",
            textZh: "当然——我们的无障碍卫生间有60英寸的轮椅转身空间，符合ADA标准。卫生间和床旁边还有紧急拉绳，以防您母亲需要帮助。",
            keyPhrases: [
              { en: "turning radius", zh: "转身空间/转弯半径" },
              { en: "emergency pull cord", zh: "紧急拉绳" },
            ],
            alternativeExpressions: [
              { textEn: "Yes — 60-inch turning space, fully ADA-compliant. There's also an emergency cord in the bathroom and by the bed, just in case.", textZh: "是的——60英寸转身空间，完全符合ADA。卫生间和床边都有紧急拉绳，以防万一。", actionHint: "ADA-compliant = 符合美国残障法标准", frequency: "common" },
            ],
            casualVersion: "Yes — 60-inch turning space, ADA compliant. Emergency pull cords in the bathroom and by the bed too.",
            formalityVariants: {
              casual: "Yep — plenty of room, 60-inch turning space. Emergency cords by the shower and bed.",
              standard: "Yes, the bathroom has a 60-inch turning radius, ADA compliant. Emergency pull cords are in the bathroom and by the bed.",
              formal: "Indeed. Our accessible bathrooms provide a full sixty-inch turning radius, in strict compliance with ADA accessibility standards. Additionally, emergency pull cords are installed both within the bathroom and adjacent to the bed to ensure your mother can summon assistance at any time.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. Can you also arrange a wheelchair-accessible taxi for us from the airport on Friday? We land at 3 p.m.",
            textZh: "太好了。能帮我们安排一辆无障碍出租车周五从机场来吗？我们下午3点落地。",
            culturalNote:
              "wheelchair-accessible taxi（无障碍出租车）需要提前预约，因为不是所有出租车都有轮椅坡道或升降设备。酒店礼宾通常可以帮忙安排。",
            casualVersion: "Can you also book a wheelchair-accessible taxi from the airport Friday? Landing at 3.",
            commonMistake: {
              wrong: "Can you get a taxi that can carry wheelchair?",
              correct: "Can you arrange a wheelchair-accessible taxi?",
              explanation: "wheelchair-accessible 是无障碍的标准形容词。arrange 比 get 更正式。",
            },
            formalityVariants: {
              casual: "Can you get us a wheelchair taxi from the airport Friday? We land at 3.",
              standard: "Could you arrange a wheelchair-accessible taxi from the airport on Friday? We arrive at 3 p.m.",
              formal: "Would it also be possible to arrange a wheelchair-accessible taxi to transport us from the airport on Friday? Our flight is scheduled to arrive at three o'clock in the afternoon.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I'll arrange that right away. We work with an accessible transport company — the vehicle has a ramp and tie-down straps for the wheelchair. It's $40 from the airport. I'll have the driver meet you at the arrivals pickup area. Just look for a white van with our hotel logo.",
            textZh: "我马上安排。我们合作的无障碍运输公司——车上有坡道和轮椅固定带。从机场过来40美元。我会让司机在到达接客区等您。认准白色带酒店标志的面包车就行。",
            keyPhrases: [
              { en: "ramp and tie-down straps", zh: "坡道和固定带" },
              { en: "arrivals pickup area", zh: "到达接客区" },
            ],
            alternativeExpressions: [
              { textEn: "Done. The van has a ramp and wheelchair straps — $40 from the airport. Driver'll be at arrivals in a white van with our logo. Easy to spot.", textZh: "搞定。车有坡道和轮椅固定带——机场过来40美元。司机在到达口等，白色面包车有酒店标志。很好认。", actionHint: "easy to spot = 很好认/很容易看到", frequency: "common" },
            ],
            casualVersion: "I'll set that up. The van has a ramp and wheelchair straps. $40 from the airport. Driver'll meet you at arrivals in a white van with our logo.",
            formalityVariants: {
              casual: "On it. Van with a ramp, forty bucks. Driver at arrivals, white van with our logo.",
              standard: "I'll arrange it now. Accessible van with ramp and straps, $40. Driver at arrivals in our branded white van.",
              formal: "I shall arrange that immediately. Our partner accessible transport company provides a vehicle equipped with a boarding ramp and secure tie-down straps for the wheelchair. The fare from the airport is forty dollars. I will instruct the driver to meet you at the arrivals pickup area. You will be looking for a white van displaying our hotel livery.",
            },
          },
        ],
      },
      {
        id: "accessible-room-intermediate",
        titleZh: "特殊辅助设备与服务",
        titleEn: "Special Equipment & Assistance",
        description: "请求额外辅助设备和无障碍服务的详细安排",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My mother also has low vision. Do your accessible rooms have any visual aids, like large-print materials or a magnifying lamp?",
            textZh: "我母亲还有视力问题。你们的无障碍房间有视觉辅助设施吗，比如大字印刷材料或放大灯？",
            culturalNote:
              "很多酒店为视力障碍客人提供辅助设施，包括大字体菜单、触觉标志（tactile signage）、放大镜和高对比度标识。提前告知能确保准备就绪。",
            casualVersion: "Mom also has low vision. Any visual aids in the room? Large print, magnifying lamp?",
            commonMistake: {
              wrong: "My mother can't see well. Do you have big word papers?",
              correct: "My mother has low vision. Do you have large-print materials or a magnifying lamp?",
              explanation: "low vision 是弱视的标准医学/礼貌说法。large-print materials 是大字印刷材料的标准表达。",
            },
            formalityVariants: {
              casual: "Mom's got low vision too. Any visual aids — big print stuff, magnifying lamp?",
              standard: "My mother also has low vision. Are visual aids like large-print materials or magnifying lamps available?",
              formal: "I should also mention that my mother has low vision. Do your accessible rooms provide visual accessibility aids such as large-print informational materials or a magnifying lamp?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "We can absolutely accommodate that. We'll provide large-print hotel information, a magnifying desk lamp, and a TV with closed captions enabled. We also have tactile room numbers and Braille signage in the hallways.",
            textZh: "我们完全可以安排。会提供大字体酒店资料、放大台灯和开启字幕的电视。走廊里也有触觉房号标识和盲文指示牌。",
            keyPhrases: [
              { en: "closed captions", zh: "字幕" },
              { en: "tactile room numbers", zh: "触觉房号标识" },
            ],
            alternativeExpressions: [
              { textEn: "No problem. We'll set up large-print info, a magnifying lamp, and captions on the TV. The hallways have tactile numbers and Braille signs too.", textZh: "没问题。我们会放大字资料、放大灯，电视开字幕。走廊有触觉房号和盲文标识。", actionHint: "captions on the TV = 电视字幕", frequency: "common" },
            ],
            casualVersion: "No problem. Large-print info, magnifying lamp, TV with captions. Hallways have tactile numbers and Braille too.",
            formalityVariants: {
              casual: "Sure — big print stuff, magnifying lamp, captions on TV. Braille in the hallways too.",
              standard: "We'll provide large-print materials, a magnifying lamp, and captioned TV. Hallways have tactile numbers and Braille.",
              formal: "We can most certainly accommodate those needs. We shall furnish the room with large-print hotel informational materials, a magnifying desk lamp, and a television with closed captioning enabled. Furthermore, our hallways feature tactile room number indicators and Braille signage for navigation assistance.",
            },
          },
          {
            speaker: "you",
            textEn: "That's wonderful. She also takes medication on a strict schedule. Is there a mini fridge in the room for her insulin? It needs to be kept cold.",
            textZh: "太好了。她还需要严格按时服药。房间有迷你冰箱放胰岛素吗？需要冷藏保存。",
            culturalNote:
              "酒店通常可以提供冰箱来存放药品。insulin（胰岛素）需要2-8°C冷藏。如果房间没有冰箱，前台通常可以帮忙安排一个或提供冰桶。",
            casualVersion: "She also needs a fridge for her insulin — it has to stay cold. Is there one in the room?",
            commonMistake: {
              wrong: "Is there a cold box for her medicine?",
              correct: "Is there a mini fridge in the room for her insulin?",
              explanation: "mini fridge 或 mini-bar fridge 是酒店迷你冰箱的标准说法。cold box 不是常用表达。",
            },
            formalityVariants: {
              casual: "She needs a fridge for insulin. Got one in the room?",
              standard: "Is there a mini fridge in the room? She needs to keep insulin refrigerated.",
              formal: "She also requires refrigerated storage for her insulin medication, which must be maintained at a cool temperature. Is there a mini-refrigerator in the room, or could one be provided?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Every room has a mini fridge. I'll make sure it's cleared out and set to the right temperature before you arrive — between 2 and 8 degrees Celsius for insulin. We can also provide a small cooler bag for day trips if needed.",
            textZh: "每个房间都有迷你冰箱。入住前我会确保清空并调到合适温度——胰岛素需要2到8摄氏度。如果需要，出游时我们也能提供小保冷袋。",
            keyPhrases: [
              { en: "cleared out and set to the right temperature", zh: "清空并调到合适温度" },
              { en: "cooler bag", zh: "保冷袋" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, mini fridge in every room. I'll empty it and set it between 2 and 8°C for the insulin. We've also got cooler bags if she needs one for outings.", textZh: "有，每个房间都有迷你冰箱。我会清空调到2-8°C放胰岛素。出门的话我们有保冷袋。", actionHint: "outings = 外出/出游", frequency: "common" },
            ],
            casualVersion: "Every room has a mini fridge. I'll clear it and set it to 2–8°C for insulin. We have cooler bags for day trips too.",
            formalityVariants: {
              casual: "Mini fridge in the room. I'll set it to the right temp. Got cooler bags for outings too.",
              standard: "Yes, there's a mini fridge. I'll clear it and set it to 2–8°C. Cooler bags available for day trips.",
              formal: "Indeed, each room is equipped with a mini-refrigerator. I shall ensure it is emptied of all hotel items and calibrated to maintain a temperature between two and eight degrees Celsius, which is the appropriate range for insulin storage. We can also provide a portable cooler bag for any daytime excursions requiring medication transport.",
            },
          },
          {
            speaker: "you",
            textEn: "You've thought of everything. Last question — are the hotel restaurant and pool area also wheelchair accessible?",
            textZh: "你们想得太周到了。最后一个问题——酒店餐厅和泳池区也是无障碍的吗？",
            culturalNote:
              "ADA 要求公共区域都必须无障碍，但实际情况可能有差异，特别是老建筑。泳池区通常有 pool lift（泳池升降机）供轮椅使用者入水。",
            casualVersion: "Last question — are the restaurant and pool wheelchair accessible too?",
            commonMistake: {
              wrong: "Can wheelchair go to restaurant and swimming pool?",
              correct: "Are the restaurant and pool area wheelchair accessible?",
              explanation: "wheelchair accessible 是无障碍的标准形容词。主语应该是场所（restaurant），不是 wheelchair。",
            },
            formalityVariants: {
              casual: "Restaurant and pool accessible for wheelchairs too?",
              standard: "Are the restaurant and pool area wheelchair accessible?",
              formal: "One final question — are the hotel restaurant and the pool area fully wheelchair accessible?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Yes, both are fully accessible. The restaurant has ramped entry and adjustable-height tables. The pool has a hydraulic pool lift for entering the water. All public areas — lobby, gym, garden — are step-free. Your mother will have full access to everything.",
            textZh: "是的，都是完全无障碍的。餐厅有坡道入口和可调节高度的桌子。泳池有液压升降机方便入水。所有公共区域——大堂、健身房、花园——都没有台阶。您母亲可以畅通无阻地使用所有设施。",
            keyPhrases: [
              { en: "hydraulic pool lift", zh: "液压泳池升降机" },
              { en: "adjustable-height tables", zh: "可调节高度的桌子" },
            ],
            alternativeExpressions: [
              { textEn: "Everything's accessible. Restaurant has a ramp and tables you can adjust. Pool's got a lift to get in. Lobby, gym, garden — all flat, no steps anywhere. She'll have zero issues.", textZh: "全都无障碍。餐厅有坡道和可调桌子。泳池有入水升降机。大堂、健身房、花园全是平的，哪儿都没台阶。完全没问题。", actionHint: "zero issues = 完全没问题", frequency: "common" },
            ],
            casualVersion: "All accessible. Restaurant has a ramp and adjustable tables. Pool has a lift. Everything's step-free. No issues at all.",
            formalityVariants: {
              casual: "Yep, all accessible. Ramp at the restaurant, pool lift, no steps anywhere.",
              standard: "Yes, both are fully accessible with ramped entry, adjustable tables, and a pool lift. All public areas are step-free.",
              formal: "Indeed, both areas are fully wheelchair accessible. The restaurant features a ramped entrance and tables with adjustable heights. The pool is equipped with a hydraulic lift to facilitate safe water entry. All public areas throughout the hotel, including the lobby, fitness center, and garden, are entirely step-free. Your mother will have unrestricted access to every facility.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 团体预订 ====================
  {
    id: "accommodation-group-booking",
    category: "accommodation",
    titleZh: "团体预订",
    titleEn: "Group Booking",
    description: "为团队或家庭聚会预订多间房间，协商团体价格和活动安排",
    otherRole: "酒店销售",
    otherRoleIcon: "👥",
    flows: [
      {
        id: "group-booking-basic",
        titleZh: "基本团体预订",
        titleEn: "Basic Group Reservation",
        description: "询问团体房价、房间分配和基本优惠",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm organizing a family reunion and need to book about 10 rooms for next weekend. Do you offer group rates?",
            textZh: "你好，我在组织一次家庭聚会，下周末需要预订大约10间房。你们有团体价吗？",
            culturalNote:
              "酒店通常从10间房起提供 group rate（团体价），折扣通常在10-25%。团体预订建议联系酒店销售部门（sales department），而不是普通前台。",
            casualVersion: "I need about 10 rooms for a family reunion next weekend. Got any group deals?",
            commonMistake: {
              wrong: "I need many rooms. Can I get cheap price?",
              correct: "Do you offer group rates?",
              explanation: "group rates 是团体价的标准说法。直接问 cheap price 不礼貌，用 group rates 更专业。",
            },
            formalityVariants: {
              casual: "Need about 10 rooms next weekend — family reunion. Any group deals?",
              standard: "I'm booking around 10 rooms for a family reunion next weekend. Do you have group rates?",
              formal: "Good afternoon. I am organizing a family reunion and anticipate requiring approximately ten rooms for next weekend. Does the hotel offer group or block booking rates?",
            },
          },
          {
            speaker: "them",
            role: "酒店销售",
            textEn: "Absolutely! For 10 or more rooms, we offer a 20% group discount off our standard rate. Our standard king room is $180 per night, so the group rate would be $144. Would you like all rooms on the same floor?",
            textZh: "当然！10间房以上我们提供标准价8折优惠。标准大床房每晚180美元，团体价144美元。需要安排在同一楼层吗？",
            keyPhrases: [
              { en: "group discount", zh: "团体折扣" },
              { en: "on the same floor", zh: "在同一楼层" },
            ],
            alternativeExpressions: [
              { textEn: "For sure — 10 rooms or more gets you 20% off. Kings are normally $180 a night, so $144 with the group rate. Want them all on the same floor?", textZh: "当然——10间以上打8折。大床房正常180一晚，团体价144。要不要安排在同一层？", actionHint: "Kings = King rooms 大床房的简称", frequency: "common" },
            ],
            casualVersion: "10+ rooms gets you 20% off. Standard king is $180, so $144 with the discount. Same floor?",
            formalityVariants: {
              casual: "Twenty percent off for 10+ rooms. Kings at $144 instead of $180. Same floor?",
              standard: "We offer 20% off for groups of 10+ rooms. Standard king goes from $180 to $144. Would you prefer the same floor?",
              formal: "We are delighted to extend a twenty percent group discount for bookings of ten or more rooms. Our standard king room is regularly priced at one hundred eighty dollars per night, which would be reduced to one hundred forty-four dollars under the group rate. Shall I arrange for all rooms to be located on the same floor?",
            },
          },
          {
            speaker: "you",
            textEn: "Same floor would be great. We have a mix of couples and families with kids — can we get a combination of king rooms and double queen rooms?",
            textZh: "同一层最好。我们有情侣也有带孩子的家庭——能混合搭配大床房和双大床房吗？",
            culturalNote:
              "double queen room（双大床房）适合带孩子的家庭，一般能睡4人。king room 是大床房，适合情侣。团体预订时可以混合搭配不同房型。",
            casualVersion: "Same floor, perfect. Can we mix king rooms and double queen rooms? We have couples and families with kids.",
            commonMistake: {
              wrong: "Can we have big bed rooms and two bed rooms together?",
              correct: "Can we get a combination of king rooms and double queen rooms?",
              explanation: "king room 和 double queen room 是标准房型名称。combination 表示混合搭配。",
            },
            formalityVariants: {
              casual: "Same floor, love it. Mix of kings and double queens? Got couples and families.",
              standard: "Same floor, please. We need a mix of king rooms and double queen rooms for couples and families.",
              formal: "The same floor would be ideal. Our group comprises both couples and families with children. Would it be possible to arrange a combination of king rooms and double queen rooms?",
            },
          },
          {
            speaker: "them",
            role: "酒店销售",
            textEn: "Of course! How about six king rooms and four double queen rooms? The double queens are $160 standard, so $128 with the group discount. I'll block off an entire floor for your group. The total comes to $1,376 per night for all 10 rooms.",
            textZh: "当然可以！六间大床房和四间双大床房怎么样？双大床房标准价160美元，团体价128美元。我会为你们包下整层楼。10间房每晚总计1376美元。",
            keyPhrases: [
              { en: "block off an entire floor", zh: "包下整层楼" },
              { en: "the total comes to", zh: "总计" },
            ],
            alternativeExpressions: [
              { textEn: "Six kings, four double queens? Queens are normally $160, so $128 with the discount. I'll reserve a whole floor. That's $1,376 a night for all ten rooms.", textZh: "六间大床，四间双大床？大床正常160，折后128。给你们留一整层。十间房每晚1376美元。", actionHint: "reserve a whole floor = 预留整层", frequency: "common" },
            ],
            casualVersion: "Six kings, four double queens? Queens at $128 with the discount. I'll hold a whole floor. $1,376 per night total.",
            formalityVariants: {
              casual: "Six kings, four queens. Queens at $128. Whole floor for you. $1,376 a night total.",
              standard: "Six kings and four double queens. Queens at $128 with group discount. I'll reserve an entire floor. Total is $1,376 per night.",
              formal: "I would suggest six king rooms and four double queen rooms. The double queen rooms are priced at one hundred sixty dollars at the standard rate, reduced to one hundred twenty-eight dollars with the group discount. I shall reserve an entire floor exclusively for your party. The nightly total for all ten rooms would be one thousand three hundred seventy-six dollars.",
            },
          },
          {
            speaker: "you",
            textEn: "That works. Is there a cancellation policy for group bookings? Some family members haven't confirmed yet.",
            textZh: "可以。团体预订有取消政策吗？有些家人还没确认。",
            culturalNote:
              "团体预订的取消政策通常比个人预订严格。常见的是要求提前14-30天取消。有些酒店允许在截止日期前调整房间数量（attrition clause）。",
            casualVersion: "Sounds good. What's the cancellation policy? Some people haven't confirmed.",
            commonMistake: {
              wrong: "Can I cancel the room if someone doesn't come?",
              correct: "Is there a cancellation policy for group bookings?",
              explanation: "cancellation policy 是取消政策的标准说法。问政策比问能不能取消更专业。",
            },
            formalityVariants: {
              casual: "What's the cancel policy? Not everyone's confirmed yet.",
              standard: "What's the cancellation policy for group bookings? Some guests haven't confirmed.",
              formal: "Could you outline the cancellation policy applicable to group reservations? A number of our family members have not yet confirmed their attendance.",
            },
          },
          {
            speaker: "them",
            role: "酒店销售",
            textEn: "For group bookings, you can reduce up to 20% of the rooms without penalty up to 14 days before check-in. After that, we require 72 hours' notice for individual room cancellations. No deposit needed now — just a credit card to hold the block.",
            textZh: "团体预订入住前14天可以免费减少最多20%的房间。之后取消单间需要提前72小时通知。现在不需要押金——只需一张信用卡锁定房间。",
            keyPhrases: [
              { en: "without penalty", zh: "不收取罚金" },
              { en: "hold the block", zh: "锁定预留房间" },
            ],
            alternativeExpressions: [
              { textEn: "You can drop up to two rooms penalty-free 14 days out. After that, 72 hours' notice for cancellations. No deposit — just a card to hold the rooms.", textZh: "14天前最多减两间房不罚款。之后取消需提前72小时。不用押金——信用卡锁房就行。", actionHint: "drop rooms = 减少房间; 14 days out = 14天前", frequency: "common" },
            ],
            casualVersion: "You can drop up to 20% of rooms free 14 days before. After that, 72 hours' notice to cancel. No deposit, just a card to hold them.",
            formalityVariants: {
              casual: "Cut up to 20% penalty-free 14 days out. After that, 72 hours to cancel. Card to hold, no deposit.",
              standard: "Up to 20% room reduction penalty-free 14 days prior. 72 hours' notice after that. Credit card hold, no deposit.",
              formal: "Our group booking policy permits a reduction of up to twenty percent of the reserved rooms without penalty, provided such changes are made at least fourteen days prior to the check-in date. Beyond that date, individual room cancellations require seventy-two hours' advance notice. No deposit is required at this time — simply a credit card to secure the room block.",
            },
          },
        ],
      },
      {
        id: "group-booking-intermediate",
        titleZh: "团体活动与特殊安排",
        titleEn: "Group Activities & Special Arrangements",
        description: "安排团体用餐、会议室和特殊活动",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We'd also like to arrange a group dinner for about 30 people on Saturday night. Do you have a private dining room or banquet space?",
            textZh: "我们还想安排周六晚上大约30人的团体晚宴。你们有私人餐厅或宴会厅吗？",
            culturalNote:
              "酒店的 private dining room（私人餐厅）和 banquet hall（宴会厅）通常可以定制菜单。可能会有最低消费要求（minimum spend）。预订时要确认是否包含服务费和酒水。",
            casualVersion: "Can we do a group dinner for 30 on Saturday night? Got a private room or banquet space?",
            commonMistake: {
              wrong: "We want to eat together 30 people on Saturday.",
              correct: "We'd like to arrange a group dinner for about 30 people.",
              explanation: "arrange a group dinner 是安排团体晚宴的标准说法。人数用 for about 30 people。",
            },
            formalityVariants: {
              casual: "Group dinner Saturday night, about 30 people. Got a private room?",
              standard: "We'd like a group dinner for 30 on Saturday evening. Is there a private dining space?",
              formal: "We would also like to arrange a group dinner for approximately thirty guests on Saturday evening. Does the hotel offer a private dining room or banquet facility?",
            },
          },
          {
            speaker: "them",
            role: "酒店销售",
            textEn: "We have a beautiful private dining room that seats up to 40. For 30 guests, I'd recommend our set menu packages — $55 per person for three courses or $75 for five courses, both including coffee and tea. Wine packages start at $20 per person.",
            textZh: "我们有一个漂亮的私人餐厅，最多可坐40人。30位客人的话，推荐套餐——三道菜每人55美元或五道菜每人75美元，都含咖啡和茶。酒水套餐每人20美元起。",
            keyPhrases: [
              { en: "set menu packages", zh: "套餐" },
              { en: "wine packages", zh: "酒水套餐" },
            ],
            alternativeExpressions: [
              { textEn: "Our private dining room holds 40. For 30 people, go with a set menu — fifty-five a head for three courses, seventy-five for five. Both include coffee. Wine starts at twenty per person.", textZh: "私人餐厅能坐40人。30人的话选套餐——三道菜每人55，五道菜75。都含咖啡。酒水每人20起。", actionHint: "a head = 每人; go with = 选择", frequency: "common" },
            ],
            casualVersion: "Private dining room seats 40. Set menus: $55 for three courses or $75 for five, with coffee. Wine from $20 per person.",
            formalityVariants: {
              casual: "Got a room for 40. Three-course set at $55 or five-course at $75. Wine from $20 each.",
              standard: "Our private room seats 40. Set menus at $55 (three courses) or $75 (five courses) per person. Wine packages from $20.",
              formal: "Our private dining room can comfortably accommodate up to forty guests. For a party of thirty, I would recommend our curated set menu packages: fifty-five dollars per guest for a three-course dinner or seventy-five dollars for five courses, both inclusive of coffee and tea service. Supplementary wine packages commence at twenty dollars per person.",
            },
          },
          {
            speaker: "you",
            textEn: "The five-course option sounds great. Can the menu be customized? We have vegetarians, and my uncle is allergic to shellfish.",
            textZh: "五道菜套餐听起来不错。菜单可以定制吗？我们有素食者，我叔叔对贝类过敏。",
            culturalNote:
              "团体宴席通常可以提前告知饮食限制，厨房会准备替代菜品。常见的需要注意的有：vegetarian（素食）、vegan（纯素）、gluten-free（无麸质）和各种过敏。",
            casualVersion: "Five-course sounds good. Can you customize the menu? Got vegetarians and a shellfish allergy.",
            commonMistake: {
              wrong: "Can you change the food? Some people don't eat meat or sea animals.",
              correct: "Can the menu be customized? We have vegetarians, and someone is allergic to shellfish.",
              explanation: "customized 是定制的标准说法。vegetarian 是素食者。shellfish allergy 是贝类过敏。sea animals 不是地道说法。",
            },
            formalityVariants: {
              casual: "Five courses, let's do it. Can you adjust the menu? Vegetarians and a shellfish allergy.",
              standard: "The five-course option, please. Can the menu be adjusted for vegetarians and a shellfish allergy?",
              formal: "The five-course menu would be excellent. Is it possible to customize the menu to accommodate vegetarian guests and a shellfish allergy?",
            },
          },
          {
            speaker: "them",
            role: "酒店销售",
            textEn: "Absolutely. Our chef can prepare vegetarian alternatives for each course, and we'll ensure all dishes for your uncle are completely shellfish-free. I just need the final count of vegetarian guests one week before the dinner.",
            textZh: "当然可以。主厨可以为每道菜准备素食替代，您叔叔的菜品会确保完全不含贝类。只需要在晚宴一周前确认素食客人的人数。",
            keyPhrases: [
              { en: "vegetarian alternatives", zh: "素食替代菜品" },
              { en: "final count", zh: "最终人数" },
            ],
            alternativeExpressions: [
              { textEn: "No problem. Chef'll do veggie versions for each course, and your uncle's plates will be totally shellfish-free. Just get me the veggie headcount a week before.", textZh: "没问题。厨师每道菜做素食版，你叔叔的菜完全不含贝类。一周前给我素食人数就行。", actionHint: "headcount = 人数统计; veggie = vegetarian 的简称", frequency: "common" },
            ],
            casualVersion: "Sure. Chef will do veggie versions, and all shellfish-free for your uncle. Just confirm veggie numbers a week before.",
            formalityVariants: {
              casual: "No problem — veggie options and shellfish-free plates. Tell me the numbers a week out.",
              standard: "Our chef will prepare vegetarian alternatives and shellfish-free options. Please confirm vegetarian guest numbers one week prior.",
              formal: "Most certainly. Our executive chef will prepare bespoke vegetarian alternatives for each course, and we shall ensure that all dishes served to your uncle are entirely free of shellfish and cross-contamination. I would kindly ask that you provide the final count of vegetarian guests no later than one week before the dinner.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. Is there a minimum spend for the private dining room, or is it included with the group booking?",
            textZh: "太好了。私人餐厅有最低消费吗，还是包含在团体预订里？",
            culturalNote:
              "私人餐厅通常有 minimum spend（最低消费）要求，或者收取 room rental fee（场地费）。团体预订有时可以免除场地费。值得谈判。",
            casualVersion: "Is there a minimum spend for the private room, or does it come with the group booking?",
            commonMistake: {
              wrong: "Do I need to spend a lot of money to use the room?",
              correct: "Is there a minimum spend for the private dining room?",
              explanation: "minimum spend 是最低消费的标准说法。比 spend a lot of money 更专业。",
            },
            formalityVariants: {
              casual: "Any minimum spend on the private room? Or is it free with the group booking?",
              standard: "Is there a minimum spend for the private room, or is it included with the group booking?",
              formal: "May I inquire whether the private dining room carries a minimum expenditure requirement, or is the venue included as part of the group booking arrangement?",
            },
          },
          {
            speaker: "them",
            role: "酒店销售",
            textEn: "Normally there's a $1,500 minimum, but since you're booking 10 rooms, I'll waive the room rental fee entirely. With 30 guests at $75 each, you're well above the minimum anyway. I'll also throw in a complimentary welcome cocktail for everyone.",
            textZh: "通常有1500美元最低消费，但因为您订了10间房，我会完全免除场地费。30位客人每人75美元已经远超最低消费了。另外我还赠送每人一杯免费欢迎鸡尾酒。",
            keyPhrases: [
              { en: "waive the room rental fee", zh: "免除场地费" },
              { en: "throw in a complimentary", zh: "赠送/附赠" },
            ],
            alternativeExpressions: [
              { textEn: "Usually $1,500 minimum, but with 10 rooms I'll drop the room fee. Thirty at $75 covers it anyway. Plus, I'll add a free welcome drink for the group.", textZh: "通常最低1500，但10间房我免场地费。30人每人75也超了。另外免费加一杯欢迎饮品。", actionHint: "drop the fee = 免除费用; covers it = 够了/达到了", frequency: "common" },
            ],
            casualVersion: "Normally $1,500 minimum, but with 10 rooms I'll waive the room fee. Plus a free welcome cocktail for everyone.",
            formalityVariants: {
              casual: "Normally $1,500 minimum, but I'll drop it with 10 rooms. Free welcome drink for everyone too.",
              standard: "The $1,500 minimum is waived with your room block. I'll include a complimentary welcome cocktail.",
              formal: "Ordinarily, the private dining room carries a minimum expenditure of fifteen hundred dollars. However, given your group room booking, I am pleased to waive the room rental fee in its entirety. With thirty guests at seventy-five dollars per person, you would comfortably exceed the minimum in any case. As an additional gesture, I shall include a complimentary welcome cocktail for each guest.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 代客泊车 ====================
  {
    id: "accommodation-valet-parking",
    category: "accommodation",
    titleZh: "代客泊车",
    titleEn: "Valet Parking",
    description: "使用酒店代客泊车服务，了解费用、取车流程和车辆安全",
    otherRole: "代客泊车员",
    otherRoleIcon: "🚗",
    flows: [
      {
        id: "valet-parking-basic",
        titleZh: "基本泊车",
        titleEn: "Basic Valet Parking",
        description: "到达酒店时使用代客泊车服务",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, is this where I drop off my car for valet parking? How much does it cost per night?",
            textZh: "你好，这里是代客泊车的交车点吗？每晚多少钱？",
            culturalNote:
              "valet parking（代客泊车）是酒店服务员帮你停车和取车的服务。到达时在酒店正门交车，拿到票据（valet ticket）。离开时凭票取车。费用通常每晚$20-50。",
            casualVersion: "Is this where I leave my car for valet? How much per night?",
            commonMistake: {
              wrong: "Can someone park my car? How much?",
              correct: "Is this the valet parking drop-off? How much per night?",
              explanation: "valet parking 是代客泊车的固定说法。drop-off 是交车点。不需要解释 someone park my car。",
            },
            formalityVariants: {
              casual: "Valet parking here? How much a night?",
              standard: "Is this the valet drop-off? What's the nightly rate?",
              formal: "Good evening. Is this the designated area for the valet parking service? Could you kindly inform me of the nightly rate?",
            },
          },
          {
            speaker: "them",
            role: "代客泊车员",
            textEn: "Yes, you're in the right place! Valet parking is $35 per night with unlimited in-and-out access. Just leave your keys with me and I'll give you a valet ticket. We'll have your car parked in our secure garage.",
            textZh: "是的，您来对地方了！代客泊车每晚35美元，不限次数进出。把钥匙留给我，我给您一张泊车票。我们会把车停在安全的车库里。",
            keyPhrases: [
              { en: "unlimited in-and-out access", zh: "不限次数进出" },
              { en: "valet ticket", zh: "泊车票" },
            ],
            alternativeExpressions: [
              { textEn: "Right here! Thirty-five a night, come and go as much as you want. Hand me the keys, here's your ticket. Car goes in our secure garage.", textZh: "就这里！一晚35，随时可以用车。钥匙给我，这是票。车停在安全车库。", actionHint: "come and go = 随时用车; hand me = 给我", frequency: "common" },
            ],
            casualVersion: "Yep, right here! $35 a night, unlimited in and out. Keys to me, here's your ticket. Car goes in the secure garage.",
            formalityVariants: {
              casual: "Right spot! Thirty-five a night, come and go anytime. Keys, ticket, garage. Easy.",
              standard: "This is the place. $35 per night with unlimited access. Leave your keys and take this ticket.",
              formal: "You are indeed at the correct location. Our valet parking service is priced at thirty-five dollars per night, which includes unlimited in-and-out privileges. If you would kindly leave your keys with me, I shall provide you with a valet ticket. Your vehicle will be securely parked in our monitored garage facility.",
            },
          },
          {
            speaker: "you",
            textEn: "Sounds good. I have some valuables in the trunk — a laptop bag and a camera. Should I take them out?",
            textZh: "好的。我后备箱里有些贵重物品——一个电脑包和一台相机。需要拿出来吗？",
            culturalNote:
              "使用代客泊车时，建议把贵重物品带走。虽然大多数酒店有保险，但通常不包括车内物品丢失。保险箱（in-room safe）可以存放贵重物品。",
            casualVersion: "I've got a laptop and camera in the trunk. Should I grab those?",
            commonMistake: {
              wrong: "I have expensive things in the car back. Should I remove?",
              correct: "I have some valuables in the trunk. Should I take them out?",
              explanation: "valuables 是贵重物品的标准说法。trunk 是后备箱。take them out 是拿出来。",
            },
            formalityVariants: {
              casual: "Got a laptop and camera in the trunk. Take them?",
              standard: "I have valuables in the trunk — a laptop and camera. Should I take them out?",
              formal: "I should mention that I have several valuable items in the trunk, specifically a laptop bag and a camera. Would you advise that I remove them?",
            },
          },
          {
            speaker: "them",
            role: "代客泊车员",
            textEn: "I'd definitely recommend taking those with you. Our garage is secure and monitored, but our policy doesn't cover personal items left in vehicles. You can use the in-room safe for electronics — it's large enough for a laptop.",
            textZh: "强烈建议您带走。我们的车库有安保和监控，但我们的保险不包括车内遗留的个人物品。您可以用房间保险箱放电子设备——大小放得下笔记本电脑。",
            keyPhrases: [
              { en: "doesn't cover personal items", zh: "不包括个人物品" },
              { en: "in-room safe", zh: "房间保险箱" },
            ],
            alternativeExpressions: [
              { textEn: "Take 'em with you for sure. Garage is monitored but we're not liable for stuff left in cars. Room safe fits a laptop no problem.", textZh: "一定带走。车库有监控但车里东西我们不负责。房间保险箱放笔记本没问题。", actionHint: "not liable = 不承担责任; fits = 放得下", frequency: "common" },
            ],
            casualVersion: "Take them. Garage is secure but we don't cover personal items. Room safe fits a laptop.",
            formalityVariants: {
              casual: "Grab those. Garage is safe but we can't cover what's in the car. Use the room safe.",
              standard: "Please take them. Our garage is monitored but policy doesn't cover personal items. Use the in-room safe.",
              formal: "I would strongly advise taking those items with you. While our garage is fully secured and under surveillance, our liability policy does not extend to personal belongings left within vehicles. The in-room safe in your accommodation is spacious enough to store a laptop and is ideal for securing valuable electronics.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. When I need the car tomorrow morning, how far in advance should I call? I need to leave by 8 a.m.",
            textZh: "了解了。明早需要用车的话，需要提前多久打电话？我8点需要出发。",
            culturalNote:
              "代客泊车取车通常需要提前15-30分钟通知。高峰时间（早上退房时段）可能需要更长时间。提前打电话可以确保车准时送到。",
            casualVersion: "How much notice do I need to get my car? I'm leaving at 8 tomorrow morning.",
            commonMistake: {
              wrong: "When should I tell you to bring the car?",
              correct: "How far in advance should I call for my car?",
              explanation: "how far in advance 是提前多久的标准说法。call for my car 是叫车（取回代泊车辆）的地道表达。",
            },
            formalityVariants: {
              casual: "How much heads-up to get my car? Leaving at 8 a.m.",
              standard: "How far in advance should I call? I need to leave by 8 a.m.",
              formal: "How much advance notice is required to retrieve my vehicle? I have a departure scheduled for eight o'clock tomorrow morning.",
            },
          },
          {
            speaker: "them",
            role: "代客泊车员",
            textEn: "Please call the valet desk at least 20 minutes before you need the car. For 8 a.m., call us at 7:40. Morning checkout is our busiest time, so calling ahead ensures your car is waiting at the door. The valet desk number is on your ticket.",
            textZh: "请至少提前20分钟打电话给泊车台。8点出发的话，7:40打电话。早上退房是最忙的时候，提前打电话能确保车在门口等您。泊车台号码在您的票上。",
            keyPhrases: [
              { en: "call the valet desk", zh: "打电话给泊车台" },
              { en: "your car is waiting at the door", zh: "车在门口等您" },
            ],
            alternativeExpressions: [
              { textEn: "Give us a 20-minute heads-up. For 8 a.m., ring us at 7:40. Mornings are crazy busy, so call ahead and the car'll be right out front. Number's on the ticket.", textZh: "提前20分钟通知。8点走就7:40打。早上超忙，提前打就能车在门口等。号码在票上。", actionHint: "heads-up = 提前通知; right out front = 就在正门口", frequency: "common" },
            ],
            casualVersion: "20 minutes' heads-up. Call at 7:40 for an 8 a.m. pickup. Mornings are busy, so call ahead. Number's on the ticket.",
            formalityVariants: {
              casual: "Twenty minutes' notice. Call 7:40 for 8 a.m. Number's on the ticket.",
              standard: "Please call 20 minutes ahead. For 8 a.m., that's 7:40. The valet number is on your ticket.",
              formal: "We kindly request a minimum of twenty minutes' advance notice. For an eight o'clock departure, please telephone us at seven-forty. The morning checkout period is our busiest, and calling ahead ensures your vehicle will be waiting at the hotel entrance promptly. The valet desk telephone number is printed on your ticket.",
            },
          },
        ],
      },
      {
        id: "valet-parking-intermediate",
        titleZh: "车辆问题与特殊需求",
        titleEn: "Vehicle Issues & Special Requests",
        description: "处理代客泊车中的车辆损坏、特殊车辆需求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I just picked up my car and noticed a new scratch on the rear bumper that wasn't there when I dropped it off. Can you look into this?",
            textZh: "打扰一下，我刚取完车发现后保险杠上有一条新的划痕，交车时没有的。能帮我查一下吗？",
            culturalNote:
              "代客泊车交车时最好拍照记录车辆状况。发现新损伤要立即报告，酒店通常有 damage claim（损伤索赔）流程。保持冷静但明确说明问题。",
            casualVersion: "I just got my car back and there's a scratch on the bumper that wasn't there before. Can you check?",
            commonMistake: {
              wrong: "You scratched my car! I want money!",
              correct: "I noticed a new scratch that wasn't there when I dropped it off. Can you look into this?",
              explanation: "保持冷静客观描述问题。用 I noticed 而不是直接指责。look into this 请求调查。",
            },
            formalityVariants: {
              casual: "There's a new scratch on my bumper that definitely wasn't there. Can someone look at this?",
              standard: "I've noticed a new scratch on the rear bumper that wasn't there before. Could you investigate?",
              formal: "I must bring to your attention that upon retrieving my vehicle, I have discovered a scratch on the rear bumper that was not present when I entrusted the car to your service. I would appreciate it if this matter could be investigated.",
            },
          },
          {
            speaker: "them",
            role: "代客泊车员",
            textEn: "I'm very sorry to hear that. Let me get my supervisor and we'll review the security footage. We photograph every vehicle at drop-off, so we can compare. Could you show me the scratch? We take this very seriously.",
            textZh: "非常抱歉听到这个。我去叫主管来，我们会查看监控录像。每辆车交车时我们都有拍照记录，可以对比。您能带我看一下划痕吗？我们非常重视这件事。",
            keyPhrases: [
              { en: "review the security footage", zh: "查看监控录像" },
              { en: "photograph every vehicle at drop-off", zh: "交车时拍照记录" },
            ],
            alternativeExpressions: [
              { textEn: "Really sorry. Let me grab my manager — we'll pull up the cameras and compare with the intake photos. Show me the scratch? We don't take this lightly.", textZh: "真的很抱歉。我叫经理来——调监控和入库照片对比。给我看一下划痕？我们很重视。", actionHint: "pull up the cameras = 调监控; intake photos = 入库照片", frequency: "common" },
            ],
            casualVersion: "So sorry. Let me get my supervisor. We'll check the cameras and compare with drop-off photos. Can you show me?",
            formalityVariants: {
              casual: "Sorry about that. Let me get my boss. We'll check cameras and photos. Show me the scratch?",
              standard: "I apologize. I'll get my supervisor to review the footage and drop-off photos. Please show me the damage.",
              formal: "I am deeply sorry to hear of this matter. Allow me to summon my supervisor immediately. We shall review the security camera footage and compare it with the photographs taken at the time of vehicle intake. Would you kindly show me the damage in question? I assure you we treat such matters with the utmost seriousness.",
            },
          },
          {
            speaker: "you",
            textEn: "Here it is — this scratch right here on the left side of the rear bumper. I actually took a photo of my car before handing it over, and it was clean.",
            textZh: "就是这里——后保险杠左侧的这条划痕。我交车前其实拍了照，那时候是干净的。",
            culturalNote:
              "交代客泊车前拍照是明智做法。有对比照片能大大加速索赔流程。很多旅行指南都建议这么做。",
            casualVersion: "Right here — left side of the rear bumper. I took a photo before I handed the keys over, and it was fine.",
            commonMistake: {
              wrong: "Look, this damage here. I have picture proof.",
              correct: "I actually took a photo before handing it over, and it was clean.",
              explanation: "handing it over 是交车的地道说法。picture proof 虽然能理解但 took a photo 更自然。",
            },
            formalityVariants: {
              casual: "Right here, left side of the bumper. I got a pic from before — it was totally fine.",
              standard: "Here on the left side of the rear bumper. I photographed the car before drop-off, and there was no scratch.",
              formal: "The scratch is located here, on the left side of the rear bumper. I took the precaution of photographing my vehicle prior to handing over the keys, and I can confirm that this damage was not present at that time.",
            },
          },
          {
            speaker: "them",
            role: "代客泊车员",
            textEn: "Thank you for having that photo — it really helps. Our records confirm the car was clean at intake. I sincerely apologize. We'll file a damage claim and our insurance will cover the repair. Can I get your contact information and a copy of that photo?",
            textZh: "感谢您有那张照片——这非常有帮助。我们的记录也确认入库时车是完好的。真诚道歉。我们会提交损伤索赔，保险会承担维修费用。能提供您的联系方式和照片副本吗？",
            keyPhrases: [
              { en: "file a damage claim", zh: "提交损伤索赔" },
              { en: "our insurance will cover the repair", zh: "保险会承担维修" },
            ],
            alternativeExpressions: [
              { textEn: "Glad you had that. Our intake photos match — car was clean. Really sorry. We'll file a claim and insurance handles the fix. Can I get your number and that photo?", textZh: "幸好你有照片。我们的入库照也对得上——车当时是好的。真的抱歉。我们提交索赔，保险负责修。能留个电话和照片吗？", actionHint: "handles the fix = 负责维修", frequency: "common" },
            ],
            casualVersion: "Good thing you have that photo. Our records match — car was fine at drop-off. Sorry about this. We'll file a claim and insurance covers the repair. Can I get your info and photo?",
            formalityVariants: {
              casual: "Glad you got a pic. Our photos match too. We'll file a claim, insurance pays. Need your number and photo.",
              standard: "Thank you for the photo. Records confirm the car was clean. We'll file a damage claim for insurance to cover. May I have your contact details?",
              formal: "I greatly appreciate your foresight in photographing the vehicle. Our intake records corroborate that the car was in pristine condition upon receipt. Please accept my sincerest apologies. We shall immediately file a damage claim, and our insurance will assume full responsibility for the repair costs. May I kindly request your contact information and a copy of your photograph for our records?",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, here's my phone number. How long does the claims process usually take? And can I get a loaner car while mine is being repaired?",
            textZh: "好的，这是我的电话号码。索赔流程通常需要多久？维修期间能提供一辆代步车吗？",
            culturalNote:
              "损伤索赔通常需要3-5个工作日处理。高档酒店可能提供代步车或承担租车费用。一定要拿到书面确认（written acknowledgment）。",
            casualVersion: "Here's my number. How long does the claim take? And can I get a loaner while it's in the shop?",
            commonMistake: {
              wrong: "How long to fix and can I borrow a car?",
              correct: "How long does the claims process take? Can I get a loaner car?",
              explanation: "claims process 是索赔流程。loaner car 是借用/代步车的标准说法。borrow a car 语义不同。",
            },
            formalityVariants: {
              casual: "Here's my number. How long's the claim take? Can I get a loaner?",
              standard: "Here's my phone number. How long is the claims process? Is a loaner car available?",
              formal: "Here is my telephone number. Could you advise on the expected duration of the claims process? Additionally, would it be possible to arrange a courtesy vehicle while my car is undergoing repair?",
            },
          },
          {
            speaker: "them",
            role: "代客泊车员",
            textEn: "The claim typically takes 3 to 5 business days. We'll arrange a rental car at our expense starting today — I'll have one brought over within the hour. You'll also receive a written acknowledgment of the incident and a direct line to our claims manager.",
            textZh: "索赔通常需要3到5个工作日。我们会从今天起安排一辆租车，费用由我们承担——一小时内会有车送来。您还会收到事故书面确认和理赔经理的直通电话。",
            keyPhrases: [
              { en: "rental car at our expense", zh: "费用由我们承担的租车" },
              { en: "written acknowledgment", zh: "书面确认" },
            ],
            alternativeExpressions: [
              { textEn: "Three to five business days for the claim. We'll get you a rental on us right away — one'll be here within the hour. Plus written confirmation and a direct number for our claims guy.", textZh: "索赔3到5个工作日。马上给你安排免费租车——一小时内到。还有书面确认和理赔负责人直通电话。", actionHint: "on us = 我们出钱; claims guy = 理赔负责人", frequency: "common" },
            ],
            casualVersion: "3–5 business days for the claim. We'll get you a rental on our dime right away — within the hour. Plus a written report and direct line to claims.",
            formalityVariants: {
              casual: "Three to five days. Rental on us, here within the hour. Written confirmation and claims contact too.",
              standard: "Claims take 3–5 business days. We'll provide a rental today. You'll get written acknowledgment and our claims manager's direct line.",
              formal: "The claims process typically requires three to five business days. We shall arrange a complimentary rental vehicle at the hotel's expense, which will be delivered within the hour. You will also receive a formal written acknowledgment of the incident and a direct telephone number for our claims manager for any follow-up inquiries.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 失物招领 ====================
  {
    id: "accommodation-lost-found",
    category: "accommodation",
    titleZh: "失物招领",
    titleEn: "Lost and Found",
    description: "退房后发现遗落物品，联系酒店寻找和寄回",
    otherRole: "酒店前台",
    otherRoleIcon: "📦",
    flows: [
      {
        id: "lost-found-basic",
        titleZh: "报告遗失物品",
        titleEn: "Reporting a Lost Item",
        description: "退房后联系酒店报告遗落的物品",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I checked out this morning from room 512, and I think I left my phone charger and a pair of reading glasses in the nightstand drawer. Could you check for me?",
            textZh: "你好，我今早从512房间退房，我觉得我把手机充电器和一副老花镜忘在床头柜抽屉里了。能帮我查一下吗？",
            culturalNote:
              "退房后发现遗落物品应尽快联系酒店。说明房间号、退房日期和物品具体位置能帮助工作人员更快找到。酒店通常会保管失物30-90天。",
            casualVersion: "I just checked out of room 512 and I think I left my charger and glasses in the nightstand. Can you look?",
            commonMistake: {
              wrong: "I forgot my things in the room. Can you find them?",
              correct: "I think I left my charger and reading glasses in the nightstand drawer.",
              explanation: "具体描述物品和位置比笼统说 things 更有效。left 比 forgot 更适合描述遗落物品。",
            },
            formalityVariants: {
              casual: "Just checked out of 512. Pretty sure I left my charger and glasses in the nightstand. Can you check?",
              standard: "I checked out from room 512 this morning. I believe I left a phone charger and reading glasses in the nightstand drawer. Could you check?",
              formal: "Good afternoon. I checked out of room 512 this morning, and I believe I may have inadvertently left my phone charger and a pair of reading glasses in the nightstand drawer. Would it be possible for someone to check the room?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Of course, let me check with housekeeping right away. Can you describe the charger — is it a white cable or a black one? And are the glasses in a case?",
            textZh: "当然，我马上联系客房部确认。能描述一下充电器吗——是白色线还是黑色线？眼镜有眼镜盒吗？",
            keyPhrases: [
              { en: "check with housekeeping", zh: "联系客房部确认" },
              { en: "describe the item", zh: "描述物品" },
            ],
            alternativeExpressions: [
              { textEn: "Sure — let me ring housekeeping. Quick question: is the charger white or black? And are the glasses in a case or loose?", textZh: "好的——我打电话给客房部。快问一下：充电器白色还是黑色？眼镜有盒子还是散放？", actionHint: "ring housekeeping = 打电话给客房部; loose = 散放", frequency: "common" },
            ],
            casualVersion: "Let me check with housekeeping. What color is the charger? And glasses in a case?",
            formalityVariants: {
              casual: "I'll check with housekeeping. White or black charger? Glasses in a case?",
              standard: "I'll contact housekeeping immediately. Could you describe the charger and whether the glasses are in a case?",
              formal: "Certainly, I shall contact our housekeeping department immediately. To assist in identifying your belongings, could you describe the charger — is it a white or black cable? And are the reading glasses stored within a case?",
            },
          },
          {
            speaker: "you",
            textEn: "The charger is a white USB-C cable with a small white charging brick. The glasses are gold-rimmed, no case — I probably set them on top of the nightstand or in the drawer.",
            textZh: "充电器是白色USB-C线配小白充电头。眼镜是金色镜框，没有眼镜盒——可能放在床头柜上或者抽屉里。",
            culturalNote:
              "描述物品时越具体越好：颜色、品牌、大小、有无标记。这样能避免和其他客人遗落的同类物品混淆。",
            casualVersion: "White USB-C charger with a white brick. Gold-rimmed glasses, no case — probably on or in the nightstand.",
            commonMistake: {
              wrong: "It's a white charger for phone and gold color glasses.",
              correct: "A white USB-C cable with a charging brick. Gold-rimmed glasses, no case.",
              explanation: "USB-C 是充电线类型。charging brick 是充电头。gold-rimmed 是金色镜框。具体描述更容易被找到。",
            },
            formalityVariants: {
              casual: "White USB-C charger with white brick. Gold glasses, no case. Probably on the nightstand.",
              standard: "It's a white USB-C cable with a white charging brick. The glasses are gold-rimmed, without a case.",
              formal: "The charger is a white USB-C cable accompanied by a compact white charging adapter. The reading glasses have gold-colored rims and were not in a case — I believe they were placed either atop the nightstand or within the drawer.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Great news — housekeeping found both items! The charger was in the drawer and the glasses were on top of the nightstand, just as you described. We've logged them in our lost and found. Would you like to pick them up, or shall we ship them to you?",
            textZh: "好消息——客房部两样都找到了！充电器在抽屉里，眼镜在床头柜上，和您说的一样。已经登记到我们的失物招领处了。您想来取还是我们寄给您？",
            keyPhrases: [
              { en: "logged in our lost and found", zh: "登记到失物招领处" },
              { en: "ship them to you", zh: "寄给您" },
            ],
            alternativeExpressions: [
              { textEn: "Good news — both found! Charger in the drawer, glasses on the nightstand. They're in our lost and found now. Want to come grab them, or should we mail them?", textZh: "好消息——都找到了！充电器在抽屉，眼镜在柜上。在失物招领了。要来拿还是寄？", actionHint: "grab them = 来取; mail them = 寄", frequency: "common" },
            ],
            casualVersion: "Found them both! Charger in the drawer, glasses on the nightstand. Pick up or ship?",
            formalityVariants: {
              casual: "Both found! Come get them or we can mail them.",
              standard: "Housekeeping found both items. They're in lost and found. Would you like to pick them up or have them shipped?",
              formal: "I am pleased to inform you that housekeeping has located both items precisely as you described. They have been catalogued in our lost and found department. Would you prefer to collect them in person, or shall we arrange to have them shipped to your address?",
            },
          },
          {
            speaker: "you",
            textEn: "I've already left the city, so shipping would be great. How much does it cost, and how long does it take?",
            textZh: "我已经离开这个城市了，所以寄给我吧。需要多少钱，多久能到？",
            culturalNote:
              "酒店寄回失物通常收取运费（shipping fee），国内一般$10-20。国际邮寄费用更高。有些高档酒店提供免费寄回服务。",
            casualVersion: "Already left town, so please ship. How much and how long?",
            commonMistake: {
              wrong: "I already go away. Please send to me. How much time and money?",
              correct: "I've already left the city. How much does shipping cost, and how long does it take?",
              explanation: "already left 是已经离开的正确时态。shipping cost 是运费。how long does it take 是多久能到的标准说法。",
            },
            formalityVariants: {
              casual: "Left town already. Ship them please. Cost and timing?",
              standard: "I've left the city, so shipping please. What's the cost and estimated delivery time?",
              formal: "I have already departed the city, so I would appreciate having the items shipped. Could you kindly advise on the shipping cost and estimated delivery timeframe?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Domestic shipping is $12 via USPS Priority Mail — typically 2 to 3 business days. We just need your mailing address and a credit card for the shipping fee. I'll pack everything securely and send you a tracking number by email.",
            textZh: "国内USPS优先邮件运费12美元——通常2到3个工作日送达。只需要您的邮寄地址和一张信用卡支付运费。我会安全包装好，邮件发给您快递单号。",
            keyPhrases: [
              { en: "tracking number", zh: "快递单号/追踪号" },
              { en: "Priority Mail", zh: "优先邮件" },
            ],
            alternativeExpressions: [
              { textEn: "It's twelve bucks via Priority Mail — gets there in 2 to 3 days. Send me your address and card info, I'll box it up and email you the tracking number.", textZh: "优先邮件12块——2到3天到。给我地址和卡信息，我打包好把单号发你邮箱。", actionHint: "box it up = 打包装箱; twelve bucks = 12美元", frequency: "common" },
            ],
            casualVersion: "$12 Priority Mail, 2–3 days. Give me your address and card, I'll pack it up and email you the tracking number.",
            formalityVariants: {
              casual: "Twelve bucks, 2–3 days. Address and card, I'll ship and send tracking.",
              standard: "Domestic shipping is $12 via Priority Mail, 2–3 days. Provide your address and card, and I'll send tracking.",
              formal: "Domestic shipping via USPS Priority Mail is twelve dollars, with an estimated delivery time of two to three business days. I shall require your mailing address and a credit card to process the shipping fee. The items will be securely packaged, and I shall forward a tracking number to your email address for your reference.",
            },
          },
        ],
      },
      {
        id: "lost-found-intermediate",
        titleZh: "贵重物品遗失处理",
        titleEn: "Valuable Item Recovery",
        description: "处理贵重物品遗失和追踪不到的情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm calling about something more serious — I think I left my passport and a gold bracelet in the room safe. I checked out of room 720 yesterday morning. Can you please check urgently?",
            textZh: "我打电话是关于一件比较严重的事——我觉得我把护照和一条金手链落在了房间保险箱里。我昨天早上从720房间退房的。能紧急帮我查一下吗？",
            culturalNote:
              "护照是最重要的旅行证件，遗失后要尽快找回。room safe（房间保险箱）退房时如果忘记清空，酒店工作人员通常会在清洁房间时发现并存入失物招领。",
            casualVersion: "This is urgent — I think I left my passport and a gold bracelet in the room safe. Room 720, checked out yesterday. Can you check right away?",
            commonMistake: {
              wrong: "I lost my passport and gold thing in the safe box.",
              correct: "I think I left my passport and a gold bracelet in the room safe.",
              explanation: "room safe 是房间保险箱的标准说法，不是 safe box。bracelet 是手链。left 表示遗落，lost 表示丢失。",
            },
            formalityVariants: {
              casual: "This is urgent — passport and gold bracelet left in the room safe, room 720, checked out yesterday. Can you look now?",
              standard: "I believe I left my passport and a gold bracelet in the room safe. Room 720, checked out yesterday morning. Could you check urgently?",
              formal: "I am calling regarding an urgent matter. I believe I may have left my passport and a gold bracelet inside the room safe in room 720. I checked out yesterday morning. Would it be possible to have this investigated immediately?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I understand the urgency. Let me contact security and housekeeping right now. When the safe is left locked after checkout, only our security team can open it. Can you confirm — did you set a code on the safe, or was it left open?",
            textZh: "我理解事情的紧急性。我马上联系安保和客房部。退房后保险箱如果是锁着的，只有安保团队能打开。您确认一下——您设了密码还是保险箱开着的？",
            keyPhrases: [
              { en: "contact security", zh: "联系安保" },
              { en: "set a code on the safe", zh: "给保险箱设密码" },
            ],
            alternativeExpressions: [
              { textEn: "Got it — this is priority. I'm calling security and housekeeping now. If the safe's still locked, only security can open it. Did you lock it or leave it open?", textZh: "明白——这是优先事项。我现在打给安保和客房部。如果保险箱还锁着，只有安保能开。您锁了还是开着的？", actionHint: "this is priority = 这是优先事项", frequency: "common" },
            ],
            casualVersion: "Got it, this is urgent. Calling security and housekeeping now. Did you lock the safe or leave it open?",
            formalityVariants: {
              casual: "On it — calling security now. Was the safe locked or open?",
              standard: "I understand. I'll contact security and housekeeping immediately. Was the safe locked or left open?",
              formal: "I fully appreciate the urgency of this situation. I shall contact our security department and housekeeping team immediately. May I ask whether you secured the safe with a code prior to departure, or was it left in an unlocked state?",
            },
          },
          {
            speaker: "you",
            textEn: "I honestly can't remember if I locked it or not — I was rushing to catch a flight. The passport is a blue US passport, and the bracelet is 18-karat gold with a small diamond clasp.",
            textZh: "说实话我不记得有没有锁——当时赶着去赶飞机。护照是蓝色美国护照，手链是18K金的，扣子上有一颗小钻石。",
            culturalNote:
              "描述贵重物品时要尽量详细。珠宝类说明材质（gold/silver）、克拉数和特征（diamond clasp）。护照说明颜色和国籍。这样方便确认是你的物品。",
            casualVersion: "Can't remember if I locked it — was in a rush. Blue US passport, 18-karat gold bracelet with a diamond clasp.",
            commonMistake: {
              wrong: "My passport is American and the bracelet is expensive gold.",
              correct: "The passport is a blue US passport. The bracelet is 18-karat gold with a diamond clasp.",
              explanation: "描述要具体。用颜色（blue）、国籍（US）、材质（18-karat gold）和特征（diamond clasp）。",
            },
            formalityVariants: {
              casual: "Not sure if I locked it — was rushing. Blue US passport, 18k gold bracelet with diamond clasp.",
              standard: "I can't recall whether I locked it. The passport is blue, US-issued. The bracelet is 18-karat gold with a diamond clasp.",
              formal: "I regret that I cannot recall with certainty whether I locked the safe, as I was in considerable haste to catch my flight. The passport is a blue United States passport. The bracelet is eighteen-karat gold featuring a small diamond clasp.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Security just opened the safe — both items are here. Your passport and gold bracelet are safe and accounted for. We'll store them in our secure vault at the front desk. Given the value, I'd recommend picking them up in person with photo ID, or we can arrange insured shipping.",
            textZh: "安保刚打开了保险箱——两样东西都在。护照和金手链都安全，已经确认。我们会把它们存放在前台的保险库里。鉴于物品价值，建议您本人带证件来取，或者我们可以安排保价邮寄。",
            keyPhrases: [
              { en: "secure vault", zh: "保险库" },
              { en: "insured shipping", zh: "保价邮寄" },
            ],
            alternativeExpressions: [
              { textEn: "Great news — security found both. Passport and bracelet, safe and sound. We'll lock them in the front desk vault. Best to pick up with ID, or we can ship insured.", textZh: "好消息——安保找到了两样。护照和手链，安全无恙。锁在前台保险库。最好本人带证件来取，也可以保价寄。", actionHint: "safe and sound = 安然无恙; vault = 保险库", frequency: "common" },
            ],
            casualVersion: "Both found! Passport and bracelet are safe. We'll keep them in the vault. Best to pick up with ID, or we can ship insured.",
            formalityVariants: {
              casual: "Found both! Safe in the vault. Come with ID, or we'll ship insured.",
              standard: "Both items located — stored in our secure vault. Pick up with ID or arrange insured shipping.",
              formal: "I am pleased to report that our security team has opened the safe and located both items. Your passport and gold bracelet are safe and have been officially accounted for. They will be stored in our secure vault at the front desk. Given the considerable value of these items, I would strongly recommend collecting them in person with valid photographic identification. Alternatively, we can arrange fully insured shipping to your address.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, thank goodness! I'll have my sister pick them up — she lives in the city. Can she collect them on my behalf with a letter of authorization?",
            textZh: "太好了，谢天谢地！我让我姐去取——她住在那个城市。她能拿着授权书代我领取吗？",
            culturalNote:
              "让他人代取贵重物品通常需要 letter of authorization（授权书），写明授权人和被授权人的信息、物品描述和签名。代领人还需要出示自己的证件。",
            casualVersion: "Thank God! My sister can pick them up — can she do it with a letter of authorization from me?",
            commonMistake: {
              wrong: "My sister will come take them. I will write a paper for her.",
              correct: "Can she collect them on my behalf with a letter of authorization?",
              explanation: "on my behalf 是代替我的意思。letter of authorization 是授权书的标准说法。",
            },
            formalityVariants: {
              casual: "Thank God! Can my sister grab them with an authorization letter from me?",
              standard: "My sister can pick them up. Will a letter of authorization allow her to collect on my behalf?",
              formal: "What a tremendous relief. My sister resides in the city and could collect the items. Would she be permitted to do so on my behalf, provided she presents a letter of authorization?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Absolutely. We'll need a signed letter from you with your sister's full name and ID number, a description of the items, and your signature. Your sister will need to show her photo ID when picking up. You can email the letter to our front desk, and we'll verify everything before release.",
            textZh: "当然可以。我们需要您签名的授权书，写明您姐姐的全名和证件号、物品描述以及您的签名。您姐姐领取时需要出示带照片的证件。您可以把授权书发邮件到前台，我们会在交付前核实一切。",
            keyPhrases: [
              { en: "letter of authorization", zh: "授权书" },
              { en: "verify before release", zh: "交付前核实" },
            ],
            alternativeExpressions: [
              { textEn: "Sure. Email us a signed letter with her name, ID number, and what the items are. She brings her ID to pick up, we verify, and she's good. Simple.", textZh: "没问题。发邮件给我们一封签名信，写上她的名字、证件号和物品。她带证件来取，我们核实，就行了。简单。", actionHint: "she's good = 没问题了", frequency: "common" },
            ],
            casualVersion: "Sure — email us a signed letter with her name, ID number, and item descriptions. She shows her ID to pick up. We'll verify everything.",
            formalityVariants: {
              casual: "Yep — email a letter with her name and ID number. She shows ID, we verify, done.",
              standard: "Please email a signed letter with her name, ID, and item descriptions. She'll need photo ID at pickup.",
              formal: "Certainly. We shall require a signed letter of authorization from you containing your sister's full legal name and identification number, a detailed description of the items to be collected, and your personal signature. Your sister will be required to present valid photographic identification upon collection. You may email the authorization letter to our front desk, and we shall verify all details prior to releasing the items.",
            },
          },
        ],
      },
    ],
  },
];
