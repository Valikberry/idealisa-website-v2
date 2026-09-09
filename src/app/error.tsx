"use client";

import { useEffect } from "react";

const HERO_BACKGROUND =
  "radial-gradient(56% 46% at 8% 12%, rgba(160,105,55,.18), transparent 72%), radial-gradient(52% 42% at 93% 10%, rgba(226,146,72,.17), transparent 72%), radial-gradient(54% 46% at 90% 90%, rgba(46,125,50,.14), transparent 74%), radial-gradient(56% 48% at 6% 92%, rgba(226,146,72,.14), transparent 74%), #ffffff";

/**
 * Root-level error boundary for anything thrown while rendering a page
 * (layout.tsx — navbar/footer/LanguageProvider — stays intact around this).
 * Deliberately has zero dependency on app context (translations, etc.), so
 * it can't itself fail for the same reason whatever it's catching failed.
 * Kept to Portuguese only (the site's default) to stay minimal.
 */
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
          maxWidth: "560px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px",
        }}
      >
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
          Erro inesperado
        </span>

        <h1
          style={{
            fontSize: "36px",
            lineHeight: "1.15",
            fontWeight: "700",
            letterSpacing: "-0.02em",
            color: "#0a0a0a",
            margin: "0",
            fontFamily: "var(--font-cal-sans),sans-serif",
            textWrap: "pretty",
          }}
        >
          Algo correu mal
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "26px",
            color: "#52525b",
            margin: "0",
            maxWidth: "440px",
            textWrap: "pretty",
          }}
        >
          Esta página teve um problema ao carregar. O resto do site continua a
          funcionar normalmente — tente outra vez ou volte ao início.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
            marginTop: "10px",
          }}
        >
          <button
            type="button"
            onClick={reset}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#2E7D32",
              color: "#ffffff",
              borderRadius: "9999px",
              padding: "0 26px",
              height: "50px",
              fontSize: "15px",
              fontWeight: "600",
              fontFamily: "inherit",
              border: "none",
              cursor: "pointer",
            }}
          >
            Tentar novamente
          </button>
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
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
            }}
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </section>
  );
}
