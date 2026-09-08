"use client";

import { useTranslation } from "@/lib/language-context";
import { CaseShowcase } from "@/components/case-showcase";

export function CaseStudies() {
  const t = useTranslation();
  return (
    <section
      style={{ padding: "40px 16px", background: "#f4f4f5" }}
      id="portfolio"
    >
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "700",
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "#2E7D32",
            margin: "0 0 8px",
          }}
        >
          {t.cases.kicker}
        </p>
        <h2
          style={{
            fontSize: "29px",
            lineHeight: "36px",
            fontWeight: "700",
            color: "#0a0a0a",
            margin: "0 0 28px",
            fontFamily: "var(--font-instrument-sans),sans-serif",
          }}
        >
          {t.cases.heading}
        </h2>

        <CaseShowcase />
      </div>
    </section>
  );
}
