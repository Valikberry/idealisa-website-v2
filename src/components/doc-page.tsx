"use client";

import Link from "next/link";
import { useLanguage, useTranslation } from "@/lib/language-context";
import { docs, docUi, type DocKey } from "@/lib/content/docs";
import { contactContent } from "@/lib/content/contact";
import { ROUTES } from "@/lib/routes";
import styles from "./doc-page.module.css";

export function DocPage({ docKey }: { docKey: DocKey }) {
  const { language } = useLanguage();
  const t = useTranslation();
  const doc = docs[docKey][language] ?? docs[docKey].en;
  const ui = docUi[language] ?? docUi.en;
  const ct = contactContent[language] ?? contactContent.en;
  const isTestimonials = docKey === "testimonials";
  const hasDocSections = doc.sections.length > 0;
  const ratingStars = [1, 2, 3, 4, 5];
  const reviewCells = t.reviews.items;

  return (
    <div className={styles.docPage}>
      <section
        className={styles.header}
        style={{
          padding: "150px 16px 32px",
          background:
            "radial-gradient(56% 46% at 8% 12%, rgba(160,105,55,.18), transparent 72%), radial-gradient(52% 42% at 93% 10%, rgba(226,146,72,.17), transparent 72%), radial-gradient(54% 46% at 90% 90%, rgba(46,125,50,.14), transparent 74%), radial-gradient(56% 48% at 6% 92%, rgba(226,146,72,.14), transparent 74%), #ffffff",
        }}
      >
        <div
          style={{ maxWidth: "1024px", margin: "0 auto", textAlign: "center" }}
        >
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
            {doc.eyebrow}
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
            {doc.title}
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
            {doc.sub}
          </p>
        </div>
      </section>

      <section
        className={styles.body}
        style={{ padding: "36px 16px 44px", background: "#f4f4f5" }}
      >
        <div
          style={{
            maxWidth: "1024px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "34px",
          }}
        >
          {isTestimonials && (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              <div
                className={styles.ratingSummary}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                  flexWrap: "wrap",
                  border: "1px solid #cfc6ba",
                  background: "#ffffff",
                  padding: "20px 24px",
                }}
              >
                <div
                  className={styles.ratingDetails}
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                    }}
                  >
                    {ratingStars.map((st) => (
                      <span
                        key={st}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "22px",
                          height: "22px",
                          background: "#2E7D32",
                          color: "#ffffff",
                          fontSize: "13px",
                          lineHeight: "13px",
                        }}
                      >
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <span
                    style={{
                      fontSize: "16px",
                      lineHeight: "22px",
                      fontWeight: "700",
                      color: "#0a0a0a",
                    }}
                  >
                    {t.reviews.ratingWord}
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#52525b",
                    }}
                  >
                    {t.reviews.basedOn}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "#71717a",
                  }}
                >
                  {ui.reviewSource}
                </span>
              </div>
              <div className={styles.reviewGrid}>
                {reviewCells.map((r) => (
                  <div
                    key={r.name}
                    className={styles.reviewCard}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      padding: "26px 24px",
                      borderRight: "1px solid #cfc6ba",
                      borderBottom: "1px solid #cfc6ba",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#8a5a1f",
                        fontSize: "13px",
                        letterSpacing: ".14em",
                      }}
                    >
                      &#9733;&#9733;&#9733;&#9733;&#9733;
                    </div>
                    <h3
                      style={{
                        fontSize: "17px",
                        lineHeight: "24px",
                        fontWeight: "700",
                        color: "#0a0a0a",
                        margin: "0",
                        textWrap: "pretty",
                      }}
                    >
                      {r.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "23px",
                        color: "#52525b",
                        margin: "0",
                        textWrap: "pretty",
                      }}
                    >
                      {r.body}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        lineHeight: "18px",
                        color: "#71717a",
                        margin: "auto 0 0",
                        paddingTop: "10px",
                        borderTop: "1px solid #e4e4e7",
                      }}
                    >
                      {r.name} &#183; {r.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {hasDocSections && (
            <div
              className={styles.legalPanel}
              style={{
                border: "1px solid #cfc6ba",
                background: "#ffffff",
                padding: "30px 32px 34px",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "19px",
                  color: "#71717a",
                  margin: "0 0 24px",
                }}
              >
                {ui.updated}, {doc.updated}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "26px",
                }}
              >
                {doc.sections.map((s) => (
                  <div key={s.h}>
                    <h2
                      style={{
                        fontSize: "17px",
                        lineHeight: "24px",
                        fontWeight: "700",
                        color: "#0a0a0a",
                        margin: "0 0 10px",
                        textWrap: "pretty",
                      }}
                    >
                      {s.h}
                    </h2>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      {s.p.map((para) => (
                        <p
                          key={para}
                          style={{
                            fontSize: "15px",
                            lineHeight: "24px",
                            color: "#3f3f46",
                            margin: "0",
                            textWrap: "pretty",
                          }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section
        className={styles.cta}
        style={{
          padding: "40px 16px",
          background:
            "radial-gradient(50% 44% at 92% 22%, rgba(160,105,55,.09), transparent 72%), radial-gradient(46% 40% at 8% 30%, rgba(226,146,72,.07), transparent 72%), radial-gradient(44% 38% at 20% 92%, rgba(46,125,50,.05), transparent 72%), #ffffff",
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
                justifyContent: "center",
                gap: "12px",
                padding: "34px",
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
                {ct.cta.heading}
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
                geral@idealisa.ao &#183; +244 936 499 706
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "12px",
                padding: "34px",
                borderLeft: "1px solid #cfc6ba",
                background: "#f4f4f5",
              }}
            >
              <Link
                href={ROUTES.contact}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "14px",
                  padding: "14px 20px",
                  background: "#2E7D32",
                  color: "#ffffff",
                  border: "none",
                  fontFamily: "inherit",
                  fontSize: "15px",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "background .2s",
                }}
                className={styles.contactLink}
              >
                {t.navbar.contact}
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
              </Link>
              <a
                href="mailto:geral@idealisa.ao"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "14px",
                  padding: "14px 20px",
                  border: "1px solid #cfc6ba",
                  background: "#ffffff",
                  color: "#8a5a1f",
                  fontSize: "15px",
                  fontWeight: "700",
                  textDecoration: "none",
                  transition: "background .2s",
                }}
                className={styles.emailLink}
              >
                geral@idealisa.ao
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
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
