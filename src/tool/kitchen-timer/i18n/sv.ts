import type { ToolLocaleContent } from '../../../types';

const title = "Multitimer för Kök";
const description = "Hantera flera tillagningstider samtidigt. Oberoende larm, idealiskt för kockar och köksorganisation (Mise en Place).";
const faq = [
  {
    question: 'Hur många timers kan jag skapa?',
    answer: 'Obegränsat antal. Lägg till så många du behöver med "+"-knappen. Perfekt för att laga flera rätter samtidigt: pasta som kokar, sås som reduceras, kött som vilar och ugnen igång – allt på en gång.',
  },
  {
    question: 'Varför är vilotiden viktig för kött?',
    answer: 'När du skär i kött direkt från värmen rinner safterna ut på tallriken. Om det får vila i 5-10 minuter slappnar fibrerna av och safterna omfördelas. Resultat: saftigt kött istället för torrt.',
  },
  {
    question: 'Fungerar det med låst skärm?',
    answer: 'Ja, men du måste tillåta aviseringar. Timers fortsätter att köra i bakgrunden och varnar dig med ljud och webbläsaraviseringar även om du byter flik eller låser mobilen.',
  },
  {
    question: 'Vad är matens "farozon"?',
    answer: 'Mellan 5°C och 65°C förökas bakterier snabbt. Tillagad mat bör inte vara i denna zon i mer än 2 timmar (1 timme om det är varmare än 30°C). Använd en timer för att kontrollera nedkylningen.',
  },
];
const howTo = [
  {
    name: 'Skapa flera timers',
    text: 'Använd "+"-knappen för att lägga till så många timers du behöver. Perfekt för att koordinera flera rätter.',
  },
  {
    name: 'Anpassa varje timer',
    text: 'Ändra namnet på varje timer för att veta vad som tillagas: "Ugn", "Ris", "Sås", etc.',
  },
  {
    name: 'Styr från mobildockan',
    text: 'På mobilen visas aktiva timers i en skjutbar docka längst ner. Pausa eller starta om direkt därifrån.',
  },
  {
    name: 'Få aviseringar',
    text: 'Tillåt aviseringar så att webbläsaren varnar dig när tiden är ute.',
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
  slug: 'kokstimer',
  title: 'Multitimer för Kök',
  description: 'Hantera flera tillagningstider samtidigt. Oberoende larm, idealiskt för kockar och köksorganisation (Mise en Place).',
  faqTitle: 'Vanliga Frågor',
  bibliographyTitle: 'Referenser',
  ui: {
    addTimer: 'Lägg till Timer',
    stopAll: 'Stoppa Alla',
    defaultName: 'Timer',
    newTimerName: 'Ny Timer',
    timerDefault1: 'Timer 1',
    timerDefault2: 'Timer 2',
    timerDefault3: 'Timer 3',
    label: 'Etikett',
    hours: 'Tim',
    minutes: 'Min',
    seconds: 'Sek',
    ready: 'Klar',
    start: 'Start',
    pause: 'Pausa',
    reset: 'Återställ',
    addOneMin: '+1 min',
    addFiveMin: '+5 min',
    statusReady: 'Redo',
    statusRunning: 'Körs',
    statusPaused: 'Pausad',
    statusFinished: 'TIDEN UTE!',
    finishNotification: 'Timer klar för',
  },
  faq,
  bibliography: [
    {
      name: 'Livsmedelssäkerhet: USDA Guidelines',
      url: 'https://www.fsis.usda.gov/',
    },
    {
      name: 'Mise en Place - Det Professionella Köket',
      url: 'https://www.escoffier.edu/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Tidshantering i Köket',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Professionell matlagning handlar om <strong>exakt tidshantering</strong>. Det franska konceptet <em>"Mise en Place"</em> inkluderar tid som en viktig ingrediens.',
    },
    {
      type: 'title',
      text: 'Temperatur och Tids Roll',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Matvara', 'Tillagningsgrad', 'Tid', 'Fördel'],
      rows: [
        ['Löskokt ägg', 'Flytande gula', '3-4 min', 'Mjuka proteiner'],
        ['Mjukkokt ägg', 'Krämig gula', '5-6 min', 'Perfekt balans'],
        ['Hårdkokt ägg', 'Helt stelnad', '9-11 min', 'Maximal konsistens'],
        ['Kött - Bryning', 'Hög värme', '1-2 min/sida', 'Maillard-reaktion'],
        ['Kött - Vilotid', 'Vila', '5-20 min', 'Saftfördelning'],
      ],
    },
    {
      type: 'title',
      text: 'Livsmedelssäkerhet: Farozonen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tid påverkar även säkerheten. Den bakteriella "Farozonen" ligger mellan 5°C och 65°C. Mat bör inte vara i detta intervall i mer än <strong>2 timmar</strong>.',
    },
    {
      type: 'title',
      text: 'Proffstips för Organisation',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Stafetta sluttiderna:</strong> om allt blir klart samtidigt blir det stressigt vid uppläggning.',
        '<strong>Använd restvärme:</strong> stäng av värmen 1-2 minuter innan timern ringer.',
        '<strong>Namnge dina timers:</strong> använd etiketter för "Ugn", "Ris" eller "Sås".',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Proffstips:</strong> Precision i tid skiljer en chefskock från en hemmakock. Använd tekniken för att garantera jämna resultat.',
    },
  ],
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
