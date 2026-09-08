"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { BLOG_POSTS } from "@/lib/posts";
import { blogContent, blogUi } from "@/lib/content/blog";
import { blogPostRoute, ROUTES } from "@/lib/routes";
import styles from "./blog.module.css";

export function BlogListing() {
  const { language } = useLanguage();
  const bl = blogContent[language] ?? blogContent.en;
  const ui = blogUi[language] ?? blogUi.en;
  const allPosts = BLOG_POSTS[language] ?? BLOG_POSTS.en;
  const [category, setCategory] = useState<number | null>(null);
  const featuredPost = allPosts[0];
  const hasFeatured = !!featuredPost;
  const postCells = allPosts
    .slice(1)
    .filter((p) => category === null || p.category === bl.categories[category])
    .map((p) => ({
      ...p,
      cellStyle: {
        boxSizing: "border-box" as const,
        display: "flex",
        flexDirection: "column" as const,
        gap: "10px",
        padding: "22px",
        textDecoration: "none",
        cursor: "pointer",
        transition: "background .2s",
        borderRight: "1px solid #cfc6ba",
        borderBottom: "1px solid #cfc6ba",
      },
    }));
  const hasPosts = postCells.length > 0;
  const noPosts = !hasPosts;
  const catChips = [ui.allTopics, ...bl.categories].map((label, i) => ({
    label,
    onClick: () => setCategory(i === 0 ? null : i - 1),
    style: {
      padding: "8px 14px",
      fontSize: 13,
      lineHeight: "18px",
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit",
      transition: "all .2s",
      whiteSpace: "nowrap" as const,
      flexShrink: 0,
      border: "1px solid #cfc6ba",
      background: (category === null ? i === 0 : category === i - 1)
        ? "#4A3127"
        : "#ffffff",
      color: (category === null ? i === 0 : category === i - 1)
        ? "#fff"
        : "#3f3f46",
    },
  }));
  return (
    <div className={styles.listing}>
      <section
        className={styles.listingHeader}
        style={{
          padding: "150px 16px 32px",
          background:
            "radial-gradient(56% 46% at 8% 12%, rgba(160,105,55,.18), transparent 72%), radial-gradient(52% 42% at 93% 10%, rgba(226,146,72,.17), transparent 72%), radial-gradient(54% 46% at 90% 90%, rgba(46,125,50,.14), transparent 74%), radial-gradient(56% 48% at 6% 92%, rgba(226,146,72,.14), transparent 74%), #ffffff",
        }}
      >
        <div
          style={{ maxWidth: "1024px", margin: "0 auto", textAlign: "center" }}
        >
          <p
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "700",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "#2E7D32",
              margin: "0 0 10px",
            }}
          >
            {bl.kicker}
          </p>
          <h1
            style={{
              fontSize: "36px",
              lineHeight: "44px",
              fontWeight: "700",
              letterSpacing: "-.02em",
              color: "#0a0a0a",
              margin: "0 0 12px",
              fontFamily: "var(--font-instrument-sans),sans-serif",
              textWrap: "pretty",
            }}
          >
            {bl.latestHeading}
          </h1>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "24px",
              color: "#52525b",
              margin: "0 auto",
              maxWidth: "700px",
              textWrap: "pretty",
            }}
          >
            {bl.latestSub}
          </p>
        </div>
      </section>

      <section
        className={styles.listingBody}
        style={{ padding: "36px 16px 44px", background: "#f4f4f5" }}
      >
        <div
          style={{
            maxWidth: "1024px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "34px",
          }}
        >
          {hasFeatured && (
            <a
              href={blogPostRoute(featuredPost.slug)}
              style={{
                display: "block",
                border: "1px solid #cfc6ba",
                background: "#ffffff",
                textDecoration: "none",
                cursor: "pointer",
                transition: "background .2s",
              }}
              className={`${styles.warmHover} ${styles.featured}`}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,1.25fr) minmax(0,0.75fr)",
                }}
              >
                <div
                  className={styles.featuredCopy}
                  style={{ padding: "30px 32px 32px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        lineHeight: "15px",
                        fontWeight: "700",
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "#2E7D32",
                      }}
                    >
                      {bl.featuredLabel}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        lineHeight: "17px",
                        color: "#71717a",
                      }}
                    >
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontSize: "29px",
                      lineHeight: "36px",
                      fontWeight: "700",
                      color: "#0a0a0a",
                      margin: "0 0 10px",
                      fontFamily: "var(--font-instrument-sans),sans-serif",
                      textWrap: "pretty",
                    }}
                  >
                    {featuredPost.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "24px",
                      color: "#52525b",
                      margin: "0 0 14px",
                      textWrap: "pretty",
                    }}
                  >
                    {featuredPost.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "12px",
                      lineHeight: "18px",
                      color: "#71717a",
                    }}
                  >
                    <span>{featuredPost.date}</span>
                    <span>&#183;</span>
                    <span>
                      {featuredPost.read} {ui.minRead}
                    </span>
                    <span
                      style={{
                        marginLeft: "6px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#8a5a1f",
                        fontWeight: "700",
                      }}
                    >
                      {ui.readMore}
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    borderLeft: "1px solid #cfc6ba",
                    background: featuredPost.tint,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "32px",
                  }}
                >
                  <img
                    src="/idealisa-hero-icon.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "contain",
                      opacity: ".22",
                    }}
                  />
                </div>
              </div>
            </a>
          )}

          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              {catChips.map((c) => (
                <button
                  key={c.label}
                  type="button"
                  aria-pressed={c.style.background === "#4A3127"}
                  onClick={c.onClick}
                  style={c.style}
                >
                  {c.label}
                </button>
              ))}
            </div>
            {hasPosts && (
              <div
                className={styles.postGrid}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,minmax(0,1fr))",
                  borderTop: "1px solid #cfc6ba",
                  borderLeft: "1px solid #cfc6ba",
                  background: "#ffffff",
                }}
              >
                {postCells.map((p) => (
                  <a
                    key={p.id}
                    className={`${styles.postCard} ${styles.warmHover}`}
                    href={blogPostRoute(p.slug)}
                    style={p.cellStyle}
                  >
                    <div
                      style={{
                        height: "150px",
                        background: p.tint,
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
                        {p.category}
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
                      {p.date} &#183; {p.read} {ui.minRead}
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
                      {p.title}
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
                      {p.excerpt}
                    </p>
                  </a>
                ))}
              </div>
            )}
            {noPosts && (
              <div
                style={{
                  border: "1px solid #cfc6ba",
                  background: "#ffffff",
                  padding: "34px 24px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#71717a",
                    margin: "0",
                  }}
                >
                  {bl.emptyLabel}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section
        className={styles.newsletter}
        style={{
          padding: "40px 16px",
          background:
            "radial-gradient(50% 44% at 92% 22%, rgba(160,105,55,.09), transparent 72%), radial-gradient(46% 40% at 8% 30%, rgba(226,146,72,.07), transparent 72%), radial-gradient(44% 38% at 20% 92%, rgba(46,125,50,.05), transparent 72%), #ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1024px",
            margin: "0 auto",
            border: "1px solid #cfc6ba",
            background: "#ffffff",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1.15fr) minmax(0,0.85fr)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
                padding: "34px",
              }}
            >
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
                {bl.newsletter.heading}
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "24px",
                  color: "#52525b",
                  margin: "0",
                  textWrap: "pretty",
                }}
              >
                {bl.newsletter.sub}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#71717a",
                  margin: "0",
                }}
              >
                {bl.newsletter.fine}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
                padding: "34px",
                borderLeft: "1px solid #cfc6ba",
                background: "#f4f4f5",
              }}
            >
              <input
                type="email"
                aria-label={bl.newsletter.placeholder}
                placeholder={bl.newsletter.placeholder}
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  padding: "12px 14px",
                  border: "1px solid #cfc6ba",
                  background: "#ffffff",
                  fontFamily: "inherit",
                  fontSize: "14px",
                  color: "#0a0a0a",
                }}
              />
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "14px",
                  padding: "13px 18px",
                  background: "#2E7D32",
                  color: "#ffffff",
                  border: "none",
                  fontFamily: "inherit",
                  fontSize: "15px",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "background .2s",
                }}
                className={styles.greenHover}
              >
                {bl.newsletter.cta}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
