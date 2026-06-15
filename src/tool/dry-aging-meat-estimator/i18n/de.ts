import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Rechner für Trockenreifung von Fleisch und Kosten";
const description = "Berechnen Sie Gewichtsverlust, Verschnitt und tatsächliche Kosten pro Kilogramm beim Trockenreifen von Rindfleisch oder anderen Fleischsorten zu Hause oder in der Reifekammer.";
const faq = [
  {
    question: "Wie viel Gewicht verliert Fleisch während der Trockenreifung?",
    answer: "Während eines standardmäßigen 30- bis 45-tägigen Trockenreifungsprozesses verliert Fleisch durch Verdunstung etwa 15% bis 25% seines Gewichts. Zusätzlich gehen etwa 15% des Anfangsgewichts durch das Parieren der trockenen äußeren Kruste (Pellikel) vor dem Kochen verloren."
  },
  {
    question: "Was ist die optimale Luftfeuchtigkeit für die Trockenreifung?",
    answer: "Die ideale relative Luftfeuchtigkeit für die Trockenreifung liegt zwischen 75% und 85%. Ist sie zu niedrig (unter 75%), trocknet die Oberfläche zu schnell und bildet eine harte Barriere. Ist sie zu hoch (über 85%), steigt das Risiko für Schimmelbildung."
  },
  {
    question: "Warum steigt der Preis pro Kilogramm so stark an?",
    answer: "Da durch Wasserverlust und Verschnitt Gewicht verloren geht, ist das nutzbare Endgewicht geringer als das Anfangsgewicht. Da die Gesamtkosten gleich bleiben, steigt der Kilogrammpreis des genießbaren Anteils proportional zum Gewichtsverlust."
  }
];

const howTo = [
  {
    name: "Anfangsgewicht eingeben",
    text: "Geben Sie das Startgewicht des Fleischstücks vor der Reifung ein."
  },
  {
    name: "Reifetage festlegen",
    text: "Wählen Sie die Gesamtdauer der Reifung, üblicherweise zwischen 1 und 60 Tagen."
  },
  {
    name: "Relative Luftfeuchtigkeit anpassen",
    text: "Stellen Sie die Feuchtigkeit Ihrer Kammer ein (ideal sind 75% bis 85%), um die Verdunstungsrate zu bestimmen."
  },
  {
    name: "Originalpreis eingeben",
    text: "Geben Sie den Preis pro Kilogramm des Rohfleischs ein, um ihn mit den endgültigen Kosten des nutzbaren Ertrags zu vergleichen."
  }
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
  slug: 'fleisch-trockenreifungs-rechner',
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  ui: {
    title: 'Trockenreifungsrechner',
    subtitle: 'Gewichtsverlust simulieren und die endgültigen Ertragskosten berechnen',
    startWeightLabel: 'Anfangsgewicht',
    daysLabel: 'Reifezeit',
    pricePerKgLabel: 'Originalpreis',
    humidityLabel: 'Relative Feuchtigkeit',
    finalWeightLabel: 'Verwendbares Endgewicht',
    yieldLabel: 'Verwendbare Gesamtausbeute',
    originalCostLabel: 'Anfängliche Gesamtkosten',
    finalCostPerKgLabel: 'Verwendbarer Endpreis',
    moistureLossLabel: 'Wasserverdampfungsverlust',
    trimmingLossLabel: 'Verschnittverlust (Pellikel)',
    warningLowHumidity: 'Warnung: Die Luftfeuchtigkeit liegt unter 75%. Die Oberfläche kann zu schnell austrocknen (Krustenbildung).',
    warningHighHumidity: 'Warnung: Die Luftfeuchtigkeit liegt über 85%. Erhöhtes Risiko für Bakterienbefall oder unerwünschten Schimmelpilzwuchs.',
    timelineTitle: 'Trockenreifungsverlauf',
    timelineInfoText: 'Klicken Sie auf die Verlaufslinie, um die physikalischen Veränderungen des Fleischstücks anzuzeigen'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Wissenschaft und Wirtschaftlichkeit der Trockenreifung',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Die Trockenreifung (Dry Aging) ist ein kulinarisches Handwerk, das Mikrobiologie, Biochemie und Physik vereint, um Standardfleischstücke in zarte, geschmacksintensive Delikatessen zu verwandeln. In einer kontrollierten Umgebung finden zwei wesentliche Prozesse statt: enzymatischer Abbau und Verdunstung.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '75-85%',
          label: 'Ideale Feuchte',
          icon: 'mdi:water-percent'
        },
        {
          value: '1-3°C',
          label: 'Optimale Temp.',
          icon: 'mdi:thermometer'
        },
        {
          value: '15%',
          label: 'Verschnittverlust',
          icon: 'mdi:knife'
        },
        {
          value: '30-45 d',
          label: 'Standardreifung',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Gewichtsverlust und asymptotische Kurve',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Der Gewichtsverlust verläuft asymptotisch. In den ersten 14 Tagen verdampft Wasser rasch aus den äußeren Schichten, wodurch sich eine harte, dunkle Kruste (Pellikel) bildet. Diese Kruste verlangsamt den weiteren Wasserverlust nach 2 bis 3 Wochen.'
    },
    {
      type: 'list',
      items: [
        '<strong>Tag 1-14:</strong> Schnelle Verdunstung. Das Fleisch verliert 10% bis 12% an Gewicht (hauptsächlich Wasser). Muskeln schrumpfen, Aromen konzentrieren sich.',
        '<strong>Tag 15-30:</strong> Verdunstung verlangsamt sich durch die Krustenbildung. Enzyme (Calpaine und Cathepsine) bauen zähes Kollagen ab und machen das Fleisch zarter.',
        '<strong>Tag 30-45:</strong> Minimaler zusätzlicher Wasserverlust. Entwicklung von tiefen nussigen und edelschimmelartigen Aromen durch Fetterstbabbau.',
        '<strong>Verschnittverlust:</strong> Nach der Reifung muss die Kruste pariert werden. Dies entspricht ca. 15% Verlust.'
      ]
    },
    {
      type: 'title',
      text: 'Klimatisierung in der Reifekammer',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Präzise Temperatur und Feuchte sind unerlässlich. Abweichungen können das Fleisch verderben lassen.'
    },
    {
      type: 'list',
      items: [
        '<strong>Temperatur:</strong> Muss zwischen 1°C und 3°C liegen. Unter 0°C frieren Enzyme ein, über 4°C wachsen Verderbniserreger.',
        '<strong>Feuchtigkeit:</strong> Ideal sind 75% bis 85%. Unter 70% droht Krustenbildung, über 85% unerwünschter Schimmel.',
        '<strong>Luftstrom:</strong> Kontinuierliche Luftzirkulation ist wichtig für ein gleichmäßiges Trocknen.'
      ]
    },
    {
      type: 'title',
      text: 'Kosten und finanzielle Berechnungen',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Durch den Reifeverlust wird der essbare Anteil kleiner, wodurch der effektive Kilogrammpreis steigt.'
    },
    {
      type: 'table',
      headers: ['Reifedauer', 'Ø Verdunstungsverlust', 'Ø Verschnitt', 'Gesamtertrag', 'Kostenmultiplikator'],
      rows: [
        ['14 Tage', '10.5%', '15.0%', '74.5%', '1.34x'],
        ['21 Tage', '13.5%', '15.0%', '71.5%', '1.40x'],
        ['30 Tage', '17.5%', '15.0%', '67.5%', '1.48x'],
        ['45 Tage', '21.0%', '15.0%', '64.0%', '1.56x'],
        ['60 Tage', '24.0%', '15.0%', '61.0%', '1.64x']
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
