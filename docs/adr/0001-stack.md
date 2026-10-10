# 0001. Stack del sitio

- **Estado:** aceptado
- **Fecha:** 2026-10-10

## Contexto

Web personal que se va a construir con ayuda de agentes de IA y se va a mantener en solitario. Necesita: carga rápida, coste cero o casi cero, despliegue sencillo y un stack que los agentes conozcan bien.

## Decisión

| Capa      | Elección                                              | Por qué                                                                                                           |
| --------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Framework | Astro 7                                               | HTML estático por defecto, islands solo donde hace falta y buen soporte de content collections si luego hay blog. |
| Estilos   | Tailwind CSS 4 con `@theme`                           | Tokens en CSS puro, sin `tailwind.config.js`, y utilidades generadas bajo demanda.                                |
| Motion    | GSAP ScrollTrigger + Lenis                            | Scroll suavizado y animaciones declaradas por sección; se cargan solo donde se usan.                              |
| Paquete   | pnpm                                                  | Instalación rápida y store compartido; `pnpm-workspace.yaml` controla los scripts de build permitidos.            |
| Hosting   | Cloudflare Workers (assets estáticos)                 | Sin código de Worker, dominio propio y CDN incluido; el build se sirve tal cual de `dist/`.                       |
| Calidad   | ESLint 9 flat + Prettier + `astro check` + commitlint | La misma batería en local (`pnpm test`) y en CI: lo que pasa en la máquina del agente, pasa en GitHub.            |

## Consecuencias

- Todo el contenido sale de `src/data/`: mover de hosting o cambiar de dominio es cambiar `site.url`.
- Si la web crece hacia servidor real (formularios, API), Astro ya soporta middleware y adaptadores; no habría que reescribir.
- El despliegue depende de dos secretos de GitHub (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`).

## Alternativas descartadas

- **Next.js / React:** peso y complejidad de más para un sitio sin aplicación detrás.
- **Astro + adaptador de Cloudflare en modo SSR:** innecesario mientras no haya render en servidor.
- **GitHub Pages:** sin `_headers` ni control fino de caché, y ata el dominio al ecosistema.
