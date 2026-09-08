import { pageMetadata } from "@/lib/seo/server";
import { PageStructuredData } from "@/components/seo-json-ld";
import { ServiceDetail } from "@/components/service-detail";

export const generateMetadata = () => pageMetadata("pm");

export default function Page() {
  return (
    <>
      <ServiceDetail service="pm" />
      <PageStructuredData pageKey="pm" />
    </>
  );
}
