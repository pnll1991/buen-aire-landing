"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
};

export default function Reveal({
  children,
  className,
  delayMs = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px", amount: 0.12 });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
      scale: direction === "scale" ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.6,
        delay: delayMs / 1000,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn("reveal", className)}
    >
      {children}
    </motion.div>
  );
}

