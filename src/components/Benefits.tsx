"use client";

import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

const benefits = [
  { icon: "⏰", text: "Puntualidad y atención rápida" },
  { icon: "🎓", text: "Más de 10 años de experiencia" },
  { icon: "✅", text: "Garantía en todos los trabajos" },
  { icon: "💬", text: "Atención personalizada por WhatsApp" },
  { icon: "💰", text: "Presupuesto sin cargo" },
  { icon: "🔧", text: "Herramientas y repuestos originales" },
];

export default function Benefits() {
  return (
    <section className="motion-section py-20 bg-gradient-to-br from-blue-50 to-white" data-motion>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué <span className="motion-title">elegirnos</span>?
          </h2>
          <div className="mt-5 flex justify-center">
            <span className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[#0B5ED7] to-[#084BB0]" />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delayMs={index * 50} className="h-full">
              <motion.div 
                className="group flex h-full items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.span 
                  className="text-3xl flex-shrink-0"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2
                  }}
                >
                  {benefit.icon}
                </motion.span>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {benefit.text}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
