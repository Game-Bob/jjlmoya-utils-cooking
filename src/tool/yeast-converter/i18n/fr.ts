import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Convertisseur de Levure : Fraîche, Sèche et Levain';
const description =
	'Convertissez avec précision entre la levure fraîche, la levure sèche et le levain. Obtenez les ajustements de recette nécessaires lors de l\'utilisation du levain pour maintenir une hydratation parfaite.';

const faq = [
	{
		question: 'Quelle est la différence entre la levure fraîche et la levure sèche ?',
		answer:
			'La levure fraîche contient environ 70 % d\'eau, tandis que la levure sèche en contient environ 8 %. Le facteur de conversion est le suivant : 1 part de levure sèche équivaut à 3 parts de levure fraîche. La levure sèche est plus puissante et stable, ce qui la rend idéale pour une conservation à long terme.',
	},
	{
		question: 'De quelle quantité de levain ai-je besoin ?',
		answer:
			'Le levain est par défaut à 100 % d\'hydratation (autant de farine que d\'eau). Pour remplacer 1 g de levure fraîche, vous avez besoin de 5 g de levain (ratio 1:5). Ajustez toujours votre recette en soustrayant la farine et l\'eau déjà présentes dans le levain.',
	},
	{
		question: 'Pourquoi dois-je ajuster ma recette pour le levain ?',
		answer:
			'Le levain contient à la fois de la levure, de la farine et de l\'eau. En l\'ajoutant, vous ajoutez des ingrédients à votre recette. Vous devez soustraire la quantité équivalente de farine et d\'eau de votre total pour maintenir l\'hydratation et la structure correctes.',
	},
	{
		question: 'Puis-je utiliser de la levure instantanée au lieu de la levure sèche active ?',
		answer:
			'La levure instantanée est un type de levure sèche très finement moulue. Le ratio de conversion reste le même : 1:3 entre la levure sèche et la levure fraîche. La levure instantanée peut nécessiter légèrement moins de liquide en raison de sa finesse.',
	},
];

const howTo = [
	{
		name: 'Sélectionnez votre type de levure',
		text: 'Choisissez le type de levure dont vous disposez : Fraîche (en cube), Sèche (instantanée ou active) ou Levain (hydratation 100 %).',
	},
	{
		name: 'Entrez la quantité',
		text: 'Saisissez la quantité en grammes. Soyez précis pour obtenir les meilleurs résultats : utilisez une balance de cuisine si possible.',
	},
	{
		name: 'Appliquez les conversions',
		text: 'L\'outil affiche les quantités équivalentes pour les trois types. Si vous convertissez vers le levain, soustrayez la farine et l\'eau de votre recette.',
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
	slug: 'convertisseur-levure-fraiche-seche-levain',
	title,
	description,
	ui: {
		selectYeastType: 'Sélectionner le type de levure',
		freshYeast: 'Levure Fraîche (Cube)',
		dryYeast: 'Levure Sèche (Instantanée)',
		sourdough: 'Levain (100%)',
		enterAmount: 'Entrer la quantité',
		quantity: 'Quantité',
		grams: 'Grammes (g)',
		ounces: 'Onces (oz)',
		pounds: 'Livres (lb)',
		milligrams: 'Milligrammes (mg)',
		reset: 'Réinitialiser',
		conversions: 'Conversions',
		copy: 'Copier',
		copied: 'Copié !',
		recipeAdjustment: 'Ajustement de la recette',
		flourSubtract: 'Soustraire de la farine :',
		waterSubtract: 'Soustraire de l\'eau :',
	},
	faqTitle: 'Foire Aux Questions',
	faq,
	bibliographyTitle: 'Bibliographie et Ressources',
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Formule de Conversion de Levure et Guide Scientifique',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'La <strong>conversion de levure</strong> est essentielle pour la régularité en pâtisserie. Que vous remplaciez la levure commerciale par du levain ou que vous adaptiez les quantités entre variétés fraîches et sèches, comprendre les ratios exacts garantit une fermentation fiable et des résultats constants.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '1:3',
					label: 'Ratio Sèche/Fraîche',
					icon: 'mdi:scale',
				},
				{
					value: '1:5',
					label: 'Fraîche/Levain',
					icon: 'mdi:flask-outline',
				},
				{
					value: '70%',
					label: 'Eau dans la Fraîche',
					icon: 'mdi:water-percent',
				},
				{
					value: '8%',
					label: 'Eau dans la Sèche',
					icon: 'mdi:water-opacity',
				},
			],
		},
		{
			type: 'title',
			text: 'Types d\'Agents Levants et Leurs Propriétés',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Levure Fraîche (Pressée)',
					icon: 'mdi:cube',
					description: 'Cellules de levure vivantes en suspension dans l\'amidon et l\'humidité.',
					points: [
						'Puissance : 100 % (référence)',
						'Conservation : 2-3 semaines au frais',
						'Teneur en eau : ~70 %',
						'Idéal pour : Boulangers pros, usage immédiat',
					],
				},
				{
					title: 'Levure Sèche (Instantanée)',
					icon: 'mdi:spray-bottle',
					description: 'Cellules de levure déshydratées, plus concentrées que la fraîche.',
					points: [
						'Puissance : 3x levure fraîche',
						'Conservation : 1-2 ans non ouvert',
						'Teneur en eau : ~8 %',
						'Idéal pour : Boulangers amateurs, stockage long',
					],
				},
				{
					title: 'Levain',
					icon: 'mdi:flask-outline',
					description: 'Culture de levures sauvages et de bactéries à 100 % d\'hydratation.',
					highlight: true,
					points: [
						'Puissance : 1 part = 5 parts de levure fraîche',
						'Conservation : Indéfinie avec soin',
						'Teneur en eau : 50 % (autant de farine)',
						'Idéal pour : Arôme complexe, fermentation lente',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Ratios de Conversion et Formule Mathématique',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Levure Source', 'Levure Cible', 'Formule de Conversion', 'Exemple'],
			rows: [
				['Levure Fraîche', 'Levure Sèche', 'Fraîche ÷ 3 = Sèche', '30g Fraîche = 10g Sèche'],
				['Levure Sèche', 'Levure Fraîche', 'Sèche × 3 = Fraîche', '10g Sèche = 30g Fraîche'],
				['Levure Fraîche', 'Levain (100%)', 'Fraîche × 5 = Levain', '20g Fraîche = 100g Levain'],
				['Levain (100%)', 'Levure Fraîche', 'Levain ÷ 5 = Fraîche', '100g Levain = 20g Fraîche'],
				['Levure Sèche', 'Levain (100%)', 'Sèche × 15 = Levain', '10g Sèche = 150g Levain'],
				['Levain (100%)', 'Levure Sèche', 'Levain ÷ 15 = Sèche', '150g Levain = 10g Sèche'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Crucial : Ajustement de recette pour le levain',
			html: 'Lorsque vous remplacez la levure par du levain, vous DEVEZ ajuster votre recette. Le levain contient 50 % de farine et 50 % d\'eau. Si votre conversion demande 100 g de levain, retirez 50 g de farine et 50 ml d\'eau de votre recette pour maintenir l\'hydratation.',
		},
		{
			type: 'title',
			text: 'Caractéristiques de Fermentation par Type de Levure',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Type de Levure', 'Vitesse de Fermentation', 'Développement des Arômes', 'Production de CO₂'],
			rows: [
				['Levure Fraîche', 'Rapide (2-3 h)', 'Neutre à doux', 'Élevée et rapide'],
				['Levure Sèche', 'Moyenne (3-4 h)', 'Légèrement plus complexe', 'Constante'],
				['Levain', 'Lente (8-48 h)', 'Complexe, acidulé', 'Progressive, soutenue'],
			],
		},
		{
			type: 'tip',
			title: 'Conseil Pro : Ajustements de Température',
			html: 'Une fermentation à froid avec du levain (2-4°C pendant 8-16 heures) développe des saveurs et une structure supérieures. C\'est pourquoi les boulangeries professionnelles préfèrent le levain pour les pains à longue fermentation.',
		},
		{
			type: 'paragraph',
			html: 'Notre convertisseur simplifie les calculs pour que vous puissiez vous concentrer sur la perfection de votre technique et le goût de vos pains.',
		},
	],

  bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
