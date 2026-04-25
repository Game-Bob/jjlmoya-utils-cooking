import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Baiser & Eischnee Rechner";
const description = "Berechnen Sie die exakte Zuckermenge für französisches, italienisches oder Schweizer Baiser basierend auf dem Gewicht Ihres Eiweißes. Schlagzeiten und Konditor-Tipps.";
const faq = [
  {
    question: 'Welches Verhältnis von Zucker zu Eiweiß ist ideal?',
    answer: 'Die goldene Regel in der Konditorei ist das Verhältnis 1:2. Pro Gramm Eiweiß sollten zwei Gramm Zucker verwendet werden, um eine stabile und feste Struktur zu gewährleisten.',
  },
  {
    question: 'Woran erkenne ich, dass der Eischnee "steif" ist?',
    answer: 'Eischnee mit festen Spitzen ist erreicht, wenn beim Herausheben der Rührbesen eine Spitze entsteht, die senkrecht stehen bleibt, ohne umzuknicken. Zudem sollte die Masse stark glänzen.',
  },
  {
    question: 'Welches Baiser ist am stabilsten zum Dekorieren?',
    answer: 'Italienisches Baiser ist am stabilsten. Durch den heißen Zuckersirup werden die Proteine im Eiweiß leicht gegart, was eine hitze- und zeitbeständigere Struktur erzeugt.',
  },
  {
    question: 'Kann man pasteurisiertes Eiweiß aus der Packung verwenden?',
    answer: 'Ja, aber es dauert oft etwas länger, bis es steif wird. Ein Tipp ist die Zugabe einer Prise Weinsteinbackpulver oder ein paar Tropfen Zitronensaft zur Stabilisierung.',
  },
];
const howTo = [
  {
    name: 'Eiweiß wiegen',
    text: 'Verwenden Sie eine digitale Waage, um das exakte Gewicht des Eiweißes ohne Eigelbrückstände zu ermitteln.',
  },
  {
    name: 'Gewicht eingeben',
    text: 'Geben Sie das Gewicht in unseren Rechner ein, um die benötigte Zuckermenge zu erhalten.',
  },
  {
    name: 'Technik wählen',
    text: 'Wählen Sie zwischen französischem (einfach), italienischem (stabil) oder Schweizer (seidig) Baiser.',
  },
  {
    name: 'Schlagen und prüfen',
    text: 'Folgen Sie den geschätzten Zeiten und prüfen Sie die Konsistenz bis zur festen Spitzenbildung.',
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
  slug: 'eischnee-baiser-rechner',
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  ui: {
    whitesLabel: 'Gewicht des Eiweißes',
    whitesPlaceholder: 'z.B. 120',
    whitesUnit: 'g',
    typeLabel: 'Baiser-Typ',
    typeFrench: 'Französisch',
    typeItalian: 'Italienisch',
    typeSwiss: 'Schweizer',
    timesHeading: 'Geschätzte Zeiten (mittlere/hohe Geschwindigkeit)',
    stageSpumado: 'Schaumig',
    stageSpumadoDesc: 'Große Blasen, wie Seifenschaum.',
    stageSoftPeaks: 'Weiche Spitzen',
    stageSoftPeaksDesc: 'Die Spitze knickt beim Anheben um.',
    stageStiffPeaks: 'Feste Spitzen',
    stageStiffPeaksDesc: 'Feste, glänzende Spitze.',
    frenchSugarWhite: 'Feiner Zucker',
    frenchSugarPowder: 'Puderzucker',
    frenchTip: 'Französisches Baiser ist am einfachsten, ideal zum Backen von Baisers. Nicht für den Rohverzehr geeignet.',
    frenchTime1: '1-2 Min',
    frenchTime2: '3-5 Min',
    frenchTime3: '7-9 Min',
    italianSugarSyrup: 'Zucker für Sirup',
    italianWater: 'Wasser',
    italianTip: 'Italienisches Baiser ist am stabilsten. Es wird mit 118°C heißem Sirup hergestellt. Perfekt zum Dekorieren.',
    italianTime1: '2 Min',
    italianTime2: '5 Min',
    italianTime3: '10-12 Min',
    swissSugarWhite: 'Feiner Zucker',
    swissMaxTemp: 'Max. Temperatur',
    swissTip: 'Schweizer Baiser wird im Wasserbad erhitzt, bis der Zucker gelöst ist. Ideal für Buttercremes.',
    swissTime1: '1-2 Min',
    swissTime2: '4-6 Min',
    swissTime3: '8-10 Min',
    invalidWeightError: 'Gültiges Gewicht eingeben',
  },
  faq,
  howTo, seo: [
    {
      type: 'title',
      text: 'Meister Leitfaden für Baiser und Eischnee',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Beherrschung von <strong>Eischnee</strong> und Baiser hebt Ihre Backkunst auf ein professionelles Niveau. Der Schlüssel liegt im exakten Wiegen.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:2',
          label: 'Verhältnis Eiweiß:Zucker',
          icon: 'mdi:scale-balance',
        },
        {
          value: '118°C',
          label: 'Italienischer Sirup',
          icon: 'mdi:thermometer-high',
        },
        {
          value: '60°C',
          label: 'Schweizer Wasserbad',
          icon: 'mdi:beaker-question-outline',
        },
        {
          value: '0%',
          label: 'Fetttoleranz',
          icon: 'mdi:close-circle-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'Vergleich der Baiser Techniken',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Französisches Baiser',
          icon: 'mdi:baguette',
          description: 'Einfachste Form, am wenigsten stabil.',
          points: [
            'Ideal zum Backen',
            'Leichte Textur',
            'Muss gebacken werden',
            'Schnell zubereitet',
          ],
        },
        {
          title: 'Italienisches Baiser',
          icon: 'mdi:pizza',
          description: 'Maximale Stabilität durch heißen Sirup.',
          highlight: true,
          points: [
            'Perfekt für Torten',
            'Roh verzehrbar',
            'Feuchtigkeitsbeständig',
            'Dichte Struktur',
          ],
        },
        {
          title: 'Schweizer Baiser',
          icon: 'mdi:cheese',
          description: 'Im Wasserbad erwärmt. Seidig.',
          points: [
            'Basis für Buttercremes',
            'Sehr seidige Textur',
            'Hervorragend für Füllungen',
            'Gute Stabilität',
          ],
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Läuft Ihr Baiser aus',
      html: 'Wenn Sirup aus dem Baiser austritt (Synärese), wurde der Zucker nicht vollständig gelöst oder die Luftfeuchtigkeit ist zu hoch.',
    },
    {
      type: 'tip',
      title: 'Der Metallschlüssel Trick',
      html: 'Reinigen Sie die Schüssel vor Beginn mit Essig oder Zitrone. Fettspuren verhindern das Steifwerden des Eiweißes.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
