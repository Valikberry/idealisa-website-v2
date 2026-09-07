"use client";

import { Fragment } from "react";
import { useTranslation } from "@/lib/language-context";
import { css } from "@/lib/design-style";

export function Reviews() {
  const t = useTranslation();
  const reviewList = t.reviews.items.map((r) => ({
    ...r,
    cellStyle:
      "display:flex;flex-direction:column;gap:8px;padding:24px 20px;border-right:1px solid #cfc6ba;border-bottom:1px solid #cfc6ba",
  }));
  return (
    <section
      id="reviews"
      style={{ padding: "40px 16px", background: "#ffffff" }}
    >
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
            {t.reviews.heading}
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "600",
              color: "#8a5a1f",
              margin: "0",
            }}
          >
            {t.reviews.sub}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,0.8fr) repeat(2,minmax(0,1fr))",
            border: "1px solid #cfc6ba",
            background: "#ffffff",
          }}
        >
          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "24px 20px",
              gridRow: "span 2",
              borderRight: "1px solid #cfc6ba",
              background: "#f4f4f5",
              cursor: "pointer",
              transition: "background .2s",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                lineHeight: "26px",
                fontWeight: "700",
                color: "#0a0a0a",
                margin: "0",
              }}
            >
              {t.reviews.ratingWord}
            </p>
            <div style={{ display: "flex", gap: "3px" }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  height: "24px",
                  background: "#00B67A",
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="m12 2.6 2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.8l1.2-6.6L2.5 9.6l6.6-.9z"></path>
                </svg>
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  height: "24px",
                  background: "#00B67A",
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="m12 2.6 2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.8l1.2-6.6L2.5 9.6l6.6-.9z"></path>
                </svg>
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  height: "24px",
                  background: "#00B67A",
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="m12 2.6 2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.8l1.2-6.6L2.5 9.6l6.6-.9z"></path>
                </svg>
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  height: "24px",
                  background: "#00B67A",
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="m12 2.6 2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.8l1.2-6.6L2.5 9.6l6.6-.9z"></path>
                </svg>
              </span>
              <span
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  height: "24px",
                  background: "#d4d4d8",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: "0 50% 0 0",
                    background: "#00B67A",
                  }}
                ></span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  style={{ position: "relative" }}
                >
                  <path d="m12 2.6 2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.8l1.2-6.6L2.5 9.6l6.6-.9z"></path>
                </svg>
              </span>
            </div>
            <p
              style={{
                fontSize: "13px",
                lineHeight: "19px",
                color: "#52525b",
                margin: "0",
                textAlign: "center",
              }}
            >
              {t.reviews.basedOn}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#00B67A"
                aria-hidden="true"
              >
                <path d="m12 2.6 2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.8l1.2-6.6L2.5 9.6l6.6-.9z"></path>
              </svg>
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#0a0a0a",
                  letterSpacing: "-.01em",
                }}
              >
                Trustpilot
              </span>
            </div>
          </a>

          {reviewList.map((rev, index) => (
            <Fragment key={index}>
              <a
                href="https://www.trustpilot.com"
                target="_blank"
                rel="noopener noreferrer"
                style={css(rev.cellStyle)}
              >
                <div style={{ display: "flex", gap: "3px" }}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "18px",
                      height: "18px",
                      background: "#00B67A",
                    }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <path d="m12 2.6 2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.8l1.2-6.6L2.5 9.6l6.6-.9z"></path>
                    </svg>
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "18px",
                      height: "18px",
                      background: "#00B67A",
                    }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <path d="m12 2.6 2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.8l1.2-6.6L2.5 9.6l6.6-.9z"></path>
                    </svg>
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "18px",
                      height: "18px",
                      background: "#00B67A",
                    }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <path d="m12 2.6 2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.8l1.2-6.6L2.5 9.6l6.6-.9z"></path>
                    </svg>
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "18px",
                      height: "18px",
                      background: "#00B67A",
                    }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <path d="m12 2.6 2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.8l1.2-6.6L2.5 9.6l6.6-.9z"></path>
                    </svg>
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "18px",
                      height: "18px",
                      background: "#00B67A",
                    }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <path d="m12 2.6 2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.8l1.2-6.6L2.5 9.6l6.6-.9z"></path>
                    </svg>
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: "19px",
                    color: "#52525b",
                    margin: "0",
                  }}
                >
                  <span style={{ fontWeight: "700", color: "#0a0a0a" }}>
                    {rev.name}
                  </span>
                  , {rev.date}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: "700",
                    color: "#0a0a0a",
                    margin: "0",
                  }}
                >
                  {rev.title}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "#52525b",
                    margin: "0",
                    textWrap: "pretty",
                  }}
                >
                  {rev.body}
                </p>
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
