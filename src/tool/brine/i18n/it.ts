import type { ToolLocaleContent } from "../../../types";

const title = "Calcolatore di Salamoia all'Equilibrio";
const description = "La scienza dell'equilibrio per carni succose e fermentati perfetti. Calcola la salinità esatta in base al peso totale dell'ingrediente e dell'acqua.";
const faq = [
  {
    question: "Che cos'è il metodo della salamoia all'equilibrio?",
    answer: "Il metodo dell'equilibrio calcola il sale in base al peso totale (acqua + ingrediente), non solo all'acqua. Ciò garantisce una concentrazione di sale costante indipendentemente dalla quantità di ingrediente utilizzato.",
  },
  {
    question: "Di quanto sale ho bisogno per fare i sottaceti?",
    answer: "Per le verdure fermentate (cetriolini, crauti, kimchi) si consiglia tra il 2% e il 3% di sale. Per le carni, tra l'1,5% e il 2%. Il calcolatore ti fornisce la quantità esatta in base al peso dei tuoi ingredienti.",
  },
  {
    question: "Posso congelare la carne dopo la salamoia?",
    answer: "Sì, è l'ideale. La salamoia protegge dalle bruciature da congelamento e la carne sarà pronta per la cottura al momento dello scongelamento. Tuttavia, evita di congelare verdure fermentate poiché diventerebbero molli.",
  },
  {
    question: "Perché aggiungere zucchero alla salamoia?",
    answer: "Lo zucchero ha due funzioni: facilita la reazione di Maillard (rosolatura) nelle carni ed equilibra il sapore salino senza rendere il prodotto dolce. Non trasforma la tua salamoia in un dessert.",
  },
];
const howTo = [
  {
    name: "Determina il tuo obiettivo",
    text: "Decidi se farai carni in salamoia (1,5-2%), fermentati (2-3%), salse (3,5%) o conserve a lunga durata (5%+). Ognuna ha tempi e scopi diversi.",
  },
  {
    name: "Pesa ingrediente e acqua",
    text: "Pesa il prodotto (carne, verdure) e l'acqua esattamente. La precisione è fondamentale: anche 5g di differenza cambiano il risultato. Usa una bilancia di precisione.",
  },
  {
    name: "Calcola con lo strumento",
    text: "Inserisci i pesi nel calcolatore e regola la salinità in base al tipo di prodotto. Lo strumento ti dirà esattamente quanto sale e zucchero ti servono.",
  },
  {
    name: "Sciogli e mescola",
    text: "Sciogli completamente il sale in acqua fredda prima di aggiungere il prodotto. Per le carni, assicurati che la salamoia copra tutto. Per i fermentati, il prodotto deve essere sommerso.",
  },
  {
    name: "Fermenta o cura",
    text: "Refrigera in base al tipo: 4-48 ore per le carni, 1-3 settimane per i fermentati. Il tempo esatto dipende dalla temperatura e dal tuo gusto personale.",
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
  slug: "salamoia",
  title: "Calcolatore di Salamoia all'Equilibrio",
  description: "La scienza dell'equilibrio per carni succose e fermentati perfetti. Calcola la salinità esatta in base al peso totale dell'ingrediente e dell'acqua.",
  ui: {
    calculator: "Calcolatore",
    subtitle: "Inserisci i pesi per calcolare l'equilibrio perfetto.",
    productWeight: "Peso del Prodotto (g)",
    waterWeight: "Peso dell'Acqua (g)",
    desiredSalinity: "Salinità Desiderata",
    meat: "Carni (1,5%)",
    fermented: "Fermentati (2,0%)",
    sauces: "Salse (3,5%)",
    preserves: "Conserve (5,0%)",
    addSugar: "Aggiungi Zucchero",
    sugarHint: "Equilibra il sapore e aiuta la rosolatura (50% del sale)",
    saltNeeded: "Sale Necessario",
    sugarOptional: "Zucchero (Opzionale)",
    estimatedTime: "Tempo Stimato",
    product: "Prodotto",
    total: "Totale",
    unitGrams: "grammi",
    timeMeatsLabel: "Tempo (Carni)",
    timeMeatsDuration: "4 - 48 Ore",
    timeVegetablesLabel: "Tempo (Verdure)",
    timeVegetablesDuration: "1 - 3 Settimane",
    timePreservesLabel: "Tempo (Conserve)",
    timePreservesDuration: "1+ Mesi",
  },
  faqTitle: "Domande Frequenti",
  bibliographyTitle: "Fonti e Riferimenti",
  faq,
  howTo,
  bibliography: [
    {
      name: "The Noma Guide to Fermentation - René Redzepi & David Zilber",
      url: "https://www.nomacph.com/",
    },
    {
      name: "Salt, Fat, Acid, Heat - Samin Nosrat",
      url: "https://www.saltfatacidheat.com/",
    },
    {
      name: "Pollan, Michael - Cooked",
      url: "https://michaelpollan.com/",
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Guida Esperta alla Salamoia all\'Equilibrio e Fermentazione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>salamoia all\'equilibrio</strong> è la tecnica definitiva per garantire risultati succosi e sicuri. A differenza dei metodi tradizionali, questo calcola il sale basandosi sul <strong>peso totale</strong> dell\'acqua e del prodotto, assicurando una salinità costante indipendentemente dal volume del contenitore.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1,5 - 2%',
          label: 'Ratio Ideale Carni',
          icon: 'mdi:food-steak',
        },
        {
          value: '2,5 - 3%',
          label: 'Ratio Fermentati',
          icon: 'mdi:flask-outline',
        },
        {
          value: '18-22°C',
          label: 'Temp. Fermentazione',
          icon: 'mdi:thermometer',
        },
        {
          value: '0,5%',
          label: 'Zucchero di Equilibrio',
          icon: 'mdi:shaker-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'Differenze tra Salamoia Secca e Umida',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Salamoia Secca (Dry Brining)',
          icon: 'mdi:shaker-outline',
          description: 'Si applica il sale direttamente sulla superficie del prodotto senza usare acqua aggiuntiva.',
          points: [
            'Pelle molto più croccante nel pollame',
            'Sapore più concentrato dell\'ingrediente',
            'Occupa meno spazio nel frigorifero',
            'Ideale per bistecche e polli interi',
          ],
        },
        {
          title: 'Salamoia Umida (Wet Brining)',
          icon: 'mdi:water',
          description: 'Il prodotto viene immerso in una soluzione di acqua e sale calcolata per equilibrio.',
          highlight: true,
          points: [
            'Trasferimento di umidità superiore',
            'Permette di introdurre aromi (spezie)',
            'Salatura più uniforme in pezzi grandi',
            'Ideale per tacchino, lonza di maiale e pesci',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tempi e Salinità a seconda dell\'Applicazione',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Categoria', 'Salinità (%)', 'Tempo Minimo', 'Obiettivo Principale'],
      rows: [
        ['Pollame e Maiale', '1,5% - 2,0%', '12 - 24 ore', 'Succosità e tenerezza'],
        ['Pesce Bianco', '1,0% - 1,5%', '20 - 45 minuti', 'Consistenza della carne'],
        ['Latto-fermentati', '2,5% - 3,0%', '7 - 21 giorni', 'Sicurezza microbiologica'],
        ['Salse e Conserve', '3,5% - 5,0%', '1+ mese', 'Preservazione a lungo termine'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Identificazione di Problemi nella Salamoia',
      html: 'Se la salamoia presenta un odore sgradevole (non acido), muffe colorate (nere, rosa) o il prodotto diventa estremamente molle, gettalo. La muffa bianca superficiale (lievito Kahm) è normale nei fermentati e si può rimuovere.',
    },
    {
      type: 'title',
      text: 'Glossario dell\'Esperto in Salagione',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Osmosi',
          definition: 'Processo fisico mediante il quale il sale penetra nelle cellule dell\'alimento per equilibrare le concentrazioni.',
        },
        {
          term: 'Denaturazione',
          definition: 'Effetto del sale sulle proteine che permette loro di trattenere più acqua durante la cottura.',
        },
        {
          term: 'Lievito Kahm',
          definition: 'Strato bianco e sottile che appare a volte sulla superficie dei fermentati; è innocuo ma indica mancanza di acidità.',
        },
        {
          term: 'Latto-fermentazione',
          definition: 'Fermentazione anaerobica dove i batteri convertono gli zuccheri in acido lattico, preservando l\'alimento.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Qualità dell\'Acqua',
      html: 'Evita sempre l\'acqua del rubinetto con molto cloro, poiché può inibire la crescita dei batteri buoni nelle tue fermentazioni. Usa acqua filtrata o lascia riposare l\'acqua per 24 ore.',
    },
    {
      type: 'paragraph',
      html: 'Il nostro calcolatore di equilibrio elimina le incertezze dalle tue ricette, permettendoti di cucinare con la sicurezza di un professionista del settore.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
