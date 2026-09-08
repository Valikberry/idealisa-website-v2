"use client";

import { Fragment, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { portfolioContent } from "@/lib/content/portfolio";
import { CaseShowcase } from "@/components/case-showcase";
import { SiteSelect } from "@/components/site-select";

const HERO_BACKGROUND =
  "radial-gradient(56% 46% at 8% 12%, rgba(160,105,55,.18), transparent 72%), radial-gradient(52% 42% at 93% 10%, rgba(226,146,72,.17), transparent 72%), radial-gradient(54% 46% at 90% 90%, rgba(46,125,50,.14), transparent 74%), radial-gradient(56% 48% at 6% 92%, rgba(226,146,72,.14), transparent 74%), #ffffff";

const CONTACT_BACKGROUND =
  "radial-gradient(50% 44% at 92% 22%, rgba(160,105,55,.09), transparent 72%), radial-gradient(46% 40% at 8% 30%, rgba(226,146,72,.07), transparent 72%), radial-gradient(44% 38% at 20% 92%, rgba(46,125,50,.05), transparent 72%), #ffffff";

const kickerStyle = {
  fontSize: "14px",
  lineHeight: "20px",
  fontWeight: "700" as const,
  letterSpacing: ".12em",
  textTransform: "uppercase" as const,
  color: "#2E7D32",
};

const sectionHeadingStyle = {
  fontSize: "29px",
  lineHeight: "36px",
  fontWeight: "700" as const,
  color: "#0a0a0a",
  fontFamily: "var(--font-instrument-sans),sans-serif",
  textWrap: "pretty" as const,
};

const inputStyle = {
  boxSizing: "border-box" as const,
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #cfc6ba",
  background: "#ffffff",
  fontFamily: "inherit",
  fontSize: "14px",
  color: "#0a0a0a",
};

const labelStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "6px",
  fontSize: "12px",
  fontWeight: "600" as const,
  color: "#3f3f46",
};

export default function PortfolioPage() {
  const { language } = useLanguage();
  const pf = portfolioContent[language] ?? portfolioContent.en;

  const [sent, setSent] = useState(false);
  const [service, setService] = useState("");
  const submitGate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section style={{ padding: "150px 16px 32px", background: HERO_BACKGROUND }}>
        <div style={{ maxWidth: "1024px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ ...kickerStyle, margin: "0 0 10px" }}>{pf.hero.eyebrow}</p>
          <h1
            style={{
              fontSize: "36px",
              lineHeight: "44px",
              fontWeight: "700",
              letterSpacing: "-.02em",
              color: "#0a0a0a",
              margin: "0 0 12px",
              fontFamily: "var(--font-instrument-sans),sans-serif",
              textWrap: "pretty",
            }}
          >
            {pf.hero.title}
          </h1>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "24px",
              color: "#52525b",
              margin: "0 auto",
              maxWidth: "700px",
              textWrap: "pretty",
            }}
          >
            {pf.hero.sub}
          </p>
        </div>
      </section>

      {/* Hall of fame + case showcase */}
      <section style={{ padding: "36px 16px 44px", background: "#f4f4f5" }}>
        <div style={{ maxWidth: "1024px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "34px" }}>
          <div>
            <p style={{ ...kickerStyle, margin: "0 0 8px" }}>{pf.workKicker}</p>
            <h2 style={{ ...sectionHeadingStyle, margin: "0 0 6px" }}>{pf.workHeading}</h2>
            <p style={{ fontSize: "15px", lineHeight: "24px", color: "#52525b", margin: "0 0 18px", textWrap: "pretty" }}>
              {pf.workSub}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,minmax(0,1fr))",
                borderTop: "1px solid #cfc6ba",
                borderLeft: "1px solid #cfc6ba",
                background: "#ffffff",
              }}
            >
              {pf.work.map((w) => (
                <Fragment key={w.client}>
                  <div
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      borderRight: "1px solid #cfc6ba",
                      borderBottom: "1px solid #cfc6ba",
                    }}
                  >
                    {/* `image-slot` (not `div`): design-reference.css's mobile
                        hairline-table rule only skips its padding override
                        for cells `:has(image-slot)` — matching the literal
                        tag the reference itself uses for photo placeholders,
                        so our flush, edge-to-edge photo isn't pushed inward
                        with unwanted padding on mobile. */}
                    <image-slot
                      style={{
                        display: "block",
                        position: "relative",
                        height: "160px",
                        borderBottom: "1px solid #cfc6ba",
                        backgroundColor: w.tint,
                        ...(w.image
                          ? {
                              backgroundImage: `url(${w.image})`,
                              backgroundSize: "contain",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                              backgroundOrigin: "content-box" as const,
                              padding: "24px",
                            }
                          : {}),
                      }}
                    ></image-slot>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "20px" }}>
                      <p
                        style={{
                          fontSize: "11px",
                          lineHeight: "15px",
                          fontWeight: "700",
                          letterSpacing: ".1em",
                          textTransform: "uppercase",
                          color: "#8a5a1f",
                          margin: "0",
                        }}
                      >
                        {w.sector}
                      </p>
                      <h3 style={{ fontSize: "17px", lineHeight: "24px", fontWeight: "700", color: "#0a0a0a", margin: "0", textWrap: "pretty" }}>
                        {w.client}
                      </h3>
                      <p style={{ fontSize: "13px", lineHeight: "20px", color: "#52525b", margin: "0", textWrap: "pretty" }}>
                        {w.line}
                      </p>
                      <p style={{ fontSize: "12px", lineHeight: "18px", color: "#71717a", margin: "4px 0 0" }}>
                        {w.disciplines}
                      </p>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          <div>
            <p style={{ ...kickerStyle, margin: "0 0 8px" }}>{pf.caseKicker}</p>
            <h2 style={{ ...sectionHeadingStyle, margin: "0 0 18px" }}>{pf.caseHeading}</h2>
            <CaseShowcase />
          </div>
        </div>
      </section>

      {/* Full portfolio lead-capture band */}
      <section style={{ padding: "40px 16px", background: CONTACT_BACKGROUND }}>
        <div style={{ maxWidth: "1024px", margin: "0 auto", border: "1px solid #cfc6ba", background: "#ffffff" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,0.85fr) minmax(0,1.15fr)" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px", padding: "34px" }}>
              <p style={{ ...kickerStyle, margin: "0" }}>{pf.gate.kicker}</p>
              <h2 style={{ ...sectionHeadingStyle, margin: "0" }}>{pf.gate.heading}</h2>
              <p style={{ fontSize: "15px", lineHeight: "24px", color: "#52525b", margin: "0", textWrap: "pretty" }}>
                {pf.gate.sub}
              </p>
              <p style={{ fontSize: "12px", lineHeight: "18px", color: "#71717a", margin: "0" }}>{pf.gate.fine}</p>
            </div>

            <div style={{ padding: "34px", borderLeft: "1px solid #cfc6ba", background: "#f4f4f5" }}>
              {!sent ? (
                <form
                  onSubmit={submitGate}
                  style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "14px" }}
                >
                  <label style={{ ...labelStyle, gridColumn: "span 2" }}>
                    {pf.gate.name}
                    <input type="text" required style={inputStyle} />
                  </label>
                  <label style={labelStyle}>
                    {pf.gate.phone}
                    <input type="tel" style={inputStyle} />
                  </label>
                  <label style={labelStyle}>
                    {pf.gate.email}
                    <input type="email" required style={inputStyle} />
                  </label>
                  <label style={{ ...labelStyle, gridColumn: "span 2" }}>
                    {pf.gate.service}
                    <SiteSelect
                      value={service}
                      onValueChange={setService}
                      options={pf.gate.serviceOptions}
                      placeholder={pf.gate.service}
                      name="service"
                    />
                  </label>
                  <button
                    type="submit"
                    style={{
                      gridColumn: "span 2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "14px",
                      padding: "13px 18px",
                      background: "#2E7D32",
                      color: "#ffffff",
                      border: "none",
                      fontFamily: "inherit",
                      fontSize: "15px",
                      fontWeight: "700",
                      cursor: "pointer",
                      transition: "background .2s",
                    }}
                  >
                    {pf.gate.submit}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </form>
              ) : (
                <div style={{ border: "1px solid #2E7D32", background: "#ffffff", padding: "32px 24px", textAlign: "center" }}>
                  <p style={{ fontSize: "17px", lineHeight: "24px", fontWeight: "700", color: "#0a0a0a", margin: "0 0 6px" }}>
                    {pf.gate.sent}
                  </p>
                  <p style={{ fontSize: "13px", lineHeight: "20px", color: "#52525b", margin: "0" }}>{pf.gate.sentSub}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
