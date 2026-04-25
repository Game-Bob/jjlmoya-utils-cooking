import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Minuteur de Cuisine Multiple";
const description = "Gérez plusieurs temps de cuisson simultanément. Alarmes indépendantes, idéal pour les chefs et l'organisation de la cuisine (Mise en Place).";
const faq = [
		{
			question: 'Combien de minuteurs puis-je créer ?',
			answer:
				'Illimité. Ajoutez-en autant que nécessaire avec le bouton "+". Parfait pour cuisiner plusieurs plats simultanément : bouillir des pâtes, réduire une sauce, reposer la viande et cuire au four, tout en même temps.',
		},
		{
			question: 'Pourquoi le temps de repos est-il important pour la viande ?',
			answer:
				'Lorsque vous coupez la viande juste après la cuisson, les jus s\'échappent sur l\'assiette. Si vous la laissez reposer 5 à 10 minutes, les fibres se détendent et les jus se redistribuent. Résultat : une viande juteuse au lieu d\'être sèche. Le repos est une cuisson passive.',
		},
		{
			question: 'Fonctionne-t-il avec l\'écran verrouillé ?',
			answer:
				'Oui, mais vous devez accorder les permissions de notification. Les minuteurs continuent de fonctionner en arrière-plan et vous alerteront avec un son et une notification de navigateur même si vous changez d\'onglet ou verrouillez votre téléphone.',
		},
		{
			question: 'Qu\'est-ce que la "Zone de Danger" alimentaire ?',
			answer:
				'Entre 5°C et 65°C, les bactéries se multiplient rapidement. Les aliments cuits ne doivent pas rester dans cette plage plus de 2 heures (1 heure si la température dépasse 30°C). Utilisez un minuteur pour surveiller le refroidissement avant de réfrigérer.',
		},
	];
const howTo = [
		{
			name: 'Créer plusieurs minuteurs',
			text: 'Utilisez le bouton "+" pour ajouter autant de minuteurs que nécessaire. Parfait pour orchestrer plusieurs plats simultanément.',
		},
		{
			name: 'Personnaliser chaque minuteur',
			text: 'Changez le nom de chaque minuteur pour identifier ce qui cuit : "Four", "Riz", "Sauce", etc.',
		},
		{
			name: 'Contrôler depuis le dock mobile',
			text: 'Sur mobile, les minuteurs actifs apparaissent dans un dock coulissant en bas. Mettez en pause ou redémarrez directement depuis là.',
		},
		{
			name: 'Recevoir des notifications',
			text: 'Autorisez les notifications pour que le navigateur vous alerte quand le temps est écoulé, même si vous changez d\'onglet.',
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
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
	slug: 'minuteur-cuisine',
	title: 'Minuteur de Cuisine Multiple',
	description:
		'Gérez plusieurs temps de cuisson simultanément. Alarmes indépendantes, idéal pour les chefs et l\'organisation de la cuisine (Mise en Place).',
	faqTitle: 'Questions Fréquemment Posées',	ui: {
		addTimer: 'Ajouter',
		stopAll: 'Tout Arrêter',
		defaultName: 'Minuteur',
		newTimerName: 'Nouveau Minuteur',
		timerDefault1: 'Minuteur 1',
		timerDefault2: 'Minuteur 2',
		timerDefault3: 'Minuteur 3',
		label: 'Étiquette',
		hours: 'Heures',
		minutes: 'Min',
		seconds: 'Sec',
		ready: 'Prêt',
		start: 'Démarrer',
		pause: 'Pause',
		reset: 'Réinitialiser',
		addOneMin: '+1 min',
		addFiveMin: '+5 min',
		statusReady: 'Prêt',
		statusRunning: 'En cours',
		statusPaused: 'Pause',
		statusFinished: 'FINI !',
		finishNotification: 'Minuteur Terminé pour',
	},

	faq: [
		{
			question: 'Combien de minuteurs puis-je créer ?',
			answer:
				'Illimité. Ajoutez-en autant que nécessaire avec le bouton "+". Parfait pour cuisiner plusieurs plats simultanément : bouillir des pâtes, réduire une sauce, reposer la viande et cuire au four, tout en même temps.',
		},
		{
			question: 'Pourquoi le temps de repos est-il important pour la viande ?',
			answer:
				'Lorsque vous coupez la viande juste après la cuisson, les jus s\'échappent sur l\'assiette. Si vous la laissez reposer 5 à 10 minutes, les fibres se détendent et les jus se redistribuent. Résultat : une viande juteuse au lieu d\'être sèche. Le repos est une cuisson passive.',
		},
		{
			question: 'Fonctionne-t-il avec l\'écran verrouillé ?',
			answer:
				'Oui, mais vous devez accorder les permissions de notification. Les minuteurs continuent de fonctionner en arrière-plan et vous alerteront avec un son et une notification de navigateur même si vous changez d\'onglet ou verrouillez votre téléphone.',
		},
		{
			question: 'Qu\'est-ce que la "Zone de Danger" alimentaire ?',
			answer:
				'Entre 5°C et 65°C, les bactéries se multiplient rapidement. Les aliments cuits ne doivent pas rester dans cette plage plus de 2 heures (1 heure si la température dépasse 30°C). Utilisez un minuteur pour surveiller le refroidissement avant de réfrigérer.',
		},
	],	howTo: [
		{
			name: 'Créer plusieurs minuteurs',
			text: 'Utilisez le bouton "+" pour ajouter autant de minuteurs que nécessaire. Parfait pour orchestrer plusieurs plats simultanément.',
		},
		{
			name: 'Personnaliser chaque minuteur',
			text: 'Changez le nom de chaque minuteur pour identifier ce qui cuit : "Four", "Riz", "Sauce", etc.',
		},
		{
			name: 'Contrôler depuis le dock mobile',
			text: 'Sur mobile, les minuteurs actifs apparaissent dans un dock coulissant en bas. Mettez en pause ou redémarrez directement depuis là.',
		},
		{
			name: 'Recevoir des notifications',
			text: 'Autorisez les notifications pour que le navigateur vous alerte quand le temps est écoulé, même si vous changez d\'onglet.',
		},
	],
  seo: [
		{
			type: 'title',
			text: 'Maîtrise Temporelle en Cuisine',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'La cuisine professionnelle ne repose pas uniquement sur les recettes, mais sur une <strong>gestion précise du temps</strong>. Le concept français de <em>"Mise en Place"</em> (chaque chose à sa place) inclut le temps comme ingrédient. Un steak qui repose 5 minutes redistribue ses jus et devient tendre ; un steak qui ne repose pas les perd à la première découpe.',
		},
		{
			type: 'paragraph',
			html: 'Cet outil de <strong>Minuteur Multiple</strong> a été conçu pour les chefs à domicile et les professionnels qui ont besoin d\'orchestrer une symphonie de plats : bouillir des pâtes, rôti au four et réduction de sauce, tout cela se passant simultanément.',
		},
		{
			type: 'title',
			text: 'Le Rôle de la Température et du Temps',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Cuisiner consiste essentiellement à appliquer de la chaleur pendant une durée spécifique pour transformer la structure chimique des aliments. La dénaturation des protéines et la réaction de Maillard (qui donne la couleur dorée et la saveur) dépendent de manière critique du minuteur.',
		},
		{
			type: 'table',
			headers: ['Aliment', 'Point de Cuisson', 'Temps', 'Bénéfice'],
			rows: [
				['Œufs à la coque', 'Jaune liquide', '3-4 min', 'Protéine douce, digestion facile'],
				['Œufs mollets', 'Jaune dense', '5-6 min', 'Équilibre parfait de texture'],
				['Œufs durs', 'Entièrement pris', '9-11 min', 'Fermeté maximale'],
				['Viande - Saisie', 'Feu vif', '1-2 min/face', 'Réaction de Maillard, jutosité'],
				['Viande - Repos fin', 'Repos', '5 min', 'Redistribution des jus'],
				['Viande - Grand Repos', 'Repos', '15-20 min', 'Fibres détendues'],
			],
		},
		{
			type: 'title',
			text: 'Sécurité Alimentaire : La Zone de Danger',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Le temps n\'affecte pas seulement la qualité, il affecte la sécurité. La "Zone de Danger" bactérienne se situe entre 5°C et 65°C. Les aliments cuits ne doivent pas rester dans cette plage pendant plus de <strong>2 heures</strong> (ou 1 heure si la température ambiante dépasse 30°C). Utilisez un minuteur pour surveiller le refroidissement avant de ranger les aliments au réfrigérateur.',
		},
		{
			type: 'title',
			text: 'Conseils d\'Organisation Professionnelle',
			level: 3,
		},
		{
			type: 'list',
			items: [
				'<strong>Échelonnez les temps de fin :</strong> Si tout se termine en même temps, vous vous sentirez débordé pour le dressage. Essayez d\'avoir les accompagnements prêts 5 minutes avant le plat principal.',
				'<strong>Utilisez la chaleur résiduelle :</strong> Éteignez les légumes ou les pâtes 1 à 2 minutes avant que le minuteur ne sonne. La chaleur résiduelle finira la cuisson en douceur.',
				'<strong>Nommez vos minuteurs :</strong> Dans une cuisine occupée, il est facile d\'oublier quelle alarme correspond à quoi. Utilisez la fonction de renommage de cet outil pour étiqueter "Four", "Riz" ou "Sauce".',
			],
		},
		{
			type: 'tip',
			html: '<strong>Conseil de pro :</strong> La précision temporelle est ce qui sépare un chef d\'un cuisinier amateur. Investissez dans un bon minuteur et utilisez-le toujours. L\'expérience vous dit quand quelque chose "semble prêt", mais le temps garantit la régularité.',
		},
	],
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
