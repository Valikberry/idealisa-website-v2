import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { BentoGrid } from "@/components/bento-grid";
import { Pricing } from "@/components/pricing";
import { FinalCTA } from "@/components/final-cta";

import { CompanyIntro } from "@/components/company-intro";
import { Industries } from "@/components/industries";
import { ServicePreview } from "@/components/service-preview";
import { ContactForm } from "@/components/contact-form";
import { CaseStudies } from "@/components/case-studies";
import { Metrics } from "@/components/metrics";
import { Reviews } from "@/components/reviews";
import { RecentPosts } from "@/components/recent-posts";
import { Faq } from "@/components/faq";

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
      <Pricing />
      <FinalCTA />
    </>
  );
}
