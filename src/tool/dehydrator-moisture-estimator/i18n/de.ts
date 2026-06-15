import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Dörrautomat Feuchtigkeitsrechner';
const description = 'Berechnen Sie Gewichtsverlust, Wasserverdampfung und Trocknungszeit für Ihre Lebensmittel.';

const faq = [
  {
    question: 'Wie wird der Gewichtsverlust beim Dörren berechnet?',
    answer: 'Der Gewichtsverlust wird berechnet, indem der feste Anteil vom Wassergehalt getrennt wird. Da der Feststoffanteil konstant bleibt, entspricht das Endgewicht dem Feststoffanteil geteilt durch 1 minus dem Feuchtigkeitsziel.'
  }
];

const howTo = [
  {
    name: 'Wählen Sie eine Zutat oder benutzerdefinierte Feuchtigkeit',
    text: 'Wählen Sie eine Voreinstellung oder passen Sie die Feuchtigkeit manuell an.'
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
  slug: 'doerrautomat-feuchtigkeitsrechner',
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  ui: {
    title: 'Feuchtigkeitsrechner',
    subtitle: 'Berechnen Sie Schrumpfung und Trocknungszeit',
    unitSystemLabel: 'Einheitensystem',
    metricOption: 'Metrisch (g, °C)',
    imperialOption: 'Imperial (oz, °F)',
    ingredientLabel: 'Zutat-Voreinstellung',
    initialMoistureLabel: 'Anfangsfeuchtigkeit (%)',
    targetMoistureLabel: 'Ziel-Feuchtigkeit (%)',
    weightLabel: 'Anfangsgewicht',
    tempLabel: 'Dörrtemperatur',
    customOption: 'Benutzerdefiniert',
    beefOption: 'Beef Jerky',
    watermelonOption: 'Wassermelonen-Snaps',
    appleOption: 'Apfelringe',
    mangoOption: 'Mangoscheiben',
    mushroomOption: 'Pilze',
    targetWeightLabel: 'Zielgewicht',
    waterEvaporatedLabel: 'Verdampftes Wasser',
    estimatedHoursLabel: 'Geschätzte Dörrzeit',
    shrinkageLabel: 'Gewichtsschrumpfung'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Wie viel Gewicht verliert Ihr Essen im Dörrautomaten? Trocknungszeit und Feuchtigkeit berechnen',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Egal, ob Sie <strong>Beef Jerky</strong>, <strong>Fruchtleder</strong>, <strong>getrocknete Apfelringe</strong> oder <strong>Wassermelonen-Snaps</strong> herstellen, der Schlüssel zu gleichmäßigen Ergebnissen liegt im Verständnis des Feuchtigkeitsgehalts. Die Lebensmittelsicherheit und die Haltbarkeit hängen vom Erreichen des richtigen Feuchtigkeitsgehalts ab. Unser <strong>Dörrautomat Feuchtigkeitsrechner</strong> prognostiziert das Endgewicht, die Wasserverdampfung und die Trocknungszeit basierend auf Ihrer spezifischen Zutat und den Einstellungen.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '70%', label: 'Fleischfeuchtigkeit', icon: 'mdi:food' },
        { value: '92%', label: 'Wassermelonenfeuchtigkeit', icon: 'mdi:water' },
        { value: '10%', label: 'Jerky-Zielwert', icon: 'mdi:shield' },
        { value: '55°C', label: 'Mittlere Dörrtemp.', icon: 'mdi:thermometer' }
      ]
    },
    {
      type: 'title',
      text: 'Was ist der richtige Feuchtigkeitsgehalt für gedörrte Lebensmittel?',
      level: 2
    },
    {
      type: 'table',
      headers: ['Zutat', 'Anfangsfeuchtigkeit', 'Ziel-Feuchtigkeit', 'Typische Zeit', 'Anzeichen für Fertigstellung'],
      rows: [
        ['Beef Jerky', '70%', '10-15%', '4-8 Std.', 'Zäh und biegsam, ohne zu brechen'],
        ['Apfelringe', '86%', '15-20%', '6-10 Std.', 'Biegsam und ledrig, keine klebrigen Stellen'],
        ['Mangoscheiben', '84%', '15-18%', '6-10 Std.', 'Zähkaugummiartig ohne sichtbare Feuchtigkeit'],
        ['Pilze', '92%', '5-8%', '4-8 Std.', 'Brüchig und knusprig'],
        ['Wassermelonen-Snaps', '92%', '10-12%', '10-16 Std.', 'Knackt beim Biegen']
      ]
    },
    {
      type: 'title',
      text: 'Häufige Probleme beim Dörren und deren Lösung',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Endurecimiento exterior (Case hardening):</strong> Die äußere Schicht trocknet zu schnell und schließt Feuchtigkeit im Inneren ein. Reduzieren Sie die Temperatur um 5–10 °C und erhöhen Sie die Luftzirkulation.',
        '<strong>Schimmel während der Lagerung:</strong> Die Lebensmittel wurden nicht ausreichend getrocknet. Verwenden Sie den Rechner, um Ihr Zielgewicht zu bestimmen, und überprüfen Sie es mit einem Feuchtigkeitstest.',
        '<strong>Uneinheitliches Trocknen:</strong> Stücke wurden in unterschiedlichen Dicken geschnitten oder der Dörrautomat wurde überladen. Schneiden Sie gleichmäßige Stücke und lassen Sie Platz dazwischen.',
        '<strong>Lebensmittel zu trocken und brüchig:</strong> Übermäßiges Dörren führt zu Geschmacks- und Texturverlust. Überprüfen Sie die Ziel-Feuchtigkeitswerte für Ihre spezifische Zutat.'
      ]
    },
    {
      type: 'title',
      text: 'Dörrtemperatur-Leitfaden nach Lebensmittelart',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Die Temperatur beeinflusst sowohl die Trocknungsgeschwindigkeit als auch die Qualität der Lebensmittel. Höhere Temperaturen lassen Wasser schneller verdampfen, können jedoch zu Case Hardening, Nährstoffverlust und ungleichmäßigen Ergebnissen führen. Nutzen Sie diese allgemeinen Richtlinien für Ihren Dörrautomaten:'
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Niedrige Temperatur 40 bis 50 °C',
          icon: 'mdi:thermometer',
          description: 'Bestens geeignet zur Schonung von Enzymen, Nährstoffen und feinen Aromen.',
          points: ['Kräuter und Blattgemüse', 'Pilze', 'Rohkost-Konservierung', 'Längere Trocknungszeit erforderlich']
        },
        {
          title: 'Mittlere Temperatur 50 bis 60 °C',
          icon: 'mdi:thermometer',
          description: 'Standardbereich für die meisten Obst- und Gemüsesorten.',
          highlight: true,
          points: ['Apfelringe und Mangoscheiben', 'Die meisten Gemüsesorten', 'Fruchtleder', 'Ausgewogenes Verhältnis von Geschwindigkeit und Qualität']
        },
        {
          title: 'Hohe Temperatur 60 bis 70 °C',
          icon: 'mdi:thermometer',
          description: 'Verwendet für Fleisch-Jerky und dichte Lebensmittel, bei denen Lebensmittelsicherheit oberste Priorität hat.',
          points: ['Rind- und Puten-Jerky', 'Dichtes Wurzelgemüse', 'Priorität Lebensmittelsicherheit', 'Kürzeres Trocknungsfenster']
        }
      ]
    },
    {
      type: 'tip',
      title: 'Früchte immer vorbehandeln',
      html: 'Tauchen Sie Äpfel, Bananen und Birnen vor dem Dörren in Zitronensaft oder Ascorbinsäurelösung, um ein Braunwerden zu verhindern und die Farbe zu erhalten.'
    },
    {
      type: 'tip',
      title: 'Gitter während des Trocknens rotieren',
      html: 'Dörrautomaten haben oft heiße Zonen. Rotieren Sie die Gitter alle 2–3 Stunden von oben nach unten und von vorne nach hinten für gleichmäßiges Trocknen.'
    },
    {
      type: 'tip',
      title: 'Vor dem Lagern konditionieren',
      html: 'Lassen Sie die Lebensmittel nach dem Dörren abkühlen und konditionieren Sie sie 1 Woche lang in einem verschlossenen Behälter. Täglich schütteln. Wenn Kondenswasser auftritt, muss weiter gedörrt werden.'
    },
    {
      type: 'title',
      text: 'Glossar zur Dörrfeuchtigkeit',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Case Hardening', definition: 'Ein Zustand, bei dem die äußere Oberfläche von Lebensmitteln zu schnell trocknet und eine harte Schale bildet, die Feuchtigkeit im Inneren einschließt und eine ordnungsgemäße Dehydrierung verhindert.' },
        { term: 'Wasseraktivität (aw)', definition: 'Ein Maß für das freie Wasser, das für mikrobielles Wachstum verfügbar ist. Haltbare getrocknete Lebensmittel haben typischerweise einen aw-Wert unter 0,60.' },
        { term: 'Feuchtigkeitsgehalt', definition: 'Der Prozentsatz des Wassergewichts im Verhältnis zum Gesamtgewicht des Lebensmittels. Wird verwendet, um den Dörrfortschritt und die Zielwerte für die Lebensmittelsicherheit zu bestimmen.' },
        { term: 'Schrumpfungsverhältnis', definition: 'Der Anteil des ursprünglichen Gewichts, der nach dem Dörren verbleibt. Eine wichtige Kennzahl für die Planung von Chargengrößen und Lagerung.' }
      ]
    },
    {
      type: 'summary',
      title: 'Wichtige Erkenntnisse für perfektes Dörren',
      items: [
        'Verschiedene Zutaten haben sehr unterschiedliche Anfangsfeuchtigkeiten (70–92 %). Nutzen Sie die Voreinstellungen für genaue Schätzungen.',
        'Die Zielfeuchtigkeit variiert je nach Lebensmittel: 10 % für Jerky, 15–20 % für Obst, 5–8 % für Gemüse und Pilze.',
        'Die Dörrtemperatur beeinflusst Geschwindigkeit und Qualität. Bleiben Sie für die meisten Lebensmittel im Bereich von 50–60 °C.',
        'Case Hardening ruiniert die Textur. Vermeiden Sie Temperaturen über 70 °C und sorgen Sie für eine gute Luftzirkulation.',
        'Konditionieren Sie gedörrte Lebensmittel immer 1 Woche lang vor der langfristigen Lagerung, um eine gleichmäßige Feuchtigkeitsverteilung zu gewährleisten.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
