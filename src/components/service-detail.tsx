"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { useLanguage, useTranslation } from "@/lib/language-context";
import {
  serviceDetailContent,
  serviceDetailUi,
  type ServiceDetailKey,
} from "@/lib/content/service-detail";
import { ROUTES } from "@/lib/routes";
import { SmActionModal, type SmModalKey } from "@/components/sm-action-modal";

const HERO_BACKGROUND =
  "radial-gradient(56% 46% at 8% 12%, rgba(160,105,55,.18), transparent 72%), radial-gradient(52% 42% at 93% 10%, rgba(226,146,72,.17), transparent 72%), radial-gradient(54% 46% at 90% 90%, rgba(46,125,50,.14), transparent 74%), radial-gradient(56% 48% at 6% 92%, rgba(226,146,72,.14), transparent 74%), #ffffff";

/** Fixed n/icon per action — design-reference's `smActions` (label is the only per-language part). */
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

const ACTION_LABEL_KEY: Record<SmModalKey, "actCall" | "actAppointment" | "actEmail"> = {
  call: "actCall",
  appointment: "actAppointment",
  email: "actEmail",
};

const kickerStyle = {
  fontSize: "11px",
  lineHeight: "15px",
  fontWeight: "700" as const,
  letterSpacing: ".12em",
  textTransform: "uppercase" as const,
  color: "#8a5a1f",
  margin: "0 0 8px",
};
const sectionHeadingStyle = {
  fontSize: "24px",
  lineHeight: "32px",
  fontWeight: "700" as const,
  color: "#0a0a0a",
  margin: "0 0 10px",
  fontFamily: "var(--font-instrument-sans),sans-serif",
  textWrap: "pretty" as const,
};
const sectionSubStyle = {
  fontSize: "15px",
  lineHeight: "25px",
  color: "#3f3f46",
  margin: "0",
  textWrap: "pretty" as const,
};
const cardTitleStyle = {
  fontSize: "15px",
  lineHeight: "22px",
  fontWeight: "700" as const,
  color: "#0a0a0a",
  margin: "0 0 8px",
  fontFamily: "var(--font-instrument-sans),sans-serif",
  textWrap: "pretty" as const,
};
const cardBodyStyle = {
  fontSize: "13px",
  lineHeight: "20px",
  color: "#52525b",
  margin: "0",
  textWrap: "pretty" as const,
};
const twoUpGridStyle = {
  display: "grid",
  gap: "1px",
  background: "#cfc6ba",
  border: "1px solid #cfc6ba",
  gridTemplateColumns: "repeat(2,minmax(0,1fr))",
  marginTop: "16px",
};
const gridCellStyle = { background: "#ffffff", padding: "22px 20px 24px" };

export function ServiceDetail({ service }: { service: ServiceDetailKey }) {
  const { language } = useLanguage();
  const t = useTranslation();
  const sm = serviceDetailContent[language]?.[service] ?? serviceDetailContent.en[service];
  const ui = serviceDetailUi[language] ?? serviceDetailUi.en;

  const [modalKey, setModalKey] = useState<SmModalKey | null>(null);
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mTalkOpen, setMTalkOpen] = useState(false);

  const openModal = (key: SmModalKey) => {
    setModalKey(key);
    setSent(false);
  };
  const closeModal = () => setModalKey(null);
  const submitModal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const chips = [...sm.chips, ...sm.chips];
  const otherServiceLabels = sm.relatedServices ?? ui.adServices;

  // Shared call/appointment/email action rows — rendered in the sticky
  // desktop aside card and again inside the mobile-only `m-talk` accordion.
  const actionsList = (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <a
        href="tel:+244936499706"
        className="hover-warm"
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
      >
        <span style={{ flex: "0 0 auto", fontSize: "12px", lineHeight: "18px", fontWeight: "700", color: "#8a5a1f", fontVariantNumeric: "tabular-nums" }}>
          01
        </span>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"></path>
        </svg>
        <span style={{ fontVariantNumeric: "tabular-nums" }}>+244 936 499 706</span>
      </a>
      {ACTIONS.map((action) => (
        <Fragment key={action.key}>
          <button
            onClick={() => openModal(action.key)}
            className="hover-warm"
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
          >
            <span style={{ flex: "0 0 auto", fontSize: "12px", lineHeight: "18px", fontWeight: "700", color: "#8a5a1f", fontVariantNumeric: "tabular-nums" }}>
              {action.n}
            </span>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8a5a1f" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <path d={action.icon}></path>
            </svg>
            {ui[ACTION_LABEL_KEY[action.key]]}
          </button>
        </Fragment>
      ))}
    </div>
  );

  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          padding: "112px 16px 40px",
          background: HERO_BACKGROUND,
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 10,
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
                  zIndex: 10,
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
                {sm.headline}
              </h1>
              <p
                style={{
                  position: "relative",
                  zIndex: 10,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#18181b",
                  margin: "0 0 8px",
                }}
              >
                <span style={{ fontWeight: "700", color: "#0a0a0a" }}>{sm.credYears}</span>{" "}
                {sm.credRest}
              </p>
              <p
                style={{
                  position: "relative",
                  zIndex: 10,
                  fontSize: "14px",
                  lineHeight: "1.55",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: "#0a0a0a",
                  fontWeight: "700",
                  margin: "0 0 26px",
                }}
              >
                {sm.credTrust}
              </p>
              <p
                style={{
                  position: "relative",
                  zIndex: 10,
                  fontSize: "16px",
                  lineHeight: "1.4",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  color: "#8a5a1f",
                  margin: "0 0 14px",
                }}
              >
                {sm.kicker}
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
                {chips.map((chip, index) => (
                  <span
                    key={index}
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
                      <path d={chip.icon}></path>
                    </svg>
                    {chip.label}
                  </span>
                ))}
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
                {sm.ctaPrimary}
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
                <p style={{ fontSize: "14px", lineHeight: "20px", color: "#71717a", margin: "0" }}>
                  {sm.partnerNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-column body */}
      <section style={{ padding: "28px 16px 52px", background: "#ffffff" }}>
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
          <article style={{ display: "flex", flexDirection: "column", gap: "34px" }}>
            {/* Solutions intro */}
            <div>
              <h2
                style={{
                  fontSize: "29px",
                  lineHeight: "37px",
                  fontWeight: "700",
                  letterSpacing: "-0.015em",
                  color: "#0a0a0a",
                  margin: "0 0 14px",
                  fontFamily: "var(--font-instrument-sans),sans-serif",
                  textWrap: "pretty",
                }}
              >
                {sm.solutionsHeading}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <p style={{ fontSize: "15px", lineHeight: "25px", color: "#3f3f46", margin: "0", textWrap: "pretty" }}>
                  {sm.intro}
                </p>
                <p style={{ fontSize: "15px", lineHeight: "25px", color: "#3f3f46", margin: "0", textWrap: "pretty" }}>
                  {sm.solutionsSub}
                </p>
              </div>
            </div>

            {/* Mobile-only talk-to-us accordion: the sticky aside's actions
                card is hidden under 820px (design-reference.css), so this
                gives mobile visitors the same call/appointment/email actions
                inline in the article flow. */}
            <div className="m-talk">
              <button
                onClick={() => setMTalkOpen((open) => !open)}
                aria-expanded={mTalkOpen}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "14px",
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "16px 18px",
                  border: "1px solid #cfc6ba",
                  background: "#faf7f2",
                  fontFamily: "inherit",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: "700",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#8a5a1f",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                {ui.actionsHeading}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8a5a1f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              {mTalkOpen && (
                <div style={{ display: "flex", flexDirection: "column", marginTop: "-1px", border: "1px solid #cfc6ba", background: "#ffffff" }}>
                  {actionsList}
                </div>
              )}
            </div>

            {/* Pillars + photo */}
            <div>
              <p style={kickerStyle}>{sm.solutionsKicker}</p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,1fr) minmax(0,0.62fr)",
                  border: "1px solid #cfc6ba",
                  background: "#ffffff",
                  marginTop: "6px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", background: "#f4f4f5" }}>
                  {sm.pillars.map((pillar, index) => (
                    <Fragment key={pillar.title}>
                      <div
                        style={{
                          display: "flex",
                          gap: "14px",
                          padding: "20px 22px",
                          borderBottom: "1px solid #e6ded2",
                        }}
                      >
                        <span
                          style={{
                            flex: "0 0 auto",
                            fontSize: "13px",
                            lineHeight: "20px",
                            fontWeight: "700",
                            color: "#8a5a1f",
                            fontVariantNumeric: "tabular-nums",
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3
                            style={{
                              fontSize: "13px",
                              lineHeight: "19px",
                              fontWeight: "700",
                              letterSpacing: ".08em",
                              textTransform: "uppercase",
                              color: "#0a0a0a",
                              margin: "0 0 6px",
                              textWrap: "pretty",
                            }}
                          >
                            {pillar.title}
                          </h3>
                          <p style={{ fontSize: "13px", lineHeight: "20px", color: "#52525b", margin: "0", textWrap: "pretty" }}>
                            {pillar.body}
                          </p>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div
                  style={{
                    position: "relative",
                    minHeight: "300px",
                    borderLeft: "1px solid #cfc6ba",
                    backgroundColor: "#9c8878",
                    backgroundImage: "url(/team-videographer.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center 20%",
                  }}
                ></div>
              </div>
            </div>

            {/* Record strip */}
            <div
              style={{
                display: "grid",
                gap: "1px",
                background: "#cfc6ba",
                border: "1px solid #cfc6ba",
                gridTemplateColumns: "repeat(4,minmax(0,1fr))",
              }}
            >
              {sm.record.map((stat) => (
                <Fragment key={stat.label}>
                  <div style={{ background: "#faf7f2", padding: "20px 14px 22px", textAlign: "center" }}>
                    <div style={{ fontSize: "26px", lineHeight: "32px", fontWeight: "700", color: "#0a0a0a", fontVariantNumeric: "tabular-nums" }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: "12px", lineHeight: "18px", color: "#52525b", marginTop: "4px" }}>
                      {stat.label}
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>

            {/* Services grid */}
            <div>
              <p style={kickerStyle}>{sm.servicesKicker}</p>
              <h2 style={sectionHeadingStyle}>{sm.servicesHeading}</h2>
              <p style={sectionSubStyle}>{sm.servicesSub}</p>
              <div style={twoUpGridStyle}>
                {sm.services.map((item) => (
                  <Fragment key={item.title}>
                    <div style={gridCellStyle}>
                      <h3 style={cardTitleStyle}>{item.title}</h3>
                      <p style={cardBodyStyle}>{item.body}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>

            {/* CTA band */}
            <div
              style={{
                border: "1px solid #cfc6ba",
                background: "#faf7f2",
                padding: "26px 26px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "18px",
                  flex: "1 1 260px",
                  minWidth: "0",
                }}
              >
                <div style={{ maxWidth: "420px" }}>
                  <h2
                    style={{
                      fontSize: "20px",
                      lineHeight: "27px",
                      fontWeight: "700",
                      color: "#0a0a0a",
                      margin: "0 0 6px",
                      fontFamily: "var(--font-instrument-sans),sans-serif",
                      textWrap: "pretty",
                    }}
                  >
                    {sm.bandHeading}
                  </h2>
                  <p style={{ fontSize: "13px", lineHeight: "20px", color: "#52525b", margin: "0", textWrap: "pretty" }}>
                    {sm.bandSub}
                  </p>
                </div>
                <a
                  href="https://wa.me/244936499706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-green"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "0 22px",
                    height: "46px",
                    borderRadius: "9999px",
                    background: "#2E7D32",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "600",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    transition: "background .2s",
                  }}
                >
                  {sm.bandCta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <img
                src="/kwanza-stack.webp"
                alt=""
                aria-hidden="true"
                draggable={false}
                style={{
                  flex: "0 1 auto",
                  width: "150px",
                  maxWidth: "38%",
                  height: "220px",
                  objectFit: "contain",
                  objectPosition: "bottom right",
                  alignSelf: "flex-end",
                  userSelect: "none",
                }}
              />
            </div>

            {/* Process */}
            <div>
              <p style={kickerStyle}>{sm.processKicker}</p>
              <h2 style={sectionHeadingStyle}>{sm.processHeading}</h2>
              <p style={sectionSubStyle}>{sm.processSub}</p>
              <div style={twoUpGridStyle}>
                {sm.process.map((step) => (
                  <Fragment key={step.n}>
                    <div style={gridCellStyle}>
                      <p
                        style={{
                          fontSize: "12px",
                          lineHeight: "16px",
                          fontWeight: "700",
                          letterSpacing: ".14em",
                          color: "#8a5a1f",
                          margin: "0 0 8px",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {step.n}
                      </p>
                      <h3 style={cardTitleStyle}>{step.title}</h3>
                      <p style={cardBodyStyle}>{step.body}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>

            {/* Why us */}
            <div>
              <p style={kickerStyle}>{sm.whyKicker}</p>
              <h2 style={sectionHeadingStyle}>{sm.whyHeading}</h2>
              <p style={sectionSubStyle}>{sm.whySub}</p>
              <div style={twoUpGridStyle}>
                {sm.why.map((item) => (
                  <Fragment key={item.title}>
                    <div style={gridCellStyle}>
                      <h3 style={cardTitleStyle}>{item.title}</h3>
                      <p style={cardBodyStyle}>{item.body}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div>
              <p style={kickerStyle}>{sm.platformsKicker}</p>
              <h2 style={sectionHeadingStyle}>{sm.platformsHeading}</h2>
              <p style={sectionSubStyle}>{sm.platformsSub}</p>
              <div style={twoUpGridStyle}>
                {sm.platforms.map((item) => (
                  <Fragment key={item.name}>
                    <div style={gridCellStyle}>
                      <h3 style={{ ...cardTitleStyle, fontFamily: "var(--font-instrument-sans),sans-serif" }}>
                        {item.name}
                      </h3>
                      <p style={cardBodyStyle}>{item.body}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 style={sectionHeadingStyle}>{sm.faqHeading}</h2>
              <div style={{ border: "1px solid #cfc6ba", background: "#ffffff", marginTop: "14px" }}>
                {sm.faq.map((item, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <Fragment key={item.q}>
                      <div style={{ borderBottom: "1px solid #cfc6ba" }}>
                        <h3 style={{ margin: "0", fontSize: "inherit", fontWeight: "inherit" }}>
                          <button
                            aria-expanded={isOpen}
                            onClick={() => setOpenFaq(isOpen ? null : index)}
                            className="hover-warm"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "16px",
                              width: "100%",
                              boxSizing: "border-box",
                              padding: "16px 20px",
                              background: "none",
                              border: "none",
                              fontFamily: "inherit",
                              fontSize: "14px",
                              lineHeight: "22px",
                              fontWeight: "600",
                              color: "#0a0a0a",
                              textAlign: "left",
                              cursor: "pointer",
                              transition: "background .2s",
                            }}
                          >
                            {item.q}
                            <span aria-hidden="true" style={{ flexShrink: 0, fontSize: "20px", lineHeight: "20px", color: "#8a5a1f" }}>
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>
                        </h3>
                        {isOpen && (
                          <p style={{ fontSize: "14px", lineHeight: "23px", color: "#52525b", margin: "0", padding: "0 20px 18px", textWrap: "pretty" }}>
                            {item.a}
                          </p>
                        )}
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </article>

          <aside aria-label={ui.asideLabel} style={{ position: "sticky", top: "92px" }}>
            <div style={{ border: "1px solid #cfc6ba", background: "#ffffff", marginBottom: "22px" }}>
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
              {actionsList}
            </div>

            <div style={{ border: "1px solid #cfc6ba", background: "#ffffff" }}>
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
                {ui.otherServices}
              </h2>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {otherServiceLabels.map((label) => (
                  <Fragment key={label}>
                    <Link
                      href={ROUTES.services}
                      title={label}
                      className="hover-gold"
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
                    >
                      {label}
                    </Link>
                  </Fragment>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <SmActionModal
        modalKey={modalKey}
        sent={sent}
        ui={ui}
        thanksText={t.talk.thanks}
        onClose={closeModal}
        onSubmit={submitModal}
      />
    </>
  );
}
