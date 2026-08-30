import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Beräkna och Skala Bakformar';
const description =
	'Anpassa alla bakrecept till dina formar. Beräkna automatiskt omräkningsfaktorn för runda, kvadratiska och rektangulära formar med professionell precision.';

const faq = [
	{
		question: 'Hur fungerar multiplikationsfaktorn exakt?',
		answer:
			'Faktorn får man genom att dela arean på din målform med arean på formen i originalreceptet. Om resultatet är 1.5 betyder det att du ska multiplicera varje ingrediens med den siffran.',
	},
	{
		question: 'Kan jag konvertera en rund form till en kvadratisk?',
		answer:
			'Ja, verktyget använder exakta geometriska formler för att jämföra ytor oavsett form. Ange bara måtten så sköter systemet beräkningen automatiskt.',
	},
	{
		question: 'Vad händer med höjden på formarna?',
		answer:
			'Detta verktyg fokuserar på bottenarean. Om din form är betydligt högre eller lägre än originalet kan du behöva justera gräddningstiden något.',
	},
	{
		question: 'Hur lägger jag till ingredienser i listan?',
		answer:
			'Klicka på knappen nedan för att lägga till en ny rad. Skriv namn och originalvikt; den sista kolumnen uppdateras direkt.',
	},
	{
		question: 'Är omräkningen tillförlitlig för mycket stora långpannor?',
		answer:
			'Matematiskt ja, men tänk på att mycket stora kakor tar längre tid att grädda i mitten. Du kan behöva sänka ugnstemperaturen något.',
	},
];

const howTo = [
	{
		name: 'Definiera originalformen',
		text: 'Välj form och mått på bakformen som receptet ursprungligen skapades för.',
	},
	{
		name: 'Ställ in din bakform',
		text: 'Ange måtten på den form du har hemma. Systemet beräknar direkt omräkningsfaktorn.',
	},
	{
		name: 'Använd ingrediensomräknaren',
		text: 'Lägg till dina ingredienser för att se exakt hur mycket du behöver för den nya formen.',
	},
	{
		name: 'Anpassa gräddningstiden',
		text: 'Kom ihåg att förändrad formstorlek oftast kräver anpassning av tiden i ugnen.',
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
	slug: 'bakformsomraknare',
	title,
	description,
	faqTitle: 'Vanliga Frågor',
	ui: {
		originalMold: 'Original Receptform',
		yourMold: 'Din Målform',
		shape: 'Formens Form',
		diameter: 'Diameter',
		side: 'Sida',
		width: 'Bredd',
		length: 'Längd',
		unit: 'Enhet',
		cm: 'cm',
		inches: 'tum',
		round: 'Rund',
		square: 'Kvadratisk',
		rectangular: 'Rektangulär',
		resultTitle: 'Omräkningsresultat',
		originalArea: 'Originalyta',
		yourArea: 'Din Yta',
		multiplyingFactor: 'Omräkningsfaktor',
		equivalentMolds: 'Formarna är likvärdiga. Använd samma mängder.',
		smallerMold: 'Din form är mindre. Minska ingredienserna genom att multiplicera med',
		largerMold: 'Din form är större. Öka ingredienserna genom att multiplicera med',
		ingredientCalculator: 'Omräknare för Ingrediensvikt',
		addIngredient: 'Lägg till Ingrediens',
		ingredient: 'Ingrediens',
		original: 'Original',
		final: 'Slutlig',
		exampleIngredient: 'Ex. Mjöl',
		delete: 'Ta bort',
		originalVisualization: 'Original',
		yourVisualization: 'Din',
		defaultIngredient1: 'Mjöl',
		defaultIngredient2: 'Socker',
		reduce: 'Minska',
		increase: 'Öka',
	},

	faq,
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Avancerad Guide för att Skala Recept efter Bakform',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Att konvertera mängder för en annan form kräver att man respekterar <strong>geometriska proportioner</strong> för att behålla rätt konsistens, höjd och saftighet.',
		},
		{
			type: 'diagnostic',
			variant: 'info',
			title: 'Hemligheten bakom Bottenytan',
			html: 'Hemligheten bakom korrekt skalning ligger i bottenytan, inte i diametern. En ökning med 25 % i diameter fördubblar nästan den totala ytan.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: 'x1.56',
					label: 'Faktor 20cm till 25cm',
					icon: 'mdi:resize',
				},
				{
					value: 'x2.25',
					label: 'Faktor 15cm till 22.5cm',
					icon: 'mdi:arrow-up-bold-outline',
				},
				{
					value: '0.64',
					label: 'Faktor 25cm till 20cm',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: 'πr²',
					label: 'Cirkelns area',
					icon: 'mdi:math-compass',
				},
			],
		},
		{
			type: 'title',
			text: 'Formjämförelse och Ugnseffektivitet',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Runda Bakformar',
					icon: 'mdi:circle-outline',
					description: 'Standarden inom bakning. Ger jämn gräddning från kanten mot mitten.',
					points: [
						'Optimal värmefördelning',
						'Idealisk för höga tårtbottnar',
						'Beräknas via radien',
					],
				},
				{
					title: 'Kvadratiska Formar',
					icon: 'mdi:square-outline',
					description: 'Maximalt utnyttjande av ugnsytan. Idealisk för brownies.',
					highlight: true,
					points: [
						'Snabbare gräddning i hörn',
						'Lätt att skära snygga bitar',
						'Beräknas Sida x Sida',
					],
				},
				{
					title: 'Rektangulära Formar',
					icon: 'mdi:rectangle-outline',
					description: 'Perfekt för långpannekakor. Kräv kontroll i mitten.',
					points: [
						'Högst totalkapacitet',
						'Mångsidig användning',
						'Beräknas Bredd x Längd',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Matematiken Bakom Ytomräkning',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'För att beräkna rätt omräkningsfaktor jämför vi bottenytorna med dessa formler:',
		},
		{
			type: 'table',
			headers: ['Formens Form', 'Areaformel', 'Viktig Aspekt'],
			rows: [
				['Cirkulär', 'π × Radie²', 'Radien är hälften av diametern'],
				['Kvadratisk', 'Sida × Sida', 'Endast innermått'],
				['Rektangulär', 'Bredd × Längd', 'Standard för långpanna'],
			],
		},
		{
			type: 'title',
			text: 'Vanliga Misstag vid Byte av Formstorlek',
			level: 3,
		},
		{
			type: 'list',
			items: [
				'<strong>Lineär skalning:</strong> Att fördubbla diametern fördubblar inte ingredienserna; det fyrdubblar dem.',
				'<strong>Ignorera höjden:</strong> Djupa formar kräver längre tid på lägre temperatur.',
				'<strong>Jäsningsmedel:</strong> Bakpulver kräver inte alltid exakt lineär skalning.',
				'<strong>Avdunstning:</strong> Mindre satser kan torka ut snabbare.',
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Maximal Fyllnadsnivå',
			html: 'Fyll aldrig en form till mer än 2/3 av dess kapacitet, oavsett beräknad faktor.',
		},
		{
			type: 'title',
			text: 'Ordlista för Omräkning',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Omräkningsfaktor',
					definition: 'Talet du multiplicerar alla ingredienser med.',
				},
				{
					term: 'Bottenyta',
					definition: 'Måttet på formens bottenarea.',
				},
				{
					term: 'Radie',
					definition: 'Avståndet från mitten till kanten på en cirkel.',
				},
				{
					term: 'Värmeöverföring',
					definition: 'Hur värme rör sig i formen beroende på form och material.',
				},
			],
		},
		{
			type: 'tip',
			html: 'Vid byte till en mycket större form, använd isoleringsband runt formen för jämn värmefördelning.',
		},
		{
			type: 'paragraph',
			html: 'Att bemästra formskalning ger dig total kreativ frihet. Använd denna räknare för jämna professionella resultat.',
		},
	],
	bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
