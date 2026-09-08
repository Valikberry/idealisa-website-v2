"use client";

import { Fragment, type FormEvent } from "react";
import { useTranslation } from "@/lib/language-context";

export function ContactForm() {
  const t = useTranslation();
  const serviceCells = t.bentoGrid.cells;
  const talkExtras = t.talk.extras;
  const submitTalk = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      t.talk.heading,
      ...["name", "email", "company", "phone"].map(
        (key) =>
          `${t.talk[key as "name" | "email" | "company" | "phone"]}: ${data.get(key)}`,
      ),
      data.getAll("services").join(", "),
      data.get("message"),
    ].join("\n");
    window.location.href = `https://wa.me/244936499706?text=${encodeURIComponent(message)}`;
  };
  return (
    <section
      style={{
        padding: "40px 16px",
        background:
          "radial-gradient(46% 40% at 6% 20%, rgba(160,105,55,.08), transparent 72%), radial-gradient(44% 38% at 94% 90%, rgba(46,125,50,.05), transparent 72%), #ffffff",
      }}
      id="contact"
    >
      <div style={{ maxWidth: "1024px", margin: "0 auto 28px" }}>
        <p
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "700",
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "#2E7D32",
            margin: "0 0 8px",
          }}
        >
          {t.talk.kicker}
        </p>
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
          {t.talk.sectionHeading}
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1.1fr)",
          maxWidth: "1024px",
          margin: "0 auto",
          border: "1px solid #cfc6ba",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "14px",
            padding: "44px 40px",
            borderRight: "1px solid #cfc6ba",
            backgroundColor: "#5c6672",
            backgroundImage:
              "linear-gradient(180deg,rgba(20,26,32,.62),rgba(20,26,32,.72)),url(/rain-on-glass.webp)",
            backgroundSize: "cover, cover",
            backgroundPosition: "center, center",
          }}
        >
          <h2
            style={{
              fontSize: "29px",
              lineHeight: "36px",
              fontWeight: "700",
              color: "#ffffff",
              margin: "0",
              fontFamily: "var(--font-instrument-sans),sans-serif",
              textWrap: "pretty",
            }}
          >
            {t.talk.heading}
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "24px",
              color: "rgba(255,255,255,.82)",
              margin: "0",
              textWrap: "pretty",
            }}
          >
            {t.talk.sub}
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "22px",
              fontWeight: "600",
              color: "#ffffff",
              margin: "0",
            }}
          >
            {t.talk.callLine}
          </p>
          <a
            href="tel:+244936499706"
            className="hover-lightgreen"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "24px",
              lineHeight: "32px",
              fontWeight: "700",
              color: "#7fd18a",
              cursor: "pointer",
              transition: "color .2s",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7fd18a"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"></path>
            </svg>
            +244 936 499 706
          </a>
        </div>

        <form
          onSubmit={submitTalk}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            padding: "36px 40px 40px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,minmax(0,1fr))",
              gap: "14px",
            }}
          >
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                fontSize: "12px",
                fontWeight: "600",
                color: "#3f3f46",
              }}
            >
              {t.talk.name}
              <input
                type="text"
                required
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #cfc6ba",
                  background: "#fff",
                  fontFamily: "inherit",
                  fontSize: "14px",
                  color: "#0a0a0a",
                }}
                name="name"
              />
            </label>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                fontSize: "12px",
                fontWeight: "600",
                color: "#3f3f46",
              }}
            >
              {t.talk.email}
              <input
                type="email"
                required
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #cfc6ba",
                  background: "#fff",
                  fontFamily: "inherit",
                  fontSize: "14px",
                  color: "#0a0a0a",
                }}
                name="email"
              />
            </label>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                fontSize: "12px",
                fontWeight: "600",
                color: "#3f3f46",
              }}
            >
              {t.talk.company}
              <input
                type="text"
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #cfc6ba",
                  background: "#fff",
                  fontFamily: "inherit",
                  fontSize: "14px",
                  color: "#0a0a0a",
                }}
                name="company"
              />
            </label>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                fontSize: "12px",
                fontWeight: "600",
                color: "#3f3f46",
              }}
            >
              {t.talk.phone}
              <input
                type="tel"
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #cfc6ba",
                  background: "#fff",
                  fontFamily: "inherit",
                  fontSize: "14px",
                  color: "#0a0a0a",
                }}
                name="phone"
              />
            </label>
          </div>

          <p
            style={{
              fontSize: "13px",
              fontWeight: "700",
              color: "#0a0a0a",
              margin: "4px 0 0",
            }}
          >
            {t.talk.helpWith}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,minmax(0,1fr))",
              gap: "6px 16px",
            }}
          >
            {serviceCells.map((cell, index) => (
              <Fragment key={index}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "13px",
                    color: "#3f3f46",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{
                      width: "14px",
                      height: "14px",
                      accentColor: "#2E7D32",
                    }}
                    name="services"
                    value={cell.title}
                  />
                  {cell.title}
                </label>
              </Fragment>
            ))}
            {talkExtras.map((extra, index) => (
              <Fragment key={index}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "13px",
                    color: "#3f3f46",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{
                      width: "14px",
                      height: "14px",
                      accentColor: "#2E7D32",
                    }}
                    name="services"
                    value={extra}
                  />
                  {extra}
                </label>
              </Fragment>
            ))}
          </div>

          <label
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              fontSize: "12px",
              fontWeight: "600",
              color: "#3f3f46",
            }}
          >
            {t.talk.message}
            <textarea
              rows={3}
              style={{
                boxSizing: "border-box",
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #cfc6ba",
                background: "#fff",
                fontFamily: "inherit",
                fontSize: "14px",
                color: "#0a0a0a",
                resize: "vertical",
              }}
              name="message"
            ></textarea>
          </label>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <button
              type="submit"
              className="hover-green"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "0 26px",
                height: "46px",
                border: "none",
                borderRadius: "9999px",
                background: "#2E7D32",
                color: "#fff",
                fontFamily: "inherit",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background .2s",
              }}
            >
              {t.talk.submit}
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
        </form>
      </div>
    </section>
  );
}
