import { pageMetadata } from "@/lib/seo/server";
import { PageStructuredData } from "@/components/seo-json-ld";
import PageContent from "./page-content";

export const generateMetadata = () => pageMetadata("services");

export default function Page() {
  return (
    <>
      <PageContent />
      <PageStructuredData pageKey="services" />
    </>
  );
}
