import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Anleitung für Schokoladen Temperierkurve und Seeding Methode";
const description = "Meistern Sie das Temperieren von Schokolade zu Hause. Berechnen Sie das Gewicht der Impfkristalle (Callets) und folgen Sie Schritt-für-Schritt-Temperierkurven für dunkle, Milch- und weiße Schokolade.";
const faq = [
  {
    question: "Was ist das Temperieren von Schokolade?",
    answer: "Das Temperieren von Schokolade ist das kontrollierte Erwärmen, Abkühlen und sanfte Wiedererwärmen von Schokolade, um die Kristallisation der Kakaobutter zu steuern. Dadurch kristallisieren die Fettmoleküle in der stabilen Form V (Beta) aus. Dies verleiht der Schokolade einen seidigen Glanz, einen knackigen Bruch und verhindert, dass sie bei Raumtemperatur schmilzt."
  },
  {
    question: "Was ist die Seeding-Methode (Impfen)?",
    answer: "Die Seeding-Methode (oder das Impfen) besteht darin, einen Teil der Schokolade zu schmelzen und anschließend feste, bereits temperierte Schokoladenstücke (Impf-Callets) während der Abkühlphase hinzuzugeben. Diese festen Stücke dienen als Strukturvorlage, die die geschmolzenen Fettmoleküle anleitet, sich in der gewünschten Form-V-Kristallstruktur anzuordnen, ohne dass ein Marmorblock benötigt wird."
  },
  {
    question: "Warum hat meine Schokolade weiße Streifen (Fettreif)?",
    answer: "Weiße Streifen oder Flecken werden als Fettreif (Fat Bloom) bezeichnet. Dies geschieht, wenn Schokolade nicht richtig temperiert wurde, wodurch instabile Kakaobutterkristalle an die Oberfläche wandern und dort neu kristallisieren. Sie ist weiterhin essbar, verliert jedoch an Struktur und Glanz."
  },
  {
    question: "Kann ich Schokolade temperieren, die bereits Fettreif hat?",
    answer: "Ja. Fettreif ist eine rein physikalische Entmischung der Fett- oder Zuckerkristalle, kein chemischer Verderb. Durch vollständiges Schmelzen der betroffenen Schokolade auf die richtige Schmelztemperatur (ca. 45-50°C) werden alle fehlerhaften Kristallstrukturen aufgelöst, sodass Sie den Temperierprozess ganz neu starten können."
  },
  {
    question: "Wie beeinflussen Luftfeuchtigkeit und Raumtemperatur das Temperieren?",
    answer: "Schokolade reagiert extrem empfindlich auf ihre Umgebung. Die ideale Raumtemperatur beim Temperieren liegt zwischen 18°C und 22°C, bei einer relativen Luftfeuchtigkeit unter 50%. Zu hohe Luftfeuchtigkeit führt zu Kondensation auf der Schokolade, was Zuckerreif verursacht oder die Schokolade klumpen und unbrauchbar werden lässt."
  },
  {
    question: "Kann ich normale Schokoladendrops aus dem Supermarkt verwenden?",
    answer: "Herkömmliche Schokoladen-Chips aus dem Supermarkt enthalten oft zusätzliche Stabilisatoren und weniger Kakaobutter, damit sie beim Backen ihre Form behalten. Für ein perfektes Temperierergebnis mit glänzendem Finish und knackigem Bruch wird die Verwendung von professioneller Kuvertüre mit einem Kakaobutteranteil von mindestens 31% dringend empfohlen."
  }
];

const howTo = [
  {
    name: "Schokoladensorte wählen",
    text: "Wählen Sie dunkle, Milch- oder weiße Schokolade aus, um die jeweiligen Temperaturgrenzwerte zu laden."
  },
  {
    name: "Gesamtgewicht eingeben",
    text: "Geben Sie das gewünschte Gesamtgewicht der zu temperierenden Schokolade ein."
  },
  {
    name: "Schmelzphase",
    text: "Schmelzen Sie 75% der Schokolade (gemäß Berechnung) bis zur Zieltemperatur (z. B. 50C für dunkle Schokolade), um alle vorhandenen Kristallgitter aufzulösen."
  },
  {
    name: "Abkühl- & Impfphase",
    text: "Lassen Sie die geschmolzene Schokolade unter ständigem Rühren abkühlen, während Sie die restlichen 25% festen Impf-Callets einarbeiten, bis die Kühltemperatur erreicht ist."
  },
  {
    name: "Arbeitsphase",
    text: "Erwärmen Sie die Schokolade vorsichtig auf die Arbeitstemperatur, um verbliebene instabile Kristalle aufzuschmelzen, bevor Sie sie verarbeiten."
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
  slug: 'schokoladen-temperierkurve-anleitung',
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  ui: {
    title: 'Schokoladen Temperier Assistent',
    subtitle: 'Thermodynamische Kurven und Impf Rechner',
    chocolateTypeLabel: 'Schokoladensorte',
    totalWeightLabel: 'Gesamtgewicht Ziel',
    meltLabel: 'Schmelzphase',
    coolLabel: 'Abkühl- & Impfphase',
    workLabel: 'Arbeitsphase',
    meltTempLabel: 'Schmelztemp.',
    coolTempLabel: 'Kühltemp.',
    workTempLabel: 'Arbeitstemp.',
    meltWeightLabel: 'Gewicht zum Schmelzen',
    seedWeightLabel: 'Impf-Gewicht (Callets)',
    molecularLabel: 'Molekularer Kristallzustand',
    seedingTitle: 'Impfen-Rechner (25% Anteil)',
    stepTitle: 'Temperierschritte',
    darkOption: 'Dunkle Schokolade',
    milkOption: 'Milchschokolade',
    whiteOption: 'Weiße Schokolade',
    resetButton: 'Zurücksetzen',
    warningOverheated: 'Warnung: Die Temperatur ist zu hoch! Die Kakaoanteile können verbrennen oder die Milchproteine denaturieren.',
    warningUnderheated: 'Warnung: Die Temperatur ist zu niedrig. Stabile Kristalle haben sich noch nicht gebildet oder die Schokolade erstarrt vorzeitig.',
    interactiveInfo: 'Interagieren Sie mit den Schritten oder ziehen Sie das Thermometer, um molekulare Phasen anzuzeigen'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Thermodynamik der Kakaobutter-Kristallisation',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Kakaobutter ist polymorph, was bedeutet, dass sie in sechs verschiedenen Kristallformen (I bis VI) erstarren kann. Jede Form besitzt einen eigenen Schmelzpunkt und eine spezifische Stabilität. Ziel des Schokoladentemperierens ist es, die stabilen Form-V-Kristalle (Beta) zu maximieren und die instabilen Formen I bis IV zu unterdrücken. Form-V-Kristalle sorgen für den seidigen Glanz, die knackige Textur und den sauberen Bruch hochwertiger Schokoladenkreationen.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: 'Form V',
          label: 'Ziel-Beta-Kristall',
          icon: 'mdi:hexagon-multiple-outline'
        },
        {
          value: '25-30%',
          label: 'Impfen-Verhältnis',
          icon: 'mdi:scale'
        },
        {
          value: '31-32°C',
          label: 'Arbeitstemp. Dunkel',
          icon: 'mdi:thermometer'
        },
        {
          value: '0.1-0.2C',
          label: 'Abkühlrate / Min',
          icon: 'mdi:trending-down'
        }
      ]
    },
    {
      type: 'title',
      text: 'Die sechs polymorphen Kristallformen von Kakaobutter',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Das Verständnis der Thermodynamik der einzelnen Kristallformen ist der Schlüssel zur Vermeidung von Temperierfehlern. Hier ist eine wissenschaftliche Übersicht der Kristallformen von Kakaobutter:'
    },
    {
      type: 'table',
      headers: ['Kristallform', 'Strukturname', 'Schmelzpunkt', 'Stabilität & Textur'],
      rows: [
        ['Form I', 'Gamma (γ)', '17°C (62.6°F)', 'Sehr instabil, weich, schmilzt sofort in der Hand, kein Knacken.'],
        ['Form II', 'Alpha (α)', '21°C (69.8°F)', 'Instabil, weich, krümelige Struktur, schmilzt sehr leicht.'],
        ['Form III', 'Beta Prime (β\')', '25.5°C (77.9°F)', 'Instabil, fest, aber ohne knackigen Bruch, matte Oberfläche.'],
        ['Form IV', 'Beta Prime (β\')', '27.3°C (81.1°F)', 'Instabil, fest, schmilzt etwas zu schnell, wenig Glanz.'],
        ['Form V', 'Beta (β)', '33.8°C (92.8°F)', 'Sehr stabil, glänzende Oberfläche, sauberer Bruch (Gewünschte Form).'],
        ['Form VI', 'Beta (β)', '36.3°C (97.3°F)', 'Am stabilsten, hart, bildet sich über Monate hinweg, führt zu Fettreif.']
      ]
    },
    {
      type: 'title',
      text: 'Das Prinzip der Seeding-Methode (Impfen)',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Das Impfen ist eine äußerst zuverlässige Methode, um Schokolade ohne Marmorplatte perfekt zu temperieren. Indem Sie 25% des Gesamtgewichts als feste, ungeschmolzene Callets zurückbehalten, bringen Sie eine hohe Konzentration stabiler Form-V-Kristalle in die warme, geschmolzene Schokolade ein. Beim Rühren fungieren diese Impfkristalle als Schablone, auf der sich das restliche geschmolzene Fett gleichmäßig anordnet.'
    },
    {
      type: 'title',
      text: 'Der Temperierprozess Schritt für Schritt',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Phase 1: Schmelzen (T > 40°C):</strong> Durch Erhitzen der Schokolade werden alle bestehenden Kristallstrukturen (Formen I bis VI) vollständig geschmolzen. Es entsteht eine amorphe flüssige Fettmasse - die ideale Ausgangsbasis.',
        '<strong>Phase 2: Abkühlen & Impfen (T ≈ 27°C):</strong> Das Abkühlen leitet die Kristallisation ein. Die Zugabe von 25% festen Callets bringt stabile Form-V-Strukturen ein, die als Keimzellen für die Bildung stabiler Gitter dienen.',
        '<strong>Phase 3: Wiedererwärmen & Arbeiten (T ≈ 31°C):</strong> Durch sanftes Erwärmen werden instabile Form-IV-Kristalle, die sich beim Abkühlen gebildet haben könnten, weggeschmolzen. Es verbleiben ausschließlich stabile Form-V-Kristalle für perfekten Glanz und Festigkeit.'
      ]
    },
    {
      type: 'title',
      text: 'Praktische Methoden zum Temperieren zu Hause',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Auch ohne Profi-Temperiergeräte können Sie zu Hause exzellente Ergebnisse erzielen. Nutzen Sie unseren Impfrechner oben, um Ihre Mengen exakt abzuwiegen, und wählen Sie eine der folgenden Methoden:'
    },
    {
      type: 'list',
      items: [
        '<strong>Wasserbad-Methode (Bain-Marie):</strong> Geben Sie 75% der Schokolade in eine hitzebeständige Schüssel über einen Topf mit köchelndem Wasser. Achten Sie darauf, dass der Schüsselboden das Wasser nicht berührt und kein Wasserdampf in die Schokolade gelangt. Bis zur Schmelztemperatur erwärmen, vom Topf nehmen, Schüssel trockenwischen und die restlichen 25% Impf-Callets einrühren. Unter ständigem Rühren auf Kühltemperatur abkühlen lassen, dann kurz wieder über das Wasserbad setzen, um die Arbeitstemperatur zu erreichen.',
        '<strong>Mikrowellen-Methode:</strong> Geben Sie 75% der Schokolade in eine mikrowellengeeignete Kunststoffschüssel. Erwärmen Sie sie in Intervallen von 15 bis 30 Sekunden bei 50% Leistung und rühren Sie dazwischen gründlich um, um Hitzestaus zu vermeiden. Nach Erreichen der Schmelztemperatur die 25% Impfkristalle unterrühren, bis die Kühltemperatur erreicht ist. Anschließend in kurzen Raten von 5 bis 10 Sekunden wieder auf Arbeitstemperatur bringen.',
        '<strong>Sous-Vide-Methode:</strong> Schweißen Sie die gesamte Schokolade in einen Vakuumbeutel ein. Bringen Sie das Sous-Vide-Wasserbad auf Schmelztemperatur und lassen Sie die Schokolade vollständig verflüssigen. Senken Sie die Wassertemperatur auf Kühltemperatur (ggf. Eis hinzugeben) und kneten Sie den Beutel regelmäßig durch, um das Fett in Bewegung zu halten. Erhöhen Sie zum Abschluss die Wassertemperatur auf Arbeitstemperatur.'
      ]
    },
    {
      type: 'title',
      text: 'So führen Sie die Temperierprobe durch',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Bevor Sie Ihre Schokolade in Formen gießen oder Pralinen überziehen, sollten Sie das Ergebnis testen. Tauchen Sie die Spitze eines sauberen Messers, einer Palette oder eines Backpapierstreifens kurz in die Schokolade und lassen Sie sie bei Raumtemperatur (18-22°C) ruhen. Wenn sie richtig temperiert ist, zieht sie innerhalb von 3 bis 5 Minuten gleichmäßig an. Sie sollte glänzen, sich trocken anfühlen und sauber brechen. Bleibt sie klebrig oder wird streifig, muss sie erneut geschmolzen und der Vorgang wiederholt werden.'
    },
    {
      type: 'title',
      text: 'Fehlerbehebung bei Temperierproblemen',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Wenn Schokolade nicht korrekt temperiert ist, trennen sich Kakaobutterfette und treten an die Oberfläche, wodurch ein grauer Schleier entsteht (Fettreif). Ist Ihre Schokolade matt, weich oder streifig, schmelzen Sie sie einfach wieder ein und wiederholen Sie den Vorgang ab Phase 1.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
