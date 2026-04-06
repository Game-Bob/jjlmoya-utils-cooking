import type { CookingToolEntry, ToolDefinition } from "../../types";
import BrineComponent from "./component.astro";
import BrineSEO from "./seo.astro";
import BrineBibliography from "./bibliography.astro";

export const brine: CookingToolEntry = {
  id: "brine-calculator",
  icons: {
    bg: "mdi:water",
    fg: "mdi:salt",
  },
  i18n: {
    es: () => import("./i18n/es").then((m) => m.content),
    en: () => import("./i18n/en").then((m) => m.content),
  },
};

export { BrineComponent, BrineSEO, BrineBibliography };

export const BRINE_TOOL: ToolDefinition = {
  entry: brine,
  Component: BrineComponent,
  SEOComponent: BrineSEO,
  BibliographyComponent: BrineBibliography,
};
