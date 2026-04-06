import type { CookingToolEntry, ToolDefinition } from "../../types";
import PizzaComponent from "./component.astro";
import PizzaSEO from "./seo.astro";
import PizzaBibliography from "./bibliography.astro";

export const pizza: CookingToolEntry = {
  id: "pizza-napolitana",
  icons: {
    bg: "mdi:chef-hat",
    fg: "mdi:pizza",
  },
  appSlug: "pizzametrics",
  i18n: {
    es: () => import("./i18n/es").then((m) => m.content),
  },
};

export { PizzaComponent, PizzaSEO, PizzaBibliography };

export const PIZZA_TOOL: ToolDefinition = {
  entry: pizza,
  Component: PizzaComponent,
  SEOComponent: PizzaSEO,
  BibliographyComponent: PizzaBibliography,
};
