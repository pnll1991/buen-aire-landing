import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Evita que Next/Turbopack elija un workspace root incorrecto
  // (pasa cuando hay múltiples lockfiles arriba del proyecto).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
