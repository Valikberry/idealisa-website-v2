// Service-detail (smm / brand / pm) copy, transcribed exactly from
// design-reference's PAGES.en.smm/brand/pm and PAGES["pt-AO"].smm/brand/pm,
// plus the shared UI micro-copy those pages use (design-reference's
// UI[lang] object) — "design-reference/Idealisa website design (2)/Idealisa Site.dc.html".
import type { Language } from "@/lib/translations";
import type { RoutePageKey } from "@/lib/routes";

export type ServiceDetailKey = "smm" | "brand" | "pm";

export type ServiceChip = { icon: string; label: string };
export type ServicePillar = { icon: string; title: string; body: string };
export type RecordStat = { value: string; label: string };
export type TitledBody = { title: string; body: string };
export type ProcessStep = { n: string; title: string; body: string };
export type PlatformItem = { name: string; body: string };
export type FaqItem = { q: string; a: string };

export type RelatedService = { label: string; route: RoutePageKey };

export type ServiceDetailContent = {
  serviceName: string;
  serviceType: string;
  headline: string;
  credYears: string;
  credRest: string;
  credTrust: string;
  kicker: string;
  ctaPrimary: string;
  partnerNote: string;
  intro: string;
  chips: ServiceChip[];
  solutionsKicker: string;
  solutionsHeading: string;
  solutionsSub: string;
  pillars: ServicePillar[];
  record: RecordStat[];
  servicesKicker: string;
  servicesHeading: string;
  servicesSub: string;
  services: TitledBody[];
  bandHeading: string;
  bandSub: string;
  bandCta: string;
  processKicker: string;
  processHeading: string;
  processSub: string;
  process: ProcessStep[];
  whyKicker: string;
  whyHeading: string;
  whySub: string;
  why: TitledBody[];
  platformsKicker: string;
  platformsHeading: string;
  platformsSub: string;
  platforms: PlatformItem[];
  /** Only brand and pm define this in the reference; smm falls back to `ui.adServices`. */
  relatedServices?: RelatedService[];
  faqHeading: string;
  faq: FaqItem[];
};

/** Every service-detail page's silo route, for the "other services" sidebar card. */
export const SERVICE_DETAIL_ROUTE_KEYS: Record<ServiceDetailKey, RoutePageKey> = {
  smm: "smm",
  brand: "brand",
  pm: "pm",
};

const smmEn: ServiceDetailContent = {
  serviceName: "Social Media Management in Angola",
  serviceType: "Social media management",
  headline: "Your social media management company in Luanda, Angola.",
  credYears: "6 years",
  credRest: "of strategic social media management, content creation, paid campaigns, community growth and creative that turns followers into customers.",
  credTrust: "TRUSTED BY 500+ COMPANIES OF EVERY SIZE",
  kicker: "We manage Angolan brands across",
  ctaPrimary: "Schedule a free strategy call",
  partnerNote: "Trusted by 500+ companies in Angola.",
  intro: "Idealisa is one of the top social media marketing firms in Angola that can help brands thrive, connect, and convert through social media marketing. With a combination of smart strategies and high-quality creative assets, we use social media channels to drive your business forward.",
  chips: [
    { icon: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.5 6.5v.01", label: "Instagram" },
    { icon: "M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z", label: "Facebook" },
    { icon: "M15 4v9.5a3.5 3.5 0 1 1-3.5-3.5M15 4a5 5 0 0 0 5 5", label: "TikTok" },
    { icon: "M3 3h18v18H3zM8 11v6M8 7.5v.01M12 17v-4a2 2 0 0 1 4 0v4", label: "LinkedIn" },
    { icon: "m8 6 10 6-10 6z", label: "YouTube" },
  ],
  solutionsKicker: "Our approach",
  solutionsHeading: "Strategic Social Media Solutions for Businesses in Angola",
  solutionsSub: "We create social media marketing strategies that reflect the goals of your business. Each one is built on solid analysis, creative thinking, and an established plan for success. And it all comes together in social media efforts that are as dedicated to success as your business is.",
  pillars: [
    { icon: "M6 40V22M17 40V10M28 40V28M39 40V16", title: "Data-Driven Campaigns That Deliver Measurable Results", body: "We start every strategy with data, not assumptions. It helps to make sure that your investment is making an impact." },
    { icon: "M24 8v10M24 30v10M10 24h10M28 24h10M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8", title: "Social Media Growth Across Every Major Platform", body: "Our strategies work to grow your brand on all the important platforms." },
    { icon: "M9 12h30v28H9zM9 20h30M17 8v8M31 8v8M17 28h6M17 34h14", title: "Strategic Content Planning That Keeps Your Brand Active", body: "We plan and schedule content in advance to keep your social media presence consistent, relevant, and aligned with your brand goals." },
  ],
  record: [
    { value: "200+", label: "Projects" },
    { value: "6+", label: "Years of Experience" },
    { value: "95%", label: "Client Retention Rate" },
    { value: "99%", label: "On-Time Delivery" },
  ],
  servicesKicker: "Services",
  servicesHeading: "Our Social Media Marketing Services in Angola",
  servicesSub: "All social media services are available from our agency under one roof. From the strategic approach to the creation of content, everything will be covered. Everything will depend on your needs and target audience.",
  services: [
    { title: "Social Media Strategy Development", body: "It is crucial for a company to develop a well-thought-out strategy for its social media activities that will become the backbone of every single action." },
    { title: "Social Media Management", body: "The effective daily management of social media accounts allows brands to achieve constant visibility online." },
    { title: "Content Creation and Creative Design", body: "Creative design is crucial when creating social media content, since this is what determines how much attention people pay." },
    { title: "Social Media Advertising and Paid Campaigns", body: "Paid campaigns on social media can be very efficient and help a business to achieve its marketing goals." },
    { title: "Community Management", body: "This stage implies interaction with customers and building relationships with them through engaging with their messages, comments, etc." },
    { title: "Influencer Marketing Services", body: "Influencer marketing is a popular approach to advertising products on social media channels." },
    { title: "Video Production and Reels Content", body: "Short videos posted in stories are one of the most popular types of posts that can help brands to grow quickly." },
    { title: "Social Media Analytics and Reporting", body: "Performance tracking helps to see whether an advertising campaign is effective or not." },
  ],
  bandHeading: "Ready to Grow Your Brand with a Trusted Social Media Agency in Angola?",
  bandSub: "Ready to turn social media into real business growth? Book a free consultation and let's talk about where your brand can go.",
  bandCta: "GET YOUR FREE CONSULTATION",
  processKicker: "Process",
  processHeading: "Social Media Marketing Process",
  processSub: "The key to our success lies in converting goals into growth through well-defined stages. From research to strategies to implementation, we ensure that everything is done with utmost clarity. This helps ensure effectiveness and continuous improvement.",
  process: [
    { n: "01", title: "Understanding Your Business Goals", body: "This step involves understanding your goals and success criteria. This information influences the entire process of your marketing strategy." },
    { n: "02", title: "Audience and Competitor Research", body: "This stage involves analyzing your target audience and your competitors. These elements are used to determine true opportunities for you." },
    { n: "03", title: "Social Media Strategy Development", body: "In this stage, we create a strategy that takes into consideration your target social media channels. This strategy forms the basis for the upcoming stages of the project." },
    { n: "04", title: "Content Planning and Creation", body: "In this stage, we generate plans for creating specific content. The content created at this stage helps your business achieve its objectives." },
    { n: "05", title: "Campaign Execution and Optimization", body: "This stage includes launching of your campaigns as well as optimizing them continuously throughout their course. This allows us to get the best possible value from your budget." },
    { n: "06", title: "Performance Monitoring and Reporting", body: "In this stage, we monitor how successful your campaigns perform and report on it transparently." },
  ],
  whyKicker: "Why us",
  whyHeading: "Why Choose Idealisa as Your Social Media Marketing Company in Angola?",
  whySub: "We work as a true partner invested in your growth. Our approach blends creativity, strategy, and data to deliver real results. Here's what sets us apart.",
  why: [
    { title: "Experienced Social Media Specialists", body: "Our team lives and breathes social media every day. That experience helps us spot what works and act on it fast." },
    { title: "Customized Strategies for Every Business", body: "We never rely on one-size-fits-all formulas. Each strategy is tailored to your specific business and audience." },
    { title: "Data-Driven Marketing Approach", body: "We base every decision on real performance data. This ensures your budget is always spent where it counts." },
    { title: "Creative Content That Builds Engagement", body: "We create content people actually want to engage with. Strong creative is what turns scrolling into action." },
    { title: "Transparent Reporting and Communication", body: "We keep you informed with clear, honest reporting. You'll always know what we're doing and why it matters." },
    { title: "Performance-Focused Campaign Management", body: "We manage every campaign with results in mind. Our focus is always on driving measurable outcomes." },
    { title: "Multi-Platform Expertise", body: "We know how to grow brands across every major platform. This breadth keeps your presence consistent and effective." },
    { title: "Proven Track Record Across Industries", body: "We've delivered results for businesses in many sectors. That experience helps us build campaigns that work." },
  ],
  platformsKicker: "Platforms",
  platformsHeading: "Platforms We Manage",
  platformsSub: "We manage your brand across every major social platform. Each one plays a different role in reaching and engaging your audience. We build a strategy that uses the right mix for your goals.",
  platforms: [
    { name: "Instagram", body: "We build engaging Instagram presences with strong visual content. It's ideal for brand-building, storytelling, and reaching younger audiences." },
    { name: "Facebook", body: "We manage Facebook pages and campaigns that reach broad audiences. It remains powerful for community, advertising, and engagement." },
    { name: "LinkedIn", body: "We grow professional brands and B2B presences on LinkedIn. It's the platform for authority, networking, and lead generation." },
    { name: "TikTok", body: "We create short-form video content built for TikTok's audience. It's one of the fastest ways to reach and engage new users." },
    { name: "YouTube", body: "We help brands grow through video content on YouTube. Long-form and short-form video build authority and reach." },
    { name: "X (Twitter)", body: "We manage real-time engagement and conversation on X. It's ideal for news, updates, and direct audience interaction." },
    { name: "WhatsApp Business", body: "We set up catalogues, quick replies and response flows on WhatsApp. In Angola it is where most enquiries actually turn into sales." },
    { name: "Pinterest", body: "We build visual discovery presences on Pinterest. It's powerful for retail, lifestyle, and inspiration-led brands." },
  ],
  faqHeading: "Social Media Marketing FAQs",
  faq: [
    { q: "What does a social media marketing agency in Angola do?", a: "It decides the message, produces the content, publishes it, runs the paid campaigns behind it and reports on the result. The posting is the visible part; the decision about what to post is the work." },
    { q: "How much do social media marketing services cost in Angola?", a: "It depends on how much original material is produced, how many platforms you are present on, and whether someone senior is deciding the message. We quote after looking at your accounts, never before." },
    { q: "Which social media platforms are best for my business?", a: "For most companies here: Instagram, Facebook and WhatsApp first. LinkedIn if you sell to institutions, TikTok and YouTube when there is something worth filming." },
    { q: "Why should I hire a social media marketing company in Angola?", a: "Because a local team knows what a brand can say in this market, in Portuguese, and how fast audiences here expect an answer." },
    { q: "How long does it take to see results from social media marketing?", a: "Engagement and message volume usually move within two months. Positioning and reputation take six to twelve, which is why we plan in years, not quarters." },
    { q: "What industries benefit from social media marketing?", a: "Hospitality, retail, property, education, health, industry and institutions have all worked for us here. What matters is having something to say, not the sector." },
    { q: "Do you offer paid social media advertising services?", a: "Yes. Meta, TikTok and YouTube campaigns are planned together with the organic content, so the budget amplifies one clear message." },
    { q: "Can social media marketing generate leads and sales?", a: "It already does in this market, mostly through direct messages and WhatsApp. What decides the number is how fast someone answers and what they say." },
    { q: "How often should businesses post on social media?", a: "Consistency beats volume. Three to five well-made posts a week, planned in advance, outperform daily posts with nothing to say." },
    { q: "What is included in social media management services?", a: "Strategy, content planning, production, publishing, community management, paid campaigns and one monthly report leadership can actually read." },
  ],
};

const brandEn: ServiceDetailContent = {
  serviceName: "Brand Strategy and Branding in Angola",
  serviceType: "Brand strategy",
  headline: "Your brand strategy and branding company in Luanda, Angola.",
  credYears: "6 years",
  credRest: "of brand strategy, positioning, naming, visual identity and brand systems built for companies that have to be taken seriously in this market.",
  credTrust: "TRUSTED BY 500+ COMPANIES OF EVERY SIZE",
  kicker: "We build Angolan brands through",
  ctaPrimary: "Schedule a free strategy call",
  partnerNote: "Trusted by 500+ companies in Angola.",
  intro: "Idealisa is a brand strategy and branding company in Angola that decides what a business stands for before deciding how it looks. We work from diagnosis and positioning through to naming, identity and the guidelines that keep the brand consistent everywhere it appears.",
  chips: [
    { icon: "M24 8v10M24 30v10M10 24h10M28 24h10M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8", label: "Naming & verbal identity" },
    { icon: "M6 40V22M17 40V10M28 40V28M39 40V16", label: "Visual identity" },
    { icon: "M9 12h30v28H9zM9 20h30M17 8v8M31 8v8M17 28h6M17 34h14", label: "Brand architecture" },
    { icon: "M24 8v10M24 30v10M10 24h10M28 24h10M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8", label: "Rebranding" },
    { icon: "M6 40V22M17 40V10M28 40V28M39 40V16", label: "Brand guidelines" },
  ],
  solutionsKicker: "Our approach",
  solutionsHeading: "Strategic Branding Solutions for Businesses in Angola",
  solutionsSub: "We build brands on evidence, not taste. Every engagement starts with the market, the competition and the decision your customer is actually making, and ends with a system your team can run without us in the room.",
  pillars: [
    { icon: "M6 40V22M17 40V10M28 40V28M39 40V16", title: "Positioning Built on Market Evidence", body: "We start with the market and the competition, so the position you take is one you can defend." },
    { icon: "M24 8v10M24 30v10M10 24h10M28 24h10M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8", title: "Identity That Works Across Every Touchpoint", body: "Naming, logo, type and colour are designed as one system, not as separate deliverables." },
    { icon: "M9 12h30v28H9zM9 20h30M17 8v8M31 8v8M17 28h6M17 34h14", title: "Guidelines Your Team Can Actually Run", body: "We hand over rules simple enough to be followed by whoever produces your material next year." },
  ],
  record: [
    { value: "200+", label: "Projects" },
    { value: "6+", label: "Years of Experience" },
    { value: "95%", label: "Client Retention Rate" },
    { value: "99%", label: "On-Time Delivery" },
  ],
  servicesKicker: "Services",
  servicesHeading: "Our Brand Strategy and Branding Services in Angola",
  servicesSub: "Everything a brand needs to be decided, designed and documented, delivered under one roof and scoped to what your business actually needs.",
  services: [
    { title: "Brand Diagnosis and Audit", body: "We read the brand as your market reads it, then say plainly what is working and what is costing you." },
    { title: "Market and Competitor Analysis", body: "We map the category so your position is chosen against reality rather than assumption." },
    { title: "Positioning and Value Proposition", body: "We define what you stand for and why it matters to the customer making the decision." },
    { title: "Naming and Verbal Identity", body: "Names, taglines and tone of voice that survive translation between Portuguese and English." },
    { title: "Visual Identity Design", body: "Logo, type, colour and imagery built as a system that holds together in print and on screen." },
    { title: "Brand Architecture", body: "Structure for groups with several businesses, so each one has a clear role and name." },
    { title: "Rebranding and Transitions", body: "A staged move from the old brand to the new one without losing the equity you already own." },
    { title: "Brand Guidelines and Rollout", body: "Documented rules, templates and asset libraries so the brand survives contact with reality." },
  ],
  bandHeading: "Ready to Build a Brand That Holds Up in Angola?",
  bandSub: "Tell us what the business is trying to become and we will tell you honestly what the brand work needs.",
  bandCta: "Start the conversation",
  processKicker: "Process",
  processHeading: "Our Branding Process",
  processSub: "Brand work creates value when it is decided in the right order. We move from evidence to decision to system, and each stage produces something you can act on.",
  process: [
    { n: "01", title: "Diagnosis and Discovery", body: "We interview the people who know the business and read the material the market already sees." },
    { n: "02", title: "Market and Category Reading", body: "We analyse competitors, language and expectations in your category to find the open ground." },
    { n: "03", title: "Positioning Decision", body: "We write the position, the audience and the proof, and get it signed off before design starts." },
    { n: "04", title: "Verbal and Visual Identity", body: "Naming, voice, logo, type and colour are developed together as one identity system." },
    { n: "05", title: "Systems and Guidelines", body: "We document the rules and produce the templates your team and suppliers will use." },
    { n: "06", title: "Rollout and Handover", body: "We stage the launch across your channels and hand over the files, rules and training." },
  ],
  whyKicker: "Why us",
  whyHeading: "Why Choose Idealisa as Your Branding Agency in Angola?",
  whySub: "We are a partner that argues for the brand when it is inconvenient. Strategy, design and communication sit in the same team, so decisions do not get lost between them.",
  why: [
    { title: "Strategy Before Aesthetics", body: "We decide what the brand means before we decide what it looks like." },
    { title: "Angolan Market Fluency", body: "We know how brands are read in Luanda and outside it, in both Portuguese and English." },
    { title: "Senior People on the Work", body: "The person deciding your position is the person you meet, not a name on a proposal." },
    { title: "Systems, Not One-Off Logos", body: "You receive a brand system with rules, not a single file that breaks on first use." },
    { title: "Built for Regulated Sectors", body: "We have worked where compliance, tenders and institutional scrutiny shape the brand." },
    { title: "Honest Scoping", body: "We tell you which parts of the brand work can wait, and which cannot." },
    { title: "Bilingual Deliverables", body: "Every asset and guideline is produced in Portuguese and English." },
    { title: "Proven Track Record", body: "Six years of brand work across institutions, groups and growing companies." },
  ],
  platformsKicker: "Deliverables",
  platformsHeading: "What You Receive",
  platformsSub: "Every branding engagement ends with concrete material your team owns and can use immediately.",
  platforms: [
    { name: "Positioning Statement", body: "The position, audience, proof points and the words to use when explaining the business." },
    { name: "Naming and Tagline", body: "Approved names, taglines and the reasoning behind each option we recommended." },
    { name: "Logo System", body: "Primary, secondary and reduced marks in every format, print and digital." },
    { name: "Type and Colour System", body: "Licensed typefaces, hierarchy and colour values with usage rules." },
    { name: "Brand Guidelines", body: "One document covering voice, imagery, layout and the mistakes to avoid." },
    { name: "Templates", body: "Presentations, documents, social and signage templates your team can edit." },
    { name: "Asset Library", body: "Organised files ready for suppliers, printers and platforms." },
    { name: "Rollout Plan", body: "A staged plan for retiring the old identity without confusing your market." },
  ],
  relatedServices: [
    { label: "Naming & Verbal Identity", route: "brand" },
    { label: "Visual Identity Design", route: "brand" },
    { label: "Brand Architecture", route: "brand" },
    { label: "Rebranding & Transitions", route: "brand" },
    { label: "Brand Guidelines & Rollout", route: "brand" },
    { label: "Corporate Communication", route: "services" },
    { label: "Social Media Management", route: "smm" },
    { label: "Project management", route: "pm" },
  ],
  faqHeading: "Branding FAQs",
  faq: [
    { q: "What does a branding agency in Angola actually do?", a: "It decides what the business stands for, expresses that decision in a name, identity and voice, and documents it so everyone applies it the same way. Designing a logo is the last part, not the work." },
    { q: "How much does branding cost in Angola?", a: "It depends on whether you need a position decided, an identity designed, or both, and on how many businesses sit under the brand. We quote in writing after a first conversation." },
    { q: "How long does a brand project take?", a: "A focused positioning sprint runs a few weeks. A full brand build with naming, identity and guidelines usually runs two to three months, depending on approvals." },
    { q: "Can you rebrand without losing our existing customers?", a: "Yes, when the change is staged and explained. We plan the transition so your market recognises continuity while seeing the new position." },
    { q: "Do you work in Portuguese and English?", a: "Yes. Naming, voice and every guideline are produced in both languages, because most of our clients operate in both." },
    { q: "We already have a logo. Is that a problem?", a: "No. We often keep an existing mark and fix the system around it, if the mark still serves the position you need to take." },
  ],
};

const pmEn: ServiceDetailContent = {
  serviceName: "Project Management in Angola",
  serviceType: "Project management",
  headline: "Your project management company in Luanda, Angola.",
  credYears: "6 years",
  credRest: "of scoping, coordinating and delivering marketing, communication and technology projects on time in Angola.",
  credTrust: "TRUSTED BY 500+ COMPANIES OF EVERY SIZE",
  kicker: "We run Angolan projects across",
  ctaPrimary: "Schedule a free planning call",
  partnerNote: "Trusted by 500+ companies in Angola.",
  intro: "Idealisa manages marketing, communication and technology projects for companies and institutions in Angola. We define the scope, coordinate the suppliers, hold the schedule and report progress honestly, so the work lands instead of drifting.",
  chips: [
    { icon: "M24 8v10M24 30v10M10 24h10M28 24h10M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8", label: "Scope & milestones" },
    { icon: "M6 40V22M17 40V10M28 40V28M39 40V16", label: "Vendor coordination" },
    { icon: "M9 12h30v28H9zM9 20h30M17 8v8M31 8v8M17 28h6M17 34h14", label: "Production oversight" },
    { icon: "M24 8v10M24 30v10M10 24h10M28 24h10M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8", label: "Risk & quality control" },
    { icon: "M6 40V22M17 40V10M28 40V28M39 40V16", label: "Progress reporting" },
  ],
  solutionsKicker: "Our approach",
  solutionsHeading: "Structured Project Management for Businesses in Angola",
  solutionsSub: "Projects fail on scope, coordination and reporting long before they fail on execution. We fix those three first, then run the work with one person accountable for the date.",
  pillars: [
    { icon: "M9 12h30v28H9zM9 20h30M17 8v8M31 8v8M17 28h6M17 34h14", title: "Scope and Schedule Agreed Before Work Starts", body: "Every project begins with a written scope, milestones and a date everyone has signed off." },
    { icon: "M24 8v10M24 30v10M10 24h10M28 24h10M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8", title: "One Point of Accountability", body: "A single manager owns suppliers, decisions and the schedule, so nothing sits waiting." },
    { icon: "M6 40V22M17 40V10M28 40V28M39 40V16", title: "Reporting Leadership Can Act On", body: "Short, regular progress reports with risks named early rather than explained afterwards." },
  ],
  record: [
    { value: "200+", label: "Projects" },
    { value: "6+", label: "Years of Experience" },
    { value: "95%", label: "Client Retention Rate" },
    { value: "99%", label: "On-Time Delivery" },
  ],
  servicesKicker: "Services",
  servicesHeading: "Our Project Management Services in Angola",
  servicesSub: "From planning a single campaign to coordinating a multi-supplier programme, scoped to the size of the work.",
  services: [
    { title: "Scope and Planning", body: "We turn an intention into a scope, a schedule and a budget everyone has agreed." },
    { title: "Campaign and Event Coordination", body: "One manager coordinating production, venues, suppliers and approvals to the date." },
    { title: "Vendor and Supplier Management", body: "We brief, negotiate and hold suppliers to the standard and the schedule." },
    { title: "Production Oversight", body: "On-site supervision of shoots, print, build and installation so quality is caught early." },
    { title: "Risk and Quality Control", body: "Risks logged, owned and mitigated before they become the reason for a delay." },
    { title: "Budget Tracking", body: "Committed and spent tracked against the plan, with variances reported as they happen." },
    { title: "Progress Reporting", body: "Regular reports written for leadership, not for the project file." },
    { title: "Handover and Continuity", body: "Documented handover so your team can run what we built after we step back." },
  ],
  bandHeading: "Have a Project That Cannot Slip?",
  bandSub: "Tell us the deadline and the constraints, and we will tell you honestly what it takes to hold them.",
  bandCta: "Start the conversation",
  processKicker: "Process",
  processHeading: "Our Project Management Process",
  processSub: "The same six stages run every project, scaled to its size. Each one ends with a decision or a document, not a meeting.",
  process: [
    { n: "01", title: "Brief and Constraints", body: "We establish the objective, the deadline, the budget and what cannot change." },
    { n: "02", title: "Scope and Schedule", body: "We write the scope, milestones and dependencies, and get them signed off." },
    { n: "03", title: "Supplier Selection", body: "We brief and select suppliers on capability and price, with quotes compared in writing." },
    { n: "04", title: "Execution and Coordination", body: "We run the work day to day, unblocking decisions and holding the schedule." },
    { n: "05", title: "Quality and Risk Review", body: "We check output against the brief and escalate risks while they can still be fixed." },
    { n: "06", title: "Close and Handover", body: "We close the budget, document what was delivered and hand over files and access." },
  ],
  whyKicker: "Why us",
  whyHeading: "Why Choose Idealisa to Manage Your Project in Angola?",
  whySub: "We manage projects in the conditions this market actually has: shifting timelines, mixed supplier quality and decisions that need chasing.",
  why: [
    { title: "Local Supplier Network", body: "We know who delivers in Luanda and who does not, which saves weeks." },
    { title: "Written Scope, Every Time", body: "Nothing starts on a verbal brief, so there is no argument about what was agreed." },
    { title: "Senior Manager Assigned", body: "The person you meet is the person who runs the project." },
    { title: "Honest Dates", body: "We give you the date we can hold, not the date you want to hear." },
    { title: "Risk Named Early", body: "You hear about a problem while there is still time to decide something." },
    { title: "Budget Discipline", body: "Committed spend is tracked continuously, not reconciled at the end." },
    { title: "Bilingual Documentation", body: "Scopes, reports and handovers in Portuguese and English." },
    { title: "Continuity After Handover", body: "We leave your team able to run the work without us." },
  ],
  platformsKicker: "Project types",
  platformsHeading: "Projects We Manage",
  platformsSub: "The work we coordinate most often for companies and institutions in Angola.",
  platforms: [
    { name: "Brand and Identity Rollouts", body: "Coordinating signage, print, digital and internal launch across locations." },
    { name: "Campaign Production", body: "Shoots, edits, media and delivery to platform deadlines." },
    { name: "Corporate Events", body: "Venue, production, suppliers and run-of-show for institutional events." },
    { name: "Website and Platform Builds", body: "Coordinating design, development, content and launch." },
    { name: "Institutional Communication Programmes", body: "Multi-month programmes with several suppliers and internal stakeholders." },
    { name: "Social Impact Projects", body: "Field coordination, reporting and stakeholder communication." },
    { name: "Launches and Openings", body: "Fixed-date projects where nothing can move." },
    { name: "Internal Change Programmes", body: "Communication and training rollouts inside the organisation." },
  ],
  relatedServices: [
    { label: "Campaign Production", route: "services" },
    { label: "Corporate Events", route: "services" },
    { label: "Vendor & Supplier Management", route: "services" },
    { label: "Website & Platform Builds", route: "services" },
    { label: "Institutional Communication", route: "services" },
    { label: "Brand & Identity Rollouts", route: "brand" },
    { label: "Social Media Management", route: "smm" },
  ],
  faqHeading: "Project Management FAQs",
  faq: [
    { q: "What does a project manager actually do on my project?", a: "Owns the scope, the schedule, the suppliers and the reporting. In practice it means someone chases the decisions and the deliveries daily so your team does not have to." },
    { q: "How much does project management cost?", a: "It is quoted either as a share of project value or as a monthly fee for the duration, depending on the size and how many suppliers are involved." },
    { q: "Can you manage suppliers we already use?", a: "Yes. We brief and coordinate your existing suppliers, and tell you plainly where a supplier is putting the date at risk." },
    { q: "What happens when a deadline is unrealistic?", a: "We say so before the project starts, and show what would have to change in scope or budget to hold it." },
    { q: "Do you work outside Luanda?", a: "Yes. We coordinate work in other provinces, with travel and logistics built into the plan and budget." },
    { q: "How often will we hear from you?", a: "A short written progress report on a fixed rhythm, plus immediate contact when a decision or risk needs you." },
  ],
};

const smmPt: ServiceDetailContent = {
  serviceName: "Gestão de Redes Sociais em Angola",
  serviceType: "Gestão de redes sociais",
  headline: "A sua empresa de gestão de redes sociais em Luanda, Angola.",
  credYears: "6 anos",
  credRest: "de gestão estratégica de redes sociais, criação de conteúdo, campanhas pagas, crescimento de comunidade e criativo que transforma seguidores em clientes.",
  credTrust: "A CONFIANÇA DE MAIS DE 500 EMPRESAS DE TODOS OS TAMANHOS",
  kicker: "Gerimos marcas angolanas em",
  ctaPrimary: "Agende uma chamada estratégica gratuita",
  partnerNote: "A confiança de mais de 500 empresas em Angola.",
  intro: "A Idealisa é uma das principais empresas de marketing de redes sociais em Angola e ajuda marcas a crescer, ligar-se e converter através das redes sociais. Combinando estratégias inteligentes com material criativo de alta qualidade, usamos os canais sociais para levar o seu negócio mais longe.",
  chips: [
    { icon: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.5 6.5v.01", label: "Instagram" },
    { icon: "M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z", label: "Facebook" },
    { icon: "M15 4v9.5a3.5 3.5 0 1 1-3.5-3.5M15 4a5 5 0 0 0 5 5", label: "TikTok" },
    { icon: "M3 3h18v18H3zM8 11v6M8 7.5v.01M12 17v-4a2 2 0 0 1 4 0v4", label: "LinkedIn" },
    { icon: "m8 6 10 6-10 6z", label: "YouTube" },
  ],
  solutionsKicker: "A nossa abordagem",
  solutionsHeading: "Soluções estratégicas de redes sociais para empresas em Angola",
  solutionsSub: "Criamos estratégias de redes sociais que refletem os objectivos do seu negócio. Cada uma é construída sobre análise sólida, pensamento criativo e um plano definido para ter sucesso. Tudo isso junta-se em acções sociais tão dedicadas ao sucesso como o seu negócio.",
  pillars: [
    { icon: "M6 40V22M17 40V10M28 40V28M39 40V16", title: "Campanhas orientadas por dados, com resultados mensuráveis", body: "Começamos cada estratégia com dados, não com suposições. É assim que garantimos que o seu investimento tem impacto." },
    { icon: "M24 8v10M24 30v10M10 24h10M28 24h10M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8", title: "Crescimento em todas as principais plataformas", body: "As nossas estratégias trabalham para fazer crescer a sua marca em todas as plataformas que contam." },
    { icon: "M9 12h30v28H9zM9 20h30M17 8v8M31 8v8M17 28h6M17 34h14", title: "Planeamento de conteúdo que mantém a marca activa", body: "Planeamos e agendamos conteúdo com antecedência para manter a sua presença consistente, relevante e alinhada com os objectivos da marca." },
  ],
  record: [
    { value: "200+", label: "Projectos" },
    { value: "6+", label: "Anos de experiência" },
    { value: "95%", label: "Taxa de retenção de clientes" },
    { value: "99%", label: "Entregas no prazo" },
  ],
  servicesKicker: "Serviços",
  servicesHeading: "Os nossos serviços de marketing de redes sociais em Angola",
  servicesSub: "Todos os serviços de redes sociais estão disponíveis na nossa agência, num só lugar. Da abordagem estratégica à criação de conteúdo, está tudo coberto. Tudo depende das suas necessidades e do público-alvo.",
  services: [
    { title: "Desenvolvimento de estratégia de redes sociais", body: "É fundamental que uma empresa desenvolva uma estratégia bem pensada para as suas redes sociais, que se torna a espinha dorsal de cada acção." },
    { title: "Gestão de redes sociais", body: "A gestão diária e eficaz das contas permite às marcas manter visibilidade constante online." },
    { title: "Criação de conteúdo e design criativo", body: "O design criativo é decisivo na criação de conteúdo social, porque é ele que determina quanta atenção as pessoas dão." },
    { title: "Publicidade e campanhas pagas", body: "As campanhas pagas nas redes sociais podem ser muito eficientes e ajudar um negócio a alcançar os seus objectivos de marketing." },
    { title: "Gestão de comunidade", body: "Esta fase implica interagir com os clientes e construir relação com eles, respondendo às suas mensagens, comentários e pedidos." },
    { title: "Marketing de influenciadores", body: "O marketing de influenciadores é uma abordagem muito usada para divulgar produtos nos canais sociais." },
    { title: "Produção de vídeo e reels", body: "Os vídeos curtos publicados em stories são um dos formatos mais populares e podem fazer uma marca crescer depressa." },
    { title: "Analítica e relatórios", body: "O acompanhamento do desempenho permite ver se uma campanha está ou não a ser eficaz." },
  ],
  bandHeading: "Pronto para fazer crescer a sua marca com uma agência de confiança em Angola?",
  bandSub: "Pronto para transformar as redes sociais em crescimento real? Marque uma consulta gratuita e vamos falar sobre onde a sua marca pode chegar.",
  bandCta: "PEDIR CONSULTA GRATUITA",
  processKicker: "Processo",
  processHeading: "O processo de marketing de redes sociais",
  processSub: "A chave do nosso sucesso está em converter objectivos em crescimento através de fases bem definidas. Da pesquisa à estratégia e à implementação, garantimos que tudo é feito com o máximo de clareza. É isso que assegura eficácia e melhoria contínua.",
  process: [
    { n: "01", title: "Entender os objectivos do negócio", body: "Esta fase envolve compreender os seus objectivos e os critérios de sucesso. Essa informação influencia todo o processo da estratégia de marketing." },
    { n: "02", title: "Pesquisa de audiência e concorrência", body: "Esta fase envolve analisar o seu público-alvo e os seus concorrentes. São esses elementos que determinam as oportunidades reais." },
    { n: "03", title: "Desenvolvimento da estratégia", body: "Nesta fase criamos uma estratégia que considera os canais sociais que interessam ao seu negócio. Essa estratégia é a base das fases seguintes." },
    { n: "04", title: "Planeamento e criação de conteúdo", body: "Nesta fase produzimos os planos de conteúdo específico. O conteúdo criado aqui ajuda o negócio a atingir os seus objectivos." },
    { n: "05", title: "Execução e optimização das campanhas", body: "Esta fase inclui o lançamento das campanhas e a sua optimização contínua ao longo do período. É assim que se extrai o melhor valor do orçamento." },
    { n: "06", title: "Monitorização e relatório", body: "Nesta fase acompanhamos o desempenho das campanhas e reportamos com transparência." },
  ],
  whyKicker: "Porquê a Idealisa",
  whyHeading: "Porque escolher a Idealisa como a sua empresa de redes sociais em Angola?",
  whySub: "Trabalhamos como um verdadeiro parceiro com interesse no seu crescimento. A nossa abordagem junta criatividade, estratégia e dados para entregar resultados reais. É isto que nos distingue.",
  why: [
    { title: "Especialistas com experiência", body: "A nossa equipa vive redes sociais todos os dias. Essa experiência ajuda-nos a ver o que funciona e a agir depressa." },
    { title: "Estratégias feitas para cada negócio", body: "Nunca usamos fórmulas iguais para todos. Cada estratégia é feita para o seu negócio e para a sua audiência." },
    { title: "Abordagem orientada por dados", body: "Baseamos cada decisão em dados reais de desempenho. É assim que o orçamento é sempre gasto onde conta." },
    { title: "Conteúdo criativo que gera interacção", body: "Criamos conteúdo com que as pessoas querem realmente interagir. É a criatividade que transforma o scroll em acção." },
    { title: "Relatórios e comunicação transparentes", body: "Mantemos tudo claro e honesto. Vai sempre saber o que estamos a fazer e porque importa." },
    { title: "Gestão focada em desempenho", body: "Gerimos cada campanha com os resultados em mente. O foco está sempre em consequências mensuráveis." },
    { title: "Domínio de várias plataformas", body: "Sabemos fazer crescer marcas em todas as grandes plataformas. Essa amplitude mantém a presença consistente e eficaz." },
    { title: "Percurso comprovado em vários sectores", body: "Já entregámos resultados a empresas de muitos sectores. Essa experiência ajuda-nos a construir campanhas que funcionam." },
  ],
  platformsKicker: "Plataformas",
  platformsHeading: "Plataformas que gerimos",
  platformsSub: "Gerimos a sua marca em todas as grandes plataformas sociais. Cada uma tem um papel diferente em alcançar e envolver a sua audiência. Construímos a estratégia com a mistura certa para os seus objectivos.",
  platforms: [
    { name: "Instagram", body: "Construímos presenças fortes no Instagram com conteúdo visual sólido. É ideal para construir marca, contar histórias e chegar a audiências mais jovens." },
    { name: "Facebook", body: "Gerimos páginas e campanhas de Facebook que chegam a audiências amplas. Continua poderoso para comunidade, publicidade e interacção." },
    { name: "LinkedIn", body: "Fazemos crescer marcas profissionais e presenças B2B no LinkedIn. É a plataforma da autoridade, do networking e da geração de contactos." },
    { name: "TikTok", body: "Criamos vídeo curto feito para a audiência do TikTok. É uma das formas mais rápidas de alcançar e envolver novos utilizadores." },
    { name: "YouTube", body: "Ajudamos marcas a crescer com conteúdo de vídeo no YouTube. Vídeo longo e curto constroem autoridade e alcance." },
    { name: "X (Twitter)", body: "Gerimos interacção e conversa em tempo real no X. É ideal para notícias, actualizações e contacto directo com a audiência." },
    { name: "WhatsApp Business", body: "Montamos catálogos, respostas rápidas e fluxos de atendimento no WhatsApp. Em Angola é onde a maioria dos pedidos se transforma em venda." },
    { name: "Pinterest", body: "Construímos presenças de descoberta visual no Pinterest. É forte para retalho, lifestyle e marcas de inspiração." },
  ],
  faqHeading: "Perguntas frequentes sobre redes sociais",
  faq: [
    { q: "O que faz uma agência de marketing de redes sociais em Angola?", a: "Decide a mensagem, produz o conteúdo, publica-o, corre as campanhas pagas por trás e reporta o resultado. Publicar é a parte visível; a decisão sobre o que publicar é o trabalho." },
    { q: "Quanto custam os serviços de redes sociais em Angola?", a: "Depende de quanto material original é produzido, de quantas plataformas está presente e de quem decide a mensagem. Orçamentamos depois de ver as contas, nunca antes." },
    { q: "Que plataformas são melhores para o meu negócio?", a: "Para a maioria das empresas aqui: Instagram, Facebook e WhatsApp primeiro. LinkedIn se vende a instituições, TikTok e YouTube quando há algo que valha filmar." },
    { q: "Porque devo contratar uma empresa de redes sociais em Angola?", a: "Porque uma equipa local sabe o que uma marca pode dizer neste mercado, em português, e a que velocidade as audiências daqui esperam resposta." },
    { q: "Quanto tempo leva a ver resultados?", a: "Interacção e volume de mensagens mexem normalmente em dois meses. Posicionamento e reputação levam seis a doze, e por isso planeamos em anos, não em trimestres." },
    { q: "Que sectores beneficiam do marketing de redes sociais?", a: "Hotelaria, retalho, imobiliário, educação, saúde, indústria e instituições já funcionaram connosco. O que conta é ter algo a dizer, não o sector." },
    { q: "Também fazem publicidade paga?", a: "Sim. As campanhas Meta, TikTok e YouTube são planeadas em conjunto com o conteúdo orgânico, para o orçamento amplificar uma mensagem clara." },
    { q: "As redes sociais geram contactos e vendas?", a: "Já geram neste mercado, sobretudo por mensagem directa e WhatsApp. O que decide o número é a rapidez da resposta e o que se diz nela." },
    { q: "Com que frequência se deve publicar?", a: "A consistência vale mais do que o volume. Três a cinco publicações bem feitas por semana, planeadas com antecedência, valem mais do que publicar todos os dias sem nada para dizer." },
    { q: "O que inclui a gestão de redes sociais?", a: "Estratégia, planeamento e produção de conteúdo, publicação, gestão de comunidade, campanhas pagas e um relatório mensal que a liderança consegue ler." },
  ],
};

const brandPt: ServiceDetailContent = {
  serviceName: "Estratégia de Marca e Branding em Angola",
  serviceType: "Estratégia de marca",
  headline: "A sua empresa de estratégia de marca e branding em Luanda, Angola.",
  credYears: "6 anos",
  credRest: "de estratégia de marca, posicionamento, naming, identidade visual e sistemas de marca para empresas que precisam de ser levadas a sério neste mercado.",
  credTrust: "A CONFIANÇA DE MAIS DE 500 EMPRESAS DE TODOS OS TAMANHOS",
  kicker: "Construímos marcas angolanas através de",
  ctaPrimary: "Agendar uma chamada de estratégia",
  partnerNote: "A confiança de mais de 500 empresas em Angola.",
  intro: "A Idealisa é uma empresa de estratégia de marca e branding em Angola que decide o que um negócio representa antes de decidir o seu aspecto. Trabalhamos do diagnóstico e posicionamento até ao naming, à identidade e ao manual que mantém a marca consistente em todo o lado.",
  chips: [
    { icon: "M24 8v10M24 30v10M10 24h10M28 24h10M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8", label: "Naming e identidade verbal" },
    { icon: "M6 40V22M17 40V10M28 40V28M39 40V16", label: "Identidade visual" },
    { icon: "M9 12h30v28H9zM9 20h30M17 8v8M31 8v8M17 28h6M17 34h14", label: "Arquitectura de marca" },
    { icon: "M24 8v10M24 30v10M10 24h10M28 24h10M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8", label: "Rebranding" },
    { icon: "M6 40V22M17 40V10M28 40V28M39 40V16", label: "Manual de marca" },
  ],
  solutionsKicker: "A nossa abordagem",
  solutionsHeading: "Soluções estratégicas de branding para empresas em Angola",
  solutionsSub: "Construímos marcas com evidência, não com gosto. Cada projecto começa no mercado, na concorrência e na decisão que o seu cliente está realmente a tomar, e termina num sistema que a sua equipa consegue usar sem nós na sala.",
  pillars: [
    { icon: "M6 40V22M17 40V10M28 40V28M39 40V16", title: "Posicionamento com base em evidência de mercado", body: "Começamos pelo mercado e pela concorrência, para que a posição que assume seja defensável." },
    { icon: "M24 8v10M24 30v10M10 24h10M28 24h10M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8", title: "Identidade que funciona em todos os pontos de contacto", body: "Naming, logótipo, tipografia e cor são desenhados como um sistema, não como entregas soltas." },
    { icon: "M9 12h30v28H9zM9 20h30M17 8v8M31 8v8M17 28h6M17 34h14", title: "Manual que a sua equipa consegue seguir", body: "Entregamos regras simples o suficiente para serem seguidas por quem produzir o material no próximo ano." },
  ],
  record: [
    { value: "200+", label: "Projectos" },
    { value: "6+", label: "Anos de experiência" },
    { value: "95%", label: "Retenção de clientes" },
    { value: "99%", label: "Entregas a tempo" },
  ],
  servicesKicker: "Serviços",
  servicesHeading: "Os nossos serviços de estratégia de marca e branding em Angola",
  servicesSub: "Tudo o que uma marca precisa de decidir, desenhar e documentar, entregue num só lugar e dimensionado ao que o seu negócio precisa.",
  services: [
    { title: "Diagnóstico e auditoria de marca", body: "Lemos a marca como o mercado a lê e dizemos com clareza o que funciona e o que lhe custa." },
    { title: "Análise de mercado e concorrência", body: "Mapeamos a categoria para que a posição seja escolhida contra a realidade e não contra suposições." },
    { title: "Posicionamento e proposta de valor", body: "Definimos o que representa e por que isso importa a quem toma a decisão." },
    { title: "Naming e identidade verbal", body: "Nomes, assinaturas e tom de voz que sobrevivem à tradução entre português e inglês." },
    { title: "Identidade visual", body: "Logótipo, tipografia, cor e imagem construídos como sistema, em impresso e em ecrã." },
    { title: "Arquitectura de marca", body: "Estrutura para grupos com vários negócios, com um papel e um nome claros para cada um." },
    { title: "Rebranding e transições", body: "Uma passagem faseada da marca antiga para a nova sem perder o capital já construído." },
    { title: "Manual de marca e implementação", body: "Regras documentadas, templates e bibliotecas de ficheiros para a marca resistir ao dia a dia." },
  ],
  bandHeading: "Pronto para construir uma marca que se sustenta em Angola?",
  bandSub: "Diga-nos o que o negócio quer tornar-se e dizemos-lhe honestamente o que o trabalho de marca exige.",
  bandCta: "Começar a conversa",
  processKicker: "Processo",
  processHeading: "O nosso processo de branding",
  processSub: "O trabalho de marca cria valor quando é decidido na ordem certa. Vamos da evidência à decisão e ao sistema, e cada etapa produz algo accionável.",
  process: [
    { n: "01", title: "Diagnóstico e descoberta", body: "Entrevistamos quem conhece o negócio e lemos o material que o mercado já vê." },
    { n: "02", title: "Leitura de mercado e categoria", body: "Analisamos concorrentes, linguagem e expectativas para encontrar o espaço livre." },
    { n: "03", title: "Decisão de posicionamento", body: "Escrevemos a posição, a audiência e a prova, e aprovamos antes de começar o desenho." },
    { n: "04", title: "Identidade verbal e visual", body: "Naming, voz, logótipo, tipografia e cor desenvolvidos como um único sistema." },
    { n: "05", title: "Sistemas e manual", body: "Documentamos as regras e produzimos os templates que a equipa e os fornecedores vão usar." },
    { n: "06", title: "Implementação e transferência", body: "Faseamos o lançamento nos seus canais e entregamos ficheiros, regras e formação." },
  ],
  whyKicker: "Porquê nós",
  whyHeading: "Porque escolher a Idealisa como a sua agência de branding em Angola?",
  whySub: "Somos um parceiro que defende a marca mesmo quando é inconveniente. Estratégia, design e comunicação estão na mesma equipa, para que as decisões não se percam entre elas.",
  why: [
    { title: "Estratégia antes de estética", body: "Decidimos o que a marca significa antes de decidir o seu aspecto." },
    { title: "Fluência no mercado angolano", body: "Sabemos como as marcas são lidas em Luanda e fora dela, em português e inglês." },
    { title: "Pessoas sénior no trabalho", body: "Quem decide o seu posicionamento é quem se senta à mesa, não um nome na proposta." },
    { title: "Sistemas, não logótipos soltos", body: "Recebe um sistema de marca com regras, não um ficheiro que quebra no primeiro uso." },
    { title: "Preparados para sectores regulados", body: "Já trabalhámos onde compliance, concursos e escrutínio institucional moldam a marca." },
    { title: "Orçamentação honesta", body: "Dizemos-lhe que partes do trabalho podem esperar e quais não podem." },
    { title: "Entregas bilingues", body: "Todos os ficheiros e manuais são produzidos em português e inglês." },
    { title: "Histórico comprovado", body: "Seis anos de trabalho de marca com instituições, grupos e empresas em crescimento." },
  ],
  platformsKicker: "Entregas",
  platformsHeading: "O que recebe",
  platformsSub: "Cada projecto de branding termina com material concreto que a sua equipa passa a ter e a usar.",
  platforms: [
    { name: "Declaração de posicionamento", body: "A posição, a audiência, as provas e as palavras a usar para explicar o negócio." },
    { name: "Naming e assinatura", body: "Nomes e assinaturas aprovados, com o raciocínio por trás de cada opção recomendada." },
    { name: "Sistema de logótipo", body: "Versões principal, secundária e reduzida em todos os formatos, impresso e digital." },
    { name: "Sistema tipográfico e de cor", body: "Tipos licenciados, hierarquia e valores de cor com regras de uso." },
    { name: "Manual de marca", body: "Um documento com voz, imagem, layout e os erros a evitar." },
    { name: "Templates", body: "Apresentações, documentos, redes sociais e sinalética editáveis pela sua equipa." },
    { name: "Biblioteca de ficheiros", body: "Ficheiros organizados e prontos para fornecedores, gráficas e plataformas." },
    { name: "Plano de implementação", body: "Plano faseado para retirar a identidade antiga sem confundir o mercado." },
  ],
  relatedServices: [
    { label: "Naming e identidade verbal", route: "brand" },
    { label: "Identidade visual", route: "brand" },
    { label: "Arquitectura de marca", route: "brand" },
    { label: "Rebranding e transições", route: "brand" },
    { label: "Manual de marca e implementação", route: "brand" },
    { label: "Comunicação corporativa", route: "services" },
    { label: "Gestão de redes sociais", route: "smm" },
    { label: "Gestão de projectos", route: "pm" },
  ],
  faqHeading: "Perguntas frequentes sobre branding",
  faq: [
    { q: "O que faz uma agência de branding em Angola?", a: "Decide o que o negócio representa, expressa essa decisão num nome, identidade e voz, e documenta tudo para que todos apliquem da mesma forma. Desenhar um logótipo é a última parte, não o trabalho." },
    { q: "Quanto custa branding em Angola?", a: "Depende de precisar de posicionamento, de identidade ou de ambos, e de quantos negócios ficam sob a marca. Orçamentamos por escrito depois de uma primeira conversa." },
    { q: "Quanto tempo leva um projecto de marca?", a: "Um sprint de posicionamento leva algumas semanas. Uma construção completa com naming, identidade e manual leva normalmente dois a três meses, dependendo das aprovações." },
    { q: "É possível fazer rebranding sem perder clientes?", a: "Sim, quando a mudança é faseada e explicada. Planeamos a transição para que o mercado reconheça continuidade e veja a nova posição." },
    { q: "Trabalham em português e inglês?", a: "Sim. Naming, voz e todos os manuais são produzidos nas duas línguas, porque a maioria dos nossos clientes opera em ambas." },
    { q: "Já temos logótipo. Isso é problema?", a: "Não. Muitas vezes mantemos a marca existente e corrigimos o sistema à volta dela, se ainda servir a posição que precisa de assumir." },
  ],
};

const pmPt: ServiceDetailContent = {
  serviceName: "Gestão de Projectos em Angola",
  serviceType: "Gestão de projectos",
  headline: "A sua empresa de gestão de projectos em Luanda, Angola.",
  credYears: "6 anos",
  credRest: "a definir âmbito, coordenar fornecedores e entregar projectos de marketing, comunicação e tecnologia a tempo em Angola.",
  credTrust: "A CONFIANÇA DE MAIS DE 500 EMPRESAS DE TODOS OS TAMANHOS",
  kicker: "Gerimos projectos angolanos em",
  ctaPrimary: "Agendar uma chamada de planeamento",
  partnerNote: "A confiança de mais de 500 empresas em Angola.",
  intro: "A Idealisa gere projectos de marketing, comunicação e tecnologia para empresas e instituições em Angola. Definimos o âmbito, coordenamos os fornecedores, seguramos o calendário e reportamos o progresso com honestidade, para que o trabalho aterre em vez de se arrastar.",
  chips: [
    { icon: "M24 8v10M24 30v10M10 24h10M28 24h10M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8", label: "Âmbito e marcos" },
    { icon: "M6 40V22M17 40V10M28 40V28M39 40V16", label: "Coordenação de fornecedores" },
    { icon: "M9 12h30v28H9zM9 20h30M17 8v8M31 8v8M17 28h6M17 34h14", label: "Supervisão de produção" },
    { icon: "M24 8v10M24 30v10M10 24h10M28 24h10M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8", label: "Risco e qualidade" },
    { icon: "M6 40V22M17 40V10M28 40V28M39 40V16", label: "Relatórios de progresso" },
  ],
  solutionsKicker: "A nossa abordagem",
  solutionsHeading: "Gestão de projectos estruturada para empresas em Angola",
  solutionsSub: "Os projectos falham no âmbito, na coordenação e no reporte muito antes de falharem na execução. Corrigimos primeiro esses três e depois corremos o trabalho com uma pessoa responsável pela data.",
  pillars: [
    { icon: "M9 12h30v28H9zM9 20h30M17 8v8M31 8v8M17 28h6M17 34h14", title: "Âmbito e calendário acordados antes de começar", body: "Cada projecto começa com âmbito escrito, marcos e uma data aprovada por todos." },
    { icon: "M24 8v10M24 30v10M10 24h10M28 24h10M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8", title: "Um único ponto de responsabilidade", body: "Um gestor responde por fornecedores, decisões e calendário, para que nada fique à espera." },
    { icon: "M6 40V22M17 40V10M28 40V28M39 40V16", title: "Relatórios sobre os quais a liderança decide", body: "Relatórios curtos e regulares, com riscos nomeados a tempo e não explicados depois." },
  ],
  record: [
    { value: "200+", label: "Projectos" },
    { value: "6+", label: "Anos de experiência" },
    { value: "95%", label: "Retenção de clientes" },
    { value: "99%", label: "Entregas a tempo" },
  ],
  servicesKicker: "Serviços",
  servicesHeading: "Os nossos serviços de gestão de projectos em Angola",
  servicesSub: "Do planeamento de uma campanha à coordenação de um programa com vários fornecedores, dimensionado ao tamanho do trabalho.",
  services: [
    { title: "Âmbito e planeamento", body: "Transformamos uma intenção em âmbito, calendário e orçamento acordados por todos." },
    { title: "Coordenação de campanhas e eventos", body: "Um gestor a coordenar produção, espaços, fornecedores e aprovações até à data." },
    { title: "Gestão de fornecedores", body: "Briefamos, negociamos e exigimos o padrão e o prazo acordados." },
    { title: "Supervisão de produção", body: "Acompanhamento no local de rodagens, impressão, construção e instalação." },
    { title: "Controlo de risco e qualidade", body: "Riscos registados, atribuídos e mitigados antes de se tornarem o motivo do atraso." },
    { title: "Controlo orçamental", body: "Comprometido e gasto seguidos contra o plano, com desvios reportados quando acontecem." },
    { title: "Relatórios de progresso", body: "Relatórios escritos para a liderança, não para o arquivo do projecto." },
    { title: "Transferência e continuidade", body: "Transferência documentada para a sua equipa continuar sem nós." },
  ],
  bandHeading: "Tem um projecto que não pode falhar a data?",
  bandSub: "Diga-nos o prazo e as restrições e dizemos-lhe honestamente o que é preciso para os cumprir.",
  bandCta: "Começar a conversa",
  processKicker: "Processo",
  processHeading: "O nosso processo de gestão de projectos",
  processSub: "As mesmas seis etapas correm em todos os projectos, à escala de cada um. Cada uma termina numa decisão ou num documento, não numa reunião.",
  process: [
    { n: "01", title: "Briefing e restrições", body: "Estabelecemos o objectivo, o prazo, o orçamento e o que não pode mudar." },
    { n: "02", title: "Âmbito e calendário", body: "Escrevemos âmbito, marcos e dependências, e obtemos aprovação." },
    { n: "03", title: "Selecção de fornecedores", body: "Briefamos e selecionamos por capacidade e preço, com propostas comparadas por escrito." },
    { n: "04", title: "Execução e coordenação", body: "Corremos o trabalho no dia a dia, desbloqueando decisões e segurando o calendário." },
    { n: "05", title: "Qualidade e revisão de risco", body: "Verificamos o resultado contra o briefing e escalamos riscos enquanto há tempo." },
    { n: "06", title: "Fecho e transferência", body: "Fechamos o orçamento, documentamos o entregue e transferimos ficheiros e acessos." },
  ],
  whyKicker: "Porquê nós",
  whyHeading: "Porque escolher a Idealisa para gerir o seu projecto em Angola?",
  whySub: "Gerimos projectos nas condições reais deste mercado: prazos que mudam, qualidade desigual de fornecedores e decisões que precisam de ser perseguidas.",
  why: [
    { title: "Rede local de fornecedores", body: "Sabemos quem entrega em Luanda e quem não entrega, o que poupa semanas." },
    { title: "Âmbito escrito, sempre", body: "Nada começa com briefing verbal, por isso não há discussão sobre o acordado." },
    { title: "Gestor sénior atribuído", body: "Quem se senta à mesa é quem corre o projecto." },
    { title: "Datas honestas", body: "Damos a data que conseguimos cumprir, não a que quer ouvir." },
    { title: "Risco nomeado a tempo", body: "Sabe do problema enquanto ainda há tempo para decidir." },
    { title: "Disciplina orçamental", body: "O comprometido é seguido continuamente, não reconciliado no fim." },
    { title: "Documentação bilingue", body: "Âmbitos, relatórios e transferências em português e inglês." },
    { title: "Continuidade após a entrega", body: "Deixamos a sua equipa capaz de correr o trabalho sem nós." },
  ],
  platformsKicker: "Tipos de projecto",
  platformsHeading: "Projectos que gerimos",
  platformsSub: "O trabalho que coordenamos com mais frequência para empresas e instituições em Angola.",
  platforms: [
    { name: "Implementação de marca", body: "Coordenação de sinalética, impressão, digital e lançamento interno em várias localizações." },
    { name: "Produção de campanhas", body: "Rodagens, edição, meios e entrega dentro dos prazos das plataformas." },
    { name: "Eventos corporativos", body: "Espaço, produção, fornecedores e guião de evento para actos institucionais." },
    { name: "Websites e plataformas", body: "Coordenação de design, desenvolvimento, conteúdo e lançamento." },
    { name: "Programas de comunicação institucional", body: "Programas de vários meses com fornecedores e áreas internas." },
    { name: "Projectos de impacto social", body: "Coordenação no terreno, reporte e comunicação com stakeholders." },
    { name: "Lançamentos e inaugurações", body: "Projectos de data fixa onde nada pode mudar." },
    { name: "Programas de mudança interna", body: "Comunicação e formação dentro da organização." },
  ],
  relatedServices: [
    { label: "Produção de campanhas", route: "services" },
    { label: "Eventos corporativos", route: "services" },
    { label: "Gestão de fornecedores", route: "services" },
    { label: "Websites e plataformas", route: "services" },
    { label: "Comunicação institucional", route: "services" },
    { label: "Implementação de marca", route: "brand" },
    { label: "Gestão de redes sociais", route: "smm" },
  ],
  faqHeading: "Perguntas frequentes sobre gestão de projectos",
  faq: [
    { q: "O que faz um gestor de projecto no meu projecto?", a: "Responde pelo âmbito, pelo calendário, pelos fornecedores e pelo reporte. Na prática, significa que alguém persegue diariamente as decisões e as entregas para que a sua equipa não tenha de o fazer." },
    { q: "Quanto custa a gestão de projectos?", a: "É orçamentada como percentagem do valor do projecto ou como avença mensal pela duração, dependendo do tamanho e do número de fornecedores." },
    { q: "Podem gerir fornecedores que já usamos?", a: "Sim. Briefamos e coordenamos os seus fornecedores actuais e dizemos com clareza quando algum está a pôr a data em risco." },
    { q: "E quando o prazo é irrealista?", a: "Dizemos antes de começar e mostramos o que teria de mudar no âmbito ou no orçamento para o cumprir." },
    { q: "Trabalham fora de Luanda?", a: "Sim. Coordenamos trabalho noutras províncias, com deslocações e logística incluídas no plano e no orçamento." },
    { q: "Com que frequência temos notícias?", a: "Um relatório escrito curto num ritmo fixo, mais contacto imediato quando é preciso uma decisão ou surge um risco." },
  ],
};

export const serviceDetailContent: Record<Language, Record<ServiceDetailKey, ServiceDetailContent>> = {
  en: { smm: smmEn, brand: brandEn, pm: pmEn },
  "pt-AO": { smm: smmPt, brand: brandPt, pm: pmPt },
};

/** Shared micro-copy this template uses (design-reference's `UI[lang]`, the fields these pages reference). */
export type ServiceDetailUi = {
  actionsHeading: string;
  otherServices: string;
  asideLabel: string;
  actCall: string;
  actAppointment: string;
  actEmail: string;
  noteCall: string;
  noteAppointment: string;
  noteEmail: string;
  formName: string;
  formPhone: string;
  formEmail: string;
  formMessage: string;
  formSubmit: string;
  adServices: RelatedService[];
};

const uiEn: ServiceDetailUi = {
  actionsHeading: "Talk to us",
  otherServices: "Other services",
  asideLabel: "Contact and related services",
  actCall: "Request a call back",
  actAppointment: "Schedule an appointment",
  actEmail: "Send us an email",
  noteCall: "Leave your number and we call you back the same working day.",
  noteAppointment: "Pick a time and we confirm the meeting by email.",
  noteEmail: "Tell us what you need and we reply within one working day.",
  formName: "Full name",
  formPhone: "Phone",
  formEmail: "Email",
  formMessage: "Tell us about your project",
  formSubmit: "Send message",
  adServices: [
    { label: "Facebook Advertising", route: "services" },
    { label: "Instagram Advertising", route: "services" },
    { label: "TikTok Advertising", route: "services" },
    { label: "LinkedIn Advertising", route: "services" },
    { label: "WhatsApp Advertising", route: "services" },
    { label: "YouTube Advertising", route: "services" },
    { label: "Google Ads Management", route: "services" },
    { label: "Brand strategy and branding", route: "brand" },
    { label: "Project management", route: "pm" },
  ],
};

const uiPt: ServiceDetailUi = {
  actionsHeading: "Fale connosco",
  otherServices: "Outros serviços",
  asideLabel: "Contactos e serviços relacionados",
  actCall: "Pedir chamada de volta",
  actAppointment: "Agendar reunião",
  actEmail: "Enviar um email",
  noteCall: "Deixe o seu número e ligamos no mesmo dia útil.",
  noteAppointment: "Escolha uma hora e confirmamos a reunião por email.",
  noteEmail: "Diga-nos o que precisa e respondemos em um dia útil.",
  formName: "Nome completo",
  formPhone: "Telefone",
  formEmail: "Email",
  formMessage: "Fale-nos do seu projecto",
  formSubmit: "Enviar mensagem",
  adServices: [
    { label: "Publicidade no Facebook", route: "services" },
    { label: "Publicidade no Instagram", route: "services" },
    { label: "Publicidade no TikTok", route: "services" },
    { label: "Publicidade no LinkedIn", route: "services" },
    { label: "Publicidade no WhatsApp", route: "services" },
    { label: "Publicidade no YouTube", route: "services" },
    { label: "Gestão de Google Ads", route: "services" },
    { label: "Estratégia de marca e branding", route: "brand" },
    { label: "Gestão de projectos", route: "pm" },
  ],
};

export const serviceDetailUi: Record<Language, ServiceDetailUi> = {
  en: uiEn,
  "pt-AO": uiPt,
};
