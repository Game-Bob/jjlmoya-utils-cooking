import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Predittore di Essiccazione dei Gusci dei Macaron: Calcolatore del Tempo di Asciugatura in Base a Umidita e Temperatura';
const description = 'Calcola esattamente quanto tempo devono asciugare i gusci dei macaron in base a umidita, temperatura e dimensione. Evita gusci crepati e assicurati un piedino perfetto ogni volta.';

const faq = [
  {
    question: 'Perche i gusci dei macaron devono asciugare prima della cottura?',
    answer: 'L\'asciugatura forma una sottile pellicola sulla superficie del guscio. Questa pellicola e essenziale perche intrappola il vapore durante la cottura, costringendolo a uscire verso il basso attraverso il piedino invece di rompere la superficie. Senza un\'asciugatura adeguata, i macaron si crepano, non formano il piedino o cuociono in modo irregolare.',
  },
  {
    question: 'In che modo l\'umidita influisce sul tempo di asciugatura dei macaron?',
    answer: 'L\'umidita e il fattore piu critico. Con umidita elevata (oltre il 60%), l\'aria e gia satura di umidita, rallentando drasticamente l\'evaporazione dalla superficie del guscio. Il tempo di asciugatura puo raddoppiare o triplicare rispetto a una giornata secca. In condizioni molto secche (sotto il 30%), i gusci possono asciugarsi troppo e sviluppare una pellicola spessa che impedisce la corretta lievitazione.',
  },
  {
    question: 'Qual e la temperatura ideale per asciugare i gusci dei macaron?',
    answer: 'La temperatura ambiente tra 20 Â°C e 25 Â°C e l\'ideale. L\'aria piu calda trattiene piu umidita e accelera l\'asciugatura, ma se fa troppo caldo (oltre 30 Â°C) i gusci possono asciugarsi in modo irregolare, con un esterno crostoso e un interno ancora umido. Temperature inferiori a 18 Â°C rallentano notevolmente l\'asciugatura.',
  },
  {
    question: 'In che modo la dimensione del guscio influisce sul tempo di asciugatura?',
    answer: 'I gusci piu grandi hanno maggiore superficie e volume, richiedendo un\'asciugatura proporzionalmente piu lunga. Un mini macaron da 2 cm puo asciugare in 15 minuti, mentre un macaron grande da 5 cm puo impiegare oltre un\'ora. La relazione non e lineare: raddoppiare il diametro triplica all\'incirca il tempo di asciugatura a causa del rapporto superficie-volume.',
  },
];

const howTo = [
  {
    name: 'Formate i gusci dei macaron',
    text: 'Formate dei dischi di dimensione uniforme su carta da forno o su un tappetino in silicone. Usate un modello per mantenere la dimensione costante.',
  },
  {
    name: 'Misurate l\'ambiente di lavoro',
    text: 'Controllate l\'umidita e la temperatura della vostra cucina usando un igrometro e un termometro.',
  },
  {
    name: 'Inserite i valori nel calcolatore',
    text: 'Inserite l\'umidita, la temperatura e il diametro del guscio per ottenere il tempo di asciugatura stimato.',
  },
  {
    name: 'Testate la pellicola',
    text: 'Dopo il tempo indicato, toccate leggermente la superficie di un guscio. Dovrebbe risultare asciutta e opaca, non appiccicosa. Se si attacca al dito, lasciate asciugare ancora.',
  },
  {
    name: 'Infornate quando e pronto',
    text: 'Una volta che la pellicola si e formata, infornate subito. Non lasciate riposare i gusci troppo a lungo dopo l\'asciugatura, altrimenti rischiano di asciugarsi troppo e creparsi.',
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
  slug: 'predittore-essiccazione-macaron',
  title: 'Predittore di Essiccazione dei Gusci dei Macaron',
  description: 'Calcola esattamente quanto tempo devono asciugare i gusci dei macaron in base a umidita, temperatura e dimensione. Evita gusci crepati e assicurati un piedino perfetto ogni volta.',
  faqTitle: 'Domande Frequenti',
  ui: {
    humidityLabel: 'Umidita Ambiente',
    humidityUnit: '%',
    tempLabel: 'Temperatura Ambiente',
    tempUnit: 'Â°C',
    sizeLabel: 'Diametro Guscio',
    sizeUnit: 'cm',
    dryingTimeLabel: 'Tempo di Asciugatura Stimato',
    minutesUnit: 'min',
    readinessLabel: 'Stato della Superficie',
    skinStatusReady: 'Pronto per Infornare',
    skinStatusForming: 'Pellicola in Formazione',
    skinStatusSticky: 'Ancora Appiccicoso',
    skinStatusOverDry: 'Troppo Asciutto',
    humidityTagHigh: 'Umidita alta',
    humidityTagNormal: 'Umidita normale',
    humidityTagLow: 'Umidita bassa',
    humidityDescHigh: 'Giornata molto umida. L\'asciugatura richiedera molto piu tempo. Se possibile, usa un deumidificatore o un ambiente con aria condizionata.',
    humidityDescNormal: 'Umidita moderata. L\'asciugatura dovrebbe procedere a un ritmo normale con una buona formazione della pellicola.',
    humidityDescLow: 'Aria molto secca. I gusci potrebbero asciugarsi troppo in fretta e rischiare di seccarsi eccessivamente. Controlla spesso e riduci il tempo di asciugatura.',
    tempTagHot: 'Stanza calda',
    tempTagIdeal: 'Temperatura ideale',
    tempTagCool: 'Stanza fresca',
    sizeTagMini: 'Mini',
    sizeTagStandard: 'Standard',
    sizeTagLarge: 'Grande',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'La Scienza dell\'Essiccazione dei Gusci dei Macaron: Perche la Pellicola Determina il Successo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il macaron e uno dei dolci tecnicamente piu impegnativi della pasticceria francese. La sua caratteristica calotta liscia e la base arricciata, detta "piedino" o "pied", dipendono interamente da un passaggio critico: l\'asciugatura dei gusci formati prima della cottura. Questo periodo di riposo permette a un sottile film proteico di formarsi sulla superficie di ogni guscio. Durante la cottura, questa pellicola intrappola il vapore in espansione all\'interno del guscio, costringendolo a uscire verso il basso attraverso la base, sollevando il guscio e creando l\'ambito piedino. Senza un\'asciugatura adeguata, il vapore fuoriesce dalla superficie causando crepe. Con un\'asciugatura eccessiva, la pellicola diventa troppo rigida e i gusci non riescono a lievitare correttamente.',
    },
    {
      type: 'title',
      text: 'L\'Umidita e il Suo Ruolo Dominante nella Cinetica di Essiccazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'umidita relativa e la variabile piu influente nell\'essiccazione dei gusci dei macaron. Al 50% di umidita relativa, un guscio standard da 3 cm richiede in genere 30-40 minuti per sviluppare una pellicola adeguata. Al 70% di umidita, questo tempo puo allungarsi a 60-90 minuti. Al 30% di umidita, l\'asciugatura puo completarsi in soli 15-20 minuti. La fisica dietro tutto questo e semplice: il tasso di evaporazione e proporzionale al deficit di pressione di vapore tra la superficie del guscio e l\'aria circostante. L\'aria umida ha un deficit minore, rallentando l\'evaporazione. Le pasticcerie professionali controllano l\'umidita con grande attenzione, spesso mantenendo locali dedicati ai macaron con un\'umidita relativa del 40-50%.',
    },
    {
      type: 'title',
      text: 'Tabella di Riferimento dei Tempi di Asciugatura per Umidita e Dimensione del Guscio',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Umidita', '2 cm Mini', '3 cm Standard', '4 cm Grande', '5 cm Extra Large'],
      rows: [
        ['30% (Molto secco)', '10-15 min', '15-20 min', '25-30 min', '35-45 min'],
        ['40% (Secco)', '15-20 min', '20-30 min', '30-40 min', '45-60 min'],
        ['50% (Moderato)', '20-25 min', '30-40 min', '40-55 min', '55-75 min'],
        ['60% (Umido)', '25-35 min', '40-55 min', '55-75 min', '75-100 min'],
        ['70% (Molto umido)', '35-50 min', '55-75 min', '75-100 min', '100-130 min'],
        ['80% (Estremamente umido)', '50-70 min', '75-100 min', '100-140 min', '130-180 min'],
      ],
    },
    {
      type: 'title',
      text: 'Il Ruolo della Temperatura nel Tasso di Evaporazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La temperatura influisce sull\'asciugatura attraverso due meccanismi. Primo, l\'aria piu calda puo trattenere piu vapore acqueo, aumentando il tasso di evaporazione potenziale dalla superficie del guscio. Secondo, l\'energia cinetica molecolare aumenta con la temperatura, accelerando la velocita con cui le molecole d\'acqua abbandonano la fase liquida. Tuttavia, la temperatura influisce anche sulla stabilita della meringa. Sopra i 28 Â°C, le proteine dell\'albume nella meringa possono iniziare a destabilizzarsi, portando a una struttura indebolita. L\'intervallo ideale per l\'asciugatura dei macaron e 20-25 Â°C. Sotto i 18 Â°C, il tasso di evaporazione rallenta al punto che l\'asciugatura diventa impraticabile per gusci di dimensioni standard.',
    },
    {
      type: 'title',
      text: 'Dimensione del Guscio e la Legge del Quadrato-Cubo nell\'Essiccazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il diametro del guscio ha un effetto non lineare sul tempo di asciugatura a causa del rapporto superficie-volume. Un mini macaron da 2 cm ha circa 3,1 cmÂ² di superficie per 0,5 cmÂ³ di volume, con un rapporto superficie-volume favorevole di circa 6:1. Un macaron grande da 5 cm ha circa 19,6 cmÂ² di superficie per 8,2 cmÂ³ di volume, un rapporto di soli 2,4:1. Questo significa che i gusci piu grandi hanno proporzionalmente meno superficie attraverso cui l\'umidita puo fuoriuscire, aumentando notevolmente il tempo di asciugatura. Il calcolatore modella questo fenomeno usando una relazione a legge di potenza calibrata su dati empirici provenienti da laboratori di pasticceria professionale.',
    },
    {
      type: 'title',
      text: 'Risoluzione dei Problemi Comuni nell\'Essiccazione dei Macaron',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gusci crepati senza piedino',
      html: 'Il fallimento piu comune dei macaron. Quasi sempre indica che i gusci non sono stati asciugati abbastanza a lungo prima della cottura. La pellicola superficiale era troppo debole per contenere il vapore in espansione, che e fuoriuscito dalla superficie. <strong>Soluzione: aumentare il tempo di asciugatura di 10-15 minuti e testare la superficie con un leggero tocco del polpastrello prima di infornare.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Piedino storto o inclinato',
      html: 'La causa e un\'asciugatura non uniforme. Se un lato della teglia si asciuga piu velocemente dell\'altro, il piedino lievitera in modo irregolare. Succede spesso quando le teglie sono posizionate vicino a una finestra, un ventilatore o una fonte di calore. <strong>Soluzione: ruotare le teglie durante l\'asciugatura e garantire una circolazione dell\'aria uniforme intorno a tutti i gusci.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Gusci vuoti dopo la cottura',
      html: 'I gusci vuoti possono derivare da un\'eccessiva asciugatura, che crea una pellicola troppo spessa e rigida. Il guscio non riesce a espandersi correttamente durante la cottura, lasciando uno spazio vuoto all\'interno. <strong>Soluzione: ridurre il tempo di asciugatura e controllare prima la formazione della pellicola. La superficie deve risultare asciutta ma ancora leggermente cedevole a una pressione delicata.</strong>',
    },
    {
      type: 'title',
      text: 'Consigli Professionali dagli Chef Pasticceri',
      level: 3,
    },
    {
      type: 'tip',
      title: 'La Tecnica del Forno per le Giornate Umide',
      html: 'Nelle giornate estremamente umide, gli chef professionisti usano una tecnica chiamata "asciugatura in forno". Preriscalda il forno alla temperatura piu bassa possibile (in genere 50 Â°C), spegnilo, poi metti i macaron formati all\'interno con lo sportello leggermente aperto per 5-10 minuti. Si crea cosi un microclima caldo e a bassa umidita che accelera la formazione della pellicola senza iniziare a cuocere i gusci.',
    },
    {
      type: 'tip',
      title: 'Il Test del Tocco per una Pellicola Perfetta',
      html: 'Il test definitivo per verificare se i macaron sono pronti: tocca leggermente la superficie di un guscio con un polpastrello pulito e asciutto. Se l\'impasto si attacca al dito, serve piu tempo. Se la superficie e asciutta e opaca e non si attacca, la pellicola si e formata. Se la superficie risulta dura e crostosa senza alcuna cedevolezza, i gusci si sono asciugati troppo.',
    },
    {
      type: 'tip',
      title: 'Controllo dell\'Umidita Senza Attrezzatura',
      html: 'Se non hai un deumidificatore, metti una ciotola di riso crudo o delle bustine di gel di silice vicino ai macaron in asciugatura. Questi essiccanti assorbono l\'umidita ambientale, creando un microclima piu secco intorno alla teglia. Nelle cucine professionali senza climatizzazione, questo semplice trucco puo ridurre il tempo di asciugatura del 30-40% nelle giornate umide.',
    },
    {
      type: 'title',
      text: 'Il Fattore dell\'Invecchiamento degli Albumi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gli albumi invecchiati producono meringhe piu stabili che si asciugano in modo piu prevedibile. Gli albumi freschi contengono piu acqua e una struttura proteica meno elastica, producendo meringhe piu deboli che impiegano piu tempo a formare una pellicola adeguata. Le ricette professionali prevedono albumi invecchiati 24-72 ore a temperatura ambiente o 3-5 giorni in frigorifero. Gli albumi invecchiati perdono circa il 10-15% del loro contenuto d\'acqua per evaporazione, concentrando le proteine e migliorando la forza della meringa.',
    },
    {
      type: 'title',
      text: 'Riferimento Rapido: Tempi di Asciugatura per Condizioni Comuni',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Tempi di asciugatura tipici per gusci di macaron standard da 3 cm',
      items: [
        'Cucina climatizzata (22 Â°C, 45% umidita): 25-30 minuti',
        'Giornata primaverile, finestre aperte (20 Â°C, 55% umidita): 35-45 minuti',
        'Giornata estiva, senza aria condizionata (28 Â°C, 70% umidita): 60-90 minuti  -  usa la tecnica di asciugatura in forno',
        'Casa riscaldata d\'inverno (21 Â°C, 30% umidita): 15-20 minuti  -  attenzione all\'eccessiva asciugatura',
        'Giornata di pioggia (18 Â°C, 80% umidita): 75-100 minuti  -  considera seriamente l\'uso del deumidificatore',
        'Laboratorio di pasticceria professionale (22 Â°C, 45% umidita, convezione): 20-25 minuti',
      ],
    },
    {
      type: 'paragraph',
      html: 'Ogni cucina e un ambiente unico. Questo calcolatore tiene conto delle tre variabili critiche  -  umidita, temperatura e dimensione del guscio  -  per fornirti una previsione personalizzata del tempo di asciugatura. Inserisci le tue condizioni e forma i gusci con sicurezza.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
