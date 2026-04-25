import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calcolatore Dosi Ingredienti e Ricette';
const description = 'Scala le ricette automaticamente in base al numero di porzioni. Calcola le quantità esatte degli ingredienti moltiplicando o riducendo la tua ricetta senza complicazioni.';

const faq = [
  {
    question: 'Perché il mio fattore di conversione include dei decimali?',
    answer: 'Perché le proporzioni culinarie non sono sempre arrotondate. Se scali una ricetta da 4 a 7 persone, il fattore è esattamente 1.75. Gli ingredienti vengono moltiplicati per quel numero, anche se ottieni delle frazioni. È più accurato rispetto a un arrotondamento arbitrario.',
  },
  {
    question: 'Cosa succede se inserisco "1/2 cucchiaino di sale"?',
    answer: 'Il parser cerca prima il numero. Riconoscerà "1" come quantità, poi "/2" come parte dell\'unità. Il risultato sarà "0.5" e verrà scalato correttamente. Per frazioni come "1/2", puoi inserire direttamente "0.5" (più chiaro) o lo strumento le interpreterà come divisione.',
  },
  {
    question: 'Devo arrotondare i risultati finali?',
    answer: 'Dipende dall\'ingrediente. Per le farine, sì. Per lieviti o spezie, la precisione conta meno (scala al 75% di quanto indicato). Per le uova: se ottieni 2.3, usa 2 uova intere + parte di un terzo (pesato), o arrotonda a 2 se il piatto lo consente.',
  },
  {
    question: 'Perché il risultato non cambia quando modifico le porzioni?',
    answer: 'Assicurati che il campo degli ingredienti non sia vuoto. Se è vuoto, non c\'è nulla da scalare. Verifica anche che i numeri nei tuoi ingredienti siano riconoscibili (es: "500g", "1/2 cucchiaino").',
  },
  {
    question: 'Funziona con misure imperiali (once, tazze)?',
    answer: 'Tecnicamente sì, lo strumento legge i numeri e scala. Ma la precisione è limitata con le tazze (volume incoerente). Si raccomanda di convertire in grammi prima di scalare.',
  },
];

const howTo = [
  {
    name: 'Inserisci le porzioni',
    text: 'Nel campo "Originale", inserisci il numero di persone per cui la ricetta è stata pensata. In "Desiderato", inserisci il numero di persone per cui cucinerai.',
  },
  {
    name: 'Incolla la lista degli ingredienti',
    text: 'Copia e incolla la tua lista così com\'è. Ogni ingrediente su una riga. Lo strumento riconosce i numeri all\'inizio (500g, 1/2, 2.5) e scala automaticamente.',
  },
  {
    name: 'Regola in base al contesto',
    text: 'I risultati sono matematicamente esatti, ma la cucina è un\'arte. Spezie: scala al 75%. Lieviti: meno del teorico per grandi quantità. I tempi di cottura non si scalano mai.',
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
  operatingSystem: 'All',
};

export const content: ToolLocaleContent = {
  slug: 'calcolo-dosi-ricette',
  title,
  description,
  ui: {
    servings: 'Porzioni',
    original: 'Originale',
    desired: 'Desiderato',
    multiplyingFactor: 'Fattore Moltiplicatore',
    ingredientsList: 'Lista Ingredienti',
    pasteHere: 'Incolla qui la tua lista.',
    exampleLine1: 'Es:',
    exampleLine2: '500g Farina',
    exampleLine3: '300ml Acqua',
    exampleLine4: '10g Sale',
    result: 'Risultato',
    copy: 'Copia',
    copied: 'Copiato!',
    emptyState: 'I tuoi ingredienti regolati appariranno qui...',
    defaultIngredient1: '200g Farina',
    defaultIngredient2: '100ml Latte',
    defaultIngredient3: '2 Uova',
  },
  faqTitle: 'Domande Frequenti',
  faq,  howTo,
  seo: [
    {
      type: 'title',
      text: 'Guida per lo Scalamento e la Conversione delle Ricette',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lo <strong>scalamento degli ingredienti</strong> è uno dei compiti più critici e soggetti a errori nella cucina professionale. Non si tratta solo di moltiplicare numeri, ma di capire come la chimica e la fisica degli alimenti reagiscono ai cambiamenti di volume e superficie.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: 'x1.75',
          label: 'Fattore da 4 a 7 per.',
          icon: 'mdi:calculator',
        },
        {
          value: '75%',
          label: 'Regolazione Spezie',
          icon: 'mdi:shaker-outline',
        },
        {
          value: '0%',
          label: 'Scaling del Tempo',
          icon: 'mdi:timer-off',
        },
        {
          value: '100g',
          label: 'Base di Riferimento',
          icon: 'mdi:weight-gram',
        },
      ],
    },
    {
      type: 'title',
      text: 'Differenze tra Scaling Lineare e Contestuale',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Scaling Lineare Matematico',
          icon: 'mdi:math-log',
          description: 'Moltiplicazione diretta di tutti i valori per il fattore di conversione ottenuto.',
          points: [
            'Perfetto per farine e liquidi base',
            'Ideale per pasticceria di precisione',
            'Funziona bene per piccoli cambiamenti (x2, x0.5)',
            'Facile da calcolare automaticamente',
          ],
        },
        {
          title: 'Scaling Contestuale da Cucina',
          icon: 'mdi:chef-hat',
          description: 'Regolazione delle proporzioni basata sulla saturazione del sapore e l\'evaporazione.',
          highlight: true,
          points: [
            'Evita eccessi di sale e spezie',
            'Considera la superficie di evaporazione',
            'Regola lieviti in base alla massa',
            'Richiede esperienza e giudizio dello chef',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Fattori di Conversione per Numero di commensali',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Da Porzioni', 'A Porzioni', 'Fattore (FC)', 'Difficoltà'],
      rows: [
        ['2 persone', '4 persone', 'x 2.0', 'Bassa (Lineare)'],
        ['4 persone', '6 persone', 'x 1.5', 'Bassa (Lineare)'],
        ['4 persone', '10 persone', 'x 2.5', 'Media (Attenzione alle spezie)'],
        ['4 persone', '25 persone', 'x 6.25', 'Alta (Contestuale)'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Problemi comuni raddoppiando una ricetta',
      html: 'Se noti che il sapore è troppo intenso dopo lo scaling (specialmente con piccante o sale), riduci lo scaling di questi ingredienti specifici al 75%. Non raddoppiare mai il tempo di cottura; la temperatura interna si raggiunge in base allo spessore, non al peso totale.',
    },
    {
      type: 'title',
      text: 'Glossario della Terminologia di Standardizzazione',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Fattore di Conversione',
          definition: 'Numero per cui si moltiplicano tutti gli ingredienti: Quantità Desiderata / Quantità Originale.',
        },
        {
          term: 'Calo Peso',
          definition: 'Perdita di peso di un ingrediente per evaporazione o perdita di grasso.',
        },
        {
          term: 'Peso Lordo vs Netto',
          definition: 'Il peso prima e dopo la pulizia dell\'ingrediente.',
        },
        {
          term: 'Resa',
          definition: 'Quantità totale di prodotto finito dopo lo scaling e la cottura.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Il trucco dell\'uovo sbattuto',
      html: 'Se il calcolatore indica 2.3 uova, sbatti un uovo intero, pesalo e usa solo il 30% del peso. È l\'unico modo per mantenere la precisione in alta pasticceria.',
    },
    {
      type: 'paragraph',
      html: 'Il nostro strumento semplifica la matematica per lasciarti dedicare a ciò che conta davvero: creatività e sapore.',
    },
  ],
  bibliography,
  schemas: [appSchema, faqSchema, howToSchema],
};
