import type { ToolLocaleContent } from "../../../types";

const title = "Neapolitanischer Pizza Teigrechner";
const description = "Berechnen Sie die exakten Mengen für Mehl, Wasser, Salz und Hefe, um echte neapolitanische Pizza zu Hause zuzubereiten.";
const faq = [
  {
    question: 'Was ist die ideale Hydratation für neapolitanische Pizza?',
    answer: 'Nach AVPN-Protokoll liegt der Standard bei 63-67 %. Für Anfänger sind 60-62 % leichter zu handhaben. Profis mit starkem Mehl (W300+) können 70-75 % für außergewöhnliche Ergebnisse verwenden.',
  },
  {
    question: 'Wie lange sollte der Teig gehen?',
    answer: 'Mindestens 24 Stunden im Kühlschrank (4°C), um Enzyme zu aktivieren. Optimal sind 48-72 Stunden. Über 72 Stunden hinaus ist sehr starkes Mehl nötig, da der Teig sonst sauer wird.',
  },
  {
    question: 'Kann man Trockenhefe verwenden?',
    answer: 'Ja. Trockenhefe entspricht dem 0,4-fachen von Frischhefe (1g trocken = 2,5g frisch). Die Qualität ist ähnlich, aber frische Hefe bietet ein volleres Aroma.',
  },
  {
    question: 'Geht neapolitanische Pizza im Haushaltsbackofen?',
    answer: 'Ja, aber mit Anpassungen. Heizen Sie den Ofen bei maximaler Temperatur (250-280°C) mit Pizzastein 45-60 Min. vor. Die Backzeit beträgt 5-7 Min. statt 60-90 Sek.',
  },
];
const howTo = [
  {
    name: 'Mengen berechnen',
    text: 'Nutzen Sie diesen Rechner, um die Grammzahlen für jedes Zutat basierend auf der Anzahl der Pizzen und dem Teiggewicht pro Kugel zu erhalten.',
  },
  {
    name: 'Teig mischen',
    text: 'Kombinieren Sie Mehl mit lauwarmem Wasser (22-25°C), Salz und Hefe. Kneten Sie 8-10 Min. mit der Maschine oder 15-20 Min. per Hand.',
  },
  {
    name: 'Stockgare',
    text: 'Lassen Sie den gesamten Teig 1-2 Stunden bei Raumtemperatur gehen, bis er sein Volumen verdoppelt hat.',
  },
  {
    name: 'Portionieren',
    text: 'Teilen Sie den Teig in Kugeln auf. Lassen Sie diese 15-20 Min. ruhen, bevor Sie sie fest schleifen.',
  },
  {
    name: 'Lange Fermentation',
    text: 'Lagern Sie die Kugeln in einem luftdichten Behälter 24-72 Stunden im Kühlschrank. Dieser Schritt sorgt für Aroma und Bekömmlichkeit.',
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
  faqTitle: "Häufig gestellte Fragen",
  bibliographyTitle: "Referenzen",
  ui: {
    parameters: "Parameter",
    quantity: "Menge",
    pizzas: "Pizzen",
    weight: "Gewicht pro Kugel",
    small: "Klein (180g)",
    standard: "Standard (260g)",
    large: "Groß (350g)",
    hydration: "Hydratation",
    classic: "Klassisch (55-60%)",
    modern: "Modern (65-70%)",
    high: "Hoch (75%+)",
    salt: "Salz",
    fermentation_tip_title: "Fermentations Tipp",
    fermentation_tip:
      "Für einen bekömmlicheren Teig lassen Sie ihn 24h im Kühlschrank (4°C) gehen. Verwenden Sie <strong>0,3g</strong> Frischhefe pro 100g Mehl.",
    your_recipe: "Ihr Rezept",
    fresh_yeast: "Frischhefe",
    dry_yeast: "Trocken",
    flour: "Mehl (W260-300)",
    water: "Wasser",
    salt_label: "Meersalz",
    yeast: "Hefe",
    yeast_note: "Für 8h bei 20°C",
    total_weight: "Gesamtgewicht Teig",
    approx: "ca.",
    visual_note:
      "Die visuelle Größe entspricht dem ungefähren Durchmesser der Pizza basierend auf dem Kugelgewicht.",
  },
  faq,
  howTo,
  bibliography: [
    {
      name: "Associazione Verace Pizza Napoletana",
      url: "https://www.pizzanapoletana.org/",
    },
    {
      name: "The Pizza Bible - Tony Gemignani",
      url: "https://www.amazon.de/",
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Leitfaden für authentischen neapolitanischen Pizzateig',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Neapolitanische Pizza</strong> ist mehr als ein Rezept – es ist ein Kulturerbe. Erfolg basiert auf dem Verständnis von Zeit, Temperatur und Hydratation.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '480°C',
          label: 'Backtemperatur',
          icon: 'mdi:fire',
        },
        {
          value: '60-90s',
          label: 'Backzeit',
          icon: 'mdi:clock-fast',
        },
        {
          value: '65%',
          label: 'Std. Hydratation',
          icon: 'mdi:water-percent',
        },
        {
          value: 'W280',
          label: 'Mehlstärke',
          icon: 'mdi:grain',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Der Kühlschrank Trick',
      html: 'Eine 24-stündige Stockgare bei 4°C erzeugt komplexe Aromen, die bei Raumtemperatur nicht möglich sind.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
