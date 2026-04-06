import type { CookingToolEntry, ToolDefinition } from '../../types';
import IngredientRescalerComponent from './component.astro';
import IngredientRescalerSEO from './seo.astro';
import IngredientRescalerBibliography from './bibliography.astro';

export const ingredientRescaler: CookingToolEntry = {
	id: 'ingredient-rescaler',
	icons: {
		bg: 'mdi:pot-steam',
		fg: 'mdi:chef-hat',
	},
	i18n: {
		es: () => import('./i18n/es').then((m) => m.content),
		en: () => import('./i18n/en').then((m) => m.content),
	},
};

export const INGREDIENT_RESCALER_TOOL: ToolDefinition = {
	entry: ingredientRescaler,
	Component: IngredientRescalerComponent,
	SEOComponent: IngredientRescalerSEO,
	BibliographyComponent: IngredientRescalerBibliography,
};
