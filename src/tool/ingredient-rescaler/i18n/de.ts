import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Zutaten Rechner & Rezept Anpassung';
const description = 'Skalieren Sie Rezepte automatisch basierend auf der Portionenanzahl. Berechnen Sie exakte Mengen durch Multiplizieren oder Reduzieren Ihres Rezepts.';

const faq = [
  {
    question: 'Warum enthält mein Umrechnungsfaktor Dezimalstellen?',
    answer: 'Kulinarische Proportionen sind nicht immer rund. Wenn Sie ein Rezept von 4 auf 7 Personen skalieren, beträgt der Faktor genau 1,75. Die Zutaten werden mit dieser Zahl multipliziert, was zu Bruchteilen führen kann. Das ist genauer als willkürliches Runden.',
  },
  {
    question: 'Was passiert, wenn ich "1/2 Teelöffel Salz" eingebe?',
    answer: 'Der Parser sucht zuerst nach der Zahl. Er erkennt "1" als Menge und "/2" als Teil der Einheit. Das Ergebnis wird "0,5", was korrekt skaliert wird. Für Brüche wie "1/2" können Sie direkt "0,5" eingeben (klarer), oder das Tool interpretiert es als Division.',
  },
  {
    question: 'Sollte ich die Endergebnisse runden?',
    answer: 'Das hängt von der Zutat ab. Bei Mehl ja. Bei Hefe oder Gewürzen ist Präzision weniger kritisch (skalieren Sie auf 75% des angegebenen Wertes). Bei Eiern: Wenn Sie 2,3 erhalten, verwenden Sie 2 ganze Eier + einen Teil eines dritten (abgewogen) oder runden Sie auf 2, wenn das Gericht es zulässt.',
  },
  {
    question: 'Warum ändert sich das Ergebnis nicht, wenn ich die Portionen ändere?',
    answer: 'Stellen Sie sicher, dass das Zutatenfeld Inhalt hat. Wenn es leer ist, gibt es nichts zu skalieren. Überprüfen Sie auch, ob die Zahlen in Ihren Zutaten erkennbar sind (z.B. "500g", "1/2 Teelöffel").',
  },
  {
    question: 'Funktioniert das auch mit imperialen Maßen (Unzen, Tassen)?',
    answer: 'Technisch gesehen ja, das Tool liest Zahlen und skaliert. Aber bei Tassen ist die Genauigkeit begrenzt (inkonsistentes Volumen). Es wird empfohlen, vor dem Skalieren in Gramm umzurechnen.',
  },
];

const howTo = [
  {
    name: 'Portionen eingeben',
    text: 'Geben Sie im Feld "Original" die Personenanzahl ein, für die das Rezept entworfen wurde. Unter "Gewünscht" die Anzahl, für die Sie kochen möchten.',
  },
  {
    name: 'Zutatenliste einfügen',
    text: 'Kopieren Sie Ihre Liste und fügen Sie sie unverändert ein. Jede Zutat in eine neue Zeile. Das Tool erkennt Zahlen am Anfang (500g, 1/2, 2.5) und skaliert automatisch.',
  },
  {
    name: 'Kontextuell anpassen',
    text: 'Die Ergebnisse sind mathematisch exakt, aber Kochen ist Kunst. Gewürze: auf 75% skalieren. Hefe: bei großen Mengen weniger als theoretisch berechnet. Zeiten: werden nie skaliert.',
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
  slug: 'zutaten-skalierung',
  title,
  description,
  ui: {
    servings: 'Portionen',
    original: 'Original',
    desired: 'Gewünscht',
    multiplyingFactor: 'Multiplikationsfaktor',
    ingredientsList: 'Zutatenliste',
    pasteHere: 'Liste hier einfügen.',
    exampleLine1: 'Bsp:',
    exampleLine2: '500g Mehl',
    exampleLine3: '300ml Wasser',
    exampleLine4: '10g Salz',
    result: 'Ergebnis',
    copy: 'Kopieren',
    copied: 'Kopiert!',
    emptyState: 'Ihre angepassten Zutaten erscheinen hier...',
    defaultIngredient1: '200g Mehl',
    defaultIngredient2: '100ml Milch',
    defaultIngredient3: '2 Eier',
  },
  faqTitle: 'Häufig gestellte Fragen',
  faq,  howTo,
  seo: [
    {
      type: 'title',
      text: 'Meister Leitfaden zur Skalierung und Umrechnung von Rezepten',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die <strong>Skalierung von Zutaten</strong> ist eine der kritischsten und fehleranfälligsten Aufgaben in der Profiküche. Es geht nicht nur darum, Zahlen zu multiplizieren, sondern zu verstehen, wie die Chemie und Physik der Lebensmittel auf Änderungen von Volumen und Oberfläche reagieren.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: 'x1.75',
          label: 'Faktor 4 auf 7 Pers.',
          icon: 'mdi:calculator',
        },
        {
          value: '75%',
          label: 'Gewürzanpassung',
          icon: 'mdi:shaker-outline',
        },
        {
          value: '0%',
          label: 'Zeitskalierung',
          icon: 'mdi:timer-off',
        },
        {
          value: '100g',
          label: 'Referenzbasis',
          icon: 'mdi:weight-gram',
        },
      ],
    },
    {
      type: 'title',
      text: 'Unterschiede zwischen linearer und kontextueller Skalierung',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Mathematisch lineare Skalierung',
          icon: 'mdi:math-log',
          description: 'Direkte Multiplikation aller Werte mit dem ermittelten Umrechnungsfaktor.',
          points: [
            'Perfekt für Mehl und Basisflüssigkeiten',
            'Ideal für Präzisions-Patisserie',
            'Funktioniert gut bei kleinen Änderungen (x2, x0.5)',
            'Einfach automatisch zu berechnen',
          ],
        },
        {
          title: 'Kontextuelle Küchenskalierung',
          icon: 'mdi:chef-hat',
          description: 'Anpassung der Proportionen basierend auf Geschmacksintensität und Verdunstung.',
          highlight: true,
          points: [
            'Vermeidet Überwürzung (Salz/Gewürze)',
            'Berücksichtigt Verdunstungsoberflächen',
            'Passt Hefe an Reibungswärme an',
            'Erfordert Erfahrung und Urteilsvermögen',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Umrechnungsfaktoren nach Gästeanzahl',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Von Portionen', 'Auf Portionen', 'Faktor (FC)', 'Schwierigkeitsgrad'],
      rows: [
        ['2 Personen', '4 Personen', 'x 2.0', 'Niedrig (Linear)'],
        ['4 Personen', '6 Personen', 'x 1.5', 'Niedrig (Linear)'],
        ['4 Personen', '10 Personen', 'x 2.5', 'Mittel (Gewürze prüfen)'],
        ['4 Personen', '25 Personen', 'x 6.25', 'Hoch (Kontextuell)'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Häufige Probleme beim Verdoppeln eines Rezepts',
      html: 'Wenn Sie feststellen, dass der Geschmack nach dem Skalieren (besonders bei Schärfe oder Salz) zu intensiv ist, reduzieren Sie die Skalierung dieser spezifischen Zutaten auf 75%. Verdoppeln Sie niemals die Garzeit; die Kerntemperatur wird abhängig von der Dicke des Stücks erreicht, nicht nach Gesamtgewicht.',
    },
    {
      type: 'title',
      text: 'Glossar der Standardisierungsterminologie',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Umrechnungsfaktor',
          definition: 'Zahl, mit der alle Zutaten multipliziert werden: Gewünschte Menge / Original-Menge.',
        },
        {
          term: 'Garschwund',
          definition: 'Gewichtsverlust einer Zutat durch Verdunstung oder Fettverlust. Skaliert nicht linear.',
        },
        {
          term: 'Bruttogewicht vs. Nettogewicht',
          definition: 'Das Gewicht vor und nach dem Putzen der Zutat. Wir skalieren immer auf Basis des Originalrezepts.',
        },
        {
          term: 'Ergiebigkeit',
          definition: 'Gesamtmenge des Endprodukts nach Skalierung und Garprozess.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Der Trick mit dem verschlagenen Ei',
      html: 'Wenn der Rechner 2,3 Eier anzeigt, schlagen Sie ein ganzes Ei auf, wiegen es ab und verwenden nur die entsprechenden 30%. Dies ist der einzige Weg für Präzision in der feinen Patisserie.',
    },
    {
      type: 'paragraph',
      html: 'Unser Tool vereinfacht die Mathematik, damit Sie Ihre Energie dem widmen können, was wirklich zählt: Kreativität und Geschmack.',
    },
  ],
  bibliography,
  schemas: [appSchema, faqSchema, howToSchema],
};
