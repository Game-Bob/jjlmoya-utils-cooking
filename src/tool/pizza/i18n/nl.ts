import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "Napolitaans Pizzadeeg Calculator";
const description = "Bereken de exacte verhoudingen van bloem, water, zout en gist voor authentieke Napolitaanse pizza thuis.";
const faq = [
  {
    question: "Wat is de ideale hydratatie voor Napolitaanse pizza?",
    answer: "Volgens het AVPN-protocol is de standaard hydratatie 63-67%. Voor beginners is 60-62% makkelijker te hanteren. Gevorderde pizzabakkers met sterke bloem (W300+) kunnen 70-75% gebruiken voor uitstekende resultaten.",
  },
  {
    question: "Hoe lang moet het deeg rijpen?",
    answer: "Minimaal 24 uur in de koelkast (4°C) om enzymen te activeren. Optimaal is 48-72 uur. Boven de 72 uur heb je zeer sterke bloem (W300+) nodig, anders wordt het deeg te zuur.",
  },
  {
    question: "Kan het met droge gist?",
    answer: "Ja. Droge gist staat gelijk aan 0,4x de hoeveelheid verse gist (1g droog = 2,5g vers). De kwaliteit is vergelijkbaar, maar verse gist geeft een vollere smaak.",
  },
  {
    question: "Kan ik Napolitaanse pizza maken in een gewone oven?",
    answer: "Ja, maar met aanpassingen. Verwarm de oven voor op de maximale stand (250-280°C) met een pizzasteen gedurende 45-60 minuten. De baktijd is dan 5-7 minuten.",
  },
  {
    question: "Welke bloem moet ik gebruiken?",
    answer: "Ideaal: Caputo Pizzeria (W260-280) of Manitoba (W350-400). Alternatief: Elke bloem met 11-13g eiwit per 100g. Vermijd zwakke bloem (W130-160) voor lange rijping.",
  },
  {
    question: "Waarom scheurt het deeg bij het uitrekken?",
    answer: "De gluten zijn niet ontspannen. Laat de deegbollen 2-3 uur op kamertemperatuur rusten. Als het blijft gebeuren, was het kneden onvoldoende of is de bloem te zwak.",
  },
];
const howTo = [
  {
    name: "Bereken de verhoudingen",
    text: "Gebruik deze calculator om de exacte grammen van elk ingrediënt te krijgen op basis van het aantal pizza's en het gewicht van de deegbollen.",
  },
  {
    name: "Meng het deeg",
    text: "Combineer bloem met lauwwarm water (22-25°C), zout en gist. Kneed 8-10 minuten met een machine of 15-20 minuten met de hand.",
  },
  {
    name: "Bulkrijs",
    text: "Laat het hele deeg 1-2 uur op kamertemperatuur rijzen tot het in volume verdubbeld is.",
  },
  {
    name: "Bolletjes maken",
    text: "Verdeel het deeg in porties van het aangegeven gewicht. Laat ze rusten voordat je de definitieve bollen vormt.",
  },
  {
    name: "Lange rijping",
    text: "Plaats de bollen in een luchtdichte doos in de koelkast (4°C) voor 24-72 uur. Dit is de cruciale stap voor smaak en verteerbaarheid.",
  },
  {
    name: "Uitrekken en bakken",
    text: "30 minuten voor het bakken uit de koeling halen. Vanuit het midden naar buiten uitrekken. Bakken op maximale temperatuur.",
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
  slug: "napolitaans-pizzadeeg-calculator",
  title,
  description,
  faqTitle: "Veelgestelde Vragen",
  ui: {
    parameters: "Parameters",
    quantity: "Aantal",
    pizzas: "pizzas",
    weight: "Gewicht per bol",
    small: "Klein (180g)",
    standard: "Standaard (260g)",
    large: "Groot (350g)",
    hydration: "Hydratatie",
    classic: "Klassiek (55-60%)",
    modern: "Modern (65-70%)",
    high: "Hoog (75%+)",
    salt: "Zout",
    fermentation_tip_title: "Rijpingstip",
    fermentation_tip:
      "Voor een lichter verteerbaar deeg laat je het 24u in de koelkast (4°C) rijpen met <strong>0.3g</strong> verse gist per 100g bloem.",
    your_recipe: "Jouw Recept",
    fresh_yeast: "Verse Gist",
    dry_yeast: "Droog",
    flour: "Bloem (W260-300)",
    water: "Water",
    salt_label: "Zeezout",
    yeast: "Gist",
    yeast_note: "Voor 8u bij 20°C",
    total_weight: "Totaal Deeggewicht",
    approx: "ca.",
    visual_note:
      "De visuele grootte staat voor de geschatte diameter van de pizza op basis van het gewicht van de deegbol.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Meestergids voor Authentiek Napolitaans Pizzadeeg',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Napolitaanse pizza</strong> is cultureel erfgoed. Succes hangt af van de precisie tussen tijd, temperatuur en hydratatie.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '480°C',
          label: 'Baktemperatuur',
          icon: 'mdi:fire',
        },
        {
          value: '60-90s',
          label: 'Baktijd',
          icon: 'mdi:clock-fast',
        },
        {
          value: '65%',
          label: 'Std. Hydratatie',
          icon: 'mdi:water-percent',
        },
        {
          value: 'W280',
          label: 'Bloemsterkte',
          icon: 'mdi:grain',
        },
      ],
    },
    {
      type: 'title',
      text: 'Het Cruciale Belang van Hydratatie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hydratatie (percentage water t.o.v. bloemgewicht) bepaalt de textuur van de <strong>cornicione</strong> (korst).',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Hydratatie 55 tot 60%',
          icon: 'mdi:water-percent',
          description: 'Zeer makkelijk te verwerken, ideaal voor beginners en thuisovens.',
          points: [
            'Eenvoudige glutenvorming',
            'Minder kleverig deeg',
            'Stevige en knapperige korst',
          ],
        },
        {
          title: 'Hydratatie 63 tot 67%',
          icon: 'mdi:water',
          description: 'De AVPN-standaard. Perfecte balans voor een licht deeg.',
          highlight: true,
          points: [
            'Traditionele elastische textur',
            'Ideaal voor houtovens',
            'Vereist gemiddelde kneedervaring',
          ],
        },
        {
          title: 'Hydratatie 70%+',
          icon: 'mdi:water-plus',
          description: 'Moderne pizza\'s met gigantische randen. Vereist geavanceerde techniek.',
          points: [
            'Extreem grote luchtbellen',
            'Zeer licht en licht verteerbaar',
            'Vereist zeer sterke bloem',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Gistsoorten en de Juiste Keuze',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Verse Bakkersgist',
          icon: 'mdi:bread-slice-outline',
          description: 'De traditionele keuze van pizzabakkers. Geeft een complexer aromaprofiel.',
          points: [
            'Diepere en schonere smaak',
            'Balanced enzymatische werking',
            'Lost makkelijk op in warm water',
            'Korte houdbaarheid',
          ],
        },
        {
          title: 'Instant Droge Gist',
          icon: 'mdi:shaker-outline',
          description: 'Veel stabieler en makkelijk te bewaren. Ideaal voor in de voorraadkast.',
          points: [
            'Lange houdbaarheid',
            'Geen voorafgaande hydratatie nodig',
            'Drie keer zo krachtig als vers',
            'Iets neutralere smaak',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Bloemgids op Basis van W-Waarde',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Bloemtype', 'Sterkte (W)', 'Rijstijd', 'Aanbevolen Gebruik'],
      rows: [
        ['Zwakke Bloem', 'W130-180', '4-8 uur', 'Snelle bakproducten'],
        ['Middelsterk', 'W200-240', '8-24 uur', 'Snelle pizza of eenvoudig brood'],
        ['Sterke Bloem', 'W260-320', '24-72 uur', 'Authentieke Napolitaanse Pizza'],
        ['Extra Sterk', 'W350+', '72+ uur', 'Zeer lange deegrijping'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Temperatuurcontrole Tijdens het Kneaden',
      html: 'Het deeg mag aan het einde van het kneaden niet warmer worden dan 24°C om de glutenstructuur niet te beschadigen.',
    },
    {
      type: 'title',
      text: 'Woordenlijst voor de Toekomstige Pizzabakker',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cornicione',
          definition: 'De reizende en luchtige rand van de Napolitaanse pizza.',
        },
        {
          term: 'Rijping',
          definition: 'Enzymatisch proces waarbij eiwitten en suikers worden afgebroken voor betere smaak en verteerbaarheid.',
        },
        {
          term: 'Deegontwikkeling',
          definition: 'Het punt waarop het deeg zijn optimale elasticiteit bereikt.',
        },
        {
          term: 'Autolyse',
          definition: 'Rustperiode van alleen bloem en water om de glutenvorming te vergemakkelijken.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'De Koelkast Truc',
      html: 'Een rijping van 24 uur bij 4°C zorgt voor complexe smaken die op kamertemperatuur onmogelijk zijn.',
    },
    {
      type: 'paragraph',
      html: 'Onze calculator automatiseert de berekeningen zodat jij je kunt richten op wat echt telt: techniek en passie.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
