import type { Language } from "@/lib/translations";

/**
 * Blog post summaries used by the home page's "Recent Posts" section
 * (design-reference's `recentPosts: allPosts.slice(0, 3)`).
 *
 * Only the first 3 posts (in design-reference's POSTS[lang] order) are
 * ported here, since that's all the home page needs. The full POSTS list
 * (and each post's `lead`/`quote`/`body`) belongs to the future /blog and
 * /blog/[slug] pages, not this batch.
 */
export type PostSummary = {
  id: string;
  category: string;
  date: string;
  read: number;
  tint: string;
  title: string;
  excerpt: string;
};

const en: PostSummary[] = [
  {
    id: "branding-agency",
    category: "Brand strategy",
    date: "3 September 2026",
    read: 7,
    tint: "#4A3127",
    title: "How to Choose the Right Branding Agency in Angola",
    excerpt:
      "Designing a distinctive corporate identity and a defensible position goes well beyond standard graphic design. Here is how to tell the two apart before you sign.",
  },
  {
    id: "twitter-ads",
    category: "Digital",
    date: "28 August 2026",
    read: 5,
    tint: "#2E7D32",
    title: "Twitter (X) Advertising in Angola",
    excerpt:
      "X is small here, loud, and unusually well connected. That combination makes it the wrong first channel and a very good second one.",
  },
  {
    id: "social-cost",
    category: "Digital",
    date: "18 August 2026",
    read: 8,
    tint: "#2E7D32",
    title: "How Much Does Social Media Marketing Cost in Angola?",
    excerpt:
      "Running a commercial enterprise in Angola without an active, aligned social presence is a choice, and so is paying for one badly. Here is what the money actually buys.",
  },
];

const ptAO: PostSummary[] = [
  {
    id: "branding-agency",
    category: "Estratégia de marca",
    date: "3 de Setembro de 2026",
    read: 7,
    tint: "#4A3127",
    title: "Como Escolher a Agência de Branding Certa em Angola",
    excerpt:
      "Criar uma identidade corporativa distinta e uma posição defensável vai muito além de design gráfico. Aqui fica como distinguir as duas coisas antes de assinar.",
  },
  {
    id: "twitter-ads",
    category: "Digital",
    date: "28 de Agosto de 2026",
    read: 5,
    tint: "#2E7D32",
    title: "Publicidade no Twitter (X) em Angola",
    excerpt:
      "O X é pequeno aqui, ruidoso e invulgarmente bem ligado. Essa combinação torna-o o primeiro canal errado e um segundo canal muito bom.",
  },
  {
    id: "social-cost",
    category: "Digital",
    date: "18 de Agosto de 2026",
    read: 8,
    tint: "#2E7D32",
    title: "Quanto Custa Marketing de Redes Sociais em Angola?",
    excerpt:
      "Gerir um negócio em Angola sem uma presença social activa e alinhada é uma escolha, e pagar mal por uma também. Isto é o que o dinheiro compra de facto.",
  },
];

export const POSTS: Record<Language, PostSummary[]> = {
  en,
  "pt-AO": ptAO,
};
