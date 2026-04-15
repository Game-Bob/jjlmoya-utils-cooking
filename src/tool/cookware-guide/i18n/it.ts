import type { ToolLocaleContent } from '../../../types';

const title = "Selettore di Padelle Intelligente: Guida agli Utensili da Cucina";
const description = "Guida interattiva per scegliere la migliore padella o pentola in base al tuo stile di cucina. Ferro vs Acciaio vs Teflon. Trova il tuo strumento perfetto.";
const faq = [
  {
    question: 'Qual è la padella migliore per l\'uso quotidiano?',
    answer: 'Per la maggior parte delle persone, una padella in acciaio inossidabile di alta qualità o una in ghisa ben trattata sono le migliori. L\'acciaio è versatile ed eterno, mentre il ferro offre un\'antiaderenza naturale senza sostanze chimiche.',
  },
  {
    question: 'Perché il cibo si attacca all\'acciaio inossidabile?',
    answer: 'Di solito è per mancanza di temperatura o per aver messo il cibo troppo presto. Prova l\'"effetto Leidenfrost": scalda la padella finché una goccia d\'acqua non rotola come una perla. Allora è pronta.',
  },
  {
    question: 'Come faccio a sapere se la mia padella è sicura?',
    answer: 'Cerca le etichette "PFOA Free". Le padelle in ferro, acciaio al carbonio e acciaio inossidabile sono le opzioni più sicure e durature, poiché non hanno rivestimenti che si degradano nel tempo.',
  },
  {
    question: 'Cosa significa "condire" (seasoning) una padella?',
    answer: 'È il processo di creazione di uno strato di olio polimerizzato sul metallo (ferro o carbonio). Questo protegge dalla ruggine e crea una superficie antiaderente naturale che migliora ad ogni utilizzo.',
  },
  {
    question: 'Quanto dovrei spendere per una buona padella?',
    answer: 'Un set di 2-3 padelle di qualità medio-alta (acciaio inossidabile o ferro) può durare oltre 20 anni. È meglio investire bene in una sola padella che comprarne 5 economiche che durano 2 anni. Qualità sopra quantità.',
  },
];
const howTo = [
  {
    name: 'Seleziona il tuo stile di cucina',
    text: 'Scegli tra fuoco alto (rosolare), delicato (uova), stufati (cottura lenta) o cucina rapida. Ogni stile ha requisiti diversi.',
  },
  {
    name: 'Scegli il materiale ideale',
    text: 'In base al tuo stile, lo strumento ti consiglierà il materiale migliore: ferro, acciaio inossidabile, rame o teflon.',
  },
  {
    name: 'Leggi le caratteristiche',
    text: 'Comprendi vantaggi, svantaggi, manutenzione e durata. Quindi scegli la padella specifica adatta al tuo budget e alle tue esigenze.',
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
  slug: 'guida-padelle',
  title: 'Selettore di Padelle Intelligente: Guida agli Utensili da Cucina',
  description: 'Guida interattiva per scegliere la migliore padella o pentola in base al tuo stile di cucina. Ferro vs Acciaio vs Teflon. Trova il tuo strumento perfetto.',
  faqTitle: 'Domande Frequenti',
  faq,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'The Flavor Bible - Pairing, and Progress in Food',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'On Food and Cooking - Harold McGee',
      url: 'https://www.foodscience.org/',
    },
    {
      name: 'Salt Fat Acid Heat - Samin Nosrat',
      url: 'https://www.saltfatacidheat.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Materiali delle Padelle: Scienza e Pratica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Non tutte le padelle sono uguali. Ogni materiale ha proprietà termodinamiche distinte che influenzano il modo in cui distribuisce il calore, quali temperature sopporta e come interagisce con il cibo. Capire queste differenze è la chiave per scegliere lo strumento giusto.',
    },
    {
      type: 'title',
      text: 'Ghisa: La Classica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Vantaggi:</strong> Eccellente ritenzione del calore, distribuzione uniforme, antiaderenza naturale (quando trattata), dura secoli, migliora nel tempo. <strong>Svantaggi:</strong> Pesante, richiede manutenzione, può arrugginire, impiega più tempo a scaldarsi, non adatta a cotture acide prolungate.',
    },
    {
      type: 'title',
      text: 'Acciaio Inossidabile: La Versatile',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Vantaggi:</strong> Durevole, non richiede manutenzione, adatta agli acidi (vino, pomodori), facile da pulire, versatile, relativamente economica. <strong>Svantaggi:</strong> Non antiaderente naturalmente, richiede tecnica (preriscaldare bene), distribuzione del calore non sempre uniforme (meglio se con fondo multistrato).',
    },
    {
      type: 'title',
      text: 'Teflon/PTFE: La Comoda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Vantaggi:</strong> Antiaderente istantaneo, facile da usare, facile da pulire, economica. <strong>Svantaggi:</strong> Si degrada con il tempo e la temperatura, va sostituita ogni 3-5 anni, non sicura ad altissime temperature (>260°C).',
    },
  ],
  ui: {
    cookingStyle: 'Come cucini di solito?',
    material: 'Tipo di Materiale',
    highHeat: 'Fuoco Alto',
    sear: 'Rosolare / Siggilare',
    delicate: 'Delicato',
    fry: 'Uova / Frittate',
    stew: 'Stufati',
    slowCook: 'Cottura Lenta',
    fast: 'Rapido',
    quick: 'Cucina Rapida',
    recommendation: 'Raccomandazione',
    characteristics: 'Caratteristiche',
    castIron: 'Ghisa',
    stainlessSteel: 'Acciaio Inossidabile',
    carbon: 'Acciaio al Carbonio',
    copper: 'Rame',
    nonstick: 'Antiaderente (Teflon)',
    advantages: 'Vantaggi',
    disadvantages: 'Svantaggi',
    maintenance: 'Manutenzione',
    durability: 'Durata',
    heatRetention: 'Ritenzione del Calore',
    price: 'Prezzo',
    step1: 'Come cucini di solito?',
    step2: 'Livello di Manutenzione',
    maintenanceLazy: 'Basso / Nullo',
    maintenanceLazyDesc: 'Senza complicazioni nel lavaggio.',
    maintenanceCare: 'Medio',
    maintenanceCareDesc: 'Normale lavaggio a mano.',
    maintenanceRitual: 'Rituale (Alto)',
    maintenanceRitualDesc: 'Mi piace curare il metallo.',
    idealPan: 'La Tua Padella Ideale',
    selectOptions: 'Seleziona opzioni',
    seeRecommendation: 'Per vedere la tua raccomandazione',
    pro: 'PRO',
    con: 'CONTRO',
    masterTip: 'Consiglio Maestro',
    defaultTip: 'Combinare un\'opzione in acciaio per rosolare e una antiaderente per le uova è la base di ogni cucina efficiente.',
    stainlessName: 'Acciaio Inox',
    stainlessTag: 'Il Tuttofare Pro',
    stainlessPro: 'Eterno e non reattivo. Rosolatura perfetta.',
    stainlessCon: 'Richiede tecnica (Tª) per non far attaccare.',
    stainlessTip: 'Usa l\'effetto Leidenfrost: quando una goccia d\'acqua rotola come una perla, è pronta.',
    nonstickName: 'Antiaderente',
    nonstickTag: 'Massima Comodità',
    nonstickPro: 'Nulla si attacca. Facile pulizia.',
    nonstickCon: 'Dura poco (2-3 anni). No fuoco alto.',
    nonstickTip: 'Lavala sempre a mano e usa utensili in legno/silicone per raddoppiarne la vita.',
    castironName: 'Ghisa',
    castironTag: 'La Classica di Sempre',
    castironPro: 'Ritenzione del calore incredibile. Eterna.',
    castironCon: 'Molto pesante. Richiede trattamento regolare.',
    castironTip: 'Si scalda lentamente, ma una volta calda è un carro armato. Ideale per bistecche.',
    carbonName: 'Acciaio al Carbonio',
    carbonTag: 'Agilità sul Fuoco',
    carbonPro: 'Leggera come l\'acciaio, prestazioni come la ghisa.',
    carbonCon: 'Si arrugginisce se lasciata umida. Estetica vissuta.',
    carbonTip: 'Più diventa nera e brutta, meglio funziona. È il segreto dei migliori wok.',
    enamelName: 'Ghisa Smaltata',
    enamelTag: 'Qualità Gourmet',
    enamelPro: 'Migliore per cotture lente. Estetica bellissima.',
    enamelCon: 'Molto cara. Smalto fragile agli urti secchi.',
    enamelTip: 'Perfetta per stufati interminabili. Lo smalto permette di cucinare acidi (pomodoro) senza problemi.',
  },
  schemas: [faqSchema, howToSchema, appSchema],
};
