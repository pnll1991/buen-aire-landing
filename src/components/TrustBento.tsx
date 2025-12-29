"use client";

import Reveal from "@/components/Reveal";
import { site } from "@/config/site";
import { motion } from "framer-motion";

export default function TrustBento() {
  return (
    <section className="motion-section py-14 bg-white" data-motion>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-10">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <p className="text-sm font-semibold text-[#0B5ED7]">
                  BuenAire • San Rafael
                </p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                  <span className="motion-title">Confianza, prolijidad</span> y respuesta rápida
                </h2>
              </div>
              <motion.a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center rounded-2xl bg-[#0B5ED7] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#084BB0]"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Pedir presupuesto por WhatsApp →
              </motion.a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <Reveal className="lg:col-span-5 h-full">
              <div className="h-full rounded-3xl border border-slate-200/70 bg-gradient-to-br from-blue-50 to-white p-6 shadow-[0_12px_40px_rgba(2,6,23,0.06)]">
                <p className="text-xs font-semibold text-slate-500">
                  Cobertura
                </p>
                <p className="mt-2 text-xl font-extrabold text-slate-900">
                  {site.zones}
                </p>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Coordinamos turnos por WhatsApp. Si estás cerca, te confirmamos
                  disponibilidad al toque.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { k: "Garantía", v: "Trabajo asegurado" },
                    { k: "Prolijidad", v: "Terminaciones" },
                    { k: "Diagnóstico", v: "Claro y honesto" },
                    { k: "Respuesta", v: "Rápida" },
                  ].map((it) => (
                    <div
                      key={it.k}
                      className="rounded-2xl border border-slate-200/70 bg-white/70 p-4"
                    >
                      <p className="text-xs font-semibold text-slate-500">
                        {it.k}
                      </p>
                      <p className="mt-1 font-extrabold text-slate-900">
                        {it.v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={80} className="lg:col-span-7 h-full">
              <div className="h-full rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur p-6 shadow-[0_12px_40px_rgba(2,6,23,0.06)] overflow-hidden">
                <div className="pointer-events-none absolute" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Instalación de split",
                      desc: "Nivelación, fijación, terminaciones prolijas.",
                    },
                    {
                      title: "Mantenimiento",
                      desc: "Limpieza + control general para que rinda.",
                    },
                    {
                      title: "Reparación",
                      desc: "Diagnóstico y solución (aire/heladera).",
                    },
                    {
                      title: "Refrigeración comercial",
                      desc: "Cámaras/vitrinas (según disponibilidad).",
                    },
                  ].map((card, index) => (
                    <motion.div
                      key={card.title}
                      className="group rounded-2xl border border-slate-200/70 bg-white/70 p-5"
                      whileHover={{ y: -5, scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20,
                        delay: index * 0.1
                      }}
                    >
                      <p className="font-extrabold text-slate-900">
                        {card.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

