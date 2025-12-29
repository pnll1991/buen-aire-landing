"use client";

import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "María González",
    location: "Centro, San Rafael",
    text: "Excelente trabajo. Muy puntual y prolijo. Me instalaron el aire y quedó perfecto. Lo recomiendo.",
  },
  {
    name: "Carlos Rodríguez",
    location: "Las Paredes, San Rafael",
    text: "Repararon mi heladera en el día. Muy profesionales y con garantía. Muy conforme con el servicio.",
  },
  {
    name: "Ana Martínez",
    location: "Cuadro Nacional, San Rafael",
    text: "Hacen el mantenimiento de mis aires todos los años. Siempre atentos y con buen precio. 10 puntos.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="motion-section py-20 bg-gradient-to-br from-blue-50 to-white" data-motion>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              <span className="motion-title">Opiniones</span> reales (y bien ganadas)
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prioridad: prolijidad, buena comunicación y el trabajo hecho como
              corresponde.
            </p>
            <div className="mt-6 flex justify-center">
              <span className="h-1.5 w-20 rounded-full bg-gradient-to-r from-[#0B5ED7] to-[#084BB0]" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => {
              const initials = testimonial.name
                .split(" ")
                .slice(0, 2)
                .map((s) => s[0])
                .join("");

              return (
                <Reveal key={index} delayMs={index * 80} className="h-full">
                  <motion.div 
                    className="group h-full rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur p-6 shadow-[0_12px_40px_rgba(2,6,23,0.06)]"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#0B5ED7] to-[#084BB0] text-white font-extrabold"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          {initials}
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <p className="font-extrabold text-gray-900 leading-tight sm:truncate">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-500 sm:truncate">
                            {testimonial.location}
                          </p>
                        </div>
                        <div className="hidden sm:flex items-center gap-0.5 shrink-0">
                          {[...Array(5)].map((_, i) => (
                            <motion.svg
                              key={i}
                              className="h-4 w-4 text-amber-400 shrink-0"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: index * 0.1 + i * 0.05, type: "spring", stiffness: 200 }}
                              whileHover={{ scale: 1.3, rotate: 15 }}
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </motion.svg>
                          ))}
                        </div>
                      </div>
                      <div className="flex sm:hidden items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-4 w-4 text-amber-400 shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    <motion.p 
                      className="mt-5 text-gray-700 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      &ldquo;{testimonial.text}&rdquo;
                    </motion.p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
