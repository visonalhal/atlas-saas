import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import eslint from "vite-plugin-eslint"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      // default settings on build (i.e. fail on error)
      ...eslint(),
      apply: "build",
    },
  ],
})
