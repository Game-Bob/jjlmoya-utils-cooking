import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calcolatore di Inoculazione e Idratazione del Koji";
const description = "Calcola il perfetto contenuto di umidità, il dosaggio di inoculazione delle spore e la temperatura di incubazione per produrre koji a casa. Evita lotti falliti con il nostro calcolatore gratuito di inoculazione e idratazione del koji.";
const faq = [
  {
    question: "Qual è il contenuto di umidità target per la cottura del substrato di koji?",
    answer: "Il contenuto di umidità totale ideale per riso o orzo al vapore quando si inocula il Koji è tra 30% e 35%. Corrisponde a un peso al vapore di circa 1,35x a 1,40x il peso secco iniziale."
  },
  {
    question: "Quanta polvere di spore (tane-koji) mi serve?",
    answer: "Il tasso di inoculazione standard è di 1 grammo di miscela di spore standard per 1 chilogrammo di substrato secco. Se si utilizzano spore concentrate, serve meno (0,5 g), mentre le miscele diluite richiedono di più (2,0 g)."
  },
  {
    question: "Perché il controllo della temperatura è fondamentale durante l'incubazione del koji?",
    answer: "Aspergillus oryzae cresce in modo ottimale tra 28C e 34C. Se la temperatura supera i 38C, la muffa può surriscaldarsi, smettere di crescere o produrre spore verdi/neri indesiderati. Sotto i 20C, la crescita rallenta significativamente."
  },
  {
    question: "Cosa succede durante la fase esotermica?",
    answer: "Dopo 18-24 ore di incubazione, il koji inizia a crescere rapidamente e genera il proprio calore. Durante questo picco esotermico, è necessario mescolare il substrato e ridurre il calore dell'incubatore per evitare il surriscaldamento."
  }
];

const howTo = [
  {
    name: "Inserisci il peso secco del substrato",
    text: "Inserisci il peso secco iniziale del tuo riso o orzo per stabilire le soglie di idratazione target."
  },
  {
    name: "Registra il peso al vapore",
    text: "Inserisci il peso effettivo al vapore dopo la cottura. Il calcolatore determina la percentuale di umidita e verifica se rientra nell'intervallo ideale del 30-35%."
  },
  {
    name: "Calcola il dosaggio delle spore",
    text: "Seleziona la potenza delle tue spore (standard, concentrata o diluita) per ottenere il peso esatto di polvere di spore da inoculare."
  },
  {
    name: "Monitora i parametri di incubazione",
    text: "Regola la temperatura e l'umidita relativa per simulare la crescita del micelio e rivedi la curva termica delle 48 ore."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
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
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'calcolatore-inoculazione-koji',
  title: 'Calcolatore di Inoculazione e Idratazione del Koji',
  description: 'Calcola il perfetto contenuto di umidita, il dosaggio di inoculazione delle spore e la temperatura di incubazione per produrre koji a casa. Evita lotti falliti con il nostro calcolatore gratuito di inoculazione e idratazione del koji.',
  faqTitle: 'Domande Frequenti',
  ui: {
    title: 'Analizzatore di Inoculazione del Koji',
    subtitle: 'Ottimizza i parametri di fermentazione solida del koji',
    dryWeightLabel: 'Peso Secco del Substrato',
    steamedWeightLabel: 'Peso Effettivo al Vapore',
    targetRangeLabel: 'Intervallo di Peso al Vapore Target',
    moistureLabel: 'Umidita Attuale',
    potencyLabel: 'Potenza delle Spore',
    standardPotency: 'Spore Standard',
    concentratedPotency: 'Concentrate',
    dilutedPotency: 'Miscela Diluita',
    sporeDosageLabel: 'Dosaggio di Spore',
    tempLabel: "Temperatura dell'Incubatore",
    humidityLabel: 'Umidita Relativa',
    statusIdeal: 'Incubazione Ideale',
    statusSlow: 'Crescita Lenta',
    statusInhibited: 'Inibito / Freddo',
    statusOverheating: 'Surriscaldamento / Sporulazione',
    timelineTitle: 'Ciclo Termico di Incubazione 48h',
    stage1Name: '0-18h: Riscaldamento',
    stage2Name: '18-36h: Picco Esotermico',
    stage3Name: '36-48h: Maturazione'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Come Fare il Koji: L\'Umidita, il Dosaggio di Spore e la Temperatura Perfetti per Aspergillus Oryzae',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Produrre koji a casa richiede tre cose che funzionino correttamente: <strong>idratazione del substrato</strong>, <strong>densita di inoculazione delle spore</strong> e <strong>controllo della temperatura di incubazione</strong>. Se una di queste fallisce, il lotto puo surriscaldarsi, non inocularsi o sviluppare la muffa sbagliata. Il nostro <strong>calcolatore di inoculazione del koji</strong> elimina le congetture calcolando il peso al vapore target, il dosaggio esatto delle spore e lo stato di incubazione in tempo reale in base ai tuoi input specifici.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '30-35%',
          label: 'Umidita Target',
          icon: 'mdi:water-percent'
        },
        {
          value: '1 g/kg',
          label: 'Tasso Standard di Spore',
          icon: 'mdi:seed-outline'
        },
        {
          value: '28-34C',
          label: 'Temperatura Ideale',
          icon: 'mdi:thermometer'
        },
        {
          value: '48 h',
          label: 'Incubazione Totale',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Perche il Contenuto di Umidita Determina la Qualita del Koji',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Il fattore piu importante per una coltivazione di koji di successo e <strong>l\'umidita del substrato</strong>. Quando il riso o l\'orzo vengono cotti al vapore, i granuli di amido gelatinizzano e assorbono acqua, diventando accessibili agli enzimi prodotti da Aspergillus oryzae. L\'intervallo di umidita ideale e ristretto: <strong>30% a 35%</strong>. Sotto il 30%, il micelio non puo assorbire abbastanza acqua per crescere e la produzione enzimatica si arresta. Oltre il 35%, i chicchi diventano appiccicosi e si agglomerano, riducendo la porosita dell\'aria e soffocando la muffa aerobica.'
    },
    {
      type: 'list',
      items: [
        '<strong>Troppo secco (sotto il 30%):</strong> La crescita del micelio e stentata, la produzione enzimatica cala e il koji non colonizza mai completamente il chicco.',
        '<strong>Troppo umido (oltre il 35%):</strong> I chicchi si attaccano tra loro, le sacche d\'aria collassano e batteri o muffe indesiderate possono superare Aspergillus oryzae.',
        '<strong>Intervallo target (30-35%):</strong> Il chicco risulta sodo, i singoli granelli si separano facilmente e il micelio si diffonde uniformemente entro 48 ore.',
        '<strong>Come misurare:</strong> Pesa il tuo grano secco, cuocilo al vapore, poi pesalo di nuovo. Il calcolatore calcola la percentuale di umidita esatta da questi due numeri.'
      ]
    },
    {
      type: 'table',
      headers: ['Tipo di Grano', 'Peso Secco', 'Peso al Vapore Target', 'Tempo di Ammollo', 'Tempo di Vapore'],
      rows: [
        ['Riso Bianco (grano corto)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['Riso Bianco (grano lungo)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['Orzo Perlato', '1000 g', '1350-1400 g', '4-8 h', '40-50 min'],
        ['Riso Integrale', '1000 g', '1350-1400 g', '8-12 h', '45-60 min']
      ]
    },
    {
      type: 'title',
      text: 'Inoculazione delle Spore: Quanto Tane-Koji Serve?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La densita di inoculazione influisce direttamente sulla rapidita con cui la muffa colonizza il substrato e su quanto e competitiva contro i contaminanti. Il tasso standard e di <strong>1 grammo di miscela di spore per chilogrammo di substrato secco</strong>, ma varia in base al tipo di spora.'
    },
    {
      type: 'proscons',
      title: 'Scegliere il Tuo Tipo di Spora',
      items: [
        {
          pro: 'Le spore standard sono il formato piu comune, tolleranti per i principianti e ben documentate nella letteratura della produzione casalinga.',
          con: 'Volume di polvere maggiore per lotto e possono contenere riempitivo che non contribuisce all\'inoculazione.'
        },
        {
          pro: 'Le spore concentrate usano la meta della polvere per la stessa inoculazione, hanno maggiore purezza e sono piu economiche per lotti grandi.',
          con: 'Piu facili da sovradosare, richiedono una bilancia precisa (risoluzione 0,01 g) e lasciano meno margine di errore in caso di sottodosaggio.'
        },
        {
          pro: 'Le miscele diluite si distribuiscono facilmente su grandi superfici, sono piu tolleranti con la miscelazione non uniforme e si adattano ai principianti che preferiscono una copertura visibile.',
          con: 'Usano piu polvere per lotto e possono introdurre eccesso di amido dal riempitivo.'
        }
      ]
    },
    {
      type: 'title',
      text: 'La Curva di Calore Esotermico: Perche il Koji Genera il Proprio Calore',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Mentre Aspergillus oryzae consuma gli amidi e li trasforma in zuccheri semplici, genera calore metabolico. Tra le ore <strong>18 e 36</strong> di incubazione, l\'attivita biologica raggiunge il picco, producendo un\'impennata esotermica che puo innalzare la temperatura del letto di grano di 5-10C al di sopra della temperatura ambiente dell\'incubatore.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Segni Che il Tuo Koji si Sta Surriscaldando',
      html: 'Se la temperatura del letto di grano supera i <strong>38C</strong>, gli enzimi della muffa iniziano a denaturarsi e il fungo passa in modalita riproduttiva, producendo <strong>spore verdi o nere</strong>. Il lotto odorera di ammoniaca invece che dolce e di castagna. Devi mescolare immediatamente il substrato e ridurre la temperatura dell\'incubatore per riportarla sotto i 34C.'
    },
    {
      type: 'tip',
      title: 'Il Programma di Giro di 12 Ore',
      html: 'A partire dall\'ora 18, rompi il letto di grano e mescolalo ogni 12 ore. Questo rilascia il calore intrappolato, ridistribuisce l\'umidita e fornisce al micelio accesso a ossigeno fresco. Usa mani pulite e disinfettate o un cucchiaio sterile.'
    },
    {
      type: 'tip',
      title: 'Anche l\'Umidita Conta',
      html: 'Mantieni l\'umidita relativa sopra il <strong>65%</strong> durante l\'incubazione. Sotto il 40%, il substrato si secca e la crescita si ferma. Sopra il 90%, la condensa puo favorire la crescita batterica sulla superficie del grano.'
    },
    {
      type: 'tip',
      title: 'Fidati del Tuo Naso',
      html: 'Il koji sano odora di castagne arrostite dolci o di funghi freschi. Se rilevi ammoniaca, acidita o marciume, il lotto potrebbe essersi surriscaldato o essere stato contaminato. Rimuovi e getta immediatamente il grano interessato.'
    },
    {
      type: 'card',
      icon: 'mdi:rice',
      title: 'Produzione di Sake e Miso',
      html: 'Il riso inoculato con koji e il fondamento del <strong>sake</strong>, del <strong>miso</strong> e dell\'<strong>amazake</strong>. Un controllo preciso dell\'umidita garantisce il corretto sviluppo enzimatico per la conversione dell\'amido in zucchero.'
    },
    {
      type: 'card',
      icon: 'mdi:soy-sauce',
      title: 'Salsa di Soia e Tamari',
      html: 'Il koji coltivato su <strong>soia</strong> o una miscela soia-grano guida la fermentazione che produce salsa di soia ricca di umami. Una temperatura costante evita sapori sgradevoli.'
    },
    {
      type: 'card',
      icon: 'mdi:shaker-outline',
      title: 'Shio Koji e Garum',
      html: '<strong>Shio koji</strong> (koji fermentato al sale) e i <strong>garum di carne</strong> si basano su grano completamente colonizzato. Il nostro calcolatore garantisce che il tuo substrato sia nella finestra di umidita ideale prima dell\'inoculazione.'
    },
    {
      type: 'title',
      text: 'Glossario di Incubazione del Koji',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Tane-Koji',
          definition: 'La polvere di spore utilizzata per inoculare il grano cotto al vapore. Tipicamente spore di Aspergillus oryzae mescolate con un supporto di amido come la farina di riso.'
        },
        {
          term: 'Fase Esotermica',
          definition: 'Il periodo tra 18 e 36 ore di incubazione in cui Aspergillus oryzae genera abbastanza calore metabolico per innalzare la temperatura del letto di grano al di sopra dei livelli ambientali.'
        },
        {
          term: 'Gelatinizzazione',
          definition: 'Il processo di riscaldamento dell\'amido in presenza di acqua in modo che i granuli si gonfino e diventino accessibili agli enzimi amilasi prodotti dalla muffa.'
        },
        {
          term: 'Sporulazione',
          definition: 'Quando la muffa passa dalla crescita vegetativa alla modalita riproduttiva, diventando verde o nera. Questo e innescato dallo stress termico superiore a 38C e rovina il lotto per uso culinario.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Punti Chiave per un Koji Perfetto',
      items: [
        'Obiettivo 30-35% di umidita nel grano al vapore. Usa il calcolatore per trovare il tuo peso al vapore target esatto.',
        'Inocula a 1 g/kg per spore standard, 0,5 g/kg per quelle concentrate o 2 g/kg per miscele diluite.',
        'Mantieni 28-34C e oltre il 65% di umidita durante l\'incubazione. Mescola ogni 12 ore dopo l\'ora 18.',
        'Osserva il picco esotermico a 18-36 ore. Se la temperatura supera i 38C, mescola immediatamente e abbassa il calore.',
        'Fidati dei tuoi sensi: aroma dolce di castagna = buon koji. Odore di ammoniaca o acido = surriscaldamento o contaminazione.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
