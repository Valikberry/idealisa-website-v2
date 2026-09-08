import "server-only";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { cache } from "react";
import { BLOG_POSTS, type BlogPost } from "@/lib/posts";
import { ROUTES, blogPostRoute, type RoutePageKey } from "@/lib/routes";
import { getValidLanguage, type Language } from "@/lib/translations";
import { absoluteUrl, SITE } from "./config";
import { pageSeo } from "./content";

export const getSeoLanguage = cache(async () => {
  const cookieStore = await cookies();
  return getValidLanguage(cookieStore.get("idealisa-locale")?.value);
});

export function getPost(slug: string, language: Language): BlogPost {
  const post = BLOG_POSTS[language].find((post) => post.slug === slug);
  if (!post) notFound();
  return post;
}

function metadataFor(
  title: string,
  description: string,
  path: string,
  language: Language,
  post?: BlogPost,
): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = `${title} | ${SITE.name}`;
  return {
    title,
    description,
    // A cookie-selected translation is not a separate language URL.
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: language === "pt-AO" ? "pt_AO" : "en",
      images: [{ ...SITE.image, url: absoluteUrl(SITE.image.url) }],
      ...(post
        ? {
            type: "article",
            publishedTime: post.datePublished,
            authors: [SITE.url],
            section: post.category,
          }
        : { type: "website" }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: absoluteUrl(SITE.image.url), alt: SITE.image.alt }],
    },
  };
}

export async function rootMetadata(): Promise<Metadata> {
  const language = await getSeoLanguage();
  const copy = pageSeo[language].home;
  const defaults = metadataFor(
    copy.title,
    copy.description,
    ROUTES.home,
    language,
  );
  // Canonicals belong to individual routes, never inherited by a 404.
  const { alternates: _alternates, ...metadata } = defaults;
  return {
    ...metadata,
    metadataBase: new URL(SITE.url),
    title: {
      default: `${copy.title} | ${SITE.name}`,
      template: `%s | ${SITE.name}`,
    },
    icons: {
      icon: [
        {
          url: "/favicon.ico",
          sizes: "16x16 32x32 48x48",
          type: "image/x-icon",
        },
        { url: "/seo/icon-48.png", sizes: "48x48", type: "image/png" },
      ],
      apple: [
        { url: "/seo/apple-icon-180.png", sizes: "180x180", type: "image/png" },
      ],
    },
  };
}

export async function pageMetadata(key: RoutePageKey): Promise<Metadata> {
  const language = await getSeoLanguage();
  const copy = pageSeo[language][key];
  return metadataFor(copy.title, copy.description, ROUTES[key], language);
}

/**
 * Home's own generateMetadata resolves for the same "/" segment as the root
 * layout's, so — unlike every other route — the layout's `title.template`
 * ("%s | Idealisa") never gets a chance to apply to it. Set the full,
 * already-suffixed title directly so the <title> tag matches what every
 * other page gets (and what home's own og:title/twitter:title already show).
 */
export async function homeMetadata(): Promise<Metadata> {
  const metadata = await pageMetadata("home");
  return { ...metadata, title: `${metadata.title} | ${SITE.name}` };
}

export async function postMetadata(slug: string): Promise<Metadata> {
  const language = await getSeoLanguage();
  const post = getPost(slug, language);
  return metadataFor(
    post.title,
    post.excerpt,
    blogPostRoute(post.slug),
    language,
    post,
  );
}
