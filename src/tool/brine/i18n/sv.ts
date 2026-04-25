import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "Kalkylator för Balanslag";
const description = "Vetenskapen om balans för saftigt kött och perfekta fermentat. Beräkna den exakta salthalten baserat på den totala vikten av ingrediens och vatten.";
const faq = [
  {
    question: "Vad är metoden med balanslag?",
    answer: "Balansmetoden beräknar saltet baserat på den totala vikten (vatten + ingrediens), inte bara vattnet. Detta garanterar en konsekvent saltkoncentration oavsett mängden ingrediens du använder.",
  },
  {
    question: "Hur mycket salt behöver jag för att pickla?",
    answer: "För fermenterade grönsaker (gurka, surkål, kimchi) rekommenderas mellan 2 % och 3 % salt. För kött, mellan 1,5 % och 2 %. Kalkylatorn ger dig den exakta mängden baserat på vikten av dina ingredienser.",
  },
  {
    question: "Kan jag frysa köttet efter rimning?",
    answer: "Ja, det är idealiskt. Saltlaken skyddar mot frysbränna och köttet är redo att tillagas vid upptining. Undvik dock att frysa fermenterade grönsaker eftersom de blir mosiga.",
  },
  {
    question: "Varför tillsätta socker i saltlaken?",
    answer: "Socker har två funktioner: det underlättar Maillardreaktionen (bryning) på kött och balanserar sältan utan att göra produkten söt. Det förvandlar inte din saltlake till en efterrätt.",
  },
];
const howTo = [
  {
    name: "Bestäm ditt mål",
    text: "Bestäm om du ska rimma kött (1,5–2 %), fermentera (2–3 %), göra såser (3,5 %) eller göra långtidskonserver (5 % +). Varje typ har olika tid och syfte.",
  },
  {
    name: "Väg ingrediens och vatten",
    text: "Väg produkten (kött, grönsaker) och vattnet exakt. Precision är avgörande: även 5 g skillnad ändrar resultatet. Använd en precisionsvåg.",
  },
  {
    name: "Beräkna med verktyget",
    text: "Ange vikterna i kalkylatorn och justera salthalten efter din produkttyp. Verktyget talar om exakt hur mycket salt och socker du behöver.",
  },
  {
    name: "Lös upp och blanda",
    text: "Lös upp saltet helt i kallt vatten innan du tillsätter produkten. För kött, se till att saltlaken täcker allt. För fermentat måste produkten vara helt nedsänkt.",
  },
  {
    name: "Fermentera eller rimma",
    text: "Kyl beroende på typ: 4–48 timmar för kött, 1–3 veckor för fermentat. Den exakta tiden beror på temperaturen och din personliga smak.",
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
  slug: "saltlake",
  title: "Kalkylator för Balanslag",
  description: "Vetenskapen om balans för saftigt kött och perfekta fermentat. Beräkna den exakta salthalten baserat på den totala vikten av ingrediens och vatten.",
  ui: {
    calculator: "Kalkylator",
    subtitle: "Ange vikterna för att beräkna den perfekta balansen.",
    productWeight: "Produktens vikt (g)",
    waterWeight: "Vattnets vikt (g)",
    desiredSalinity: "Önskad salthalt",
    meat: "Kött (1,5 %)",
    fermented: "Fermentat (2,0 %)",
    sauces: "Såser (3,5 %)",
    preserves: "Konserver (5,0 %)",
    addSugar: "Tillsätt socker",
    sugarHint: "Balanserar smaken och hjälper till vid bryning (50 % av saltet)",
    saltNeeded: "Salt som behövs",
    sugarOptional: "Socker (valfritt)",
    estimatedTime: "Beräknad tid",
    product: "Produkt",
    total: "Totalt",
    unitGrams: "gram",
    timeMeatsLabel: "Tid (kött)",
    timeMeatsDuration: "4–48 timmar",
    timeVegetablesLabel: "Tid (grönsaker)",
    timeVegetablesDuration: "1–3 veckor",
    timePreservesLabel: "Tid (konserver)",
    timePreservesDuration: "1+ månader",
  },
  faqTitle: "Vanliga frågor",  faq,
  howTo,  seo: [
    {
      type: 'title',
      text: 'Mästarguide för Balanslag och Fermentering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Balanslag</strong> är den ultimata tekniken för att garantera saftiga och säkra resultat. Till skillnad från traditionella metoder beräknar denna saltet baserat på den <strong>totala vikten</strong> av vatten och produkt, vilket säkerställer en konstant salthalt oavsett behållarens volym.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1,5 - 2 %',
          label: 'Idealiskt förhållande kött',
          icon: 'mdi:food-steak',
        },
        {
          value: '2,5 - 3 %',
          label: 'Förhållande fermentat',
          icon: 'mdi:flask-outline',
        },
        {
          value: '18–22 °C',
          label: 'Fermenteringstemp.',
          icon: 'mdi:thermometer',
        },
        {
          value: '0,5 %',
          label: 'Balanssocker',
          icon: 'mdi:shaker-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'Skillnader mellan torrimning och våtrimning',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Torrimning (Dry Brining)',
          icon: 'mdi:shaker-outline',
          description: 'Saltet appliceras direkt på produktens yta utan att använda ytterligare vatten.',
          points: [
            'Betydligt krispigare skinn på fågel',
            'Mer koncentrerad smak hos ingrediensen',
            'Tar mindre plats i kylen',
            'Idealiskt för biffar och hela kycklingar',
          ],
        },
        {
          title: 'Våtrimning (Wet Brining)',
          icon: 'mdi:water',
          description: 'Produkten sänks ner i en lösning av vatten och salt beräknad genom balans.',
          highlight: true,
          points: [
            'Överlägsen fuktöverföring',
            'Gör det möjligt att tillsätta aromer (kryddor)',
            'Jämnare rimning i stora bitar',
            'Idealiskt för kalkon, fläskytterfilé och fisk',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tider och salthalter beroende på användning',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Kategori', 'Salthalt (%)', 'Minsta tid', 'Huvudmål'],
      rows: [
        ['Fågel och fläsk', '1,5 % – 2,0 %', '12 – 24 timmar', 'Saftighet och mörhet'],
        ['Vit fisk', '1,0 % – 1,5 %', '20 – 45 minuter', 'Fasthet i köttet'],
        ['Lakto-fermentat', '2,5 % – 3,0 %', '7 – 21 dagar', 'Mikrobiologisk säkerhet'],
        ['Såser och konserver', '3,5 % – 5,0 %', '1+ månad', 'Långsiktigt bevarande'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Identifiering av problem vid rimning',
      html: 'Om saltlaken luktar illa (inte surt), visar färgat mögel (svart, rosa) eller produkten blir extremt mjuk, släng den. Vitt ytmögel (Kahm-jäst) är normalt vid fermentering och kan tas bort.',
    },
    {
      type: 'title',
      text: 'Ordlista för rimningsexperten',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Osmos',
          definition: 'Fysisk process genom vilken salt tränger in i livsmedlets celler för att balansera koncentrationerna.',
        },
        {
          term: 'Denaturering',
          definition: 'Saltets effekt på proteiner som gör att dessa kan behålla mer vatten under tillagningen.',
        },
        {
          term: 'Kahm-jäst',
          definition: 'Tunt vitt lager som ibland dyker upp på ytan av fermentat; det är ofarligt men tyder på brist på syra.',
        },
        {
          term: 'Mjölksyrajäsning',
          definition: 'Anaerob fermentering där bakterier omvandlar socker till mjölksyra, vilket bevarar livsmedlet.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Vattenkvalitet',
      html: 'Undvik alltid kranvatten med mycket klor, eftersom det kan hämma tillväxten av goda bakterier i dina fermenteringar. Använd filtrerat vatten eller låt vattnet stå i 24 timmar.',
    },
    {
      type: 'paragraph',
      html: 'Vår balanskalkylator eliminerar gissningarna från dina recept och låter dig laga mat med en yrkesmans självförtroende.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
