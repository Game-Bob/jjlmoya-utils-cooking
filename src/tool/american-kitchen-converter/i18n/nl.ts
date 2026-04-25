import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Amerikaanse Keukénomzetter: Cups naar Gram en Temperaturen";
const description = "Converteer cups, eetlepels en Fahrenheit naar het metrische systeem. Het kompas om Amerikaanse recepten met professionele precisie te ontcijferen.";
const faq = [
  {
    question: 'Wat is het verschil tussen 1 cup en 250ml?',
    answer: '1 Amerikaanse cup = 236,588ml, niet 250ml. Voor praktische doeleinden gebruiken we 240ml. Hoewel dit verschil van 4% klein lijkt, kan het gevoelige recepten zoals macarons of mousses beïnvloeden.',
  },
  {
    question: 'Waarom weegt bloem niet altijd hetzelfde?',
    answer: 'Omdat bloem in de loop van de tijd en door transport wordt samengedrukt. Vers gezeefde bloem weegt minder dan bloem die al een tijdje in de voorraadkast staat. Daarom wegen professionele bakkers altijd, in plaats van volume te meten.',
  },
  {
    question: 'Wat is het verschil tussen Tbsp en tsp?',
    answer: '1 Tablespoon (Tbsp/Eetlepel) = 15ml. 1 Teaspoon (tsp/Theelepel) = 5ml. Een eetlepel is 3 keer een theelepel. In bakrecepten komen fouten met kruiden (gemeten in tsp) veel voor.',
  },
  {
    question: 'Is een US cup hetzelfde als een Imperial cup?',
    answer: 'Nee. 1 US cup = 236ml. 1 Imperial cup (UK) = 284ml. Een verschil van 20%. De meeste Amerikaanse blogs gebruiken US cups. Als het recept het niet specificeert, ga dan uit van US.',
  },
  {
    question: 'Welke temperatuur komt overeen met "gas 4" van de oven?',
    answer: 'Gas 4 = 180°C = 350°F. Dit is de Britse schaal. In onze keuken zoeken we de equivalente waarde op jouw oven: sommige gebruiken gasstanden, andere elektronische graden.',
  },
];
const howTo = [
  {
    name: 'Selecteer het type conversie',
    text: 'Kies tussen Cups naar Gram, Eetlepels/Theelepels naar Gram, of Fahrenheit naar Celsius.',
  },
  {
    name: 'Kies het ingrediënt',
    text: 'Elk voedingsmiddel heeft een andere dichtheid. Bloem, suiker, boter: ze wegen allemaal anders.',
  },
  {
    name: 'Voer de hoeveelheid in',
    text: 'Typ het aantal cups, lepels of graden. De calculator berekent direct de equivalente waarde.',
  },
  {
    name: 'Pas je recept aan',
    text: 'Met de exacte conversie kun je nu het Amerikaanse recept met professionele precisie volgen.',
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
  slug: 'amerikaanse-keuken-eenheden-omzetter',
  title: 'Amerikaanse Keukénomzetter: Cups naar Gram en Temperaturen',
  description: 'Converteer cups, eetlepels en Fahrenheit naar het metrische systeem. Het kompas om Amerikaanse recepten met professionele precisie te ontcijferen.',
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    copied: 'Gekopieerd',
    noHistory: 'Geen geschiedenis',
    load: 'Laden',
    delete: 'Verwijderen',
    tabCups: 'Cups naar Gram',
    tabSpoons: 'Lepels naar Gram',
    tabTemperatures: 'Temperaturen',
    tabCupsAriaLabel: 'Cups naar Gram',
    tabSpoonsAriaLabel: 'Lepels naar Gram',
    tabTempsAriaLabel: 'Oventemperaturen',
    stepSelectIngredient: 'Selecteer het Ingrediënt',
    stepHowManyCups: 'Hoeveel Cups?',
    stepSelectMeasure: 'Selecteer de Maat',
    stepQuantity: 'Hoeveelheid',
    stepOvenConversion: 'Oven Conversie',
    stepFrequentTemps: 'Veelvoorkomende Recepttemperaturen',
    cupFlour: 'Bloem',
    cupFlourSub: '120g / cup',
    cupWhiteSugar: 'Witte Suiker',
    cupWhiteSugarSub: '200g / cup',
    cupBrownSugar: 'Bruine Suiker',
    cupBrownSugarSub: '220g / cup',
    cupPowderSugar: 'Poedersuiker',
    cupPowderSugarSub: '115g / cup',
    cupButter: 'Boter',
    cupButterSub: '227g / cup',
    cupCocoa: 'Cacaopoeder',
    cupCocoaSub: '85g / cup',
    cupLiquids: 'Vloeistoffen',
    cupLiquidsSub: '240g / cup',
    cupOats: 'Havermout',
    cupOatsSub: '90g / cup',
    cupFlourAriaLabel: 'Bloem',
    cupWhiteSugarAriaLabel: 'Witte Suiker',
    cupBrownSugarAriaLabel: 'Bruine Suiker',
    cupPowderSugarAriaLabel: 'Poedersuiker',
    cupButterAriaLabel: 'Boter',
    cupCocoaAriaLabel: 'Cacao',
    cupLiquidsAriaLabel: 'Vloeistof',
    cupOatsAriaLabel: 'Havermout',
    stepperMinus: 'Aftrekken',
    stepperPlus: 'Optellen',
    cupsAmountLabel: 'Aantal Cups',
    spoonQuantityLabel: 'Hoeveelheid',
    cupQuick1_4: '1/4 Cup',
    cupQuick1_3: '1/3 Cup',
    cupQuick1_2: '1/2 Cup',
    cupQuick1: '1 Cup',
    unitGrams: 'Gram',
    unitGramsML: 'Gram / Milliliter',
    spoonMeasureLabel: 'Selecteer de Maat',
    spoonTablespoon: 'Eetlepel (Tbsp)',
    spoonTeaspoon: 'Theelepel (tsp)',
    spoonTablespoonAriaLabel: 'Eetlepel',
    spoonTeaspoonAriaLabel: 'Theelepel',
    spoonSelectIngredient: 'Selecteer het Ingrediënt',
    spoonLeavening: 'Rijsmiddel',
    spoonLeaveningSub: 'Bakpoeder',
    spoonSalt: 'Fijn Zout',
    spoonSaltSub: 'Mineraal',
    spoonSugar: 'Witte Suiker',
    spoonSugarSub: 'Kristalsuiker',
    spoonLiquids: 'Vloeistoffen',
    spoonLiquidsSub: 'Water, Olie',
    spoonLeavingAriaLabel: 'Bakpoeder',
    spoonSaltAriaLabel: 'Zout',
    spoonSugarAriaLabel: 'Witte Suiker',
    spoonLiquidsAriaLabel: 'Vloeistof',
    spoonQuick1_4: '1/4',
    spoonQuick1_2: '1/2',
    spoonQuick1: '1',
    spoonQuick2: '2',
    tempFahrenheit: 'Fahrenheit (°F)',
    tempCelsius: 'Celsius (°C)',
    tempFahrenheitAriaLabel: 'Fahrenheit',
    tempCelsiusAriaLabel: 'Celsius',
    tempPreset275: '275°F',
    tempPreset275Desc: '135°C - Drogen',
    tempPreset275AriaLabel: 'Stel 275 Fahrenheit in',
    tempPreset325: '325°F',
    tempPreset325Desc: '165°C - Compact gebak',
    tempPreset325AriaLabel: 'Stel 325 Fahrenheit in',
    tempPreset350: '350°F',
    tempPreset350Desc: '175°C - Standaard gebak',
    tempPreset350AriaLabel: 'Stel 350 Fahrenheit in',
    tempPreset400: '400°F',
    tempPreset400Desc: '200°C - Brood / Taart',
    tempPreset400AriaLabel: 'Stel 400 Fahrenheit in',
    tempPreset425: '425°F',
    tempPreset425Desc: '220°C - Pizza / Bladerdeeg',
    tempPreset425AriaLabel: 'Stel 425 Fahrenheit in',
  },
  seo: [
    {
      type: 'title',
      text: 'Meestergids voor de Amerikaanse Keukénomzetter',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het omzetten van <strong>cups naar gram</strong> of <strong>Fahrenheit naar Celsius</strong> is de eerste stap om internationale recepten onder de knie te krijgen. De Amerikaanse keuken is gebaseerd op volume, wat een variabiliteit van tot wel 25% introduceert bij droge ingrediënten zoals bloem.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '120g',
          label: '1 Cup Bloem',
          icon: 'mdi:grain',
        },
        {
          value: '227g',
          label: 'Stick Boter',
          icon: 'mdi:cube-outline',
        },
        {
          value: '175°C',
          label: 'Gelijk aan 350°F',
          icon: 'mdi:thermometer',
        },
        {
          value: '240ml',
          label: 'Volume 1 Cup',
          icon: 'mdi:water-percent',
        },
      ],
    },
    {
      type: 'title',
      text: 'Cruciale Verschillen tussen Volume en Gewicht',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Meten op Volume (Cups)',
          icon: 'mdi:cup-water',
          description: 'Gebruikt in Amerikaanse huisrecepten. Meet de ruimte die het ingrediënt inneemt.',
          points: [
            'Zeer afhankelijk van hoe compact het zit',
            'Veelvoorkomende fout van 20-30% bij bloem',
            'Inconsistent tussen verschillende merken cups',
            'Moet eerst gezeefd worden voor meer precisie',
          ],
        },
        {
          title: 'Meten op Gewicht (Gram)',
          icon: 'mdi:scale-balance',
          description: 'De standaard in de professionele en Europese bakkerij. Absolute precisie.',
          highlight: true,
          points: [
            'Altijd op +/- 1g nauwkeurig',
            'Consistente en herhaalbare resultaten',
            'Minder afwas (slechts één kom)',
            'Vergemakkelijkt wiskundig schalen',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Gelijkwaardigheid van Veelvoorkomende Ingrediënten',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Ingrediënt', '1 Cup (Volume)', 'Gram (Gewicht)', 'Dichtheid'],
      rows: [
        ['Tarwebloem', '1 Cup', '120g', 'Laag'],
        ['Witte Suiker', '1 Cup', '200g', 'Gemiddeld'],
        ['Bruine Suiker', '1 Cup', '220g (aangedrukt)', 'Hoog'],
        ['Boter', '1 Cup (2 sticks)', '227g', 'Hoog'],
        ['Cacaopoeder', '1 Cup', '85g', 'Zeer Laag'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Is je gebak te droog uitgekomen?',
      html: 'Het meest voorkomende probleem bij het gebruik van cups is het "scheppen met de cup" direct uit de zak bloem. Dit drukt de bloem samen, waardoor je tot wel 40g extra bloem per cup kunt toevoegen. De oplossing is <strong>altijd omzetten naar gram</strong> met onze calculator.',
    },
    {
      type: 'title',
      text: 'Glossarium van Amerikaanse Eenheden',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cup (Kop)',
          definition: 'Volume-eenheid gelijk aan ongeveer 240ml. De basis van de Amerikaanse keuken.',
        },
        {
          term: 'Tbsp (Tablespoon)',
          definition: 'Eetlepel, gelijk aan 15ml of 3 teaspoons.',
        },
        {
          term: 'tsp (Teaspoon)',
          definition: 'Theelepel, gelijk aan 5ml. Cruciaal voor rijsmiddelen en zout.',
        },
        {
          term: 'Stick of Butter',
          definition: 'Gebruikelijk formaat boter in de VS dat exact 113,5g weegt (halve cup).',
        },
      ],
    },
    {
      type: 'tip',
      title: 'De Lepeltruc',
      html: 'Als je geen weegschaal hebt en cups MOET gebruiken, vul de cup dan met een lepel zonder aan te drukken en strijk het af met een mes. Dit is veel nauwkeuriger dan de cup direct in de bloem te steken.',
    },
    {
      type: 'paragraph',
      html: 'Het gebruik van een professionele omzetter verandert de frustratie van buitenlandse recepten in het succes van perfect gebak.',
    },
  ],
  faq: [
    {
      question: 'Wat is het verschil tussen 1 cup en 250ml?',
      answer: '1 Amerikaanse cup = 236,588ml, niet 250ml. Voor praktische doeleinden gebruiken we 240ml. Hoewel dit verschil van 4% klein lijkt, kan het gevoelige recepten zoals macarons of mousses beïnvloeden.',
    },
    {
      question: 'Waarom weegt bloem niet altijd hetzelfde?',
      answer: 'Omdat bloem in de loop van de tijd en door transport wordt samengedrukt. Vers gezeefde bloem weegt minder dan bloem die al een tijdje in de voorraadkast staat. Daarom wegen professionelle bakkers altijd, in plaats van volume te meten.',
    },
    {
      question: 'Wat is het verschil tussen Tbsp en tsp?',
      answer: '1 Tablespoon (Tbsp/Eetlepel) = 15ml. 1 Teaspoon (tsp/Theelepel) = 5ml. Een eetlepel is 3 keer een theelepel. In bakrecepten komen fouten met kruiden (gemeten in tsp) veel voor.',
    },
    {
      question: 'Is een US cup hetzelfde als een Imperial cup?',
      answer: 'Nee. 1 US cup = 236ml. 1 Imperial cup (UK) = 284ml. Een verschil van 20%. De meeste Amerikaanse blogs gebruiken US cups. Als het recept het niet specificeert, ga dan uit van US.',
    },
    {
      question: 'Welke temperatuur komt overeen met "gas 4" van de oven?',
      answer: 'Gas 4 = 180°C = 350°F. Dit is de Britse schaal. In onze keuken zoeken we de equivalente waarde op jouw oven: sommige gebruiken gasstanden, andere elektronische graden.',
    },
  ],
  howTo: [
    {
      name: 'Selecteer het type conversie',
      text: 'Kies tussen Cups naar Gram, Eetlepels/Theelepels naar Gram, of Fahrenheit naar Celsius.',
    },
    {
      name: 'Kies het ingrediënt',
      text: 'Elk voedingsmiddel heeft een andere dichtheid. Bloem, suiker, boter: ze wegen allemaal anders.',
    },
    {
      name: 'Voer de hoeveelheid in',
      text: 'Typ het aantal cups, lepels of graden. De calculator berekent direct de equivalente waarde.',
    },
    {
      name: 'Pas je recept aan',
      text: 'Met de exacte conversie kun je nu het Amerikaanse recept met professionele precisie volgen.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
