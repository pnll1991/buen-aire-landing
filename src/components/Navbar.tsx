"use client";

import { site } from "@/config/site";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import BrandMark from "@/components/BrandMark";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#zonas", label: "Zonas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const p = total > 0 ? (doc.scrollTop / total) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Brand = useMemo(() => {
    return (
      <span className="inline-flex items-center gap-1">
        <BrandMark className="h-14 w-14 shrink-0" />
        <span className="text-xl font-extrabold tracking-tight leading-none">
          <span className="bg-gradient-to-r from-[#0B5ED7] to-[#084BB0] bg-clip-text text-transparent">
            BuenAire
          </span>
        </span>
        <span className="hidden lg:inline text-xs font-semibold tracking-wide text-gray-500">
          Refrigeración
        </span>
      </span>
    );
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-gray-200/60">
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-[2px] bg-gradient-to-r from-[#0B5ED7] to-[#084BB0] transition-[width] duration-150 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:opacity-90 transition-opacity active:scale-95"
            aria-label={`${site.businessName} - Inicio`}
          >
            {Brand}
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="relative text-sm font-semibold text-gray-700 hover:text-[#0B5ED7] transition-colors duration-200 ease-out group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#0B5ED7] to-[#084BB0] transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}

            <div className="relative group/tooltip">
              <motion.a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center rounded-2xl bg-[#0B5ED7] px-4 py-2 text-sm font-semibold text-white shadow-premium"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp
              </motion.a>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                <div className="relative bg-white rounded-2xl px-3 py-2 shadow-lg border-2 border-gray-200 whitespace-nowrap">
                  <p className="text-xs font-semibold text-gray-800">Hace tu consulta, es gratis</p>
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-white"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-[calc(100%-1px)] w-0 h-0 border-l-[9px] border-r-[9px] border-b-[9px] border-l-transparent border-r-transparent border-b-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white/80 px-3 py-2 text-gray-800 shadow-sm hover:bg-white transition-colors active:scale-95"
              aria-label="Menú"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden border-t border-gray-200/70 bg-white/95 backdrop-blur-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-3">
              <div className="grid gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="rounded-lg px-3 py-3 text-sm font-semibold text-gray-800 hover:bg-blue-50 hover:text-[#0B5ED7] transition-colors block"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
