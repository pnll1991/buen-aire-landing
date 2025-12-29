export type PaletteTokens = {
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  border: string;
  primary: string;
  primaryHover: string;
  primarySoft: string;
};

export type SiteConfig = {
  businessName: string;
  phoneInternational: string; // ej: 54911XXXXXXXX
  whatsappLink: string; // ej: https://wa.me/<phone>?text=<encoded>
  zones: string;
  hours: string;
  address?: string;
  instagramUrl?: string;
  mapEmbedUrl?: string;
  siteUrl?: string;
  palette: PaletteTokens;
};

export const site: SiteConfig = {
  businessName: "BuenAire",
  siteUrl: "https://buenaire.vercel.app",
  phoneInternational: "+54 9 2604 28-8072",
  // Tip: podés generar el link con texto prellenado desde https://wa.me/
  whatsappLink:
    "https://wa.me/5492604288072?text=Hola%21%20Soy%20de%20San%20Rafael%20y%20quiero%20consultar%20por%20un%20servicio%20de%20refrigeraci%C3%B3n.",
  zones: "San Rafael, Mendoza (y alrededores)",
  hours: "Lun a Sáb 8:00 a 20:00",
  address: "",
  instagramUrl: "",
  // OpenStreetMap embed (sin API key). Podés cambiar el bbox/marker si querés otra zona.
  mapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=-68.463%2C-34.703%2C-68.236%2C-34.548&layer=mapnik&marker=-34.617%2C-68.330",
  palette: {
    background: "#F6F8FC",
    surface: "#FFFFFF",
    text: "#0B1220",
    mutedText: "#4B5563",
    border: "rgba(15, 23, 42, 0.12)",
    primary: "#0B5ED7",
    primaryHover: "#084BB0",
    primarySoft: "rgba(11, 94, 215, 0.14)",
  },
};

