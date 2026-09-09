"use client";

import { useEffect } from "react";

/**
 * Catches errors thrown by the root layout itself (navbar, footer,
 * LanguageProvider, SmoothScroll) — the one case app/error.tsx can't catch,
 * since that boundary lives *inside* the layout. This replaces the entire
 * document, so it must be fully self-contained: no app context, no shared
 * components, plain inline styles only, matching the site's palette.
 */
export default function GlobalError({
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
    <html lang="pt-AO">
      <body style={{ margin: 0, background: "#ffffff" }}>
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "40px 16px",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            textAlign: "center",
            background:
              "radial-gradient(56% 46% at 8% 12%, rgba(160,105,55,.18), transparent 72%), radial-gradient(52% 42% at 93% 10%, rgba(226,146,72,.17), transparent 72%), #ffffff",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "18px",
              maxWidth: "480px",
            }}
          >
            <h1
              style={{
                fontSize: "32px",
                lineHeight: "1.2",
                fontWeight: 700,
                color: "#0a0a0a",
                margin: 0,
              }}
            >
              Algo correu mal
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "26px",
                color: "#52525b",
                margin: 0,
              }}
            >
              Houve um problema a carregar o site. Tente outra vez — se
              continuar, escreva para geral@idealisa.ao.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
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
                  fontWeight: 600,
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
                  fontWeight: 600,
                  fontFamily: "inherit",
                  textDecoration: "none",
                }}
              >
                Voltar ao início
              </a>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
