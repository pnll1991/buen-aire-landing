"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type ScrollParallaxProps = {
  children: React.ReactNode;
  className?: string;
  /** Velocidad. 0.15 = suave. Negativo invierte dirección. */
  speed?: number;
};

export default function ScrollParallax({
  children,
  className,
  speed = 0.15,
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const activeRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;
    if (reduceMotion) return;

    const tick = () => {
      rafRef.current = null;
      if (!activeRef.current) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      const center = rect.top + rect.height / 2;
      const delta = center - vh / 2;
      const y = Math.round(delta * speed);
      el.style.transform = `translate3d(0, ${y}px, 0)`;
    };

    const schedule = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target !== el) continue;
          activeRef.current = entry.isIntersecting;
          if (entry.isIntersecting) schedule();
        }
      },
      { root: null, threshold: 0.01, rootMargin: "200px 0px 200px 0px" }
    );

    io.observe(el);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [speed]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}

