import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { CompanyIntro } from "@/components/company-intro";
import { Industries } from "@/components/industries";
import { ServicePreview } from "@/components/service-preview";
import { BentoGrid } from "@/components/bento-grid";
import { ContactForm } from "@/components/contact-form";
import { CaseStudies } from "@/components/case-studies";
import { Metrics } from "@/components/metrics";
import { Reviews } from "@/components/reviews";
import { RecentPosts } from "@/components/recent-posts";
import { Faq } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <CompanyIntro />
      <Industries />
      <ServicePreview />
      <BentoGrid />
      <ContactForm />
      <CaseStudies />
      <Metrics />
      <Reviews />
      <RecentPosts />
      <Faq />
      <FinalCTA />
    </>
  );
}
