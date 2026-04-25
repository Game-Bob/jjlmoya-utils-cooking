import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "Wissenschaftliche Eieruhr";
const description = "Thermodynamischer Rechner für das perfekte Kochen von Eiern unter Berücksichtigung von Höhenlage, Temperatur und Größe.";
const faq = [
  {
    question: "Warum spielt die Höhenlage beim Eierkochen eine Rolle?",
    answer: "Wasser siedet nicht immer bei 100°C. In größeren Höhen ist der atmosphärische Druck niedriger, wodurch Wasser bei niedrigeren Temperaturen siedet. Beispielsweise siedet Wasser in den Alpen bei etwa 90°C, was eine längere Kochzeit erfordert als auf Meereshöhe. Auf dem Mount Everest ist es unmöglich, ein hartgekochtes Ei zu kochen.",
  },
  {
    question: "Ei aus dem Kühlschrank oder bei Zimmertemperatur?",
    answer: "Ein Ei aus dem Kühlschrank (4°C) benötigt mehr Zeit als eines bei Zimmertemperatur (20°C). Der Unterschied kann 2-3 Minuten betragen. Dieser Rechner passt die Zeit automatisch an die Ausgangstemperatur an.",
  },
  {
    question: "Warum entsteht ein grüner Ring um das Eigelb?",
    answer: "Das ist Eisensulfid, ein Ergebnis von Übergaren. Wenn das Ei zu lange über 80°C erhitzt wird, reagiert der Schwefel im Eiweiß mit dem Eisen im Eigelb. Es ist nicht giftig, deutet aber auf eine zu lange Kochzeit hin. Ein sofortiges Eisbad verhindert dies.",
  },
  {
    question: "Wie lässt sich ein Ei leicht schälen?",
    answer: "Verwenden Sie Eier, die 1-2 Wochen alt sind (nicht tagesfrisch), legen Sie sie direkt in kochendes Wasser (nicht kalt aufsetzen) und schrecken Sie sie sofort nach dem Kochen in Eiswasser ab. Der Temperaturschock zieht das Ei zusammen und erleichtert das Schälen.",
  },
];
const howTo = [
  {
    name: "Ausgangstemperatur wählen",
    text: "Wählen Sie, ob Ihr Ei aus dem Kühlschrank (4°C) kommt oder Zimmertemperatur (20°C) hat. Dies bezieht sich auf die Innentemperatur des Eies.",
  },
  {
    name: "Eigröße wählen",
    text: "S (klein, 53g), M (mittel, 58g), L (groß, 63g) oder XL (sehr groß, 73g). Die Größe bestimmt, wie lange die Hitze braucht, um das Zentrum zu erreichen.",
  },
  {
    name: "Höhenlage angeben",
    text: "Geben Sie die Höhe manuell ein oder nutzen Sie die Standortbestimmung. Alle 300 Höhenmeter sinkt der Siedepunkt des Wassers um ca. 1°C.",
  },
  {
    name: "Temperaturschock anwenden",
    text: "Eier sofort nach Ablauf der Zeit in Eiswasser legen. Dies stoppt den Garprozess und erleichtert das Schälen. Dieser Schritt ist entscheidend für die Präzision.",
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
  slug: "eieruhr",
  title: "Wissenschaftliche Eieruhr",
  description: "Thermodynamischer Rechner für das perfekte Kochen von Eiern unter Berücksichtigung von Höhenlage, Temperatur und Größe.",
  faqTitle: "Häufig gestellte Fragen",
  ui: {
    parameters: "Parameter",
    initial_temperature: "Ausgangstemperatur",
    fridge: "Kühlschrank",
    ambient: "Zimmertemp.",
    egg_size: "Eigröße",
    altitude: "Höhenlage",
    use_location: "Standort verwenden",
    altitude_help: "In größeren Höhen siedet Wasser bei niedrigeren Temperaturen, was die Garzeit beeinflusst.",
    sea_level: "Meer",
    soft_cooked: "Weiches Ei",
    soft_description: "Eigelb flüssig, Eiweiß weiß und weich.",
    mollet: "Wachsweich (Mollet)",
    mollet_description: "Eigelb cremig, Eiweiß fest.",
    hard_cooked: "Hartgekocht",
    hard_description: "Vollständig gegart, Eigelb fest.",
  },
  faq, howTo,
  seo: [
    {
      type: 'title',
      text: 'Meister Leitfaden für das perfekt gekochte Ei',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein Ei zu kochen ist eine Übung in <strong>angewandter Thermodynamik</strong>. Die Präzision bei Ausgangstemperatur, Eigröße und geografischer Höhe bestimmt, ob Sie ein seidig-flüssiges Eigelb oder ein übergartes Ei mit dem unerwünschten grünen Ring erhalten.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '62°C',
          label: 'Eiweiß-Gerinnung',
          icon: 'mdi:egg-outline',
        },
        {
          value: '68°C',
          label: 'Eigelb-Gerinnung',
          icon: 'mdi:egg-fried',
        },
        {
          value: '-1°C',
          label: 'Siedepunkt / 300m',
          icon: 'mdi:mountain',
        },
        {
          value: '0s',
          label: 'Fehlertoleranz',
          icon: 'mdi:timer-check-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'Vergleich der Garzustände',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Weiches Ei',
          icon: 'mdi:coffee-outline',
          description: 'Eiweiß teilweise gestockt, Eigelb völlig flüssig.',
          points: [
            'Sehr zarte Textur',
            'Ideal zum Dippen',
            'Kurze Garzeit (3-4 Min)',
            'Schwer zu schälen',
          ],
        },
        {
          title: 'Mollet / Wachsweich',
          icon: 'mdi:water-percent',
          description: 'Eiweiß fest, Eigelb cremig und dickflüssig, aber nicht fest.',
          highlight: true,
          points: [
            'Gourmet-Standard',
            'Eigelb mit Honig-Textur',
            'Elastisches, festes Äußeres',
            'Perfekt für Salate',
          ],
        },
        {
          title: 'Hartgekocht',
          icon: 'mdi:circle-slice-8',
          description: 'Vollständig fest, aber zart, ohne grünen Ring.',
          points: [
            'Eigelb matt und fest',
            'Leicht zu transportieren und zu schälen',
            'Ideal zum Füllen',
            'Erfordert schnelles Abschrecken',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Siedepunkt nach Höhenlage',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Ort / Meereshöhe', 'Meter (ü. NHN)', 'Siedepunkt (°C)', 'Extrazeit'],
      rows: [
        ['Meereshöhe (Hamburg)', '0m', '100°C', '0s'],
        ['Madrid', '650m', '97.8°C', '+25s'],
        ['Mexiko-Stadt', '2240m', '92.6°C', '+75s'],
        ['La Paz (Bolivien)', '3640m', '88.1°C', '+140s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Grüner Ring oder schwer zu schälen?',
      html: 'Der grüne Ring ist <strong>Eisensulfid</strong>, verursacht durch Übergaren. Wenn das Ei schwer zu schälen ist, liegt es meist daran, dass es zu frisch ist; ein niedriger pH-Wert lässt das Eiweiß an der Membran kleben. Verwenden Sie 1 Woche alte Eier und schrecken Sie sie in Eiswasser ab.',
    },
    {
      type: 'title',
      text: 'Glossar der Eiwissenschaft',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ovotransferrin',
          definition: 'Protein im Eiweiß, das zuerst gerinnt (62°C) und die weiße Grundstruktur bildet.',
        },
        {
          term: 'Ovalbumin',
          definition: 'Haupteiweiß, das mehr Hitze (80°C) für vollständige Festigkeit benötigt.',
        },
        {
          term: 'Atmosphärischer Druck',
          definition: 'Faktor, der die Temperatur des siedenden Wassers bestimmt.',
        },
        {
          term: 'Temperaturschock',
          definition: 'Eintauchen in Eiswasser, um den Garprozess sofort zu stoppen.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Der Essig Trick',
      html: 'Geben Sie einen Schuss Essig ins Wasser. Falls die Schale reißt, hilft die Säure, austretendes Eiweiß sofort gerinnen zu lassen und den Riss zu versiegeln.',
    },
    {
      type: 'paragraph',
      html: 'Unsere Eieruhr nutzt die Charles-Williams-Gleichung, um jede Sekunde an Ihren exakten Standort und den Zustand Ihres Kühlschranks anzupassen.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
