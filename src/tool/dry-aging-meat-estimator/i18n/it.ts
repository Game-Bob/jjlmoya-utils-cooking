import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calcolatore di Resa e Costo Frollatura Dry Aging";
const description = "Calcola la perdita di peso della carne, lo scarto di rifilatura e il costo effettivo al chilogrammo per la frollatura a secco (dry aging) a casa o in cella.";
const faq = [
  {
    question: "Quanto peso perde la carne durante la frollatura a secco?",
    answer: "Durante un processo di frollatura standard da 30 a 45 giorni, la carne perde circa il 15% - 25% del suo peso a causa dell'evaporazione dell'umidità. Inoltre, si perde circa il 15% del peso iniziale per la rifilatura della crosta esterna secca prima della cottura."
  },
  {
    question: "Qual è l'umidità ottimale per la frollatura?",
    answer: "L'umidità relativa ideale per la frollatura a secco è tra il 75% e l'85%. Se l'umidità è troppo bassa (sotto il 75%), la superficie si asciuga troppo velocemente. Se è troppo alta (sopra l'85%), aumenta il rischio di muffe dannose."
  },
  {
    question: "Perché il prezzo al chilogrammo aumenta così tanto?",
    answer: "Poiché si perde peso con l'evaporazione e la rifilatura, il peso utilizzabile finale è inferiore al peso iniziale. Il costo totale rimane invariato, quindi il prezzo al kg utilizzabile aumenta in proporzione al peso perso."
  }
];

const howTo = [
  {
    name: "Inserisci il peso iniziale",
    text: "Inserisci il peso di partenza del taglio prima di avviare la frollatura."
  },
  {
    name: "Imposta i giorni di frollatura",
    text: "Seleziona la durata totale della frollatura, solitamente tra 1 e 60 giorni."
  },
  {
    name: "Regola l'umidità relativa",
    text: "Imposta l'umidità della cella (l'ideale è tra il 75% e l'85%) per determinare la velocità di evaporazione."
  },
  {
    name: "Inserisci il prezzo iniziale",
    text: "Fornisci il costo al chilogrammo della carne fresca per confrontarlo con quello della carne frollata finale."
  }
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
  slug: 'calcolatore-frollatura-carne',
  title,
  description,
  faqTitle: 'Domande Frequenti',
  ui: {
    title: 'Calcolatore Frollatura Dry Aging',
    subtitle: 'Simula la perdita di peso e calcola il costo effettivo finale',
    startWeightLabel: 'Peso Iniziale',
    daysLabel: 'Tempo di Frollatura',
    pricePerKgLabel: 'Prezzo Originale',
    humidityLabel: 'Umidità Relativa',
    finalWeightLabel: 'Peso Utile Finale',
    yieldLabel: 'Resa Utile Totale',
    originalCostLabel: 'Costo Totale Iniziale',
    finalCostPerKgLabel: 'Prezzo Utile Finale',
    moistureLossLabel: 'Perdita per Evaporazione Umidità',
    trimmingLossLabel: 'Scarto di Rifilatura (Pellicola)',
    warningLowHumidity: 'Attenzione: L\'umidità è inferiore al 75%. La superficie può asciugarsi troppo rapidamente, causando indurimento superficiale.',
    warningHighHumidity: 'Attenzione: L\'umidità è superiore all\'85%. Rischio elevato di deterioramento batterico o muffe indesiderate.',
    timelineTitle: 'Cronologia di Avanzamento Frollatura',
    timelineInfoText: 'Fai clic sulla linea temporale per vedere l\'anteprima delle modifiche fisiche del taglio'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Scienza e Convenienza della Frollatura Dry Aging',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La frollatura a secco è un\'arte culinaria che unisce microbiologia, biochimica e fisica per trasformare tagli bovini standard in prelibatezze tenere e concentrate nei sapori.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '75-85%',
          label: 'Umidità Ideale',
          icon: 'mdi:water-percent'
        },
        {
          value: '1-3°C',
          label: 'Temp. Ottimale',
          icon: 'mdi:thermometer'
        },
        {
          value: '15%',
          label: 'Scarto Rifilatura',
          icon: 'mdi:knife'
        },
        {
          value: '30-45 g',
          label: 'Frollatura Standard',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Comprendere la Dinamica della Perdita di Peso e la Curva Asintotica',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La perdita di peso durante il dry aging è asintotica. Nei primi 14 giorni, l\'acqua evapora rapidamente dagli strati esterni. Si forma una crosta dura e scura (la pellicola) che rallenta l\'ulteriore evaporazione dopo 2-3 settimane.'
    },
    {
      type: 'list',
      items: [
        '<strong>Giorni 1-14:</strong> Evaporazione rapida. La carne perde dal 10% al 12% del suo peso (principalmente acqua). Le fibre muscolari si restringono e i sapori si concentrano.',
        '<strong>Giorni 15-30:</strong> L\'evaporazione rallenta grazie alla formazione della pellicola. Gli enzimi (calpaine e catepsine) scompongono il collagene rendendo la carne più tenera.',
        '<strong>Giorni 30-45:</strong> Ulteriore perdita d\'acqua minima. Sviluppo di note profonde di nocciola e formaggio erborinato per ossidazione dei grassi.',
        '<strong>Scarto di Rifilatura:</strong> Al termine della frollatura, la crosta esterna deve essere rimossa, con una perdita di circa il 15% del peso totale.'
      ]
    },
    {
      type: 'title',
      text: 'Controlli Ambientali nella Camera di Frollatura',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Qualità dell\'aria, temperatura e umidità costanti sono fondamentali. Eventuali deviazioni possono rovinare il taglio.'
    },
    {
      type: 'list',
      items: [
        '<strong>Temperatura:</strong> Deve rimanere tra 1°C e 3°C. Sotto 0°C gli enzimi si congelano; sopra 4°C si sviluppano batteri patogeni.',
        '<strong>Umidità Relativa (UR):</strong> L\'intervallo ideale è tra 75% e 85%. Sotto il 70% si verifica l\'indurimento superficiale; sopra l\'85% crescono muffe indesiderate.',
        '<strong>Flusso d\'aria:</strong> Una ventilazione continua è necessaria per asciugare la superficie in modo uniforme.'
      ]
    },
    {
      type: 'title',
      text: 'Implicazioni Finanziarie e Calcoli dei Costi',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'A causa dell\'evaporazione e della rifilatura, la parte edibile si riduce, aumentando il prezzo effettivo al chilogrammo.'
    },
    {
      type: 'table',
      headers: ['Durata Frollatura', 'Ø Perdita Evaporazione', 'Ø Scarto Rifilatura', 'Resa Totale', 'Moltiplicatore Costo'],
      rows: [
        ['14 Giorni', '10.5%', '15.0%', '74.5%', '1.34x'],
        ['21 Giorni', '13.5%', '15.0%', '71.5%', '1.40x'],
        ['30 Giorni', '17.5%', '15.0%', '67.5%', '1.48x'],
        ['45 Giorni', '21.0%', '15.0%', '64.0%', '1.56x'],
        ['60 Giorni', '24.0%', '15.0%', '61.0%', '1.64x']
      ]
    },
    {
      type: 'title',
      text: 'Linee Guida di Sicurezza: Microbiologia e Muffe Buone vs Cattive',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Un dry aging sicuro si basa sulla crescita di microflora benefica (funghi del genere <em>Thamnidium</em>, <em>Mucor</em>, <em>Rhizopus</em>). La massima igiene è fondamentale.'
    },
    {
      type: 'list',
      items: [
        '<strong>Buoni Indicatori:</strong> Crosta asciutta, solida, viola scuro o marrone. Uno strato di muffa bianca e sottile (simile alla crosta del formaggio) è normale.',
        '<strong>Cattivi Indicatori:</strong> Superfici appiccicose, viscide o bagnate. Muffe verdi, nere o giallastre. Odore acre o d\'ammoniaca indica deterioramento.',
        '<strong>Pulizia:</strong> Sterilizzare sempre camera, ganci e griglie prima di inserire nuova carne.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
