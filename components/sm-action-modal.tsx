"use client";

import type { ServiceDetailUi } from "@/lib/content/service-detail";

export type SmModalKey = "call" | "appointment" | "email";

type SmActionModalProps = {
  modalKey: SmModalKey | null;
  sent: boolean;
  ui: ServiceDetailUi;
  thanksText: string;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const TITLE_KEY: Record<SmModalKey, "actCall" | "actAppointment" | "actEmail"> = {
  call: "actCall",
  appointment: "actAppointment",
  email: "actEmail",
};
const NOTE_KEY: Record<SmModalKey, "noteCall" | "noteAppointment" | "noteEmail"> = {
  call: "noteCall",
  appointment: "noteAppointment",
  email: "noteEmail",
};

/**
 * The shared call/appointment/email lead-capture modal opened from a
 * service-detail page's "talk to us" actions (design-reference's
 * `smModalOpen`/`smModalWantsPhone`/etc.). One instance per page, opened by
 * either the sticky aside's actions card or (once built) the mobile-only
 * `m-talk` accordion — both trigger the same state.
 */
export function SmActionModal({
  modalKey,
  sent,
  ui,
  thanksText,
  onClose,
  onSubmit,
}: SmActionModalProps) {
  if (!modalKey) return null;

  const wantsPhone = modalKey === "call" || modalKey === "appointment";
  const wantsEmail = modalKey === "appointment" || modalKey === "email";
  const wantsDate = modalKey === "appointment";
  const wantsMessage = modalKey === "email";
  const title = ui[TITLE_KEY[modalKey]];
  const note = ui[NOTE_KEY[modalKey]];

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: "0",
        zIndex: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        background: "rgba(10,10,10,.55)",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "420px",
          border: "1px solid #cfc6ba",
          background: "#ffffff",
          boxShadow: "0 18px 48px rgba(74,49,39,.22)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            padding: "16px 20px",
            background: "#4A3127",
          }}
        >
          <h2
            style={{
              fontSize: "13px",
              lineHeight: "18px",
              fontWeight: "700",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "#ffffff",
              margin: "0",
            }}
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "26px",
              height: "26px",
              border: "none",
              background: "none",
              color: "#ffffff",
              cursor: "pointer",
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
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        {!sent ? (
          <form
            onSubmit={onSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "20px",
            }}
          >
            <p style={{ fontSize: "13px", lineHeight: "20px", color: "#52525b", margin: "0" }}>
              {note}
            </p>
            <input
              type="text"
              required
              placeholder={ui.formName}
              style={{
                boxSizing: "border-box",
                width: "100%",
                padding: "11px 13px",
                border: "1px solid #cfc6ba",
                background: "#ffffff",
                fontFamily: "inherit",
                fontSize: "14px",
                color: "#0a0a0a",
              }}
            />
            {wantsPhone && (
              <input
                type="tel"
                required
                placeholder={ui.formPhone}
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  padding: "11px 13px",
                  border: "1px solid #cfc6ba",
                  background: "#ffffff",
                  fontFamily: "inherit",
                  fontSize: "14px",
                  color: "#0a0a0a",
                }}
              />
            )}
            {wantsEmail && (
              <input
                type="email"
                required
                placeholder={ui.formEmail}
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  padding: "11px 13px",
                  border: "1px solid #cfc6ba",
                  background: "#ffffff",
                  fontFamily: "inherit",
                  fontSize: "14px",
                  color: "#0a0a0a",
                }}
              />
            )}
            {wantsDate && (
              <input
                type="datetime-local"
                required
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  padding: "11px 13px",
                  border: "1px solid #cfc6ba",
                  background: "#ffffff",
                  fontFamily: "inherit",
                  fontSize: "14px",
                  color: "#3f3f46",
                }}
              />
            )}
            {wantsMessage && (
              <textarea
                rows={4}
                placeholder={ui.formMessage}
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  padding: "11px 13px",
                  border: "1px solid #cfc6ba",
                  background: "#ffffff",
                  fontFamily: "inherit",
                  fontSize: "14px",
                  color: "#0a0a0a",
                  resize: "vertical",
                }}
              />
            )}
            <button
              type="submit"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                padding: "13px 16px",
                background: "#2E7D32",
                color: "#ffffff",
                border: "none",
                fontFamily: "inherit",
                fontSize: "14px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "background .2s",
              }}
            >
              {ui.formSubmit}
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
            </button>
          </form>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "26px 20px 28px",
            }}
          >
            <p style={{ fontSize: "15px", lineHeight: "23px", fontWeight: "700", color: "#2E7D32", margin: "0" }}>
              {thanksText}
            </p>
            <p style={{ fontSize: "13px", lineHeight: "20px", color: "#52525b", margin: "0" }}>
              {note}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
