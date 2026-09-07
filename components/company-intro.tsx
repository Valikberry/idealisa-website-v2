"use client";

import { useTranslation } from "@/lib/language-context";

export function CompanyIntro() {
  const t = useTranslation();

  return (
    <section
      style={{
        padding: "40px 16px",
        background:
          "radial-gradient(50% 44% at 92% 22%, rgba(160,105,55,.09), transparent 72%), radial-gradient(46% 40% at 8% 30%, rgba(226,146,72,.07), transparent 72%), #ffffff",
      }}
      id="company"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,minmax(0,1fr))",
          maxWidth: "1024px",
          margin: "0 auto",
          border: "1px solid #cfc6ba",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            position: "relative",
            minHeight: "460px",
            borderRight: "1px solid #cfc6ba",
            backgroundColor: "#9c8878",
            backgroundImage: "url(/team-group.png)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "#f4f4f5",
            padding: "44px 40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              gap: "14px",
              marginBottom: "22px",
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
                textAlign: "center",
                flex: "1",
              }}
            >
              {t.whoWeAre.heading}
            </h2>
          </div>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "27px",
              fontWeight: "700",
              color: "#0a0a0a",
              margin: "0 0 16px",
              textWrap: "pretty",
            }}
          >
            {t.whoWeAre.lede}
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "23px",
              color: "#52525b",
              margin: "0 0 14px",
              textWrap: "pretty",
            }}
          >
            {t.whoWeAre.p1}
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "23px",
              color: "#52525b",
              margin: "0 0 20px",
              textWrap: "pretty",
            }}
          >
            {t.whoWeAre.p2}
          </p>
          <a
            href="#company"
            style={{
              alignSelf: "flex-start",
              fontSize: "15px",
              fontWeight: "600",
              color: "#2E7D32",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              cursor: "pointer",
            }}
          >
            {t.whoWeAre.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
