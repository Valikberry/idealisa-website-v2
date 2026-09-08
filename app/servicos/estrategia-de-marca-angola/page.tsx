import { pageMetadata } from "@/lib/seo/server";
import { PageStructuredData } from "@/components/seo-json-ld";
import { ServiceDetail } from "@/components/service-detail";

export const generateMetadata = () => pageMetadata("brand");

export default function Page() {
  return (
    <>
      <ServiceDetail service="brand" />
      <PageStructuredData pageKey="brand" />
    </>
  );
}
