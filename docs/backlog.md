# Backlog

Todo lo que queda antes de que el sitio esté en producción. Ordenado por prioridad: lo de arriba desbloquea lo de abajo.

## 1. Base

- [ ] **Dominio definitivo:** sustituir `https://jordi.example.com` en `src/data/site.ts`.
- [ ] **Perfiles sociales:** rellenar `site.social` (GitHub, LinkedIn, X) o dejarlos vacíos a propósito.
- [ ] **Favicon definitivo:** hoy hay un marcador en `public/favicon.svg`. Hace falta también `favicon.ico`, `icon-192.png` y `icon-512.png` más `public/site.webmanifest`.
- [ ] **`og-image.jpg`** (1200×630): `Layout.astro` ya la enlaza, pero todavía no existe.
- [ ] **Secretos de GitHub:** `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID` para poder lanzar la acción `Deploy`.

## 2. Contenido

- [ ] Definir el objetivo de la página: ¿qué debería hacer alguien después de visitarla?
- [ ] Textos: quién soy, qué hago, proyectos destacados.
- [ ] Estructura de datos de proyectos en `src/data/` (nombre, año, stack, enlace, resumen).
- [ ] Decide si hay blog: si sí, content collections con Markdown/MDX.

## 3. Diseño

- [ ] Cargar la skill `landing-page-design` y hacer el intake antes de tocar estilos.
- [ ] Paleta, tipografías y escala tipográfica → tokens en `src/styles/global.css`.
- [ ] Set de iconos (hoy no hay ninguno instalado).
- [ ] Modo oscuro solo si aporta: `color-scheme` y tokens ya preparados en `global.css`.

## 4. Producción

- [ ] Analítica respetuosa (sin cookies): Cloudflare Web Analytics o similar.
- [ ] Comprobación de accesibilidad y Lighthouse en la página real.
- [ ] Pasar `Deploy` a trigger de `push` en `main` una vez existan los secretos.
- [ ] Validar canonical, Open Graph y sitemap con las herramientas de cada red.

## Ideas sueltas

- `llms.txt` con resumen en texto plano (como hace el repo de referencia).
- Página 404 con algo de personalidad.
- RSS si hay blog.
