"use client";

import Reveal from "@/components/Reveal";
import {
  BoltIcon,
  DropletIcon,
  FridgeIcon,
  SnowflakeIcon,
  StoreIcon,
  WrenchIcon,
} from "@/components/Icons";
import { motion } from "framer-motion";

const services = [
  {
    title: "Instalación de aire acondicionado",
    description: "Instalación profesional de splits, multisplit y sistemas centrales. Nivelación, conexiones y terminaciones.",
    Icon: SnowflakeIcon,
  },
  {
    title: "Mantenimiento y limpieza",
    description: "Limpieza de filtros, evaporador y condensador. Revisión general y puesta a punto.",
    Icon: WrenchIcon,
  },
  {
    title: "Carga de gas",
    description: "Recarga de gas refrigerante. Diagnóstico y control de presión.",
    Icon: DropletIcon,
  },
  {
    title: "Reparación de aires",
    description: "Diagnóstico y reparación de fallas eléctricas, mecánicas y de refrigeración.",
    Icon: BoltIcon,
  },
  {
    title: "Reparación de heladeras",
    description: "Reparación de heladeras domésticas y comerciales. Arranque, temperatura y sellos.",
    Icon: FridgeIcon,
  },
  {
    title: "Refrigeración comercial",
    description: "Cámaras frigoríficas, vitrinas y sistemas de refrigeración comercial.",
    Icon: StoreIcon,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="motion-section py-24 bg-white" data-motion>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              <span className="motion-title">Servicios</span> de refrigeración (de punta a punta)
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Instalación, mantenimiento y reparación. Te asesoramos y lo dejamos
              funcionando como corresponde.
            </p>
            <div className="mt-6 flex justify-center">
              <span className="h-1.5 w-20 rounded-full bg-gradient-to-r from-[#0B5ED7] to-[#084BB0]" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal key={index} delayMs={index * 60} className="h-full">
              <motion.div 
                className="group relative h-full overflow-hidden rounded-3xl bg-white/70 backdrop-blur border border-slate-200/70 shadow-[0_12px_40px_rgba(2,6,23,0.06)]"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div 
                    className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-blue-500/12 blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      x: [0, 20, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      x: [0, -20, 0],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </div>

                <div className="p-6 relative z-10">
                  <motion.div 
                    className="inline-flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 px-3 py-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.span 
                      className="grid place-items-center h-9 w-9 rounded-xl bg-white shadow-sm text-[#0B5ED7]"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.Icon className="h-5 w-5" />
                    </motion.span>
                    <span className="text-sm font-semibold text-slate-700">
                      {service.title}
                    </span>
                  </motion.div>

                  <h3 className="mt-4 text-lg font-extrabold text-gray-900 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <motion.span 
                      className="text-sm font-semibold text-[#0B5ED7]"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      Consultar →
                    </motion.span>
                    <motion.span 
                      className="h-8 w-8 rounded-full bg-gradient-to-br from-[#0B5ED7]/15 to-[#084BB0]/10"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
