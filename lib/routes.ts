/**
 * Single source of truth mapping the design's page-keys (design-reference's
 * `state.page` values — see PAGES/DOCS/FOOTER_ROUTES in
 * "design-reference/Idealisa website design (2)/Idealisa Site.dc.html")
 * to this site's real Next.js routes.
 *
 * Navbar, Footer and any in-page CTA should link through this table rather
 * than hardcoding paths, so the route for a page only ever changes in one
 * place.
 */
export const ROUTES = {
  home: "/",
  services: "/servicos",
  company: "/empresa",
  portfolio: "/portfolio",
  blog: "/blog",
  contact: "/contacto",
  smm: "/servicos/social-media-marketing",
  brand: "/servicos/branding",
  pm: "/servicos/gestao-de-projetos",
  testimonials: "/testemunhos",
  privacy: "/privacidade",
  terms: "/termos",
  cookies: "/cookies",
} as const;

export type RoutePageKey = keyof typeof ROUTES;

/** `/blog/[slug]` isn't a static entry above since it's data-driven. */
export function blogPostRoute(slug: string): string {
  return `/blog/${slug}`;
}

/** Main navbar links, left to right — mirrors the design's `navDefs`. */
export const NAV_PAGE_KEYS: readonly RoutePageKey[] = [
  "services",
  "company",
  "portfolio",
  "blog",
  "contact",
] as const;

/**
 * Footer column -> per-link destination, in the same order as each column's
 * `links` array in lib/translations.ts. Mirrors the design's
 * `FOOTER_ROUTES` exactly.
 */
export const FOOTER_ROUTES: Record<
  "solutions" | "services" | "company" | "legal",
  readonly RoutePageKey[]
> = {
  solutions: ["brand", "services", "pm", "services"],
  services: ["services", "services", "smm", "services"],
  company: ["company", "portfolio", "blog", "contact"],
  legal: ["privacy", "terms", "cookies", "testimonials"],
};
