import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "Kalkylator för Neapolitansk Pizzadeg";
const description = "Beräkna de exakta proportionerna av mjöl, vatten, salt och jäst för att göra äkta neapolitansk pizza hemma.";
const faq = [
  {
    question: "Vad är den idealiska hydreringen för en neapolitansk pizza?",
    answer: "Enligt AVPN:s protokoll är standardhydreringen 63-67 %. För nybörjare är 60-62 % lättare att hantera. Erfarna pizzabagare med starkt mjöl (W300+) kan använda 70-75 % för fantastiska resultat.",
  },
  {
    question: "Hur länge ska degen jäsa?",
    answer: "Minst 24 timmar i kylskåp (4°C) för att aktivera enzymerna. Det optimala är 48-72 timmar. Utöver 72 timmar krävs ett mycket starkt mjöl (W300+), annars blir degen sur.",
  },
  {
    question: "Kan man använda torrjäst?",
    answer: "Ja. Torrjäst motsvarar 0,4x mängden färsk jäst (1g torrjäst = 2,5g färsk jäst). Kvaliteten är likvärdig, men färsk jäst ger en fylligare smak.",
  },
  {
    question: "Kan jag göra neapolitansk pizza i en vanlig ugn?",
    answer: "Ja, men med anpassningar. Förvärm ugnen till max (250-280°C) med baksten i 45-60 minuter. Gräddningen tar då 5-7 minuter istället för 60-90 sekunder.",
  },
  {
    question: "Vilket mjöl bör jag använda?",
    answer: "Idealiskt: Caputo Pizzeria (W260-280) eller Manitoba (W350-400). Alternativ: Mjöl med 11-13g protein per 100g. Undvik svagt mjöl (W130-160) för långa jäsningar.",
  },
  {
    question: "Varför går degen sönder när jag formar den?",
    answer: "Glutenet är inte avslappnat. Låt degbollarna vila 2-3 timmar i rumstemperatur. Om det återupprepas var knådningen otillräcklig eller mjölet för svagt.",
  },
];
const howTo = [
  {
    name: "Beräkna proportionerna",
    text: "Använd kalkylatorn för att få exakta gram för varje ingrediens baserat på antal pizzor och önskad degvikt per boll.",
  },
  {
    name: "Blanda degen",
    text: "Blanda mjöl med ljummet vatten (22-25°C), salt och jäst. Knåda 8-10 minuter med köksmaskin eller 15-20 minuter för hand.",
  },
  {
    name: "Bulkjsjästning",
    text: "Låt hela degen jäsa 1-2 timmar i rumstemperatur (20-25°C) tills den har fördubblat sin volym.",
  },
  {
    name: "Dela i bollar",
    text: "Dela degen i portioner av angiven vikt. Låt vila innan du formar slutgiltiga bollar.",
  },
  {
    name: "Lång jäsning",
    text: "Placera bollarna i en lufttät låda i kylskåp (4°C) i 24-72 timmar. Detta är det kritiska steget för smak och smältbarhet.",
  },
  {
    name: "Forma och grädda",
    text: "Ta ut ur kylen 30 minuter innan. Forma från mitten och utåt. Grädda på högsta temperatur.",
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
  slug: "kalkylator-neapolitansk-pizzadeg",
  title,
  description,
  faqTitle: "Vanliga Frågor",
  ui: {
    parameters: "Parametrar",
    quantity: "Antal",
    pizzas: "pizzor",
    weight: "Vikt per boll",
    small: "Liten (180g)",
    standard: "Standard (260g)",
    large: "Stor (350g)",
    hydration: "Hydrering",
    classic: "Klassisk (55-60%)",
    modern: "Modern (65-70%)",
    high: "Hög (75%+)",
    salt: "Salt",
    fermentation_tip_title: "Jäsningstips",
    fermentation_tip:
      "För en mer lättsmält deg, låt den jäsa i bulk i 24 timmar i kylskåp (4°C) med <strong>0.3g</strong> färsk jäst per 100g mjöl.",
    your_recipe: "Ditt Recept",
    fresh_yeast: "Färsk Jäst",
    dry_yeast: "Torrjäst",
    flour: "Mjöl (W260-300)",
    water: "Vatten",
    salt_label: "Havssalt",
    yeast: "Jäst",
    yeast_note: "För 8h vid 20°C",
    total_weight: "Total Degvikt",
    approx: "ca.",
    visual_note:
      "Den visuella storleken representerar pizzans ungefärliga diameter baserat på degbollens vikt.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Mästarguide till Äkta Neapolitansk Pizzadeg',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Neapolitansk pizza</strong> är ett kulturarv. Framgången ligger i precision mellan tid, temperatur och hydrering.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '480°C',
          label: 'Gräddningstemp.',
          icon: 'mdi:fire',
        },
        {
          value: '60-90s',
          label: 'I ugnen',
          icon: 'mdi:clock-fast',
        },
        {
          value: '65%',
          label: 'Standardhydrering',
          icon: 'mdi:water-percent',
        },
        {
          value: 'W280',
          label: 'Mjölstyrka',
          icon: 'mdi:grain',
        },
      ],
    },
    {
      type: 'title',
      text: 'Den Avgörande Betydelsen av Hydrering',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hydreringen (vattenmängd i förhållande till mjölvikt) avgör texturen på <strong>cornicione</strong> (kanten).',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Hydrering 55 till 60%',
          icon: 'mdi:water-percent',
          description: 'Mycket lättarbetad deg, idealisk för nybörjare och vanliga hushållsugnar.',
          points: [
            'Enkel glutennätsbildning',
            'Mindre klibbig deg',
            'Fast och krispig kant',
          ],
        },
        {
          title: 'Hydrering 63 till 67%',
          icon: 'mdi:water',
          description: 'AVPN-standarden. Perfekt balans för en luftig deg.',
          highlight: true,
          points: [
            'Traditionell elastisk struktur',
            'Idealisk för vedugn',
            'Kräver viss knådningsvana',
          ],
        },
        {
          title: 'Hydrering 70%+',
          icon: 'mdi:water-plus',
          description: 'Moderna pizzor med gigantiska kanter. Kräver avancerad teknik.',
          points: [
            'Extremt stora luftbubblor',
            'Mycket lättsmält',
            'Kräver mycket starkt mjöl',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Jästtyper och att Välja Rätt',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Färsk Bagerijäst',
          icon: 'mdi:bread-slice-outline',
          description: 'Det traditionella valet för pizzabagare. Ger en mer komplex smakprofil.',
          points: [
            'Djupare och renare smak',
            'Balanserad enzymatisk aktivitet',
            'Löser sig lätt i ljummet vatten',
            'Kort hållbarhet',
          ],
        },
        {
          title: 'Instant Torrjäst',
          icon: 'mdi:shaker-outline',
          description: 'Betydligt mer stabil och lätt att förvara i skafferiet.',
          points: [
            'Lång hållbarhet',
            'Ingen förhydrering krävs',
            'Tre gånger starkare än färsk jäst',
            'Något mer neutral smak',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Mjölguide baserad på W-Styrkeindex',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Mjöltyp', 'Styrka (W)', 'Jästid', 'Rekommenderad Användning'],
      rows: [
        ['Svagt Mjöl', 'W130-180', '4-8 timmar', 'Snabba bakverk'],
        ['Medelstarkt Mjöl', 'W200-240', '8-24 timmar', 'Snabb pizza eller enkelt bröd'],
        ['Starkt Mjöl', 'W260-320', '24-72 timmar', 'Äkta Neapolitansk Pizza'],
        ['Extra Starkt Mjöl', 'W350+', '72+ timmar', 'Extremt lång jäsning'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Temperaturkontroll vid Knådning',
      html: 'Degen bör inte överstiga 24°C vid slutet av knådningen för att inte skada glutennätet.',
    },
    {
      type: 'title',
      text: 'Ordlista för Framtida Pizzabagare',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cornicione',
          definition: 'Den luftiga och höga kanten på den neapolitanska pizzan.',
        },
        {
          term: 'Mognad',
          definition: 'Enzymatisk process där stärkelse och proteiner bryts ned för bättre smak.',
        },
        {
          term: 'Degutveckling',
          definition: 'Punkten där degen når sin optimala elasticitet.',
        },
        {
          term: 'Autolys',
          definition: 'Vila av enbart mjöl och vatten för att underlätta glutennätet.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Kylskåpstricket',
      html: 'En 24-timmars jäsning vid 4°C skapar komplexa smaker som är omöjliga att uppnå i rumstemperatur.',
    },
    {
      type: 'paragraph',
      html: 'Vår kalkylator automatiserar beräkningarna så att du kan fokusera på hantverket och passionen.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
