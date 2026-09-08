"use client";

import { Fragment, useState } from "react";
import { useLanguage, useTranslation } from "@/lib/language-context";
import { contactContent } from "@/lib/content/contact";
import { SiteSelect } from "@/components/site-select";

const HERO_BACKGROUND =
  "radial-gradient(56% 46% at 8% 12%, rgba(160,105,55,.18), transparent 72%), radial-gradient(52% 42% at 93% 10%, rgba(226,146,72,.17), transparent 72%), radial-gradient(54% 46% at 90% 90%, rgba(46,125,50,.14), transparent 74%), radial-gradient(56% 48% at 6% 92%, rgba(226,146,72,.14), transparent 74%), #ffffff";

const CONTACT_BACKGROUND =
  "radial-gradient(50% 44% at 92% 22%, rgba(160,105,55,.09), transparent 72%), radial-gradient(46% 40% at 8% 30%, rgba(226,146,72,.07), transparent 72%), radial-gradient(44% 38% at 20% 92%, rgba(46,125,50,.05), transparent 72%), #ffffff";

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

export default function ContactoPage() {
  const { language } = useLanguage();
  const t = useTranslation();
  const c = contactContent[language] ?? contactContent.en;

  const [sent, setSent] = useState(false);
  const [service, setService] = useState("");
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section style={{ padding: "150px 16px 32px", background: HERO_BACKGROUND }}>
        <div style={{ maxWidth: "1024px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "700",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "#2E7D32",
              margin: "0 0 10px",
            }}
          >
            {c.kicker}
          </p>
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
            {c.formHeading}
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
            {c.formSub}
          </p>
        </div>
      </section>

      {/* Fale connosco header + message form + map/info panel */}
      <section style={{ padding: "36px 16px 44px", background: "#f4f4f5" }}>
        <div style={{ maxWidth: "1024px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "34px" }}>
          <div>
            <p
              style={{
                fontSize: "11px",
                lineHeight: "15px",
                fontWeight: "700",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "#2E7D32",
                margin: "0 0 8px",
              }}
            >
              {t.talk.kicker}
            </p>
            <h2
              style={{
                fontSize: "24px",
                lineHeight: "32px",
                fontWeight: "700",
                color: "#0a0a0a",
                margin: "0 0 4px",
                fontFamily: "var(--font-instrument-sans),sans-serif",
                textWrap: "pretty",
              }}
            >
              {t.talk.sectionHeading}
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "22px", color: "#52525b", margin: "0", textWrap: "pretty" }}>
              {t.talk.sub}
            </p>
          </div>

          <div style={{ border: "1px solid #cfc6ba", background: "#ffffff" }}>
            <div style={{ padding: "30px 32px 34px" }}>
              {!sent ? (
                <form
                  onSubmit={submitForm}
                  style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "14px" }}
                >
                  <label style={labelStyle}>
                    {c.ui.formName}
                    <input type="text" required style={inputStyle} />
                  </label>
                  <label style={labelStyle}>
                    {c.ui.formCompany}
                    <input type="text" style={inputStyle} />
                  </label>
                  <label style={labelStyle}>
                    {c.ui.formEmail}
                    <input type="email" required style={inputStyle} />
                  </label>
                  <label style={labelStyle}>
                    {c.ui.formPhone}
                    <input type="tel" style={inputStyle} />
                  </label>
                  <label style={{ ...labelStyle, gridColumn: "span 2" }}>
                    {c.ui.formService}
                    <SiteSelect
                      value={service}
                      onValueChange={setService}
                      options={c.services}
                      placeholder={c.ui.formService}
                      name="service"
                    />
                  </label>
                  <label style={{ ...labelStyle, gridColumn: "span 2" }}>
                    {c.ui.formMessage}
                    <textarea rows={5} required style={{ ...inputStyle, resize: "vertical" }} />
                  </label>
                  <button
                    type="submit"
                    className="hover-green"
                    style={{
                      gridColumn: "span 2",
                      padding: "13px 18px",
                      background: "#2E7D32",
                      color: "#ffffff",
                      border: "none",
                      fontFamily: "inherit",
                      fontSize: "14px",
                      fontWeight: "700",
                      cursor: "pointer",
                      transition: "background .2s",
                    }}
                  >
                    {c.ui.formSubmit}
                  </button>
                </form>
              ) : (
                <div style={{ border: "1px solid #2E7D32", background: "#ffffff", padding: "32px 24px", textAlign: "center" }}>
                  <p style={{ fontSize: "17px", lineHeight: "24px", fontWeight: "700", color: "#0a0a0a", margin: "0 0 6px" }}>
                    {c.ui.formSent}
                  </p>
                  <p style={{ fontSize: "13px", lineHeight: "20px", color: "#52525b", margin: "0" }}>{c.ui.formSentSub}</p>
                </div>
              )}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1.1fr) minmax(0,0.9fr)",
              border: "1px solid #cfc6ba",
              background: "#ffffff",
            }}
          >
            <div style={{ minHeight: "380px", borderRight: "1px solid #cfc6ba" }}>
              <iframe
                title={c.map.heading}
                src="https://www.google.com/maps?q=Rua%20Louren%C3%A7o%20Mendes%20da%20Concei%C3%A7%C3%A3o%2C%20Maculusso%2C%20Luanda%2C%20Angola&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ display: "block", width: "100%", height: "100%", minHeight: "380px", border: "0" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "34px" }}>
              <h2
                style={{
                  fontSize: "26px",
                  lineHeight: "33px",
                  fontWeight: "700",
                  color: "#0a0a0a",
                  margin: "0",
                  fontFamily: "var(--font-instrument-sans),sans-serif",
                  textWrap: "pretty",
                }}
              >
                {c.map.heading}
              </h2>
              <div>
                {c.map.address.map((line) => (
                  <Fragment key={line}>
                    <p style={{ fontSize: "15px", lineHeight: "24px", color: "#3f3f46", margin: "0" }}>{line}</p>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingTop: "14px", borderTop: "1px solid #cfc6ba" }}>
                {c.map.phones.map((phone) => (
                  <Fragment key={phone}>
                    <p style={{ fontSize: "15px", lineHeight: "24px", color: "#3f3f46", margin: "0", fontVariantNumeric: "tabular-nums" }}>
                      {c.map.phoneLabel} : <a href={`tel:${phone.replace(/\s+/g, "")}`} style={{ color: "#3f3f46", textDecoration: "none" }}>{phone}</a>
                    </p>
                  </Fragment>
                ))}
                <p style={{ fontSize: "15px", lineHeight: "24px", color: "#3f3f46", margin: "0" }}>
                  {c.map.emailLabel} : <a href="mailto:geral@idealisa.ao" style={{ color: "#8a5a1f", fontWeight: "600" }}>{c.map.email}</a>
                </p>
              </div>
              <div style={{ paddingTop: "14px", borderTop: "1px solid #cfc6ba" }}>
                <h3
                  style={{
                    fontSize: "11px",
                    lineHeight: "15px",
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                    fontWeight: "700",
                    color: "#8a5a1f",
                    margin: "0 0 8px",
                  }}
                >
                  {c.hoursHeading}
                </h3>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {c.hours.map((h) => (
                    <Fragment key={h.day}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", padding: "6px 0", fontSize: "13px", lineHeight: "19px" }}>
                        <span style={{ color: "#52525b" }}>{h.day}</span>
                        <span style={{ color: "#0a0a0a", fontWeight: "700", fontVariantNumeric: "tabular-nums" }}>{h.time}</span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "2px" }}>
                <a
                  href="https://wa.me/244936499706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-green"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "12px 16px",
                    background: "#2E7D32",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "700",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "background .2s",
                  }}
                >
                  {c.whatsappCta}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Louren%C3%A7o+Mendes+da+Concei%C3%A7%C3%A3o%2C+Maculusso%2C+Luanda%2C+Angola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-warm"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "14px",
                    padding: "12px 16px",
                    border: "1px solid #cfc6ba",
                    background: "#ffffff",
                    color: "#8a5a1f",
                    fontSize: "14px",
                    fontWeight: "700",
                    textDecoration: "none",
                    transition: "background .2s",
                  }}
                >
                  {c.map.directions}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8a5a1f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ padding: "40px 16px", background: CONTACT_BACKGROUND }}>
        <div style={{ maxWidth: "1024px", margin: "0 auto", border: "1px solid #cfc6ba", background: "#ffffff" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,0.85fr)" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "12px", padding: "34px" }}>
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
                {c.cta.heading}
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "24px", color: "#52525b", margin: "0", textWrap: "pretty" }}>
                {c.cta.sub}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "12px", padding: "34px", borderLeft: "1px solid #cfc6ba", background: "#f4f4f5" }}>
              <a
                href="https://wa.me/244936499706"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-green"
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
                  textDecoration: "none",
                  transition: "background .2s",
                }}
              >
                {c.cta.secondary}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a
                href="mailto:geral@idealisa.ao"
                className="hover-warm"
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
                  textDecoration: "none",
                  transition: "background .2s",
                }}
              >
                {c.cta.primary}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8a5a1f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
