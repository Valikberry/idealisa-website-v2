"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/language-context";
import { serviceIcons } from "@/lib/design-data";
import { ROUTES } from "@/lib/routes";

export function BentoGrid() {
  const t = useTranslation();
  const serviceCells = t.bentoGrid.cells.map((c, i) => ({
    ...c,
    icon: serviceIcons[i],
  }));
  return (
    <section
      id="features"
      style={{ padding: "40px 16px", background: "#f4f4f5" }}
    >
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <h2
            style={{
              fontSize: "29px",
              lineHeight: "36px",
              fontWeight: "700",
              color: "#000",
              margin: "0 0 8px",
              fontFamily: "var(--font-instrument-sans),sans-serif",
            }}
          >
            {t.bentoGrid.heading}
          </h2>
          <p
            style={{
              color: "#71717a",
              maxWidth: "1024px",
              margin: "0 auto",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            {t.bentoGrid.subheading}
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,minmax(0,1fr))",
            borderTop: "1px solid #cfc6ba",
            borderLeft: "1px solid #cfc6ba",
            background: "#ffffff",
            maxWidth: "1024px",
            margin: "0 auto",
          }}
        >
          {serviceCells.map((cell, index) => (
            <Fragment key={index}>
              <Link
                href={ROUTES.services}
                className="hover-warm"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "10px",
                  padding: "26px 22px 24px",
                  borderRight: "1px solid #cfc6ba",
                  borderBottom: "1px solid #cfc6ba",
                  cursor: "pointer",
                  transition: "background .2s",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={cell.icon}></path>
                </svg>
                <h3
                  style={{
                    fontSize: "16px",
                    lineHeight: "22px",
                    fontWeight: "600",
                    color: "#0a0a0a",
                    margin: "0",
                  }}
                >
                  {cell.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "#52525b",
                    margin: "0 0 6px",
                    textWrap: "pretty",
                  }}
                >
                  {cell.body}
                </p>
                <span
                  style={{
                    marginTop: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#2E7D32",
                  }}
                >
                  {t.bentoGrid.learnMore}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2E7D32"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </Link>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
