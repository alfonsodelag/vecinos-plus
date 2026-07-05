import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://vecinos-plus.vercel.app",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/studio"),
    }),
    react(),
  ],
  vite: {
    optimizeDeps: {
      include: [
        "sanity",
        "sanity/structure",
        "@sanity/ui",
        "@sanity/icons",
        "styled-components",
      ],
    },
    define: {
      "process.env.SANITY_STUDIO_BASEPATH": JSON.stringify("/studio"),
    },
  },
});
