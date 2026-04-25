import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Convertitore Cucina Americana: Cup in Grammi e Temperature";
const description = "Converti cup, cucchiai e Fahrenheit in sistema metrico. La bussola per decifrare le ricette americane con precisione professionale.";
const faq = [
  {
    question: 'Qual è la differenza tra 1 cup e 250ml?',
    answer: '1 cup americana = 236,588ml, non 250ml. Per fini pratici, usiamo 240ml. Anche se sembra piccola, questa differenza del 4% può influire su ricette sensibili come macaron o mousse.',
  },
  {
    question: 'Perché la farina non pesa sempre lo stesso?',
    answer: 'Perché la farina si compatta con il tempo e il trasporto. Una farina appena setacciata pesa meno di una rimasta in dispensa. Per questo, i pasticceri professionisti pesano sempre, invece di misurare il volume.',
  },
  {
    question: 'Qual è la differenza tra Tbsp e tsp?',
    answer: '1 Tablespoon (Tbsp/cchiaio) = 15ml. 1 Teaspoon (tsp/cchiaino) = 5ml. Un cucchiaio è pari a 3 cucchiaini. Nelle ricette di pasticceria, gli errori con le spezie (misurate in tsp) sono comuni.',
  },
  {
    question: 'Una cup US è uguale a una cup imperiale?',
    answer: 'No. 1 US cup = 236ml. 1 Imperial cup (UK) = 284ml. Una differenza del 20%. La maggior parte dei blog americani usa le US cup. Se la ricetta non specifica, assumi US.',
  },
  {
    question: 'A che temperatura corrisponde il "gas 4" del forno?',
    answer: 'Gas 4 = 180°C = 350°F. È la scala britannica. In cucina, cerchiamo il numero equivalente nel tuo forno: alcuni usano il gas, altri gradi elettronici.',
  },
];
const howTo = [
  {
    name: 'Seleziona il tipo di conversione',
    text: 'Scegli tra Cup in Grammi, Cucchiai/Cchiaini in Grammi, o Fahrenheit in Celsius.',
  },
  {
    name: 'Scegli l\'ingrediente',
    text: 'Ogni alimento ha una densità diversa. Farina, zucchero, burro: pesano tutti in modo differente.',
  },
  {
    name: 'Inserisci la quantità',
    text: 'Scrivi il numero di cup, cucchiai o gradi. Il convertitore calcola l\'equivalente all\'istante.',
  },
  {
    name: 'Adatta la tua ricetta',
    text: 'Con la conversione esatta, ora puoi seguire la ricetta americana con precisione professionale.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
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
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'convertitore-unita-cucina-americana',
  title: 'Convertitore Cucina Americana: Cup in Grammi e Temperature',
  description: 'Converti cup, cucchiai e Fahrenheit in sistema metrico. La bussola per decifrare le ricette americane con precisione professionale.',
  faqTitle: 'Domande Frequenti',
  ui: {
    copied: 'Copiato',
    noHistory: 'Nessuna cronologia',
    load: 'Carica',
    delete: 'Elimina',
    tabCups: 'Cup in Grammi',
    tabSpoons: 'Cucchiai in Grammi',
    tabTemperatures: 'Temperature',
    tabCupsAriaLabel: 'Cup in Grammi',
    tabSpoonsAriaLabel: 'Cucchiai in Grammi',
    tabTempsAriaLabel: 'Temperature del Forno',
    stepSelectIngredient: 'Seleziona l\'Ingrediente',
    stepHowManyCups: 'Quante Cup?',
    stepSelectMeasure: 'Seleziona la Misura',
    stepQuantity: 'Quantità',
    stepOvenConversion: 'Conversione Forno',
    stepFrequentTemps: 'Temperature Ricette Frequenti',
    cupFlour: 'Farina',
    cupFlourSub: '120g / cup',
    cupWhiteSugar: 'Zucchero Bianco',
    cupWhiteSugarSub: '200g / cup',
    cupBrownSugar: 'Zucchero di Canna',
    cupBrownSugarSub: '220g / cup',
    cupPowderSugar: 'Zucchero a Velo',
    cupPowderSugarSub: '115g / cup',
    cupButter: 'Burro',
    cupButterSub: '227g / cup',
    cupCocoa: 'Cacao in Polvere',
    cupCocoaSub: '85g / cup',
    cupLiquids: 'Liquidi',
    cupLiquidsSub: '240g / cup',
    cupOats: 'Avena',
    cupOatsSub: '90g / cup',
    cupFlourAriaLabel: 'Farina',
    cupWhiteSugarAriaLabel: 'Zucchero Bianco',
    cupBrownSugarAriaLabel: 'Zucchero di Canna',
    cupPowderSugarAriaLabel: 'Zucchero a Velo',
    cupButterAriaLabel: 'Burro',
    cupCocoaAriaLabel: 'Cacao',
    cupLiquidsAriaLabel: 'Liquido',
    cupOatsAriaLabel: 'Avena',
    stepperMinus: 'Sottrai',
    stepperPlus: 'Aggiungi',
    cupsAmountLabel: 'Quantità di Cup',
    spoonQuantityLabel: 'Quantità',
    cupQuick1_4: '1/4 Cup',
    cupQuick1_3: '1/3 Cup',
    cupQuick1_2: '1/2 Cup',
    cupQuick1: '1 Cup',
    unitGrams: 'Grammi',
    unitGramsML: 'Grammi / Millilitri',
    spoonMeasureLabel: 'Seleziona la Misura',
    spoonTablespoon: 'Cucchiaio (Tbsp)',
    spoonTeaspoon: 'Cucchiaino (tsp)',
    spoonTablespoonAriaLabel: 'Cucchiaio',
    spoonTeaspoonAriaLabel: 'Cucchiaino',
    spoonSelectIngredient: 'Seleziona l\'Ingrediente',
    spoonLeavening: 'Lievito',
    spoonLeaveningSub: 'Lievito in polvere',
    spoonSalt: 'Sale Fino',
    spoonSaltSub: 'Minerale',
    spoonSugar: 'Zucchero Bianco',
    spoonSugarSub: 'Granulato',
    spoonLiquids: 'Liquidi',
    spoonLiquidsSub: 'Acqua, Olio',
    spoonLeavingAriaLabel: 'Lievito Chimico',
    spoonSaltAriaLabel: 'Sale',
    spoonSugarAriaLabel: 'Zucchero Bianco',
    spoonLiquidsAriaLabel: 'Liquido',
    spoonQuick1_4: '1/4',
    spoonQuick1_2: '1/2',
    spoonQuick1: '1',
    spoonQuick2: '2',
    tempFahrenheit: 'Fahrenheit (°F)',
    tempCelsius: 'Celsius (°C)',
    tempFahrenheitAriaLabel: 'Fahrenheit',
    tempCelsiusAriaLabel: 'Celsius',
    tempPreset275: '275°F',
    tempPreset275Desc: '135°C - Essiccazione',
    tempPreset275AriaLabel: 'Imposta 275 Fahrenheit',
    tempPreset325: '325°F',
    tempPreset325Desc: '165°C - Torte dense',
    tempPreset325AriaLabel: 'Imposta 325 Fahrenheit',
    tempPreset350: '350°F',
    tempPreset350Desc: '175°C - Standard dolci',
    tempPreset350AriaLabel: 'Imposta 350 Fahrenheit',
    tempPreset400: '400°F',
    tempPreset400Desc: '200°C - Pane / Crostate',
    tempPreset400AriaLabel: 'Imposta 400 Fahrenheit',
    tempPreset425: '425°F',
    tempPreset425Desc: '220°C - Pizza / Sfoglia',
    tempPreset425AriaLabel: 'Imposta 425 Fahrenheit',
  },
  seo: [
    {
      type: 'title',
      text: 'Guida Professionale al Convertitore di Misure da Cucina Americane',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Convertire le <strong>cup in grammi</strong> o i <strong>Fahrenheit in Celsius</strong> è il primo passo per padroneggiare le ricette internazionali. La cucina statunitense si basa sul volume, il che introduce una variabilità fino al 25% negli ingredienti secchi come la farina.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '120g',
          label: '1 Cup di Farina',
          icon: 'mdi:grain',
        },
        {
          value: '227g',
          label: 'Stick di Burro',
          icon: 'mdi:cube-outline',
        },
        {
          value: '175°C',
          label: 'Equivalente 350°F',
          icon: 'mdi:thermometer',
        },
        {
          value: '240ml',
          label: 'Volume 1 Cup',
          icon: 'mdi:water-percent',
        },
      ],
    },
    {
      type: 'title',
      text: 'Differenze Critiche tra Volume e Peso',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Misurazione per Volume (Cup)',
          icon: 'mdi:cup-water',
          description: 'Utilizzato nelle ricette domestiche USA. Misura lo spazio occupato dall\'ingrediente.',
          points: [
            'Molto dipendente dalla compattazione',
            'Errore comune del 20-30% nelle farine',
            'Incostante tra marche diverse di tazze',
            'Richiede di setacciare prima per maggior precisione',
          ],
        },
        {
          title: 'Misurazione per Peso (Grammi)',
          icon: 'mdi:scale-balance',
          description: 'Lo standard della pasticceria professionale ed europea. Precisione assoluta.',
          highlight: true,
          points: [
            'Precisione di +/- 1g sempre',
            'Risultati costanti e ripetibili',
            'Meno sporco (una sola ciotola)',
            'Facilita il calcolo delle proporzioni',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Equivalenze di Ingredienti Comuni',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Ingrediente', '1 Cup (Volume)', 'Grammi (Peso)', 'Densità'],
      rows: [
        ['Farina di Grano', '1 Cup', '120g', 'Bassa'],
        ['Zucchero Bianco', '1 Cup', '200g', 'Media'],
        ['Zucchero di Canna', '1 Cup', '220g (compattato)', 'Alta'],
        ['Burro', '1 Cup (2 stick)', '227g', 'Alta'],
        ['Cacao in Polvere', '1 Cup', '85g', 'Molto Bassa'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Il tuo dolce è uscito troppo asciutto?',
      html: 'Il problema più comune nell\'usare le cup è "affondare la tazza" nel sacco della farina. Questo compatta la polvere e potresti aggiungere fino a 40g extra di farina per ogni tazza. La soluzione è <strong>sempre convertire in grammi</strong> usando il nostro calcolatore.',
    },
    {
      type: 'title',
      text: 'Glossario delle Unità Statunitensi',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cup (Tazza)',
          definition: 'Unità di volume equivalente a circa 240ml. È la base della cucina americana.',
        },
        {
          term: 'Tbsp (Tablespoon)',
          definition: 'Cucchiaio da tavola, equivalente a 15ml o 3 teaspoon.',
        },
        {
          term: 'tsp (Teaspoon)',
          definition: 'Cucchiaino da caffè, equivalente a 5ml. Fondamentale per lieviti e sale.',
        },
        {
          term: 'Stick of Butter',
          definition: 'Formato comune di burro negli USA che pesa esattamente 113.5g (mezza cup).',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Il trucco del Cucchiaio',
      html: 'Se non hai una bilancia e DEVI usare le cup, riempi la tazza a cucchiaiate senza premere e livella con un coltello. È molto più preciso che affondare la tazza.',
    },
    {
      type: 'paragraph',
      html: 'L\'uso di un convertitore professionale trasforma la frustrazione delle ricette straniere nel successo di un risultato perfetto.',
    },
  ],
  faq: [
    {
      question: 'Qual è la differenza tra 1 cup e 250ml?',
      answer: '1 cup americana = 236,588ml, non 250ml. Per fini pratici, usiamo 240ml. Anche se sembra piccola, questa differenza del 4% può influire su ricette sensibili come macaron o mousse.',
    },
    {
      question: 'Perqué la farina non pesa sempre lo stesso?',
      answer: 'Perqué la farina si compatta con il tempo e il trasporto. Una farina appena setacciata pesa meno di una rimasta in dispensa. Per questo, i pasticceri professionisti pesano sempre, invece di misurare il volume.',
    },
    {
      question: 'Qual è la differenza tra Tbsp e tsp?',
      answer: '1 Tablespoon (Tbsp/cchiaio) = 15ml. 1 Teaspoon (tsp/cchiaino) = 5ml. Un cucchiaio è pari a 3 cucchiaini. Nelle ricette di pasticceria, gli errori con le spezie (misurate in tsp) sono comuni.',
    },
    {
      question: 'Una cup US è uguale a una cup imperiale?',
      answer: 'No. 1 US cup = 236ml. 1 Imperial cup (UK) = 284ml. Una differenza del 20%. La maggior parte dei blog americani usa le US cup. Se la ricetta non specifica, assumi US.',
    },
    {
      question: 'A che temperatura corrisponde il "gas 4" del forno?',
      answer: 'Gas 4 = 180°C = 350°F. È la scala britannica. In cucina, cerchiamo il numero equivalente nel tuo forno: alcuni usano il gas, altri gradi elettronici.',
    },
  ],
  howTo: [
    {
      name: 'Seleziona il tipo de conversione',
      text: 'Scegli tra Cup in Grammi, Cucchiai/Cchiaini in Grammi, o Fahrenheit in Celsius.',
    },
    {
      name: 'Scegli l\'ingrediente',
      text: 'Ogni alimento ha una densità diversa. Farina, zucchero, burro: pesano tutti in modo differente.',
    },
    {
      name: 'Inserisci la quantità',
      text: 'Scrivi il numero di cup, cucchiai o gradi. Il convertitore calcola l\'equivalente all\'istante.',
    },
    {
      name: 'Adatta la tua ricetta',
      text: 'Con la conversione esatta, ora puoi seguire la ricetta americana con precisione professionale.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
