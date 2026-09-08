import { pageMetadata } from "@/lib/seo/server";
import { PageStructuredData } from "@/components/seo-json-ld";
import { DocPage } from "@/components/doc-page";

export const generateMetadata = () => pageMetadata("privacy");

export default function Page() {
  return (
    <>
      <DocPage docKey="privacy" />
      <PageStructuredData pageKey="privacy" />
    </>
  );
}
