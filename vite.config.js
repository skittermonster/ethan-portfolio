import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ethan-portfolio",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          vendor: ["react", "react-dom", "react-router-dom", "framer-motion"],
        },
      },
    },
    chunkSizeWarningLimit: 1600,
  },
});
