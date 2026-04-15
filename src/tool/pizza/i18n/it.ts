import type { ToolLocaleContent } from "../../../types";

const title = "Calcolatore Impasto Pizza Napoletana";
const description = "Calcola le proporzioni esatte di farina, acqua, sale e lievito per preparare l'autentica pizza napoletana a casa.";
const faq = [
  {
    question: "Qual è l'idratazione ideale per la pizza napoletana?",
    answer:
      "Secondo il protocollo AVPN, l'idratazione standard è del 63-67%. Per i principianti, il 60-62% è più gestibile. Per i pizzaioli esperti con farina forte (W300+), il 70-75% produce impasti straordinari ma richiede tecnica.",
  },
  {
    question: "Quanto tempo deve lievitare l'impasto?",
    answer:
      "Minimo 24 ore in frigorifero (4°C) per attivare gli enzimi. L'ottimale è 48-72 ore. Oltre le 72 ore, serve una farina molto forte (W300+) o l'impasto diventa acido.",
  },
  {
    question: "Si può fare con il lievito secco?",
    answer:
      "Sì. Il lievito secco equivale a 0.4x quello fresco (1g secco = 2.5g fresco). La qualità è simile, ma il fresco apporta un sapore più completo.",
  },
  {
    question: "Posso fare la pizza napoletana nel forno di casa?",
    answer:
      "Sì, ma con adattamenti. Preriscalda al massimo (250-280°C) con pietra refrattaria per 45-60 minuti. La cottura durerà 5-7 minuti invece dei 60-90 secondi del forno a legna.",
  },
];
const howTo = [
  {
    name: "Calcola le proporzioni",
    text: "Usa questo calcolatore per ottenere i grammi esatti di ogni ingrediente in base al numero di pizze e al peso di ogni panetto.",
  },
  {
    name: "Mescola l'impasto",
    text: "Unisci la farina con acqua tiepida (22-25°C), lievito e sale (sciolto per ultimo). Impasta 8-10 minuti con impastatrice o 15-20 minuti a mano.",
  },
  {
    name: "Lievitazione in massa",
    text: "Lascia lievitare l'intero impasto per 1-2 ore a temperatura ambiente (20-25°C) finché non raddoppia il volume.",
  },
  {
    name: "Staglio (panetti)",
    text: "Dividi l'impasto in porzioni del peso indicato. Forma dei panetti e lasciali riposare prima della maturazione lunga.",
  },
  {
    name: "Maturazione lunga",
    text: "Metti i panetti in contenitori ermetici in frigo (4°C) per 24-72 ore. Questo passaggio genera sapore e digeribilità.",
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
  faqTitle: "Domande Frequenti",
  bibliographyTitle: "Riferimenti",
  ui: {
    parameters: "Parametri",
    quantity: "Quantità",
    pizzas: "pizze",
    weight: "Peso panetto",
    small: "Piccolo (180g)",
    standard: "Standard (260g)",
    large: "Grande (350g)",
    hydration: "Idratazione",
    classic: "Classica (55-60%)",
    modern: "Moderna (65-70%)",
    high: "Alta (75%+)",
    salt: "Sale",
    fermentation_tip_title: "Tip di Lievitazione",
    fermentation_tip:
      "Per un impasto più digeribile, lascia maturare in massa per 24h in frigo (4°C) usando <strong>0.3g</strong> di lievito fresco per 100g di farina.",
    your_recipe: "Tua Ricetta",
    fresh_yeast: "Lievito Fresco",
    dry_yeast: "Secco",
    flour: "Farina (W260-300)",
    water: "Acqua",
    salt_label: "Sale Marino",
    yeast: "Lievito",
    yeast_note: "Per 8h a 20°C",
    total_weight: "Peso Totale Impasto",
    approx: "circa",
    visual_note:
      "La dimensione visiva rappresenta il diametro approssimativo della pizza stesa in base al peso del panetto.",
  },
  faq,
  howTo,
  bibliography: [
    {
      name: "Associazione Verace Pizza Napoletana",
      url: "https://www.pizzanapoletana.org/",
    },
    {
      name: "Harina Caputo",
      url: "https://www.caputoprepara.com/",
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Guida Maestro alla Vera Pizza Napoletana',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>pizza napoletana</strong> è un patrimonio dell\'umanità. Il successo risiede nella precisione millimetrica tra tempo, temperatura e idratazione.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '480°C',
          label: 'Temp. Cottura',
          icon: 'mdi:fire',
        },
        {
          value: '60-90s',
          label: 'Tempo Cottura',
          icon: 'mdi:clock-fast',
        },
        {
          value: '65%',
          label: 'Idratazione Std.',
          icon: 'mdi:water-percent',
        },
        {
          value: 'W280',
          label: 'Forza Farina',
          icon: 'mdi:grain',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Il Trucco del Frigo',
      html: 'La maturazione di 24 ore a 4°C crea sapori complessi impossibili da ottenere a temperatura ambiente.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
