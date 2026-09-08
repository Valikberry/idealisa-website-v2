import { pageMetadata } from "@/lib/seo/server";
import { PageStructuredData } from "@/components/seo-json-ld";
import { DocPage } from "@/components/doc-page";

export const generateMetadata = () => pageMetadata("testimonials");

export default function Page() {
  return (
    <>
      <DocPage docKey="testimonials" />
      <PageStructuredData pageKey="testimonials" />
    </>
  );
}
