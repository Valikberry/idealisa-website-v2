"use client";

import { Fragment, useState, useRef } from "react";
import { useTranslation } from "@/lib/language-context";
import { css } from "@/lib/design-style";
import { industryIcons } from "@/lib/design-data";

export function Industries() {
  const t = useTranslation();
  const [group, setGroup] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggleVideo = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) void video.play();
      else video.pause();
    }
  };
  const onVideoPlay = () => setPlaying(true);
  const onVideoPause = () => setPlaying(false);
  const videoOverlayStyle = `position:absolute;inset:0;display:${playing ? "none" : "flex"};flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:24px;background:rgba(10,10,10,.45);cursor:pointer`;
  const industries = t.whoWeWorkWith.cards
    .map((c, i) => ({ ...c, icon: industryIcons[i] }))
    .slice(group * 6, group * 6 + 6);
  const industryDots = [0, 1].map((i) => ({
    label: String(i + 1),
    style: `width:${group === i ? "26px" : "9px"};height:9px;border-radius:9999px;border:none;padding:0;background:${group === i ? "#8a5a1f" : "#cfc6ba"};cursor:pointer;transition:width .3s, background .3s`,
    onClick: () => setGroup(i),
  }));
  return (
    <section
      style={{
        padding: "40px 16px",
        background:
          "radial-gradient(50% 44% at 92% 22%, rgba(160,105,55,.09), transparent 72%), radial-gradient(46% 40% at 8% 30%, rgba(226,146,72,.07), transparent 72%), radial-gradient(44% 38% at 20% 92%, rgba(46,125,50,.05), transparent 72%), #ffffff",
      }}
    >
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "29px",
              lineHeight: "36px",
              fontWeight: "700",
              color: "#000",
              margin: "0 0 8px",
              fontFamily: "var(--font-instrument-sans),sans-serif",
            }}
          >
            {t.whoWeWorkWith.heading}
          </h2>
          <p
            style={{
              color: "#71717a",
              maxWidth: "1024px",
              margin: "0 auto",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            {t.whoWeWorkWith.subheading}
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) 336px",
            gap: "16px",
            alignItems: "stretch",
            maxWidth: "1024px",
            margin: "40px auto 0",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,minmax(0,1fr))",
              borderTop: "1px solid #cfc6ba",
              borderLeft: "1px solid #cfc6ba",
              background: "#ffffff",
            }}
          >
            {industries.map((card, index) => (
              <Fragment key={index}>
                <div
                  style={{
                    boxSizing: "border-box",
                    borderRight: "1px solid #cfc6ba",
                    borderBottom: "1px solid #cfc6ba",
                    padding: "20px 22px 22px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      minHeight: "44px",
                      marginBottom: "10px",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#8a5a1f"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: "0", marginTop: "1px" }}
                    >
                      <path d={card.icon}></path>
                    </svg>
                    <h3
                      style={{
                        fontSize: "16px",
                        lineHeight: "22px",
                        fontWeight: "600",
                        color: "#0a0a0a",
                        margin: "0",
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "#3f3f46",
                      margin: "0",
                      textWrap: "pretty",
                    }}
                  >
                    {card.body}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>

          <div
            style={{
              position: "relative",
              overflow: "hidden",
              border: "1px solid #cfc6ba",
              background: "#0a0a0a",
            }}
          >
            <video
              ref={videoRef}
              src="/who-we-work-with.mp4"
              playsInline
              preload="metadata"
              onPlay={onVideoPlay}
              onPause={onVideoPause}
              style={{
                position: "absolute",
                inset: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "pointer",
                display: "block",
              }}
              controls
            ></video>
            <button
              type="button"
              aria-label={t.whoWeWorkWith.videoTitle}
              onClick={toggleVideo}
              style={css(videoOverlayStyle)}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "64px",
                  height: "64px",
                  borderRadius: "9999px",
                  background: "#2E7D32",
                  transition: "background .2s, transform .2s",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  aria-hidden="true"
                >
                  <path d="m8 5 12 7-12 7z"></path>
                </svg>
              </span>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: "600",
                  color: "#ffffff",
                  margin: "0",
                  textAlign: "center",
                }}
              >
                {t.whoWeWorkWith.videoTitle}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "rgba(255,255,255,.75)",
                  margin: "0",
                  textAlign: "center",
                  textWrap: "pretty",
                }}
              >
                {t.whoWeWorkWith.videoNote}
              </p>
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {industryDots.map((dot, index) => (
            <Fragment key={index}>
              <button
                aria-label={dot.label}
                onClick={dot.onClick}
                style={css(dot.style)}
              ></button>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
