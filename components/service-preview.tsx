"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/language-context";
import { ROUTES } from "@/lib/routes";

export function ServicePreview() {
  const t = useTranslation();
  const sv = t.servicePreview;
  const svcTop2 = sv.blocks;
  return (
    <section
      style={{ padding: "40px 16px", background: "#ffffff" }}
      id="services"
    >
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <div style={{ margin: "0 0 28px" }}>
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
            {sv.previewKicker}
          </p>
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
            {sv.previewHeading}
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,minmax(0,1fr))",
            gap: "18px",
          }}
        >
          {svcTop2.map((b, index) => (
            <Fragment key={index}>
              <div
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
                  <h3
                    style={{
                      fontSize: "20px",
                      lineHeight: "27px",
                      fontWeight: "700",
                      color: "#0a0a0a",
                      margin: "0 0 10px",
                      fontFamily: "var(--font-instrument-sans),sans-serif",
                      textWrap: "pretty",
                    }}
                  >
                    {b.title}
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
                    {b.desc}
                  </p>
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
                    {b.items.map((inc, index) => (
                      <Fragment key={index}>
                        <li style={{ borderBottom: "1px solid #f0eae1" }}>
                          <Link
                            href={ROUTES.services}
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
                            {inc}
                          </Link>
                        </li>
                      </Fragment>
                    ))}
                  </ul>
                </div>
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
                    {b.outcome}
                  </p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "26px",
          }}
        >
          <Link
            href={ROUTES.services}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 26px",
              border: "1px solid #8a5a1f",
              fontSize: "14px",
              fontWeight: "600",
              color: "#8a5a1f",
              textDecoration: "none",
              cursor: "pointer",
              transition: "background .2s, color .2s",
            }}
          >
            {sv.previewCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
