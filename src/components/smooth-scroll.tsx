"use client";

import type React from "react";

import { useEffect } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let lenis: import("lenis").default | undefined;
    let frame: number;

    // Dynamic import (not a static top-level one) + try/catch: smooth
    // scroll is a nicety, not core functionality. If this ever fails to
    // load, parse, or initialize for any reason — an incompatible browser,
    // a flaky network, a future bad release of the library — it must fall
    // back to native scrolling with every other interactive feature on the
    // page left intact, instead of being able to take hydration down for
    // the whole app the way a static import's parse failure once did.
    (async () => {
      try {
        const { default: Lenis } = await import("lenis");
        if (cancelled) return;

        lenis = new Lenis({
          anchors: true,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        const raf = (time: number) => {
          lenis?.raf(time);
          frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);
      } catch (error) {
        console.warn("SmoothScroll: falling back to native scroll.", error);
      }
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
