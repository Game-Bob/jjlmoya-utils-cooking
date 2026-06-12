import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calcolatore PAC POD per Gelato Guida alla Formulazione Criogenica";
const description = "Calcola il potere anticongelante e il potere dolcificante per il gelato. Formula profili di zucchero precisi, percentuale di solidi e temperature di servizio.";
const faq = [
  {
    question: "Cos e il PAC nella formulazione del gelato?",
    answer: "PAC sta per Potere Anticongelante, che rappresenta il potere anticongelante. Determina quanta acqua rimane congelata a una data temperatura di servizio, controllando la durezza fisica del gelato."
  },
  {
    question: "Cos e il POD e perche e importante?",
    answer: "POD sta per Potere Dolcificante, che rappresenta il potere dolcificante relativo. Misura la dolcezza rispetto al saccarosio (zucchero da tavola), che ha un valore base di 100."
  },
  {
    question: "Perche bilanciamo piu zuccheri nel gelato?",
    answer: "Diversi zuccheri hanno caratteristiche uniche di PAC e POD. Ad esempio, il destrosio offre un alto potere anticongelante con una dolcezza moderata, mentre il saccarosio fornisce corpo e dolcezza standard. Mescolarli consente di controllare la cremosita senza rendere il prodotto eccessivamente dolce."
  },
  {
    question: "Qual e la percentuale ottimale di solidi per il gelato?",
    answer: "La percentuale totale di solidi varia tipicamente tra il 36% e il 42%. Una percentuale di solidi al di sotto di questo intervallo porta a texture ghiacciate, mentre una percentuale al di sopra puo causare sabbiosita o una sensazione di pesantezza al palato."
  }
];

const howTo = [
  {
    name: "Impostare la miscela base e la temperatura di servizio",
    text: "Definisci il peso della tua miscela liquida base e inserisci la temperatura di servizio target alla quale intendi servire il gelato."
  },
  {
    name: "Inserire le quantita di zucchero",
    text: "Regola i cursori per diversi zuccheri come saccarosio, destrosio, glucosio, zucchero invertito e trealosio per costruire la tua ricetta."
  },
  {
    name: "Analizzare i valori PAC e POD",
    text: "Confronta i valori calcolati di PAC e POD con i valori target raccomandati per la tua temperatura target."
  },
  {
    name: "Verificare il rapporto di solidi e la consistenza",
    text: "Assicurati che la percentuale totale di solidi sia nella zona ottimale e controlla l indicatore di consistenza per prevedere la texture finale."
  }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'gelato-pac-pod',
  title: 'Calcolatore PAC POD per Gelato',
  description: 'Calcola il potere anticongelante e il potere dolcificante per il gelato. Formula profili di zucchero precisi, percentuale di solidi e temperature di servizio.',
  faqTitle: 'Domande Frequenti',
  ui: {
    title: "Calcolatore Criogenico per Gelato",
    subtitle: "Dashboard di formulazione criogenica di precisione per gastronomia molecolare",
    unitLabel: "Sistema di Unita",
    metricUnit: "Metrico (grammi)",
    imperialUnit: "Imperiale (once)",
    baseWeightLabel: "Peso della Miscela Base",
    targetTempLabel: "Temperatura di Servizio",
    sucroseLabel: "Saccarosio",
    dextroseLabel: "Destrosio",
    glucoseLabel: "Glucosio DE40",
    invertedLabel: "Zucchero Invertito",
    trehaloseLabel: "Trealosio",
    pacLabel: "Potere Anticongelante (PAC)",
    podLabel: "Potere Dolcificante (POD)",
    solidsLabel: "Solidi Totali",
    targetPacLabel: "PAC Target",
    scoopabilityLabel: "Stato di Consistenza",
    stoneState: "Duro come Pietra",
    creamyState: "Cremosita Perfetta",
    soupState: "Zuppa Sciolta",
    stoneDesc: "Il potere anticongelante e troppo basso per questa temperatura. La miscela si congelera dura come una roccia.",
    creamyDesc: "L equilibrio del PAC e ottimale. Il gelato sara cremoso e facile da servire.",
    soupDesc: "Il potere anticongelante e troppo alto. Il gelato si sciogliera rapidamente e rimarra liquido.",
    gLabel: "g",
    ozLabel: "oz",
    cLabel: "gradi C",
    fLabel: "gradi F",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Principi Scientifici della Formulazione Criogenica del Gelato e Controllo della Fase di Transizione Vetrosa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il gelato e un emulsione termodinamica multifase complessa composta da celle d aria, globuli di grasso, cristalli di ghiaccio e una fase sierica concentrata non congelata. Ottenere la perfetta cremosita e consistenza richiede un attento controllo dell abbassamento del punto di congelamento dell acqua nella miscela. Quando la temperatura scende sotto lo zero, l acqua inizia a cristallizzare in ghiaccio. La concentrazione di soluti disciolti nel siero liquido rimanente aumenta, abbassando ulteriormente il suo punto di congelamento. L equilibrio tra cristalli di ghiaccio e la fase sciropposa non congelata determina la durezza e la morbidezza del prodotto finale.',
    },
    {
      type: 'title',
      text: 'Capire il PAC: Potere Anticongelante e Matematica della Depressione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC, o Potere Anticongelante, rappresenta il potere anticongelante di un soluto rispetto al saccarosio. Il saccarosio e designato come standard di riferimento con un valore PAC di 100. Il meccanismo e governato da proprieta colligative, il che significa che l abbassamento del punto di congelamento dipende dal numero di molecole attive disciolte in acqua, non dalla loro massa. I monosaccaridi come il destrosio (peso molecolare 180 g/mol) forniscono circa il doppio delle molecole per grammo rispetto ai disaccaridi come il saccarosio (peso molecolare 342 g/mol), risultando in un PAC di 190. Valori PAC piu alti significano che piu acqua rimane liquida a una data temperatura, impedendo al gelato di congelarsi duro come pietra.',
    },
    {
      type: 'title',
      text: 'Capire il POD: Potere Dolcificante e Equilibrio Sensoriale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD, o Potere Dolcificante, e una metrica che misura la dolcezza relativa rispetto al saccarosio (valore base 100). Quando si formulano gelati di alta qualita, bilanciare la dolcezza e importante quanto la solidita strutturale. Se un formulatore usa solo saccarosio per abbassare il punto di congelamento (aumentare il PAC), il gelato diventera stucchevolmente dolce prima di raggiungere la morbidezza desiderata. Per aggirare questa limitazione, la gastronomia molecolare utilizza zuccheri come destrosio (POD 70), trealosio (POD 45) o glucosio atomizzato DE40 (POD 40). Questi consentono una configurazione personalizzata della curva di congelamento senza sopraffare il palato.',
    },
    {
      type: 'title',
      text: 'Banca Dati Comparativa degli Zuccheri Comuni per Formulazione Criogenica',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tipo di Zucchero', 'PAC Relativo', 'POD Relativo', 'Contenuto di Solidi (%)', 'Utilizzo Culinario'],
      rows: [
        ['Saccarosio', '100', '100', '100%', 'Corpo standard, profilo dolce pulito, linea base standard'],
        ['Destrosio', '190', '70', '100%', 'Abbassa il punto di congelamento, aumenta la morbidezza, riduce la dolcezza'],
        ['Glucosio DE40', '90', '40', '95%', 'Aggiunge corpo, previene la ricristallizzazione, aumenta la viscosita'],
        ['Zucchero Invertito', '190', '130', '70%', 'Aggiunge morbidezza, proprieta umettanti, esalta i sapori fruttati'],
        ['Trealosio', '100', '45', '90%', 'Agente di corpo a bassa dolcezza, protegge le proteine, finale pulito'],
      ],
    },
    {
      type: 'title',
      text: 'Rapporto di Solidi Totali e Stabilita dell Emulsione Strutturale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I solidi totali comprendono tutti gli elementi non acquosi nella formulazione, inclusi grassi, solidi del latte non grassi, stabilizzanti, emulsionanti e zuccheri. Una miscela di gelato ottimale contiene tra il 36% e il 42% di solidi totali. Se i solidi sono troppo bassi, l alto contenuto di acqua porta alla crescita di grandi cristalli di ghiaccio e a una texture grossolana. Se i solidi sono troppo alti, la viscosita aumenta eccessivamente, risultando in una sensazione di pesantezza al palato e possibile sabbiosita dovuta alla cristallizzazione del lattosio.',
    },
    {
      type: 'title',
      text: 'Passi Pratici per il Successo nella Formulazione Criogenica',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Determina la temperatura di servizio target del tuo banco vetrina. I gelati vengono tipicamente serviti a -12 gradi Celsius, mentre i gelati industriali vengono serviti piu freddi a -18 gradi Celsius.',
        'Calcola il PAC target usando la formula della temperatura standard. Per -12 gradi Celsius, il PAC target e di circa 216.',
        'Seleziona una miscela di zuccheri. Combina saccarosio per la dolcezza standard, destrosio per abbassare il punto di congelamento e glucosio per migliorare corpo e texture.',
        'Verifica che i solidi totali rientrino nell intervallo di sicurezza dal 36% al 42% per garantire una corretta aerazione e un profilo di fusione liscio al palato.'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
