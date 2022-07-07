import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import tsconfigPaths from "vite-tsconfig-paths"
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@components", replacement: path.resolve(__dirname, "src/components") }]
  },
  build: {
    outDir: "../backend/web_build/",
    assetsDir: "static"
  },
  plugins: [react(), tsconfigPaths()]
})
