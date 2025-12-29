"use client";

import { useEffect } from "react";
import Image from "next/image";
import { WorkItem } from "@/data/works";

type LightboxModalProps = {
  work: WorkItem | null;
  works: WorkItem[];
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function LightboxModal({
  work,
  works,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !work) return null;

  const currentIndex = works.findIndex((w) => w.id === work.id);
  const hasNext = currentIndex < works.length - 1;
  const hasPrev = currentIndex > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galería de trabajos"
    >
      <div
        className="relative max-w-6xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
          aria-label="Cerrar"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative bg-white rounded-lg overflow-hidden">
          <div className="relative aspect-video bg-gray-900">
            <Image
              src={work.src}
              alt={work.alt}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="p-6 bg-white">
            <p className="text-gray-700 text-lg">{work.caption}</p>
            <p className="text-sm text-gray-500 mt-2">
              {currentIndex + 1} de {works.length}
            </p>
          </div>
        </div>

        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Imagen anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Imagen siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
