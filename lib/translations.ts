export const DEFAULT_LANGUAGE = "pt-AO" as const;

export type Language = typeof DEFAULT_LANGUAGE | "en";

export function isLanguage(value: unknown): value is Language {
  return value === DEFAULT_LANGUAGE || value === "en";
}

export function getValidLanguage(value: unknown): Language {
  return isLanguage(value) ? value : DEFAULT_LANGUAGE;
}

const en = {
  navbar: {
    services: "Our Services",
    company: "Company",
    portfolio: "Portfolio",
    blog: "Blog",
    contact: "Contact Us",
  },
  hero: {
    headline: "Your digital marketing company in Luanda, Angola.",
    credYears: "6 years",
    credRest:
      "of strategic digital marketing, technology and digital solutions, brand strategy",
    credRest2: "corporate communication and project management",
    credTrustLead: "Trusted by 500+",
    credTrustRest: "companies of every size",
    kicker: "We help brands in Angola grow through",
    body: "Technology shapes the future, and marketing determines who gets seen in it. Now is the time to strengthen your digital presence, reach the right audience, and turn attention into sustainable growth.",
    chips: {
      googleAds: "Google Ads",
      analytics: "Google Analytics",
      bingAds: "Bing Ads",
      ppc: "PPC",
      facebookAds: "Facebook Ads",
      linkedin: "LinkedIn",
      youtube: "YouTube",
      social: "Social Campaigns",
      brand: "Brand Strategy",
      corporate: "Corporate Communication",
      project: "Project Management",
    },
    cta: "Schedule a free strategy call",
    trustPrefix: "Trusted by",
    trustNumber: "500+",
    trustSuffix: "companies in Angola.",
    tiles: {
      team: "Team on site",
      media: "Head of media",
      tech: "Head of technology",
      exec: "Executive director",
    },
  },
  faq: {
    heading: "Questions about working with us",
    sub: "The things companies ask before the first conversation.",
    items: [
      {
        q: "What does Idealisa actually do?",
        a: "We build brands and the communication around them: positioning and identity, corporate communication, digital marketing, web design, technology solutions and project management. One team carries the work from strategy to publication.",
      },
      {
        q: "Do you work with companies outside Luanda?",
        a: "Yes. We work with companies, institutions and organisations across Angola’s provinces, and with international groups operating in the country. Meetings can be held in person in Luanda or remotely.",
      },
      {
        q: "Do you have fixed packages?",
        a: "No. Every plan is built around the business in front of us. We start from the problem (unclear positioning, weak demand, inconsistent communication) and scope the work from there.",
      },
      {
        q: "How does a project usually start?",
        a: "With a diagnosis. One conversation is normally enough for us to say honestly whether the problem is the brand, the message or the execution, and what it would take to fix it.",
      },
      {
        q: "How long does the work take?",
        a: "A diagnosis and strategic direction takes a few weeks. Positioning, communication and execution programmes usually run over months, because brand results compound rather than appear overnight.",
      },
      {
        q: "In which language will we work?",
        a: "Portuguese, English, or both. Strategy documents can be delivered bilingually from the start, which we recommend for organisations with international partners.",
      },
      {
        q: "How much does it cost?",
        a: "It depends on scope. We quote after understanding the business, so the price reflects the work required, not a package you have to fit into. You will always see what is included before you commit.",
      },
      {
        q: "Who will we be working with?",
        a: "The people who do the work. You deal directly with the strategists and creatives on your project, not an account layer that passes messages along.",
      },
      {
        q: "Can you work alongside our in-house team?",
        a: "Often that is the best arrangement. We set the strategy and creative direction and your team executes, with our oversight where it helps.",
      },
      {
        q: "How do we start?",
        a: "Send a sentence about the business on WhatsApp, or fill in the form on this page. We reply within one business day.",
      },
    ],
  },
  callPill: "Call",
  metrics: {
    kicker: "By the numbers",
    heading: "We build your brand like it is our own",
    cta: "Schedule a free consultation",
    rings: [
      {
        value: 500,
        suffix: "+",
        frac: 0.82,
        label: "Clients served",
      },
      {
        value: 200,
        suffix: "+",
        frac: 0.7,
        label: "Websites launched",
      },
      {
        value: 25000,
        suffix: "+",
        frac: 0.88,
        label: "Graphics designed",
      },
      {
        value: 20,
        suffix: "+",
        frac: 0.62,
        label: "Industries served",
      },
      {
        value: 6,
        suffix: "",
        frac: 0.55,
        label: "Years in business",
      },
      {
        value: 200,
        suffix: "+",
        frac: 0.75,
        label: "Ad campaigns run",
      },
    ],
    pillars: [
      {
        title: "Mark your presence",
        body: "A brand people recognise, identity, website and message working as one.",
      },
      {
        title: "Traffic acquisition",
        body: "The right audience found and brought to you through search, social and paid media.",
      },
      {
        title: "Traffic conversion",
        body: "Attention turned into enquiries, clients and revenue you can measure.",
      },
    ],
  },
  recent: {
    heading: "Recent thinking from the Idealisa team",
    sub: "Notes on brand, communication and growth in Angola",
    minRead: "min read",
    readAll: "Read the blog",
    empty: "New articles are coming soon.",
  },
  reviews: {
    heading: "Trusted by 500+ businesses and institutions",
    sub: "Real stories from the teams we build brands with",
    ratingWord: "Excellent",
    basedOn: "Based on 111 reviews",
    items: [
      {
        name: "Jorge Furtado",
        date: "March 2026",
        title: "Strong technical team, strong content",
        body: "They have a genuinely strong technical team. The software they built for us was excellent, solid, well thought through and exactly what we needed. And the content was at the same level. It is rare to find a partner that gets both the technology and the creative side right.",
      },
      {
        name: "Diana Sousa",
        date: "May 2026",
        title: "Every investment is worth it",
        body: "I love their work, the professionalism and the quality. With Idealisa, every investment is one that is truly worth making. They do not just deliver something pretty, they deliver work that brings real return to the business.",
      },
      {
        name: "Gracinda Carlos",
        date: "January 2026",
        title: "They transformed how our brand shows up",
        body: "A young, creative and genuinely competent team. They took over our social media and completely transformed the way our brand appears online, consistent, professional and full of life. I really like the work they do.",
      },
      {
        name: "Joelma Punque",
        date: "June 2026",
        title: "Results you can actually measure",
        body: "Professionalism, quality and results you can actually measure. Their guidance gave clear direction to our marketing, and I saw the difference in the business, not just in pretty posts. They advise us like true partners.",
      },
    ],
  },
  cases: {
    kicker: "Success stories",
    heading: "Our marketing case studies",
    readAll: "Talk to us about a project like this",
    items: [
      {
        slotId: "case-malamu",
        slotPlaceholder: "Drop a Malamu Restaurant photograph",
        client: "Malamu Restaurant",
        award:
          "Integrated marketing strategy to strengthen brand positioning, digital presence and commercial results for a Luanda restaurant.",
        term: "Working term: 20 months",
        stats: [
          {
            value: "+90%",
            label: "Growth in followers",
          },
          {
            value: "+15%",
            label: "Growth in revenue",
          },
          {
            value: "20",
            label: "Campaigns delivered",
          },
          {
            value: "4",
            label: "Dining occasions activated",
          },
        ],
        blocks: [
          {
            label: "Point A",
            body: "An established restaurant with strong food but weak visibility, no consistent brand and no real digital presence online.",
          },
          {
            label: "Goal",
            body: "Grow the digital community, strengthen positioning and reputation, and drive revenue across every dining occasion in its market and beyond.",
          },
          {
            label: "Solution",
            body: "Strategy first: research, positioning, editorial line and tone of voice, then creative content, campaigns, paid media and a stronger presence.",
          },
          {
            label: "The results",
            body: "Followers up +90%, revenue up +15% over 20 months, built by marketing and commercial teams together.",
          },
        ],
      },
      {
        slotId: "case-fcks",
        slotPlaceholder: "Drop the campaign screenshot",
        client: "FCKS — Fábrica de Cimento do Kwanza Sul",
        award:
          "Integrated marketing and communication strategy to strengthen positioning, visibility and brand reputation for a Kwanza Sul cement factory.",
        term: "Working term: 24 months",
        stats: [
          {
            value: "+70%",
            label: "Follower growth",
          },
          {
            value: "8",
            label: "Campaigns run",
          },
          {
            value: "3",
            label: "Provinces reached",
          },
          {
            value: "480",
            label: "Content pieces produced",
          },
        ],
        blocks: [
          {
            label: "Point A",
            body: "An established cement brand needing stronger positioning, wider visibility and more consistent communication.",
          },
          {
            label: "Goal",
            body: "Strengthen the brand's reputation and positioning, grow its awareness, and build a closer, lasting relationship with its audience and consumers everywhere.",
          },
          {
            label: "Solution",
            body: "Repositioning first, then a defined communication strategy, strategic content and campaigns, and a stronger digital presence built around the brand.",
          },
          {
            label: "The results",
            body: "Followers grew +70% over 24 months — turning Yetu consumers into FCKS followers, supporters and advocates.",
          },
        ],
      },
    ],
  },
  talk: {
    kicker: "Get in touch",
    sectionHeading: "Start a conversation with us",
    heading: "Let’s talk about your business, shall we?",
    sub: "Tell us about your business and what you want it to become. We will be straight with you about what the work needs.",
    callLine: "Call us direct or fill out the form",
    name: "Full name",
    email: "Email",
    company: "Company or organisation",
    phone: "Phone number",
    helpWith: "What can we help you with?",
    message: "Message",
    submit: "Continue on WhatsApp",
    extras: ["eCommerce & payments", "AI integration"],
    thanks: "Thank you. We will reply within one business day.",
  },
  whoWeAre: {
    heading: "Who we are",
    lede: "We live in Luanda, we work in Luanda, and we know what it takes to grow a brand in this market.",
    p1: "Idealisa is a digital marketing and brand strategy company based in Luanda. For six years we have helped companies, institutions and organisations across Angola turn attention into revenue, strategy first, then execution that holds up in the market.",
    p2: "We work across brand strategy, corporate communication, digital marketing, web design, technology solutions and project management, so one team carries the work from positioning to publication. Every plan is built around the business in front of us, never a fixed package.",
    cta: "Get to know us",
  },
  whoWeWorkWith: {
    heading: "Who We Work With",
    subheading:
      "We partner with medium, large, and enterprise organisations looking for a long-term digital marketing and growth partner.",
    videoTitle: "See the work in motion",
    videoNote:
      "Short films from the sectors we serve, finance, health, public institutions and more.",
    cards: [
      {
        title: "Financial services",
        body: "Banks, insurers and fintech winning new account holders.",
      },
      {
        title: "Energy & mining",
        body: "Oil, gas and mining groups communicating scale and safety.",
      },
      {
        title: "Construction & property",
        body: "Developers and contractors filling projects and showing work.",
      },
      {
        title: "Education",
        body: "Schools and universities driving enrolments and open days.",
      },
      {
        title: "Health & clinics",
        body: "Hospitals and clinics bringing the right patients to you.",
      },
      {
        title: "Hospitality",
        body: "Hotels, restaurants and venues turning attention into bookings.",
      },
      {
        title: "Retail & FMCG",
        body: "Brands and distributors selling more with sharper branding.",
      },
      {
        title: "Foundations & NGOs",
        body: "Social organisations telling impact and mobilising supporters.",
      },
      {
        title: "Government institutions",
        body: "Ministries and municipalities communicating clearly with citizens.",
      },
      {
        title: "Agriculture",
        body: "Producers and processors reaching buyers across provinces.",
      },
      {
        title: "Logistics & transport",
        body: "Carriers and freight operators winning contracts and trust.",
      },
      {
        title: "Technology & startups",
        body: "Digital products and young companies building demand early.",
      },
    ],
  },
  logoMarquee: {
    heading: "We work with visionary brands of every size",
    subheading:
      "Trusted for digital marketing and web design projects across Angola’s provinces and industries.",
    slotBrand: "Your brand here",
    slotNext: "Be the next",
  },
  bentoGrid: {
    heading: "Everything Idealisa brings to the table",
    subheading:
      "Built for companies and organisations across Angola who want their brand to mean something.",
    learnMore: "Learn more",
    cells: [
      {
        title: "Brand strategy",
        body: "Positioning, identity and the ability to stand apart.",
      },
      {
        title: "Corporate communication",
        body: "Communication built as a strategic asset for trust.",
      },
      {
        title: "Digital marketing",
        body: "Campaigns that reach the right audience and convert.",
      },
      {
        title: "Web design",
        body: "Websites built to sell, not simply to exist.",
      },
      {
        title: "Technology solutions",
        body: "Digital solutions tailored to each project's needs.",
      },
      {
        title: "Project management",
        body: "Strategy turned into structured, delivered projects.",
      },
      {
        title: "Social media",
        body: "Content and community that keep the brand present.",
      },
      {
        title: "SEO & analytics",
        body: "Search visibility and reporting that guides decisions.",
      },
    ],
    strategy: {
      title: "BRAND STRATEGY & BRANDING",
      description:
        "We structure brands with clarity, identity and the ability to differentiate.",
      stats: {
        identity: "Identity",
        positioning: "Positioning",
        voice: "Voice",
        branding: "Branding",
      },
    },
    communication: {
      title: "CORPORATE COMMUNICATION",
      description:
        "We structure communication as a strategic asset to build trust, credibility and institutional value.",
      badgeAvailability: "24/7",
      badgeVoice: "Trusted Voice",
    },
    projectManagement: {
      title: "PROJECT MANAGEMENT",
      description:
        "We transform strategic directions into structured projects, coordinating and guiding them towards impact.",
    },
    marketing: {
      title: "TECHNOLOGY & DIGITAL SOLUTIONS",
      description:
        "Development and implementation of technology solutions tailored to the needs of each project.",
      statNumber: "1,000+",
      statLabel: "companies reached",
    },
    whyChoose: {
      title: "Why Choose IdealIsa",
      description:
        "We combine strategic thinking, business vision, communication, and execution to deliver tailored solutions and sustainable growth.",
      badgeConsistency: "Consistency",
      badgeImpact: "Impact",
      badgeInnovation: "Innovation",
    },
  },
  pricing: {
    heading: "INVESTMENT & SERVICE OFFERINGS",
    subheading:
      "We help businesses build reputation, communicate with clarity, and turn strategy into sustainable growth.",
    toggleBasic: "Basic",
    toggleCustom: "Custom",
    mostPopular: "Most Popular",
    plans: {
      starters: {
        name: "TO GET STARTED",
        focus: "Focus: Assessment + Strategic Direction",
        features: [
          "Business and brand analysis",
          "Identification of opportunities",
          "Action plan and strategic recommendations.",
        ],
      },
      growth: {
        name: "GROWTH",
        focus: "Focus: Strategy + Direction + Oversight",
        features: [
          "Brand positioning",
          "Strategic planning",
          "Communication oversight",
          "Execution and follow-up.",
        ],
      },
      established: {
        name: "ESTABLISHED",
        focus: "Focus: Strategy + Direction + Execution + Oversight",
        features: [
          "Business and brand assessment",
          "Brand positioning and strategic direction",
          "Strategic planning and action plan",
          "Communication strategy",
          "Content planning and management",
          "Creative direction",
          "Digital presence management",
          "Communication and execution oversight",
          "Monitoring, analysis and optimisation",
          "Coordination of partners and suppliers, when required.",
        ],
      },
    },
    cta: "Contact us via WhatsApp",
    custom: {
      name: "Custom Solutions",
      focus: "Focus: A plan built around you",
      description:
        "Every business is different. Tell us what your company needs, and we’ll build a tailored plan around it, no fixed packages, no guesswork. We’ll discuss your goals and send you a proposal designed specifically for you.",
      heading: "Let’s Talk",
      features: [
        "Tailored Strategy",
        "Custom Solution",
        "Direct Consultation",
        "An Investment Worth Making",
      ],
      cta: "Contact us on WhatsApp",
    },
  },
  finalCta: {
    heading: "Ready to grow your brand in Angola?",
    subheading:
      "Join the businesses across Angola building stronger brands with IdealIsa.",
    ctaPrimary: "See what we do",
    ctaSecondary: "Talk to us on WhatsApp",
    finePrint: "No fixed packages, every plan is built around your business.",
  },
  footer: {
    tagline: "Strategy that positions. Communication that strengthens.",
    columns: {
      solutions: {
        header: "Solutions",
        links: [
          "Brand Strategy & Branding",
          "Corporate Communication",
          "Project Management",
          "Technology & Digital Solutions",
        ],
      },
      services: {
        header: "Services",
        links: [
          "Website Development",
          "Web Design (UX/UI)",
          "Social Media Management",
          "Google Ads Management",
        ],
      },
      company: {
        header: "Company",
        links: ["About Idealisa", "Portfolio", "Blog", "Contact Us"],
      },
      legal: {
        header: "Legal",
        links: [
          "Privacy Policy",
          "Terms of Service",
          "Cookie Policy",
          "Testimonials",
        ],
      },
    },
    copyrightSuffix: "All rights reserved.",
  },
  servicePreview: {
    previewKicker: "What we do",
    previewHeading: "Services we provide",
    previewCta: "See more services",
    includesLabel: "What's included",
    outcomeLabel: "Typical outcome",
    blocks: [
      {
        group: "Social media advertising",
        desc: "Presence and paid reach on the platforms your audience actually opens every day.",
        outcome:
          "Audiences that grow on purpose and creative that earns its place in the feed.",
        items: [
          "Social media management",
          "Facebook advertising",
          "Instagram advertising",
          "LinkedIn advertising",
          "TikTok advertising",
          "YouTube advertising",
          "X (Twitter) advertising",
          "Snapchat advertising",
          "WhatsApp Business",
          "Influencer coordination",
        ],
        title: "Social media advertising",
      },
      {
        n: "02",
        title: "Corporate Communication",
        desc: "We structure communication as a strategic asset, to build trust, credibility and institutional value with clients, partners, regulators and staff.",
        includes: [
          "Communication strategy and messaging house",
          "Institutional narrative and leadership voice",
          "Press relations and media training",
          "Internal communication and culture campaigns",
          "Crisis and reputation protocols",
          "Editorial calendars and content governance",
          "Strategic communication and marketing advisory",
          "Institutional communication",
          "Reputation management",
          "Corporate image and positioning advisory",
          "Content strategy",
          "Campaign planning and coordination",
        ],
        outcome:
          "One voice across every channel, and a plan for what to say when something goes wrong.",
        items: [
          "Communication strategy and messaging house",
          "Institutional narrative and leadership voice",
          "Press relations and media training",
          "Internal communication and culture campaigns",
          "Crisis and reputation protocols",
          "Editorial calendars and content governance",
          "Strategic communication and marketing advisory",
          "Institutional communication",
          "Reputation management",
          "Corporate image and positioning advisory",
          "Content strategy",
          "Campaign planning and coordination",
        ],
      },
    ],
  },
  legalDocuments: [
    {
      eyebrow: "Legal",
      title: "Privacy Policy",
      sub: "How Idealisa collects, uses and protects the personal data of clients, candidates and visitors.",
      updated: "1 September 2026",
      sections: [
        {
          h: "1. Who we are",
          p: [
            "Idealisa is a brand strategy, corporate communication and project management company registered in Luanda, Angola, with offices at Maculusso, Rua Lourenço Mendes da Conceição. For any question about this policy, write to geral@idealisa.ao.",
          ],
        },
        {
          h: "2. What we collect",
          p: [
            "When you contact us we collect the information you choose to give: name, company, email address, telephone number and the content of your message. When you subscribe to our writing we collect your email address only.",
            "When you visit this site we collect basic technical data, pages viewed, approximate region, device type and referring source, used in aggregate to understand which of our writing is useful.",
          ],
        },
        {
          h: "3. Why we use it",
          p: [
            "To reply to enquiries, to prepare proposals, to deliver contracted work, to send the monthly letter you asked for, and to meet our legal and accounting obligations. We do not sell personal data, and we do not share it with third parties for their own marketing.",
          ],
        },
        {
          h: "4. Client confidentiality",
          p: [
            "Material shared with us during an engagement, strategy documents, financials, internal research, unpublished plans, is treated as confidential by default, whether or not a separate non-disclosure agreement exists. Access inside Idealisa is limited to the team working on that engagement.",
          ],
        },
        {
          h: "5. How long we keep it",
          p: [
            "Enquiry correspondence is kept for two years. Contractual and accounting records are kept for the period Angolan law requires. Newsletter subscriptions are kept until you unsubscribe, which you can do from any email we send.",
          ],
        },
        {
          h: "6. Your rights",
          p: [
            "You may ask us what personal data we hold about you, ask for it to be corrected, or ask for it to be deleted where we have no legal obligation to keep it. Write to geral@idealisa.ao and we will respond within thirty days.",
          ],
        },
      ],
    },
    {
      eyebrow: "Legal",
      title: "Terms of Service",
      sub: "The terms under which Idealisa provides strategy, communication, project management and technology services.",
      updated: "1 September 2026",
      sections: [
        {
          h: "1. Scope of work",
          p: [
            "Every engagement is governed by a written proposal setting out objectives, deliverables, timeline, responsibilities and fees. Where these terms and a signed proposal differ, the proposal prevails.",
          ],
        },
        {
          h: "2. Client responsibilities",
          p: [
            "Timely access to the information, people and approvals a project requires is part of the delivery. Where approvals are delayed, timelines move accordingly and we will confirm the new dates in writing rather than absorb the delay silently.",
          ],
        },
        {
          h: "3. Fees and payment",
          p: [
            "Fees are quoted as a fixed figure per phase unless stated otherwise. Invoices are payable within thirty days of issue. Third-party costs, media, production, licences, travel, are quoted separately and passed through without margin unless agreed.",
          ],
        },
        {
          h: "4. Intellectual property",
          p: [
            "On full payment, ownership of final approved deliverables transfers to the client. Working files, unselected concepts and our internal methods, frameworks and templates remain the property of Idealisa.",
            "Fonts, photography and software licensed from third parties remain subject to their own licences, which we will identify at handover.",
          ],
        },
        {
          h: "5. Confidentiality",
          p: [
            "Both parties undertake to keep confidential information private, during the engagement and after it ends. We may reference the client's name and published work in our portfolio unless the proposal states otherwise.",
          ],
        },
        {
          h: "6. Ending an engagement",
          p: [
            "Either party may end a retainer with thirty days' written notice. Work completed and costs committed up to that date remain payable. Fixed-scope projects may be paused once for up to sixty days without penalty.",
          ],
        },
        {
          h: "7. Governing law",
          p: [
            "These terms are governed by the law of the Republic of Angola. Disputes will be addressed first through good-faith discussion between the named leads on both sides.",
          ],
        },
      ],
    },
    {
      eyebrow: "Legal",
      title: "Cookie Policy",
      sub: "What this site stores on your device, why it stores it, and how to switch it off.",
      updated: "1 September 2026",
      sections: [
        {
          h: "1. What cookies are",
          p: [
            "Cookies are small text files a site places on your device so it can remember something between pages or between visits. Some are set by us, some by the services we use to understand how the site performs.",
          ],
        },
        {
          h: "2. What we use",
          p: [
            "Strictly necessary cookies keep the site working: your language choice and the state of forms you are filling in. Analytics cookies tell us which pages are read and where people leave, in aggregate. Marketing cookies are used only when a campaign is running, to avoid showing you the same advert repeatedly.",
          ],
        },
        {
          h: "3. Third parties",
          p: [
            "Analytics and advertising are handled by Google and Meta. Embedded content, a map or a video, may set cookies from that provider when it loads. We do not sell data to anyone.",
          ],
        },
        {
          h: "4. Turning them off",
          p: [
            "Every browser lets you block or delete cookies in its settings. Blocking the strictly necessary ones may break forms and language switching; blocking the rest changes nothing about how the site works for you.",
          ],
        },
        {
          h: "5. Questions",
          p: [
            "Write to geral@idealisa.ao and we will tell you exactly what is set on our side.",
          ],
        },
      ],
    },
  ],
  close: "Close",
};

type Translations = typeof en;

const ptAO: Translations = {
  navbar: {
    services: "Nossos Serviços",
    company: "Empresa",
    portfolio: "Portfólio",
    blog: "Blog",
    contact: "Contacte-nos",
  },
  hero: {
    headline: "A sua empresa de marketing digital em Luanda, Angola.",
    credYears: "6 anos",
    credRest:
      "de marketing digital estratégico, tecnologia e soluções digitais, estratégia de marca,",
    credRest2: "comunicação corporativa e gestão de projectos",
    credTrustLead: "Mais de 500 empresas",
    credTrustRest: "de todos os tamanhos confiam em nós",
    kicker: "Ajudamos marcas em Angola a crescer através de",
    body: "A tecnologia molda o futuro, e o marketing determina quem é visto nele. Este é o momento de reforçar a sua presença digital, alcançar o público certo e transformar atenção em crescimento sustentável.",
    chips: {
      googleAds: "Google Ads",
      analytics: "Google Analytics",
      bingAds: "Bing Ads",
      ppc: "PPC",
      facebookAds: "Facebook Ads",
      linkedin: "LinkedIn",
      youtube: "YouTube",
      social: "Campanhas Sociais",
      brand: "Estratégia de Marca",
      corporate: "Comunicação Corporativa",
      project: "Gestão de Projectos",
    },
    cta: "Agende uma consultoria gratuita",
    trustPrefix: "",
    trustNumber: "500+",
    trustSuffix: "empresas em Angola confiam em nós.",
    tiles: {
      team: "Equipa em acção",
      media: "Director de mídia",
      tech: "Director de tecnologia",
      exec: "Directora executiva",
    },
  },
  faq: {
    heading: "Perguntas sobre trabalhar connosco",
    sub: "O que as empresas perguntam antes da primeira conversa.",
    items: [
      {
        q: "O que faz a Idealisa, exactamente?",
        a: "Construímos marcas e a comunicação em torno delas: posicionamento e identidade, comunicação corporativa, marketing digital, web design, soluções tecnológicas e gestão de projectos. Uma só equipa leva o trabalho da estratégia à publicação.",
      },
      {
        q: "Trabalham com empresas fora de Luanda?",
        a: "Sim. Trabalhamos com empresas, instituições e organizações em todas as províncias de Angola, e com grupos internacionais que operam no país. As reuniões podem ser presenciais em Luanda ou remotas.",
      },
      {
        q: "Têm pacotes fixos?",
        a: "Não. Cada plano é construído em torno do negócio à nossa frente. Partimos do problema (posicionamento pouco claro, procura fraca, comunicação inconsistente) e definimos o âmbito a partir daí.",
      },
      {
        q: "Como começa normalmente um projecto?",
        a: "Com um diagnóstico. Uma conversa é normalmente suficiente para dizermos com honestidade se o problema é a marca, a mensagem ou a execução, e o que seria necessário para o resolver.",
      },
      {
        q: "Quanto tempo demora o trabalho?",
        a: "Um diagnóstico e a direcção estratégica levam algumas semanas. Programas de posicionamento, comunicação e execução decorrem ao longo de meses, porque os resultados de marca acumulam-se em vez de aparecerem de um dia para o outro.",
      },
      {
        q: "Em que língua vamos trabalhar?",
        a: "Português, inglês ou ambos. Os documentos de estratégia podem ser entregues bilingues desde o início, o que recomendamos a organizações com parceiros internacionais.",
      },
      {
        q: "Quanto custa?",
        a: "Depende do âmbito. Apresentamos proposta depois de entender o negócio, para que o preço reflicta o trabalho necessário, e não um pacote onde tem de encaixar. Verá sempre o que está incluído antes de decidir.",
      },
      {
        q: "Com quem vamos trabalhar?",
        a: "Com quem faz o trabalho. Fala directamente com os estrategas e criativos do seu projecto, sem uma camada de gestão de contas a passar mensagens.",
      },
      {
        q: "Podem trabalhar com a nossa equipa interna?",
        a: "Muitas vezes é a melhor solução. Definimos a estratégia e a direcção criativa e a sua equipa executa, com o nosso acompanhamento onde faz diferença.",
      },
      {
        q: "Como começamos?",
        a: "Envie uma frase sobre o negócio pelo WhatsApp, ou preencha o formulário desta página. Respondemos em um dia útil.",
      },
    ],
  },
  callPill: "Ligue",
  metrics: {
    kicker: "Em números",
    heading: "Construímos a sua marca como se fosse nossa",
    cta: "Agende uma consulta gratuita",
    rings: [
      {
        value: 500,
        suffix: "+",
        frac: 0.82,
        label: "Clientes servidos",
      },
      {
        value: 200,
        suffix: "+",
        frac: 0.7,
        label: "Websites lançados",
      },
      {
        value: 25000,
        suffix: "+",
        frac: 0.88,
        label: "Peças gráficas",
      },
      {
        value: 20,
        suffix: "+",
        frac: 0.62,
        label: "Sectores servidos",
      },
      {
        value: 6,
        suffix: "",
        frac: 0.55,
        label: "Anos de actividade",
      },
      {
        value: 200,
        suffix: "+",
        frac: 0.75,
        label: "Campanhas geridas",
      },
    ],
    pillars: [
      {
        title: "Marque presença",
        body: "Uma marca que as pessoas reconhecem, identidade, website e mensagem a funcionar como um só.",
      },
      {
        title: "Captação de tráfego",
        body: "O público certo encontrado e trazido até si através de pesquisa, redes sociais e mídia paga.",
      },
      {
        title: "Conversão de tráfego",
        body: "Atenção transformada em contactos, clientes e receita que se pode medir.",
      },
    ],
  },
  recent: {
    heading: "Ideias recentes da equipa Idealisa",
    sub: "Notas sobre marca, comunicação e crescimento em Angola",
    minRead: "min de leitura",
    readAll: "Ver o blog",
    empty: "Novos artigos em breve.",
  },
  reviews: {
    heading: "A confiança de mais de 500 empresas e instituições",
    sub: "Histórias reais das equipas com quem construímos marcas",
    ratingWord: "Excelente",
    basedOn: "Com base em 111 avaliações",
    items: [
      {
        name: "Jorge Furtado",
        date: "Março 2026",
        title: "Equipa técnica forte, conteúdos à mesma altura",
        body: "Têm uma equipa técnica verdadeiramente forte. O software que construíram para nós foi excelente, sólido, bem pensado e exactamente o que precisávamos. E os conteúdos estiveram à mesma altura. É raro encontrar um parceiro que acerta tanto na tecnologia como na parte criativa.",
      },
      {
        name: "Diana Sousa",
        date: "Maio 2026",
        title: "Cada investimento vale a pena",
        body: "Amo o trabalho deles, o profissionalismo e a qualidade. Com a Idealisa, cada investimento é um que vale mesmo a pena. Não entregam só algo bonito, entregam trabalho que traz retorno real ao negócio.",
      },
      {
        name: "Gracinda Carlos",
        date: "Janeiro 2026",
        title: "Transformaram a forma como a marca aparece",
        body: "Uma equipa jovem, criativa e verdadeiramente competente. Assumiram as nossas redes sociais e transformaram por completo a forma como a nossa marca aparece online, consistente, profissional e cheia de vida. Gosto muito do trabalho que fazem.",
      },
      {
        name: "Joelma Punque",
        date: "Junho 2026",
        title: "Resultados que se conseguem medir",
        body: "Profissionalismo, qualidade e resultados que se conseguem mesmo medir. A orientação deles deu uma direcção clara ao nosso marketing, e vi a diferença no negócio, e não apenas em publicações bonitas. Aconselham-nos como verdadeiros parceiros.",
      },
    ],
  },
  cases: {
    kicker: "Casos de sucesso",
    heading: "Os nossos casos de estudo em marketing",
    readAll: "Fale connosco sobre um projecto assim",
    items: [
      {
        slotId: "case-malamu",
        slotPlaceholder: "Coloque uma fotografia do Restaurante Malamu",
        client: "Restaurante Malamu",
        award:
          "Estratégia integrada de marketing para fortalecer o posicionamento, a presença digital e os resultados comerciais de um restaurante em Luanda.",
        term: "Duração do trabalho: 20 meses",
        stats: [
          {
            value: "+90%",
            label: "Crescimento em seguidores",
          },
          {
            value: "+15%",
            label: "Crescimento na facturação",
          },
          {
            value: "20",
            label: "Campanhas entregues",
          },
          {
            value: "4",
            label: "Momentos de consumo activados",
          },
        ],
        blocks: [
          {
            label: "Ponto A",
            body: "Um restaurante estabelecido, com boa comida mas pouca visibilidade, sem marca consistente e sem presença digital real.",
          },
          {
            label: "Objectivo",
            body: "Crescer a comunidade digital, fortalecer o posicionamento e a reputação e aumentar a facturação em todos os momentos de consumo.",
          },
          {
            label: "Solução",
            body: "Primeiro a estratégia: pesquisa, posicionamento, linha editorial e tom de voz, depois conteúdo criativo, campanhas, mídia paga e uma presença mais forte.",
          },
          {
            label: "Os resultados",
            body: "Seguidores +90%, facturação +15% em 20 meses, construídos com marketing e as equipas comerciais a trabalhar em conjunto.",
          },
        ],
      },
      {
        slotId: "case-fcks",
        slotPlaceholder: "Coloque a imagem da campanha",
        client: "FCKS — Fábrica de Cimento do Kwanza Sul",
        award:
          "Estratégia integrada de marketing e comunicação para fortalecer o posicionamento, a visibilidade e a reputação de uma cimenteira do Kwanza Sul.",
        term: "Período de trabalho: 24 meses",
        stats: [
          {
            value: "+70%",
            label: "Crescimento de seguidores",
          },
          {
            value: "8",
            label: "Campanhas realizadas",
          },
          {
            value: "3",
            label: "Províncias alcançadas",
          },
          {
            value: "480",
            label: "Conteúdos produzidos",
          },
        ],
        blocks: [
          {
            label: "Ponto A",
            body: "Uma marca de cimento estabelecida que precisava de posicionamento mais forte, maior visibilidade e comunicação mais consistente.",
          },
          {
            label: "Objectivo",
            body: "Fortalecer a reputação e o posicionamento da marca, aumentar a notoriedade e criar uma relação mais próxima e duradoura com a audiência e os consumidores.",
          },
          {
            label: "Solução",
            body: "Primeiro o reposicionamento, depois uma estratégia de comunicação definida, conteúdos e campanhas estratégicas, e uma presença digital mais forte em torno da marca.",
          },
          {
            label: "Os resultados",
            body: "Os seguidores cresceram +70% em 24 meses — transformando consumidores Yetu em seguidores, apoiadores e defensores da FCKS.",
          },
        ],
      },
    ],
  },
  talk: {
    kicker: "Fale connosco",
    sectionHeading: "Comece uma conversa connosco",
    heading: "Vamos falar do seu negócio, sim?",
    sub: "Conte-nos do seu negócio e do que quer que ele se torne. Seremos directos sobre o que o trabalho exige.",
    callLine: "Ligue-nos directamente ou preencha o formulário",
    name: "Nome completo",
    email: "Email",
    company: "Empresa ou organização",
    phone: "Telefone",
    helpWith: "Em que podemos ajudar?",
    message: "Mensagem",
    submit: "Continuar no WhatsApp",
    extras: ["eCommerce e pagamentos", "Integração de IA"],
    thanks: "Obrigado, respondemos em um dia útil.",
  },
  whoWeAre: {
    heading: "Quem somos",
    lede: "Vivemos em Luanda, trabalhamos em Luanda e sabemos o que é preciso para fazer crescer uma marca neste mercado.",
    p1: "A Idealisa é uma empresa de marketing digital e estratégia de marca com base em Luanda. Há seis anos ajudamos empresas, instituições e organizações em todo o país a transformar atenção em receita, primeiro a estratégia, depois uma execução que se sustenta no mercado.",
    p2: "Trabalhamos em estratégia de marca, comunicação corporativa, marketing digital, web design, soluções tecnológicas e gestão de projectos, para que uma só equipa leve o trabalho do posicionamento à publicação. Cada plano é construído em torno do negócio à nossa frente, nunca de um pacote fixo.",
    cta: "Conheça-nos",
  },
  whoWeWorkWith: {
    heading: "Com Quem Trabalhamos",
    subheading:
      "Somos parceiros de organizações médias, grandes e empresariais que procuram um parceiro de marketing digital e crescimento a longo prazo.",
    videoTitle: "Veja o trabalho em movimento",
    videoNote:
      "Pequenos filmes dos sectores que servimos, finanças, saúde, instituições públicas e mais.",
    cards: [
      {
        title: "Serviços financeiros",
        body: "Bancos, seguradoras e fintech que conquistam novos clientes.",
      },
      {
        title: "Energia e minas",
        body: "Petróleo, gás e mineração que comunicam escala e segurança.",
      },
      {
        title: "Construção e imóveis",
        body: "Promotores e construtoras que vendem projectos e mostram obra.",
      },
      {
        title: "Educação",
        body: "Escolas e universidades que aumentam matrículas e visitas.",
      },
      {
        title: "Saúde e clínicas",
        body: "Hospitais e clínicas que atraem os pacientes certos.",
      },
      {
        title: "Hotelaria",
        body: "Hotéis, restaurantes e espaços que geram reservas directas.",
      },
      {
        title: "Retalho e consumo",
        body: "Marcas e distribuidores que vendem mais com melhor branding.",
      },
      {
        title: "Fundações e ONG",
        body: "Organizações sociais que contam impacto e mobilizam apoiantes.",
      },
      {
        title: "Instituições públicas",
        body: "Ministérios e municípios que comunicam com clareza aos cidadãos.",
      },
      {
        title: "Agricultura",
        body: "Produtores e transformadores que alcançam mais compradores.",
      },
      {
        title: "Logística e transportes",
        body: "Transportadoras e operadores que ganham contratos e confiança.",
      },
      {
        title: "Tecnologia e startups",
        body: "Produtos digitais e empresas jovens que criam procura cedo.",
      },
    ],
  },
  logoMarquee: {
    heading: "Trabalhamos com marcas visionárias de todos os tamanhos",
    subheading:
      "A confiança de projectos de marketing digital e web design em todas as províncias e sectores de Angola.",
    slotBrand: "A sua marca aqui",
    slotNext: "Seja a próxima",
  },
  bentoGrid: {
    heading: "Tudo o que a Idealisa traz para a mesa",
    subheading:
      "Criado para empresas e organizações em Angola que querem que a sua marca tenha significado.",
    learnMore: "Saber mais",
    cells: [
      {
        title: "Estratégia de marca",
        body: "Posicionamento, identidade e capacidade de diferenciar.",
      },
      {
        title: "Comunicação corporativa",
        body: "Comunicação como activo estratégico que gera confiança.",
      },
      {
        title: "Marketing digital",
        body: "Campanhas que alcançam o público certo e convertem.",
      },
      {
        title: "Web design",
        body: "Sites feitos para vender, não apenas para existir.",
      },
      {
        title: "Soluções tecnológicas",
        body: "Soluções digitais ajustadas às necessidades do projecto.",
      },
      {
        title: "Gestão de projectos",
        body: "Estratégia transformada em projectos estruturados.",
      },
      {
        title: "Redes sociais",
        body: "Conteúdo e comunidade que mantêm a marca presente.",
      },
      {
        title: "SEO e analítica",
        body: "Visibilidade na pesquisa e dados que guiam decisões.",
      },
    ],
    strategy: {
      title: "ESTRATÉGIA DE MARCA E BRANDING",
      description:
        "Estruturamos marcas com clareza, identidade e capacidade de diferenciação.",
      stats: {
        identity: "Identidade",
        positioning: "Posicionamento",
        voice: "Voz",
        branding: "Branding",
      },
    },
    communication: {
      title: "COMUNICAÇÃO CORPORATIVA",
      description:
        "Estruturamos a comunicação como um activo estratégico para gerar confiança, credibilidade e valor institucional.",
      badgeAvailability: "24/7",
      badgeVoice: "Voz de Confiança",
    },
    projectManagement: {
      title: "GESTÃO DE PROJECTOS",
      description:
        "Transformamos orientações estratégicas em projectos estruturados, coordenamos e orientamos para o impacto.",
    },
    marketing: {
      title: "TECNOLOGIA E SOLUÇÕES DIGITAIS",
      description:
        "Desenvolvimento e implementação de soluções tecnológicas adequadas a cada projecto.",
      statNumber: "1.000+",
      statLabel: "empresas alcançadas",
    },
    whyChoose: {
      title: "Porquê Escolher a IdealIsa",
      description:
        "Combinamos pensamento estratégico, visão de negócio, comunicação e execução para entregar soluções personalizadas e crescimento sustentável.",
      badgeConsistency: "Consistência",
      badgeImpact: "Impacto",
      badgeInnovation: "Inovação",
    },
  },
  pricing: {
    heading: "O INVESTIMENTO E OFERTAS PARA OS SERVIÇOS",
    subheading:
      "Ajudamos empresas a construir reputação, comunicar com clareza e transformar estratégia em crescimento sustentável.",
    toggleBasic: "Base",
    toggleCustom: "Personalizado",
    mostPopular: "Mais Popular",
    plans: {
      starters: {
        name: "PARA COMEÇAR",
        focus: "Foco: Diagnóstico + Direcção Estratégica",
        features: [
          "Análise do negócio e da marca",
          "Identificação de oportunidades",
          "Plano de acção e recomendações estratégicas.",
        ],
      },
      growth: {
        name: "ESCALAR",
        focus: "Foco: Estratégia + Direcção + Supervisão",
        features: [
          "Posicionamento de marca",
          "Planeamento estratégico",
          "Supervisão da comunicação",
          "Execução e acompanhamento.",
        ],
      },
      established: {
        name: "CONSOLIDAÇÃO",
        focus: "Foco: Estratégia + Direcção + Execução + Supervisão",
        features: [
          "Diagnóstico do negócio e da marca",
          "Posicionamento e direcção estratégica",
          "Planeamento estratégico e plano de acção",
          "Estratégia de comunicação",
          "Planeamento e gestão de conteúdos",
          "Direcção criativa",
          "Gestão da presença digital",
          "Supervisão da comunicação e execução",
          "Monitorização, análise e optimização",
          "Coordenação de parceiros e fornecedores, quando necessário.",
        ],
      },
    },
    cta: "Contacte-nos pelo WhatsApp",
    custom: {
      name: "Soluções Personalizadas",
      focus: "Foco: Um plano à sua medida",
      description:
        "Cada negócio é diferente. Diga-nos o que a sua empresa precisa e criaremos um plano à medida, sem pacotes fixos, sem suposições. Falaremos sobre os seus objectivos e enviaremos uma proposta desenvolvida especificamente para si.",
      heading: "Vamos Conversar",
      features: [
        "Estratégia à medida",
        "Solução personalizada",
        "Consultoria directa",
        "Investimento que vale a pena",
      ],
      cta: "Contacte-nos pelo WhatsApp",
    },
  },
  finalCta: {
    heading: "Pronto para Fazer Crescer a Sua Marca em Angola?",
    subheading:
      "Junte-se às empresas em Angola que estão a construir marcas mais fortes com a IdealIsa.",
    ctaPrimary: "Veja o Nosso Trabalho",
    ctaSecondary: "Contactar via WhatsApp",
    finePrint:
      "Sem pacotes fixos, cada plano é construído à volta do seu negócio.",
  },
  footer: {
    tagline: "Estratégia que posiciona. Comunicação que fortalece.",
    columns: {
      solutions: {
        header: "Soluções",
        links: [
          "Estratégia & Branding",
          "Comunicação Corporativa",
          "Gestão de Projectos",
          "Tecnologia & Soluções Digitais",
        ],
      },
      services: {
        header: "Serviços",
        links: [
          "Desenvolvimento de Websites",
          "Web Design (UX/UI)",
          "Gestão de Redes Sociais",
          "Gestão de Google Ads",
        ],
      },
      company: {
        header: "Empresa",
        links: ["Sobre a Idealisa", "Portfólio", "Blog", "Contacte-nos"],
      },
      legal: {
        header: "Legal",
        links: [
          "Política de Privacidade",
          "Termos de Serviço",
          "Política de Cookies",
          "Testemunhos",
        ],
      },
    },
    copyrightSuffix: "Todos os direitos reservados.",
  },
  servicePreview: {
    previewKicker: "O que fazemos",
    previewHeading: "Serviços que prestamos",
    previewCta: "Ver mais serviços",
    includesLabel: "O que inclui",
    outcomeLabel: "Resultado típico",
    blocks: [
      {
        group: "Publicidade em redes sociais",
        desc: "Presença e alcance pago nas plataformas que o seu público abre todos os dias.",
        outcome:
          "Audiências que crescem com intenção e criativos que merecem o lugar no feed.",
        items: [
          "Gestão de redes sociais",
          "Publicidade Facebook",
          "Publicidade Instagram",
          "Publicidade LinkedIn",
          "Publicidade TikTok",
          "Publicidade YouTube",
          "Publicidade X (Twitter)",
          "Publicidade Snapchat",
          "WhatsApp Business",
          "Coordenação de influenciadores",
        ],
        title: "Publicidade em redes sociais",
      },
      {
        n: "02",
        title: "Comunicação Corporativa",
        desc: "Estruturamos a comunicação como um activo estratégico, para gerar confiança, credibilidade e valor institucional junto de clientes, parceiros, reguladores e colaboradores.",
        includes: [
          "Estratégia de comunicação e casa de mensagens",
          "Narrativa institucional e voz da liderança",
          "Relações com a imprensa e media training",
          "Comunicação interna e campanhas de cultura",
          "Protocolos de crise e reputação",
          "Calendários editoriais e governação de conteúdos",
          "Assessoria estratégica de comunicação e marketing",
          "Comunicação institucional",
          "Gestão de reputação",
          "Assessoria de imagem e posicionamento corporativo",
          "Estratégia de conteúdos",
          "Planeamento e coordenação de campanhas",
        ],
        outcome:
          "Uma só voz em todos os canais e um plano para o que dizer quando algo corre mal.",
        items: [
          "Estratégia de comunicação e casa de mensagens",
          "Narrativa institucional e voz da liderança",
          "Relações com a imprensa e media training",
          "Comunicação interna e campanhas de cultura",
          "Protocolos de crise e reputação",
          "Calendários editoriais e governação de conteúdos",
          "Assessoria estratégica de comunicação e marketing",
          "Comunicação institucional",
          "Gestão de reputação",
          "Assessoria de imagem e posicionamento corporativo",
          "Estratégia de conteúdos",
          "Planeamento e coordenação de campanhas",
        ],
      },
    ],
  },
  legalDocuments: [
    {
      eyebrow: "Legal",
      title: "Política de Privacidade",
      sub: "Como a Idealisa recolhe, utiliza e protege os dados pessoais de clientes, candidatos e visitantes.",
      updated: "1 de Setembro de 2026",
      sections: [
        {
          h: "1. Quem somos",
          p: [
            "A Idealisa é uma empresa de estratégia de marca, comunicação corporativa e gestão de projectos registada em Luanda, Angola, com escritórios no Maculusso, Rua Lourenço Mendes da Conceição. Para qualquer questão sobre esta política, escreva para geral@idealisa.ao.",
          ],
        },
        {
          h: "2. O que recolhemos",
          p: [
            "Quando nos contacta, recolhemos a informação que decide dar-nos: nome, empresa, endereço de email, número de telefone e o conteúdo da sua mensagem. Quando subscreve os nossos textos, recolhemos apenas o endereço de email.",
            "Quando visita este site, recolhemos dados técnicos básicos, páginas vistas, região aproximada, tipo de dispositivo e origem da visita, usados de forma agregada para perceber quais dos nossos textos são úteis.",
          ],
        },
        {
          h: "3. Porque a utilizamos",
          p: [
            "Para responder a pedidos, preparar propostas, entregar trabalho contratado, enviar a carta mensal que solicitou e cumprir as nossas obrigações legais e contabilísticas. Não vendemos dados pessoais nem os partilhamos com terceiros para marketing próprio.",
          ],
        },
        {
          h: "4. Confidencialidade do cliente",
          p: [
            "O material partilhado connosco durante um trabalho, documentos de estratégia, informação financeira, investigação interna, planos não publicados, é tratado como confidencial por defeito, exista ou não um acordo de confidencialidade separado. O acesso dentro da Idealisa está limitado à equipa afecta a esse trabalho.",
          ],
        },
        {
          h: "5. Durante quanto tempo guardamos",
          p: [
            "A correspondência de contacto é guardada durante dois anos. Os registos contratuais e contabilísticos são guardados pelo período exigido pela lei angolana. As subscrições da newsletter mantêm-se até cancelar, o que pode fazer a partir de qualquer email que enviamos.",
          ],
        },
        {
          h: "6. Os seus direitos",
          p: [
            "Pode pedir-nos que dados pessoais seus detemos, pedir a sua correcção ou pedir a sua eliminação quando não exista obrigação legal de os manter. Escreva para geral@idealisa.ao e responderemos no prazo de trinta dias.",
          ],
        },
      ],
    },
    {
      eyebrow: "Legal",
      title: "Termos de Serviço",
      sub: "Os termos ao abrigo dos quais a Idealisa presta serviços de estratégia, comunicação, gestão de projectos e tecnologia.",
      updated: "1 de Setembro de 2026",
      sections: [
        {
          h: "1. Âmbito do trabalho",
          p: [
            "Cada trabalho é regido por uma proposta escrita que define objectivos, entregáveis, calendário, responsabilidades e honorários. Havendo divergência entre estes termos e uma proposta assinada, prevalece a proposta.",
          ],
        },
        {
          h: "2. Responsabilidades do cliente",
          p: [
            "O acesso atempado à informação, às pessoas e às aprovações que um projecto exige faz parte da entrega. Havendo atraso nas aprovações, os prazos deslocam-se em conformidade e confirmaremos as novas datas por escrito em vez de absorver o atraso em silêncio.",
          ],
        },
        {
          h: "3. Honorários e pagamento",
          p: [
            "Os honorários são apresentados como valor fixo por fase, salvo indicação em contrário. As facturas são pagáveis no prazo de trinta dias após emissão. Custos de terceiros, media, produção, licenças, deslocações, são orçamentados à parte e debitados sem margem, salvo acordo diferente.",
          ],
        },
        {
          h: "4. Propriedade intelectual",
          p: [
            "Com o pagamento integral, a propriedade dos entregáveis finais aprovados transfere-se para o cliente. Ficheiros de trabalho, conceitos não seleccionados e os nossos métodos, modelos e ferramentas internas permanecem propriedade da Idealisa.",
            "Tipos de letra, fotografia e software licenciados a terceiros mantêm-se sujeitos às respectivas licenças, que identificaremos no momento da entrega.",
          ],
        },
        {
          h: "5. Confidencialidade",
          p: [
            "Ambas as partes se obrigam a manter privada a informação confidencial, durante o trabalho e depois do seu termo. Podemos referir o nome do cliente e o trabalho publicado no nosso portefólio, salvo indicação em contrário na proposta.",
          ],
        },
        {
          h: "6. Terminar um trabalho",
          p: [
            "Qualquer das partes pode terminar uma avença com trinta dias de aviso escrito. O trabalho concluído e os custos assumidos até essa data permanecem devidos. Projectos de âmbito fixo podem ser suspensos uma vez, até sessenta dias, sem penalização.",
          ],
        },
        {
          h: "7. Lei aplicável",
          p: [
            "Estes termos regem-se pela lei da República de Angola. Os litígios serão tratados, em primeiro lugar, através de discussão de boa-fé entre os responsáveis designados de ambas as partes.",
          ],
        },
      ],
    },
    {
      eyebrow: "Legal",
      title: "Política de Cookies",
      sub: "O que este site guarda no seu dispositivo, porquê, e como desligar.",
      updated: "1 de Setembro de 2026",
      sections: [
        {
          h: "1. O que são cookies",
          p: [
            "Cookies são pequenos ficheiros de texto que um site coloca no seu dispositivo para recordar algo entre páginas ou entre visitas. Alguns são definidos por nós, outros pelos serviços que usamos para perceber o desempenho do site.",
          ],
        },
        {
          h: "2. O que utilizamos",
          p: [
            "Os cookies estritamente necessários mantêm o site a funcionar: a sua escolha de idioma e o estado dos formulários que está a preencher. Os cookies de analítica dizem-nos que páginas são lidas e onde as pessoas saem, de forma agregada. Os cookies de marketing são usados apenas quando há campanha activa, para não lhe mostrar o mesmo anúncio repetidamente.",
          ],
        },
        {
          h: "3. Terceiros",
          p: [
            "A analítica e a publicidade são geridas pela Google e pela Meta. Conteúdo incorporado, um mapa ou um vídeo, pode definir cookies desse fornecedor ao carregar. Não vendemos dados a ninguém.",
          ],
        },
        {
          h: "4. Como desligar",
          p: [
            "Qualquer navegador permite bloquear ou apagar cookies nas definições. Bloquear os estritamente necessários pode quebrar formulários e a troca de idioma; bloquear os restantes não altera nada no funcionamento do site.",
          ],
        },
        {
          h: "5. Dúvidas",
          p: [
            "Escreva para geral@idealisa.ao e dizemos-lhe exactamente o que é definido do nosso lado.",
          ],
        },
      ],
    },
  ],
  close: "Fechar",
};

export const translations: Record<Language, Translations> = {
  en,
  "pt-AO": ptAO,
};
export type { Translations };
