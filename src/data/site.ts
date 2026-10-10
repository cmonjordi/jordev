/**
 * Fuente única de verdad del sitio: de aquí salen el título, la descripción,
 * el canonical, Open Graph y el robots.txt. Si algo cambia el dominio o el
 * nombre, se cambia aquí y en ningún otro sitio.
 *
 * PENDIENTE: sustituir los valores de ejemplo cuando existan dominio y perfiles.
 */
export const site = {
  name: 'Jordi',
  /** URL pública sin barra final. astro.config.mjs la usa como `site`. */
  url: 'https://jordi.example.com',
  title: 'Jordi',
  description: 'Sitio personal de Jordi.',
  lang: 'es',
  locale: 'es_ES',
  author: {
    name: 'Jordi',
  },
  /** Perfiles enlazados en el pie y en los metas. Vacío = no se muestra. */
  social: {
    github: '',
    linkedin: '',
    x: '',
    rss: '',
  },
} as const;
