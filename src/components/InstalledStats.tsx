"use client";

import Reveal from "@/components/Reveal";
import { motion, useInView, useMotionValue, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function InstalledStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useSpring(count, {
    duration: 1500,
    bounce: 0,
  });
  
  const [displayCount, setDisplayCount] = useState(0);

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplayCount(Math.floor(latest));
  });

  useEffect(() => {
    if (isInView) {
      count.set(100);
    }
  }, [isInView, count]);

  return (
    <section className="motion-section py-16 bg-gradient-to-br from-blue-50 to-white" data-motion>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center">
            <motion.div 
              ref={ref}
              className="rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur p-8 sm:p-12 shadow-[0_12px_40px_rgba(2,6,23,0.06)]"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex flex-col items-center gap-4">
                <motion.div 
                  className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#0B5ED7] to-[#084BB0] bg-clip-text text-transparent"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2
                  }}
                >
                  {displayCount}+
                </motion.div>
                <motion.div 
                  className="flex justify-center mt-2"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "auto" } : { width: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                >
                  <span className="h-1.5 w-20 rounded-full bg-gradient-to-r from-[#0B5ED7] to-[#084BB0]" />
                </motion.div>
                <motion.p 
                  className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  Aires instalados en todo San Rafael
                </motion.p>
                <motion.p 
                  className="text-base sm:text-lg text-gray-600 max-w-2xl mt-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                >
                  Experiencia y confianza en cada instalación
                </motion.p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
