import { Fragment } from "react";
import type { HowWeWorkRow } from "@/lib/content/services";

type HowWeWorkProps = {
  heading: string;
  sub: string;
  rows: HowWeWorkRow[];
  note: string;
};

/**
 * The 5-row "how we work" process table (design-reference's `howRows`,
 * built from `PAGES.company.how` and rendered — via `cp.howHeading`/
 * `howRows` — on the Serviços page). Reusable wherever the reference reuses
 * this exact block.
 */
export function HowWeWork({ heading, sub, rows, note }: HowWeWorkProps) {
  return (
    <section style={{ padding: "8px 16px 48px", background: "#ffffff" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
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
            {heading}
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "24px",
              color: "#52525b",
              margin: "0 auto",
              maxWidth: "760px",
              textWrap: "pretty",
            }}
          >
            {sub}
          </p>
        </div>
        <div style={{ border: "1px solid #cfc6ba", background: "#ffffff" }}>
          {rows.map((row, index) => (
            <Fragment key={row.n}>
              <div
                className="how-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px minmax(0,220px) minmax(0,1fr)",
                  alignItems: "baseline",
                  gap: "20px",
                  padding: "20px 24px",
                  borderBottom:
                    index < rows.length - 1
                      ? "1px solid #e6ded2"
                      : undefined,
                }}
              >
                <p
                  className="how-row-n"
                  style={{
                    fontSize: "13px",
                    lineHeight: "20px",
                    fontWeight: "700",
                    color: "#8a5a1f",
                    margin: "0",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {row.n}
                </p>
                <h3
                  className="how-row-stage"
                  style={{
                    fontSize: "16px",
                    lineHeight: "22px",
                    fontWeight: "700",
                    color: "#0a0a0a",
                    margin: "0",
                    textWrap: "pretty",
                  }}
                >
                  {row.stage}
                </h3>
                <p
                  className="how-row-body"
                  style={{
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#52525b",
                    margin: "0",
                    textWrap: "pretty",
                  }}
                >
                  {row.body}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
        <p
          style={{
            fontSize: "13px",
            lineHeight: "21px",
            color: "#71717a",
            margin: "14px auto 0",
            maxWidth: "820px",
            textAlign: "center",
            textWrap: "pretty",
          }}
        >
          {note}
        </p>
      </div>
    </section>
  );
}
