import type { MetadataRoute } from "next";
import { ROUTES, blogPostRoute } from "@/lib/routes";
import { BLOG_POSTS } from "@/lib/posts";
import { absoluteUrl, SITE } from "@/lib/seo/config";

export default function sitemap(): MetadataRoute.Sitemap {
  // These documents explicitly say "Last updated, 1 September 2026".
  const documentDates: Record<string, string> = {
    [ROUTES.privacy]: "2026-09-01",
    [ROUTES.terms]: "2026-09-01",
    [ROUTES.cookies]: "2026-09-01",
  };
  return [
    ...Object.values(ROUTES).map((path) => ({
      // Match the trailing-slash-free form Next's metadata resolver renders
      // for the homepage's own canonical/og:url (lib/seo/server.ts) — every
      // other path already has no trailing slash, so this only affects "/".
      url: path === ROUTES.home ? SITE.url : absoluteUrl(path),
      ...(documentDates[path] ? { lastModified: documentDates[path] } : {}),
    })),
    // Publication dates are not invented modification dates.
    ...BLOG_POSTS["pt-AO"].map((post) => ({
      url: absoluteUrl(blogPostRoute(post.slug)),
    })),
  ];
}
