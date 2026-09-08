"use client";

import { useTranslation } from "@/lib/language-context";

export function Hero() {
  const t = useTranslation();

  return (
    <section
      style={{
        position: "relative",
        padding: "112px 16px 40px",
        background:
          "radial-gradient(56% 46% at 8% 12%, rgba(160,105,55,.18), transparent 72%), radial-gradient(52% 42% at 93% 10%, rgba(226,146,72,.17), transparent 72%), radial-gradient(54% 46% at 90% 90%, rgba(46,125,50,.14), transparent 74%), radial-gradient(56% 48% at 6% 92%, rgba(226,146,72,.14), transparent 74%), #ffffff",
      }}
      id="home"
    >
      <div
        style={{
          position: "relative",
          zIndex: "10",
          display: "grid",
          gridTemplateColumns: "repeat(2,minmax(0,1fr))",
          width: "100%",
          maxWidth: "1024px",
          boxSizing: "border-box",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,minmax(0,1fr))",
            gridTemplateRows: "repeat(2,minmax(0,1fr))",
            gap: "8px",
            alignSelf: "stretch",
            paddingRight: "8px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                position: "relative",
                flex: "1",
                minHeight: "0",
                overflow: "hidden",
                border: "1px solid #cfc6ba",
                backgroundColor: "#F6C744",
                backgroundImage: "url(/team-site-visit.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
              }}
            ></div>
            <div
              className="hero-cap"
              style={{
                fontSize: "13px",
                lineHeight: "18px",
                fontWeight: "600",
                color: "#8a5a1f",
                marginTop: "8px",
              }}
            >
              {t.hero.tiles.team}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                position: "relative",
                flex: "1",
                minHeight: "0",
                overflow: "hidden",
                border: "1px solid #cfc6ba",
                backgroundColor: "#e6e6e6",
                backgroundImage: "url(/team-videographer.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center 20%",
              }}
            ></div>
            <div
              className="hero-cap"
              style={{
                fontSize: "13px",
                lineHeight: "18px",
                fontWeight: "600",
                color: "#8a5a1f",
                marginTop: "8px",
              }}
            >
              {t.hero.tiles.media}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                position: "relative",
                flex: "1",
                minHeight: "0",
                overflow: "hidden",
                border: "1px solid #cfc6ba",
                backgroundColor: "#2E7D32",
                backgroundImage: "url(/team-head-technology.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center 18%",
              }}
            ></div>
            <div
              className="hero-cap"
              style={{
                fontSize: "13px",
                lineHeight: "18px",
                fontWeight: "600",
                color: "#8a5a1f",
                marginTop: "8px",
              }}
            >
              {t.hero.tiles.tech}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                position: "relative",
                flex: "1",
                minHeight: "0",
                overflow: "hidden",
                border: "1px solid #cfc6ba",
                backgroundColor: "#0a0a0a",
                backgroundImage: "url(/team-head-communication.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center 15%",
              }}
            ></div>
            <div
              className="hero-cap"
              style={{
                fontSize: "13px",
                lineHeight: "18px",
                fontWeight: "600",
                color: "#8a5a1f",
                marginTop: "8px",
              }}
            >
              {t.hero.tiles.exec}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflow: "hidden",
            padding: "0 0 0 36px",
          }}
        >
          <div style={{ position: "relative", padding: "0 0 8px" }}>
            <img
              src="/idealisa-hero-icon.png"
              alt=""
              aria-hidden="true"
              draggable={false}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                height: "340px",
                width: "100%",
                transform: "translate(-50%,-50%)",
                objectFit: "contain",
                opacity: ".1",
                pointerEvents: "none",
                userSelect: "none",
              }}
            />

            <h1
              style={{
                position: "relative",
                zIndex: "10",
                fontSize: "38px",
                lineHeight: "1.08",
                fontWeight: "700",
                letterSpacing: "-0.02em",
                color: "#0a0a0a",
                margin: "0 0 18px",
                fontFamily: "var(--font-cal-sans),sans-serif",
                textWrap: "pretty",
              }}
            >
              {t.hero.headline}
            </h1>

            <p
              style={{
                position: "relative",
                zIndex: "10",
                fontSize: "14px",
                lineHeight: "21px",
                color: "#18181b",
                margin: "0 0 8px",
              }}
            >
              <span style={{ fontWeight: "700", color: "#0a0a0a" }}>
                {t.hero.credYears}
              </span>{" "}
              {t.hero.credRest} {t.hero.credRest2}
            </p>
            <p
              style={{
                position: "relative",
                zIndex: "10",
                fontSize: "14px",
                lineHeight: "1.55",
                letterSpacing: ".02em",
                textTransform: "uppercase",
                color: "#0a0a0a",
                fontWeight: "700",
                margin: "0 0 26px",
              }}
            >
              {t.hero.credTrustLead} {t.hero.credTrustRest}
            </p>

            <p
              style={{
                position: "relative",
                zIndex: "10",
                fontSize: "16px",
                lineHeight: "1.4",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: "600",
                color: "#8a5a1f",
                margin: "0 0 14px",
              }}
            >
              {t.hero.kicker}
            </p>
          </div>

          <div
            style={{
              position: "relative",
              overflow: "hidden",
              marginTop: "1px",
              maskImage:
                "linear-gradient(90deg,transparent 0,#000 6%,#000 94%,transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg,transparent 0,#000 6%,#000 94%,transparent 100%)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "max-content",
                padding: "0 0 12px",
                animation: "marquee 30s linear infinite",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M21 12h-9"></path>
                </svg>
                {t.hero.chips.googleAds}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 20V10"></path>
                  <path d="M12 20V4"></path>
                  <path d="M19 20v-6"></path>
                </svg>
                {t.hero.chips.analytics}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 4h6a4 4 0 0 1 0 8H6z"></path>
                  <path d="M6 12h7a4 4 0 0 1 0 8H6z"></path>
                </svg>
                {t.hero.chips.bingAds}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 9l5 12 1.8-5.2L21 14z"></path>
                  <path d="M7.2 2.2 8 5.1"></path>
                  <path d="m5.1 8-2.9-.8"></path>
                  <path d="M14 4.1 12 6"></path>
                  <path d="m6 12-1.9 2"></path>
                </svg>
                {t.hero.chips.ppc}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                {t.hero.chips.facebookAds}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <path d="M8 11v6"></path>
                  <path d="M8 7.5v.01"></path>
                  <path d="M12 17v-4a2 2 0 0 1 4 0v4"></path>
                </svg>
                {t.hero.chips.linkedin}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m8 6 10 6-10 6z"></path>
                </svg>
                {t.hero.chips.youtube}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <path d="m8.6 13.5 6.8 4"></path>
                  <path d="m15.4 6.5-6.8 4"></path>
                </svg>
                {t.hero.chips.social}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                  <path d="M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2z"></path>
                </svg>
                {t.hero.chips.brand}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H7l-3 3V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2z"></path>
                  <path d="M18 9h1a2 2 0 0 1 2 2v10l-3-3h-5a2 2 0 0 1-2-2v-1"></path>
                </svg>
                {t.hero.chips.corporate}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <path d="M8 17V9"></path>
                  <path d="M12 17v-5"></path>
                  <path d="M16 17v-3"></path>
                </svg>
                {t.hero.chips.project}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M21 12h-9"></path>
                </svg>
                {t.hero.chips.googleAds}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 20V10"></path>
                  <path d="M12 20V4"></path>
                  <path d="M19 20v-6"></path>
                </svg>
                {t.hero.chips.analytics}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 4h6a4 4 0 0 1 0 8H6z"></path>
                  <path d="M6 12h7a4 4 0 0 1 0 8H6z"></path>
                </svg>
                {t.hero.chips.bingAds}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 9l5 12 1.8-5.2L21 14z"></path>
                  <path d="M7.2 2.2 8 5.1"></path>
                  <path d="m5.1 8-2.9-.8"></path>
                  <path d="M14 4.1 12 6"></path>
                  <path d="m6 12-1.9 2"></path>
                </svg>
                {t.hero.chips.ppc}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                {t.hero.chips.facebookAds}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <path d="M8 11v6"></path>
                  <path d="M8 7.5v.01"></path>
                  <path d="M12 17v-4a2 2 0 0 1 4 0v4"></path>
                </svg>
                {t.hero.chips.linkedin}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m8 6 10 6-10 6z"></path>
                </svg>
                {t.hero.chips.youtube}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <path d="m8.6 13.5 6.8 4"></path>
                  <path d="m15.4 6.5-6.8 4"></path>
                </svg>
                {t.hero.chips.social}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                  <path d="M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2z"></path>
                </svg>
                {t.hero.chips.brand}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H7l-3 3V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2z"></path>
                  <path d="M18 9h1a2 2 0 0 1 2 2v10l-3-3h-5a2 2 0 0 1-2-2v-1"></path>
                </svg>
                {t.hero.chips.corporate}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  flex: "0 0 auto",
                  padding: "9px 15px",
                  border: "1px dashed #cfc6ba",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#2b2b30",
                  whiteSpace: "nowrap",
                  boxShadow: "0 1px 2px rgba(74,49,39,.04)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a5a1f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <path d="M8 17V9"></path>
                  <path d="M12 17v-5"></path>
                  <path d="M16 17v-3"></path>
                </svg>
                {t.hero.chips.project}
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "18px",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            <a
              className="shimmer-btn hover-green"
              href="https://wa.me/244936499706"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "relative",
                overflow: "hidden",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#2E7D32",
                color: "#fff",
                borderRadius: "9999px",
                padding: "0 26px",
                height: "50px",
                fontSize: "15px",
                fontWeight: "600",
                fontFamily: "inherit",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background .2s",
              }}
            >
              {t.hero.cta}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginLeft: "12px" }}
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>

            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/01-woman-pink-hijab.jpg"
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "9999px",
                    border: "2px solid #ffffff",
                    boxShadow: "0 0 0 2px #e5e5e5",
                    objectFit: "cover",
                  }}
                />
                <img
                  src="/03-man-charcoal-suit.jpg"
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "9999px",
                    border: "2px solid #ffffff",
                    boxShadow: "0 0 0 2px #e5e5e5",
                    objectFit: "cover",
                    marginLeft: "-12px",
                  }}
                />
                <img
                  src="/04-man-navy-suit-window.jpg"
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "9999px",
                    border: "2px solid #ffffff",
                    boxShadow: "0 0 0 2px #e5e5e5",
                    objectFit: "cover",
                    marginLeft: "-12px",
                  }}
                />
                <img
                  src="/05-woman-ivory-suit.jpg"
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "9999px",
                    border: "2px solid #ffffff",
                    boxShadow: "0 0 0 2px #e5e5e5",
                    objectFit: "cover",
                    marginLeft: "-12px",
                  }}
                />
                <img
                  src="/06-man-gray-suit.jpg"
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "9999px",
                    border: "2px solid #ffffff",
                    boxShadow: "0 0 0 2px #e5e5e5",
                    objectFit: "cover",
                    marginLeft: "-12px",
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#71717a",
                  margin: "0",
                }}
              >
                {t.hero.trustPrefix}{" "}
                <span style={{ color: "#0a0a0a", fontWeight: "700" }}>
                  {t.hero.trustNumber}
                </span>{" "}
                {t.hero.trustSuffix}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
