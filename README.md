# jordev

Repositorio de la web personal de Jordi, **preparado para trabajar pero sin la web todavía**: la estructura, la calidad de código, la CI y el despliegue ya están; el contenido de la página es el siguiente paso.

**Stack:** [Astro 7](https://astro.build) · [Tailwind CSS 4](https://tailwindcss.com) · GSAP + Lenis · pnpm · GitHub Actions · Cloudflare Workers

## Puesta en marcha

Necesitas Node.js 22.12 o superior y pnpm.

```bash
pnpm install
pnpm dev
```

La web queda en `http://localhost:4321`.

| Comando                     | Qué hace                                                                  |
| --------------------------- | ------------------------------------------------------------------------- |
| `pnpm dev`                  | Servidor de desarrollo                                                    |
| `pnpm dev:bg`               | El mismo servidor en segundo plano (`astro dev status` / `logs` / `stop`) |
| `pnpm build`                | Genera la web estática en `dist/`                                         |
| `pnpm preview`              | Sirve el build en local                                                   |
| `pnpm test`                 | `astro check` + `eslint` + `prettier --check`                             |
| `pnpm lint` / `pnpm format` | ESLint / Prettier por separado                                            |
| `pnpm deploy`               | Build + `wrangler deploy`                                                 |

## Qué ya está listo

- [x] **Proyecto Astro** con TypeScript estricto y Tailwind CSS 4.
- [x] **Calidad de código:** ESLint 9 (flat config), Prettier con plugin de Astro y de Tailwind, y `astro check`.
- [x] **Commits con disciplina:** Husky + lint-staged al hacer commit, y commitlint exigiendo [Conventional Commits](https://www.conventionalcommits.org/).
- [x] **CI en GitHub Actions:** tipos, lint, formato y build en cada push y PR.
- [x] **Dependabot:** actualizaciones mensuales agrupadas (producción / desarrollo / actions).
- [x] **Despliegue:** `pnpm deploy` en local o la acción `Deploy` desde la pestaña Actions.
- [x] **SEO de base:** canonical, Open Graph, Twitter Card, sitemap y `robots.txt`, todos derivados de `src/data/site.ts`.
- [x] **Skill de diseño** en `.claude/skills/landing-page-design` para que los agentes diseñen con criterio.
- [x] **Configuración de OpenCode** en `opencode.jsonc` (formateo automático, watcher y comandos `/checks` y `/deploy`).

## Estructura

```
├── .claude/skills/      Skill de diseño de landing pages (la usan Claude Code y OpenCode)
├── .github/
│   ├── workflows/       ci.yml (cada push/PR) y deploy.yml (manual)
│   ├── dependabot.yml   Actualizaciones de dependencias y actions
│   └── pull_request_template.md
├── .husky/              pre-commit (lint-staged) y commit-msg (commitlint)
├── .vscode/             Extensiones recomendadas, ajustes y configuraciones de depuración
├── docs/
│   ├── adr/             Decisiones de arquitectura
│   └── backlog.md       Qué queda por hacer
├── media/               Material de trabajo pesado: git lo ignora salvo el .gitkeep
├── public/              Ficheros servidos tal cual (_headers, favicon)
└── src/
    ├── components/      Componentes Astro
    ├── data/site.ts     Fuente única: nombre, dominio, descripción y perfiles
    ├── layouts/         Layout.astro: <head>, metas y Open Graph
    ├── pages/           index.astro (marcador), 404.astro, robots.txt.ts
    ├── scripts/         Lógica de cliente (motion, interacciones)
    └── styles/          global.css: tokens de Tailwind con @theme
```

## Convenciones

| Tema            | Regla                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------ |
| Contenido       | Todo lo que se muestra vive en `src/data/`. Nada de textos hardcodeados en los componentes.      |
| Dominio y metas | Se cambian en `src/data/site.ts` y solo ahí: `astro.config.mjs` lo lee de ahí.                   |
| Diseño          | Tokens en `src/styles/global.css` con `@theme`; las utilidades de Tailwind salen de ahí.         |
| Inventar        | No se inventan datos (proyectos, fechas, premios). Lo que falta se marca como pendiente.         |
| Commits         | Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`… el hook no deja pasar otra cosa.       |
| Tamaño          | Un commit = una unidad revisable. Si un cambio pasa de ~400 líneas, se parte en PRs encadenados. |

## Despliegue

Es una web estática servida por Cloudflare Workers sin código de Worker (configuración en `wrangler.jsonc`).

**En local:**

```bash
pnpm deploy
```

**Desde GitHub:** configurar los secretos `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID` y lanzar la acción `Deploy` a mano.

## Pendiente

Todo lo que falta está en [`docs/backlog.md`](docs/backlog.md). Lo más urgente:

1. Dominio definitivo (hoy `site.url` es un marcador).
2. Contenido y diseño de la página.
3. Favicon e `og-image` definitivos.

## Créditos

- Estructura y configuración inspiradas en [midudev/mcp-higgsfield-landing](https://github.com/midudev/mcp-higgsfield-landing) (Astro + Tailwind + Workers), sin la parte de vídeo con Higgsfield.
- Skill de diseño: [landing-page-design](https://github.com/elayadesign/ai-design-skills).
