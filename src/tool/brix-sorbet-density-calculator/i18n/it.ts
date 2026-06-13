import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calcolatore Brix per Sorbetto: Rapporto Zucchero Frutta e Controllo del Punto di Congelamento per una Cremosità Perfetta';
const description = 'Calibra con precisione l\'equilibrio tra zucchero, purea di frutta e acqua per ottenere un sorbetto cremoso ogni volta. Calcola il Brix, l\'abbassamento crioscopico PAC e risolvi i problemi di consistenza ghiacciata o troppo liquida con misurazioni precise.';

const faq = [
  {
    question: 'Cos\'è il Brix e perché è importante nel sorbetto?',
    answer: 'Il Brix (°Bx) misura la percentuale di solidi disciolti  -  principalmente zuccheri  -  in una soluzione liquida. Nei sorbetti, un livello Brix tra il 25% e il 30% (idealmente 28%) è essenziale per ottenere la giusta consistenza. Sotto il 25%, il sorbetto congela diventando un blocco duro come la pietra perché non c\'è abbastanza zucchero per interferire con la formazione dei cristalli di ghiaccio. Sopra il 30%, il punto di congelamento si abbassa così tanto che il sorbetto rimane liquido e non si rapprende mai completamente in un congelatore standard.',
  },
  {
    question: 'Come calcolo la giusta quantità di zucchero per la mia ricetta di sorbetto?',
    answer: 'Inizia pesando la tua purea di frutta e misurandone il Brix naturale con un rifrattometro (oppure selezionando un valore preimpostato). Inserisci questi dati nel calcolatore insieme alla dimensione desiderata del lotto e al Brix target (28% predefinito). Il calcolatore determina quanto saccarosio e acqua devi aggiungere per portare l\'impasto totale nell\'intervallo ottimale di Brix del 25-30%. Tiene anche conto dell\'abbassamento crioscopico (PAC) in modo che tu possa sostituire con destrosio se il sorbetto risulterebbe altrimenti troppo duro.',
  },
  {
    question: 'Perché il mio sorbetto fatto in casa è sempre troppo duro o ghiacciato?',
    answer: 'Un sorbetto ghiacciato e duro come la pietra significa quasi sempre che la concentrazione totale di zucchero è troppo bassa (sotto il 25% Brix). L\'acqua nella frutta congela formando grandi cristalli di ghiaccio invece di rimanere parzialmente liquida. La soluzione: aggiungi più saccarosio per alzare il Brix, oppure sostituisci parte del saccarosio con destrosio  -  il destrosio ha quasi il doppio del potere anticongelante (PAC 190 contro 100) ed è il 30% meno dolce, quindi puoi abbassare il punto di congelamento senza rendere il sorbetto stucchevole.',
  },
  {
    question: 'Qual è la differenza tra usare saccarosio e destrosio nel sorbetto?',
    answer: 'Il saccarosio (zucchero da tavola) è il dolcificante standard con un PAC di 100 e POD di 100. Il destrosio (glucosio in polvere) ha un PAC di 190  -  quasi il doppio dell\'abbassamento crioscopico  -  ma solo il 70% della dolcezza (POD 70). Questo significa che il destrosio ammorbidisce il sorbetto molto più efficacemente per grammo senza renderlo troppo dolce. Usa il destrosio quando la tua frutta è già naturalmente dolce (es. mango, banana) e hai bisogno di più potere anticongelante senza aggiungere ulteriore dolcezza.',
  },
  {
    question: 'In che modo lo zucchero naturale della frutta influisce sul calcolo?',
    answer: 'Diversi frutti hanno livelli di zucchero naturale molto variabili: limoni e lime sono intorno al 2% Brix, le fragole circa 8%, mango e uva 14-18% e le banane fino al 22%. Il calcolatore tiene conto del Brix naturale della tua frutta in modo da non superare o rimanere al di sotto della concentrazione totale di zucchero. Per questo si consiglia di usare un rifrattometro per misurare la tua frutta reale  -  la variazione stagionale può spostare il Brix di 3-4 punti.',
  },
];

const howTo = [
  {
    name: 'Pesa la tua purea di frutta',
    text: 'Misura il peso esatto della tua purea o succo di frutta in grammi.',
  },
  {
    name: 'Stima o misura il Brix della frutta',
    text: 'Usa un rifrattometro per trovare il Brix esatto della tua frutta, oppure seleziona un valore tipico dal nostro database (es. Mango: 14%, Fragola: 8%).',
  },
  {
    name: 'Inserisci i pesi nel calcolatore',
    text: 'Inserisci il peso della frutta, il Brix della frutta e il livello Brix target (il predefinito è 28%).',
  },
  {
    name: 'Controlla le aggiunte di sciroppo consigliate',
    text: 'Il calcolatore mostrerà immediatamente lo zucchero e l\'acqua consigliati da aggiungere per raggiungere il target del 28% Brix.',
  },
  {
    name: 'Regola il tipo di zucchero se necessario',
    text: 'Se l\'impasto manca di sufficiente abbassamento crioscopico, introduci destrosio al posto del saccarosio.',
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
  slug: 'calcolatore-densita-brix-sorbetto',
  title: 'Calcolatore di Densità Brix per Sorbetto',
  description: 'Calibra con precisione l\'equilibrio tra zucchero, purea di frutta e acqua per un sorbetto cremoso ogni volta. Risolvi la consistenza ghiacciata o troppo liquida con calcoli precisi di Brix e PAC.',
  faqTitle: 'Domande Frequenti',
  ui: {
    fruitWeightLabel: 'Peso Purea di Frutta',
    fruitBrixLabel: 'Brix Frutta',
    sugarWeightLabel: 'Peso Saccarosio (Zucchero)',
    dextroseWeightLabel: 'Peso Destrosio',
    waterWeightLabel: 'Peso Acqua Aggiunta',
    targetBrixLabel: 'Brix Target',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    brixUnit: '% Bx',
    totalBrixLabel: 'Brix Totale Impasto',
    totalWeightLabel: 'Peso Totale Lotto',
    totalPACLabel: 'Abbassamento Crioscopico (PAC)',
    statusLabel: 'Profilo di Consistenza del Sorbetto',
    statusSoft: 'Troppo Morbido / Liquido',
    statusOptimal: 'Cremosità Ottimale',
    statusHard: 'Troppo Duro / Ghiacciato',
    recommendedTitle: 'Sciroppo Consigliato (50% Frutta)',
    recommendedSugarLabel: 'Saccarosio Necessario',
    recommendedWaterLabel: 'Acqua Necessaria',
    fruitPresetLabel: 'Preimpostazione Frutta',
    presetCustom: 'Frutta Personalizzata',
    presetLemon: 'Limone / Lime (2% Bx)',
    presetStrawberry: 'Fragola / Lampone (8% Bx)',
    presetOrange: 'Arancia / Pesca (10% Bx)',
    presetMango: 'Mango / Uva / Ciliegia (14% Bx)',
    presetBanana: 'Banana (21% Bx)',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'La Scienza del Bilanciamento del Sorbetto: Brix, PAC e Solidi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Preparare un sorbetto professionale è un esercizio di scienza alimentare. A differenza del gelato, che si basa su grassi del latte e proteine per creare struttura e morbidezza, il sorbetto si basa interamente su zuccheri disciolti e stabilizzanti. La concentrazione di questi zuccheri disciolti si misura in gradi Brix (°Bx). Un impasto perfetto per sorbetto richiede una concentrazione di zucchero dal 25% al 30% Brix. Se il contenuto di zucchero è troppo basso, l\'acqua congelerà formando grandi cristalli di ghiaccio aghiformi, producendo un blocco granuloso e duro come la pietra. Se è troppo alto, il punto di congelamento si abbassa eccessivamente e il sorbetto rimane uno sciroppo semi-liquido nei tipici congelatori domestici o commerciali.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '28%',
          label: 'Brix Target Ideale',
          icon: 'mdi:target',
        },
        {
          value: '25-30%',
          label: 'Intervallo Brix Sicuro',
          icon: 'mdi:gauge',
        },
        {
          value: '≈50%',
          label: 'Rapporto Ottimale Frutta',
          icon: 'mdi:fruit-grapes',
        },
        {
          value: 'PAC 100/190',
          label: 'Saccarosio / Destrosio',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: 'Capire il PAC: Il Fattore di Abbassamento Crioscopico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il PAC (Potere Anticongelante) è una metrica usata dai pasticceri per quantificare quanto un ingrediente abbassa il punto di congelamento dell\'acqua. Il saccarosio, o zucchero da tavola standard, è il riferimento di base con un valore PAC di 100. Tuttavia, il saccarosio è molto dolce. Se devi aggiungere più solidi o aumentare la capacità anticongelante senza rendere il sorbetto eccessivamente dolce, puoi sostituire una parte del saccarosio con destrosio. Il destrosio ha un PAC di 190, rendendolo quasi due volte più efficace del saccarosio nel prevenire la formazione di cristalli di ghiaccio, pur essendo dolce solo al 70%.',
    },
    {
      type: 'title',
      text: 'Saccarosio vs Destrosio: Scegliere lo Zucchero Giusto per il Sorbetto',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Saccarosio (Zucchero da Tavola)',
          icon: 'mdi:cube-outline',
          description: 'Il dolcificante standard e il riferimento per tutti i calcoli PAC e POD. Fornisce dolcezza pulita e corpo.',
          points: [
            'Valore PAC: 100 (riferimento)',
            'Valore POD: 100 (dolcezza piena)',
            'Ideale per: ruolo di dolcificante principale',
            'Aggiunge corpo e consistenza standard',
          ],
        },
        {
          title: 'Destrosio (Glucosio in Polvere)',
          icon: 'mdi:grain',
          description: 'Un monosaccaride con quasi il doppio del potere di abbassamento crioscopico e significativamente meno dolcezza.',
          highlight: true,
          points: [
            'Valore PAC: 190 (quasi 2� -  il saccarosio)',
            'Valore POD: 70 (30% meno dolce)',
            'Ideale per: ammorbidire sorbetti duri',
            'Perfetto quando la frutta è già molto dolce',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tabella di Riferimento dei Valori Brix Tipici della Frutta',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tipo di Frutta', 'Valore Brix Medio', 'Contenuto d\'Acqua', 'Livello di Acidità'],
      rows: [
        ['Limone / Lime', '2% - 4% Bx', 'Molto Alto', 'Estremamente Alto'],
        ['Fragola / Lampone', '7% - 9% Bx', 'Alto', 'Moderato'],
        ['Arancia / Pesca', '9% - 11% Bx', 'Medio-Alto', 'Basso-Moderato'],
        ['Mela / Pera', '11% - 13% Bx', 'Medio', 'Basso'],
        ['Mango / Uva / Ciliegia', '14% - 18% Bx', 'Medio-Basso', 'Molto Basso'],
        ['Banana', '20% - 22% Bx', 'Basso', 'Trascurabile'],
      ],
    },
    {
      type: 'title',
      text: 'Come Calibrare il Tuo Impasto per Sorbetto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Per bilanciare un sorbetto, prima misura il peso e la concentrazione di zucchero della tua purea di frutta. L\'uso di un rifrattometro è fortemente raccomandato per la precisione, poiché la dolcezza della frutta varia in base alla stagione e al grado di maturazione. Se non hai un rifrattometro, puoi fare una stima usando la tabella sopra. Una volta ottenuti questi valori, inseriscili nel nostro calcolatore per determinare la quantità esatta di sciroppo semplice (acqua e zucchero) necessaria per portare l\'impasto totale al target del 28% Brix. Per una consistenza ottimale, punta a una proporzione di frutta intorno al 50% del peso totale del lotto.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Perché il Mio Sorbetto È Ghiacciato o Troppo Duro?',
      html: 'Un sorbetto che congela duro come la pietra ha quasi sempre <strong>troppo poco zucchero</strong> (Brix sotto il 25%). L\'acqua nella purea di frutta cristallizza formando grandi e frastagliate schegge di ghiaccio. Risolvi aggiungendo più saccarosio per alzare il Brix totale, oppure sostituisci parte del saccarosio con destrosio per aumentare il PAC senza rendere il sorbetto troppo dolce. Verifica anche che la percentuale di frutta non sia troppo alta  -  superare il 60% di frutta lascia spazio insufficiente per i solidi dello zucchero.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Perché il Mio Sorbetto È Liquido o Non Congela?',
      html: 'Un sorbetto che rimane morbido o simile a una zuppa ha <strong>troppo zucchero</strong> (Brix sopra il 30%). Il punto di congelamento si è abbassato così tanto che il tuo congelatore non riesce a solidificare l\'impasto. Riduci l\'apporto totale di zucchero, oppure se la frutta è naturalmente molto dolce (es. banana o mango), usa proporzionalmente meno saccarosio aggiunto. Controlla la temperatura target: i congelatori domestici funzionano a −18°C; un PAC appropriato per il servizio a −12°C sarà troppo alto per i congelatori standard.',
    },
    {
      type: 'tip',
      title: 'Misura il Brix con Precisione con un Rifrattometro',
      html: 'Un rifrattometro digitale o ottico è il miglior investimento singolo per sorbetti costanti. La maturazione della frutta varia notevolmente in base a stagione, varietà e origine  -  una fragola a giugno può misurare 6°Bx mentre la stessa varietà ad agosto raggiunge 10°Bx. Spremi una goccia di purea sul prisma, leggi il valore e inseriscilo nel calcolatore. Andare a intuito basandosi solo sulle tabelle produrrà risultati inconsistenti.',
    },
    {
      type: 'title',
      text: 'Passo Dopo Passo: Come Usare Questo Calcolatore',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pesa la tua purea di frutta</strong>  -  Usa una bilancia digitale per misurare il peso esatto della tua purea di frutta filtrata o succo in grammi.',
        '<strong>Misura o stima il Brix della frutta</strong>  -  Usa un rifrattometro per precisione, oppure seleziona una preimpostazione dal menu a tendina (Limone 2%, Fragola 8%, Mango 14%, ecc.).',
        '<strong>Imposta il tuo Brix target</strong>  -  Il predefinito è 28%, il punto ottimale ideale. Regola tra 25% e 30% in base alle tue preferenze.',
        '<strong>Controlla lo sciroppo consigliato</strong>  -  Il calcolatore mostra istantaneamente quanto saccarosio e acqua aggiungere per raggiungere il tuo target.',
        '<strong>Verifica l\'indicatore di consistenza</strong>  -  L\'indicatore PAC ti dice se il sorbetto sarà troppo duro, dalla cremosità ottimale, o troppo morbido alla temperatura del tuo congelatore.',
        '<strong>Regola con destrosio se necessario</strong>  -  Se il sorbetto è previsto duro ma è già abbastanza dolce, sostituisci parte del saccarosio con destrosio per aumentare il PAC senza aggiungere dolcezza.',
      ],
    },
    {
      type: 'title',
      text: 'Termini Chiave per la Preparazione del Sorbetto',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Brix (°Bx)',
          definition: 'La percentuale di solidi disciolti (principalmente zuccheri) in una soluzione liquida. Nei sorbetti, 25-30°Bx è l\'intervallo target per una consistenza e cremosità ideali.',
        },
        {
          term: 'PAC (Potere Anticongelante)',
          definition: 'Potere anticongelante  -  una misura di quanto un ingrediente abbassa il punto di congelamento dell\'acqua. Il saccarosio ha un PAC di riferimento di 100; il destrosio è 190.',
        },
        {
          term: 'POD (Potere Dolcificante)',
          definition: 'Potere dolcificante relativo al saccarosio (riferimento 100). Il destrosio ha un POD di 70, il che significa che è il 30% meno dolce grammo per grammo rispetto allo zucchero da tavola.',
        },
        {
          term: 'Destrosio',
          definition: 'Un monosaccaride (glucosio in polvere) usato nella formulazione del sorbetto per abbassare il punto di congelamento senza aggiungere eccessiva dolcezza. PAC 190, POD 70.',
        },
        {
          term: 'Rifrattometro',
          definition: 'Uno strumento ottico o digitale che misura il valore Brix di un liquido rilevando come la luce si piega (rifrange) attraverso il campione. Essenziale per la costanza del sorbetto.',
        },
        {
          term: 'Sciroppo Semplice',
          definition: 'Una miscela 50/50 in peso di saccarosio e acqua, scaldata fino a scioglimento. Il veicolo standard per aggiungere zucchero alle basi per sorbetto.',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
