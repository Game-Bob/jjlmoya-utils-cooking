import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "Gleichgewichts Lake Rechner";
const description = "Die Wissenschaft des Gleichgewichts für saftiges Fleisch und perfekte Fermente. Berechnen Sie den exakten Salzgehalt basierend auf dem Gesamtgewicht von Zutat und Wasser.";
const faq = [
  {
    question: "Was ist die Gleichgewichts-Pökelmethode?",
    answer: "Die Gleichgewichtsmethode berechnet das Salz basierend auf dem Gesamtgewicht (Wasser + Zutat), nicht nur des Wassers. Dies garantiert eine konsistente Salzkonzentration, unabhängig von der Menge der verwendeten Zutat.",
  },
  {
    question: "Wie viel Salz brauche ich für Eingelegtes?",
    answer: "Für fermentiertes Gemüse (Gurken, Sauerkraut, Kimchi) werden zwischen 2% und 3% Salz empfohlen. Für Fleisch zwischen 1,5% und 2%. Der Rechner nennt Ihnen die genaue Menge basierend auf dem Gewicht Ihrer Zutaten.",
  },
  {
    question: "Kann ich das Fleisch nach dem Pökeln einfrieren?",
    answer: "Ja, das ist ideal. Die Salzlake schützt vor Gefrierbrand und das Fleisch ist nach dem Auftauen sofort bereit zum Garen. Vermeiden Sie jedoch das Einfrieren von fermentiertem Gemüse, da es matschig wird.",
  },
  {
    question: "Warum sollte man Zucker zur Salzlake hinzufügen?",
    answer: "Zucker hat zwei Funktionen: Er erleichtert die Maillard-Reaktion (Bräunung) bei Fleisch und gleicht den salzigen Geschmack aus, ohne das Produkt süß schmecken zu lassen. Er macht Ihre Lake nicht zu einem Dessert.",
  },
];
const howTo = [
  {
    name: "Ziel festlegen",
    text: "Entscheiden Sie, ob Sie Fleisch pökeln (1,5-2%), fermentieren (2-3%), Saucen herstellen (3,5%) oder Langzeitkonserven anlegen (5%+). Jedes Vorhaben hat eine andere Zeitdauer und einen anderen Zweck.",
  },
  {
    name: "Zutat und Wasser wiegen",
    text: "Wiegen Sie das Produkt (Fleisch, Gemüse) und das Wasser exakt ab. Präzision ist entscheidend: Schon 5g Unterschied verändern das Ergebnis. Nutzen Sie eine Präzisionswaage.",
  },
  {
    name: "Mit dem Tool berechnen",
    text: "Geben Sie die Gewichte in den Rechner ein und passen Sie den Salzgehalt entsprechend Ihres Produkttyps an. Das Tool sagt Ihnen genau, wie viel Salz und Zucker Sie benötigen.",
  },
  {
    name: "Auflösen und Mischen",
    text: "Lösen Sie das Salz vollständig in kaltem Wasser auf, bevor Sie das Produkt hinzufügen. Achten Sie bei Fleisch darauf, dass die Lake alles bedeckt. Fermente müssen beschwert und untergetaucht sein.",
  },
  {
    name: "Fermentieren oder Pökeln",
    text: "Kühlen Sie nach Typ: 4-48 Stunden für Fleisch, 1-3 Wochen für Fermente. Die exakte Zeit hängt von der Temperatur und Ihrem persönlichen Geschmack ab.",
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
  slug: "salzlake",
  title: "Gleichgewichts Lake Rechner",
  description: "Die Wissenschaft des Gleichgewichts für saftiges Fleisch und perfekte Fermente. Berechnen Sie den exakten Salzgehalt basierend auf dem Gesamtgewicht von Zutat und Wasser.",
  ui: {
    calculator: "Rechner",
    subtitle: "Geben Sie die Gewichte ein, um das perfekte Gleichgewicht zu berechnen.",
    productWeight: "Produktgewicht (g)",
    waterWeight: "Wassergewicht (g)",
    desiredSalinity: "Gewünschter Salzgehalt",
    meat: "Fleisch (1,5%)",
    fermented: "Fermentiertes (2,0%)",
    sauces: "Saucen (3,5%)",
    preserves: "Konserven (5,0%)",
    addSugar: "Zucker hinzufügen",
    sugarHint: "Gleicht den Geschmack aus und unterstützt die Bräunung (50% des Salzes)",
    saltNeeded: "Benötigtes Salz",
    sugarOptional: "Zucker (Optional)",
    estimatedTime: "Geschätzte Zeit",
    product: "Produkt",
    total: "Gesamt",
    unitGrams: "Gramm",
    timeMeatsLabel: "Zeit (Fleisch)",
    timeMeatsDuration: "4 - 48 Stunden",
    timeVegetablesLabel: "Zeit (Gemüse)",
    timeVegetablesDuration: "1 - 3 Wochen",
    timePreservesLabel: "Zeit (Konserven)",
    timePreservesDuration: "1+ Monate",
  },
  faqTitle: "Häufig gestellte Fragen",  faq,
  howTo,  seo: [
    {
      type: 'title',
      text: 'Meisterleitfaden für Gleichgewichts Pökeln und Fermentation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das <strong>Gleichgewichts-Pökeln</strong> ist die ultimative Technik für saftige und sichere Ergebnisse. Im Gegensatz zu herkömmlichen Methoden berechnet es das Salz basierend auf dem <strong>Gesamtgewicht</strong> von Wasser und Produkt und stellt so einen konstanten Salzgehalt unabhängig vom Behältervolumen sicher.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1,5 - 2%',
          label: 'Ideales Verhältnis Fleisch',
          icon: 'mdi:food-steak',
        },
        {
          value: '2,5 - 3%',
          label: 'Verhältnis Fermente',
          icon: 'mdi:flask-outline',
        },
        {
          value: '18-22°C',
          label: 'Fermentationstemp.',
          icon: 'mdi:thermometer',
        },
        {
          value: '0,5%',
          label: 'Gleichgewichts-Zucker',
          icon: 'mdi:shaker-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'Unterschiede zwischen Trocken- und Nasspökeln',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Trockenpökeln (Dry Brining)',
          icon: 'mdi:shaker-outline',
          description: 'Das Salz wird direkt auf die Oberfläche des Produkts aufgetragen, ohne zusätzliches Wasser zu verwenden.',
          points: [
            'Wesentlich knusprigere Haut bei Geflügel',
            'Konzentrierterer Eigengeschmack der Zutat',
            'Nimmt weniger Platz im Kühlschrank ein',
            'Ideal für Steaks und ganze Hähnchen',
          ],
        },
        {
          title: 'Nasspökeln (Wet Brining)',
          icon: 'mdi:water',
          description: 'Das Produkt wird in eine durch Gleichgewicht berechnete Lösung aus Wasser und Salz eingelegt.',
          highlight: true,
          points: [
            'Überlegener Feuchtigkeitstransfer',
            'Ermöglicht das Hinzufügen von Aromen (Gewürzen)',
            'Gleichmäßigere Pökelung bei großen Stücken',
            'Ideal für Pute, Schweinelende und Fisch',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Zeiten und Salzgehalte je nach Anwendung',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Kategorie', 'Salzgehalt (%)', 'Mindestzeit', 'Hauptziel'],
      rows: [
        ['Geflügel und Schwein', '1,5% - 2,0%', '12 - 24 Stunden', 'Saftigkeit und Zartheit'],
        ['Weißer Fisch', '1,0% - 1,5%', '20 - 45 Minuten', 'Festigkeit des Fleisches'],
        ['Lakto-Fermente', '2,5% - 3,0%', '7 - 21 Tage', 'Mikrobiologische Sicherheit'],
        ['Saucen und Konserven', '3,5% - 5,0%', '1+ Monat', 'Langzeitkonservierung'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Problemerkennung beim Pökeln',
      html: 'Wenn die Lake übel riecht (nicht sauer), farbiger Schimmel (schwarz, rosa) auftritt oder das Produkt extrem weich wird, entsorgen Sie es. Weißer Oberflächenschimmel (Kahmhefe) ist bei Fermenten normal und kann entfernt werden.',
    },
    {
      type: 'title',
      text: 'Glossar des Pökelexperten',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Osmose',
          definition: 'Physikalischer Prozess, bei dem das Salz in die Zellen des Lebensmittels eindringt, um die Konzentrationen auszugleichen.',
        },
        {
          term: 'Denaturierung',
          definition: 'Wirkung des Salzes auf Proteine, die es diesen ermöglicht, während des Garens mehr Wasser zu binden.',
        },
        {
          term: 'Kahmhefe',
          definition: 'Dünne weiße Schicht, die manchmal auf der Oberfläche von Fermenten erscheint; sie ist harmlos, deutet aber auf mangelnde Säure hin.',
        },
        {
          term: 'Milchsäuregärung',
          definition: 'Anaerobe Fermentation, bei der Bakterien Zucker in Milchsäure umwandeln und so das Lebensmittel konservieren.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Wasserqualität',
      html: 'Vermeiden Sie immer Leitungswasser mit hohem Chlorgehalt, da dies das Wachstum von guten Bakterien in Ihren Fermentationen hemmen kann. Nutzen Sie gefiltertes Wasser oder lassen Sie das Wasser 24 Stunden stehen.',
    },
    {
      type: 'paragraph',
      html: 'Unser Gleichgewichtsrechner eliminiert das Rätselraten aus Ihren Rezepten und ermöglicht es Ihnen, mit der Sicherheit eines Profis zu kochen.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
