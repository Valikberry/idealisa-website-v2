import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/posts";
import { BlogArticle } from "@/components/blog-article";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!BLOG_POSTS["pt-AO"].some((post) => post.slug === slug)) notFound();
  return <BlogArticle slug={slug} />;
}
