// Vercel-targeted TanStack Start config (Nitro + Vite).
// Replaces the Lovable Cloudflare wrapper so `vite build` emits a
// Vercel-compatible `.vercel/output/` directory that Vercel auto-detects.
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart(),
    nitro({ preset: "vercel" }),
    viteReact(),
  ],
});
