import "server-only";
import { BLOG_POSTS, type BlogPost } from "@/lib/posts";
import { ROUTES, blogPostRoute, type RoutePageKey } from "@/lib/routes";
import { serviceDetailContent } from "@/lib/content/service-detail";
import { translations, type Language } from "@/lib/translations";
import { absoluteUrl, SITE } from "./config";
import { pageSeo } from "./content";

type Entity = Record<string, unknown>;
const organization = { "@id": SITE.organizationId };
const website = { "@id": SITE.websiteId };

export function siteGraph(language: Language): Entity[] {
  return [
    {
      "@type": "Organization",
      ...organization,
      name: SITE.name,
      alternateName: SITE.organizationAlternateName,
      description: SITE.description,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(SITE.logo),
        width: 512,
        height: 512,
      },
      telephone: SITE.telephone,
      email: SITE.email,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: SITE.telephone,
        email: SITE.email,
        contactType: "customer service",
        areaServed: "AO",
        availableLanguage: ["Portuguese", "English"],
      },
      address: SITE.address,
      areaServed: { "@type": "Country", name: "Angola" },
      sameAs: SITE.sameAs,
    },
    {
      "@type": "WebSite",
      ...website,
      url: SITE.url,
      name: SITE.name,
      alternateName: SITE.websiteAlternateName,
      inLanguage: language,
      publisher: organization,
    },
  ];
}

export function articleEntity(post: BlogPost, language: Language): Entity {
  const url = absoluteUrl(blogPostRoute(post.slug));
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    url,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.datePublished,
    articleSection: post.category,
    inLanguage: language,
    author: organization,
    publisher: organization,
    image: absoluteUrl(SITE.image.url),
    mainEntityOfPage: { "@id": `${url}#webpage` },
    isPartOf: { "@id": `${absoluteUrl(ROUTES.blog)}#blog` },
  };
}

export function postGraph(post: BlogPost, language: Language): Entity[] {
  const url = absoluteUrl(blogPostRoute(post.slug));
  return [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: post.title,
      description: post.excerpt,
      inLanguage: language,
      isPartOf: website,
      mainEntity: { "@id": `${url}#article` },
    },
    articleEntity(post, language),
  ];
}

export function pageGraph(key: RoutePageKey, language: Language): Entity[] {
  const copy = pageSeo[language][key];
  const url = absoluteUrl(ROUTES[key]);
  const type =
    key === "company"
      ? "AboutPage"
      : key === "contact"
        ? "ContactPage"
        : ["services", "portfolio", "testimonials", "blog"].includes(key)
          ? "CollectionPage"
          : "WebPage";
  const page: Entity = {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: copy.title,
    description: copy.description,
    inLanguage: language,
    isPartOf: website,
    about: organization,
  };
  const graph: Entity[] = [page];
  if (key === "smm" || key === "brand" || key === "pm") {
    const service = serviceDetailContent[language][key];
    page.mainEntity = { "@id": `${url}#service` };
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      url,
      name: service.solutionsHeading,
      description: service.intro,
      serviceType: service.kicker,
      provider: organization,
      areaServed: { "@type": "Country", name: "Angola" },
      mainEntityOfPage: { "@id": `${url}#webpage` },
    });
  }
  if (key === "home") {
    // Only the FAQ actually rendered by components/faq.tsx.
    page["@type"] = ["WebPage", "FAQPage"];
    page.mainEntity = translations[language].faq.items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    }));
  }
  if (key === "blog") {
    page.mainEntity = { "@id": `${url}#blog` };
    graph.push({
      "@type": "Blog",
      "@id": `${url}#blog`,
      url,
      name: copy.title,
      description: copy.description,
      inLanguage: language,
      publisher: organization,
      blogPost: BLOG_POSTS[language].map((post) =>
        articleEntity(post, language),
      ),
    });
  }
  return graph;
}
