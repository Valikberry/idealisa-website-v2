import type { Language } from "@/lib/translations";
import type { RoutePageKey } from "@/lib/routes";

type SeoCopy = { title: string; description: string };

/** Page-specific search copy. No language alternates: both locales share URLs. */
export const pageSeo: Record<Language, Record<RoutePageKey, SeoCopy>> = {
  "pt-AO": {
    home: {
      title: "Marketing Digital e Agência de Branding em Angola",
      description:
        "Estratégia de marca, marketing digital e comunicação corporativa em Luanda, Angola. A Idealisa ajuda empresas a posicionar a marca e a crescer com clareza.",
    },
    company: {
      title: "Sobre a Idealisa — Agência de Marketing em Luanda",
      description:
        "Conheça a Idealisa, agência de estratégia de marca, comunicação e marketing digital em Luanda. Conhecimento do mercado angolano e foco no seu negócio.",
    },
    services: {
      title: "Serviços de Marketing Digital e Branding em Angola",
      description:
        "Explore os serviços da Idealisa em Angola: branding, comunicação corporativa, redes sociais, websites e gestão de projectos. Estratégia e execução em Luanda.",
    },
    smm: {
      title: "Gestão de Redes Sociais em Angola e Luanda",
      description:
        "Gestão de redes sociais em Luanda, Angola: estratégia, conteúdos, campanhas pagas e comunidade. A Idealisa liga a presença digital aos objectivos da sua empresa.",
    },
    brand: {
      title: "Estratégia de Marca e Agência de Branding em Luanda",
      description:
        "Branding em Luanda, Angola: posicionamento, naming, identidade e comunicação de marca. A Idealisa transforma conhecimento do negócio numa marca consistente.",
    },
    pm: {
      title: "Gestão de Projectos em Angola e Luanda",
      description:
        "Gestão de projectos em Luanda, Angola, com a Idealisa. Planeamento, coordenação de equipas e acompanhamento da execução, dos objectivos à entrega.",
    },
    portfolio: {
      title: "Portefólio de Branding e Marketing em Angola",
      description:
        "Conheça projectos da Idealisa em Angola: identidade de marca, comunicação, websites e conteúdos. Veja o trabalho desenvolvido para empresas e instituições.",
    },
    contact: {
      title: "Contacte a Idealisa em Luanda, Angola",
      description:
        "Fale com a Idealisa sobre branding, marketing digital ou gestão de projectos. Estamos no Maculusso, Luanda. Ligue +244 936 499 706 ou envie uma mensagem.",
    },
    privacy: {
      title: "Política de Privacidade",
      description:
        "Saiba como a Idealisa recolhe, utiliza e protege dados pessoais de clientes, candidatos e visitantes, e como exercer os seus direitos de privacidade.",
    },
    terms: {
      title: "Termos de Serviço",
      description:
        "Consulte os termos dos serviços da Idealisa: âmbito do trabalho, responsabilidades, pagamentos, propriedade intelectual e confidencialidade em Angola.",
    },
    cookies: {
      title: "Política de Cookies",
      description:
        "Conheça os cookies utilizados no site da Idealisa, a sua finalidade e como bloquear ou eliminar cookies nas definições do seu navegador.",
    },
    testimonials: {
      title: "Testemunhos de Clientes da Idealisa em Angola",
      description:
        "Leia os testemunhos das equipas que trabalham com a Idealisa em Angola, sobre estratégia, conteúdos, tecnologia e resultados para os seus negócios.",
    },
    blog: {
      title: "Blog de Marketing Digital e Branding em Angola",
      description:
        "Artigos da Idealisa sobre branding, redes sociais, Google Ads e marketing digital em Angola. Ideias para decisões de negócio mais informadas.",
    },
  },
  en: {
    home: {
      title: "Digital Marketing and Branding Agency in Angola",
      description:
        "Brand strategy, digital marketing and corporate communication in Luanda, Angola. Idealisa helps businesses position their brands and grow with clarity.",
    },
    company: {
      title: "About Idealisa — Marketing Agency in Luanda",
      description:
        "Meet Idealisa, a brand strategy, communication and digital marketing agency in Luanda. Local knowledge of Angola and a focus on your business.",
    },
    services: {
      title: "Digital Marketing and Branding Services in Angola",
      description:
        "Explore Idealisa's services in Angola: branding, corporate communication, social media, websites and project management. Strategy and delivery in Luanda.",
    },
    smm: {
      title: "Social Media Management in Angola and Luanda",
      description:
        "Social media management in Luanda, Angola: strategy, content, paid campaigns and community. Idealisa connects your digital presence to your business goals.",
    },
    brand: {
      title: "Brand Strategy and Branding Agency in Luanda",
      description:
        "Branding in Luanda, Angola: positioning, naming, identity and brand communication. Idealisa turns business insight into a consistent brand.",
    },
    pm: {
      title: "Project Management in Angola and Luanda",
      description:
        "Project management in Luanda, Angola with Idealisa. Planning, team coordination and delivery oversight, from agreed objectives to completed work.",
    },
    portfolio: {
      title: "Branding and Marketing Portfolio in Angola",
      description:
        "Explore Idealisa's projects in Angola: brand identity, communication, websites and content. See our work for businesses and institutions.",
    },
    contact: {
      title: "Contact Idealisa in Luanda, Angola",
      description:
        "Talk to Idealisa about branding, digital marketing or project management. Find us in Maculusso, Luanda. Call +244 936 499 706 or send a message.",
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "Learn how Idealisa collects, uses and protects the personal data of clients, candidates and visitors, and how to exercise your privacy rights.",
    },
    terms: {
      title: "Terms of Service",
      description:
        "Read Idealisa's service terms: scope of work, responsibilities, payments, intellectual property and confidentiality for engagements in Angola.",
    },
    cookies: {
      title: "Cookie Policy",
      description:
        "Learn which cookies the Idealisa website uses, why it uses them, and how to block or delete cookies in your browser settings.",
    },
    testimonials: {
      title: "Client Testimonials — Idealisa Angola",
      description:
        "Read what teams working with Idealisa in Angola say about brand strategy, content, technology and results for their businesses.",
    },
    blog: {
      title: "Digital Marketing and Branding Blog in Angola",
      description:
        "Idealisa articles on branding, social media, Google Ads and digital marketing in Angola. Ideas to help you make better business decisions.",
    },
  },
};
