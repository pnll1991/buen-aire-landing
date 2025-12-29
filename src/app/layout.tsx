import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import Script from "next/script";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl ?? "http://localhost:3000"),
  title: `BuenAire - Refrigeración | Instalación y reparación`,
  description: `Servicios profesionales de refrigeración: instalación de aires acondicionados, reparación de heladeras, mantenimiento y carga de gas. ${site.zones}. Presupuesto sin cargo.`,
  keywords: [
    "aire acondicionado",
    "instalación aire acondicionado",
    "reparación heladeras",
    "refrigeración",
    "mantenimiento aire acondicionado",
    "carga de gas",
    site.zones,
  ],
  openGraph: {
    title: `BuenAire - Refrigeración | Instalación y reparación`,
    description: `Servicios profesionales de refrigeración. ${site.zones}. Presupuesto sin cargo.`,
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "BuenAire - Refrigeración San Rafael",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `BuenAire - Refrigeración | Instalación y reparación`,
    description: `Servicios profesionales de refrigeración. ${site.zones}.`,
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BuenAire",
  description: "Servicios profesionales de instalación y reparación de aires acondicionados y heladeras",
  telephone: site.phoneInternational,
  areaServed: site.zones,
  ...(site.address && { address: site.address }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
