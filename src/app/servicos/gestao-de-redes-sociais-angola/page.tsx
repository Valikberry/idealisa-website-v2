import { pageMetadata } from "@/lib/seo/server";
import { PageStructuredData } from "@/components/seo-json-ld";
import { ServiceDetail } from "@/components/service-detail";

export const generateMetadata = () => pageMetadata("smm");

export default function Page() {
  return (
    <>
      <ServiceDetail service="smm" />
      <PageStructuredData pageKey="smm" />
    </>
  );
}
