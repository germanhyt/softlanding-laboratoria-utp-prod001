// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://activatucarrera-laboratoria-utp.com",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: "weekly",
      priority: 1,
      lastmod: new Date("2026-07-26"),
    }),
  ],
  output: "static",
});
