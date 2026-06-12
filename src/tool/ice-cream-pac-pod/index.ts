import type { ToolDefinition } from '../../types';
import { iceCreamPacPod } from './entry';

export * from './entry';

export const ICE_CREAM_PAC_POD_TOOL: ToolDefinition = {
  entry: iceCreamPacPod,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
