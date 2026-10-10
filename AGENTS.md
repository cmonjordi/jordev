# jordev — instrucciones para agentes

Repositorio de la web personal de Jordi. **La web no existe todavía:** hay un marcador en `/` y el trabajo de diseño y contenido está en [`docs/backlog.md`](docs/backlog.md).

## Arranque

```bash
pnpm install
pnpm dev          # http://localhost:4321
```

En modo segundo plano:

```bash
pnpm dev:bg       # astro dev --background
astro dev status  # / logs / stop
```

## Antes de dar un trabajo por terminado

```bash
pnpm test         # astro check (tipos) + eslint + prettier --check
pnpm build
```

Los dos tienen que pasar. Si `pnpm build` falla, no se da por bueno ningún cambio que afecte al render.

## Convenciones del repo

- **Fuente única:** nombre, dominio, descripción y perfiles viven en `src/data/site.ts`. `astro.config.mjs` lo importa de ahí; no duplicar la URL en ningún otro sitio.
- **Contenido en datos:** los textos y listas que se muestran van en `src/data/`, los componentes solo los pintan.
- **No inventar nada:** ni proyectos, ni fechas, ni métricas. Lo que no existe se marca como pendiente en `docs/backlog.md`.
- **Estilo:** Prettier manda (100 columnas, comillas simples). ESLint 9 flat config en `eslint.config.js`. No desactivar reglas para que pase el lint: si la regla estorba, se cambia la regla con un commit aparte.
- **Commits:** Conventional Commits. El hook de `commit-msg` los exige y `pre-commit` formatea con lint-staged.
- **Un commit, una unidad.** Tests y docs van en el commit que los explica.

## Estructura

```
src/
├── data/site.ts        Fuente única de verdad del sitio
├── layouts/Layout.astro <head>: metas, canonical, Open Graph, Twitter Card
├── pages/              index.astro (marcador), 404.astro, robots.txt.ts
├── scripts/            Lógica de cliente
├── styles/global.css   Tokens de Tailwind (@theme) y estilos base
└── components/         Componentes Astro
```

Antes de crear un componente nuevo, mirar si ya existe otro que cumpla la misma función.

## Design skill

Al diseñar, escribir copy o montar secciones, cargar primero la skill `landing-page-design` (está en `.claude/skills/` y OpenCode la detecta solo). Fija valores de tipografía, espaciado, radios y motion en `src/styles/global.css`.

## Documentación

- Astro: <https://docs.astro.build>
  - [Enrutado](https://docs.astro.build/en/guides/routing/), [componentes](https://docs.astro.build/en/basics/astro-components/), [estilos y Tailwind](https://docs.astro.build/en/guides/styling/), [content collections](https://docs.astro.build/en/guides/content-collections/)
- Tailwind CSS 4: <https://tailwindcss.com/docs> (temas con `@theme`, ya no hay `tailwind.config.js`)
- Cloudflare Workers: <https://developers.cloudflare.com/workers/>
