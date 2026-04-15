import type { ToolLocaleContent } from "../../../types";

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
  slug: "pizza",
  title,
  description,
  faqTitle: "Vanliga Frågor",
  bibliographyTitle: "Referenser",
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
      "För en mer lättsmält deg, låt den jäsa i kylskåp (4°C) i 24 timmar med <strong>0,3g</strong> färsk jäst per 100g mjöl.",
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
  bibliography: [
    {
      name: "Associazione Verace Pizza Napoletana",
      url: "https://www.pizzanapoletana.org/",
    },
  ],
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
      type: 'tip',
      title: 'Kylskåpstricket',
      html: 'En 24-timmars jäsning vid 4°C skapar komplexa smaker som är omöjliga att uppnå i rumstemperatur.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
