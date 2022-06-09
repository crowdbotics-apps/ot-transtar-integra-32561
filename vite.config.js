import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  root: "./frontend",
  build: {
    outDir: "../backend/web_build/",
    assetsDir: "static",
  },
  plugins: [react()]
})
