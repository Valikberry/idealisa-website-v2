"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useLanguage, useTranslation } from "@/lib/language-context";
import { POSTS } from "@/lib/posts";
import { blogPostRoute } from "@/lib/routes";

export function RecentPosts() {
  const { language } = useLanguage();
  const t = useTranslation();
  const posts = POSTS[language] ?? POSTS.en;

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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,minmax(0,1fr))",
            border: "1px solid #cfc6ba",
            background: "#ffffff",
          }}
        >
          {posts.map((post) => (
            <Fragment key={post.id}>
              <Link
                href={blogPostRoute(post.id)}
                className="hover-warm"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "22px",
                  borderRight: "1px solid #cfc6ba",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "background .2s",
                }}
              >
                <div
                  style={{
                    height: "150px",
                    background: post.tint,
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "14px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "#ffffff",
                    }}
                  >
                    {post.category}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "#71717a",
                    margin: "0",
                  }}
                >
                  {post.date} · {post.read} {t.recent.minRead}
                </p>
                <h3
                  style={{
                    fontSize: "17px",
                    lineHeight: "24px",
                    fontWeight: "700",
                    color: "#0a0a0a",
                    margin: "0",
                    textWrap: "pretty",
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "#52525b",
                    margin: "0",
                    textWrap: "pretty",
                  }}
                >
                  {post.excerpt}
                </p>
              </Link>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
