import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Monitoraggio Punto di Fumo dell\'Olio: Stimatore della Durata e Degradazione dell\'Olio da Frittura';
const description = 'Monitora la qualità dell\'olio da frittura e stima il calo del punto di fumo. Tieni traccia di utilizzi, temperature e tipi di alimenti per prevenire l\'accumulo dannoso di composti polari.';

const faq = [
  {
    question: 'Perché il punto di fumo dell\'olio da frittura diminuisce nel tempo?',
    answer: 'Ogni volta che l\'olio viene riscaldato a temperature di frittura, la degradazione termica, l\'idrolisi e l\'ossidazione scompongono i trigliceridi in acidi grassi liberi (FFA), monoacilgliceroli e diacilgliceroli. Questi prodotti di decomposizione hanno un punto di ebollizione e di fumo molto più basso rispetto ai trigliceridi intatti, facendo sì che l\'olio fumi a temperature inferiori con l\'uso ripetuto.',
  },
  {
    question: 'Cosa sono i composti polari e perché sono regolamentati?',
    answer: 'I composti polari (TPC) sono i prodotti di degradazione che si formano durante la frittura. Quando superano il 25% del peso dell\'olio, l\'olio è considerato degradato, ossidato e dannoso per il consumo, causando sapori sgradevoli e potenziali rischi cardiovascolari. Molti paesi europei impongono per legge di smaltire l\'olio da frittura quando il TPC supera il 25%.',
  },
  {
    question: 'In che modo la panatura o la farina influiscono sulla degradazione dell\'olio?',
    answer: 'Panature, pastelle e farina sfusa rilasciano particelle di cibo nell\'olio caldo. Queste particelle si carbonizzano rapidamente a temperature superiori ai 180 gradi Celsius, rilasciando acidi grassi liberi e agendo come catalizzatori che accelerano la degradazione termica. Gli amidi puliti come le patate degradano l\'olio molto più lentamente.',
  },
  {
    question: 'Qual è il limite di sicurezza per il riutilizzo dell\'olio?',
    answer: 'Come regola generale, gli oli raffinati per alte temperature come colza o arachide possono essere riutilizzati da 5 a 8 volte in condizioni pulite. Tuttavia, gli oli non raffinati o gli oli esposti a temperature superiori ai 190 gradi Celsius o a cibi impanati dovrebbero essere smaltiti dopo 1-3 utilizzi.',
  },
];

const howTo = [
  {
    name: 'Seleziona il Tipo di Olio da Frittura',
    text: 'Scegli il tuo olio dall\'elenco del database. Gli oli raffinati per alte temperature hanno un punto di fumo iniziale più alto rispetto alle opzioni non raffinate.',
  },
  {
    name: 'Tieni Traccia dei Cicli di Frittura',
    text: 'Inserisci il numero totale di sessioni di frittura a cui è stato sottoposto il lotto attuale di olio.',
  },
  {
    name: 'Inserisci la Temperatura di Frittura',
    text: 'Regola il cursore per impostare la temperatura media delle tue sessioni di frittura. Temperature superiori a 180 gradi Celsius accelerano la decomposizione.',
  },
  {
    name: 'Identifica il Tipo di Rivestimento Alimentare',
    text: 'Specifica se stai friggendo amidi puliti o cibi infarinati/impanati che lasciano residui carbonizzati.',
  },
  {
    name: 'Controlla il Punto di Fumo e lo Stato di Smaltimento',
    text: 'Verifica il punto di fumo degradato e l\'indicatore di smaltimento. Smaltisci immediatamente se la salute dell\'olio entra nella zona critica.',
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent = {
  slug: 'monitor-punto-fumo-olio',
  title: 'Monitoraggio Punto di Fumo dell\'Olio',
  description: 'Monitora la qualità dell\'olio da frittura e stima il calo del punto di fumo. Tieni traccia di utilizzi, temperature e tipi di alimenti per prevenire l\'accumulo dannoso di composti polari.',
  faqTitle: 'Domande Frequenti',
  ui: {
    oilPresetLabel: 'Tipo di Olio da Frittura',
    presetAvocadoRefined: 'Olio di Avocado (Raffinato)',
    presetSunflowerRefined: 'Olio di Girasole (Raffinato)',
    presetPeanutRefined: 'Olio di Arachidi (Raffinato)',
    presetCanolaRefined: 'Olio di Colza (Raffinato)',
    presetOliveEV: 'Olio Extra Vergine di Oliva',
    presetOlivePomace: 'Olio di Sansa di Oliva',
    presetCoconutUnrefined: 'Olio di Cocco (Non Raffinato)',
    presetSunflowerUnrefined: 'Olio di Girasole (Non Raffinato)',
    usesLabel: 'Cicli di Frittura (Utilizzi)',
    tempLabel: 'Temperatura di Frittura',
    foodTypeLabel: 'Preparazione / Rivestimento Alimenti',
    optionStarch: 'Amido Pulito (Patate, Patatine Fritte)',
    optionBreading: 'Cibi Infarinati, in Pastella o Impanati',
    baseSmokePointLabel: 'Punto di Fumo Iniziale',
    currentSmokePointLabel: 'Punto di Fumo Degradato',
    polarCompoundsLabel: 'Composti Polari (TPC)',
    polymerizationLabel: 'Salute di Polimerizzazione dell\'Olio',
    statusLabel: 'Profilo di Sicurezza dell\'Olio',
    statusGood: 'SICURO DA RIUTILIZZARE',
    statusCaution: 'ATTENZIONE - FILTRARE PRESTO',
    statusDiscard: 'SMALTIRE IMMEDIATAMENTE',
    adviceGood: 'Le proprietà dell\'olio sono stabili. Continua a friggere, ma filtra i residui di cibo dopo il raffreddamento.',
    adviceCaution: 'La degradazione è iniziata. Il punto di fumo è diminuito. Si consiglia di filtrare e utilizzare solo un\'altra volta.',
    adviceDiscard: 'Raggiunta una degradazione critica. Alta concentrazione di composti polari. Smaltire per prevenire irrancidimento e rischi per la salute.',
    gaugeSafe: 'Sicuro',
    gaugeCaution: 'Attenzione',
    gaugeDiscard: 'Gettare',
    limitLabel: 'Limite',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'La Chimica della Frittura Profonda: Perché gli Oli si Degradano',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La frittura profonda è una delle tecniche culinarie più intense dal punto di vista chimico. Quando il cibo viene immerso nell\'olio ad alte temperature (tipicamente tra 160 e 190 gradi Celsius), l\'olio è esposto simultaneamente al calore, all\'umidità del cibo e all\'ossigeno dell\'aria. Questo innesca tre reazioni chimiche distinte: idrolisi (l\'acqua rompe i legami esterei), ossidazione (l\'ossigeno crea idroperossidi) e polimerizzazione (le molecole degradate si legano in catene spesse e viscose). Man mano che queste reazioni procedono, la concentrazione di composti polari totali (TPC) aumenta e la temperatura alla quale l\'olio inizia a decomporsi e fumare diminuisce significativamente.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '25% TPC', label: 'Limite Legale di Smaltimento', icon: 'mdi:alert-octagon' },
        { value: '180°C', label: 'Soglia Critica di Temperatura', icon: 'mdi:thermometer-alert' },
        { value: '2.2x', label: 'Tasso di Decadimento da Panatura', icon: 'mdi:chart-timeline-variant' },
        { value: 'FFA', label: 'Causa: Acidi Grassi Liberi', icon: 'mdi:molecule' },
      ],
    },
    {
      type: 'title',
      text: 'Composti Polari e Normative Sanitarie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I Composti Polari Totali (TPC) rappresentano lo standard internazionale per misurare il livello di degradazione dei grassi da frittura. Nelle cucine professionali, l\'uso di olio con una concentrazione di TPC superiore al 25% è legalmente vietato in diversi paesi per motivi di sicurezza. Questi composti polari sono inibitori dell\'assorbimento, riducono l\'efficienza di cottura e degradano la croccantezza della crosta fritta. Ancora più importante, consumare regolarmente olio ossidato contribuisce all\'ingestione di radicali liberi e composti tossici associati a problemi cardiovascolari.',
    },
    {
      type: 'title',
      text: 'Confronto tra Tipi di Olio: Punti di Fumo Iniziali',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Oli Raffinati (Alta Temperatura)',
          icon: 'mdi:shield-check',
          description: 'Oli trattati per rimuovere composti volatili, acidi grassi liberi e impurità. Hanno punti di fumo iniziali eccezionalmente alti.',
          points: ['Avocado Raffinato: 270°C / 518°F', 'Girasole Raffinato: 232°C / 450°F', 'Arachidi Raffinato: 232°C / 450°F', 'Alta resistenza alla degradazione iniziale'],
        },
        {
          title: 'Oli Non Raffinati (Bassa Temperatura / Aromatici)',
          icon: 'mdi:leaf',
          description: 'Oli spremuti a freddo o vergini contenenti elevate quantità di elementi naturali, minerali e acidi grassi liberi.',
          highlight: true,
          points: ['Oliva Extra Vergine: 190°C / 374°F', 'Cocco Non Raffinato: 177°C / 350°F', 'Girasole Non Raffinato: 107°C / 225°F', 'Si degrada estremamente in fretta sotto il calore'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tabella di Riferimento: Punto di Fumo e Massimo Riutilizzo dell\'Olio da Frittura',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Varietà di Olio', 'Punto di Fumo Iniziale (°C)', 'Punto di Fumo Iniziale (°F)', 'Stato / Lavorazione', 'Utilizzi Massimi Consigliati'],
      rows: [
        ['Olio di Avocado (Raffinato)', '270°C', '518°F', 'Raffinato', 'da 10 a 12 utilizzi'],
        ['Olio di Sansa di Oliva', '238°C', '460°F', 'Raffinato', 'da 8 a 10 utilizzi'],
        ['Olio di Girasole (Raffinato)', '232°C', '450°F', 'Raffinato', 'da 6 a 8 utilizzi'],
        ['Olio di Arachidi (Raffinato)', '232°C', '450°F', 'Raffinato', 'da 6 a 8 utilizzi'],
        ['Olio di Colza (Raffinato)', '204°C', '400°F', 'Raffinato', 'da 5 a 7 utilizzi'],
        ['Olio Extra Vergine di Oliva', '190°C', '374°F', 'Spremuto a Freddo', 'da 2 a 3 utilizzi'],
        ['Olio di Cocco (Non Raffinato)', '177°C', '350°F', 'Non Raffinato', 'da 1 a 2 utilizzi'],
        ['Olio di Girasole (Non Raffinato)', '107°C', '225°F', 'Non Raffinato', 'Non utilizzare per frittura profonda'],
      ],
    },
    {
      type: 'title',
      text: 'Segnali Critici di Allarme dell\'Olio Degradato',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pericolo: Quando l\'Olio da Frittura Diventa Tossico',
      html: 'Non continuare a riutilizzare l\'olio se osservi uno dei seguenti sintomi: <strong>odore rancido o di sapone</strong>, un colore scuro e torbido, oppure <strong>schiuma eccessiva</strong> intorno al cibo. Se l\'olio inizia a fumare a temperature di cottura normali (170-180°C), indica che il punto di fumo è crollato a causa dell\'accumulo estremo di Acidi Grassi Liberi (FFA). Cucinare con olio degradato trasferisce composti polari tossici ed elementi cancerogeni negli alimenti, danneggiando sia il sapore che la salute.',
    },
    {
      type: 'title',
      text: 'Come Prolungare la Qualità dell\'Olio da Frittura',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Filtra Immediatamente i Residui Carbonizzati',
      html: 'Friggere pastella o cibi infarinati lascia micro-particelle che si depositano sul fondo della friggitrice. Queste particelle continuano a carbonizzarsi durante la cottura, agendo come catalizzatori che accelerano il decadimento dell\'olio. Per rallentare questo processo, schiuma sempre la superficie durante la frittura e <strong>filtra l\'olio raffreddato</strong> attraverso una rete fine, una garza o un filtro da caffè dopo ogni singola sessione di frittura. Conserva l\'olio filtrato in un contenitore di vetro sigillato in un luogo buio e fresco.',
    },
    {
      type: 'title',
      text: 'Buone Pratiche per la Frittura Profonda',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Asciuga bene le superfici degli alimenti</strong> - L\'umidità in eccesso innesca una rapida idrolisi, scomponendo l\'olio in acidi grassi liberi.',
        '<strong>Evita di salare prima della frittura</strong> - Il sale agisce come catalizzatore che accelera l\'ossidazione dell\'olio; condisci gli alimenti immediatamente dopo averli rimossi dall\'olio caldo.',
        '<strong>Mantieni temperature ottimali</strong> - Rimani tra 170°C e 180°C. Temperature più alte accelerano la decomposizione termica, mentre temperature più basse fanno assorbire grasso in eccesso al cibo.',
        '<strong>Non rabboccare olio vecchio</strong> - Mescolare olio fresco con olio degradato accelera la decomposizione del nuovo olio invece di ripristinarlo.',
      ],
    },
    {
      type: 'title',
      text: 'Glossario di Frittura Profonda e Degradazione Lipidica',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Punto di Fumo', definition: 'La temperatura alla quale un olio o grasso inizia a decomporsi continuamente e produrre fumo bluastro visibile, rilasciando acroleina.' },
        { term: 'Composti Polari Totali (TPC)', definition: 'L\'indicatore standard globale per la degradazione dell\'olio, che rappresenta la percentuale in peso totale di composti ossidati, FFA e polimeri.' },
        { term: 'Idrolisi', definition: 'Una reazione chimica in cui le molecole d\'acqua scompongono i trigliceridi in acidi grassi liberi e glicerolo. Innescata dall\'umidità degli alimenti.' },
        { term: 'Polimerizzazione', definition: 'Il processo in cui le molecole di olio danneggiate dal calore si uniscono per formare grandi strutture macromolecolari, aumentando la viscosità dell\'olio.' },
        { term: 'Acidi Grassi Liberi (FFA)', definition: 'Acidi carbossilici rilasciati dai trigliceridi durante l\'idrolisi. Riducono direttamente il punto di fumo iniziale del grasso.' },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
