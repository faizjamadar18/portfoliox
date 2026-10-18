// Vercel-targeted TanStack Start config (Nitro + Vite).
// Replaces the Lovable Cloudflare wrapper so `vite build` emits a
// Vercel-compatible `.vercel/output/` directory that Vercel auto-detects.
import { defineConfig, type Plugin } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

interface EnvironmentBuildWithRolldown {
  build?: {
    rollupOptions?: unknown;
    rolldownOptions?: unknown;
  };
}

function rolldownToRollupCompat(): Plugin {
  return {
    name: "rolldown-to-rollup-compat",
    config(config) {
      if (config.environments) {
        for (const env of Object.values(config.environments)) {
          const b = (env as EnvironmentBuildWithRolldown)?.build;
          if (b?.rolldownOptions && !b.rollupOptions) {
            b.rollupOptions = b.rolldownOptions;
          }
        }
      }
    },
  };
}

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart(),
    rolldownToRollupCompat(),
    nitro({ preset: "vercel" }),
    viteReact(),
  ],
});
