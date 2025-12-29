"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { workCategories, works, WorkCategory, WorkItem } from "@/data/works";
import LightboxModal from "./LightboxModal";
import Reveal from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [category, setCategory] = useState<WorkCategory | "Todas">("Todas");

  const openModal = (work: WorkItem) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  const currentIndex = selectedWork
    ? works.findIndex((w) => w.id === selectedWork.id)
    : -1;

  const handleNext = () => {
    if (currentIndex < works.length - 1) {
      setSelectedWork(works[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedWork(works[currentIndex - 1]);
    }
  };

  const visibleWorks = useMemo(() => {
    if (category === "Todas") return works;
    return works.filter((w) => w.category === category);
  }, [category]);

  return (
    <>
      <section id="trabajos" className="motion-section py-24 bg-white" data-motion>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              <span className="motion-title">Trabajos</span> realizados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Book real de instalaciones, mantenimientos y reparaciones.
            </p>
            <div className="mt-5 flex justify-center">
              <span className="h-1.5 w-20 rounded-full bg-gradient-to-r from-[#0B5ED7] to-[#084BB0]" />
            </div>
          </Reveal>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {(["Todas", ...workCategories] as const).map((c) => {
              const active = c === category;
              return (
                <motion.button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                    "border",
                    active
                      ? "border-blue-200 bg-blue-50 text-[#0B5ED7]"
                      : "border-slate-200/70 bg-white text-slate-700 hover:bg-slate-50",
                  ].join(" ")}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: active ? 1.05 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {c}
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 [grid-auto-flow:dense]"
            >
              {visibleWorks.map((work, index) => (
                <Reveal
                  key={work.id}
                  delayMs={index * 45}
                  className={[
                    "lg:col-span-4",
                    index % 7 === 0 ? "lg:col-span-8" : "",
                    index % 9 === 0 ? "lg:col-span-6" : "",
                  ].join(" ")}
                >
                  <motion.button
                    onClick={() => openModal(work)}
                    className={[
                      "group relative w-full overflow-hidden rounded-3xl bg-gray-100 shadow-premium",
                      "focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]",
                      // Altura (clave): sin aspect ratio, next/image fill no tiene caja.
                      index % 7 === 0 ? "aspect-[16/9]" : "aspect-[16/10]",
                    ].join(" ")}
                    aria-label={`Ver ${work.alt}`}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      className="relative w-full h-full"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={work.src}
                        alt={work.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90" />
                    <motion.div 
                      className="absolute inset-0 bg-black/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p className="text-white text-sm font-medium">
                        {work.caption}
                      </p>
                      <motion.div 
                        className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/15"
                        whileHover={{ scale: 1.05 }}
                      >
                        {work.category}
                        <span className="opacity-70">•</span>
                        <span className="opacity-90">Ver</span>
                      </motion.div>
                    </motion.div>
                  </motion.button>
                </Reveal>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <LightboxModal
        work={selectedWork}
        works={visibleWorks}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}
