// Portfólio page copy, transcribed verbatim from design-reference's
// PAGES.en.portfolio / PAGES["pt-AO"].portfolio and the isPortfolio render
// block ("design-reference/Idealisa website design (2)/Idealisa Site.dc.html").
//
// The lead-capture form's service options mirror PAGES.*.contact.services —
// duplicated here (rather than imported) since the Contact page (/contacto)
// doesn't exist in this codebase yet. Once it's built, consider sharing this
// list from there instead.
import type { Language } from "@/lib/translations";

export type PortfolioWorkItem = {
  client: string;
  sector: string;
  line: string;
  disciplines: string;
  /** Solid-color fallback for clients without a real photo yet. */
  tint: string;
  /** Set once a real photograph exists for this client — swaps out `tint`. */
  image?: string;
};

export type PortfolioContent = {
  hero: {
    eyebrow: string;
    title: string;
    sub: string;
  };
  workKicker: string;
  workHeading: string;
  workSub: string;
  work: PortfolioWorkItem[];
  caseKicker: string;
  caseHeading: string;
  gate: {
    kicker: string;
    heading: string;
    sub: string;
    name: string;
    phone: string;
    email: string;
    service: string;
    serviceOptions: string[];
    submit: string;
    fine: string;
    sent: string;
    sentSub: string;
  };
};

const en: PortfolioContent = {
  hero: {
    eyebrow: "Portfolio",
    title: "The work, and what it did for the business",
    sub: "Brands we have positioned, campaigns we have run and platforms we have built in Angola. Ask for the full portfolio and we will send it over.",
  },
  workKicker: "Hall of fame",
  workHeading: "Clients we build brands with",
  workSub: "A sample of engagements across hospitality, institutions, property and services.",
  work: [
    {
      client: "Restaurante Malamu",
      sector: "Hospitality",
      line: "Positioning, editorial line and content for a Luanda restaurant, run alongside its commercial team.",
      disciplines: "Strategy · Social · Paid media",
      tint: "#4A3127",
      image: "/malamu.webp",
    },
    {
      client: "Diesel Barbershop",
      sector: "Grooming",
      line: "Brand refresh and a search and social campaign built to fill chairs on weekdays.",
      disciplines: "Brand · Search · Social",
      tint: "#2E7D32",
    },
    {
      client: "Coroa Azul Piscinas",
      sector: "Construction & leisure",
      line: "Identity and a digital presence that shows the craft behind each pool built.",
      disciplines: "Identity · Website · Content",
      tint: "#8a5a1f",
    },
    {
      client: "AEBRAN",
      sector: "Institutional",
      line: "Institutional communication, event coverage and a consistent voice for members and press.",
      disciplines: "Communication · Press · Production",
      tint: "#2f4f7a",
      image: "/aebran.webp",
    },
    {
      client: "Residencial Villa Aurora",
      sector: "Real estate",
      line: "Launch communication for a residential development, from naming through to enquiry flow.",
      disciplines: "Brand · Campaign · Landing pages",
      tint: "#6b4a8a",
      image: "/villa-aurora.webp",
    },
    {
      client: "JBDM",
      sector: "Professional services",
      line: "A website and digital positioning that match how the firm actually works.",
      disciplines: "UX · Development · Copy",
      tint: "#0f5f5c",
      image: "/jbdm.webp",
    },
  ],
  caseKicker: "In detail",
  caseHeading: "Two engagements, start to result",
  gate: {
    kicker: "Full portfolio",
    heading: "Please enter your details to receive our portfolio",
    sub: "We will send the full deck, project by project, with the numbers we are allowed to share.",
    name: "Your name",
    phone: "Phone number",
    email: "Company email",
    service: "Services you are looking for",
    serviceOptions: [
      "Brand Strategy & Branding",
      "Corporate Communication",
      "Project Management",
      "Technology & Digital Solutions",
      "Not sure yet, I need a diagnosis",
      "Something else",
    ],
    submit: "Send me the portfolio",
    fine: "We use your details to send the portfolio and follow up once. Nothing else.",
    sent: "On its way.",
    sentSub: "Check your inbox in the next few minutes. If it does not arrive, write to geral@idealisa.ao.",
  },
};

const ptAO: PortfolioContent = {
  hero: {
    eyebrow: "Portfólio",
    title: "O trabalho, e o que ele fez pelo negócio",
    sub: "Marcas que posicionámos, campanhas que corremos e plataformas que construímos em Angola. Peça o portfólio completo e enviamos.",
  },
  workKicker: "Hall of fame",
  workHeading: "Clientes com quem construímos marcas",
  workSub: "Uma amostra de projectos em hotelaria, instituições, imobiliário e serviços.",
  work: [
    {
      client: "Restaurante Malamu",
      sector: "Restauração",
      line: "Posicionamento, linha editorial e conteúdo para um restaurante em Luanda, em conjunto com a equipa comercial.",
      disciplines: "Estratégia · Redes sociais · Media paga",
      tint: "#4A3127",
      image: "/malamu.webp",
    },
    {
      client: "Diesel Barbershop",
      sector: "Barbearia",
      line: "Renovação de marca e campanha de pesquisa e redes sociais para encher as cadeiras durante a semana.",
      disciplines: "Marca · Pesquisa · Redes sociais",
      tint: "#2E7D32",
    },
    {
      client: "Coroa Azul Piscinas",
      sector: "Construção & lazer",
      line: "Identidade e presença digital que mostram o cuidado por trás de cada piscina construída.",
      disciplines: "Identidade · Website · Conteúdo",
      tint: "#8a5a1f",
    },
    {
      client: "AEBRAN",
      sector: "Institucional",
      line: "Comunicação institucional, cobertura de eventos e uma voz consistente para membros e imprensa.",
      disciplines: "Comunicação · Imprensa · Produção",
      tint: "#2f4f7a",
      image: "/aebran.webp",
    },
    {
      client: "Residencial Villa Aurora",
      sector: "Imobiliário",
      line: "Comunicação de lançamento de um empreendimento residencial, do nome ao percurso de contacto.",
      disciplines: "Marca · Campanha · Páginas de destino",
      tint: "#6b4a8a",
      image: "/villa-aurora.webp",
    },
    {
      client: "JBDM",
      sector: "Serviços profissionais",
      line: "Um website e um posicionamento digital à altura da forma como a empresa trabalha.",
      disciplines: "UX · Desenvolvimento · Texto",
      tint: "#0f5f5c",
      image: "/jbdm.webp",
    },
  ],
  caseKicker: "Em detalhe",
  caseHeading: "Dois projectos, do início ao resultado",
  gate: {
    kicker: "Portfólio completo",
    heading: "Preencha os seus dados para receber o nosso portfólio",
    sub: "Enviamos o dossier completo, projecto a projecto, com os números que podemos partilhar.",
    name: "O seu nome",
    phone: "Telefone",
    email: "Email da empresa",
    service: "Serviços que procura",
    serviceOptions: [
      "Estratégia de Marca e Branding",
      "Comunicação Corporativa",
      "Gestão de Projectos",
      "Tecnologia e Soluções Digitais",
      "Ainda não sei, preciso de um diagnóstico",
      "Outro assunto",
    ],
    submit: "Enviem-me o portfólio",
    fine: "Usamos os seus dados para enviar o portfólio e fazer um seguimento. Mais nada.",
    sent: "A caminho.",
    sentSub: "Verifique o seu email nos próximos minutos. Se não chegar, escreva para geral@idealisa.ao.",
  },
};

export const portfolioContent: Record<Language, PortfolioContent> = {
  en,
  "pt-AO": ptAO,
};
