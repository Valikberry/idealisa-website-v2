import type { Language } from "@/lib/translations";

const en = {
  hero: {
    eyebrow: "Blog",
    title: "Notes on brand, business and Angola.",
    sub: "What we learn building brands in this market, written for the people who have to make the decisions, not for other agencies.",
    stats: [
      { value: "Weekly", label: "New writing" },
      { value: "PT / EN", label: "Published in both" },
      { value: "06", label: "Topics we cover" },
      { value: "No fluff", label: "Editorial policy" },
    ],
  },
  categories: ["Brand strategy", "Digital"],
  featuredLabel: "Featured",
  kicker: "Blog",
  latestHeading: "What is changing in digital, and what it means for you",
  latestSub:
    "Digital changes every day. Our blog gives a comprehensive view of shifting technologies, the latest social media trends and our own take on what is going on digitally. Have a look.",
  emptyLabel: "Nothing published under this topic yet.",
  newsletter: {
    heading: "One considered email a month.",
    sub: "Strategy notes, market reading and the occasional uncomfortable question. No campaigns, no sales sequence.",
    placeholder: "your@company.ao",
    cta: "Subscribe",
    fine: "We write in Portuguese and English. Unsubscribe in one click.",
  },
  relatedHeading: "Keep reading",
};
const ptAO = {
  hero: {
    eyebrow: "Blog",
    title: "Notas sobre marca, negócio e Angola.",
    sub: "O que aprendemos a construir marcas neste mercado, escrito para quem tem de decidir, não para outras agências.",
    stats: [
      { value: "Semanal", label: "Novos textos" },
      { value: "PT / EN", label: "Publicado nas duas" },
      { value: "06", label: "Temas que cobrimos" },
      { value: "Sem ruído", label: "Política editorial" },
    ],
  },
  categories: ["Estratégia de marca", "Digital"],
  featuredLabel: "Em destaque",
  kicker: "Blog",
  latestHeading:
    "O que está a mudar no digital, e o que isso significa para si",
  latestSub:
    "O digital muda todos os dias. O nosso blog reúne uma visão abrangente das tecnologias em mudança, das últimas tendências das redes sociais e a nossa leitura do que está a acontecer. Dê uma olhada.",
  emptyLabel: "Ainda não há textos publicados neste tema.",
  newsletter: {
    heading: "Um email pensado por mês.",
    sub: "Notas de estratégia, leitura de mercado e, de vez em quando, uma pergunta incómoda. Sem campanhas, sem sequências de venda.",
    placeholder: "seu@empresa.ao",
    cta: "Subscrever",
    fine: "Escrevemos em português e inglês. Cancele com um clique.",
  },
  relatedHeading: "Continuar a ler",
};
export const blogContent = { en, "pt-AO": ptAO };
export const blogUi: Record<
  Language,
  {
    backToBlog: string;
    readMore: string;
    minRead: string;
    allTopics: string;
    share: string;
    written: string;
    searchPlaceholder: string;
    postImageSlot: string;
    formSent: string;
  }
> = {
  en: {
    backToBlog: "All articles",
    readMore: "Read article",
    minRead: "min read",
    allTopics: "All topics",
    share: "Share",
    written: "Written by the Idealisa team",
    searchPlaceholder: "Search articles",
    postImageSlot: "Drop the article image",
    formSent: "Thank you. We have your message.",
  },
  "pt-AO": {
    backToBlog: "Todos os artigos",
    readMore: "Ler artigo",
    minRead: "min de leitura",
    allTopics: "Todos os temas",
    share: "Partilhar",
    written: "Escrito pela equipa Idealisa",
    searchPlaceholder: "Pesquisar artigos",
    postImageSlot: "Coloque a imagem do artigo",
    formSent: "Obrigado. Recebemos a sua mensagem.",
  },
};
