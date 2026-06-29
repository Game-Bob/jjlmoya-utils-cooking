import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Predittore di Essiccazione dei Gusci dei Macaron: Calcolatore del Tempo di Asciugatura in Base a Umidità e Temperatura';
const description = 'Calcola esattamente quanto tempo devono asciugare i gusci dei macaron in base a umidità, temperatura e dimensione. Evita gusci crepati e assicurati un piedino perfetto ogni volta.';

const faq = [
  {
    question: 'Perché i gusci dei macaron devono asciugare prima della cottura?',
    answer: 'L\'asciugatura forma una sottile pellicola sulla superficie del guscio. Questa pellicola è essenziale perché intrappola il vapore durante la cottura, costringendolo a uscire verso il basso attraverso il piedino invece di rompere la superficie. Senza un\'asciugatura adeguata, i macaron si crepano, non formano il piedino o cuociono in modo irregolare.',
  },
  {
    question: 'In che modo l\'umidità influisce sul tempo di asciugatura dei macaron?',
    answer: 'L\'umidità è il fattore più critico. Con umidità elevata (oltre il 60%), l\'aria è già satura di umidità, rallentando drasticamente l\'evaporazione dalla superficie del guscio. Il tempo di asciugatura può raddoppiare o triplicare rispetto a una giornata secca. In condizioni molto secche (sotto il 30%), i gusci possono asciugarsi troppo e sviluppare una pellicola spessa che impedisce la corretta lievitazione.',
  },
  {
    question: 'Qual è la temperatura ideale per asciugare i gusci dei macaron?',
    answer: 'La temperatura ambiente tra 20 °C e 25 °C è l\'ideale. L\'aria più calda trattiene più umidità e accelera l\'asciugatura, ma se fa troppo caldo (oltre 30 °C) i gusci possono asciugarsi in modo irregolare, con un esterno crostoso e un interno ancora umido. Temperature inferiori a 18 °C rallentano notevolmente l\'asciugatura.',
  },
  {
    question: 'In che modo la dimensione del guscio influisce sul tempo di asciugatura?',
    answer: 'I gusci più grandi hanno maggiore superficie e volume, richiedendo un\'asciugatura proporzionalmente più lunga. Un mini macaron da 2 cm può asciugare in 15 minuti, mentre un macaron grande da 5 cm può impiegare oltre un\'ora. La relazione non è lineare: raddoppiare il diametro triplica all\'incirca il tempo di asciugatura a causa del rapporto superficie-volume.',
  },
];

const howTo = [
  {
    name: 'Formate i gusci dei macaron',
    text: 'Formate dei dischi di dimensione uniforme su carta da forno o su un tappetino in silicone. Usate un modello per mantenere la dimensione costante.',
  },
  {
    name: 'Misurate l\'ambiente di lavoro',
    text: 'Controllate l\'umidità e la temperatura della vostra cucina usando un igrometro e un termometro.',
  },
  {
    name: 'Inserite i valori nel calcolatore',
    text: 'Inserite l\'umidità, la temperatura e il diametro del guscio per ottenere il tempo di asciugatura stimato.',
  },
  {
    name: 'Testate la pellicola',
    text: 'Dopo il tempo indicato, toccate leggermente la superficie di un guscio. Dovrebbe risultare asciutta e opaca, non appiccicosa. Se si attacca al dito, lasciate asciugare ancora.',
  },
  {
    name: 'Infornate quando è pronto',
    text: 'Una volta che la pellicola si è formata, infornate subito. Non lasciate riposare i gusci troppo a lungo dopo l\'asciugatura, altrimenti rischiano di asciugarsi troppo e creparsi.',
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
  description: 'Calcola esattamente quanto tempo devono asciugare i gusci dei macaron in base a umidità, temperatura e dimensione. Evita gusci crepati e assicurati un piedino perfetto ogni volta.',
  faqTitle: 'Domande Frequenti',
  ui: {
    humidityLabel: 'Umidità Ambiente',
    humidityUnit: '%',
    tempLabel: 'Temperatura Ambiente',
    tempUnit: '°C',
    sizeLabel: 'Diametro Guscio',
    sizeUnit: 'cm',
    dryingTimeLabel: 'Tempo di Asciugatura Stimato',
    minutesUnit: 'min',
    readinessLabel: 'Stato della Superficie',
    skinStatusReady: 'Pronto per Infornare',
    skinStatusForming: 'Pellicola in Formazione',
    skinStatusSticky: 'Ancora Appiccicoso',
    skinStatusOverDry: 'Troppo Asciutto',
    humidityTagHigh: 'Umidità alta',
    humidityTagNormal: 'Umidità normale',
    humidityTagLow: 'Umidità bassa',
    humidityDescHigh: 'Giornata molto umida. L\'asciugatura richiederà molto più tempo. Se possibile, usa un deumidificatore o un ambiente con aria condizionata.',
    humidityDescNormal: 'Umidità moderata. L\'asciugatura dovrebbe procedere a un ritmo normale con una buona formazione della pellicola.',
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
      text: 'La Scienza dell\'Essiccazione dei Gusci dei Macaron: Perché la Pellicola Determina il Successo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il macaron è uno dei dolci tecnicamente più impegnativi della pasticceria francese. La sua caratteristica calotta liscia e la base arricciata, detta "piedino" o "pied", dipendono interamente da un passaggio critico: l\'asciugatura dei gusci formati prima della cottura. Questo periodo di riposo permette a un sottile film proteico di formarsi sulla superficie di ogni guscio. Durante la cottura, questa pellicola intrappola il vapore in espansione all\'interno del guscio, costringendolo a uscire verso il basso attraverso la base, sollevando il guscio e creando l\'ambito piedino. Senza un\'asciugatura adeguata, il vapore fuoriesce dalla superficie causando crepe. Con un\'asciugatura eccessiva, la pellicola diventa troppo rigida e i gusci non riescono a lievitare correttamente.',
    },
    {
      type: 'title',
      text: 'L\'Umidità e il Suo Ruolo Dominante nella Cinetica di Essiccazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'umidità relativa è la variabile più influente nell\'essiccazione dei gusci dei macaron. Al 50% di umidità relativa, un guscio standard da 3 cm richiede in genere 30-40 minuti per sviluppare una pellicola adeguata. Al 70% di umidità, questo tempo può allungarsi a 60-90 minuti. Al 30% di umidità, l\'asciugatura può completarsi in soli 15-20 minuti. La fisica dietro tutto questo è semplice: il tasso di evaporazione è proporzionale al deficit di pressione di vapore tra la superficie del guscio e l\'aria circostante. L\'aria umida ha un deficit minore, rallentando l\'evaporazione. Le pasticcerie professionali controllano l\'umidità con grande attenzione, spesso mantenendo locali dedicati ai macaron con un\'umidita relativa del 40-50%.',
    },
    {
      type: 'title',
      text: 'Tabella di Riferimento dei Tempi di Asciugatura per Umidità e Dimensione del Guscio',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Umidità', '2 cm Mini', '3 cm Standard', '4 cm Grande', '5 cm Extra Large'],
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
      html: 'La temperatura influisce sull\'asciugatura attraverso due meccanismi. Primo, l\'aria più calda può trattenere più vapore acqueo, aumentando il tasso di evaporazione potenziale dalla superficie del guscio. Secondo, l\'energia cinetica molecolare aumenta con la temperatura, accelerando la velocità con cui le molecole d\'acqua abbandonano la fase liquida. Tuttavia, la temperatura influisce anche sulla stabilità della meringa. Sopra i 28 °C, le proteine dell\'albume nella meringa possono iniziare a destabilizzarsi, portando a una struttura indebolita. L\'intervallo ideale per l\'asciugatura dei macaron è 20-25 °C. Sotto i 18 °C, il tasso di evaporazione rallenta al punto che l\'asciugatura diventa impraticabile per gusci di dimensioni standard.',
    },
    {
      type: 'title',
      text: 'Dimensione del Guscio e la Legge del Quadrato-Cubo nell\'Essiccazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il diametro del guscio ha un effetto non lineare sul tempo di asciugatura a causa del rapporto superficie-volume. Un mini macaron da 2 cm ha circa 3,1 cm² di superficie per 0,5 cm³ di volume, con un rapporto superficie-volume favorevole di circa 6:1. Un macaron grande da 5 cm ha circa 19,6 cm² di superficie per 8,2 cm³ di volume, un rapporto di soli 2,4:1. Questo significa che i gusci più grandi hanno proporzionalmente meno superficie attraverso cui l\'umidità può fuoriuscire, aumentando notevolmente il tempo di asciugatura. Il calcolatore modella questo fenomeno usando una relazione a legge di potenza calibrata su dati empirici provenienti da laboratori di pasticceria professionale.',
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
      html: 'Il fallimento più comune dei macaron. Quasi sempre indica que i gusci non sono stati asciugati abbastanza a lungo prima della cottura. La pellicola superficiale era troppo debole per contenere il vapore in espansione, che è fuoriuscito dalla superficie. <strong>Soluzione: aumentare il tempo di asciugatura di 10-15 minuti e testare la superficie con un leggero tocco del polpastrello prima di infornare.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Piedino storto o inclinato',
      html: 'La causa è un\'asciugatura non uniforme. Se un lato della teglia si asciuga più velocemente dell\'altro, il piedino lieviterà in modo irregolare. Succede spesso quando le teglie sono posizionate vicino a una finestra, un ventilatore o una fonte di calore. <strong>Soluzione: ruotare le teglie durante l\'asciugatura e garantire una circolazione dell\'aria uniforme intorno a tutti i gusci.</strong>',
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
      html: 'Nelle giornate estremamente umide, gli chef professionisti usano una tecnica chiamata "asciugatura in forno". Preriscalda il forno alla temperatura più bassa possibile (in genere 50 °C), spegnilo, poi metti i macaron formati all\'interno con lo sportello leggermente aperto per 5-10 minuti. Si crea così un microclima caldo e a bassa umidità che accelera la formazione della pellicola senza iniziare a cuocere i gusci.',
    },
    {
      type: 'tip',
      title: 'Il Test del Tocco per una Pellicola Perfetta',
      html: 'Il test definitivo per verificare se i macaron sono pronti: tocca leggermente la superficie di un guscio con un polpastrello pulito e asciutto. Se l\'impasto si attacca al dito, serve più tempo. Se la superficie è asciutta e opaca e non si attacca, la pellicola si è formata. Se la superficie risulta dura e crostosa senza alcuna cedevolezza, i gusci si sono asciugati troppo.',
    },
    {
      type: 'tip',
      title: 'Controllo dell\'Umidità Senza Attrezzatura',
      html: 'Se non hai un deumidificatore, metti una ciotola di riso crudo o delle bustine di gel di silice vicino ai macaron in asciugatura. Questi essiccanti assorbono l\'umidità ambientale, creando un microclima più secco intorno alla teglia. Nelle cucine professionali senza climatizzazione, questo semplice trucco può ridurre il tempo di asciugatura del 30-40% nelle giornate umide.',
    },
    {
      type: 'title',
      text: 'Il Fattore dell\'Invecchiamento degli Albumi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gli albumi invecchiati producono meringhe più stabili che si asciugano in modo più prevedibile. Gli albumi freschi contengono più acqua e una struttura proteica meno elastica, producendo meringhe più deboli che impiegano più tempo a formare una pellicola adeguata. Le ricette professionali prevedono albumi invecchiati 24-72 ore a temperatura ambiente o 3-5 giorni in frigorifero. Gli albumi invecchiati perdono circa il 10-15% del loro contenuto d\'acqua per evaporazione, concentrando le proteine e migliorando la forza della meringa.',
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
        'Cucina climatizzata (22 °C, 45% umidità): 25-30 minuti',
        'Giornata primaverile, finestre aperte (20 °C, 55% umidità): 35-45 minuti',
        'Giornata estiva, senza aria condizionata (28 °C, 70% umidità): 60-90 minuti  -  usa la tecnica di asciugatura in forno',
        'Casa riscaldata d\'inverno (21 °C, 30% umidità): 15-20 minuti  -  attenzione all\'eccessiva asciugatura',
        'Giornata di pioggia (18 °C, 80% umidità): 75-100 minuti  -  considera seriamente l\'uso del deumidificatore',
        'Laboratorio di pasticceria professionale (22 °C, 45% umidità, convezione): 20-25 minuti',
      ],
    },
    {
      type: 'paragraph',
      html: 'Ogni cucina è un ambiente unico. Questo calcolatore tiene conto delle tre variabili critiche  -  umidità, temperatura e dimensione del guscio  -  per fornirti una previsione personalizzata del tempo di asciugatura. Inserisci le tue condizioni e forma i gusci con sicurezza.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
