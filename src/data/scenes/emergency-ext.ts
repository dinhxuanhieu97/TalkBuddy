import type { PresetScene } from "../scene-types";

// ============================================================
// 紧急场景扩展 — Emergency Extended Scenes
// 覆盖：911报警、盗窃、护照丢失、车祸、地震、火灾、走失同伴、
//       被跟踪、食物中毒、过敏反应、中暑、溺水、自然灾害、航班取消、
//       信用卡盗刷、酒店入侵、抛锚、迷路、诈骗、暴风雪、手机丢失、
//       行李被偷、儿童走失、动物咬伤、签证过期
// ============================================================

export const EMERGENCY_SCENES_EXT: PresetScene[] = [
  // ==================== 1. 拨打911报警 ====================
  {
    id: "emergency-call-911",
    category: "emergency",
    titleZh: "拨打911报警",
    titleEn: "Calling 911",
    description: "在美国遇到紧急情况时拨打911，向接线员描述情况并请求帮助",
    otherRole: "911接线员",
    otherRoleIcon: "📞",
    flows: [
      {
        id: "basic",
        titleZh: "拨打911基本流程",
        titleEn: "Basic 911 Call",
        description: "描述紧急情况、提供位置、等待救援",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "接线员",
            textEn: "911, what's your emergency?",
            textZh: "911，请问有什么紧急情况？",
            keyPhrases: [
              { en: "what's your emergency", zh: "什么紧急情况" },
            ],
            alternativeExpressions: [
              { textEn: "911, what are you reporting?", textZh: "911，您要报告什么？", actionHint: "接线员可能用不同方式问你发生了什么", frequency: "occasional" },
              { textEn: "This is 911, go ahead.", textZh: "这里是911，请说。", actionHint: "简洁的开场白，直接说你的紧急情况", frequency: "common" },
              { textEn: "911 emergency, what do you need?", textZh: "911紧急服务，您需要什么？", actionHint: "直接问你需要什么帮助", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I need help. Someone is injured on the street. We need an ambulance.",
            textZh: "我需要帮助。有人在街上受伤了。我们需要一辆救护车。",
            culturalNote: "拨打911后保持冷静，先说最关键的信息：需要什么帮助（警察/救护车/消防）。",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Okay, stay calm. Can you tell me your exact location?",
            textZh: "好的，请保持冷静。能告诉我您的确切位置吗？",
            keyPhrases: [
              { en: "stay calm", zh: "保持冷静" },
              { en: "exact location", zh: "确切位置" },
            ],
            alternativeExpressions: [
              { textEn: "All right, try to stay calm for me. Where are you right now?", textZh: "好的，尽量保持冷静。你现在在哪？", actionHint: "接线员会安抚你并要位置信息", frequency: "common" },
              { textEn: "Okay, I need you to take a breath. What's your address?", textZh: "好的，深呼吸。你的地址是什么？", actionHint: "可能直接问地址而不是位置", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm at the corner of 5th Avenue and 42nd Street, near a coffee shop.",
            textZh: "我在第五大道和42街的交叉口，一家咖啡店附近。",
            culturalNote: "提供位置时，用路口名称、附近标志性建筑或店铺来描述最有效。",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "An ambulance is on its way. Is the person conscious? Are they breathing?",
            textZh: "救护车正在赶来。伤者有意识吗？还在呼吸吗？",
            keyPhrases: [
              { en: "on its way", zh: "正在赶来" },
              { en: "conscious", zh: "有意识的" },
              { en: "breathing", zh: "呼吸" },
            ],
            alternativeExpressions: [
              { textEn: "Help is on the way. Is the person awake? Can you tell if they're breathing?", textZh: "救援正在来的路上。那个人醒着吗？能看出来在呼吸吗？", actionHint: "awake 和 conscious 意思差不多", frequency: "common" },
              { textEn: "We've dispatched an ambulance. Are they responsive?", textZh: "我们已经派了救护车。他们有反应吗？", actionHint: "responsive 意思是有回应、有反应", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, they're conscious but bleeding from the head. They seem dizzy.",
            textZh: "是的，他们有意识但头部在流血。看起来很头晕。",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Apply gentle pressure with a clean cloth to stop the bleeding. Don't move them. Help will be there in about 5 minutes.",
            textZh: "用干净的布轻轻按压止血。不要移动伤者。救援大约5分钟后到达。",
            keyPhrases: [
              { en: "apply pressure", zh: "按压" },
              { en: "don't move them", zh: "不要移动伤者" },
            ],
            alternativeExpressions: [
              { textEn: "Press down on the wound with a clean rag. Keep them still. EMS should be there in five.", textZh: "用干净的布按住伤口。让他们别动。急救人员大约五分钟到。", actionHint: "EMS = Emergency Medical Services 急救服务", frequency: "common" },
              { textEn: "Hold something against the cut to slow the bleeding. Don't let them get up. We're almost there.", textZh: "拿东西顶住伤口减缓出血。别让他们起来。我们快到了。", actionHint: "hold something against 就是用力按住的意思", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I'll stay with them. Thank you.",
            textZh: "好的，我会留在他们身边。谢谢。",
          },
        ],
      },
    ],
  },

  // ==================== 2. 报告盗窃 ====================
  {
    id: "emergency-report-theft",
    category: "emergency",
    titleZh: "报告盗窃",
    titleEn: "Reporting Theft",
    description: "向警察报告财物被盗，描述物品和事发经过",
    otherRole: "警察",
    otherRoleIcon: "👮",
    flows: [
      {
        id: "basic",
        titleZh: "报告盗窃基本流程",
        titleEn: "Basic Theft Report",
        description: "去警局报案、描述被盗物品、获取报案号",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'd like to report a theft. My bag was stolen.",
            textZh: "打扰了，我想报告一起盗窃案。我的包被偷了。",
            culturalNote: "在国外报案时一定要拿到police report（报案记录），保险理赔和补办证件都需要。",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "I'm sorry to hear that. When and where did it happen?",
            textZh: "很遗憾听到这个消息。是什么时候在哪里发生的？",
            keyPhrases: [
              { en: "when and where", zh: "什么时候在哪里" },
            ],
            alternativeExpressions: [
              { textEn: "That's terrible. Can you tell me what happened? Where were you?", textZh: "太糟糕了。能告诉我发生了什么吗？你当时在哪？", actionHint: "警察可能先表示同情再问细节", frequency: "common" },
              { textEn: "Okay, walk me through it. When did you notice it was gone?", textZh: "好的，跟我说说经过。你什么时候发现东西不见的？", actionHint: "walk me through it 就是让你从头说", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "About an hour ago, at the subway station on Broadway. Someone grabbed my backpack and ran.",
            textZh: "大约一小时前，在百老汇的地铁站。有人抢了我的背包就跑了。",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "Can you describe the suspect? And what was in the bag?",
            textZh: "能描述一下嫌疑人吗？包里有什么？",
            keyPhrases: [
              { en: "describe the suspect", zh: "描述嫌疑人" },
              { en: "what was in the bag", zh: "包里有什么" },
            ],
            alternativeExpressions: [
              { textEn: "Did you get a look at the person? What was inside your bag?", textZh: "你看清那个人了吗？包里面有什么？", actionHint: "get a look at 就是看到、看清", frequency: "common" },
              { textEn: "Do you remember what they looked like? And what'd you have in there?", textZh: "你记得他们长什么样吗？里面装了些什么？", actionHint: "what'd you have 是口语化说法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "A young man in a black hoodie. My bag had my wallet, phone, and passport inside.",
            textZh: "一个穿黑色连帽衫的年轻男子。包里有我的钱包、手机和护照。",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "I'll file a police report for you. You'll need the report number for your insurance claim and to replace your passport at the embassy.",
            textZh: "我会帮您立案。您需要报案号来申请保险理赔和去大使馆补办护照。",
            keyPhrases: [
              { en: "police report", zh: "报案记录" },
              { en: "report number", zh: "报案号" },
              { en: "insurance claim", zh: "保险理赔" },
            ],
            alternativeExpressions: [
              { textEn: "I'll get a report started. You're gonna need the case number for your insurance and for the embassy.", textZh: "我来立案。你需要案件号来做保险理赔和去大使馆。", actionHint: "case number 和 report number 一个意思", frequency: "common" },
              { textEn: "Let me write this up for you. Hang onto the report number — you'll need it for insurance and getting a new passport.", textZh: "让我给你记录下来。保留好报案号——保险理赔和补办护照都要用。", actionHint: "write this up 就是做记录", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. How long does it usually take to get the report?",
            textZh: "谢谢。通常多久能拿到报案记录？",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "You can pick it up tomorrow, or I can email you a copy. Just leave your contact information here.",
            textZh: "您明天可以来取，或者我可以通过电子邮件发给您。请在这里留下联系方式。",
            keyPhrases: [
              { en: "pick it up", zh: "来取" },
              { en: "email you a copy", zh: "邮件发给您副本" },
              { en: "contact information", zh: "联系方式" },
            ],
            alternativeExpressions: [
              { textEn: "Come back tomorrow to grab it, or I can shoot you a copy by email. Just leave me your info.", textZh: "明天过来拿，或者我邮件发一份给你。留个联系方式就行。", actionHint: "shoot you a copy 是非常口语的说法，意思是发一份给你", frequency: "common" },
              { textEn: "It'll be ready by tomorrow. Want me to email it to you? Drop your email here.", textZh: "明天就好了。要我发邮件给你吗？把邮箱写在这。", actionHint: "drop your email 就是留下邮箱", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 3. 护照丢失 ====================
  {
    id: "emergency-lost-passport",
    category: "emergency",
    titleZh: "护照丢失（大使馆）",
    titleEn: "Lost Passport at Embassy",
    description: "护照丢失后前往大使馆申请补办临时旅行证件",
    otherRole: "使馆工作人员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "补办护照基本流程",
        titleEn: "Passport Replacement Process",
        description: "到大使馆说明情况、填表、申请临时证件",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I've lost my passport and I need to apply for an emergency travel document.",
            textZh: "您好，我的护照丢了，我需要申请紧急旅行证件。",
            culturalNote: "护照丢失后第一步是报警拿到police report，然后再去大使馆。",
          },
          {
            speaker: "them",
            role: "使馆工作人员",
            textEn: "I'm sorry to hear that. Do you have a police report for the lost passport?",
            textZh: "很遗憾。您有护照丢失的报案记录吗？",
            keyPhrases: [
              { en: "police report", zh: "报案记录" },
              { en: "lost passport", zh: "护照丢失" },
            ],
            alternativeExpressions: [
              { textEn: "That's unfortunate. Did you file a report with the police?", textZh: "真不幸。你报警了吗？", actionHint: "file a report 就是报案", frequency: "common" },
              { textEn: "Okay. Have you reported it to the local authorities yet?", textZh: "好的。你跟当地警方报过案了吗？", actionHint: "local authorities 指当地执法部门", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, here's the police report. I filed it yesterday.",
            textZh: "有的，这是报案记录。我昨天报的案。",
          },
          {
            speaker: "them",
            role: "使馆工作人员",
            textEn: "Good. Do you have any other form of ID? A photocopy of your passport or a driver's license?",
            textZh: "好的。您还有其他身份证明吗？护照复印件或驾照？",
            keyPhrases: [
              { en: "form of ID", zh: "身份证明" },
              { en: "photocopy", zh: "复印件" },
            ],
            alternativeExpressions: [
              { textEn: "Great. Do you have any backup ID on you? A copy of your passport, maybe a license?", textZh: "好的。身上有其他证件吗？护照复印件，或者驾照？", actionHint: "backup ID 就是备用的身份证件", frequency: "common" },
              { textEn: "Do you happen to have anything else with your photo on it? Even a digital copy works.", textZh: "你有其他带照片的证件吗？电子版也行。", actionHint: "anything with your photo on it 指任何有照片的证件", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have a photo of my passport on my phone, and I also have my national ID card.",
            textZh: "我手机上有护照的照片，还有我的身份证。",
            culturalNote: "出国前一定要把护照信息页拍照保存在手机和云端，丢失时非常有用。",
          },
          {
            speaker: "them",
            role: "使馆工作人员",
            textEn: "That will work. Please fill out this application form. We can issue an emergency travel certificate, which will take about 3 business days.",
            textZh: "可以用这些。请填写这张申请表。我们可以签发紧急旅行证，大约需要3个工作日。",
            keyPhrases: [
              { en: "application form", zh: "申请表" },
              { en: "emergency travel certificate", zh: "紧急旅行证" },
              { en: "business days", zh: "工作日" },
            ],
            alternativeExpressions: [
              { textEn: "Those will do. Go ahead and fill out this form. We can get you a temporary travel document — usually takes about 3 working days.", textZh: "这些可以用。填一下这张表。我们可以给你出临时旅行证件——一般需要3个工作日。", actionHint: "those will do 表示这些够用了", frequency: "common" },
              { textEn: "That works. Here's the paperwork. We'll issue an emergency passport, give it about 3 days.", textZh: "可以。这是要填的文件。我们会出紧急护照，大约3天。", actionHint: "paperwork 指需要填的各种表格文件", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "My flight is in two days. Is there any way to expedite it?",
            textZh: "我的航班是后天的。有办法加急吗？",
          },
          {
            speaker: "them",
            role: "使馆工作人员",
            textEn: "We can try to expedite it. There's an additional fee of $50. Bring two passport photos and come back tomorrow morning.",
            textZh: "我们可以尝试加急处理。需要额外支付50美元。带两张护照照片明天早上来。",
            keyPhrases: [
              { en: "expedite", zh: "加急" },
              { en: "additional fee", zh: "额外费用" },
              { en: "passport photos", zh: "护照照片" },
            ],
            alternativeExpressions: [
              { textEn: "We can try to rush it. There's a $50 fee. Bring two photos and come back first thing tomorrow.", textZh: "我们可以试试加急。要50美元。带两张照片明天一早来。", actionHint: "rush it 就是加急处理", frequency: "common" },
              { textEn: "We might be able to fast-track it for an extra 50 bucks. Come in tomorrow morning with your photos.", textZh: "也许能加急处理，多付50块。明早带上照片过来。", actionHint: "fast-track 就是走快速通道，50 bucks 就是50美元", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 4. 车祸处理 ====================
  {
    id: "emergency-car-accident",
    category: "emergency",
    titleZh: "车祸处理",
    titleEn: "Car Accident",
    description: "在国外发生交通事故后与对方司机和警察沟通",
    otherRole: "对方司机/警察",
    otherRoleIcon: "🚗",
    flows: [
      {
        id: "basic",
        titleZh: "车祸处理基本流程",
        titleEn: "Basic Car Accident Procedure",
        description: "确认安全、交换信息、报警、等待处理",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Are you okay? Is anyone hurt?",
            textZh: "你没事吧？有人受伤吗？",
            culturalNote: "车祸后第一件事是确认所有人的安全，然后报警。不要擅自离开现场。",
          },
          {
            speaker: "them",
            role: "对方司机",
            textEn: "I'm fine, just shaken up. My car has some damage though. Let's exchange insurance information.",
            textZh: "我没事，只是有点惊吓。不过我的车有些损坏。我们交换一下保险信息吧。",
            keyPhrases: [
              { en: "shaken up", zh: "受到惊吓" },
              { en: "exchange insurance information", zh: "交换保险信息" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, I'm okay, just a bit rattled. Car's got a dent though. Let's swap insurance info.", textZh: "嗯，我没事，就是吓了一跳。车凹了一块。我们交换一下保险信息吧。", actionHint: "rattled 和 shaken up 一个意思，swap 就是交换", frequency: "common" },
              { textEn: "I'm all right, no injuries. But look at this damage. We need to trade info for insurance.", textZh: "我没受伤。但你看这损坏。我们得交换信息走保险。", actionHint: "trade info 就是交换信息", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, of course. Should we call the police to file a report?",
            textZh: "好的，当然。我们需要报警做记录吗？",
          },
          {
            speaker: "them",
            role: "对方司机",
            textEn: "Yes, for insurance purposes we should. I'll call 911. Can you take some photos of the damage?",
            textZh: "是的，为了保险理赔我们应该报警。我来打911。你能拍一些损坏的照片吗？",
            keyPhrases: [
              { en: "insurance purposes", zh: "保险目的" },
              { en: "photos of the damage", zh: "损坏照片" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, we should for the insurance. I'll dial 911. Can you snap some pictures of the cars?", textZh: "是的，保险需要。我打911。你能拍几张车的照片吗？", actionHint: "snap pictures 就是拍照片", frequency: "common" },
              { textEn: "Definitely, the insurance company will want a report. Let me call it in. Get some photos while we wait.", textZh: "当然，保险公司会要报告的。我来打电话报警。等的时候你拍几张照片。", actionHint: "call it in 就是打电话报案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my rental car insurance card and my driver's license.",
            textZh: "这是我的租车保险卡和驾照。",
            culturalNote: "在美国租车时务必买全险（full coverage），否则出事故个人承担会非常高。",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "I need both drivers' licenses, insurance cards, and vehicle registrations. Can you each describe what happened?",
            textZh: "我需要双方的驾照、保险卡和车辆登记。你们各自描述一下发生了什么？",
            keyPhrases: [
              { en: "driver's license", zh: "驾照" },
              { en: "vehicle registration", zh: "车辆登记" },
              { en: "describe what happened", zh: "描述发生了什么" },
            ],
            alternativeExpressions: [
              { textEn: "I'm gonna need IDs, insurance cards, and registrations from both of you. Who wants to go first — what happened?", textZh: "两位的证件、保险卡和车辆登记都给我。谁先说——怎么回事？", actionHint: "IDs 泛指各种身份证件", frequency: "common" },
              { textEn: "Licenses and insurance please, both parties. Now tell me your side of the story.", textZh: "双方的驾照和保险请出示。现在跟我说说你这边的情况。", actionHint: "your side of the story 就是你的说法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I was driving straight and the other car turned left into my lane. I tried to brake but couldn't avoid it.",
            textZh: "我在直行，对方车辆左转进入了我的车道。我试着刹车但没能避开。",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "I'll write up the accident report. You'll both receive a copy. Contact your insurance companies to start the claim process.",
            textZh: "我会写事故报告。你们各拿一份。联系你们的保险公司开始理赔流程。",
            keyPhrases: [
              { en: "accident report", zh: "事故报告" },
              { en: "claim process", zh: "理赔流程" },
            ],
            alternativeExpressions: [
              { textEn: "I'll get the paperwork done. You'll each get a copy. Call your insurance companies to file a claim.", textZh: "我来处理文件。你们各一份。打给你们的保险公司报案理赔。", actionHint: "file a claim 就是提交理赔申请", frequency: "common" },
              { textEn: "All right, I'm writing up the report. Both of you reach out to your insurance to get the ball rolling.", textZh: "好了，我写报告。你们两个联系保险公司开始走流程。", actionHint: "get the ball rolling 意思是开始推进", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 5. 地震避难 ====================
  {
    id: "emergency-earthquake",
    category: "emergency",
    titleZh: "地震避难",
    titleEn: "Earthquake Safety",
    description: "地震发生时寻求帮助、找到避难所、获取安全信息",
    otherRole: "酒店工作人员/救援人员",
    otherRoleIcon: "🏗️",
    flows: [
      {
        id: "basic",
        titleZh: "地震避难基本流程",
        titleEn: "Basic Earthquake Safety",
        description: "地震中求助、前往避难所、确认安全",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "What's happening? The building is shaking! Where should I go?",
            textZh: "怎么回事？大楼在摇！我应该去哪里？",
            culturalNote: "地震时记住口诀：Drop（趴下）、Cover（掩护）、Hold on（抓紧）。",
          },
          {
            speaker: "them",
            role: "酒店工作人员",
            textEn: "It's an earthquake! Get under a table or doorframe. Stay away from windows. Don't use the elevators!",
            textZh: "地震了！躲到桌子下面或门框旁。远离窗户。不要用电梯！",
            keyPhrases: [
              { en: "get under a table", zh: "躲到桌子下" },
              { en: "stay away from windows", zh: "远离窗户" },
              { en: "don't use the elevators", zh: "不要用电梯" },
            ],
            alternativeExpressions: [
              { textEn: "Earthquake! Drop and get under something solid! Keep away from the glass! No elevators!", textZh: "地震了！蹲下躲到结实的东西下面！远离玻璃！不要坐电梯！", actionHint: "drop 就是赶紧蹲下", frequency: "common" },
              { textEn: "Take cover now! Get under the desk! Don't go near the windows and whatever you do, don't take the elevator!", textZh: "赶紧找掩护！躲到桌子下面！别靠近窗户，千万别坐电梯！", actionHint: "take cover 就是找掩护", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there an evacuation plan? Where is the emergency exit?",
            textZh: "有疏散计划吗？紧急出口在哪？",
          },
          {
            speaker: "them",
            role: "酒店工作人员",
            textEn: "Once the shaking stops, follow the green exit signs. Take the stairs to the ground floor. The assembly point is in the parking lot across the street.",
            textZh: "等摇晃停止后，跟着绿色出口标志走。走楼梯到一楼。集合点在街对面的停车场。",
            keyPhrases: [
              { en: "exit signs", zh: "出口标志" },
              { en: "take the stairs", zh: "走楼梯" },
              { en: "assembly point", zh: "集合点" },
            ],
            alternativeExpressions: [
              { textEn: "When the shaking stops, follow the signs to the stairway. Head down to the first floor. We're meeting in the parking lot out front.", textZh: "摇晃停了以后，跟着标志走楼梯。下到一楼。我们在前面停车场集合。", actionHint: "out front 就是在前面", frequency: "common" },
              { textEn: "Wait till it stops, then use the stairs — not the elevator. Everyone meets at the lot across the street.", textZh: "等停了再走楼梯——不要坐电梯。所有人在街对面的停车场集合。", actionHint: "lot 就是 parking lot 停车场的简称", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there an emergency shelter nearby? I don't think it's safe to go back to my room.",
            textZh: "附近有紧急避难所吗？我觉得回房间不安全。",
          },
          {
            speaker: "them",
            role: "救援人员",
            textEn: "There's a shelter set up at the community center two blocks from here. Bring your ID and any medications you need. Water and blankets are provided.",
            textZh: "两个街区外的社区中心设了避难所。带上您的证件和需要的药物。那里提供水和毯子。",
            keyPhrases: [
              { en: "shelter", zh: "避难所" },
              { en: "community center", zh: "社区中心" },
              { en: "medications", zh: "药物" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, they set up a relief center at the community hall a couple blocks away. Grab your ID and any meds you need. They've got water and blankets.", textZh: "对，两个街区外的社区活动中心设了救助点。带上证件和需要的药。那边有水和毯子。", actionHint: "relief center 就是救助中心，meds 就是药", frequency: "common" },
              { textEn: "There's a safe spot at the rec center down the road. Bring essentials — your ID, medicine. They'll have supplies for you.", textZh: "沿路往前有个活动中心是安全点。带上必需品——证件、药。那边有物资供应。", actionHint: "rec center 是 recreation center 的缩写", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Are aftershocks expected? Should I stay outdoors?",
            textZh: "还会有余震吗？我应该待在室外吗？",
          },
          {
            speaker: "them",
            role: "救援人员",
            textEn: "Yes, aftershocks are likely. Stay in open areas away from buildings. Check local alerts on your phone for updates.",
            textZh: "是的，可能会有余震。待在远离建筑物的开阔区域。查看手机上的本地警报了解最新情况。",
            keyPhrases: [
              { en: "aftershocks", zh: "余震" },
              { en: "open areas", zh: "开阔区域" },
              { en: "local alerts", zh: "本地警报" },
            ],
            alternativeExpressions: [
              { textEn: "For sure, expect more tremors. Stay out in the open, away from any structures. Keep an eye on your phone for updates.", textZh: "肯定的，还会有震感。待在空旷地方，远离建筑。注意手机上的更新。", actionHint: "tremors 就是余震/震感", frequency: "common" },
              { textEn: "Yeah, there'll probably be more shaking. Don't go back inside. Check the news on your phone for the latest.", textZh: "是的，可能还会震。不要回室内。看手机上的新闻了解最新情况。", actionHint: "more shaking 直白地说还会震", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 6. 火灾逃生 ====================
  {
    id: "emergency-fire-evacuation",
    category: "emergency",
    titleZh: "火灾逃生",
    titleEn: "Fire Evacuation",
    description: "建筑物火灾时的疏散和求助",
    otherRole: "消防员/酒店工作人员",
    otherRoleIcon: "🚒",
    flows: [
      {
        id: "basic",
        titleZh: "火灾逃生基本流程",
        titleEn: "Basic Fire Evacuation",
        description: "发现火灾、疏散、向消防员求助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Fire! I can smell smoke in the hallway! What should I do?",
            textZh: "着火了！走廊里闻到烟味了！我应该怎么办？",
            culturalNote: "酒店入住时先确认最近的逃生通道位置，这是非常重要的安全习惯。",
          },
          {
            speaker: "them",
            role: "酒店工作人员",
            textEn: "Stay low to the ground and cover your mouth with a wet cloth. Don't open the door if it's hot. Use the emergency stairwell at the end of the hall.",
            textZh: "弯腰低行，用湿布捂住嘴。如果门是热的不要开门。走走廊尽头的紧急楼梯。",
            keyPhrases: [
              { en: "stay low", zh: "弯腰低行" },
              { en: "wet cloth", zh: "湿布" },
              { en: "emergency stairwell", zh: "紧急楼梯" },
            ],
            alternativeExpressions: [
              { textEn: "Get low to the floor and cover your nose and mouth! Feel the door first — if it's hot, don't open it. Use the fire stairs at the end of the hallway.", textZh: "趴低！捂住口鼻！先摸一下门——如果烫就别开。走走廊尽头的消防楼梯。", actionHint: "feel the door 就是用手背试探门是否烫", frequency: "common" },
              { textEn: "Crawl if you have to! Grab a wet towel for your face. Head for the staircase on the far end — don't touch the elevator!", textZh: "必要时爬着走！拿条湿毛巾捂脸。往最远端的楼梯走——别碰电梯！", actionHint: "crawl 就是爬行，far end 就是最远的那端", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "My friend is still in room 508. Can someone help them?",
            textZh: "我朋友还在508房间。有人能帮帮他们吗？",
          },
          {
            speaker: "them",
            role: "消防员",
            textEn: "We're checking every floor. What room number did you say? We'll send a team up. Please move to the assembly area outside.",
            textZh: "我们在逐层检查。你说哪个房间号？我们会派一组人上去。请你到外面的集合区域。",
            keyPhrases: [
              { en: "checking every floor", zh: "逐层检查" },
              { en: "assembly area", zh: "集合区域" },
            ],
            alternativeExpressions: [
              { textEn: "We're going floor by floor. What room? We'll get someone up there. You need to get outside to the meeting point.", textZh: "我们在逐层搜索。哪个房间？我们会派人上去。你需要到外面的集合点。", actionHint: "floor by floor 就是逐层", frequency: "common" },
              { textEn: "We're sweeping the building. Which room number? I'll send a crew. Head to the staging area outside now.", textZh: "我们在搜索整栋楼。几号房间？我派一组人去。你现在去外面的临时集合区。", actionHint: "sweeping 指全面搜索，staging area 是临时集合区", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Room 508, fifth floor. They might not have heard the alarm. Please hurry.",
            textZh: "508房间，五楼。他们可能没听到警报。请快一点。",
          },
          {
            speaker: "them",
            role: "消防员",
            textEn: "We're on it. Please wait at the assembly point and check in with the hotel manager. They're taking a headcount.",
            textZh: "我们马上去。请在集合点等候，和酒店经理确认签到。他们在清点人数。",
            keyPhrases: [
              { en: "we're on it", zh: "我们马上处理" },
              { en: "check in", zh: "签到确认" },
              { en: "headcount", zh: "清点人数" },
            ],
            alternativeExpressions: [
              { textEn: "Copy that, we're heading up. Go to the meeting point and find the hotel manager — they're counting heads.", textZh: "收到，我们上去。去集合点找酒店经理——他们在清点人数。", actionHint: "copy that 是收到的意思，counting heads 就是清点人数", frequency: "common" },
              { textEn: "On it. Get yourself to safety outside. The manager is doing a roll call at the gathering spot.", textZh: "马上去。你先到外面安全的地方。经理在集合点做点名。", actionHint: "roll call 就是点名", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "All my belongings are still in the room. When can I go back?",
            textZh: "我的东西都还在房间里。什么时候能回去？",
          },
          {
            speaker: "them",
            role: "消防员",
            textEn: "We need to secure the building first. It could be a few hours. The hotel will provide temporary accommodations if needed.",
            textZh: "我们需要先确保建筑安全。可能需要几个小时。如果需要，酒店会提供临时住所。",
            keyPhrases: [
              { en: "secure the building", zh: "确保建筑安全" },
              { en: "temporary accommodations", zh: "临时住所" },
            ],
            alternativeExpressions: [
              { textEn: "We gotta clear the building first. Could be a couple hours. The hotel will put you up somewhere if needed.", textZh: "我们得先清查整栋楼。可能需要几个小时。如果需要酒店会给你安排地方住。", actionHint: "put you up 就是给你安排住处", frequency: "common" },
              { textEn: "Can't let anyone back in till we've made sure it's safe. Might be a while. The hotel should arrange a room for you.", textZh: "确认安全前不能让任何人回去。可能要等一阵。酒店应该会给你安排房间。", actionHint: "might be a while 就是可能要等一段时间", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 7. 寻找走失同伴 ====================
  {
    id: "emergency-lost-companion",
    category: "emergency",
    titleZh: "寻找走失同伴",
    titleEn: "Finding Lost Companion",
    description: "在旅游景点或人群中与同伴走散后寻求帮助",
    otherRole: "工作人员/保安",
    otherRoleIcon: "🔍",
    flows: [
      {
        id: "basic",
        titleZh: "寻找走失同伴基本流程",
        titleEn: "Basic Lost Companion Search",
        description: "向工作人员描述同伴、请求广播寻人",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I've been separated from my travel companion. Can you help me?",
            textZh: "打扰了，我和我的旅伴走散了。能帮帮我吗？",
            culturalNote: "出门前约定一个走散后的集合点（如入口处），并确保手机充满电。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Of course. Can you describe your companion? What are they wearing?",
            textZh: "当然可以。能描述一下您的同伴吗？他们穿什么衣服？",
            keyPhrases: [
              { en: "describe your companion", zh: "描述您的同伴" },
              { en: "what are they wearing", zh: "穿什么衣服" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, I can help. What do they look like? What do they have on?", textZh: "当然，我能帮忙。他们长什么样？穿了什么？", actionHint: "what do they have on 就是穿了什么衣服", frequency: "common" },
              { textEn: "Absolutely. Tell me about them — height, hair, clothes?", textZh: "没问题。跟我说说——身高、头发、衣服？", actionHint: "直接问外貌特征", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "She's a Chinese woman, about 5 foot 4, wearing a red jacket and carrying a black purse. Her name is Li Wei.",
            textZh: "她是一位中国女性，大约1米63，穿红色夹克，背黑色手提包。她叫李薇。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "I can make an announcement over the PA system. Where should she go to meet you?",
            textZh: "我可以通过广播系统播报。她应该去哪里和你碰面？",
            keyPhrases: [
              { en: "announcement", zh: "广播通知" },
              { en: "PA system", zh: "广播系统" },
            ],
            alternativeExpressions: [
              { textEn: "I can page them on the loudspeaker. Where do you want them to meet you?", textZh: "我可以用广播呼叫他们。你想让他们去哪找你？", actionHint: "page 就是通过广播呼叫某人", frequency: "common" },
              { textEn: "Let me put out a call over the speakers. Where should they head to find you?", textZh: "我用广播通知一下。他们应该去哪找你？", actionHint: "put out a call 就是广播通知", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can she come to the information desk at the main entrance?",
            textZh: "她能来正门的咨询台吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Sure. I'll announce it now. In the meantime, does your companion have a phone? Maybe try calling or texting them.",
            textZh: "好的。我现在就广播。同时，您的同伴有手机吗？可以试着打电话或发短信。",
            keyPhrases: [
              { en: "in the meantime", zh: "同时" },
              { en: "try calling", zh: "试着打电话" },
            ],
            alternativeExpressions: [
              { textEn: "Done, it's going out now. Have you tried ringing their phone? Maybe shoot them a text too.", textZh: "好了，正在广播。你试过打他们电话吗？也可以发个短信。", actionHint: "ringing their phone 就是打电话，shoot them a text 就是发短信", frequency: "common" },
              { textEn: "I'll make the announcement. While we wait, give their cell a try — call or text.", textZh: "我来广播。等的时候你打一下他们手机——打电话或发短信。", actionHint: "give their cell a try 就是试着打他们手机", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Her phone might be out of battery. That's why I came to you for help.",
            textZh: "她的手机可能没电了。所以我才来找你帮忙。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "No problem. I've made the announcement. Please wait here. If she doesn't come within 30 minutes, we can contact security to do a search.",
            textZh: "没问题。我已经广播了。请在这里等候。如果30分钟内她没来，我们可以联系保安搜寻。",
            keyPhrases: [
              { en: "wait here", zh: "在这里等候" },
              { en: "contact security", zh: "联系保安" },
              { en: "do a search", zh: "搜寻" },
            ],
            alternativeExpressions: [
              { textEn: "All done. Hang tight here. If she doesn't show up in half an hour, we'll get security involved to help look for her.", textZh: "广播好了。在这等着。如果半小时她还没来，我们让保安帮忙找。", actionHint: "hang tight 就是等一下别走", frequency: "common" },
              { textEn: "The announcement went out. Sit tight. If there's no sign of her in 30, I'll radio security.", textZh: "广播发了。稍等。如果30分钟还没消息，我联系保安。", actionHint: "sit tight 就是耐心等待，radio 做动词是用对讲机联系", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 8. 被跟踪求助 ====================
  {
    id: "emergency-being-followed",
    category: "emergency",
    titleZh: "被跟踪求助",
    titleEn: "Being Followed",
    description: "感觉被人跟踪时向路人或商店寻求帮助",
    otherRole: "商店店员/路人",
    otherRoleIcon: "⚠️",
    flows: [
      {
        id: "basic",
        titleZh: "被跟踪求助基本流程",
        titleEn: "Basic Help When Being Followed",
        description: "进入商店求助、请求报警",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Please help me. I think someone has been following me for the last few blocks.",
            textZh: "请帮帮我。我觉得有人已经跟踪我好几条街了。",
            culturalNote: "如果感觉被跟踪，走进最近的商店或人多的地方，不要走偏僻小巷。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Come inside, you're safe here. Can you point out who's following you?",
            textZh: "进来吧，你在这里是安全的。能指出谁在跟踪你吗？",
            keyPhrases: [
              { en: "you're safe here", zh: "你在这里是安全的" },
              { en: "point out", zh: "指出" },
            ],
            alternativeExpressions: [
              { textEn: "Get in here, you're okay now. Which one is it? Can you show me?", textZh: "进来吧，你现在没事了。是哪个人？能指给我看吗？", actionHint: "which one is it 就是哪一个人", frequency: "common" },
              { textEn: "Come on in, don't worry. Do you see them? Where are they?", textZh: "快进来，别担心。你能看到他们吗？在哪？", actionHint: "对方可能直接问跟踪者在哪", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's the man in the gray coat standing across the street. He's been behind me since the subway.",
            textZh: "就是街对面穿灰色外套的男人。他从地铁站就一直跟在我后面。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "I see him. I'm going to call the police right now. Stay inside and don't leave alone. Would you like some water?",
            textZh: "我看到他了。我现在就报警。待在店里，不要一个人出去。你要喝点水吗？",
            keyPhrases: [
              { en: "call the police", zh: "报警" },
              { en: "stay inside", zh: "待在店里" },
              { en: "don't leave alone", zh: "不要一个人出去" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, I see the guy. I'm dialing the cops now. Don't go out there by yourself. Want some water or anything?", textZh: "嗯，我看到那个人了。我现在就打电话叫警察。别一个人出去。要喝水吗？", actionHint: "dialing the cops 就是打电话报警的口语说法", frequency: "common" },
              { textEn: "I've got eyes on him. Let me get the police on the line. Stay right here, okay? You need anything?", textZh: "我盯着他呢。我来打电话叫警察。就待在这，好吗？你需要什么吗？", actionHint: "I've got eyes on him 就是我看到他了/在盯着", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much. Can I use your phone? Mine is almost dead.",
            textZh: "太感谢了。我能用一下你的电话吗？我的手机快没电了。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course. The police said they'll send someone over in about 10 minutes. You can wait here as long as you need.",
            textZh: "当然可以。警察说大约10分钟派人过来。你需要在这里等多久都可以。",
            keyPhrases: [
              { en: "send someone over", zh: "派人过来" },
              { en: "as long as you need", zh: "需要多久都可以" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. Cops said they'll be here in about 10. Hang out as long as you want.", textZh: "没问题。警察说大约10分钟到。你想待多久都行。", actionHint: "cops 就是警察的口语说法", frequency: "common" },
              { textEn: "Of course. The police are sending a unit, about 10 minutes out. Feel free to stay.", textZh: "当然可以。警察正在派人，大约10分钟。随便待。", actionHint: "sending a unit 就是派一组警员", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I really appreciate your help. I was so scared.",
            textZh: "真的非常感谢你的帮助。我刚才很害怕。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Don't worry about it. When the police arrive, they'll want a description. In the future, you can also use your phone to share your live location with a friend.",
            textZh: "别客气。警察到了会要你描述情况。以后你也可以用手机和朋友分享实时位置。",
            keyPhrases: [
              { en: "description", zh: "描述" },
              { en: "share your live location", zh: "分享实时位置" },
            ],
            alternativeExpressions: [
              { textEn: "It's all good. The cops will ask you what the person looked like. Next time, share your location with someone on your phone in real time.", textZh: "没事的。警察会让你描述那个人的样子。下次用手机实时分享你的位置给朋友。", actionHint: "it's all good 就是没事/别担心", frequency: "common" },
              { textEn: "No worries. When the officers get here, they'll need details. Pro tip: use location sharing on your phone when you're out alone.", textZh: "别客气。警察来了会要你提供细节。小建议：一个人出门时用手机分享位置。", actionHint: "pro tip 就是实用小建议", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 9. 食物中毒 ====================
  {
    id: "emergency-food-poisoning",
    category: "emergency",
    titleZh: "食物中毒",
    titleEn: "Food Poisoning",
    description: "食物中毒后在国外就医，描述症状和求助",
    otherRole: "医生/护士",
    otherRoleIcon: "🤢",
    flows: [
      {
        id: "basic",
        titleZh: "食物中毒就医流程",
        titleEn: "Seeking Medical Help for Food Poisoning",
        description: "描述症状、回答医生问题、获取治疗",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I think I have food poisoning. I've been vomiting and having diarrhea since last night.",
            textZh: "我觉得我食物中毒了。从昨晚开始一直在呕吐和腹泻。",
            culturalNote: "就医时直接说症状即可，不用不好意思。医生需要准确信息来治疗。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "I'm sorry to hear that. What did you eat before the symptoms started? Do you have a fever?",
            textZh: "很遗憾。症状开始前你吃了什么？有没有发烧？",
            keyPhrases: [
              { en: "symptoms started", zh: "症状开始" },
              { en: "fever", zh: "发烧" },
            ],
            alternativeExpressions: [
              { textEn: "That sounds rough. What'd you eat before you started feeling sick? Running a temperature?", textZh: "听起来很难受。你感觉不舒服之前吃了什么？有没有发烧？", actionHint: "running a temperature 就是发烧的口语说法", frequency: "common" },
              { textEn: "Okay, talk me through what you had to eat. Any fever? When did it start?", textZh: "好的，跟我说说你吃了什么。发烧吗？什么时候开始的？", actionHint: "talk me through 就是详细说给我听", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I had seafood at a restaurant yesterday afternoon. I've been feeling dizzy and I have stomach cramps.",
            textZh: "昨天下午我在餐厅吃了海鲜。一直感觉头晕，胃也痉挛。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "It sounds like food poisoning. I'm going to start you on an IV drip for dehydration and give you some anti-nausea medication.",
            textZh: "听起来像食物中毒。我会先给你打点滴防脱水，再给你一些止吐药。",
            keyPhrases: [
              { en: "IV drip", zh: "打点滴" },
              { en: "dehydration", zh: "脱水" },
              { en: "anti-nausea medication", zh: "止吐药" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, classic food poisoning. Let's get you on some fluids through an IV and something to stop the nausea.", textZh: "嗯，典型的食物中毒。先给你挂上点滴补水，再给你一些止吐的药。", actionHint: "get you on some fluids 就是给你补液", frequency: "common" },
              { textEn: "That's definitely food poisoning. I'm hooking you up to an IV for hydration and giving you something for the vomiting.", textZh: "这确实是食物中毒。我给你接上点滴补水，再给你开点止吐药。", actionHint: "hooking you up to an IV 就是接上点滴", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need to stay in the hospital? I have travel insurance — here's my card.",
            textZh: "我需要住院吗？我有旅行保险——这是我的保险卡。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Probably not, but I want to keep you here for a few hours for observation. Drink clear fluids and avoid solid food for 24 hours.",
            textZh: "可能不需要，但我想留你观察几个小时。喝清流质，24小时内不要吃固体食物。",
            keyPhrases: [
              { en: "observation", zh: "观察" },
              { en: "clear fluids", zh: "清流质" },
              { en: "solid food", zh: "固体食物" },
            ],
            alternativeExpressions: [
              { textEn: "Probably not, but I want to keep an eye on you for a few hours. Stick to liquids — water, broth, that kind of thing. No real food for a day.", textZh: "应该不用，但我想观察你几个小时。只喝流质——水、清汤那些。一天内不要吃固体食物。", actionHint: "keep an eye on you 就是观察你", frequency: "common" },
              { textEn: "You should be fine, but let's watch you for a bit. Sip water and clear stuff only. Hold off on eating anything solid for 24 hours.", textZh: "你应该没事，但让我们观察一下。只小口喝水和清流质。24小时内别吃固体。", actionHint: "hold off on 就是暂时不要做某事", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "When will I feel better? I have a flight the day after tomorrow.",
            textZh: "什么时候会好一些？我后天有航班。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Most food poisoning clears up within 48 hours. Rest, stay hydrated, and take the medication I prescribe. You should be fine to fly.",
            textZh: "大多数食物中毒48小时内会好转。休息、多喝水、按我开的药吃。你应该可以坐飞机。",
            keyPhrases: [
              { en: "clears up", zh: "好转" },
              { en: "stay hydrated", zh: "多喝水" },
              { en: "prescribe", zh: "开处方" },
            ],
            alternativeExpressions: [
              { textEn: "You should bounce back within a couple days. Get lots of rest, keep drinking water, and take the meds I give you. Flying should be no problem.", textZh: "你应该两天内就能恢复。多休息，多喝水，吃我给你开的药。坐飞机没问题。", actionHint: "bounce back 就是恢复", frequency: "common" },
              { textEn: "These things usually run their course in 48 hours. Take it easy, hydrate, and follow the prescription. You'll be good to fly.", textZh: "这种情况通常48小时会自行好转。放松、补水、按处方吃药。坐飞机没问题的。", actionHint: "run their course 就是自然发展直到结束", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 10. 过敏反应 ====================
  {
    id: "emergency-allergic-reaction",
    category: "emergency",
    titleZh: "过敏反应",
    titleEn: "Allergic Reaction",
    description: "突发严重过敏反应时紧急求助",
    otherRole: "急诊医生/同行者",
    otherRoleIcon: "💊",
    flows: [
      {
        id: "basic",
        titleZh: "过敏反应紧急处理",
        titleEn: "Emergency Allergic Reaction",
        description: "描述过敏症状、使用EpiPen、急诊就医",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I'm having an allergic reaction. My throat is swelling and I can't breathe well. I'm allergic to peanuts.",
            textZh: "我过敏发作了。我的喉咙在肿，呼吸困难。我对花生过敏。",
            culturalNote: "如果你有严重过敏史，随身携带EpiPen（肾上腺素笔）和过敏卡片是救命的习惯。",
          },
          {
            speaker: "them",
            role: "同行者",
            textEn: "Oh no! Do you have an EpiPen? Where is it? I'm calling 911 right now!",
            textZh: "天哪！你有肾上腺素笔吗？在哪里？我现在就打911！",
            keyPhrases: [
              { en: "EpiPen", zh: "肾上腺素笔" },
              { en: "calling 911", zh: "打911" },
            ],
            alternativeExpressions: [
              { textEn: "Oh God! You got your Epi? Where is it? I'm calling for help right now!", textZh: "天哪！你有肾上腺素笔吗？在哪？我现在就打电话叫救护车！", actionHint: "Epi 是 EpiPen 的简称", frequency: "common" },
              { textEn: "Okay okay, do you have your allergy shot? Tell me where it is! I'm getting 911 on the phone!", textZh: "好好，你有过敏针吗？告诉我在哪！我在打911！", actionHint: "allergy shot 在这里指 EpiPen", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's in my bag, the side pocket. The blue case. Please inject it into my outer thigh.",
            textZh: "在我包里，侧袋。蓝色盒子。请打在我的大腿外侧。",
          },
          {
            speaker: "them",
            role: "急诊医生",
            textEn: "You're at the ER now. The EpiPen helped, but we need to monitor you. What exactly did you eat?",
            textZh: "你已经到急诊室了。肾上腺素笔起了作用，但我们需要观察你。你到底吃了什么？",
            keyPhrases: [
              { en: "ER", zh: "急诊室" },
              { en: "monitor you", zh: "观察你" },
            ],
            alternativeExpressions: [
              { textEn: "You're in the emergency room. The Epi kicked in, which is good, but we still need to watch you. What did you eat exactly?", textZh: "你在急诊室了。肾上腺素起效了，这是好事，但我们还需要观察。你到底吃了什么？", actionHint: "kicked in 就是（药物）起效了", frequency: "common" },
              { textEn: "Good news, the EpiPen did its job. But you're staying here so we can keep tabs on you. Tell me what you consumed.", textZh: "好消息，肾上腺素笔起作用了。但你要留在这里我们好观察。告诉我你吃了什么。", actionHint: "keep tabs on you 就是持续观察你", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I ordered a salad at the restaurant. I told them no peanuts, but I think there was peanut oil in the dressing.",
            textZh: "我在餐厅点了沙拉。我说了不要花生，但我觉得沙拉酱里有花生油。",
          },
          {
            speaker: "them",
            role: "急诊医生",
            textEn: "That can happen. We're giving you antihistamines and steroids through the IV. We need to observe you for at least 4 hours in case of a secondary reaction.",
            textZh: "这种情况会发生。我们正在通过点滴给你抗组胺药和类固醇。至少要观察4小时以防二次反应。",
            keyPhrases: [
              { en: "antihistamines", zh: "抗组胺药" },
              { en: "steroids", zh: "类固醇" },
              { en: "secondary reaction", zh: "二次反应" },
            ],
            alternativeExpressions: [
              { textEn: "It happens. We're pushing some allergy meds and steroids through your IV. You need to stay for at least 4 hours — sometimes the reaction comes back.", textZh: "这种事会发生。我们正在通过点滴给你抗过敏药和类固醇。你至少要留4个小时——有时反应会反复。", actionHint: "pushing meds 是医疗口语，指通过IV给药", frequency: "common" },
              { textEn: "Not uncommon with hidden allergens. I'm giving you antihistamines and a steroid drip. We watch you 4 hours minimum in case it flares up again.", textZh: "隐藏的过敏原导致这种事不少见。我给你抗组胺药和类固醇点滴。至少观察4小时以防再发作。", actionHint: "flares up 就是突然发作/加重", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will I be okay? Do I need to be admitted?",
            textZh: "我会没事吧？需要住院吗？",
          },
          {
            speaker: "them",
            role: "急诊医生",
            textEn: "You're responding well. You likely won't need to be admitted. I'll prescribe a new EpiPen and some antihistamines. Always carry your allergy card when eating out abroad.",
            textZh: "你恢复得不错。可能不需要住院。我会给你开新的肾上腺素笔和一些抗组胺药。在国外吃饭一定要随身带过敏卡。",
            keyPhrases: [
              { en: "responding well", zh: "恢复得不错" },
              { en: "allergy card", zh: "过敏卡" },
            ],
            alternativeExpressions: [
              { textEn: "You're doing great. Probably won't need to admit you. I'll write you a script for a new EpiPen and antihistamines. Make sure you always have your allergy info on you when eating out.", textZh: "你恢复得很好。应该不需要住院。我给你开新的肾上腺素笔和抗组胺药的处方。在外面吃饭一定要随身带过敏信息。", actionHint: "write you a script 就是给你开处方", frequency: "common" },
              { textEn: "Looking good. You can probably go home. I'll get you a new Epi and some Benadryl to carry. And seriously, get an allergy card — it could save your life.", textZh: "看起来不错。你大概可以回去了。我给你配新的肾上腺素笔和苯海拉明随身带。说真的，弄一张过敏卡——能救命。", actionHint: "Benadryl 是常见的抗过敏药品牌名", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 11. 中暑 ====================
  {
    id: "emergency-heat-stroke",
    category: "emergency",
    titleZh: "中暑",
    titleEn: "Heat Stroke",
    description: "在炎热天气中出现中暑症状时寻求帮助",
    otherRole: "急救人员/路人",
    otherRoleIcon: "☀️",
    flows: [
      {
        id: "basic",
        titleZh: "中暑急救流程",
        titleEn: "Heat Stroke First Aid",
        description: "识别中暑症状、求助、降温处理",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I don't feel well. I'm very dizzy and my skin feels really hot. I think it might be heat stroke.",
            textZh: "我感觉不太好。很头晕，皮肤摸起来很烫。我觉得可能是中暑了。",
            culturalNote: "中暑很危险，核心体温过高可能致命。如果看到有人皮肤发红发烫、意识模糊，立即拨打急救电话。",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Let's get you into the shade right away. Here, sit down on this bench. I'll get you some water.",
            textZh: "我们赶紧到阴凉处。来，坐在这个长椅上。我去给你拿水。",
            keyPhrases: [
              { en: "into the shade", zh: "到阴凉处" },
              { en: "sit down", zh: "坐下" },
            ],
            alternativeExpressions: [
              { textEn: "Come over here, out of the sun. Sit down, take it easy. I'll grab you some water.", textZh: "过来这边，别晒太阳了。坐下，放松。我去给你拿水。", actionHint: "out of the sun 就是别晒了", frequency: "common" },
              { textEn: "Whoa, you don't look good. Let's get you somewhere cool. Here, have a seat. I'll find you something to drink.", textZh: "哎，你脸色不好。我们找个凉快的地方。来，坐这。我给你找点喝的。", actionHint: "you don't look good 就是你看起来不太好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I feel like I might faint. I've been walking in the sun for hours.",
            textZh: "谢谢。我感觉可能要晕倒了。我在太阳下走了好几个小时。",
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "Your body temperature is very high. We need to cool you down. I'm placing cold packs on your neck and armpits. Drink this water slowly.",
            textZh: "你的体温非常高。我们需要给你降温。我把冰袋放在你的脖子和腋下。慢慢喝水。",
            keyPhrases: [
              { en: "cool you down", zh: "给你降温" },
              { en: "cold packs", zh: "冰袋" },
              { en: "drink slowly", zh: "慢慢喝" },
            ],
            alternativeExpressions: [
              { textEn: "Your temp is way up. We gotta bring it down. I'm putting ice packs on your neck and underarms. Take small sips of water.", textZh: "你体温太高了。我们得降下来。我把冰袋放在你脖子和腋下。小口小口喝水。", actionHint: "your temp is way up 就是你体温太高了", frequency: "common" },
              { textEn: "You're burning up. Let me get some cold compresses on you — neck, armpits. Don't chug the water, just sip it.", textZh: "你烧得厉害。我给你敷冷敷——脖子、腋下。别大口灌水，小口喝。", actionHint: "burning up 就是发烧很严重，chug 就是大口猛灌", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I feel nauseous. Is heat stroke serious?",
            textZh: "我想吐。中暑严重吗？",
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "Heat stroke can be serious if untreated. We should take you to the hospital to be safe. Are you traveling alone?",
            textZh: "中暑如果不治疗会很严重。为安全起见我们应该送你去医院。你是一个人旅行吗？",
            keyPhrases: [
              { en: "untreated", zh: "不治疗" },
              { en: "to be safe", zh: "为安全起见" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, heat stroke is no joke. We should get you to a hospital just in case. Are you here by yourself?", textZh: "是的，中暑可不能开玩笑。为了保险我们应该送你去医院。你是自己来的吗？", actionHint: "no joke 就是很严重不能当儿戏", frequency: "common" },
              { textEn: "It can get dangerous fast if we don't treat it. I think you need to go to the ER. You traveling solo?", textZh: "不处理的话会很快变危险。我觉得你需要去急诊。你一个人旅行的吗？", actionHint: "traveling solo 就是一个人旅行", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm with a friend but they went to get food. Can you call them? Their number is on my phone.",
            textZh: "我和朋友一起的，但他们去买吃的了。能帮我打电话给他们吗？号码在我手机里。",
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "Sure, I'll call them. For now, keep sipping water and stay out of the sun. Try to avoid being outside during peak hours — between 11 AM and 3 PM.",
            textZh: "好的，我帮你打。现在继续小口喝水，不要晒太阳。尽量避免在上午11点到下午3点的高温时段待在户外。",
            keyPhrases: [
              { en: "sipping water", zh: "小口喝水" },
              { en: "peak hours", zh: "高温时段" },
            ],
            alternativeExpressions: [
              { textEn: "I'll give them a ring. Keep drinking, little sips. And stay out of the sun — especially between 11 and 3, that's when it's the worst.", textZh: "我帮你打。继续喝水，小口喝。别晒太阳——尤其是11点到3点，那是最热的时候。", actionHint: "give them a ring 就是给他们打电话", frequency: "common" },
              { textEn: "Sure, I'll call them for you. Keep hydrating. And next time, avoid being outdoors midday — that's when the heat really hits.", textZh: "好的，我帮你打。继续补水。下次别在正午出门——那时候热得最厉害。", actionHint: "midday 就是正午", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 12. 溺水救援 ====================
  {
    id: "emergency-drowning",
    category: "emergency",
    titleZh: "溺水救援",
    titleEn: "Drowning Emergency",
    description: "在海滩或泳池发现有人溺水时呼救",
    otherRole: "救生员",
    otherRoleIcon: "🏊",
    flows: [
      {
        id: "basic",
        titleZh: "溺水求助基本流程",
        titleEn: "Basic Drowning Emergency",
        description: "发现险情、呼救、配合救生员",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Help! Someone is drowning out there! They're struggling in the water!",
            textZh: "救命！有人在那边溺水了！他们在水里挣扎！",
            culturalNote: "溺水者通常无法大声呼救。如果看到有人在水中头部上下浮沉、双臂拍打水面，立即呼叫救生员。",
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "I see them! Everyone, clear the water! Call 911! Can you throw that life ring toward them?",
            textZh: "我看到了！所有人出水！打911！你能把那个救生圈扔向他们吗？",
            keyPhrases: [
              { en: "clear the water", zh: "出水/离开水域" },
              { en: "life ring", zh: "救生圈" },
            ],
            alternativeExpressions: [
              { textEn: "I got it! Everybody out of the water now! Someone call 911! Toss that life preserver out there!", textZh: "我看到了！所有人现在出水！快打911！把那个救生设备扔过去！", actionHint: "life preserver 和 life ring 一个意思", frequency: "common" },
              { textEn: "I see them! Everyone get out! Get me that floaty ring — and somebody dial 911!", textZh: "我看到了！所有人出来！把那个浮圈给我——谁来打911！", actionHint: "floaty ring 是救生圈的非正式说法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I threw it but it didn't reach them. They're too far out. Should I swim to help?",
            textZh: "我扔了但够不到他们。他们太远了。我需要游过去帮忙吗？",
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "No! Do NOT go in the water. A drowning person can pull you under. I'm going in with a rescue board. Keep watching them and point so I can see where they are.",
            textZh: "不要！不要下水。溺水的人可能把你拖下去。我带救援板下去。你继续盯着他们并指给我看位置。",
            keyPhrases: [
              { en: "do not go in", zh: "不要下水" },
              { en: "pull you under", zh: "把你拖下去" },
              { en: "rescue board", zh: "救援板" },
            ],
            alternativeExpressions: [
              { textEn: "Stay on the beach! Don't jump in — they'll drag you down! I'm going with my board. Keep pointing at them so I don't lose sight!", textZh: "待在岸上！别跳下去——他们会把你拽下去的！我带板子下去。一直指着他们别让我看丢了！", actionHint: "drag you down 就是把你拽下去", frequency: "common" },
              { textEn: "Do NOT swim out there! A panicking swimmer will take you both under. I'm heading in now. Keep your eyes on them and show me where!", textZh: "不要游过去！惊慌的溺水者会把你们俩都拽下水。我现在下去。盯紧他们指给我看！", actionHint: "panicking swimmer 指惊慌的溺水者", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "They're over there, about 30 meters out, to the left of that buoy!",
            textZh: "他们在那边，大约30米远，在那个浮标左边！",
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "Got them! They're breathing. Help me pull them onto the beach. Has anyone called 911?",
            textZh: "抓到了！他们还在呼吸。帮我把他们拉上沙滩。有人打911了吗？",
            keyPhrases: [
              { en: "breathing", zh: "在呼吸" },
              { en: "pull them onto the beach", zh: "拉上沙滩" },
            ],
            alternativeExpressions: [
              { textEn: "I've got them! They're alive, still breathing. Help me get them out of the water. Did someone get 911?", textZh: "我抓到了！还活着，还在呼吸。帮我把他们弄出水。有人打911了吗？", actionHint: "I've got them 就是我抓住他们了", frequency: "common" },
              { textEn: "Okay I got them, they're breathing. Give me a hand pulling them to shore. Anybody call for an ambulance?", textZh: "好了我抓住了，在呼吸。帮我把他们拉到岸上。有人叫救护车了吗？", actionHint: "give me a hand 就是帮帮忙", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, someone called. An ambulance is on the way. What else can I do?",
            textZh: "是的，有人打了。救护车在来的路上。我还能做什么？",
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "Help keep them on their side in case they vomit. Keep them warm with a towel. The paramedics will take it from here.",
            textZh: "帮忙让他们侧躺以防呕吐。用毛巾给他们保暖。急救人员到了会接手。",
            keyPhrases: [
              { en: "on their side", zh: "侧躺" },
              { en: "keep them warm", zh: "保暖" },
              { en: "paramedics", zh: "急救人员" },
            ],
            alternativeExpressions: [
              { textEn: "Roll them onto their side so they don't choke if they throw up. Cover them with something warm. The EMTs are almost here.", textZh: "把他们翻成侧躺，万一吐了不会呛到。找东西给他们盖上保暖。急救人员快到了。", actionHint: "EMTs = Emergency Medical Technicians 急救技术员", frequency: "common" },
              { textEn: "Turn them on their side — recovery position. Wrap a towel around them. First responders will handle the rest.", textZh: "让他们侧躺——恢复体位。用毛巾裹住他们。急救人员到了会处理其余的。", actionHint: "recovery position 是医学上的恢复体位", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 13. 自然灾害警报 ====================
  {
    id: "emergency-natural-disaster-warning",
    category: "emergency",
    titleZh: "自然灾害警报",
    titleEn: "Natural Disaster Warning",
    description: "收到飓风/龙卷风等自然灾害预警时了解避险信息",
    otherRole: "酒店前台/广播",
    otherRoleIcon: "🌪️",
    flows: [
      {
        id: "basic",
        titleZh: "自然灾害应对流程",
        titleEn: "Responding to Natural Disaster Warning",
        description: "理解警报、准备物资、前往安全区域",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I just got an emergency alert on my phone about a hurricane. What should I do?",
            textZh: "我刚在手机上收到关于飓风的紧急警报。我应该怎么办？",
            culturalNote: "美国的紧急警报系统（EAS）会直接推送到手机，即使没有SIM卡也能收到。收到后立即关注。",
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "A hurricane warning has been issued. The hotel is preparing. We recommend staying indoors. We have an emergency shelter in the basement.",
            textZh: "已经发布了飓风警告。酒店正在准备。我们建议留在室内。地下室有紧急避难所。",
            keyPhrases: [
              { en: "hurricane warning", zh: "飓风警告" },
              { en: "staying indoors", zh: "留在室内" },
              { en: "emergency shelter", zh: "紧急避难所" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, there's a hurricane headed our way. We're getting ready. Best to stay inside. We've got a safe room downstairs.", textZh: "是的，有飓风要来了。我们在准备。最好留在室内。楼下有安全房间。", actionHint: "headed our way 就是向我们这边来了", frequency: "common" },
              { textEn: "We got the alert too. The hotel's on it. Don't go outside. We have a designated shelter area in the basement — head there if it gets bad.", textZh: "我们也收到了警报。酒店正在准备。别出去。地下室有指定的避难区域——情况严重了就去那里。", actionHint: "designated 就是指定的", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Should I stock up on water and food? How long will it last?",
            textZh: "需要囤水和食物吗？会持续多久？",
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "The storm is expected to hit tonight and last about 12 hours. We're providing water and snacks in the shelter. Fill your bathtub with water as a backup.",
            textZh: "暴风预计今晚到达，持续约12个小时。我们在避难所提供水和零食。把浴缸装满水以备不时之需。",
            keyPhrases: [
              { en: "expected to hit", zh: "预计到达" },
              { en: "fill your bathtub", zh: "把浴缸装满水" },
              { en: "as a backup", zh: "以备不时之需" },
            ],
            alternativeExpressions: [
              { textEn: "It should roll in tonight and last about 12 hours. We'll have supplies in the shelter. Oh, and fill up your tub with water just in case.", textZh: "今晚应该就到了，持续大约12个小时。避难所里有物资。对了，把浴缸装满水以防万一。", actionHint: "roll in 就是（暴风雨）到来", frequency: "common" },
              { textEn: "They're saying it'll make landfall tonight, 12-hour storm. There'll be water and food downstairs. Pro tip — fill your bath, you might lose water pressure.", textZh: "他们说今晚登陆，12小时的暴风。楼下会有水和食物。提示一下——把浴缸灌满，可能会断水。", actionHint: "make landfall 就是（飓风）登陆", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about my flight tomorrow? Will the airport be open?",
            textZh: "我明天的航班怎么办？机场会开吗？",
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "The airport will likely be closed through tomorrow. Check with your airline — most will rebook you for free due to the weather. We can extend your stay at no extra charge.",
            textZh: "机场明天很可能关闭。联系你的航空公司——大多数会因天气免费改签。我们可以免费延长你的住宿。",
            keyPhrases: [
              { en: "rebook", zh: "改签" },
              { en: "at no extra charge", zh: "不额外收费" },
            ],
            alternativeExpressions: [
              { textEn: "The airport's probably gonna be shut down tomorrow. Call your airline — they should put you on another flight for free. We'll let you stay an extra night, no charge.", textZh: "机场明天可能关闭。打电话给航空公司——他们应该会免费给你换航班。我们让你多住一晚，不收费。", actionHint: "shut down 就是关闭", frequency: "common" },
              { textEn: "Flights are almost certainly cancelled through tomorrow. Most airlines waive the rebooking fee for weather. And don't worry about the room — stay as long as you need.", textZh: "航班明天几乎肯定取消。大多数航空公司天气原因免改签费。房间别担心——想住多久住多久。", actionHint: "waive the fee 就是免除费用", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I'll head to the shelter. What should I bring with me?",
            textZh: "谢谢。我去避难所。需要带什么？",
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Bring your passport, phone and charger, any medications, and a change of clothes. We'll announce when it's safe to return to your room.",
            textZh: "带上护照、手机和充电器、药物，还有换洗衣服。我们会通知什么时候可以安全回房间。",
            keyPhrases: [
              { en: "phone and charger", zh: "手机和充电器" },
              { en: "change of clothes", zh: "换洗衣服" },
              { en: "announce when it's safe", zh: "通知安全时间" },
            ],
            alternativeExpressions: [
              { textEn: "Grab your ID, phone, charger, meds, and maybe a change of clothes. We'll let you know when it's all clear.", textZh: "带上证件、手机、充电器、药物，还有换洗衣服。安全了我们会通知你。", actionHint: "all clear 就是安全了/没事了", frequency: "common" },
              { textEn: "Take the essentials — passport, phone, charger, any pills you take, and something to change into. We'll make an announcement when you can go back up.", textZh: "带上必需品——护照、手机、充电器、药、换洗的衣服。能回房间时我们会广播。", actionHint: "something to change into 就是换穿的衣服", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 14. 航班取消滞留 ====================
  {
    id: "emergency-stranded-flight",
    category: "emergency",
    titleZh: "航班取消滞留",
    titleEn: "Stranded Due to Flight Cancellation",
    description: "航班突然取消后在机场处理改签、住宿和赔偿",
    otherRole: "航空公司柜台人员",
    otherRoleIcon: "✈️",
    flows: [
      {
        id: "basic",
        titleZh: "航班取消应对流程",
        titleEn: "Handling Flight Cancellation",
        description: "了解情况、改签、申请住宿和餐食补偿",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "My flight has been cancelled. What are my options? I need to get to London by tomorrow.",
            textZh: "我的航班被取消了。我有什么选择？我需要明天到伦敦。",
            culturalNote: "航班取消时保留登机牌和取消通知，这些是后续索赔的凭证。",
          },
          {
            speaker: "them",
            role: "柜台人员",
            textEn: "I apologize for the inconvenience. The cancellation is due to severe weather. I can rebook you on tomorrow's 7 AM flight or route you through Frankfurt tonight.",
            textZh: "给您带来不便深感抱歉。取消是因为恶劣天气。我可以帮您改签明天早上7点的航班，或者今晚经法兰克福转机。",
            keyPhrases: [
              { en: "rebook", zh: "改签" },
              { en: "route you through", zh: "经...转机" },
              { en: "severe weather", zh: "恶劣天气" },
            ],
            alternativeExpressions: [
              { textEn: "Sorry about that. It's the weather. I can put you on the 7 AM tomorrow or get you there tonight with a layover in Frankfurt.", textZh: "很抱歉。天气原因。我可以给你安排明早7点的，或者今晚经法兰克福转一下到那边。", actionHint: "layover 就是转机停留", frequency: "common" },
              { textEn: "I apologize. Bad weather grounded the flight. Your options are a direct tomorrow at 7 or connecting through Frankfurt tonight.", textZh: "很抱歉。恶劣天气导致停飞。你的选择是明天7点的直飞或者今晚经法兰克福转机。", actionHint: "grounded the flight 就是航班停飞了", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the 7 AM flight. Can I get a hotel and meal voucher since I have to stay overnight?",
            textZh: "我选明早7点的航班。既然要过夜，可以提供酒店和餐食券吗？",
          },
          {
            speaker: "them",
            role: "柜台人员",
            textEn: "Since it's a weather-related cancellation, we can offer you a discounted hotel rate through our partner. Here's a $15 meal voucher for the airport restaurants.",
            textZh: "因为是天气原因取消，我们可以通过合作酒店提供优惠价格。这是一张15美元的机场餐厅餐食券。",
            keyPhrases: [
              { en: "discounted hotel rate", zh: "优惠酒店价格" },
              { en: "meal voucher", zh: "餐食券" },
              { en: "weather-related", zh: "天气原因" },
            ],
            alternativeExpressions: [
              { textEn: "Since it's weather, we can't comp the hotel, but we've got a deal with a nearby one. Here's a $15 food voucher for the terminal.", textZh: "因为是天气原因，我们不能免费提供酒店，但附近有合作酒店打折。这是15美元的航站楼餐食券。", actionHint: "comp 就是免费提供/报销", frequency: "common" },
              { textEn: "For weather cancellations, we can hook you up with a discounted room nearby. And take this meal coupon — 15 bucks, good at any restaurant here.", textZh: "天气取消的话，我们可以给你安排附近的优惠房间。拿这个餐券——15美元，这里任何餐厅都能用。", actionHint: "hook you up with 就是给你安排/帮你搞到", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "My checked luggage is already on the plane. Can I get it back?",
            textZh: "我的托运行李已经在飞机上了。能取回来吗？",
          },
          {
            speaker: "them",
            role: "柜台人员",
            textEn: "Your luggage will be transferred to tomorrow's flight automatically. If you need toiletries, we can provide a comfort kit.",
            textZh: "您的行李会自动转到明天的航班。如果您需要洗漱用品，我们可以提供便利包。",
            keyPhrases: [
              { en: "transferred automatically", zh: "自动转运" },
              { en: "toiletries", zh: "洗漱用品" },
              { en: "comfort kit", zh: "便利包" },
            ],
            alternativeExpressions: [
              { textEn: "Don't worry about your bags — they'll go on tomorrow's flight. Need a toothbrush or anything? We've got an overnight kit for you.", textZh: "别担心行李——会上明天的航班。需要牙刷什么的吗？我们有过夜便利包给你。", actionHint: "overnight kit 就是过夜用品包", frequency: "common" },
              { textEn: "Your luggage will be moved to the new flight automatically. If you need basics for the night, I can grab you an amenity bag.", textZh: "你的行李会自动转到新航班。如果你需要过夜的基本用品，我给你拿一个便利袋。", actionHint: "amenity bag 就是便利包/洗漱包", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. And can I get a written confirmation of the cancellation for my travel insurance?",
            textZh: "好的，麻烦了。另外能给我一份航班取消的书面确认吗？我需要用来申请旅行保险。",
          },
          {
            speaker: "them",
            role: "柜台人员",
            textEn: "Absolutely. Here's your new boarding pass, the cancellation letter, and the comfort kit. Gate information will be updated on the screens tomorrow morning.",
            textZh: "当然可以。这是您的新登机牌、取消证明和便利包。明天早上屏幕上会更新登机口信息。",
            keyPhrases: [
              { en: "cancellation letter", zh: "取消证明" },
              { en: "boarding pass", zh: "登机牌" },
              { en: "gate information", zh: "登机口信息" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. Here's your new pass, the letter confirming the cancellation, and your toiletry bag. Check the boards in the morning for your gate.", textZh: "当然。这是你的新登机牌、取消确认函和洗漱包。明早看显示屏查登机口。", actionHint: "check the boards 就是看信息显示屏", frequency: "common" },
              { textEn: "You got it. New boarding pass, cancellation documentation for your insurance, plus the comfort kit. Gate number will be posted tomorrow.", textZh: "给你。新登机牌、保险用的取消证明，加上便利包。登机口明天会公布。", actionHint: "you got it 就是没问题/给你", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 15. 信用卡被盗刷 ====================
  {
    id: "emergency-credit-card-fraud",
    category: "emergency",
    titleZh: "信用卡被盗刷",
    titleEn: "Credit Card Fraud",
    description: "发现信用卡被盗刷后紧急挂失和处理",
    otherRole: "银行客服",
    otherRoleIcon: "💳",
    flows: [
      {
        id: "basic",
        titleZh: "信用卡盗刷处理流程",
        titleEn: "Handling Credit Card Fraud",
        description: "发现异常交易、挂失、申请临时卡",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I need to report unauthorized transactions on my credit card. Several charges I didn't make just appeared.",
            textZh: "我需要报告信用卡上的未授权交易。出现了几笔我没消费的账单。",
            culturalNote: "发现盗刷后立即打银行卡背面的客服电话。很多银行有24小时中文服务热线。",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "I'll help you with that. Can you verify your name, card number, and the last four digits of your Social Security number?",
            textZh: "我来帮您处理。请验证您的姓名、卡号和社会安全号后四位。",
            keyPhrases: [
              { en: "verify", zh: "验证" },
              { en: "unauthorized transactions", zh: "未授权交易" },
              { en: "last four digits", zh: "后四位" },
            ],
            alternativeExpressions: [
              { textEn: "Let me pull up your account. Can I get your full name and the last four of your card?", textZh: "我来调出你的账户。告诉我你的全名和卡号后四位？", actionHint: "pull up your account 就是调出你的账户", frequency: "common" },
              { textEn: "I can help with that. For security, I need to confirm your identity. Name on the card, card number, and last four of your SSN?", textZh: "我能帮你处理。出于安全需要确认你的身份。持卡人姓名、卡号和社安号后四位？", actionHint: "SSN = Social Security Number 社会安全号", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm an international visitor. I don't have a Social Security number. I can give you my passport number instead.",
            textZh: "我是外国游客。我没有社会安全号。可以给您护照号码吗？",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "That's fine. I can see three charges from last night — $200, $350, and $180 — all from online stores. Do you recognize any of these?",
            textZh: "没问题。我看到昨晚有三笔消费——200美元、350美元和180美元——都来自网上商店。你认得这些吗？",
            keyPhrases: [
              { en: "charges", zh: "消费/交易" },
              { en: "do you recognize", zh: "你认得吗" },
            ],
            alternativeExpressions: [
              { textEn: "Okay, I'm looking at your account. There are three transactions from last night — 200, 350, and 180 — all online purchases. Any of those ring a bell?", textZh: "好的，我在看你的账户。昨晚有三笔交易——200、350和180——都是网购。有印象吗？", actionHint: "ring a bell 就是有印象/听起来熟悉", frequency: "common" },
              { textEn: "I see some suspicious activity — three online charges totaling 730 bucks from last night. Does any of that sound familiar?", textZh: "我看到一些可疑活动——昨晚三笔网购消费共730美元。听起来熟悉吗？", actionHint: "suspicious activity 就是可疑活动", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, none of those are mine. I think my card was skimmed at an ATM yesterday.",
            textZh: "不，都不是我的。我觉得昨天在ATM机上卡被复制了。",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "I've frozen your card immediately. The fraudulent charges will be reversed within 5 to 10 business days. I can send a replacement card — where are you staying?",
            textZh: "我已经立即冻结了您的卡。欺诈交易将在5到10个工作日内撤销。我可以寄一张替代卡——您住在哪里？",
            keyPhrases: [
              { en: "frozen your card", zh: "冻结卡" },
              { en: "reversed", zh: "撤销" },
              { en: "replacement card", zh: "替代卡" },
            ],
            alternativeExpressions: [
              { textEn: "I've locked the card right away. Those charges will be refunded in 5 to 10 business days. Want me to ship a new card? Where should I send it?", textZh: "我已经立刻锁卡了。那些交易会在5到10个工作日内退款。需要我寄一张新卡吗？寄到哪？", actionHint: "locked the card 就是锁卡/冻结卡", frequency: "common" },
              { textEn: "Done, your card's been shut off. We'll reverse those transactions within a week or two. I can get a replacement out to you — what's your current address?", textZh: "好了，你的卡已经停了。我们会在一两周内撤销那些交易。我可以给你寄张新卡——你现在的地址是？", actionHint: "shut off 就是停用/关闭", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm traveling and leaving in three days. Can I get a temporary card or use mobile pay?",
            textZh: "我在旅行，三天后就走了。能给我临时卡或者用手机支付吗？",
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "I can set up instant virtual card access on your banking app. You can use it with Apple Pay or Google Pay immediately. Also, file a fraud dispute at our website for the full refund.",
            textZh: "我可以在您的银行APP上设置即时虚拟卡。您可以立即用Apple Pay或Google Pay使用。另外，在我们网站提交欺诈争议以获得全额退款。",
            keyPhrases: [
              { en: "virtual card", zh: "虚拟卡" },
              { en: "fraud dispute", zh: "欺诈争议" },
              { en: "full refund", zh: "全额退款" },
            ],
            alternativeExpressions: [
              { textEn: "I can set you up with a digital card on your app right now. Works with Apple Pay and Google Pay instantly. And make sure to file a dispute online to get your money back.", textZh: "我可以现在在你的APP上给你设一张数字卡。Apple Pay和Google Pay马上就能用。然后记得在网上提交争议申请拿回钱。", actionHint: "set you up with 就是给你设置/配置", frequency: "common" },
              { textEn: "Here's what we can do — I'll activate a virtual card through your mobile banking. You can tap to pay right away. Just log into our site later and file the fraud claim for your refund.", textZh: "这样吧——我通过你的手机银行激活一张虚拟卡。你马上就能刷。回头登录我们网站提交欺诈理赔申请退款。", actionHint: "tap to pay 就是刷卡/感应支付", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 16. 酒店房间入侵 ====================
  {
    id: "emergency-hotel-intrusion",
    category: "emergency",
    titleZh: "酒店房间入侵",
    titleEn: "Hotel Room Intrusion",
    description: "发现有人未经允许进入酒店房间时的应对",
    otherRole: "酒店安保/前台",
    otherRoleIcon: "🚪",
    flows: [
      {
        id: "basic",
        titleZh: "房间入侵应对流程",
        titleEn: "Handling Hotel Room Intrusion",
        description: "发现异常、通知前台、报警处理",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I just came back to my room and the door was open. I think someone has been in my room. Some of my things are missing.",
            textZh: "我刚回到房间发现门是开着的。我觉得有人进过我的房间。有些东西不见了。",
            culturalNote: "如果发现房间门开着，不要进去，有人可能还在里面。在走廊打电话通知前台。",
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I'm sending security to your room immediately. Please don't touch anything. Are you safe? Is there anyone still in the room?",
            textZh: "我立即派安保去您的房间。请不要触碰任何东西。您安全吗？房间里还有人吗？",
            keyPhrases: [
              { en: "sending security", zh: "派安保" },
              { en: "don't touch anything", zh: "不要触碰任何东西" },
            ],
            alternativeExpressions: [
              { textEn: "I'm getting security up there right now. Leave everything as is. Are you okay? Is anyone still in the room?", textZh: "我现在就让安保上去。什么都别动。你没事吧？房间里还有人吗？", actionHint: "leave everything as is 就是什么都别动", frequency: "common" },
              { textEn: "Stay right there, I'm sending someone up. Don't go in and don't move anything. Is it safe where you are?", textZh: "就待在那，我派人上去。别进去也别动任何东西。你在的地方安全吗？", actionHint: "stay right there 就是就待在原地别动", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I didn't go inside yet. I'm standing in the hallway. My laptop and some cash are missing.",
            textZh: "我还没进去。我站在走廊里。我的笔记本电脑和一些现金不见了。",
          },
          {
            speaker: "them",
            role: "安保人员",
            textEn: "I've checked the room — no one is inside. We'll review the security camera footage. I need to call the police. Can you list everything that's missing?",
            textZh: "我已经检查了房间——里面没人。我们会查看监控录像。我需要报警。你能列出丢失的物品吗？",
            keyPhrases: [
              { en: "security camera footage", zh: "监控录像" },
              { en: "list everything that's missing", zh: "列出丢失物品" },
            ],
            alternativeExpressions: [
              { textEn: "Room's clear, nobody in there. We'll pull up the camera recordings. I'm calling the cops. What's gone? Make me a list.", textZh: "房间安全了，没人。我们会调监控录像。我打电话报警。丢了什么？给我列个清单。", actionHint: "room's clear 就是房间安全了/清查完毕", frequency: "common" },
              { textEn: "All clear inside. Let me get the CCTV footage and get the police involved. Can you go through your stuff and tell me exactly what's missing?", textZh: "里面没人了。我来调监控录像并报警。你能检查一下你的东西，告诉我具体丢了什么吗？", actionHint: "CCTV 就是闭路电视/监控", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "A laptop, about $300 in cash, and a gold necklace. I want to file a complaint and get compensation.",
            textZh: "一台笔记本电脑、大约300美元现金和一条金项链。我要投诉并要求赔偿。",
          },
          {
            speaker: "them",
            role: "安保人员",
            textEn: "The police are on their way. We'll move you to a new room on a secured floor. The hotel manager will discuss compensation with you.",
            textZh: "警察正在赶来。我们会把您转到安全楼层的新房间。酒店经理会和您讨论赔偿事宜。",
            keyPhrases: [
              { en: "secured floor", zh: "安全楼层" },
              { en: "compensation", zh: "赔偿" },
            ],
            alternativeExpressions: [
              { textEn: "Cops are coming. We're moving you to a different room on a safer floor. Our manager will talk to you about making this right.", textZh: "警察要来了。我们给你换到更安全楼层的另一个房间。经理会跟你谈赔偿。", actionHint: "making this right 就是补偿/纠正这件事", frequency: "common" },
              { textEn: "Police are en route. Let's get you to a new room upstairs with better security. The hotel will work with you on compensation.", textZh: "警察在路上了。我们给你换楼上安保更好的新房间。酒店会和你协商赔偿。", actionHint: "en route 就是在路上", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I also need a police report for my insurance claim. Can you make sure I get one?",
            textZh: "我还需要报案记录来申请保险。能确保我拿到吗？",
          },
          {
            speaker: "them",
            role: "安保人员",
            textEn: "Absolutely. The police will provide you with a report number. We'll also provide a written incident report from the hotel. I'm very sorry this happened.",
            textZh: "当然。警察会给您报案号。我们也会提供酒店的书面事故报告。非常抱歉发生了这种事。",
            keyPhrases: [
              { en: "report number", zh: "报案号" },
              { en: "incident report", zh: "事故报告" },
            ],
            alternativeExpressions: [
              { textEn: "Of course. The cops will give you a case number. We'll write up our own report too. I'm really sorry about all this.", textZh: "当然。警察会给你案件号。我们也会写一份自己的报告。真的很抱歉发生这种事。", actionHint: "case number 就是案件号", frequency: "common" },
              { textEn: "For sure. You'll get a police report number plus a written statement from us. I sincerely apologize for this happening at our hotel.", textZh: "当然。你会拿到报案号加上我们的书面声明。这种事发生在我们酒店我深表歉意。", actionHint: "written statement 就是书面声明/报告", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 17. 路上抛锚 ====================
  {
    id: "emergency-vehicle-breakdown",
    category: "emergency",
    titleZh: "路上抛锚",
    titleEn: "Vehicle Breakdown",
    description: "在高速公路或偏僻路段车辆抛锚后寻求道路救援",
    otherRole: "道路救援人员",
    otherRoleIcon: "🔧",
    flows: [
      {
        id: "basic",
        titleZh: "车辆抛锚求助流程",
        titleEn: "Basic Vehicle Breakdown Assistance",
        description: "确保安全、呼叫救援、描述问题",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, my car broke down on the highway. I'm on I-95, about 5 miles south of exit 42. I need roadside assistance.",
            textZh: "你好，我的车在高速上抛锚了。我在I-95公路上，42号出口以南大约5英里。我需要道路救援。",
            culturalNote: "在美国高速抛锚，先把车停到路肩并开双闪灯。如果有三角警示牌放在车后方50米处。",
          },
          {
            speaker: "them",
            role: "道路救援",
            textEn: "I've got your location. What seems to be the problem? Is your car still running?",
            textZh: "我找到您的位置了。车出了什么问题？还能启动吗？",
            keyPhrases: [
              { en: "location", zh: "位置" },
              { en: "still running", zh: "还能启动" },
            ],
            alternativeExpressions: [
              { textEn: "Okay, got you on the map. What's going on with the car? Does it still start?", textZh: "好的，在地图上找到你了。车怎么了？还能发动吗？", actionHint: "got you on the map 就是在地图上定位到你了", frequency: "common" },
              { textEn: "All right, we've pinpointed your location. Can you tell me what happened? Is the engine turning over?", textZh: "好的，我们锁定了你的位置。能告诉我怎么回事吗？引擎能转吗？", actionHint: "turning over 指引擎能不能启动", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The engine just died and won't restart. There's a warning light on the dashboard. I think it might be the battery or the engine overheated.",
            textZh: "引擎突然熄火了，无法重启。仪表盘上有警示灯亮着。我觉得可能是电池没电或者发动机过热。",
          },
          {
            speaker: "them",
            role: "道路救援",
            textEn: "Are you in a safe spot? Off the road and out of traffic? I'm dispatching a tow truck. It should be there in about 30 minutes.",
            textZh: "您在安全的地方吗？是否在道路旁边远离车流？我正在派拖车过去。大约30分钟到。",
            keyPhrases: [
              { en: "safe spot", zh: "安全的地方" },
              { en: "tow truck", zh: "拖车" },
              { en: "dispatching", zh: "派遣" },
            ],
            alternativeExpressions: [
              { textEn: "Are you pulled over safely? Out of the lane of traffic? I've got a tow headed your way, about 30 minutes.", textZh: "你安全停到路边了吗？不在车道上了吧？拖车正在去你那，大约30分钟。", actionHint: "headed your way 就是正在去你那边", frequency: "common" },
              { textEn: "First things first — are you off the road and safe? I'm sending a wrecker out. Sit tight, about half an hour.", textZh: "首先——你在路边安全的地方吗？我正在派拖车。等一下，大约半小时。", actionHint: "wrecker 就是拖车的另一种说法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I pulled over to the shoulder. My hazard lights are on. This is a rental car — do I need to call the rental company too?",
            textZh: "是的，我停在路肩了。双闪灯开着。这是租的车——我需要打电话给租车公司吗？",
          },
          {
            speaker: "them",
            role: "道路救援",
            textEn: "Yes, you should notify the rental company. Their number should be on the rental agreement. The tow truck will take the car to the nearest garage. Do you need a ride somewhere?",
            textZh: "是的，您应该通知租车公司。电话号码在租车协议上。拖车会把车送到最近的修车厂。您需要搭便车去什么地方吗？",
            keyPhrases: [
              { en: "rental agreement", zh: "租车协议" },
              { en: "nearest garage", zh: "最近的修车厂" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely give the rental place a heads-up. Their number should be in the paperwork. We'll tow it to the closest mechanic. Need a lift anywhere?", textZh: "一定要提前通知租车那边。电话号码在文件里。我们会拖到最近的修理厂。需要送你去哪吗？", actionHint: "give them a heads-up 就是提前通知，lift 就是搭便车", frequency: "common" },
              { textEn: "Yeah, call the rental company — check your contract for the number. The tow truck will drop the car at a shop nearby. Do you need us to take you somewhere?", textZh: "对，打给租车公司——合同上有电话号码。拖车会把车送到附近的修理店。需要我们送你去什么地方吗？", actionHint: "drop the car 就是把车送到/放到", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, can you drop me off at the nearest hotel? I'll need to sort this out with the rental company.",
            textZh: "好的，能把我送到最近的酒店吗？我需要和租车公司处理这件事。",
          },
          {
            speaker: "them",
            role: "道路救援",
            textEn: "No problem. The driver will take you wherever you need. Make sure to keep all receipts — the rental company's insurance should cover the towing and repairs.",
            textZh: "没问题。司机会送您去任何需要去的地方。确保保留所有收据——租车公司的保险应该能报销拖车和维修费用。",
            keyPhrases: [
              { en: "keep all receipts", zh: "保留所有收据" },
              { en: "cover the towing", zh: "报销拖车费" },
            ],
            alternativeExpressions: [
              { textEn: "No worries, the driver will give you a ride wherever. Just hang onto every receipt — the rental insurance should pay for everything.", textZh: "没问题，司机会送你去任何地方。把每张收据都留好——租车保险应该能全额报销。", actionHint: "hang onto 就是保留/别丢掉", frequency: "common" },
              { textEn: "Sure, we'll drop you off. Save all your receipts — towing, repairs, taxi, whatever. The rental company's insurance should cover it.", textZh: "当然，我们送你。保留所有收据——拖车、维修、出租车，什么都留着。租车公司的保险应该能报销。", actionHint: "drop you off 就是送你到某地", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 18. 迷路求助 ====================
  {
    id: "emergency-lost-directions",
    category: "emergency",
    titleZh: "迷路求助",
    titleEn: "Lost and Asking for Directions",
    description: "在陌生城市迷路后向路人或商店求助方向",
    otherRole: "路人/店员",
    otherRoleIcon: "🗺️",
    flows: [
      {
        id: "basic",
        titleZh: "迷路求助基本流程",
        titleEn: "Basic Directions Assistance",
        description: "描述目的地、理解方向指引、到达安全区域",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm completely lost. I'm trying to get back to my hotel — the Marriott on 6th Street. Can you help me?",
            textZh: "打扰了，我完全迷路了。我想回我的酒店——第六街的万豪。能帮帮我吗？",
            culturalNote: "迷路时保持冷静，走到有人的主要街道或商店。保存酒店地址的截图以防没有网络。",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Sure! You're actually not far. Walk two blocks that way, then turn right at the traffic light. You'll see it on the left.",
            textZh: "当然！你其实不远。往那个方向走两个街区，在红绿灯右转。就在左手边能看到了。",
            keyPhrases: [
              { en: "two blocks", zh: "两个街区" },
              { en: "turn right", zh: "右转" },
              { en: "traffic light", zh: "红绿灯" },
              { en: "on the left", zh: "在左手边" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yeah, you're close! Just go straight down this way, take a right at the light, and it'll be right there on your left.", textZh: "哦你很近的！沿着这边直走，在红绿灯右转，就在你左边。", actionHint: "right there 就是就在那儿", frequency: "common" },
              { textEn: "The Marriott? You're like two minutes away. Head that direction, hang a right at the stoplight. Can't miss it.", textZh: "万豪？你就两分钟的路。往那个方向走，在红绿灯右拐。不会错过的。", actionHint: "hang a right 就是右转的口语说法，can't miss it 就是不会错过", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Two blocks that way and then right? My phone died so I can't use GPS. Is it walking distance?",
            textZh: "往那边两个街区然后右转？我手机没电了所以不能用GPS。走路能到吗？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Yes, it's about a 10-minute walk. If you reach the park, you've gone too far. The hotel is before the park, across from a pharmacy.",
            textZh: "是的，大约走10分钟。如果到了公园就走过了。酒店在公园前面，药店对面。",
            keyPhrases: [
              { en: "10-minute walk", zh: "走10分钟" },
              { en: "gone too far", zh: "走过了" },
              { en: "across from", zh: "对面" },
              { en: "pharmacy", zh: "药店" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, totally walkable. Like 10 minutes. If you hit the park, you went past it. It's right across the street from a drugstore.", textZh: "是的，完全走得到。大概10分钟。如果到了公园就走过了。就在一家药店的对面。", actionHint: "totally walkable 就是完全可以走到，drugstore 就是药店", frequency: "common" },
              { textEn: "Sure, it's walking distance. Maybe 10 minutes tops. Look for a pharmacy — the hotel's right opposite. Don't go as far as the park.", textZh: "当然，走路就到。最多10分钟。找一家药店——酒店就在正对面。不要走到公园那么远。", actionHint: "10 minutes tops 就是最多10分钟", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is this neighborhood safe to walk around at night?",
            textZh: "这个街区晚上走路安全吗？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "This area is generally safe, but stick to the main streets with the lights. Avoid the alleys. You'll be fine if you keep walking on this road.",
            textZh: "这个区域一般来说安全，但尽量走有灯的主街。避开小巷。沿着这条路走就没问题。",
            keyPhrases: [
              { en: "stick to the main streets", zh: "走主街" },
              { en: "avoid the alleys", zh: "避开小巷" },
            ],
            alternativeExpressions: [
              { textEn: "It's pretty safe around here. Just stay on the well-lit streets and don't cut through any alleys. You'll be fine.", textZh: "这附近挺安全的。就走灯亮的街道，别抄小路。你不会有事的。", actionHint: "well-lit 就是灯光明亮的，cut through 就是抄近路穿过", frequency: "common" },
              { textEn: "Yeah, this neighborhood's okay. Keep to the big roads where there's people and lights. Don't wander into the side streets.", textZh: "嗯，这个街区还行。走有人有灯的大路。别逛到小巷子里去。", actionHint: "keep to 就是走/待在", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much. One more thing — is there a convenience store nearby where I can charge my phone?",
            textZh: "太感谢了。再问一下——附近有便利店可以给手机充电吗？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "There's a 7-Eleven right on the next corner. They usually have a charging station. Good luck getting back!",
            textZh: "下一个路口就有一家7-11。他们通常有充电站。祝你顺利回去！",
            keyPhrases: [
              { en: "on the next corner", zh: "下一个路口" },
              { en: "charging station", zh: "充电站" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yeah, there's a 7-Eleven just around the corner. Pretty sure they have a spot to charge your phone. Take care!", textZh: "有的，拐角就有一家7-11。应该有地方给手机充电。保重！", actionHint: "just around the corner 就是拐角就到了", frequency: "common" },
              { textEn: "There's a convenience store a block up — they've got outlets. You can probably plug in there. Good luck!", textZh: "前面一个街区有便利店——有插座。你应该能在那充电。祝好运！", actionHint: "outlets 就是电源插座", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 19. 遭遇诈骗 ====================
  {
    id: "emergency-scam-encounter",
    category: "emergency",
    titleZh: "遭遇诈骗",
    titleEn: "Scam Encounter",
    description: "在国外遭遇旅游诈骗后识别和处理",
    otherRole: "骗子/警察",
    otherRoleIcon: "🎭",
    flows: [
      {
        id: "basic",
        titleZh: "识别和应对诈骗",
        titleEn: "Identifying and Handling a Scam",
        description: "被推销骗局套路后拒绝、离开并报案",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "陌生人",
            textEn: "Hey friend! I found this gold ring on the ground. It must be worth a lot! You can have it — I just need some money for food.",
            textZh: "嘿朋友！我在地上捡到这个金戒指。肯定很值钱！给你——我只需要一些钱买吃的。",
            keyPhrases: [
              { en: "gold ring", zh: "金戒指" },
              { en: "worth a lot", zh: "很值钱" },
            ],
            alternativeExpressions: [
              { textEn: "Excuse me! Look what I just found! A gold ring, right here on the ground. Must be worth something. Here, take it — just help me out with some cash for a meal.", textZh: "打扰了！看我刚捡到什么！一个金戒指，就在地上。肯定值点钱。给你——帮我个忙出点钱吃饭就行。", actionHint: "help me out 就是帮帮忙，这是骗局套路", frequency: "common" },
              { textEn: "Hey! You dropped this! Oh wait, it's gold! Tell you what, you keep it, just spot me a few bucks for food.", textZh: "嘿！你掉了这个！哦等等，是金的！这样吧，你留着，借我几块钱吃饭。", actionHint: "spot me 就是借我点钱，这也是骗术开场", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, thank you. I'm not interested. Please leave me alone.",
            textZh: "不，谢谢。我不感兴趣。请别打扰我。",
            culturalNote: "这是经典的'金戒指骗局'，在欧美旅游景点很常见。坚定拒绝，不要接任何东西。",
          },
          {
            speaker: "them",
            role: "陌生人",
            textEn: "Come on, just $20. This ring is real gold! You're being rude. In our culture, you can't refuse a gift.",
            textZh: "来嘛，就20美元。这个戒指是真金的！你这样很没礼貌。在我们文化里，不能拒绝礼物。",
            keyPhrases: [
              { en: "being rude", zh: "没礼貌" },
              { en: "can't refuse a gift", zh: "不能拒绝礼物" },
            ],
            alternativeExpressions: [
              { textEn: "Aw come on, it's real gold! Just $20! Why you gotta be like that? I'm just trying to be nice!", textZh: "哎，这是真金的！就20块！你干嘛这样？我只是想做好事！", actionHint: "why you gotta be like that 就是你干嘛这样，是施压手段", frequency: "common" },
              { textEn: "Look, I found it fair and square. Just give me a little something for it. You can't say no to a gift, man!", textZh: "你看，我光明正大捡到的。给我点什么就行。你不能拒绝礼物的，兄弟！", actionHint: "fair and square 就是光明正大的，这是继续施压", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I said no. This is a scam. I'm going to call the police if you don't stop.",
            textZh: "我说了不。这是骗局。如果你不停下来我就报警了。",
          },
          {
            speaker: "them",
            textEn: "Fine, fine! Take it easy, no problem!",
            textZh: "好好好！别紧张，没事没事！",
            alternativeExpressions: [
              { textEn: "Okay okay, relax! I was just being friendly! Forget about it!", textZh: "好好好，放松！我就是友好一下！算了算了！", actionHint: "骗子被识破后通常假装自己无辜", frequency: "common" },
              { textEn: "Whoa, chill out! No need to get the cops involved. I'm going, I'm going!", textZh: "哎，别激动！不用报警。我走我走！", actionHint: "chill out 就是别激动/冷静", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Officer, I was just approached by a scammer near the Eiffel Tower. He tried to sell me a fake gold ring.",
            textZh: "警官，我刚才在埃菲尔铁塔附近被一个骗子搭讪了。他试图卖给我一个假金戒指。",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "Unfortunately, this is a very common scam in tourist areas. Did you give them any money?",
            textZh: "很遗憾，这是旅游区非常常见的骗局。你给了他们钱吗？",
            keyPhrases: [
              { en: "common scam", zh: "常见骗局" },
              { en: "tourist areas", zh: "旅游区" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, we see this all the time around here. The ring trick is one of the oldest scams. Did they get any money out of you?", textZh: "是的，这种事在这附近天天发生。金戒指骗术是最老的骗局之一。他们从你这骗到钱了吗？", actionHint: "get money out of you 就是从你这骗到钱", frequency: "common" },
              { textEn: "That's a well-known hustle in this part of town. You didn't hand over any cash, did you?", textZh: "这是这一带出了名的骗术。你没给钱吧？", actionHint: "hustle 就是骗术/骗局", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, I recognized it as a scam and refused. But I wanted to report it in case they target other tourists.",
            textZh: "没有，我认出是骗局就拒绝了。但我想报告一下以防他们骗其他游客。",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "Good for you. We're aware of this group. Be careful of other scams too — fake petitions, friendship bracelets, and people offering 'free' photos. Never hand over your phone or wallet to strangers.",
            textZh: "你做得对。我们知道这个团伙。还要小心其他骗局——假请愿书、友谊手环，还有人要给你拍'免费'照片。永远不要把手机或钱包给陌生人。",
            keyPhrases: [
              { en: "fake petitions", zh: "假请愿书" },
              { en: "friendship bracelets", zh: "友谊手环" },
              { en: "never hand over", zh: "永远不要交给" },
            ],
            alternativeExpressions: [
              { textEn: "Smart move. We know about these guys. Watch out for other tricks too — clipboard scams, people tying bracelets on your wrist, or offering free photos. Keep your stuff close.", textZh: "做得好。我们知道这些人。还要小心其他套路——拿夹板的签名骗局、往你手腕上系手链的、要给你拍免费照的。看好你的东西。", actionHint: "clipboard scams 就是拿签名板的骗局", frequency: "common" },
              { textEn: "You did the right thing. Be aware there are other scams too — people with petitions, bracelet sellers who demand payment, 'free' photo ops. Don't give your phone to anyone.", textZh: "你做得对。注意还有其他骗局——拿请愿书的、强卖手环要钱的、'免费'合影。别把手机给任何人。", actionHint: "demand payment 就是强行要钱", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 20. 暴风雪被困 ====================
  {
    id: "emergency-blizzard-stranded",
    category: "emergency",
    titleZh: "暴风雪被困",
    titleEn: "Blizzard Stranded",
    description: "在暴风雪中被困在车里或路上时求助",
    otherRole: "救援人员/酒店前台",
    otherRoleIcon: "❄️",
    flows: [
      {
        id: "basic",
        titleZh: "暴风雪被困求助流程",
        titleEn: "Blizzard Emergency Assistance",
        description: "被困后呼叫救援、保暖、等待帮助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I'm stuck in my car on Route 80. The road is completely blocked by snow. I can't see anything and I'm running low on gas.",
            textZh: "我被困在80号公路上的车里了。路完全被雪堵住了。什么都看不见，而且油快没了。",
            culturalNote: "暴风雪被困在车内时：保持引擎间歇运行取暖，确保排气管没被雪堵住以防一氧化碳中毒。",
          },
          {
            speaker: "them",
            role: "救援调度",
            textEn: "I understand your situation. What's your exact location? Do you have mile markers or any landmarks nearby?",
            textZh: "我了解您的情况。您的确切位置在哪里？附近有里程标或地标吗？",
            keyPhrases: [
              { en: "mile markers", zh: "里程标" },
              { en: "landmarks", zh: "地标" },
            ],
            alternativeExpressions: [
              { textEn: "Copy that. Can you give me a more specific location? Any mile markers or signs you can see?", textZh: "收到。能给我更具体的位置吗？能看到什么里程标或路牌吗？", actionHint: "copy that 在无线电通信中就是收到", frequency: "common" },
              { textEn: "Okay, hang tight. Do you know exactly where you are? Look around for a highway marker or an exit sign.", textZh: "好的，稳住。你知道确切在哪吗？看看周围有没有高速标志或出口牌。", actionHint: "hang tight 就是稳住/等一下", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I passed mile marker 47 about ten minutes ago. There are other cars stuck here too.",
            textZh: "大约十分钟前我经过了47号里程标。这里还有其他车也被困了。",
          },
          {
            speaker: "them",
            role: "救援调度",
            textEn: "We've dispatched snowplows and emergency vehicles to your area. It may take 1 to 2 hours. Stay in your vehicle. Run the engine for heat, but crack a window slightly to avoid carbon monoxide poisoning.",
            textZh: "我们已经派铲雪车和应急车辆去你那个区域了。可能需要1到2小时。待在车里。开引擎取暖，但要把车窗留一点缝隙以防一氧化碳中毒。",
            keyPhrases: [
              { en: "snowplows", zh: "铲雪车" },
              { en: "stay in your vehicle", zh: "待在车里" },
              { en: "crack a window", zh: "留一点缝隙" },
              { en: "carbon monoxide", zh: "一氧化碳" },
            ],
            alternativeExpressions: [
              { textEn: "We've got plows and rescue teams heading your way. Could be an hour or two. Don't leave the car. Keep the engine running for heat but open the window a crack so you don't get CO poisoning.", textZh: "铲雪车和救援队正在去你那。可能要一两个小时。别离开车。开引擎取暖但把窗户开条缝别一氧化碳中毒。", actionHint: "CO = carbon monoxide 一氧化碳", frequency: "common" },
              { textEn: "Help is on the way but it'll take a while, maybe 1-2 hours. Stay put. If you run the heater, keep a window cracked — exhaust fumes can kill you in a snowbank.", textZh: "救援在路上了但需要一段时间，大概1-2小时。待着别动。开暖气的话留个窗缝——被雪埋的车尾气能致命。", actionHint: "stay put 就是待着别动", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have about a quarter tank of gas left. I don't have blankets but I have a heavy coat.",
            textZh: "油箱大概还有四分之一。没有毯子，但有一件厚外套。",
          },
          {
            speaker: "them",
            role: "救援调度",
            textEn: "Run the engine for 10 minutes every hour to conserve fuel. Put on all your layers. If you have floor mats, you can use those for extra insulation. We'll update you by phone.",
            textZh: "每小时开10分钟引擎以节省燃油。穿上所有的衣服。如果有脚垫，可以用来额外保暖。我们会电话通知你最新情况。",
            keyPhrases: [
              { en: "conserve fuel", zh: "节省燃油" },
              { en: "layers", zh: "层（衣服）" },
              { en: "insulation", zh: "保暖/隔热" },
            ],
            alternativeExpressions: [
              { textEn: "Don't run the engine non-stop — 10 on, 50 off, to save gas. Bundle up with everything you've got. Floor mats can help keep heat in. We'll call you with updates.", textZh: "别一直开引擎——开10分钟停50分钟，省油。把所有东西都裹上。脚垫可以帮忙保暖。我们有情况电话通知你。", actionHint: "bundle up 就是裹紧/穿厚点", frequency: "common" },
              { textEn: "To stretch your fuel, only run the engine 10 minutes per hour. Layer up and use anything you can find for warmth. I'll keep you posted by phone.", textZh: "为了省油，每小时只开10分钟引擎。多穿几层，用你能找到的任何东西保暖。我电话通知你最新情况。", actionHint: "keep you posted 就是随时通知你", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. My phone battery is at 20%. How will I know when help arrives?",
            textZh: "谢谢。我手机电量只剩20%了。怎么知道救援到了？",
          },
          {
            speaker: "them",
            role: "救援调度",
            textEn: "Turn off all non-essential apps to save battery. You'll hear the snowplows. If emergency vehicles arrive, they'll have flashing lights and loudspeakers. Hang in there.",
            textZh: "关掉所有不必要的APP以节省电量。你会听到铲雪车的声音。如果应急车辆到了，会有闪光灯和扩音器。坚持住。",
            keyPhrases: [
              { en: "save battery", zh: "节省电量" },
              { en: "flashing lights", zh: "闪光灯" },
              { en: "hang in there", zh: "坚持住" },
            ],
            alternativeExpressions: [
              { textEn: "Kill all the apps you don't need to save juice. You'll hear the plows coming. Emergency vehicles will have lights and sirens. Stay strong, we're coming.", textZh: "把不需要的APP都关了省电。你会听到铲雪车来的声音。应急车辆会有灯和警笛。坚持住，我们在赶来。", actionHint: "save juice 口语里指省电", frequency: "common" },
              { textEn: "Turn your phone on low-power mode. When we get close, you'll see the lights. Just hold on, help is coming.", textZh: "把手机调到低电量模式。我们到附近时你会看到灯光。再撑一下，救援在路上了。", actionHint: "hold on 就是再撑一下", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 21. 手机丢失 ====================
  {
    id: "emergency-lost-phone",
    category: "emergency",
    titleZh: "手机丢失",
    titleEn: "Lost Phone",
    description: "在国外手机丢失后寻找、锁定和处理",
    otherRole: "商店店员/酒店前台",
    otherRoleIcon: "📱",
    flows: [
      {
        id: "basic",
        titleZh: "手机丢失处理流程",
        titleEn: "Handling a Lost Phone",
        description: "回忆丢失地点、借用电话、远程锁定",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I think I lost my phone. Can I use your phone to call my number? Maybe someone picked it up.",
            textZh: "我觉得我手机丢了。能用一下你的电话打我号码吗？也许有人捡到了。",
            culturalNote: "出国前开启Find My iPhone/Find My Device功能，可以远程锁定和定位手机。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure, go ahead. Do you remember where you last had it?",
            textZh: "当然，请用。你记得最后在哪用过手机吗？",
            keyPhrases: [
              { en: "go ahead", zh: "请用" },
              { en: "where you last had it", zh: "最后在哪用过" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, no problem, here you go. Any idea where you might've left it?", textZh: "没问题，给你。知道可能落在哪了吗？", actionHint: "might've = might have 可能", frequency: "common" },
              { textEn: "Of course, use mine. Think back — when's the last time you had it in your hand?", textZh: "当然，用我的。想想——你最后一次拿着手机是什么时候？", actionHint: "think back 就是回想一下", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I think I left it in the taxi about 30 minutes ago. No one is answering. Can I use your computer to track my phone online?",
            textZh: "我觉得大约30分钟前落在出租车里了。没有人接。能用一下你的电脑在线定位我的手机吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course. You can use this computer. Do you know your Apple ID or Google account to access Find My Phone?",
            textZh: "当然可以。你可以用这台电脑。你知道你的Apple ID或Google账号来登录查找手机吗？",
            keyPhrases: [
              { en: "Find My Phone", zh: "查找手机" },
              { en: "Apple ID", zh: "Apple ID" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, hop on this computer. Can you log into iCloud or your Google account to track it?", textZh: "当然，用这台电脑。你能登录iCloud或Google账号来定位吗？", actionHint: "hop on 就是用一下", frequency: "common" },
              { textEn: "Go ahead, use the computer. Do you know how to get into Find My iPhone or Find My Device?", textZh: "请用电脑。你知道怎么进'查找我的iPhone'或'查找我的设备'吗？", actionHint: "get into 就是登录/进入", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I can log in. It shows my phone is moving — it's still in the taxi. Can I send a message to the screen with a phone number to call back?",
            textZh: "是的，我能登录。显示我的手机在移动——还在出租车上。我能发送一条消息到屏幕上附上回电号码吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, do that. Also, do you remember the taxi company? You might be able to call their lost and found department.",
            textZh: "好的，就这么做。还有，你记得是哪家出租车公司吗？你也许可以打电话给他们的失物招领部门。",
            keyPhrases: [
              { en: "taxi company", zh: "出租车公司" },
              { en: "lost and found", zh: "失物招领" },
            ],
            alternativeExpressions: [
              { textEn: "Good idea, send a message to the screen. Also, which cab company was it? They usually have a lost and found you can call.", textZh: "好主意，往屏幕上发条消息。还有，是哪家出租车公司？他们一般有失物招领可以打电话。", actionHint: "which cab company 就是哪家出租车公司", frequency: "common" },
              { textEn: "Yeah, do that for sure. Hey, do you remember the cab's name or number? You could try their lost property line.", textZh: "对，一定要这么做。对了，你记得出租车的名字或编号吗？你可以打他们的失物招领电话。", actionHint: "lost property line 就是失物招领热线", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It was a yellow cab. I have the receipt with the driver's number on it! Let me call them.",
            textZh: "是一辆黄色出租车。我有收据上面有司机的号码！让我打给他们。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Great thinking! If you can't get it back, make sure to remotely lock your phone and change your banking passwords from a secure device.",
            textZh: "聪明！如果找不回来的话，一定要远程锁定手机并在安全的设备上修改银行密码。",
            keyPhrases: [
              { en: "remotely lock", zh: "远程锁定" },
              { en: "change your passwords", zh: "修改密码" },
              { en: "secure device", zh: "安全的设备" },
            ],
            alternativeExpressions: [
              { textEn: "Nice, hope you get it back! If not, make sure to wipe it remotely and change all your passwords — especially banking stuff.", textZh: "好的，希望你能找回来！要是找不到，一定要远程擦除数据并改掉所有密码——尤其是银行相关的。", actionHint: "wipe it 就是擦除数据", frequency: "common" },
              { textEn: "Fingers crossed! Worst case, lock it from iCloud or Google, and go change your bank passwords on a safe computer ASAP.", textZh: "祝好运！最坏的情况，从iCloud或Google锁定手机，然后尽快在安全的电脑上改银行密码。", actionHint: "fingers crossed 就是祝好运，ASAP = As Soon As Possible 尽快", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 22. 行李被偷 ====================
  {
    id: "emergency-luggage-stolen",
    category: "emergency",
    titleZh: "行李被偷",
    titleEn: "Luggage Stolen",
    description: "旅行中行李被盗后报警和处理后续事宜",
    otherRole: "警察/酒店前台",
    otherRoleIcon: "🧳",
    flows: [
      {
        id: "basic",
        titleZh: "行李被偷处理流程",
        titleEn: "Handling Stolen Luggage",
        description: "发现行李被盗、报警、联系保险",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Someone stole my suitcase from the hotel lobby while I was checking in. I had all my clothes and medications in it.",
            textZh: "我在办理入住时有人从酒店大厅偷走了我的行李箱。里面有我所有的衣服和药物。",
            culturalNote: "在公共场所永远把行李放在视线范围内。办理入住时把行李箱放在身边或两腿之间。",
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I'm so sorry! Let me check the security cameras immediately. Can you describe your suitcase?",
            textZh: "非常抱歉！让我立即查看监控录像。能描述一下你的行李箱吗？",
            keyPhrases: [
              { en: "security cameras", zh: "监控录像" },
              { en: "describe your suitcase", zh: "描述你的行李箱" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, that's awful. Let me pull up the security footage right now. What does your bag look like?", textZh: "天哪，太糟糕了。我马上调监控。你的行李长什么样？", actionHint: "pull up the footage 就是调出监控画面", frequency: "common" },
              { textEn: "I'm really sorry. I'll check the cameras. Can you tell me what kind of suitcase it was?", textZh: "非常抱歉。我去查监控。能告诉我是什么样的行李箱吗？", actionHint: "what kind of 就是什么样的", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's a large black Samsonite with a red luggage tag. It has my name on it — Li Wei.",
            textZh: "是一个黑色的大号新秀丽，上面有红色行李牌。上面写着我的名字——李薇。",
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I see it on the camera. Someone took it about 10 minutes ago and walked out the side entrance. I'm calling the police now.",
            textZh: "我在监控上看到了。大约10分钟前有人拿走了它，从侧门出去了。我现在就报警。",
            keyPhrases: [
              { en: "side entrance", zh: "侧门" },
              { en: "calling the police", zh: "报警" },
            ],
            alternativeExpressions: [
              { textEn: "Got it on camera. Somebody grabbed it about 10 minutes ago and went out the side door. I'm calling the cops right now.", textZh: "监控拍到了。大约10分钟前有人拿了它从侧门出去了。我现在就叫警察。", actionHint: "got it on camera 就是监控拍到了", frequency: "common" },
              { textEn: "I can see it on the video — taken about 10 minutes ago, they left through the side exit. Let me get the police on the line.", textZh: "我在视频上看到了——大约10分钟前被拿走的，从侧面出口走了。我来报警。", actionHint: "get the police on the line 就是打电话叫警察", frequency: "occasional" },
            ],
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "We have the camera footage. Can you provide a list of the items in the suitcase and their approximate value?",
            textZh: "我们有监控画面。你能提供行李箱里物品的清单和大概价值吗？",
            keyPhrases: [
              { en: "camera footage", zh: "监控画面" },
              { en: "list of items", zh: "物品清单" },
              { en: "approximate value", zh: "大概价值" },
            ],
            alternativeExpressions: [
              { textEn: "We've got the video. I'm gonna need you to write down everything that was in the bag and how much it's all worth, roughly.", textZh: "我们有视频了。我需要你写下行李里所有的东西以及大概值多少钱。", actionHint: "how much it's all worth 就是总共值多少", frequency: "common" },
              { textEn: "Good, the cameras caught it. Can you give me a rundown of what was inside and the total value?", textZh: "好的，监控拍到了。你能列一下里面有什么以及总价值吗？", actionHint: "a rundown 就是一个简要清单", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Clothes worth about $500, prescription medication, toiletries, and a tablet. The total value is probably around $1,500.",
            textZh: "大约500美元的衣服、处方药、洗漱用品和一台平板电脑。总价值大概1500美元。",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "Here's your police report number. For prescription medication, go to a local pharmacy with your prescription information — they may be able to issue an emergency supply.",
            textZh: "这是您的报案号。关于处方药，去当地药房带上处方信息——他们可能可以开紧急供应的药。",
            keyPhrases: [
              { en: "police report number", zh: "报案号" },
              { en: "prescription medication", zh: "处方药" },
              { en: "emergency supply", zh: "紧急供应" },
            ],
            alternativeExpressions: [
              { textEn: "Here's your case number. For the meds, hit up a pharmacy nearby with whatever prescription info you have — they can usually hook you up with enough to get by.", textZh: "这是你的案件号。药的话，去附近的药店带上你有的处方信息——他们一般能给你应急的量。", actionHint: "hit up 就是去找/去某处，hook you up with 就是给你提供", frequency: "common" },
              { textEn: "Got your report number right here. If you need your medication, any local pharmacy should be able to give you a short-term supply — just bring your prescription details.", textZh: "报案号在这。如果需要药，当地任何药店应该都能给你短期供应——带上处方信息就行。", actionHint: "short-term supply 就是短期供应量", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I'll contact my travel insurance company with the report. Can the hotel help me with some basic toiletries for tonight?",
            textZh: "谢谢。我会带着报案记录联系旅行保险公司。酒店今晚能提供一些基本洗漱用品吗？",
          },
        ],
      },
    ],
  },

  // ==================== 23. 儿童走失 ====================
  {
    id: "emergency-lost-child",
    category: "emergency",
    titleZh: "儿童走失",
    titleEn: "Lost Child",
    description: "在公共场所孩子走失后紧急求助",
    otherRole: "商场保安/工作人员",
    otherRoleIcon: "👶",
    flows: [
      {
        id: "basic",
        titleZh: "儿童走失紧急求助",
        titleEn: "Emergency Lost Child Search",
        description: "向保安报告、描述孩子、启动搜寻",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Please help! I can't find my child! She's only 5 years old. We were just in the toy section and she disappeared!",
            textZh: "请帮帮忙！我找不到我的孩子了！她才5岁。我们刚才在玩具区她就不见了！",
            culturalNote: "在国外带孩子出行，给孩子口袋里放一张卡片写上你的电话号码和酒店地址（中英文）。",
          },
          {
            speaker: "them",
            role: "商场保安",
            textEn: "Stay calm. We'll find her. What does she look like? What is she wearing?",
            textZh: "保持冷静。我们会找到她的。她长什么样？穿什么衣服？",
            keyPhrases: [
              { en: "stay calm", zh: "保持冷静" },
              { en: "what does she look like", zh: "她长什么样" },
            ],
            alternativeExpressions: [
              { textEn: "Take a breath, we'll help you. Can you describe her? What's she got on?", textZh: "深呼吸，我们会帮你。能描述一下她吗？穿了什么？", actionHint: "what's she got on 就是穿了什么衣服", frequency: "common" },
              { textEn: "Don't panic, this happens all the time and we always find them. Tell me what she looks like and what she's wearing.", textZh: "别慌，这种事经常发生我们总能找到。告诉我她长什么样穿什么衣服。", actionHint: "don't panic 就是别慌", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "She's Asian, has short black hair, and is wearing a pink dress with white shoes. Her name is Mimi. She speaks mostly Chinese.",
            textZh: "她是亚裔，短黑发，穿粉色连衣裙和白色鞋子。她叫咪咪。她主要说中文。",
          },
          {
            speaker: "them",
            role: "商场保安",
            textEn: "I'm initiating a Code Adam right now. All exits will be monitored. No one matching that description will be allowed to leave. We'll also make an announcement over the speakers.",
            textZh: "我现在启动Code Adam程序。所有出口将被监控。符合该描述的人不允许离开。我们也会通过广播通知。",
            keyPhrases: [
              { en: "Code Adam", zh: "儿童走失应急程序" },
              { en: "all exits monitored", zh: "所有出口被监控" },
              { en: "announcement", zh: "广播通知" },
            ],
            alternativeExpressions: [
              { textEn: "I'm locking down the exits right now. Nobody leaves without being checked. We'll put out an announcement on the PA. This is standard procedure — we'll find her.", textZh: "我现在封锁所有出口。任何人离开都要检查。我们会在广播里通知。这是标准程序——我们会找到她的。", actionHint: "locking down 就是封锁", frequency: "common" },
              { textEn: "Activating our missing child protocol. All doors are being watched. I'm getting on the speakers now.", textZh: "启动儿童走失应急程序。所有门口都有人看着。我现在就去广播。", actionHint: "missing child protocol 就是儿童走失应急程序", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh thank God. She doesn't speak much English. She might be scared and hiding. She loves the toy aisle and the candy section.",
            textZh: "谢天谢地。她英语说得不多。她可能害怕在躲起来。她喜欢玩具区和糖果区。",
          },
          {
            speaker: "them",
            role: "商场保安",
            textEn: "We'll check those areas first. My team is spreading out now. We do this regularly and we almost always find the child within minutes. Stay here at the service desk.",
            textZh: "我们会先检查那些区域。我的团队现在正在分散搜索。我们经常做这种搜索，几乎总能在几分钟内找到孩子。请留在服务台这里。",
            keyPhrases: [
              { en: "spreading out", zh: "分散搜索" },
              { en: "within minutes", zh: "几分钟内" },
              { en: "service desk", zh: "服务台" },
            ],
            alternativeExpressions: [
              { textEn: "We're heading there first. My guys are fanning out across the store. Don't worry, we deal with this a lot — kids usually turn up real quick. Stay right here.", textZh: "我们先去那些区域。我的人正在全店分散搜索。别担心，我们经常处理这种事——小孩通常很快就找到。就待在这。", actionHint: "fanning out 就是分散开来，turn up 就是出现/找到", frequency: "common" },
              { textEn: "Those will be the first spots we check. The team's on it. In our experience, we almost always find kids within a few minutes. Wait here at the front.", textZh: "那些地方我们先查。团队已经行动了。根据我们的经验，几乎总能在几分钟内找到孩子。在前台这等着。", actionHint: "the team's on it 就是团队在处理了", frequency: "common" },
            ],
          },
          {
            speaker: "them",
            role: "商场保安",
            textEn: "Good news! We found her in the candy aisle. She's with one of our staff members. She's safe and just a little scared.",
            textZh: "好消息！我们在糖果区找到她了。她和我们一位工作人员在一起。她很安全，只是有点害怕。",
            keyPhrases: [
              { en: "good news", zh: "好消息" },
              { en: "safe", zh: "安全" },
            ],
            alternativeExpressions: [
              { textEn: "We got her! She was in the candy aisle the whole time. One of our team is with her. She's fine, just a little scared.", textZh: "找到了！她一直在糖果区。我们一个同事陪着她。她没事，就是有点害怕。", actionHint: "we got her 就是找到她了", frequency: "common" },
              { textEn: "Great news — she's been found! She was hanging out near the candy. She's safe and sound, just a little shaken up.", textZh: "好消息——找到她了！她在糖果区附近。安然无恙，就是有点受惊。", actionHint: "safe and sound 就是安然无恙", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, thank you so much! I was so worried. I'll put a tracking tag on her from now on. Thank you for your quick help.",
            textZh: "太感谢你们了！我刚才太担心了。以后我会给她装一个追踪标签。谢谢你们的快速帮助。",
          },
        ],
      },
    ],
  },

  // ==================== 24. 动物咬伤 ====================
  {
    id: "emergency-animal-bite",
    category: "emergency",
    titleZh: "动物咬伤",
    titleEn: "Animal Bite",
    description: "在国外被动物咬伤后就医处理",
    otherRole: "医生/急诊护士",
    otherRoleIcon: "🐕",
    flows: [
      {
        id: "basic",
        titleZh: "动物咬伤就医流程",
        titleEn: "Medical Treatment for Animal Bite",
        description: "处理伤口、就医、注射疫苗",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I was bitten by a stray dog while walking on the street. My hand is bleeding. I need to see a doctor.",
            textZh: "我在街上走路时被一只流浪狗咬了。我的手在流血。我需要看医生。",
            culturalNote: "被动物咬伤后首先用清水和肥皂冲洗伤口至少15分钟，然后尽快就医。",
          },
          {
            speaker: "them",
            role: "急诊护士",
            textEn: "Let me see the wound. When did this happen? Did the dog seem aggressive or sick?",
            textZh: "让我看看伤口。什么时候发生的？那只狗看起来有攻击性或者生病了吗？",
            keyPhrases: [
              { en: "wound", zh: "伤口" },
              { en: "aggressive", zh: "有攻击性" },
            ],
            alternativeExpressions: [
              { textEn: "Let me take a look at that. How long ago did this happen? Did the dog look sick or aggressive?", textZh: "让我看看。多久前发生的？那只狗看起来生病了或者有攻击性吗？", actionHint: "take a look 就是看一下", frequency: "common" },
              { textEn: "Okay, show me the bite. When did it happen? Was the dog acting weird — like foaming or agitated?", textZh: "好的，让我看看咬伤。什么时候的事？那只狗行为异常吗——比如口吐白沫或者很躁动？", actionHint: "foaming 就是口吐白沫，agitated 就是躁动不安", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "About an hour ago. The dog was acting strangely — it was drooling a lot. I washed the wound with soap and water right away.",
            textZh: "大约一小时前。那只狗行为很奇怪——口水流得很多。我马上用肥皂和水冲洗了伤口。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Good that you washed it. Given the dog's behavior, we need to start a rabies vaccination series. Have you ever been vaccinated for rabies before?",
            textZh: "你冲洗得很好。根据狗的行为，我们需要开始狂犬病疫苗接种。你以前接种过狂犬病疫苗吗？",
            keyPhrases: [
              { en: "rabies vaccination", zh: "狂犬病疫苗" },
              { en: "vaccination series", zh: "系列接种" },
            ],
            alternativeExpressions: [
              { textEn: "Smart that you cleaned it right away. With the way the dog was acting, we should definitely get you started on rabies shots. Have you had those before?", textZh: "你马上清洗了很聪明。根据那只狗的表现，我们肯定要给你打狂犬病疫苗。你以前打过吗？", actionHint: "rabies shots 就是狂犬病疫苗", frequency: "common" },
              { textEn: "You did the right thing washing it. Given the symptoms you described, I'm gonna recommend the rabies vaccine series. Ever been vaccinated for rabies?", textZh: "你冲洗得对。根据你描述的狗的症状，我建议做狂犬病疫苗系列接种。接种过狂犬病疫苗吗？", actionHint: "I'm gonna recommend 就是我建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, never. Is rabies common here? Will the vaccination hurt?",
            textZh: "没有，从来没有。这里狂犬病常见吗？打疫苗疼吗？",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "In some areas, yes. The vaccine is given as a series of four shots in the arm over two weeks. It's not very painful. We'll also give you a tetanus booster and clean the wound thoroughly.",
            textZh: "在某些地区是的。疫苗需要在两周内分四针打在手臂上。不会很疼。我们还会给你打破伤风加强针并彻底清洁伤口。",
            keyPhrases: [
              { en: "four shots", zh: "四针" },
              { en: "tetanus booster", zh: "破伤风加强针" },
              { en: "clean the wound", zh: "清洁伤口" },
            ],
            alternativeExpressions: [
              { textEn: "It can be, yeah. It's a series of four injections in your arm over about two weeks. Not that bad. We'll also update your tetanus and properly clean up the bite.", textZh: "某些地方确实常见。需要两周内在手臂上打四针。没那么疼。我们还会补打破伤风和好好清理咬伤。", actionHint: "not that bad 就是没那么糟/没那么疼", frequency: "common" },
              { textEn: "In this region, yes. The rabies vaccine is four doses spread over two weeks, just in the upper arm. Plus we'll do a tetanus shot and get that wound properly cleaned.", textZh: "在这个地区是的。狂犬疫苗两周内打四针，打在上臂。另外给你打破伤风针并好好清洗伤口。", actionHint: "four doses 就是四剂/四针", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm leaving the country in a week. Can I get the remaining shots in another country?",
            textZh: "我一周后就离开这个国家了。能在其他国家打剩下的针吗？",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "Yes, any hospital or clinic can continue the vaccination schedule. I'll give you documentation showing which shots you've received and when the next ones are due.",
            textZh: "可以的，任何医院或诊所都可以继续接种。我会给你文件记录你已经打了哪些针以及下一针的时间。",
            keyPhrases: [
              { en: "vaccination schedule", zh: "接种计划" },
              { en: "documentation", zh: "文件记录" },
              { en: "when the next ones are due", zh: "下一针的时间" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely, any hospital abroad can pick up where we left off. I'll write everything down for you — which shots you got and when the rest are due.", textZh: "当然可以，国外任何医院都能接着打。我会把一切都写下来——打了哪些针、剩下的什么时候打。", actionHint: "pick up where we left off 就是接着继续", frequency: "common" },
              { textEn: "Sure, no problem. You can continue the shots anywhere. I'll give you paperwork with all the dates — what you've had and what's still needed.", textZh: "当然，没问题。在哪都能继续打。我给你出文件记录所有日期——打了什么还需要打什么。", actionHint: "paperwork 就是书面文件/记录", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 25. 签证过期 ====================
  {
    id: "emergency-visa-expired",
    category: "emergency",
    titleZh: "签证过期",
    titleEn: "Visa Expired",
    description: "发现签证过期后去移民局或律师处处理",
    otherRole: "移民官员/律师",
    otherRoleIcon: "📋",
    flows: [
      {
        id: "basic",
        titleZh: "签证过期处理流程",
        titleEn: "Handling Expired Visa",
        description: "发现签证过期、咨询处理方案、申请延期",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I just realized my visa expired three days ago. I didn't notice it. What should I do?",
            textZh: "我刚发现我的签证三天前就过期了。我没注意到。我该怎么办？",
            culturalNote: "签证过期即使只有一天，在很多国家都属于违法。尽快主动处理比被发现要好得多。",
          },
          {
            speaker: "them",
            role: "移民官员",
            textEn: "Overstaying your visa is a serious matter. How long have you been in the country, and when is your return flight?",
            textZh: "签证逾期是很严重的事情。您在这个国家待了多久了，回程航班是什么时候？",
            keyPhrases: [
              { en: "overstaying your visa", zh: "签证逾期" },
              { en: "serious matter", zh: "严重的事情" },
              { en: "return flight", zh: "回程航班" },
            ],
            alternativeExpressions: [
              { textEn: "Being past your visa date is a big deal. How long have you been here and when are you flying out?", textZh: "签证过期是大事。你在这里待了多久了？什么时候飞走？", actionHint: "past your visa date 就是签证过期了", frequency: "common" },
              { textEn: "That's an overstay, which we take seriously. When did you arrive, and do you have a ticket home?", textZh: "这是逾期居留，我们很重视。你什么时候到的？有回程机票吗？", actionHint: "overstay 就是逾期居留", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I've been here for 35 days on a 30-day visa. My return flight is in 5 days. I'm very sorry — it was an honest mistake.",
            textZh: "我30天签证已经待了35天。我的回程航班在5天后。非常抱歉——这是无心之过。",
          },
          {
            speaker: "them",
            role: "移民官员",
            textEn: "You'll need to apply for a visa extension or pay an overstay fine. With a short overstay and a booked return flight, we can usually process this without major penalties.",
            textZh: "您需要申请签证延期或支付逾期罚款。逾期时间短且有预订的回程航班，我们通常可以在没有严重处罚的情况下处理。",
            keyPhrases: [
              { en: "visa extension", zh: "签证延期" },
              { en: "overstay fine", zh: "逾期罚款" },
              { en: "without major penalties", zh: "没有严重处罚" },
            ],
            alternativeExpressions: [
              { textEn: "You'll need to either extend your visa or pay the overstay penalty. Since you're only a few days over and you've got a flight booked, it shouldn't be too bad.", textZh: "你需要延签或者交逾期罚款。因为只超了几天而且已经订了回程航班，应该不会太严重。", actionHint: "a few days over 就是超了几天", frequency: "common" },
              { textEn: "Look, for a short overstay like this with a return ticket, we can usually sort it out with a fine and an extension. No deportation or anything like that.", textZh: "听着，像你这样短期逾期又有回程机票的，我们通常交罚款加延期就能解决。不会被驱逐出境什么的。", actionHint: "sort it out 就是解决/处理好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What do I need to bring? And how much is the fine?",
            textZh: "我需要带什么？罚款多少？",
          },
          {
            speaker: "them",
            role: "移民官员",
            textEn: "Bring your passport, return ticket, proof of accommodation, and $200 for the overstay fine. Fill out this extension application form.",
            textZh: "带上护照、回程机票、住宿证明和200美元的逾期罚款。填写这张延期申请表。",
            keyPhrases: [
              { en: "proof of accommodation", zh: "住宿证明" },
              { en: "extension application", zh: "延期申请" },
            ],
            alternativeExpressions: [
              { textEn: "You'll need your passport, flight ticket, hotel booking or proof of where you're staying, and 200 bucks for the fine. Here, fill this out.", textZh: "你需要护照、机票、酒店预订或住宿证明，还有200美元罚款。来，填这个。", actionHint: "200 bucks 就是200美元", frequency: "common" },
              { textEn: "Bring everything — passport, return ticket, something showing where you're staying, plus the $200 penalty. And complete this extension form for me.", textZh: "什么都带上——护照、回程机票、住宿证明，加上200美元罚金。然后帮我填这张延期表。", actionHint: "penalty 就是罚金", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will this affect my future travel? Can I still come back to this country?",
            textZh: "这会影响我以后的旅行吗？我还能再来这个国家吗？",
          },
          {
            speaker: "them",
            role: "移民官员",
            textEn: "A short overstay with proper resolution usually doesn't result in a ban. Pay the fine, get the extension stamp, and you'll have a record but no ban. Next time, set a reminder a week before your visa expires.",
            textZh: "短期逾期且妥善处理通常不会导致禁令。交罚款、拿到延期章，会有记录但不会被禁入。下次签证到期前一周设个提醒。",
            keyPhrases: [
              { en: "proper resolution", zh: "妥善处理" },
              { en: "ban", zh: "禁令" },
              { en: "extension stamp", zh: "延期章" },
            ],
            alternativeExpressions: [
              { textEn: "For something this minor, you won't get banned as long as you take care of it. Pay up, get the stamp, and you're good. Just set a reminder next time.", textZh: "这么轻微的情况，只要你处理好就不会被禁入。交罚款，拿到章，就没事了。下次记得设提醒。", actionHint: "pay up 就是交钱/付款", frequency: "common" },
              { textEn: "A few days over with a clean record? Usually no ban. Clear the fine, get your extension, and you'll have a note on file but nothing serious. Be more careful with dates next time.", textZh: "超了几天而且记录清白？通常不会被禁入。交罚款，拿延期，会有记录但不严重。下次注意日期。", actionHint: "a note on file 就是档案里会有一条记录", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },
];
