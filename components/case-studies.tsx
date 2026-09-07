"use client";

import { Fragment, useState } from "react";
import { useTranslation } from "@/lib/language-context";
import { css } from "@/lib/design-style";

export function CaseStudies() {
  const t = useTranslation();
  const [caseIndex, setCaseIndex] = useState(0);
  const activeCase = t.cases.items[caseIndex];
  const caseStats = activeCase.stats;
  const caseBlocks = activeCase.blocks;
  const caseDots = t.cases.items.map((c, i) => ({
    label: c.client,
    style: `width:10px;height:10px;border-radius:50%;background:${caseIndex === i ? "#8a5a1f" : "#ddd4c7"}`,
    onClick: () => setCaseIndex(i),
  }));
  return (
    <section
      style={{ padding: "40px 16px", background: "#f4f4f5" }}
      id="portfolio"
    >
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
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
          {t.cases.kicker}
        </p>
        <h2
          style={{
            fontSize: "29px",
            lineHeight: "36px",
            fontWeight: "700",
            color: "#0a0a0a",
            margin: "0 0 28px",
            fontFamily: "var(--font-instrument-sans),sans-serif",
          }}
        >
          {t.cases.heading}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(0,0.8fr) minmax(0,1.1fr) minmax(0,1.1fr)",
            border: "1px solid #cfc6ba",
            background: "#ffffff",
          }}
        >
          <div
            style={{
              position: "relative",
              minHeight: "420px",
              borderRight: "1px solid #cfc6ba",
            }}
          >
            <img
              src={caseIndex === 0 ? "/malamu.png" : "/fcks.png"}
              alt={activeCase.client}
              className="case-image"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              padding: "28px",
              borderRight: "1px solid #cfc6ba",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                lineHeight: "26px",
                fontWeight: "700",
                color: "#0a0a0a",
                margin: "0",
                textTransform: "uppercase",
              }}
            >
              {activeCase.client}
            </h3>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "23px",
                color: "#3f3f46",
                margin: "0",
                paddingBottom: "14px",
                borderBottom: "1px solid #cfc6ba",
                textWrap: "pretty",
              }}
            >
              {activeCase.award}
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "21px",
                color: "#52525b",
                margin: "0",
              }}
            >
              {activeCase.term}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,minmax(0,1fr))",
                gap: "30px 16px",
              }}
            >
              {caseStats.map((stat, index) => (
                <Fragment key={index}>
                  <div>
                    <div
                      style={{
                        fontSize: "22px",
                        lineHeight: "28px",
                        fontWeight: "700",
                        color: "#0a0a0a",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        lineHeight: "19px",
                        color: "#52525b",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "28px",
            }}
          >
            {caseBlocks.map((blk, index) => (
              <Fragment key={index}>
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: "19px",
                      color: "#8a5a1f",
                      margin: "0 0 4px",
                      fontWeight: "600",
                    }}
                  >
                    {blk.label}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "22px",
                      color: "#3f3f46",
                      margin: "0",
                      textWrap: "pretty",
                    }}
                  >
                    {blk.body}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {caseDots.map((dot, index) => (
            <Fragment key={index}>
              <button
                aria-label={dot.label}
                onClick={dot.onClick}
                style={css(dot.style)}
              ></button>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
