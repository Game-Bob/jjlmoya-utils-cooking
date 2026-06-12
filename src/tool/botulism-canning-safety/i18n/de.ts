import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Botulismus Konservensicherheit Rechner Thermischer Tod";
const description = "Berechne die thermische Sporenreduktion und die F0 Sterilisationsletalitaet fuer Clostridium botulinum. Bewerte die Sicherheitszonen fuer konserven mit niedrigem Saeuregehalt und saure Lebensmittel.";
const faq = [
  {
    question: "Warum ist Clostridium botulinum ein grosses Problem bei hausgemachten Konserven?",
    answer: "Clostridium botulinum ist ein anaerobes sporenbildendes Bakterium, das Botulinumtoxin produziert, einen der toedlichsten bekannten biologischen Stoffe. Sporen sind extrem hitzebestaendig und koennen in anaeroben Bedingungen in verschlossenen Glaesern ueberleben, wenn die Temperaturen unzureichend sind."
  },
  {
    question: "Welche entscheidende Bedeutung hat pH 4.6 bei der Lebensmittelkonservierung?",
    answer: "Lebensmittel mit einem pH Wert unter 4.6 werden als sauer eingestuft. In diesen Umgebungen koennen Botulinumsporen weder keimen noch Toxine produzieren. Bei Lebensmitteln mit einem pH Wert von 4.6 oder hoeher ist das Druckkonservieren zwingend erforderlich, um Temperaturen ueber 116 Grad Celsius zu erreichen und die Sporen abzutoeten."
  },
  {
    question: "Was ist der F0 Sterilisationsletalitaetswert?",
    answer: "Der F0 Wert misst die aequivalente Sterilisationszeit bei 121.11 Grad Celsius. Ein standardmaessiger Sterilisationsprozess fuer Lebensmittel mit niedrigem Saeuregehalt erfordert einen F0 Wert von 3.0 Minuten oder hoeher, was einer zwoelfstelligen Dezimalreduktion der Sporenpopulation entspricht."
  },
  {
    question: "Warum kann ich fuer Lebensmittel mit niedrigem Saeuregehalt kein Wasserbad verwenden?",
    answer: "Das Konservieren im Wasserbad erreicht nur den Siedepunkt (100 Grad Celsius). Diese Temperatur reicht nicht aus, um hitzebestaendige Sporen von Clostridium botulinum in Lebensmitteln mit niedrigem Saeuregehalt abzutoeten. Die Sporen ueberleben und produzieren bei Raumtemperatur Giftstoffe."
  }
];

const howTo = [
  {
    name: "Gib den Saeuregehalt des Lebensmittels ein",
    text: "Ermittle und gib den pH Wert deiner Zutaten ein. Wenn der pH Wert gleich oder groesser als 4.6 ist, handelt es sich um ein Lebensmittel mit niedrigem Saeuregehalt."
  },
  {
    name: "Waehle die Konservierungstechnik",
    text: "Waehle zwischen Wasserbadkonservierung oder Druckkonservierung, je nach deiner Ausstattung."
  },
  {
    name: "Definiere Temperatur und Dauer",
    text: "Gib die Verarbeitungstemperatur und die Zeit in Minuten ein, die die Glaeser auf dieser Temperatur bleiben."
  },
  {
    name: "Bewerte die Sicherheitsdiagnosen",
    text: "Ueberpruefe den resultierenden F0 Wert, die Dezimalreduktion der Sporen und den Sicherheitszonenindikator, um die Einhaltung zu bestaetigen."
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
  description: 'Berechne die thermische Sporenreduktion und die F0 Sterilisationsletalitaet fuer Clostridium botulinum. Bewerte die Sicherheitszonen fuer konserven mit niedrigem Saeuregehalt und saure Lebensmittel.',
  faqTitle: 'Haeufig Gestellte Fragen',
  ui: {
    title: "Autoklav Ueberwachung fuer Konserven",
    subtitle: "Thermische Todesdiagnostik und Botulismus Sicherheitsbewertung",
    methodLabel: "Konservierungsmethode",
    waterBath: "Wasserbadkonservierung",
    pressureCanner: "Druckkonservierung",
    tempLabel: "Konservierungstemperatur",
    timeLabel: "Verarbeitungszeit",
    phLabel: "Lebensmittel pH",
    f0Label: "F0 Letalitaetswert",
    dLabel: "Berechneter D Wert",
    sporesLabel: "Sporenpopulation",
    statusSafe: "Sterilisation Abgeschlossen",
    statusMarginal: "Marginale Sterilisation",
    statusUnsafe: "Hohes Botulismusrisiko",
    statusSafeDesc: "Die thermische Letalitaet uebersteigt das Ziel F0 von 3.0 Minuten. Sporen sind vollstaendig deaktiviert.",
    statusMarginalDesc: "Der Prozess erreicht eine teilweise Deaktivierung, bleibt aber unter dem 12D Sicherheitsstandard. Passe Zeit oder Temperatur an.",
    statusUnsafeDesc: "Der Prozess deaktiviert Clostridium botulinum nicht. Lebensmittel mit niedrigem Saeuregehalt im Wasserbad bleiben gefaehrlich.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "min",
    logReductionLabel: "Dezimalreduktion",
    dValueUnit: "Minuten",
    indicatorSectionTitle: "Diagnoseanzeigen",
    visualizerSectionTitle: "Sporenreduktion",
    f0Tooltip: "Aequivalente Sterilisationszeit in Minuten bei 121.11°C. Sicherer Schwellenwert ist 3.0 oder hoeher.",
    dTooltip: "Dezimale Reduktionszeit: Dauer in Minuten, die erforderlich ist, um 90% der Sporen bei aktueller Temperatur zu zerstoeren.",
    logReductionTooltip: "Anzahl der Dezimalreduktionen (10er Potenzen). Eine 12D Reduktion ist der Sicherheitsstandard.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Wissenschaftliche Mechanismen der Waermebehandlung und der Kinetik der Sporendeaktivierung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Waermebehandlung bei der Konservenherstellung gewaehrleistet die kommerzielle Sterilitaet durch die Zerstoerung von pathogenen und verderbniserregenden Mikroorganismen. Der Hauptschwerpunkt der Sicherheitsrichtlinien bei der Konservierung von Lebensmitteln mit niedrigem Saeuregehalt liegt auf Clostridium botulinum. Botulinumsporen sind im Vergleich zu vegetativen Zellen stark hitzebestaendig. Die Deaktivierung dieser Sporen erfordert einen thermischen Todeszeitprozess, der eine hohe Temperatur ueber eine berechnete Dauer anwendet. Die mathematische Beziehung zwischen Temperatur und Deaktivierungsrate wird durch die Dezimalreduktionszeit (D Wert) und den Temperaturabhaengigkeitsfaktor (z Wert) ausgedrueckt.',
    },
    {
      type: 'title',
      text: 'Lebensmittelklassifizierung und die Kritische Sicherheitsschwelle pH 4.6',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ein pH Wert von 4.6 ist die Trennlinie fuer die Konservierungssicherheit. Saure Lebensmittel unter pH 4.6 hemmen auf natuerliche Weise die Keimung und Toxinproduktion von Botulinumsporen. Fuer diese Lebensmittel ist die Verarbeitung bei 100 Grad Celsius in einem kochenden Wasserbad ausreichend. Lebensmittel mit niedrigem Saeuregehalt ueber pH 4.6 muessen jedoch einem Druckkonservierungsprozess unterzogen werden, um die Dampftemperatur zu erhoehen und eine vollstaendige thermische Zerstoerung der Sporen zu erreichen. Die folgende Tabelle zeigt die Klassifizierungen und Konservierungsmethoden fuer haeufige Zutaten:',
    },
    {
      type: 'table',
      headers: ['Lebensmittelgruppe', 'pH Bereich', 'Erforderliche Konservierungsmethode', 'Haeufige Beispiele'],
      rows: [
        ['Hoher Saeuregehalt', 'Unter 4.0', 'Wasserbadkonservierung', 'Aepfel, Beeren, Zitrusfruechte, Pfirsiche, Essiggurken'],
        ['Angesaeuert oder Mittlerer Saeuregehalt', '4.0 bis 4.6', 'Wasserbad mit Saeureanpassung', 'Tomaten, Feigen, Birnen'],
        ['Niedriger Saeuregehalt', '4.6 und hoeher', 'Druckkonservierung Erforderlich', 'Fleisch, Meeresfruechte, Bohnen, Mais, Kartoffeln, Suppen'],
      ],
    },
    {
      type: 'title',
      text: 'Hoehenanpassungen und Sicherheitskorrekturen des Siedepunkts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mit zunehmender Hoehe sinkt der Luftdruck, wodurch der Siedepunkt von Wasser unter 100 Grad Celsius faellt. Beim Konservieren im Wasserbad erhoeht diese niedrigere Temperatur den D Wert der Sporen, was laengere Verarbeitungszeiten erfordert. Beim Druckkonservieren muessen die Einstellungen des Zeiger oder Gewichtsmanometers erhoeht werden, um die Zieltemperatur fuer die interne Sterilisation beizubehalten. Nachfolgend finden Sie die Referenztabelle fuer Siedepunkte und die erforderlichen Anpassungen beim Druckkonservieren:',
    },
    {
      type: 'table',
      headers: ['Hoehenbereich', 'Siedepunkt von Wasser', 'Erforderlicher Zeigermanometerdruck', 'Erforderlicher Gewichtsmanometerdruck'],
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
      html: 'Die bakterielle Abtoetung durch Hitze erfolgt logarithmisch. Der D Wert stellt die Zeit dar, die bei einer bestimmten Temperatur erforderlich ist, um 90% der Sporenpopulation abzutoeten, was einer Dezimallogarithmusreduktion entspricht. Der Referenzstandard fuer Clostridium botulinum ist ein D Wert von 0.21 Minuten bei 121.11 Grad Celsius. Um hohe Sicherheitsspielraeume zu erreichen, verlangen kommerzielle Standards einen zwoelffachen Dezimalreduktionsprozess (12D), was bedeutet, dass die Sporenpopulation um zwoelf Zehnerpotenzen reduziert wird. Dies ergibt einen Ziel F0 Wert von 3.0 Minuten, der die Sicherheit bei Lebensmitteln mit niedrigem Saeuregehalt garantiert.',
    },
    {
      type: 'title',
      text: 'Praktischer Leitfaden fuer Hausgemachte Konserven und Sicherheitstipps',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Saeuere Tomaten vor der Wasserbadverarbeitung immer mit Zitronensaft oder Zitronensaeure an, da ihr natuerlicher pH Wert nahe der kritischen Schwelle von 4.6 schwankt.',
        'Verkuerze niemals die Verarbeitungszeiten oder senke die Temperaturen. Die thermische Todeskinetik ist logarithmisch und kleine Aenderungen koennen Sporen ueberleben lassen.',
        'Stelle sicher, dass Zeigermanometer an Druckkonservengeraeten jaehrlich auf Genauigkeit geprueft werden, da falsche Druckmesswerte die internen Sterilisationstemperaturen direkt beeintraechtigen.',
        'Gleiche Hoehenunterschiede aus, indem du die Verarbeitungszeiten in Wasserbaedern anpasst oder die PSI Einstellungen an Druckkonservengeraeten erhoehst.',
        'Vermeide es, gemischte Rezepte mit Zutaten mit niedrigem Saeuregehalt wie Fleisch oder Bohnen in einem Wasserbadkonservierer zu verarbeiten, selbst wenn das Gesamtrezept Saeure enthaelt.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
