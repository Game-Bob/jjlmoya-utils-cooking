import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Meringue & Eiwit stijfheid Calculator";
const description = "Bereken de exacte hoeveelheid suiker voor Franse, Italiaanse of Zwitserse meringue op basis van het gewicht van je eiwitten. Kloptijden en baktips.";
const faq = [
  {
    question: 'Wat is de ideale verhouding tussen suiker en eiwit?',
    answer: 'De gulden regel in de patisserie is de verhouding 1:2. Voor elk gram eiwit gebruik je twee gram suiker om een stabiele en stevige structuur te garanderen.',
  },
  {
    question: 'Hoe weet ik of het eiwit stijf genoeg is?',
    answer: 'Eiwit is stijf (harde pieken) wanneer de meringue bij het omhoog trekken van de garde een punt vormt die rechtop blijft staan zonder om te buigen. Bovendien moet de meringue glanzen.',
  },
  {
    question: 'Welke meringue is het meest stabiel voor decoratie?',
    answer: 'Italiaanse meringue is de meest stabiele van de drie, omdat de hete suikerstroop de eiwitten licht gaart, wat een structuur creëert die beter bestand is tegen warmte.',
  },
  {
    question: 'Kun je gepasteuriseerd eiwit uit een pakje gebruiken?',
    answer: 'Ja, dat kan, maar het duurt vaak wat langer om op te kloppen dan verse eiwitten. Een tip is om een snufje wijnsteenbakpoeder of een paar druppels citroensap toe te voegen voor stabiliteit.',
  },
];
const howTo = [
  {
    name: 'Eiwit wegen',
    text: 'Gebruik een digitale weegschaal om het exacte gewicht van de eiwitten te bepalen, zonder resten eigeel.',
  },
  {
    name: 'Gewicht invoeren',
    text: 'Voer het gewicht in onze calculator in om de benodigde hoeveelheid suiker te berekenen.',
  },
  {
    name: 'Techniek kiezen',
    text: 'Kies of je een Franse (basis), Italiaanse (stabiel) of Zwitserse (zijdeachtig) meringue gaat maken.',
  },
  {
    name: 'Kloppen en controleren',
    text: 'Volg de geschatte tijden en controleer de consistentie tot je stijve pieken hebt bereikt.',
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
  slug: 'meringue-eiwit-calculator',
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    whitesLabel: 'Gewicht van de Eiwitten',
    whitesPlaceholder: 'Bijv. 120',
    whitesUnit: 'g',
    typeLabel: 'Type Meringue',
    typeFrench: 'Frans',
    typeItalian: 'Italiaans',
    typeSwiss: 'Zwitsers',
    timesHeading: 'Geschatte tijden (kloppen op middel/hoge snelheid)',
    stageSpumado: 'Schuimig',
    stageSpumadoDesc: 'Grote bellen, zoals zeepsop.',
    stageSoftPeaks: 'Zachte Pieken',
    stageSoftPeaksDesc: 'De punt buigt om bij het optillen.',
    stageStiffPeaks: 'Stijve Pieken',
    stageStiffPeaksDesc: 'Stevige en glanzende punt.',
    frenchSugarWhite: 'Kristalsuiker',
    frenchSugarPowder: 'Poedersuiker',
    frenchTip: 'Franse meringue is de meest voorkomende, ideaal voor het bakken van schuimpjes. Niet geschikt voor rauwe consumptie.',
    frenchTime1: '1-2 min',
    frenchTime2: '3-5 min',
    frenchTime3: '7-9 min',
    italianSugarSyrup: 'Suiker voor siroop',
    italianWater: 'Water',
    italianTip: 'Italiaanse meringue is het meest stabiel. Wordt gemaakt met siroop van 118°C. Perfect voor het decoreren van taarten.',
    italianTime1: '2 min',
    italianTime2: '5 min',
    italianTime3: '10-12 min',
    swissSugarWhite: 'Kristalsuiker',
    swissMaxTemp: 'Max. Temp',
    swissTip: 'Zwitserse meringue wordt au bain-marie verwarmd tot de suiker is opgelost. Ideaal voor botercrèmes.',
    swissTime1: '1-2 min',
    swissTime2: '4-6 min',
    swissTime3: '8-10 min',
    invalidWeightError: 'Voer een geldig gewicht in',
  },
  faq,
  howTo, seo: [
    {
      type: 'title',
      text: 'Meestergids voor Meringue en Eiwit',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het beheersen van <strong>stijfgeklopt eiwit</strong> verhoogt je patisserie naar een professioneel niveau. De sleutel ligt in de precisie van het gewicht.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:2',
          label: 'Ratio Eiwit:Suiker',
          icon: 'mdi:scale-balance',
        },
        {
          value: '118°C',
          label: 'Italiaanse Siroop',
          icon: 'mdi:thermometer-high',
        },
        {
          value: '60°C',
          label: 'Zwitsers bain-marie',
          icon: 'mdi:beaker-question-outline',
        },
        {
          value: '0%',
          label: 'Vettolerantie',
          icon: 'mdi:close-circle-outline',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Franse Meringue',
          icon: 'mdi:baguette',
          description: 'Eenvoudig maar minst stabiel.',
          points: [
            'Ideaal voor bakken',
            'Lichte textuur',
            'Moet gebakken worden',
            'Snel klaar',
          ],
        },
        {
          title: 'Italiaanse Meringue',
          icon: 'mdi:pizza',
          description: 'Meest stabiel.',
          highlight: true,
          points: [
            'Perfect voor decoratie',
            'Rauw eetbaar',
            'Bestand tegen vocht',
            'Dichte, glanzende structuur',
          ],
        },
        {
          title: 'Zwitserse Meringue',
          icon: 'mdi:cheese',
          description: 'Verwarmd au bain-marie.',
          points: [
            'Basis voor Buttercreams',
            'Zijdezachte textuur',
            'Uitstekend voor vullingen',
            'Goede stabiliteit',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'De truc met de metalen kom',
      html: 'Maak de kom schoon met azijn of citroen. Elk spoortje vet voorkomt dat de eiwitten stijf worden.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
