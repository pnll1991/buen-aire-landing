"use client";

import { site } from "@/config/site";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

export default function Coverage() {
  return (
    <section id="zonas" className="motion-section py-24 bg-white" data-motion>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              <span className="motion-title">Zonas</span> de cobertura
            </h2>
            <p className="text-lg text-gray-600">
              Atendemos en{" "}
              <strong className="text-[#0B5ED7]">{site.zones}</strong>
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <Reveal delayMs={0} className="lg:col-span-2">
              <motion.div 
                className="gradient-border glass-card rounded-3xl shadow-premium p-6"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-lg font-extrabold text-gray-900 mb-3">
                  San Rafael y alrededores
                </h3>
                <p className="text-gray-600 mb-5">
                  Coordinamos según tu ubicación. Si estás cerca, preguntanos y te
                  confirmamos disponibilidad.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Atención a domicilio",
                    "Turnos rápidos por WhatsApp",
                    "Presupuesto y garantía",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <span className="text-[#0B5ED7]">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>

            <Reveal delayMs={80} className="lg:col-span-3">
              <motion.div 
                className="gradient-border glass-card rounded-3xl shadow-premium overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative aspect-[16/10] bg-gray-100">
                  <div className="pointer-events-none absolute inset-0 opacity-35 noise" />
                  {site.mapEmbedUrl ? (
                    <iframe
                      title="Mapa de cobertura - San Rafael, Mendoza"
                      src={site.mapEmbedUrl}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      Mapa no configurado
                    </div>
                  )}
                </div>
                <div className="p-4 flex items-center justify-between gap-3">
                  <p className="text-sm text-gray-600">
                    Vista general de la zona (San Rafael, Mendoza)
                  </p>
                  <motion.a
                    href="https://www.openstreetmap.org/?mlat=-34.617&mlon=-68.330#map=12/-34.617/-68.330"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#0B5ED7] hover:underline"
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Abrir mapa
                  </motion.a>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
