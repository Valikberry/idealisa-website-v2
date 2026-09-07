"use client";

import { useTranslation } from "@/lib/language-context";

export function RecentPosts() {
  const t = useTranslation();
  return (
    <section style={{ padding: "40px 16px", background: "#f4f4f5" }} id="blog">
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
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
            {t.recent.heading}
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "600",
              color: "#8a5a1f",
              margin: "0",
            }}
          >
            {t.recent.sub}
          </p>
        </div>

        <p className="text-center text-sm text-zinc-500">{t.recent.empty}</p>
      </div>
    </section>
  );
}
