// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { site } from './src/data/site.ts';

// https://astro.build/config
export default defineConfig({
  // URL pública: canonical, og:url, JSON-LD, sitemap y robots.txt salen de aquí.
  // El valor vive en src/data/site.ts para que no haya dos dominios distintos.
  site: site.url,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
