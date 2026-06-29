import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calcolatore Moltiplicatore di Flocculazione del Formaggio';
const description = 'Trova il momento esatto per tagliare la cagliata nella caseificazione artigianale. Usa il metodo del moltiplicatore di flocculazione per calcolare il tempo di coagulazione, controllare l umidita e migliorare la resa del formaggio con il nostro calcolatore gratuito.';
const faq = [
  {
    question: 'Cos\'è il metodo di flocculazione nella caseificazione?',
    answer: 'Il metodo di flocculazione è una tecnica utilizzata per determinare il momento preciso per tagliare la cagliata. Misura il tempo dall aggiunta del caglio al primo segno di gelificazione (flocculazione) e moltiplica questo tempo per un fattore specifico a seconda dello stile di formaggio.'
  },
  {
    question: 'Come si rileva il punto di flocculazione?',
    answer: 'Il metodo piu comune e la prova della ciotola. Posizionate una piccola ciotola di plastica leggera sterilizzata sulla superficie del latte dopo aver aggiunto il caglio. Toccatela o fatela ruotare delicatamente ogni minuto. Inizialmente ruota liberamente. Il momento in cui la ciotola smette di ruotare o resiste al movimento perche il latte ha iniziato a gelificare e il punto di flocculazione.'
  },
  {
    question: 'Perche il momento del taglio della cagliata e cosi critico?',
    answer: 'Tagliare la cagliata al momento giusto controlla la sineresi (perdita di umidita). Tagliare troppo presto produce cagliate fragili, perdita di grasso e bassa resa. Tagliare troppo tardi produce una cagliata dura che trattiene troppa umidita o non drena correttamente, portando a un formaggio acido e sovraacidificato.'
  },
  {
    question: 'Cos e un moltiplicatore di flocculazione?',
    answer: 'Un moltiplicatore e un fattore numerico applicato al tempo di flocculazione primario per calcolare il tempo totale di coagulazione prima del taglio. I moltiplicatori standard vanno da 2.0x (formaggi secchi come il Parmesan) a 5.0x o 6.0x (formaggi umidi come il Camembert).'
  },
  {
    question: 'In che modo temperatura e forza del caglio influenzano la flocculazione?',
    answer: 'Temperature piu alte e caglio piu forte accelerano la flocculazione, il che significa che il latte gelifica piu velocemente. Tuttavia, poiche il tempo totale di taglio e direttamente proporzionale al tempo di flocculazione, il metodo del moltiplicatore compensa automaticamente questi cambiamenti, garantendo proprieta della cagliata costanti.'
  }
];

const howTo = [
  {
    name: 'Aggiungere il caglio e avviare il timer',
    text: 'Mescolate bene il caglio, quindi avviate immediatamente il cronometro della Fase 1 nel calcolatore.'
  },
  {
    name: 'Eseguire la prova della ciotola',
    text: 'Posizionate una ciotola di plastica leggera sulla superficie del latte e verificate regolarmente la resistenza.'
  },
  {
    name: 'Segnare il punto di flocculazione',
    text: 'Nel momento in cui la ciotola resiste alla rotazione o al tocco, fate clic sul pulsante di stop per registrare il tempo di flocculazione.'
  },
  {
    name: 'Selezionare il tipo di formaggio o moltiplicatore',
    text: 'Scegliete uno stile di formaggio dal database o inserite un moltiplicatore personalizzato. L app calcola il tempo totale e avvia il conto alla rovescia per il taglio.'
  },
  {
    name: 'Tagliare la cagliata al segnale',
    text: 'Quando il timer arriva a zero, la cagliata ha raggiunto la tensione ottimale. Tagliate la cagliata a cubetti come indicato nella vostra ricetta.'
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
  slug: 'calcolatore-moltiplicatore-flocculazione-formaggio',
  title,
  description: 'Trova il momento esatto per tagliare la cagliata nella caseificazione artigianale. Usa il metodo del moltiplicatore di flocculazione per calcolare il tempo di coagulazione, controllare l umidita e migliorare la resa del formaggio con il nostro calcolatore gratuito.',
  faqTitle: 'Domande frequenti',
  ui: {
    title: 'Moltiplicatore di Flocculazione del Formaggio',
    subtitle: 'Trova la finestra perfetta di taglio della cagliata basata sul comportamento reale di gelificazione',
    flocculationLabel: 'Tempo di Flocculazione Primario (minuti:secondi)',
    multiplierLabel: 'Moltiplicatore di Flocculazione',
    cheeseTypeLabel: 'Preimpostazione Stile di Formaggio',
    totalCoagulationLabel: 'Tempo Totale di Coagulazione',
    timeRemainingLabel: 'Tempo Rimanente fino al Taglio',
    flocculationTimeLabel: 'Tempo di Flocculazione',
    moistureLabel: 'Ritenzione di Umidita Prevista della Cagliata',
    customOption: 'Moltiplicatore Personalizzato',
    startTimer: 'Avvia Timer Caglio',
    markFlocculation: 'Segna Flocculazione',
    resetTimer: 'Reimposta Timer',
    warningTitle: 'Avviso di Qualita del Caglio',
    warningText: 'Il tempo di flocculazione registrato e eccezionalmente breve. Questo puo indicare una dose eccessiva di caglio o impostazioni di temperatura errate, che potrebbero causare una texture gommosa o sapori amari.',
    phase1Title: 'Fase 1: Cagliatura e Flocculazione',
    phase2Title: 'Fase 2: Conto alla Rovescia di Coagulazione',
    phaseComplete: 'La cagliata e pronta per essere tagliata!',
    statusWaiting: 'Mescolando il caglio...',
    statusFlocculated: 'Flocculazione rilevata',
    statusCoagulating: 'Coagulazione...',
    statusReady: 'Pronta per il Taglio',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Quando tagliare la cagliata: Il metodo del moltiplicatore di flocculazione per un formaggio perfetto a ogni lotto',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Se vi siete mai chiesti <strong>"quando devo tagliare la cagliata?"</strong> o <strong>"come faccio a sapere se la cagliata e pronta?"</strong>, la risposta sta nel metodo del moltiplicatore di flocculazione. A differenza della caseificazione industriale che si basa su timer fissi, i casari artigianali misurano il momento in cui il latte inizia a gelificare (il punto di flocculazione) e moltiplicano quel tempo per un fattore specifico dello stile. Questo cattura tutte le variabili - acidita del latte, livello di calcio, temperatura, forza del caglio - in una singola misurazione. Il nostro <strong>calcolatore del moltiplicatore di flocculazione del formaggio</strong> fa i calcoli in modo che possiate tagliare al momento perfetto, ogni volta.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2.0x', label: 'Formaggi a Pasta Dura', icon: 'mdi:cheese' },
        { value: '3.0x', label: 'Formaggi a Pasta Semidura', icon: 'mdi:cheese' },
        { value: '5.0x', label: 'Formaggi a Pasta Molle', icon: 'mdi:cheese' },
        { value: '10-15m', label: 'Flocculazione Tipica', icon: 'mdi:timer-outline' }
      ]
    },
    {
      type: 'title',
      text: 'Problemi comuni di caseificazione risolti dal metodo di flocculazione',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Consistenza incoerente della cagliata:</strong> I timer fissi non possono tenere conto delle variazioni di lotto del latte. Il metodo di flocculazione si adatta alla chimica reale del vostro latte.',
        '<strong>Bassa resa di formaggio:</strong> Tagliare troppo presto o troppo tardi causa perdita di grasso e proteine. Il metodo del moltiplicatore individua la finestra esatta per una ritenzione ottimale.',
        '<strong>Contenuto di umidita errato:</strong> I formaggi a pasta dura necessitano di cagliata secca; i formaggi a pasta molle necessitano di cagliata umida. Diversi moltiplicatori (2.0x a 6.0x) controllano direttamente la sineresi.',
        '<strong>Attivita variabile del caglio:</strong> La forza del caglio cambia nel tempo e tra marche diverse. La misurazione del tempo di flocculazione cattura l attivita reale nella vostra caldaia in questo momento.'
      ]
    },
    {
      type: 'title',
      text: 'Come eseguire la prova della ciotola passo dopo passo',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'La prova della ciotola e il modo piu semplice per rilevare la flocculazione senza attrezzature speciali. Dopo aver aggiunto il caglio e mescolato bene, posizionate una piccola ciotola di plastica sterilizzata o un tappo di bottiglia sulla superficie del latte. Ogni 30-60 secondi, toccatelo o fatelo ruotare delicatamente. Mentre il latte e ancora liquido, la ciotola si muove liberamente. Nel momento in cui resiste al movimento - questo e il vostro <strong>punto di flocculazione</strong>. Registrate questo tempo e inseritelo nel calcolatore qui sopra.'
    },
    {
      type: 'tip',
      title: 'Usate un tappo di bottiglia per maggiore sensibilita',
      html: 'Un tappo di bottiglia di plastica leggera e piu sensibile di una ciotola e fornisce un punto di arresto piu chiaro. Sterilizzatelo in acqua bollente per 2 minuti prima dell uso e mantenetelo a galleggiare sul latte dal momento in cui aggiungete il caglio.'
    },
    {
      type: 'tip',
      title: 'Mantenete stabile la temperatura',
      html: 'Il tempo di flocculazione e fortemente dipendente dalla temperatura. Un calo di soli 2C puo raddoppiare il tempo di flocculazione. Mantenete il latte a una temperatura stabile (tipicamente 30-35C a seconda dello stile di formaggio) durante tutta la fase di coagulazione.'
    },
    {
      type: 'tip',
      title: 'Fate attenzione a flocculazioni molto rapide',
      html: 'Se la flocculazione avviene in meno di 8 minuti (480 secondi), potreste aver aggiunto troppo caglio o la temperatura del latte e troppo alta. Questo puo causare una texture gommosa e sapori amari. Il calcolatore vi avvisera se cio accade.'
    },
    {
      type: 'title',
      text: 'Riferimento del moltiplicatore di flocculazione per tipo di formaggio',
      level: 2
    },
    {
      type: 'table',
      headers: ['Stile di Formaggio', 'Moltiplicatore', 'Umidita Prevista', 'Durezza di Taglio', 'Potenziale di Stagionatura'],
      rows: [
        ['Parmesan, Grana', '2.0x', 'Molto bassa', 'Molto dura', '12+ mesi'],
        ['Mozzarella (fresca)', '2.0x', 'Molto alta', 'Morbida / Filante', 'Solo fresca'],
        ['Svizzero, Alpino', '2.5x', 'Bassa', 'Dura', '6-12 mesi'],
        ['Cheddar, Gouda', '3.0x', 'Media-bassa', 'Dura / Elastica', '3-12 mesi'],
        ['Formaggio Erborinato', '3.5x - 4.0x', 'Media', 'Tenera', '2-6 mesi'],
        ['Camembert, Brie', '5.0x', 'Alta', 'Molto tenera', '3-8 settimane'],
        ['Lattico / Caprino Fresco', '5.0x - 6.0x', 'Molto alta', 'Delicata', 'Fresco - 2 settimane']
      ]
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Moltiplicatore Basso 2.0x to 2.5x',
          icon: 'mdi:cheese',
          description: 'Utilizzato per varieta di formaggi a pasta dura e secca che richiedono una bassa ritenzione di umidita.',
          highlight: false,
          points: ['Mozzarella e Parmesan: 2.0x', 'Stili alpini: 2.5x', 'Drenaggio rapido del siero', 'Produce cagliata densa e stagionabile']
        },
        {
          title: 'Moltiplicatore Medio 3.0x to 4.0x',
          icon: 'mdi:cheese',
          description: 'Intervallo standard per formaggi semiduri che bilanciano umidita e acidita.',
          highlight: true,
          points: ['Cheddar e Gouda: 3.0x', 'Formaggi erborinati: 3.5x a 4.0x', 'Espulsione del siero equilibrata', 'Potenziale di maturazione flessibile']
        },
        {
          title: 'Moltiplicatore Alto 5.0x to 6.0x',
          icon: 'mdi:cheese',
          description: 'Utilizzato per formaggi molli, cremosi e ad alta umidita.',
          highlight: false,
          points: ['Camembert e Brie: 5.0x', 'Lattici e croste fiorite morbide', 'Alta ritenzione di umidita', 'Sviluppo di pasta delicata e cremosa']
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Risoluzione dei problemi: 3 segni che la cagliata non sta coagulando correttamente',
      html: '<strong>Flocculazione in meno di 6 minuti:</strong> Troppo caglio o latte troppo caldo. Riducete il caglio del 25% al prossimo lotto. <strong>La flocculazione richiede oltre 25 minuti:</strong> Il caglio potrebbe essere scaduto, il latte troppo freddo o il contenuto di calcio troppo basso. Aggiungete cloruro di calcio. <strong>La cagliata e viscida o fragile al momento del taglio:</strong> Il moltiplicatore potrebbe essere troppo alto o troppo basso per il vostro stile di formaggio. Regolate con incrementi di 0.5x.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Formaggi a Pasta Dura (Parmesan, Alpino)',
      html: 'Usate un <strong>moltiplicatore 2.0x - 2.5x</strong>. Tagliate la cagliata prima per la massima espulsione del siero. Queste cagliate vengono tagliate quando il gel e ancora relativamente fragile, producendo una cagliata densa e asciutta ideale per lunghe stagionature. Il calcolatore mostrera un tempo di coagulazione totale piu breve.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Formaggi a Pasta Semidura (Cheddar, Gouda)',
      html: 'Usate un <strong>moltiplicatore 3.0x</strong>. L intervallo standard per la maggior parte della caseificazione artigianale. Bilancia la ritenzione di umidita con il drenaggio del siero. La cagliata e elastica e si rompe pulitamente. La maggior parte delle ricette di formaggio rientra in questa categoria.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Formaggi a Pasta Molle (Camembert, Brie)',
      html: 'Usate un <strong>moltiplicatore 5.0x - 6.0x</strong>. Lasciate che il gel si rafforzi significativamente prima di tagliare. Questo trattiene l umidita all interno della cagliata, creando la texture cremosa e spalmabile caratteristica dei formaggi a crosta fiorita. Maneggiate la cagliata delicatamente per evitare di perdere il siero trattenuto.'
    },
    {
      type: 'title',
      text: 'Glossario della cagliata per la caseificazione artigianale',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Punto di Flocculazione', definition: 'Il momento nel processo di caseificazione in cui le proteine del latte iniziano ad aggregarsi e formare un gel morbido.' },
        { term: 'Caglio', definition: 'Un complesso di enzimi (principalmente chimosina) usato per coagulare il latte, separandolo in solidi (cagliata) e liquido (siero).' },
        { term: 'Sineresi', definition: 'L estrazione o l espulsione di un liquido da un gel, come il siero che drena dalla cagliata di formaggio.' },
        { term: 'Tempo di Coagulazione', definition: 'La durata totale dall aggiunta del caglio fino a quando la cagliata e pronta per essere tagliata.' }
      ]
    },
    {
      type: 'summary',
      title: 'Punti chiave per il taglio perfetto della cagliata',
      items: [
        'Misurate il tempo di flocculazione con precisione usando la prova della ciotola. Inseritelo nel calcolatore qui sopra.',
        'Selezionate il moltiplicatore che corrisponde al vostro stile di formaggio: 2.0x per i duri, 3.0x per i semiduri, 5.0x per i molli.',
        'Mantenete stabile la temperatura del latte durante la coagulazione. Anche un cambiamento di 2C altera significativamente il tempo di flocculazione.',
        'Se la flocculazione avviene in meno di 8 minuti, riducete il caglio la prossima volta. Se supera i 25 minuti, verificate la freschezza del caglio.',
        'Il calcolatore gestisce la matematica in modo che possiate concentrarvi sulla tecnica e sulla consistenza.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
