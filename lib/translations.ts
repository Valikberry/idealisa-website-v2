export const DEFAULT_LANGUAGE = "pt-AO" as const

export type Language = typeof DEFAULT_LANGUAGE | "en"

export function isLanguage(value: unknown): value is Language {
  return value === DEFAULT_LANGUAGE || value === "en"
}

export function getValidLanguage(value: unknown): Language {
  return isLanguage(value) ? value : DEFAULT_LANGUAGE
}

const en = {
  navbar: {
    services: "Our Services",
    company: "Company",
    blog: "Blog",
    contact: "Contact Us",
  },
  hero: {
    badge: "Trusted Across Angola",
    headlineLine1: "Market faster.",
    headlineLine2: "Profit smarter.",
    subtext:
      "We are a company specialising in brand strategy, corporate communication and project management.",
    ctaPrimary: "See Our Work",
    ctaSecondary: "Contact on WhatsApp",
    trustPrefix: "Trusted by",
    trustNumber: "1,000+",
    trustSuffix: "Companies in Angola",
  },
  logoMarquee: {
    heading: "Trusted by Brands Across Angola",
  },
  bentoGrid: {
    heading: "Everything Idealisa brings to the table",
    subheading: "Built for companies and organisations across Angola who want their brand to mean something.",
    strategy: {
      title: "BRAND STRATEGY & BRANDING",
      description: "We structure brands with clarity, identity and the ability to differentiate.",
      stats: {
        identity: "Identity",
        positioning: "Positioning",
        voice: "Voice",
        branding: "Branding",
      },
    },
    communication: {
      title: "CORPORATE COMMUNICATION",
      description: "We structure communication as a strategic asset to build trust, credibility and institutional value.",
      badgeAvailability: "24/7",
      badgeVoice: "Trusted Voice",
    },
    projectManagement: {
      title: "PROJECT MANAGEMENT",
      description: "We transform strategic directions into structured projects, coordinating and guiding them towards impact.",
    },
    marketing: {
      title: "TECHNOLOGY & DIGITAL SOLUTIONS",
      description: "Development and implementation of technology solutions tailored to the needs of each project.",
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
    subheading: "We help businesses build reputation, communicate with clarity, and turn strategy into sustainable growth.",
    toggleBasic: "Basic",
    toggleCustom: "Custom",
    mostPopular: "Most Popular",
    priceSuffixMonth: "/month",
    plans: {
      starters: {
        name: "Starters",
        description: "Perfect for Small Companies in Angola",
        features: ["Consultation", "Positioning", "Diagnose", "Discover", "Understand", "Assess", "Listen"],
        cta: "Get Started",
      },
      growth: {
        name: "Growth",
        description: "Perfect for Medium-Size Companies in Angola",
        features: [
          "Everything in Starters",
          "Website Setup",
          "Social Media Management",
          "SEO Basics",
          "Marketing Materials",
          "Sales Team Training",
        ],
        cta: "Let's Build Together",
      },
      established: {
        name: "Established",
        description: "Perfect for Enterprise / Organisation-Size Companies in Angola",
        features: [
          "Everything in Starters & Growth",
          "Full Marketing Strategy",
          "Advanced SEO & Digital Advertising",
          "Brand Communication Planning",
          "Ongoing Social Media Management",
          "Sales Team Development",
        ],
        cta: "Let's Build Together",
      },
    },
    custom: {
      name: "Custom Solutions",
      price: "Let's Talk",
      description:
        "Every business is different. Tell us what your company needs, and we'll build a plan around it — no fixed packages, no guesswork. We'll discuss your goals and send you a proposal built specifically for you.",
      features: ["Tailored Strategy", "Custom Scope", "Direct Consultation", "Flexible Pricing"],
      cta: "Contact on WhatsApp",
    },
  },
  finalCta: {
    heading: "Ready to grow your brand in Angola?",
    subheading: "Join the businesses across Angola building stronger brands with IdealIsa.",
    ctaPrimary: "See Our Work",
    ctaSecondary: "Contact on WhatsApp",
    finePrint: "No fixed packages — every plan is built around your business.",
  },
  footer: {
    tagline: "Strategy that positions. Communication that strengthens.",
    columns: {
      services: {
        header: "Services",
        links: [
          "Strategy & Branding",
          "Corporate Communication",
          "Project Management",
          "Marketing & Digital Communication",
          "Technology & Digital Solutions",
        ],
      },
      resources: {
        header: "Resources",
        links: ["Who We Are", "What We Do", "Blog", "Our Clients", "Training & Development"],
      },
      company: {
        header: "Company",
        links: ["About IdealIsa", "Careers", "Our Culture", "Testimonials", "Contact Us"],
      },
      legal: {
        header: "Legal",
        links: ["Privacy Policy", "Terms of Service", "Our Commitment", "Mission & Values", "Our Essence"],
      },
    },
    copyrightSuffix: "All rights reserved.",
  },
}

type Translations = typeof en

const ptAO: Translations = {
  navbar: {
    services: "Nossos Serviços",
    company: "Empresa",
    blog: "Blog",
    contact: "Contacte-nos",
  },
  hero: {
    badge: "Reconhecida em toda a Angola.",
    headlineLine1: "Venda mais rápido.",
    headlineLine2: "Lucre de forma inteligente.",
    subtext:
      "Somos uma empresa especializada em estratégia de marca, comunicação corporativa e gestão de projectos.",
    ctaPrimary: "Veja o nosso trabalho",
    ctaSecondary: "Contacte-nos pelo WhatsApp",
    trustPrefix: "",
    trustNumber: "1.000+",
    trustSuffix: "empresas em Angola confiam em nós.",
  },
  logoMarquee: {
    heading: "Marcas que Confiam em Nós em Angola",
  },
  bentoGrid: {
    heading: "Tudo o que a Idealisa traz para a mesa",
    subheading: "Criado para empresas e organizações em Angola que querem que a sua marca tenha significado.",
    strategy: {
      title: "ESTRATÉGIA DE MARCA E BRANDING",
      description: "Estruturamos marcas com clareza, identidade e capacidade de diferenciação.",
      stats: {
        identity: "Identidade",
        positioning: "Posicionamento",
        voice: "Voz",
        branding: "Branding",
      },
    },
    communication: {
      title: "COMUNICAÇÃO CORPORATIVA",
      description: "Estruturamos a comunicação como um activo estratégico para gerar confiança, credibilidade e valor institucional.",
      badgeAvailability: "24/7",
      badgeVoice: "Voz de Confiança",
    },
    projectManagement: {
      title: "GESTÃO DE PROJECTOS",
      description: "Transformamos orientações estratégicas em projectos estruturado, coordenamos e orientamos para o impacto.",
    },
    marketing: {
      title: "TECNOLOGIA E SOLUÇÕES DIGITAIS",
      description: "Desenvolvimento e implementação de soluções tecnológicas adequadas a cada projecto.",
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
    priceSuffixMonth: "/mês",
    plans: {
      starters: {
        name: "Iniciante",
        description: "Perfeito para Pequenas Empresas em Angola",
        features: ["Consultoria", "Posicionamento", "Diagnóstico", "Descoberta", "Compreensão", "Avaliação", "Escuta"],
        cta: "Começar Agora",
      },
      growth: {
        name: "Crescimento",
        description: "Perfeito para Empresas de Média Dimensão em Angola",
        features: [
          "Tudo do plano Iniciante",
          "Criação de Website",
          "Gestão de Redes Sociais",
          "SEO Básico",
          "Materiais de Marketing",
          "Formação da Equipa de Vendas",
        ],
        cta: "Vamos Construir Juntos",
      },
      established: {
        name: "Consolidada",
        description: "Perfeito para Empresas / Organizações de Grande Dimensão em Angola",
        features: [
          "Tudo dos planos Iniciante e Crescimento",
          "Estratégia de Marketing Completa",
          "SEO Avançado & Publicidade Digital",
          "Planeamento de Comunicação de Marca",
          "Gestão Contínua de Redes Sociais",
          "Desenvolvimento da Equipa de Vendas",
        ],
        cta: "Vamos Construir Juntos",
      },
    },
    custom: {
      name: "Soluções Personalizadas",
      price: "Vamos Conversar",
      description:
        "Cada negócio é diferente. Diga-nos do que a sua empresa precisa e construiremos um plano à sua medida — sem pacotes fixos, sem adivinhações. Vamos discutir os seus objetivos e enviar-lhe uma proposta feita especificamente para si.",
      features: ["Estratégia Personalizada", "Âmbito à Medida", "Consultoria Direta", "Preços Flexíveis"],
      cta: "Contactar via WhatsApp",
    },
  },
  finalCta: {
    heading: "Pronto para Fazer Crescer a Sua Marca em Angola?",
    subheading: "Junte-se às empresas em Angola que estão a construir marcas mais fortes com a IdealIsa.",
    ctaPrimary: "Veja o Nosso Trabalho",
    ctaSecondary: "Contactar via WhatsApp",
    finePrint: "Sem pacotes fixos — cada plano é construído à volta do seu negócio.",
  },
  footer: {
    tagline: "Estratégia que posiciona. Comunicação que fortalece.",
    columns: {
      services: {
        header: "Serviços",
        links: [
          "Estratégia & Branding",
          "Comunicação Corporativa",
          "Gestão de Projetos",
          "Marketing & Comunicação Digital",
          "Tecnologia & Soluções Digitais",
        ],
      },
      resources: {
        header: "Recursos",
        links: ["Quem Somos", "O Que Fazemos", "Blog", "Os Nossos Clientes", "Formação & Desenvolvimento"],
      },
      company: {
        header: "Empresa",
        links: ["Sobre a IdealIsa", "Carreiras", "A Nossa Cultura", "Testemunhos", "Contacte-nos"],
      },
      legal: {
        header: "Legal",
        links: ["Política de Privacidade", "Termos de Serviço", "O Nosso Compromisso", "Missão & Valores", "A Nossa Essência"],
      },
    },
    copyrightSuffix: "Todos os direitos reservados.",
  },
}

export const translations: Record<Language, Translations> = { en, "pt-AO": ptAO }

export type { Translations }
