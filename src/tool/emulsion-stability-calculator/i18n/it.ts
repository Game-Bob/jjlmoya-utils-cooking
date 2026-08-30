import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calcolatore di Stabilità dell'Emulsione e Limite di Olio";
const description = "Scopri esattamente quanto olio la tua maionese, aioli o vinaigrette può sopportare prima di rompersi. Previeni salse smontate con il nostro calcolatore gratuito di stabilità dell'emulsione.";

const faq = [
  {
    question: "Quanto olio posso aggiungere alla mia maionese prima che si rompa?",
    answer: "Dipende dall'emulsionante. Il tuorlo d'uovo supporta fino a ~78% di olio (circa 3,5 volte il volume d'acqua), la senape fino al 70%, la lecitina di soia fino all'82% e il polisorbato fino all'85%. Usa il calcolatore qui sopra per ottenere il massimo esatto per le tue quantità specifiche."
  },
  {
    question: "Perché la mia emulsione si è rotta o separata?",
    answer: "Un'emulsione brixca o si rompe quando la frazione volumetrica di olio supera il limite massimo di impaccamento dell'emulsionante. A quel punto, le goccioline d'olio vengono compresse così strettamente che si fondono e la miscela si separa. Questo accade all'istante - non è un processo graduale."
  },
  {
    question: "Come posso riparare una maionese o un aioli rotta?",
    answer: "Inizia con un tuorlo d'uovo fresco o un cucchiaio di acqua tiepida in una ciotola pulita. Versa lentamente la miscela rotta mentre sbatti costantemente, esattamente come se stessi aggiungendo olio crudo. Il calcolatore qui sopra ti dice esattamente quanta acqua o tuorlo ti serve."
  },
  {
    question: "Aggiungere olio troppo velocemente provoca la rottura di un'emulsione?",
    answer: "Aggiungere olio troppo velocemente può sovraccaricare temporaneamente l'emulsionante, ma la vera causa della rottura è sempre un rapporto di fasi errato. Se la tua frazione di olio rimane al di sotto del limite dell'emulsionante, l'emulsionante rimane stabile indipendentemente dalla velocità. Se supera il limite, la rottura è inevitabile."
  },
  {
    question: "Qual è la differenza tra tuorlo d'uovo e senape come emulsionanti?",
    answer: "Il tuorlo d'uovo (78% max di olio) contiene lecitina e lipoproteine che formano una pellicola robusta intorno alle goccioline. La senape (70% max di olio) si basa su mucillagine e proteine - è più debole ma aggiunge sapore. La lecitina di soia (82%) e il polisorbato (85%) sono emulsionanti industriali altamente efficienti."
  }
];

const howTo = [
  {
    name: "Seleziona il tuo emulsionante",
    text: "Scegli l'emulsionante nella tua ricetta - tuorlo d'uovo per la maionese classica, senape per le vinaigrette, o lecitina di soia/polisorbato per la cucina modernista. Ognuno stabilisce un diverso limite massimo di olio."
  },
  {
    name: "Inserisci il volume della fase acquosa",
    text: "Inserisci i millilitri totali dei tuoi ingredienti acquosi: acqua, aceto, succo di limone, vino o qualsiasi liquido a base d'acqua. Il calcolatore aggiunge automaticamente il contenuto d'acqua dell'emulsionante scelto."
  },
  {
    name: "Imposta il tuo volume di olio",
    text: "Inserisci la quantità di olio che intendi utilizzare. Usa il cursore o digita il valore. Il calcolatore mostra istantaneamente se questa quantità produrrà un'emulsione stabile o ne causerà la rottura."
  },
  {
    name: "Leggi il risultato di stabilità e correggi se necessario",
    text: "Controlla l'indicatore della frazione volumetrica di olio. Se stabile, sei a posto. Se rotta, il pannello di salvataggio ti dice esattamente quanta acqua (in ml) o quanti tuorli d'uovo aggiuntivi devi aggiungere per ripristinare l'equilibrio."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo' as const,
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
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'calcolatore-stabilita-emulsione',
  title,
  description,
  faqTitle: 'Domande Frequenti',
  ui: {
    title: 'Analizzatore di Stabilità dell\'Emulsione',
    subtitle: 'Quanto olio può sopportare la tua salsa prima di rompersi?',
    waterLabel: 'Fase Acquosa (ml)',
    oilLabel: 'Volume di Olio (ml)',
    emulsifierLabel: 'Tipo di Emulsionante',
    yolkOption: 'Tuorlo d\'Uovo',
    mustardOption: 'Senape',
    soyLecithinOption: 'Lecitina di Soia',
    polysorbateOption: 'Polisorbato',
    stableStatus: 'Emulsione Stabile',
    brokenStatus: 'Emulsione Rotta',
    ratioLabel: 'Frazione Volumetrica di Olio',
    maxLimitLabel: 'Limite Massimo di Olio',
    fixTitle: 'Strategia di Recupero',
    waterFixText: 'Aggiungi acqua per ripristinare l\'equilibrio di fase:',
    yolkFixText: 'In alternativa, usa tuorlo d\'uovo aggiuntivo:',
    idealRangeText: 'L\'intervallo ideale è sotto il limite critico di impaccamento del 74% all\'80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Quanto Olio Può Sopportare una Maionese o un Aioli Prima di Rompersi?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Ogni cuoco si è fatto questa domanda: <strong>perché la mia maionese si è smontata?</strong> La risposta è più semplice di quanto sembri. Un\'emulsione - che sia una classica aioli, una cremosa vinaigrette o una schiuma modernista - può contenere solo una quantità finita di olio prima di collassare. Il nostro <strong>calcolatore di stabilità dell\'emulsione</strong> ti dice esattamente dove si trova quel punto di rottura, in base ai tuoi ingredienti e porzioni specifici.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '78%', label: 'Tuorlo Max Olio', icon: 'mdi:egg-outline' },
        { value: '85%', label: 'Limite Polisorbato', icon: 'mdi:flask-outline' },
        { value: '74%', label: 'Impaccamento Teorico', icon: 'mdi:sphere' },
        { value: '15 ml', label: 'Acqua del Tuorlo', icon: 'mdi:water' }
      ]
    },
    {
      type: 'list',
      items: [
        '<strong>Aggiungi olio troppo velocemente</strong> - La velocità raramente è la vera causa. Se la frazione di olio rimane al di sotto del limite dell\'emulsionante, l\'emulsione terrà indipendentemente dalla velocità di versamento.',
        '<strong>I tuoi ingredienti sono troppo freddi</strong> - Le uova o l\'olio freddi aumentano la viscosità e rendono più difficile la formazione delle goccioline. Porta sempre gli ingredienti a temperatura ambiente.',
        '<strong>Hai superato il limite di olio per il tuo emulsionante</strong> - Ogni emulsionante ha una frazione massima di impaccamento. Tuorlo d\'uovo fino al 78%, senape 70%, lecitina di soia 82% e polisorbato 85%.',
        '<strong>La tua fase acquosa è troppo piccola</strong> - Senza abbastanza acqua per circondare le goccioline d\'olio, queste non hanno altro posto dove andare se non fondersi tra loro.'
      ]
    },
    {
      type: 'title',
      text: 'Quale Emulsionante Dovresti Usare? Un Confronto Pratico',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Scegliere l\'emulsionante giusto dipende dalla tua ricetta, dal profilo aromatico e dalla capacità di olio desiderata. Ecco come si confrontano i quattro emulsionanti culinari più comuni.'
    },
    {
      type: 'proscons',
      title: 'Tuorlo d\'Uovo',
      items: [
        { pro: 'Massima compatibilità di sapore per salse classiche', con: 'Aggiunge colesterolo e sapore d uovo' },
        { pro: 'Contiene lecitina e lipoproteine per emulsioni robuste', con: 'Richiede un controllo attento della temperatura' },
        { pro: 'Aggiunge colore naturale e ricchezza', con: 'Non adatto per preparazioni vegane' },
        { pro: 'Funziona con una frazione di olio fino al 78%', con: 'Limitato a circa 15 ml di apporto d acqua per tuorlo' }
      ]
    },
    {
      type: 'proscons',
      title: 'Senape',
      items: [
        { pro: 'Aggiunge sapore piccante e complessità ai condimenti', con: 'Capacità massima di olio inferiore (70%)' },
        { pro: 'Ampiamente disponibile e facile da usare', con: 'Potere emulsionante più debole del tuorlo d uovo' },
        { pro: 'Funziona bene a temperatura ambiente', con: 'Il sapore può scontrarsi con salse delicate' },
        { pro: 'Ideale per vinaigrette rapide', con: 'Non adatto per emulsioni dal gusto neutro' }
      ]
    },
    {
      type: 'proscons',
      title: 'Lecitina di Soja',
      items: [
        { pro: 'Elevata tolleranza all olio (82%) per salse stabili', con: 'Richiede una pesatura precisa' },
        { pro: 'Il gusto neutro non altera le ricette', con: 'Meno indulgente del tuorlo d uovo' },
        { pro: 'Di origine vegetale e adatto ai vegani', con: 'Non è un elemento base della dispensa per la maggior parte dei cuochi' },
        { pro: 'Funziona con piccoli volumi d acqua', con: 'Può creare una consistenza leggermente artificiale' }
      ]
    },
    {
      type: 'proscons',
      title: 'Polisorbato',
      items: [
        { pro: 'Capacità di olio più elevata tra tutti gli emulsionanti (85%)', con: 'Additivo sintetico, non naturale' },
        { pro: 'Crea schiume e spume ultra-stabili', con: 'Difficile da reperire per la cucina casalinga' },
        { pro: 'Funziona con una fase acquosa minima', con: 'Richiede una bilancia per un dosaggio preciso' },
        { pro: 'Ideale per la cucina modernista e sperimentale', con: 'Dominante se usato in eccesso' }
      ]
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Tuorlo d\'Uovo',
          icon: 'mdi:egg-outline',
          description: 'L\'emulsionante classico della maionese. Contiene lecitina e lipoproteine.',
          highlight: true,
          points: ['Max olio: 78%', '~15 ml acqua per tuorlo', 'Aggiunge ricchezza e colore', 'Ottimo per mayo e aioli']
        },
        {
          title: 'Senape',
          icon: 'mdi:shaker-outline',
          description: 'Si basa su mucillagine e proteine dei semi. Aggiunge sapore piccante.',
          points: ['Max olio: 70%', '~10 ml contenuto d\'acqua', 'Potere emulsionante più debole', 'Ideale per vinaigrette']
        },
        {
          title: 'Lecitina di Soia',
          icon: 'mdi:leaf',
          description: 'Tensioattivo vegetale altamente concentrato.',
          points: ['Max olio: 82%', '~5 ml contenuto d\'acqua', 'Profilo di gusto neutro', 'Base della cucina modernista']
        },
        {
          title: 'Polisorbato',
          icon: 'mdi:flask-outline',
          description: 'Emulsionante sintetico con massima capacità tensioattiva.',
          points: ['Max olio: 85%', '~2 ml contenuto d\'acqua', 'Massima tolleranza all\'olio', 'Usado in schiume e spume']
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulsionante', 'Max Olio %', 'Olio per 100 ml Acqua', 'Miglior Utilizzo'],
      rows: [
        ['Tuorlo d\'Uovo', '78%', '~355 ml', 'Maionese, aioli, olandese'],
        ['Senape', '70%', '~233 ml', 'Vinaigrette, condimenti leggeri'],
        ['Lecitina di Soja', '82%', '~456 ml', 'Salse moderniste, schiume'],
        ['Polisorbato', '85%', '~567 ml', 'Schiume stabili, cucina sperimentale']
      ]
    },
    {
      type: 'title',
      text: 'La Scienza: Perché le Emulsioni si Rompono e Come la Congettura di Keplero si Applica in Cucina',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Un\'emulsione culinaria funziona disperdendo minuscole goccioline d\'olio in una fase acquosa continua. <strong>Gli emulsionanti</strong> - come la lecitina nel tuorlo d\'uovo, la mucillagine nella senape o i tensioattivi sintetici come il polisorbato - rivestono ogni gocciolina e impediscono che si fonda con le vicine.'
    },
    {
      type: 'paragraph',
      html: 'Il punto di rottura è determinato dalla pura geometria. Le goccioline d\'olio si comportano come minuscole sfere impaccate insieme. Il volume massimo di sfere che può essere inserito in un dato spazio - noto come <strong>congettura di Keplero</strong> - è di circa il 74%. Nei sistemi di cucina reali, questo può arrivare all\'80-85% con emulsionanti potenti, ma oltre quel punto, le goccioline vengono compresse così tanto da fondersi e l\'emulsione collassa all\'istante.'
    },
    {
      type: 'card',
      columns: 2,
      items: [
        {
          icon: 'mdi:egg-outline',
          title: 'Maionese e Aioli Classici',
          html: 'Usa il <strong>tuorlo d uovo</strong> fino al 78% di olio. Inizia con un tuorlo per tazza d olio. Aggiungi un cucchiaino d acqua o succo di limone prima di versare l olio per un margine di sicurezza più ampio.'
        },
        {
          icon: 'mdi:shaker-outline',
          title: 'Vinaigrette e Condimenti Leggeri',
          html: 'Usa la <strong>senape</strong> fino al 70% di olio. La mucillagine della senape fornisce abbastanza emulsificazione per una vinaigrette temporanea.'
        },
        {
          icon: 'mdi:leaf',
          title: 'Salse Moderniste e Schiume Stabile',
          html: 'Usa la <strong>lecitina di soja</strong> fino all 82% di olio. Ideale per emulsioni dal gusto neutro dove vuoi che risalti il sapore dell olio e dell acido.'
        },
        {
          icon: 'mdi:flask-outline',
          title: 'Schiume Sperimentali e Spume',
          html: 'Usa il <strong>polisorbato</strong> fino all 85% di olio. La scelta principale per le tecniche idrocolloidi moderniste che richiedono il massimo carico di olio e stabilità della schiuma.'
        }
      ]
    },
    {
      type: 'title',
      text: 'Come Recuperare un\'Emulsione Rotta Passo Dopo Passo',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Se la tua maionese o salsa si è già smontata, <strong>non buttarla via</strong>. La soluzione è semplice - ma solo se capisci il rapporto di fase. Sbattere più forte non aiuta; devi aggiungere altra fase continua (acqua).'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '3 Segni Comuni Che la Tua Emulsione Sta per Rompersi',
      html: 'Fai attenzione a un <strong>addensamento seguito da un improvviso assottigliamento</strong> come primo avvertimento. Poi cerca una <strong>superficie lucida che diventa granulosa</strong> o <strong>olio visibile che si accumula ai bordi</strong>. Se vedi uno di questi segni, smetti immediatamente di aggiungere olio e incorpora un cucchiaino di acqua fredda prima di continuare.'
    },
    {
      type: 'title',
      text: 'Consigli Pratici per Emulsioni Perfette Ogni Volta',
      level: 3
    },
    {
      type: 'message',
      html: '<strong>La regola d oro:</strong> Il rapporto tra olio e acqua conta più della tecnica, della temperatura o della velocità. Usa il nostro calcolatore per trovare il tuo limite esatto di olio prima di iniziare a sbattere.'
    },
    {
      type: 'tip',
      title: 'La Temperatura Conta',
      html: 'Tutti gli ingredienti devono essere a <strong>temperatura ambiente</strong>. Uova o olio freddi aumentano drasticamente il rischio di rottura. Tira fuori gli ingredienti dal frigorifero 30 minuti prima di iniziare.'
    },
    {
      type: 'tip',
      title: 'La Rete di Sicurezza dell\'Acqua',
      html: 'Se la tua ricetta non include abbastanza acido (aceto, succo di limone), aggiungi <strong>un cucchiaino di acqua fredda per tuorlo d\'uovo</strong> prima di iniziare ad aggiungere olio. Questa acqua extra crea un margine di sicurezza più ampio.'
    },
    {
      type: 'tip',
      title: 'Recuperare un Lotto Rotto',
      html: 'Metti un tuorlo d\'uovo fresco in una ciotola pulita. Sbattilo con un cucchiaino d\'acqua. Poi, <strong>versa la miscela rotta il più lentamente possibile</strong>, esattamente come se fosse olio crudo. Una volta che si ri-emulsiona, puoi aggiungere il resto più velocemente.'
    },
    {
      type: 'title',
      text: 'Glossario Culinario delle Emulsioni',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Fase Continua',
          definition: 'Il liquido che circonda le goccioline - di solito acqua, aceto o succo di agrumi nelle emulsioni olio-in-acqua come la maionese.'
        },
        {
          term: 'Fase Dispersa',
          definition: 'Il liquido suddiviso in minuscole goccioline - l\'olio nella maggior parte delle emulsioni culinarie. Più ne aggiungi, più le goccioline si compattano.'
        },
        {
          term: 'Frazione Volumetrica',
          definition: 'Il rapporto tra volume d\'olio e volume totale. A circa il 74-85% (a seconda dell\'emulsionante), l\'emulsione raggiunge il suo punto di rottura geometrico.'
        },
        {
          term: 'Coalescenza',
          definition: 'Quando due o più goccioline d\'olio si fondono in una più grande. Questo è il processo microscopico che innesca una rottura visibile dell\'emulsione.'
        },
        {
          term: 'Inversione di Fase',
          definition: 'Il punto in cui un\'emulsione olio-in-acqua si trasforma in acqua-in-olio - come accade quando si produce il burro dalla panna. Questa è la modalità di fallimento ultima.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Punti Chiave per Emulsioni Stabili',
      items: [
        'Ogni emulsionante ha una frazione massima di olio: tuorlo d uovo 78%, senape 70%, lecitina di soia 82%, polisorbato 85%.',
        'Il punto di rottura è determinato dalla geometria (congettura di Keplero al 74%), non dalla velocità con cui si sbatte.',
        'Inizia sempre con ingredienti a temperatura ambiente e aggiungi una piccola quantità d acqua come margine di sicurezza.',
        'Un emulsione rotta può essere recuperata aggiungendo emulsionante fresco e più fase acquosa, non sbattendo più forte.',
        'Usa il nostro calcolatore di stabilità dell emulsione qui sopra per ottenere il limite di olio esatto per i tuoi ingredienti.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
