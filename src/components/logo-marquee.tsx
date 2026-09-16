"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/language-context";
import { css } from "@/lib/design-style";
import { logos } from "@/lib/design-data";
import { ROUTES } from "@/lib/routes";

export function LogoMarquee() {
  const t = useTranslation();
  const ui = t.logoMarquee;
  const logoGrid = logos.map((l) => ({
    ...l,
    hasImage: !!l.src,
    isText: !l.src,
    cellStyle:
      "display:flex;align-items:center;justify-content:center;height:80px;border:1px solid #cfc6ba;padding:10px;background:linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
  }));
  return (
    <section
      style={{
        padding: "40px 16px",
        background:
          "radial-gradient(70% 60% at 30% 8%, #fdf2e8 0%, transparent 70%), radial-gradient(60% 55% at 95% 15%, #f3d3b6 0%, transparent 72%), radial-gradient(65% 60% at 8% 95%, #b9765a 0%, transparent 70%), radial-gradient(70% 60% at 85% 100%, #d99268 0%, transparent 72%), linear-gradient(160deg, #fbeadd 0%, #f0cdb4 55%, #d99a76 100%)",
      }}
      id="clients"
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
            {t.logoMarquee.heading}
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
            {t.logoMarquee.subheading}
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8,minmax(0,1fr))",
            gap: "12px",
            maxWidth: "1024px",
            margin: "0 auto",
          }}
        >
          {logoGrid.map((logo, index) => (
            <Fragment key={index}>
              <div style={css(logo.cellStyle)}>
                {logo.hasImage && (
                  <>
                    <div
                      role="img"
                      aria-label={logo.name}
                      style={css(
                        `width:100%; height:100%; background-image:url(${logo.src}); background-size:contain; background-repeat:no-repeat; background-position:center;`,
                      )}
                    ></div>
                  </>
                )}
                {logo.isText && (
                  <>
                    <span
                      style={{
                        fontWeight: "500",
                        color: "#3f3f46",
                        fontFamily: "var(--font-instrument-sans),sans-serif",
                        fontSize: "11px",
                        lineHeight: "1.25",
                        textAlign: "center",
                      }}
                    >
                      {logo.name}
                    </span>
                  </>
                )}
              </div>
            </Fragment>
          ))}
          <Link
            href={ROUTES.contact}
            className="hover-dashed"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
              boxSizing: "border-box",
              height: "80px",
              padding: "10px",
              border: "1px dashed #b9ab99",
              background: "#fdfaf5",
              textDecoration: "none",
              transition: "border-color .2s, background .2s",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-instrument-sans),sans-serif",
                fontSize: "11px",
                lineHeight: "1.25",
                fontWeight: "700",
                color: "#6b5a48",
                textAlign: "center",
              }}
            >
              {ui.slotBrand}{" "}
            </span>
            <span
              style={{
                fontFamily: "var(--font-instrument-sans),sans-serif",
                fontSize: "11px",
                lineHeight: "1.25",
                color: "#7d6e5c",
                textAlign: "center",
              }}
            >
              {ui.slotNext}
            </span>
          </Link>
          <Link
            href={ROUTES.contact}
            className="hover-dashed"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
              boxSizing: "border-box",
              height: "80px",
              padding: "10px",
              border: "1px dashed #b9ab99",
              background: "#fdfaf5",
              textDecoration: "none",
              transition: "border-color .2s, background .2s",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-instrument-sans),sans-serif",
                fontSize: "11px",
                lineHeight: "1.25",
                fontWeight: "700",
                color: "#6b5a48",
                textAlign: "center",
              }}
            >
              {ui.slotBrand}{" "}
            </span>
            <span
              style={{
                fontFamily: "var(--font-instrument-sans),sans-serif",
                fontSize: "11px",
                lineHeight: "1.25",
                color: "#7d6e5c",
                textAlign: "center",
              }}
            >
              {ui.slotNext}
            </span>
          </Link>
          <Link
            href={ROUTES.contact}
            className="hover-dashed"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
              boxSizing: "border-box",
              height: "80px",
              padding: "10px",
              border: "1px dashed #b9ab99",
              background: "#fdfaf5",
              textDecoration: "none",
              transition: "border-color .2s, background .2s",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-instrument-sans),sans-serif",
                fontSize: "11px",
                lineHeight: "1.25",
                fontWeight: "700",
                color: "#6b5a48",
                textAlign: "center",
              }}
            >
              {ui.slotBrand}{" "}
            </span>
            <span
              style={{
                fontFamily: "var(--font-instrument-sans),sans-serif",
                fontSize: "11px",
                lineHeight: "1.25",
                color: "#7d6e5c",
                textAlign: "center",
              }}
            >
              {ui.slotNext}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
