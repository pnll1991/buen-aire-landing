"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { workCategories, works, WorkCategory, WorkItem } from "@/data/works";
import LightboxModal from "./LightboxModal";
import Reveal from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [category, setCategory] = useState<WorkCategory | "Todas">("Todas");
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (work: WorkItem) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  const visibleWorks = useMemo(() => {
    if (category === "Todas") return works;
    return works.filter((w) => w.category === category);
  }, [category]);

  // Resetear índice cuando cambia la categoría
  useEffect(() => {
    setCurrentIndex(0);
  }, [category]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % visibleWorks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + visibleWorks.length) % visibleWorks.length);
  };

  const handleModalNext = () => {
    const modalIndex = visibleWorks.findIndex((w) => w.id === selectedWork?.id);
    if (modalIndex < visibleWorks.length - 1) {
      setSelectedWork(visibleWorks[modalIndex + 1]);
    }
  };

  const handleModalPrev = () => {
    const modalIndex = visibleWorks.findIndex((w) => w.id === selectedWork?.id);
    if (modalIndex > 0) {
      setSelectedWork(visibleWorks[modalIndex - 1]);
    }
  };

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

          {/* Carrusel */}
          <div className="relative max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {visibleWorks.length > 0 && (
                <motion.div
                  key={`${category}-${currentIndex}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative"
                >
                  <motion.button
                    onClick={() => openModal(visibleWorks[currentIndex])}
                    className="group relative w-full overflow-hidden rounded-3xl bg-gray-100 shadow-premium focus:outline-none focus:ring-2 focus:ring-[#0B5ED7] aspect-[16/9]"
                    aria-label={`Ver ${visibleWorks[currentIndex].alt}`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative w-full h-full bg-gray-900">
                      <Image
                        src={visibleWorks[currentIndex].src}
                        alt={visibleWorks[currentIndex].alt}
                        fill
                        className="object-cover"
                        quality={100}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                        unoptimized={false}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90" />
                    <motion.div 
                      className="absolute inset-0 bg-black/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p className="text-white text-base font-medium mb-2">
                        {visibleWorks[currentIndex].caption}
                      </p>
                      <motion.div 
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/15"
                        whileHover={{ scale: 1.05 }}
                      >
                        {visibleWorks[currentIndex].category}
                        <span className="opacity-70">•</span>
                        <span className="opacity-90">Ver</span>
                      </motion.div>
                    </motion.div>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Controles de navegación */}
            {visibleWorks.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                  aria-label="Imagen anterior"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                  aria-label="Imagen siguiente"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Indicadores de puntos */}
            {visibleWorks.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {visibleWorks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all rounded-full ${
                      index === currentIndex
                        ? "w-8 h-2 bg-[#0B5ED7]"
                        : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Contador */}
            {visibleWorks.length > 1 && (
              <div className="text-center mt-4 text-sm text-gray-600">
                {currentIndex + 1} / {visibleWorks.length}
              </div>
            )}
          </div>
        </div>
      </section>
      <LightboxModal
        work={selectedWork}
        works={visibleWorks}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNext={handleModalNext}
        onPrev={handleModalPrev}
      />
    </>
  );
}
