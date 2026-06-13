import type { ToolDefinition } from '../../types';
import { carryOverCooking } from './entry';

export * from './entry';

export const CARRY_OVER_COOKING_TOOL: ToolDefinition = {
  entry: carryOverCooking,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
