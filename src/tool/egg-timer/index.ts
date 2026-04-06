import type { CookingToolEntry, ToolDefinition } from "../../types";
import EggTimerComponent from "./component.astro";
import EggTimerSEO from "./seo.astro";
import EggTimerBibliography from "./bibliography.astro";

export const eggTimer: CookingToolEntry = {
  id: "egg-timer",
  icons: {
    bg: "mdi:chef-hat",
    fg: "mdi:egg",
  },
  appSlug: "egg-timer",
  i18n: {
    es: () => import("./i18n/es").then((m) => m.content),
    en: () => import("./i18n/en").then((m) => m.content),
  },
};

export { EggTimerComponent, EggTimerSEO, EggTimerBibliography };

export const EGG_TIMER_TOOL: ToolDefinition = {
  entry: eggTimer,
  Component: EggTimerComponent,
  SEOComponent: EggTimerSEO,
  BibliographyComponent: EggTimerBibliography,
};
