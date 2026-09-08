import { pageMetadata } from "@/lib/seo/server";
import { PageStructuredData } from "@/components/seo-json-ld";
import { BlogListing } from "@/components/blog-listing";

export const generateMetadata = () => pageMetadata("blog");

export default function Page() {
  return (
    <>
      <BlogListing />
      <PageStructuredData pageKey="blog" />
    </>
  );
}
