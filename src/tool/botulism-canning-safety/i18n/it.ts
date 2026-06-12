import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calcolatore Sicurezza Conserve Botulismo Morte Termica";
const description = "Calcola la riduzione termica delle spore e la letalita di sterilizzazione F0 per Clostridium botulinum. Valuta le zone di sicurezza per conserve a bassa acidita e acide.";
const faq = [
  {
    question: "Perche Clostridium botulinum e una grande preoccupazione nelle conserve casalinghe?",
    answer: "Clostridium botulinum e un batterio anaerobico sporigeno che produce la tossina botulinica, una delle sostanze biologiche piu letali conosciute. Le spore sono estremamente resistenti al calore e possono sopravvivere in condizioni anaerobiche all interno di barattoli sigillati se le temperature sono insufficienti."
  },
  {
    question: "Qual e il significato critico del pH 4.6 nella conservazione degli alimenti?",
    answer: "Gli alimenti con un pH inferiore a 4.6 sono classificati come acidi. In questi ambienti, le spore di Botulinum non possono germinare ne produrre tossine. Per gli alimenti con pH pari o superiore a 4.6, l inscatolamento a pressione e obbligatorio per raggiungere temperature superiori a 116 gradi Celsius e distruggere le spore."
  },
  {
    question: "Cos e il valore di letalita di sterilizzazione F0?",
    answer: "Il valore F0 misura il tempo di sterilizzazione equivalente a 121.11 gradi Celsius. Un processo standard di sterilizzazione per alimenti a bassa acidita richiede un valore F0 di 3.0 minuti o superiore, che rappresenta una riduzione decimale di dodici della popolazione di spore."
  },
  {
    question: "Perche non posso usare un bagnomaria per alimenti a bassa acidita?",
    answer: "L inscatolamento a bagnomaria raggiunge solo il punto di ebollizione (100 gradi Celsius). Questa temperatura e insufficiente per uccidere le spore termoresistenti di Clostridium botulinum negli alimenti a bassa acidita. Le spore sopravvivono e producono tossine a temperatura ambiente."
  }
];

const howTo = [
  {
    name: "Inserisci il livello di acidita dell alimento",
    text: "Determina e inserisci il valore del pH dei tuoi ingredienti. Se il pH e uguale o superiore a 4.6, l alimento e a bassa acidita."
  },
  {
    name: "Seleziona la tecnica di inscatolamento",
    text: "Scegli tra inscatolamento a bagnomaria o inscatolamento a pressione in base alla tua attrezzatura di conservazione."
  },
  {
    name: "Definisci temperatura e durata",
    text: "Inserisci la temperatura di lavorazione e il tempo in minuti che i barattoli rimangono a quella temperatura."
  },
  {
    name: "Valuta le diagnosi di sicurezza",
    text: "Controlla il valore F0 risultante, il conteggio della riduzione decimale delle spore e l indicatore della zona di sicurezza per confermare la conformita."
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
  slug: 'sicurezza-conserve-botulismo',
  title: 'Calcolatore Sicurezza Conserve Botulismo',
  description: 'Calcola la riduzione termica delle spore e la letalita di sterilizzazione F0 per Clostridium botulinum. Valuta le zone di sicurezza per conserve a bassa acidita e acide.',
  faqTitle: 'Domande Frequenti',
  ui: {
    title: "Monitor Autoclave per Conserve",
    subtitle: "Diagnostica di morte termica e valutatore di sicurezza botulinica",
    methodLabel: "Metodo di Inscatolamento",
    waterBath: "Inscatolamento a Bagnomaria",
    pressureCanner: "Inscatolamento a Pressione",
    tempLabel: "Temperatura di Lavorazione",
    timeLabel: "Tempo di Lavorazione",
    phLabel: "pH dell Alimento",
    f0Label: "Valore di Letalita F0",
    dLabel: "Valore D Calcolato",
    sporesLabel: "Popolazione di Spore",
    statusSafe: "Sterilizzazione Completa",
    statusMarginal: "Sterilizzazione Marginale",
    statusUnsafe: "Alto Rischio di Botulismo",
    statusSafeDesc: "La letalita termica supera l F0 target di 3.0 minuti. Le spore sono completamente disattivate.",
    statusMarginalDesc: "Il processo raggiunge una disattivazione parziale ma rimane al di sotto dello standard di sicurezza 12D. Regola il tempo o la temperatura.",
    statusUnsafeDesc: "Il processo non disattiva Clostridium botulinum. Gli alimenti a bassa acidita nei bagnomaria rimangono pericolosi.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "min",
    logReductionLabel: "Riduzione Decimale",
    dValueUnit: "minuti",
    indicatorSectionTitle: "Indicatori Diagnostici",
    visualizerSectionTitle: "Riduzione delle Spore",
    f0Tooltip: "Tempo di sterilizzazione equivalente in minuti a 121.11°C. La soglia di sicurezza e 3.0 o superiore.",
    dTooltip: "Tempo di riduzione decimale: durata in minuti necessaria per distruggere il 90% delle spore alla temperatura attuale.",
    logReductionTooltip: "Numero di riduzioni decimali (fattore 10). Una riduzione 12D e lo standard di sicurezza.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Meccanismi Scientifici del Trattamento Termico e Cinetica di Disattivazione delle Spore',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il trattamento termico nell inscatolamento garantisce la sterilita commerciale distruggendo microrganismi patogeni e di alterazione. L obiettivo principale delle linee guida sulla sicurezza nella conservazione degli alimenti a bassa acidita e Clostridium botulinum. Le spore di Botulinum sono altamente resistenti al calore rispetto alle cellule vegetative. Disattivare queste spore richiede un processo di tempo di morte termica che applica alta temperatura per una durata calcolata. La relazione matematica tra temperatura e tasso di disattivazione e espressa attraverso il tempo di riduzione decimale (valore D) e il fattore di dipendenza dalla temperatura (valore z).',
    },
    {
      type: 'title',
      text: 'Classificazione degli Alimenti e la Soglia Critica di Sicurezza pH 4.6',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un valore di pH di 4.6 e la linea di demarcazione per la sicurezza della conservazione. Gli alimenti acidi con pH inferiore a 4.6 inibiscono naturalmente la germinazione e la produzione di tossine delle spore di Botulinum. Per questi alimenti, la lavorazione a 100 gradi Celsius in un bagnomaria bollente e sufficiente. Tuttavia, gli alimenti a bassa acidita con pH superiore a 4.6 devono essere sottoposti a inscatolamento a pressione per aumentare la temperatura del vapore e ottenere la completa distruzione termica delle spore. La tabella seguente dettaglia le classificazioni e i metodi di inscatolamento per ingredienti comuni:',
    },
    {
      type: 'table',
      headers: ['Gruppo Alimentare', 'Intervallo di pH', 'Metodo di Conservazione Richiesto', 'Esempi Comuni'],
      rows: [
        ['Alta Acidita', 'Inferiore a 4.0', 'Inscatolamento a Bagnomaria', 'Mele, Bacche, Agrumi, Pesche, Sottaceti'],
        ['Acidificati o Media Acidita', '4.0 a 4.6', 'Bagnomaria con Aggiunta di Acido', 'Pomodori, Fichi, Pere'],
        ['Bassa Acidita', '4.6 e superiore', 'Inscatolamento a Pressione Obbligatorio', 'Carne, Pesce, Fagioli, Mais, Patate, Zuppe'],
      ],
    },
    {
      type: 'title',
      text: 'Regolazioni per Altitudine e Correzioni di Sicurezza del Punto di Ebollizione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Con l aumento dell altitudine, la pressione atmosferica diminuisce, causando l abbassamento del punto di ebollizione dell acqua al di sotto di 100 gradi Celsius. Nell inscatolamento a bagnomaria, questa temperatura piu bassa aumenta il valore D delle spore, richiedendo tempi di lavorazione piu lunghi. Nell inscatolamento a pressione, le impostazioni del manometro a quadrante o a peso devono essere aumentate per mantenere la temperatura interna di sterilizzazione target. Di seguito e riportata la guida di riferimento per i punti di ebollizione e le regolazioni necessarie per l inscatolamento a pressione:',
    },
    {
      type: 'table',
      headers: ['Intervallo di Altitudine', 'Punto di Ebollizione dell Acqua', 'Pressione Richiesta Manometro a Quadrante', 'Pressione Richiesta Manometro a Peso'],
      rows: [
        ['0 a 300 metri', '100.0 °C', '11 PSI (121 °C)', '10 PSI (121 °C)'],
        ['300 a 600 metri', '99.0 °C', '11 PSI (121 °C)', '15 PSI (121 °C)'],
        ['600 a 900 metri', '98.0 °C', '12 PSI (121 °C)', '15 PSI (121 °C)'],
        ['900 a 1200 metri', '97.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1200 a 1500 metri', '96.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1500 a 2000 metri', '94.5 °C', '14 PSI (121 °C)', '15 PSI (121 °C)'],
      ],
    },
    {
      type: 'title',
      text: 'Perche il Concetto di Riduzione delle Spore 12D Previene il Botulismo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La distruzione batterica mediante calore e logaritmica. Il valore D rappresenta il tempo necessario a una temperatura specifica per distruggere il 90% della popolazione di spore, che equivale a una riduzione logaritmica decimale. Lo standard di riferimento per Clostridium botulinum e un valore D di 0.21 minuti a 121.11 gradi Celsius. Per ottenere elevati margini di sicurezza, gli standard commerciali richiedono un processo di riduzione decimale di dodici (12D), il che significa che la popolazione di spore viene ridotta di dodici fattori di dieci. Questo produce un valore F0 target di 3.0 minuti, che garantisce la sicurezza negli alimenti a bassa acidita.',
    },
    {
      type: 'title',
      text: 'Guida Pratica all Inscatolamento Casalingo e Consigli di Sicurezza',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Acidifica sempre i pomodori con succo di limone o acido citrico prima della lavorazione a bagnomaria, poiche il loro pH naturale fluttua vicino alla soglia critica di 4.6.',
        'Non ridurre mai i tempi di lavorazione o abbassare le temperature. La cinetica di morte termica e logaritmica e piccole regolazioni possono permettere la sopravvivenza delle spore.',
        'Assicurati che i manometri a quadrante degli inscatolatori a pressione vengano testati annualmente per la precisione, poiche letture di pressione errate compromettono direttamente le temperature interne di sterilizzazione.',
        'Compensa le differenze di altitudine regolando i tempi di lavorazione nei bagnomaria o aumentando le impostazioni PSI sugli inscatolatori a pressione.',
        'Evita di inscatolare ricette miste contenenti ingredienti a bassa acidita come carne o fagioli in un inscatolatore a bagnomaria, anche se la ricetta complessiva contiene acido.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
