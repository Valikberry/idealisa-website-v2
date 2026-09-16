"use client";

import { Fragment, useState } from "react";
import { useTranslation } from "@/lib/language-context";

export function Faq() {
  const t = useTranslation();
  const [open, setOpen] = useState<number | null>(null);
  const homeFaqItems = t.faq.items.map((f, i) => ({
    ...f,
    open: open === i,
    expanded: open === i,
    sign: open === i ? "−" : "+",
    toggle: () => setOpen(open === i ? null : i),
  }));
  return (
    <section id="faq" style={{ padding: "40px 16px", background: "#ffffff" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <h2
            style={{
              fontSize: "29px",
              lineHeight: "36px",
              fontWeight: "700",
              color: "#0a0a0a",
              margin: "0 0 8px",
              fontFamily: "var(--font-instrument-sans),sans-serif",
            }}
          >
            {t.faq.heading}
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              color: "#71717a",
              margin: "0",
            }}
          >
            {t.faq.sub}
          </p>
        </div>
        <div style={{ border: "1px solid #cfc6ba", background: "#ffffff" }}>
          {homeFaqItems.map((item, index) => (
            <Fragment key={index}>
              <div style={{ borderBottom: "1px solid #cfc6ba" }}>
                <h3
                  style={{
                    margin: "0",
                    fontSize: "inherit",
                    fontWeight: "inherit",
                  }}
                >
                  <button
                    aria-expanded={item.expanded}
                    aria-controls={`faq-answer-${index}`}
                    onClick={item.toggle}
                    className="hover-warm"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                      width: "100%",
                      boxSizing: "border-box",
                      padding: "18px 22px",
                      background: "none",
                      border: "none",
                      fontFamily: "inherit",
                      fontSize: "15px",
                      lineHeight: "24px",
                      fontWeight: "600",
                      color: "#0a0a0a",
                      textAlign: "left",
                      cursor: "pointer",
                      transition: "background .2s",
                    }}
                  >
                    {item.q}
                    <span
                      style={{
                        flexShrink: "0",
                        fontSize: "20px",
                        lineHeight: "20px",
                        color: "#8a5a1f",
                      }}
                    >
                      {item.sign}
                    </span>
                  </button>
                </h3>
                <p
                  id={`faq-answer-${index}`}
                  hidden={!item.open}
                  style={{
                    fontSize: "14px",
                    lineHeight: "23px",
                    color: "#52525b",
                    margin: "0",
                    padding: "0 22px 20px",
                    maxWidth: "820px",
                    textWrap: "pretty",
                  }}
                >
                  {item.a}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
