import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calcolatore di Sale per Fermentazione Latto Guida Scientifica Bio Biologica";
const description = "Calcola percentuali precise di sale per salatura a secco e salamoia umida. Bilancia le popolazioni batteriche, previeni le muffe e padroneggia la conservazione degli alimenti.";
const faq = [
  {
    question: "Perché la percentuale di sale è fondamentale nella fermentazione latto?",
    answer: "Il sale sopprime agenti patogeni e muffe attraverso la pressione osmotica, permettendo ai batteri lattici (LAB) di prosperare, fermentare gli zuccheri e produrre acido lattico."
  },
  {
    question: "Qual è la differenza tra salatura a secco e salamoia umida?",
    answer: "La salatura a secco utilizza l'umidità naturale dell'alimento per sciogliere il sale (ideale per cavolo grattugiato). La salamoia umida aggiunge acqua esterna e sale per immergere completamente verdure intere o a pezzi."
  },
  {
    question: "Posso usare acqua del rubinetto clorata per la fermentazione?",
    answer: "Il cloro può inibire la crescita batterica. Si consiglia vivamente di usare acqua filtrata o di sorgente per risultati di fermentazione costanti."
  },
  {
    question: "La percentuale in peso è migliore delle misure di volume?",
    answer: "Sì. Diversi tipi di sale (kosher, marino, da tavola) hanno dimensioni dei cristalli e densità variabili. Pesare il sale in grammi garantisce una salinità esatta indipendentemente dal tipo di sale utilizzato."
  }
];

const howTo = [
  {
    name: "Scegli la modalità di fermentazione",
    text: "Seleziona la modalità Secca se utilizzi i succhi naturali delle verdure, o la modalità Umida se aggiungi acqua per coprire gli ingredienti."
  },
  {
    name: "Pesa gli ingredienti",
    text: "Inserisci il peso esatto delle verdure in grammi. Se usi la salamoia umida, inserisci anche il peso dell'acqua."
  },
  {
    name: "Regola la salinità target",
    text: "Scorri il controllo della percentuale di salinità. Punta al 2,0%-3,5% per sicurezza generale e crescita ottimale dei batteri lattici."
  },
  {
    name: "Misura il sale",
    text: "Usa la bilancia digitale per misurare i grammi esatti di sale necessari. Aggiungili al tuo contenitore di fermentazione."
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
  slug: 'calcolatore-sale-fermentazione-latto',
  title: 'Calcolatore di Sale per Fermentazione Latto',
  description: 'Calcola percentuali precise di sale per salatura a secco e salamoia umida. Bilancia le popolazioni batteriche, previeni le muffe e padroneggia la conservazione degli alimenti.',
  faqTitle: 'Domande Frequenti',
  ui: {
    title: "Calcolatore di Sale per Fermentazione Latto",
    subtitle: "Controllo preciso della salinità per conservazione bio biologica",
    unitLabel: "Sistema di Misura",
    metricUnit: "Metrico (g / grammi)",
    imperialUnit: "Imperiale (oz / once)",
    modeLabel: "Modalità di Fermentazione",
    dryMode: "Salatura a Secco",
    wetMode: "Salamoia Umida",
    vegWeightLabel: "Peso Verdure",
    waterWeightLabel: "Peso Acqua",
    salinityLabel: "Salinità Target (%)",
    saltGramsLabel: "Sale Necessario",
    fineSaltLabel: "Sale Fino (cucchiaini)",
    kosherSaltLabel: "Sale Kosher (cucchiaini)",
    statusDanger: "Zona di Pericolo",
    statusDangerDesc: "Una salinità inferiore al 2,0% è insufficiente per bloccare agenti patogeni e muffe. Aumenta la salinità per garantire la sicurezza.",
    statusOptimal: "Zona LAB Ottimale",
    statusOptimalDesc: "La salinità tra 2,0% e 3,5% è ideale per consentire ai batteri lattici (LAB) di dominare e fermentare in sicurezza.",
    statusInhibited: "Zona Inibita",
    statusInhibitedDesc: "La salinità superiore al 3,5% rallenta o arresta la fermentazione. Utile per conservazione a lungo termine ma ritarda l'attività batterica.",
    petriTitle: "Simulazione Microbiologica",
    scaleTitle: "Display Bilancia Digitale",
    disclaimer: "Nota: Pesare il sale con una bilancia digitale è fortemente consigliato rispetto alle misure volumetriche.",
    kosherLabel: "Sale Kosher",
    fineLabel: "Sale Fino",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Guida Definitiva alla Chimica della Fermentazione Latto e al Controllo della Salinità',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La fermentazione latto è un processo biochimico dinamico guidato dai batteri lattici (LAB) per conservare verdure e frutta. L\'intero meccanismo dipende dalla creazione di un ambiente selettivo in cui i batteri benefici prosperano mentre gli organismi di deterioramento, le muffe e i patogeni vengono soppressi. Il controllo della salinità è la leva più critica per raggiungere questa selettività biologica.',
    },
    {
      type: 'title',
      text: 'L\'Azione Biochimica del Sale nella Conservazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando il sale viene introdotto sulle verdure crude, agisce attraverso un processo fisico noto come <strong>pressione osmotica</strong>. L\'alta concentrazione di sale all\'esterno delle cellule vegetali estrae acqua e zuccheri disciolti dai tessuti vegetali attraverso l\'osmosi (plasmolisi). Questo crea una salamoia ricca di nutrienti che funge da combustibile perfetto per i batteri lattici. Contemporaneamente, la pressione osmotica disidrata e lisa le membrane cellulari di muffe, lieviti indesiderati e batteri patogeni come <em>Escherichia coli</em> o <em>Clostridium botulinum</em>, che non tollerano livelli elevati di salinità.',
    },
    {
      type: 'title',
      text: 'Successione Microbiologica: Come i LAB Colonizzano i Fermenti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La fermentazione latto non è portata avanti da una singola specie batterica, ma da una successione di diversi ceppi che dominano man mano che l\'acidità aumenta. In un tipico fermento vegetale, il ciclo si verifica in tre fasi distinte:',
    },
    {
      type: 'list',
      items: [
        '<strong>Fase 1 - Leuconostoc mesenteroides:</strong> Questo batterio eterofermentativo avvia la fermentazione. È molto attivo all\'inizio, producendo acido lattico, acido acetico, anidride carbonica (che aiuta a creare un\'atmosfera anaerobica) ed etanolo. Abbassa rapidamente il pH, preparando il terreno per le specie successive.',
        '<strong>Fase 2 - Lactobacillus plantarum e Lactobacillus brevis:</strong> Quando il pH scende sotto 5,0, <em>L. mesenteroides</em> muore e batteri omofermentativi acidotolleranti come <em>L. plantarum</em> prendono il sopravvento. Fermentano gli zuccheri semplici rimanenti esclusivamente in acido lattico, facendo scendere il pH rapidamente.',
        '<strong>Fase 3 - Pediococcus pentosaceus e altri:</strong> Nelle fermentazioni a lungo termine, questi batteri altamente acidotolleranti continuano a produrre acido fino all\'esaurimento completo degli zuccheri o fino a quando il pH raggiunge circa 3,5-3,8, stabilizzando l\'ambiente indefinitamente.'
      ],
    },
    {
      type: 'title',
      text: 'Proteggere la Tessitura Vegetale: La Connessione della Pectina',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un problema comune nella fermentazione domestica è l\'ammorbidimento. Le cellule vegetali sono tenute insieme da un polisaccaride strutturale chiamato pectina. I microrganismi di deterioramento producono enzimi chiamati <strong>pectinasi</strong>, che degradano la pectina e rompono le pareti vegetali, causando ammorbidimento. Mantenere un livello di salinità superiore al 2,0% inibisce direttamente l\'attività di questi enzimi pectinasici. Inoltre, gli ioni di calcio presenti nel sale marino non raffinato o aggiunti come cloruro di calcio possono reticolarsi con le molecole di pectina, formando pectato di calcio, che mantiene croccanti sottaceti e crauti.',
    },
    {
      type: 'title',
      text: 'Matematica della Salatura a Secco vs. Salamoia Umida',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Comprendere la formula per calcolare il sale è fondamentale. Per la salatura a secco (comunemente usata per verdure grattugiate come il cavolo per i crauti), la percentuale di sale viene calcolata esclusivamente sul peso della verdura. Per la salamoia umida (usata per verdure intere o a pezzi grandi come cetrioli o carote), la percentuale di sale deve essere calcolata sul <strong>peso totale sia delle verdure che dell\'acqua aggiunta</strong>. Calcolare il sale basandosi solo sul peso dell\'acqua è un errore comune che diluisce la salinità finale, poiché l\'acqua all\'interno delle verdure finisce per diluire la salamoia.',
    },
    {
      type: 'table',
      headers: ['Intervallo di Salinità', 'Stato Microbiologico', 'Usi Tipici', 'Livello di Sicurezza'],
      rows: [
        ['< 2,0%', 'Rischio Patogeni / Pericolo Muffe', 'Non raccomandato', 'Basso'],
        ['2,0% - 2,5%', 'Fioritura Ottimale dei Batteri Lattici', 'Crauti, Kimchi, Cetrioli sottaceto', 'Alto'],
        ['2,5% - 3,5%', 'Fermentazione lenta / Alta ritenzione di tessitura', 'Salse piccanti, aglio, ortaggi a radice', 'Alto'],
        ['> 3,5%', 'Inibizione batterica / Solo conservazione', 'Olive, peperoni stagionati, alta temperatura', 'Sicuro ma inattivo'],
      ],
    },
    {
      type: 'title',
      text: 'Perché Pesare il Sale Supera la Misurazione in Volume',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Misurare il sale in volume (cucchiai o cucchiaini) è notoriamente impreciso. Il sale da tavola è fine e compatto, un cucchiaino può pesare fino a 6 grammi. Al contrario, il sale kosher ha cristalli grandi e scagliosi con sacche d\'aria, pesando appena 4 grammi per cucchiaino. Il sale marino grosso si trova in una via di mezzo. Usare misure volumetriche può facilmente causare un fermento pericolosamente sotto-salato o completamente bloccato da un eccesso di sale. Pesare gli ingredienti in grammi su una bilancia digitale garantisce risultati costanti, sicuri e ripetibili.',
    },
    {
      type: 'title',
      text: 'Risoluzione dei Problemi e Buone Pratiche nella Fermentazione Latto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Per garantire una fermentazione di successo, segui sempre queste regole: Mantieni tutte le verdure completamente sommerse sotto la salamoia per prevenire la crescita di muffe aerobiche. Usa contenitori e pesi puliti. Fermenta a temperatura ambiente fresca (18°C a 22°C) per evitare che i batteri di fase 1 vengano soppiantati. Se si forma una pellicola bianca in superficie, verifica se si tratta di lievito Kahm (un lievito selvatico innocuo che si forma per esposizione all\'ossigeno) o muffa. La muffa è pelosa e colorata; se presente, il fermento va eliminato. Il lievito Kahm può essere rimosso, sebbene possa alterare il sapore.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
