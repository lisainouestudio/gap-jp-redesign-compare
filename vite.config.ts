import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// GitHub Pages project site needs a subpath; Vercel uses root.
const base = process.env.GITHUB_PAGES === "true" ? "/gap-jp-redesign-compare/" : "/";

export default defineConfig({
  plugins: [react()],
  base,
});
