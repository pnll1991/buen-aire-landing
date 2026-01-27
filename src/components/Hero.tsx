"use client";

import { site } from "@/config/site";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import BrandMark from "@/components/BrandMark";
import ScrollParallax from "@/components/ScrollParallax";
import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#trabajos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-buen-aire">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-grid" />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-30 noise" />
      <ScrollParallax speed={-0.12} className="pointer-events-none absolute -top-20 -right-28">
        <div className="h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-floaty" />
      </ScrollParallax>
      <ScrollParallax speed={0.14} className="pointer-events-none absolute -bottom-24 -left-28">
        <div className="h-72 w-72 rounded-full bg-blue-600/15 blur-3xl animate-floaty" />
      </ScrollParallax>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="text-left">
              <Reveal className="inline-flex items-center gap-3 rounded-full border border-blue-200/70 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-900 shadow-premium">
                <BrandMark className="h-5 w-5 shrink-0" />
                <span>Atención rápida en {site.zones}</span>
              </Reveal>

              <Reveal delayMs={80}>
                <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.02] tracking-tight">
                  Instalación y reparación de{" "}
                  <span className="bg-gradient-to-r from-[#0B5ED7] to-[#084BB0] bg-clip-text text-transparent">
                    aires acondicionados y heladeras
                  </span>{" "}
                  en{" "}
                  <span className="bg-gradient-to-r from-[#0B5ED7] to-[#084BB0] bg-clip-text text-transparent">
                    San Rafael
                  </span>
                </h1>
              </Reveal>

              <Reveal delayMs={140}>
                <p className="mt-5 text-lg text-gray-600 max-w-xl">
                  Atención rápida • Presupuesto • Garantía en el trabajo. Te
                  respondemos por WhatsApp y coordinamos.
                </p>
              </Reveal>

              <Reveal delayMs={200}>
                <div className="mt-7 flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={site.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group inline-flex items-center justify-center w-full sm:w-auto px-7 py-4 bg-[#0B5ED7] text-white font-semibold rounded-2xl hover:bg-[#084BB0] transition-all shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Hablar por WhatsApp
                    <motion.span 
                      className="ml-2"
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      href="#trabajos"
                      onClick={handleScroll}
                      className="inline-flex items-center justify-center w-full px-7 py-4 bg-white/80 backdrop-blur text-gray-900 font-semibold rounded-2xl border border-slate-200/70 hover:bg-white transition-all shadow-sm hover:shadow-md"
                    >
                      Ver trabajos
                    </Link>
                  </motion.div>
                </div>
              </Reveal>

              <Reveal delayMs={260}>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-gray-700">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 border border-gray-200/70 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Garantía en el trabajo
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 border border-gray-200/70 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    Turnos por WhatsApp
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 border border-gray-200/70 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    Presupuesto
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="relative">
              <Reveal delayMs={120} direction="scale">
                <motion.div 
                  className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur shadow-[0_18px_60px_rgba(2,6,23,0.10)]"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 pointer-events-none">
                    <motion.div 
                      className="absolute -top-24 -right-24 h-60 w-60 rounded-full bg-blue-500/12 blur-3xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div 
                      className="absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl"
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.25, 0.4, 0.25],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    />
                  </div>

                  <div className="p-4">
                    <motion.div 
                      className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-slate-100"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src="/hero.png"
                        alt="Servicio de refrigeración en San Rafael"
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </div>

                  <div className="px-5 pb-5">
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div 
                        className="rounded-2xl border border-slate-200/70 bg-white/70 p-4"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <p className="text-xs font-semibold text-slate-500">
                          Cobertura
                        </p>
                        <p className="mt-1 font-extrabold text-slate-900">
                          San Rafael
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          y alrededores
                        </p>
                      </motion.div>
                      <motion.div 
                        className="rounded-2xl border border-slate-200/70 bg-white/70 p-4"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <p className="text-xs font-semibold text-slate-500">
                          Contacto
                        </p>
                        <p className="mt-1 font-extrabold text-slate-900">
                          WhatsApp
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          Respuesta rápida
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
