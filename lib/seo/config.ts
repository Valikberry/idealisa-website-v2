export const SITE = {
  name: "Idealisa",
  url: "https://idealisa.ao",
  organizationId: "https://idealisa.ao/#org",
  websiteId: "https://idealisa.ao/#site",
  telephone: "+244936499706",
  email: "geral@idealisa.ao",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Maculusso, Rua Lourenço Mendes da Conceição",
    addressLocality: "Luanda",
    addressCountry: "AO",
  },
  sameAs: [
    "https://www.linkedin.com/company/139724042/",
    "https://www.facebook.com/IdealIsamkt",
    "https://www.instagram.com/idealisa.ao/",
  ],
  image: {
    url: "/seo/idealisa-og.png",
    width: 1200,
    height: 630,
    alt: "Idealisa — Estratégia de marca e marketing digital em Luanda, Angola",
  },
  logo: "/seo/idealisa-logo-512.png",
} as const;

export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).href;
}
