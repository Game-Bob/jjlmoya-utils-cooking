---
name: create-tool
description: Create a new tool in the cooking utilities library (src/tool/). Use for any task involving scaffolding, creating, or adding a new cooking tool or utility to the repository.
---

Follow `prompts/create_tool.md` in the repository root for detailed instructions.

## Steps

1. **Read one existing tool** completely to discover patterns (logic.ts, entry.ts, index.ts, component.astro, seo.astro, bibliography.astro, bibliography.ts, CSS, i18n/en.ts)

2. **Only English** — create only `i18n/en.ts`, register only `en` in entry.ts

3. **Create all tool files** following the discovered patterns:
   - logic.ts, entry.ts, index.ts, component.astro, seo.astro,
     bibliography.astro, bibliography.ts, i18n/en.ts
   - CSS: named after the English slug (e.g. `depth-of-field-calculator.css`)

4. **SEO text** — El texto SEO debe aportar muchísimo valor al usuario, no ser vago ni corto, y responder a la intención de búsqueda del usuario. Cada párrafo, título y sección debe tener un propósito claro.

5. **Design** — El diseño debe ser único, muy visual y gráfico, con prioridad en una UX bonita y cuidada. Las interfaces deben diseñarse desde cero, sin copiar ni reutilizar el diseño de otras tools. Cada herramienta tiene que ser totalmente única en su planteamiento visual y de interacción. No uses diseños genéricos. Textos grandes, mobile FIRST, SIEMPRE

6. **Register the tool** by reading and updating:
   `src/index.ts`, `src/entries.ts`, `src/tools.ts`, `src/category/index.ts`

7. **Verify** — run in order:
   - `npm run type-check`
   - `npm run lint`
   - `npm run test -- --testPathIgnorePatterns=i18n_coverage`
