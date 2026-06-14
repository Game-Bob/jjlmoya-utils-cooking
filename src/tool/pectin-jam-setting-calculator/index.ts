import type { ToolDefinition } from '../../types';
import { pectinJam } from './entry';

export * from './entry';

export const PECTIN_JAM_SETTING_TOOL: ToolDefinition = {
  entry: pectinJam,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
