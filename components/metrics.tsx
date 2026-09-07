"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { useTranslation } from "@/lib/language-context";

export function Metrics() {
  const t = useTranslation();
  const [metricP, setMetricP] = useState(0);
  const ringsRef = useRef<HTMLDivElement>(null);
  const seenRef = useRef(false);

  useEffect(() => {
    const el = ringsRef.current;
    if (!el || seenRef.current) return;

    let frame: number;
    const start = () => {
      seenRef.current = true;
      const t0 = performance.now();
      const dur = 1700;
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / dur);
        setMetricP(1 - Math.pow(1 - p, 3));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      start();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          start();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  const metricRings = t.metrics.rings.map((r) => {
    const n = Math.round(r.value * metricP);
    return {
      label: r.label,
      display: String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + r.suffix,
      offset: (289.03 * (1 - r.frac * metricP)).toFixed(2),
    };
  });
  return (
    <section style={{ padding: "40px 16px", background: "#ffffff" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "26px" }}>
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
            {t.metrics.kicker}
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
            {t.metrics.heading}
          </h2>
        </div>

        <div
          ref={ringsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6,minmax(0,1fr))",
            gap: "16px",
            marginBottom: "34px",
          }}
        >
          {metricRings.map((m, index) => (
            <Fragment key={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "104px",
                    height: "104px",
                  }}
                >
                  <svg
                    width="104"
                    height="104"
                    viewBox="0 0 104 104"
                    style={{ display: "block", transform: "rotate(-90deg)" }}
                  >
                    <circle
                      cx="52"
                      cy="52"
                      r="46"
                      fill="none"
                      stroke="#efe9e0"
                      strokeWidth="3"
                    ></circle>
                    <circle
                      cx="52"
                      cy="52"
                      r="46"
                      fill="none"
                      stroke="#8a5a1f"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="289.03"
                      strokeDashoffset={m.offset}
                    ></circle>
                  </svg>
                  <div
                    style={{
                      position: "absolute",
                      inset: "0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "23px",
                        lineHeight: "26px",
                        fontWeight: "700",
                        color: "#0a0a0a",
                        letterSpacing: "-.02em",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {m.display}
                    </span>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    lineHeight: "15px",
                    fontWeight: "700",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "#52525b",
                    textAlign: "center",
                  }}
                >
                  {m.label}
                </span>
              </div>
            </Fragment>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,minmax(0,1fr))",
            border: "1px solid #cfc6ba",
            background: "#ffffff",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              padding: "30px 26px 32px",
              borderRight: "1px solid #cfc6ba",
            }}
          >
            <div
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "9999px",
                background: "#f4f4f5",
                border: "1px solid #e6ded2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="42"
                height="42"
                viewBox="0 0 48 48"
                fill="none"
                stroke="#8a5a1f"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="24" cy="24" r="17"></circle>
                <ellipse cx="24" cy="24" rx="7.5" ry="17"></ellipse>
                <path d="M7 24h34"></path>
                <path d="M10.5 15h27M10.5 33h27"></path>
              </svg>
            </div>
            <h3
              style={{
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "700",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "#0a0a0a",
                margin: "0",
                textAlign: "center",
              }}
            >
              {t.metrics.pillars[0].title}
            </h3>
            <p
              style={{
                fontSize: "13px",
                lineHeight: "20px",
                color: "#52525b",
                margin: "0",
                textAlign: "center",
                textWrap: "pretty",
              }}
            >
              {t.metrics.pillars[0].body}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              padding: "30px 26px 32px",
              borderRight: "1px solid #cfc6ba",
            }}
          >
            <div
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "9999px",
                background: "#f4f4f5",
                border: "1px solid #e6ded2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="42"
                height="42"
                viewBox="0 0 48 48"
                fill="none"
                stroke="#8a5a1f"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="15" y="5" width="18" height="27" rx="4"></rect>
                <circle cx="24" cy="12" r="3.4"></circle>
                <circle cx="24" cy="19" r="3.4"></circle>
                <circle cx="24" cy="26" r="3.4"></circle>
                <path d="M24 32v8"></path>
                <path d="M17 43a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3Z"></path>
                <path d="M33 12h4M33 26h4"></path>
              </svg>
            </div>
            <h3
              style={{
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "700",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "#0a0a0a",
                margin: "0",
                textAlign: "center",
              }}
            >
              {t.metrics.pillars[1].title}
            </h3>
            <p
              style={{
                fontSize: "13px",
                lineHeight: "20px",
                color: "#52525b",
                margin: "0",
                textAlign: "center",
                textWrap: "pretty",
              }}
            >
              {t.metrics.pillars[1].body}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              padding: "30px 26px 32px",
            }}
          >
            <div
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "9999px",
                background: "#f4f4f5",
                border: "1px solid #e6ded2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="42"
                height="42"
                viewBox="0 0 48 48"
                fill="none"
                stroke="#8a5a1f"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 8h32L28 25v14l-8 4V25L8 8Z"></path>
                <circle cx="24" cy="19" r="8.5" fill="#f4f4f5"></circle>
                <path d="M27 15.5a3.2 3.2 0 0 0-3-1.6c-1.8 0-3 1-3 2.3 0 1.4 1.2 2 3 2.5s3 1.1 3 2.5c0 1.3-1.2 2.3-3 2.3a3.2 3.2 0 0 1-3-1.6"></path>
                <path d="M24 12v14"></path>
              </svg>
            </div>
            <h3
              style={{
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "700",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "#0a0a0a",
                margin: "0",
                textAlign: "center",
              }}
            >
              {t.metrics.pillars[2].title}
            </h3>
            <p
              style={{
                fontSize: "13px",
                lineHeight: "20px",
                color: "#52525b",
                margin: "0",
                textAlign: "center",
                textWrap: "pretty",
              }}
            >
              {t.metrics.pillars[2].body}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "26px",
          }}
        >
          <a
            href="https://wa.me/244936499706"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "11px 18px",
              border: "1px solid #cfc6ba",
              background: "#ffffff",
              color: "#0a0a0a",
              fontSize: "14px",
              fontWeight: "700",
              cursor: "pointer",
              transition: "background .2s",
            }}
          >
            {t.metrics.cta}
            <svg
              width="15"
              height="15"
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
    </section>
  );
}
