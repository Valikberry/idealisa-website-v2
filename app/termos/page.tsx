import { pageMetadata } from "@/lib/seo/server";
import { PageStructuredData } from "@/components/seo-json-ld";
import { DocPage } from "@/components/doc-page";

export const generateMetadata = () => pageMetadata("terms");

export default function Page() {
  return (
    <>
      <DocPage docKey="terms" />
      <PageStructuredData pageKey="terms" />
    </>
  );
}
