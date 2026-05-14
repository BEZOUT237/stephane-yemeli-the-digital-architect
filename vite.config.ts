import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

// Vercel-friendly setup: prerender every route as static HTML and ship
// dist/client as a static SPA. No Cloudflare Worker, no Node server needed.
export default defineConfig({
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
  server: {
    host: "::",
    port: 8080,
    strictPort: false,
  },
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      spa: { enabled: true, maskPath: "/" },
      prerender: {
        enabled: true,
        crawlLinks: true,
        retryCount: 1,
      },
      pages: [
        { path: "/" },
        { path: "/about" },
        { path: "/skills" },
        { path: "/projects" },
        { path: "/vision" },
        { path: "/contact" },
      ],
      sitemap: { enabled: true, host: "https://example.com" },
    }),
    viteReact(),
  ],
});
