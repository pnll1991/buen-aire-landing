export type WorkCategory = "Instalaciones" | "Reparaciones" | "Mantenimiento";

export type WorkItem = {
  id: string;
  src: string; // desde /public
  alt: string;
  caption: string;
  category: WorkCategory;
};

export const workCategories: WorkCategory[] = [
  "Instalaciones",
  "Reparaciones",
  "Mantenimiento",
];

/**
 * Fotos para el book:
 * - Guardalas en /public/works/
 * - Poné el path desde /works/... (sin /public)
 * - Ejemplo: { src: "/works/instalacion-01.jpg", ... }
 *
 * Si todavía no tenés fotos, dejé placeholders listos para reemplazar.
 */
export const works: WorkItem[] = [
  {
    id: "inst-01",
    src: "/works/instalacion-01.png",
    alt: "Instalación de aire acondicionado split",
    caption: "Instalación split — interior + exterior (nivelación y terminaciones)",
    category: "Instalaciones",
  },
  {
    id: "inst-02",
    src: "/works/instalacion-exterior-01.png",
    alt: "Instalación de aire acondicionado en balcón",
    caption: "Instalación en balcón — pasamuros prolijo y fijación segura",
    category: "Instalaciones",
  },
  {
    id: "mant-01",
    src: "/works/mantenimiento-01.png",
    alt: "Mantenimiento y limpieza de unidad interior",
    caption: "Mantenimiento — limpieza de filtros y evaporador",
    category: "Mantenimiento",
  },
  {
    id: "rep-01",
    src: "/works/heladera-01.webp",
    alt: "Reparación de heladera",
    caption: "Heladera — diagnóstico y reparación (arranque/temperatura)",
    category: "Reparaciones",
  },
  {
    id: "rep-02",
    src: "/works/reparacion-aire-01.webp",
    alt: "Reparación de aire acondicionado",
    caption: "Aire acondicionado — revisión de placa y puesta a punto",
    category: "Reparaciones",
  },
  {
    id: "mant-02",
    src: "/works/exterior-limpieza-01.webp",
    alt: "Limpieza de unidad exterior",
    caption: "Mantenimiento — limpieza de unidad exterior y control general",
    category: "Mantenimiento",
  },
];

