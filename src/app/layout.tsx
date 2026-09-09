import { rootMetadata, getSeoLanguage } from "@/lib/seo/server";
import { SiteStructuredData } from "@/components/seo-json-ld";
import type React from "react";
import Script from "next/script";
import { Manrope, DM_Sans, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/lib/language-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

/**
 * TEMPORARY diagnostic — remove once the real-device hydration crash is
 * found. Opt-in only (?showErrors=1), plain vanilla JS with no dependency
 * on React/hydration: `beforeInteractive` makes Next inject this directly
 * into the initial HTML's <head>, so it runs on first parse — before the
 * app's own bundle loads, and regardless of whether hydration ever
 * succeeds. Catches both `error` and `unhandledrejection` and renders the
 * message/file/line/col straight onto the page, since the affected devices
 * can't be reached with remote devtools.
 */
const SHOW_ERRORS_SCRIPT = `
(function () {
  var params = new URLSearchParams(window.location.search);
  if (params.get("showErrors") !== "1") return;

  var container;
  function getContainer() {
    if (container) return container;
    container = document.createElement("div");
    container.id = "__show_errors_banner__";
    container.style.cssText =
      "position:fixed;top:0;left:0;right:0;z-index:2147483647;" +
      "background:#b00020;color:#fff;font:11px/1.5 -apple-system,monospace;" +
      "padding:8px 10px;white-space:pre-wrap;word-break:break-word;" +
      "max-height:70vh;overflow:auto;box-shadow:0 2px 8px rgba(0,0,0,.4);";
    (document.body || document.documentElement).appendChild(container);
    return container;
  }

  function report(title, details) {
    var block = document.createElement("div");
    block.style.cssText =
      "border-bottom:1px solid rgba(255,255,255,.4);padding:6px 0;margin-bottom:6px;";
    var time = new Date().toISOString().slice(11, 19);
    block.textContent = "[" + time + "] " + title + (details ? "\\n" + details : "");
    getContainer().appendChild(block);
  }

  window.addEventListener("error", function (e) {
    report(
      "window error: " + (e.message || "(no message)"),
      "File: " + (e.filename || "?") + ":" + (e.lineno || "?") + ":" + (e.colno || "?") +
        (e.error && e.error.stack ? "\\nStack: " + e.error.stack : "")
    );
  });

  window.addEventListener("unhandledrejection", function (e) {
    var reason = e.reason;
    report(
      "unhandled promise rejection: " +
        (reason && reason.message ? reason.message : String(reason)),
      reason && reason.stack ? "Stack: " + reason.stack : ""
    );
  });

  report("showErrors diagnostic active", "Listening for errors...");
})();
`;

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-cal-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const generateMetadata = rootMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLanguage = await getSeoLanguage();

  return (
    <html lang={initialLanguage}>
      <body
        className={`${manrope.variable} ${dmSans.variable} ${inter.variable} font-sans antialiased`}
      >
        <Script
          id="show-errors-diagnostic"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: SHOW_ERRORS_SCRIPT }}
        />
        <div className="noise-overlay" aria-hidden="true" />
        <LanguageProvider initialLanguage={initialLanguage}>
          <SmoothScroll>
            <div id="dc-root" className="min-h-screen bg-white text-zinc-950">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </SmoothScroll>
        </LanguageProvider>
        <SiteStructuredData />
        <Analytics />
      </body>
    </html>
  );
}
