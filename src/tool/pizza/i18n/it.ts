import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

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
  {
    question: "Che farina devo usare?",
    answer:
      "Ideale: Caputo Pizzeria (W260-280) o Manitoba (W350-400). Alternativa: qualsiasi farina con 11-13g di proteine per 100g. Evita farine deboli (W130-160) per lunghe lievitazioni.",
  },
  {
    question: "Perché l'impasto si strappa quando lo stendo?",
    answer:
      "Il glutine non è rilassato. Lascia riposare i panetti 2-3 ore a temperatura ambiente. Se si ripete, l'impastamento è stato insufficiente o la farina è troppo debole.",
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
  {
    name: "Stenditura e cottura",
    text: "Togli dal freddo 30 minuti prima. Stendi dal centro verso l'esterno. Cuoci alla massima temperatura.",
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
  slug: "calcolatore-impasto-pizza-napoletana",
  title,
  description,
  faqTitle: "Domande Frequenti",
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
      type: 'title',
      text: 'L\'Importanza Fondamentale dell\'Idratazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'idratazione (percentuale di acqua rispetto al peso della farina) determina la consistenza del <strong>cornicione</strong>.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Idratazione 55 a 60%',
          icon: 'mdi:water-percent',
          description: 'Molto facile da gestire, ideale per principianti e forni domestici.',
          points: [
            'Formazione maglia glutinica semplice',
            'Impasto poco appiccicoso',
            'Crosticina croccante',
          ],
        },
        {
          title: 'Idratazione 63 a 67%',
          icon: 'mdi:water',
          description: 'Lo standard AVPN. Bilanciamento perfetto per un impasto leggero.',
          highlight: true,
          points: [
            'Consistenza elastica tradizionale',
            'Ideale per forni a legna',
            'Richiede discreta manualità',
          ],
        },
        {
          title: 'Idratazione 70%+',
          icon: 'mdi:water-plus',
          description: 'Pizze contemporanee con alveoli giganti. Richiede tecnica avanzata.',
          points: [
            'Alveolatura estrema',
            'Altissima digeribilità',
            'Richiede farine molto forti',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tipi di Lievito e Come Sceglierli',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Lievito di Birra Fresco',
          icon: 'mdi:bread-slice-outline',
          description: 'La scelta tradizionale dei pizzaioli. Dona un profilo aromatico più complesso.',
          points: [
            'Gusto più profondo e pulito',
            'Azione enzimatica bilanciata',
            'Si scioglie facilmente in acqua',
            'Scadenza breve',
          ],
        },
        {
          title: 'Lievito Secco Disidratato',
          icon: 'mdi:shaker-outline',
          description: 'Molto più stabile e facile da conservare. Ideale per la dispensa.',
          points: [
            'Lunga conservazione',
            'Nessuna idratazione preventiva',
            'Tre volte più potente del fresco',
            'Sapore leggermente più neutro',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Guida alla Scelta della Farina in base all\'Indice W',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tipo di Farina', 'Forza (W)', 'Tempo Lievitazione', 'Uso Consigliato'],
      rows: [
        ['Farina Debole', 'W130-180', '4-8 ore', 'Prodotti da forno rapidi'],
        ['Media Forza', 'W200-240', '8-24 ore', 'Pizza veloce o pane semplice'],
        ['Farina Forte', 'W260-320', '24-72 ore', 'Vera Pizza Napoletana'],
        ['Extra Forte', 'W350+', '72+ ore', 'Grandi lievitati o altissima idratazione'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Controllo Temperatura dell\'Impasto',
      html: 'L\'impasto non deve mai superare i 24°C a fine impastamento per non rovinare la maglia glutinica.',
    },
    {
      type: 'title',
      text: 'Glossario per il Futuro Pizzaiolo',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cornicione',
          definition: 'Il bordo rialzato e alveolato della pizza napoletana.',
        },
        {
          term: 'Maturazione',
          definition: 'Processo enzimatico distinto dalla lievitazione per scindere zuccheri e proteine.',
        },
        {
          term: 'Incordatura',
          definition: 'Il punto in cui l\'impasto raggiunge la sua massima elasticità.',
        },
        {
          term: 'Autolisi',
          definition: 'Riposo di sola farina e acqua per facilitare la formazione del glutine.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Il Trucco del Frigo',
      html: 'La maturazione di 24 ore a 4°C crea sapori complessi impossibili da ottenere a temperatura ambiente.',
    },
    {
      type: 'paragraph',
      html: 'Il nostro calcolatore automatizza le proporzioni affinché tu possa concentrarti sulla tecnica e sulla passione.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
