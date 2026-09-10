"use client";

import { Fragment, useState } from "react";
import { useTranslation } from "@/lib/language-context";
import { css } from "@/lib/design-style";

/**
 * The interactive case-study carousel (image / stats / narrative blocks /
 * dots) — design-reference's `activeCase`/`caseStats`/`caseBlocks`/`caseDots`,
 * driven by `t.cases.items` (shared data, not page-specific). Used on the
 * home page (wrapped by `components/case-studies.tsx`, which adds its own
 * section + kicker + heading) and directly on the Portfólio page (which
 * supplies its own kicker + heading around it instead).
 */
export function CaseShowcase() {
  const t = useTranslation();
  const [caseIndex, setCaseIndex] = useState(0);
  const activeCase = t.cases.items[caseIndex];
  const caseStats = activeCase.stats;
  const caseBlocks = activeCase.blocks;
  const caseDots = t.cases.items.map((c, i) => ({
    label: c.client,
    style: `width:${caseIndex === i ? "26px" : "9px"};height:9px;border-radius:9999px;border:none;padding:0;background:${caseIndex === i ? "#8a5a1f" : "#cfc6ba"};cursor:pointer;transition:width .3s, background .3s`,
    onClick: () => setCaseIndex(i),
  }));

  return (
    <>
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
            src={caseIndex === 0 ? "/malamu.webp" : "/fcks.webp"}
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
    </>
  );
}
