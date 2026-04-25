import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Adaptateur de Taille de Moule et Calculateur de Cuisson';
const description =
	"Adaptez n'importe quelle recette de pâtisserie à vos moules instantanément. Calculez le facteur de conversion pour les moules ronds, carrés et rectangulaires avec une précision professionnelle.";

const faq = [
	{
		question: 'Comment est calculé exactement le facteur multiplicateur ?',
		answer:
			'Le facteur est obtenu en divisant la surface de votre moule cible par la surface du moule d\'origine mentionné dans la recette. Si le résultat est 1,5, vous multipliez chaque ingrédient par 1,5.',
	},
	{
		question: 'Puis-je convertir un moule rond en un moule carré ?',
		answer:
			'Oui, notre outil utilise des formules géométriques pour comparer les surfaces quelle que soit la forme. Entrez simplement les dimensions et le système gère l\'équivalence automatiquement.',
	},
	{
		question: 'La hauteur du moule affecte-t-elle le calcul ?',
		answer:
			'Cet outil se concentre sur la surface de base, qui est le facteur le plus critique. Si votre moule est beaucoup plus haut ou plus bas que l\'original, vous devrez peut-être ajuster le temps de cuisson.',
	},
	{
		question: 'Comment ajouter plusieurs ingrédients à ma liste ?',
		answer:
			'Cliquez sur le bouton "Ajouter un Ingrédient" pour créer une nouvelle ligne. Tapez le nom et le poids original ; la colonne finale se met à jour instantanément avec le montant proportionnel.',
	},
	{
		question: 'Le calcul est-il fiable pour les très grandes plaques ?',
		answer:
			'Mathématiquement oui, mais gardez à l\'esprit que les très gros gâteaux mettent plus de temps à cuire au centre. Vous devrez peut-être baisser la température du four légèrement.',
	},
];

const howTo = [
	{
		name: 'Définissez le moule de la recette originale',
		text: 'Sélectionnez la forme et les dimensions du moule pour lequel la recette a été initialement conçue.',
	},
	{
		name: 'Saisissez les mesures de votre moule cible',
		text: 'Sélectionnez la forme de votre moule et entrez ses dimensions. Le système calculera le facteur immédiatement.',
	},
	{
		name: 'Utilisez le convertisseur de poids d\'ingrédients',
		text: 'Ajoutez les ingrédients de votre recette pour voir exactement les quantités dont vous avez besoin pour la nouvelle taille.',
	},
	{
		name: 'Surveillez les temps de cuisson',
		text: 'N\'oubliez pas que changer la taille du moule nécessite généralement des ajustements de temps, même si la température reste la même.',
	},
];

const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: faq.map((item) => ({
		'@type': 'Question',
		name: item.question,
		acceptedAnswer: { '@type': 'Answer', text: item.answer },
	})),
};

const howToSchema = {
	'@context': 'https://schema.org',
	'@type': 'HowTo',
	name: title,
	description,
	step: howTo.map((step) => ({
		'@type': 'HowToStep',
		name: step.name,
		text: step.text,
	})),
};

const appSchema = {
	'@context': 'https://schema.org',
	'@type': 'SoftwareApplication',
	name: title,
	description,
	applicationCategory: 'UtilitiesApplication',
	operatingSystem: 'All',
};

export const content: ToolLocaleContent = {
	slug: 'adaptateur-taille-moule-patisserie',
	title,
	description,
	faqTitle: 'Questions Fréquentes sur la Conversion',	ui: {
		originalRecipe: 'Recette Originale',
		yourMold: 'Votre Moule',
		round: 'Rond',
		square: 'Carré',
		rectangular: 'Rectangulaire',
		diameter: 'Diamètre (cm)',
		side: 'Côté (cm)',
		width: 'Largeur (cm)',
		length: 'Longueur (cm)',
		multiplyingFactor: 'Facteur de Conversion',
		equivalentMolds: 'Les moules sont équivalents. Utilisez les mêmes quantités.',
		smallerMold: 'Votre moule est plus petit. Réduisez les ingrédients en les multipliant par',
		largerMold: 'Votre moule est plus grand. Augmentez les ingrédients en les multipliant par',
		ingredientCalculator: 'Calculateur de Poids d\'Ingrédients',
		addIngredient: 'Ajouter un Ingrédient',
		ingredient: 'Ingrédient',
		original: 'Original',
		final: 'Final',
		exampleIngredient: 'Ex: Farine',
		delete: 'Supprimer',
		originalVisualization: 'Original',
		yourVisualization: 'Le vôtre',
		defaultIngredient1: 'Farine',
		defaultIngredient2: 'Sucre',
		reduce: 'Réduire',
		increase: 'Augmenter',
	},

	faq,	howTo,

	seo: [
		{
			type: 'title',
			text: 'Guide Avancé pour Adapter vos Recettes selon la Taille du Moule',
			level: 2,
		},
		{
			type: 'paragraph',
			html: "Adapter les quantités d'une recette pour une taille de moule différente est une compétence fondamentale en pâtisserie professionnelle. Il ne s'agit pas seulement d'ajouter quelques ingrédients à l'œil ; cela nécessite de respecter les <strong>proportions géométriques</strong> pour maintenir la même hauteur et texture.",
		},
		{
			type: 'diagnostic',
			variant: 'info',
			title: 'Le Secret de la Surface',
			html: "Le secret d'une bonne adaptation réside dans la surface, pas dans le diamètre. Une augmentation de 25 % du diamètre d'un moule rond double presque sa surface totale.",
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: 'x1.56',
					label: 'Facteur 20cm à 25cm',
					icon: 'mdi:resize',
				},
				{
					value: 'x2.25',
					label: 'Facteur 15cm à 22.5cm',
					icon: 'mdi:arrow-up-bold-outline',
				},
				{
					value: '0.64',
					label: 'Facteur 25cm à 20cm',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: 'πr²',
					label: "Formule d'aire circulaire",
					icon: 'mdi:math-compass',
				},
			],
		},
		{
			type: 'title',
			text: 'Comparaison des Formes et Efficacité Thermique',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Moules Ronds',
					icon: 'mdi:circle-outline',
					description: 'Le standard de la pâtisserie. Ils offrent une cuisson très uniforme de la périphérie vers le centre.',
					points: [
						'Distribution de chaleur optimale',
						'Idéal pour gâteaux hauts',
						'Calcul basé sur le rayon',
					],
				},
				{
					title: 'Moules Carrés',
					icon: 'mdi:square-outline',
					description: "Permettent une utilisation maximale de l'espace. Idéal pour les brownies et les coupes individuelles nettes.",
					highlight: true,
					points: [
						'Cuisson rapide des coins',
						'Facile à portionner',
						'Calcul Côté x Côté',
					],
				},
				{
					title: 'Moules Rectangulaires',
					icon: 'mdi:rectangle-outline',
					description: 'Parfaits pour les grands plateaux et les génoises. Nécessitent une surveillance au centre.',
					points: [
						'Capacité totale élevée',
						"Polyvalence d'usage",
						'Calcul Largeur x Longueur',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Mathématiques de la Conversion de Surface',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Pour calculer le facteur de conversion correct, nous devons comparer les surfaces de base en utilisant ces formules géométriques standard :',
		},
		{
			type: 'table',
			headers: ['Forme du Moule', 'Formule de Surface', 'Considération Clé'],
			rows: [
				['Circulaire', 'π × Rayon²', 'Le rayon est la moitié du diamètre'],
				['Carré', 'Côté × Côté', 'Mesures internes uniquement'],
				['Rectangulaire', 'Largeur × Longueur', 'Standard pour les brownies et plaques'],
			],
		},
		{
			type: 'title',
			text: 'Erreurs Courantes lors du Changement de Taille de Moule',
			level: 3,
		},
		{
			type: 'paragraph',
			html: "De nombreux pâtissiers amateurs font l'erreur d'adapter les ingrédients de manière linéaire en se basant sur le diamètre. Évitez ces pièges courants :",
		},
		{
			type: 'list',
			items: [
				'<strong>Adaptation linéaire :</strong> Doubler le diamètre ne double pas les ingrédients ; cela les quadruple.',
				'<strong>Ignorer la profondeur :</strong> Des moules profonds nécessitent une cuisson plus longue à basse température.',
				'<strong>Agents levants :</strong> La levure chimique ne nécessite pas toujours une adaptation parfaitement linéaire.',
				'<strong>Évaporation :</strong> Les petites quantités peuvent sécher plus vite à cause du ratio surface-volume.',
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Limite de Capacité du Moule',
			html: 'Ne remplissez jamais un moule à plus des 2/3 de sa capacité totale, quel que soit le facteur calculé, pour permettre une expansion correcte.',
		},
		{
			type: 'title',
			text: 'Glossaire des Termes de Conversion Géométrique',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Facteur de Conversion',
					definition: 'Le nombre par lequel multiplier tous les ingrédients pour adapter la recette au nouveau moule.',
				},
				{
					term: 'Surface de Base',
					definition: "La mesure de l'aire du fond du moule. En pâtisserie, c'est la donnée la plus pertinente pour le volume.",
				},
				{
					term: 'Rayon',
					definition: "Distance du centre vers le bord d'un cercle. Essentiel pour la formule πr².",
				},
				{
					term: 'Transfert Thermique',
					definition: "La manière dont l'énergie voyage dans le moule. Change drastiquement selon la forme et le matériau.",
				},
			],
		},
		{
			type: 'title',
			text: 'Conseils de Pro pour la Cuisson des Recettes Adaptées',
			level: 3,
		},
		{
			type: 'tip',
			html: 'Si vous passez à un moule beaucoup plus grand, utilisez des bandes de cuisson ou un noyau thermique au centre pour assurer une distribution uniforme de la chaleur sans dessécher les bords.',
		},
		{
			type: 'paragraph',
			html: "Maîtriser l'adaptation des moules vous donne une liberté créative totale. Utilisez cette calculatrice pour éliminer les approximations et obtenir des résultats professionnels constants.",
		},
	],
  bibliography,
  schemas: [appSchema, faqSchema, howToSchema],
};
