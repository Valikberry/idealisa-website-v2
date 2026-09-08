"use client";

import { useRef, useState } from "react";
import { useLanguage, useTranslation } from "@/lib/language-context";
import { companyContent } from "@/lib/content/company";
import { Reviews } from "@/components/reviews";
import { FinalCTA } from "@/components/final-cta";
import styles from "./company.module.css";

const companyBackground =
  "radial-gradient(50% 44% at 92% 22%, rgba(160,105,55,.09), transparent 72%), radial-gradient(46% 40% at 8% 30%, rgba(226,146,72,.07), transparent 72%), radial-gradient(44% 38% at 20% 92%, rgba(46,125,50,.05), transparent 72%), #ffffff";

function CompanyVideo() {
  const t = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  // Same play/pause overlay behavior as the shared industries video.
  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  };
  return (
    <div className={styles.video}>
      <video
        ref={videoRef}
        src="/who-we-work-with.mp4"
        playsInline
        preload="metadata"
        onClick={toggleVideo}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        aria-label={t.whoWeWorkWith.videoTitle}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === " " || event.key === "Enter") {
            event.preventDefault();
            toggleVideo();
          }
        }}
      />
      {!playing && (
        <button
          type="button"
          className={styles.videoOverlay}
          onClick={toggleVideo}
          aria-label={t.whoWeWorkWith.videoTitle}
        >
          <span className={styles.play}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              aria-hidden="true"
            >
              <path d="m8 5 12 7-12 7z" />
            </svg>
          </span>
          <span className={styles.videoTitle}>
            {t.whoWeWorkWith.videoTitle}
          </span>
          <span className={styles.videoNote}>{t.whoWeWorkWith.videoNote}</span>
        </button>
      )}
    </div>
  );
}

export default function CompanyPage() {
  const { language } = useLanguage();
  const t = useTranslation();
  const cp = companyContent[language] ?? companyContent.en;
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="company-title">
        <div className={styles.container}>
          <p className={styles.kicker}>{cp.kicker}</p>
          <h1 id="company-title">{cp.hero.title}</h1>
          <p className={styles.tagline}>{cp.introTagline}</p>
        </div>
      </section>

      <div className={styles.body}>
        <div className={`${styles.container} ${styles.stack}`}>
          <section className={styles.intro} aria-labelledby="company-intro">
            <div
              className={styles.teamPhoto}
              role="img"
              aria-label="Idealisa"
            />
            <div className={styles.introCopy}>
              <h2 id="company-intro">{cp.introHeading}</h2>
              {cp.introBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <p className={styles.mobileLegacy}>
            {cp.introBody[cp.introBody.length - 1]}
          </p>

          <section className={styles.mvv} aria-label={cp.mvvHeading}>
            {cp.mvv.map((item) => (
              <div key={item.label}>
                <p className={styles.mvvLabel}>{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </section>

          <section aria-labelledby="company-values">
            <div className={styles.valuesHeading}>
              <p className={styles.valuesKicker}>{cp.valuesKicker}</p>
              <h2 id="company-values">{cp.valuesHeading}</h2>
              <p className={styles.valuesSub}>{cp.valuesSub}</p>
            </div>
            <div className={styles.valuesLayout}>
              <CompanyVideo />
              <div className={styles.valuesGrid}>
                {cp.values.map((value) => (
                  <div key={value.n} className={styles.value}>
                    <p className={styles.number}>{value.n}</p>
                    <h3>{value.title}</h3>
                    <p>{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <Reviews background={companyBackground} />
      <FinalCTA company={cp.cta} />
      <a className={styles.mobileCall} href="tel:+244936499706">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
        {t.callPill} 936 499 706
      </a>
    </div>
  );
}
