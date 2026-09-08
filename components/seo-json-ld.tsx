import type { RoutePageKey } from "@/lib/routes";
import { getPost, getSeoLanguage } from "@/lib/seo/server";
import { pageGraph, postGraph, siteGraph } from "@/lib/seo/structured-data";

/** Escape HTML-significant characters before embedding JSON in a script. */
function JsonLd({
  id,
  graph,
}: {
  id: string;
  graph: Record<string, unknown>[];
}) {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  })
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

export async function SiteStructuredData() {
  return <JsonLd id="site-jsonld" graph={siteGraph(await getSeoLanguage())} />;
}

export async function PageStructuredData({
  pageKey,
}: {
  pageKey: RoutePageKey;
}) {
  return (
    <JsonLd
      id="page-jsonld"
      graph={pageGraph(pageKey, await getSeoLanguage())}
    />
  );
}

export async function PostStructuredData({ slug }: { slug: string }) {
  const language = await getSeoLanguage();
  return (
    <JsonLd
      id="page-jsonld"
      graph={postGraph(getPost(slug, language), language)}
    />
  );
}
