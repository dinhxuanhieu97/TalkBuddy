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
          },
          {
            speaker: "you",
            textEn: "Got it, I found the lockbox and I'm in now. The place looks great!",
            textZh: "找到了，我已经进来了。房间看起来很不错！",
            casualVersion: "Found it, I'm in! Place looks awesome.",
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
          },
          {
            speaker: "you",
            textEn: "Thanks! How does the air conditioning work? I can't figure out the remote.",
            textZh: "谢谢！空调怎么用？我搞不懂遥控器。",
            culturalNote:
              "国外空调遥控器和国内的可能不同，有些是墙上的恒温器（thermostat），直接调温度即可。",
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
          },
          {
            speaker: "you",
            textEn: "Got it. Is there a washing machine I can use?",
            textZh: "明白了。有洗衣机可以用吗？",
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
          },
          {
            speaker: "you",
            textEn: "No problem. One more question — where do I put the trash?",
            textZh: "没问题。再问一下，垃圾放哪里？",
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
          },
          {
            speaker: "you",
            textEn: "That's really helpful, thank you! I think I'm all set.",
            textZh: "太有用了，谢谢！我觉得都清楚了。",
            casualVersion: "Awesome, thanks! I think I'm good.",
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
          },
          {
            speaker: "you",
            textEn: "I checked — the switch is on, but the water is still cold even after running it for five minutes.",
            textZh: "我看了——开关是开着的，但水放了五分钟还是冷的。",
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
          },
          {
            speaker: "you",
            textEn: "That works. Also, I noticed the Wi-Fi is really slow. Pages take forever to load.",
            textZh: "可以。另外，Wi-Fi特别慢，网页半天打不开。",
            casualVersion: "Sure, 3 works. Oh and the Wi-Fi is super slow too.",
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
          },
          {
            speaker: "you",
            textEn: "I restarted it but it's still really slow. I'm getting maybe 1-2 Mbps.",
            textZh: "重启了，但还是很慢。速度大概只有1-2 Mbps。",
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
          },
          {
            speaker: "you",
            textEn: "That would be great, thanks. One more thing — the AC seems to be making a loud buzzing noise when I turn it on.",
            textZh: "那太好了，谢谢。还有一个问题——空调开的时候有很大的嗡嗡声。",
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
          },
          {
            speaker: "you",
            textEn: "OK, I'll try that. Should I be here when the maintenance person comes, or can you let them in?",
            textZh: "好，我试试。维修工来的时候我需要在吗，还是你可以让他进来？",
            culturalNote:
              "确认维修时是否需要在场很重要。有些房东有备用钥匙可以让维修工直接进入。",
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
          },
          {
            speaker: "you",
            textEn: "Sure, here's my passport and credit card.",
            textZh: "好的，这是我的护照和信用卡。",
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
          },
          {
            speaker: "you",
            textEn: "Thanks. Is there a locker for my stuff?",
            textZh: "谢谢。有储物柜放东西吗？",
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
          },
          {
            speaker: "you",
            textEn: "I'll take one, please. Can you tell me about the house rules?",
            textZh: "那我买一把。能跟我说说旅舍的规定吗？",
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
          },
          {
            speaker: "you",
            textEn: "Got it. What about the bathroom situation?",
            textZh: "明白了。浴室是什么情况？",
            casualVersion: "Cool. And the showers?",
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
          },
          {
            speaker: "you",
            textEn: "I'll rent a towel, please. Is checkout just returning the key card?",
            textZh: "那租一条毛巾。退房就是还门卡吗？",
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
          },
          {
            speaker: "you",
            textEn: "Sure. Let me read through it first. Can you explain the security deposit policy?",
            textZh: "好的，我先看一下。能说明一下押金政策吗？",
            culturalNote:
              "签合同前一定要仔细阅读，特别关注deposit（押金）、cancellation（取消政策）和damage（损坏赔偿）条款。不明白就问。",
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
          },
          {
            speaker: "you",
            textEn: "OK, that sounds fair. I've signed everything. Can we go see the apartment now?",
            textZh: "好的，听起来合理。我都签好了。我们现在可以去看公寓了吗？",
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
          },
          {
            speaker: "you",
            textEn: "Got it. What are the building rules I should know about?",
            textZh: "明白了。有什么大楼规定需要了解的？",
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
          },
          {
            speaker: "you",
            textEn: "What about garbage? How does trash and recycling work here?",
            textZh: "垃圾怎么处理？这里的垃圾分类是怎样的？",
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
          },
          {
            speaker: "you",
            textEn: "Thanks for the thorough walkthrough. If I have any questions later, what's the best way to reach you?",
            textZh: "谢谢你这么详细的介绍。以后有问题的话，怎么联系你最方便？",
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
          },
          {
            speaker: "you",
            textEn: "It seems to be coming from the pipe connection under the sink, not the faucet itself. It's more than a drip — there's a small but steady stream of water.",
            textZh: "看起来是从水槽下面的管道连接处漏的，不是龙头本身。不只是滴水——是一小股持续的水流。",
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
          },
          {
            speaker: "you",
            textEn: "Done — I turned it off and the leaking has stopped. When can someone come fix it?",
            textZh: "搞定了——关上了，不漏了。什么时候能来修？",
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
          },
          {
            speaker: "you",
            textEn: "9 to 12 works. While I have you, the dishwasher has also been acting up. It stops mid-cycle and shows an error code — \"E3\" on the display.",
            textZh: "9到12点可以。趁你在，洗碗机也有问题。它会在运行中途停掉，显示屏上显示错误代码「E3」。",
            casualVersion: "Sure. Oh, and the dishwasher's been weird too — stops halfway and flashes 'E3'.",
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
          },
          {
            speaker: "you",
            textEn: "I didn't know that was a thing. I'll clean it and try again. If it still doesn't work, can the plumber take a look at that too?",
            textZh: "我不知道还有这个。我清理一下再试。如果还是不行，水管工来的时候能一起看看吗？",
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
          },
          {
            speaker: "you",
            textEn: "Good to know. Will I get a confirmation for the work order?",
            textZh: "了解了。报修单我会收到确认吗？",
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
          },
          {
            speaker: "you",
            textEn: "Let's move then. Also, our tent is leaking from the seam. Is there a way to fix it, or can we switch to a different tent?",
            textZh: "那我们搬吧。另外，我们的帐篷缝合处在漏水。有办法修吗，还是可以换一顶？",
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
          },
          {
            speaker: "you",
            textEn: "The cabin sounds like a much better idea with the storm coming. Can we still use the campfire ring at the cabin?",
            textZh: "暴风雨要来的话，小木屋是更好的选择。小木屋那边还可以用篝火坑吗？",
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
          },
          {
            speaker: "you",
            textEn: "That's great. What's the total cost now? The tent site was $30 per night and we've already paid for two nights.",
            textZh: "太好了。现在总费用是多少？帐篷位每晚30美元，我们已经付了两晚。",
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
          },
          {
            speaker: "you",
            textEn: "That sounds very fair. Thank you for being so flexible and helpful!",
            textZh: "很合理。谢谢你这么灵活又热心！",
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
          },
          {
            speaker: "you",
            textEn: "Thank you, Karen. The room looks lovely! Is it okay if I use the desk for studying?",
            textZh: "谢谢你，Karen。房间很漂亮！我可以用书桌学习吗？",
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
          },
          {
            speaker: "you",
            textEn: "Of course, I'd like to know the rules.",
            textZh: "当然，我想了解一下规定。",
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
          },
          {
            speaker: "you",
            textEn: "That all makes sense. I should mention — I'm allergic to shellfish. Will that be a problem for meals?",
            textZh: "都明白了。我需要说一下——我对贝类海鲜过敏。吃饭方面会有问题吗？",
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
          },
          {
            speaker: "you",
            textEn: "I haven't! I'm excited to try it. Is there anything I can help with around the house?",
            textZh: "没吃过！很期待试试。有什么我可以帮忙做的吗？",
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
          },
          {
            speaker: "you",
            textEn: "Absolutely, no problem at all. I really appreciate your hospitality, Karen. I feel very welcome already.",
            textZh: "当然，完全没问题。真的很感谢你的热情招待，Karen。我已经感觉很受欢迎了。",
            culturalNote: "在寄宿家庭适当表达感谢很重要，但不需要过度客气。自然地融入日常生活是最好的方式。",
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
          },
          {
            speaker: "you",
            textEn: "I'd love that! Can I contribute something? Maybe I could make a Chinese dish to share?",
            textZh: "我很想去！我可以带点什么吗？也许我可以做一道中国菜分享？",
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
          },
          {
            speaker: "you",
            textEn: "I'll make spring rolls and fried rice — they're crowd pleasers. I just need some rice paper wrappers, ground pork, and a few vegetables. I can go with you to the store if that's easier.",
            textZh: "我做春卷和炒饭——大家一般都喜欢。我需要一些春卷皮、猪肉末和几种蔬菜。如果方便的话我可以跟你一起去超市。",
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
          },
          {
            speaker: "you",
            textEn: "Oh, I'm so sorry about that! I didn't realize the smell traveled that far. Of course, I'll make sure to finish cooking before 10. Would it help if I opened the window while cooking?",
            textZh: "哦，真的很抱歉！我不知道味道会传那么远。当然，我保证10点之前做完饭。做饭时开窗户会有帮助吗？",
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
          },
          {
            speaker: "you",
            textEn: "Everything's great, honestly! I really enjoy our dinners together. I do miss Chinese breakfast though — congee and steamed buns. The cereal and toast here is still taking some getting used to.",
            textZh: "一切都很好，真的！我很喜欢我们一起吃晚饭。不过我确实想念中式早餐——粥和包子。这里的麦片和烤面包还在慢慢适应。",
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
          },
          {
            speaker: "you",
            textEn: "I'd love to! How about this — I'll teach you a Chinese word every day at dinner. Today's word: 谢谢 — xièxie — it means 'thank you'. Xièxie for being such a wonderful host family!",
            textZh: "我很乐意！这样吧——我每天晚餐时教你们一个中文词。今天的词：谢谢——xièxie——意思是'thank you'。谢谢你们做这么好的寄宿家庭！",
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
          },
          {
            speaker: "you",
            textEn: "Thank you. The second issue is about cleanliness. When I checked in yesterday, there were stains on the bedsheets, the bathroom floor was dirty, and there were used towels left from the previous guest. It looks like the room wasn't properly cleaned.",
            textZh: "谢谢。第二个问题是卫生方面。昨天入住时，床单上有污渍，浴室地板很脏，还有上一位客人留下的用过的毛巾。看起来房间没有被好好清洁。",
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
          },
          {
            speaker: "you",
            textEn: "I'd prefer to move to a different room if possible — maybe on a higher floor, away from the noisy room. Can you also make sure the new room has been properly inspected?",
            textZh: "如果可以的话我想换个房间——最好在高一点的楼层，远离吵闹的房间。能确保新房间经过了检查吗？",
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
          },
          {
            speaker: "you",
            textEn: "I appreciate the upgrade. Given the terrible experience last night, I'd also like some form of compensation — maybe a discount on my stay?",
            textZh: "感谢升级。考虑到昨晚糟糕的体验，我还希望能有某种形式的补偿——也许住宿折扣？",
            culturalNote: "在欧美酒店，因为服务问题要求补偿是完全合理的。用 \"I'd like some form of compensation\" 比较礼貌但明确。",
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
          },
          {
            speaker: "you",
            textEn: "That's very generous, thank you. I appreciate you taking this seriously. I'll go ahead and move to Room 805.",
            textZh: "非常慷慨，谢谢你。感谢你认真对待这件事。我这就搬去805房间。",
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
          },
          {
            speaker: "you",
            textEn: "Several things. The listing says 'air conditioning' but there's only a fan. The 'fully equipped kitchen' has no microwave and the stove doesn't work. The bathroom has mold on the walls. And the 'quiet neighborhood' — there's construction right outside starting at 7 AM.",
            textZh: "好几个方面。页面写着\"有空调\"但只有一个风扇。\"全配厨房\"没有微波炉而且炉灶不能用。浴室墙上有霉菌。还有所谓的\"安静社区\"——外面早上7点就开始施工。",
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
          },
          {
            speaker: "you",
            textEn: "I appreciate the offer, but honestly, a 20% discount doesn't make up for a broken stove, mold in the bathroom, and no AC in this heat. I'd like a full refund for the remaining nights. I'm going to check out tomorrow and find somewhere else to stay.",
            textZh: "感谢你的提议，但说实话，打八折弥补不了坏炉灶、浴室霉菌和这么热没空调的情况。我想要剩余晚数的全额退款。我明天退房去找别的地方住。",
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
          },
          {
            speaker: "you",
            textEn: "I'll contact Airbnb support. Before I go, I want to document everything. I've taken photos of the mold, the broken stove, and the missing AC unit. Is that okay?",
            textZh: "我会联系Airbnb客服。走之前，我想记录一切。我已经拍了霉菌、坏炉灶和没有空调的照片。可以吗？",
            culturalNote: "在任何住宿投诉或纠纷中，拍照留证据是最重要的一步。照片是理赔和评价的关键依据。",
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
          },
          {
            speaker: "you",
            textEn: "I also want to be refunded for tonight since the stove and AC issues existed from day one. That means a full refund, not just the remaining nights.",
            textZh: "我还想退今晚的费用，因为炉灶和空调问题从第一天就存在。也就是说全额退款，不只是剩余晚数。",
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
          },
          {
            speaker: "you",
            textEn: "Fine, I'll do that. I'll also be leaving an honest review about my experience.",
            textZh: "好的，我会的。我也会留下一个关于我的经历的如实评价。",
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
          },
          {
            speaker: "you",
            textEn: "I'm Wang, I work as a software engineer. I'm looking for a quiet place close to downtown. What's included in the rent?",
            textZh: "我叫王，做软件工程师。我在找市中心附近安静的住处。租金包括什么？",
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
          },
          {
            speaker: "you",
            textEn: "Is the neighborhood safe? I'll be coming home late sometimes because of work.",
            textZh: "这个社区安全吗？我有时候因为工作会很晚回家。",
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
          },
          {
            speaker: "you",
            textEn: "Sounds good. One more question — is the apartment pet-friendly? I'm thinking about getting a cat.",
            textZh: "听起来不错。再问一个——这个公寓允许养宠物吗？我在考虑养一只猫。",
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
          },
          {
            speaker: "you",
            textEn: "Great, I'll see you Saturday at 2 PM then. Is there parking available?",
            textZh: "好的，那周六下午2点见。有停车位吗？",
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
          },
          {
            speaker: "you",
            textEn: "I just moved to the US six months ago, so I might not have a strong credit history. Is that a problem?",
            textZh: "我半年前才搬到美国，所以信用记录可能不太好。这有问题吗？",
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
          },
          {
            speaker: "you",
            textEn: "I can pay a larger deposit. What are the key terms in the lease I should know about?",
            textZh: "我可以付更多押金。租约里有什么关键条款需要了解的？",
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
          },
          {
            speaker: "you",
            textEn: "What's renter's insurance exactly? We don't have that in China. And can I negotiate the rent at all?",
            textZh: "租客保险具体是什么？中国没有这个。还有，租金可以商量吗？",
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
          },
          {
            speaker: "you",
            textEn: "That sounds fair. When can I move in, and how do I pay the first month's rent and deposit?",
            textZh: "听起来合理。什么时候可以搬进去？第一个月租金和押金怎么付？",
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
          },
          {
            speaker: "you",
            textEn: "What would the rate be? I was paying $129 per night through my original booking.",
            textZh: "房价是多少？我原来的预订是每晚129美元。",
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
          },
          {
            speaker: "you",
            textEn: "Is there any way to get it closer to my original rate? I'm a member of your rewards program.",
            textZh: "有没有办法接近我原来的价格？我是你们会员计划的会员。",
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
          },
          {
            speaker: "you",
            textEn: "Yes, please. Can I keep the same room? I've already unpacked everything.",
            textZh: "好的，麻烦了。我能保留同一间房间吗？我东西都拆开了。",
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
          },
          {
            speaker: "you",
            textEn: "Actually, could I also get some extra towels? And is late checkout possible on Thursday?",
            textZh: "对了，能多给几条毛巾吗？周四可以延迟退房吗？",
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
          },
          {
            speaker: "you",
            textEn: "Yes, a courtyard-facing room would be great. And if possible, could I get a higher floor? I'm currently on the 2nd floor.",
            textZh: "好的，朝院子的房间就太好了。如果可能的话，能不能住高一点的楼层？我现在住2楼。",
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
          },
          {
            speaker: "you",
            textEn: "Yes, please have someone help me. I have a few suitcases. Also, will the Wi-Fi password be the same in the new room?",
            textZh: "好的，请派人帮我搬。我有几个行李箱。还有，新房间的Wi-Fi密码一样吗？",
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
          },
          {
            speaker: "you",
            textEn: "Oh, I have my passport and some cash in the safe. Let me grab those first. And should I tip the bellhop?",
            textZh: "哦，保险箱里有我的护照和一些现金。让我先拿出来。行李员需要给小费吗？",
            culturalNote: "在美国，行李员帮你搬行李通常给2-5美元小费。如果行李很多可以适当多给。",
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
          },
          {
            speaker: "you",
            textEn: "That's very kind of you. Thank you for resolving this so quickly!",
            textZh: "你太好了。谢谢这么快解决了问题！",
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
          },
          {
            speaker: "you",
            textEn: "Wait, I see a $45 minibar charge, but I didn't use the minibar at all. And there's a $22 restaurant charge from Tuesday — I wasn't even at the hotel that day.",
            textZh: "等一下，我看到一笔45美元的迷你吧消费，但我完全没有用迷你吧。还有周二一笔22美元的餐厅消费——那天我根本不在酒店。",
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
          },
          {
            speaker: "you",
            textEn: "Sure, I'll wait. Also, I noticed the nightly rate is $129, but three nights should be $387. With the tax of 14.5%, the total should be about $443. But the bill shows $468. Can you explain the difference?",
            textZh: "好的，我等。另外我注意到每晚是129美元，三晚应该是387美元。加上14.5%的税应该是大约443美元。但账单显示468美元。能解释一下差额吗？",
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
          },
          {
            speaker: "you",
            textEn: "I don't remember seeing that when I booked. That's frustrating. Can you at least waive the resort fee since I didn't use the pool or gym?",
            textZh: "我不记得预订时看到了。挺烦的。能不能至少免掉度假设施费？我没用过泳池和健身房。",
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
          },
          {
            speaker: "you",
            textEn: "Alright, that's better. Can I get a receipt with all the adjustments clearly shown? I need it for my expense report.",
            textZh: "好吧，这样好多了。能给我一张清楚显示所有调整的收据吗？我需要用来报销。",
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
          },
          {
            speaker: "you",
            textEn: "My reservation number is HY-889234. The charge appeared on my card two days after checkout.",
            textZh: "我的预订号是 HY-889234。扣费是退房两天后出现在卡上的。",
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
          },
          {
            speaker: "you",
            textEn: "The lamp was already broken when I checked in! I remember noticing it on the first day. And I don't know about any carpet stain — it wasn't me. I didn't receive any notification about this charge either.",
            textZh: "那个灯我入住时就坏了！我记得第一天就注意到了。地毯污渍我不知道——不是我弄的。我也没收到任何关于这笔费用的通知。",
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
          },
          {
            speaker: "you",
            textEn: "Yes, please call me back. My number is 555-123-4567. I want the full $189 reversed. I took photos of the room when I checked in as a precaution — I can email them to you as evidence.",
            textZh: "好的，请回电话给我。号码是 555-123-4567。我要求全额退回189美元。入住时我作为预防拍了房间的照片——我可以发邮件给你作为证据。",
            culturalNote: "入住时拍照记录房间状况是很好的习惯。退房后如果被收取损坏费，有照片就是最好的证据。",
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
          },
          {
            speaker: "you",
            textEn: "Thank you. If this isn't resolved in 24 hours, I'll need to dispute the charge with my credit card company. I hope it doesn't come to that.",
            textZh: "谢谢。如果24小时内没解决，我就需要向信用卡公司提出争议了。希望不用走到那一步。",
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
          },
        ],
      },
    ],
  },
];
