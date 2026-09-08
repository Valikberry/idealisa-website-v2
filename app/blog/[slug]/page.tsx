import { BlogArticle } from "@/components/blog-article";
import { PostStructuredData } from "@/components/seo-json-ld";
import { getPost, getSeoLanguage, postMetadata } from "@/lib/seo/server";

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  return postMetadata((await params).slug);
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  getPost(slug, await getSeoLanguage());
  return (
    <>
      <BlogArticle slug={slug} />
      <PostStructuredData slug={slug} />
    </>
  );
}
