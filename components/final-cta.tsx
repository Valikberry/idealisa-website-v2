"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/language-context";
import { ROUTES } from "@/lib/routes";

type FinalCTAProps = {
  company?: {
    heading: string;
    sub: string;
    primary: string;
    secondary: string;
  };
};

export function FinalCTA({ company }: FinalCTAProps = {}) {
  const t = useTranslation();

  return (
    <section
      style={{
        padding: company ? "8px 16px 48px" : "40px 16px",
        background: "#f4f4f5",
      }}
    >
      <div
        style={{
          maxWidth: "1024px",
          margin: "0 auto",
          border: "1px solid #cfc6ba",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.15fr) minmax(0,0.85fr)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              ...(company ? { justifyContent: "center" as const } : {}),
              padding: company ? "34px" : "36px 34px",
            }}
          >
            <h2
              style={{
                fontSize: "29px",
                lineHeight: "36px",
                fontWeight: "700",
                color: "#0a0a0a",
                margin: "0",
                fontFamily: "var(--font-instrument-sans),sans-serif",
                textWrap: "pretty",
              }}
            >
              {company?.heading ?? t.finalCta.heading}
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "24px",
                color: "#52525b",
                margin: "0",
                textWrap: "pretty",
              }}
            >
              {company?.sub ?? t.finalCta.subheading}
            </p>
            {!company && (
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "20px",
                  color: "#8a5a1f",
                  fontWeight: "600",
                  margin: "4px 0 0",
                }}
              >
                {t.finalCta.finePrint}
              </p>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "12px",
              padding: company ? "34px" : "36px 34px",
              borderLeft: "1px solid #cfc6ba",
              background: "#f4f4f5",
            }}
          >
            <a
              href="https://wa.me/244936499706"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "14px",
                padding: "14px 20px",
                background: "#2E7D32",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "background .2s",
              }}
            >
              {company?.secondary ?? t.finalCta.ctaSecondary}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <Link
              href={company ? ROUTES.contact : ROUTES.services}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "14px",
                padding: "14px 20px",
                border: "1px solid #cfc6ba",
                background: "#ffffff",
                color: "#0a0a0a",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "background .2s",
              }}
            >
              {company?.primary ?? t.finalCta.ctaPrimary}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8a5a1f"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
