import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calcolatrice di Transglutaminasi per Legante di Carne: Guida al Dosaggio in Gastronomia Molecolare';
const description = 'Calcola il dosaggio preciso di transglutaminasi (TG) per il legante della carne. Ottieni rapporti per spolveratura a secco o pastella, tempo di incubazione e avvisi di sicurezza sulla temperatura.';

const faq = [
  {
    question: 'Cos\'è la transglutaminasi e come lega la carne?',
    answer: 'La transglutaminasi (TG), nota anche come "colla per carne", è un enzima che catalizza la formazione di legami covalenti tra gli amminoacidi glutammina e lisina nelle proteine. Applicata sulle superfici della carne, crea ponti che fondono pezzi separati in un unico blocco coeso. La reazione richiede tempo e temperature fredde (2-5 °C) per svilupparsi completamente, tipicamente da 6 a 24 ore.',
  },
  {
    question: 'Qual è la differenza tra spolveratura a secco e applicazione in pastella?',
    answer: 'La spolveratura a secco consiste nel cospargere la polvere di TG direttamente sulla superficie della carne allo 0,75-1,5% del peso della carne. Il metodo della pastella mescola una parte di TG con quattro parti di acqua per creare una pasta spalmabile, ideale per rivestire superfici irregolari o applicare strati sottili e uniformi su grandi arrosti o filetti con pelle.',
  },
  {
    question: 'La temperatura influisce sull\'attività della transglutaminasi?',
    answer: 'Sì. La TG è più attiva tra 2 °C e 15 °C. A temperature più elevate (fino a 40 °C) la reazione accelera ma deve essere monitorata attentamente. Sopra i 60 °C, l\'enzima si denatura e diventa permanentemente inattivo: la reazione di cross-linking si arresta completamente. Mantieni sempre la carne legata con TG al di sotto dei 60 °C durante la cottura per preservare il legame.',
  },
  {
    question: 'Posso usare la transglutaminasi su pesce o crostacei?',
    answer: 'Sì, ma il pesce e i crostacei hanno livelli più bassi di lisina e glutammina nelle loro proteine muscolari rispetto alla carne rossa e al pollame. Potresti aver bisogno di un rapporto di TG più alto (1,2-1,5%) e tempi di incubazione più lunghi. Per capesante delicate o filetti di pesce sottili, considera il metodo della pastella per una copertura più uniforme.',
  },
];

const howTo = [
  {
    name: 'Scegli il metodo di applicazione',
    text: 'Scegli la spolveratura a secco per superfici uniformi come arrosti e bistecche. Scegli la pastella per tagli irregolari, strati sottili o proteine con pelle.',
  },
  {
    name: 'Inserisci il peso della carne',
    text: 'Inserisci il peso totale della carne o della proteina che vuoi legare in grammi.',
  },
  {
    name: 'Specifica il tipo di proteina',
    text: 'Seleziona il tipo di proteina che meglio corrisponde al tuo taglio. Le carni rosse necessitano di meno TG; pesce e crostacei necessitano di più.',
  },
  {
    name: 'Imposta la temperatura di incubazione',
    text: 'Inserisci la temperatura di conservazione al freddo (2-40 °C). Il calcolatore stimerà il tempo di legatura richiesto.',
  },
  {
    name: 'Pesa e applica la TG',
    text: 'Misura la polvere di TG calcolata. Applica spolverando a secco o spennellando la pastella, quindi premi saldamente le superfici proteiche insieme.',
  },
  {
    name: 'Riposo e refrigerazione',
    text: 'Avvolgi stretto nella pellicola trasparente e refrigera per il periodo di incubazione raccomandato prima della cottura.',
  },
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
  slug: 'calcolatrice-transglutaminase-legante-carne',
  title: 'Calcolatrice di Transglutaminasi per Legante di Carne',
  description: 'Calcola il dosaggio preciso di transglutaminasi (TG) per il legante della carne. Ottieni rapporti per spolveratura a secco o pastella, tempo di incubazione e avvisi di sicurezza sulla temperatura.',
  faqTitle: 'Domande Frequenti',
  ui: {
    title: 'Calcolatrice di Transglutaminasi per Legante di Carne',
    subtitle: 'Precisione molecolare per il cross:linking proteico',
    methodLabel: 'Metodo di Applicazione',
    dryMethod: 'Spolveratura a Secco',
    slurryMethod: 'Pastella (Pasta Spalmabile)',
    weightLabel: 'Peso Carne / Proteina',
    proteinLabel: 'Tipo di Proteina',
    redMeat: 'Carne Rossa (Manzo, Agnello, Selvaggina)',
    poultry: 'Pollame (Pollo, Tacchino, Anatra)',
    fish: 'Pesce (Filetti Sodi, Pesce Intero)',
    shellfish: 'Crostacei (Capesante, Gamberi, Aragosta)',
    unitLabel: 'Sistema di Misura',
    metricUnit: 'Metrico (g / °C)',
    imperialUnit: 'Imperiale (oz / °F)',
    tempLabel: 'Temperatura di Incubazione',
    resultTitle: 'Risultati del Dosaggio',
    tgAmount: 'Transglutaminasi (TG)',
    waterAmount: 'Acqua (per la Pastella)',
    totalWeight: 'Peso Totale Legato',
    ratioLabel: 'Rapporto TG',
    incubationLabel: 'Incubazione Raccomandata',
    incubationRange: '{min}h a {max}h',
    dryDustingDesc: 'Spolvera la polvere di TG uniformemente sulla superficie della carne, quindi premi i pezzi insieme. Ideale per tagli piatti e arrosti.',
    slurryDesc: 'Mescola la TG con 4 parti di acqua per creare una pasta spennellabile. Applica con un pennello per superfici irregolari, filetti o legatura di pelle.',
    enzymeDestroyed: 'Enzima Distrutto: La temperatura supera la soglia di denaturazione. La transglutaminasi è denaturata e non legherà.',
    noWarning: '',
    hours: 'ore',
    grams: 'g',
    milliliters: 'ml',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Quanta transglutaminasi dovresti usare per chilo di carne?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La dose giusta dipende dal tipo di proteina e dal metodo di applicazione. Per la carne rossa, usa lo 0,75:1,0% di TG in peso (7,5:10 g per kg). Per il pollame, 1,0:1,2%. Per pesce e crostacei, 1,2:1,5%. Applica come spolveratura a secco per tagli piatti o mescola con 4 parti di acqua come pastella per superfici irregolari. Inserisci il peso della tua proteina nel calcolatore qui sopra per ottenere una misurazione esatta.',
    },
    {
      type: 'title',
      text: 'Spolveratura a secco o pastella: quale metodo scegliere?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La spolveratura a secco funziona meglio su superfici piane e uniformi come bistecche, arrosti o cotolette. Cospargi la polvere di TG direttamente (0,75:1,5% del peso della carne) e premi i pezzi insieme. Il metodo della pastella (1 parte di TG per 4 parti di acqua) è migliore per tagli irregolari, filetti con pelle o capesante delicate dove la copertura uniforme è importante. Spennella la pasta, assembla e avvolgi stretto. Entrambi i metodi richiedono incubazione al freddo per completare il legame.',
    },
    {
      type: 'title',
      text: 'Perché il controllo della temperatura determina la riuscita del legame',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La transglutaminasi funziona meglio tra 2 °C e 5 °C, formando forti ponti in 6:24 ore. A temperature di frigorifero più elevate (5:15 °C) la reazione accelera a 3:8 ore, ma i legami potrebbero essere meno profondi. Sopra i 40 °C l\'enzima si denatura rapidamente, e a 60 °C viene distrutto istantaneamente: qualsiasi legame esistente smette di formarsi e la carne si separerà durante la cottura. Controlla sempre la temperatura di conservazione al freddo con il termometro nel visualizzatore qui sopra.',
    },
    {
      type: 'table',
      headers: ['Proteina', 'Dose di TG (% del peso)', 'Metodo', 'Incubazione (2:5 °C)', 'Resistenza del Legame'],
      rows: [
        ['Manzo, Agnello, Selvaggina', '0,75:1,0%', 'Spolveratura a secco', '6:12 h', 'Molto forte'],
        ['Pollo, Tacchino, Anatra', '1,0:1,2%', 'Entrambi', '8:16 h', 'Forte'],
        ['Salmone, Merluzzo, Spigola', '1,2:1,5%', 'Pastella', '12:24 h', 'Moderata'],
        ['Capesante, Gamberi, Aragosta', '1,0:1,5%', 'Pastella', '12:24 h', 'Moderata'],
      ],
    },
    {
      type: 'title',
      text: 'Errori comuni nel legare la carne con la TG',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Troppo enzima:</strong> Usare più dell\'1,5% di TG lascia un residuo bianco visibile e una texture gessosa. L\'eccesso non rende il legame più forte.',
        '<strong>Grasso o pelle argentata sulla superficie:</strong> La TG non può legarsi al grasso o al tessuto connettivo. Pulisci le superfici fino a vedere le fibre muscolari nude prima di applicare.',
        '<strong>Saltare il periodo di riposo:</strong> La reazione di cross-linking richiede ore. Cuocere immediatamente dopo l\'assemblaggio laverà via l\'enzima prima che i legami si formino.',
        '<strong>Calore sopra i 60 °C durante la cottura:</strong> Il legame resiste a cotture delicate (la cottura sottovuoto a 55:58 °C è ideale), ma le alte temperature di rosolatura possono indebolire l\'interfaccia.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
