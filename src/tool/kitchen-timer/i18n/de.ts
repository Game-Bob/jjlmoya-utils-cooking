import type { ToolLocaleContent } from '../../../types';

const title = "Multi Küchen Timer";
const description = "Verwalten Sie mehrere Garzeiten gleichzeitig. Unabhängige Alarme, ideal für Köche und die Organisation in der Küche (Mise en Place).";
const faq = [
  {
    question: 'Wie viele Timer kann ich erstellen?',
    answer: 'Unbegrenzt viele. Fügen Sie mit der Schaltfläche "+" so viele hinzu, wie Sie benötigen. Ideal für das gleichzeitige Kochen mehrerer Gerichte: Nudeln kochen, Sauce reduzieren, Fleisch ruhen lassen und der Ofen läuft – alles auf einmal.',
  },
  {
    question: 'Warum ist die Ruhezeit bei Fleisch wichtig?',
    answer: 'Wenn Sie Fleisch direkt vom Feuer schneiden, entweicht der Saft auf den Teller. Lassen Sie es 5-10 Minuten ruhen, entspannen sich die Fasern und der Saft verteilt sich neu. Ergebnis: saftiges statt trockenes Fleisch. Ruhen ist passives Garen.',
  },
  {
    question: 'Funktioniert es bei gesperrtem Bildschirm?',
    answer: 'Ja, aber Sie müssen Benachrichtigungsberechtigungen erteilen. Die Timer laufen im Hintergrund weiter und benachrichtigen Sie mit Ton und Browser-Benachrichtigung, auch wenn Sie den Tab wechseln oder das Handy sperren.',
  },
  {
    question: 'Was ist die lebensmittelrelevante "Gefahrenzone"?',
    answer: 'Zwischen 5°C und 65°C vermehren sich Bakterien schnell. Gekochte Lebensmittel sollten nicht länger als 2 Stunden in dieser Zone bleiben (1 Stunde, wenn es >30°C ist). Nutzen Sie einen Timer, um das Abkühlen vor dem Kühlen zu kontrollieren.',
  },
];
const howTo = [
  {
    name: 'Mehrere Timer erstellen',
    text: 'Nutzen Sie die "+"-Schaltfläche, um so viele Timer wie nötig hinzuzufügen. Ideal für die Koordination mehrerer Gerichte.',
  },
  {
    name: 'Jeden Timer anpassen',
    text: 'Ändern Sie den Namen jedes Timers, um zu wissen, was gerade gart: "Ofen", "Reis", "Sauce" usw.',
  },
  {
    name: 'Über das mobile Dock steuern',
    text: 'Auf Mobilgeräten erscheinen aktive Timer in einem schiebbaren Dock am unteren Rand. Dort können Sie direkt pausieren oder neu starten.',
  },
  {
    name: 'Benachrichtigungen erhalten',
    text: 'Erlauben Sie Benachrichtigungen, damit der Browser Sie warnt, wenn die Zeit abgelaufen ist, auch wenn Sie den Tab wechseln.',
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
  slug: 'kuechen-timer',
  title: 'Multi Küchen Timer',
  description: 'Verwalten Sie mehrere Garzeiten gleichzeitig. Unabhängige Alarme, ideal für Köche und die Organisation in der Küche (Mise en Place).',
  faqTitle: 'Häufig gestellte Fragen',
  bibliographyTitle: 'Referenzen',
  ui: {
    addTimer: 'Timer hinzufügen',
    stopAll: 'Alle stoppen',
    defaultName: 'Timer',
    newTimerName: 'Neuer Timer',
    timerDefault1: 'Timer 1',
    timerDefault2: 'Timer 2',
    timerDefault3: 'Timer 3',
    label: 'Bezeichnung',
    hours: 'Std',
    minutes: 'Min',
    seconds: 'Sek',
    ready: 'Fertig',
    start: 'Start',
    pause: 'Pause',
    reset: 'Reset',
    addOneMin: '+1 Min',
    addFiveMin: '+5 Min',
    statusReady: 'Bereit',
    statusRunning: 'Läuft',
    statusPaused: 'Pausiert',
    statusFinished: 'ZEIT UM!',
    finishNotification: 'Timer beendet für',
  },
  faq,
  bibliography: [
    {
      name: 'Lebensmittelsicherheit: USDA Guidelines',
      url: 'https://www.fsis.usda.gov/',
    },
    {
      name: 'Mise en Place - Die Profiküche',
      url: 'https://www.escoffier.edu/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Zeitmanagement in der Küche',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In der Profiküche geht es nicht nur um Rezepte, sondern um das <strong>präzise Zeitmanagement</strong>. Das französische Konzept <em>"Mise en Place"</em> (alles an seinem Platz) umfasst Zeit als eine wesentliche Zutat. Ein Steak, das 5 Minuten ruht, verteilt seinen Saft neu und wird zart.',
    },
    {
      type: 'paragraph',
      html: 'Dieser <strong>Multi-Timer</strong> wurde für Hobbyköche und Profis entwickelt, die gleichzeitig mehrere Prozesse koordinieren müssen: kochende Nudeln, der Braten im Ofen und die Saucenreduktion.',
    },
    {
      type: 'title',
      text: 'Die Rolle von Temperatur und Zeit',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Lebensmittel', 'Garstufe', 'Zeit', 'Vorteil'],
      rows: [
        ['Weiches Ei', 'Flüssiges Eigelb', '3-4 Min', 'Zarte Proteine, leicht verdaulich'],
        ['Wachsweiches Ei', 'Cremiges Eigelb', '5-6 Min', 'Perfekte Texturbalance'],
        ['Hartes Ei', 'Vollständig gestockt', '9-11 Min', 'Maximale Konsistenz'],
        ['Fleisch - Anbraten', 'Hohe Hitze', '1-2 Min/Seite', 'Maillard-Reaktion, Aroma'],
        ['Fleisch - Ruhen', 'Ruhephase', '5-20 Min', 'Saftverteilung'],
      ],
    },
    {
      type: 'title',
      text: 'Lebensmittelsicherheit: Die Gefahrenzone',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zeit beeinflusst nicht nur die Qualität, sondern auch die Sicherheit. Bakterien vermehren sich am schnellsten zwischen 5°C und 65°C. Gekochte Speisen sollten nicht länger als <strong>2 Stunden</strong> in diesem Bereich bleiben.',
    },
    {
      type: 'title',
      text: 'Profi-Tipps zur Organisation',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Endzeiten staffeln:</strong> Wenn alles gleichzeitig fertig wird, geraten Sie beim Anrichten unter Stress.',
        '<strong>Restwärme nutzen:</strong> Schalten Sie Nudeln oder Gemüse 1-2 Minuten früher aus.',
        '<strong>Timer benennen:</strong> Benutzen Sie die Benennungsfunktion für "Ofen", "Reis" oder "Sauce".',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Profi-Tipp:</strong> Zeitpräzision unterscheidet den Küchenchef vom Hobbykoch. Verlassen Sie sich nicht nur auf Ihr Gefühl, sondern nutzen Sie die Technik für konstante Ergebnisse.',
    },
  ],
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
