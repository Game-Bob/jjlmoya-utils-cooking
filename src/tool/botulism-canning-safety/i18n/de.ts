import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Botulismus Konservensicherheit Rechner Thermischer Tod";
const description = "Berechne die thermische Sporenreduktion und die F0 Sterilisationsletalität für Clostridium botulinum. Bewerte die Sicherheitszonen für Konserven mit niedrigem Säuregehalt und saure Lebensmittel.";
const faq = [
  {
    question: "Warum ist Clostridium botulinum ein großes Problem bei hausgemachten Konserven?",
    answer: "Clostridium botulinum ist ein anaerobes sporenbildendes Bakterium, das Botulinumtoxin produziert, einen der tödlichsten bekannten biologischen Stoffe. Sporen sind extrem hitzebeständig und können in anaeroben Bedingungen in verschlossenen Gläsern überleben, wenn die Temperaturen unzureichend sind."
  },
  {
    question: "Welche entscheidende Bedeutung hat pH 4.6 bei der Lebensmittelkonservierung?",
    answer: "Lebensmittel mit einem pH-Wert unter 4.6 werden als sauer eingestuft. In diesen Umgebungen können Botulinumsporen weder keimen noch Toxine produzieren. Bei Lebensmitteln mit einem pH-Wert von 4.6 oder höher ist das Druckkonservieren zwingend erforderlich, um Temperaturen über 116 Grad Celsius zu erreichen und die Sporen abzutöten."
  },
  {
    question: "Was ist der F0 Sterilisationsletalitätswert?",
    answer: "Der F0-Wert misst die äquivalente Sterilisationszeit bei 121.11 Grad Celsius. Ein standardmäßiger Sterilisationsprozess für Lebensmittel mit niedrigem Säuregehalt erfordert einen F0-Wert von 3.0 Minuten oder höher, was einer zwölfstelligen Dezimalreduktion der Sporenpopulation entspricht."
  },
  {
    question: "Warum kann ich für Lebensmittel mit niedrigem Säuregehalt kein Wasserbad verwenden?",
    answer: "Das Konservieren im Wasserbad erreicht nur den Siedepunkt (100 Grad Celsius). Diese Temperatur reicht nicht aus, um hitzebeständige Sporen von Clostridium botulinum in Lebensmitteln mit niedrigem Säuregehalt abzutöten. Die Sporen überleben und produzieren bei Raumtemperatur Giftstoffe."
  }
];

const howTo = [
  {
    name: "Gib den Säuregehalt des Lebensmittels ein",
    text: "Ermittle und gib den pH-Wert deiner Zutaten ein. Wenn der pH-Wert gleich oder größer als 4.6 ist, handelt es sich um ein Lebensmittel mit niedrigem Säuregehalt."
  },
  {
    name: "Wähle die Konservierungstechnik",
    text: "Wähle zwischen Wasserbadkonservierung oder Druckkonservierung, je nach deiner Ausstattung."
  },
  {
    name: "Definiere Temperatur und Dauer",
    text: "Gib die Verarbeitungstemperatur und die Zeit in Minuten ein, die die Gläser auf dieser Temperatur bleiben."
  },
  {
    name: "Bewerte die Sicherheitsdiagnosen",
    text: "Überprüfe den resultierenden F0-Wert, die Dezimalreduktion der Sporen und den Sicherheitszonenindikator, um die Einhaltung zu bestätigen."
  }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'botulismus-konserven-sicherheit',
  title: 'Botulismus Konservensicherheit Rechner',
  description: 'Berechne die thermische Sporenreduktion und die F0 Sterilisationsletalität für Clostridium botulinum. Bewerte die Sicherheitszonen für Konserven mit niedrigem Säuregehalt und saure Lebensmittel.',
  faqTitle: 'Häufig Gestellte Fragen',
  ui: {
    title: "Autoklav Überwachung für Konserven",
    subtitle: "Thermische Todesdiagnostik und Botulismus Sicherheitsbewertung",
    methodLabel: "Konservierungsmethode",
    waterBath: "Wasserbadkonservierung",
    pressureCanner: "Druckkonservierung",
    tempLabel: "Konservierungstemperatur",
    timeLabel: "Verarbeitungszeit",
    phLabel: "Lebensmittel pH",
    f0Label: "F0 Letalitätswert",
    dLabel: "Berechneter D-Wert",
    sporesLabel: "Sporenpopulation",
    statusSafe: "Sterilisation Abgeschlossen",
    statusMarginal: "Marginale Sterilisation",
    statusUnsafe: "Hohes Botulismusrisiko",
    statusSafeDesc: "Die thermische Letalität übersteigt das Ziel F0 von 3.0 Minuten. Sporen sind vollständig deaktiviert.",
    statusMarginalDesc: "Der Prozess erreicht eine teilweise Deaktivierung, bleibt aber unter dem 12D Sicherheitsstandard. Passe Zeit oder Temperatur an.",
    statusUnsafeDesc: "Der Prozess deaktiviert Clostridium botulinum nicht. Lebensmittel mit niedrigem Säuregehalt im Wasserbad bleiben gefährlich.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "min",
    logReductionLabel: "Dezimalreduktion",
    dValueUnit: "Minuten",
    indicatorSectionTitle: "Diagnoseanzeigen",
    visualizerSectionTitle: "Sporenreduktion",
    f0Tooltip: "Äquivalente Sterilisationszeit in Minuten bei 121.11°C. Sicherer Schwellenwert ist 3.0 oder höher.",
    dTooltip: "Dezimale Reduktionszeit: Dauer in Minuten, die erforderlich ist, um 90% der Sporen bei aktueller Temperatur zu zerstören.",
    logReductionTooltip: "Anzahl der Dezimalreduktionen (10er Potenzen). Eine 12D Reduktion ist der Sicherheitsstandard.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Wissenschaftliche Mechanismen der Wärmebehandlung und der Kinetik der Sporendeaktivierung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Wärmebehandlung bei der Konservenherstellung gewährleistet die kommerzielle Sterilität durch die Zerstörung von pathogenen und verderbniserregenden Mikroorganismen. Der Hauptschwerpunkt der Sicherheitsrichtlinien bei der Konservierung von Lebensmitteln mit niedrigem Säuregehalt liegt auf Clostridium botulinum. Botulinumsporen sind im Vergleich zu vegetativen Zellen stark hitzebeständig. Die Deaktivierung dieser Sporen erfordert einen thermischen Todeszeitprozess, der eine hohe Temperatur über eine berechnete Dauer anwendet. Die mathematische Beziehung zwischen Temperatur und Deaktivierungsrate wird durch die Dezimalreduktionszeit (D-Wert) und den Temperaturabhängigkeitsfaktor (z-Wert) ausgedrückt.',
    },
    {
      type: 'title',
      text: 'Lebensmittelklassifizierung und die Kritische Sicherheitsschwelle pH 4.6',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ein pH-Wert von 4.6 ist die Trennlinie für die Konservierungssicherheit. Saure Lebensmittel unter pH 4.6 hemmen auf natürliche Weise die Keimung und Toxinproduktion von Botulinumsporen. Für diese Lebensmittel ist die Verarbeitung bei 100 Grad Celsius in einem kochenden Wasserbad ausreichend. Lebensmittel mit niedrigem Säuregehalt über pH 4.6 müssen jedoch einem Druckkonservierungsprozess unterzogen werden, um die Dampftemperatur zu erhöhen und eine vollständige thermische Zerstörung der Sporen zu erreichen. Die folgende Tabelle zeigt die Klassifizierungen und Konservierungsmethoden für häufige Zutaten:',
    },
    {
      type: 'table',
      headers: ['Lebensmittelgruppe', 'pH-Bereich', 'Erforderliche Konservierungsmethode', 'Häufige Beispiele'],
      rows: [
        ['Hoher Säuregehalt', 'Unter 4.0', 'Wasserbadkonservierung', 'Äpfel, Beeren, Zitrusfrüchte, Pfirsiche, Essiggurken'],
        ['Angesäuert oder Mittlerer Säuregehalt', '4.0 bis 4.6', 'Wasserbad mit Säureanpassung', 'Tomaten, Feigen, Birnen'],
        ['Niedriger Säuregehalt', '4.6 und höher', 'Druckkonservierung Erforderlich', 'Fleisch, Meeresfrüchte, Bohnen, Mais, Kartoffeln, Suppen'],
      ],
    },
    {
      type: 'title',
      text: 'Höhenanpassungen und Sicherheitskorrekturen des Siedepunkts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mit zunehmender Höhe sinkt der Luftdruck, wodurch der Siedepunkt von Wasser unter 100 Grad Celsius fällt. Beim Konservieren im Wasserbad erhöht diese niedrigere Temperatur den D-Wert der Sporen, was längere Verarbeitungszeiten erfordert. Beim Druckkonservieren müssen die Einstellungen des Zeiger- oder Gewichtsmanometers erhöht werden, um die Zieltemperatur für die interne Sterilisation beizubehalten. Nachfolgend finden Sie die Referenztabelle für Siedepunkte und die erforderlichen Anpassungen beim Druckkonservieren:',
    },
    {
      type: 'table',
      headers: ['Höhenbereich', 'Siedepunkt von Wasser', 'Erforderlicher Zeigermanometerdruck', 'Erforderlicher Gewichtsmanometerdruck'],
      rows: [
        ['0 bis 300 Meter', '100.0 °C', '11 PSI (121 °C)', '10 PSI (121 °C)'],
        ['300 bis 600 Meter', '99.0 °C', '11 PSI (121 °C)', '15 PSI (121 °C)'],
        ['600 bis 900 Meter', '98.0 °C', '12 PSI (121 °C)', '15 PSI (121 °C)'],
        ['900 bis 1200 Meter', '97.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1200 bis 1500 Meter', '96.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1500 bis 2000 Meter', '94.5 °C', '14 PSI (121 °C)', '15 PSI (121 °C)'],
      ],
    },
    {
      type: 'title',
      text: 'Warum das 12D Sporenreduktionskonzept Botulismus Verhindert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die bakterielle Abtötung durch Hitze erfolgt logarithmisch. Der D-Wert stellt die Zeit dar, die bei einer bestimmten Temperatur erforderlich ist, um 90% der Sporenpopulation abzutöten, was einer Dezimallogarithmusreduktion entspricht. Der Referenzstandard für Clostridium botulinum ist ein D-Wert von 0.21 Minuten bei 121.11 Grad Celsius. Um hohe Sicherheitsspielräume zu erreichen, verlangen kommerzielle Standards einen zwölffachen Dezimalreduktionsprozess (12D), was bedeutet, dass die Sporenpopulation um zwölf Zehnerpotenzen reduziert wird. Dies ergibt einen Ziel F0-Wert von 3.0 Minuten, der die Sicherheit bei Lebensmitteln mit niedrigem Säuregehalt garantiert.',
    },
    {
      type: 'title',
      text: 'Praktischer Leitfaden für Hausgemachte Konserven und Sicherheitstipps',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Säuere Tomaten vor der Wasserbadverarbeitung immer mit Zitronensaft oder Zitronensäure an, da ihr natürlicher pH-Wert nahe der kritischen Schwelle von 4.6 schwankt.',
        'Verkürze niemals die Verarbeitungszeiten oder senke die Temperaturen. Die thermische Todeskinetik ist logarithmisch und kleine Änderungen können Sporen überleben lassen.',
        'Stelle sicher, dass Zeigermanometer an Druckkonservengeräten jährlich auf Genauigkeit geprüft werden, da falsche Druckmesswerte die internen Sterilisationstemperaturen direkt beeinträchtigen.',
        'Gleiche Höhenunterschiede aus, indem du die Verarbeitungszeiten in Wasserbädern anpasst oder die PSI-Einstellungen an Druckkonservengeräten erhöhst.',
        'Vermeide es, gemischte Rezepte mit Zutaten mit niedrigem Säuregehalt wie Fleisch oder Bohnen in einem Wasserbadkonservierer zu verarbeiten, selbst wenn das Gesamtrezept Säure enthält.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
