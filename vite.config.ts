import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Gera caminhos relativos no build, evitando tela branca em subpastas.
  base: "./",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
  },
});
