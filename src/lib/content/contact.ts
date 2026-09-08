// Contacto page copy, transcribed from design-reference's PAGES.en.contact /
// PAGES["pt-AO"].contact and the isContact render block ("design-reference/
// Idealisa website design (2)/Idealisa Site.dc.html").
//
// Trimmed to only the fields isContact actually renders: PAGES.contact also
// declares hero.stats, detailsHeading/details, whatsappHeading/whatsappSub
// and a full faqHeading/faqSub/faq — none of those appear anywhere in the
// isContact JSX, so they're left out here (matching how lib/content/services.ts
// and lib/content/portfolio.ts already only transcribe what's rendered).
//
// The form's field labels are the reference's single shared `ui.*` object —
// the same source lib/content/service-detail.ts's `serviceDetailUi` already
// partially transcribes (formName/formPhone/formEmail/formMessage/formSubmit
// match verbatim). Duplicated here self-contained (not imported from
// service-detail.ts) rather than coupling two unrelated page-content
// modules, matching the precedent set by Portfólio's own service-list
// duplication.
import type { Language } from "@/lib/translations";

export type ContactContent = {
  kicker: string;
  formHeading: string;
  formSub: string;
  services: string[];
  map: {
    heading: string;
    address: string[];
    phoneLabel: string;
    emailLabel: string;
    phones: string[];
    email: string;
    directions: string;
  };
  hoursHeading: string;
  hours: { day: string; time: string }[];
  whatsappCta: string;
  cta: {
    heading: string;
    sub: string;
    primary: string;
    secondary: string;
  };
  ui: {
    formName: string;
    formCompany: string;
    formEmail: string;
    formPhone: string;
    formService: string;
    formMessage: string;
    formSubmit: string;
    formSent: string;
    formSentSub: string;
  };
};

const en: ContactContent = {
  kicker: "CONTACT",
  formHeading: "Send us a message",
  formSub: "The more you tell us here, the more useful the first conversation will be.",
  services: [
    "Brand Strategy & Branding",
    "Corporate Communication",
    "Project Management",
    "Technology & Digital Solutions",
    "Not sure yet, I need a diagnosis",
    "Something else",
  ],
  map: {
    heading: "Idealisa, Luanda",
    address: ["Maculusso, Rua Lourenço Mendes da Conceição,", "Luanda, Angola."],
    phoneLabel: "P",
    emailLabel: "E",
    phones: ["+244 936 499 706", "+244 976 055 956", "+244 937 445 450"],
    email: "geral@idealisa.ao",
    directions: "Get directions",
  },
  hoursHeading: "Opening hours",
  hours: [
    { day: "Monday – Thursday", time: "08:00 – 17:00" },
    { day: "Friday", time: "08:00 – 15:00" },
    { day: "Saturday", time: "By appointment" },
    { day: "Sunday", time: "Closed" },
  ],
  whatsappCta: "Contact on WhatsApp",
  cta: {
    heading: "One conversation costs nothing.",
    sub: "Bring the problem as it is, unclear, half-formed, uncomfortable. That is exactly the material we work with.",
    primary: "Send a message",
    secondary: "Contact on WhatsApp",
  },
  ui: {
    formName: "Full name",
    formCompany: "Company",
    formEmail: "Email",
    formPhone: "Phone",
    formService: "What do you need?",
    formMessage: "Tell us about your project",
    formSubmit: "Send message",
    formSent: "Thank you. We have your message.",
    formSentSub: "A member of the team replies within one business day.",
  },
};

const ptAO: ContactContent = {
  kicker: "CONTACTOS",
  formHeading: "Envie-nos uma mensagem",
  formSub: "Quanto mais nos contar aqui, mais útil será a primeira conversa.",
  services: [
    "Estratégia de Marca e Branding",
    "Comunicação Corporativa",
    "Gestão de Projectos",
    "Tecnologia e Soluções Digitais",
    "Ainda não sei, preciso de um diagnóstico",
    "Outro assunto",
  ],
  map: {
    heading: "Idealisa, Luanda",
    address: ["Maculusso, Rua Lourenço Mendes da Conceição,", "Luanda, Angola."],
    phoneLabel: "T",
    emailLabel: "E",
    phones: ["+244 936 499 706", "+244 976 055 956", "+244 937 445 450"],
    email: "geral@idealisa.ao",
    directions: "Ver direcções",
  },
  hoursHeading: "Horário",
  hours: [
    { day: "Segunda – Quinta", time: "08:00 – 17:00" },
    { day: "Sexta", time: "08:00 – 15:00" },
    { day: "Sábado", time: "Por marcação" },
    { day: "Domingo", time: "Encerrado" },
  ],
  whatsappCta: "Contactar via WhatsApp",
  cta: {
    heading: "Uma conversa não custa nada.",
    sub: "Traga o problema como ele é, pouco claro, mal formado, incómodo. É exactamente esse o material com que trabalhamos.",
    primary: "Enviar mensagem",
    secondary: "Contactar via WhatsApp",
  },
  ui: {
    formName: "Nome completo",
    formCompany: "Empresa",
    formEmail: "Email",
    formPhone: "Telefone",
    formService: "Do que precisa?",
    formMessage: "Fale-nos do seu projecto",
    formSubmit: "Enviar mensagem",
    formSent: "Obrigado. Recebemos a sua mensagem.",
    formSentSub: "Um membro da equipa responde no prazo de um dia útil.",
  },
};

export const contactContent: Record<Language, ContactContent> = {
  en,
  "pt-AO": ptAO,
};
