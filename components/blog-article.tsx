"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { BLOG_POSTS } from "@/lib/posts";
import { blogContent, blogUi } from "@/lib/content/blog";
import { blogPostRoute, ROUTES } from "@/lib/routes";
import styles from "./blog.module.css";
import { SmActionModal, type SmModalKey } from "@/components/sm-action-modal";
import { serviceDetailUi } from "@/lib/content/service-detail";
const ACTIONS: { key: SmModalKey; n: string; icon: string }[] = [
  {
    key: "call",
    n: "02",
    icon: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z",
  },
  {
    key: "appointment",
    n: "03",
    icon: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  },
  {
    key: "email",
    n: "04",
    icon: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm18 3-10 7L2 7",
  },
];
export function BlogArticle({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const bl = blogContent[language] ?? blogContent.en;
  const ui = {
    ...(serviceDetailUi[language] ?? serviceDetailUi.en),
    ...(blogUi[language] ?? blogUi.en),
  };
  const allPosts = BLOG_POSTS[language] ?? BLOG_POSTS.en;
  const post = allPosts.find((p) => p.slug === slug)!;
  const postBody = post.body;
  const postSlotId = "post-hero-" + post.id;
  const sidebarPosts = allPosts.filter((p) => p.id !== post.id);
  const [modalKey, setModalKey] = useState<SmModalKey | null>(null);
  const [sent, setSent] = useState(false);
  const smActions = ACTIONS.map((a) => ({
    ...a,
    label:
      a.key === "call"
        ? ui.actCall
        : a.key === "appointment"
          ? ui.actAppointment
          : ui.actEmail,
    onClick: () => {
      setModalKey(a.key);
      setSent(false);
    },
  }));
  return (
    <>
      <div style={{ background: "#ffffff" }}>
        <section style={{ padding: "124px 16px 56px" }}>
          <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
            <a
              href={ROUTES.blog}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                background: "none",
                border: "none",
                padding: "0",
                margin: "0 0 14px",
                fontFamily: "inherit",
                fontSize: "11px",
                lineHeight: "15px",
                fontWeight: "700",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "#8a5a1f",
                cursor: "pointer",
              }}
              className={styles.brownHover}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5"></path>
                <path d="m12 19-7-7 7-7"></path>
              </svg>
              {ui.backToBlog}
            </a>
          </div>
          <div
            style={{
              maxWidth: "1024px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) minmax(0,300px)",
              gap: "34px",
              alignItems: "start",
            }}
          >
            <article>
              <h1
                style={{
                  fontSize: "30px",
                  lineHeight: "39px",
                  fontWeight: "700",
                  letterSpacing: "-.015em",
                  color: "#0a0a0a",
                  margin: "0 0 8px",
                  fontFamily: "var(--font-instrument-sans),sans-serif",
                  textWrap: "pretty",
                }}
              >
                {post.title}
              </h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "12px",
                  lineHeight: "17px",
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  color: "#a8a29e",
                  margin: "0 0 18px",
                }}
              >
                <span style={{ color: "#2E7D32", fontWeight: "700" }}>
                  {post.category}
                </span>
                <span>&#183;</span>
                <span>{post.date}</span>
                <span>&#183;</span>
                <span>
                  {post.read} {ui.minRead}
                </span>
              </div>

              <div
                style={{
                  position: "relative",
                  height: "400px",
                  margin: "0 0 24px",
                  background: post.tint,
                }}
              >
                <image-slot
                  id={postSlotId}
                  style={{ display: "block", width: "100%", height: "100%" }}
                  aria-label={ui.postImageSlot}
                ></image-slot>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "25px",
                    color: "#27272a",
                    margin: "0",
                    textWrap: "pretty",
                  }}
                >
                  {post.lead}
                </p>
                {postBody.map((s) => (
                  <div
                    key={s.h}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "20px",
                        lineHeight: "27px",
                        fontWeight: "700",
                        color: "#0a0a0a",
                        margin: "18px 0 0",
                        fontFamily: "var(--font-instrument-sans),sans-serif",
                        textWrap: "pretty",
                      }}
                    >
                      {s.h}
                    </h2>
                    {s.p.map((para) => (
                      <p
                        key={para}
                        style={{
                          fontSize: "15px",
                          lineHeight: "25px",
                          color: "#3f3f46",
                          margin: "0",
                          textWrap: "pretty",
                        }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <blockquote
                style={{
                  margin: "30px 0 0",
                  padding: "22px 26px",
                  border: "1px solid #cfc6ba",
                  borderLeft: "3px solid #8a5a1f",
                  background: "#faf7f2",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                    fontWeight: "600",
                    color: "#4A3127",
                    margin: "0",
                    textWrap: "pretty",
                  }}
                >
                  &ldquo;{post.quote}&rdquo;
                </p>
              </blockquote>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  flexWrap: "wrap",
                  marginTop: "24px",
                  paddingTop: "16px",
                  borderTop: "1px solid #cfc6ba",
                  fontSize: "13px",
                  lineHeight: "20px",
                  color: "#71717a",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      flex: "0 0 34px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      background: "#4A3127",
                      color: "#f0d9a8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: "700",
                      letterSpacing: ".04em",
                    }}
                  >
                    ID
                  </div>
                  <span>{ui.written}</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "14px" }}
                >
                  <span>{ui.share}</span>
                  <a
                    href="https://www.linkedin.com/company/139724042/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#8a5a1f", fontWeight: "700" }}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.facebook.com/IdealIsamkt"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#8a5a1f", fontWeight: "700" }}
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </article>

            <aside
              style={{ display: "flex", flexDirection: "column", gap: "22px" }}
            >
              <div
                style={{
                  display: "flex",
                  border: "1px solid #cfc6ba",
                  background: "#ffffff",
                }}
              >
                <input
                  type="search"
                  aria-label={ui.searchPlaceholder}
                  placeholder={ui.searchPlaceholder}
                  style={{
                    boxSizing: "border-box",
                    width: "100%",
                    minWidth: "0",
                    padding: "11px 13px",
                    border: "none",
                    background: "transparent",
                    fontFamily: "inherit",
                    fontSize: "14px",
                    color: "#0a0a0a",
                  }}
                />
                <span
                  aria-hidden="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    flexShrink: "0",
                    background: "#2E7D32",
                    color: "#ffffff",
                  }}
                >
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
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </span>
              </div>

              <div
                style={{ border: "1px solid #cfc6ba", background: "#ffffff" }}
              >
                <h2
                  style={{
                    fontSize: "11px",
                    lineHeight: "15px",
                    fontWeight: "700",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "#8a5a1f",
                    margin: "0",
                    padding: "14px 16px",
                    borderBottom: "1px solid #cfc6ba",
                  }}
                >
                  {bl.relatedHeading}
                </h2>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {sidebarPosts.map((p) => (
                    <a
                      key={p.id}
                      href={blogPostRoute(p.slug)}
                      title={p.title}
                      style={{
                        display: "block",
                        width: "100%",
                        maxWidth: "100%",
                        boxSizing: "border-box",
                        padding: "11px 16px",
                        borderBottom: "1px solid #e6ded2",
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#3f3f46",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        transition: "color .2s",
                      }}
                      className={styles.goldHover}
                    >
                      {p.title}
                    </a>
                  ))}
                </div>
              </div>

              <div
                style={{ border: "1px solid #cfc6ba", background: "#ffffff" }}
              >
                <h2
                  style={{
                    fontSize: "11px",
                    lineHeight: "15px",
                    fontWeight: "700",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "#8a5a1f",
                    margin: "0",
                    padding: "14px 16px",
                    borderBottom: "1px solid #cfc6ba",
                  }}
                >
                  {ui.actionsHeading}
                </h2>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <a
                    href="tel:+244936499706"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "14px 16px",
                      borderBottom: "1px solid #e6ded2",
                      textDecoration: "none",
                      fontSize: "14px",
                      lineHeight: "21px",
                      fontWeight: "600",
                      color: "#2E7D32",
                      transition: "background .2s",
                    }}
                    className={styles.warmHover}
                  >
                    <span
                      style={{
                        flex: "0 0 auto",
                        fontSize: "12px",
                        lineHeight: "18px",
                        fontWeight: "700",
                        color: "#8a5a1f",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      01
                    </span>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2E7D32"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flex: "0 0 auto" }}
                    >
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"></path>
                    </svg>
                    <span style={{ fontVariantNumeric: "tabular-nums" }}>
                      +244 936 499 706
                    </span>
                  </a>
                  {smActions.map((a) => (
                    <button
                      key={a.key}
                      onClick={a.onClick}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        width: "100%",
                        boxSizing: "border-box",
                        padding: "14px 16px",
                        border: "none",
                        borderBottom: "1px solid #e6ded2",
                        background: "none",
                        fontFamily: "inherit",
                        fontSize: "14px",
                        lineHeight: "21px",
                        fontWeight: "600",
                        color: "#0a0a0a",
                        textAlign: "left",
                        cursor: "pointer",
                        transition: "background .2s",
                      }}
                      className={styles.warmHover}
                    >
                      <span
                        style={{
                          flex: "0 0 auto",
                          fontSize: "12px",
                          lineHeight: "18px",
                          fontWeight: "700",
                          color: "#8a5a1f",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {a.n}
                      </span>
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#8a5a1f"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ flex: "0 0 auto" }}
                      >
                        <path d={a.icon}></path>
                      </svg>
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
      <SmActionModal
        modalKey={modalKey}
        sent={sent}
        ui={ui}
        thanksText={ui.formSent}
        onClose={() => setModalKey(null)}
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      />
    </>
  );
}
