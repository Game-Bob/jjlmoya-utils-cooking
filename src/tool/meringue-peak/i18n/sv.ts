import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Maräng & Äggvitekalkylator";
const description = "Beräkna den exakta mängden socker för fransk, italiensk eller schweizisk maräng baserat på vikten på dina äggvitor. Visptider och konditoritips.";
const faq = [
  {
    question: 'Vilket förhållande mellan socker och äggvita är idealiskt?',
    answer: 'Gyllene regeln inom bakning är förhållandet 1:2. För varje gram äggvita bör du använda två gram socker för att säkerställa en stabil och fast struktur.',
  },
  {
    question: 'Hur vet jag när äggvitan är hårt vispad?',
    answer: 'Hårda toppar uppnås när marängen, när du lyfter vispen, bildar en spets som står rakt upp utan att böja sig. Dessutom ska marängen se mycket glansig ut.',
  },
  {
    question: 'Vilken maräng är mest stabil för dekoration?',
    answer: 'Italiensk maräng är den mest stabila av de tre huvudtyperna, tack vare att den heta sockerlagen kokar proteinerna i äggvitan lätt, vilket skapar en mer värmetålig struktur.',
  },
  {
    question: 'Kan man använda pastöriserade äggvitor på dunk?',
    answer: 'Ja, det går, men de brukar ta lite längre tid att vispa upp än färska äggvitor. Ett tips är att tillsätta en nypa vinsyra eller några droppar citron för stabilitet.',
  },
];
const howTo = [
  {
    name: 'Väg äggvitorna',
    text: 'Använd en digital våg för att få fram den exakta vikten på äggvitorna (utan spår av gula).',
  },
  {
    name: 'Ange vikt',
    text: 'Skriv in vikten i vår kalkylator för att se hur mycket socker som behövs.',
  },
  {
    name: 'Välj teknik',
    text: 'Välj om du ska göra fransk (enkel), italiensk (stabil) eller schweizisk (silkeslen) maräng.',
  },
  {
    name: 'Vispa och kontrollera',
    text: 'Följ de beräknade tiderna och kontrollera konsistensen tills du når hårda toppar.',
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
  slug: 'marangkalkylator-aggvita',
  title,
  description,
  faqTitle: 'Vanliga Frågor',
  ui: {
    whitesLabel: 'Vikt på Äggvitorna',
    whitesPlaceholder: 'Ex. 120',
    whitesUnit: 'g',
    typeLabel: 'Typ av Maräng',
    typeFrench: 'Fransk',
    typeItalian: 'Italiensk',
    typeSwiss: 'Schweizisk',
    timesHeading: 'Beräknade tider (vispning på medel/hög hastighet)',
    stageSpumado: 'Skummig',
    stageSpumadoDesc: 'Stora bubblor, som såpvatten.',
    stageSoftPeaks: 'Mjuka Toppar',
    stageSoftPeaksDesc: 'Toppen böjer sig när du lyfter vispen.',
    stageStiffPeaks: 'Hårda Toppar',
    stageStiffPeaksDesc: 'Fast och glansig spets.',
    frenchSugarWhite: 'Strösocker',
    frenchSugarPowder: 'Florsocker',
    frenchTip: 'Fransk maräng är den vanligaste, perfekt för att baka maränger. Inte lämplig att äta rå.',
    frenchTime1: '1-2 min',
    frenchTime2: '3-5 min',
    frenchTime3: '7-9 min',
    italianSugarSyrup: 'Socker till lag',
    italianWater: 'Vatten',
    italianTip: 'Italiensk maräng är mest stabil. Görs med sockerlag som håller 118°C. Perfekt för tårtdekoration.',
    italianTime1: '2 min',
    italianTime2: '5 min',
    italianTime3: '10-12 min',
    swissSugarWhite: 'Strösocker',
    swissMaxTemp: 'Max Temp',
    swissTip: 'Schweizisk maräng värms i vattenbad tills sockret löst sig. Utmärkt för smörkrämer.',
    swissTime1: '1-2 min',
    swissTime2: '4-6 min',
    swissTime3: '8-10 min',
    invalidWeightError: 'Ange en giltig vikt',
  },
  faq,
  howTo, seo: [
    {
      type: 'title',
      text: 'Mästarguide för Maräng och Äggvita',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att bemästra <strong>äggvita</strong> och maräng tar din bakning till en professionell nivå. Nyckeln ligger i precisionen i vikten.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:2',
          label: 'Ratio Vita:Socker',
          icon: 'mdi:scale-balance',
        },
        {
          value: '118°C',
          label: 'Italiensk lag',
          icon: 'mdi:thermometer-high',
        },
        {
          value: '60°C',
          label: 'Schweiziskt vattenbad',
          icon: 'mdi:beaker-question-outline',
        },
        {
          value: '0%',
          label: 'Fetttolerans',
          icon: 'mdi:close-circle-outline',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Fransk Maräng',
          icon: 'mdi:baguette',
          description: 'Enklast men minst stabil.',
          points: [
            'Idealisk för bakning',
            'Lätt textur',
            'Måste tillagas',
            'Snabb att göra',
          ],
        },
        {
          title: 'Italiensk Maräng',
          icon: 'mdi:pizza',
          description: 'Mest stabil.',
          highlight: true,
          points: [
            'Perfekt för dekorering',
            'Går att äta rå',
            'Tål fukt bra',
            'Tät och glansig',
          ],
        },
        {
          title: 'Schweizisk Maräng',
          icon: 'mdi:cheese',
          description: 'Uppvärmd i vattenbad.',
          points: [
            'Bas för smörkrämer',
            'Silkeslen textur',
            'Utmärkt för fyllningar',
            'Bra stabilitet',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Tricket med metallskål',
      html: 'Rengör skålen med vinäger eller citron. Minsta spår av fett hindrar äggvitorna från att lyfta.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
