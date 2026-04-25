import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Multiple Kitchen Timer";
const description = "Manage multiple cooking times simultaneously. Independent alarms, ideal for chefs and kitchen organization (Mise en Place).";
const faq = [
		{
			question: 'How many timers can I create?',
			answer:
				'Unlimited. Add as many as you need with the \'+\' button. Perfect for cooking multiple dishes simultaneously: pasta boiling, sauce reducing, meat resting, and oven baking, all at once.',
		},
		{
			question: 'Why is resting time important for meat?',
			answer:
				'When you cut meat fresh from heat, juices escape onto the plate. If you rest 5-10 minutes, fibers relax and juices redistribute. Result: juicy meat instead of dry. Resting is passive cooking.',
		},
		{
			question: 'Does it work with screen locked?',
			answer:
				'Yes, but you need to grant notification permissions. Timers keep running in background and will alert you with sound and browser notification even if you switch tabs or lock your phone.',
		},
		{
			question: 'What is the food \'Danger Zone\'?',
			answer:
				'Between 5°C and 65°C bacteria multiply rapidly. Cooked foods shouldn\'t stay in this range more than 2 hours (1 hour if temperature exceeds 30°C). Use a timer to monitor cooling before refrigerating.',
		},
	];
const howTo = [
		{
			name: 'Create multiple timers',
			text: 'Use the \'+\' button to add as many timers as you need. Perfect for orchestrating multiple dishes simultaneously.',
		},
		{
			name: 'Customize each timer',
			text: 'Change the name of each timer to identify what\'s cooking: \'Oven\', \'Rice\', \'Sauce\', etc.',
		},
		{
			name: 'Control from mobile dock',
			text: 'On mobile, active timers appear in a sliding dock at the bottom. Pause or restart directly from there.',
		},
		{
			name: 'Receive notifications',
			text: 'Authorize notifications so the browser alerts you when time\'s up, even if you switch tabs.',
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
	slug: 'kitchen-timer',
	title: 'Multiple Kitchen Timer',
	description:
		'Manage multiple cooking times simultaneously. Independent alarms, ideal for chefs and kitchen organization (Mise en Place).',
	faqTitle: 'Frequently Asked Questions',	ui: {
		addTimer: 'Add Timer',
		stopAll: 'Stop All',
		defaultName: 'Timer',
		newTimerName: 'New Timer',
		timerDefault1: 'Timer 1',
		timerDefault2: 'Timer 2',
		timerDefault3: 'Timer 3',
		label: 'Label',
		hours: 'Hours',
		minutes: 'Min',
		seconds: 'Sec',
		ready: 'Ready',
		start: 'Start',
		pause: 'Pause',
		reset: 'Reset',
		addOneMin: '+1 min',
		addFiveMin: '+5 min',
		statusReady: 'Ready',
		statusRunning: 'Running',
		statusPaused: 'Paused',
		statusFinished: 'TIME!',
		finishNotification: 'Timer Finished for',
	},

	faq: [
		{
			question: 'How many timers can I create?',
			answer:
				'Unlimited. Add as many as you need with the \'+\' button. Perfect for cooking multiple dishes simultaneously: pasta boiling, sauce reducing, meat resting, and oven baking, all at once.',
		},
		{
			question: 'Why is resting time important for meat?',
			answer:
				'When you cut meat fresh from heat, juices escape onto the plate. If you rest 5-10 minutes, fibers relax and juices redistribute. Result: juicy meat instead of dry. Resting is passive cooking.',
		},
		{
			question: 'Does it work with screen locked?',
			answer:
				'Yes, but you need to grant notification permissions. Timers keep running in background and will alert you with sound and browser notification even if you switch tabs or lock your phone.',
		},
		{
			question: 'What is the food \'Danger Zone\'?',
			answer:
				'Between 5°C and 65°C bacteria multiply rapidly. Cooked foods shouldn\'t stay in this range more than 2 hours (1 hour if temperature exceeds 30°C). Use a timer to monitor cooling before refrigerating.',
		},
	],	howTo: [
		{
			name: 'Create multiple timers',
			text: 'Use the \'+\' button to add as many timers as you need. Perfect for orchestrating multiple dishes simultaneously.',
		},
		{
			name: 'Customize each timer',
			text: 'Change the name of each timer to identify what\'s cooking: \'Oven\', \'Rice\', \'Sauce\', etc.',
		},
		{
			name: 'Control from mobile dock',
			text: 'On mobile, active timers appear in a sliding dock at the bottom. Pause or restart directly from there.',
		},
		{
			name: 'Receive notifications',
			text: 'Authorize notifications so the browser alerts you when time\'s up, even if you switch tabs.',
		},
	],
  seo: [
		{
			type: 'title',
			text: 'Temporal Mastery in the Kitchen',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Professional cooking isn\'t based solely on recipes, but on <strong>precise time management</strong>. The French concept <em>"Mise en Place"</em> (everything in its place) includes time as an ingredient. A steak that rests 5 minutes redistributes its juices and becomes tender; one that doesn\'t rest loses them at the first cut.',
		},
		{
			type: 'paragraph',
			html: 'This <strong>Multiple Timer</strong> tool has been designed for home chefs and professionals who need to orchestrate a symphony of dishes: pasta boiling, roast in the oven, and sauce reducing, all happening simultaneously.',
		},
		{
			type: 'title',
			text: 'The Role of Temperature and Time',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Cooking is essentially applying heat for a specific duration to transform the chemical structure of food. Protein denaturation and the Maillard reaction (which gives golden color and flavor) critically depend on the timer.',
		},
		{
			type: 'table',
			headers: ['Food', 'Cooking Point', 'Time', 'Benefit'],
			rows: [
				['Soft-boiled Eggs', 'Liquid yolk', '3-4 min', 'Soft protein, easy digestion'],
				['Mollet Eggs', 'Dense yolk', '5-6 min', 'Perfect texture balance'],
				['Hard-boiled Eggs', 'Fully set', '9-11 min', 'Maximum firmness'],
				['Meat - Searing', 'High heat', '1-2 min/side', 'Maillard reaction, juiciness'],
				['Meat - Fine Rest', 'Resting', '5 min', 'Juice redistribution'],
				['Meat - Large Rest', 'Resting', '15-20 min', 'Relaxed fibers'],
			],
		},
		{
			type: 'title',
			text: 'Food Safety: The Danger Zone',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Time doesn\'t just affect quality, it affects safety. The bacterial "Danger Zone" sits between 5°C and 65°C. Cooked foods must not remain in this range for more than <strong>2 hours</strong> (or 1 hour if ambient temperature exceeds 30°C). Use a timer to monitor cooling before storing food in the fridge.',
		},
		{
			type: 'title',
			text: 'Professional Organization Tips',
			level: 3,
		},
		{
			type: 'list',
			items: [
				'<strong>Stagger finishing times:</strong> If everything finishes at once, you\'ll feel overwhelmed plating. Try to have side dishes ready 5 minutes before the main course.',
				'<strong>Use residual heat:</strong> Turn off vegetables or pasta 1-2 minutes before the timer sounds. Residual heat will finish cooking gently.',
				'<strong>Name your timers:</strong> In a busy kitchen it\'s easy to forget which alarm is which. Use this tool\'s renaming feature to label \'Oven\', \'Rice\', or \'Sauce\'.',
			],
		},
		{
			type: 'tip',
			html: '<strong>Professional tip:</strong> Time precision is what separates a chef from a home cook. Invest in a good timer and use it always. Experience tells you when something "looks ready", but time guarantees consistency.',
		},
	],
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
