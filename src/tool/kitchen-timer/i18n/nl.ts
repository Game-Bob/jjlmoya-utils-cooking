import type { ToolLocaleContent } from '../../../types';

const title = "Meervoudige Keukentimer";
const description = "Beheer meerdere kooktijden gelijktijdig. Onafhankelijke alarmen, ideaal voor chefs en organisatie in de keuken (Mise en Place).";
const faq = [
  {
    question: 'Hoeveel timers kan ik maken?',
    answer: 'Onbeperkt. Voeg er zoveel toe als je nodig hebt met de "+"-knop. Ideaal voor het gelijktijdig koken van meerdere gerechten: pasta koken, saus inkoken, vlees laten rusten en de oven aan – alles tegelijk.',
  },
  {
    question: 'Waarom is rusttijd belangrijk voor vlees?',
    answer: 'Als je vlees snijdt dat net van het vuur komt, ontsnappen de sappen naar het bord. Als je het 5-10 minuten laat rusten, ontspannen de vezels en worden de sappen herverdeeld. Resultaat: sappig vlees in plaats van droog.',
  },
  {
    question: 'Werkt het met een vergrendeld scherm?',
    answer: 'Ja, maar je moet toestemming geven voor meldingen. De timers blijven op de achtergrond lopen en waarschuwen je met geluid en browsernotificaties, zelfs als je van tabblad wisselt of je mobiel vergrendelt.',
  },
  {
    question: 'Wat is de bacteriële "Gevarenzone"?',
    answer: 'Tussen 5°C en 65°C vermenigvuldigen bacteriën zich snel. Gekookt voedsel mag niet langer dan 2 uur in deze zone blijven (1 uur als het warmer is dan 30°C). Gebruik een timer om het afkoelen te controleren.',
  },
];
const howTo = [
  {
    name: 'Maak meerdere timers',
    text: 'Gebruik de "+"-knop om zoveel timers toe te voegen als nodig. Ideaal voor het coördineren van meerdere gerechten.',
  },
  {
    name: 'Personaliseer elke timer',
    text: 'Verander de naam van elke timer om te weten wat er kookt: "Oven", "Rijst", "Saus", enz.',
  },
  {
    name: 'Bedien via het mobiele dock',
    text: 'Op mobiel verschijnen actieve timers in een schuifbaar dock onderaan. Pauzeer of herstart direct vanaf daar.',
  },
  {
    name: 'Ontvang meldingen',
    text: 'Geef toestemming voor meldingen zodat de browser je waarschuwt wanneer de tijd om is.',
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
  slug: 'keukentimer',
  title: 'Meervoudige Keukentimer',
  description: 'Beheer meerdere kooktijden gelijktijdig. Onafhankelijke alarmen, ideaal voor chefs en organisatie in de keuken (Mise en Place).',
  faqTitle: 'Veelgestelde Vragen',
  bibliographyTitle: 'Referenties',
  ui: {
    addTimer: 'Timer Toevoegen',
    stopAll: 'Alles Stoppen',
    defaultName: 'Timer',
    newTimerName: 'Nieuwe Timer',
    timerDefault1: 'Timer 1',
    timerDefault2: 'Timer 2',
    timerDefault3: 'Timer 3',
    label: 'Label',
    hours: 'Uren',
    minutes: 'Min',
    seconds: 'Sec',
    ready: 'Klaar',
    start: 'Start',
    pause: 'Pauze',
    reset: 'Reset',
    addOneMin: '+1 min',
    addFiveMin: '+5 min',
    statusReady: 'Klaar',
    statusRunning: 'Loopt',
    statusPaused: 'Gepauzeerd',
    statusFinished: 'TIJD!',
    finishNotification: 'Timer voltooid voor',
  },
  faq,
  bibliography: [
    {
      name: 'Voedselveiligheid: USDA Guidelines',
      url: 'https://www.fsis.usda.gov/',
    },
    {
      name: 'Mise en Place - De Professionele Keuken',
      url: 'https://www.escoffier.edu/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Tijdmanagement in de Keuken',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De professionele keuken draait om <strong>nauwkeurig tijdbeheer</strong>. Het Franse concept <em>"Mise en Place"</em> omvat tijd als een essentieel ingrediënt.',
    },
    {
      type: 'paragraph',
      html: 'Deze <strong>Multi-Timer</strong> is ontworpen voor hobbykoks en professionals die meerdere gerechten tegelijkertijd moeten coördineren.',
    },
    {
      type: 'title',
      text: 'De Rol van Temperatuur en Tijd',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Voedsel', 'Gaarheid', 'Tijd', 'Voordeel'],
      rows: [
        ['Zachtgekookt ei', 'Vloeibaar eigeel', '3-4 min', 'Zachte eiwitten'],
        ['Halfzacht ei', 'Romig eigeel', '5-6 min', 'Perfecte balans'],
        ['Hardgekookt ei', 'Volledig gestold', '9-11 min', 'Maximale stevigheid'],
        ['Vlees - Schroei', 'Hoge hitte', '1-2 min/kant', 'Maillard-reactie'],
        ['Vlees - Rusten', 'Rustfase', '5-20 min', 'Sapverdeling'],
      ],
    },
    {
      type: 'title',
      text: 'Voedselveiligheid: De Gevarenzone',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tijd beïnvloedt ook de veiligheid. De bacteriële "Gevarenzone" ligt tussen 5°C en 65°C. Voedsel mag hier niet langer dan <strong>2 uur</strong> blijven.',
    },
    {
      type: 'title',
      text: 'Professionele Organisatiewerken',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Spreid de eindtijden:</strong> als alles tegelijk klaar is, raak je gestrest bij het opdienen.',
        '<strong>Gebruik restwarmte:</strong> zet het vuur 1-2 minuten eerder uit.',
        '<strong>Geef timers een naam:</strong> gebruik labels voor "Oven", "Rijst" of "Saus".',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Profi-tip:</strong> precisie in tijd onderscheidt een chef-kok van een hobbykok. Gebruik technologie voor constante resultaten.',
    },
  ],
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
