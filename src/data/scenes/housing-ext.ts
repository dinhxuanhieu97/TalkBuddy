import type { PresetScene } from "../scene-types";

/**
 * 🏠 住房扩展场景（Housing Extension）
 * 15 个住房相关扩展场景，涵盖房贷、保险、物业、交割、租房、搬家等
 */
export const HOUSING_SCENES_EXT: PresetScene[] = [
  // ==================== 1. 房贷咨询 ====================
  {
    id: "housing-mortgage-inquiry",
    category: "housing",
    titleZh: "房贷咨询",
    titleEn: "Mortgage Inquiry",
    description: "向贷款顾问咨询房贷方案、利率和申请条件",
    otherRole: "贷款顾问",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "basic",
        titleZh: "基本房贷咨询",
        titleEn: "Basic Mortgage Inquiry",
        description: "第一次咨询房贷的标准流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm interested in getting a mortgage. I'm a first-time homebuyer.",
            textZh: "你好，我想了解房贷。我是第一次买房。",
            casualVersion: "Hey, I'm looking into getting a mortgage. Never bought a house before.",
            culturalNote: "在美国，直接说明来意即可，无需过度客套。",
            commonMistake: {
              wrong: "I want to get a mortgage. I am first time homebuyer.",
              correct: "I'm interested in getting a mortgage. I'm a first-time homebuyer.",
              explanation: "“I want”语气生硬，用“I'm interested in”更自然。 “first time homebuyer”作定语时通常用连字符，或作为短语用“a first-time homebuyer”。",
            },
            formalityVariants: {
              casual: "Hey, looking to get a mortgage. First-time buyer here.",
              standard: "Hi, I'm interested in getting a mortgage. I'm a first-time homebuyer.",
              formal: "Good morning/afternoon, I'm inquiring about mortgage options. I am a first-time homebuyer, and I'd appreciate some guidance.",
            },
          },
          {
            speaker: "them",
            role: "贷款顾问",
            textEn: "Welcome! That's exciting. Let me walk you through our mortgage options. Do you know what price range you're looking at?",
            textZh: "欢迎！这很令人兴奋。让我带您了解我们的房贷方案。您知道您的预算范围吗？",
            keyPhrases: [
              { en: "mortgage options", zh: "房贷方案" },
              { en: "price range", zh: "价格/预算范围" },
            ],
            alternativeExpressions: [
              { textEn: "Great, congrats on taking that step! So, do you have a budget in mind for your home?", textZh: "太好了，恭喜你迈出这一步！你心里有个预算吗？", actionHint: "taking that step 表示迈出重要一步", frequency: "common" },
            ],
            casualVersion: "Awesome! Super exciting. Lemme go over our mortgage options. Got a price range in mind?",
            formalityVariants: {
              casual: "Cool! That's awesome. Let me show you our mortgage stuff. What kinda price range are you thinking?",
              standard: "Welcome! That's exciting. Let me walk you through our mortgage options. Do you know what price range you're looking at?",
              formal: "Welcome! This is indeed an exciting step. Allow me to present our various mortgage options. May I inquire if you have a specific price range in mind for your prospective home?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm looking at homes around three hundred thousand dollars. What kind of down payment do I need?",
            textZh: "我看的房子大概30万美元左右。我需要多少首付？",
            casualVersion: "Probably around 300K. How much do I need to put down?",
            commonMistake: {
              wrong: "I am looking house around three hundred thousand dollars. How much down payment I need?",
              correct: "I'm looking at homes around three hundred thousand dollars. What kind of down payment do I need?",
              explanation: "“looking at homes”比“looking house”更自然。 问数量用“What kind of”或“How much of a”更地道，且“I need”前应加助动词或系动词。",
            },
            formalityVariants: {
              casual: "Looking at places for 'bout 300K. What's the down payment like?",
              standard: "I'm looking at homes around three hundred thousand dollars. What kind of down payment do I need?",
              formal: "My property search is centered on homes approximately valued at three hundred thousand dollars. Could you please advise on the required down payment amount?",
            },
          },
          {
            speaker: "them",
            role: "贷款顾问",
            textEn: "For a conventional loan, we typically require twenty percent down, which would be sixty thousand. But we also have FHA loans with as little as three and a half percent down.",
            textZh: "常规贷款通常需要20%的首付，也就是6万美元。但我们也有FHA贷款，最低只需3.5%的首付。",
            keyPhrases: [
              { en: "conventional loan", zh: "常规贷款" },
              { en: "down payment", zh: "首付" },
            ],
            alternativeExpressions: [
              { textEn: "So the standard is twenty percent down, but honestly, a lot of first-time buyers go with an FHA loan — you can get in with just three and a half percent.", textZh: "标准是20%首付，但说实话，很多首次购房者选FHA贷款——只需要3.5%就行。", actionHint: "get in 在这里指拿到贷款/买到房", frequency: "common" },
            ],
            casualVersion: "So, for a regular loan, we usually need twenty percent down, that's sixty grand. But, we also got FHA loans, which can be as low as three and a half percent down.",
            culturalNote: "FHA贷款是美国特有的政府担保贷款，对首付和信用要求较低，适合首次购房者。",
            formalityVariants: {
              casual: "Conventional loan, you're lookin' at 20% down, so $60K. But FHA's only like 3.5%.",
              standard: "For a conventional loan, we typically require twenty percent down, which would be sixty thousand. But we also have FHA loans with as little as three and a half percent down.",
              formal: "Regarding conventional loans, a twenty percent down payment, equating to sixty thousand dollars, is standard. However, we also offer FHA loans, which may require as little as three and a half percent down.",
            },
          },
          {
            speaker: "you",
            textEn: "What's the current interest rate for a thirty-year fixed mortgage?",
            textZh: "30年固定利率房贷现在的利率是多少？",
            casualVersion: "What's the rate looking like for a 30-year fixed?",
            culturalNote: "“30年固定利率房贷”是美国最常见的房贷类型之一。",
            commonMistake: {
              wrong: "What is current interest rate for thirty-year fixed mortgage?",
              correct: "What's the current interest rate for a thirty-year fixed mortgage?",
              explanation: "“current interest rate”前通常加定冠词“the”，名词前加不定冠词“a”。",
            },
            formalityVariants: {
              casual: "What's the rate for a 30-year fixed right now?",
              standard: "What's the current interest rate for a thirty-year fixed mortgage?",
              formal: "Could you please inform me of the prevailing interest rate for a thirty-year fixed mortgage?",
            },
          },
          {
            speaker: "them",
            role: "贷款顾问",
            textEn: "Right now, our thirty-year fixed rate is around six point five percent. If you have excellent credit, you might qualify for a slightly lower rate. Would you like me to run a pre-approval for you?",
            textZh: "目前我们30年固定利率大约是6.5%。如果您信用记录优秀，可能获得稍低的利率。需要我帮您做贷款预批吗？",
            keyPhrases: [
              { en: "fixed rate", zh: "固定利率" },
              { en: "pre-approval", zh: "贷款预批" },
            ],
            alternativeExpressions: [
              { textEn: "We're sitting at about six and a half percent for a 30-year fixed right now. Good credit could bring that down a bit. Want me to get you pre-approved?", textZh: "现在30年固定大概6.5%。信用好的话能再低点。要不要我帮你做个预批？", actionHint: "sitting at 口语中表示目前处于某个水平", frequency: "common" },
            ],
            culturalNote: "在美国看房前最好先拿到贷款预批信（pre-approval letter），卖家会更认真对待你的报价。",
            casualVersion: "Right now, our 30-year fixed is 'round 6.5%. If your credit's great, you might snag a bit lower. Wanna do a pre-approval?",
            commonMistake: {
              wrong: "Do you like me to run pre-approval for you?",
              correct: "Would you like me to run a pre-approval for you?",
              explanation: "询问意愿通常用“Would you like...”，更礼貌。 “pre-approval”前通常加不定冠词“a”。",
            },
            formalityVariants: {
              casual: "Our 30-year fixed is sitting around 6.5%. Really good credit might get you a lower one. Want me to do a pre-approval?",
              standard: "Right now, our thirty-year fixed rate is around six point five percent. If you have excellent credit, you might qualify for a slightly lower rate. Would you like me to run a pre-approval for you?",
              formal: "Presently, our thirty-year fixed rate is approximately six point five percent. Should your credit score be exceptional, you may indeed qualify for a marginally reduced rate. Would you be interested in pursuing a pre-approval at this time?",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "比较贷款方案",
        titleEn: "Comparing Loan Options",
        description: "深入了解不同贷款类型和条款",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Can you explain the difference between a fixed-rate and an adjustable-rate mortgage?",
            textZh: "你能解释一下固定利率和浮动利率房贷的区别吗？",
            casualVersion: "So what's the deal with fixed vs. adjustable rates?",
            commonMistake: {
              wrong: "Can you explain fixed-rate and adjustable-rate mortgage difference?",
              correct: "Can you explain the difference between a fixed-rate and an adjustable-rate mortgage?",
              explanation: "“the difference between X and Y”是正确表达方式，而非直接将名词并列。",
            },
            formalityVariants: {
              casual: "What's the diff between fixed and adjustable mortgages?",
              standard: "Can you explain the difference between a fixed-rate and an adjustable-rate mortgage?",
              formal: "Could you please elucidate the distinctions between a fixed-rate and an adjustable-rate mortgage?",
            },
          },
          {
            speaker: "them",
            role: "贷款顾问",
            textEn: "With a fixed-rate mortgage, your interest rate stays the same for the entire loan term. An adjustable-rate mortgage, or ARM, starts with a lower rate that can change after an initial period, usually five or seven years.",
            textZh: "固定利率房贷的利率在整个贷款期限内保持不变。浮动利率房贷（ARM）一开始利率较低，但在初始期（通常5年或7年）后利率会调整。",
            keyPhrases: [
              { en: "adjustable-rate mortgage", zh: "浮动利率房贷" },
              { en: "initial period", zh: "初始期/固定期" },
            ],
            alternativeExpressions: [
              { textEn: "Basically, fixed means your rate is locked in forever. An ARM gives you a lower rate upfront, but it can go up after a few years.", textZh: "简单说，固定就是利率永远不变。ARM一开始利率低，但几年后可能涨。", actionHint: "locked in 意思是锁定不变", frequency: "common" },
            ],
            casualVersion: "So, fixed-rate, your interest rate just stays the same the whole loan. ARM, or adjustable, starts lower, but it can change after like, five or seven years.",
            culturalNote: "ARM (Adjustable-Rate Mortgage)在初始期过后利率会浮动，购房者需了解其风险。",
            formalityVariants: {
              casual: "Fixed rate means your interest never changes. ARM starts low, but it can go up after the first 5 or 7 years.",
              standard: "With a fixed-rate mortgage, your interest rate stays the same for the entire loan term. An adjustable-rate mortgage, or ARM, starts with a lower rate that can change after an initial period, usually five or seven years.",
              formal: "A fixed-rate mortgage guarantees a consistent interest rate throughout the entirety of the loan term. Conversely, an adjustable-rate mortgage, commonly known as an ARM, commences with a comparatively lower interest rate, which is subject to periodic adjustments following an initial fixed period, typically spanning five or seven years.",
            },
          },
          {
            speaker: "you",
            textEn: "What about closing costs? How much should I expect to pay?",
            textZh: "过户费用呢？大概要付多少？",
            casualVersion: "And how much are closing costs gonna run me?",
            culturalNote: "Closing costs在美国购房中是额外的大笔支出，除了首付之外还需要准备这部分资金。",
            commonMistake: {
              wrong: "How much money I should pay for closing costs?",
              correct: "What about closing costs? How much should I expect to pay?",
              explanation: "“What about X?”是引出话题的自然方式。 问金额常用“How much should I expect to pay”或“How much are the closing costs?”",
            },
            formalityVariants: {
              casual: "And closing costs? How much am I looking at for those?",
              standard: "What about closing costs? How much should I expect to pay?",
              formal: "Regarding closing costs, what is the anticipated expenditure I should prepare for?",
            },
          },
          {
            speaker: "them",
            role: "贷款顾问",
            textEn: "Closing costs typically run between two to five percent of the loan amount. For a three-hundred-thousand-dollar home, that's roughly six to fifteen thousand dollars. This includes appraisal fees, title insurance, and origination fees.",
            textZh: "过户费用通常是贷款金额的2%到5%。对于30万美元的房子，大约6000到15000美元。这包括评估费、产权保险和贷款手续费。",
            keyPhrases: [
              { en: "closing costs", zh: "过户费用" },
              { en: "appraisal fees", zh: "评估费" },
            ],
            alternativeExpressions: [
              { textEn: "You're probably looking at two to five percent of the purchase price — so somewhere around six to fifteen grand. That covers things like the appraisal, title search, and lender fees.", textZh: "大概是购房价的2%到5%——也就是6000到15000左右。包括评估、产权查询和贷方费用。", actionHint: "grand 口语中表示一千美元", frequency: "common" },
            ],
            casualVersion: "Closing costs usually run 'bout two to five percent of the loan amount. So, for a $300K house, that's roughly six to fifteen grand. Covers appraisal fees, title insurance, origination fees, all that.",
            culturalNote: "评估费 (appraisal fees)、产权保险 (title insurance) 和贷款手续费 (originat",
            formalityVariants: {
              casual: "Closing costs are usually 2-5% of the loan. So for 300K, that's like 6 to 15 grand. Includes appraisals, title, and all that setup stuff.",
              standard: "Closing costs typically run between two to five percent of the loan amount. For a three-hundred-thousand-dollar home, that's roughly six to fifteen thousand dollars. This includes appraisal fees, title insurance, and origination fees.",
              formal: "Closing costs generally range from two to five percent of the total loan amount. For a property valued at three hundred thousand dollars, this would translate to an estimated six to fifteen thousand dollars. These costs encompass items such as appraisal fees, title insurance, and origination fees.",
            },
          },
          {
            speaker: "you",
            textEn: "Is there any way to reduce the closing costs or get them rolled into the loan?",
            textZh: "有办法降低过户费用或者把它们加到贷款里吗？",
            casualVersion: "Any way to cut those costs down or just add them to the loan?",
            culturalNote: "“Roll into the loan”意味着将费用加入贷款总额中，虽然前期支付减少，但长期来看会支付更多利息。",
            commonMistake: {
              wrong: "Can I reduce closing costs or put them into loan?",
              correct: "Is there any way to reduce the closing costs or get them rolled into the loan?",
              explanation: "“put them into loan”不地道，常用“roll them into the loan”或“finance them into the loan”。",
            },
            formalityVariants: {
              casual: "Any way to cut closing costs or just add 'em to the loan?",
              standard: "Is there any way to reduce the closing costs or get them rolled into the loan?",
              formal: "Are there any available options to mitigate the closing costs or to incorporate them into the principal loan amount?",
            },
          },
          {
            speaker: "them",
            role: "贷款顾问",
            textEn: "Yes, we do offer a no-closing-cost option where we roll the fees into your loan, but that means a slightly higher interest rate. You can also negotiate with the seller to cover part of the closing costs — that's called a seller concession.",
            textZh: "是的，我们有免过户费的方案，把费用加到贷款里，但利率会稍高。您也可以跟卖家协商分担部分过户费——这叫卖家让步。",
            keyPhrases: [
              { en: "no-closing-cost option", zh: "免过户费方案" },
              { en: "seller concession", zh: "卖家让步/卖家分担费用" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, we can wrap those into the loan if you want — just bumps your rate up a little. Or you could ask the seller to chip in. That happens a lot, actually.", textZh: "可以把费用包进贷款里——就是利率会高一点。或者你可以让卖家分担一些，这其实挺常见的。", actionHint: "chip in 意思是分担/出一部分钱", frequency: "common" },
            ],
            casualVersion: "Yeah, we got a no-closing-cost thing where we just roll 'em into your loan, but then your interest rate's a bit higher. You can also try to get the seller to cover some—that's a seller concession.",
            culturalNote: "“Seller concession”（卖家让步）是买卖双方协商的一种方式，卖家同意支付部分买家的过户费用，在购房谈判中",
            formalityVariants: {
              casual: "Yep, we can roll the fees into your loan with a 'no-closing-cost' option, but the rate goes up a little. Or, you can try to get the seller to pay part of 'em – that's called a seller concession.",
              standard: "Yes, we do offer a no-closing-cost option where we roll the fees into your loan, but that means a slightly higher interest rate. You can also negotiate with the seller to cover part of the closing costs — that's called a seller concession.",
              formal: "Indeed, we provide a no-closing-cost option, which involves incorporating these fees into your loan, albeit resulting in a marginally increased interest rate. Additionally, you may engage in negotiations with the seller to cover a portion of these costs, a practice known as a seller concession.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 2. 房屋保险 ====================
  {
    id: "housing-home-insurance",
    category: "housing",
    titleZh: "房屋保险",
    titleEn: "Home Insurance",
    description: "向保险代理了解房屋保险的种类和覆盖范围",
    otherRole: "保险代理",
    otherRoleIcon: "🏦",
    flows: [
      {
        id: "basic",
        titleZh: "基本保险咨询",
        titleEn: "Basic Insurance Inquiry",
        description: "第一次购买房屋保险的咨询流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just bought a house and I need homeowner's insurance. Can you help me?",
            textZh: "你好，我刚买了房子，需要房屋保险。你能帮我吗？",
            casualVersion: "Hey, I need to get insurance for my new house.",
            formalityVariants: {
              casual: "Hey, just bought a house, need homeowner's insurance. Can you help?",
              standard: "Hi, I just bought a house and I need homeowner's insurance. Can you help me?",
              formal: "Good morning/afternoon, I've recently purchased a property and require homeowner's insurance. Would you be able to assist me with this?",
            },
          },
          {
            speaker: "them",
            role: "保险代理",
            textEn: "Congratulations on your new home! Absolutely. I'll need some details about the property — the address, square footage, and year it was built. Do you have that handy?",
            textZh: "恭喜您的新房！当然可以。我需要一些房子的信息——地址、面积和建造年份。您手边有吗？",
            keyPhrases: [
              { en: "square footage", zh: "面积（平方英尺）" },
              { en: "year it was built", zh: "建造年份" },
            ],
            alternativeExpressions: [
              { textEn: "Nice, congrats! So I'll need to know a few things — where's the property, how big is it, and when was it built?", textZh: "恭喜！我需要知道几件事——房子在哪、多大、什么时候建的？", actionHint: "更口语化的信息收集方式", frequency: "common" },
            ],
            casualVersion: "Congrats on the new place! Yeah, totally. I'll need some info on it — address, size, when it was built. Got that stuff nearby?",
            formalityVariants: {
              casual: "Congrats on the new place! Yep. Just need some info on it — address, size, when it was built. Got it?",
              standard: "Congratulations on your new home! Absolutely. I'll need some details about the property — the address, square footage, and year it was built. Do you have that handy?",
              formal: "Many congratulations on your recent home purchase! Certainly. I will require certain property specifics, including the address, square footage, and the year of construction. Are these details readily available to you?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, it's about two thousand square feet, built in 2005. What does a standard policy cover?",
            textZh: "有的，大约2000平方英尺，2005年建的。标准保单涵盖什么？",
            casualVersion: "Yeah, it's around 2,000 square feet, built in 2005. What does basic coverage include?",
            formalityVariants: {
              casual: "Yeah, it's like 2k sq ft, built in '05. What's a normal policy cover?",
              standard: "Yes, it's about two thousand square feet, built in 2005. What does a standard policy cover?",
              formal: "Yes, the property is approximately two thousand square feet and was constructed in 2005. Could you please outline the coverage provided by a standard policy?",
            },
          },
          {
            speaker: "them",
            role: "保险代理",
            textEn: "A standard homeowner's policy covers the structure of your home, your personal belongings, liability if someone gets injured on your property, and additional living expenses if you can't live in the home due to damage.",
            textZh: "标准房屋保险涵盖房屋结构、个人财物、如果有人在您的房子受伤的责任赔偿，以及如果房屋因损坏无法居住的额外生活费用。",
            keyPhrases: [
              { en: "liability", zh: "责任赔偿" },
              { en: "additional living expenses", zh: "额外生活费用" },
            ],
            alternativeExpressions: [
              { textEn: "So basically it covers the house itself, everything inside, any lawsuits if someone gets hurt at your place, and if you have to move out temporarily after a disaster, it helps with those costs too.", textZh: "基本上涵盖房子本身、里面所有东西、有人在你家受伤的诉讼，还有灾后如果你得临时搬出去，也帮你付费用。", actionHint: "at your place 口语中表示在你家", frequency: "common" },
            ],
            culturalNote: "美国的房屋保险通常不包括洪水和地震险，需要另外购买。贷款银行一般要求必须有房屋保险。",
            casualVersion: "Basically, it covers the house itself, your stuff, if someone gets hurt there, and if you gotta move out 'cause of damage.",
            formalityVariants: {
              casual: "It covers the house itself, your stuff, if someone gets hurt on your property, and living costs if you can't stay there.",
              standard: "A standard homeowner's policy covers the structure of your home, your personal belongings, liability if someone gets injured on your property, and additional living expenses if you can't live in the home due to damage.",
              formal: "A comprehensive standard homeowner's policy typically provides coverage for the physical structure of your residence, your personal possessions, liability for injuries sustained on the premises, and supplementary living expenses should the property become uninhabitable due to covered damages.",
            },
          },
          {
            speaker: "you",
            textEn: "How much is the premium for that kind of coverage?",
            textZh: "这种保险的保费大概多少？",
            casualVersion: "So what would that cost me per month?",
            formalityVariants: {
              casual: "What's the premium for that?",
              standard: "How much is the premium for that kind of coverage?",
              formal: "Could you please inform me of the premium associated with that particular scope of coverage?",
            },
          },
          {
            speaker: "them",
            role: "保险代理",
            textEn: "For a home like yours, you're looking at roughly twelve hundred to eighteen hundred dollars a year. You can lower your premium by choosing a higher deductible. Our most popular plan has a thousand-dollar deductible.",
            textZh: "像您这样的房子，每年大约1200到1800美元。您可以通过选择更高的免赔额来降低保费。我们最受欢迎的方案免赔额是1000美元。",
            keyPhrases: [
              { en: "premium", zh: "保费" },
              { en: "deductible", zh: "免赔额" },
            ],
            alternativeExpressions: [
              { textEn: "Ballpark, you'd be paying somewhere between twelve and eighteen hundred a year. If you bump up your deductible, that brings the premium down. Most folks go with a thousand-dollar deductible.", textZh: "大概每年1200到1800美元左右。如果你提高免赔额，保费就会降低。大多数人选1000美元的免赔额。", actionHint: "ballpark 意思是大概/粗略估计", frequency: "common" },
            ],
            casualVersion: "For your place, it's probably around twelve to eighteen hundred bucks a year. You can get it cheaper with a bigger deductible. Most folks go for the one with a grand deductible.",
            formalityVariants: {
              casual: "Your place would be like $1200-1800 a year. You can drop it with a bigger deductible. Our popular plan's got a thousand-dollar one.",
              standard: "For a home like yours, you're looking at roughly twelve hundred to eighteen hundred dollars a year. You can lower your premium by choosing a higher deductible. Our most popular plan has a thousand-dollar deductible.",
              formal: "For a property of your specifications, the annual premium would typically range from twelve hundred to eighteen hundred dollars. It is possible to reduce this premium by selecting a higher deductible. Our most frequently selected plan features a one-thousand-dollar deductible.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "理赔和附加险",
        titleEn: "Claims and Add-ons",
        description: "了解理赔流程和额外保险选项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "What happens if I need to file a claim? How does the process work?",
            textZh: "如果我需要理赔怎么办？流程是怎样的？",
            casualVersion: "So if something happens, how do I file a claim?",
            formalityVariants: {
              casual: "So, if I gotta file a claim, what then? How's that whole thing go?",
              standard: "What happens if I need to file a claim? How does the process work?",
              formal: "Should I need to file a claim, what would be the appropriate procedure? Could you please explain the process?",
            },
          },
          {
            speaker: "them",
            role: "保险代理",
            textEn: "You'd call our claims hotline or file online. An adjuster will come out to assess the damage, usually within forty-eight hours. After that, we'll send you a settlement offer based on their report.",
            textZh: "您可以打我们的理赔热线或在线申报。理赔员会来评估损失，通常48小时内。之后我们会根据他们的报告给您发一份赔偿方案。",
            keyPhrases: [
              { en: "adjuster", zh: "理赔员/定损员" },
              { en: "settlement offer", zh: "赔偿方案" },
            ],
            alternativeExpressions: [
              { textEn: "Just give us a call or go online to report it. We'll send someone out to take a look — usually within a day or two — and then we'll let you know what we can cover.", textZh: "打电话或上网报告就行。我们会派人去看看——通常一两天内——然后告诉你我们能赔多少。", actionHint: "take a look 这里指检查/评估损失", frequency: "common" },
            ],
            casualVersion: "You just call our claims line or do it online. Someone'll come check out the damage, usually within two days. Then we send you an offer based on what they find.",
            formalityVariants: {
              casual: "Just call the claims line or file online. An adjuster'll check the damage, usually within two days. Then we send an offer based on their report.",
              standard: "You'd call our claims hotline or file online. An adjuster will come out to assess the damage, usually within forty-eight hours. After that, we'll send you a settlement offer based on their report.",
              formal: "You would initiate the process by contacting our claims hotline or submitting a report online. Subsequently, an adjuster will be dispatched to evaluate the damage, typically within forty-eight hours. Following their assessment, we will issue a settlement offer based upon their findings.",
            },
          },
          {
            speaker: "you",
            textEn: "Does my policy cover flood damage? We live near a creek.",
            textZh: "我的保单涵盖洪水损失吗？我们住在小溪附近。",
            casualVersion: "Are we covered for flooding? There's a creek right by our place.",
            formalityVariants: {
              casual: "So, flood damage covered? We're by a creek.",
              standard: "Does my policy cover flood damage? We live near a creek.",
              formal: "Is flood damage included in my policy's coverage? We reside in close proximity to a creek.",
            },
          },
          {
            speaker: "them",
            role: "保险代理",
            textEn: "No, flood damage is not included in a standard homeowner's policy. You would need a separate flood insurance policy through the National Flood Insurance Program. Given your proximity to a creek, I'd strongly recommend it.",
            textZh: "不，洪水损失不包含在标准房屋保单中。您需要通过国家洪水保险计划购买单独的洪水保险。鉴于您靠近小溪，我强烈建议您购买。",
            keyPhrases: [
              { en: "flood insurance", zh: "洪水保险" },
              { en: "National Flood Insurance Program", zh: "国家洪水保险计划" },
            ],
            alternativeExpressions: [
              { textEn: "Actually, no — floods aren't covered under your regular policy. You'd need to get a separate flood policy. And honestly, being that close to water, I'd really push you to get it.", textZh: "实际上不——洪水不在常规保单范围内。你得单独买一个洪水险。说实话，离水那么近，我真的建议你买。", actionHint: "push you to 意思是强烈建议", frequency: "common" },
            ],
            casualVersion: "Nah, standard homeowner's doesn't cover floods. You'd need a separate flood policy through the NFIP. Since you're near a creek, I'd totally recommend it.",
            formalityVariants: {
              casual: "Nope, standard homeowner's doesn't cover floods. You'd need a separate one through NFIP. Since you're by a creek, I'd really recommend it.",
              standard: "No, flood damage is not included in a standard homeowner's policy. You would need a separate flood insurance policy through the National Flood Insurance Program. Given your proximity to a creek, I'd strongly recommend it.",
              formal: "Regrettably, flood damage is not encompassed within a standard homeowner's policy. A distinct flood insurance policy, available through the National Flood Insurance Program, would be required. Considering your property's vicinity to a creek, I would highly advise obtaining such coverage.",
            },
          },
          {
            speaker: "you",
            textEn: "How much extra would flood insurance cost?",
            textZh: "洪水保险额外要多少钱？",
            casualVersion: "What would the flood insurance run me?",
            formalityVariants: {
              casual: "What's flood insurance run?",
              standard: "How much extra would flood insurance cost?",
              formal: "What would be the additional cost for flood insurance?",
            },
          },
          {
            speaker: "them",
            role: "保险代理",
            textEn: "It depends on your flood zone, but for properties near water, it's typically between seven hundred and two thousand dollars a year. I can look up your exact zone and give you a firm quote.",
            textZh: "取决于您的洪水区划，但靠近水源的房子通常每年700到2000美元。我可以查一下您的具体区划，给您一个准确报价。",
            keyPhrases: [
              { en: "flood zone", zh: "洪水区划" },
              { en: "firm quote", zh: "准确报价" },
            ],
            alternativeExpressions: [
              { textEn: "It varies by zone, but you're probably looking at seven hundred to two grand a year. Let me pull up your address and I can give you an exact number.", textZh: "不同区划不一样，但大概每年700到2000。让我查一下你的地址，我可以给你个准确数字。", actionHint: "two grand 口语中表示两千美元", frequency: "common" },
            ],
            casualVersion: "Depends on your flood zone, but usually for places by water, it's like $700 to $2000 a year. I can look up your exact zone and get you a solid number.",
            formalityVariants: {
              casual: "Depends on your flood zone, but usually $700-2000 a year for places near water. I can check your exact zone for a firm quote.",
              standard: "It depends on your flood zone, but for properties near water, it's typically between seven hundred and two thousand dollars a year. I can look up your exact zone and give you a firm quote.",
              formal: "The cost is contingent upon your designated flood zone; however, for properties situated near water, it typically ranges from seven hundred to two thousand dollars annually. I would be pleased to ascertain your precise zone classification and provide you with a definitive quotation.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 3. 业主大会 ====================
  {
    id: "housing-hoa-meeting",
    category: "housing",
    titleZh: "业主大会",
    titleEn: "HOA Meeting",
    description: "参加小区业主委员会（HOA）会议，讨论社区事务",
    otherRole: "物业经理",
    otherRoleIcon: "🏘️",
    flows: [
      {
        id: "basic",
        titleZh: "第一次参加业主大会",
        titleEn: "First HOA Meeting",
        description: "初次参加业主大会的标准流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, this is my first HOA meeting. Where should I sign in?",
            textZh: "你好，这是我第一次参加业主大会。我在哪里签到？",
            casualVersion: "Hey, first time here. Where do I check in?",
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Welcome! Just sign the attendance sheet right here. You'll need your unit number and name. We'll be going over the budget and voting on the new landscaping proposal today.",
            textZh: "欢迎！在这里签到就行。需要您的房号和姓名。今天我们将审议预算并对新的园林绿化方案投票。",
            keyPhrases: [
              { en: "attendance sheet", zh: "签到表" },
              { en: "landscaping proposal", zh: "园林绿化方案" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, glad you could make it! Just put your name and unit number on this list. Today we're talking budget and voting on whether to redo the landscaping.", textZh: "嘿，很高兴你来了！在这个名单上写上姓名和房号就行。今天讨论预算，还要投票决定是否重做绿化。", actionHint: "glad you could make it 表示很高兴你能来", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I noticed the HOA dues went up this year. Is that what we're discussing?",
            textZh: "我注意到今年的物业费涨了。这是我们要讨论的内容吗？",
            casualVersion: "So the fees went up — is that on the agenda?",
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Yes, that's on the agenda. The increase is mainly to cover rising maintenance costs and the new security cameras we approved last quarter. The board will present a breakdown of expenses.",
            textZh: "是的，这在议程上。涨价主要是为了应对不断上涨的维护费用和上季度批准的新安防摄像头。管委会将展示费用明细。",
            keyPhrases: [
              { en: "HOA dues", zh: "物业费/业主会费" },
              { en: "breakdown of expenses", zh: "费用明细" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, we'll be covering that. The bump is mostly because maintenance costs went up and we added those security cameras. The board's gonna show you where all the money goes.", textZh: "对，会讲到。涨价主要是因为维护费用涨了，加上装了安防摄像头。管委会会给大家看钱都花在了哪里。", actionHint: "the bump 这里指涨价", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can homeowners vote on the budget, or is that just the board's decision?",
            textZh: "业主可以对预算投票吗，还是只有管委会决定？",
            casualVersion: "Do we get a say in the budget or is it all up to the board?",
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Homeowners can vote on major budget changes and special assessments. The board handles day-to-day decisions, but anything over a certain threshold requires a homeowner vote. You'll each get one vote per unit.",
            textZh: "业主可以对重大预算变动和特别评估费投票。管委会处理日常决定，但超过一定金额的项目需要业主投票。每个房号有一票。",
            keyPhrases: [
              { en: "special assessments", zh: "特别评估费/临时摊派" },
              { en: "one vote per unit", zh: "每个房号一票" },
            ],
            alternativeExpressions: [
              { textEn: "For the big stuff, yeah, everyone gets to vote. Day-to-day things the board takes care of, but if it's a big expense or a special assessment, that goes to a vote. One vote per unit.", textZh: "大的事情，对，大家都能投票。日常的事管委会管，但大笔开支或特别评估费就要投票。一个房号一票。", actionHint: "the big stuff 指重大事项", frequency: "common" },
            ],
            culturalNote: "美国的HOA（业主委员会）权力很大，可以制定社区规则并罚款。购房前一定要仔细阅读HOA的CC&Rs（公约和限制条款）。",
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "提出社区议题",
        titleEn: "Raising Community Issues",
        description: "在业主大会上提出问题和建议",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to bring up a concern about the parking situation. Cars keep blocking the fire lane.",
            textZh: "我想提一个关于停车的问题。总有车堵在消防通道。",
            casualVersion: "Can I say something about parking? People keep blocking the fire lane.",
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Thank you for bringing that up. We've actually received several complaints about that. The board is considering implementing a towing policy for vehicles that block the fire lane.",
            textZh: "感谢您提出来。我们实际上收到了好几个关于这个的投诉。管委会正在考虑对堵在消防通道的车辆实施拖车政策。",
            keyPhrases: [
              { en: "towing policy", zh: "拖车政策" },
              { en: "fire lane", zh: "消防通道" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, you're not the only one who's brought that up. We're actually looking into a tow policy — if you block the fire lane, your car gets towed.", textZh: "你不是唯一提这个的。我们正在研究拖车政策——如果堵消防通道，车就会被拖走。", actionHint: "you're not the only one 表示很多人都有同感", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I also wanted to suggest adding more visitor parking spots. My guests always have trouble finding a place to park.",
            textZh: "我还想建议增加更多的访客停车位。我的客人总是找不到地方停车。",
            casualVersion: "Also, can we get more visitor parking? My guests can never find a spot.",
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "That's a good suggestion. We'd need to submit a formal proposal to the board and it would require a vote at the next meeting. Would you be willing to put that in writing so we can add it to next month's agenda?",
            textZh: "这是个好建议。我们需要向管委会提交正式提案，下次会议需要投票。您愿意书面写下来，这样我们可以加到下个月的议程中吗？",
            keyPhrases: [
              { en: "formal proposal", zh: "正式提案" },
              { en: "add it to the agenda", zh: "加到议程中" },
            ],
            alternativeExpressions: [
              { textEn: "Not a bad idea. If you can write it up, we can put it on the agenda for next month and let everyone vote on it.", textZh: "不错的主意。如果你能写下来，我们可以放到下个月的议程上让大家投票。", actionHint: "write it up 意思是写成书面材料", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, I can do that. Who do I submit it to?",
            textZh: "好的，没问题。我提交给谁？",
            casualVersion: "Yeah, I can write it up. Who do I send it to?",
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "You can email it to me directly or drop it in the HOA mailbox in the clubhouse. Just include your name, unit number, and a brief description of what you're proposing. The deadline for next month's agenda is the fifteenth.",
            textZh: "您可以直接发邮件给我，或者投到会所的业委会信箱里。只需写上您的姓名、房号和提案简要描述。下个月议程的截止日期是15号。",
            keyPhrases: [
              { en: "HOA mailbox", zh: "业委会信箱" },
              { en: "deadline", zh: "截止日期" },
            ],
            alternativeExpressions: [
              { textEn: "Just shoot me an email or stick it in the HOA box at the clubhouse. Put your name, unit number, and what you want to propose. Get it in by the fifteenth.", textZh: "给我发邮件或放到会所的HOA信箱里就行。写上名字、房号和提案内容。15号之前交。", actionHint: "shoot me an email 口语中指发邮件", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 4. 物业规则 ====================
  {
    id: "housing-hoa-rules",
    category: "housing",
    titleZh: "物业规则",
    titleEn: "HOA Rules",
    description: "了解小区物业规则和违规处理",
    otherRole: "物业经理",
    otherRoleIcon: "🏘️",
    flows: [
      {
        id: "basic",
        titleZh: "了解基本规则",
        titleEn: "Understanding Basic Rules",
        description: "搬入新小区后了解物业规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just moved in. Where can I find the community rules and regulations?",
            textZh: "你好，我刚搬进来。在哪里可以看到社区的规章制度？",
            casualVersion: "Hey, I'm new here. Where do I get the community rules?",
            commonMistake: {
              wrong: "Where can I see the community rules?",
              correct: "Where can I find the community rules?",
              explanation: "'find'指找到信息或地点，'see'更常用于看实物",
            },
            formalityVariants: {
              casual: "Hey, just moved in. Where can I find the community rules?",
              standard: "Hi, I just moved in. Where can I find the community rules and regulations?",
              formal: "Excuse me, I've recently moved into the community. Could you please direct me to where I might find the official community rules and regulations?",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Welcome to the community! I'll email you a copy of the CC&Rs — that's our covenants, conditions, and restrictions. You should have also received a copy at closing. The key rules are about noise, parking, and exterior modifications.",
            textZh: "欢迎来到社区！我会把CC&Rs发邮件给您——就是我们的公约、条件和限制条款。您在过户时应该也收到了一份。主要规则是关于噪音、停车和外部改造的。",
            keyPhrases: [
              { en: "CC&Rs", zh: "公约、条件和限制条款" },
              { en: "exterior modifications", zh: "外部改造" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, welcome! I'll send you the CC&Rs — basically the rulebook for the community. Big ones are noise hours, where you can park, and any changes to the outside of your home.", textZh: "嘿，欢迎！我把CC&Rs发给你——基本上就是社区的规则手册。主要的是噪音时间、停车位置和房屋外观改动。", actionHint: "rulebook 指规则手册", frequency: "common" },
            ],
            casualVersion: "Welcome! I'll shoot you an email with the CC&Rs – that's our covenants, conditions, and restrictions. You should've gotten a copy at closing too. Main rules are about noise, parking, and exterior changes.",
            culturalNote: "CC&Rs是美国社区管理常见术语",
            formalityVariants: {
              casual: "Welcome! I'll email you the CC&Rs. You should've gotten 'em at closing. Key rules are noise, parking, exterior stuff.",
              standard: "Welcome to the community! I'll email you a copy of the CC&Rs — that's our covenants, conditions, and restrictions. You should have also received a copy at closing. The key rules are about noise, parking, and exterior modifications.",
              formal: "Welcome to the community! I will be happy to email you a comprehensive copy of our Covenants, Conditions, and Restrictions, known as the CC&Rs. You should have also been provided with this document during your closing process. The principal regulations pertain to noise abatement, parking provisions, and exterior property modifications.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I paint my front door a different color?",
            textZh: "我可以把前门换个颜色吗？",
            casualVersion: "Am I allowed to change the color of my front door?",
            commonMistake: {
              wrong: "Can I change my front door color?",
              correct: "Can I paint my front door a different color?",
              explanation: "'paint' 更精确表达改变门颜色的方式",
            },
            formalityVariants: {
              casual: "Can I paint my front door a different color?",
              standard: "Can I paint my front door a different color?",
              formal: "Would it be permissible for me to paint my front door a different color?",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Any exterior changes, including paint colors, need to be approved by the architectural review committee. You'll need to submit a request form with your proposed color. They meet once a month and usually respond within two weeks.",
            textZh: "任何外部改动，包括油漆颜色，都需要建筑审查委员会批准。您需要提交一份申请表，注明您想要的颜色。他们每月开一次会，通常两周内回复。",
            keyPhrases: [
              { en: "architectural review committee", zh: "建筑审查委员会" },
              { en: "submit a request form", zh: "提交申请表" },
            ],
            alternativeExpressions: [
              { textEn: "You'd have to get approval from the architectural committee first. Just fill out a form with the color you want and they'll get back to you — usually takes a couple weeks.", textZh: "你需要先得到建筑委员会的批准。填个表写上你想要的颜色，他们会回复你——通常几周。", actionHint: "get back to you 意思是回复你", frequency: "common" },
            ],
            culturalNote: "美国很多HOA对房屋外观管理很严，甚至连信箱样式、窗帘颜色都有规定。未经批准擅自改动可能被罚款。",
            casualVersion: "Any outside changes, like paint colors, gotta get approved by the architectural committee. You'll need to send in a request form with your color choice. They meet once a month, usually respond in two weeks.",
            formalityVariants: {
              casual: "Outside changes, like paint, need architectural committee approval. Send a request form with your color. They meet monthly, usually respond in two weeks.",
              standard: "Any exterior changes, including paint colors, need to be approved by the architectural review committee. You'll need to submit a request form with your proposed color. They meet once a month and usually respond within two weeks.",
              formal: "Any modifications to the exterior of a property, including changes to paint colors, require prior approval from the architectural review committee. You are required to submit a formal request form detailing your proposed color. The committee convenes monthly and typically provides a response within a two-week timeframe.",
            },
          },
          {
            speaker: "you",
            textEn: "What are the quiet hours in this community?",
            textZh: "社区的安静时间是什么时候？",
            casualVersion: "When are quiet hours around here?",
            commonMistake: {
              wrong: "When is the quiet time in this community?",
              correct: "What are the quiet hours in this community?",
              explanation: "通常用'quiet hours'指安静时段，而非'quiet time'",
            },
            formalityVariants: {
              casual: "What are the quiet hours here?",
              standard: "What are the quiet hours in this community?",
              formal: "Could you please inform me of the designated quiet hours within this community?",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Quiet hours are from ten PM to eight AM on weekdays, and eleven PM to nine AM on weekends. That means no loud music, power tools, or excessive noise during those times. If there's a violation, we issue a warning first, then a fine.",
            textZh: "工作日的安静时间是晚上10点到早上8点，周末是晚上11点到早上9点。期间不能放大声音乐、使用电动工具或产生过大噪音。如果违规，我们先发警告，然后罚款。",
            keyPhrases: [
              { en: "quiet hours", zh: "安静时间" },
              { en: "violation", zh: "违规" },
            ],
            alternativeExpressions: [
              { textEn: "Keep it down after ten on weeknights and eleven on weekends. Morning cutoff is eight on weekdays, nine on weekends. First offense is just a warning, after that it's a fine.", textZh: "工作日晚上10点后、周末11点后要保持安静。工作日早上8点、周末9点之前也是。第一次违规只是警告，之后就罚款。", actionHint: "keep it down 意思是保持安静", frequency: "common" },
            ],
            casualVersion: "Quiet hours are 10 PM to 8 AM weekdays, and 11 PM to 9 AM weekends. That means no loud music, power tools, or too much noise then. First violation's a warning, then a fine.",
            formalityVariants: {
              casual: "Quiet hours are 10 PM to 8 AM weekdays, 11 PM to 9 AM weekends. No loud noise then. Warning first, then fine.",
              standard: "Quiet hours are from ten PM to eight AM on weekdays, and eleven PM to nine AM on weekends. That means no loud music, power tools, or excessive noise during those times. If there's a violation, we issue a warning first, then a fine.",
              formal: "The designated quiet hours are from 10:00 PM to 8:00 AM on weekdays, and from 11:00 PM to 9:00 AM on weekends. During these periods, residents are expected to refrain from loud music, the use of power tools, or any excessive noise. In the event of a violation, a warning will be issued initially, followed by a monetary fine for subsequent infractions.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "处理违规通知",
        titleEn: "Handling Violation Notices",
        description: "收到物业违规通知后的沟通",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I received a violation notice about my trash cans being left outside. I thought I brought them in on time.",
            textZh: "我收到了一个关于垃圾桶没收回去的违规通知。我以为我按时收回去了。",
            casualVersion: "I got a violation letter about my trash cans. I'm pretty sure I brought them in though.",
            commonMistake: {
              wrong: "I got a violation notice about my trash cans not inside.",
              correct: "I received a violation notice about my trash cans being left outside.",
              explanation: "'not inside'说法不自然，'being left outside'更地道",
            },
            formalityVariants: {
              casual: "Got a violation notice about my trash cans being left out. Thought I brought 'em in on time.",
              standard: "I received a violation notice about my trash cans being left outside. I thought I brought them in on time.",
              formal: "I have received a violation notice concerning my trash receptacles being left outside. I was under the impression that I had retrieved them in a timely manner.",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "The rule states that trash cans must be brought inside by eight PM on collection day. Our patrol noted yours were still out at nine-thirty PM. If this is your first violation, it's just a warning with no fine.",
            textZh: "规则规定垃圾桶必须在收垃圾日的晚上8点前收回去。我们的巡逻记录显示您的垃圾桶晚上9点半还在外面。如果这是您的第一次违规，只是警告，不罚款。",
            keyPhrases: [
              { en: "collection day", zh: "收垃圾日" },
              { en: "first violation", zh: "第一次违规" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, the cans need to be back in by eight on trash day. Ours showed yours still out at nine-thirty. But don't worry — first time's just a heads-up, no fine.", textZh: "是的，垃圾日8点前垃圾桶得收回去。记录显示你的9点半还在外面。但别担心——第一次只是提醒，不罚款。", actionHint: "heads-up 意思是提醒/预警", frequency: "common" },
            ],
            casualVersion: "Rule says trash cans gotta be in by 8 PM on collection day. Our patrol saw yours still out at 9:30 PM. If it's your first violation, it's just a warning, no fine.",
            formalityVariants: {
              casual: "Rule is cans in by 8 PM on collection day. Patrol saw yours out at 9:30 PM. First time, just a warning, no fine.",
              standard: "The rule states that trash cans must be brought inside by eight PM on collection day. Our patrol noted yours were still out at nine-thirty PM. If this is your first violation, it's just a warning with no fine.",
              formal: "The established regulation mandates that all trash receptacles be brought indoors by 8:00 PM on the designated collection day. Our patrol observed your receptacles still placed outside at 9:30 PM. If this constitutes your initial infraction, it will be registered as a warning, incurring no monetary penalty.",
            },
          },
          {
            speaker: "you",
            textEn: "I understand. What happens if I get another violation?",
            textZh: "我明白了。如果再次违规会怎样？",
            casualVersion: "Got it. What if it happens again?",
            commonMistake: {
              wrong: "What will happen if I get another violation?",
              correct: "What happens if I get another violation?",
              explanation: "将来可能发生的事，常用一般现在时'What happens if...'",
            },
            formalityVariants: {
              casual: "Got it. What if I get another violation?",
              standard: "I understand. What happens if I get another violation?",
              formal: "I understand. What would be the consequence should I receive another violation notice?",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "The second violation carries a fifty-dollar fine. Third time is a hundred dollars. After three violations in a year, the board can schedule a hearing and potentially place a lien on your property.",
            textZh: "第二次违规罚款50美元。第三次100美元。一年内三次违规后，管委会可以安排听证会，并有可能对您的房产设置留置权。",
            keyPhrases: [
              { en: "lien on your property", zh: "对房产设置留置权" },
              { en: "hearing", zh: "听证会" },
            ],
            alternativeExpressions: [
              { textEn: "Second time it's fifty bucks, third time a hundred. If you hit three in one year, the board can call you in for a hearing and even put a lien on your place.", textZh: "第二次50块，第三次100。一年内三次的话，管委会可以叫你去听证，甚至对你的房子设置留置权。", actionHint: "fifty bucks 口语中指50美元", frequency: "common" },
            ],
            casualVersion: "Second violation's a fifty-dollar fine. Third time, a hundred bucks. After three in a year, the board can call a hearing and might put a lien on your property.",
            culturalNote: "Lien on property是重要的法律概念",
            formalityVariants: {
              casual: "Second one's a $50 fine. Third's $100. Three in a year, the board can hold a hearing, maybe put a lien on your property.",
              standard: "The second violation carries a fifty-dollar fine. Third time is a hundred dollars. After three violations in a year, the board can schedule a hearing and potentially place a lien on your property.",
              formal: "A second violation will incur a fine of fifty dollars. A third violation within the same year will result in a hundred-dollar fine. Subsequent to three violations within a twelve-month period, the board reserves the right to schedule a hearing and, potentially, place a lien on your property.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I appeal the violation if I disagree with it?",
            textZh: "如果我不同意，可以申诉吗？",
            casualVersion: "What if I want to fight it? Can I appeal?",
            commonMistake: {
              wrong: "Can I complain about the violation if I disagree?",
              correct: "Can I appeal the violation if I disagree with it?",
              explanation: "'appeal'指正式申诉，'complain'更口语化，指抱怨",
            },
            formalityVariants: {
              casual: "Can I appeal the violation if I disagree?",
              standard: "Can I appeal the violation if I disagree with it?",
              formal: "Is there a process for me to appeal the violation if I dispute its validity?",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Absolutely. You have thirty days to file a written appeal. Include any evidence you have — photos with timestamps work great. The board will review it at the next meeting and you can attend to present your case.",
            textZh: "当然可以。您有30天时间提交书面申诉。附上您有的证据——带时间戳的照片最好。管委会会在下次会议上审议，您可以到场陈述。",
            keyPhrases: [
              { en: "file a written appeal", zh: "提交书面申诉" },
              { en: "present your case", zh: "陈述您的情况" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yeah, totally. You've got thirty days to send in a written appeal. If you've got any proof — like photos with timestamps — include that. You can also show up to the meeting and explain your side.", textZh: "当然可以。你有30天时间交书面申诉。如果有证据——比如带时间戳的照片——一起交。你也可以去开会当面解释。", actionHint: "explain your side 意思是解释你的立场", frequency: "common" },
            ],
            casualVersion: "Totally. You got 30 days to file a written appeal. Include any proof you have — timestamped photos are great. The board'll check it out at the next meeting, and you can show up to explain.",
            formalityVariants: {
              casual: "Yep. 30 days for a written appeal. Include any evidence—photos with timestamps work great. Board'll review it next meeting, you can be there.",
              standard: "Absolutely. You have thirty days to file a written appeal. Include any evidence you have — photos with timestamps work great. The board will review it at the next meeting and you can attend to present your case.",
              formal: "Absolutely. You are afforded a thirty-day period to submit a formal written appeal. It is advisable to include any supporting evidence you possess, with timestamped photographs being particularly effective. The board will conduct a review of your appeal at their subsequent meeting, and you are welcome to attend to present your case.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 5. 找经纪人 ====================
  {
    id: "housing-real-estate-agent",
    category: "housing",
    titleZh: "找经纪人",
    titleEn: "Finding a Real Estate Agent",
    description: "寻找并面谈房地产经纪人",
    otherRole: "经纪人",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "basic",
        titleZh: "初次面谈经纪人",
        titleEn: "First Meeting with Agent",
        description: "第一次与房地产经纪人见面沟通需求",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I found your profile online. I'm looking to buy my first home in this area.",
            textZh: "你好，我在网上看到你的资料。我想在这个地区买第一套房子。",
            casualVersion: "Hey, I saw your profile online. I'm looking to buy a place around here.",
            commonMistake: {
              wrong: "I want to buy my first home in this area.",
              correct: "I'm looking to buy my first home in this area.",
              explanation: "“I want to” 听起来可能过于直接，而 “I'm looking to” 更委婉自然，表示正在进行中的目标。",
            },
            formalityVariants: {
              casual: "Hey, saw your profile online. Wanna buy my first place around here.",
              standard: "Hi, I found your profile online. I'm looking to buy my first home in this area.",
              formal: "Good morning/afternoon. I came across your professional profile online and am interested in purchasing my inaugural residence within this vicinity.",
            },
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn: "Great to meet you! I've been working in this area for over ten years. Let me ask you a few questions to understand what you're looking for. What's your budget, and do you have a preference for a house or a condo?",
            textZh: "很高兴见到你！我在这个地区工作超过10年了。让我问几个问题了解你的需求。你的预算是多少？喜欢独栋房还是公寓？",
            keyPhrases: [
              { en: "budget", zh: "预算" },
              { en: "condo", zh: "公寓/共管公寓" },
            ],
            alternativeExpressions: [
              { textEn: "Nice to meet you! I know this neighborhood really well. So tell me — what's your price range and are you thinking a house or maybe a condo?", textZh: "很高兴认识你！我对这个社区非常熟悉。跟我说说——你的价位是多少？想买独栋还是公寓？", actionHint: "price range 和 budget 都表示预算范围", frequency: "common" },
            ],
            casualVersion: "Nice meeting you! Been working here over ten years. Lemme ask a few questions to get what you're after. What's your budget? House or condo?",
            formalityVariants: {
              casual: "Hey, good to meet ya! Been in this area over ten years. I'll just ask a couple quick questions to get an idea of what you want. Budget? House or condo preference?",
              standard: "Great to meet you! I've been working in this area for over ten years. Let me ask you a few questions to understand what you're looking for. What's your budget, and do you have a preference for a house or a condo?",
              formal: "It is a pleasure to make your acquaintance. I have cultivated extensive experience within this particular market for over a decade. May I kindly ask a few preliminary questions to ascertain your specific requirements? Could you please indicate your budgetary parameters, and do you possess a particular preference between a single-family dwelling and a condominium unit?",
            },
          },
          {
            speaker: "you",
            textEn: "My budget is around four hundred thousand. I'd prefer a single-family home with at least three bedrooms.",
            textZh: "我的预算大约40万。我想要至少三卧的独栋房。",
            casualVersion: "Around 400K. I want a house with at least three bedrooms.",
            commonMistake: {
              wrong: "My budget is around four hundred thousand. I prefer single-family home with at least three bedrooms.",
              correct: "My budget is around four hundred thousand. I'd prefer a single-family home with at least three bedrooms.",
              explanation: "在“single-family home”前需要加上不定冠词“a”；“I'd prefer”比“I prefer”更委婉有礼。",
            },
            formalityVariants: {
              casual: "Budget's around four hundred k. Definitely want a single-family with at least three beds.",
              standard: "My budget is around four hundred thousand. I'd prefer a single-family home with at least three bedrooms.",
              formal: "My allocated budget is approximately four hundred thousand dollars. My preference would be for a single-family residence comprising a minimum of three bedrooms.",
            },
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn: "That's a good price point for this area. There are several neighborhoods I'd recommend. Are you also particular about school districts? Many buyers with families prioritize that.",
            textZh: "这个价位在这个地区挺好的。我推荐几个社区。你对学区有要求吗？很多有家庭的买家很看重这一点。",
            keyPhrases: [
              { en: "school districts", zh: "学区" },
              { en: "price point", zh: "价位" },
            ],
            alternativeExpressions: [
              { textEn: "Four hundred is solid for around here. I've got a few neighborhoods in mind. How important are schools to you? A lot of folks really care about being in a good district.", textZh: "40万在这附近很不错。我心里有几个社区。学校对你重要吗？很多人很在意在好学区。", actionHint: "solid 这里表示足够好/靠谱", frequency: "common" },
            ],
            culturalNote: "在美国买房，学区（school district）对房价影响很大。即使没有孩子，好学区的房子保值能力也更强。",
            casualVersion: "That's a decent price for here. Got a few neighborhoods in mind. You picky about school districts? A lot of families really care about that.",
            formalityVariants: {
              casual: "Yeah, that's a good price around here. I can show you some great neighborhoods. Do school districts matter to you? Families usually rank that high.",
              standard: "That's a good price point for this area. There are several neighborhoods I'd recommend. Are you also particular about school districts? Many buyers with families prioritize that.",
              formal: "That budgetary allocation represents a favorable price point within this particular region. I can propose several distinguished neighborhoods for your consideration. Furthermore, may I inquire if you possess specific preferences regarding school district affiliations? It is a common priority among purchasers with familial considerations.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, good schools are important to us. How does your commission work?",
            textZh: "是的，好学校对我们很重要。你的佣金是怎么算的？",
            casualVersion: "Yeah, schools matter. How do you get paid?",
            commonMistake: {
              wrong: "How your commission work?",
              correct: "How does your commission work?",
              explanation: "疑问句中缺少助动词“does”，这是中国学习者常犯的语法错误。",
            },
            formalityVariants: {
              casual: "Yeah, good schools are a big deal for us. So, how do you get paid?",
              standard: "Yes, good schools are important to us. How does your commission work?",
              formal: "Indeed, quality educational institutions are of significant importance to our family. Could you please elaborate on the structure of your commission?",
            },
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn: "As a buyer's agent, my commission is typically paid by the seller, so it doesn't cost you anything directly. The standard rate is around two and a half to three percent of the sale price. I'll represent your interests throughout the entire process.",
            textZh: "作为买方经纪人，我的佣金通常由卖方支付，所以不会直接花你的钱。标准费率大约是成交价的2.5%到3%。我会在整个过程中代表你的利益。",
            keyPhrases: [
              { en: "buyer's agent", zh: "买方经纪人" },
              { en: "commission", zh: "佣金" },
            ],
            alternativeExpressions: [
              { textEn: "As your agent, the seller covers my commission — so you don't pay me out of pocket. It's usually around two and a half to three percent. I'm here to look out for you the whole way.", textZh: "作为你的经纪人，我的佣金由卖方出——你不用自己掏钱。通常是2.5%到3%。全程我都替你把关。", actionHint: "out of pocket 意思是自掏腰包", frequency: "common" },
            ],
            casualVersion: "My commission, as your agent, usually gets paid by the seller, so you don't really pay anything directly. It's usually two and a half to three percent of the sale price. I'll look out for you the whole way.",
            formalityVariants: {
              casual: "My pay, as your agent, comes from the seller, so you're not paying me out of pocket. It's usually about 2.5 to 3 percent of the sale price. I've got your back the whole time.",
              standard: "As a buyer's agent, my commission is typically paid by the seller, so it doesn't cost you anything directly. The standard rate is around two and a half to three percent of the sale price. I'll represent your interests throughout the entire process.",
              formal: "In my capacity as your designated buyer's agent, my remuneration is customarily disbursed by the seller, thereby incurring no direct expense on your part. The prevailing industry standard rate typically ranges from two and a half to three percent of the final sale price. I assure you of my unwavering advocacy for your best interests throughout the entirety of this transaction.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "讨论看房策略",
        titleEn: "Discussing House Hunting Strategy",
        description: "与经纪人制定看房和出价策略",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "How competitive is the market right now? Should I expect bidding wars?",
            textZh: "现在市场竞争激烈吗？会有价格战吗？",
            casualVersion: "Is the market crazy right now? Am I gonna be in a bidding war?",
            commonMistake: {
              wrong: "How competitive the market right now?",
              correct: "How competitive is the market right now?",
              explanation: "疑问句中缺少系动词“is”，这是中国学习者在提问时常犯的错误。",
            },
            formalityVariants: {
              casual: "Is the market crazy right now? Will we be in bidding wars?",
              standard: "How competitive is the market right now? Should I expect bidding wars?",
              formal: "What is the current level of competitiveness within the market? Ought I to anticipate the prevalence of bidding wars?",
            },
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn: "It's still a seller's market in this area, but it's cooling down a bit. Homes in your price range are getting two to three offers on average. I'd recommend being ready to move fast when we find the right one.",
            textZh: "这个地区仍然是卖方市场，但有所降温。你这个价位的房子平均有2到3个报价。我建议找到合适的就要快速行动。",
            keyPhrases: [
              { en: "seller's market", zh: "卖方市场" },
              { en: "bidding wars", zh: "竞价战/价格战" },
            ],
            alternativeExpressions: [
              { textEn: "It's competitive but not as crazy as last year. You might see a couple other offers on a good property. The key is being ready to pull the trigger quickly.", textZh: "竞争还是有的，但没去年那么疯狂。好房子可能有其他几个报价。关键是要准备好快速出手。", actionHint: "pull the trigger 意思是做出决定/出手", frequency: "common" },
            ],
            casualVersion: "Still a seller's market around here, but it's easing up. Houses at your price point usually get two, three offers. So, when we find the one, gotta be ready to move quick.",
            formalityVariants: {
              casual: "Around here, it's still a seller's market, but things are slowing down a little. Homes like yours usually see a couple, maybe three offers. So, when we spot the right place, be prepared to act quickly.",
              standard: "It's still a seller's market in this area, but it's cooling down a bit. Homes in your price range are getting two to three offers on average. I'd recommend being ready to move fast when we find the right one.",
              formal: "This region continues to exhibit characteristics of a seller's market, albeit with a discernible moderation in recent activity. Properties within your designated price range are presently attracting an average of two to three offers. Therefore, I strongly advise preparedness for swift action upon identifying a suitable property.",
            },
          },
          {
            speaker: "you",
            textEn: "What's the best strategy for making an offer that stands out?",
            textZh: "出价时有什么策略能让我们的报价更突出？",
            casualVersion: "How do I make my offer stand out from the rest?",
            commonMistake: {
              wrong: "How to make offer stand out?",
              correct: "What's the best strategy for making an offer that stands out?",
              explanation: "“How to...” 过于口语化且不完整，缺乏主语和谓语动词；“offer”前缺少冠词“an”。",
            },
            formalityVariants: {
              casual: "How do we make our offer shine?",
              standard: "What's the best strategy for making an offer that stands out?",
              formal: "What would be the optimal strategy to ensure our offer is exceptionally competitive and distinctive?",
            },
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn: "A strong pre-approval letter, a clean offer with fewer contingencies, and flexibility on the closing date can make a big difference. Sometimes a personal letter to the seller helps too, but not all sellers want that.",
            textZh: "强有力的预批信、附带较少附带条件的干净报价，以及灵活的交割日期都能起很大作用。有时给卖家写封个人信也有帮助，但不是所有卖家都想要。",
            keyPhrases: [
              { en: "contingencies", zh: "附带条件/附加条款" },
              { en: "closing date", zh: "交割日期" },
            ],
            alternativeExpressions: [
              { textEn: "Get your pre-approval solid, keep the offer clean — fewer contingencies the better — and be flexible on when you close. That usually does the trick.", textZh: "拿到靠谱的预批信，报价要干净——附带条件越少越好——交割时间灵活点。这通常就够了。", actionHint: "does the trick 意思是奏效/起作用", frequency: "common" },
            ],
            casualVersion: "Solid pre-approval, a clean offer with minimal strings attached, and being flexible on closing can really help. Sometimes a letter to the seller works, but not everyone's into that.",
            formalityVariants: {
              casual: "Having a really good pre-approval, an offer with almost no conditions, and being chill about the closing date can totally make you stand out. A letter to the seller sometimes helps, but it's not for everyone.",
              standard: "A strong pre-approval letter, a clean offer with fewer contingencies, and flexibility on the closing date can make a big difference. Sometimes a personal letter to the seller helps too, but not all sellers want that.",
              formal: "A robust pre-approval certification, an unencumbered offer with minimal contingencies, and adaptability regarding the closing schedule can significantly enhance your proposal's appeal. Occasionally, a personalized communication addressed to the seller proves advantageous, though this approach is not universally preferred.",
            },
          },
          {
            speaker: "you",
            textEn: "How many houses should we look at before making a decision?",
            textZh: "我们应该看多少房子再做决定？",
            casualVersion: "How many places should we check out before we decide?",
            commonMistake: {
              wrong: "How many houses should we look before making a decision?",
              correct: "How many houses should we look at before making a decision?",
              explanation: "“look at”是一个固定短语，表示“看……”，缺少介词“at”会使句子不完整。",
            },
            formalityVariants: {
              casual: "How many places should we check out before deciding?",
              standard: "How many houses should we look at before making a decision?",
              formal: "What would be an advisable number of properties for us to view prior to reaching a definitive decision?",
            },
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn: "Most buyers look at about eight to twelve homes before finding the one. I'll set up a search based on your criteria and schedule showings as new listings come up. We can start with a batch of five or six this weekend if you're free.",
            textZh: "大多数买家看大约8到12套才找到合适的。我会根据你的条件设置搜索，有新房源就安排看房。如果你这周末有空，我们可以先看5到6套。",
            keyPhrases: [
              { en: "showings", zh: "看房/带看" },
              { en: "new listings", zh: "新房源" },
            ],
            alternativeExpressions: [
              { textEn: "On average, people see around eight to twelve before they pull the trigger. I'll keep an eye out for new listings that match what you want. Wanna knock out a few this weekend?", textZh: "平均来说，大家看8到12套才出手。我会帮你盯着符合你要求的新房源。这周末看几套？", actionHint: "knock out a few 意思是快速完成几个", frequency: "common" },
            ],
            casualVersion: "Most folks check out like eight to twelve places before landing one. I'll set up a search with what you want and line up showings as new stuff pops up. We can hit five or six this weekend if you're good.",
            formalityVariants: {
              casual: "Usually, people see around 8 to 12 places before they find 'the one'. I'll get a search going with your specs and set up tours as new homes hit the market. We could check out five or six this weekend if you're available.",
              standard: "Most buyers look at about eight to twelve homes before finding the one. I'll set up a search based on your criteria and schedule showings as new listings come up. We can start with a batch of five or six this weekend if you're free.",
              formal: "On average, prospective purchasers typically view between eight and twelve properties prior to identifying a suitable acquisition. I shall configure a comprehensive search aligned with your specified criteria and arrange property showings promptly as new listings become available. We could commence with an initial selection of five or six properties this coming weekend, should your schedule permit.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 6. 验房 ====================
  {
    id: "housing-home-inspection",
    category: "housing",
    titleZh: "验房",
    titleEn: "Home Inspection",
    description: "买房前请验房师检查房屋状况",
    otherRole: "验房师",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "basic",
        titleZh: "基本验房流程",
        titleEn: "Basic Home Inspection",
        description: "跟随验房师了解房屋状况",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, thanks for coming out. This is my first time doing a home inspection. What should I expect?",
            textZh: "你好，谢谢你过来。这是我第一次验房。大概是什么流程？",
            casualVersion: "Hey, thanks for coming. Never done this before — what happens?",
            commonMistake: {
              wrong: "What is the process generally?",
              correct: "What should I expect?",
              explanation: "直接翻译 '流程' 不自然, 'expect' 更地道。",
            },
            formalityVariants: {
              casual: "Hey, thanks for coming. My first home inspection, so, what's gonna happen?",
              standard: "Hi, thanks for coming out. This is my first time doing a home inspection. What should I expect?",
              formal: "Good morning/afternoon, I appreciate you coming today. This is my inaugural home inspection, and I would appreciate an overview of the process and what to anticipate.",
            },
          },
          {
            speaker: "them",
            role: "验房师",
            textEn: "No problem! The inspection typically takes two to three hours. I'll check the roof, foundation, plumbing, electrical, HVAC system, and overall structure. Feel free to follow me around and ask questions.",
            textZh: "没问题！验房通常需要2到3个小时。我会检查屋顶、地基、管道、电路、暖通空调系统和整体结构。你可以跟着我，随时提问。",
            keyPhrases: [
              { en: "foundation", zh: "地基" },
              { en: "HVAC system", zh: "暖通空调系统" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. It usually takes a couple hours. I'm gonna go through everything — roof, foundation, pipes, wiring, heating and cooling, the whole nine yards. Tag along if you want.", textZh: "没问题。通常需要几个小时。我会把所有东西都查一遍——屋顶、地基、管道、电线、冷暖系统，全部。想跟着看就跟着。", actionHint: "the whole nine yards 意思是全部/所有东西", frequency: "common" },
            ],
            casualVersion: "No prob! Inspection usually takes like 2-3 hours. I'll hit the roof, foundation, plumbing, electric, HVAC, all the main stuff. Just follow me, ask anything.",
            commonMistake: {
              wrong: "You can follow me and ask questions.",
              correct: "Feel free to follow me around and ask questions.",
              explanation: "'Feel free to' 更礼貌自然，表示欢迎提问。",
            },
            formalityVariants: {
              casual: "No prob. Inspection's usually 2-3 hours. I'll check everything – roof, foundation, all that. Just follow and ask questions.",
              standard: "No problem! The inspection typically takes two to three hours. I'll check the roof, foundation, plumbing, electrical, HVAC system, and overall structure. Feel free to follow me around and ask questions.",
              formal: "Certainly. The inspection process generally requires approximately two to three hours. I will be conducting a comprehensive examination of the roof, foundation, plumbing, electrical, HVAC system, and the overall structural integrity. You are welcome to accompany me and pose any inquiries you may have.",
            },
          },
          {
            speaker: "you",
            textEn: "I noticed some cracks in the basement wall. Is that something to worry about?",
            textZh: "我注意到地下室墙上有些裂缝。这需要担心吗？",
            casualVersion: "There are some cracks in the basement. Should I be worried?",
            commonMistake: {
              wrong: "Does it need worry?",
              correct: "Is that something to worry about?",
              explanation: "英语中表达“需要担心”更自然地用“something to worry about”。",
            },
            formalityVariants: {
              casual: "Saw some cracks in the basement wall. Should I be worried?",
              standard: "I noticed some cracks in the basement wall. Is that something to worry about?",
              formal: "I observed several fissures in the basement wall. Does this present a cause for concern?",
            },
          },
          {
            speaker: "them",
            role: "验房师",
            textEn: "Small hairline cracks are pretty common in older homes and usually not a structural concern. But I'm seeing one here that's about a quarter inch wide — that could indicate foundation settling. I'd recommend getting a structural engineer to take a closer look.",
            textZh: "细小的裂纹在老房子里很常见，通常不影响结构安全。但这里有一条大约四分之一英寸宽的裂缝——这可能说明地基有沉降。我建议找结构工程师仔细看看。",
            keyPhrases: [
              { en: "hairline cracks", zh: "细小裂纹" },
              { en: "foundation settling", zh: "地基沉降" },
            ],
            alternativeExpressions: [
              { textEn: "Little cracks? Totally normal. But this wider one worries me a bit — could mean the foundation is shifting. I'd get a specialist out here to check it.", textZh: "小裂纹？完全正常。但这条宽一点的有点让我担心——可能说明地基在移动。我建议找专家来看看。", actionHint: "worries me a bit 表示有些担忧", frequency: "common" },
            ],
            casualVersion: "Tiny cracks? Super common in old houses, usually no big deal for the structure. But this one's like a quarter inch wide — that could mean the foundation's settling. Best to get a structural engineer to check it out.",
            commonMistake: {
              wrong: "I recommend you find a structural engineer to see it.",
              correct: "I'd recommend getting a structural engineer to take a closer look.",
              explanation: "'get (someone) to (do something)' 是更自然的表达方式，'take a closer look' 比 'see it' 更专业。",
            },
            formalityVariants: {
              casual: "Hairline cracks? Normal for old houses, usually not structural. But this wider one might mean foundation settling. Get a structural engineer to check.",
              standard: "Small hairline cracks are pretty common in older homes and usually not a structural concern. But I'm seeing one here that's about a quarter inch wide — that could indicate foundation settling. I'd recommend getting a structural engineer to take a closer look.",
              formal: "Minor hairline fissures are quite prevalent in vintage properties and typically do not pose a structural risk. However, the crack observed here, approximately one-quarter inch in width, may be indicative of foundation settlement. I strongly advise retaining a structural engineer for a more thorough assessment.",
            },
          },
          {
            speaker: "you",
            textEn: "Will the inspection report include everything you find?",
            textZh: "验房报告会包含你发现的所有问题吗？",
            casualVersion: "So you'll put everything in the report?",
            commonMistake: {
              wrong: "Will the report include all problems you find?",
              correct: "Will the inspection report include everything you find?",
              explanation: "'everything you find' 比 'all problems you find' 更自然，且通常指不限于“问题”的所有发现。",
            },
            formalityVariants: {
              casual: "So, the report's gonna have everything you find?",
              standard: "Will the inspection report include everything you find?",
              formal: "Will the comprehensive inspection report enumerate all discovered items and observations?",
            },
          },
          {
            speaker: "them",
            role: "验房师",
            textEn: "Absolutely. You'll get a detailed report with photos within twenty-four hours. I'll categorize issues as major, minor, or maintenance items. You can use the report to negotiate repairs with the seller or adjust your offer.",
            textZh: "当然。您会在24小时内收到带照片的详细报告。我会把问题分为重大、轻微和维护项目。你可以用报告跟卖家协商维修或调整报价。",
            keyPhrases: [
              { en: "negotiate repairs", zh: "协商维修" },
              { en: "adjust your offer", zh: "调整报价" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, everything goes in the report — with pictures. I'll break it down into big issues, small stuff, and just regular upkeep. And then you can take it to the seller and ask for fixes or a lower price.", textZh: "对，全部写在报告里——带照片。我会分成大问题、小问题和日常维护。然后你可以拿着去跟卖家谈修理或降价。", actionHint: "break it down 意思是详细分类", frequency: "common" },
            ],
            culturalNote: "在美国，验房报告是买方谈判的重要工具。发现重大问题后，买方可以要求卖方修理、降价，甚至可以无条件取消合同（如果有验房附带条款）。",
            casualVersion: "Yep. You'll get a full report with pics in 24 hours. I'll sort stuff into big issues, small ones, or just maintenance. You can use it to haggle repairs with the seller or change your offer.",
            formalityVariants: {
              casual: "Totally. Detailed report with pics in 24 hours. I'll list big problems, small ones, or maintenance. Use it to negotiate with the seller or tweak your offer.",
              standard: "Absolutely. You'll get a detailed report with photos within twenty-four hours. I'll categorize issues as major, minor, or maintenance items. You can use the report to negotiate repairs with the seller or adjust your offer.",
              formal: "Precisely. A comprehensive report, complete with photographic documentation, will be provided to you within twenty-four hours. I will classify all findings into major, minor, or routine maintenance categories. This report will serve as a crucial instrument for negotiating repairs with the seller or for recalibrating your purchase offer.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "发现重大问题",
        titleEn: "Major Issues Found",
        description: "验房发现严重问题时的讨论",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "You mentioned earlier there might be an issue with the roof. How serious is it?",
            textZh: "你之前说屋顶可能有问题。有多严重？",
            casualVersion: "So what's going on with the roof? How bad is it?",
            commonMistake: {
              wrong: "How serious it is?",
              correct: "How serious is it?",
              explanation: "陈述句语序加问号不自然，问句要倒装。",
            },
            formalityVariants: {
              casual: "You said something about the roof earlier. How bad is it?",
              standard: "You mentioned earlier there might be an issue with the roof. How serious is it?",
              formal: "Pertaining to your previous comment regarding a potential concern with the roofing, could you elaborate on the severity of the issue?",
            },
          },
          {
            speaker: "them",
            role: "验房师",
            textEn: "The shingles are showing significant wear, and I found water stains on the attic rafters, which means there's likely an active leak. A full roof replacement could run you fifteen to twenty-five thousand dollars.",
            textZh: "屋顶瓦片磨损严重，我在阁楼椽子上发现了水渍，说明可能有活跃的渗漏。整体更换屋顶可能需要15000到25000美元。",
            keyPhrases: [
              { en: "shingles", zh: "屋顶瓦片" },
              { en: "active leak", zh: "活跃的渗漏" },
            ],
            alternativeExpressions: [
              { textEn: "The roof's in rough shape — the shingles are beat up and there are water marks in the attic. Looks like it's leaking. Replacing the whole thing could be fifteen to twenty-five K.", textZh: "屋顶状况不好——瓦片破损，阁楼里有水印。看起来在漏水。换整个屋顶可能要1.5万到2.5万。", actionHint: "in rough shape 意思是状况不佳", frequency: "common" },
            ],
            casualVersion: "Shingles are really worn out, and I saw water stains on the attic wood, so probably an active leak. A whole new roof could cost ya like fifteen to twenty-five grand.",
            commonMistake: {
              wrong: "A new roof will cost you 15 to 25 thousand dollars.",
              correct: "A full roof replacement could run you fifteen to twenty-five thousand dollars.",
              explanation: "'run you [amount]' 是一个非常地道且常用的表达，表示花费某个金额。",
            },
            formalityVariants: {
              casual: "Shingles are super worn, and there are water stains up in the attic, so there's probably a leak. New roof could be 15 to 25 grand.",
              standard: "The shingles are showing significant wear, and I found water stains on the attic rafters, which means there's likely an active leak. A full roof replacement could run you fifteen to twenty-five thousand dollars.",
              formal: "The roofing shingles exhibit considerable deterioration, and I have identified water staining on the attic rafters, indicative of a probable active leak. A complete roof replacement project could incur costs ranging from fifteen to twenty-five thousand U.S. dollars.",
            },
          },
          {
            speaker: "you",
            textEn: "That's a lot of money. Should I walk away from this deal?",
            textZh: "那是很大一笔钱。我应该放弃这个房子吗？",
            casualVersion: "Wow, that's a lot. Should I just bail on this one?",
            culturalNote: "“walk away from a deal” 意为退出交易，放弃购买。",
            commonMistake: {
              wrong: "Should I give up this house?",
              correct: "Should I walk away from this deal?",
              explanation: "'walk away from a deal' 是地道表达，指放弃交易；'give up this house' 听起来像放弃拥有。",
            },
            formalityVariants: {
              casual: "Whoa, that's a ton of cash. Should I just ditch this house?",
              standard: "That's a lot of money. Should I walk away from this deal?",
              formal: "That represents a significant financial outlay. Would you advise me to withdraw from this transaction?",
            },
          },
          {
            speaker: "them",
            role: "验房师",
            textEn: "I can't tell you whether to buy or not, but I can say this — a roof replacement is a major expense. You could ask the seller to either fix it before closing or give you a credit at closing to cover the cost. Talk to your agent about your options.",
            textZh: "我不能告诉您是否该买，但换屋顶是一笔大开销。您可以要求卖方在交割前修好，或者在交割时给你一笔抵扣来承担费用。跟你的经纪人谈谈你的选择。",
            keyPhrases: [
              { en: "credit at closing", zh: "交割时的费用抵扣" },
              { en: "major expense", zh: "大笔开销" },
            ],
            alternativeExpressions: [
              { textEn: "That's not for me to say, but definitely factor it in. You could push the seller to fix it or give you money off at closing. Your agent will know how to play it.", textZh: "这不该我说，但一定要考虑进去。你可以让卖方修好或在交割时给你减钱。你的经纪人知道怎么处理。", actionHint: "factor it in 意思是把它考虑在内", frequency: "common" },
            ],
            casualVersion: "Look, I can't tell you if you should buy it or not, but a new roof? That's huge. You could ask the seller to fix it before you close, or get a credit when you close to cover it. Chat with your agent about what you can do.",
            culturalNote: "“Credit at closing” 指交割时由卖方支付给买方的一笔款项，用于弥补房屋问题。",
            commonMistake: {
              wrong: "give you a discount at closing",
              correct: "give you a credit at closing to cover the cost",
              explanation: "'credit at closing' 是房产交易中的特定术语，指用于支付维修等费用的款项。",
            },
            formalityVariants: {
              casual: "Can't tell you to buy, but a new roof is big bucks. Ask the seller to fix it pre-closing or get a credit. Talk to your agent.",
              standard: "I can't tell you whether to buy or not, but I can say this — a roof replacement is a major expense. You could ask the seller to either fix it before closing or give you a credit at closing to cover the cost. Talk to your agent about your options.",
              formal: "It is beyond my scope to advise on the purchase decision itself, however, I can confirm that a roof replacement constitutes a significant capital expenditure. You possess the option to request that the seller undertakes the repair prior to closing, or provides a financial credit at the time of closing to offset the expense. I highly recommend consulting with your real estate agent to discuss your available options.",
            },
          },
          {
            speaker: "you",
            textEn: "Were there any other major issues besides the roof?",
            textZh: "除了屋顶，还有其他重大问题吗？",
            casualVersion: "Anything else big I need to know about?",
            commonMistake: {
              wrong: "Are there any other big problems except roof?",
              correct: "Were there any other major issues besides the roof?",
              explanation: "'besides' 比 'except' 更常用于这种语境，'major issues' 更专业。",
            },
            formalityVariants: {
              casual: "Anything else big besides the roof?",
              standard: "Were there any other major issues besides the roof?",
              formal: "Aside from the roofing concerns, were there any other substantial issues identified?",
            },
          },
          {
            speaker: "them",
            role: "验房师",
            textEn: "The electrical panel is outdated — it's a Federal Pacific panel from the eighties, which is considered a fire hazard. Replacing it would cost around two to four thousand. Everything else is minor — just normal wear and tear for a home this age.",
            textZh: "电箱过时了——是80年代的联邦太平洋品牌，被认为是火灾隐患。更换大约需要2000到4000美元。其他都是小问题——这个年代的房子正常的磨损。",
            keyPhrases: [
              { en: "electrical panel", zh: "电箱/配电箱" },
              { en: "fire hazard", zh: "火灾隐患" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, the electrical panel is old and it's a known safety risk. Swapping it out would be two to four grand. Other than that, just minor stuff — nothing unusual for a house this age.", textZh: "对，电箱老了，是已知的安全隐患。换掉大概2000到4000。其他都是小事——这个年代的房子很正常。", actionHint: "swapping it out 意思是更换/替换", frequency: "common" },
            ],
            casualVersion: "Yeah, the electrical panel's ancient — it's a Federal Pacific from the eighties, total fire risk. Swapping it out would be like two to four grand. Rest is just small stuff, normal wear for an old house.",
            culturalNote: "Federal Pacific是美国一个因火灾隐患而臭名昭著的旧式电箱品牌。",
            commonMistake: {
              wrong: "normal old and broken",
              correct: "normal wear and tear",
              explanation: "'wear and tear' 是指正常使用造成的损耗，是固定搭配。",
            },
            formalityVariants: {
              casual: "Electrical panel's super old, Federal Pacific from the 80s – fire hazard. Replacement's like 2-4K. Everything else is minor, just normal for an old house.",
              standard: "The electrical panel is outdated — it's a Federal Pacific panel from the eighties, which is considered a fire hazard. Replacing it would cost around two to four thousand. Everything else is minor — just normal wear and tear for a home this age.",
              formal: "The electrical panel is obsolete; specifically, it is a Federal Pacific unit originating from the 1980s, which is widely recognized as a fire hazard. The estimated cost for its replacement ranges from two to four thousand dollars. All other identified deficiencies are minor, consistent with the anticipated wear and tear for a property of this vintage.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 7. 房屋交割 ====================
  {
    id: "housing-closing-deal",
    category: "housing",
    titleZh: "房屋交割",
    titleEn: "Closing the Deal",
    description: "完成房屋交割手续，签署过户文件",
    otherRole: "过户代理",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "basic",
        titleZh: "基本交割流程",
        titleEn: "Basic Closing Process",
        description: "了解房屋交割的基本流程和文件签署",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm here for my closing appointment. I'm a bit nervous — it's my first time.",
            textZh: "你好，我来办理交割。有点紧张——第一次买房。",
            casualVersion: "Hey, I'm here for the closing. First time doing this, so kinda nervous.",
            formalityVariants: {
              casual: "Hey, here for my closing. Kinda nervous, first time.",
              standard: "Hi, I'm here for my closing appointment. I'm a bit nervous — it's my first time.",
              formal: "Good morning/afternoon, I am here for my scheduled closing appointment. I must admit, I am a little apprehensive, as this is my inaugural experience.",
            },
          },
          {
            speaker: "them",
            role: "过户代理",
            textEn: "Don't worry, I'll walk you through everything. The whole process usually takes about an hour. I'll explain each document before you sign it. Did you bring your photo ID and the cashier's check?",
            textZh: "别担心，我会带您逐一了解。整个过程通常需要一个小时左右。每份文件签之前我都会解释。您带了带照片的身份证件和银行本票吗？",
            keyPhrases: [
              { en: "closing appointment", zh: "交割/过户预约" },
              { en: "cashier's check", zh: "银行本票" },
            ],
            alternativeExpressions: [
              { textEn: "No need to be nervous! I'll go over everything with you step by step. It usually takes about an hour. Just need to see your ID and the cashier's check, and we'll get started.", textZh: "不用紧张！我会一步步带你过。通常大约一小时。看一下你的证件和银行本票，然后我们就开始。", actionHint: "go over 意思是逐一审阅", frequency: "common" },
            ],
            casualVersion: "No worries, I'll walk ya through it. Whole thing's usually 'bout an hour. I'll explain each doc before ya sign. Got your photo ID and the cashier's check?",
            formalityVariants: {
              casual: "No worries, I'll walk you through it. Whole thing's usually 'bout an hour. I'll explain each doc before you sign. Got your photo ID and the cashier's check?",
              standard: "Don't worry, I'll walk you through everything. The whole process usually takes about an hour. I'll explain each document before you sign it. Did you bring your photo ID and the cashier's check?",
              formal: "Please do not be concerned, I will guide you through each step of the process. The entire procedure typically requires approximately one hour. I will elucidate each document prior to your signature. Do you have your government-issued photo identification and the cashier's check with you?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I have everything. What's the first document I need to sign?",
            textZh: "是的，都带了。我需要先签什么文件？",
            casualVersion: "Yep, got it all. What do I sign first?",
            formalityVariants: {
              casual: "Yep, got everything. What's the first doc?",
              standard: "Yes, I have everything. What's the first document I need to sign?",
              formal: "Yes, I have all the requisite items. Could you please inform me which document requires my signature first?",
            },
          },
          {
            speaker: "them",
            role: "过户代理",
            textEn: "First is the closing disclosure, which shows all the final numbers — your loan amount, interest rate, monthly payment, and all closing costs. Take a moment to review the figures and make sure they match what you were quoted.",
            textZh: "首先是成交披露表，上面列出了所有最终数字——贷款金额、利率、月供和所有过户费用。请花点时间核对数字，确保和之前给你的报价一致。",
            keyPhrases: [
              { en: "closing disclosure", zh: "成交披露表" },
              { en: "monthly payment", zh: "月供" },
            ],
            alternativeExpressions: [
              { textEn: "We'll start with the closing disclosure — that's basically the final breakdown of all your costs, your loan details, and your monthly payment. Just double-check everything lines up with what you were told.", textZh: "先看成交披露表——基本上就是所有费用、贷款细节和月供的最终明细。对照一下之前告诉你的数字是否一致。", actionHint: "lines up 意思是吻合/一致", frequency: "common" },
            ],
            casualVersion: "First up's the closing disclosure. Shows all the final numbers — loan amount, interest rate, monthly payment, all closing costs. Just take a sec to check the figures and make sure they match what you were told.",
            commonMistake: {
              wrong: "Make sure they match what you were said.",
              correct: "Make sure they match what you were quoted.",
              explanation: "Quote 指报价或引用，Said 更多指一般性说话。",
            },
            formalityVariants: {
              casual: "First up's the closing disclosure. Shows all the final numbers — loan amount, interest rate, monthly payment, all closing costs. Just take a sec to check the figures and make sure they match what you were told.",
              standard: "First is the closing disclosure, which shows all the final numbers — your loan amount, interest rate, monthly payment, and all closing costs. Take a moment to review the figures and make sure they match what you were quoted.",
              formal: "The initial document is the closing disclosure, which delineates all final financial particulars, including your loan amount, interest rate, monthly payment, and all associated closing costs. Kindly take a moment to meticulously review these figures and ensure their consistency with the prior quotation you received.",
            },
          },
          {
            speaker: "you",
            textEn: "Everything looks correct. What happens after I sign all the documents?",
            textZh: "一切都正确。签完所有文件后会怎样？",
            casualVersion: "Looks good. So what happens after all the signing?",
            formalityVariants: {
              casual: "Looks good. What happens once I've signed everything?",
              standard: "Everything looks correct. What happens after I sign all the documents?",
              formal: "All information appears to be accurate. Could you please inform me of the subsequent steps once all documents have been executed?",
            },
          },
          {
            speaker: "them",
            role: "过户代理",
            textEn: "Once everything is signed, we'll record the deed with the county. That officially transfers ownership to you. You'll receive the keys today, and your copies of all documents will be mailed to you within a week. Congratulations — you're a homeowner!",
            textZh: "全部签完后，我们会在县政府登记房产证。这正式将产权转移给您。今天您就会拿到钥匙，所有文件的副本会在一周内邮寄给您。恭喜——你是房主了！",
            keyPhrases: [
              { en: "record the deed", zh: "登记房产证" },
              { en: "transfers ownership", zh: "转移产权" },
            ],
            alternativeExpressions: [
              { textEn: "After you sign everything, we file the deed with the county and the house is officially yours. You get the keys today and we'll mail you copies of everything. Welcome to homeownership!", textZh: "签完后，我们向县政府提交房产证，房子就正式是你的了。今天拿钥匙，文件副本会邮寄给你。欢迎成为房主！", actionHint: "file the deed 意思是提交/登记房产证", frequency: "common" },
            ],
            culturalNote: "美国的房屋交割通常在产权公司（title company）或律师事务所进行。交割当天需要带银行本票支付首付和过户费，不接受个人支票。",
            casualVersion: "Once everything's signed, we'll record the deed with the county. That officially transfers ownership to you. You'll get the keys today, and your copies of all docs'll be mailed within a week. Congrats — you're a homeowner!",
            commonMistake: {
              wrong: "You are the house owner!",
              correct: "You're a homeowner!",
              explanation: "homeowner 是指房主，house owner 听起来不太自然。",
            },
            formalityVariants: {
              casual: "Once everything's signed, we'll record the deed with the county. That officially transfers ownership to you. You'll get the keys today, and your copies of all docs'll be mailed within a week. Congrats — you're a homeowner!",
              standard: "Once everything is signed, we'll record the deed with the county. That officially transfers ownership to you. You'll receive the keys today, and your copies of all documents will be mailed to you within a week. Congratulations — you're a homeowner!",
              formal: "Upon the execution of all requisite documents, we shall proceed to record the deed with the county, thereby officially transferring ownership to you. You will be provided with the keys today, and copies of all pertinent documents will be dispatched to you by mail within one week. Congratulations on your acquisition of homeownership!",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "处理交割问题",
        titleEn: "Handling Closing Issues",
        description: "交割过程中遇到问题时的沟通",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Wait, the closing costs on this document are higher than what was on my loan estimate. Why is there a difference?",
            textZh: "等一下，这个文件上的过户费比我的贷款估算表上高。为什么有差异？",
            casualVersion: "Hold on, these numbers are higher than what I was told. What happened?",
            commonMistake: {
              wrong: "Why is there different?",
              correct: "Why is there a difference?",
              explanation: "different 是形容词，difference 是名词。此处应使用名词。",
            },
            formalityVariants: {
              casual: "Hold on, closing costs here are higher than my loan estimate. Why's that?",
              standard: "Wait, the closing costs on this document are higher than what was on my loan estimate. Why is there a difference?",
              formal: "Excuse me, I've noticed that the closing costs indicated on this document exceed those presented in my initial loan estimate. Could you please clarify the reason for this discrepancy?",
            },
          },
          {
            speaker: "them",
            role: "过户代理",
            textEn: "Good catch. Let me look into that. It appears there's an additional title search fee that wasn't on your original estimate. I'll contact the lender to clarify. You have the right to question any charges that don't match.",
            textZh: "看得很仔细。让我查一下。看起来有一笔额外的产权查询费不在您的原始估算上。我会联系贷方核实。您有权质疑任何不一致的收费。",
            keyPhrases: [
              { en: "title search fee", zh: "产权查询费" },
              { en: "loan estimate", zh: "贷款估算表" },
            ],
            alternativeExpressions: [
              { textEn: "Nice eye. Let me check — looks like there's an extra title fee that wasn't on your estimate. Let me call the lender and sort it out. You absolutely should question anything that doesn't look right.", textZh: "眼尖。让我看看——好像有个额外的产权费不在你的估算里。我联系贷方搞清楚。任何看起来不对的你都应该问。", actionHint: "nice eye 表示观察力好", frequency: "common" },
            ],
            casualVersion: "Good catch. Lemme check that. Looks like there's an extra title search fee that wasn't on your original estimate. I'll call the lender to clarify. You absolutely have the right to question any charges that don't match.",
            culturalNote: "“Good catch” 表示“发现得好”，是赞赏对方细心的口语化表达。",
            commonMistake: {
              wrong: "Let me check that.",
              correct: "Let me look into that.",
              explanation: "look into 更强调调查和深入了解，check 更偏向快速核对。",
            },
            formalityVariants: {
              casual: "Good catch. Lemme check that. Looks like there's an extra title search fee that wasn't on your original estimate. I'll call the lender to clarify. You absolutely have the right to question any charges that don't match.",
              standard: "Good catch. Let me look into that. It appears there's an additional title search fee that wasn't on your original estimate. I'll contact the lender to clarify. You have the right to question any charges that don't match.",
              formal: "That is an astute observation. Allow me to investigate this matter. It appears an additional title search fee, which was not present on your original estimate, has been included. I will promptly contact the lender for clarification. Please be advised that you retain the right to inquire about any discrepancies in charges.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I delay the closing until this gets sorted out?",
            textZh: "可以推迟交割直到问题解决吗？",
            casualVersion: "Can we push the closing back until this gets fixed?",
            commonMistake: {
              wrong: "Can I delay the closing until this problem is solved?",
              correct: "Can I delay the closing until this gets sorted out?",
              explanation: "get sorted out 在口语中更自然，表示问题得到处理或解决。",
            },
            formalityVariants: {
              casual: "Can I push back closing till this is sorted?",
              standard: "Can I delay the closing until this gets sorted out?",
              formal: "Would it be possible to postpone the closing until this matter has been satisfactorily resolved?",
            },
          },
          {
            speaker: "them",
            role: "过户代理",
            textEn: "You can, but keep in mind that delaying could affect your rate lock and potentially incur additional fees. Let me see if we can resolve this right now — sometimes it's just a simple clerical error that we can correct on the spot.",
            textZh: "可以，但要注意延迟可能影响你的利率锁定，还可能产生额外费用。让我看看能不能现在就解决——有时候只是简单的文书错误，当场就能更正。",
            keyPhrases: [
              { en: "rate lock", zh: "利率锁定" },
              { en: "clerical error", zh: "文书错误" },
            ],
            alternativeExpressions: [
              { textEn: "You could, but that might mess with your rate lock and cost you more in the long run. Let me try to sort it out now — half the time it's just a typo.", textZh: "可以，但可能影响利率锁定，长期来看可能花更多。让我现在试着解决——很多时候只是打字错误。", actionHint: "mess with 意思是影响/打乱", frequency: "common" },
            ],
            casualVersion: "Yeah, you can, but just know delaying could affect your rate lock and might mean more fees. Lemme see if we can fix this right now — sometimes it's just a simple error we can correct immediately.",
            commonMistake: {
              wrong: "potentially have more fees.",
              correct: "potentially incur additional fees.",
              explanation: "incur fees 是一个固定搭配，表示“招致、产生费用”。",
            },
            formalityVariants: {
              casual: "Yeah, you can, but just know delaying could affect your rate lock and might mean more fees. Lemme see if we can fix this right now — sometimes it's just a simple error we can correct immediately.",
              standard: "You can, but keep in mind that delaying could affect your rate lock and potentially incur additional fees. Let me see if we can resolve this right now — sometimes it's just a simple clerical error that we can correct on the spot.",
              formal: "While that is an option, please be aware that a delay could potentially impact your locked interest rate and may result in the imposition of additional charges. Allow me to ascertain if we can resolve this matter immediately, as it is occasionally merely a clerical error rectifiable on-site.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, let's try to resolve it now. I'd rather not delay if we don't have to.",
            textZh: "好的，现在试着解决吧。如果不是必须的话，我不想推迟。",
            casualVersion: "Yeah, let's just try to fix it now. I'd rather not wait.",
            commonMistake: {
              wrong: "I don't want to delay if we don't have to.",
              correct: "I'd rather not delay if we don't have to.",
              explanation: "I'd rather not 比 I don't want to 更委婉，表达选择倾向。",
            },
            formalityVariants: {
              casual: "Alright, let's just sort it now. Rather not delay if we don't gotta.",
              standard: "Okay, let's try to resolve it now. I'd rather not delay if we don't have to.",
              formal: "Understood. Let us endeavor to resolve this issue presently. I would prefer not to postpone the process unless absolutely necessary.",
            },
          },
          {
            speaker: "them",
            role: "过户代理",
            textEn: "I just spoke with the lender and it was indeed a duplicate charge. They've corrected it and the new total matches your original estimate. I'll print a revised closing disclosure for you to review and sign.",
            textZh: "我刚跟贷方确认了，确实是一笔重复收费。他们已经更正了，新的总额和你的原始估算一致。我会打印一份修订的成交披露表给你审阅和签字。",
            keyPhrases: [
              { en: "duplicate charge", zh: "重复收费" },
              { en: "revised closing disclosure", zh: "修订的成交披露表" },
            ],
            alternativeExpressions: [
              { textEn: "Good news — it was just a double charge. They fixed it and the numbers match now. I'll print out a corrected version for you to sign.", textZh: "好消息——就是重复收费。他们改好了，数字现在对了。我打印一份更正版给你签。", actionHint: "double charge 等同于 duplicate charge", frequency: "common" },
            ],
            casualVersion: "Just spoke with the lender, yeah, it was a duplicate charge. They fixed it and the new total matches your original estimate. I'll print a revised closing disclosure for you to check and sign.",
            commonMistake: {
              wrong: "it was a repeated charge.",
              correct: "it was a duplicate charge.",
              explanation: "duplicate charge 是重复收费的专业和常用表达。",
            },
            formalityVariants: {
              casual: "Just spoke with the lender, yeah, it was a duplicate charge. They fixed it and the new total matches your original estimate. I'll print a revised closing disclosure for you to check and sign.",
              standard: "I just spoke with the lender and it was indeed a duplicate charge. They've corrected it and the new total matches your original estimate. I'll print a revised closing disclosure for you to review and sign.",
              formal: "I have just conferred with the lender, and it has been confirmed that it was indeed a duplicate charge. They have rectified the error, and the revised total is now consistent with your original estimate. I will now print an amended closing disclosure for your review and signature.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 8. 房产税 ====================
  {
    id: "housing-property-tax",
    category: "housing",
    titleZh: "房产税",
    titleEn: "Property Tax",
    description: "向税务人员咨询房产税的计算、缴纳和减免",
    otherRole: "税务人员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "基本房产税咨询",
        titleEn: "Basic Property Tax Inquiry",
        description: "了解房产税的基本情况",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just bought a house and I want to understand how property taxes work here.",
            textZh: "你好，我刚买了房子，想了解一下房产税是怎么运作的。",
            casualVersion: "Hey, I'm a new homeowner. How does property tax work?",
            commonMistake: {
              wrong: "Hi, I just bought a house and I want to know how property taxes work here.",
              correct: "Hi, I just bought a house and I'd like to understand how property taxes work here.",
              explanation: "\"I want\" 听起来有些生硬或要求，\"I'd like to\" 更礼貌委婉。",
            },
            formalityVariants: {
              casual: "Hey, just bought a house. Wanna know how property taxes work.",
              standard: "Hi, I just bought a house and I want to understand how property taxes work here.",
              formal: "Good morning/afternoon. I recently purchased a property and I would appreciate a comprehensive explanation of how property taxes are administered in this jurisdiction.",
            },
          },
          {
            speaker: "them",
            role: "税务人员",
            textEn: "Welcome! Property tax is calculated based on the assessed value of your home, which is determined by the county assessor. The tax rate in this area is about one point two percent of the assessed value. You'll receive a tax bill twice a year.",
            textZh: "欢迎！房产税是根据房屋的评估价值计算的，评估价值由县评估员确定。这个地区的税率大约是评估价值的1.2%。您每年会收到两次税单。",
            keyPhrases: [
              { en: "assessed value", zh: "评估价值" },
              { en: "tax rate", zh: "税率" },
            ],
            alternativeExpressions: [
              { textEn: "So basically, the county figures out what your home is worth — that's the assessed value — and you pay a percentage of that as tax. Around here it's about one point two percent. You'll get a bill twice a year.", textZh: "简单说，县里评估你的房子值多少——这就是评估价值——然后你按一定百分比交税。这里大约1.2%。每年两次收到税单。", actionHint: "figures out 意思是确定/算出", frequency: "common" },
            ],
            casualVersion: "Welcome! So, property tax? It's based on your home's assessed value, right? That's what the county assessor figures out. Around 1.2% of that value here. You'll get two bills a year.",
            culturalNote: "美国房产税由县政府评估和征收",
            formalityVariants: {
              casual: "Welcome! Property tax? It's based on your home's assessed value, county assessor figures that out. Around 1.2% here. Two bills a year.",
              standard: "Welcome! Property tax is calculated based on the assessed value of your home, which is determined by the county assessor. The tax rate in this area is about one point two percent of the assessed value. You'll receive a tax bill twice a year.",
              formal: "Welcome. Property taxation is administered based on the assessed valuation of your domicile, as determined by the county assessor's office. The prevailing tax rate in this jurisdiction approximates 1.2% of the assessed value. Tax statements are issued biannually.",
            },
          },
          {
            speaker: "you",
            textEn: "When is the property tax due? I don't want to miss the deadline.",
            textZh: "房产税什么时候到期？我不想错过截止日期。",
            casualVersion: "When do I need to pay it by?",
            commonMistake: {
              wrong: "When is the deadline of property tax?",
              correct: "When is the property tax due?",
              explanation: "\"due\" 指到期、应付；\"deadline of\" 搭配不自然。",
            },
            formalityVariants: {
              casual: "When's property tax due? Don't wanna miss it.",
              standard: "When is the property tax due? I don't want to miss the deadline.",
              formal: "Could you please inform me of the due date for property tax payments? I am keen to ensure timely submission and avoid any penalties.",
            },
          },
          {
            speaker: "them",
            role: "税务人员",
            textEn: "The first installment is due December tenth, and the second is due April tenth. If you have a mortgage, your lender might collect it through an escrow account as part of your monthly payment.",
            textZh: "第一期截止日是12月10日，第二期是4月10日。如果你有房贷，贷方可能通过托管账户作为月供的一部分来代收。",
            keyPhrases: [
              { en: "installment", zh: "分期付款" },
              { en: "escrow account", zh: "托管账户" },
            ],
            alternativeExpressions: [
              { textEn: "First half is due by December tenth, second half by April tenth. If your bank handles escrow, they'll take it out of your mortgage payment automatically, so you won't have to worry about it.", textZh: "上半部分12月10日前交，下半部分4月10日前。如果你的银行管托管，就自动从月供里扣了，你不用操心。", actionHint: "handles escrow 意思是管理托管账户", frequency: "common" },
            ],
            culturalNote: "美国房产税因州和县而异，从不到1%到超过2%不等。房产税是地方政府最主要的收入来源之一，用于资助学校、消防和公共服务。",
            casualVersion: "First payment's December tenth, second's April tenth. If you've got a mortgage, your lender'll probably just collect it through escrow with your monthly payments.",
            formalityVariants: {
              casual: "First payment Dec 10th, second Apr 10th. Got a mortgage? Lender might collect via escrow with your monthly payment.",
              standard: "The first installment is due December tenth, and the second is due April tenth. If you have a mortgage, your lender might collect it through an escrow account as part of your monthly payment.",
              formal: "The initial installment is due on December tenth, and the subsequent installment on April tenth. Should you possess a mortgage, your lending institution may opt to collect these funds via an escrow account, integrated into your regular monthly remittances.",
            },
          },
          {
            speaker: "you",
            textEn: "What happens if I pay late? Are there penalties?",
            textZh: "如果迟交会怎样？有罚款吗？",
            casualVersion: "What if I'm late? Do I get hit with a penalty?",
            commonMistake: {
              wrong: "What will happen if I pay late? Are there any punishment?",
              correct: "What happens if I pay late? Are there penalties?",
              explanation: "\"What happens if...\" 是更自然的提问方式；“punishment” 用于法律或道德谴责，\"penalties\" 用于罚款。",
            },
            formalityVariants: {
              casual: "What if I'm late paying? Get penalties?",
              standard: "What happens if I pay late? Are there penalties?",
              formal: "What are the repercussions for a delayed payment? Will there be any associated penalties or late fees?",
            },
          },
          {
            speaker: "them",
            role: "税务人员",
            textEn: "Yes, a ten percent penalty is added if you miss the deadline. After that, interest accrues at one and a half percent per month. If it goes unpaid for five years, the county can initiate a tax lien sale on the property.",
            textZh: "是的，如果错过截止日期会加收10%的罚款。之后每月会产生1.5%的利息。如果5年不缴纳，县政府可以启动房产税留置权拍卖。",
            keyPhrases: [
              { en: "penalty", zh: "罚款" },
              { en: "tax lien sale", zh: "税务留置权拍卖" },
            ],
            alternativeExpressions: [
              { textEn: "Yep — ten percent penalty right away, plus interest after that. And if you let it go long enough, like five years, the county can actually sell a lien on your house. So don't let it slide.", textZh: "对——马上加10%罚款，之后还有利息。如果拖太久，比如5年，县政府可以拍卖你房子的留置权。所以别拖。", actionHint: "don't let it slide 意思是别拖延", frequency: "common" },
            ],
            casualVersion: "Yeah, miss the deadline, you get a ten percent penalty. Then, it's one and a half percent interest every month. Don't pay for five years, the county can actually sell your property off to cover the taxes.",
            formalityVariants: {
              casual: "Yeah, miss the deadline, 10% penalty. Then 1.5% interest monthly. Don't pay for five years, county can sell your property for taxes.",
              standard: "Yes, a ten percent penalty is added if you miss the deadline. After that, interest accrues at one and a half percent per month. If it goes unpaid for five years, the county can initiate a tax lien sale on the property.",
              formal: "Indeed, a ten percent penalty will be assessed upon failure to meet the payment deadline. Subsequent to that, interest will accrue at a rate of one and a half percent per month. Should the property remain delinquent for a period of five years, the county reserves the right to initiate a tax lien sale.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "申请税收减免",
        titleEn: "Applying for Tax Exemptions",
        description: "了解和申请房产税减免",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I heard there are exemptions that can lower my property tax. What qualifies?",
            textZh: "我听说有减免措施可以降低房产税。什么情况符合条件？",
            casualVersion: "Are there any breaks I can get on my property tax?",
            commonMistake: {
              wrong: "What are the qualifications?",
              correct: "What qualifies?",
              explanation: "\"What qualifies?\" 更简洁自然，\"qualifications\" 多指个人资历，而不是条件。",
            },
            formalityVariants: {
              casual: "Heard there are exemptions to lower my property tax. What qualifies?",
              standard: "I heard there are exemptions that can lower my property tax. What qualifies?",
              formal: "I understand that certain exemptions may be available to reduce property tax obligations. Could you please outline the eligibility criteria for such exemptions?",
            },
          },
          {
            speaker: "them",
            role: "税务人员",
            textEn: "The most common is the homestead exemption, which reduces your taxable value if this is your primary residence. There are also exemptions for veterans, seniors over sixty-five, and people with disabilities.",
            textZh: "最常见的是自住房减免，如果这是你的主要住所，可以减少应税价值。还有退伍军人、65岁以上老人和残疾人的减免。",
            keyPhrases: [
              { en: "homestead exemption", zh: "自住房减免" },
              { en: "primary residence", zh: "主要住所" },
            ],
            alternativeExpressions: [
              { textEn: "If you live in the house, you can get a homestead exemption — that'll knock some off your tax bill. There are extra breaks for vets, seniors, and people with disabilities too.", textZh: "如果你住在这房子里，可以申请自住减免——能减掉一些税。退伍军人、老年人和残疾人还有额外的减免。", actionHint: "knock some off 意思是减去一部分", frequency: "common" },
            ],
            casualVersion: "Most common is the homestead exemption – that cuts your taxable value if it's your main home. Also got stuff for veterans, seniors over sixty-five, and folks with disabilities.",
            culturalNote: "“宅地豁免”是美国特色，用于自住房屋减免税额。",
            formalityVariants: {
              casual: "Most common's homestead exemption, cuts taxable value if it's your main home. Also for veterans, 65+ seniors, and folks with disabilities.",
              standard: "The most common is the homestead exemption, which reduces your taxable value if this is your primary residence. There are also exemptions for veterans, seniors over sixty-five, and people with disabilities.",
              formal: "The predominant exemption is the homestead exemption, which serves to diminish your property's taxable valuation provided it serves as your principal residence. Additionally, specific exemptions are available for military veterans, individuals over the age of sixty-five, and persons with disabilities.",
            },
          },
          {
            speaker: "you",
            textEn: "How do I apply for the homestead exemption? Is there a deadline?",
            textZh: "怎么申请自住房减免？有截止日期吗？",
            casualVersion: "How do I sign up for the homestead thing? Is there a cutoff date?",
            commonMistake: {
              wrong: "How to apply for the homestead exemption? Is there a deadline?",
              correct: "How do I apply for the homestead exemption? Is there a deadline?",
              explanation: "疑问句中通常需要助动词 \"do/does/did\" 或情态动词 \"can/could\" 等，\"How to...\" 更像指示而非提问。",
            },
            formalityVariants: {
              casual: "How do I apply for the homestead exemption? Any deadline?",
              standard: "How do I apply for the homestead exemption? Is there a deadline?",
              formal: "What is the procedure for applying for the homestead exemption? Furthermore, could you advise if there is a specific deadline for its submission?",
            },
          },
          {
            speaker: "them",
            role: "税务人员",
            textEn: "You can apply online or fill out a form at our office. The deadline is usually February first of each year. You'll need your deed, a photo ID, and proof that this is your primary residence — like a utility bill in your name.",
            textZh: "您可以在线申请或到我们办公室填表。截止日期通常是每年的2月1日。您需要房产证、带照片证件，以及证明这是您主要住所的材料——比如以您名字开的水电账单。",
            keyPhrases: [
              { en: "deed", zh: "房产证" },
              { en: "proof of primary residence", zh: "主要住所证明" },
            ],
            alternativeExpressions: [
              { textEn: "You can do it online or come in and fill out the paperwork. Just make sure you get it in by February first. Bring your deed, ID, and something showing you live there — a utility bill works.", textZh: "可以在网上办也可以来现场填表。2月1日之前交就行。带上房产证、证件和能证明你住在那里的东西——水电账单就行。", actionHint: "fill out the paperwork 意思是填写申请材料", frequency: "common" },
            ],
            casualVersion: "You can apply online or just fill out a form here. Deadline's usually Feb first every year. You'll need your deed, a photo ID, and something proving this is your main place — like a utility bill in your name.",
            commonMistake: {
              wrong: "You'll need your deed, a photo ID, and proof of primary residence — like utility bill in your name.",
              correct: "You'll need your deed, a photo ID, and proof that this is your primary residence — like a utility bill in your name.",
              explanation: "\"proof that...\" 更具体，\"utility bill in your name\" 强调账单上有你的名字，更完整。",
            },
            formalityVariants: {
              casual: "Apply online or fill a form here. Deadline's usually Feb 1st. Need your deed, photo ID, and proof it's your main home, like a utility bill.",
              standard: "You can apply online or fill out a form at our office. The deadline is usually February first of each year. You'll need your deed, a photo ID, and proof that this is your primary residence — like a utility bill in your name.",
              formal: "Applications may be submitted either electronically or in person at our administrative office. The typical submission deadline is February first annually. Required documentation includes your property deed, a government-issued photo identification, and corroborating evidence of your primary residency, such as a utility bill bearing your name.",
            },
          },
          {
            speaker: "you",
            textEn: "What if I think my property's assessed value is too high? Can I contest it?",
            textZh: "如果我觉得房子评估价值太高怎么办？可以异议吗？",
            casualVersion: "What if I think my home's assessed too high? Can I fight it?",
            commonMistake: {
              wrong: "What if I think my property's assessed value is too high? Can I argue it?",
              correct: "What if I think my property's assessed value is too high? Can I contest it?",
              explanation: "\"contest\" 在法律或正式语境中指质疑、提出异议，比 \"argue\" 更专业。",
            },
            formalityVariants: {
              casual: "What if I think my property's value is too high? Can I fight it?",
              standard: "What if I think my property's assessed value is too high? Can I contest it?",
              formal: "In the event that I believe my property's assessed valuation is excessive, what recourse is available? Is it possible to formally dispute this assessment?",
            },
          },
          {
            speaker: "them",
            role: "税务人员",
            textEn: "Yes, you can file an appeal with the assessment appeals board. You'll need comparable sales data showing similar homes sold for less. The appeal window is usually sixty days after you receive your assessment notice.",
            textZh: "可以，您可以向评估上诉委员会提起上诉。您需要类似房屋以更低价格成交的可比销售数据。上诉窗口通常是在收到评估通知后的60天内。",
            keyPhrases: [
              { en: "assessment appeals board", zh: "评估上诉委员会" },
              { en: "comparable sales data", zh: "可比销售数据" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. File an appeal and bring data on what similar houses in your area actually sold for. You've got about sixty days from when you get your notice to do it.", textZh: "当然可以。提起上诉，带上你所在区域类似房屋的实际成交价数据。收到通知后大约60天内提交。", actionHint: "file an appeal 意思是提起上诉", frequency: "common" },
            ],
            casualVersion: "Yep, you can file an appeal with the assessment appeals board. You'll need to show data of similar homes that sold for less. Usually, you get sixty days to appeal after your assessment notice.",
            culturalNote: "评估上诉委员会是专门处理房产估价异议的机构。",
            formalityVariants: {
              casual: "Yeah, you can appeal to the assessment board. Need comparable sales data for homes sold for less. You get 60 days after your notice.",
              standard: "Yes, you can file an appeal with the assessment appeals board. You'll need comparable sales data showing similar homes sold for less. The appeal window is usually sixty days after you receive your assessment notice.",
              formal: "Yes, an appeal may be formally lodged with the assessment appeals board. It will be incumbent upon you to provide comparable sales data demonstrating that similar properties have transacted at lower values. The typical timeframe for filing such an appeal is sixty days following the receipt of your assessment notice.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 9. 租房申请 ====================
  {
    id: "housing-rental-application",
    category: "housing",
    titleZh: "租房申请",
    titleEn: "Rental Application",
    description: "提交租房申请，了解所需材料和流程",
    otherRole: "物业经理",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "basic",
        titleZh: "提交租房申请",
        titleEn: "Submitting a Rental Application",
        description: "第一次提交租房申请的标准流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm interested in the two-bedroom apartment you have listed. Is it still available?",
            textZh: "你好，我对你们挂出来的两居室公寓感兴趣。还有空吗？",
            casualVersion: "Hey, is the two-bedroom still up for grabs?",
            commonMistake: {
              wrong: "I interested in two-bedroom apartment.",
              correct: "I'm interested in the two-bedroom apartment.",
              explanation: "缺少be动词和冠词，听起来不自然。",
            },
            formalityVariants: {
              casual: "Hey, about that 2-bedroom you listed, is it still free?",
              standard: "Hi, I'm interested in the two-bedroom apartment you have listed. Is it still available?",
              formal: "Good morning/afternoon, I am calling regarding the two-bedroom apartment you have advertised. May I inquire if it is still open for rent?",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Yes, it's still available! The rent is sixteen hundred a month, and we require first month's rent plus a security deposit equal to one month's rent. Would you like to fill out an application?",
            textZh: "是的，还有！月租1600美元，我们需要第一个月的房租加一个月房租的押金。您想填申请表吗？",
            keyPhrases: [
              { en: "security deposit", zh: "押金" },
              { en: "first month's rent", zh: "第一个月房租" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, still open! It's sixteen hundred a month. We need first and last month plus a security deposit to move in. Wanna go ahead and apply?", textZh: "对，还有！月租1600。搬进来需要首月、末月房租加押金。要申请吗？", actionHint: "first and last month 指首月和末月房租", frequency: "common" },
            ],
            casualVersion: "Yep, still open! Rent's sixteen hundred a month, and we need first month's rent plus a security deposit—that's another month's rent. Wanna apply?",
            commonMistake: {
              wrong: "Rent is 1600 dollar one month.",
              correct: "The rent is sixteen hundred a month.",
              explanation: "常见于货币表达，\"a month\" 比 \"one month\" 更自然。",
            },
            formalityVariants: {
              casual: "Yeah, it's available! Rent's $1600/month. We need first month's rent plus a deposit (another month's rent). Want to apply?",
              standard: "Yes, it's still available! The rent is sixteen hundred a month, and we require first month's rent plus a security deposit equal to one month's rent. Would you like to fill out an application?",
              formal: "Yes, the unit remains available. The monthly rental rate is one thousand six hundred dollars. We kindly request the first month's rent along with a security deposit equivalent to one month's rent. Would you be interested in completing an application?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. What documents do I need for the application?",
            textZh: "好的。申请需要什么材料？",
            casualVersion: "Yeah, sure. What do I need to bring?",
            commonMistake: {
              wrong: "What materials I need for application?",
              correct: "What documents do I need for the application?",
              explanation: "缺少助动词 \"do\" 且 \"materials\" 不如 \"documents\" 常用。",
            },
            formalityVariants: {
              casual: "Yep. What stuff do I need to apply?",
              standard: "Yes, please. What documents do I need for the application?",
              formal: "Yes, I would. Could you please specify the required documentation for the application process?",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "You'll need a valid photo ID, proof of income — like recent pay stubs or a bank statement — and we'll run a credit check and background check. There's a thirty-five-dollar application fee that's non-refundable.",
            textZh: "您需要有效的带照片证件、收入证明——比如最近的工资单或银行流水——我们会查信用记录和背景。申请费35美元，不可退还。",
            keyPhrases: [
              { en: "pay stubs", zh: "工资单" },
              { en: "credit check", zh: "信用检查" },
            ],
            alternativeExpressions: [
              { textEn: "Bring your ID, something showing your income — pay stubs or bank statements work — and we'll pull your credit and do a background check. There's a thirty-five-dollar fee, just so you know.", textZh: "带上证件和收入证明——工资单或银行流水都行——我们会查信用和做背景调查。有35美元的费用，提前说一下。", actionHint: "pull your credit 意思是查你的信用记录", frequency: "common" },
            ],
            culturalNote: "在美国租房，房东通常要求月收入是房租的3倍以上。信用分数低于600可能需要多交押金或找担保人。",
            casualVersion: "Need a valid photo ID, proof of income — like recent pay stubs or a bank statement. We'll also do a credit and background check. Application fee's thirty-five bucks, non-refundable.",
            commonMistake: {
              wrong: "Need valid ID and income prove.",
              correct: "You'll need a valid photo ID, proof of income.",
              explanation: "\"prove\" 是动词，\"proof\" 是名词；\"ID\" 前常加 \"photo\"。",
            },
            formalityVariants: {
              casual: "Photo ID, income proof (pay stubs/bank statement). We'll check credit/background. $35 application fee, no refunds.",
              standard: "You'll need a valid photo ID, proof of income — like recent pay stubs or a bank statement — and we'll run a credit check and background check. There's a thirty-five-dollar application fee that's non-refundable.",
              formal: "We require a valid government-issued photo identification, verifiable proof of income such as recent pay stubs or bank statements, and a standard credit and background check will be conducted. Please note there is a non-refundable application fee of thirty-five dollars.",
            },
          },
          {
            speaker: "you",
            textEn: "I'm new to the country and don't have a credit history yet. Will that be a problem?",
            textZh: "我刚来美国，还没有信用记录。这会是个问题吗？",
            casualVersion: "I don't have credit history here yet. Is that gonna be an issue?",
            culturalNote: "信用记录 (Credit History) 对在美国生活至关重要。",
            commonMistake: {
              wrong: "I have no credit history.",
              correct: "I don't have a credit history yet.",
              explanation: "\"no\" 太直接，\"don't have...yet\" 更自然委婉。",
            },
            formalityVariants: {
              casual: "Just got here, no credit yet. Is that an issue?",
              standard: "I'm new to the country and don't have a credit history yet. Will that be a problem?",
              formal: "As I am a recent arrival to the country, I have not yet established a credit history. Might this present a challenge to my application?",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "It can be, but we work with that situation a lot. You could provide a co-signer who has established credit, or we might accept a larger security deposit — usually an extra month's rent. Some tenants also bring a letter from their employer.",
            textZh: "可能是个问题，但我们经常处理这种情况。你可以提供一个有信用记录的担保人，或者我们可能接受更多的押金——通常多一个月的房租。有些租客还会带雇主的证明信。",
            keyPhrases: [
              { en: "co-signer", zh: "担保人/联合签署人" },
              { en: "larger security deposit", zh: "更多的押金" },
            ],
            alternativeExpressions: [
              { textEn: "It happens. You can get a co-signer — someone with good credit who guarantees the lease. Or we can bump up the deposit. A letter from your job helps too.", textZh: "这种情况很常见。你可以找个担保人——信用好的人来担保租约。或者我们加押金。工作单位的证明信也有用。", actionHint: "bump up 意思是增加", frequency: "common" },
            ],
            casualVersion: "Yeah, can be, but we deal with it all the time. You could get a co-signer with good credit, or we might take a bigger security deposit—usually an extra month's rent. Some folks also just bring an employer letter.",
            commonMistake: {
              wrong: "We often meet this situation.",
              correct: "We work with that situation a lot.",
              explanation: "\"meet a situation\" 不自然，\"work with/deal with a situation\" 更地道。",
            },
            formalityVariants: {
              casual: "Could be, but it's common. You can get a co-signer, or pay a bigger deposit (like another month's rent). Some people also use an employer letter.",
              standard: "It can be, but we work with that situation a lot. You could provide a co-signer who has established credit, or we might accept a larger security deposit — usually an extra month's rent. Some tenants also bring a letter from their employer.",
              formal: "While it can occasionally present a challenge, we frequently accommodate such circumstances. Options include providing a co-signer with established credit, or we may consider accepting an increased security deposit, typically equivalent to an additional month's rent. Furthermore, a letter of employment from your current employer can also be a helpful document.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "协商租约条款",
        titleEn: "Negotiating Lease Terms",
        description: "讨论租约细节和条款",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Before I sign the lease, I have a few questions. Is the lease for twelve months, and what happens if I need to move out early?",
            textZh: "签合同之前我有几个问题。租约是12个月的吗？如果需要提前搬走怎么办？",
            casualVersion: "Quick question — is it a twelve-month lease? What if I gotta leave early?",
            commonMistake: {
              wrong: "If I move out early what happens?",
              correct: "What happens if I need to move out early?",
              explanation: "语序错误，疑问词在句首，后面接陈述语序。",
            },
            formalityVariants: {
              casual: "Quick questions before signing: Is it a 12-month lease? What if I leave early?",
              standard: "Before I sign the lease, I have a few questions. Is the lease for twelve months, and what happens if I need to move out early?",
              formal: "Prior to finalizing the lease agreement, I have a few inquiries. Is the lease term indeed for twelve months, and what are the stipulations should I need to terminate the agreement prematurely?",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Yes, it's a standard twelve-month lease. If you need to break the lease early, there's a penalty of two months' rent. You'd also need to give us sixty days' written notice. Some tenants find a subletter to take over the lease instead.",
            textZh: "是的，是标准的12个月租约。如果需要提前解约，罚款两个月的房租。还需要提前60天给我们书面通知。有些租客会找人转租来接手租约。",
            keyPhrases: [
              { en: "break the lease", zh: "提前解约" },
              { en: "subletter", zh: "转租人" },
            ],
            alternativeExpressions: [
              { textEn: "It's a one-year lease. Breaking it early means a two-month penalty plus sixty days' notice. Or you could find someone to sublet — that way you're off the hook.", textZh: "一年租约。提前解约的话要付两个月罚金加60天提前通知。或者找人转租——那你就不用负责了。", actionHint: "off the hook 意思是摆脱责任", frequency: "common" },
            ],
            casualVersion: "Yep, standard 12-month lease. If you gotta break it early, it's a two-month rent penalty. Plus, you'd need to give us sixty days' written notice. Some folks just find a subletter to take it over.",
            culturalNote: "提前解约可能需要支付高额罚金，在美国租房很常见，需注意。",
            commonMistake: {
              wrong: "If you break lease early, need pay two months rent.",
              correct: "If you need to break the lease early, there's a penalty of two months' rent.",
              explanation: "缺少主语和适当的动词，\"need pay\" 语法错误。",
            },
            formalityVariants: {
              casual: "Yeah, it's 12 months. Break it early? Two months' rent penalty, plus 60 days' written notice. Or find a subletter.",
              standard: "Yes, it's a standard twelve-month lease. If you need to break the lease early, there's a penalty of two months' rent. You'd also need to give us sixty days' written notice. Some tenants find a subletter to take over the lease instead.",
              formal: "Indeed, it is a standard twelve-month lease agreement. Should it become necessary to terminate the lease prior to its expiration, a penalty equivalent to two months' rent will be incurred. Additionally, a sixty-day written notice is required. Alternatively, some tenants opt to arrange for a qualified subletter to assume the remainder of the lease term.",
            },
          },
          {
            speaker: "you",
            textEn: "Are pets allowed? I have a small dog.",
            textZh: "可以养宠物吗？我有一只小狗。",
            casualVersion: "Can I bring my dog? He's small.",
            culturalNote: "美国公寓对宠物有严格规定，常有体重、品种、数量限制及额外费用。",
            commonMistake: {
              wrong: "Can I raise pet?",
              correct: "Are pets allowed?",
              explanation: "\"raise pet\" 不地道，\"allow pets\" 或 \"have pets\" 更自然。",
            },
            formalityVariants: {
              casual: "Can I have my dog here? She's small.",
              standard: "Are pets allowed? I have a small dog.",
              formal: "May I inquire about your pet policy? I have a small canine companion.",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "We do allow pets with some restrictions. Dogs under thirty-five pounds are welcome. There's a three-hundred-dollar pet deposit and an additional twenty-five dollars per month in pet rent. Certain breeds are restricted — I can give you the full list.",
            textZh: "我们允许养宠物，但有一些限制。35磅以下的狗可以。需要300美元宠物押金和每月25美元的宠物租金。某些品种受限——我可以给你完整的清单。",
            keyPhrases: [
              { en: "pet deposit", zh: "宠物押金" },
              { en: "pet rent", zh: "宠物租金" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, small dogs are fine — under thirty-five pounds. It's a three-hundred-dollar deposit and twenty-five bucks a month extra for the pet. Some breeds aren't allowed though, so I'll send you the list.", textZh: "可以，小狗没问题——35磅以下。押金300，每月额外25。但有些品种不行，我把清单发给你。", actionHint: "twenty-five bucks 口语指25美元", frequency: "common" },
            ],
            casualVersion: "Yeah, pets are cool, with some limits. Dogs under 35 pounds are fine. It's a $300 pet deposit, plus an extra $25 a month for pet rent. Some breeds are restricted—can give you the list.",
            commonMistake: {
              wrong: "Need 300 dollar pet deposit and 25 dollar pet rent every month.",
              correct: "There's a three-hundred-dollar pet deposit and an additional twenty-five dollars per month in pet rent.",
              explanation: "\"need\" 语气生硬，\"there's\" 更自然。注意 \"additional\" 和 \"per month\"。",
            },
            formalityVariants: {
              casual: "Pets are allowed, but with rules. Dogs under 35 lbs. are okay. $300 pet deposit, plus $25/month pet rent. Some breeds are restricted—I'll show you the list.",
              standard: "We do allow pets with some restrictions. Dogs under thirty-five pounds are welcome. There's a three-hundred-dollar pet deposit and an additional twenty-five dollars per month in pet rent. Certain breeds are restricted — I can give you the full list.",
              formal: "Our pet policy permits pets, subject to certain restrictions. Canines weighing under thirty-five pounds are acceptable. There is a required three-hundred-dollar pet deposit and an additional monthly pet rent of twenty-five dollars. Please be advised that certain breeds are restricted; I can provide you with the comprehensive list upon request.",
            },
          },
          {
            speaker: "you",
            textEn: "One more thing — are utilities included in the rent, or do I pay those separately?",
            textZh: "还有一个问题——水电费包含在房租里吗，还是另外付？",
            casualVersion: "Are utilities included or do I pay those on my own?",
            commonMistake: {
              wrong: "Utilities included in rent or pay separately?",
              correct: "Are utilities included in the rent, or do I pay those separately?",
              explanation: "缺少动词 \"are\" 和 \"do I\"，句子不完整。",
            },
            formalityVariants: {
              casual: "Quick question: Are utilities included or separate?",
              standard: "One more thing — are utilities included in the rent, or do I pay those separately?",
              formal: "I have one final question — could you clarify whether utilities are encompassed within the monthly rent, or if they are billed separately?",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Water and trash are included. You're responsible for electricity, gas, and internet. On average, tenants here pay about a hundred to a hundred fifty a month for those utilities. I can give you the local utility company's contact info to set up your accounts.",
            textZh: "水费和垃圾费包含在内。电费、燃气和网络需要自己付。平均来说这里的租客每月水电费大约100到150美元。我可以给你当地公用事业公司的联系方式来开户。",
            keyPhrases: [
              { en: "utilities", zh: "水电等公用事业费" },
              { en: "set up your accounts", zh: "开户" },
            ],
            alternativeExpressions: [
              { textEn: "Water and trash are on us. You'll handle electric, gas, and internet yourself. Most people here pay about a hundred to one-fifty a month. I can hook you up with the contact info for the utility companies.", textZh: "水和垃圾费我们出。电、气和网你自己付。大部分人每月大概100到150。我可以给你公用事业公司的联系方式。", actionHint: "on us 意思是我们承担, hook you up 意思是提供给你", frequency: "common" },
            ],
            casualVersion: "Water and trash are covered. You're on the hook for electricity, gas, and internet. Most tenants here pay around a hundred to one-fifty a month for those. I can get you the local utility contacts to set up your accounts.",
            commonMistake: {
              wrong: "You responsible for electricity, gas, internet.",
              correct: "You're responsible for electricity, gas, and internet.",
              explanation: "缺少be动词，听起来不自然。",
            },
            formalityVariants: {
              casual: "Water/trash are included. You pay for electric, gas, internet. Usually $100-$150/month for those. I can give you the utility contacts.",
              standard: "Water and trash are included. You're responsible for electricity, gas, and internet. On average, tenants here pay about a hundred to a hundred fifty a month for those utilities. I can give you the local utility company's contact info to set up your accounts.",
              formal: "Water and refuse services are included. However, you will be responsible for electricity, gas, and internet services. On average, residents in this building typically incur expenses of approximately one hundred to one hundred fifty dollars monthly for these utilities. I would be pleased to provide you with the contact information for the local utility providers to facilitate the setup of your accounts.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 10. 收到驱逐通知 ====================
  {
    id: "housing-eviction-notice",
    category: "housing",
    titleZh: "收到驱逐通知",
    titleEn: "Eviction Notice",
    description: "收到驱逐通知后寻求法律援助",
    otherRole: "法律援助",
    otherRoleIcon: "⚖️",
    flows: [
      {
        id: "basic",
        titleZh: "咨询法律援助",
        titleEn: "Seeking Legal Help",
        description: "收到驱逐通知后第一次咨询法律援助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I received an eviction notice yesterday and I'm really scared. I don't know what to do.",
            textZh: "你好，我昨天收到了驱逐通知，我真的很害怕。不知道该怎么办。",
            casualVersion: "Hi, I just got an eviction notice and I'm freaking out. Can you help?",
          },
          {
            speaker: "them",
            role: "法律援助",
            textEn: "I understand how stressful that must be. Let's go through this together. First, can you tell me what reason is stated on the notice? Is it for non-payment of rent, lease violation, or something else?",
            textZh: "我理解这有多大的压力。我们一起来看看。首先，通知上写的是什么原因？是因为欠租、违反租约，还是其他原因？",
            keyPhrases: [
              { en: "eviction notice", zh: "驱逐通知" },
              { en: "non-payment of rent", zh: "欠缴租金" },
            ],
            alternativeExpressions: [
              { textEn: "Take a deep breath — we'll figure this out. What does the notice say is the reason? Unpaid rent, breaking a lease rule, or something different?", textZh: "深呼吸——我们会解决的。通知上说是什么原因？欠租、违反租约条款，还是别的？", actionHint: "we'll figure this out 表示我们会想办法解决", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It says non-payment of rent. I fell behind two months because I lost my job. I just started a new one last week.",
            textZh: "上面写的是欠租。我因为失业落了两个月的房租。上周刚找到新工作。",
            casualVersion: "It's for unpaid rent. I was out of work and got behind two months. Just started a new job though.",
          },
          {
            speaker: "them",
            role: "法律援助",
            textEn: "Okay, that's actually a situation we can work with. How many days does the notice give you? Most states require a three-day or five-day notice to pay or quit before filing for eviction. If you can pay within that period, the eviction stops.",
            textZh: "好的，这种情况其实我们可以处理。通知给了你几天时间？大多数州在提起驱逐诉讼前要求给出3天或5天的付款或搬走通知。如果你在期限内付清，驱逐就会终止。",
            keyPhrases: [
              { en: "pay or quit notice", zh: "付款或搬走通知" },
              { en: "filing for eviction", zh: "提起驱逐诉讼" },
            ],
            alternativeExpressions: [
              { textEn: "That's workable. How much time did they give you on the notice? Usually it's three to five days to pay up or move out. If you pay before that deadline, they can't move forward with the eviction.", textZh: "这还有办法。通知上给了你多少时间？通常是3到5天付清或搬走。如果在截止日期前付了，他们就不能继续驱逐。", actionHint: "pay up 意思是付清欠款", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It says I have five days. But I don't have enough money to pay both months right now.",
            textZh: "上面说是5天。但我现在没有足够的钱付两个月的房租。",
            casualVersion: "Five days. But I can't cover both months right now.",
          },
          {
            speaker: "them",
            role: "法律援助",
            textEn: "There are emergency rental assistance programs that might help. I can also help you contact your landlord to negotiate a payment plan — many landlords prefer that over going to court. We should also apply for the county's emergency aid fund today.",
            textZh: "有紧急租房援助计划可能能帮上忙。我也可以帮你联系房东协商分期付款方案——很多房东更愿意这样而不是上法庭。我们今天还应该申请县里的紧急援助基金。",
            keyPhrases: [
              { en: "rental assistance programs", zh: "租房援助计划" },
              { en: "payment plan", zh: "分期付款方案" },
            ],
            alternativeExpressions: [
              { textEn: "There are programs that can help cover the rent. And a lot of landlords would rather work out a payment plan than go through the court process. Let's also get you signed up for emergency aid today.", textZh: "有些项目可以帮你付房租。很多房东也宁愿协商分期付款而不是走法庭程序。今天我们也帮你申请紧急援助。", actionHint: "work out 意思是协商出/制定", frequency: "common" },
            ],
            culturalNote: "在美国，即使收到驱逐通知也不意味着必须立刻搬走。房客有法律权利应诉，整个驱逐流程在法律上通常需要数周到数月。许多地方有免费的法律援助服务。",
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "了解法律权利",
        titleEn: "Understanding Legal Rights",
        description: "深入了解租客的法律权利和应对策略",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "What are my rights as a tenant if this goes to court?",
            textZh: "如果上法庭，我作为租客有什么权利？",
            casualVersion: "If this ends up in court, what rights do I have?",
          },
          {
            speaker: "them",
            role: "法律援助",
            textEn: "You have the right to receive proper notice, appear in court to present your defense, and request a continuance if you need more time. The landlord must prove their case — you can challenge their evidence. You can also raise counterclaims if there were habitability issues.",
            textZh: "你有权收到正式通知、出庭为自己辩护，以及如果需要更多时间可以请求延期。房东必须证明他们的案子——你可以质疑他们的证据。如果房屋存在宜居性问题，你还可以提出反诉。",
            keyPhrases: [
              { en: "continuance", zh: "延期审理" },
              { en: "habitability issues", zh: "宜居性问题" },
            ],
            alternativeExpressions: [
              { textEn: "You've got the right to show up, tell your side, and ask for more time if you need it. The burden's on the landlord to prove you owe money. And if the place had problems they didn't fix, you can bring that up too.", textZh: "你有权出庭、说你的情况，如果需要可以要求更多时间。举证责任在房东那边。如果他们没修好房子的问题，你也可以提出来。", actionHint: "burden is on 意思是举证责任在于", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, there has been a mold problem in my bathroom that the landlord never fixed. Does that help my case?",
            textZh: "实际上，我浴室一直有霉菌问题，房东一直没修。这对我的案子有帮助吗？",
            casualVersion: "Actually, there's been a mold issue they never dealt with. Does that matter?",
          },
          {
            speaker: "them",
            role: "法律援助",
            textEn: "Yes, absolutely. If you reported the mold and the landlord failed to fix it, that's a habitability violation. In some jurisdictions, you may be entitled to rent reduction or even have the eviction dismissed. Do you have any written records — emails or texts — where you reported it?",
            textZh: "是的，当然有帮助。如果你报告了霉菌问题而房东没修，这就是宜居性违规。在某些地区，你可能有权减租甚至让驱逐被驳回。你有没有书面记录——邮件或短信——证明你报告过？",
            keyPhrases: [
              { en: "habitability violation", zh: "宜居性违规" },
              { en: "rent reduction", zh: "减租" },
            ],
            alternativeExpressions: [
              { textEn: "Big time. If you told them about it and they didn't do anything, that's a violation on their end. Depending on where you are, you could get rent knocked down or even get the whole case thrown out. Got any proof — like texts or emails — showing you told them?", textZh: "当然有用。如果你告诉他们了他们不管，这就是他们违规。根据你在哪个地区，可能减租甚至整个案子被撤销。有没有证据——比如短信或邮件——证明你跟他们说过？", actionHint: "big time 表示非常/绝对, case thrown out 意思是案件被撤销", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I sent several emails about it. I also took photos of the mold.",
            textZh: "有的，我发了好几封邮件。我也拍了霉菌的照片。",
            casualVersion: "Yeah, I emailed them a bunch of times. Got photos too.",
          },
          {
            speaker: "them",
            role: "法律援助",
            textEn: "That's excellent evidence. Bring everything — the emails, photos, and your lease agreement — to our next meeting. We'll prepare your defense and potentially file a counterclaim for the habitability violation. In the meantime, do not move out until there's a court order.",
            textZh: "这是很好的证据。下次见面带上一切——邮件、照片和租约。我们会准备你的辩护，可能还会就宜居性违规提出反诉。在此期间，没有法院命令不要搬走。",
            keyPhrases: [
              { en: "counterclaim", zh: "反诉" },
              { en: "court order", zh: "法院命令" },
            ],
            alternativeExpressions: [
              { textEn: "Perfect — that's strong evidence. Bring all of it next time — emails, photos, your lease. We'll build your defense and maybe even sue them back for the mold issue. And whatever you do, don't move out until a judge says so.", textZh: "完美——这是有力的证据。下次全部带来——邮件、照片、租约。我们准备辩护，也许还能反过来告他们霉菌的事。不管怎样，法官下令前不要搬走。", actionHint: "sue them back 意思是反过来告他们", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 11. 涨租通知 ====================
  {
    id: "housing-rent-increase",
    category: "housing",
    titleZh: "涨租通知",
    titleEn: "Rent Increase Notice",
    description: "收到房东的涨租通知后进行沟通和协商",
    otherRole: "房东",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "basic",
        titleZh: "了解涨租情况",
        titleEn: "Understanding Rent Increase",
        description: "收到涨租通知后与房东沟通",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I received the notice about the rent increase. I wanted to talk about it before my lease renews.",
            textZh: "你好，我收到了涨租通知。想在续约之前谈谈这件事。",
            casualVersion: "Hey, I got the rent increase notice. Can we talk about it?",
            commonMistake: {
              wrong: "I want to talk about it",
              correct: "I was hoping to discuss it",
              explanation: "“I want”语气较硬，在提出要求时使用“I was hoping to...”会更委婉礼貌。",
            },
            formalityVariants: {
              casual: "Hey, got the rent increase notice. Wanna chat about it before my lease renews.",
              standard: "Hi, I received the notice about the rent increase. I wanted to talk about it before my lease renews.",
              formal: "Good morning/afternoon, I am writing to acknowledge receipt of the rent increase notification. I would appreciate an opportunity to discuss this matter prior to the renewal of my lease agreement.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Of course. The increase is a hundred and fifty dollars per month, bringing your rent from sixteen hundred to seventeen fifty. This reflects the current market rate in the area and increased maintenance costs.",
            textZh: "当然。涨幅是每月150美元，您的房租从1600涨到1750。这反映了该地区目前的市场价格和增加的维护成本。",
            keyPhrases: [
              { en: "rent increase", zh: "涨租" },
              { en: "market rate", zh: "市场价格" },
            ],
            alternativeExpressions: [
              { textEn: "Sure. So it's going up a hundred fifty a month — sixteen hundred to seventeen fifty. Rents in the area have gone up and my costs have gone up too, so I had to adjust.", textZh: "好的。每月涨150——从1600到1750。这个区的租金涨了，我的成本也涨了，所以不得不调整。", actionHint: "had to adjust 表示不得不调整", frequency: "common" },
            ],
            casualVersion: "Sure. Rent's up a hundred fifty a month, so it's seventeen fifty from sixteen hundred. That's 'cause of market rates and higher maintenance costs.",
            formalityVariants: {
              casual: "Yeah, it's up a hundred fifty a month, so you're at seventeen fifty from sixteen hundred. Market rate and maintenance costs, you know.",
              standard: "Of course. The increase is a hundred and fifty dollars per month, bringing your rent from sixteen hundred to seventeen fifty. This reflects the current market rate in the area and increased maintenance costs.",
              formal: "Certainly. The monthly rental adjustment amounts to one hundred and fifty dollars, elevating your rent from sixteen hundred to seventeen hundred and fifty dollars. This adjustment is reflective of the prevailing market rates in the vicinity, in addition to increased operational and maintenance expenditures.",
            },
          },
          {
            speaker: "you",
            textEn: "That's almost a ten percent increase. Is there any room to negotiate?",
            textZh: "这涨了差不多10%。有没有协商的空间？",
            casualVersion: "That's a pretty big jump. Any chance we can work something out?",
            formalityVariants: {
              casual: "Woah, ten percent? Can we, like, talk about it?",
              standard: "That's almost a ten percent increase. Is there any room to negotiate?",
              formal: "That represents an approximate ten percent increase. Might there be any flexibility for negotiation?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "I appreciate you being a good tenant. I could come down to seventeen hundred if you're willing to sign a two-year lease instead of one. That gives me stability and saves you fifty a month.",
            textZh: "我很感谢你是个好租客。如果你愿意签两年的租约而不是一年的，我可以降到1700。这给了我稳定性，也给你每月省50。",
            keyPhrases: [
              { en: "negotiate", zh: "协商" },
              { en: "two-year lease", zh: "两年租约" },
            ],
            alternativeExpressions: [
              { textEn: "Look, you've been a great tenant. Tell you what — sign for two years instead of one, and I'll drop it to seventeen hundred. Win-win.", textZh: "你一直是很好的租客。这样吧——签两年而不是一年，我降到1700。双赢。", actionHint: "tell you what 是提议前的口语开场, win-win 意思是双赢", frequency: "common" },
            ],
            casualVersion: "Appreciate you being a good tenant. I could do seventeen hundred if you do a two-year lease instead of one. Gives me stability, saves you fifty a month.",
            formalityVariants: {
              casual: "Thanks for being a good tenant. I could go seventeen hundred if you're cool with a two-year lease. Helps me, saves you cash.",
              standard: "I appreciate you being a good tenant. I could come down to seventeen hundred if you're willing to sign a two-year lease instead of one. That gives me stability and saves you fifty a month.",
              formal: "Your consistent tenancy is highly valued. I would be amenable to reducing the rent to seventeen hundred dollars, contingent upon your willingness to commit to a two-year lease agreement, as opposed to a single year. This arrangement would provide me with enhanced stability while offering you a monthly saving of fifty dollars.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds fair. Can I have a few days to think it over?",
            textZh: "这听起来挺合理的。我可以考虑几天吗？",
            casualVersion: "That's not bad. Can I sleep on it for a few days?",
            formalityVariants: {
              casual: "Sounds fair. Can I get a few days to think?",
              standard: "That sounds fair. Can I have a few days to think it over?",
              formal: "That seems like a reasonable proposal. Would it be possible for me to have a few days to consider it?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Absolutely, take your time. Your current lease doesn't expire for another thirty days. Just let me know by the end of next week so I can prepare the new lease agreement.",
            textZh: "当然，不着急。你现在的租约还有30天才到期。下周末之前告诉我就行，这样我可以准备新的租约。",
            keyPhrases: [
              { en: "lease doesn't expire", zh: "租约还没到期" },
              { en: "lease agreement", zh: "租约" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, no rush. You've still got thirty days on your current lease. Just give me a heads-up by next Friday and we'll get the paperwork done.", textZh: "没问题，不急。你现在的租约还有30天。下周五前告诉我一声，我们把文件办好。", actionHint: "give me a heads-up 意思是提前告诉我", frequency: "common" },
            ],
            casualVersion: "Yeah, totally, no rush. Lease doesn't expire for another thirty days. Just hit me up by the end of next week so I can prep the new lease.",
            formalityVariants: {
              casual: "For sure, no worries. Got thirty days left on your lease. Just let me know by next Friday so I can get the new agreement ready.",
              standard: "Absolutely, take your time. Your current lease doesn't expire for another thirty days. Just let me know by the end of next week so I can prepare the new lease agreement.",
              formal: "Certainly, please do take your time. Your current lease agreement does not terminate for another thirty days. Kindly inform me of your decision by the conclusion of next week, so I may commence preparations for the updated lease agreement.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "质疑涨幅合理性",
        titleEn: "Questioning the Increase",
        description: "对不合理的涨租提出质疑",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I've done some research and similar apartments in this area are renting for around sixteen fifty. Your increase seems above market rate.",
            textZh: "我做了些调查，这个地区类似的公寓租金大约1650。你的涨幅似乎高于市场价。",
            casualVersion: "I looked it up and places like mine are going for about sixteen fifty. Yours seems high.",
            commonMistake: {
              wrong: "My research shows similar apartments are 1650.",
              correct: "I've done some research and similar apartments in this area are renting for around sixteen fifty.",
              explanation: "直接说“My research shows”语气太强硬，用“I've done some research and...”更委婉。",
            },
            formalityVariants: {
              casual: "So, I looked it up, and similar places 'round here are like, sixteen fifty. Your increase feels kinda high.",
              standard: "I've done some research and similar apartments in this area are renting for around sixteen fifty. Your increase seems above market rate.",
              formal: "Upon conducting some market research, I have found that comparable apartments in this vicinity are currently leasing for approximately sixteen hundred and fifty dollars. Consequently, your proposed increase appears to be above the prevailing market rate.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "I hear you, but those comparisons might not account for the recent upgrades I've made — the new appliances and the updated bathroom. However, I value having a reliable tenant. What number would work for you?",
            textZh: "我理解你的观点，但那些比较可能没有考虑到我最近做的升级——新家电和翻新的浴室。不过我很重视有一个可靠的租客。你觉得多少合适？",
            keyPhrases: [
              { en: "upgrades", zh: "升级/改善" },
              { en: "reliable tenant", zh: "可靠的租客" },
            ],
            alternativeExpressions: [
              { textEn: "Fair point, but I just put in new appliances and redid the bathroom — those places might not have that. But I don't want to lose a good tenant. What would make you happy?", textZh: "说得有道理，但我刚装了新家电、翻新了浴室——那些地方可能没有。但我不想失去好租客。你觉得多少能接受？", actionHint: "what would make you happy 在谈判中表示你想要什么价格", frequency: "common" },
            ],
            casualVersion: "Get what you're saying, but those comparisons probably don't factor in the upgrades I did — new appliances, updated bathroom. Still, I like having a reliable tenant. What price are you thinking?",
            formalityVariants: {
              casual: "I hear ya, but those comps probably don't include my recent upgrades, like the new appliances and updated bathroom. But hey, good tenants are valuable. What number works for you?",
              standard: "I hear you, but those comparisons might not account for the recent upgrades I've made — the new appliances and the updated bathroom. However, I value having a reliable tenant. What number would work for you?",
              formal: "I understand your perspective, however, those comparisons may not fully encompass the recent enhancements I've implemented, such as the new appliances and the updated bathroom. Nevertheless, I do highly value having a reliable tenant. Could you please specify a rental amount that would be agreeable to you?",
            },
          },
          {
            speaker: "you",
            textEn: "I think sixteen fifty would be fair given the market. I've also been paying on time every month for three years.",
            textZh: "我觉得1650是合理的，考虑到市场行情。而且我三年来每个月都按时付租。",
            casualVersion: "I think sixteen fifty is fair. I've never been late on rent in three years.",
            formalityVariants: {
              casual: "Sixteen fifty seems fair with the market. Plus, I've always paid on time for three years.",
              standard: "I think sixteen fifty would be fair given the market. I've also been paying on time every month for three years.",
              formal: "Considering the current market conditions, I believe sixteen hundred and fifty dollars would be a fair rate. Furthermore, I have consistently paid my rent on time each month for the past three years.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "You're right, you've been an excellent tenant. Tell you what — I'll meet you in the middle at sixteen seventy-five. That's only a seventy-five-dollar increase and I won't raise it again for at least eighteen months.",
            textZh: "你说得对，你一直是优秀的租客。这样吧——我们折中一下1675。这只涨了75美元，而且至少18个月内不会再涨。",
            keyPhrases: [
              { en: "meet you in the middle", zh: "折中/各退一步" },
              { en: "won't raise it again", zh: "不会再涨" },
            ],
            alternativeExpressions: [
              { textEn: "You've been great, I'll give you that. How about we split the difference — sixteen seventy-five, and I promise no increase for a year and a half?", textZh: "你确实很好，这我承认。这样吧——1675，我保证一年半不涨？", actionHint: "split the difference 意思是折中/各让一步", frequency: "common" },
            ],
            casualVersion: "You're right, you're a great tenant. How 'bout this — let's do sixteen seventy-five, right in the middle. Only seventy-five bucks more, and no more increases for at least eighteen months.",
            formalityVariants: {
              casual: "You're totally right, you've been solid. So, how about we split it at sixteen seventy-five? Just seventy-five bucks more, and it's locked for eighteen months, minimum.",
              standard: "You're right, you've been an excellent tenant. Tell you what — I'll meet you in the middle at sixteen seventy-five. That's only a seventy-five-dollar increase and I won't raise it again for at least eighteen months.",
              formal: "You are correct; your tenancy has been exemplary. Allow me to propose a compromise: we will settle at sixteen hundred and seventy-five dollars. This constitutes a modest seventy-five-dollar increase, and I commit to no further rent adjustments for a minimum period of eighteen months.",
            },
          },
          {
            speaker: "you",
            textEn: "Deal. Can you put the eighteen-month price freeze in writing in the lease?",
            textZh: "成交。你能把18个月不涨价写进租约里吗？",
            casualVersion: "Sounds good. Can you add the no-increase thing to the lease?",
            formalityVariants: {
              casual: "Deal. Can we get that eighteen-month price freeze in writing?",
              standard: "Deal. Can you put the eighteen-month price freeze in writing in the lease?",
              formal: "Agreed. Would it be possible to formally include the eighteen-month rent freeze as a written clause within the lease agreement?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Absolutely, I'll add a clause stating that rent will remain at sixteen seventy-five for the next eighteen months. I'll have the updated lease ready for you to sign by Friday.",
            textZh: "当然，我会加一条条款说明在接下来的18个月内租金保持1675不变。更新的租约我周五之前准备好给你签。",
            keyPhrases: [
              { en: "add a clause", zh: "加一条条款" },
              { en: "price freeze", zh: "价格冻结" },
            ],
            alternativeExpressions: [
              { textEn: "For sure — I'll write it right into the lease. No increase for eighteen months, locked in. I'll have everything ready by Friday.", textZh: "没问题——我直接写进租约里。18个月不涨，白纸黑字。周五之前准备好。", actionHint: "locked in 意思是锁定/确定不变", frequency: "common" },
            ],
            casualVersion: "Totally, I'll add a clause for sixteen seventy-five for the next eighteen months. Lease'll be ready to sign by Friday.",
            formalityVariants: {
              casual: "Yep, I'll put in a clause for sixteen seventy-five for the next eighteen months. New lease'll be ready by Friday.",
              standard: "Absolutely, I'll add a clause stating that rent will remain at sixteen seventy-five for the next eighteen months. I'll have the updated lease ready for you to sign by Friday.",
              formal: "Certainly, I shall incorporate a specific clause stipulating that the rental rate will be maintained at sixteen hundred and seventy-five dollars for the forthcoming eighteen-month period. The revised lease agreement will be prepared for your signature by Friday.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 12. 害虫处理 ====================
  {
    id: "housing-pest-control",
    category: "housing",
    titleZh: "害虫处理",
    titleEn: "Pest Control",
    description: "联系灭虫人员处理家中的害虫问题",
    otherRole: "灭虫人员",
    otherRoleIcon: "🐛",
    flows: [
      {
        id: "basic",
        titleZh: "基本灭虫服务",
        titleEn: "Basic Pest Control Service",
        description: "第一次预约灭虫服务",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I've been seeing a lot of ants in my kitchen and I think I might have mice too. Can you come take a look?",
            textZh: "你好，我厨房里有很多蚂蚁，我觉得可能还有老鼠。你能来看看吗？",
            casualVersion: "Hey, I've got ants in my kitchen and maybe mice. Can you help?",
          },
          {
            speaker: "them",
            role: "灭虫人员",
            textEn: "Absolutely. We can schedule an inspection for you. During the visit, I'll identify the type of pests, locate entry points, and recommend a treatment plan. Our inspection is free with no obligation.",
            textZh: "当然可以。我们可以为您安排一次检查。上门时，我会确认害虫类型、找到入侵点并推荐处理方案。检查是免费的，不强制消费。",
            keyPhrases: [
              { en: "entry points", zh: "入侵点/进入点" },
              { en: "treatment plan", zh: "处理方案" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. I'll come out, figure out what's getting in, where they're coming from, and what we need to do. The inspection's free — no strings attached.", textZh: "没问题。我过去看看是什么虫子、从哪进来的、需要怎么处理。检查免费——没有附加条件。", actionHint: "no strings attached 意思是没有附加条件", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. How much does a typical treatment cost?",
            textZh: "太好了。一般处理费用是多少？",
            casualVersion: "What does something like that usually cost?",
          },
          {
            speaker: "them",
            role: "灭虫人员",
            textEn: "For ants, a one-time treatment runs about one fifty to two fifty. For mice, it's a bit more — usually two hundred to four hundred, depending on the severity. We also offer quarterly plans that cover everything for about a hundred bucks a visit.",
            textZh: "蚂蚁的一次性处理大约150到250美元。老鼠稍贵——通常200到400美元，取决于严重程度。我们也有季度套餐，每次大约100美元，涵盖所有项目。",
            keyPhrases: [
              { en: "one-time treatment", zh: "一次性处理" },
              { en: "quarterly plans", zh: "季度套餐" },
            ],
            alternativeExpressions: [
              { textEn: "Ants are usually one fifty to two fifty for a single treatment. Mice can run two to four hundred — depends on how bad it is. Or you could do a quarterly plan, about a hundred a pop, and we handle everything.", textZh: "蚂蚁单次处理通常150到250。老鼠200到400——看多严重。或者你可以选季度套餐，每次大约100，我们什么都管。", actionHint: "a hundred a pop 意思是每次100", frequency: "common" },
            ],
            culturalNote: "在美国，如果你是租客，很多州的法律要求房东承担灭虫费用，尤其是蟑螂、老鼠和臭虫。签租约前要确认害虫处理的责任归属。",
          },
          {
            speaker: "you",
            textEn: "Is the treatment safe for pets? I have a cat.",
            textZh: "处理对宠物安全吗？我有一只猫。",
            casualVersion: "I have a cat — is the stuff you use safe for pets?",
          },
          {
            speaker: "them",
            role: "灭虫人员",
            textEn: "We use pet-safe products, but I'd recommend keeping your cat out of the treated areas for about two to four hours until everything dries. I'll let you know exactly which rooms to keep your cat away from.",
            textZh: "我们使用对宠物安全的产品，但建议在处理后2到4小时内让猫远离处理区域，直到药剂干燥。我会告诉你具体哪些房间需要让猫远离。",
            keyPhrases: [
              { en: "pet-safe products", zh: "宠物安全产品" },
              { en: "treated areas", zh: "处理过的区域" },
            ],
            alternativeExpressions: [
              { textEn: "Everything we use is pet-friendly, but just keep your cat away from where we spray for a couple hours until it dries. I'll tell you exactly where to block off.", textZh: "我们用的都是对宠物友好的。但喷过的地方让猫远离几个小时，等干了就行。我会告诉你具体哪里需要隔开。", actionHint: "block off 意思是隔开/封闭", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "处理严重虫害",
        titleEn: "Dealing with Serious Infestation",
        description: "处理更严重的害虫问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I think we might have termites. I found what looks like sawdust near the baseboards.",
            textZh: "我觉得可能有白蚁。我在踢脚线附近发现了看起来像锯末的东西。",
            casualVersion: "I'm worried about termites. There's what looks like sawdust by the baseboards.",
          },
          {
            speaker: "them",
            role: "灭虫人员",
            textEn: "That does sound like termite frass — the droppings they leave behind. Termites can cause serious structural damage if left untreated. I'd need to do a thorough inspection, including checking the crawl space and attic.",
            textZh: "这听起来确实像白蚁的排泄物——它们留下的粪便。如果不处理，白蚁会造成严重的结构性损坏。我需要做一次彻底检查，包括检查爬行空间和阁楼。",
            keyPhrases: [
              { en: "termite frass", zh: "白蚁排泄物" },
              { en: "structural damage", zh: "结构性损坏" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, that's probably termite frass — basically their droppings. You don't want to sit on this one — termites can do real damage to your house. I'll need to check the crawl space and attic to see how bad it is.", textZh: "对，那可能是白蚁粪便。这个不能拖——白蚁会对你的房子造成真正的损害。我需要检查爬行空间和阁楼看多严重。", actionHint: "sit on this one 意思是拖延不处理", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much would termite treatment cost? And how long does it take?",
            textZh: "白蚁处理要多少钱？需要多长时间？",
            casualVersion: "What are we talking about cost-wise? And how long will it take?",
          },
          {
            speaker: "them",
            role: "灭虫人员",
            textEn: "A full termite treatment for an average-sized home runs between eight hundred and twenty-five hundred dollars, depending on the method. We can do a liquid barrier treatment or install bait stations. The treatment itself takes one day, but monitoring continues for a year.",
            textZh: "普通大小的房子全面白蚁处理费用在800到2500美元之间，取决于方法。我们可以做液体屏障处理或安装诱饵站。处理本身需要一天，但监测会持续一年。",
            keyPhrases: [
              { en: "liquid barrier treatment", zh: "液体屏障处理" },
              { en: "bait stations", zh: "诱饵站" },
            ],
            alternativeExpressions: [
              { textEn: "For a normal-sized house, you're looking at eight hundred to twenty-five hundred. We can either do a chemical barrier around the house or put in bait traps. Takes about a day to do the treatment, then we come back to check on it over the next year.", textZh: "正常大小的房子，大概800到2500。可以在房子周围做化学屏障或放诱饵陷阱。处理大约一天，之后一年内我们会回来检查。", actionHint: "come back to check on it 意思是回来复查", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Does it come with any kind of warranty or guarantee?",
            textZh: "有保修或保证吗？",
            casualVersion: "Is there a warranty if the termites come back?",
          },
          {
            speaker: "them",
            role: "灭虫人员",
            textEn: "Yes, all our termite treatments come with a one-year warranty. If they come back within that period, we'll re-treat at no additional cost. We also offer extended warranties for a small annual fee that covers you for up to five years.",
            textZh: "是的，我们所有的白蚁处理都有一年保修。如果在此期间白蚁再来，我们会免费重新处理。我们也提供延长保修，只需少量年费，最长覆盖5年。",
            keyPhrases: [
              { en: "warranty", zh: "保修" },
              { en: "re-treat at no additional cost", zh: "免费重新处理" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, you get a one-year guarantee. If they show up again, we come back for free. And for a little extra per year, we can extend that coverage up to five years.", textZh: "对，有一年保证。如果它们再出现，我们免费再来处理。每年多付一点，可以把保修延长到5年。", actionHint: "show up 这里指白蚁再次出现", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 13. 搬家公司 ====================
  {
    id: "housing-moving-company",
    category: "housing",
    titleZh: "搬家公司",
    titleEn: "Moving Company",
    description: "联系搬家公司安排搬家服务",
    otherRole: "搬家工",
    otherRoleIcon: "🚚",
    flows: [
      {
        id: "basic",
        titleZh: "预约搬家服务",
        titleEn: "Booking Moving Services",
        description: "第一次预约搬家公司",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm moving to a new apartment next month. Can I get a quote for your moving service?",
            textZh: "你好，我下个月要搬到新公寓。能给我报个价吗？",
            casualVersion: "Hey, I need to move next month. How much would it cost?",
            commonMistake: {
              wrong: "Can I get your price?",
              correct: "Can I get a quote?",
              explanation: "get a quote 是标准表达，get your price 听起来不专业且不自然。",
            },
            formalityVariants: {
              casual: "Hey, I'm moving next month. Can I get a quote for moving?",
              standard: "Hi, I'm moving to a new apartment next month. Can I get a quote for your moving service?",
              formal: "Good morning/afternoon. I will be relocating to a new apartment next month, and I would appreciate it if you could provide a quotation for your moving services.",
            },
          },
          {
            speaker: "them",
            role: "搬家工",
            textEn: "Sure! To give you an accurate quote, I need to know a few things — how big is your current place, how far is the new location, and roughly how much furniture are we talking about?",
            textZh: "当然！为了给您准确报价，我需要知道几件事——您现在的住处多大、新地方有多远、大概有多少家具？",
            keyPhrases: [
              { en: "quote", zh: "报价" },
              { en: "how far is the new location", zh: "新地方有多远" },
            ],
            alternativeExpressions: [
              { textEn: "For sure! Just need a few details — how big's your place, how far are you going, and how much stuff have you got?", textZh: "没问题！需要几个信息——你家多大、搬多远、东西多不多？", actionHint: "how much stuff 是口语中问物品数量的方式", frequency: "common" },
            ],
            casualVersion: "Sure! To give ya a good quote, I gotta know a few things—how big's your current place, how far's the new spot, and 'bout how much furniture ya got?",
            formalityVariants: {
              casual: "Sure! To give ya a good quote, I need some info: how big's your place, how far's the new one, and how much stuff ya got?",
              standard: "Sure! To give you an accurate quote, I need to know a few things — how big is your current place, how far is the new location, and roughly how much furniture are we talking about?",
              formal: "Certainly. To provide you with a precise quotation, I would require some additional information: specifically, the size of your current residence, the distance to your new location, and an approximate inventory of the furniture involved.",
            },
          },
          {
            speaker: "you",
            textEn: "It's a two-bedroom apartment with standard furniture. The new place is about fifteen miles away.",
            textZh: "两居室公寓，标准家具。新地方大约15英里远。",
            casualVersion: "Two-bedroom, regular furniture. Moving about fifteen miles.",
            formalityVariants: {
              casual: "It's a 2-bed apartment, regular furniture. New spot's 'bout 15 miles out.",
              standard: "It's a two-bedroom apartment with standard furniture. The new place is about fifteen miles away.",
              formal: "My current residence is a two-bedroom apartment containing standard furnishings. The new location is approximately fifteen miles distant.",
            },
          },
          {
            speaker: "them",
            role: "搬家工",
            textEn: "For a two-bedroom local move, you're looking at around six hundred to a thousand dollars. That includes two movers and a truck for about four to six hours. Packing materials are extra unless you want our full-service package.",
            textZh: "两居室的本地搬家，大约600到1000美元。包括两个搬家工和一辆卡车，大约4到6小时。打包材料另外收费，除非您选择我们的全包套餐。",
            keyPhrases: [
              { en: "local move", zh: "本地搬家" },
              { en: "full-service package", zh: "全包套餐" },
            ],
            alternativeExpressions: [
              { textEn: "A two-bedroom, fifteen miles — probably six hundred to a grand. That's two guys, a truck, and about four to six hours of work. If you want us to pack everything too, that's the full-service option.", textZh: "两居室，15英里——大概600到1000。两个人、一辆车、大约4到6小时。如果你还要我们帮打包，那就是全包服务。", actionHint: "a grand 口语中表示一千美元", frequency: "common" },
            ],
            casualVersion: "For a 2-bed local move, you're lookin' at somethin' like six hundred to a grand. That gets ya two movers and a truck for maybe four to six hours. Packing stuff's extra, 'less you want our full-service deal.",
            formalityVariants: {
              casual: "For a 2-bed local move, it's roughly $600-$1000. That covers two movers, a truck, about 4-6 hours. Packing supplies cost extra, unless you go full-service.",
              standard: "For a two-bedroom local move, you're looking at around six hundred to a thousand dollars. That includes two movers and a truck for about four to six hours. Packing materials are extra unless you want our full-service package.",
              formal: "A local relocation for a two-bedroom residence typically ranges from approximately six hundred to one thousand dollars. This estimate encompasses the services of two movers and a truck for a duration of four to six hours. Packing materials are supplementary, unless you opt for our comprehensive full-service package.",
            },
          },
          {
            speaker: "you",
            textEn: "Do I need to do anything to prepare before you come?",
            textZh: "你们来之前我需要做什么准备吗？",
            casualVersion: "Anything I should do before you guys show up?",
            formalityVariants: {
              casual: "Anything I gotta do before you guys show up?",
              standard: "Do I need to do anything to prepare before you come?",
              formal: "Are there any specific preparations I should undertake prior to your arrival?",
            },
          },
          {
            speaker: "them",
            role: "搬家工",
            textEn: "If you're not using our packing service, have everything boxed up and labeled by room. Disconnect any appliances and clear a path to the door. Also, make sure there's parking available for the truck at both locations.",
            textZh: "如果您不用我们的打包服务，请把所有东西装箱并按房间标记。断开电器连接，清出一条通道。另外，确保两个地点都有卡车停车位。",
            keyPhrases: [
              { en: "boxed up and labeled", zh: "装箱并标记" },
              { en: "clear a path", zh: "清出通道" },
            ],
            alternativeExpressions: [
              { textEn: "Just make sure everything's packed and labeled so we know where it goes. Unplug your appliances, keep the walkways clear, and make sure we can park the truck close to the door at both places.", textZh: "确保所有东西打包好并标记好，这样我们知道放哪里。电器拔掉插头，过道保持畅通，两个地方都确保卡车能停在门附近。", actionHint: "keep the walkways clear 意思是保持过道畅通", frequency: "common" },
            ],
            culturalNote: "在美国搬家时，给搬家工小费是惯例。一般每人给20到40美元，或者总费用的15%到20%。如果搬运特别重的物品或楼层很多，可以适当多给。",
            casualVersion: "If you're not usin' our packin' service, get everything boxed and labeled by room. Unplug all your appliances and clear a path to the door. Also, make sure there's truck parkin' at both spots.",
            formalityVariants: {
              casual: "If you're DIYing the packing, box everything up, label by room. Unplug appliances, clear a path. And make sure there's truck parking at both places.",
              standard: "If you're not using our packing service, have everything boxed up and labeled by room. Disconnect any appliances and clear a path to the door. Also, make sure there's parking available for the truck at both locations.",
              formal: "Should you opt against our packing service, kindly ensure all items are boxed and clearly labeled by room. Additionally, please disconnect all appliances and ensure a clear pathway to the exit. It is also imperative to secure adequate truck parking at both the origin and destination locations.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "处理搬家问题",
        titleEn: "Handling Moving Issues",
        description: "搬家过程中遇到问题时的沟通",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I just noticed that my dining table has a big scratch on it. It wasn't there before the move.",
            textZh: "我刚注意到餐桌上有一道很大的划痕。搬家前没有的。",
            casualVersion: "Hey, there's a big scratch on my table that wasn't there before.",
            commonMistake: {
              wrong: "My dining table has a big scratch. Before move, it wasn't there.",
              correct: "I just noticed that my dining table has a big scratch on it. It wasn't there before the move.",
              explanation: "句子结构自然流畅，避免了生硬的直译。",
            },
            formalityVariants: {
              casual: "Just saw a big scratch on my dining table. Wasn't there before the move.",
              standard: "I just noticed that my dining table has a big scratch on it. It wasn't there before the move.",
              formal: "I have just observed a significant scratch on my dining table. This damage was not present prior to the relocation.",
            },
          },
          {
            speaker: "them",
            role: "搬家工",
            textEn: "I'm sorry about that. We do carry basic liability coverage of sixty cents per pound per item. If you purchased our full-value protection, we can either repair the table or reimburse you for its current value. Can you take a photo and send it to our claims department?",
            textZh: "很抱歉发生这种情况。我们有基本责任保险，每磅每件60美分。如果您购买了全价值保护，我们可以修理桌子或按当前价值赔偿。您能拍照发给我们的理赔部门吗？",
            keyPhrases: [
              { en: "liability coverage", zh: "责任保险" },
              { en: "full-value protection", zh: "全价值保护" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, I'm really sorry. We've got basic coverage — sixty cents a pound per item. If you got the premium insurance, we can fix it or pay you what it's worth. Just snap a pic and send it to our claims team.", textZh: "糟糕，真的很抱歉。我们有基本保险——每磅60美分每件。如果你买了高级保险，我们可以修好或赔偿价值。拍个照发给理赔部门就行。", actionHint: "snap a pic 口语中指拍照", frequency: "common" },
            ],
            casualVersion: "Ah, shoot, sorry 'bout that. We got basic liability, like, sixty cents a pound per item. If you got our full-value protection, we can either fix the table or pay ya for what it's worth. Can you snap a pic and send it to claims?",
            culturalNote: "美国搬家公司责任有限，需额外购买全险。",
            formalityVariants: {
              casual: "Oh, darn, sorry. We've got basic coverage, 60 cents a pound. If you got full protection, we can fix it or pay you its value. Can you send a photo to claims?",
              standard: "I'm sorry about that. We do carry basic liability coverage of sixty cents per pound per item. If you purchased our full-value protection, we can either repair the table or reimburse you for its current value. Can you take a photo and send it to our claims department?",
              formal: "My apologies for this unfortunate incident. Our standard basic liability coverage is sixty cents per pound per item. However, if you acquired our full-value protection, we are prepared to either arrange for the table's repair or provide reimbursement for its current market value. Would you be able to photograph the damage and forward it to our claims department?",
            },
          },
          {
            speaker: "you",
            textEn: "I did buy the full-value protection. How long does the claims process take?",
            textZh: "我确实买了全价值保护。理赔流程需要多长时间？",
            casualVersion: "Yeah, I got the premium coverage. How long will the claim take?",
            commonMistake: {
              wrong: "How long the claims process takes?",
              correct: "How long does the claims process take?",
              explanation: "疑问句需要助动词 'does'。",
            },
            formalityVariants: {
              casual: "Yep, got the full protection. How long till this claim gets sorted?",
              standard: "I did buy the full-value protection. How long does the claims process take?",
              formal: "I did indeed purchase the full-value protection. Could you please inform me of the estimated duration for the claims resolution process?",
            },
          },
          {
            speaker: "them",
            role: "搬家工",
            textEn: "With full-value protection, claims are usually resolved within two to four weeks. You'll hear back from our claims team within three business days. They'll either arrange for a repair or send you a check for the replacement value.",
            textZh: "有全价值保护的话，理赔通常在2到4周内解决。理赔团队会在3个工作日内回复您。他们会安排修理或给您寄一张替换价值的支票。",
            keyPhrases: [
              { en: "claims process", zh: "理赔流程" },
              { en: "replacement value", zh: "替换价值" },
            ],
            alternativeExpressions: [
              { textEn: "Should be wrapped up in two to four weeks. Our team will get back to you in about three business days and either fix it or cut you a check.", textZh: "大概2到4周解决。我们的团队3个工作日内回复你，要么修好要么给你开支票。", actionHint: "cut you a check 意思是给你开支票/付钱", frequency: "common" },
            ],
            casualVersion: "With full-value, claims usually get done in two to four weeks. You'll hear from our claims team in three biz days. They'll either fix it or send you a check for what it's worth.",
            formalityVariants: {
              casual: "If you have full protection, claims usually wrap up in 2-4 weeks. You'll hear from claims in 3 business days. They'll arrange a repair or send a check for its value.",
              standard: "With full-value protection, claims are usually resolved within two to four weeks. You'll hear back from our claims team within three business days. They'll either arrange for a repair or send you a check for the replacement value.",
              formal: "In cases with full-value protection, claims are typically resolved within a period of two to four weeks. Our claims team will contact you within three business days to either coordinate a repair or issue a check for the item's replacement value.",
            },
          },
          {
            speaker: "you",
            textEn: "Also, one of the boxes labeled 'fragile' seems to have been dropped. Can someone check it with me?",
            textZh: "还有，一个标着'易碎'的箱子好像被摔了。有人能跟我一起检查吗？",
            casualVersion: "One of my fragile boxes looks like it got dropped too. Can we open it together?",
            commonMistake: {
              wrong: "Also, one of the boxes labeled 'fragile' seems dropped.",
              correct: "Also, one of the boxes labeled 'fragile' seems to have been dropped.",
              explanation: "使用 'to have been dropped' 表示过去发生的动作，且是受动方。",
            },
            formalityVariants: {
              casual: "Also, looks like one of the 'fragile' boxes got dropped. Can someone check it with me?",
              standard: "Also, one of the boxes labeled 'fragile' seems to have been dropped. Can someone check it with me?",
              formal: "Furthermore, one of the containers explicitly marked 'fragile' appears to have sustained an impact from being dropped. Would it be possible for someone to inspect it with me?",
            },
          },
          {
            speaker: "them",
            role: "搬家工",
            textEn: "Of course. Let's open it together and document anything that's damaged. I'll note it on the inventory sheet right now. If anything is broken, it'll be part of the same claim. We want to make sure everything is accounted for.",
            textZh: "当然。我们一起打开看看，记录任何损坏的东西。我现在就记在清单上。如果有破损的，会算在同一个理赔里。我们要确保所有东西都有记录。",
            keyPhrases: [
              { en: "inventory sheet", zh: "物品清单" },
              { en: "accounted for", zh: "有记录/清点在案" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, let's look together. I'll write down everything on the spot. Any breakage goes on the same claim. We want to get it all documented while I'm still here.", textZh: "好的，一起看看。我现场都记下来。任何破损都加到同一个理赔里。趁我还在，把所有东西都记录好。", actionHint: "on the spot 意思是当场/现场", frequency: "common" },
            ],
            casualVersion: "No problem. Let's open it up and write down any damage. I'll add it to the inventory sheet right away. If anything's busted, it'll go on the same claim. Gotta make sure we get everything covered.",
            formalityVariants: {
              casual: "Sure. Let's open it, note any damage. I'll get it on the sheet now. If anything's broken, it's one claim. We'll make sure everything's covered.",
              standard: "Of course. Let's open it together and document anything that's damaged. I'll note it on the inventory sheet right now. If anything is broken, it'll be part of the same claim. We want to make sure everything is accounted for.",
              formal: "Certainly. We can open it together and meticulously document any damage observed. I will record this immediately on the inventory sheet. Should anything be broken, it will be included as part of the existing claim. Our objective is to ensure that all items are thoroughly accounted for.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 14. 租仓库 ====================
  {
    id: "housing-storage-unit",
    category: "housing",
    titleZh: "租仓库",
    titleEn: "Storage Unit Rental",
    description: "租用自助仓储空间存放物品",
    otherRole: "仓库店员",
    otherRoleIcon: "📦",
    flows: [
      {
        id: "basic",
        titleZh: "基本仓储咨询",
        titleEn: "Basic Storage Inquiry",
        description: "第一次租用自助仓储",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to rent a storage unit. I'm downsizing and need somewhere to keep some furniture and boxes.",
            textZh: "你好，我需要租一个仓储单元。我在缩小住处，需要一个地方放家具和箱子。",
            casualVersion: "Hey, I need some storage space. Got furniture and boxes I need to stash somewhere.",
            commonMistake: {
              wrong: "I need rent a storage unit.",
              correct: "I need to rent a storage unit.",
              explanation: "中文里“需要租”直接连接动词，英文需要加to。另外，“I want to...”可能显得不够礼貌，用“I'd like to...”更地道。",
            },
            formalityVariants: {
              casual: "Hey, need a storage unit. Downsizing, gotta stash some furniture and boxes.",
              standard: "Hi, I need to rent a storage unit. I'm downsizing and need somewhere to keep some furniture and boxes.",
              formal: "Good morning/afternoon, I would like to inquire about renting a storage unit. I am in the process of downsizing and require a facility to store some furniture and boxes.",
            },
          },
          {
            speaker: "them",
            role: "仓库店员",
            textEn: "Sure! We have units ranging from five by five feet — about the size of a closet — up to ten by thirty feet, which can hold the contents of a three-bedroom house. How much stuff are we talking about?",
            textZh: "当然！我们有从5乘5英尺——大约一个衣柜的大小——到10乘30英尺，可以放一个三居室的全部物品。大概有多少东西？",
            keyPhrases: [
              { en: "storage unit", zh: "仓储单元" },
              { en: "five by five feet", zh: "5乘5英尺" },
            ],
            alternativeExpressions: [
              { textEn: "We've got everything from small closet-sized units to big ones that fit a whole house worth of stuff. What are you looking to store?", textZh: "我们有从衣柜大小的小单元到能放一整栋房子东西的大单元。你打算存什么？", actionHint: "a whole house worth of stuff 意思是一整栋房子的东西", frequency: "common" },
            ],
            casualVersion: "Sure! We got units from like, five by five — that's closet size — all the way up to ten by thirty, fits a whole three-bed house. So, how much stuff ya got?",
            culturalNote: "美国常用英尺（feet）作为长度单位，平方英尺（square feet）作为面积单位。和中国常用的米和平方米不同，可以关",
            formalityVariants: {
              casual: "Sure! We got units from 5x5, like a closet, up to 10x30, which holds a whole 3-bed house. So, how much stuff we talkin'?",
              standard: "Sure! We have units ranging from five by five feet — about the size of a closet — up to ten by thirty feet, which can hold the contents of a three-bedroom house. How much stuff are we talking about?",
              formal: "Certainly! Our units vary in size, from a five-by-five-foot unit, comparable to a standard closet, up to a ten-by-thirty-foot unit, capable of accommodating the contents of a three-bedroom residence. Could you please provide an estimate of the volume of items you intend to store?",
            },
          },
          {
            speaker: "you",
            textEn: "Probably a couch, a bed frame, some bookshelves, and about fifteen boxes. What size do you recommend?",
            textZh: "大概一个沙发、一个床架、几个书架和大约15个箱子。你推荐什么尺寸？",
            casualVersion: "A couch, bed frame, some shelves, and like fifteen boxes. What do I need?",
            commonMistake: {
              wrong: "You recommend what size?",
              correct: "What size do you recommend?",
              explanation: "中文语序是“你推荐什么尺寸”，但英文疑问句需要倒装，把疑问词放到前面。",
            },
            formalityVariants: {
              casual: "Like, a couch, bed frame, a few bookshelves, and fifteen boxes. What size d'you think?",
              standard: "Probably a couch, a bed frame, some bookshelves, and about fifteen boxes. What size do you recommend?",
              formal: "I anticipate storing a sofa, a bed frame, several bookshelves, and approximately fifteen boxes. Based on this inventory, what unit size would you advise?",
            },
          },
          {
            speaker: "them",
            role: "仓库店员",
            textEn: "I'd recommend a ten by ten unit. That gives you a hundred square feet — plenty of room for what you described with space to walk in. We have one available on the first floor for a hundred and twenty dollars a month.",
            textZh: "我推荐10乘10的单元。100平方英尺——足够放你说的那些东西还有走动的空间。一楼有一个，每月120美元。",
            keyPhrases: [
              { en: "ten by ten", zh: "10乘10（英尺）" },
              { en: "first floor", zh: "一楼" },
            ],
            alternativeExpressions: [
              { textEn: "A ten-by-ten should do it. That's a hundred square feet — enough for all of that and room to get around. We've got one downstairs for a hundred twenty a month.", textZh: "10乘10应该够了。100平方英尺——放得下所有东西还有活动空间。楼下有一个，月租120。", actionHint: "should do it 意思是应该足够了", frequency: "common" },
            ],
            casualVersion: "I'd go with a ten by ten. That's a hundred square feet, plenty of room for your stuff and to walk around. Got one on the first floor, a hundred twenty bucks a month.",
            culturalNote: "英尺和平方英尺是美国常见的度量单位，与中国的米和平方米不同。这里用“square feet”表示面积，同时说明有“spa",
            formalityVariants: {
              casual: "Go with a 10x10. That's 100 sq ft – plenty of room for your stuff and to walk around. Got one on the first floor for 120 a month.",
              standard: "I'd recommend a ten by ten unit. That gives you a hundred square feet — plenty of room for what you described with space to walk in. We have one available on the first floor for a hundred and twenty dollars a month.",
              formal: "I would suggest a ten-by-ten-foot unit. This provides one hundred square feet of space, which should be ample for the items you've listed, with additional room for maneuverability. We currently have one such unit available on the first floor at a rate of one hundred and twenty dollars per month.",
            },
          },
          {
            speaker: "you",
            textEn: "Is the facility climate-controlled? I don't want my furniture to get damaged.",
            textZh: "仓库有恒温控制吗？我不想家具受损。",
            casualVersion: "Is it climate-controlled? I don't want my stuff getting ruined.",
            culturalNote: "在美国，恒温控制（climate-controlled）的仓储单元是为了保护对温度和湿度敏感的物品，这在中国可能不那么常",
            commonMistake: {
              wrong: "The facility is climate control?",
              correct: "Is the facility climate-controlled?",
              explanation: "Climate-controlled是形容词，修饰facility。直接说climate control语法不通。",
            },
            formalityVariants: {
              casual: "Is it climate-controlled? Don't want my furniture messed up.",
              standard: "Is the facility climate-controlled? I don't want my furniture to get damaged.",
              formal: "Could you please confirm if the storage facility offers climate control? I am concerned about potential damage to my furniture due to temperature or humidity fluctuations.",
            },
          },
          {
            speaker: "them",
            role: "仓库店员",
            textEn: "Yes, we have climate-controlled units that maintain temperature between fifty-five and eighty degrees year-round. Those are twenty dollars more per month. For furniture and anything sensitive to humidity, I'd definitely recommend it.",
            textZh: "是的，我们有恒温单元，全年保持55到80华氏度之间。每月多20美元。对于家具和任何对湿度敏感的物品，我强烈建议选恒温的。",
            keyPhrases: [
              { en: "climate-controlled", zh: "恒温控制的" },
              { en: "humidity", zh: "湿度" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, we've got climate-controlled units — stays between fifty-five and eighty degrees all year. It's an extra twenty a month, but for furniture I'd say it's worth it.", textZh: "有的，恒温单元——全年55到80度之间。每月多20，但放家具的话我觉得值得。", actionHint: "I'd say it's worth it 表示我认为值得", frequency: "common" },
            ],
            culturalNote: "美国的自助仓储（self-storage）非常普遍，几乎每个城镇都有。很多人在搬家、装修或缩小住处时使用。月租从50到300美元不等，取决于大小和位置。",
            casualVersion: "Yeah, we got climate-controlled units that keep temps between 55 and 80 year-round. They're twenty bucks extra a month. For furniture or anything humidity-sensitive, totally recommend it.",
            formalityVariants: {
              casual: "Yup, we got climate-controlled units, 55-80 degrees all year. Twenty bucks more a month. For furniture and anything delicate, totally recommend it.",
              standard: "Yes, we have climate-controlled units that maintain temperature between fifty-five and eighty degrees year-round. Those are twenty dollars more per month. For furniture and anything sensitive to humidity, I'd definitely recommend it.",
              formal: "Yes, we do offer climate-controlled units. These units consistently maintain a temperature range between fifty-five and eighty degrees Fahrenheit throughout the year. There is an additional charge of twenty dollars per month for these units. I would highly recommend this option for furniture and any items susceptible to damage from humidity fluctuations.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "仓储管理和问题",
        titleEn: "Storage Management and Issues",
        description: "管理仓储和处理相关问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to access my unit this weekend. What are your hours? And can I bring a truck to load things?",
            textZh: "这个周末我需要去仓库取东西。你们营业时间是什么？我可以开卡车来搬东西吗？",
            casualVersion: "Can I get in this weekend? And can I pull up with a truck?",
            commonMistake: {
              wrong: "What's your working time?",
              correct: "What are your hours?",
              explanation: "询问营业时间通常用 'What are your hours?' 或 'What are your operating hours?' 'Working time' 更常指个人工作时间。",
            },
            formalityVariants: {
              casual: "Gotta get to my unit this weekend. What're your hours? Can I just bring a truck?",
              standard: "I need to access my unit this weekend. What are your hours? And can I bring a truck to load things?",
              formal: "I will require access to my unit this coming weekend. Could you please provide your operating hours? Additionally, I would like to confirm if it is permissible to bring a truck for loading and unloading purposes.",
            },
          },
          {
            speaker: "them",
            role: "仓库店员",
            textEn: "Our gate access is available from six AM to ten PM every day, including weekends and holidays. You can drive right up to your unit — there's plenty of room for trucks. You'll need your access code to get through the gate.",
            textZh: "我们的大门每天早6点到晚10点开放，包括周末和节假日。你可以直接把车开到单元门口——有足够的卡车停靠空间。你需要门禁密码才能进入。",
            keyPhrases: [
              { en: "gate access", zh: "大门出入/门禁" },
              { en: "access code", zh: "门禁密码" },
            ],
            alternativeExpressions: [
              { textEn: "The gate's open six to ten every day, weekends too. You can pull the truck right up to your unit. Just punch in your access code at the gate.", textZh: "大门每天6点到10点开放，周末也是。可以把卡车直接开到你的单元旁边。在大门输入你的密码就行。", actionHint: "punch in 意思是输入（密码）", frequency: "common" },
            ],
            casualVersion: "Gate's open 6 AM to 10 PM daily, even weekends/holidays. You can drive right up to your unit, plenty of truck space. Just need your access code for the gate.",
            culturalNote: "在美国，自助仓储通常需要门禁密码（access code）来进入大门，以确保安全，这在其他国家可能不那么普遍。",
            formalityVariants: {
              casual: "Gate's open 6 AM to 10 PM daily, even weekends/holidays. Drive right up to your unit – lots of room for trucks. Just need your access code to get in.",
              standard: "Our gate access is available from six AM to ten PM every day, including weekends and holidays. You can drive right up to your unit — there's plenty of room for trucks. You'll need your access code to get through the gate.",
              formal: "Our facility gate provides access from six AM to ten PM daily, including weekends and public holidays. You are welcome to drive your vehicle directly to your unit; ample space is available for trucks. Please be advised that an access code will be required to enter the gate.",
            },
          },
          {
            speaker: "you",
            textEn: "I also want to add insurance for my stored items. What do you offer?",
            textZh: "我还想给存放的物品加保险。你们有什么选项？",
            casualVersion: "What about insurance for my stuff? Got any options?",
            culturalNote: "在美国，仓储保险是一个常见的附加服务，但许多人的房屋保险或租客保险可能已经包含对储藏物品的保障，所以建议先咨询自己的保险",
            commonMistake: {
              wrong: "I want to add insurance for my things.",
              correct: "I want to add insurance for my stored items.",
              explanation: "'Things' 过于笼统，'stored items' 更具体清晰。'I want to' 稍显直接，'I'd like to' 更礼貌。",
            },
            formalityVariants: {
              casual: "Wanna get insurance for my stuff too. What's available?",
              standard: "I also want to add insurance for my stored items. What do you offer?",
              formal: "I would also like to arrange for insurance coverage for my stored items. Could you please inform me of the insurance options available through your facility?",
            },
          },
          {
            speaker: "them",
            role: "仓库店员",
            textEn: "We offer tenant insurance starting at ten dollars a month for up to five thousand dollars in coverage. Higher coverage levels are available. Your homeowner's or renter's insurance might also cover stored items — I'd suggest checking with your provider first.",
            textZh: "我们提供租户保险，每月10美元起，覆盖最高5000美元。有更高的覆盖等级可选。您的房屋保险或租客保险可能也覆盖存放的物品——我建议先跟您的保险公司确认。",
            keyPhrases: [
              { en: "tenant insurance", zh: "租户保险" },
              { en: "coverage", zh: "保险覆盖/保额" },
            ],
            alternativeExpressions: [
              { textEn: "We've got insurance starting at ten bucks a month for up to five grand in coverage. But check your renter's insurance first — it might already cover your stuff in storage.", textZh: "保险每月10块起，最高保5000。但先查查你的租客保险——可能已经覆盖仓库里的东西了。", actionHint: "five grand 口语中表示5000美元", frequency: "common" },
            ],
            casualVersion: "We've got tenant insurance, starts at ten bucks a month for up to five grand in coverage. Can get more too. Your home or renter's insurance might cover it though, so maybe check with them first.",
            culturalNote: "美国的保险体系较为复杂，很多时候不同的保单之间有重叠或互补。此处的建议提醒顾客先咨询自己的已有保险，避免重复购买。",
            formalityVariants: {
              casual: "We got tenant insurance starting at ten bucks a month for five grand coverage. More's available. Your home/renter's insurance might cover it, so check with them first.",
              standard: "We offer tenant insurance starting at ten dollars a month for up to five thousand dollars in coverage. Higher coverage levels are available. Your homeowner's or renter's insurance might also cover stored items — I'd suggest checking with your provider first.",
              formal: "We provide tenant insurance, with options beginning at ten dollars per month for coverage up to five thousand dollars. More comprehensive coverage levels are also accessible. It is advisable to consult with your existing homeowner's or renter's insurance provider, as your policy may already extend coverage to items stored off-premises.",
            },
          },
          {
            speaker: "you",
            textEn: "What happens if I need to cancel my rental? Is there a minimum commitment?",
            textZh: "如果我需要取消租用怎么办？有最低租期要求吗？",
            casualVersion: "What if I want to cancel? Am I locked in for a certain time?",
            commonMistake: {
              wrong: "What happen if I want to cancel?",
              correct: "What happens if I need to cancel my rental?",
              explanation: "口语中 'What happen?' 语法不正确，应是 'What happens?'。'Want to' 不如 'need to' 委婉，'cancel my rental' 比 'cancel' 更具体。",
            },
            formalityVariants: {
              casual: "So, what if I gotta cancel? Is there like, a minimum time?",
              standard: "What happens if I need to cancel my rental? Is there a minimum commitment?",
              formal: "Could you please inform me of the cancellation policy for the rental agreement? Is there a minimum commitment period required?",
            },
          },
          {
            speaker: "them",
            role: "仓库店员",
            textEn: "No long-term commitment required — it's month-to-month. Just give us a two-week notice before your next billing date. Make sure to empty the unit completely and remove your lock. We'll do a walkthrough and refund your deposit if everything's in good shape.",
            textZh: "不需要长期承诺——按月租。只需在下一个账单日前两周通知我们。确保完全清空单元并取走你的锁。我们会做一次检查，如果一切正常就退还押金。",
            keyPhrases: [
              { en: "month-to-month", zh: "按月租/不签长约" },
              { en: "walkthrough", zh: "检查/巡视" },
            ],
            alternativeExpressions: [
              { textEn: "Nope, no contract. It's month to month. Just let us know two weeks before you're out, clear everything out, take your lock, and we'll give you your deposit back after a quick check.", textZh: "没有合同。按月租。提前两周通知我们要走，清空所有东西，拿走锁，我们快速检查后退押金。", actionHint: "no contract 意思是没有长期合同约束", frequency: "common" },
            ],
            casualVersion: "No long-term commitment needed, it's month-to-month. Just give us two weeks' heads-up before your next bill. Make sure the unit's totally empty and your lock's off. We'll check it out and refund your deposit if it's all good.",
            culturalNote: "美国仓储通常是按月租用（month-to-month），且有明确的取消通知期（two-week notice）。退租时需",
            formalityVariants: {
              casual: "Nope, no long-term commitment, it's month-to-month. Just give us two weeks' notice before your next bill. Empty the unit completely, take your lock off. We'll check it, refund your deposit if all's good.",
              standard: "No long-term commitment required — it's month-to-month. Just give us a two-week notice before your next billing date. Make sure to empty the unit completely and remove your lock. We'll do a walkthrough and refund your deposit if everything's in good shape.",
              formal: "There is no long-term commitment necessary; our agreements are on a month-to-month basis. We simply require a two-week notice prior to your subsequent billing date. Please ensure the unit is completely vacated and your personal lock has been removed. Upon inspection, should the unit be found in satisfactory condition, your deposit will be fully refunded.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 15. 房屋装修 ====================
  {
    id: "housing-home-renovation",
    category: "housing",
    titleZh: "房屋装修",
    titleEn: "Home Renovation",
    description: "与承包商讨论房屋装修计划和报价",
    otherRole: "承包商",
    otherRoleIcon: "🔨",
    flows: [
      {
        id: "basic",
        titleZh: "基本装修咨询",
        titleEn: "Basic Renovation Consultation",
        description: "第一次与装修承包商见面沟通",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking to remodel my kitchen. Can you come take a look and give me an estimate?",
            textZh: "你好，我想翻新厨房。你能来看看给个估价吗？",
            casualVersion: "Hey, I want to redo my kitchen. Can you come check it out and give me a price?",
            culturalNote: "“estimate”是估价，提供一个大概范围；“quote”是明确报价。在美国装修通常先要estimate。",
            commonMistake: {
              wrong: "Hi, I want to remodel my kitchen. Can you come take a look and give me an estimate?",
              correct: "Hi, I'd like to remodel my kitchen. Can you come take a look and give me an estimate?",
              explanation: "“I want to” 听起来较直接生硬，用 “I'd like to” 更礼貌客气。",
            },
            formalityVariants: {
              casual: "Hey, wanna remodel my kitchen. Can you swing by and give me an estimate?",
              standard: "Hi, I'm looking to remodel my kitchen. Can you come take a look and give me an estimate?",
              formal: "Good morning/afternoon, I am interested in commencing a kitchen remodeling project. Would it be possible for you to visit my property to assess the scope of work and provide a preliminary estimate?",
            },
          },
          {
            speaker: "them",
            role: "承包商",
            textEn: "Sure, I'd be happy to take a look. What kind of remodel are you thinking — a cosmetic update with new countertops and paint, or a full gut renovation with new cabinets, plumbing, and layout changes?",
            textZh: "当然，我很乐意来看看。您想做什么样的翻新——换台面和油漆的外观升级，还是包括新橱柜、管道和布局改动的全面翻新？",
            keyPhrases: [
              { en: "cosmetic update", zh: "外观/表面升级" },
              { en: "gut renovation", zh: "全面翻新/大改" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, let me swing by. Are you thinking more like a facelift — new counters, fresh paint — or are we tearing everything out and starting over?", textZh: "好的，我过来看看。你想的是表面翻新——换台面、刷漆——还是全部拆了重来？", actionHint: "facelift 在装修中指表面翻新, tearing everything out 指全部拆除", frequency: "common" },
            ],
            casualVersion: "Yeah, happy to check it out. What kinda remodel you thinking? Just a cosmetic update, new counters and paint? Or a full gut job with new cabinets, plumbing, layout stuff?",
            formalityVariants: {
              casual: "Yeah, happy to check it out. What kinda remodel you thinking? Just a cosmetic update, new counters and paint? Or a full gut job with new cabinets, plumbing, layout stuff?",
              standard: "Sure, I'd be happy to take a look. What kind of remodel are you thinking — a cosmetic update with new countertops and paint, or a full gut renovation with new cabinets, plumbing, and layout changes?",
              formal: "Certainly, I would be pleased to conduct an on-site assessment. Could you elaborate on the scope of the desired renovation – specifically, are you contemplating a superficial aesthetic enhancement, such as new countertops and paint, or a comprehensive structural overhaul encompassing new cabinetry, plumbing, and alterations to the existing layout?",
            },
          },
          {
            speaker: "you",
            textEn: "I'd like new cabinets, countertops, and updated appliances. But I want to keep the same layout.",
            textZh: "我想要新橱柜、新台面和新家电。但布局保持不变。",
            casualVersion: "New cabinets, counters, and appliances. Same layout though.",
            commonMistake: {
              wrong: "I want new cabinets, countertops, and updated appliances. But I want to keep the same layout.",
              correct: "I'd like new cabinets, countertops, and updated appliances. But I want to keep the same layout.",
              explanation: "“I want to” 在美国听起来略显生硬，用 “I'd like to” 更自然客气。",
            },
            formalityVariants: {
              casual: "Yeah, new cabinets, counters, and updated appliances. But wanna keep the layout as is.",
              standard: "I'd like new cabinets, countertops, and updated appliances. But I want to keep the same layout.",
              formal: "My preference would be to install new cabinetry, countertops, and updated appliances. However, I wish to retain the existing kitchen layout.",
            },
          },
          {
            speaker: "them",
            role: "承包商",
            textEn: "Good, keeping the layout saves a lot on plumbing and electrical work. For a mid-range kitchen remodel like that — new cabinets, quartz countertops, and standard appliances — you're looking at roughly twenty to thirty-five thousand dollars, depending on the materials you choose.",
            textZh: "好的，保持布局不变能省很多管道和电路工程费。像这样的中档厨房翻新——新橱柜、石英台面和标准家电——大约20000到35000美元，取决于你选择的材料。",
            keyPhrases: [
              { en: "quartz countertops", zh: "石英台面" },
              { en: "mid-range remodel", zh: "中档翻新" },
            ],
            alternativeExpressions: [
              { textEn: "Smart move — same layout means no moving pipes or wires, which saves you a bunch. For everything you described, ballpark twenty to thirty-five K. Could be more or less depending on what materials you go with.", textZh: "聪明的选择——同样的布局意味着不用动管道和电线，省很多。你说的这些，大概2万到3.5万。用什么材料可能上下浮动。", actionHint: "saves you a bunch 意思是省很多, go with 意思是选择", frequency: "common" },
            ],
            casualVersion: "Nice, keeping the layout saves a ton on plumbing and electrical. For a mid-range kitchen remodel like that — new cabinets, quartz counters, standard appliances — you're looking at maybe twenty to thirty-five grand, depends on materials.",
            formalityVariants: {
              casual: "Nice, keeping the layout saves a ton on plumbing and electrical. For a mid-range kitchen remodel like that — new cabinets, quartz counters, standard appliances — you're looking at maybe twenty to thirty-five grand, depends on materials.",
              standard: "Good, keeping the layout saves a lot on plumbing and electrical work. For a mid-range kitchen remodel like that — new cabinets, quartz countertops, and standard appliances — you're looking at roughly twenty to thirty-five thousand dollars, depending on the materials you choose.",
              formal: "Excellent. Retaining the existing layout significantly mitigates costs associated with plumbing and electrical modifications. For a renovation of this specified scope – incorporating new cabinetry, quartz countertops, and standard appliances – the estimated investment would range from approximately twenty thousand to thirty-five thousand dollars, contingent upon material selections.",
            },
          },
          {
            speaker: "you",
            textEn: "How long would the whole project take from start to finish?",
            textZh: "整个项目从开始到结束需要多长时间？",
            casualVersion: "How long is this gonna take?",
            commonMistake: {
              wrong: "How long time would the whole project take from start to finish?",
              correct: "How long would the whole project take from start to finish?",
              explanation: "“How long” 已包含“时间”含义，无需再加 “time” 一词。",
            },
            formalityVariants: {
              casual: "How long's the whole thing gonna take?",
              standard: "How long would the whole project take from start to finish?",
              formal: "Could you please provide an estimated duration for the entire project, from commencement to completion?",
            },
          },
          {
            speaker: "them",
            role: "承包商",
            textEn: "For a kitchen remodel of this scope, typically six to eight weeks once we start. That includes demolition, installation, and finishing work. There's usually a two-to-three-week lead time for ordering cabinets before we can begin.",
            textZh: "这种规模的厨房翻新，开工后通常需要6到8周。包括拆除、安装和收尾工作。订购橱柜通常有2到3周的提前期，之后才能开工。",
            keyPhrases: [
              { en: "lead time", zh: "提前期/等待时间" },
              { en: "demolition", zh: "拆除" },
            ],
            alternativeExpressions: [
              { textEn: "Once we get going, about six to eight weeks. But cabinets usually take two to three weeks to come in, so plan on about two to three months total from when you say go.", textZh: "开工后大约6到8周。但橱柜通常要2到3周才能到货，所以从你决定开始算，总共大约2到3个月。", actionHint: "get going 意思是开始/动工", frequency: "common" },
            ],
            culturalNote: "在美国找装修承包商，一定要确认他们有执照（licensed）和保险（insured）。建议至少拿三个报价对比，并查看他们之前的项目和客户评价。",
            casualVersion: "For a kitchen remodel like this, usually six to eight weeks once we kick off. That's demo, install, and finishing. Plus, usually a two-to-three-week lead time just for ordering cabinets before we can even start.",
            formalityVariants: {
              casual: "For a kitchen remodel like this, usually six to eight weeks once we kick off. That's demo, install, and finishing. Plus, usually a two-to-three-week lead time just for ordering cabinets before we can even start.",
              standard: "For a kitchen remodel of this scope, typically six to eight weeks once we start. That includes demolition, installation, and finishing work. There's usually a two-to-three-week lead time for ordering cabinets before we can begin.",
              formal: "A kitchen renovation of this particular scope typically requires a duration of six to eight weeks subsequent to commencement. This encompasses demolition, installation, and final finishing work. Furthermore, a preliminary lead time of two to three weeks is generally necessary for the procurement of cabinetry prior to project initiation.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "处理装修变更和问题",
        titleEn: "Handling Changes and Issues",
        description: "装修过程中处理变更和意外问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We're into week three and I was wondering — can I change the countertop material from quartz to granite? How would that affect the timeline and cost?",
            textZh: "已经到第三周了，我想问——台面材料可以从石英换成花岗岩吗？这会怎样影响时间和费用？",
            casualVersion: "Hey, we're three weeks in. Can I switch to granite countertops instead? What does that do to the price and schedule?",
            commonMistake: {
              wrong: "We're into week three and I want to change the countertop material from quartz to granite? How would that affect the timeline and cost?",
              correct: "We're into week three and I was wondering — can I change the countertop material from quartz to granite? How would that affect the timeline and cost?",
              explanation: "直接说“I want to” 在美国语境下略显直接，用疑问句或“I was wondering” 更委婉有礼。",
            },
            formalityVariants: {
              casual: "So, we're in week three, and I was thinking — can we switch the counters from quartz to granite? What's that do to the time and cost?",
              standard: "We're into week three and I was wondering — can I change the countertop material from quartz to granite? How would that affect the timeline and cost?",
              formal: "We are currently in the third week of the project, and I would like to inquire about the feasibility of altering the countertop material from quartz to granite. Additionally, could you please advise on the potential implications this change would have on both the project timeline and the overall cost?",
            },
          },
          {
            speaker: "them",
            role: "承包商",
            textEn: "We can make that change, but since the quartz slabs were already ordered, there'll be a restocking fee of about fifteen percent. Granite is actually a bit cheaper per square foot, but the switch could delay things by about a week while we source and fabricate the new material.",
            textZh: "可以更换，但由于石英板已经订了，会有大约15%的退货费。花岗岩每平方英尺实际上便宜一些，但更换可能会延迟大约一周，因为需要采购和加工新材料。",
            keyPhrases: [
              { en: "restocking fee", zh: "退货费/补货费" },
              { en: "fabricate", zh: "加工/制作" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, we can do that, but the quartz is already ordered so there's a restocking charge — about fifteen percent. Granite's a little cheaper, but it'll push the schedule back about a week to get it cut and ready.", textZh: "可以，但石英已经订了，会有退货费——大约15%。花岗岩便宜一点，但要多等大约一周来切割和准备。", actionHint: "push the schedule back 意思是延迟工期", frequency: "common" },
            ],
            casualVersion: "Yeah, we can totally change it, but since we already ordered the quartz slabs, there'll be a fifteen percent restocking fee. Granite's actually a little cheaper per square foot, but switching could still push things back about a week while we get the new stuff.",
            formalityVariants: {
              casual: "Yeah, we can totally change it, but since we already ordered the quartz slabs, there'll be a fifteen percent restocking fee. Granite's actually a little cheaper per square foot, but switching could still push things back about a week while we get the new stuff.",
              standard: "We can make that change, but since the quartz slabs were already ordered, there'll be a restocking fee of about fifteen percent. Granite is actually a bit cheaper per square foot, but the switch could delay things by about a week while we source and fabricate the new material.",
              formal: "Yes, that modification is permissible; however, as the quartz slabs have already been procured, a restocking fee of approximately fifteen percent will apply. While granite is marginally less expensive per square foot, implementing this alteration would likely result in a project delay of approximately one week, owing to the time required for sourcing and fabrication of the new material.",
            },
          },
          {
            speaker: "you",
            textEn: "We also found some water damage behind the old cabinets. How much extra will that cost to fix?",
            textZh: "我们在旧橱柜后面还发现了水渍损坏。修这个额外要多少钱？",
            casualVersion: "Also, there's water damage behind the old cabinets. How much more is that gonna be?",
            commonMistake: {
              wrong: "We also found some water damage behind the old cabinets. How much extra that cost to fix?",
              correct: "We also found some water damage behind the old cabinets. How much extra will that cost to fix?",
              explanation: "询问未来费用时需要助动词 “will”；“how much” 已包含“钱”的意思。",
            },
            formalityVariants: {
              casual: "Oh, also found some water damage behind the old cabinets. What's that gonna cost to fix?",
              standard: "We also found some water damage behind the old cabinets. How much extra will that cost to fix?",
              formal: "Additionally, we have discovered evidence of water damage situated behind the original cabinetry. Could you please provide an estimate for the supplementary costs associated with its remediation?",
            },
          },
          {
            speaker: "them",
            role: "承包商",
            textEn: "That's pretty common in older kitchens. We need to replace the damaged drywall and check for mold behind it. If it's just the drywall, we're looking at five hundred to a thousand extra. If there's mold remediation needed, that could be more — I'll know once we open it up.",
            textZh: "这在老厨房里很常见。我们需要更换损坏的石膏板，检查后面是否有霉菌。如果只是石膏板，额外500到1000美元。如果需要除霉，可能更多——打开看了才知道。",
            keyPhrases: [
              { en: "drywall", zh: "石膏板/干墙" },
              { en: "mold remediation", zh: "除霉处理" },
            ],
            alternativeExpressions: [
              { textEn: "See that a lot in older homes. We'll rip out the bad drywall and check for mold. If it's just the wall, maybe five hundred to a grand. Mold treatment would be extra — won't know till we dig in.", textZh: "老房子经常有这种情况。我们会拆掉坏的石膏板检查有没有霉菌。如果只是墙面，大概500到1000。除霉的话额外收费——要打开看了才知道。", actionHint: "rip out 意思是拆除, dig in 这里指深入检查", frequency: "common" },
            ],
            casualVersion: "Yeah, that's super common in old kitchens. Gotta swap out the damaged drywall and check for mold back there. If it's just the drywall, you're probably looking at five hundred to a grand extra. If mold remediation's needed, could be more — I'll know once we get it open.",
            formalityVariants: {
              casual: "Yeah, that's super common in old kitchens. Gotta swap out the damaged drywall and check for mold back there. If it's just the drywall, you're probably looking at five hundred to a grand extra. If mold remediation's needed, could be more — I'll know once we get it open.",
              standard: "That's pretty common in older kitchens. We need to replace the damaged drywall and check for mold behind it. If it's just the drywall, we're looking at five hundred to a thousand extra. If there's mold remediation needed, that could be more — I'll know once we open it up.",
              formal: "Such occurrences are quite prevalent in older kitchen installations. Our protocol necessitates the replacement of the compromised drywall and a thorough inspection for the presence of mold. Should the issue be confined solely to drywall replacement, the additional cost would range from five hundred to one thousand dollars. However, if mold remediation becomes necessary, the costs could escalate; I will be able to provide a precise assessment once we have exposed the affected area.",
            },
          },
          {
            speaker: "you",
            textEn: "Will you provide a written change order for these additional costs before you proceed?",
            textZh: "在继续之前你会提供书面的变更单吗，列出这些额外费用？",
            casualVersion: "Can you put together a change order before you move forward?",
            culturalNote: "变更单 (change order) 是正式施工合同的修改文件。美国装修非常看重书面记录，任何改动都会通过change ",
            commonMistake: {
              wrong: "Will you offer a written change order for these additional costs before you proceed?",
              correct: "Will you provide a written change order for these additional costs before you proceed?",
              explanation: "“provide” 更常用于正式地提供文件或服务，比 “offer” 或 “give” 更专业。",
            },
            formalityVariants: {
              casual: "So, will you give me a written change order for these extra costs before you do the work?",
              standard: "Will you provide a written change order for these additional costs before you proceed?",
              formal: "Could you please ensure that a formal written change order detailing these supplementary costs is furnished prior to the commencement of any further work?",
            },
          },
          {
            speaker: "them",
            role: "承包商",
            textEn: "Absolutely. I always do a written change order for any work outside the original contract. It'll list the additional scope, cost, and any impact on the timeline. I won't proceed until you review and sign off on it.",
            textZh: "当然。任何超出原始合同的工作我都会出书面变更单。上面会列出额外的工作范围、费用和对工期的影响。在您审阅并签字同意之前我不会动工。",
            keyPhrases: [
              { en: "change order", zh: "变更单" },
              { en: "sign off on it", zh: "签字同意" },
            ],
            alternativeExpressions: [
              { textEn: "For sure — nothing happens without your sign-off. I'll put it all in writing — what's changing, what it costs, and how it affects the schedule. Once you're good with it, we move forward.", textZh: "没问题——你不签字什么都不会动。我会全部写下来——改什么、花多少、怎么影响工期。你同意了我们才继续。", actionHint: "once you're good with it 意思是一旦你同意了", frequency: "common" },
            ],
            casualVersion: "Yep, for sure. Always do a written change order for anything outside the original contract. It'll list the extra work, cost, and any timeline hit. Won't move forward till you review and sign off.",
            formalityVariants: {
              casual: "Yep, for sure. Always do a written change order for anything outside the original contract. It'll list the extra work, cost, and any timeline hit. Won't move forward till you review and sign off.",
              standard: "Absolutely. I always do a written change order for any work outside the original contract. It'll list the additional scope, cost, and any impact on the timeline. I won't proceed until you review and sign off on it.",
              formal: "Without exception. It is my consistent practice to issue a formal written change order for any services rendered beyond the purview of the initial contract. This document will delineate the expanded scope of work, associated costs, and any consequential effects on the project timeline. I assure you that no further action will be taken until your thorough review and formal authorization.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 16. 看租房广告 ====================
  {
    id: "housing-reading-listing",
    category: "housing",
    tags: ["rental", "listing", "abbreviation", "租房广告", "缩写", "1BR", "W/D", "A/C"],
    titleZh: "看租房广告",
    titleEn: "Reading a Rental Listing",
    description: "理解租房广告中的常见缩写和术语，询问房源详情",
    otherRole: "房东/物业经理",
    otherRoleIcon: "🏘️",
    flows: [
      {
        id: "basic",
        titleZh: "询问广告缩写含义",
        titleEn: "Asking About Listing Abbreviations",
        description: "打电话询问租房广告中看不懂的缩写",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm calling about the apartment listing on Zillow. The one on Oak Street? I had a few questions about it.",
            textZh: "你好，我打电话是关于 Zillow 上的那个公寓广告。Oak Street 那个？我有几个问题想问。",
            casualVersion: "Hey, calling about that apartment you posted on Zillow — the one on Oak Street?",
            culturalNote: "在美国，租房主要通过 Zillow、Apartments.com、Craigslist 等平台找房。不像中国主要用链家、贝壳等中介，美国很多房东自己发布广告。",
            commonMistake: {
              wrong: "Hello, I want to ask the apartment on Zillow.",
              correct: "Hi, I'm calling about the apartment listing on Zillow.",
              explanation: "“calling about” 是电话询问的标准说法。“ask” 不能直接接宾语表示“询问关于...”，应该说 “ask about”。",
            },
            formalityVariants: {
              casual: "Hey, calling about that Oak Street apartment on Zillow.",
              standard: "Hi, I'm calling about the apartment listing on Zillow. The one on Oak Street? I had a few questions about it.",
              formal: "Good afternoon, I am inquiring about the rental listing posted on Zillow for the property on Oak Street. Would you have a moment to answer some questions?",
            },
          },
          {
            speaker: "them",
            role: "房东/物业经理",
            textEn: "Sure! That one's a 1BR/1BA, seven-fifty a month. What would you like to know?",
            textZh: "当然！那个是一室一卫，每月750美元。你想了解什么？",
            keyPhrases: [
              { en: "1BR/1BA", zh: "一室一卫（1 Bedroom / 1 Bathroom）" },
              { en: "seven-fifty a month", zh: "每月750美元" },
            ],
          },
          {
            speaker: "you",
            textEn: "The listing says W/D in unit and A/C included. Does that mean there's a washer and dryer inside the apartment, and the air conditioning is already installed?",
            textZh: "广告上写着 W/D in unit 和 A/C included。意思是公寓里面有洗衣机和烘干机，而且空调已经装好了吗？",
            casualVersion: "So it says W/D in unit — that's a washer and dryer inside, right? And A/C included means AC's already there?",
            keyPhrases: [
              { en: "W/D in unit", zh: "室内洗烘一体（Washer/Dryer in unit）" },
              { en: "A/C included", zh: "含空调（Air Conditioning included）" },
            ],
            culturalNote: "美国租房广告大量使用缩写：W/D（洗烘）、A/C（空调）、BR（卧室）、BA（卫生间）、sq ft（平方英尺）、util（水电）、sec dep（押金）。中国没有这套缩写体系，需要专门学习。",
            commonMistake: {
              wrong: "What means W/D in unit?",
              correct: "What does W/D in unit mean?",
              explanation: "疑问句需要助动词 “does”。“What means...” 是常见的中式英语错误。",
            },
            formalityVariants: {
              casual: "W/D in unit — that's washer-dryer inside, yeah? And A/C's already there?",
              standard: "The listing says W/D in unit and A/C included. Does that mean there's a washer and dryer inside the apartment, and the air conditioning is already installed?",
              formal: "I noticed the listing mentions 'W/D in unit' and 'A/C included.' Could you please confirm that a washer and dryer are provided within the apartment, and that the air conditioning system is already installed?",
            },
          },
          {
            speaker: "them",
            role: "房东/物业经理",
            textEn: "Yep, that's right. Full-size washer and dryer in a little closet off the kitchen. And central air — you just control it with the thermostat on the wall.",
            textZh: "是的，没错。厨房旁边的小壁橱里有全尺寸洗衣机和烘干机。中央空调——你用墙上的温控器控制就行。",
            keyPhrases: [
              { en: "full-size washer and dryer", zh: "全尺寸洗衣机和烘干机" },
              { en: "central air", zh: "中央空调" },
              { en: "thermostat", zh: "温控器" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, there's a stackable washer-dryer in a closet by the kitchen. AC is central — just set the thermostat and you're good.", textZh: "是的，厨房旁边壁橱里有叠放式洗烘。空调是中央的——设好温控器就行。", actionHint: "stackable 指上下叠放式; you're good 意思是搞定了", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. And the listing also says no pets and first/last/sec dep. What exactly is sec dep?",
            textZh: "好的。广告还写了 no pets 和 first/last/sec dep。sec dep 到底是什么意思？",
            casualVersion: "Cool. It also says first, last, sec dep. What's sec dep mean?",
            keyPhrases: [
              { en: "sec dep", zh: "安全押金（security deposit）" },
              { en: "first/last", zh: "首月和末月房租" },
            ],
            commonMistake: {
              wrong: "What is the meaning of sec dep?",
              correct: "What exactly is sec dep?",
              explanation: "“What is the meaning of...” 虽然语法正确但过于正式和教科书化。日常对话用 “What is...” 或 “What does ... mean?” 更自然。",
            },
            formalityVariants: {
              casual: "What's sec dep? Never seen that before.",
              standard: "What exactly is sec dep?",
              formal: "Could you please clarify what 'sec dep' refers to in the listing?",
            },
          },
          {
            speaker: "them",
            role: "房东/物业经理",
            textEn: "Sec dep is security deposit — it's basically a damage deposit. For this unit, it's one month's rent. So to move in, you'd need first month's rent, last month's rent, and the security deposit. That's twenty-two fifty total upfront.",
            textZh: "Sec dep 就是 security deposit——基本就是损坏押金。这个单元是一个月的房租。所以入住时你需要付首月房租、末月房租和押金。总共预付2250美元。",
            keyPhrases: [
              { en: "security deposit", zh: "安全押金/损坏押金" },
              { en: "upfront", zh: "预付/先付" },
              { en: "first month's rent", zh: "首月房租" },
            ],
            culturalNote: "美国租房预付费用比中国高很多。常见的 “first/last/security” 意味着要预付三个月的房租金额。在中国通常是“押一付三”，但美国不会按月收三个月，而是首月+末月+押金一次性交。",
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "对比房源和了解条款",
        titleEn: "Comparing Listings and Understanding Terms",
        description: "比较不同房源，理解水电费、宠物押金、信用要求等条款",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm comparing two apartments. One says utilities included and the other says tenant pays utilities. Can you break down what's actually covered in yours?",
            textZh: "我在比较两个公寓。一个写 utilities included，另一个写 tenant pays utilities。你能详细说说你们这个包含哪些？",
            casualVersion: "So yours says utilities included — what all does that actually cover?",
            keyPhrases: [
              { en: "utilities included", zh: "包含水电费" },
              { en: "tenant pays utilities", zh: "租客自付水电" },
              { en: "break down", zh: "详细说明" },
            ],
            commonMistake: {
              wrong: "Can you explain me what utilities included means?",
              correct: "Can you break down what's actually covered?",
              explanation: "“explain me” 是语法错误，应该是 “explain to me”。但更地道的说法是 “break down”，意思是分项说明。",
            },
            formalityVariants: {
              casual: "So what does utilities included actually mean for your place? Like, everything?",
              standard: "Can you break down what's actually covered when the listing says utilities included?",
              formal: "I would appreciate it if you could provide a detailed breakdown of which utilities are encompassed in the listed rental price.",
            },
          },
          {
            speaker: "them",
            role: "房东/物业经理",
            textEn: "Sure. Our utilities included covers water, sewer, and trash pickup. But you'd be responsible for electricity and internet. Gas is also on you if you use the heater a lot in winter.",
            textZh: "当然。我们的 utilities included 包括水费、下水道费和垃圾清运。但电费和网络需要你自己负责。如果冬天用暖气多的话，燃气也是你自己付。",
            keyPhrases: [
              { en: "water, sewer, and trash", zh: "水费、下水道费和垃圾清运" },
              { en: "responsible for", zh: "自己负责" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, we cover water, sewer, trash. Electric and internet are on you though. Same with gas if you're cranking the heat in winter.", textZh: "我们包水费、下水道、垃圾。但电和网络你自己出。冬天狂开暖气的话燃气也是你的。", actionHint: "on you 意思是你的责任; cranking the heat 意思是大开暖气", frequency: "common" },
            ],
            culturalNote: "在中国，物业费通常涵盖公共区域维护。美国的 “utilities included” 每个房东包含的项目不同，必须逐项确认。有些只包水和垃圾，有些全包。搬入前一定要问清楚。",
          },
          {
            speaker: "you",
            textEn: "Got it. I also noticed the listing says credit score of 650 or above required. I recently moved to the US and my credit score isn't that high yet. Is there any flexibility on that?",
            textZh: "明白了。我还注意到广告上写要求信用分650以上。我最近才搬到美国，信用分还没那么高。这个有商量的余地吗？",
            casualVersion: "My credit score's not at 650 yet — I just moved here. Is there any wiggle room on that?",
            keyPhrases: [
              { en: "credit score", zh: "信用分" },
              { en: "flexibility", zh: "灵活性/商量余地" },
            ],
            commonMistake: {
              wrong: "My credit score is not enough. Can you lower the requirement?",
              correct: "My credit score isn't that high yet. Is there any flexibility on that?",
              explanation: "“not enough” 太直白且含义模糊。用 “isn't that high yet” 更委婉，暗示在提升中。“flexibility” 比 “lower the requirement” 更有协商感。",
            },
            formalityVariants: {
              casual: "So my credit's not at 650 yet — just got to the US. Any wiggle room there?",
              standard: "My credit score isn't that high yet since I recently moved to the US. Is there any flexibility on that requirement?",
              formal: "As a recent arrival to the United States, my credit history is still in its early stages and has not yet reached the 650 threshold. Would there be any flexibility regarding this requirement?",
            },
          },
          {
            speaker: "them",
            role: "房东/物业经理",
            textEn: "We can sometimes work with that. If you can show proof of income — like pay stubs or an employment letter — and offer a larger security deposit, say two months instead of one, we might be able to make it work. Do you have a co-signer by any chance?",
            textZh: "有时候可以商量。如果你能提供收入证明——比如工资单或雇主信——再多交一些押金，比如两个月而不是一个月，我们也许可以通融。你有担保人吗？",
            keyPhrases: [
              { en: "proof of income", zh: "收入证明" },
              { en: "pay stubs", zh: "工资单" },
              { en: "co-signer", zh: "担保人/连带签署人" },
              { en: "larger security deposit", zh: "更多的押金" },
            ],
            alternativeExpressions: [
              { textEn: "It depends. If you can prove steady income and maybe put down a bigger deposit — like two months instead of one — we could probably work something out. Got anyone who could co-sign?", textZh: "看情况。如果你能证明稳定收入，再多交点押金——比如两个月——我们大概能想办法。有人能做担保人吗？", actionHint: "work something out 意思是想办法解决; put down 这里指支付/交纳", frequency: "common" },
            ],
            culturalNote: "美国信用体系对新移民很不友好。中国的芝麻信用分无法转移到美国。新来者通常需要从零开始建立信用，可以通过 secured credit card（担保信用卡）开始。租房时常需要额外押金或担保人来弥补信用不足。",
          },
          {
            speaker: "you",
            textEn: "I don't have a co-signer, but I can provide bank statements showing my savings and an employment verification letter from my company. Would that work with a two-month deposit?",
            textZh: "我没有担保人，但我可以提供银行流水证明存款，还有公司的雇佣证明信。配上两个月的押金可以吗？",
            casualVersion: "No co-signer, but I've got bank statements and a letter from my employer. Would that plus two months' deposit do it?",
            commonMistake: {
              wrong: "I have no co-signer but I can give bank statement and employ letter. Is two months deposit OK?",
              correct: "I don't have a co-signer, but I can provide bank statements showing my savings and an employment verification letter. Would that work with a two-month deposit?",
              explanation: "“bank statements” 用复数（多份）。“employment verification letter” 是标准说法，不是 “employ letter”。“Would that work” 比 “Is ... OK” 更自然。",
            },
            formalityVariants: {
              casual: "I don't have a co-signer, but I can show you bank statements and a letter from work. Two months' deposit cool?",
              standard: "I don't have a co-signer, but I can provide bank statements showing my savings and an employment verification letter from my company. Would that work with a two-month deposit?",
              formal: "Unfortunately, I do not have a co-signer available. However, I am prepared to furnish bank statements demonstrating my financial reserves, along with an employment verification letter from my employer. Would these documents, in conjunction with a two-month security deposit, satisfy the application requirements?",
            },
          },
          {
            speaker: "them",
            role: "房东/物业经理",
            textEn: "That should be fine. Bring those documents when you come for the viewing, and we can start the application process right away. There's a thirty-five dollar application fee, just so you know.",
            textZh: "应该可以。看房的时候把那些材料带来，我们可以马上开始申请流程。另外提醒一下，有35美元的申请费。",
            keyPhrases: [
              { en: "application fee", zh: "申请费" },
              { en: "viewing", zh: "看房" },
              { en: "application process", zh: "申请流程" },
            ],
            culturalNote: "美国租房申请费（application fee）通常 25-75 美元，且不可退还（non-refundable），即使申请被拒也不退。这在中国是没有的。有些州已经立法限制申请费金额。",
          },
        ],
      },
    ],
  },

  // ==================== 17. 信用检查 ====================
  {
    id: "housing-credit-check",
    category: "housing",
    tags: ["credit", "信用", "credit check", "信用检查", "no credit", "deposit", "co-signer"],
    titleZh: "信用检查",
    titleEn: "Explaining No Credit History",
    description: "向房东解释没有美国信用记录的情况并提出替代方案",
    otherRole: "房东",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "basic",
        titleZh: "解释没有信用记录",
        titleEn: "Explaining No Credit History",
        description: "向房东说明自己刚到美国没有信用记录",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "房东",
            textEn: "So as part of the application, we run a standard credit check. I'll need your Social Security number and consent to pull your credit report. Is that okay?",
            textZh: "作为申请的一部分，我们会做标准的信用检查。我需要你的社保号码和授权来调取你的信用报告。可以吗？",
            keyPhrases: [
              { en: "credit check", zh: "信用检查" },
              { en: "Social Security number", zh: "社保号码（SSN）" },
              { en: "pull your credit report", zh: "调取信用报告" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, I'm fine with that. But I should let you know upfront — I moved to the US about six months ago, so I don't have much of a credit history here yet.",
            textZh: "没问题。但我想先跟你说明一下——我大约六个月前搬到美国，所以在这里还没有太多信用记录。",
            casualVersion: "Yeah, that's fine. Just a heads up though — I moved here about six months ago, so my credit history's basically nonexistent.",
            culturalNote: "在中国，没有类似美国这样的个人信用分数体系（虽然有征信报告）。美国的 FICO 信用分范围 300-850，租房一般要求 620-700。新移民初始可能没有任何分数（称为 “thin file” 或 “no file”），这比低分还难处理。",
            commonMistake: {
              wrong: "I just come to America so I have no credit history.",
              correct: "I moved to the US about six months ago, so I don't have much of a credit history here yet.",
              explanation: "“just come” 时态错误，应该用过去式 “just came” 或完成时 “have just come”。“I have no” 过于绝对，用 “don't have much of a ... yet” 更委婉，暗示正在建立中。",
            },
            formalityVariants: {
              casual: "Yeah no problem. Heads up though, I moved here like six months ago so I basically have no credit yet.",
              standard: "Sure, I'm fine with that. But I should let you know upfront — I moved to the US about six months ago, so I don't have much of a credit history here yet.",
              formal: "Certainly, I have no objections. However, I feel it's important to disclose that I relocated to the United States approximately six months ago, and as a result, my domestic credit history is quite limited at this time.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Hmm, that could be an issue. We typically require a credit score of at least 650. What would show up if I ran a check?",
            textZh: "嗯，这可能有点问题。我们通常要求信用分至少650。如果我查的话会显示什么？",
            keyPhrases: [
              { en: "credit score of at least 650", zh: "至少650的信用分" },
              { en: "ran a check", zh: "做检查/查一下" },
            ],
          },
          {
            speaker: "you",
            textEn: "Honestly, probably not much. I have a secured credit card that I've been using for a few months, but that's about it. I understand the concern — back in my home country I had excellent credit, but unfortunately that doesn't transfer over.",
            textZh: "说实话，可能显示不了什么。我有一张担保信用卡用了几个月，但就这些了。我理解你的顾虑——在我的国家我信用非常好，但很遗憾这边不认。",
            casualVersion: "Probably not much honestly. I've got a secured credit card I've been using a few months. I had great credit back home but it doesn't carry over here.",
            keyPhrases: [
              { en: "secured credit card", zh: "担保信用卡" },
              { en: "doesn't transfer over", zh: "不能转移过来" },
            ],
            commonMistake: {
              wrong: "In my country I have very good credit but America doesn't accept it.",
              correct: "Back in my home country I had excellent credit, but unfortunately that doesn't transfer over.",
              explanation: "用过去式 “had” 表示之前在国内的状态。“transfer over” 比 “accept” 更准确地描述信用记录不能跨国使用的情况。",
            },
            formalityVariants: {
              casual: "Probably not much. Got a secured card I've been using a couple months but that's it. Had great credit back home but that stuff doesn't carry over.",
              standard: "Honestly, probably not much. I have a secured credit card that I've been using for a few months, but that's about it. I had excellent credit back in my home country, but unfortunately that doesn't transfer over.",
              formal: "To be candid, the results would likely be quite limited. I have maintained a secured credit card for several months; however, that represents the extent of my domestic credit profile. While I possessed an exemplary credit record in my country of origin, regrettably those records do not transfer to the American credit system.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "I appreciate you being upfront about it. Let me think about what we can do. Have you been at your current job for a while?",
            textZh: "我很感谢你坦诚相告。让我想想我们能怎么办。你在现在的工作做了多久了？",
            keyPhrases: [
              { en: "being upfront", zh: "坦诚相告" },
            ],
            alternativeExpressions: [
              { textEn: "Thanks for letting me know ahead of time. I've dealt with this before with international tenants. How long have you been at your job?", textZh: "谢谢你提前告诉我。我以前遇到过国际租客这种情况。你工作多久了？", actionHint: "dealt with this before 意思是之前处理过这种情况", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I started my job here right when I moved. I'm a software engineer at a tech company, and I have a stable salary. I can provide pay stubs and an employment letter if that helps.",
            textZh: "是的，搬来就开始工作了。我是一家科技公司的软件工程师，有稳定的薪水。如果有帮助的话我可以提供工资单和雇佣信。",
            casualVersion: "Yeah, been working since I got here. Software engineer at a tech company, steady paycheck. I can show you pay stubs and get a letter from my employer.",
            commonMistake: {
              wrong: "I can give you my salary paper and company letter.",
              correct: "I can provide pay stubs and an employment letter.",
              explanation: "“pay stubs” 是工资单的标准说法，不是 “salary paper”。“employment letter” 比 “company letter” 更专业准确。",
            },
            formalityVariants: {
              casual: "Yeah, started working right away when I moved. Software engineer, stable income. Can show you pay stubs and a letter from work.",
              standard: "Yes, I started my job here right when I moved. I'm a software engineer at a tech company with a stable salary. I can provide pay stubs and an employment letter if that helps.",
              formal: "Indeed, I commenced employment immediately upon my arrival. I am employed as a software engineer at a technology firm, earning a stable salary. I would be pleased to furnish pay stubs and a formal employment verification letter for your consideration.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "协商替代方案",
        titleEn: "Negotiating Alternatives",
        description: "在没有信用记录的情况下协商替代方案以通过租房审核",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "房东",
            textEn: "Look, I like you and you seem responsible, but my insurance company gets nervous when tenants don't have a solid credit history. Here's what I usually do in these situations — would you be open to putting down a larger security deposit?",
            textZh: "说实话，我觉得你不错，看起来很靠谱，但我的保险公司对没有信用记录的租客会比较紧张。这种情况我通常会这么处理——你愿意多交一些押金吗？",
            keyPhrases: [
              { en: "putting down a larger security deposit", zh: "多交押金" },
              { en: "open to", zh: "愿意/接受" },
            ],
          },
          {
            speaker: "you",
            textEn: "Absolutely, I was actually going to suggest that. How much extra are we talking about? I was thinking maybe an additional month's rent on top of the standard deposit.",
            textZh: "当然愿意，我其实也想提这个。多交多少？我想的是在标准押金基础上再加一个月的房租。",
            casualVersion: "Yeah, I was gonna bring that up. How much more we talking? I was thinking an extra month on top of the regular deposit.",
            commonMistake: {
              wrong: "OK, I agree to pay more deposit. How much more money do you want?",
              correct: "Absolutely, I was actually going to suggest that. How much extra are we talking about?",
              explanation: "“How much more money do you want” 语气像是质问对方要钱。用 “How much extra are we talking about” 更平等、更像协商。",
            },
            formalityVariants: {
              casual: "Yeah for sure, was gonna bring that up myself. How much more we talking? Maybe one extra month on top?",
              standard: "Absolutely, I was actually going to suggest that. How much extra are we talking about? I was thinking maybe an additional month's rent on top of the standard deposit.",
              formal: "Certainly, that was precisely what I intended to propose. What amount of additional deposit would you consider appropriate? I was contemplating an additional month's rent above the standard security deposit.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "That would work. So instead of one month's deposit, we'd do two months. And if you can also get me three months of bank statements and that employment letter, I think we're in good shape.",
            textZh: "那就可以。所以押金从一个月变成两个月。如果你还能给我三个月的银行流水和那封雇佣信，我觉得就没问题了。",
            keyPhrases: [
              { en: "bank statements", zh: "银行流水/银行对账单" },
              { en: "we're in good shape", zh: "我们就没问题了" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, two months' deposit instead of one would make me comfortable. Toss in three months of bank statements and a letter from your employer, and I think we can make this happen.", textZh: "两个月押金而不是一个月，我就放心了。再加上三个月银行流水和雇主信，我觉得就能成。", actionHint: "toss in 意思是附加/带上; make this happen 意思是促成这件事", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds very reasonable. Would you also consider a reference letter from my previous landlord overseas? I rented for five years and never missed a payment.",
            textZh: "这听起来很合理。你还会考虑接受我海外前房东的推荐信吗？我租了五年，从没拖过房租。",
            casualVersion: "Sounds fair. Would a reference from my old landlord back home help too? Five years, never missed rent.",
            keyPhrases: [
              { en: "reference letter", zh: "推荐信/证明信" },
              { en: "never missed a payment", zh: "从未漏付/从未拖欠" },
            ],
            culturalNote: "美国非常重视 “rental history”（租房历史），前房东的推荐信很有分量。中国租房很少有这种做法。新移民可以请国内的前房东写一封英文推荐信，虽然美国房东不一定能核实，但体现了你的诚意和责任心。",
            commonMistake: {
              wrong: "I never late for paying rent in five years.",
              correct: "I rented for five years and never missed a payment.",
              explanation: "“never late for paying” 语法笨拙。“never missed a payment” 是美国人描述按时付款的标准说法。",
            },
            formalityVariants: {
              casual: "Sounds good. Would a reference from my old landlord back home help too? Five years, always paid on time.",
              standard: "Would you also consider a reference letter from my previous landlord overseas? I rented for five years and never missed a payment.",
              formal: "In addition, might I submit a reference letter from my previous landlord abroad? I maintained a five-year tenancy with an impeccable payment record — not a single missed payment throughout the duration.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Sure, that can't hurt. The more documentation, the better. I'll also need a photo ID and your SSN or ITIN for the background check. Once I have everything, the approval usually takes about two to three business days.",
            textZh: "当然，多多益善。材料越多越好。另外我还需要你的证件照片和 SSN 或 ITIN 来做背景调查。材料齐了以后，审批通常需要两到三个工作日。",
            keyPhrases: [
              { en: "ITIN", zh: "个人纳税识别号（Individual Taxpayer Identification Number）" },
              { en: "background check", zh: "背景调查" },
              { en: "business days", zh: "工作日" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, bring whatever you've got. More is better. I'll also need an ID and your Social or ITIN for the background check. After I get everything, should hear back in two or three business days.", textZh: "好，能拿的都带来，越多越好。还需要你的证件和社保号或税号来做背景调查。材料收齐后两三个工作日出结果。", actionHint: "your Social 是 Social Security number 的口语缩写; hear back 意思是得到回复", frequency: "common" },
            ],
            culturalNote: "ITIN（Individual Taxpayer Identification Number）是给没有 SSN 资格的人的纳税号。有些新移民在等 SSN 期间可以先用 ITIN。背景调查除了信用，还会查犯罪记录和驱逐历史（eviction history）。",
          },
          {
            speaker: "you",
            textEn: "Perfect. I'll put everything together this week. One more question — is the deposit refundable when I move out, assuming no damage?",
            textZh: "太好了。我这周就把材料准备好。还有一个问题——搬走的时候如果没有损坏，押金可以退吗？",
            casualVersion: "Great, I'll get all that stuff together this week. Quick question — I get the deposit back when I leave, right? As long as nothing's damaged?",
            commonMistake: {
              wrong: "Can I get back my deposit when I leave?",
              correct: "Is the deposit refundable when I move out, assuming no damage?",
              explanation: "“get back my deposit” 不算错但很口语化且语序有些奇怪。“Is the deposit refundable” 更正式清晰，“assuming no damage” 展示了你理解条件。",
            },
            formalityVariants: {
              casual: "Cool. I'll get that together this week. And I get the deposit back when I leave if everything's good, right?",
              standard: "I'll put everything together this week. One more question — is the deposit refundable when I move out, assuming no damage?",
              formal: "Excellent, I shall compile all the requisite documentation this week. One final inquiry — is the security deposit fully refundable upon vacating the premises, provided there is no damage beyond normal wear and tear?",
            },
          },
        ],
      },
    ],
  },

  // ==================== 18. 邮件转寄 ====================
  {
    id: "housing-mail-forward",
    category: "housing",
    tags: ["mail", "USPS", "邮件", "转寄", "mail forwarding", "package", "邮局"],
    titleZh: "邮件转寄",
    titleEn: "USPS Mail Forwarding",
    description: "搬家后在邮局设置邮件转寄，处理包裹投递问题",
    otherRole: "邮局职员",
    otherRoleIcon: "📮",
    flows: [
      {
        id: "basic",
        titleZh: "设置邮件转寄",
        titleEn: "Setting Up Mail Forwarding",
        description: "搬家后去邮局办理邮件转寄服务",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just moved to a new address and I'd like to set up mail forwarding from my old address. How do I do that?",
            textZh: "你好，我刚搬到新地址，想把旧地址的邮件转寄到新地址。怎么办理？",
            casualVersion: "Hey, I just moved. Need to get my mail forwarded to my new place. How does that work?",
            culturalNote: "在中国搬家后不太需要操心邮件转寄，因为大多数通信已经电子化。但在美国，大量重要文件（银行对账单、政府信件、税表）仍然通过邮寄。USPS 的邮件转寄服务是搬家后的必做事项。",
            commonMistake: {
              wrong: "I want to change my mail address.",
              correct: "I'd like to set up mail forwarding from my old address.",
              explanation: "“change my mail address” 意思模糊，可能被理解为改邮箱地址。“set up mail forwarding” 是邮件转寄的正确说法。",
            },
            formalityVariants: {
              casual: "Hey, just moved. Need to forward my mail to the new place.",
              standard: "Hi, I just moved to a new address and I'd like to set up mail forwarding from my old address.",
              formal: "Good morning, I have recently relocated and would like to establish mail forwarding from my previous address to my new residence. Could you please assist me with this process?",
            },
          },
          {
            speaker: "them",
            role: "邮局职员",
            textEn: "Sure thing. You can either fill out this form here at the counter, or you can do it online at usps.com. The in-person form is free, but online there's a one-dollar-ten identity verification fee.",
            textZh: "没问题。你可以在柜台填这个表格，或者在 usps.com 网上办理。现场填表免费，但网上办理有1.10美元的身份验证费。",
            keyPhrases: [
              { en: "fill out this form", zh: "填写这张表格" },
              { en: "identity verification fee", zh: "身份验证费" },
            ],
            alternativeExpressions: [
              { textEn: "No problem. Easiest way is right here — just fill out a change-of-address card. Or you can go online, but they charge a buck ten to verify your identity.", textZh: "没问题。最简单的就是在这里填一张地址变更卡。也可以网上办，但他们收1.10美元验证身份。", actionHint: "a buck ten 口语说法，意思是1.10美元", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll just do it here. How long does the forwarding last, and when does it start?",
            textZh: "我就在这里办吧。转寄持续多久，什么时候开始？",
            casualVersion: "I'll do it here. How long does it run for? And when does it kick in?",
            commonMistake: {
              wrong: "How long time does the forwarding continue?",
              correct: "How long does the forwarding last?",
              explanation: "“How long” 已经表示“多长时间”，不需要再加 “time”。“last” 比 “continue” 更自然地表示持续时间。",
            },
            formalityVariants: {
              casual: "I'll do it here then. How long does it go for, and when does it kick in?",
              standard: "I'll just do it here. How long does the forwarding last, and when does it start?",
              formal: "I shall complete the form here, if you please. Could you inform me of the duration of the forwarding service and when it would take effect?",
            },
          },
          {
            speaker: "them",
            role: "邮局职员",
            textEn: "Standard forwarding lasts twelve months for first-class mail. It usually takes seven to ten business days to kick in. You can choose a start date — most people pick their move-in date or a few days before.",
            textZh: "标准转寄服务对一类邮件持续12个月。通常需要7到10个工作日生效。你可以选择开始日期——大多数人选搬入日或提前几天。",
            keyPhrases: [
              { en: "first-class mail", zh: "一类邮件（普通信件）" },
              { en: "kick in", zh: "生效/开始" },
              { en: "move-in date", zh: "搬入日期" },
            ],
            culturalNote: "美国邮件分几个等级：First-Class Mail（一类邮件，普通信件和账单）、Priority Mail（优先邮件）、Standard Mail/Marketing Mail（广告邮件）。只有一类邮件可以转寄，广告邮件不转寄。这和中国的邮政系统分类完全不同。",
          },
          {
            speaker: "you",
            textEn: "Got it. I'll put the start date as next Monday. Do I need to show ID or anything?",
            textZh: "明白了。我把开始日期填下周一。需要出示证件什么的吗？",
            casualVersion: "Cool, I'll set it for next Monday. Do I need to show an ID?",
            commonMistake: {
              wrong: "Do I need to show my identify card?",
              correct: "Do I need to show ID or anything?",
              explanation: "美国不说 “identify card”（身份证），而说 “ID”（身份证件的统称）。中国有统一身份证，但美国的 ID 可以是驾照、护照、州身份证等多种证件。",
            },
            formalityVariants: {
              casual: "I'll put next Monday. Need to see my ID?",
              standard: "I'll put the start date as next Monday. Do I need to show ID or anything?",
              formal: "I shall set the commencement date for next Monday. Will you require any form of identification to process this request?",
            },
          },
          {
            speaker: "them",
            role: "邮局职员",
            textEn: "Yes, I'll need a valid photo ID — driver's license, passport, anything with your photo and current address works. And you'll need to verify the old address matches what's on file.",
            textZh: "是的，我需要一个有效的带照片证件——驾照、护照，任何有你照片和当前地址的都行。你还需要确认旧地址和档案上的一致。",
            keyPhrases: [
              { en: "valid photo ID", zh: "有效的带照片证件" },
              { en: "on file", zh: "档案中/记录中" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "处理包裹投递问题",
        titleEn: "Handling Package Delivery Issues",
        description: "处理包裹投递失败、留条、重新安排投递等问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I got home today and found a notice on my door that says attempted delivery. The package wasn't left. Can I pick it up here?",
            textZh: "你好，我今天回家发现门上贴了一张通知写着“尝试投递”。包裹没留下来。我能在这里取吗？",
            casualVersion: "Hey, I came home to one of those delivery notices on my door. My package wasn't there. Can I just come grab it?",
            keyPhrases: [
              { en: "attempted delivery", zh: "尝试投递（投递未成功）" },
              { en: "notice", zh: "通知/留条" },
            ],
            culturalNote: "在中国，快递员会打电话或放在快递柜。在美国，USPS/UPS/FedEx 如果需要签收的包裹没人在家，会在门上留一张纸条（delivery notice / sorry we missed you），你需要自己去邮局取或安排重新投递。",
            commonMistake: {
              wrong: "I found a paper on my door that says delivery failed.",
              correct: "I found a notice on my door that says attempted delivery.",
              explanation: "“delivery failed” 不是美国快递用语。标准说法是 “attempted delivery”（尝试投递）。留条叫 “notice” 或 “delivery attempt notice”，不叫 “paper”。",
            },
            formalityVariants: {
              casual: "Hey, got one of those 'we tried to deliver' slips on my door. Can I just pick it up here?",
              standard: "I got home and found a notice that says attempted delivery. Can I pick up the package here?",
              formal: "Good afternoon, I returned home to find a delivery attempt notice indicating that my package could not be delivered. Would it be possible to collect it from this location?",
            },
          },
          {
            speaker: "them",
            role: "邮局职员",
            textEn: "Let me check. Do you have the notice with you? There should be a tracking number or a barcode on it.",
            textZh: "我查一下。你带通知单了吗？上面应该有追踪号或条形码。",
            keyPhrases: [
              { en: "tracking number", zh: "追踪号/快递单号" },
              { en: "barcode", zh: "条形码" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yeah, here it is. It also says I can schedule a redelivery. How does that work if I'm not home during the day?",
            textZh: "在这里。上面还写可以安排重新投递。如果我白天不在家怎么办？",
            casualVersion: "Yeah here. It says I can do a redelivery — but I'm never home during the day. How's that work?",
            keyPhrases: [
              { en: "schedule a redelivery", zh: "安排重新投递" },
            ],
            commonMistake: {
              wrong: "How can I make them deliver again? I am not at home in daytime.",
              correct: "How does scheduling a redelivery work if I'm not home during the day?",
              explanation: "“make them deliver again” 语气不好，像是命令。“schedule a redelivery” 是标准用语。“in daytime” 应该说 “during the day”。",
            },
            formalityVariants: {
              casual: "Yeah here it is. Says I can do a redelivery? But I'm always at work during the day.",
              standard: "It says I can schedule a redelivery. How does that work if I'm not home during the day?",
              formal: "Indeed, the notice mentions the option of scheduling a redelivery. However, I am typically unavailable during standard delivery hours. What alternatives might be available?",
            },
          },
          {
            speaker: "them",
            role: "邮局职员",
            textEn: "You've got a few options. You can schedule redelivery for a specific date — maybe a day you're off work. Or you can have it held here at the post office for up to fifteen days and just come pick it up when it's convenient. You can also sign up for USPS Informed Delivery online — it shows you what mail and packages are coming.",
            textZh: "你有几个选择。你可以安排某一天重新投递——选个你休息的日子。或者你可以让它在邮局保管最多15天，方便的时候来取。你还可以在网上注册 USPS Informed Delivery——它会提前告诉你有什么邮件和包裹要来。",
            keyPhrases: [
              { en: "held here", zh: "在这里保管" },
              { en: "Informed Delivery", zh: "USPS 邮件预告服务" },
              { en: "up to fifteen days", zh: "最多15天" },
            ],
            alternativeExpressions: [
              { textEn: "Couple options. You can pick a day for redelivery — like your day off. Or we hold it here for fifteen days and you come get it whenever. Pro tip: sign up for Informed Delivery online, shows you what's coming before it arrives.", textZh: "有几个选择。你可以选一天重新投递——比如你休息日。或者我们帮你保管15天，你什么时候方便来取。建议注册 Informed Delivery，提前告诉你要来什么邮件。", actionHint: "pro tip 意思是专业建议/小窍门", frequency: "common" },
            ],
            culturalNote: "USPS Informed Delivery 是免费服务，每天早上发邮件告诉你今天会收到什么信件（扫描信封图片）和包裹追踪。在中国没有这样的服务。对新移民非常有用，可以知道重要文件什么时候到。",
          },
          {
            speaker: "you",
            textEn: "I'll have it held here then. Do I need to bring anything specific when I come to pick it up?",
            textZh: "那我就让它保管在这里吧。来取的时候需要带什么特别的东西吗？",
            casualVersion: "I'll just hold it here. What do I need to bring when I pick it up?",
            commonMistake: {
              wrong: "Please help me keep the package. What should I bring to take it?",
              correct: "I'll have it held here. Do I need to bring anything specific when I come to pick it up?",
              explanation: "“have it held” 是让某物被保管的标准结构。“pick it up” 是取件的固定搭配，不用 “take it”。",
            },
            formalityVariants: {
              casual: "I'll just have you guys hold it. What do I need when I come grab it?",
              standard: "I'll have it held here. Do I need to bring anything specific when I come to pick it up?",
              formal: "I would prefer to have the package held at this location. Could you please advise on what documentation I should present upon collection?",
            },
          },
          {
            speaker: "them",
            role: "邮局职员",
            textEn: "Just bring a photo ID and the tracking number. If someone else is picking it up for you, they'll need a written authorization from you plus their own ID. We're open Monday through Friday, nine to five, and Saturdays till noon.",
            textZh: "带个带照片的证件和追踪号就行。如果别人帮你取，需要你的书面授权和他们自己的证件。我们周一到周五9点到5点，周六到中午。",
            keyPhrases: [
              { en: "written authorization", zh: "书面授权" },
              { en: "till noon", zh: "到中午" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 19. 认识新邻居 ====================
  {
    id: "housing-neighbor-introduce",
    category: "housing",
    tags: ["neighbor", "邻居", "introduce", "自我介绍", "block party", "BBQ", "社区"],
    titleZh: "认识新邻居",
    titleEn: "Meeting Your Neighbors",
    description: "搬入新家后认识邻居，参加社区活动融入社区",
    otherRole: "邻居",
    otherRoleIcon: "👋",
    flows: [
      {
        id: "basic",
        titleZh: "上门自我介绍",
        titleEn: "Introducing Yourself at the Door",
        description: "搬入后敲邻居的门自我介绍",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi there! Sorry to bother you. I just moved in next door — the unit on the right. Wanted to come say hi and introduce myself. I'm Wei.",
            textZh: "你好！打扰一下。我刚搬到隔壁——右边那个单元。想过来打个招呼，自我介绍一下。我叫 Wei。",
            casualVersion: "Hey! Just moved in next door. Figured I'd come say hi. I'm Wei.",
            culturalNote: "在美国，搬入新家后主动去敲邻居的门自我介绍是常见且受欢迎的做法，尤其是在郊区和小城市。在中国的公寓楼里，大多数人和邻居几乎不交流。美国人通常会觉得这样的主动行为很友好。",
            commonMistake: {
              wrong: "Hello, I am your new neighbor. My name is Wei. Nice to meet you.",
              correct: "Hi there! I just moved in next door. Wanted to come say hi and introduce myself. I'm Wei.",
              explanation: "“I am your new neighbor” 过于正式和直白。美国人更习惯先说自己搬来的事实，再自然地引出名字。用 “Hi there” 比 “Hello” 更邻里友好。",
            },
            formalityVariants: {
              casual: "Hey! Just moved in next door, wanted to say hi. I'm Wei.",
              standard: "Hi there! I just moved in next door — the unit on the right. Wanted to come say hi and introduce myself. I'm Wei.",
              formal: "Good afternoon, I apologize for the interruption. I've recently moved into the adjacent unit and wanted to take a moment to introduce myself. My name is Wei.",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Oh hey, welcome to the building! I'm Sarah. How's the move going? Need any help with anything?",
            textZh: "嘿，欢迎来到这栋楼！我是 Sarah。搬家还顺利吗？需要帮忙吗？",
            keyPhrases: [
              { en: "welcome to the building", zh: "欢迎来到这栋楼" },
              { en: "How's the move going?", zh: "搬家还顺利吗？" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, nice to meet you! I'm Sarah. Welcome! How are you settling in? Let me know if you need anything.", textZh: "嘿，很高兴认识你！我是 Sarah。欢迎！适应得怎么样？需要什么随时说。", actionHint: "settling in 意思是安顿下来/适应新环境", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Nice to meet you, Sarah. The move's been a bit hectic, but we're getting there. I actually wanted to ask — is there anything I should know about the building? Like quiet hours or how trash pickup works?",
            textZh: "很高兴认识你，Sarah。搬家有点手忙脚乱，但还在弄。我其实想问——关于这栋楼有什么我应该知道的吗？比如安静时段或者垃圾怎么处理？",
            casualVersion: "Nice to meet you! It's been crazy but getting there. Quick question — any building rules I should know? Like when to take out the trash and stuff?",
            keyPhrases: [
              { en: "quiet hours", zh: "安静时段" },
              { en: "trash pickup", zh: "垃圾收运" },
              { en: "hectic", zh: "忙乱的" },
            ],
            commonMistake: {
              wrong: "Is there any rule I need to know?",
              correct: "Is there anything I should know about the building?",
              explanation: "直接问 “rules” 显得你担心违规。用 “anything I should know” 更自然友好，让对方自然地分享有用信息。",
            },
            formalityVariants: {
              casual: "Nice to meet you! Things are coming together. Hey, anything I should know about the building? Trash days, quiet hours, that kinda stuff?",
              standard: "Nice to meet you, Sarah. Is there anything I should know about the building? Like quiet hours or how trash pickup works?",
              formal: "It's a pleasure to meet you, Sarah. I was wondering if you could share any important information about the building — such as designated quiet hours or the waste collection schedule?",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Yeah, so trash goes out Sunday night for Monday morning pickup. Recycling is every other week — blue bin. And quiet hours are technically ten PM to eight AM, but most people here are pretty chill about it. Oh, and the laundry room's in the basement, but it gets busy on weekends.",
            textZh: "好的，垃圾周日晚上拿出去，周一早上收。回收物每两周一次——蓝色桶。安静时段是晚上10点到早上8点，不过这里大多数人都挺随和的。对了，洗衣房在地下室，但周末会比较挤。",
            keyPhrases: [
              { en: "every other week", zh: "每两周一次" },
              { en: "recycling", zh: "回收物" },
              { en: "blue bin", zh: "蓝色回收桶" },
              { en: "pretty chill", zh: "挺随和的/不太介意" },
            ],
            culturalNote: "美国的垃圾分类和中国很不同。通常分为 trash（普通垃圾，绿色或黑色桶）和 recycling（回收物，蓝色桶），有些地方还有 compost（堆肥，绿色桶）。垃圾要在指定日放到路边，由市政卡车来收。在中国大多数社区有专人收运，不需要自己搬到路边。",
          },
          {
            speaker: "you",
            textEn: "That's really helpful, thanks. By the way, I brought some pastries from the Chinese bakery down the street. Would you like some? Consider it a moving-in gift.",
            textZh: "太有帮助了，谢谢。顺便说一下，我从街上的中式面包店带了一些糕点。你要吗？算是搬家小礼物。",
            casualVersion: "Super helpful, thanks! Oh, I grabbed some stuff from the Chinese bakery. Want some? Little moving-in gift.",
            culturalNote: "在美国，搬入时给邻居带小礼物是非常受欢迎的举动。食物（自制饼干、糕点）是最常见的选择。不需要太贵，重在心意。有趣的是，传统上是邻居给新来的人带 “welcome gift”，但主动带礼物给邻居也完全可以，会给人留下很好的第一印象。",
            commonMistake: {
              wrong: "I bring some cake for you.",
              correct: "I brought some pastries. Would you like some?",
              explanation: "过去式应该用 “brought” 不是 “bring”。“Would you like some?” 比 “for you” 更自然，给对方选择的余地。",
            },
            formalityVariants: {
              casual: "Oh hey, I brought some Chinese pastries. Want some? A little housewarming thing.",
              standard: "I brought some pastries from the Chinese bakery down the street. Would you like some? Consider it a moving-in gift.",
              formal: "By the way, I took the liberty of bringing some pastries from the nearby Chinese bakery. I would be delighted if you would accept them as a small housewarming gesture.",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Oh, that's so sweet of you! I'd love some. You know, if you ever need anything — like to borrow a tool or if you get locked out — don't hesitate to knock. That's what neighbors are for.",
            textZh: "哎呀，你太好了！我很想要。你知道的，如果你需要什么——比如借个工具或者被锁在门外——随时来敲门。邻居就是互相帮忙的嘛。",
            keyPhrases: [
              { en: "that's so sweet of you", zh: "你真是太好了" },
              { en: "don't hesitate to knock", zh: "随时来敲门" },
              { en: "get locked out", zh: "被锁在门外" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "参加社区烧烤聚会",
        titleEn: "Attending a Block Party BBQ",
        description: "邻居邀请你参加社区烧烤聚会，与更多邻居交流",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "邻居",
            textEn: "Hey Wei! We're having a block party this Saturday in the courtyard. It's a potluck BBQ — everyone brings something. You should totally come! It's a great way to meet everyone.",
            textZh: "嘿 Wei！这周六我们在院子里办社区聚会。是百乐餐烧烤——每人带一道菜。你一定要来！这是认识大家的好机会。",
            keyPhrases: [
              { en: "block party", zh: "社区/街区聚会" },
              { en: "potluck", zh: "百乐餐/每人带一道菜" },
              { en: "you should totally come", zh: "你一定要来" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds awesome! I'd love to come. What should I bring? I'm not the best at grilling, but I can make some dumplings or fried rice — would that work for a potluck?",
            textZh: "听起来太棒了！我很想去。我该带什么？我烧烤不太行，但我可以做饺子或炒饭——这算百乐餐可以吗？",
            casualVersion: "Sounds great! I'm in. What should I bring? Can't really grill but I make a mean dumpling — that cool?",
            culturalNote: "Potluck 聚会在美国非常普遍，每个人带一道菜分享。中国人带的中餐通常大受欢迎，因为很多美国人没吃过正宗中餐。饺子、炒饭、春卷都是受欢迎的选择。在中国聚餐通常是主人全部准备或者大家 AA 去餐厅。",
            commonMistake: {
              wrong: "I will attend. What food should I cook?",
              correct: "I'd love to come. What should I bring?",
              explanation: "“attend” 过于正式，社区聚会说 “come” 就好。Potluck 的标准问法是 “What should I bring?”，不需要说 “cook”，因为带买的也行。",
            },
            formalityVariants: {
              casual: "Sounds fun, I'm down! What should I bring? I can whip up some dumplings.",
              standard: "That sounds awesome! I'd love to come. What should I bring? I can make some dumplings or fried rice.",
              formal: "That sounds like a wonderful event. I would be delighted to attend. What would you suggest I contribute? I could prepare some homemade dumplings or fried rice if that would be suitable.",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Oh my God, homemade dumplings? People are gonna lose their minds. That'd be amazing. Most folks are bringing the usual — burgers, hot dogs, chips and dip. Something different like that would be a huge hit.",
            textZh: "天哪，自己包的饺子？大家会疯掉的。太棒了。大多数人都是带常规的——汉堡、热狗、薯片和蘸酱。像这样不一样的绝对会大受欢迎。",
            keyPhrases: [
              { en: "lose their minds", zh: "疯掉/超级兴奋" },
              { en: "a huge hit", zh: "大受欢迎" },
              { en: "chips and dip", zh: "薯片和蘸酱" },
            ],
            alternativeExpressions: [
              { textEn: "Dude, homemade dumplings?! That's gonna be the star of the party. Everyone always brings burgers and hot dogs — yours will stand out for sure.", textZh: "哥们，手工饺子？！那绝对是全场之星。每次大家都带汉堡和热狗——你的肯定最出众。", actionHint: "the star of the party 意思是全场焦点; stand out 意思是脱颖而出", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Ha, I'll make a big batch then. What time should I show up? And should I bring my own drinks, or is that provided?",
            textZh: "哈，那我多做一些。几点到？需要自带饮料还是有人提供？",
            casualVersion: "Ha, I'll make a ton then. What time, and do I need to bring drinks?",
            keyPhrases: [
              { en: "show up", zh: "到达/出现" },
              { en: "a big batch", zh: "一大批" },
            ],
            commonMistake: {
              wrong: "What time should I arrive? Should I carry drinks?",
              correct: "What time should I show up? Should I bring my own drinks?",
              explanation: "“arrive” 过于正式，非正式聚会用 “show up” 或 “come by”。“carry drinks” 是中式表达，英语说 “bring drinks”。",
            },
            formalityVariants: {
              casual: "Ha, I'll make a ton. What time, and BYOB or nah?",
              standard: "I'll make a big batch then. What time should I show up? And should I bring my own drinks?",
              formal: "I shall prepare a generous quantity. What time would be appropriate to arrive? And regarding beverages — should each guest bring their own, or will they be provided?",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "We usually kick things off around four. It's BYOB for booze, but we'll have water, lemonade, and sodas. Oh, and just a heads up — Dave from upstairs will probably ask you a million questions about China. He's super friendly but can be a lot. Just smile and redirect if he gets too intense.",
            textZh: "我们通常四点左右开始。酒水是自带的，但我们会有水、柠檬水和汽水。对了，提醒一下——楼上的 Dave 可能会问你一百万个关于中国的问题。他人很好，但有时候话太多。他太热情了就笑笑转个话题。",
            keyPhrases: [
              { en: "kick things off", zh: "开始" },
              { en: "BYOB", zh: "自带酒水（Bring Your Own Booze/Beverage）" },
              { en: "heads up", zh: "提醒" },
              { en: "can be a lot", zh: "有时候太过了/话太多" },
            ],
            culturalNote: "BYOB（Bring Your Own Booze/Beer/Beverage）在美国社交场合非常常见，意思是酒自带，主人通常提供非酒精饮料。在中国聚餐通常酒水都是统一提供的。另外美国邻居对来自中国的新邻居通常非常好奇，可能会问很多关于中国的问题，这是友好的表现，不是冒犯。",
          },
          {
            speaker: "you",
            textEn: "Ha, I appreciate the heads up. I'm used to it by now. Is there anything else I should know — like, do people bring lawn chairs, or is seating provided?",
            textZh: "哈，谢谢提醒。我已经习惯了。还有什么需要知道的吗——比如需要自带折叠椅，还是有座位？",
            casualVersion: "Ha, I'm used to that by now. Do I need to bring a chair or anything?",
            keyPhrases: [
              { en: "lawn chairs", zh: "户外折叠椅" },
            ],
            commonMistake: {
              wrong: "Should I bring a sit chair?",
              correct: "Do people bring lawn chairs, or is seating provided?",
              explanation: "没有 “sit chair” 这个说法。户外折叠椅叫 “lawn chair” 或 “folding chair”。",
            },
            formalityVariants: {
              casual: "Ha, I'm used to it. Need to bring a chair or anything?",
              standard: "Is there anything else I should know — do people bring lawn chairs, or is seating provided?",
              formal: "I appreciate the forewarning. Is there anything else I should be aware of? For instance, should guests bring their own seating, or will chairs be available?",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "We usually have enough tables and chairs, but a lawn chair never hurts just in case. It's super casual — just come, eat, hang out, and have a good time. Everyone's really welcoming. You're gonna fit right in.",
            textZh: "我们通常有足够的桌椅，但以防万一自带一把也无妨。很随意的——过来吃吃喝喝聊聊天就好。大家都很友好的。你一定能融入进来的。",
            keyPhrases: [
              { en: "never hurts just in case", zh: "以防万一也无妨" },
              { en: "hang out", zh: "聊天/闲逛" },
              { en: "fit right in", zh: "很快融入" },
            ],
            alternativeExpressions: [
              { textEn: "There's usually plenty of seating, but bring a folding chair if you want. It's super low-key — just show up, eat, chat with people. Everyone's friendly. You'll love it.", textZh: "座位通常够的，但想带折叠椅也行。很随意——来了吃吃聊聊就好。大家都很友好。你会喜欢的。", actionHint: "low-key 意思是随意/低调; show up 意思是到场", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 20. 公寓洗衣房 ====================
  {
    id: "housing-laundry-room",
    category: "housing",
    tags: ["laundry", "洗衣", "洗衣房", "washing machine", "quarters", "公寓", "apartment"],
    titleZh: "公寓洗衣房",
    titleEn: "Apartment Laundry Room",
    description: "使用公寓共享洗衣房，了解机器操作和洗衣礼仪",
    otherRole: "同楼住户",
    otherRoleIcon: "🧺",
    flows: [
      {
        id: "basic",
        titleZh: "找到并使用洗衣房",
        titleEn: "Finding and Using the Laundry Room",
        description: "第一次使用公寓共享洗衣房",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, excuse me — I just moved in and I'm looking for the laundry room. Do you know where it is?",
            textZh: "嗨，不好意思——我刚搬进来，在找洗衣房。你知道在哪吗？",
            casualVersion: "Hey, where's the laundry room? Just moved in.",
            culturalNote: "在中国几乎每家都有自己的洗衣机，共享洗衣房的概念很陌生。但在美国，很多公寓没有室内洗烘，需要使用楼里的共享洗衣房或去外面的自助洗衣店（laundromat）。这是美国公寓生活的一大文化差异。",
            commonMistake: {
              wrong: "Where is the wash clothes room?",
              correct: "Where is the laundry room?",
              explanation: "洗衣房的固定说法是 “laundry room”，不是 “wash clothes room”。“laundry” 既指脏衣服也指洗衣这件事。",
            },
            formalityVariants: {
              casual: "Hey, know where the laundry room is? Just moved in.",
              standard: "I just moved in and I'm looking for the laundry room. Do you know where it is?",
              formal: "Excuse me, I've recently moved into the building and I'm trying to locate the laundry room. Could you possibly direct me?",
            },
          },
          {
            speaker: "them",
            role: "同楼住户",
            textEn: "Yeah, it's in the basement. Take the elevator down to B1 and turn left. It's the second door on your right. You'll need your building key fob to get in.",
            textZh: "在地下室。坐电梯到B1，左转，右边第二个门。进去需要门禁卡。",
            keyPhrases: [
              { en: "basement", zh: "地下室" },
              { en: "key fob", zh: "门禁卡/钥匙扣感应器" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks! Do the machines take quarters, or is there a card system? I've never used a shared laundry room before.",
            textZh: "谢谢！机器是投币的还是刷卡的？我以前没用过共享洗衣房。",
            casualVersion: "Thanks! Is it quarters or a card thing? Never used one of these before.",
            keyPhrases: [
              { en: "quarters", zh: "25美分硬币" },
              { en: "card system", zh: "刷卡系统" },
            ],
            culturalNote: "美国的投币洗衣机通常只收 quarters（25美分硬币），不收其他面额。很多新移民到美国后才发现需要大量 quarters。现在有些新式机器支持手机支付或预充值卡。在中国，共享洗衣机（如校园里的）通常用手机扫码支付。",
            commonMistake: {
              wrong: "Does the machine need coins?",
              correct: "Do the machines take quarters, or is there a card system?",
              explanation: "虽然说 “coins” 不算错，但美国洗衣机具体用的是 “quarters”（25美分），这是更精确的说法。同时问是否有其他支付方式更实用。",
            },
            formalityVariants: {
              casual: "Thanks! Quarters or card? Never used a shared laundry room.",
              standard: "Do the machines take quarters, or is there a card system?",
              formal: "Thank you. Could you tell me what payment method the machines accept — coins or a card-based system?",
            },
          },
          {
            speaker: "them",
            role: "同楼住户",
            textEn: "These ones take quarters — a dollar seventy-five per wash and a dollar fifty to dry. There's a change machine down there too, but it only takes ones and fives. Pro tip: always keep a roll of quarters in your apartment.",
            textZh: "这些是投币的——洗一次1.75美元，烘干1.50美元。那里也有个兑币机，但只收1美元和5美元纸币。建议：在公寓里常备一卷25美分硬币。",
            keyPhrases: [
              { en: "change machine", zh: "兑币机" },
              { en: "a roll of quarters", zh: "一卷25美分硬币" },
              { en: "ones and fives", zh: "1美元和5美元纸币" },
            ],
            alternativeExpressions: [
              { textEn: "Quarters — buck seventy-five to wash, buck fifty to dry. There's a change machine that takes singles and fives. Tip: always have quarters stashed at home.", textZh: "投币的——洗1.75，烘1.50。有台兑币机收1美元和5美元的。建议：家里随时备着硬币。", actionHint: "buck = 美元的口语说法; singles = 1美元纸币; stashed = 存放/备着", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. One more thing — which settings should I use? I see normal, delicate, heavy duty, and permanent press. I just have regular clothes.",
            textZh: "了解了。还有一个问题——我该用哪个设置？我看到 normal、delicate、heavy duty 和 permanent press。我就洗普通衣服。",
            casualVersion: "What setting do I use? Normal? I've got regular clothes, nothing fancy.",
            keyPhrases: [
              { en: "normal", zh: "标准/普通" },
              { en: "delicate", zh: "轻柔/精细" },
              { en: "heavy duty", zh: "强力/重型" },
              { en: "permanent press", zh: "免熨/防皱" },
            ],
            commonMistake: {
              wrong: "Which button should I press for normal clothes?",
              correct: "Which settings should I use? I just have regular clothes.",
              explanation: "洗衣机用 “settings”（设置）而不是 “button”（按钮）。虽然你确实要按按钮，但描述洗涤模式时用 “settings” 更准确。",
            },
            formalityVariants: {
              casual: "What setting for regular clothes? Normal?",
              standard: "Which settings should I use? I just have regular clothes.",
              formal: "Could you advise on the appropriate settings for standard everyday clothing?",
            },
          },
          {
            speaker: "them",
            role: "同楼住户",
            textEn: "Just go with normal and cold water for most stuff — that's what I do. Hot water for towels and sheets. Oh, and don't overload the machine or your clothes won't get clean. And make sure you clean out the lint trap in the dryer when you're done.",
            textZh: "大多数衣服用 normal 加冷水就行——我就这么洗。毛巾和床单用热水。对了，别塞太满否则洗不干净。用完烘干机记得清理绒毛过滤网。",
            keyPhrases: [
              { en: "cold water", zh: "冷水" },
              { en: "overload", zh: "超载/塞太满" },
              { en: "lint trap", zh: "绒毛过滤网" },
            ],
            culturalNote: "美国洗衣机通常有水温选项（hot/warm/cold），这在中国家用洗衣机上不太常见。清理烘干机的 lint trap（绒毛过滤网）是安全问题，积聚的绒毛可能引起火灾。这是美国的常识但中国人通常不知道，因为中国家庭很少用烘干机。",
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "洗衣房礼仪和报修",
        titleEn: "Laundry Room Etiquette and Reporting Issues",
        description: "处理别人遗留衣物、洗衣礼仪和机器故障报修",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, do you know whose clothes are in this machine? It finished a while ago and I was hoping to use it. I don't want to just move someone's stuff.",
            textZh: "不好意思，你知道这个机器里是谁的衣服吗？洗完很久了，我想用这台。但我不想随便动别人的东西。",
            casualVersion: "Hey, any idea whose stuff is in this washer? It's been done for a while. Don't wanna move someone's things but I need a machine.",
            culturalNote: "在美国共享洗衣房，洗完衣服必须及时取出是基本礼仪。如果你占着机器超过 10-15 分钟不取，别人可能会把你的衣服拿出来放在旁边的桌子或篮子里。这在中国可能被认为是不礼貌的，但在美国的共享洗衣房这是被普遍接受的做法。",
            commonMistake: {
              wrong: "Someone's clothes is still inside the machine. Can I take them out?",
              correct: "Someone's clothes are still in the machine. I don't want to just move someone's stuff.",
              explanation: "“clothes” 是复数名词，动词用 “are” 不是 “is”。先表达你不想随便动别人东西的顾虑，比直接问能不能拿出来更得体。",
            },
            formalityVariants: {
              casual: "Hey, whose stuff is this? It's been sitting here for a while. Cool if I move it?",
              standard: "Do you know whose clothes are in this machine? It finished a while ago and I don't want to just move someone's stuff.",
              formal: "Pardon me, would you happen to know to whom these clothes belong? The cycle appears to have concluded some time ago, and while I would like to use the machine, I'm hesitant to handle another person's laundry.",
            },
          },
          {
            speaker: "them",
            role: "同楼住户",
            textEn: "Oh, that's been sitting there for like an hour. At this point, you're totally fine to take it out and put it on the folding table. That's pretty standard around here — everyone knows not to leave their stuff sitting in the machine.",
            textZh: "那个已经放了大概一小时了。这种情况你完全可以拿出来放在折叠台上。这在这里很正常——大家都知道不应该把衣服留在机器里不取。",
            keyPhrases: [
              { en: "folding table", zh: "折叠台" },
              { en: "totally fine", zh: "完全可以" },
              { en: "that's pretty standard", zh: "这很正常/这是惯例" },
            ],
            alternativeExpressions: [
              { textEn: "Been in there over an hour. Just pull it out and set it on the table — that's what everyone does. If they didn't want it moved, they should've come back sooner.", textZh: "放了一个多小时了。拿出来放桌上就行——大家都这么做。不想被动就该早点来取。", actionHint: "pull it out 意思是拿出来; come back sooner 意思是早点回来取", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I'll do that. Oh wait — I think there's something wrong with this dryer. I put in my quarters but the drum isn't spinning. Is it broken?",
            textZh: "好的。等一下——我觉得这台烘干机有问题。我投了硬币但滚筒不转。是不是坏了？",
            casualVersion: "OK. Hmm, this dryer's not working. Put quarters in but the drum's not spinning. Is it busted?",
            keyPhrases: [
              { en: "drum", zh: "滚筒" },
              { en: "spinning", zh: "旋转" },
            ],
            commonMistake: {
              wrong: "I think the dry machine is broken. The round thing inside doesn't move.",
              correct: "I think there's something wrong with this dryer. The drum isn't spinning.",
              explanation: "烘干机叫 “dryer”，不是 “dry machine”。里面的圆筒叫 “drum”（滚筒），不是 “round thing”。",
            },
            formalityVariants: {
              casual: "Hold on — this dryer ate my quarters and it's not spinning. Is it busted?",
              standard: "I think there's something wrong with this dryer. I put in my quarters but the drum isn't spinning.",
              formal: "I appear to be having difficulty with this dryer. I've inserted the required quarters, but the drum does not seem to be engaging. Do you know if it's been reported as malfunctioning?",
            },
          },
          {
            speaker: "them",
            role: "同楼住户",
            textEn: "Ugh, that one's been acting up lately. Try giving the door a good push — sometimes it doesn't latch all the way and the safety sensor won't let it start. If that doesn't work, you'll need to report it to building management. Their number's on the poster by the door.",
            textZh: "烦，那台最近一直有问题。试试使劲推一下门——有时候门没完全扣好，安全传感器就不让启动。不行的话就得跟物业报修了。电话号码在门边的海报上。",
            keyPhrases: [
              { en: "acting up", zh: "出毛病/闹脾气" },
              { en: "latch", zh: "门扣/扣好" },
              { en: "safety sensor", zh: "安全传感器" },
              { en: "building management", zh: "物业管理" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, that dryer's been wonky. Push the door hard — it doesn't always close right and the machine won't start unless it clicks. If that doesn't fix it, call the building super. Number's on the wall.", textZh: "那台烘干机一直有问题。使劲关门——有时关不紧机器就不启动。不行就打电话找大楼管理员。号码在墙上。", actionHint: "wonky 意思是不太正常; super = superintendent 大楼管理员", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That did the trick — it's running now. By the way, is there an unwritten rule about how late you can do laundry? I sometimes work late and don't get home until eleven.",
            textZh: "管用了——转了。顺便问一下，洗衣服有没有什么不成文的规矩说几点以后不能洗？我有时加班到11点才到家。",
            casualVersion: "Oh nice, it's working now. Hey, is there like a cutoff time for laundry? I sometimes get home pretty late.",
            keyPhrases: [
              { en: "that did the trick", zh: "管用了/奏效了" },
              { en: "unwritten rule", zh: "不成文的规矩" },
            ],
            commonMistake: {
              wrong: "Is there a rule about what time latest I can wash clothes?",
              correct: "Is there an unwritten rule about how late you can do laundry?",
              explanation: "“do laundry” 是洗衣服的地道说法，比 “wash clothes” 更常用。“how late you can” 比 “what time latest” 更自然。",
            },
            formalityVariants: {
              casual: "Sweet, it's running. Quick question — is there a cutoff time for doing laundry? I work late sometimes.",
              standard: "That did the trick. Is there an unwritten rule about how late you can do laundry?",
              formal: "Excellent, that resolved the issue. I was curious — is there an established protocol or understanding regarding acceptable hours for using the laundry facilities?",
            },
          },
          {
            speaker: "them",
            role: "同楼住户",
            textEn: "Technically the laundry room's open twenty-four seven, but most people try to finish up by ten. The washers aren't that loud, but the dryers can be pretty noisy and the people on this floor can hear them. If you have to do it late, just stick with the washer and hang-dry your stuff if you can. Nobody's gonna complain about a washer at eleven, but a dryer rattling at midnight — yeah, that's pushing it.",
            textZh: "洗衣房技术上是24小时开放的，但大多数人尽量10点前洗完。洗衣机不算太吵，但烘干机挺响的，这层的人能听到。如果非要晚洗，尽量只用洗衣机，能晾干就晾干。11点用洗衣机没人会抱怨，但半夜12点烘干机嗡嗡响——那就有点过分了。",
            keyPhrases: [
              { en: "twenty-four seven", zh: "24小时/全天候" },
              { en: "hang-dry", zh: "晾干" },
              { en: "pushing it", zh: "有点过分/过头了" },
              { en: "rattling", zh: "嗡嗡响/哗啦响" },
            ],
            culturalNote: "美国公寓对噪音非常敏感，尤其是晚上。“Quiet hours” 通常是晚10点到早8点。有些公寓的租约里明确写了洗衣房使用时间。在中国的公寓里，因为每家有自己的洗衣机且现在的洗衣机很安静，所以这不是什么大问题。但美国的共享洗衣房通常用的是商用机器，噪音更大。",
          },
        ],
      },
    ],
  },
  // ==================== 16. 租客保险 ====================
  {
    id: "housing-renter-insurance",
    category: "housing",
    titleZh: "租客保险",
    titleEn: "Renter's Insurance",
    description: "了解和购买租客保险，保护个人财产",
    otherRole: "保险代理",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "basic",
        titleZh: "了解租客保险",
        titleEn: "Understanding Renter's Insurance",
        description: "第一次了解租客保险的基本概念和保障范围",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my landlord says I need to get renter's insurance before I move in. I've never had it before — can you explain what it covers?",
            textZh: "你好，房东说我搬进去之前需要买租客保险。我以前从没买过——能解释一下保什么吗？",
            casualVersion: "Hey, my landlord's making me get renter's insurance. Never had it. What does it actually cover?",
            culturalNote: "在中国租房很少需要额外买保险，但在美国很多房东要求租客必须购买 renter's insurance，有些甚至写在租约里作为必要条件。",
            commonMistake: {
              wrong: "My landlord said I must buy house insurance. What does it insure?",
              correct: "My landlord says I need to get renter's insurance. Can you explain what it covers?",
              explanation: "租客保险叫 renter's insurance，不是 house insurance（那是房主保险）。用 'covers' 比 'insure' 更自然。",
            },
            formalityVariants: {
              casual: "So my landlord wants me to get renter's insurance. What's it cover exactly?",
              standard: "My landlord says I need renter's insurance before I move in. Can you explain what it covers?",
              formal: "Good afternoon, my landlord has indicated that renter's insurance is a requirement prior to occupancy. Could you kindly explain the scope of coverage?",
            },
          },
          {
            speaker: "them",
            role: "保险代理",
            textEn: "Of course! Renter's insurance covers three main things: your personal property — like furniture, electronics, and clothing — if they're damaged or stolen. It also covers liability, meaning if someone gets hurt in your apartment, you're protected. And it covers additional living expenses if your place becomes uninhabitable, like from a fire or flood.",
            textZh: "当然！租客保险主要保三样东西：你的个人财产——比如家具、电子产品、衣服——如果被损坏或被盗。还有责任险，就是说如果有人在你的公寓里受伤，你有保障。还有额外生活费用，如果你的住处因为火灾或水灾不能住了，保险会支付临时住所费用。",
            keyPhrases: [
              { en: "personal property", zh: "个人财产" },
              { en: "liability", zh: "责任险/赔偿责任" },
              { en: "additional living expenses", zh: "额外生活费用" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! So basically it protects your stuff if it gets stolen or damaged, covers you if somebody gets injured in your apartment, and pays for a hotel or temporary place if you can't live there anymore.", textZh: "当然！简单说就是保护你的东西不被偷或损坏，有人在你公寓受伤你不用自掏腰包，住不了的话还帮你付临时住处的钱。", actionHint: "covers you 在保险语境中指为你提供保障", frequency: "common" },
              { textEn: "Absolutely. There are three pillars: property coverage for your belongings, liability protection in case of injuries on your premises, and loss-of-use coverage for temporary housing.", textZh: "当然。主要三大支柱：财产保障、责任保护、以及临时住所费用。", actionHint: "pillars 支柱，指核心组成部分", frequency: "occasional" },
            ],
            casualVersion: "Yeah totally! So it covers your stuff — furniture, electronics, clothes — if they get stolen or damaged. Also covers you if someone gets hurt at your place. And if your apartment's wrecked by a fire or something and you can't live there, it'll pay for a hotel.",
            formalityVariants: {
              casual: "Yeah! It covers your stuff if it's stolen or wrecked, protects you if someone gets hurt at your place, and pays for somewhere else to stay if your apartment's trashed.",
              standard: "Renter's insurance covers your personal property, liability if someone is injured in your apartment, and additional living expenses if your place becomes uninhabitable.",
              formal: "Renter's insurance provides coverage across three primary areas: personal property protection against damage or theft, liability coverage in the event someone sustains an injury on your premises, and additional living expenses should your residence become uninhabitable.",
            },
          },
          {
            speaker: "you",
            textEn: "How much does it usually cost? I'm on a pretty tight budget.",
            textZh: "一般多少钱？我预算比较紧。",
            casualVersion: "What's it run? I'm kinda broke honestly.",
            culturalNote: "在美国谈钱不需要太委婉，直接说预算紧张是很正常的，对方会理解并推荐合适的方案。",
            commonMistake: {
              wrong: "How much money does it need? My budget is not too much.",
              correct: "How much does it usually cost? I'm on a pretty tight budget.",
              explanation: "'on a tight budget' 是表达预算紧张的地道说法。保险 'costs' 钱，不是 'needs' 钱。",
            },
            formalityVariants: {
              casual: "So what's it gonna cost me? I don't have a ton of money.",
              standard: "How much does it usually cost? I'm on a pretty tight budget.",
              formal: "Could you provide an estimate of the typical premium? I'm working within a limited budget at the moment.",
            },
          },
          {
            speaker: "them",
            role: "保险代理",
            textEn: "It's actually very affordable. Most basic plans start around fifteen to twenty dollars a month. For that, you'd typically get around thirty thousand in personal property coverage and a hundred thousand in liability. You can adjust the coverage amounts and your deductible to bring the price up or down.",
            textZh: "其实很便宜。大部分基础方案每月大概15到20美元。这个价格通常包含3万美元的个人财产保障和10万美元的责任险。你可以调整保障金额和免赔额来增减价格。",
            keyPhrases: [
              { en: "deductible", zh: "免赔额/自付额" },
              { en: "coverage amounts", zh: "保障金额" },
              { en: "premium", zh: "保费" },
            ],
            alternativeExpressions: [
              { textEn: "Good news — it's pretty cheap. We're talking like fifteen to twenty bucks a month for a standard policy. That usually gets you thirty grand in property coverage and a hundred K in liability.", textZh: "好消息——很便宜。标准保单大概每月15到20美元。通常包含3万财产保障和10万责任险。", actionHint: "bucks = dollars; K = thousand", frequency: "common" },
            ],
            casualVersion: "It's super cheap honestly. Like fifteen to twenty bucks a month. That gets you 'bout 30K in property coverage and 100K in liability. You can tweak the numbers if you want.",
            formalityVariants: {
              casual: "It's cheap — like 15 to 20 bucks a month. Gets you 30K property and 100K liability. You can adjust it.",
              standard: "Most basic plans start around fifteen to twenty dollars a month, with about thirty thousand in property coverage and a hundred thousand in liability.",
              formal: "Premiums for basic plans typically range from fifteen to twenty dollars per month, providing approximately thirty thousand dollars in personal property coverage and one hundred thousand dollars in liability protection. The deductible and coverage limits are adjustable.",
            },
          },
          {
            speaker: "you",
            textEn: "What's a deductible? And does it cover my laptop if I accidentally spill water on it?",
            textZh: "什么是免赔额？还有，如果我不小心把水洒在笔记本电脑上，保险赔吗？",
            casualVersion: "Wait, what's a deductible? And like, if I spill coffee on my laptop, am I covered?",
            culturalNote: "deductible（免赔额）的概念在中国保险中也存在，但美国日常生活中这个词出现频率更高，租房、医疗、车险都会用到。",
            commonMistake: {
              wrong: "What is deductible meaning? If I break my laptop by water, can insurance pay?",
              correct: "What's a deductible? Does it cover my laptop if I accidentally spill water on it?",
              explanation: "问定义用 'What's a...' 更自然。'accidentally spill water on it' 比 'break by water' 更准确地描述意外泼水。",
            },
            formalityVariants: {
              casual: "What even is a deductible? And if I wreck my laptop by spilling something on it, does that count?",
              standard: "What's a deductible? And does it cover my laptop if I accidentally spill water on it?",
              formal: "Could you clarify what a deductible entails? Additionally, would accidental damage — such as spilling liquid on a laptop — fall within the scope of coverage?",
            },
          },
          {
            speaker: "them",
            role: "保险代理",
            textEn: "A deductible is the amount you pay out of pocket before your insurance kicks in. So if your deductible is five hundred dollars and you have a two-thousand-dollar claim, you'd pay five hundred and we'd cover the remaining fifteen hundred. As for your laptop — standard policies cover named perils like fire, theft, and water damage from things like burst pipes. But accidental damage, like spilling water yourself, usually isn't covered unless you add an accidental damage rider.",
            textZh: "免赔额就是在保险开始赔付之前你自己需要先付的金额。比如你的免赔额是500美元，你有一个2000美元的理赔，你先付500，我们赔剩下的1500。至于你的笔记本——标准保单保的是列明风险，比如火灾、盗窃、水管爆裂造成的水损。但自己不小心泼水属于意外损坏，通常不保，除非你加一个意外损坏附加条款。",
            keyPhrases: [
              { en: "out of pocket", zh: "自掏腰包" },
              { en: "kicks in", zh: "开始生效/开始赔付" },
              { en: "named perils", zh: "列明风险" },
            ],
            alternativeExpressions: [
              { textEn: "Think of the deductible as your share before insurance steps in. Five hundred deductible on a two-thousand claim means you pay five hundred, we pay fifteen hundred. For accidental spills on your laptop — that's not covered by default, but you can add a rider for it.", textZh: "可以把免赔额理解为保险介入之前你需要出的部分。500免赔额加2000理赔的话，你出500我们出1500。自己泼水弄坏笔记本默认不保，但可以加附加条款。", actionHint: "steps in 介入; rider 附加条款", frequency: "common" },
            ],
            casualVersion: "So a deductible is basically what you gotta pay first before insurance pays anything. Like if your deductible's 500 bucks and you file a claim for 2000, you pay 500 and we cover 1500. And the laptop thing — if it's stolen, yeah covered. But spilling water on it yourself? Nah, not usually, unless you get an extra add-on for accidental damage.",
            formalityVariants: {
              casual: "Deductible's what you pay first. 500 deductible, 2000 claim — you pay 500, we pay 1500. Spilling on your laptop? Not covered unless you add accidental damage.",
              standard: "A deductible is the amount you pay before insurance kicks in. Accidental damage like spills isn't covered by default, but you can add a rider for it.",
              formal: "The deductible represents the portion of any claim that you are personally responsible for prior to insurance coverage taking effect. Regarding accidental damage to electronics, standard policies do not extend to self-inflicted incidents; however, an accidental damage endorsement can be added to your policy.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "选保单和理赔",
        titleEn: "Choosing a Policy and Filing a Claim",
        description: "比较保单选项，了解理赔流程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to compare a couple of plans. What's the difference between actual cash value and replacement cost coverage?",
            textZh: "我想比较几个方案。实际现金价值和重置成本保障有什么区别？",
            casualVersion: "So what's the deal with actual cash value versus replacement cost? Which one should I get?",
            culturalNote: "美国保险有两种理赔方式：actual cash value（按折旧后的价值赔）和 replacement cost（按重新购买的价格赔）。后者保费稍高但理赔时更划算。中国保险中类似概念不常被普通消费者接触到。",
            commonMistake: {
              wrong: "What is difference of actual cash value and replacement cost?",
              correct: "What's the difference between actual cash value and replacement cost coverage?",
              explanation: "'difference between A and B' 是固定搭配，不能用 'difference of'。",
            },
            formalityVariants: {
              casual: "What's the diff between actual cash value and replacement cost? Which is better?",
              standard: "What's the difference between actual cash value and replacement cost coverage?",
              formal: "I'd appreciate a comparison between actual cash value and replacement cost coverage. Could you elaborate on the distinctions and respective advantages?",
            },
          },
          {
            speaker: "them",
            role: "保险代理",
            textEn: "Great question. Actual cash value pays you what your stuff is worth today, factoring in depreciation. So if your five-year-old TV breaks, they'll pay you what a five-year-old TV is worth, not what a new one costs. Replacement cost pays you what it costs to buy a brand-new equivalent item. It's a few dollars more per month but definitely worth it in my opinion.",
            textZh: "好问题。实际现金价值按你的东西今天的价值赔，会算折旧。所以如果你用了5年的电视坏了，赔的是一台5年旧电视的价值，不是新电视的价格。重置成本保障赔的是买一个全新同等物品的费用。每月多几美元，但在我看来绝对值得。",
            keyPhrases: [
              { en: "depreciation", zh: "折旧" },
              { en: "replacement cost", zh: "重置成本" },
              { en: "brand-new equivalent", zh: "全新同等物品" },
            ],
            alternativeExpressions: [
              { textEn: "So actual cash value is basically what your stuff is worth right now — used. Replacement cost is what it takes to replace it with something new. A little pricier each month but way better if you ever have to file a claim.", textZh: "实际现金价值就是你东西现在的二手价值。重置成本是买全新替代品的花费。每月贵一点但理赔时好得多。", actionHint: "file a claim 提交理赔申请", frequency: "common" },
            ],
            casualVersion: "OK so actual cash value — they look at what your stuff is worth now, after it's been used. If your TV's five years old, they pay you for a five-year-old TV. Replacement cost? They pay for a brand-new one. Costs a little more per month but totally worth it.",
            formalityVariants: {
              casual: "ACV pays what your used stuff's worth. Replacement cost pays for brand-new. Couple bucks more a month but way better.",
              standard: "Actual cash value factors in depreciation, while replacement cost pays for a brand-new equivalent. It's a few dollars more monthly but worth it.",
              formal: "Actual cash value coverage accounts for depreciation, reimbursing you based on the current market value of the item. Replacement cost coverage, by contrast, provides sufficient funds to purchase a new, equivalent item at today's retail price. The additional monthly premium is modest.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll go with replacement cost then. One more thing — if something does happen, like a break-in, what's the process for filing a claim?",
            textZh: "那我选重置成本的。还有一个问题——如果真的出事了，比如被闯入，理赔流程是什么？",
            casualVersion: "Yeah I'll do replacement cost. But like, if I get robbed or something, what do I actually do to file a claim?",
            commonMistake: {
              wrong: "If someone break in my house, how to claim the insurance?",
              correct: "If something happens, like a break-in, what's the process for filing a claim?",
              explanation: "'break-in' 作名词用，指入室盗窃。理赔说 'file a claim'，不说 'claim the insurance'。",
            },
            formalityVariants: {
              casual: "Cool, replacement cost it is. So if my place gets broken into, what do I do?",
              standard: "I'll go with replacement cost. If something happens, like a break-in, what's the process for filing a claim?",
              formal: "I'll opt for replacement cost coverage. In the event of an incident such as a burglary, could you walk me through the claims process?",
            },
          },
          {
            speaker: "them",
            role: "保险代理",
            textEn: "First, call the police and get a report — that's essential. Then contact us within twenty-four hours to open a claim. You'll need to document everything that was stolen or damaged — photos, receipts, serial numbers if you have them. We'll assign an adjuster who'll review your claim, and most straightforward claims are settled within two to four weeks. I always recommend keeping a home inventory — a list or photos of your valuables — so you're prepared just in case.",
            textZh: "首先报警并拿到报案记录——这是必须的。然后24小时内联系我们开立理赔。你需要记录所有被盗或损坏的东西——照片、收据、有序列号的也留着。我们会派一个理赔员审核你的理赔，大部分简单的理赔两到四周内解决。我一直建议做一个家庭财产清单——列出或拍照记录贵重物品——以防万一。",
            keyPhrases: [
              { en: "police report", zh: "报案记录" },
              { en: "adjuster", zh: "理赔员/定损员" },
              { en: "home inventory", zh: "家庭财产清单" },
            ],
            alternativeExpressions: [
              { textEn: "Step one: call the cops and file a police report. Step two: call us right away — within twenty-four hours. Take pictures of everything, keep any receipts you have. We send out an adjuster and most claims wrap up in a couple weeks.", textZh: "第一步：报警拿报案记录。第二步：24小时内给我们打电话。拍照留证据，保留收据。我们派理赔员过去，大部分理赔几周内搞定。", actionHint: "wrap up 完成/结束", frequency: "common" },
            ],
            casualVersion: "OK so first thing — call the cops, get a police report. Then hit us up within 24 hours to start the claim. Take pics of everything, dig up any receipts. We'll send someone out to check things out and usually it's done in two to four weeks. Pro tip: keep a list of all your stuff with photos. Makes everything way easier.",
            formalityVariants: {
              casual: "Call the cops, get a report, then call us ASAP. Take pics, find receipts. We send an adjuster and usually wrap it up in a few weeks.",
              standard: "File a police report, contact us within twenty-four hours, document everything with photos and receipts, and we'll send an adjuster. Most claims settle in two to four weeks.",
              formal: "The process begins with obtaining a police report, followed by notifying us within twenty-four hours. Comprehensive documentation — photographs, receipts, and serial numbers — is essential. An adjuster will be assigned to evaluate your claim, and resolution typically occurs within two to four weeks.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I add my roommate to the same policy, or does she need her own?",
            textZh: "我能把室友加到同一个保单上吗，还是她需要自己买一份？",
            casualVersion: "Quick question — can my roommate just be on my plan or does she need her own insurance?",
            culturalNote: "在美国合租很常见，但租客保险通常只保投保人和其直系亲属。室友一般需要单独购买。这和中国的情况不同，中国很少涉及室友的保险问题。",
            commonMistake: {
              wrong: "Can my roommate use my insurance together?",
              correct: "Can I add my roommate to the same policy, or does she need her own?",
              explanation: "'add someone to a policy' 是加入保单的正确说法。用 'or' 提出两种可能性更清晰。",
            },
            formalityVariants: {
              casual: "Can my roommate hop on my plan or does she gotta get her own?",
              standard: "Can I add my roommate to the same policy, or does she need her own?",
              formal: "Is it possible to include my roommate on my existing policy, or would she be required to obtain separate coverage?",
            },
          },
          {
            speaker: "them",
            role: "保险代理",
            textEn: "Unfortunately, roommates typically need their own separate policies. Our policy only covers you and any relatives living with you, like a spouse or dependent children. If your roommate's stuff gets stolen, your policy won't cover her belongings. The good news is she can get her own plan for the same price range — fifteen to twenty a month — and she should, because if anything happens, she'd be completely unprotected otherwise.",
            textZh: "很遗憾，室友通常需要单独买保险。我们的保单只保你和与你同住的亲属，比如配偶或受抚养子女。如果你室友的东西被偷，你的保单不保她的财物。好消息是她可以用同样的价格买到自己的保单——每月15到20美元——而且她应该买，因为不然出了事她完全没有保障。",
            keyPhrases: [
              { en: "separate policies", zh: "单独的保单" },
              { en: "dependent children", zh: "受抚养子女" },
              { en: "unprotected", zh: "没有保障的" },
            ],
            alternativeExpressions: [
              { textEn: "Nah, roommates gotta get their own coverage. Your policy only covers you and family members living with you. But she can get her own plan for basically the same price — it's cheap and really not worth the risk of going without it.", textZh: "不行，室友得自己买保险。你的保单只保你和同住的家人。但她可以买自己的，价格差不多——很便宜，不买的风险不值得。", actionHint: "going without it 不买/没有", frequency: "common" },
            ],
            casualVersion: "Nah, roommates can't share a policy. It only covers you and your family. She needs her own. But it's the same price — like 15 or 20 bucks. Honestly she should get one too 'cause otherwise she's got zero protection.",
            formalityVariants: {
              casual: "Roommates can't share. She needs her own plan — same price though. Definitely should get one.",
              standard: "Roommates typically need separate policies. Ours covers you and relatives only. She can get her own plan at a similar price.",
              formal: "Regrettably, roommates are generally required to obtain individual policies. Coverage under your plan extends exclusively to you and qualifying relatives residing in the household. I would strongly recommend she secure her own coverage, as she would otherwise be entirely without protection.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Let's go ahead and set up the replacement cost plan with a five-hundred-dollar deductible. Can I pay monthly?",
            textZh: "明白了。那就买重置成本方案，500美元免赔额。可以按月付吗？",
            casualVersion: "OK cool. Let's do the replacement cost one with a 500 deductible. Can I just pay month to month?",
            commonMistake: {
              wrong: "I want to buy the replacement cost plan. Deductible five hundred. Can I pay by month?",
              correct: "Let's go ahead and set up the replacement cost plan with a five-hundred-dollar deductible. Can I pay monthly?",
              explanation: "'Let's go ahead and set up' 比 'I want to buy' 更自然且积极。'pay monthly' 是按月付的地道说法。",
            },
            formalityVariants: {
              casual: "Yeah let's do replacement cost, 500 deductible. Monthly payments cool?",
              standard: "Let's set up the replacement cost plan with a five-hundred-dollar deductible. Can I pay monthly?",
              formal: "I'd like to proceed with the replacement cost plan and a five-hundred-dollar deductible. Would monthly installment payments be an option?",
            },
          },
          {
            speaker: "them",
            role: "保险代理",
            textEn: "Absolutely, monthly payments are no problem. With the replacement cost plan and a five-hundred-dollar deductible, you're looking at about eighteen dollars a month. I'll just need your ID, your lease agreement, and a form of payment. We can have you set up in about fifteen minutes. Your landlord will automatically receive a certificate of insurance, which is probably what they need to see before you move in.",
            textZh: "完全没问题，可以按月付。重置成本方案加500美元免赔额，大概每月18美元。我只需要你的证件、租约和付款方式。大概15分钟就能搞定。你的房东会自动收到一份保险证明，搬进去之前他们可能就是要这个。",
            keyPhrases: [
              { en: "certificate of insurance", zh: "保险证明" },
              { en: "lease agreement", zh: "租约/租赁协议" },
              { en: "set up", zh: "办好/设置好" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, monthly's fine. That plan comes out to about eighteen a month. Bring your ID and lease, and we'll have you done in fifteen minutes. We'll send the insurance cert straight to your landlord.", textZh: "当然，按月付没问题。大概每月18美元。带上证件和租约，15分钟搞定。我们会直接把保险证明发给你房东。", actionHint: "cert = certificate 证明的缩写", frequency: "common" },
            ],
            casualVersion: "Yep, monthly's totally fine. You're looking at about 18 bucks a month. Bring your ID and your lease, we'll knock this out in 15 minutes. And we'll shoot the insurance cert over to your landlord automatically.",
            formalityVariants: {
              casual: "Yeah, 18 a month. Bring ID and lease. Done in 15 min. We'll send the cert to your landlord.",
              standard: "Monthly payments are available. It's about eighteen dollars a month. We'll need your ID, lease, and payment method, and we'll send the certificate directly to your landlord.",
              formal: "Monthly installments are certainly available. The premium for your selected plan would be approximately eighteen dollars per month. We will require your identification, lease agreement, and preferred payment method. A certificate of insurance will be transmitted directly to your landlord upon policy activation.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 17. 垃圾分类和收运规则 ====================
  {
    id: "housing-garbage-recycling",
    category: "housing",
    titleZh: "垃圾分类和收运规则",
    titleEn: "Garbage and Recycling Rules",
    description: "了解美国小区垃圾分类、收运时间和规则",
    otherRole: "邻居",
    otherRoleIcon: "🗑️",
    flows: [
      {
        id: "basic",
        titleZh: "基本垃圾分类",
        titleEn: "Basic Trash and Recycling",
        description: "向邻居了解垃圾分类和收运基本规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just moved in next door. I'm a little confused about the trash and recycling here. Which bin is for what?",
            textZh: "你好，我刚搬到隔壁。垃圾分类这块我不太清楚。哪个桶装什么？",
            casualVersion: "Hey, just moved in. Kinda confused about the trash situation. Which bin goes where?",
            culturalNote: "美国垃圾分类系统因城市而异，但一般分为 trash（普通垃圾）、recycling（可回收物）和有时 yard waste（庭院垃圾）。和中国的干湿垃圾分类不同，美国更看重可回收物的分离。",
            commonMistake: {
              wrong: "Which garbage can is for which garbage?",
              correct: "Which bin is for what?",
              explanation: "在美国，垃圾桶一般叫 bin 或 can。'Which bin is for what?' 简洁自然，比重复 garbage 好。",
            },
            formalityVariants: {
              casual: "Hey neighbor, which bin's for what? I'm totally lost with the trash stuff.",
              standard: "I just moved in next door. I'm a little confused about the trash and recycling. Which bin is for what?",
              formal: "Hello, I've recently moved in next door. I was wondering if you could clarify the waste disposal and recycling system for me.",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Welcome to the neighborhood! So the black bin is for regular trash — anything that can't be recycled. The blue bin is for recycling — paper, cardboard, plastic bottles, and cans. Make sure you rinse out the containers before tossing them in, otherwise the whole batch can get rejected.",
            textZh: "欢迎来到社区！黑色桶是普通垃圾——不能回收的东西。蓝色桶是可回收物——纸张、纸箱、塑料瓶和罐头。扔进去之前记得冲洗干净容器，不然整批可能会被拒收。",
            keyPhrases: [
              { en: "regular trash", zh: "普通垃圾" },
              { en: "rinse out", zh: "冲洗干净" },
              { en: "the whole batch can get rejected", zh: "整批可能被拒收" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, welcome! OK so black is trash, blue is recycling. Paper, plastic, cans go in the blue one. Just rinse your stuff out first or they won't take it.", textZh: "嘿欢迎！黑色是垃圾，蓝色是回收。纸张、塑料、罐头放蓝色。先冲洗干净不然不收。", actionHint: "they won't take it 他们不会收走", frequency: "common" },
              { textEn: "Black bin for general waste, blue bin for recyclables — that includes paper, cardboard, plastics, and aluminum. Containers should be rinsed to avoid contaminating the recycling stream.", textZh: "黑桶放普通垃圾，蓝桶放可回收物——包括纸张、纸箱、塑料和铝制品。容器要冲洗以免污染回收物。", actionHint: "recycling stream 回收物流", frequency: "occasional" },
            ],
            casualVersion: "Welcome! Black's trash, blue's recycling. Paper, plastic, cans — blue bin. Just rinse the containers first or they'll leave the whole thing.",
            formalityVariants: {
              casual: "Black's for trash, blue's for recycling. Rinse stuff or they won't pick it up.",
              standard: "The black bin is for regular trash, and the blue bin is for recycling — paper, cardboard, plastic, and cans. Rinse containers before putting them in.",
              formal: "The black receptacle is designated for general waste, while the blue is for recyclable materials — paper, cardboard, plastics, and aluminum cans. I'd recommend rinsing containers thoroughly to prevent contamination.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. What day does the truck come? I don't want to put the bins out too early or too late.",
            textZh: "了解了。垃圾车哪天来？我不想太早或太晚把桶放出去。",
            casualVersion: "Got it. When's trash day? Don't wanna be that person who leaves their bins out forever.",
            culturalNote: "在美国，需要在指定日期的前一天晚上或当天早上把垃圾桶推到路边（curb），收完后当天要拉回来。放太早或取太晚可能被邻居投诉或被 HOA 罚款。",
            commonMistake: {
              wrong: "When does garbage truck come? I don't want to put garbage too early.",
              correct: "What day does the truck come? I don't want to put the bins out too early or too late.",
              explanation: "'put the bins out' 是把垃圾桶推到路边的地道说法。说 'too early or too late' 比只说一个更自然完整。",
            },
            formalityVariants: {
              casual: "When's pickup day? I don't wanna leave the bins out at the wrong time.",
              standard: "What day does the truck come? I don't want to put the bins out too early or too late.",
              formal: "Could you tell me which day collection occurs? I'd like to ensure I put the bins out at the appropriate time.",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Trash pickup is every Tuesday, and recycling is every other Tuesday. You can put your bins out the night before after six p.m., but you need to bring them back in by the end of the day on Tuesday. The HOA will actually send you a warning if you leave them out too long. Oh, and make sure the lids are closed — if stuff is sticking out, they won't take it.",
            textZh: "垃圾每周二收，回收物隔周二收一次。你可以前一天晚上6点以后把桶放出去，但周二当天结束前要拉回来。如果放太久，HOA 会发警告的。对了，盖子要盖好——如果东西露出来，他们不会收。",
            keyPhrases: [
              { en: "every other Tuesday", zh: "隔一个周二/每两周的周二" },
              { en: "HOA", zh: "业主委员会" },
              { en: "sticking out", zh: "露出来/伸出来" },
            ],
            alternativeExpressions: [
              { textEn: "Trash is Tuesdays, recycling is biweekly. Roll your bins out Monday night after six and pull them back Tuesday evening. Don't leave 'em out or the HOA gets on your case. And close the lids — they'll skip you if stuff's hanging out.", textZh: "垃圾周二收，回收物两周一次。周一晚6点后推出去，周二晚拉回来。别放太久不然HOA会找你。盖好盖子——东西露出来就不收。", actionHint: "gets on your case 找你麻烦; skip you 跳过你不收", frequency: "common" },
            ],
            casualVersion: "Trash is every Tuesday, recycling every other week. Put 'em out Monday night after six, bring 'em back by Tuesday night. HOA'll ding you if you leave 'em out. And keep the lids shut — anything sticking out and they'll leave it.",
            formalityVariants: {
              casual: "Tuesday for trash, every other week for recycling. Don't leave bins out past Tuesday or the HOA's gonna bug you.",
              standard: "Trash is every Tuesday, recycling every other Tuesday. Bins out after six p.m. the night before, back in by end of day Tuesday. Keep lids closed.",
              formal: "Regular waste collection occurs each Tuesday, with recycling collected on alternate Tuesdays. Bins may be placed curbside after six p.m. on the preceding evening and must be retrieved by the close of business on collection day. The HOA does enforce compliance.",
            },
          },
          {
            speaker: "you",
            textEn: "What about big items like old furniture? I have a couch I need to get rid of.",
            textZh: "大件东西比如旧家具怎么办？我有个沙发要处理。",
            casualVersion: "What do I do with big stuff? I've got an old couch I need to dump.",
            commonMistake: {
              wrong: "How to throw big things like sofa? I have a sofa to throw away.",
              correct: "What about big items like old furniture? I have a couch I need to get rid of.",
              explanation: "'get rid of' 是处理掉/扔掉的地道说法。在美国沙发更常说 couch 而不是 sofa（sofa 偏正式）。",
            },
            formalityVariants: {
              casual: "What about big stuff? Got an old couch gotta go.",
              standard: "What about big items like old furniture? I have a couch I need to get rid of.",
              formal: "How are large items such as furniture disposed of? I have a sofa I need to arrange removal for.",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "For bulky items, you need to schedule a special pickup through the city's website or call three-one-one. It's usually free once or twice a year, but after that there's a fee — I think it's around twenty-five bucks per item. They'll give you a pickup date and you just leave it by the curb that morning. Some people also post free stuff on Facebook Marketplace or put it on the curb with a 'free' sign — it's usually gone within an hour around here.",
            textZh: "大件物品需要在市政府网站上预约专门收运，或者打311。通常每年免费一两次，之后有费用——我记得大概每件25美元。他们会给你一个收运日期，那天早上放路边就行。有些人也会在 Facebook Marketplace 上发免费信息，或者放路边贴个 'free' 标签——在咱们这片通常一小时内就被人拿走了。",
            keyPhrases: [
              { en: "bulky items", zh: "大件物品" },
              { en: "schedule a special pickup", zh: "预约专门收运" },
              { en: "three-one-one", zh: "311（市政服务热线）" },
            ],
            alternativeExpressions: [
              { textEn: "Big stuff you gotta call the city or go online to book a pickup. Free a couple times a year, then it's like 25 bucks. Or honestly, just stick it on the curb with a 'free' sign — someone'll grab it real quick.", textZh: "大件要打电话或上网预约。每年免费几次，之后大概25美元。或者直接放路边贴个免费标签——很快就被人拿走。", actionHint: "grab it 拿走; stick it 放那儿", frequency: "common" },
            ],
            culturalNote: "美国有一种独特的 'curb culture'——把不要的东西放路边贴 'free' 标签，别人可以自取。这不是丢脸的事，而是被视为环保和实用的做法。在中国，旧家具一般卖给收废品的或找人搬走。",
            casualVersion: "Big stuff? Call 311 or book online for a special pickup. Free a couple times a year, after that it's like 25 bucks each. Or just put it out with a 'free' sign — it'll disappear real fast. People also post on Facebook Marketplace.",
            formalityVariants: {
              casual: "Call 311 for big stuff or stick it on the curb with a 'free' sign. Someone'll take it.",
              standard: "Schedule a bulky item pickup through the city website or 311. It's free once or twice a year. You can also try posting it for free on Facebook Marketplace.",
              formal: "Large items require a scheduled collection through the municipal website or by dialing 311. Complimentary service is typically available once or twice annually, with a per-item fee thereafter. Alternatively, items may be listed on community platforms for free collection.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "特殊垃圾处理和违规应对",
        titleEn: "Special Waste and Handling Violations",
        description: "处理电子垃圾、危险废物以及收到违规通知",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I have a bunch of old electronics — a broken printer, some dead batteries, and an old monitor. Can I just throw those in the regular trash?",
            textZh: "我有一堆旧电子产品——一台坏打印机、一些废电池和一个旧显示器。可以直接扔普通垃圾吗？",
            casualVersion: "Got a bunch of old electronics — busted printer, dead batteries, old monitor. Can I just toss those in the trash?",
            culturalNote: "在美国，电子垃圾（e-waste）不能扔普通垃圾桶，大部分州有法律要求。中国近年也开始推行电子垃圾回收，但美国的处罚更严格，而且有很多免费回收点。",
            commonMistake: {
              wrong: "I have many old electronic product. Can I put in normal garbage?",
              correct: "I have a bunch of old electronics. Can I just throw those in the regular trash?",
              explanation: "'electronics' 本身就是复数名词，不需要加 'product'。'regular trash' 比 'normal garbage' 更地道。",
            },
            formalityVariants: {
              casual: "Got a ton of old tech junk. Can I just chuck it in the trash or what?",
              standard: "I have some old electronics I need to dispose of. Can I put them in the regular trash?",
              formal: "I have several electronic items requiring disposal — a printer, batteries, and a monitor. Is it permissible to include them with standard household waste?",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "No no no, definitely don't do that — it's actually illegal in most states to throw electronics in the regular trash. Batteries especially are considered hazardous waste. Best Buy and Staples both take old electronics for free. For batteries, most grocery stores have a drop-off bin near the entrance. The city also does free e-waste collection events a few times a year — there's one coming up next month I think.",
            textZh: "千万别！在大多数州，把电子产品扔普通垃圾是违法的。电池尤其算危险废物。Best Buy 和 Staples 都免费收旧电子产品。电池的话，大部分超市入口附近都有回收箱。市里每年也有几次免费电子垃圾回收活动——下个月好像就有一次。",
            keyPhrases: [
              { en: "hazardous waste", zh: "危险废物" },
              { en: "drop-off bin", zh: "回收箱/投放箱" },
              { en: "e-waste collection event", zh: "电子垃圾回收活动" },
            ],
            alternativeExpressions: [
              { textEn: "Oh man, don't toss that stuff in the trash — you can get fined for that. Electronics are e-waste. Take them to Best Buy or Staples, they recycle for free. Batteries go in the little drop-off boxes at grocery stores.", textZh: "别扔垃圾桶——那会被罚款的。电子产品属于电子垃圾。拿去 Best Buy 或 Staples，免费回收。电池放超市里的小回收箱。", actionHint: "get fined 被罚款", frequency: "common" },
            ],
            casualVersion: "Whoa, don't do that! That's illegal — especially batteries, those are hazardous waste. Take electronics to Best Buy or Staples for free. Batteries? Most grocery stores have a little bin by the door. City also does e-waste events a few times a year.",
            formalityVariants: {
              casual: "Nope, can't trash those. Illegal. Best Buy takes 'em free. Batteries go in the bins at grocery stores.",
              standard: "Electronics can't go in regular trash — it's illegal. Take them to Best Buy or Staples. Batteries go in drop-off bins at grocery stores. The city also hosts e-waste events.",
              formal: "Disposing of electronics in standard waste is prohibited by law. Retailers such as Best Buy and Staples accept electronics for recycling at no charge. Batteries, classified as hazardous materials, should be deposited in designated collection receptacles at grocery stores. The municipality also organizes periodic e-waste collection events.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, I had no idea. Thanks for the heads-up. Actually, I got a notice from the HOA saying my recycling was contaminated last week. What does that even mean?",
            textZh: "啊，我完全不知道。谢谢提醒。说到这个，我上周收到 HOA 的通知说我的回收物被污染了。这到底什么意思？",
            casualVersion: "Yikes, good thing I asked. Oh also — the HOA sent me some notice about contaminated recycling? What's that about?",
            commonMistake: {
              wrong: "HOA said my recycle was polluted. What meaning?",
              correct: "I got a notice from the HOA saying my recycling was contaminated. What does that even mean?",
              explanation: "'recycling was contaminated' 是回收物被污染的正确说法，不是 'recycle was polluted'。'What does that even mean?' 比 'What meaning?' 更自然。",
            },
            formalityVariants: {
              casual: "Wait, the HOA said my recycling was contaminated? What does that mean?",
              standard: "I got a notice about contaminated recycling from the HOA. What does that mean?",
              formal: "I received a notification from the HOA indicating my recycling was contaminated. Could you help me understand what that entails?",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "That means something in your recycling bin shouldn't have been there. Common mistakes are putting in plastic bags — those can't be recycled curbside. Also greasy pizza boxes, food-stained containers, or Styrofoam. When the recycling truck spots contamination, they sometimes reject the whole bin or flag your address. First time's usually just a warning, but if it keeps happening they can fine you or even take away your recycling bin.",
            textZh: "意思是你的回收桶里放了不该放的东西。常见错误是放了塑料袋——路边回收不收塑料袋。还有油腻的披萨盒、有食物残渍的容器、或泡沫塑料。回收车发现污染物时，有时会拒收整桶或标记你的地址。第一次通常只是警告，但如果一直这样，可以罚款甚至收走你的回收桶。",
            keyPhrases: [
              { en: "contamination", zh: "污染/混入不当物品" },
              { en: "flag your address", zh: "标记你的地址" },
              { en: "Styrofoam", zh: "泡沫塑料" },
            ],
            alternativeExpressions: [
              { textEn: "Basically you put something in the recycling that doesn't belong. Usually plastic bags, dirty pizza boxes, or Styrofoam. They catch it, they flag you. First time's a warning. Keep doing it, they'll fine you or pull your recycling service.", textZh: "就是你放了不属于回收的东西进去。通常是塑料袋、脏披萨盒或泡沫塑料。他们发现就标记你。第一次警告，继续犯会罚款或取消回收服务。", actionHint: "pull your service 取消你的服务", frequency: "common" },
            ],
            casualVersion: "You put something wrong in the recycling. Probably plastic bags, dirty pizza boxes, or Styrofoam — people mess that up all the time. First time they just warn you but keep doing it and they'll fine you or take your bin away.",
            formalityVariants: {
              casual: "You put something wrong in there. Plastic bags, greasy boxes, Styrofoam — usual suspects. First time's a warning.",
              standard: "It means something in your recycling bin was non-recyclable. Common mistakes are plastic bags, greasy pizza boxes, and Styrofoam. First offense is a warning; repeat violations can lead to fines.",
              formal: "The notice indicates that non-recyclable materials were detected in your recycling container. Common contaminants include plastic bags, food-soiled cardboard, and polystyrene foam. The initial infraction typically warrants a warning, though repeated violations may result in monetary penalties.",
            },
          },
          {
            speaker: "you",
            textEn: "I think I put some plastic bags in there. I thought all plastics were recyclable. Where am I supposed to take plastic bags?",
            textZh: "我好像放了塑料袋进去。我以为所有塑料都能回收。塑料袋应该放哪？",
            casualVersion: "Ohh, I probably tossed some plastic bags in there. Aren't all plastics recyclable? Where do plastic bags go?",
            culturalNote: "这是非常常见的误解——不只是中国人，很多美国人也搞错。塑料袋不能放路边回收桶，因为会缠绕回收机器的齿轮。大多数超市门口有专门的塑料袋回收箱。",
            commonMistake: {
              wrong: "I think I put plastic bag inside. I thought plastic can all recycle.",
              correct: "I think I put some plastic bags in there. I thought all plastics were recyclable.",
              explanation: "'plastic bags' 用复数。'all plastics were recyclable' 比 'plastic can all recycle' 语法更正确。",
            },
            formalityVariants: {
              casual: "Oops, I probably put plastic bags in there. Where do those go?",
              standard: "I think I put some plastic bags in there. I thought all plastics were recyclable. Where should I take them?",
              formal: "I believe I may have inadvertently placed plastic bags in the recycling. I was under the impression that all plastics were recyclable. Where should plastic bags be taken for proper disposal?",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Super common mistake — don't feel bad. Plastic bags jam the sorting machines at the recycling facility, so they can't go in the curbside bin. Most grocery stores like Walmart, Target, and Trader Joe's have a plastic bag drop-off right by the entrance. Just collect them and bring them next time you go shopping. Honestly, the best move is to switch to reusable bags — a lot of cities are banning plastic bags anyway.",
            textZh: "这个错误太常见了——别不好意思。塑料袋会卡住回收站的分拣机器，所以不能放路边回收桶。大部分超市像 Walmart、Target、Trader Joe's 入口都有塑料袋回收箱。攒起来下次买菜时带去就行。说实话，最好的办法是用可重复使用的袋子——很多城市反正也在禁塑料袋了。",
            keyPhrases: [
              { en: "sorting machines", zh: "分拣机器" },
              { en: "drop-off", zh: "回收点/投放处" },
              { en: "reusable bags", zh: "可重复使用的袋子/环保袋" },
            ],
            alternativeExpressions: [
              { textEn: "Everyone makes that mistake. Plastic bags mess up the recycling machines. Most grocery stores have a bin by the door for them. Or just get some reusable bags — way easier and a lot of places charge for plastic ones now anyway.", textZh: "人人都会犯这个错。塑料袋会搞坏回收机器。超市门口都有回收箱。或者买几个环保袋——更方便，而且很多地方现在塑料袋要收费了。", actionHint: "mess up 搞坏/弄乱", frequency: "common" },
            ],
            casualVersion: "Everyone does that. Plastic bags wreck the sorting machines so they can't go in the bin. Take 'em to any grocery store — there's always a drop-off by the door. Or just get reusable bags. Most places charge for plastic ones now anyway.",
            formalityVariants: {
              casual: "Everyone does that. Take 'em to the grocery store. Or just get reusable bags.",
              standard: "Plastic bags jam sorting machines, so they can't go curbside. Grocery stores have drop-off bins. Consider switching to reusable bags.",
              formal: "That's an exceedingly common misconception. Plastic bags interfere with sorting equipment at recycling facilities. Most major retailers provide collection receptacles at their entrances. I would also recommend transitioning to reusable bags, particularly as many municipalities are implementing single-use plastic restrictions.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 18. 和网络安装工沟通 ====================
  {
    id: "housing-internet-installer",
    category: "housing",
    titleZh: "和网络安装工沟通",
    titleEn: "Communicating with Internet Installer",
    description: "预约和配合网络安装工上门安装宽带",
    otherRole: "网络安装工",
    otherRoleIcon: "🌐",
    flows: [
      {
        id: "basic",
        titleZh: "基本安装沟通",
        titleEn: "Basic Installation Setup",
        description: "网络安装工上门时的基本沟通",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "网络安装工",
            textEn: "Hi there, I'm Mike from Xfinity. I'm here to set up your internet. Mind if I take a look around and find the best spot for the router?",
            textZh: "你好，我是 Xfinity 的 Mike。我来给你装网络。介意我看看找个放路由器最好的位置吗？",
            keyPhrases: [
              { en: "set up your internet", zh: "安装你的网络" },
              { en: "take a look around", zh: "四处看看" },
              { en: "router", zh: "路由器" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, I'm here for the internet install. Let me check out where the cable outlets are and figure out the best place for the router.", textZh: "嘿，我来装网络的。让我看看线缆接口在哪，找个最好的路由器位置。", actionHint: "cable outlets 线缆接口", frequency: "common" },
            ],
            casualVersion: "Hey! I'm Mike, here for the internet setup. Cool if I look around for the best router spot?",
            formalityVariants: {
              casual: "Hey, I'm Mike from Xfinity. Here to set up your internet. Mind if I look around?",
              standard: "Hi, I'm Mike from Xfinity. I'm here to set up your internet. May I look around to find the best spot for the router?",
              formal: "Good morning, my name is Mike and I'm a technician from Xfinity. I'm here to complete your internet installation. With your permission, I'd like to survey the space to determine the optimal placement for the router.",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, come on in. I was hoping to put the router in the living room so it covers the whole apartment. Is that doable?",
            textZh: "当然，请进。我想把路由器放客厅，这样能覆盖整个公寓。可以吗？",
            casualVersion: "Yeah, come in. I was thinking the living room for the router — would that cover the whole place?",
            culturalNote: "在美国，让维修工进门是很正常的。但你可以要求看他们的工作证或公司ID。有些人会提供鞋套（shoe covers），但不是所有人——如果你介意可以直接说 'Would you mind taking your shoes off?'",
            commonMistake: {
              wrong: "Please come in. I want router in living room. Can it cover all house?",
              correct: "Come on in. I was hoping to put the router in the living room so it covers the whole apartment.",
              explanation: "'I was hoping to' 比 'I want' 更礼貌自然。'covers the whole apartment' 比 'cover all house' 更准确。",
            },
            formalityVariants: {
              casual: "Yeah come in! Can we do the router in the living room? Would that cover everything?",
              standard: "Sure, come on in. I was hoping to put the router in the living room so it covers the whole apartment.",
              formal: "Certainly, please come in. I'd prefer the router to be placed in the living room, ideally in a position that provides coverage throughout the entire apartment. Would that be feasible?",
            },
          },
          {
            speaker: "them",
            role: "网络安装工",
            textEn: "Let me check where the coax outlet is... OK, there's one right here behind the TV stand. That's actually a great spot — central location, and you'll get solid coverage throughout. I'm going to run a speed test once everything's hooked up to make sure you're getting the speeds you're paying for. You signed up for the 300 megabit plan, right?",
            textZh: "我看看同轴电缆接口在哪……好的，电视柜后面就有一个。这位置其实很好——在中间，整个公寓信号都会不错。全部接好后我会跑个速度测试，确保你拿到了付费对应的速度。你办的是300兆的套餐对吧？",
            keyPhrases: [
              { en: "coax outlet", zh: "同轴电缆接口" },
              { en: "speed test", zh: "速度测试" },
              { en: "hooked up", zh: "接好/连好" },
            ],
            alternativeExpressions: [
              { textEn: "There's a coax port behind the TV stand — perfect. I'll set up the router here, run a speed test, and make sure you're hitting the speeds on your plan. You're on the 300 meg plan?", textZh: "电视柜后面有个同轴接口——很好。我把路由器装这，跑个速度测试，确保达到你套餐的速度。你是300兆的套餐？", actionHint: "hitting the speeds 达到那个速度", frequency: "common" },
            ],
            casualVersion: "OK, coax outlet's right behind the TV. Perfect spot actually. I'll hook everything up, run a speed test, make sure you're getting what you're paying for. You got the 300 meg plan, yeah?",
            formalityVariants: {
              casual: "Coax is behind the TV — perfect. I'll set it up here, test the speed, make sure it's all good. You got the 300 meg plan?",
              standard: "The coax outlet is behind the TV stand. I'll set up here, run a speed test, and verify you're getting the speeds on your plan. You're on the 300 megabit plan?",
              formal: "I've located a coaxial outlet behind the television stand, which provides an ideal central location for optimal coverage. Once the installation is complete, I'll conduct a speed test to verify your connection meets the specifications of your 300-megabit service plan.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, that's the one. How long does the installation usually take?",
            textZh: "对，是那个。安装一般要多长时间？",
            casualVersion: "Yep, that's it. How long's this gonna take?",
            commonMistake: {
              wrong: "Yes. How long time does the installation need?",
              correct: "How long does the installation usually take?",
              explanation: "'How long does it take' 是问时长的标准句型，不需要加 'time'。",
            },
            formalityVariants: {
              casual: "Yeah that's the one. How long's this gonna take?",
              standard: "Yes, that's the one. How long does the installation usually take?",
              formal: "That's correct. Could you give me an estimate of how long the installation process will take?",
            },
          },
          {
            speaker: "them",
            role: "网络安装工",
            textEn: "Shouldn't take more than thirty to forty-five minutes since you've got an existing outlet. I'll set up the modem and router, activate the line, run a speed test, and then walk you through connecting your devices. I'll also set up your Wi-Fi network name and password — you can change those anytime through the app.",
            textZh: "因为已经有接口了，最多30到45分钟。我会装好调制解调器和路由器，激活线路，跑速度测试，然后教你怎么连接设备。我还会设好你的 Wi-Fi 名称和密码——你随时可以通过 APP 修改。",
            keyPhrases: [
              { en: "modem", zh: "调制解调器" },
              { en: "activate the line", zh: "激活线路" },
              { en: "walk you through", zh: "一步步教你" },
            ],
            alternativeExpressions: [
              { textEn: "Probably thirty to forty-five min since the outlet's already here. I'll get the modem and router going, make sure the connection's good, and show you how to get your stuff connected. I'll set up your Wi-Fi name and password too.", textZh: "因为接口已经有了，大概30到45分钟。我把调制解调器和路由器装好，确认连接正常，教你怎么连设备。Wi-Fi 名和密码我也帮你设好。", actionHint: "get going 让...开始运行", frequency: "common" },
            ],
            casualVersion: "Like thirty to forty-five minutes tops. I'll get the modem and router set up, make sure everything's working, and show you how to connect your stuff. I'll set up your Wi-Fi name and password too — you can change 'em whenever on the app.",
            formalityVariants: {
              casual: "Half hour, maybe forty-five min. I'll get everything going and show you how to connect your stuff.",
              standard: "About thirty to forty-five minutes. I'll set up the equipment, run a speed test, and help you connect your devices.",
              formal: "The installation should require approximately thirty to forty-five minutes. I'll configure the modem and router, activate the service line, conduct a verification speed test, and then guide you through the device connection process.",
            },
          },
          {
            speaker: "you",
            textEn: "Sounds good. Oh, one more thing — the Wi-Fi in my bedroom seems to always be weaker. Is there anything I can do about that?",
            textZh: "好的。对了还有一个问题——我卧室的 Wi-Fi 信号好像一直比较弱。有什么办法吗？",
            casualVersion: "Cool. Oh also, my bedroom always gets crappy Wi-Fi. Any way to fix that?",
            culturalNote: "在美国直接向技术人员提问是完全正常的，他们通常很乐意给建议。不需要觉得在打扰他们。",
            commonMistake: {
              wrong: "The Wi-Fi signal in bedroom is always not good. How to solve?",
              correct: "The Wi-Fi in my bedroom seems to always be weaker. Is there anything I can do about that?",
              explanation: "'seems to always be weaker' 比 'always not good' 更自然。'Is there anything I can do about that?' 是询问解决方案的地道说法。",
            },
            formalityVariants: {
              casual: "My bedroom Wi-Fi's always kinda weak. Can I do anything about that?",
              standard: "The Wi-Fi in my bedroom always seems weaker. Is there anything I can do about that?",
              formal: "I've noticed the Wi-Fi signal tends to be noticeably weaker in the bedroom. Are there any solutions you'd recommend to improve coverage in that area?",
            },
          },
          {
            speaker: "them",
            role: "网络安装工",
            textEn: "Yeah, that's really common, especially if the bedroom is on the other side of the apartment from the router. You've got a couple options — you could get a Wi-Fi extender, which basically boosts the signal to reach farther. Or, if you want the best performance, you could upgrade to a mesh system, which uses multiple access points to blanket your whole place with strong signal. Xfinity actually has their own mesh pods if you want to keep it all in one system.",
            textZh: "这很常见，尤其如果卧室在路由器另一边的话。你有几个选择——可以买个 Wi-Fi 信号扩展器，基本上就是把信号增强传得更远。或者如果你想要最好的效果，可以升级到 Mesh 系统，用多个节点覆盖整个家。Xfinity 自己就有 Mesh 节点产品，你可以保持在一个系统里。",
            keyPhrases: [
              { en: "Wi-Fi extender", zh: "Wi-Fi 信号扩展器" },
              { en: "mesh system", zh: "Mesh 网络系统" },
              { en: "access points", zh: "接入点/节点" },
            ],
            alternativeExpressions: [
              { textEn: "Super common. You can grab a Wi-Fi extender for like thirty bucks or go with a mesh setup for full apartment coverage. We actually sell mesh pods that plug right in and work with your existing router.", textZh: "太常见了。花30美元买个扩展器，或者上 Mesh 系统全屋覆盖。我们有 Mesh 节点产品直接插上就能用。", actionHint: "plug right in 直接插上", frequency: "common" },
            ],
            casualVersion: "Yeah super common. Either grab a Wi-Fi extender to boost the signal or go with a mesh system — that's the best option honestly. We've got mesh pods you can add to your plan if you want.",
            formalityVariants: {
              casual: "Yeah that's normal. Get an extender or go mesh. We sell mesh pods too.",
              standard: "That's common. You could get a Wi-Fi extender or upgrade to a mesh system for full coverage. Xfinity offers mesh pods as well.",
              formal: "That's a very common concern. I'd recommend either a Wi-Fi range extender to amplify the signal or, for optimal performance, a mesh networking system that distributes multiple access points throughout the residence. Xfinity does offer proprietary mesh pods compatible with our equipment.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "网速问题排查",
        titleEn: "Troubleshooting Speed Issues",
        description: "向安装工反馈网速问题并排查解决",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hey Mike, before you go — I just ran a speed test on my phone and I'm only getting about a hundred and fifty megabits. I'm paying for three hundred. Is something wrong?",
            textZh: "Mike，你走之前——我刚在手机上测了下速，只有大概150兆。我买的是300兆的。是有什么问题吗？",
            casualVersion: "Wait, I just tested and I'm only at like 150 meg. Shouldn't it be 300?",
            culturalNote: "在美国，你完全有权利要求得到你付费的网速。如果测试结果和套餐承诺不符，安装工有义务排查。不要不好意思提出来。",
            commonMistake: {
              wrong: "The speed test shows only 150. My plan is 300. Why the speed is not enough?",
              correct: "I'm only getting about a hundred and fifty megabits. I'm paying for three hundred. Is something wrong?",
              explanation: "'I'm only getting' 比 'shows only' 更自然。'Is something wrong?' 比 'Why the speed is not enough?' 更地道。",
            },
            formalityVariants: {
              casual: "Hey, my speed test says 150. Shouldn't it be 300?",
              standard: "I just ran a speed test and I'm only getting about 150 megabits instead of the 300 I'm paying for. Is something wrong?",
              formal: "I've conducted a speed test and the results indicate approximately 150 megabits per second, which is significantly below the 300-megabit plan I've subscribed to. Could you investigate the discrepancy?",
            },
          },
          {
            speaker: "them",
            role: "网络安装工",
            textEn: "Good catch. A few things could be going on. First — are you testing on Wi-Fi or wired? Wi-Fi speeds are always lower than wired because of interference and distance. If you plug your laptop directly into the router with an Ethernet cable, you should see numbers much closer to three hundred. On Wi-Fi, getting half to two-thirds of your plan speed is actually normal.",
            textZh: "发现得好。可能有几个原因。首先——你是用 Wi-Fi 测的还是有线？Wi-Fi 速度总是比有线慢，因为有干扰和距离因素。如果你用网线把笔记本直接连路由器，应该能看到接近300的数字。在 Wi-Fi 上，拿到套餐速度的一半到三分之二其实是正常的。",
            keyPhrases: [
              { en: "wired", zh: "有线连接的" },
              { en: "interference", zh: "干扰" },
              { en: "Ethernet cable", zh: "网线/以太网线" },
            ],
            alternativeExpressions: [
              { textEn: "Are you testing over Wi-Fi? That's your issue. Wi-Fi never hits full speed — interference, walls, distance all cut into it. Plug in with an Ethernet cable and test again, should be way closer to 300.", textZh: "你是用 Wi-Fi 测的吧？问题就在这。Wi-Fi 永远达不到满速——干扰、墙壁、距离都会影响。插网线再测一次，应该接近300。", actionHint: "cut into 削减/降低", frequency: "common" },
            ],
            casualVersion: "Ah, are you on Wi-Fi? Wi-Fi's always slower than wired. Walls and stuff mess with the signal. Try plugging in with an Ethernet cable — you should be way closer to 300. Getting half to two-thirds on Wi-Fi is totally normal.",
            formalityVariants: {
              casual: "You testing on Wi-Fi? That's why. Wi-Fi's always slower. Try a cable — it'll be way faster.",
              standard: "Wi-Fi speeds are always lower due to interference. Try testing with an Ethernet cable plugged directly into the router for the true speed.",
              formal: "Are you conducting the test via Wi-Fi? Wireless connections inherently produce lower throughput due to electromagnetic interference, physical obstructions, and distance. A wired Ethernet connection directly to the router should yield results significantly closer to your subscribed speed.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, I was on Wi-Fi. That makes sense. But is there any way to improve the Wi-Fi speed? I do everything wirelessly — my TV, laptop, phone.",
            textZh: "哦，我用的 Wi-Fi。这就说得通了。但有没有办法提高 Wi-Fi 速度？我所有设备都是无线的——电视、笔记本、手机。",
            casualVersion: "Oh yeah, Wi-Fi. Makes sense. But can I speed it up? I never plug anything in.",
            commonMistake: {
              wrong: "I use Wi-Fi for all things. Can the Wi-Fi become faster?",
              correct: "Is there any way to improve the Wi-Fi speed? I do everything wirelessly.",
              explanation: "'improve the Wi-Fi speed' 比 'Wi-Fi become faster' 更地道。'do everything wirelessly' 简洁自然。",
            },
            formalityVariants: {
              casual: "Ah OK. Any way to make the Wi-Fi faster though? Everything I use is wireless.",
              standard: "Is there any way to improve the Wi-Fi speed? All my devices are wireless.",
              formal: "I see, that's understandable. Given that all of my devices rely on wireless connectivity, are there any measures I can take to optimize the Wi-Fi performance?",
            },
          },
          {
            speaker: "them",
            role: "网络安装工",
            textEn: "Definitely. First, make sure your router isn't tucked behind a bunch of stuff — keep it out in the open, elevated if possible, not on the floor. Second, I'll make sure you're on the five-gigahertz band, which is faster but has slightly less range than two-point-four. Third, keep the router away from microwaves and baby monitors — they cause interference on the same frequency. And if you're still not happy with the speed, that mesh system I mentioned would make a huge difference.",
            textZh: "当然。首先，确保路由器不要藏在一堆东西后面——放在开阔的地方，最好高一点，不要放地上。其次，我会确保你连的是5GHz频段，速度更快但覆盖范围比2.4GHz稍小。第三，路由器远离微波炉和婴儿监视器——它们在同一频率上会造成干扰。如果你还是不满意，我说的那个 Mesh 系统会有很大改善。",
            keyPhrases: [
              { en: "five-gigahertz band", zh: "5GHz频段" },
              { en: "out in the open", zh: "放在开阔处" },
              { en: "interference", zh: "干扰" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, a few easy tricks: keep the router out in the open and up high. Connect to the 5 GHz network for speed. Keep it away from microwaves. And honestly the mesh system is the biggest upgrade you could make.", textZh: "有几个简单技巧：路由器放开阔的地方，放高处。连5GHz网络求速度。远离微波炉。说实话 Mesh 系统是最大的提升。", actionHint: "tricks 小技巧/窍门", frequency: "common" },
            ],
            casualVersion: "For sure. Don't hide the router — keep it out in the open, up high. Use the 5 GHz band for speed. And keep it far from your microwave. If that's not enough, the mesh system is the way to go.",
            formalityVariants: {
              casual: "Don't hide the router, use 5 GHz, stay away from microwaves. Mesh if you need more.",
              standard: "Keep the router elevated and in the open, use the 5 GHz band for speed, avoid interference from microwaves, and consider a mesh system for full coverage.",
              formal: "I'd recommend ensuring the router is positioned in an open, elevated location. Connecting to the five-gigahertz frequency band will maximize throughput. Avoid proximity to devices that generate electromagnetic interference, such as microwave ovens. For comprehensive coverage, a mesh networking solution would provide the most significant improvement.",
            },
          },
          {
            speaker: "you",
            textEn: "Makes sense. One last question — if I have issues after you leave, do I call Xfinity directly or is there an app I can use to troubleshoot?",
            textZh: "明白了。最后一个问题——你走之后如果我有问题，是直接打 Xfinity 电话还是有什么 APP 可以排查？",
            casualVersion: "Got it. If stuff breaks after you leave, what do I do — call you guys or is there an app?",
            commonMistake: {
              wrong: "If internet has problem after you go, where should I call?",
              correct: "If I have issues after you leave, do I call Xfinity directly or is there an app I can use to troubleshoot?",
              explanation: "'have issues' 比 'has problem' 更自然。'troubleshoot' 是排查问题的专业说法。",
            },
            formalityVariants: {
              casual: "What if something goes wrong later? Do I call or use an app?",
              standard: "If I have issues after you leave, do I call Xfinity directly or is there a troubleshooting app?",
              formal: "Should I encounter any connectivity issues following the installation, what would be the recommended support channel — direct phone contact or a self-service application?",
            },
          },
          {
            speaker: "them",
            role: "网络安装工",
            textEn: "Great question. The Xfinity app is your best bet for quick fixes — it can restart your router remotely, run diagnostics, and even detect outages in your area. For anything the app can't fix, you can call one-eight-hundred-Xfinity or chat with support online. If it turns out to be a hardware issue, they'll schedule a technician visit at no extra charge as long as you're renting the equipment. Here's my card too — if you have a question in the next couple days, feel free to text me.",
            textZh: "好问题。Xfinity APP 是最快的解决方案——可以远程重启路由器、运行诊断、甚至检测你所在区域的断网情况。APP 解决不了的可以打 1-800-Xfinity 或在线联系客服。如果是硬件问题，只要你是租他们的设备，他们会免费安排技术人员上门。这是我的名片——这几天有问题随时发短信给我。",
            keyPhrases: [
              { en: "run diagnostics", zh: "运行诊断" },
              { en: "outages", zh: "断网/停电" },
              { en: "at no extra charge", zh: "不额外收费" },
            ],
            alternativeExpressions: [
              { textEn: "Download the Xfinity app — it's the easiest way to troubleshoot. It can restart your router and check for outages. Anything bigger, call support or book a tech visit through the app. If you're renting the equipment, service calls are free.", textZh: "下载 Xfinity APP——最简单的排查方式。可以重启路由器和查断网。更大的问题就打客服电话或通过APP预约技术人员。租设备的话上门服务免费。", actionHint: "book a tech visit 预约技术人员上门", frequency: "common" },
            ],
            casualVersion: "Use the Xfinity app — it's great for quick stuff, like rebooting the router or checking if there's an outage. For bigger problems, call 1-800-Xfinity or chat online. Hardware problems, they'll send someone for free if you're renting the equipment. And here's my card — hit me up if you need anything this week.",
            formalityVariants: {
              casual: "Xfinity app for quick stuff. Call 1-800-Xfinity for big issues. Hardware? They'll send someone free. Here's my card.",
              standard: "The Xfinity app handles most troubleshooting. For bigger issues, call support. Hardware problems are covered if you rent the equipment. Here's my card for any quick questions.",
              formal: "The Xfinity application provides comprehensive self-service troubleshooting capabilities, including remote router management and outage detection. For issues beyond its scope, our support line at 1-800-Xfinity is available, as is online chat. Hardware-related concerns are addressed through complimentary technician visits for customers utilizing rental equipment. Please accept my business card for any immediate questions.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 19. 和室友分摊水电费 ====================
  {
    id: "housing-split-utilities",
    category: "housing",
    titleZh: "和室友分摊水电费",
    titleEn: "Splitting Utilities with Roommate",
    description: "和室友讨论如何分摊水电网费",
    otherRole: "室友",
    otherRoleIcon: "🏘️",
    flows: [
      {
        id: "basic",
        titleZh: "基本费用分摊",
        titleEn: "Basic Utility Splitting",
        description: "和室友第一次讨论如何分摊各项费用",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, now that we're all moved in, should we figure out how to split the utilities? I've never done this before so I'm not sure what's fair.",
            textZh: "嘿，现在都搬进来了，我们是不是该讨论一下怎么分摊水电费？我以前没弄过，不太确定怎么分才公平。",
            casualVersion: "So now that we're all settled, how do we wanna handle the bills? I've never split utilities before.",
            culturalNote: "在美国合租，分摊水电费是最常见的合租讨论之一。和中国不同，美国的水电网费通常是房客自己负责，不包含在房租里。提前明确分摊方式可以避免日后矛盾。",
            commonMistake: {
              wrong: "We should discuss how to share the water and electricity fee. I don't know what is fair.",
              correct: "Should we figure out how to split the utilities? I'm not sure what's fair.",
              explanation: "'utilities' 是水电网费的统称，不需要逐个列出。'split' 比 'share' 更常用于分摊费用。'figure out' 比 'discuss' 更口语化。",
            },
            formalityVariants: {
              casual: "Hey, how are we doing the bills? Never split utilities before.",
              standard: "Should we figure out how to split the utilities? I'm not sure what's fair.",
              formal: "I think it would be a good idea to establish how we'd like to divide the utility costs. I haven't had to arrange this before, so I'd appreciate your input on what would be equitable.",
            },
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "Yeah, let's sort that out now. So we've got electricity, water, gas, internet, and trash. Most people just split everything fifty-fifty, but some people like to split based on room size if one room is bigger. What sounds good to you?",
            textZh: "对，现在就定下来。我们有电费、水费、燃气费、网费和垃圾费。大部分人就平分，但有些人如果房间大小不同的话会按面积比例分。你觉得怎么好？",
            keyPhrases: [
              { en: "fifty-fifty", zh: "对半分/五五分" },
              { en: "split based on room size", zh: "按房间面积分摊" },
              { en: "sort that out", zh: "把这事定下来" },
            ],
            alternativeExpressions: [
              { textEn: "Good idea. So we've got electric, water, gas, internet, and trash to split. Easiest way is just down the middle — fifty-fifty. Unless you think one of us should pay more because of room size or something.", textZh: "好主意。我们要分的有电费、水费、燃气、网费和垃圾费。最简单的就是对半分。除非你觉得因为房间大小什么的应该有人多付点。", actionHint: "down the middle 平均分", frequency: "common" },
            ],
            casualVersion: "Yeah totally. So we got electric, water, gas, internet, and trash. Most roommates just go fifty-fifty. Or we could do it by room size if you want. Up to you.",
            formalityVariants: {
              casual: "Let's figure it out. Electric, water, gas, internet, trash. Fifty-fifty work for you?",
              standard: "We've got electricity, water, gas, internet, and trash. Most people split fifty-fifty, or proportionally by room size. What works for you?",
              formal: "I think it's wise to address this early. Our shared expenses include electricity, water, gas, internet, and waste removal. The standard approach is an equal split, though proportional allocation based on room dimensions is also common.",
            },
          },
          {
            speaker: "you",
            textEn: "Our rooms are about the same size, so fifty-fifty seems fair to me. Who's going to be in charge of paying the bills? And how do we keep track?",
            textZh: "我们房间差不多大，所以对半分挺公平的。谁来负责交费？我们怎么记账？",
            casualVersion: "Rooms are the same so fifty-fifty's cool. Who pays and how do we track it?",
            commonMistake: {
              wrong: "Our room is same size so half half is OK. Who will be responsible to pay?",
              correct: "Our rooms are about the same size, so fifty-fifty seems fair. Who's going to be in charge of paying the bills?",
              explanation: "'rooms' 用复数因为有两个房间。'fifty-fifty' 比 'half half' 更地道。'in charge of' 表示负责某事。",
            },
            formalityVariants: {
              casual: "Rooms are the same, so let's just do fifty-fifty. Who's paying the bills?",
              standard: "Our rooms are about the same size, so fifty-fifty works. Who's in charge of paying, and how do we track things?",
              formal: "Given that our rooms are comparable in size, an equal split seems equitable. Shall we designate one person to manage the payments, and establish a system for tracking expenses?",
            },
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "I can put the bills in my name since I've been here longer and already have accounts set up. Then I'll just Venmo you for your half each month. Or we could use Splitwise — it's an app that tracks who owes what, so there's no confusion. I've used it with past roommates and it works great.",
            textZh: "账单可以用我的名字，因为我住得久一些，账户已经开好了。然后每个月通过 Venmo 收你那一半。或者我们可以用 Splitwise——这个 APP 可以记录谁欠谁多少，不会搞混。我以前和室友用过，很好用。",
            keyPhrases: [
              { en: "put the bills in my name", zh: "用我的名字开账单" },
              { en: "Venmo", zh: "Venmo（美国常用转账APP）" },
              { en: "Splitwise", zh: "Splitwise（分账APP）" },
            ],
            alternativeExpressions: [
              { textEn: "Bills are already in my name so that's easy. I'll just send you a Venmo request each month. Or if you want something more official, Splitwise keeps a running tab so nobody forgets.", textZh: "账单已经是我的名字了所以方便。每月我给你发 Venmo 请求就行。或者想更正式的话，Splitwise 会持续记账不会忘。", actionHint: "running tab 持续记录的账单", frequency: "common" },
            ],
            casualVersion: "I'll keep the bills in my name, no biggie. I'll just Venmo request you each month. Or there's Splitwise if you wanna track stuff more carefully — it's pretty slick.",
            formalityVariants: {
              casual: "Bills are on me, I'll Venmo you for your half. Or we can use Splitwise to keep track.",
              standard: "I'll keep the bills in my name and either Venmo you or we can use Splitwise to track everything.",
              formal: "I'm happy to maintain the utility accounts in my name. For reimbursement, we could use Venmo or alternatively employ Splitwise, which provides comprehensive expense tracking and eliminates any ambiguity.",
            },
          },
          {
            speaker: "you",
            textEn: "Splitwise sounds good — let's use that. When do the bills usually come in? I want to make sure I pay you on time.",
            textZh: "Splitwise 不错——就用那个吧。账单一般什么时候来？我要确保按时付你。",
            casualVersion: "Yeah let's do Splitwise. When do the bills hit? I wanna make sure I pay you on time.",
            commonMistake: {
              wrong: "When do the bills come? I want to ensure I pay you in time.",
              correct: "When do the bills usually come in? I want to make sure I pay you on time.",
              explanation: "'on time' 表示按时，'in time' 表示及时/来得及，意思不同。'come in' 比 'come' 更自然用于描述账单到达。",
            },
            formalityVariants: {
              casual: "Cool, Splitwise it is. When do bills come in? I'll pay quick.",
              standard: "Let's use Splitwise. When do the bills usually come in? I want to pay you on time.",
              formal: "Excellent, let's proceed with Splitwise. Could you let me know when the bills typically arrive? I'd like to ensure prompt payment.",
            },
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "Electric and gas usually come around the tenth, water's around the fifteenth, and internet is on the first of every month. I'll log everything in Splitwise as soon as I get the bill, and you'll get a notification. Just try to pay within a couple days so I'm not floating the whole thing for too long. Oh, and heads up — the electric bill gets way higher in summer because of AC. Last July mine was like two hundred bucks, so budget for that.",
            textZh: "电费和燃气费一般10号左右到，水费大概15号，网费每月1号。我一收到账单就会录入 Splitwise，你会收到通知。尽量几天内付，这样我不用垫太久。对了提醒一下——夏天电费会高很多因为空调。去年7月我的大概200美元，你提前有个心理准备。",
            keyPhrases: [
              { en: "floating the whole thing", zh: "垫付全部费用" },
              { en: "heads up", zh: "提醒一下" },
              { en: "budget for that", zh: "预留这笔预算" },
            ],
            alternativeExpressions: [
              { textEn: "Electric and gas hit around the tenth, water around the fifteenth, internet on the first. I'll add 'em to Splitwise right away and you'll get pinged. Just don't sit on it too long. Fair warning though — summer electric bills are brutal with AC.", textZh: "电和气大概10号到，水15号，网费1号。我马上加到 Splitwise 你会收到通知。别拖太久就行。不过提前说——夏天开空调电费会很吓人。", actionHint: "get pinged 收到通知; sit on it 拖着不办; brutal 吓人的", frequency: "common" },
            ],
            culturalNote: "在美国，室友之间及时付账被视为基本信用。拖欠分摊费用是室友关系破裂的最常见原因之一。'Don't float the bill for too long' 意味着不要让一个人长期垫付。",
            casualVersion: "Electric and gas come 'round the tenth, water on the fifteenth, internet the first. I'll put it all in Splitwise and you'll get a notification. Just pay within a couple days. Oh and FYI — summer electric bills are insane 'cause of AC. Like 200 bucks last July.",
            formalityVariants: {
              casual: "10th for electric and gas, 15th for water, 1st for internet. I'll Splitwise it, you pay in a couple days. Summer's gonna be expensive — AC kills.",
              standard: "Bills arrive around the tenth, fifteenth, and first of each month. I'll log them in Splitwise promptly. Just be aware that summer electric bills are significantly higher due to air conditioning.",
              formal: "The billing cycle for electricity and gas falls around the tenth, water around the fifteenth, and internet on the first of each month. I'll record each expense in Splitwise upon receipt. I should note that summer electricity costs increase substantially due to air conditioning usage.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "处理费用争议",
        titleEn: "Handling Billing Disputes",
        description: "和室友解决费用分摊争议和异常账单",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, I got the Splitwise notification for this month's electric bill — a hundred and eighty dollars? That's way more than usual. Last month it was only ninety. What happened?",
            textZh: "嘿，我收到了这个月电费的 Splitwise 通知——180美元？比平时高太多了。上个月才90。怎么回事？",
            casualVersion: "Dude, 180 for electric? It was 90 last month. What the heck happened?",
            culturalNote: "在美国，向室友直接提出费用疑问是完全正常的，不需要委婉。直接沟通是维持良好室友关系的关键。",
            commonMistake: {
              wrong: "This month electric fee is 180 dollar? Too expensive than before. Last month is only 90.",
              correct: "This month's electric bill is a hundred and eighty dollars? That's way more than usual.",
              explanation: "'electric bill' 不是 'electric fee'。'way more than usual' 是表达远超平常的地道说法。金额前不需要加 'dollar'。",
            },
            formalityVariants: {
              casual: "180 for electric?! It was 90 last month! What happened?",
              standard: "The electric bill is a hundred and eighty this month? That's double last month. What happened?",
              formal: "I noticed this month's electricity bill is a hundred and eighty dollars, which represents a significant increase from last month's ninety. Do you have any insight into what may have caused this?",
            },
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "Yeah, I noticed that too. I think it's because we've both been running the AC pretty hard. It's been over a hundred degrees this week. Also, I had a couple friends stay over last weekend and they were here for three days — extra showers, cooking, AC running all day. I feel bad about that. Maybe I should cover a bigger share this month since the spike was mostly on me?",
            textZh: "是啊，我也注意到了。我觉得是因为我们俩空调开得猛。这周都超过100华氏度了。而且上周末我有几个朋友来住了三天——多洗澡、做饭、空调整天开着。这方面我不好意思。也许这个月我多出一些，因为主要是我这边用的多？",
            keyPhrases: [
              { en: "running the AC pretty hard", zh: "空调开得很猛" },
              { en: "spike", zh: "突然增加/飙升" },
              { en: "cover a bigger share", zh: "多承担一些/多出一些" },
            ],
            alternativeExpressions: [
              { textEn: "I know, it jumped a lot. The heat wave didn't help, plus my friends crashed here for a few days. Honestly, the extra usage was mostly me this month. I'm cool with paying more than half — maybe sixty-forty?", textZh: "我知道，涨了很多。热浪加上我朋友来住了几天。说实话这个月多用的主要是我。我可以多出一些——六四分？", actionHint: "crashed here 在这借住; sixty-forty 六四分", frequency: "common" },
            ],
            casualVersion: "Yeah it spiked. We've been blasting the AC plus my friends stayed over for three days. That's on me honestly. I'll cover more this month — maybe sixty-forty or something?",
            formalityVariants: {
              casual: "It's the AC and my friends staying over. My bad. I'll pay more this month.",
              standard: "The heat and my guests staying over drove it up. I should cover a larger share this month since the increase was mostly from my end.",
              formal: "I believe the increase is attributable to the extreme temperatures and the additional usage from my guests last weekend. Given that the majority of the incremental consumption was from my end, I'd like to propose covering a larger portion of this month's bill.",
            },
          },
          {
            speaker: "you",
            textEn: "I appreciate you being upfront about it. Sixty-forty sounds fair for this month. But going forward, maybe we should set some ground rules about guests? Like, if someone stays more than two nights, that person covers the extra utilities?",
            textZh: "谢谢你主动说。这个月六四分挺公平的。但以后是不是应该定些规矩？比如客人住超过两晚的话，请客人的人多出那部分水电费？",
            casualVersion: "Thanks for being honest. Sixty-forty's cool. But maybe we need a rule about guests? Like if someone's staying more than two nights, whoever invited them covers the extra?",
            culturalNote: "在美国室友关系中，提前制定明确的 ground rules（基本规则）非常重要。客人过夜、公共区域使用、噪音时间等都应该在搬入前或搬入初期讨论清楚。",
            commonMistake: {
              wrong: "Thank you for telling me honestly. But for future, can we make rule about guest?",
              correct: "I appreciate you being upfront about it. Going forward, maybe we should set some ground rules about guests?",
              explanation: "'being upfront' 表示坦诚主动说明。'going forward' 比 'for future' 更地道。'ground rules' 是基本规则的地道说法。",
            },
            formalityVariants: {
              casual: "Cool of you to say that. Sixty-forty this month. But we should probably have a rule about guests and extra costs.",
              standard: "I appreciate you being upfront. Let's do sixty-forty this month. Going forward, should we set ground rules about guests and extra utility costs?",
              formal: "I truly appreciate your transparency. Sixty-forty is agreeable for this month. Moving forward, perhaps we should establish clear guidelines regarding guest stays and their impact on shared utility costs?",
            },
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "That's totally reasonable. How about this — anything under two nights is no big deal, we don't even worry about it. But anything over two nights, the person who invited the guest picks up the difference? We can also set the thermostat to seventy-six during the day and seventy-two at night — I read that saves a ton on AC. Sound good?",
            textZh: "完全合理。这样行不行——两晚以内不用计较。但超过两晚，邀请客人的人承担多出来的部分？我们还可以把恒温器白天设到76度晚上72度——我看到说这样能省很多空调费。可以吗？",
            keyPhrases: [
              { en: "picks up the difference", zh: "承担差额/多出来的部分" },
              { en: "thermostat", zh: "恒温器/温控器" },
              { en: "no big deal", zh: "没什么大不了的" },
            ],
            alternativeExpressions: [
              { textEn: "Makes sense. Under two nights, whatever, don't stress it. Over two nights, you cover the extra. And let's keep the AC at 76 during the day — it makes a huge difference in the bill.", textZh: "有道理。两晚以内随意不用在意。超过两晚你来付多出来的。白天空调保持76度——对电费影响很大。", actionHint: "don't stress it 不用在意; cover the extra 支付额外部分", frequency: "common" },
            ],
            casualVersion: "Totally fair. Two nights or less, no worries. More than that, whoever's guest it is covers the extra. And let's do 76 during the day and 72 at night for the AC — that'll save us a ton.",
            formalityVariants: {
              casual: "Yeah, two nights free pass. More than that, you pay extra. Let's set AC to 76 daytime, 72 night.",
              standard: "Two nights is no big deal. Over two nights, the host covers the difference. Let's also set the thermostat to seventy-six during the day and seventy-two at night to save on AC.",
              formal: "That sounds quite reasonable. I'd propose a two-night threshold — anything beyond that, the hosting roommate assumes responsibility for the incremental costs. Additionally, setting the thermostat to seventy-six degrees during the day and seventy-two at night would significantly reduce our cooling expenses.",
            },
          },
          {
            speaker: "you",
            textEn: "Deal. One more thing — the internet bill went up by ten dollars this month too. Did you change the plan?",
            textZh: "成交。还有一件事——网费这个月也多了10美元。你改套餐了吗？",
            casualVersion: "Deal. Oh, also the internet's ten bucks more this month? Did you change something?",
            commonMistake: {
              wrong: "The internet fee increased 10 dollars. Did you change the package?",
              correct: "The internet bill went up by ten dollars. Did you change the plan?",
              explanation: "'went up by' 是涨了多少的地道说法。网络套餐在美国说 'plan' 而不是 'package'。",
            },
            formalityVariants: {
              casual: "Oh and the internet's ten more this month. Did you upgrade or something?",
              standard: "The internet bill went up by ten dollars this month. Did you change the plan?",
              formal: "I also noticed the internet bill has increased by ten dollars. Was there a change to our service plan?",
            },
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "Oh yeah, I should have told you first — my bad. The promotional rate expired and it went back to the regular price. I called and they said they can offer us a new promo if we sign a one-year contract. It'd bring it back down to what we were paying before. Want me to go ahead and do that, or should we shop around first and see if another provider has a better deal?",
            textZh: "哦对，我应该先跟你说的——我的错。促销价到期了，恢复到了正常价格。我打电话问了，他们说如果我们签一年合同可以给新的促销价，能降回之前的价格。你要我直接签呢，还是先看看其他运营商有没有更好的？",
            keyPhrases: [
              { en: "promotional rate", zh: "促销价" },
              { en: "shop around", zh: "货比三家" },
              { en: "contract", zh: "合同/合约" },
            ],
            alternativeExpressions: [
              { textEn: "Right, sorry — should've mentioned it. The promo ended so we're on the full price now. They offered a new deal if we lock in for a year. Or we could check what Verizon or AT&T have going on. What do you think?", textZh: "对不起，应该提前说的。促销结束了现在是原价。他们说签一年可以给新优惠。或者我们看看 Verizon 或 AT&T 有什么。你觉得呢？", actionHint: "lock in 签约锁定; what they have going on 他们有什么优惠", frequency: "common" },
            ],
            casualVersion: "Oh yeah, sorry — the promo expired and it jumped up. I called and they said we can get a new promo if we do a one-year contract. Or we can look at other providers. What do you think?",
            formalityVariants: {
              casual: "My bad, promo expired. They'll give us a new one if we sign for a year. Or we could switch providers.",
              standard: "The promotional rate expired. They offered a new promo with a one-year contract. Or we could shop around for a better deal.",
              formal: "I apologize for not mentioning it sooner — the promotional pricing has expired, reverting to the standard rate. They've offered a new promotional rate contingent on a one-year commitment. Alternatively, we could explore competing providers for potentially better terms.",
            },
          },
          {
            speaker: "you",
            textEn: "Let's shop around first. I've heard AT&T has some good deals for new customers. Can you check Xfinity's cancellation terms and I'll look into AT&T? Let's compare and decide together this weekend.",
            textZh: "先看看其他选择吧。我听说 AT&T 对新客户有不错的优惠。你查一下 Xfinity 的退约条件，我去了解 AT&T 的？这个周末我们一起比较决定。",
            casualVersion: "Let's look around first. I heard AT&T's got good deals. You check Xfinity's cancellation stuff and I'll check AT&T. We'll figure it out this weekend.",
            commonMistake: {
              wrong: "Let's compare other companies first. You check Xfinity cancel rule and I check AT&T.",
              correct: "Let's shop around first. Can you check Xfinity's cancellation terms and I'll look into AT&T?",
              explanation: "'shop around' 是货比三家的地道说法。'cancellation terms' 是退约条件的正确说法，不是 'cancel rule'。'look into' 表示了解/调查。",
            },
            formalityVariants: {
              casual: "Let's look around. You check Xfinity, I'll check AT&T. We'll figure it out this weekend.",
              standard: "Let's shop around first. You check Xfinity's cancellation terms, I'll look into AT&T. We can compare this weekend.",
              formal: "I'd suggest we conduct a comparative analysis before committing. If you could review Xfinity's cancellation terms, I'll research AT&T's current offerings. We can make a joint decision this weekend.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 20. 小区停车规则 ====================
  {
    id: "housing-parking-rules",
    category: "housing",
    titleZh: "小区停车规则",
    titleEn: "Parking Rules and Regulations",
    description: "了解公寓或小区停车规则和访客停车",
    otherRole: "物业经理",
    otherRoleIcon: "🅿️",
    flows: [
      {
        id: "basic",
        titleZh: "基本停车规则",
        titleEn: "Basic Parking Rules",
        description: "入住时了解小区停车位分配和基本规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm moving into unit 2B next week. I wanted to ask about the parking situation. Do I get an assigned spot, or is it first come first served?",
            textZh: "你好，我下周搬进2B单元。想问一下停车的情况。我有固定车位，还是先到先得？",
            casualVersion: "Hey, I'm the new tenant in 2B. How does parking work here? Do I get my own spot?",
            culturalNote: "在美国公寓，停车位不一定是免费的，有些需要额外付费。分配方式也不同——有的是 assigned（指定车位），有的是 first come first served（先到先得）。和中国不同，美国很多公寓的停车位数量有限，可能需要等候名单。",
            commonMistake: {
              wrong: "I will move to 2B next week. I want to ask about parking lot. Do I have fixed parking space?",
              correct: "I'm moving into unit 2B next week. I wanted to ask about the parking situation. Do I get an assigned spot?",
              explanation: "'parking situation' 比 'parking lot' 更适合问整体情况（parking lot 指的是停车场本身）。'assigned spot' 是固定车位的地道说法。",
            },
            formalityVariants: {
              casual: "Hey, moving into 2B. How's parking work — do I get a spot?",
              standard: "I'm moving into unit 2B next week. How does the parking work? Do I get an assigned spot?",
              formal: "Good afternoon, I'll be moving into unit 2B next week. I'd like to inquire about the parking arrangements. Are spaces assigned, or is it an open system?",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Welcome! So each unit gets one assigned covered parking spot, included in your rent. Your spot is number forty-seven — it's in the underground garage, second level. I'll give you a garage remote and a parking sticker for your windshield. If you need a second spot, we have a wait list, or you can rent one from another tenant — some people don't use theirs.",
            textZh: "欢迎！每个单元有一个指定有顶停车位，包含在房租里。你的车位是47号——在地下车库二层。我会给你一个车库遥控器和一个贴在挡风玻璃上的停车贴纸。如果你需要第二个车位，我们有等候名单，或者你可以从其他住户那里租——有些人不用自己的。",
            keyPhrases: [
              { en: "assigned covered spot", zh: "指定有顶车位" },
              { en: "garage remote", zh: "车库遥控器" },
              { en: "wait list", zh: "等候名单" },
            ],
            alternativeExpressions: [
              { textEn: "Everyone gets one covered spot — yours is forty-seven, second level of the garage. I'll get you a remote and a sticker. Need a second spot? There's a wait list, or check with other tenants — some will rent out their spot.", textZh: "每人一个有顶车位——你的是47号，车库二层。我给你遥控器和贴纸。需要第二个？有等候名单，或者问问其他住户——有些人会出租自己的。", actionHint: "rent out 出租", frequency: "common" },
            ],
            casualVersion: "Hey welcome! You get one covered spot — number forty-seven, underground garage, second level. I'll get you a remote and a parking sticker. Need a second spot? There's a wait list. Or you might find another tenant willing to rent theirs.",
            formalityVariants: {
              casual: "You get spot forty-seven in the underground garage. I'll grab you a remote and sticker. Need more? Wait list or rent from another tenant.",
              standard: "Each unit has one assigned covered spot included in rent. Yours is forty-seven on the second underground level. A second spot requires the wait list or renting from another tenant.",
              formal: "Each residential unit is allocated one assigned covered parking space, included in the lease agreement. Your designated spot is number forty-seven, located on the second level of the underground garage. I'll provide a garage access remote and windshield sticker. Should you require additional parking, a wait list is available, or private arrangements with other tenants are an option.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. What about when I have visitors? Is there guest parking, or do they have to find street parking?",
            textZh: "明白了。客人来的话怎么办？有访客车位吗，还是得停路边？",
            casualVersion: "Cool. And if friends come over, where do they park?",
            commonMistake: {
              wrong: "What about visitor? Is there visitor parking position?",
              correct: "What about when I have visitors? Is there guest parking?",
              explanation: "'guest parking' 或 'visitor parking' 是访客停车位的标准说法，不需要加 'position'。",
            },
            formalityVariants: {
              casual: "Where do my friends park when they visit?",
              standard: "What about guest parking? Is there designated visitor parking?",
              formal: "Could you inform me about the visitor parking arrangements? Are there designated spaces for guests, or must they utilize street parking?",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "We have ten visitor spots near the main entrance — they're marked with green signs. Your guests can park there for up to forty-eight hours. After that, they need a temporary parking pass from the office. If they park in someone else's assigned spot or in a fire lane, they will get towed — and that's on them, we can't help with that. Also, no parking on the grass or sidewalks, obviously.",
            textZh: "我们在正门附近有10个访客车位——绿色标志标注的。你的客人可以在那停最多48小时。超过的话需要到办公室办临时停车证。如果他们停在别人的车位或消防通道上，车会被拖走——这是他们的责任，我们帮不了。当然，也不能停在草坪或人行道上。",
            keyPhrases: [
              { en: "temporary parking pass", zh: "临时停车证" },
              { en: "fire lane", zh: "消防通道" },
              { en: "get towed", zh: "被拖走" },
            ],
            alternativeExpressions: [
              { textEn: "There are ten guest spots by the front entrance with green signs. They can park there up to forty-eight hours. Any longer, grab a temp pass from us. But if they park in a reserved spot or a fire lane? Tow truck's coming and we can't do anything about it.", textZh: "正门有10个绿色标志的访客车位。最多停48小时。更久的话来找我们拿临时通行证。但如果停在预留车位或消防通道？拖车会来，我们管不了。", actionHint: "temp pass = temporary pass 临时通行证", frequency: "common" },
            ],
            casualVersion: "There's ten visitor spots by the front with green signs. They can park up to forty-eight hours. Need more than that? Come grab a temp pass. But do NOT park in someone's assigned spot or the fire lane — they'll get towed and there's nothing we can do. And obviously no parking on grass or sidewalks.",
            formalityVariants: {
              casual: "Ten guest spots up front with green signs. Forty-eight hours max. Don't park in someone's spot or a fire lane — you'll get towed.",
              standard: "Ten visitor spots near the entrance, forty-eight-hour limit. Temporary passes available for longer stays. Parking in assigned spots or fire lanes results in towing.",
              formal: "We maintain ten designated visitor spaces near the main entrance, identifiable by green signage. Guest vehicles may occupy these spaces for a maximum of forty-eight hours. Extended stays require a temporary parking authorization from our office. Vehicles parked in assigned spaces or fire lanes are subject to immediate towing at the owner's expense.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. Is there a speed limit in the parking garage? I want to be careful.",
            textZh: "了解了。车库里有限速吗？我想小心一些。",
            casualVersion: "Is there a speed limit in the garage? Don't wanna hit anything.",
            commonMistake: {
              wrong: "Does the garage have speed limit? I want to be careful drive.",
              correct: "Is there a speed limit in the parking garage? I want to be careful.",
              explanation: "'Is there a speed limit' 比 'Does it have speed limit' 更自然。'parking garage' 是地下/立体停车场的标准说法。",
            },
            formalityVariants: {
              casual: "What's the speed limit in the garage?",
              standard: "Is there a speed limit in the parking garage? I want to be careful.",
              formal: "Are there posted speed limits within the parking structure? I'd like to ensure I'm driving safely.",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Five miles per hour in the garage — there are signs posted on each level. It's tight in there with the turns, so just take it slow. Also, I should mention — there are security cameras throughout the garage, but we're not responsible for theft or damage. I'd recommend not leaving valuables visible in your car. Oh, and one more thing — electric vehicle charging stations are on level one if you ever need them. Those are first come first served and there's a four-hour limit per session.",
            textZh: "车库限速5英里/小时——每层都有标志。里面弯道比较窄，开慢点就好。另外我要提一下——车库全程有监控，但我们不负责盗窃或损坏。建议不要把贵重物品放在车里看得到的地方。对了还有——一层有电动车充电桩，先到先得，每次限4小时。",
            keyPhrases: [
              { en: "five miles per hour", zh: "5英里/小时" },
              { en: "security cameras", zh: "监控摄像头" },
              { en: "charging stations", zh: "充电桩" },
            ],
            alternativeExpressions: [
              { textEn: "It's five miles per hour — pretty slow but it's a tight space. Cameras are everywhere but we're not liable for anything. Don't leave stuff visible in your car. And we've got EV chargers on level one — four-hour limit, first come first served.", textZh: "5英里限速——很慢但空间确实小。到处有摄像头但我们不担责。别把东西放在车里显眼的地方。一层有电动车充电桩——限4小时，先到先得。", actionHint: "not liable 不承担责任", frequency: "common" },
            ],
            culturalNote: "在美国，即使有监控，停车场管理方通常不对车辆盗窃或损坏负责——你会在标志或租约中看到免责声明。这和中国的物业管理有所不同，中国小区物业对车辆有一定管理责任。",
            casualVersion: "Five miles per hour — it's tight in there. Cameras are everywhere but if your car gets broken into, that's on you — don't leave stuff visible. EV chargers on level one if you need 'em, four-hour limit.",
            formalityVariants: {
              casual: "Five mph, take it slow. Cameras everywhere but we're not responsible if anything happens. Don't leave valuables out. EV chargers on level one, four-hour limit.",
              standard: "Five miles per hour in the garage. Security cameras are installed but we're not responsible for theft or damage. EV charging is available on level one with a four-hour limit.",
              formal: "The posted speed limit within the parking structure is five miles per hour. While security surveillance cameras are installed throughout, management does not assume liability for theft or vehicular damage. Electric vehicle charging stations are available on the first level on a first-come-first-served basis, with a four-hour usage limit per session.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "处理停车问题",
        titleEn: "Handling Parking Issues",
        description: "处理车位被占、收到罚单等停车问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I came home tonight and there's a car in my assigned spot — number forty-seven. I don't recognize the car. It's a white SUV with no parking sticker. What can I do?",
            textZh: "你好，我今晚回来发现有车停在我的车位——47号。我不认识这辆车。白色SUV，没有停车贴纸。我该怎么办？",
            casualVersion: "Hey, someone's in my spot — forty-seven. White SUV, no sticker. What do I do?",
            culturalNote: "在美国，占别人的指定车位是很严肃的事。你有权利要求拖走占位的车。千万不要自己留纸条威胁或堵别人的车——应该通过物业或拖车公司处理。",
            commonMistake: {
              wrong: "Someone's car is parking my space. A white SUV no sticker. How to do?",
              correct: "There's a car in my assigned spot. It's a white SUV with no parking sticker. What can I do?",
              explanation: "'in my assigned spot' 比 'parking my space' 更准确。'What can I do?' 是询问解决方案的标准说法。",
            },
            formalityVariants: {
              casual: "Yo, someone's in my spot. White SUV, no sticker. What do I do?",
              standard: "There's an unrecognized car in my assigned spot — a white SUV with no parking sticker. What can I do?",
              formal: "Good evening, I've returned to find an unfamiliar vehicle — a white SUV without a parking permit — occupying my assigned space, number forty-seven. What course of action would you recommend?",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Sorry about that — it's super frustrating. Since the car doesn't have a sticker, it's likely an unauthorized vehicle. You have two options: I can try to figure out whose car it is by checking with other tenants, which might take a while. Or, you can call the towing company directly — their number is posted on the signs in the garage. Since it's your assigned spot, you have every right to have it towed. I'd honestly recommend the tow route — it's faster and it sends a message.",
            textZh: "抱歉这种情况——确实很烦。车上没贴纸的话很可能是未经授权的车辆。你有两个选择：我可以试着问其他住户是谁的车，但可能要一段时间。或者你可以直接打拖车公司电话——号码在车库标志上。因为是你的指定车位，你完全有权叫拖车。说实话我建议直接拖——更快而且有警示效果。",
            keyPhrases: [
              { en: "unauthorized vehicle", zh: "未经授权的车辆" },
              { en: "have it towed", zh: "叫拖车拖走" },
              { en: "sends a message", zh: "起到警示作用" },
            ],
            alternativeExpressions: [
              { textEn: "That's annoying, sorry. No sticker means it's probably someone who shouldn't be there. You can call the tow company — number's on the garage signs — and they'll handle it since it's your spot. Or I can try to track down the owner, but that takes longer.", textZh: "真烦人，抱歉。没贴纸说明可能是不该停这的。你可以打拖车公司电话——号码在车库标志上——因为是你的车位他们会处理。或者我帮你找车主，但比较慢。", actionHint: "track down 找到/追踪到", frequency: "common" },
            ],
            casualVersion: "Ugh, that sucks. No sticker means it's probably not a tenant. You can call the tow company — number's on the signs in the garage. It's your spot, you can totally get it towed. Or I can try to find the owner but that's slower. Up to you.",
            formalityVariants: {
              casual: "That sucks. Call the tow company — number's on the signs. Your spot, your right to tow.",
              standard: "The vehicle appears unauthorized. You can call the towing company posted in the garage, or I can try to locate the owner. Since it's your spot, you're entitled to have it towed.",
              formal: "I sincerely apologize for the inconvenience. Given the absence of a parking permit, the vehicle appears unauthorized. You are well within your rights to contact the towing company — their information is posted throughout the garage. Alternatively, I can attempt to identify the vehicle's owner, though that process may take considerably longer.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll call the tow company. But this has happened twice now — can the building do anything to prevent it? Like better signage or a gate that requires a code?",
            textZh: "我打拖车公司。但这已经是第二次了——物业能做些什么防止这种情况吗？比如更明显的标志或者需要密码的门禁？",
            casualVersion: "I'll call to tow it. But this is the second time — can you guys do something to stop it? Better signs or a gate code or something?",
            commonMistake: {
              wrong: "This is second time happened. Can the building do something to prevent? Like better sign or password gate?",
              correct: "This has happened twice now. Can the building do anything to prevent it? Like better signage or a gate that requires a code?",
              explanation: "'this has happened twice' 用现在完成时更准确。'signage' 是标志/标识的统称，比 'sign' 更专业。'a gate that requires a code' 比 'password gate' 更自然。",
            },
            formalityVariants: {
              casual: "I'll get it towed. But this keeps happening — can you guys fix this? Better signs? Gate code?",
              standard: "I'll call the tow company. This has happened twice now. Can the building improve signage or add a gate code to prevent this?",
              formal: "I'll proceed with contacting the towing company. However, this is the second occurrence. I'd like to formally request that building management consider enhanced measures — perhaps improved signage or an access-controlled entry gate — to prevent future unauthorized parking.",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "You're absolutely right, and you're not the first person to bring this up. We've actually been looking into upgrading to a gate with a key fob system — no more open access. The board's voting on it next month. In the meantime, I'll put up bigger 'tow away zone' signs and make sure the spot numbers are clearly painted. If it happens again, don't hesitate to call the tow company immediately — and text me so I can document it for the board meeting.",
            textZh: "你说得对，你不是第一个反映这个问题的。我们其实一直在考虑升级成需要钥匙扣遥控器的门禁系统——不再随便进了。业委会下个月投票。在那之前，我会贴更大的'违停拖走'标志，确保车位号码清楚刷漆。如果再发生，别犹豫直接打拖车公司——然后发短信给我，我好记录在业委会会议材料里。",
            keyPhrases: [
              { en: "key fob system", zh: "钥匙扣遥控器门禁系统" },
              { en: "tow away zone", zh: "违停拖走区域" },
              { en: "the board", zh: "业委会/管委会" },
            ],
            alternativeExpressions: [
              { textEn: "You're not the only one complaining. We're looking at adding a key fob gate — the board votes next month. For now, I'll improve the signs and repaint the numbers. If it happens again, just tow and let me know.", textZh: "不只你一个人反映。我们在考虑加装钥匙卡门禁——下月业委会投票。目前先改善标志重新刷号码。再发生的话直接拖然后告诉我。", actionHint: "votes on 就...进行投票", frequency: "common" },
            ],
            casualVersion: "Yeah, other people have complained too. We're looking at putting in a key fob gate — the board's voting next month. For now I'll put up bigger signs and repaint the spot numbers. If it happens again just tow 'em and text me so I can bring it up at the board meeting.",
            formalityVariants: {
              casual: "We're working on it — key fob gate coming maybe. For now, bigger signs and repainted numbers. Just tow and text me if it happens again.",
              standard: "We're considering a key fob gate system — the board votes next month. I'll improve signage and repaint spot numbers. Report any future incidents to me directly.",
              formal: "Your concern is shared by several residents. Management is evaluating the installation of an access-controlled gate utilizing a key fob system, pending board approval at next month's meeting. In the interim, I'll arrange for enhanced signage and ensure all space markings are clearly visible. Please don't hesitate to contact the towing company for any future violations, and notify me so I can include it in our documentation for the board.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks. Oh, one more thing — I saw a notice about snow removal rules for the parking lot. My car has to be out by seven a.m. on snow days? Where do I park during plowing?",
            textZh: "谢谢。对了还有一件事——我看到关于停车场除雪规定的通知。下雪天早上7点前要把车移走？除雪时我停哪？",
            casualVersion: "Oh wait, I saw something about moving cars for snow plowing. I gotta be out by seven a.m.? Where do I go?",
            culturalNote: "在美国北方城市，冬季除雪是重要的物业管理内容。住户必须配合移车，否则可能被拖走或罚款。这在中国南方完全不存在的体验，北方城市虽有除雪但一般不需要住户移车。",
            commonMistake: {
              wrong: "I saw notice about snow remove. I must move car before 7 a.m.?",
              correct: "I saw a notice about snow removal rules. My car has to be out by seven a.m. on snow days?",
              explanation: "'snow removal' 是除雪的正确说法，不是 'snow remove'。'has to be out by' 是截止时间的自然表达。",
            },
            formalityVariants: {
              casual: "What's the deal with snow plowing? I gotta move my car by seven?",
              standard: "I saw the notice about snow removal. My car needs to be out by seven a.m.? Where do I park during plowing?",
              formal: "I noticed the snow removal policy requires vehicles to be relocated by seven a.m. on declared snow days. Could you advise on alternative parking arrangements during the plowing period?",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Yes, when we declare a snow emergency — and we'll text you the night before — all cars need to be out of the main lot by seven a.m. so the plows can get through. You can use the overflow lot behind building C during plowing, or street parking — but check the city's odd-even parking rules first because they switch sides on snow days. Plowing usually takes about four hours, so by noon you can move back. If your car's still there when the plow comes, it'll get towed at your expense. No exceptions.",
            textZh: "是的，当我们宣布除雪紧急状态时——我们会前一晚发短信通知你——所有车早上7点前要离开主停车场，好让铲雪车进来。除雪期间你可以停在C栋后面的备用停车场，或者路边——但先查一下市里的单双号停车规定，因为下雪天会换边。除雪通常要4个小时左右，中午就可以搬回来了。如果铲雪车来的时候你车还在，会被拖走自费。没有例外。",
            keyPhrases: [
              { en: "snow emergency", zh: "除雪紧急状态" },
              { en: "overflow lot", zh: "备用停车场" },
              { en: "odd-even parking rules", zh: "单双号停车规定" },
            ],
            alternativeExpressions: [
              { textEn: "When it snows, you'll get a text the night before. Cars out by seven a.m. Park behind building C or on the street — but watch the odd-even rules. Plowing's done by noon usually. Leave your car and it's getting towed, no excuses.", textZh: "下雪时我们前一晚发短信。7点前把车移走。停C栋后面或路边——但注意单双号。通常中午除完。车还在就拖走，没有借口。", actionHint: "no excuses 没有借口/没有例外", frequency: "common" },
            ],
            casualVersion: "Yep, we'll text you the night before a snow day. Get your car out by seven a.m. — park behind building C or on the street, but check the odd-even rules first. Plowing's done by noonish and you can come back. If the plow comes and your car's still there — it's getting towed on your dime. Zero exceptions.",
            formalityVariants: {
              casual: "We text you the night before. Cars out by seven. Park behind building C or the street. Plowing's done by noon. Car still there? Towed, you pay.",
              standard: "You'll get a text the night before. Cars out by seven a.m. — use the overflow lot behind building C or street parking. Check odd-even rules. Plowing is done by noon. Cars remaining will be towed at the owner's expense.",
              formal: "Upon declaration of a snow emergency, you will receive a text notification the preceding evening. All vehicles must vacate the primary lot by seven a.m. to facilitate plowing operations. The overflow lot behind Building C and compliant street parking are available alternatives. Please note the municipality's odd-even parking regulations during snow events. Plowing typically concludes by midday. Any vehicles remaining in the lot during plowing operations will be towed at the registered owner's expense, without exception.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 26. 续租谈判 ====================
  {
    id: "housing-lease-renewal",
    category: "housing",
    titleZh: "续租谈判",
    titleEn: "Lease Renewal Negotiation",
    description: "与房东协商续租条款、租期和租金",
    otherRole: "房东",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "basic",
        titleZh: "基本续租沟通",
        titleEn: "Basic Lease Renewal",
        description: "询问续租意向和基本条款",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my lease is up at the end of next month. I'd like to renew if possible.",
            textZh: "你好，我的租约下个月底到期。如果可以的话我想续租。",
            casualVersion: "Hey, my lease is almost up. I wanna stay if that works.",
            culturalNote: "在美国，提前30-60天联系房东讨论续租是标准做法。很多租约会自动转为月租（month-to-month），但锁定新租期通常更划算。",
            commonMistake: {
              wrong: "My lease will finish next month. I want to continue rent.",
              correct: "My lease is up at the end of next month. I'd like to renew if possible.",
              explanation: "'lease is up' 是租约到期的地道说法，比 'finish' 自然。'renew' 比 'continue rent' 更准确。",
            },
            formalityVariants: {
              casual: "Hey, lease is almost up. Can I stay?",
              standard: "My lease is up at the end of next month. I'd like to renew if possible.",
              formal: "I'm writing to inform you that my current lease expires at the end of next month. I would like to discuss the possibility of renewal.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Thanks for letting me know. I'm happy to renew. I can offer you either a twelve-month or a six-month lease. The twelve-month would keep your rent the same.",
            textZh: "谢谢你告诉我。我很乐意续租。我可以给你12个月或6个月的租约。12个月的话租金不变。",
            keyPhrases: [
              { en: "happy to renew", zh: "乐意续租" },
              { en: "keep your rent the same", zh: "租金保持不变" },
            ],
            alternativeExpressions: [
              { textEn: "Glad you want to stay! I can do a year lease at the same rate, or six months with a small bump.", textZh: "很高兴你想留下！一年租约同价，或者半年的话稍微涨一点。", actionHint: "a small bump 指小幅涨价", frequency: "common" },
            ],
            casualVersion: "Oh great, glad you wanna stay! I can do 12 months at the same rent, or 6 months — your call.",
            formalityVariants: {
              casual: "Awesome, yeah! 12-month same price or 6-month — what works for you?",
              standard: "Thanks for letting me know. I'm happy to renew. I can offer a twelve-month or six-month lease. The twelve-month keeps your rent the same.",
              formal: "Thank you for reaching out regarding your lease renewal. I'd be pleased to offer two options: a twelve-month lease at the current rate, or a six-month term. Please let me know your preference.",
            },
          },
          {
            speaker: "you",
            textEn: "I'd prefer twelve months. Could we also talk about fixing the dishwasher before I sign? It's been leaking.",
            textZh: "我想选12个月。签约前能不能也谈一下修洗碗机的事？它一直在漏水。",
            casualVersion: "Twelve months sounds good. But hey, can we talk about that leaky dishwasher before I sign?",
            culturalNote: "续租时是提出维修要求的最佳时机，因为房东不想空置房屋去找新租客。这是租客的议价筹码。",
            commonMistake: {
              wrong: "I want twelve months. And the dishwasher is broken, you should fix it.",
              correct: "I'd prefer twelve months. Could we also talk about fixing the dishwasher before I sign?",
              explanation: "'Could we talk about' 比直接命令更有礼貌，续租谈判中保持协商语气很重要。",
            },
            formalityVariants: {
              casual: "Yeah, let's do a year. Oh, and that dishwasher's still leaking — can you fix it?",
              standard: "I'd prefer twelve months. Could we also discuss fixing the dishwasher before I sign? It's been leaking.",
              formal: "I'd like to proceed with the twelve-month option. Before signing, I'd appreciate if we could address the dishwasher, which has had a persistent leak.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Absolutely, I'll have a plumber look at it this week. Is there anything else that needs attention in the unit?",
            textZh: "当然，这周我会让水管工去看看。公寓里还有其他需要注意的吗？",
            keyPhrases: [
              { en: "have a plumber look at it", zh: "让水管工去看看" },
              { en: "needs attention", zh: "需要关注/维修" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing, I'll get someone out there this week. Anything else bugging you in the apartment?", textZh: "没问题，这周我就安排人过去。公寓里还有别的问题吗？", actionHint: "bugging you 指困扰你的问题", frequency: "common" },
            ],
            casualVersion: "Oh for sure, I'll send a plumber over this week. Anything else bothering you in the place?",
            formalityVariants: {
              casual: "Yeah, no problem. I'll get a plumber out there. Anything else?",
              standard: "Absolutely, I'll have a plumber look at it this week. Is there anything else that needs attention?",
              formal: "Certainly, I'll arrange for a licensed plumber to inspect it this week. Are there any other maintenance concerns you'd like addressed prior to signing the renewal?",
            },
          },
          {
            speaker: "you",
            textEn: "The bathroom faucet drips a little, but that's about it. When can I come sign the new lease?",
            textZh: "浴室水龙头有点滴水，其他就没了。我什么时候能来签新租约？",
            casualVersion: "The bathroom faucet drips a bit, that's it. When can I sign?",
            culturalNote: "在美国签租约通常很灵活，可以在房东办公室、公寓现场，有些甚至接受电子签名（DocuSign）。",
            commonMistake: {
              wrong: "The bathroom water tap is dropping. When I can sign contract?",
              correct: "The bathroom faucet drips a little. When can I come sign the new lease?",
              explanation: "'faucet' 是美式英语中水龙头的常用说法。'drips' 比 'dropping' 更准确。'When can I' 而非 'When I can'。",
            },
            formalityVariants: {
              casual: "Faucet in the bathroom drips a little. That's it though. When do I sign?",
              standard: "The bathroom faucet drips a little, but that's about it. When can I come sign the new lease?",
              formal: "There is a minor drip from the bathroom faucet. Otherwise, everything is satisfactory. When would it be convenient to sign the renewal agreement?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "I'll fix both. I can have the new lease ready by Friday. You can stop by the office anytime between nine and five, or I can email you a DocuSign link if that's easier.",
            textZh: "两个我都修。新租约周五就能准备好。你可以9点到5点之间随时来办公室，或者我发个DocuSign电子签名链接给你，哪个方便。",
            keyPhrases: [
              { en: "stop by the office", zh: "来办公室一趟" },
              { en: "DocuSign link", zh: "电子签名链接" },
            ],
            alternativeExpressions: [
              { textEn: "I'll take care of both. Lease will be ready Friday — swing by or I'll send you an e-sign link.", textZh: "两个都搞定。租约周五好——过来签或者我发电子签名链接。", actionHint: "swing by 顺便过来一趟", frequency: "common" },
            ],
            casualVersion: "I'll get both fixed. Lease should be ready Friday — just swing by the office or I'll shoot you a DocuSign link.",
            formalityVariants: {
              casual: "Both fixed, no worries. Lease ready Friday. Come by or I'll email you a link.",
              standard: "I'll fix both. The new lease will be ready by Friday. Stop by the office or I can email you a DocuSign link.",
              formal: "I'll arrange repairs for both items. The renewal agreement will be prepared by Friday. You're welcome to visit the office during business hours, or I can forward an electronic signature link for your convenience.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "续租条款谈判",
        titleEn: "Lease Terms Negotiation",
        description: "就租金涨幅和附加条款进行协商",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I got the renewal letter, but the new rent is two hundred more a month. That's a pretty big jump. Is there any room to negotiate?",
            textZh: "我收到续租信了，但新租金一个月多了200美元。涨得挺多的。有商量的余地吗？",
            casualVersion: "Got the renewal letter — 200 bucks more a month? That's a lot. Can we negotiate?",
            culturalNote: "在美国，租金谈判是完全正常的。好租客（按时交租、爱护房屋）有很强的议价能力，因为房东空置和找新租客的成本很高。",
            commonMistake: {
              wrong: "The new rent is too expensive. You should reduce the price.",
              correct: "The new rent is two hundred more a month. Is there any room to negotiate?",
              explanation: "'room to negotiate' 是谈判中的标准表达。直接说 'too expensive' 和 'you should' 语气过于对抗。",
            },
            formalityVariants: {
              casual: "Two hundred more? That's steep. Any wiggle room?",
              standard: "The new rent is two hundred more a month. That's a pretty big jump. Is there any room to negotiate?",
              formal: "I've reviewed the renewal terms and noticed a two-hundred-dollar monthly increase. I'd like to discuss whether there's flexibility in the proposed rate.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "I understand your concern. Market rates in this area have gone up quite a bit. I could meet you in the middle — how about a hundred more instead of two hundred, if you sign for eighteen months?",
            textZh: "我理解你的担心。这个区域的市场租金涨了不少。我们可以折中一下——如果你签18个月，涨100而不是200怎么样？",
            keyPhrases: [
              { en: "market rates", zh: "市场租金" },
              { en: "meet you in the middle", zh: "折中/各让一步" },
            ],
            alternativeExpressions: [
              { textEn: "Look, rents around here have jumped. But you're a good tenant, so let's split the difference — a hundred more for an eighteen-month lease.", textZh: "你看，这附近的租金都涨了。但你是好租客，所以我们各退一步——涨100签18个月。", actionHint: "split the difference 各退一步/折中", frequency: "common" },
            ],
            casualVersion: "Yeah, I hear you. Rents have gone up around here though. Tell you what — how about 100 more instead of 200 if you lock in 18 months?",
            formalityVariants: {
              casual: "I get it. Rents are up everywhere though. How about 100 more for 18 months?",
              standard: "I understand. Market rates have gone up. How about a hundred more instead of two hundred, if you sign for eighteen months?",
              formal: "I appreciate your concern. Market conditions have driven rates upward in this area. As a compromise, I could offer a one-hundred-dollar increase in exchange for an eighteen-month commitment.",
            },
          },
          {
            speaker: "you",
            textEn: "That's more reasonable. But could you also include the parking spot? I've been paying fifty a month for that separately.",
            textZh: "那还合理一些。但你能不能把停车位也包进来？我一直另外付50一个月。",
            casualVersion: "That's better. Can you throw in the parking spot too? I'm paying 50 extra for that.",
            culturalNote: "在美国租房，停车位经常是额外付费的，尤其在城市公寓。续租时把停车费谈进租金里是常见策略。",
            commonMistake: {
              wrong: "Can you also give me free parking? I pay fifty dollars every month for parking.",
              correct: "Could you also include the parking spot? I've been paying fifty a month for that separately.",
              explanation: "'include' 比 'give me free' 更得体。'separately' 强调这是额外费用，增加谈判合理性。",
            },
            formalityVariants: {
              casual: "Better. Can you throw in parking too? It's 50 bucks extra right now.",
              standard: "That's more reasonable. Could you also include the parking spot? I've been paying fifty a month separately.",
              formal: "That's a more acceptable figure. Would it be possible to incorporate the parking space, currently billed separately at fifty dollars per month, into the lease terms?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Tell you what — I'll include the parking if you set up autopay. Saves me the hassle of chasing down rent checks every month.",
            textZh: "这样吧——如果你设置自动扣款，我就把停车位包进去。省得我每个月追着收租金支票。",
            keyPhrases: [
              { en: "set up autopay", zh: "设置自动扣款" },
              { en: "chasing down rent checks", zh: "追着收租金支票" },
            ],
            alternativeExpressions: [
              { textEn: "I can bundle parking in if you go on automatic payments. Makes life easier for both of us.", textZh: "如果你用自动支付的话我可以把停车费打包进去。对我们双方都方便。", actionHint: "bundle in 打包/包含进去", frequency: "common" },
            ],
            casualVersion: "How about this — I'll throw in parking if you do autopay. Less headache for me chasing checks.",
            formalityVariants: {
              casual: "Deal — parking included if you do autopay. No more check chasing for me.",
              standard: "I'll include parking if you set up autopay. Saves me chasing rent checks every month.",
              formal: "I'm prepared to include the parking space at no additional charge, provided you enroll in our automatic payment system. This arrangement streamlines the collection process for both parties.",
            },
          },
          {
            speaker: "you",
            textEn: "That works for me. Can I get all of this in writing before I sign? I want to make sure the lease reflects everything we agreed on.",
            textZh: "没问题。签字前能不能把这些都写进去？我想确保租约反映我们商定的所有内容。",
            casualVersion: "Sure, autopay's fine. Just put it all in writing before I sign, yeah?",
            culturalNote: "在美国，口头协议虽然有时有法律效力，但租房事务一定要落实到书面文件。'Get it in writing' 是非常重要的自我保护意识。",
            commonMistake: {
              wrong: "Can you write this down? I want the contract to have all things.",
              correct: "Can I get all of this in writing? I want to make sure the lease reflects everything we agreed on.",
              explanation: "'get it in writing' 是固定表达，比 'write this down' 更正式。'reflects' 表示体现/反映。",
            },
            formalityVariants: {
              casual: "Sounds good. Just make sure it's all in the lease, cool?",
              standard: "That works. Can I get all of this in writing before I sign?",
              formal: "That arrangement is acceptable. I'd like to request that all agreed-upon terms be documented in the lease amendment prior to execution.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Of course. I'll have the updated lease with the new rate, included parking, and autopay clause ready by Wednesday. I'll email it over so you can review it before you come in to sign.",
            textZh: "当然。我会把更新后的租约准备好，包含新租金、停车位和自动扣款条款，周三之前发给你。我会先email给你，你看完再来签。",
            keyPhrases: [
              { en: "updated lease", zh: "更新后的租约" },
              { en: "autopay clause", zh: "自动扣款条款" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. I'll draft the new lease with everything we discussed — new rate, parking, autopay — and send it your way by Wednesday for review.", textZh: "没问题。我会把我们讨论的所有内容写进新租约——新租金、停车、自动扣款——周三前发给你审阅。", actionHint: "send it your way 发给你", frequency: "common" },
            ],
            casualVersion: "Yep, I'll get it all in the new lease — rate, parking, autopay — and email it to you by Wednesday. Look it over and come sign whenever.",
            formalityVariants: {
              casual: "Sure thing. I'll put it all in the lease and email it by Wednesday. Check it out before you sign.",
              standard: "Of course. I'll have the updated lease with all our agreed terms ready by Wednesday and email it for your review.",
              formal: "Certainly. I'll prepare a revised lease incorporating the adjusted rate, complimentary parking, and automatic payment provisions. The document will be forwarded to you by Wednesday for review prior to execution.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 27. 退押金 ====================
  {
    id: "housing-security-deposit-return",
    category: "housing",
    titleZh: "退押金",
    titleEn: "Security Deposit Return",
    description: "搬出后与房东沟通退还押金事宜",
    otherRole: "房东",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "basic",
        titleZh: "基本退押金流程",
        titleEn: "Basic Deposit Return",
        description: "搬出后询问押金退还时间和流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I moved out last week and left the apartment in good condition. When can I expect my security deposit back?",
            textZh: "你好，我上周搬走了，公寓保持得很好。我什么时候能拿回押金？",
            casualVersion: "Hey, I moved out last week. Place is clean. When do I get my deposit back?",
            culturalNote: "在美国，各州对退还押金有明确的法定期限（通常14-30天）。房东必须在期限内退还押金或提供书面扣款说明。",
            commonMistake: {
              wrong: "I already moved. When you give back my deposit money?",
              correct: "I moved out last week and left the apartment in good condition. When can I expect my security deposit back?",
              explanation: "'security deposit' 是押金的正式说法。'When can I expect' 比 'When you give back' 更礼貌。",
            },
            formalityVariants: {
              casual: "Moved out last week, everything's clean. When's my deposit coming?",
              standard: "I moved out last week and left the apartment in good condition. When can I expect my security deposit back?",
              formal: "I vacated the unit last week and ensured it was left in satisfactory condition. Could you please advise on the timeline for the return of my security deposit?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Thanks for letting me know. I'll do a walk-through inspection this week. By law, I have thirty days to return the deposit or provide an itemized list of deductions. I'll be in touch soon.",
            textZh: "谢谢告知。这周我会去做退房检查。按法律规定，我有30天时间退还押金或提供逐项扣款清单。我会尽快联系你。",
            keyPhrases: [
              { en: "walk-through inspection", zh: "退房检查" },
              { en: "itemized list of deductions", zh: "逐项扣款清单" },
            ],
            alternativeExpressions: [
              { textEn: "Got it. I need to do a final walk-through first. State law gives me thirty days to get your deposit back or show you what I deducted and why.", textZh: "收到。我先做个最终检查。州法律给我30天退押金或告诉你扣了什么和为什么。", actionHint: "final walk-through 最终退房检查", frequency: "common" },
            ],
            casualVersion: "Cool, I'll go check the place out this week. I've got 30 days by law to get your deposit back or tell you what I'm keeping and why.",
            formalityVariants: {
              casual: "I'll check the place this week. Got 30 days to get your money back or explain deductions.",
              standard: "I'll do a walk-through this week. By law, I have thirty days to return the deposit or provide an itemized deduction list.",
              formal: "Thank you for informing me. I'll conduct a thorough inspection of the unit this week. Per state regulations, I'm required to return the deposit or furnish an itemized statement of deductions within thirty days.",
            },
          },
          {
            speaker: "you",
            textEn: "Sounds good. I took photos of every room before I left, just so we're on the same page about the condition.",
            textZh: "好的。我搬走前给每个房间都拍了照片，这样我们对房屋状态的认知一致。",
            casualVersion: "Cool. I took pics of everything before I left, just in case.",
            culturalNote: "在美国，搬入和搬出时拍照记录房屋状态是保护自己权益的重要做法。如果发生押金纠纷，照片是关键证据。",
            commonMistake: {
              wrong: "I took photos of apartment. So we know the situation is same.",
              correct: "I took photos of every room before I left, just so we're on the same page about the condition.",
              explanation: "'on the same page' 是常用习语，表示双方认知一致。'condition' 比 'situation' 更适合描述房屋状态。",
            },
            formalityVariants: {
              casual: "Took pics of everything, so we're good.",
              standard: "I took photos of every room before I left, so we're on the same page about the condition.",
              formal: "For documentation purposes, I photographed every room prior to vacating to ensure we have a mutual understanding of the unit's condition at move-out.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "That's smart. I appreciate tenants who do that. I'll compare my move-in checklist with the current state. If everything checks out, I'll mail you a check within two weeks.",
            textZh: "这很聪明。我喜欢这样做的租客。我会把入住检查表和现在的状态做对比。如果一切没问题，两周内寄支票给你。",
            keyPhrases: [
              { en: "move-in checklist", zh: "入住检查表" },
              { en: "checks out", zh: "没问题/核实通过" },
            ],
            alternativeExpressions: [
              { textEn: "Good thinking. I'll cross-reference the move-in report with how the place looks now. If it's all good, expect a check in a couple weeks.", textZh: "想得周到。我会把入住报告和现在的状况对照。如果都没问题，两周左右寄支票。", actionHint: "cross-reference 对照参考", frequency: "common" },
            ],
            casualVersion: "Smart move. I'll compare it to the move-in checklist. If it all looks good, I'll have a check to you in about two weeks.",
            formalityVariants: {
              casual: "Nice. I'll check it against the move-in list. All good? Check in two weeks.",
              standard: "I appreciate that. I'll compare the move-in checklist with the current condition. If everything checks out, I'll mail a check within two weeks.",
              formal: "That's very prudent. I'll conduct a thorough comparison against the documented move-in condition. Assuming no discrepancies, you can expect the full deposit refund via check within fourteen business days.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. Could you send the check to my new address? I'll text it to you. Also, should I expect the full amount or will there be any deductions?",
            textZh: "好的。你能把支票寄到我的新地址吗？我发短信给你。另外，我能拿回全额还是会有扣款？",
            casualVersion: "Cool. I'll text you my new address. Am I getting the full deposit back?",
            culturalNote: "在美国，房东可以从押金中扣除超出正常磨损的损坏修理费，但不能扣正常磨损（normal wear and tear）的费用，比如墙漆自然褪色。",
            commonMistake: {
              wrong: "Please send check to new address. I can get all money back?",
              correct: "Could you send the check to my new address? Should I expect the full amount or will there be deductions?",
              explanation: "'Could you' 比 'Please send' 更得体。'Should I expect the full amount' 是询问全额退还的自然表达。",
            },
            formalityVariants: {
              casual: "I'll send you my new address. Getting the whole thing back?",
              standard: "Could you send the check to my new address? Should I expect the full amount or any deductions?",
              formal: "I'll provide my forwarding address shortly. Could you also advise whether the deposit will be returned in full, or if any deductions are anticipated?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Sure, just text me the new address. Based on what I saw during a quick look, the place is in good shape. Normal wear and tear is expected, so I wouldn't worry. You'll get an itemized statement either way.",
            textZh: "好的，把新地址发给我就行。我快速看了一下，房子状况不错。正常磨损是预期之内的，所以不用担心。不管怎样你都会收到逐项说明。",
            keyPhrases: [
              { en: "normal wear and tear", zh: "正常磨损" },
              { en: "itemized statement", zh: "逐项说明/明细" },
            ],
            alternativeExpressions: [
              { textEn: "Text me your address. The place looked fine — just normal wear and tear, nothing major. I'll send you a breakdown with the check.", textZh: "把地址发来。房子看着没问题——就是正常磨损，没什么大事。我会把明细和支票一起寄给你。", actionHint: "breakdown 明细/分项说明", frequency: "common" },
            ],
            casualVersion: "Yeah, text it to me. The place looks fine from what I saw — normal wear and tear. You'll get a full statement with the check either way.",
            formalityVariants: {
              casual: "Text me. Place looks fine, just normal stuff. You'll get the breakdown.",
              standard: "Text me the address. The place is in good shape — normal wear and tear. You'll get an itemized statement either way.",
              formal: "Please forward your new address at your convenience. My preliminary assessment indicates the unit is in satisfactory condition, with only expected normal wear and tear. You'll receive a comprehensive itemized statement accompanying the deposit refund.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "押金扣款争议",
        titleEn: "Deposit Deduction Dispute",
        description: "对房东的押金扣款提出异议",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I received the deposit statement, but I disagree with some of the deductions. You charged me three hundred for painting, but that's normal wear and tear after three years.",
            textZh: "我收到押金明细了，但有些扣款我不同意。你扣了300美元的粉刷费，但住了三年后这属于正常磨损。",
            casualVersion: "Got the deposit statement. Three hundred for painting after three years? That's just normal wear and tear.",
            culturalNote: "在美国，大多数州规定住了2-3年后的墙面重新粉刷属于正常磨损，房东不能从押金中扣除。了解当地法律是保护权益的关键。",
            commonMistake: {
              wrong: "I don't agree with the deduction. Painting fee is not reasonable after three years.",
              correct: "I disagree with some of the deductions. You charged me three hundred for painting, but that's normal wear and tear after three years.",
              explanation: "'disagree with' 比 'don't agree' 更正式。具体引用金额和项目让争议更有力。",
            },
            formalityVariants: {
              casual: "Three hundred for paint? I lived there three years — that's normal wear and tear.",
              standard: "I disagree with some deductions. Three hundred for painting after three years is normal wear and tear.",
              formal: "Upon reviewing the deposit statement, I must respectfully dispute certain deductions. The three-hundred-dollar painting charge constitutes normal wear and tear given my three-year tenancy.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "I see your point, but there were some scuff marks on the walls that went beyond normal wear. I can meet you halfway — how about I reduce it to one fifty?",
            textZh: "我理解你的观点，但墙上有些划痕超出了正常磨损范围。我们各退一步——减到150怎么样？",
            keyPhrases: [
              { en: "scuff marks", zh: "划痕/擦痕" },
              { en: "meet you halfway", zh: "各退一步/折中" },
            ],
            alternativeExpressions: [
              { textEn: "Fair enough, but the walls had more than just normal fading. Tell you what, I'll knock it down to a hundred fifty.", textZh: "说得有道理，但墙面不只是正常褪色。这样吧，我减到150。", actionHint: "knock it down to 降到/减到", frequency: "common" },
            ],
            casualVersion: "I hear you, but there were some bad scuff marks. How about I cut it to 150?",
            formalityVariants: {
              casual: "Okay, but those walls had some real scuffs. How about 150?",
              standard: "I see your point, but some scuff marks went beyond normal wear. How about I reduce it to one fifty?",
              formal: "I acknowledge your position, however the walls exhibited scuff marks exceeding normal wear. As a compromise, I'm prepared to reduce the charge to one hundred fifty dollars.",
            },
          },
          {
            speaker: "you",
            textEn: "I can live with that. But I also see a two-hundred-dollar carpet cleaning fee. I had the carpets professionally cleaned before I left — I have the receipt.",
            textZh: "这个我能接受。但我还看到200美元的地毯清洗费。我搬走前请了专业清洗的——我有收据。",
            casualVersion: "Fine on the paint. But 200 for carpet cleaning? I already had them cleaned — got the receipt right here.",
            culturalNote: "在美国，保留所有维修和清洁的收据非常重要。专业清洁收据是最有力的证据之一。",
            commonMistake: {
              wrong: "I already cleaned carpet before leaving. I have proof.",
              correct: "I had the carpets professionally cleaned before I left — I have the receipt.",
              explanation: "'had the carpets professionally cleaned' 是使役用法，说明请了专业服务。'receipt' 比 'proof' 更具体。",
            },
            formalityVariants: {
              casual: "Fine. But 200 for carpet cleaning? I got 'em cleaned already. Got the receipt.",
              standard: "I can accept that. But I had the carpets professionally cleaned before I left and have the receipt.",
              formal: "That adjustment is acceptable. However, I'd like to contest the two-hundred-dollar carpet cleaning charge. I arranged professional cleaning prior to move-out and can provide the receipt as documentation.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Oh, if you have the receipt, go ahead and send it over. I'll remove that charge. I didn't see a note about it in the file.",
            textZh: "哦，如果你有收据，发给我吧。我会取消那笔扣款。我档案里没看到相关记录。",
            keyPhrases: [
              { en: "remove that charge", zh: "取消那笔扣款" },
              { en: "in the file", zh: "在档案/记录里" },
            ],
            alternativeExpressions: [
              { textEn: "If you've got proof of cleaning, just forward it to me and I'll take that charge off. Must've missed it.", textZh: "如果你有清洁证明，发过来我就把那笔扣款去掉。应该是我漏看了。", actionHint: "take that charge off 去掉/取消那笔费用", frequency: "common" },
            ],
            casualVersion: "Oh really? Yeah, send me the receipt and I'll drop that charge. Didn't know you had it done.",
            formalityVariants: {
              casual: "Send the receipt and I'll take it off. My bad.",
              standard: "If you have the receipt, send it over and I'll remove that charge.",
              formal: "If you can provide documentation of the professional cleaning, I'll gladly remove that charge from the deduction list. It appears that information wasn't included in our records.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll email it to you today. So with the paint reduced to one fifty and the carpet charge removed, my refund should be around twelve hundred, right?",
            textZh: "我今天就发邮件给你。那粉刷费减到150、地毯清洗费去掉的话，我的退款应该是1200左右对吧？",
            casualVersion: "I'll send it today. So I'm getting back like twelve hundred then?",
            culturalNote: "在谈判结束时明确确认最终数字很重要，避免之后产生误解。口头确认后最好再通过邮件书面确认。",
            commonMistake: {
              wrong: "So I can get back about twelve hundred dollars, yes?",
              correct: "With the paint reduced to one fifty and the carpet charge removed, my refund should be around twelve hundred, right?",
              explanation: "列出具体调整项再确认总额，比只问数字更清楚，也为邮件确认打下基础。",
            },
            formalityVariants: {
              casual: "Cool, I'll send it. So like twelve hundred back then?",
              standard: "I'll email it today. With paint at one fifty and carpet removed, my refund should be around twelve hundred, right?",
              formal: "I'll forward the receipt today. To confirm: with the painting charge adjusted to one hundred fifty and the carpet cleaning fee removed, the net refund should be approximately twelve hundred dollars. Is that correct?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "That sounds about right. Once I get the receipt, I'll send you an updated statement and cut the check. Should have it in the mail within a week.",
            textZh: "差不多是那个数。收到收据后我会发更新的明细给你然后开支票。一周内应该能寄出。",
            keyPhrases: [
              { en: "cut the check", zh: "开支票" },
              { en: "in the mail", zh: "寄出" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, that's right. Send me the receipt and I'll update the statement and get your check out within a week.", textZh: "对，没错。收据发来，我更新明细然后一周内把支票寄给你。", actionHint: "get your check out 把支票寄出", frequency: "common" },
            ],
            casualVersion: "Yep, sounds right. Get me that receipt and I'll have the check out to you in about a week.",
            formalityVariants: {
              casual: "Yeah, about twelve hundred. Send the receipt and I'll get the check out this week.",
              standard: "That sounds right. Once I get the receipt, I'll send an updated statement and mail the check within a week.",
              formal: "That figure is correct. Upon receipt of the cleaning documentation, I'll issue a revised statement and dispatch the refund check within seven business days.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 28. 转租 ====================
  // ==================== 29. 噪音投诉 ====================
  {
    id: "housing-noise-complaint",
    category: "housing",
    titleZh: "噪音投诉",
    titleEn: "Noise Complaint",
    description: "向邻居或物业投诉噪音问题",
    otherRole: "邻居",
    otherRoleIcon: "🏘️",
    flows: [
      {
        id: "basic",
        titleZh: "基本噪音投诉",
        titleEn: "Basic Noise Complaint",
        description: "礼貌地向邻居反映噪音问题",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm your neighbor from apartment 3B. I hate to bother you, but I've been hearing loud music late at night. Would you mind keeping it down after ten?",
            textZh: "你好，我是3B的邻居。不好意思打扰了，但我晚上一直听到很大的音乐声。你能不能10点以后小声一点？",
            casualVersion: "Hey, I'm next door in 3B. Not trying to be that guy, but the music's been pretty loud at night. Can you turn it down after ten?",
            culturalNote: "在美国，邻居间直接沟通噪音问题是被期待的第一步。大多数人会先友好地敲门说一声，而不是直接投诉到物业或报警。",
            commonMistake: {
              wrong: "Your music is very loud. Please be quiet after ten o'clock.",
              correct: "I hate to bother you, but I've been hearing loud music late at night. Would you mind keeping it down after ten?",
              explanation: "'I hate to bother you' 是开场缓冲。'Would you mind keeping it down' 比直接说 'be quiet' 礼貌得多。",
            },
            formalityVariants: {
              casual: "Hey neighbor, any chance you can turn the music down at night? It's been pretty loud.",
              standard: "I hate to bother you, but the music has been loud late at night. Would you mind keeping it down after ten?",
              formal: "I apologize for the intrusion. I've noticed the music from your unit has been quite audible during the late evening hours. Would it be possible to lower the volume after ten p.m.?",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Oh, I'm so sorry! I had no idea the walls were that thin. I just moved in and I'm still getting used to the place. I'll keep it down, no problem.",
            textZh: "哦，真的很抱歉！我不知道墙这么薄。我刚搬来，还在适应这里。我会小声的，没问题。",
            keyPhrases: [
              { en: "walls were that thin", zh: "墙这么薄" },
              { en: "keep it down", zh: "小声/降低音量" },
            ],
            alternativeExpressions: [
              { textEn: "My bad, I honestly didn't realize how much sound carries. I just moved in — I'll definitely turn it down at night.", textZh: "我的错，真没想到隔音这么差。刚搬来——晚上一定会调小声。", actionHint: "sound carries 声音传得远/隔音差", frequency: "common" },
            ],
            casualVersion: "Oh man, my bad! Didn't know the sound traveled that much. Just moved in. I'll turn it down for sure.",
            formalityVariants: {
              casual: "Oh shoot, sorry! Didn't realize. I'll keep it down.",
              standard: "I'm sorry, I had no idea the walls were that thin. I'll keep it down, no problem.",
              formal: "I sincerely apologize. I wasn't aware of the sound transmission between our units. As a new resident, I'm still learning the building's characteristics. I'll certainly ensure the volume is reduced.",
            },
          },
          {
            speaker: "you",
            textEn: "I totally get it — the soundproofing in this building isn't great. I appreciate you being cool about it.",
            textZh: "完全理解——这栋楼的隔音确实不太好。感谢你这么好说话。",
            casualVersion: "No worries, the soundproofing here sucks. Thanks for being cool about it.",
            culturalNote: "在美国文化中，投诉后表示理解和感谢是维护邻里关系的重要环节。保持友好的邻里关系比'赢'一场争论更重要。",
            commonMistake: {
              wrong: "I understand. The wall is not good for sound. Thank you for understanding.",
              correct: "I totally get it — the soundproofing isn't great. I appreciate you being cool about it.",
              explanation: "'soundproofing' 是隔音的专业说法。'being cool about it' 表示对方很好说话/通情达理。",
            },
            formalityVariants: {
              casual: "Yeah, these walls are paper-thin. Thanks for being chill.",
              standard: "I get it — the soundproofing isn't great. I appreciate you being understanding.",
              formal: "I completely understand — the building's sound insulation leaves something to be desired. Thank you for being so accommodating.",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Of course. And hey, if it ever happens again, just knock on my door. I'd rather hear it from you than get a complaint from management.",
            textZh: "当然。如果以后再发生，直接来敲我门就行。我宁愿听你说，也不想收到物业的投诉。",
            keyPhrases: [
              { en: "knock on my door", zh: "敲我的门" },
              { en: "complaint from management", zh: "来自物业的投诉" },
            ],
            alternativeExpressions: [
              { textEn: "For sure. And seriously, just come tell me. I don't want to be that neighbor that gets noise complaints.", textZh: "当然。说真的，直接来跟我说。我不想成为那个被投诉噪音的邻居。", actionHint: "be that neighbor 成为那种（让人讨厌的）邻居", frequency: "common" },
            ],
            casualVersion: "Totally. And just come knock if it happens again — way better than getting a letter from the office.",
            formalityVariants: {
              casual: "Yeah, just knock. Better than getting in trouble with the office.",
              standard: "Of course. Just knock on my door if it happens again. I'd rather hear from you than management.",
              formal: "Absolutely. Please don't hesitate to contact me directly if it occurs again. I much prefer resolving these matters neighborly rather than through building management.",
            },
          },
          {
            speaker: "you",
            textEn: "Will do. By the way, I'm Mike. Welcome to the building! If you need anything — like where the laundry room is or how recycling works — just ask.",
            textZh: "好的。顺便说一下，我叫Mike。欢迎来到这栋楼！如果你需要什么——比如洗衣房在哪或者回收怎么分类——尽管问。",
            casualVersion: "For sure. I'm Mike, by the way. Welcome! Hit me up if you need to know where stuff is.",
            culturalNote: "把投诉转化为建立邻里关系的机会是美国文化中很受欢迎的做法。主动提供帮助能化解尴尬，建立良好的邻居关系。",
            commonMistake: {
              wrong: "My name is Mike. Welcome here. You can ask me if you have question.",
              correct: "I'm Mike. Welcome to the building! If you need anything — like where the laundry room is — just ask.",
              explanation: "'I'm Mike' 比 'My name is Mike' 更自然随意。给出具体例子（洗衣房、回收）比笼统的 'have question' 更实用。",
            },
            formalityVariants: {
              casual: "I'm Mike, by the way. Welcome! Need anything, just holler.",
              standard: "I'm Mike. Welcome to the building! If you need anything, just ask.",
              formal: "I'm Mike, by the way. Welcome to the building. Please feel free to reach out if you have any questions about the facilities or building policies.",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Thanks, Mike! I'm Sarah. Really appreciate it. And sorry again about the music — I'll get some headphones for late-night listening.",
            textZh: "谢谢，Mike！我是Sarah。真的很感谢。再次为音乐的事道歉——晚上我会用耳机。",
            keyPhrases: [
              { en: "get some headphones", zh: "买/用耳机" },
              { en: "late-night listening", zh: "深夜听音乐" },
            ],
            alternativeExpressions: [
              { textEn: "I'm Sarah. Thanks for being so nice about it. I'll invest in some good headphones for nighttime.", textZh: "我是Sarah。谢谢你这么友好。我会买副好耳机晚上用。", actionHint: "invest in 投资买/花钱买", frequency: "common" },
            ],
            casualVersion: "Thanks Mike! I'm Sarah. And yeah, I'll grab some headphones so it won't be an issue. Sorry again!",
            formalityVariants: {
              casual: "I'm Sarah! Thanks for being cool. I'll just use headphones at night.",
              standard: "Thanks, Mike! I'm Sarah. I'll get headphones for late-night listening. Sorry again.",
              formal: "Thank you, Mike. I'm Sarah. I greatly appreciate your kindness. I'll purchase headphones to ensure this doesn't happen again.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "持续噪音问题",
        titleEn: "Ongoing Noise Issue",
        description: "噪音问题持续存在，向物业正式投诉",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I've spoken to my upstairs neighbor twice about the noise, but it hasn't improved. I'm hearing stomping and loud bass almost every night after midnight.",
            textZh: "我已经和楼上的邻居说过两次了，但没有改善。几乎每天午夜后都能听到跺脚声和很响的低音炮。",
            casualVersion: "I've talked to the guy upstairs twice about the noise. Nothing's changed — stomping, bass, every night past midnight.",
            culturalNote: "在美国，如果和邻居直接沟通两次后问题仍然存在，向物业或房东正式投诉是合理的下一步。保留每次沟通的记录（日期、时间、内容）会有帮助。",
            commonMistake: {
              wrong: "I told upstairs neighbor about noise two times. It is still very noisy every night.",
              correct: "I've spoken to my upstairs neighbor twice, but it hasn't improved. I'm hearing stomping and loud bass after midnight.",
              explanation: "'spoken to' 比 'told' 更得体。具体描述噪音类型（stomping, bass）比笼统说 'noisy' 更有力。",
            },
            formalityVariants: {
              casual: "Talked to the neighbor twice. Still loud every night. Stomping, bass, the works.",
              standard: "I've spoken to my neighbor twice but it hasn't improved. Stomping and loud bass almost every night after midnight.",
              formal: "I've addressed this issue directly with the tenant above me on two separate occasions, unfortunately without resolution. The disturbances — primarily heavy footfalls and bass-heavy audio — persist nightly after midnight.",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "I'm sorry to hear that. We take noise complaints seriously. Can you document the dates and times? I'll issue a formal warning to the tenant. If it continues after the warning, we can start the lease violation process.",
            textZh: "很抱歉听到这些。我们很重视噪音投诉。你能记录下具体的日期和时间吗？我会给那个租户发正式警告。如果警告后继续，我们可以启动违约流程。",
            keyPhrases: [
              { en: "formal warning", zh: "正式警告" },
              { en: "lease violation process", zh: "违约处理流程" },
            ],
            alternativeExpressions: [
              { textEn: "That's not acceptable. Keep a log of when it happens and I'll send them a written warning. If they don't shape up, it becomes a lease violation.", textZh: "这不可接受。记录下每次发生的时间，我会发书面警告。如果他们不改，就算违约。", actionHint: "shape up 改正行为/规矩起来", frequency: "common" },
            ],
            casualVersion: "That's not cool. Write down the dates and times for me. I'll send them a warning letter. If they keep going, we'll hit them with a lease violation.",
            formalityVariants: {
              casual: "Not okay. Log the times and I'll warn them. Keeps going? Lease violation.",
              standard: "We take this seriously. Document the incidents and I'll issue a formal warning. Continued issues trigger the lease violation process.",
              formal: "I sincerely apologize for the ongoing disturbance. We treat noise complaints with utmost seriousness. If you could maintain a detailed log of incidents, I'll issue a formal written warning. Should the behavior persist, we'll initiate lease violation proceedings.",
            },
          },
          {
            speaker: "you",
            textEn: "I've actually been keeping a log. Last Wednesday it went until two a.m., Friday night until one thirty, and again on Saturday. I have recordings on my phone too.",
            textZh: "其实我一直在记录。上周三持续到凌晨2点，周五晚上到1点半，周六又是。我手机上也有录音。",
            casualVersion: "Already been logging it. Wednesday — 2 a.m. Friday — 1:30. Saturday too. Got recordings on my phone.",
            culturalNote: "在美国，噪音投诉中录音和记录是很有用的证据。大多数州允许在自己住所内录音。这些记录在小额法庭中也可作为证据。",
            commonMistake: {
              wrong: "I record the time. Wednesday until 2 a.m. Friday until 1:30 a.m. I also have sound record.",
              correct: "I've been keeping a log. Last Wednesday it went until two a.m., Friday night until one thirty. I have recordings too.",
              explanation: "'keeping a log' 是持续记录的标准表达。'recordings' 比 'sound record' 更自然。",
            },
            formalityVariants: {
              casual: "Been tracking it. Wednesday till 2, Friday till 1:30, Saturday too. Got it all recorded.",
              standard: "I've been keeping a log. Wednesday until two a.m., Friday until one thirty, Saturday as well. I have phone recordings.",
              formal: "I've maintained a detailed log of each incident. The disturbances lasted until approximately two a.m. on Wednesday, one-thirty a.m. on Friday, and recurred Saturday. I also have audio recordings from my device.",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "That's very helpful. Send me the log and the recordings by email. I'll address this with the tenant today. Our quiet hours are from ten p.m. to eight a.m. — this is clearly a violation.",
            textZh: "这非常有帮助。把记录和录音发邮件给我。今天我就和那个租户谈。我们的安静时段是晚上10点到早上8点——这明显是违规的。",
            keyPhrases: [
              { en: "quiet hours", zh: "安静时段" },
              { en: "clearly a violation", zh: "明显违规" },
            ],
            alternativeExpressions: [
              { textEn: "Perfect, email me everything. I'll talk to them today. Quiet hours are ten to eight — they're way out of line.", textZh: "太好了，都发邮件给我。今天就去谈。安静时段是10点到8点——他们严重违规了。", actionHint: "out of line 越线/违规", frequency: "common" },
            ],
            casualVersion: "That helps a lot. Email it all to me. I'll deal with it today. Quiet hours are 10 p.m. to 8 a.m. — they're clearly breaking the rules.",
            formalityVariants: {
              casual: "Email me the log and recordings. I'll handle it today. They're breaking quiet hours big time.",
              standard: "Send me the log and recordings. I'll address it today. Quiet hours are ten to eight — this is a clear violation.",
              formal: "Excellent documentation. Please forward the log and recordings to my email. I'll address this with the tenant immediately. Our building policy establishes quiet hours from ten p.m. to eight a.m., and this constitutes a clear violation.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks. What happens if the warning doesn't work? I really need my sleep — I work early mornings.",
            textZh: "谢谢。如果警告没用怎么办？我真的需要睡眠——我早上要早起工作。",
            casualVersion: "What if the warning doesn't do anything? I gotta be up at like six for work.",
            culturalNote: "在美国，持续违反安静时段可以作为房东终止租约的理由。严重情况下租客也可以打311（非紧急市政服务电话）或报警。",
            commonMistake: {
              wrong: "If warning is not useful, what to do? I must sleep because I work morning.",
              correct: "What happens if the warning doesn't work? I really need my sleep — I work early mornings.",
              explanation: "'What happens if' 是询问后续步骤的标准句型。'work early mornings' 比 'work morning' 更自然。",
            },
            formalityVariants: {
              casual: "And if they don't stop? I need sleep, man. Up at six every day.",
              standard: "What happens if the warning doesn't work? I work early mornings and really need my sleep.",
              formal: "What recourse is available if the warning proves ineffective? Given my early morning work schedule, the sleep disruption is significantly impacting my quality of life.",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "If they get a second complaint after the warning, they'll receive a formal lease violation notice with a fourteen-day cure period. If they don't fix the behavior, we can begin eviction proceedings. But let's hope the warning does the trick. I'll follow up with you in a week.",
            textZh: "如果警告后再收到投诉，他们会收到正式的违约通知，有14天整改期。如果行为不改，我们可以启动驱逐程序。但希望警告管用。一周后我会跟进。",
            keyPhrases: [
              { en: "cure period", zh: "整改期" },
              { en: "eviction proceedings", zh: "驱逐程序" },
            ],
            alternativeExpressions: [
              { textEn: "Second complaint after the warning? Formal violation notice with two weeks to fix it. After that, eviction is on the table. I'll check in with you next week to see how it's going.", textZh: "警告后再投诉？正式违约通知加两周整改。之后就可以启动驱逐。下周我跟你确认情况。", actionHint: "on the table 可以考虑/摆上台面", frequency: "common" },
            ],
            casualVersion: "Next complaint after the warning gets them a lease violation — they've got 14 days to shape up. After that, eviction's on the table. But hopefully the warning works. I'll check in with you next week.",
            formalityVariants: {
              casual: "Warning doesn't work? Lease violation, 14 days to fix it, then eviction. I'll check back with you next week.",
              standard: "A second complaint triggers a formal violation notice with fourteen days to cure. If unresolved, we begin eviction. I'll follow up in a week.",
              formal: "Should a subsequent complaint arise post-warning, the tenant will receive a formal lease violation notice with a fourteen-day cure period. Failure to remedy the behavior may result in the initiation of eviction proceedings. I'll contact you within one week to assess whether the situation has improved.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 30. 搬出清单 ====================
  {
    id: "housing-moving-out-checklist",
    category: "housing",
    titleZh: "搬出清单",
    titleEn: "Moving Out Checklist",
    description: "与房东确认搬出流程和注意事项",
    otherRole: "房东",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "basic",
        titleZh: "基本搬出流程",
        titleEn: "Basic Move-Out Process",
        description: "了解搬出前需要做的准备工作",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm planning to move out at the end of my lease next month. What do I need to do before I leave?",
            textZh: "你好，我计划下个月租约到期后搬走。我走之前需要做什么？",
            casualVersion: "Hey, I'm moving out next month when my lease is up. What do I gotta do before I go?",
            culturalNote: "在美国，大多数租约要求提前30天书面通知搬出意向（notice to vacate），即使租约本身即将到期。不提前通知可能被自动续约或罚款。",
            commonMistake: {
              wrong: "I will move next month. What should I do before leave?",
              correct: "I'm planning to move out at the end of my lease next month. What do I need to do before I leave?",
              explanation: "'move out' 比 'move' 更明确（搬出去而非搬进来）。'at the end of my lease' 说明时间点。",
            },
            formalityVariants: {
              casual: "Moving out next month. What do I need to do?",
              standard: "I'm planning to move out when my lease ends next month. What do I need to do?",
              formal: "I'm writing to inform you of my intention to vacate the premises at the conclusion of my lease term next month. Could you outline the required move-out procedures?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Thanks for the heads-up. First, I need your notice to vacate in writing — an email works. Then we'll schedule a move-out inspection. The apartment should be broom-clean, all your stuff out, and holes in the walls patched.",
            textZh: "谢谢提前告知。首先，我需要你的书面搬出通知——发邮件就行。然后我们安排退房检查。公寓需要打扫干净、所有东西搬走、墙上的洞补好。",
            keyPhrases: [
              { en: "notice to vacate", zh: "搬出通知" },
              { en: "broom-clean", zh: "基本打扫干净" },
            ],
            alternativeExpressions: [
              { textEn: "Appreciate the notice. Email me a written move-out notice, and we'll set up an inspection. Leave the place broom-clean, clear everything out, and fill any nail holes.", textZh: "感谢通知。发我一封书面搬出通知邮件，然后我们安排检查。打扫干净，清空所有东西，补好钉子洞。", actionHint: "fill any nail holes 补好钉子洞", frequency: "common" },
            ],
            casualVersion: "Thanks for letting me know. Shoot me an email saying you're leaving — that's your official notice. We'll do a walk-through. Just clean the place, move all your stuff, and patch any holes.",
            formalityVariants: {
              casual: "Email me you're moving out. We'll do a walk-through. Clean up, clear out, patch holes.",
              standard: "I need written notice — email is fine. We'll schedule an inspection. Leave it broom-clean with holes patched.",
              formal: "Thank you for informing me. I'll require a formal notice to vacate in writing. We'll then arrange a move-out inspection. The unit should be left in broom-clean condition with all personal belongings removed and wall repairs completed.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Do I need to have the carpets professionally cleaned, or is vacuuming enough?",
            textZh: "明白了。地毯需要做专业清洗吗，还是吸尘就够了？",
            casualVersion: "Do I need to get the carpets cleaned or just vacuum?",
            culturalNote: "在美国，有些租约要求搬出时做专业地毯清洗，但在很多州，房东不能强制要求如果地毯只是正常磨损。检查你的租约条款很重要。",
            commonMistake: {
              wrong: "Do I need to wash carpet by professional company?",
              correct: "Do I need to have the carpets professionally cleaned, or is vacuuming enough?",
              explanation: "'have something professionally cleaned' 是使役结构。'vacuuming' 用动名词作为比较选项更自然。",
            },
            formalityVariants: {
              casual: "Carpets — deep clean or just vacuum?",
              standard: "Do I need professional carpet cleaning, or is vacuuming enough?",
              formal: "Does the lease require professional carpet cleaning upon move-out, or would thorough vacuuming suffice?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Check your lease — some units require professional cleaning. Yours just says reasonable condition, so a good vacuuming and spot-cleaning any stains should be fine. Keep the receipt if you do hire someone.",
            textZh: "查看一下你的租约——有些单元要求专业清洗。你的只写了合理状态，所以好好吸尘、处理一下污渍就行了。如果你请了人，保留收据。",
            keyPhrases: [
              { en: "reasonable condition", zh: "合理状态" },
              { en: "spot-cleaning", zh: "局部清洁/处理污渍" },
            ],
            alternativeExpressions: [
              { textEn: "Your lease says reasonable condition — so just vacuum well and clean any spots. If you hire a cleaner, save the receipt just in case.", textZh: "你的租约写的是合理状态——吸好尘处理污渍就行。请了清洁工的话留好收据以防万一。", actionHint: "just in case 以防万一", frequency: "common" },
            ],
            casualVersion: "Your lease just says reasonable condition. Vacuum it up, clean any stains, and you're good. Save receipts if you hire anyone.",
            formalityVariants: {
              casual: "Yours just says 'reasonable condition.' Vacuum and clean stains — you're fine. Keep receipts.",
              standard: "Your lease requires reasonable condition. Vacuuming and spot-cleaning stains should be sufficient. Keep any receipts.",
              formal: "Per your lease terms, the requirement is that the unit be returned in reasonable condition. Thorough vacuuming and treatment of any visible stains should meet this standard. I'd recommend retaining receipts for any professional services engaged.",
            },
          },
          {
            speaker: "you",
            textEn: "What about utilities — do I cancel them on my move-out date, or should I keep them on a few extra days?",
            textZh: "水电气怎么办——搬走那天就停了，还是应该多保留几天？",
            casualVersion: "When should I shut off utilities? On move-out day or keep them going a bit?",
            culturalNote: "在美国，水电气通常在搬出当天或次日停止。提前停会影响退房检查（需要电灯检查房屋状态），太晚停则多花钱。",
            commonMistake: {
              wrong: "When I should stop water and electricity?",
              correct: "Do I cancel utilities on my move-out date, or should I keep them on a few extra days?",
              explanation: "'utilities' 统指水电气。'cancel' 或 'disconnect' 是停止服务的标准说法。注意疑问句词序 'Do I cancel' 而非 'When I should stop'。",
            },
            formalityVariants: {
              casual: "When do I shut off the utilities?",
              standard: "Should I cancel utilities on my move-out date or keep them on a few extra days?",
              formal: "Regarding utility services — should I arrange disconnection on the move-out date, or is it advisable to maintain them for a brief period thereafter?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Keep them on through your last day. I'll need the lights on for the inspection. After that, you can call and cancel. And don't forget to forward your mail with the post office — that takes about a week to kick in.",
            textZh: "保留到你最后一天。退房检查时我需要有灯。之后你就可以打电话取消了。另外别忘了去邮局办理邮件转寄——大概一周后才生效。",
            keyPhrases: [
              { en: "forward your mail", zh: "邮件转寄" },
              { en: "kick in", zh: "生效/开始起作用" },
            ],
            alternativeExpressions: [
              { textEn: "Leave the utilities on until after the inspection. Then cancel. Oh, and set up mail forwarding at the post office — it takes a few days to start.", textZh: "检查结束前别停水电。然后取消。对了，去邮局设置邮件转寄——要几天才开始。", actionHint: "set up mail forwarding 设置邮件转寄", frequency: "common" },
            ],
            casualVersion: "Keep everything on through your last day so I can do the inspection with lights. After that, cancel away. And set up mail forwarding at the post office — takes about a week to start.",
            formalityVariants: {
              casual: "Utilities on through the last day. Cancel after inspection. Set up mail forwarding too.",
              standard: "Keep utilities on through your last day for the inspection. Cancel after that. Forward your mail — it takes about a week.",
              formal: "Please maintain utility services through your final day to facilitate the inspection. You may arrange disconnection thereafter. Additionally, I'd recommend establishing mail forwarding through the postal service, as it typically requires approximately one week to take effect.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "退房检查细节",
        titleEn: "Move-Out Inspection Details",
        description: "参与退房检查，讨论房屋状况和扣款",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to do a pre-move-out walk-through with you, if that's possible. I want to know what to fix before the final inspection so I can get my full deposit back.",
            textZh: "如果可以的话，我想和你做一次预退房检查。我想知道最终检查前需要修什么，这样我能拿回全额押金。",
            casualVersion: "Can we do a walk-through before I officially move out? I wanna know what to fix so I get my deposit back.",
            culturalNote: "在美国加州等州，租客有法定权利要求预退房检查。房东必须在预检中指出需要修复的问题，给租客机会在最终检查前修复，从而拿回更多押金。",
            commonMistake: {
              wrong: "Can we check apartment before I leave? I want to know what need to repair to get deposit.",
              correct: "I'd like to do a pre-move-out walk-through. I want to know what to fix before the final inspection.",
              explanation: "'pre-move-out walk-through' 是预退房检查的标准说法。'final inspection' 比 'check' 更正式。",
            },
            formalityVariants: {
              casual: "Can we walk through before I leave? Wanna fix stuff and get my deposit back.",
              standard: "Can we do a pre-move-out walk-through? I want to know what to fix before the final inspection.",
              formal: "I'd like to request a preliminary move-out inspection to identify any items requiring attention prior to the final assessment, so I can maximize my deposit return.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Smart idea. Let's schedule that for two weeks before your move-out date. That gives you time to fix anything I flag. I'll bring my checklist — we'll go room by room.",
            textZh: "聪明的做法。我们定在搬出日期前两周吧。这样你有时间修我标出来的问题。我会带上检查清单——一个房间一个房间过。",
            keyPhrases: [
              { en: "flag", zh: "标记/指出" },
              { en: "go room by room", zh: "一个房间一个房间检查" },
            ],
            alternativeExpressions: [
              { textEn: "Good thinking. Let's do it a couple weeks before you leave. I'll note what needs fixing and you'll have time to take care of it.", textZh: "想得好。搬走前两周来做。我记下需要修的，你有时间处理。", actionHint: "take care of it 处理好它", frequency: "common" },
            ],
            casualVersion: "Smart. Let's do it two weeks before you move. I'll bring my checklist and we'll go through everything. Gives you time to fix whatever I find.",
            formalityVariants: {
              casual: "Good idea. Two weeks before you leave. I'll go through my list and tell you what to fix.",
              standard: "Let's schedule it two weeks before your move-out. I'll bring a checklist and we'll go room by room.",
              formal: "That's a prudent approach. I'd suggest scheduling the preliminary inspection approximately two weeks prior to your move-out date. I'll conduct a comprehensive room-by-room assessment using our standard checklist.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. Also, I hung a few pictures and there are small nail holes in the walls. Do I need to patch those, or is that considered normal wear and tear?",
            textZh: "好的。另外，我挂了几幅画，墙上有些小钉子洞。我需要补好吗，还是算正常磨损？",
            casualVersion: "Cool. I put up some pictures — there are little nail holes. Do I need to patch those?",
            culturalNote: "在美国，对于小钉子洞是否算正常磨损，不同州和不同房东有不同标准。一般来说少量小钉子洞被认为是正常磨损，但较大的螺丝洞或大量洞通常需要修补。",
            commonMistake: {
              wrong: "There are small holes from nails in wall. I need to fix or it is normal?",
              correct: "There are small nail holes in the walls. Do I need to patch those, or is that normal wear and tear?",
              explanation: "'nail holes' 是钉子洞的标准说法。'patch' 比 'fix' 更准确地描述补洞。'normal wear and tear' 是租房中的关键法律术语。",
            },
            formalityVariants: {
              casual: "Got some nail holes from pictures. Need to fix 'em?",
              standard: "There are small nail holes from pictures. Should I patch them, or is that normal wear and tear?",
              formal: "I have several minor nail holes from hanging pictures. Would you consider these normal wear and tear, or should I arrange for patching prior to the inspection?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Small nail holes I consider normal wear and tear — don't worry about those. But if there are any bigger holes, like from anchors or shelving, those should be patched and touched up with matching paint.",
            textZh: "小钉子洞我算正常磨损——不用担心。但如果有更大的洞，比如膨胀螺丝或搁板留下的，那些需要补好并用匹配的油漆补色。",
            keyPhrases: [
              { en: "anchors", zh: "膨胀螺丝/锚栓" },
              { en: "touched up with matching paint", zh: "用匹配的油漆补色" },
            ],
            alternativeExpressions: [
              { textEn: "Little nail holes? No big deal. Anything bigger though — anchor holes, shelf brackets — patch those and dab some matching paint on them.", textZh: "小钉子洞？没事。但更大的——膨胀螺丝洞、搁板支架——补好然后涂点匹配的油漆。", actionHint: "dab some paint 涂一点油漆", frequency: "common" },
            ],
            casualVersion: "Tiny nail holes are fine — don't even worry about it. Bigger holes from anchors or shelves? Yeah, patch and paint those.",
            formalityVariants: {
              casual: "Little nail holes? Whatever. Big holes from shelves or anchors? Fix and paint those.",
              standard: "Small nail holes are normal wear and tear. Larger holes from anchors or shelving need patching and touch-up paint.",
              formal: "Minor nail holes fall within the scope of normal wear and tear and require no remediation. However, larger apertures resulting from wall anchors or shelving hardware should be properly patched and refinished with matching paint.",
            },
          },
          {
            speaker: "you",
            textEn: "One more question — I replaced a broken blind in the bedroom with a different style. Do you want me to put the original back, or is the new one okay?",
            textZh: "还有一个问题——卧室的百叶窗坏了，我换了一个不同样式的。你需要我换回原来的，还是新的可以？",
            casualVersion: "Oh, I swapped out a broken blind in the bedroom for a different one. Do you want the old style back?",
            culturalNote: "在美国租房中，未经许可的改动（即使是改善）可能被视为违约。最安全的做法是在改动前通知房东，改动后询问是否需要恢复原状。",
            commonMistake: {
              wrong: "I changed the window cover because it was broken. The new one is different. Is it okay?",
              correct: "I replaced a broken blind with a different style. Do you want me to put the original back?",
              explanation: "'blind' 是百叶窗的正确说法（不是 window cover）。'put the original back' 表达恢复原状。",
            },
            formalityVariants: {
              casual: "Swapped out a broken blind. Different style though. Want me to change it back?",
              standard: "I replaced a broken bedroom blind with a different style. Should I put the original back?",
              formal: "I took the liberty of replacing a damaged blind in the bedroom with an alternative style. Would you prefer that I restore the original fixture?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "If the new one works fine, I'll keep it. Actually, that saves me money. Just leave the old one in the closet so I have it if I need it later. Thanks for taking care of that.",
            textZh: "如果新的用着没问题，我就留着。其实这帮我省钱了。把旧的放在储物柜里就行，以后需要的话还有。谢谢你处理了这个。",
            keyPhrases: [
              { en: "saves me money", zh: "帮我省钱" },
              { en: "taking care of that", zh: "处理了那个事" },
            ],
            alternativeExpressions: [
              { textEn: "New one's fine — less work for me. Just toss the old one in the closet. Appreciate you fixing it.", textZh: "新的可以——我少干活。旧的扔储物柜里。感谢你修了它。", actionHint: "less work for me 我少干活/我轻松些", frequency: "common" },
            ],
            casualVersion: "If it works, keep it! Saves me the trouble. Just stick the old one in the closet. Thanks for handling that yourself.",
            formalityVariants: {
              casual: "New one works? Cool, keep it. Old one in the closet. Thanks for fixing it.",
              standard: "If the new one works, I'll keep it. Leave the old one in the closet. Thanks for taking care of it.",
              formal: "If the replacement is functional, I'm happy to retain it. Please store the original in the closet for future reference. I appreciate your initiative in addressing the issue.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 31. 和物业经理沟通 ====================
  {
    id: "housing-property-manager",
    category: "housing",
    titleZh: "和物业经理沟通",
    titleEn: "Communicating with Property Manager",
    description: "就日常维护、公共设施和社区规定与物业经理沟通",
    otherRole: "物业经理",
    otherRoleIcon: "🏢",
    flows: [
      {
        id: "basic",
        titleZh: "基本物业沟通",
        titleEn: "Basic Property Communication",
        description: "提交维修请求和了解社区设施",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just moved into unit 205. I wanted to introduce myself and ask about submitting maintenance requests.",
            textZh: "你好，我刚搬进205。想做个自我介绍，顺便问一下怎么提交维修请求。",
            casualVersion: "Hey, I'm new — just moved into 205. How do I put in a maintenance request?",
            culturalNote: "在美国的公寓社区，物业经理（property manager）是你的主要联系人。搬入后主动认识物业经理是好习惯，有问题时沟通会更顺畅。",
            commonMistake: {
              wrong: "I am new resident in 205. How to report problem of apartment?",
              correct: "I just moved into unit 205. I wanted to ask about submitting maintenance requests.",
              explanation: "'maintenance request' 是维修请求的标准说法，比 'report problem' 更准确。'unit 205' 是指公寓号。",
            },
            formalityVariants: {
              casual: "Hey, new in 205. How do I get stuff fixed around here?",
              standard: "I just moved into unit 205. How do I submit a maintenance request?",
              formal: "Good morning, I'm a new resident in unit 205. I'd like to familiarize myself with the process for submitting maintenance requests.",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Welcome! Great to meet you. The easiest way is through our resident portal — I'll give you the login info. For emergencies like a burst pipe or no heat, call the office directly. We have a twenty-four-hour emergency line.",
            textZh: "欢迎！很高兴认识你。最简单的方式是通过我们的住户门户网站——我给你登录信息。紧急情况比如水管爆裂或没暖气，直接打办公室电话。我们有24小时紧急热线。",
            keyPhrases: [
              { en: "resident portal", zh: "住户门户网站" },
              { en: "emergency line", zh: "紧急热线" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, welcome! For regular stuff, use the online portal — I'll set you up. Emergencies? Call us any time, we've got a 24-hour line.", textZh: "嗨，欢迎！日常事务用在线门户——我帮你设置。紧急情况？随时打电话，我们有24小时热线。", actionHint: "set you up 帮你设置/注册", frequency: "common" },
            ],
            casualVersion: "Hey, welcome! Just use the resident portal for maintenance — I'll get you logged in. For big emergencies like floods or no heat, call us 24/7.",
            formalityVariants: {
              casual: "Welcome! Portal for regular stuff, phone for emergencies. I'll get you set up.",
              standard: "Welcome! Use the resident portal for requests. For emergencies, call our twenty-four-hour line directly.",
              formal: "Welcome to the community. Routine maintenance requests can be submitted through our resident portal, for which I'll provide your credentials. For urgent matters such as plumbing failures or heating outages, please contact our office directly via our twenty-four-hour emergency line.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. Speaking of which, the kitchen faucet has low water pressure. It's not urgent, but could someone take a look when they get a chance?",
            textZh: "好的。说到这个，厨房水龙头水压很低。不紧急，但有空的时候能不能让人看看？",
            casualVersion: "Actually, the kitchen faucet has really low pressure. Not urgent but can someone check it out?",
            culturalNote: "在美国，区分紧急和非紧急维修请求很重要。紧急情况（水管爆裂、没暖气、锁被破坏）可以打紧急热线，非紧急的走正常流程，通常1-3个工作日响应。",
            commonMistake: {
              wrong: "Kitchen water is small pressure. Can you send someone to check?",
              correct: "The kitchen faucet has low water pressure. Could someone take a look when they get a chance?",
              explanation: "'low water pressure' 是低水压的正确说法。'when they get a chance' 表示不紧急、方便时处理。",
            },
            formalityVariants: {
              casual: "Kitchen faucet's barely running. No rush, but can someone look at it?",
              standard: "The kitchen faucet has low water pressure. Not urgent, but could someone check it out?",
              formal: "I've noticed the kitchen faucet is experiencing reduced water pressure. While not urgent, I'd appreciate having it inspected at your earliest convenience.",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Sure, go ahead and submit that through the portal and our maintenance team will schedule it. Usually takes one to two business days for non-urgent requests. They'll text you before they come in.",
            textZh: "没问题，在门户上提交一下，我们维修团队会安排。非紧急请求通常1-2个工作日处理。他们来之前会发短信通知你。",
            keyPhrases: [
              { en: "business days", zh: "工作日" },
              { en: "text you before they come in", zh: "来之前发短信通知你" },
            ],
            alternativeExpressions: [
              { textEn: "Put it in the portal and we'll get maintenance out there in a day or two. They'll give you a heads-up before they enter.", textZh: "在门户上提交，一两天内维修就过去。进门前他们会提前通知你。", actionHint: "give you a heads-up 提前通知你", frequency: "common" },
            ],
            casualVersion: "Submit it on the portal. Maintenance usually gets to it in a day or two for non-urgent stuff. They'll text you before showing up.",
            formalityVariants: {
              casual: "Put it in the portal. Day or two for non-urgent stuff. They'll text before coming.",
              standard: "Submit it through the portal. Non-urgent requests take one to two business days. They'll notify you before entering.",
              formal: "Please submit the request through the resident portal. Our maintenance team typically addresses non-urgent requests within one to two business days. You'll receive advance notification via text message prior to any entry.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. One more thing — what are the gym hours, and do I need a key card to get in?",
            textZh: "了解了。还有一个问题——健身房开放时间是什么，需要门禁卡吗？",
            casualVersion: "Oh, what about the gym? When's it open and do I need a card?",
            culturalNote: "在美国的公寓社区，健身房、泳池、洗衣房等公共设施通常对住户免费开放，但可能需要门禁卡（key card/fob）。使用规则通常写在社区手册中。",
            commonMistake: {
              wrong: "What time gym open? I need card to enter?",
              correct: "What are the gym hours, and do I need a key card to get in?",
              explanation: "'gym hours' 是健身房营业时间的简洁说法。'key card' 比 'card' 更具体。",
            },
            formalityVariants: {
              casual: "When's the gym open? Need a card?",
              standard: "What are the gym hours? Do I need a key card?",
              formal: "Could you inform me of the fitness center's operating hours and whether key card access is required?",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "The gym is open from five a.m. to eleven p.m. Your apartment key fob works for the gym too — just tap it on the reader by the door. There's also a pool that's open Memorial Day through Labor Day, same key fob.",
            textZh: "健身房早上5点到晚上11点开放。你的公寓钥匙卡也能开健身房——在门边的读卡器上刷一下就行。还有一个泳池，阵亡将士纪念日到劳动节期间开放，同一张卡。",
            keyPhrases: [
              { en: "key fob", zh: "钥匙卡/门禁卡" },
              { en: "Memorial Day through Labor Day", zh: "阵亡将士纪念日到劳动节（夏季）" },
            ],
            alternativeExpressions: [
              { textEn: "Gym's open five a.m. to eleven p.m. — use your key fob. We've also got a pool, open from Memorial Day to Labor Day. Same fob gets you in.", textZh: "健身房早5点到晚11点——用你的钥匙卡。还有泳池，阵亡将士纪念日到劳动节开放。同一张卡。", actionHint: "gets you in 让你进去", frequency: "common" },
            ],
            casualVersion: "Gym's open 5 a.m. to 11 p.m. Just use your apartment fob. Oh, and there's a pool too — open Memorial Day to Labor Day, same fob.",
            formalityVariants: {
              casual: "Gym: 5 a.m. to 11 p.m. Use your fob. Pool opens Memorial Day through Labor Day.",
              standard: "The gym is open five a.m. to eleven p.m. Your key fob works for the gym and the pool, which is open Memorial Day through Labor Day.",
              formal: "The fitness center operates from five a.m. to eleven p.m. daily. Your residential key fob provides access. Additionally, the pool facility is available seasonally from Memorial Day through Labor Day, accessible with the same credential.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "社区问题反馈",
        titleEn: "Community Issues Feedback",
        description: "就社区公共区域问题和政策疑问与物业沟通",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I wanted to bring something up. The hallway lights on the second floor have been flickering for about two weeks. A couple of other residents mentioned it too.",
            textZh: "我想反映一个问题。二楼走廊的灯闪了大概两周了。其他几个住户也提到过。",
            casualVersion: "Hey, the hallway lights on the second floor have been flickering for like two weeks. Other people noticed too.",
            culturalNote: "在美国，反映公共区域问题时提到其他住户也有同样感受，可以增加问题的优先级。物业经理更重视影响多人的问题。",
            commonMistake: {
              wrong: "The light in second floor corridor is blinking two weeks. Other people also complained.",
              correct: "The hallway lights on the second floor have been flickering for about two weeks. Other residents mentioned it too.",
              explanation: "'flickering' 比 'blinking' 更准确描述灯光闪烁。'mentioned it' 比 'complained' 语气更中性。",
            },
            formalityVariants: {
              casual: "Second floor hallway lights have been flickering for weeks. Others noticed too.",
              standard: "The hallway lights on the second floor have been flickering for two weeks. Other residents mentioned it as well.",
              formal: "I'd like to bring to your attention that the corridor lighting on the second floor has been intermittently flickering for approximately two weeks. Several other residents have expressed similar concerns.",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "Thanks for reporting that. We actually have an electrician scheduled for next week to look at a few things in the building. I'll add the second floor hallway to his work order. In the meantime, it's safe — it's just a ballast issue, not a wiring problem.",
            textZh: "谢谢反映。其实下周我们已经安排了电工来检查楼里几个问题。我会把二楼走廊加到他的工单上。目前是安全的——只是镇流器的问题，不是线路问题。",
            keyPhrases: [
              { en: "work order", zh: "工单/维修单" },
              { en: "ballast issue", zh: "镇流器问题" },
            ],
            alternativeExpressions: [
              { textEn: "Appreciate the heads-up. We've got an electrician coming next week — I'll add that to his list. Don't worry, it's just the ballast, not a wiring issue. Totally safe.", textZh: "感谢通知。下周有电工来——我加到他的清单上。别担心，是镇流器问题不是线路问题。完全安全。", actionHint: "add that to his list 加到他的任务清单上", frequency: "common" },
            ],
            casualVersion: "Oh yeah, we know about that. Electrician's coming next week and I'll add it to the list. Don't worry though — it's just a ballast thing, totally safe.",
            formalityVariants: {
              casual: "Electrician's coming next week. I'll add it. It's just the ballast — safe.",
              standard: "Thanks for reporting that. An electrician is coming next week and I'll add this to his work order. It's a ballast issue, not a wiring problem.",
              formal: "Thank you for bringing this to our attention. We have an electrician scheduled for next week, and I'll ensure the second floor hallway lighting is included in the work order. The issue appears to be ballast-related rather than a wiring concern, so there's no safety risk.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to hear. Also, I noticed the recycling dumpster has been overflowing by Wednesday every week. Is there any way to get more frequent pickups?",
            textZh: "那就好。另外，我注意到回收垃圾箱每周三就满了。有办法增加清运频率吗？",
            casualVersion: "Also, the recycling dumpster is overflowing by mid-week every week. Can we get more pickups?",
            culturalNote: "在美国，垃圾和回收的清运通常由市政或私人公司按固定时间表执行。如果需要增加频率，物业需要和清运公司重新谈合同，费用可能会转嫁到住户身上。",
            commonMistake: {
              wrong: "The recycle garbage box is full every Wednesday. Can we clean more often?",
              correct: "The recycling dumpster has been overflowing by Wednesday every week. Is there any way to get more frequent pickups?",
              explanation: "'recycling dumpster' 是回收垃圾箱的正确说法。'pickups' 指清运/收垃圾，不是 'clean'。",
            },
            formalityVariants: {
              casual: "Recycling's been overflowing every week by Wednesday. More pickups possible?",
              standard: "The recycling dumpster overflows by Wednesday each week. Can we get more frequent pickups?",
              formal: "I've observed that the recycling receptacle consistently reaches capacity by mid-week. Would it be feasible to arrange more frequent collection service?",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "You're not the first person to mention that. I've already reached out to the waste management company about adding a second pickup. It might bump the trash fee up by a few dollars, but I think most residents would prefer that to an overflowing dumpster.",
            textZh: "你不是第一个提这个的。我已经联系了垃圾清运公司，要求增加一次清运。垃圾费可能会涨几美元，但我觉得大多数住户宁愿多付点也不想看到溢出的垃圾箱。",
            keyPhrases: [
              { en: "waste management company", zh: "垃圾清运公司" },
              { en: "trash fee", zh: "垃圾费" },
            ],
            alternativeExpressions: [
              { textEn: "Others have said the same thing. I'm already talking to the waste company about an extra pickup each week. It might cost a few bucks more but it's worth it.", textZh: "其他人也这么说了。我已经在和清运公司谈每周多加一次。可能多花几块钱但值得。", actionHint: "worth it 值得的", frequency: "common" },
            ],
            casualVersion: "Yeah, I've heard that from a few people. I'm talking to the waste company about adding another pickup. Might be a couple extra bucks on your trash bill but way better than a mess.",
            formalityVariants: {
              casual: "Others said the same. Working on getting another pickup. Might cost a few bucks more.",
              standard: "I've heard this from others. I'm working with the waste company on adding a second pickup. The trash fee might go up slightly.",
              formal: "Several residents have raised this concern. I've already initiated discussions with our waste management provider regarding an additional weekly collection. This may result in a modest increase to the waste services fee, though I believe residents will find it preferable to the current overflow situation.",
            },
          },
          {
            speaker: "you",
            textEn: "I'd definitely prefer that. One last thing — is there a community bulletin board or newsletter? I'd like to stay updated on building news and events.",
            textZh: "我肯定更愿意那样。最后一件事——有社区公告栏或通讯吗？我想了解楼里的新闻和活动。",
            casualVersion: "Yeah, that's way better. Oh, is there like a newsletter or bulletin board? Wanna stay in the loop.",
            culturalNote: "在美国的公寓社区，信息传播方式正在从传统公告栏转向电子通讯和社区App（如Buildium、AppFolio）。邮箱里的纸质通知仍然是重要的官方渠道。",
            commonMistake: {
              wrong: "Is there notice board or news letter for building? I want to know new things.",
              correct: "Is there a community bulletin board or newsletter? I'd like to stay updated on building news.",
              explanation: "'bulletin board' 是公告栏的美式说法。'stay updated on' 比 'know new things' 更地道。",
            },
            formalityVariants: {
              casual: "Any kind of newsletter or bulletin board? Wanna know what's going on.",
              standard: "Is there a community bulletin board or newsletter? I'd like to stay updated.",
              formal: "Does the community maintain a bulletin board or publish a newsletter? I'm keen to stay informed about building developments and community events.",
            },
          },
          {
            speaker: "them",
            role: "物业经理",
            textEn: "We send out a monthly email newsletter — make sure we have your email on file. There's also a physical bulletin board in the lobby near the mailboxes. And we just started a community Facebook group where residents post about events, lost and found, stuff like that.",
            textZh: "我们每月发一份电子通讯——确保我们有你的邮箱。大厅邮箱附近还有一块实体公告栏。我们刚建了一个社区Facebook群，住户在上面发活动、失物招领之类的。",
            keyPhrases: [
              { en: "on file", zh: "存档/记录在案" },
              { en: "lost and found", zh: "失物招领" },
            ],
            alternativeExpressions: [
              { textEn: "Monthly newsletter goes out by email — make sure we've got your address. Check the bulletin board in the lobby too. Oh, and there's a community Facebook group now.", textZh: "每月通讯通过邮件发送——确保我们有你的地址。也看看大厅的公告栏。对了，现在还有个社区Facebook群。", actionHint: "goes out by email 通过邮件发送", frequency: "common" },
            ],
            casualVersion: "We do a monthly email — make sure we have your email. There's a board in the lobby by the mailboxes. And check out our Facebook group — people post about events and stuff.",
            formalityVariants: {
              casual: "Monthly email, lobby bulletin board, and a Facebook group. Make sure I've got your email.",
              standard: "We send a monthly newsletter by email. There's also a lobby bulletin board and a community Facebook group.",
              formal: "We distribute a monthly electronic newsletter — please ensure your email address is current in our records. Additionally, there's a physical bulletin board in the lobby adjacent to the mailboxes, and we've recently established a community Facebook group for resident communication.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 32. 租金涨价谈判 ====================
  {
    id: "housing-rent-increase-negotiate",
    category: "housing",
    titleZh: "租金涨价谈判",
    titleEn: "Rent Increase Negotiation",
    description: "收到涨租通知后与房东谈判争取更好条件",
    otherRole: "房东",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "basic",
        titleZh: "基本涨租应对",
        titleEn: "Basic Rent Increase Response",
        description: "收到涨租通知后了解情况并表达关切",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I received the notice about the rent increase. Three hundred dollars more a month is a lot. Can you help me understand why it's going up that much?",
            textZh: "你好，我收到了涨租通知。一个月多300美元挺多的。你能帮我理解为什么涨这么多吗？",
            casualVersion: "Hey, got the rent increase notice. 300 bucks more a month? That's a big jump. What's the deal?",
            culturalNote: "在美国，房东通常需要提前30-60天书面通知涨租（各州不同）。租客有权询问原因并尝试谈判，但无租金管控的地区房东可以自行定价。",
            commonMistake: {
              wrong: "The rent increase is too much. Why you raise 300 dollars?",
              correct: "I received the notice about the rent increase. Can you help me understand why it's going up that much?",
              explanation: "'Can you help me understand' 比 'Why you raise' 更礼貌，将对话定位为寻求理解而非对抗。",
            },
            formalityVariants: {
              casual: "300 more a month? That's steep. What's driving that?",
              standard: "I got the rent increase notice. Three hundred more is quite a bit. Can you explain the increase?",
              formal: "I've received the rent increase notification. A three-hundred-dollar monthly adjustment is significant. Could you provide some context for the magnitude of this increase?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "I understand it's a big number. Property taxes went up fifteen percent this year, and my insurance doubled after the storms last fall. I tried to keep the increase as low as I could.",
            textZh: "我理解这个数字不小。今年房产税涨了15%，去年秋天暴风雨后我的保险费翻倍了。我尽量把涨幅控制得低一些了。",
            keyPhrases: [
              { en: "property taxes", zh: "房产税" },
              { en: "insurance doubled", zh: "保险费翻倍" },
            ],
            alternativeExpressions: [
              { textEn: "I know it's a lot. My costs went up a ton — property taxes, insurance, you name it. I actually absorbed some of it myself.", textZh: "我知道不少。我的成本涨了很多——房产税、保险，各种。其实我自己也承担了一部分。", actionHint: "absorbed some of it 自己承担了一部分", frequency: "common" },
            ],
            casualVersion: "Yeah, I know it's a lot. Property taxes jumped 15% and insurance went through the roof after last year's storms. Trust me, I wish I didn't have to raise it.",
            formalityVariants: {
              casual: "I know, it's a lot. Taxes and insurance killed me this year. I'm passing along as little as I can.",
              standard: "Property taxes went up fifteen percent and insurance doubled after last fall's storms. I tried to keep the increase minimal.",
              formal: "I appreciate your concern. The increase reflects substantial rises in operating costs — property taxes increased by fifteen percent, and insurance premiums doubled following last autumn's severe weather events. I've endeavored to keep the pass-through as modest as possible.",
            },
          },
          {
            speaker: "you",
            textEn: "I see. I've been a reliable tenant for two years — always paid on time, never had any complaints. Is there any way you could come down a little?",
            textZh: "明白了。我已经是两年的可靠租客了——从来按时付款，也没有任何投诉。能不能少涨一点？",
            casualVersion: "I get it, but I've been here two years, always paid on time, no issues. Can you work with me on this?",
            culturalNote: "在美国，强调自己是好租客是谈判的有效策略。房东空置一个月的损失通常远超少涨的租金，所以留住好租客对房东也有利。",
            commonMistake: {
              wrong: "I am good tenant for two years. Can you reduce the increase?",
              correct: "I've been a reliable tenant for two years — always paid on time. Is there any way you could come down a little?",
              explanation: "'reliable tenant' 比 'good tenant' 更专业。'come down a little' 是口语中要求降低价格的常用表达。",
            },
            formalityVariants: {
              casual: "I've been solid for two years. Always on time. Can you give me a break?",
              standard: "I've been a reliable tenant for two years. Is there any way you could come down?",
              formal: "I'd like to point out that I've maintained an exemplary tenancy for two years, with consistent on-time payments and zero complaints. I'm hoping we can find a more moderate adjustment.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "You have been a great tenant, and I don't want to lose you. How about two hundred instead of three? That's the best I can do and still cover my costs.",
            textZh: "你确实是个很好的租客，我不想失去你。涨200而不是300怎么样？这是我能做到的最好的了，还要覆盖成本。",
            keyPhrases: [
              { en: "don't want to lose you", zh: "不想失去你" },
              { en: "cover my costs", zh: "覆盖我的成本" },
            ],
            alternativeExpressions: [
              { textEn: "Look, you're a solid tenant and turnover costs me money. Let's do two hundred — I can't go lower than that and still break even.", textZh: "你是好租客，换租客也要花钱。涨200吧——再低我就入不敷出了。", actionHint: "break even 收支平衡/不亏不赚", frequency: "common" },
            ],
            casualVersion: "You've been great, honestly. I'd rather keep you. How about 200 more instead of 300? That's my bottom line.",
            formalityVariants: {
              casual: "You're a good tenant, I don't wanna lose you. 200 instead of 300? Best I can do.",
              standard: "You've been a great tenant. How about two hundred instead of three? That's the best I can do.",
              formal: "Your tenancy has been exemplary, and I'd prefer to maintain our arrangement. I'm prepared to reduce the increase to two hundred dollars, which represents the minimum necessary to offset my rising costs.",
            },
          },
          {
            speaker: "you",
            textEn: "I appreciate that. Two hundred is more manageable. Could we lock that in for two years so I don't have to worry about another increase soon?",
            textZh: "感谢。200更容易接受。能不能锁定两年，这样我不用担心很快又涨？",
            casualVersion: "That's better, thanks. Any chance we lock in that rate for two years?",
            culturalNote: "要求签长期租约锁定租金是美国租房谈判的常用策略。房东喜欢稳定的长期租客，租客得到租金保障。这是双赢的谈判点。",
            commonMistake: {
              wrong: "200 is okay. Can we fix this price for two years?",
              correct: "Could we lock that in for two years so I don't have to worry about another increase?",
              explanation: "'lock in' 是锁定价格/条件的地道表达，比 'fix the price' 更自然。",
            },
            formalityVariants: {
              casual: "200 works. Can we lock it in for two years?",
              standard: "Two hundred is manageable. Could we lock that in for two years?",
              formal: "That's a more reasonable figure, and I appreciate the concession. Would you consider fixing this rate for a two-year term to provide stability for both of us?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "I can do eighteen months at two hundred more. Two years is too long for me to commit without knowing where costs will be. Deal?",
            textZh: "涨200签18个月我可以接受。两年太长了，我不知道成本会怎么变。成交？",
            keyPhrases: [
              { en: "commit", zh: "承诺/锁定" },
              { en: "deal", zh: "成交/谈妥" },
            ],
            alternativeExpressions: [
              { textEn: "Eighteen months at the new rate — that's my offer. I can't lock it for two full years with costs being so unpredictable. Sound fair?", textZh: "新价格签18个月——这是我的条件。成本变化太难预测，两年锁不了。觉得合理吗？", actionHint: "sound fair 听起来合理吗", frequency: "common" },
            ],
            casualVersion: "How about 18 months at 200 more? Two years is too risky for me with prices changing so fast. We got a deal?",
            formalityVariants: {
              casual: "18 months at 200 more. Can't do two years. Deal?",
              standard: "I can do eighteen months at two hundred more. Two years is too long to commit. Deal?",
              formal: "I'm amenable to an eighteen-month term at the two-hundred-dollar increase. A two-year commitment exceeds what I can reasonably offer given the current cost volatility. Shall we proceed on that basis?",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "涨租市场研究谈判",
        titleEn: "Market Research Negotiation",
        description: "用市场数据和竞争对手价格来谈判涨租",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Before we settle on a number, I did some research. Comparable apartments in this area are renting for about a hundred less than what you're proposing. Here are a few listings I found.",
            textZh: "在我们定数字之前，我做了一些调研。这个区域类似的公寓租金比你提议的低大约100美元。这是我找到的几个房源。",
            casualVersion: "Hold on — I looked around and similar places nearby are going for about a hundred less than what you're asking. Check these listings.",
            culturalNote: "在美国，用市场数据谈判租金是被完全接受的做法。Zillow、Apartments.com、Craigslist 等网站上的类似房源价格是有力的谈判证据。",
            commonMistake: {
              wrong: "I searched internet. Same apartments around here are cheaper than your price.",
              correct: "Comparable apartments in this area are renting for about a hundred less than what you're proposing.",
              explanation: "'comparable apartments' 是房地产中的标准表达。'what you're proposing' 比 'your price' 更得体。",
            },
            formalityVariants: {
              casual: "I checked around. Similar places are going for way less. Look at these.",
              standard: "I've researched comparable apartments in the area. They're about a hundred less than your proposed rate.",
              formal: "I've conducted a comparative market analysis and found that similar units in this area are currently listed at rates approximately one hundred dollars below your proposed increase. I've compiled several listings for your reference.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "I appreciate you doing that research. But keep in mind, those listings might not include all the amenities we offer — like in-unit laundry, covered parking, and the renovated kitchen. Those add real value.",
            textZh: "感谢你做了调研。但请记住，那些房源可能不包括我们提供的所有设施——比如室内洗衣机、有顶停车位和翻新的厨房。这些都有实际价值。",
            keyPhrases: [
              { en: "amenities", zh: "设施/配套" },
              { en: "add real value", zh: "增加实际价值" },
            ],
            alternativeExpressions: [
              { textEn: "Good homework, but compare apples to apples. Those places probably don't have in-unit laundry or covered parking like yours does. That stuff matters.", textZh: "调研做得好，但得比同类。那些地方可能没有你这样的室内洗衣机和有顶停车位。这些很重要。", actionHint: "compare apples to apples 同类相比/公平比较", frequency: "common" },
            ],
            casualVersion: "Fair enough, but those places probably don't have laundry in the unit, covered parking, or a new kitchen like yours. That stuff adds up.",
            formalityVariants: {
              casual: "Good research. But those places got laundry, parking, and a new kitchen like yours? Doubt it.",
              standard: "Thanks for the research. But those listings may not include our amenities — in-unit laundry, covered parking, renovated kitchen.",
              formal: "I appreciate the thorough research. However, I'd note that those comparable listings may not account for the premium amenities this unit offers, including in-unit laundry facilities, covered parking, and the recently renovated kitchen.",
            },
          },
          {
            speaker: "you",
            textEn: "Fair point about the amenities. But I also want to mention the ongoing issues — the elevator is down at least once a month, and the hot water has been inconsistent. Those should factor in too.",
            textZh: "设施方面你说的有道理。但我也想提一下存在的问题——电梯每个月至少坏一次，热水也不稳定。这些也应该考虑进去。",
            casualVersion: "True about the amenities, but the elevator breaks down every month and the hot water's been spotty. That should count for something.",
            culturalNote: "在美国租房谈判中，提出现有维护问题是合理的议价策略。持续的维护问题说明你付的租金没有获得完整的价值。",
            commonMistake: {
              wrong: "But elevator always broken and hot water not stable. You should consider this.",
              correct: "The elevator is down at least once a month and hot water has been inconsistent. Those should factor in.",
              explanation: "'is down' 是设备故障的标准说法。'factor in' 表示纳入考虑。'inconsistent' 比 'not stable' 更精准。",
            },
            formalityVariants: {
              casual: "Okay but the elevator's always broken and hot water sucks. That matters too.",
              standard: "Fair point, but the elevator outages and inconsistent hot water should factor in as well.",
              formal: "While I acknowledge the value of those amenities, I'd respectfully note that the recurring elevator outages and inconsistent hot water supply diminish the overall living experience and should be factored into any rate adjustment.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "You're right, and we're actually replacing the boiler next month — that should fix the hot water. The elevator company is under contract to improve response times. I hear you. How about we split the difference at one fifty more?",
            textZh: "你说得对，我们下个月其实要换锅炉——应该能解决热水问题。电梯公司有合同要改善响应时间。我听到你了。我们折中一下涨150怎么样？",
            keyPhrases: [
              { en: "replacing the boiler", zh: "更换锅炉" },
              { en: "split the difference", zh: "折中/各退一步" },
            ],
            alternativeExpressions: [
              { textEn: "Valid points. The boiler's getting replaced next month and the elevator company's stepping it up. Let's meet in the middle — one fifty more?", textZh: "说得有理。锅炉下月换新，电梯公司也在改进。折中一下——涨150？", actionHint: "stepping it up 改进/加把劲", frequency: "common" },
            ],
            casualVersion: "Yeah, you're right about those. New boiler next month, elevator company's on it. How about we settle at 150 more? Middle ground.",
            formalityVariants: {
              casual: "Fair enough. Boiler's getting replaced, elevator's being fixed. 150 more — deal?",
              standard: "You're right. We're replacing the boiler next month and addressing the elevator. How about one fifty more?",
              formal: "Those are valid concerns. A new boiler is scheduled for installation next month, and we've engaged the elevator contractor to improve their maintenance response. As a compromise, I'd propose an increase of one hundred fifty dollars.",
            },
          },
          {
            speaker: "you",
            textEn: "One fifty works if we can also agree that if the hot water isn't fixed within sixty days, I get a temporary rent credit until it's resolved.",
            textZh: "150可以，但如果60天内热水问题没解决，我要在解决前获得临时租金减免。",
            casualVersion: "150 is fine but I want a rent credit if the hot water's still messed up after 60 days.",
            culturalNote: "在美国，'rent credit' 或 'rent abatement' 是因为服务不达标而给予的租金减免。在一些州，持续的维修不达标可以作为要求减租的法律依据。",
            commonMistake: {
              wrong: "150 is okay but if hot water not fixed in 60 days, I want pay less rent.",
              correct: "If the hot water isn't fixed within sixty days, I'd want a temporary rent credit until it's resolved.",
              explanation: "'rent credit' 是租金减免的正式说法。'until it's resolved' 设定了明确的条件和期限。",
            },
            formalityVariants: {
              casual: "150's cool. But if hot water's still broken in 60 days, I want a rent break.",
              standard: "One fifty works if we agree on a rent credit if the hot water isn't fixed within sixty days.",
              formal: "I can accept a one-hundred-fifty-dollar increase, contingent upon an agreement that a temporary rent credit will be applied should the hot water issue remain unresolved beyond sixty days.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "That's fair. If the boiler replacement doesn't fix the hot water within sixty days, I'll give you a fifty-dollar monthly credit until it's sorted out. I'll put all of this in the new lease. Sound good?",
            textZh: "这很合理。如果换锅炉60天内没解决热水问题，我给你每月50美元的租金减免直到解决为止。这些我都写进新租约。可以吗？",
            keyPhrases: [
              { en: "monthly credit", zh: "每月减免" },
              { en: "sorted out", zh: "解决/理顺" },
            ],
            alternativeExpressions: [
              { textEn: "Deal. Sixty days, and if hot water's still wonky, fifty bucks off each month until it's fixed. I'll add it to the lease. We good?", textZh: "成交。60天内，热水还有问题就每月减50直到修好。写进租约里。没问题吧？", actionHint: "wonky 不正常/有毛病", frequency: "common" },
            ],
            casualVersion: "Fair enough. If the hot water's not fixed in 60 days, 50 bucks off per month until it is. I'll add it to the lease. We good?",
            formalityVariants: {
              casual: "Deal. 60 days, no hot water fix? 50 off a month. Done. It'll be in the lease.",
              standard: "If the hot water isn't fixed in sixty days, you'll get a fifty-dollar monthly credit. I'll include everything in the lease.",
              formal: "That's a reasonable request. I'll include a provision in the lease granting a fifty-dollar monthly credit should the hot water issue persist beyond the sixty-day remediation period. I'll incorporate all agreed-upon terms into the new lease agreement. Shall we proceed?",
            },
          },
        ],
      },
    ],
  },
  // ==================== 33. 室友协议 ====================
  {
    id: "housing-roommate-agreement",
    category: "housing",
    titleZh: "室友协议",
    titleEn: "Roommate Agreement",
    description: "与室友讨论并制定合住规则和费用分摊",
    otherRole: "室友",
    otherRoleIcon: "🤝",
    flows: [
      {
        id: "basic",
        titleZh: "基本室友规则",
        titleEn: "Basic Roommate Rules",
        description: "和新室友讨论基本的合住规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, since we're going to be roommates, I think we should talk about some ground rules. Nothing crazy — just the basics so we're on the same page.",
            textZh: "嗨，既然我们要当室友了，我觉得我们应该谈一些基本规则。没什么夸张的——就是基本的，这样我们达成共识。",
            casualVersion: "Hey, wanna talk about some house rules? Nothing intense — just so we know where we stand.",
            culturalNote: "在美国，室友之间制定书面协议（roommate agreement）是很常见的做法，尤其在大学毕业后的合租中。提前把规则说清楚能避免大部分日后的矛盾。",
            commonMistake: {
              wrong: "We need to make rules for living together. Let me tell you my requirements.",
              correct: "I think we should talk about some ground rules. Nothing crazy — just the basics so we're on the same page.",
              explanation: "'ground rules' 是基本规则的地道说法。'on the same page' 表示达成共识。语气应该是协商而非单方面要求。",
            },
            formalityVariants: {
              casual: "So, house rules? Let's figure out the basics.",
              standard: "We should discuss some ground rules — just the basics so we're on the same page.",
              formal: "I'd like to propose that we establish some shared household guidelines to ensure a harmonious living arrangement.",
            },
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "Totally agree. I've had roommates before where we didn't set expectations and it got messy. What's on your mind?",
            textZh: "完全同意。我以前有过室友没有提前约定，结果搞得很乱。你有什么想法？",
            keyPhrases: [
              { en: "set expectations", zh: "设定期望/提前约定" },
              { en: "got messy", zh: "搞得很乱" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, for sure. Last time I didn't do this with a roommate and it was a disaster. What are you thinking?", textZh: "是的，必须的。上次没和室友做这个，简直是灾难。你在想什么？", actionHint: "a disaster 灾难", frequency: "common" },
            ],
            casualVersion: "Yeah, been there before without rules — total mess. What's on your list?",
            formalityVariants: {
              casual: "Yeah, good call. Did this before without rules. Bad idea. What're you thinking?",
              standard: "Totally agree. I've had bad experiences without set expectations. What did you have in mind?",
              formal: "I completely agree. In my experience, establishing clear expectations from the outset is essential. What topics would you like to address?",
            },
          },
          {
            speaker: "you",
            textEn: "First, cleaning. I was thinking we could split chores on a weekly rotation — kitchen, bathroom, common areas. Does that work for you?",
            textZh: "首先是打扫卫生。我在想我们可以每周轮流分担家务——厨房、浴室、公共区域。你觉得可以吗？",
            casualVersion: "Cleaning — wanna do a weekly rotation? Kitchen, bathroom, common areas?",
            culturalNote: "在美国的合租中，清洁分工是最容易引发矛盾的问题。书面的轮换表比口头约定更有效。很多室友还会使用共享日历或App来跟踪。",
            commonMistake: {
              wrong: "I think we should divide cleaning work. Each person clean every week.",
              correct: "I was thinking we could split chores on a weekly rotation. Does that work for you?",
              explanation: "'split chores' 是分担家务的常用说法。'weekly rotation' 表示每周轮换。'Does that work for you' 征求对方意见。",
            },
            formalityVariants: {
              casual: "Wanna just rotate cleaning? Kitchen, bathroom, living room — switch every week?",
              standard: "How about a weekly cleaning rotation for kitchen, bathroom, and common areas?",
              formal: "I'd suggest implementing a weekly chore rotation system covering the kitchen, bathroom, and shared living spaces. Would that arrangement be acceptable?",
            },
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "Works for me. I'm good with a rotation as long as we're both doing our part. Maybe we put a chore chart on the fridge so there's no confusion?",
            textZh: "可以。只要我们都做好自己的份就行。要不我们在冰箱上贴个家务表，这样不会搞混？",
            keyPhrases: [
              { en: "doing our part", zh: "做好自己的份" },
              { en: "chore chart", zh: "家务表" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, rotation's fair. Let's make a chart or something so nobody forgets. Put it on the fridge.", textZh: "轮换挺公平的。做个表什么的免得忘。贴冰箱上。", actionHint: "nobody forgets 谁都不会忘", frequency: "common" },
            ],
            casualVersion: "Rotation's fair. Wanna make a chart and stick it on the fridge?",
            formalityVariants: {
              casual: "Rotation works. Let's make a chart so nobody forgets.",
              standard: "A rotation works for me. Let's put a chore chart on the fridge to keep track.",
              formal: "I'm amenable to a rotation system. Perhaps we could create a visible chore chart to ensure clarity and accountability.",
            },
          },
          {
            speaker: "you",
            textEn: "Good idea. Now, what about guests? I don't mind if you have people over, but maybe we give each other a heads-up if someone's staying overnight?",
            textZh: "好主意。那关于客人呢？我不介意你带朋友来，但如果有人要留宿的话我们提前知会一声？",
            casualVersion: "Cool. What about having people over? I'm chill with it — just a heads-up for overnights?",
            culturalNote: "在美国合租中，关于客人留宿的规则非常重要。常见的约定包括提前通知、限制连续住宿天数（比如不超过3晚/周），以及不能让客人独自在家。",
            commonMistake: {
              wrong: "About visitors, if your friend sleep here, please tell me first.",
              correct: "I don't mind if you have people over, but maybe we give each other a heads-up if someone's staying overnight?",
              explanation: "'have people over' 是邀请人来家里的常用说法。'give a heads-up' 比 'tell me first' 更友好。",
            },
            formalityVariants: {
              casual: "Having friends over is totally fine. Just a heads-up for sleepovers, yeah?",
              standard: "I'm fine with guests. Just a heads-up for overnight stays?",
              formal: "Regarding guests — I have no objection to visitors, but I'd appreciate advance notice if someone will be staying overnight.",
            },
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "Absolutely, that's just common courtesy. And if either of us has someone over more than three nights a week, they should probably chip in for utilities. Sound fair?",
            textZh: "当然，这就是基本礼貌。如果我们任何一方的客人每周超过三晚，他们应该分摊一些水电费。觉得公平吗？",
            keyPhrases: [
              { en: "common courtesy", zh: "基本礼貌" },
              { en: "chip in for utilities", zh: "分摊水电费" },
            ],
            alternativeExpressions: [
              { textEn: "For sure, just basic respect. And if someone's basically living here — like more than three nights a week — they should pitch in for utilities. Right?", textZh: "当然，基本的尊重。如果有人基本上住在这——每周超过三晚——他们应该出一份水电费。对吧？", actionHint: "pitch in 出一份/分担", frequency: "common" },
            ],
            casualVersion: "Yep, just basic manners. And if someone's here like every night, they should help with utilities. Three nights a week max before they chip in?",
            formalityVariants: {
              casual: "Yeah, just common sense. If someone's here all the time, they should pay for utilities.",
              standard: "That's common courtesy. If a guest stays more than three nights a week, they should chip in for utilities.",
              formal: "Absolutely, that's simply common courtesy. I'd also propose that if either of us has a guest exceeding three overnight stays per week, a contribution toward utility costs would be appropriate.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "费用分摊协商",
        titleEn: "Expense Splitting Discussion",
        description: "详细讨论租金、水电和共用物品的费用分摊",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Let's talk about splitting costs. Rent is twenty-four hundred total. Since you're taking the master bedroom with the attached bathroom, how do you feel about a sixty-forty split?",
            textZh: "我们来谈谈费用分摊。总租金2400美元。既然你住的是带独立卫生间的主卧，你觉得六四分怎么样？",
            casualVersion: "So rent's 2400. You've got the bigger room with the bathroom — how about 60-40?",
            culturalNote: "在美国，室友之间按房间大小和设施不等额分摊租金是非常常见的。如果一间卧室明显更大或有独立卫生间，住那间的人通常付更多。有些人用Splitwise等App来精确计算。",
            commonMistake: {
              wrong: "You have bigger room so you should pay more. I think 60 and 40 percent is good.",
              correct: "Since you're taking the master bedroom with the attached bathroom, how do you feel about a sixty-forty split?",
              explanation: "'how do you feel about' 比 'you should' 更协商性。'sixty-forty split' 是分摊比例的简洁表达。",
            },
            formalityVariants: {
              casual: "You got the big room with the bathroom. 60-40 on rent sound right?",
              standard: "Since you have the master bedroom with attached bath, how about a sixty-forty split on rent?",
              formal: "Given that you'll be occupying the master bedroom with the en-suite bathroom, I'd like to propose a proportional rent split of sixty-forty. Does that seem equitable?",
            },
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "I was thinking more like fifty-five forty-five. The master's a bit bigger, sure, but the difference isn't huge. And we're sharing the kitchen and living room equally.",
            textZh: "我觉得五五-四五更合理。主卧是大一点，但差别没那么大。而且厨房和客厅我们是平等使用的。",
            keyPhrases: [
              { en: "fifty-five forty-five", zh: "55-45分" },
              { en: "sharing equally", zh: "平等使用/共享" },
            ],
            alternativeExpressions: [
              { textEn: "Sixty-forty feels like a lot. How about 55-45? The room's a little bigger but not that much, and we share all the common areas.", textZh: "六四有点多。55-45怎么样？房间是大一点但没大那么多，公共区域我们都一起用。", actionHint: "feels like a lot 感觉太多了", frequency: "common" },
            ],
            casualVersion: "Hmm, 60-40 is kinda steep. How about 55-45? The room's bigger but not like twice the size.",
            formalityVariants: {
              casual: "60-40's too much. 55-45? The room's a bit bigger, that's it.",
              standard: "I'd prefer fifty-five forty-five. The master's bigger, but we share the common areas equally.",
              formal: "I'd propose a fifty-five to forty-five ratio as a more proportionate arrangement. While the master bedroom offers additional space, the difference is modest, and we share the common areas equally.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, fifty-five forty-five, but you also have the attached bathroom to yourself. How about you cover a bit more of the water bill since you're the only one using that shower?",
            textZh: "好吧，55-45，但你有独立卫生间。既然淋浴只有你用，你多承担一点水费怎么样？",
            casualVersion: "Fine, 55-45 on rent. But you've got your own bathroom — can you cover a bigger chunk of the water bill?",
            culturalNote: "在美国，水电费的分摊方式多种多样：平分、按使用量分、或按租金比例分。独立卫生间意味着更多的水和清洁用品消耗，因此要求多分摊是合理的。",
            commonMistake: {
              wrong: "You use bathroom alone so you should pay more water fee.",
              correct: "Since you're the only one using that shower, how about you cover a bit more of the water bill?",
              explanation: "'cover a bit more' 比 'pay more' 更委婉。'water bill' 是水费的标准说法。",
            },
            formalityVariants: {
              casual: "55-45 works. But since you've got your own shower, pay a little more for water?",
              standard: "Fifty-five forty-five on rent, but you cover a larger share of the water bill since you have the attached bathroom.",
              formal: "I can accept the fifty-five forty-five ratio for rent. However, given your exclusive use of the attached bathroom, I'd suggest a proportionally higher contribution toward the water utility.",
            },
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "That's fair. How about sixty-forty on water, and we split electric and internet fifty-fifty? And for groceries, I was thinking we each buy our own but split shared stuff like cooking oil, paper towels, and cleaning supplies.",
            textZh: "合理。水费六四，电费和网费五五怎么样？日用品的话，我想各买各的，但一起分摊共用的东西比如食用油、纸巾和清洁用品。",
            keyPhrases: [
              { en: "split fifty-fifty", zh: "五五分/平分" },
              { en: "cleaning supplies", zh: "清洁用品" },
            ],
            alternativeExpressions: [
              { textEn: "Fair enough. 60-40 water, 50-50 on electric and Wi-Fi. Groceries — we each do our own, but we go halves on shared household stuff.", textZh: "有道理。水费60-40，电和Wi-Fi 50-50。食品各买各的，但家庭日用品AA。", actionHint: "go halves 各出一半/AA", frequency: "common" },
            ],
            casualVersion: "Fair. 60-40 on water, 50-50 electric and internet. For food, we buy our own, but split household stuff like soap and paper towels.",
            formalityVariants: {
              casual: "Makes sense. 60-40 water, 50-50 everything else. Food is separate, shared stuff we split.",
              standard: "Sixty-forty on water, fifty-fifty on electric and internet. Groceries separate, shared household items split.",
              formal: "I'd agree to a sixty-forty split on water, with electric and internet divided equally. For groceries, I suggest individual purchases with a shared fund for communal items such as cleaning supplies and household essentials.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds great. Should we use an app like Splitwise to track shared expenses? It'll make it easier than trying to remember who paid for what.",
            textZh: "听起来不错。我们用Splitwise之类的App来记录共同开支怎么样？比记住谁付了什么方便多了。",
            casualVersion: "Perfect. Wanna use Splitwise? Way easier than keeping track ourselves.",
            culturalNote: "在美国，Splitwise和Venmo是室友之间分账最常用的工具。Splitwise记录谁欠谁多少，Venmo用来实际转账。避免了尴尬的面对面要钱。",
            commonMistake: {
              wrong: "We should use App to record money. It is easier than remember by ourselves.",
              correct: "Should we use an app like Splitwise to track shared expenses? Easier than trying to remember who paid for what.",
              explanation: "'track expenses' 是记录开支的标准说法。'who paid for what' 比 'remember by ourselves' 更具体。",
            },
            formalityVariants: {
              casual: "Let's just use Splitwise. Way easier than keeping track.",
              standard: "Should we use Splitwise to track shared expenses? Easier than remembering who paid what.",
              formal: "I'd suggest using an expense-tracking application like Splitwise to maintain transparent records of our shared expenditures.",
            },
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "I already use Splitwise — it's great. We can settle up at the end of each month through Venmo. One last thing — should we put all this in writing? My last roommate and I had a simple one-page agreement, and it saved us a lot of headaches.",
            textZh: "我已经在用Splitwise了——很好用。每月底通过Venmo结清。最后一件事——我们把这些都写下来怎么样？我和上一个室友有一份简单的一页协议，省了很多麻烦。",
            keyPhrases: [
              { en: "settle up", zh: "结清/结算" },
              { en: "saved us a lot of headaches", zh: "省了很多麻烦" },
            ],
            alternativeExpressions: [
              { textEn: "Love Splitwise. We can Venmo each other at the end of the month. And let's write all this down — trust me, having it on paper avoids so many arguments.", textZh: "我爱Splitwise。月底互相Venmo。把这些都写下来吧——相信我，写在纸上能避免很多争吵。", actionHint: "avoids so many arguments 避免很多争吵", frequency: "common" },
            ],
            casualVersion: "I use Splitwise already! Venmo each other at the end of the month. And let's write this all down — saved me so much drama with my last roommate.",
            formalityVariants: {
              casual: "Already on Splitwise! Settle up monthly on Venmo. And let's write this stuff down — trust me.",
              standard: "I use Splitwise already. We can settle up monthly through Venmo. Let's put everything in writing too — it really helps.",
              formal: "I'm already a Splitwise user, which is ideal. Monthly settlement via Venmo would work well. I'd also strongly recommend documenting our agreement in writing — in my experience, a written roommate agreement significantly reduces potential misunderstandings.",
            },
          },
        ],
      },
    ],
  },

  // ==================== HOA 新规异议 ====================
  {
    id: "housing-hoa-dispute",
    category: "housing",
    titleZh: "对 HOA 新规提出异议",
    titleEn: "Disputing an HOA Rule",
    description: "在业主委员会（HOA）会议上理解新规则并礼貌表达反对意见",
    otherRole: "HOA主席",
    otherRoleIcon: "🏘️",
    tags: ["HOA", "业主委员会", "规则", "投票", "异议", "社区"],
    flows: [
      {
        id: "understanding-new-rule",
        titleZh: "理解 HOA 新规",
        titleEn: "Understanding a New HOA Rule",
        description: "第一次参加 HOA 会议，理解会议流程和新提出的规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, excuse me — is this the HOA meeting for Oakwood Estates? I'm new here and this is my first meeting.",
            textZh: "你好，请问——这是 Oakwood Estates 的 HOA 会议吗？我是新搬来的，这是我第一次参加。",
            casualVersion: "Hey, is this the HOA meeting? First time here.",
            formalityVariants: {
              casual: "Hey, HOA meeting? First timer here.",
              standard: "Hi, is this the HOA meeting for Oakwood Estates? I'm new and this is my first meeting.",
              formal: "Good evening. Could you confirm that this is the Oakwood Estates HOA meeting? I've recently moved in and this is my first time attending.",
            },
          },
          {
            speaker: "them",
            role: "HOA主席",
            textEn: "Yes, you're in the right place! Welcome to the neighborhood. I'm Tom, the HOA president. Just sign in on the sheet over there and grab an agenda. We should be getting started in about five minutes.",
            textZh: "是的，你来对地方了！欢迎来到社区。我是Tom，HOA主席。在那边的签到表上签个名，拿一份议程。大概五分钟后开始。",
            keyPhrases: [
              { en: "HOA president", zh: "HOA主席/业委会主席" },
              { en: "agenda", zh: "议程" },
              { en: "sign in", zh: "签到" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, right meeting! Welcome. I'm Tom, I run the HOA. Sign-in is right there. We've got a packed agenda tonight, so we're starting sharp at 7.", textZh: "对，就是这个会！欢迎。我是Tom，负责HOA。签到在那边。今晚议程很满，7点准时开始。", actionHint: "packed agenda 满满的议程", frequency: "common" },
            ],
            culturalNote: "HOA 是美国小区的业主自治组织。会费和规则是强制性的。不遵守可能被罚款。",
            casualVersion: "Yep! Welcome. I'm Tom, HOA president. Sign in over there and grab an agenda. Starting in five.",
            formalityVariants: {
              casual: "Right place! I'm Tom, HOA pres. Sign in, grab an agenda. Starting soon.",
              standard: "Yes, welcome! I'm Tom, the HOA president. Sign in over there and grab an agenda. Starting in about five minutes.",
              formal: "Indeed, you are at the correct location. Welcome to our community. My name is Tom, and I serve as the HOA president. Please sign the attendance sheet and collect an agenda. We will commence in approximately five minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks, Tom. Quick question — I see there's something about a 'landscaping compliance' item on the agenda. What does that mean exactly?",
            textZh: "谢谢，Tom。快问一下——我看议程上有一个'绿化合规'项目。那具体是什么意思？",
            casualVersion: "Thanks. Hey, what's this 'landscaping compliance' thing on the agenda?",
            formalityVariants: {
              casual: "Thanks. What's the landscaping compliance thing about?",
              standard: "Thanks. I see 'landscaping compliance' on the agenda. What does that mean exactly?",
              formal: "Thank you, Tom. If I may, I noticed an item regarding 'landscaping compliance' on the agenda. Could you clarify what that entails?",
            },
          },
          {
            speaker: "them",
            role: "HOA主席",
            textEn: "Sure. So we've been getting complaints about some yards not being maintained. The board is proposing a new rule that all front yards must be mowed at least every two weeks, and any dead trees or bushes need to be removed within 30 days of notice. Violators would get a warning first, then a $50 fine.",
            textZh: "当然。最近我们收到了一些关于院子没打理的投诉。管委会提议新规定：所有前院至少两周修剪一次，收到通知后30天内必须移除枯死的树木或灌木。违规者先警告，然后罚款50美元。",
            keyPhrases: [
              { en: "yards not being maintained", zh: "院子没打理" },
              { en: "mowed", zh: "修剪/割草" },
              { en: "violators", zh: "违规者" },
              { en: "fine", zh: "罚款" },
            ],
            alternativeExpressions: [
              { textEn: "Basically, some lawns are looking rough and neighbors are complaining. New rule would require mowing every two weeks, dead plants removed within a month. First offense is a warning, then it's 50 bucks.", textZh: "基本上就是有些草坪看起来很差，邻居们在投诉。新规定要求两周割一次草，枯死的植物一个月内清除。第一次违规警告，然后罚50块。", actionHint: "looking rough 看起来很差/很粗糙", frequency: "common" },
            ],
            casualVersion: "Some yards look bad, people are complaining. New rule: mow every two weeks, remove dead stuff in 30 days, or get fined $50.",
            formalityVariants: {
              casual: "Some yards look terrible. New rule: mow every two weeks, dead stuff gone in 30 days. Warning then $50 fine.",
              standard: "We've gotten complaints about yard maintenance. The proposed rule: mow every two weeks, remove dead trees within 30 days, warning then $50 fine.",
              formal: "We have received a number of complaints regarding inadequate yard maintenance. The board is proposing that all front yards be mowed at minimum every two weeks, and that any deceased vegetation be removed within 30 days of written notice. The enforcement mechanism would begin with a formal warning, followed by a $50 fine for subsequent violations.",
            },
          },
          {
            speaker: "you",
            textEn: "I see. And does everyone get to vote on this, or has the board already decided?",
            textZh: "明白了。那是所有人都可以投票，还是管委会已经决定了？",
            casualVersion: "Do we vote on this, or is it already decided?",
            formalityVariants: {
              casual: "We voting on this or is it a done deal?",
              standard: "Does everyone get to vote, or has the board already decided?",
              formal: "I see. Will this be put to a vote among all homeowners, or has the board already reached a decision?",
            },
          },
          {
            speaker: "them",
            role: "HOA主席",
            textEn: "Good question. New rules require a vote from the homeowners. We need a simple majority to pass it — more than 50%. So tonight we'll present the proposal, take questions, and then vote. Every unit owner gets one vote.",
            textZh: "好问题。新规定需要业主投票。需要简单多数通过——超过50%。所以今晚我们会介绍提案，回答问题，然后投票。每个业主有一票。",
            keyPhrases: [
              { en: "simple majority", zh: "简单多数" },
              { en: "pass it", zh: "通过（法案/规定）" },
              { en: "proposal", zh: "提案" },
            ],
            alternativeExpressions: [
              { textEn: "It's up to a vote. We need more than half to say yes. We'll discuss it, hear objections, and then do a show of hands. One vote per household.", textZh: "要投票决定。需要过半数同意。我们先讨论，听取反对意见，然后举手表决。每户一票。", actionHint: "show of hands 举手表决", frequency: "common" },
            ],
            casualVersion: "It's a vote. Need 50%+ to pass. We'll present, answer questions, then vote. One vote per unit.",
            formalityVariants: {
              casual: "We vote. More than half need to say yes. One vote per house.",
              standard: "New rules require a homeowner vote. Simple majority to pass. We'll present, take questions, then vote.",
              formal: "All new regulations require ratification by the homeowners. A simple majority — exceeding 50% of votes cast — is required for passage. This evening, we will present the proposal, address any questions or concerns, and subsequently conduct the vote. Each property owner is entitled to one vote.",
            },
          },
          {
            speaker: "you",
            textEn: "That's good to know. So if I disagree with something, I can speak up during the question period?",
            textZh: "了解了。那如果我有不同意见，可以在提问环节发言吗？",
            casualVersion: "So if I don't like something, I can say so during questions?",
            formalityVariants: {
              casual: "Cool. So I can voice my opinion during Q&A if I disagree?",
              standard: "Good to know. If I disagree, I can speak up during the question period?",
              formal: "That's very helpful to know. If I have reservations about a particular provision, am I permitted to voice my concerns during the question and answer period?",
            },
          },
          {
            speaker: "them",
            role: "HOA主席",
            textEn: "Absolutely! That's exactly what the Q&A is for. We encourage homeowners to share their views — for and against. Just raise your hand and wait to be called on. We ask that everyone keeps it respectful and under two minutes so everyone gets a chance to speak.",
            textZh: "当然！提问环节就是为了这个。我们鼓励业主分享他们的看法——赞成和反对都可以。举手等叫到你就行。我们要求大家保持尊重，每人不超过两分钟，这样每个人都有机会发言。",
            keyPhrases: [
              { en: "raise your hand", zh: "举手" },
              { en: "wait to be called on", zh: "等被叫到" },
              { en: "keeps it respectful", zh: "保持尊重" },
            ],
            alternativeExpressions: [
              { textEn: "For sure, that's the whole point! We want to hear from everyone. Just raise your hand, keep it under two minutes, and be respectful. We've had some heated meetings before, so we try to keep it civil.", textZh: "当然，这就是重点！我们想听每个人的意见。举手，控制在两分钟内，保持尊重。之前有些会议很激烈，所以我们尽量保持理性。", actionHint: "heated meetings 激烈的会议", frequency: "common" },
            ],
            casualVersion: "Totally! That's what Q&A is for. Raise your hand, keep it short and respectful. Everyone gets to talk.",
            formalityVariants: {
              casual: "Yeah, speak your mind! Just raise your hand. Keep it short and respectful.",
              standard: "Absolutely! Raise your hand and wait to be called on. Keep it respectful and under two minutes.",
              formal: "Most certainly. The question and answer session is precisely for that purpose. We actively encourage homeowners to share their perspectives, whether in favor or in opposition. Simply raise your hand and await recognition. We do ask that all comments remain respectful and be limited to two minutes, to ensure equitable participation.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. Thanks for explaining everything, Tom. I feel a lot more comfortable now. I'll definitely pay attention to the landscaping vote.",
            textZh: "太好了。谢谢你解释这些，Tom。我现在安心多了。我一定会关注绿化投票的。",
            casualVersion: "Great, thanks Tom. Feel way better now. I'll pay attention to the vote.",
            formalityVariants: {
              casual: "Awesome, thanks. Feel way more comfortable. I'll be paying attention.",
              standard: "Thanks for explaining everything. I feel much more comfortable now. I'll pay attention to the landscaping vote.",
              formal: "Thank you very much for the thorough explanation, Tom. I feel considerably more at ease now. I shall certainly follow the landscaping proposal with keen interest.",
            },
          },
          {
            speaker: "them",
            role: "HOA主席",
            textEn: "Glad to help! And hey, don't be shy about speaking up. Fresh perspectives from new homeowners are always valuable. Alright, looks like everyone's here — let's get started!",
            textZh: "很高兴能帮到你！嘿，别害羞发言。新业主的新视角总是很有价值的。好了，看起来人都到齐了——我们开始吧！",
            keyPhrases: [
              { en: "fresh perspectives", zh: "新视角/新观点" },
              { en: "don't be shy", zh: "别害羞" },
            ],
            alternativeExpressions: [
              { textEn: "Anytime! And seriously — don't hold back. New residents bring fresh eyes, and that's a good thing. Okay folks, let's kick things off!", textZh: "随时都行！说真的——别客气。新住户带来新的眼光，这是好事。好了各位，让我们开始吧！", actionHint: "kick things off 开始（会议等）", frequency: "common" },
            ],
            casualVersion: "Happy to help! Don't be afraid to speak up — new eyes are good. Alright, let's start!",
            formalityVariants: {
              casual: "Anytime! Don't hold back — fresh views are great. Okay, let's go!",
              standard: "Glad to help! Don't be shy about speaking up. Alright, let's get started!",
              formal: "It's my pleasure. And please, do not hesitate to share your thoughts. Fresh perspectives from new homeowners are invariably valuable. Very well, it appears everyone has arrived. Let us begin.",
            },
          },
        ],
      },
      {
        id: "politely-opposing-new-rule",
        titleZh: "礼貌反对一项新规则",
        titleEn: "Politely Opposing a New Rule",
        description: "在 HOA 会议上对一项新规则有异议，礼貌但有力地表达反对",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Um, excuse me — I'd like to comment on the proposed parking rule, if I may. I understand the concern about street parking, but I think a one-car-per-household limit on street parking is too restrictive.",
            textZh: "嗯，打扰一下——如果可以的话，我想对提议的停车规则发表一下意见。我理解大家对路边停车的顾虑，但我觉得每户只允许一辆车停路边太严格了。",
            casualVersion: "Hey, can I say something about the parking rule? I get the concern, but one car per household on the street is way too strict.",
            commonMistake: {
              wrong: "I think this rule is stupid.",
              correct: "I understand the concern, but I think the limit is too restrictive.",
              explanation: "在正式场合反对时，先表示理解对方立场（'I understand the concern'），再说自己的看法，比直接批评更有效也更尊重人。",
            },
            formalityVariants: {
              casual: "So about the parking thing — I get why, but one car per house is too strict.",
              standard: "I'd like to comment on the parking rule. I understand the concern, but a one-car limit is too restrictive.",
              formal: "If I may, I would like to address the proposed parking regulation. While I fully appreciate the concern regarding street congestion, I believe a one-vehicle-per-household limit on street parking is excessively restrictive.",
            },
          },
          {
            speaker: "them",
            role: "HOA主席",
            textEn: "Thank you for raising that. Can you explain why you think it's too restrictive? We'd like to understand different perspectives.",
            textZh: "感谢你提出来。能解释一下为什么你觉得太严格吗？我们想了解不同的观点。",
            keyPhrases: [
              { en: "different perspectives", zh: "不同观点" },
            ],
            alternativeExpressions: [
              { textEn: "Fair point. What specifically concerns you about the limit? We want to hear all sides before we vote.", textZh: "有道理。你具体担心什么？我们想在投票前听到各方意见。", actionHint: "hear all sides 听取各方意见", frequency: "common" },
            ],
            casualVersion: "Thanks for bringing it up. What's the issue with it specifically?",
            formalityVariants: {
              casual: "Good point. What specifically bothers you about it?",
              standard: "Thank you for raising that. Can you explain why you think it's too restrictive?",
              formal: "Thank you for raising this concern. Would you kindly elaborate on why you consider the proposed limit to be overly restrictive? We value all perspectives in this matter.",
            },
          },
          {
            speaker: "you",
            textEn: "Well, a lot of us have families with two or three drivers. Our driveway only fits two cars, so the third has to go on the street. Under this rule, we'd literally have nowhere to park. And what about when we have guests over? Are they supposed to park blocks away?",
            textZh: "嗯，我们很多家庭有两三个会开车的人。车道只能停两辆车，第三辆只能停路边。按这个规定，我们根本没地方停车。而且有客人来的时候怎么办？让他们停到几条街以外？",
            casualVersion: "We've got three drivers and our driveway fits two. Where does the third car go? And what about guests?",
            formalityVariants: {
              casual: "Three drivers, driveway fits two. Third car has to be on the street. And guests? Where do they park?",
              standard: "Many of us have families with multiple drivers. Our driveways fit two cars, the third goes on the street. And what about guests?",
              formal: "Many households in our community have two or three licensed drivers. With driveways accommodating only two vehicles, a third necessarily parks on the street. Under this proposed regulation, we would simply have no available parking. Furthermore, when hosting guests, where would they be expected to park?",
            },
          },
          {
            speaker: "them",
            role: "HOA主席",
            textEn: "Those are valid concerns. The board's intention was to address the complaints about cars blocking sightlines at intersections. But I hear you — the one-car limit may not be the right solution. Would you like to suggest an amendment?",
            textZh: "这些是合理的顾虑。管委会的初衷是解决关于车辆挡住路口视线的投诉。但我理解你的意思——一辆车的限制可能不是正确的解决方案。你想建议一个修正案吗？",
            keyPhrases: [
              { en: "valid concerns", zh: "合理的顾虑" },
              { en: "sightlines", zh: "视线" },
              { en: "amendment", zh: "修正案" },
            ],
            alternativeExpressions: [
              { textEn: "Good points. We were trying to deal with the sightline issue at the intersection on Elm Street. But maybe a blanket limit isn't the answer. Do you have an alternative in mind?", textZh: "说得好。我们是想解决Elm街路口的视线问题。但也许一刀切的限制不是办法。你有替代方案吗？", actionHint: "blanket limit 一刀切的限制", frequency: "common" },
            ],
            casualVersion: "Good points. We were trying to fix the sightline issue. But maybe the limit's too harsh. Got a better idea?",
            formalityVariants: {
              casual: "Fair enough. The sightline issue is real, but maybe one car is too harsh. What would you suggest?",
              standard: "Valid concerns. The intent was to address sightline complaints. But the one-car limit may not be right. Would you suggest an amendment?",
              formal: "Those are indeed valid concerns. The board's primary objective was to address sightline obstructions at intersections. However, I acknowledge that the proposed one-vehicle limit may not be the optimal solution. Would you care to propose an amendment to the regulation?",
            },
          },
          {
            speaker: "you",
            textEn: "Actually, yes. What if instead of a car limit, we just prohibit parking within 15 feet of any intersection? That solves the sightline problem without punishing families who need the street parking. And maybe add a 72-hour limit so nobody leaves a car parked for weeks.",
            textZh: "其实我有。如果不限制车辆数量，而是禁止在路口15英尺内停车怎么样？这解决了视线问题，又不惩罚需要路边停车的家庭。另外可以加一个72小时限制，这样没人会把车停几周不动。",
            casualVersion: "How about: no parking within 15 feet of intersections? Fixes the sightline thing without the car limit. Plus a 72-hour rule so cars don't sit forever.",
            formalityVariants: {
              casual: "Instead of a car limit, just ban parking near intersections. 15 feet. And add a 72-hour rule. Problem solved.",
              standard: "What if we prohibit parking within 15 feet of intersections? That solves the sightline problem without a car limit. Add a 72-hour limit so no one leaves a car for weeks.",
              formal: "I would like to propose an alternative: rather than imposing a per-household vehicle limit, we could prohibit parking within 15 feet of any intersection. This would directly address the sightline concern without disadvantaging families who require street parking. Additionally, a 72-hour limit would prevent the issue of abandoned vehicles.",
            },
          },
          {
            speaker: "them",
            role: "其他业主",
            textEn: "I actually like that idea. The intersection on Elm is really dangerous — I almost got hit turning because I couldn't see past a parked SUV. But yeah, one car per house is too much. The 15-foot rule makes more sense.",
            textZh: "我其实觉得这个主意不错。Elm街的路口确实很危险——我差点因为看不到停着的SUV后面而出事。但对，每家一辆车太过了。15英尺的规则更合理。",
            keyPhrases: [
              { en: "makes more sense", zh: "更合理" },
              { en: "couldn't see past", zh: "看不到...后面" },
            ],
            alternativeExpressions: [
              { textEn: "That's a much better approach. I've had close calls at that intersection too. Keep the parking but clear the intersections — that's the real issue.", textZh: "这是个好得多的办法。我在那个路口也有过几次险情。保留停车但清理路口——那才是真正的问题。", actionHint: "close calls 险情/差一点出事", frequency: "common" },
            ],
            casualVersion: "I like that way better. The intersection IS dangerous, but banning all parking is overkill. 15-foot rule works.",
            formalityVariants: {
              casual: "Way better idea. The intersection's dangerous, but one car per house is overkill.",
              standard: "I like that idea. The Elm intersection is dangerous, but one car per house is too much. The 15-foot rule makes more sense.",
              formal: "I find that proposal to be considerably more balanced. The Elm Street intersection does indeed present a safety concern, but I agree that a blanket one-vehicle limit is overly punitive. The 15-foot buffer zone addresses the core issue far more effectively.",
            },
          },
          {
            speaker: "them",
            role: "HOA主席",
            textEn: "Alright, it sounds like there's support for an amended version. Here's what I'm going to propose: we table the original rule, and I'll draft a revised version based on the 15-foot intersection buffer and 72-hour limit. We'll vote on the revised version at next month's meeting. Does that work for everyone?",
            textZh: "好的，看起来大家支持修改后的版本。我打算这样：搁置原来的规定，我根据15英尺路口缓冲区和72小时限制起草修改版本。下个月的会议上投票表决修改版。大家同意吗？",
            keyPhrases: [
              { en: "table the original rule", zh: "搁置原来的规定" },
              { en: "draft a revised version", zh: "起草修改版本" },
              { en: "buffer", zh: "缓冲区" },
            ],
            alternativeExpressions: [
              { textEn: "Okay, sounds like we have a better direction. Let's shelve the current proposal, I'll write up the new version, and we'll put it to a vote next month. Fair enough?", textZh: "好的，看来我们有了更好的方向。先把当前提案搁置，我写新版本，下个月投票。可以吗？", actionHint: "shelve 搁置/暂放", frequency: "common" },
            ],
            casualVersion: "Sounds like people want the amended version. I'll rewrite it and we vote next month. Cool?",
            formalityVariants: {
              casual: "Okay, new version it is. I'll rewrite it. Vote next month. Sound good?",
              standard: "There's support for the amendment. I'll table the original, draft the revised version, and we vote next month.",
              formal: "It appears there is considerable support for this amendment. I would like to propose that we table the original regulation and I will undertake to draft a revised version incorporating the 15-foot intersection buffer and 72-hour parking limit. We will vote on this revised proposal at next month's meeting. Is this agreeable to all?",
            },
          },
          {
            speaker: "you",
            textEn: "That works for me! And Tom, I just want to say — I appreciate that you actually listened to the feedback. I was really nervous about speaking up, but this felt like a fair process.",
            textZh: "我同意！Tom，我想说——真的很感谢你认真听取了反馈。我之前真的很紧张不敢发言，但感觉这是一个公平的过程。",
            casualVersion: "Works for me! And Tom — thanks for actually listening. I was nervous, but this was fair.",
            formalityVariants: {
              casual: "Sounds good! Thanks for listening, Tom. Was scared to speak up, but this felt fair.",
              standard: "That works. Tom, I appreciate you listening. I was nervous about speaking up, but the process felt fair.",
              formal: "That is entirely agreeable. Tom, I would like to express my appreciation for your willingness to genuinely consider the feedback. I must confess I was quite apprehensive about voicing my concerns, but the process has been admirably fair and inclusive.",
            },
          },
          {
            speaker: "them",
            role: "HOA主席",
            textEn: "That's what this is all about! Honestly, your suggestion was better than what the board came up with. That's exactly why we hold these meetings — the best ideas don't always come from the board. Welcome to the HOA, Wei. I have a feeling you're going to be a valuable voice around here.",
            textZh: "这就是会议的意义！说实话，你的建议比管委会想出来的还好。这就是我们开这些会的原因——最好的主意不一定来自管委会。欢迎来到HOA，Wei。我觉得你在这里会是一个很有价值的声音。",
            keyPhrases: [
              { en: "a valuable voice", zh: "有价值的声音/重要的一员" },
              { en: "that's what this is all about", zh: "这就是会议的意义" },
            ],
            alternativeExpressions: [
              { textEn: "This is exactly how it should work. Your proposal was spot-on — honestly better than ours. Don't be a stranger at these meetings, Wei. We need people who actually think things through.", textZh: "事情就该这样运作。你的提案非常准确——说实话比我们的好。Wei，以后常来开会。我们需要真正动脑筋的人。", actionHint: "spot-on 非常准确/一针见血", frequency: "common" },
            ],
            casualVersion: "That's the whole point! Your idea was better than ours. Welcome to the HOA, Wei. We need people like you.",
            formalityVariants: {
              casual: "That's why we do this! Your idea was way better. Welcome, Wei. Keep coming to meetings!",
              standard: "That's what these meetings are for! Your suggestion was better than what we had. Welcome, Wei. You'll be a valuable voice here.",
              formal: "This is precisely the purpose of these meetings. Candidly, your proposal was superior to the board's original version. That is precisely why homeowner participation is so essential. Welcome to the HOA, Wei. I anticipate that your contributions will be extremely valuable to our community.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 电话联系房东/物业报修 Phone Landlord Maintenance ====================
  {
    id: "phone-landlord-maintenance",
    tags: ["phone", "电话", "landlord", "房东", "maintenance", "维修", "repair", "plumbing", "heating"],
    category: "housing",
    titleZh: "电话联系房东报修",
    titleEn: "Phone Landlord Maintenance Request",
    description: "打电话给房东或物业报告维修问题，描述紧急程度，催促维修进度",
    otherRole: "房东/物业",
    otherRoleIcon: "📞",
    flows: [
      {
        id: "water-leak-emergency",
        titleZh: "水管漏水紧急报修",
        titleEn: "Water Leak Emergency",
        description: "发现水管漏水，打电话给房东请求紧急维修",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "房东",
            textEn: "Hello?",
            textZh: "喂？",
            alternativeExpressions: [
              { textEn: "This is Mike.", textZh: "我是 Mike。", actionHint: "直接报名字", frequency: "common" },
              { textEn: "Yeah, who's this?", textZh: "嗯，谁？", actionHint: "不确定来电者", frequency: "occasional" },
            ],
            culturalNote: "打电话给房东和打给公司客服不同。房东可能直接接，语气更随意。最好先自我介绍。",
          },
          {
            speaker: "you",
            textEn: "Hi Mike, this is Wei from apartment 3B. I'm sorry to bother you, but I have an urgent situation — there's water leaking from the pipe under my kitchen sink. It's been dripping for about an hour and the floor is getting soaked.",
            textZh: "你好 Mike，我是 3B 的 Wei。抱歉打扰你，但有个紧急情况——我厨房水槽下面的水管在漏水。已经滴了大约一个小时了，地板都湿了。",
            casualVersion: "Hey Mike, it's Wei, 3B. Sorry to bug you but there's a pipe leaking under my kitchen sink. It's getting pretty bad.",
            formalityVariants: {
              casual: "Mike! It's Wei, 3B. Got a leak under the kitchen sink. It's bad.",
              standard: "Hi Mike, this is Wei from apartment 3B. I'm sorry to bother you, but I have an urgent situation — there's water leaking from the pipe under my kitchen sink.",
              formal: "Good evening, Mike. This is Wei Chen, your tenant in apartment 3B. I apologize for the late call, but I'm experiencing an urgent plumbing issue. There appears to be a significant leak from the pipe beneath my kitchen sink.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Oh man. OK, how bad is it? Is it a slow drip or is it really flowing?",
            textZh: "哦天哪。好的，有多严重？是慢慢滴还是在大量流水？",
            keyPhrases: [
              { en: "slow drip", zh: "慢慢滴" },
              { en: "really flowing", zh: "大量流水" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's more than a drip — it's a steady stream. I put a bucket under it, but it fills up pretty fast. I've already put towels around the area, but I'm worried about water damage to the floor.",
            textZh: "不只是滴——是一股稳定的水流。我在下面放了水桶，但满得很快。我已经在周围铺了毛巾，但担心地板受损。",
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "OK, first thing — can you find the shut-off valve under the sink? It should be a round knob or lever on the pipe. Turn it clockwise to shut off the water to that sink.",
            textZh: "好的，首先——你能找到水槽下面的截止阀吗？应该是管子上的一个圆旋钮或把手。顺时针转关掉水槽的水。",
            keyPhrases: [
              { en: "shut-off valve", zh: "截止阀" },
              { en: "turn it clockwise", zh: "顺时针转" },
            ],
            alternativeExpressions: [
              { textEn: "Alright, look under the sink — there should be a valve handle on the pipe going into the wall. Turn it to the right to cut off the water. That should stop the leak for now.", textZh: "好，看水槽下面——管子进墙的地方应该有一个阀门把手。向右转关掉水。这应该能暂时止住漏水。", actionHint: "cut off 关掉/截断", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "OK, let me try... I see it. Turning it now... OK, the water stopped! The leak has stopped.",
            textZh: "好的，让我试试……我看到了。现在转……好了，水停了！不漏了。",
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Good, that'll hold for now. I can't get a plumber out tonight, but I'll have someone there first thing tomorrow morning. Can you be home between 8 and 9? In the meantime, you can still use the bathroom sink for water.",
            textZh: "好的，暂时可以了。今晚找不到水管工了，但明天一早我会派人过去。你 8 到 9 点之间能在家吗？在此期间，你可以用卫生间的水槽用水。",
            keyPhrases: [
              { en: "first thing tomorrow morning", zh: "明天一早第一件事" },
              { en: "that'll hold for now", zh: "暂时可以了" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I can be home in the morning. Should I leave the water off until the plumber comes?",
            textZh: "可以，我早上能在家。水管工来之前一直关着水吗？",
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Yeah, leave that valve shut. Just the kitchen one — your bathroom should be fine. I'll text you when I confirm the plumber's schedule. And hey — sorry about this. I'll take care of it, and obviously you won't be charged for the repair.",
            textZh: "是的，那个阀门关着。只是厨房的——卫生间应该没问题。水管工时间确认后我发短信给你。哦对了——抱歉出这个事。我会处理的，修理费当然不用你出。",
            keyPhrases: [
              { en: "leave that valve shut", zh: "那个阀门关着别动" },
              { en: "you won't be charged", zh: "不用你出钱" },
            ],
            culturalNote: "在美国，正常的维修费用由房东承担，这是法律规定的。租客不需要为水管老化、设备故障等正常磨损买单。",
          },
          {
            speaker: "you",
            textEn: "Thank you, Mike. I appreciate you responding so quickly. I'll keep the towels down and monitor it overnight.",
            textZh: "谢谢 Mike。感谢你这么快回应。我会保持毛巾铺着，晚上盯着。",
          },
        ],
      },
      {
        id: "heating-broken-winter",
        titleZh: "冬天暖气坏了",
        titleEn: "Heating Broken in Winter",
        description: "冬天暖气坏了，催促修理并询问临时解决方案",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "物业前台",
            textEn: "Riverside Property Management, how can I help you?",
            textZh: "Riverside 物业管理，有什么可以帮您的？",
          },
          {
            speaker: "you",
            textEn: "Hi, I'm calling about a heating issue in my apartment. I'm in unit 412. The heat stopped working completely last night and it's freezing in here — I can see my breath.",
            textZh: "你好，我打电话是关于公寓暖气的问题。我在 412 室。暖气昨晚完全停了，这里冷得要命——我都能看到自己呼出的白气了。",
            casualVersion: "Hey, the heat's dead in my apartment, unit 412. It's literally freezing in here.",
          },
          {
            speaker: "them",
            role: "物业前台",
            textEn: "Oh no, I'm sorry about that. Let me check... What's your name and unit number again?",
            textZh: "哦不，很抱歉。让我查一下……您的名字和房号是？",
          },
          {
            speaker: "you",
            textEn: "Wei Chen, unit 412. C-H-E-N.",
            textZh: "Wei Chen，412 室。C-H-E-N。",
          },
          {
            speaker: "them",
            role: "物业前台",
            textEn: "Got it. Have you checked your thermostat? Sometimes it gets accidentally switched to 'cool' mode, or the batteries die.",
            textZh: "收到。您检查温控器了吗？有时候会不小心切到'制冷'模式，或者电池没电了。",
            keyPhrases: [
              { en: "thermostat", zh: "温控器" },
              { en: "switched to cool mode", zh: "切到制冷模式" },
              { en: "batteries die", zh: "电池没电" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I checked. It's set to heat, and I turned it up to 75, but nothing happens. No warm air comes out of the vents at all. I also checked the breaker — it's not tripped.",
            textZh: "是的，我查了。设在制热模式，温度调到 75 度了，但什么都没有。通风口完全没有暖风出来。我还检查了断路器——没有跳闸。",
            keyPhrases: [
              { en: "vents", zh: "通风口" },
              { en: "breaker", zh: "断路器/空气开关" },
              { en: "tripped", zh: "跳闸" },
            ],
          },
          {
            speaker: "them",
            role: "物业前台",
            textEn: "OK, it sounds like a real issue then. I'm putting in an emergency work order right now. In most states, heating is considered an essential service, especially during winter. We're required to address it within 24 hours. Let me see when our HVAC technician can get there...",
            textZh: "好的，那看起来是真的有问题。我现在提交紧急工单。在大多数州，暖气被视为基本服务，尤其在冬天。我们必须在 24 小时内处理。让我看看暖通技术人员什么时候能到……",
            keyPhrases: [
              { en: "emergency work order", zh: "紧急工单" },
              { en: "essential service", zh: "基本服务" },
              { en: "within 24 hours", zh: "24小时内" },
              { en: "HVAC technician", zh: "暖通技术人员" },
            ],
            alternativeExpressions: [
              { textEn: "That definitely needs to be fixed ASAP. Heating's legally required, especially in winter. I'm creating an urgent maintenance ticket now. Let me check when our HVAC guy can come out...", textZh: "那肯定得尽快修。暖气在法律上是必需的，尤其是冬天。我现在创建紧急维修工单。让我看看暖通师傅什么时候能来……", actionHint: "ASAP = as soon as possible 尽快", frequency: "common" },
            ],
            culturalNote: "在美国，暖气被视为 habitability（适居性）的基本要求。房东有法律义务在合理时间内修好。冬天如果暖气坏了不修，租客有权采取法律行动。",
          },
          {
            speaker: "you",
            textEn: "Can they come today? The forecast says it's going to be 20 degrees tonight. I have a space heater, but it's barely keeping one room warm.",
            textZh: "今天能来吗？天气预报说今晚要降到零下 6 度。我有一个电暖器，但勉强只能暖一个房间。",
            culturalNote: "美国用华氏度。20°F 大约是 -6°C。space heater 是便携式电暖器，很多美国家庭都有。",
          },
          {
            speaker: "them",
            role: "物业前台",
            textEn: "The earliest I can get someone is this afternoon between 2 and 4. I know that's a while to wait. In the meantime, here's what I can do — we have a couple of portable heaters in the office. I can bring one up to you within the hour. Would that help?",
            textZh: "最早能派人的时间是今天下午 2 到 4 点。我知道要等一段时间。在此期间，我能做的是——我们办公室有几个便携式暖器。我可以一小时内送一个上来。这有帮助吗？",
            keyPhrases: [
              { en: "portable heaters", zh: "便携式暖器" },
              { en: "within the hour", zh: "一小时内" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that would be great. And if they can't fix it today, what happens? I can't stay here with no heat all night.",
            textZh: "好的，那太好了。如果今天修不好呢？我不能在没有暖气的地方过夜。",
          },
          {
            speaker: "them",
            role: "物业前台",
            textEn: "If it can't be fixed same-day, we'd provide you with a temporary unit in the building — we have a vacant apartment on the 3rd floor you could use until the repair is done. Or if you prefer, we can reimburse you for a hotel stay. Keep the receipt and we'll deduct it from your rent. Either way, we'll make sure you're taken care of.",
            textZh: "如果当天修不好，我们会在楼里给您提供一个临时住处——3 楼有一间空公寓可以用到修好为止。或者如果您愿意，我们可以报销酒店住宿费。保留收据，我们会从房租里扣除。无论哪种方式，我们会确保您得到照顾。",
            keyPhrases: [
              { en: "temporary unit", zh: "临时住处" },
              { en: "vacant apartment", zh: "空置公寓" },
              { en: "reimburse you", zh: "报销/补偿" },
              { en: "deduct it from your rent", zh: "从房租里扣除" },
            ],
            alternativeExpressions: [
              { textEn: "If it's not done today, don't worry — we have backup options. There's an empty unit on the 3rd floor you can crash in, or we'll cover a hotel room. Just save the receipt and it comes off next month's rent. You won't be left in the cold, I promise.", textZh: "如果今天搞不定，别担心——我们有备选方案。3楼有个空房间你可以住，或者我们承担酒店费用。收据保存好，从下个月房租里扣。你不会被丢在寒冷中，我保证。", actionHint: "crash in 临时住/凑合住, left in the cold 被丢在寒冷中（双关）", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },
];
