"use client";

import { useEffect } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

/**
 * Scroll-driven transitions (sin libs):
 * - Setea la CSS var --m (0..1) por sección con data-motion
 * - Optimizado con RAF + eventos passive
 */
export default function ScrollMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;
    if (reduceMotion) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-motion]")
    );

    let raf: number | null = null;

    const update = () => {
      raf = null;
      const vh = window.innerHeight || 1;
      const start = vh * 0.9; // empieza a animar cuando el top entra al 90% de viewport
      const end = vh * 0.22; // termina cuando llega ~22% (se ve “asentado”)
      const denom = Math.max(1, start - end);

      for (const el of els) {
        const r = el.getBoundingClientRect();
        const p = clamp((start - r.top) / denom, 0, 1);
        el.style.setProperty("--m", p.toFixed(3));
      }
    };

    const schedule = () => {
      if (raf != null) return;
      raf = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}

