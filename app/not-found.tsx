"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/language-context";
import { ROUTES } from "@/lib/routes";

const HERO_BACKGROUND =
  "radial-gradient(56% 46% at 8% 12%, rgba(160,105,55,.18), transparent 72%), radial-gradient(52% 42% at 93% 10%, rgba(226,146,72,.17), transparent 72%), radial-gradient(54% 46% at 90% 90%, rgba(46,125,50,.14), transparent 74%), radial-gradient(56% 48% at 6% 92%, rgba(226,146,72,.14), transparent 74%), #ffffff";

/**
 * The App Router's not-found boundary — Next renders this inside the root
 * layout (so the shared navbar/footer wrap it automatically) and returns a
 * real HTTP 404 + noindex on its own; nothing extra needed here for that.
 */
export default function NotFound() {
  const t = useTranslation();
  const copy = t.notFound;

  return (
    <section
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        minHeight: "62vh",
        padding: "160px 16px 100px",
        background: HERO_BACKGROUND,
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "640px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <img
          src="/idealisa-hero-icon.png"
          alt=""
          aria-hidden="true"
          draggable={false}
          style={{ width: "104px", height: "104px", objectFit: "contain", userSelect: "none" }}
        />

        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "7px 16px",
            border: "1px dashed #cfc6ba",
            borderRadius: "9999px",
            background: "linear-gradient(135deg,#fdfaf5 0%,#fff6e8 45%,#f6f2fb 100%)",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "#8a5a1f",
          }}
        >
          {copy.badge}
        </span>

        <h1
          style={{
            fontSize: "44px",
            lineHeight: "1.1",
            fontWeight: "700",
            letterSpacing: "-0.02em",
            color: "#0a0a0a",
            margin: "0",
            fontFamily: "var(--font-cal-sans),sans-serif",
            textWrap: "pretty",
          }}
        >
          {copy.heading}
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "26px",
            color: "#52525b",
            margin: "0",
            maxWidth: "480px",
            textWrap: "pretty",
          }}
        >
          {copy.sub}
        </p>

        <div className="notfound-actions" style={{ marginTop: "10px" }}>
          <Link
            href={ROUTES.home}
            className="shimmer-btn hover-green"
            style={{
              position: "relative",
              overflow: "hidden",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              background: "#2E7D32",
              color: "#ffffff",
              borderRadius: "9999px",
              padding: "0 26px",
              height: "50px",
              fontSize: "15px",
              fontWeight: "600",
              fontFamily: "inherit",
              textDecoration: "none",
              transition: "background .2s",
            }}
          >
            {copy.backHome}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
          <Link
            href={ROUTES.contact}
            className="hover-warm"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              border: "1px solid #cfc6ba",
              background: "#ffffff",
              color: "#8a5a1f",
              borderRadius: "9999px",
              padding: "0 26px",
              height: "50px",
              fontSize: "15px",
              fontWeight: "600",
              fontFamily: "inherit",
              textDecoration: "none",
              transition: "background .2s",
            }}
          >
            {copy.talkToUs}
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px 26px",
            marginTop: "26px",
            paddingTop: "22px",
            borderTop: "1px solid #cfc6ba",
            width: "100%",
          }}
        >
          {[
            { label: copy.linkServices, href: ROUTES.services },
            { label: copy.linkPortfolio, href: ROUTES.portfolio },
            { label: copy.linkBlog, href: ROUTES.blog },
            { label: copy.linkContact, href: ROUTES.contact },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover-gold"
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#3f3f46",
                textDecoration: "none",
                transition: "color .2s",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
