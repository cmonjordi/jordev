import type { APIRoute } from 'astro';

import { site } from '../data/site.ts';

/**
 * robots.txt: permite rastrear todo y apunta al sitemap generado por @astrojs/sitemap.
 * La 404 lleva noindex en su propia página, así que no hace falta excluirla aquí.
 */
export const GET: APIRoute = () => {
  const sitemap = new URL('sitemap-index.xml', site.url).href;

  return new Response(['User-agent: *', 'Allow: /', `Sitemap: ${sitemap}`, ''].join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
