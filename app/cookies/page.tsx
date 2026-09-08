import { pageMetadata } from "@/lib/seo/server";
import { PageStructuredData } from "@/components/seo-json-ld";
import { DocPage } from "@/components/doc-page";

export const generateMetadata = () => pageMetadata("cookies");

export default function Page() {
  return (
    <>
      <DocPage docKey="cookies" />
      <PageStructuredData pageKey="cookies" />
    </>
  );
}
