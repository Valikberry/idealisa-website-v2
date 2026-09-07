"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { servicesContent, buildServiceCards } from "@/lib/content/services";
import { HowWeWork } from "@/components/how-we-work";
import { ROUTES } from "@/lib/routes";

const HERO_BACKGROUND =
  "radial-gradient(56% 46% at 8% 12%, rgba(160,105,55,.18), transparent 72%), radial-gradient(52% 42% at 93% 10%, rgba(226,146,72,.17), transparent 72%), radial-gradient(54% 46% at 90% 90%, rgba(46,125,50,.14), transparent 74%), radial-gradient(56% 48% at 6% 92%, rgba(226,146,72,.14), transparent 74%), #ffffff";

const CONTACT_BACKGROUND =
  "radial-gradient(50% 44% at 92% 22%, rgba(160,105,55,.09), transparent 72%), radial-gradient(46% 40% at 8% 30%, rgba(226,146,72,.07), transparent 72%), radial-gradient(44% 38% at 20% 92%, rgba(46,125,50,.05), transparent 72%), #ffffff";

export default function ServicosPage() {
  const { language } = useLanguage();
  const sv = servicesContent[language] ?? servicesContent.en;
  const cards = buildServiceCards(sv);

  return (
    <>
      {/* 1. Intro */}
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
            {sv.dirKicker}
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
            {sv.dirHeading}
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
            {sv.dirSub}
          </p>
        </div>
      </section>

      {/* 2. Service directory grid */}
      <section style={{ padding: "8px 16px 48px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,minmax(0,1fr))",
              gap: "18px",
            }}
          >
            {cards.map((card) => (
              <div
                key={card.n}
                style={{
                  border: "1px solid #cfc6ba",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    padding: "22px 26px 18px",
                    borderBottom: "1px solid #e6ded2",
                  }}
                >
                  <p
                    style={{
                      fontSize: "12px",
                      lineHeight: "16px",
                      fontWeight: "700",
                      letterSpacing: ".14em",
                      color: "#8a5a1f",
                      margin: "0 0 8px",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {card.n}
                  </p>
                  <h3
                    style={{
                      fontSize: "20px",
                      lineHeight: "27px",
                      fontWeight: "700",
                      color: "#0a0a0a",
                      margin: "0",
                      fontFamily: "var(--font-instrument-sans),sans-serif",
                      textWrap: "pretty",
                    }}
                  >
                    {card.title}
                  </h3>
                  {card.desc && (
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "23px",
                        color: "#52525b",
                        margin: "10px 0 0",
                        textWrap: "pretty",
                      }}
                    >
                      {card.desc}
                    </p>
                  )}
                </div>
                <div style={{ padding: "18px 0 20px", flex: "1" }}>
                  <p
                    style={{
                      fontSize: "11px",
                      lineHeight: "15px",
                      fontWeight: "700",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "#71717a",
                      margin: "0 0 10px",
                      padding: "0 26px",
                    }}
                  >
                    {sv.includesLabel}
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: "0",
                      padding: "0",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {card.items.map((item) => (
                      <Fragment key={item}>
                        <li style={{ borderBottom: "1px solid #f0eae1" }}>
                          <Link
                            href={ROUTES.contact}
                            style={{
                              display: "block",
                              padding: "7px 26px",
                              fontSize: "13px",
                              lineHeight: "19px",
                              color: "#3f3f46",
                              textDecoration: "none",
                              transition: "color .2s",
                            }}
                          >
                            {item}
                          </Link>
                        </li>
                      </Fragment>
                    ))}
                  </ul>
                </div>
                {card.outcome && (
                  <div
                    style={{
                      padding: "16px 26px 20px",
                      borderTop: "1px solid #e6ded2",
                      background: "#faf7f2",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        lineHeight: "15px",
                        fontWeight: "700",
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "#71717a",
                        margin: "0 0 6px",
                      }}
                    >
                      {sv.outcomeLabel}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        lineHeight: "21px",
                        fontStyle: "italic",
                        color: "#52525b",
                        margin: "0",
                        textWrap: "pretty",
                      }}
                    >
                      {card.outcome}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How we work */}
      <HowWeWork
        heading={sv.howHeading}
        sub={sv.howSub}
        rows={sv.how}
        note={sv.howNote}
      />

      {/* 4. Contact band */}
      <section style={{ padding: "40px 16px", background: CONTACT_BACKGROUND }}>
        <div
          style={{
            maxWidth: "1024px",
            margin: "0 auto",
            border: "1px solid #cfc6ba",
            background: "#ffffff",
          }}
        >
          <div style={{ padding: "30px 34px 24px", textAlign: "center" }}>
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
              {sv.contactHeading}
            </h2>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "22px",
                fontStyle: "italic",
                color: "#52525b",
                margin: "0 auto",
                maxWidth: "660px",
                textWrap: "pretty",
              }}
            >
              {sv.contactNote}
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,minmax(0,1fr))",
              borderTop: "1px solid #cfc6ba",
            }}
          >
            {sv.contactCells.map((cell) => (
              <Fragment key={cell.label}>
                <a
                  href={cell.href}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    padding: "22px 24px",
                    borderRight: "1px solid #cfc6ba",
                    textDecoration: "none",
                    transition: "background .2s",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      lineHeight: "15px",
                      fontWeight: "700",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "#71717a",
                    }}
                  >
                    {cell.label}
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      lineHeight: "22px",
                      fontWeight: "700",
                      color: "#0a0a0a",
                    }}
                  >
                    {cell.value}
                  </span>
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
