import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calcolatore per Bicarbonato e Lievito Chimico: Neutralizzatore Acido Lievito";
const description = "Calcola il rapporto esatto tra bicarbonato e lievito chimico per la tua ricetta. Neutralizza ingredienti acidi come latticello e yogurt, evita il retrogusto metallico e ottieni una lievitazione perfetta ogni volta.";
const faq = [
  {
    question: "Perche sostituire il lievito chimico con il bicarbonato richiede un acido?",
    answer: "Il bicarbonato e una base pura. Ha bisogno di una fonte acida per attivarsi e rilasciare anidride carbonica. Senza acido sufficiente, il bicarbonato non reagira completamente, lasciando un sapore amaro e metallico nei prodotti da forno."
  },
  {
    question: "Qual e la differenza tra bicarbonato e lievito chimico?",
    answer: "Il bicarbonato e 100% bicarbonato di sodio, una base. Il lievito chimico e un agente lievitante completo, contenente bicarbonato piu un agente acidificante secco (come il cremor tartaro) e amido. Il lievito chimico si autoneutralizza."
  },
  {
    question: "Quanto lievito chimico equivale a 1 cucchiaino di bicarbonato?",
    answer: "Il bicarbonato e circa 3-4 volte piu potente del lievito chimico. Per sostituire 1 cucchiaino di bicarbonato, servono circa 3-4 cucchiaini di lievito chimico. Tuttavia, questa sostituzione aggiunge anche sali acidi che possono alterare il sapore; quindi e meglio usare il nostro calcolatore per conversioni precise."
  },
  {
    question: "Perche la mia torta sa di sapone o metallo?",
    answer: "Un retrogusto di sapone o metallico e il classico segno di bicarbonato non reagito. Quando non c'e abbastanza acido nell'impasto per neutralizzare completamente il bicarbonato, il residuo alcalino rimane dopo la cottura, conferendo quello sgradevole sapore chimico. Usa il nostro calcolatore per garantire una neutralizzazione completa."
  },
  {
    question: "Posso usare il cacao olandese come acido?",
    answer: "No. Il cacao olandese e stato trattato con un agente alcalinizzante per ridurre la sua acidita naturale (pH ~7-8). Solo il cacao naturale in polvere (pH ~5-6) e acido e neutralizzera il bicarbonato."
  },
  {
    question: "Come influisce il bicarbonato sulla doratura dei prodotti da forno?",
    answer: "Il bicarbonato aumenta il pH dell'impasto, rendendolo piu alcalino. Un pH piu alto accelera la reazione di Maillard, producendo croste piu scure e sapori piu intensi in biscotti e torte."
  }
];

const howTo = [
  {
    name: "Inserisci il peso della farina",
    text: "Inserisci il peso totale della farina nella tua ricetta in grammi o once per calcolare il potere lievitante totale necessario."
  },
  {
    name: "Aggiungi ingredienti acidi",
    text: "Seleziona gli ingredienti acidi della tua ricetta (come latticello, yogurt o succo di limone) e inserisci il loro peso."
  },
  {
    name: "Controlla il bilancio del pH",
    text: "Osserva la bilancia virtuale del pH. Una bilancia in equilibrio indica una neutralizzazione ottimale senza sapori metallici sgradevoli."
  },
  {
    name: "Misura gli agenti lievitanti",
    text: "Leggi la quantita raccomandata di bicarbonato per la neutralizzazione e il booster di lievito chimico necessario per raggiungere la lievitazione desiderata."
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
  slug: 'neutralizzatore-acido-lievito',
  title: 'Neutralizzatore Acido Lievito',
  description: 'Calcola il rapporto esatto tra bicarbonato e lievito chimico per la tua ricetta. Neutralizza ingredienti acidi come latticello e yogurt, evita il retrogusto metallico e ottieni una lievitazione perfetta ogni volta.',
  faqTitle: 'Domande Frequenti',
  ui: {
    title: "Neutralizzatore Acido Lievito",
    subtitle: "Stechiometria precisa per una lievitazione e un sapore perfetti in pasticceria",
    flourLabel: "Peso Farina",
    addAcidLabel: "Aggiungi Ingrediente Acido",
    weightLabel: "Peso",
    removeButton: "Rimuovi",
    bakingSodaNeeded: "Bicarbonato Neutralizzato",
    requiredBakingPowder: "Lievitazione Obiettivo",
    providedBakingPowderEquivalent: "Lievitazione dal Bicarbonato",
    boosterBakingPowder: "Extra Lievito Chimico Booster",
    resultsTitle: "Agenti Lievitanti Calcolati",
    statusBalanced: "Bilanciato",
    statusAcidic: "Eccesso di Acido",
    statusAlkaline: "Eccesso di Base",
    gramsUnit: "g",
    ouncesUnit: "oz",
    teaspoonsUnit: "cucchiaino",
    scaleBalanceTitle: "Bilancia pH Virtuale",
    acidListTitle: "Ingredienti Acidi",
    unitLabel: "Sistema di Misura",
    metricUnit: "Metrico (g)",
    imperialUnit: "Imperiale (oz)",
    acid_buttermilk: "Latticello",
    acid_yogurt: "Yogurt",
    acid_sour_cream: "Panna Acida",
    acid_honey: "Miele",
    acid_molasses: "Melassa",
    acid_cocoa: "Cacao Naturale in Polvere",
    acid_lemon_juice: "Succo di Limone",
    acid_vinegar: "Aceto"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: 'Punti Chiave per una Lievitazione Perfetta',
      items: [
        'Il bicarbonato ha bisogno di un acido per attivarsi; senza, il tuo dolce avra un sapore di sapone e metallico',
        'Il lievito chimico si autoneutralizza e fornisce potere lievitante extra come booster',
        'L\'obiettivo standard e il 4% del peso della farina in equivalente di lievito chimico per una lievitazione corretta',
        'Usa la tabella di neutralizzazione qui sotto per abbinare i tuoi ingredienti acidi alla quantita corretta di bicarbonato'
      ]
    },
    {
      type: 'title',
      text: 'La Chimica degli Agenti Lievitanti in Pasticceria',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La lievitazione chimica si basa su <strong>reazioni di neutralizzazione acido-base</strong> per produrre anidride carbonica (CO2), che rimane intrappolata nella matrice dell\'impasto, facendolo lievitare durante la cottura. Ottenere il rapporto corretto tra bicarbonato di sodio e ingredienti acidi e cruciale. <strong>Troppo bicarbonato</strong> lascia residui alcalini non reagiti, che conferiscono un sapore saponoso e metallico e una colorazione giallastra. <strong>Troppo acido</strong> puo produrre un dolce denso e piatto con poco volume.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '3-4x',
          label: 'Bicarbonato piu potente del lievito chimico',
          icon: 'mdi:flash'
        },
        {
          value: '4%',
          label: 'Lievitazione obiettivo (% peso farina)',
          icon: 'mdi:target'
        },
        {
          value: '1/4 cucchiaino',
          label: 'Bicarbonato per 120g di latticello/yogurt',
          icon: 'mdi:spoon-sugar'
        },
        {
          value: '0,0125',
          label: 'Rapporto di neutralizzazione (acidi lattici)',
          icon: 'mdi:scale-balance'
        }
      ]
    },
    {
      type: 'title',
      text: 'Bicarbonato vs. Lievito Chimico: Il Confronto Completo',
      level: 3
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Bicarbonato',
          icon: 'mdi:flask-outline',
          description: 'Bicarbonato di sodio puro (NaHCO3). Una base alcalina forte che richiede un acido esterno per attivarsi e produrre CO2.',
          points: [
            '3-4x piu potente del lievito chimico',
            'Ha bisogno di acido (latticello, yogurt, succo di limone) per reagire',
            'L\'eccesso causa sapore saponoso e metallico e mollica gialla',
            'Alza il pH; esalta la doratura Maillard nei biscotti',
            'Ad azione singola: rilascia CO2 immediatamente al contatto con il liquido'
          ]
        },
        {
          title: 'Lievito Chimico',
          icon: 'mdi:flask-round-bottom-outline',
          description: 'Un sistema lievitante completo contenente bicarbonato + sali acidi secchi + amido. Si autoneutralizza ed e affidabile.',
          highlight: true,
          points: [
            'Contiene il proprio acido (fosfato monocalcico, SAP)',
            'A doppia azione: rilascia CO2 quando mescolato E quando riscaldato',
            'Nessun retrogusto metallico; pH gia bilanciato',
            'Meno potente per grammo; usarne 3-4x di piu per eguagliare il bicarbonato',
            'Ideale come booster quando il bicarbonato da solo non basta per tutta la farina'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Ingrediente Acido', 'Peso Standard', 'Bicarbonato Neutralizzato', 'Rapporto Neutralizzazione'],
      rows: [
        ['Latticello / Yogurt / Panna Acida', '120g (1/2 Cup)', '1,5g (1/4 cucchiaino)', '0,0125'],
        ['Succo di Limone / Aceto', '15g (1 cucchiaio)', '1,5g (1/4 cucchiaino)', '0,1000'],
        ['Cacao Naturale in Polvere', '80g (1 Cup)', '3,0g (1/2 cucchiaino)', '0,0375'],
        ['Miele', '340g (1 Cup)', '3,0g (1/2 cucchiaino)', '0,0088'],
        ['Melassa', '328g (1 Cup)', '3,0g (1/2 cucchiaino)', '0,0091']
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Risoluzione Problemi: La Tua Lievitazione e Fuori Equilibrio?',
      badge: 'Controllo Rapido',
      html: '<strong>Se la torta si e sgonfiata:</strong> Troppo acido o troppo poco lievitante in generale; la CO2 e fuoriuscita prima che la struttura si fissasse.<br/><br/><strong>Se la torta e densa e piatta:</strong> Troppo acido senza abbastanza bicarbonato per neutralizzarlo, o potere lievitante totale insufficiente per il peso della farina.<br/><br/><strong>Se la torta sa di sapone o metallo:</strong> Eccesso di bicarbonato non reagito; aggiungi piu ingredienti acidi o riduci il bicarbonato.<br/><br/><strong>Se la torta ha macchie gialle:</strong> Segno classico di grumi di bicarbonato non disciolti e non reagiti; setaccia il bicarbonato con la farina la prossima volta.'
    },
    {
      type: 'title',
      text: 'Come Bilanciare gli Agenti Lievitanti ed Evitare il Sapore Metallico',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Per ottenere sapore e lievitazione ottimali, segui questo procedimento: <strong>Per prima cosa</strong>, determina la quantita di bicarbonato necessaria per neutralizzare completamente i componenti acidi del tuo impasto usando la tabella sopra. <strong>Poi</strong>, converti quel bicarbonato nel suo equivalente in lievito chimico (moltiplica per 4) e confrontalo con il potere lievitante totale necessario per la tua farina; tipicamente <strong>il 4% del peso della farina</strong> in equivalente di lievito chimico. <strong>Se c\'e un deficit</strong>, aggiungi il potere lievitante rimanente sotto forma di lievito chimico neutro come booster. Il nostro calcolatore fa tutto questo automaticamente.'
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        'Non sostituire mai il bicarbonato 1:1 con il lievito chimico; il bicarbonato e 3-4x piu potente e ha bisogno di acido',
        'Setaccia sempre il bicarbonato con gli ingredienti secchi per evitare grumi amari',
        'Il cacao olandese NON e acido; usa cacao naturale in polvere se conti sul cacao come acido',
        'Miele e melassa sono debolmente acidi; richiedono molto meno bicarbonato per grammo rispetto al succo di limone',
        'Lavora velocemente dopo aver mescolato: la lievitazione chimica inizia a reagire immediatamente al contatto con i liquidi'
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Rapporto di Neutralizzazione',
          definition: 'La proporzione di bicarbonato necessaria per neutralizzare completamente un dato peso di ingrediente acido. Rapporti piu bassi significano che l\'ingrediente e meno acido per grammo.'
        },
        {
          term: 'Potere Lievitante',
          definition: 'La quantita totale di CO2 che un agente lievitante puo produrre. Misurato in equivalenti di lievito chimico, dove il 4% del peso della farina e l\'obiettivo standard per torte e muffin.'
        },
        {
          term: 'Lievito Chimico a Doppia Azione',
          definition: 'Lievito chimico che rilascia CO2 in due fasi: prima quando viene mescolato con liquidi a temperatura ambiente, e poi quando esposto al calore del forno. Garantisce una lievitazione piu affidabile.'
        },
        {
          term: 'Reazione di Maillard',
          definition: 'Una reazione chimica tra amminoacidi e zuccheri riducenti che scurisce gli alimenti e crea sapori complessi. Esaltata da un pH piu alto dovuto all\'eccesso di bicarbonato; desiderabile nei biscotti, indesiderabile nelle torte delicate.'
        },
        {
          term: 'Bilancio del pH',
          definition: 'La misura dell\'acidita o alcalinita dell\'impasto. Un pH neutro (intorno a 7) significa che tutto il bicarbonato ha reagito con tutto l\'acido. Leggermente alcalino favorisce la doratura; acido favorisce la morbidezza.'
        }
      ]
    },
    {
      type: 'tip',
      html: '<strong>Doratura e pH:</strong> Sebbene la neutralizzazione completa sia fondamentale per il sapore, un impasto leggermente alcalino (dovuto a un piccolo eccesso di bicarbonato) puo essere desiderabile in torte al cioccolato e biscotti. Un pH piu alto esalta la doratura di Maillard, producendo colori piu scuri, bordi piu croccanti e note caramellate piu profonde. Per torte delicate alla vaniglia, punta a una neutralizzazione esatta per preservare un sapore puro e pulito.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
