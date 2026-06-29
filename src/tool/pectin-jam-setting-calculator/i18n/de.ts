import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Pektin und Marmeladengelier Rechner für perfektes Gel bei jedem Mal';
const description = 'Berechnen Sie genau, wie viel Pektin, Zitronensäure und Zucker Ihre Früchte benötigen, um das perfekte Gelierergebnis zu erzielen. Vermeiden Sie zu flüssige oder gummiartige Konserven mit Präzisionschemie.';

const faq = [
  {
    question: 'Warum lässt Pektin Marmelade gelieren?',
    answer: 'Pektin ist ein natürliches Polysaccharid, das in den Zellwänden von Früchten vorkommt. Beim Erhitzen mit Zucker und Säure (pH 2,8-3,5) bilden Pektinmoleküle ein dreidimensionales Gelnetzwerk, das Wasser und Zucker einschließt und die streichfähige Textur von Marmelade erzeugt.',
  },
  {
    question: 'Was ist der Unterschied zwischen HM- und LM-Pektin?',
    answer: 'Hochverestertes (HM) Pektin benötigt mindestens 60% Zucker und einen pH-Wert unter 3,5 zum Gelieren - ideal für traditionelle Marmeladen. Niederverestertes (LM) Pektin geliert über Kalziumionen statt Zucker und ermöglicht zuckerarme oder zuckerfreie Konserven.',
  },
  {
    question: 'Warum wird meine Marmelade manchmal zu flüssig?',
    answer: 'Flüssige Marmelade entsteht typischerweise durch zu wenig Pektin (die Frucht enthält von Natur aus zu wenig), zu wenig Säure (pH zu hoch für die Gelierung) oder zu wenig Zucker (bei HM-Pektin). Zu starke Verwässerung oder zu kurzes Kochen können das Gelieren ebenfalls verhindern.',
  },
  {
    question: 'Kann ich Zitronensaft anstelle von Zitronensäurepulver verwenden?',
    answer: 'Ja. Dieser Rechner wandelt Zitronensäure in Zitronensaft-Äquivalente um. Etwa 25 ml Zitronensaft liefern die gleiche Säure wie 1 g Zitronensäure. Zitronensaft verleiht Marmeladen zudem ein frisches Aroma.',
  },
  {
    question: 'Welche Früchte sind von Natur aus pektinreich?',
    answer: 'Äpfel, Quitten, Brombeeren, Cranberries und Stachelbeeren sind von Natur aus pektinreich und benötigen oft kein zusätzliches Pektin. Unreife Früchte enthalten ebenfalls mehr Pektin als vollreife Früchte.',
  },
];

const howTo = [
  {
    name: 'Wählen Sie Ihre Frucht aus',
    text: 'Wählen Sie die Frucht, mit der Sie Marmelade machen. Jede Frucht hat unterschiedliche natürliche Pektin- und Säuregehalte, die bestimmen, welche Zusatzstoffe benötigt werden.',
  },
  {
    name: 'Wiegen Sie Ihre vorbereitete Frucht',
    text: 'Geben Sie das Gewicht Ihrer geputzten, zerkleinerten Frucht in Gramm ein. Genaues Wiegen ist für präzises Marmeladekochen unerlässlich.',
  },
  {
    name: 'Wählen Sie Ihren Pektintyp',
    text: 'Wählen Sie Klassisch (HM) für traditionelle zuckerreiche Marmelade oder Zuckerarm (LM) für eine gesündere, zuckerreduzierte Konserve, die durch Kalzium aktiviert wird.',
  },
  {
    name: 'Prüfen Sie Ihr perfektes Rezept',
    text: 'Der Rechner gibt die exakten Gramm Pektinpulver, Zitronensäure (oder Zitronensaft) und Zucker an, die benötigt werden. Fügen Sie diese während des Kochens für ein garantiertes Gelieren hinzu.',
  },
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
  applicationCategory: 'SoftwareApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'pektin-marmeladen-rechner',
  title: 'Pektin und Marmeladengelier Rechner',
  description: 'Berechnen Sie genau, wie viel Pektin, Zitronensäure und Zucker Ihre Früchte für das perfekte Gelierergebnis benötigen - keine flüssigen oder gummiartigen Konserven mehr.',
  faqTitle: 'Häufig Gestellte Fragen',
  ui: {
    title: 'Pektin und Marmeladengelier Rechner',
    subtitle: 'Präzisions Gelierchemie für perfekte Konserven',
    fruitLabel: 'Wählen Sie Ihre Frucht',
    allFruits: 'Alle',
    highPectin: 'Pektinreich',
    mediumPectin: 'Mittlerer Pektingehalt',
    lowPectin: 'Pektinarm',
    weightLabel: 'Fruchtgewicht',
    weightPlaceholder: 'z. B. 1000',
    weightUnitMetric: 'g',
    weightUnitImperial: 'oz',
    pectinTypeLabel: 'Pektintyp',
    pectinHM: 'Klassisch (HM)',
    pectinLM: 'Zuckerarm (LM)',
    sugarModeLabel: 'Zuckermodus',
    sugarModeAuto: 'Auto',
    sugarModeManual: 'Manuell',
    sugarLabel: 'Zuckergewicht',
    sugarPlaceholder: 'z. B. 650',
    recipeTitle: 'Rezept',
    pectinNeeded: 'Pektin',
    citricAcidNeeded: 'Zitronensäure',
    lemonJuiceNeeded: 'Zitronensaft',
    sugarNeeded: 'Zucker',
    totalYield: 'Gesamtertrag',
    sugarPercent: 'Zucker',
    sugarLow: 'Niedrig',
    sugarIdeal: 'Ideal',
    sugarHigh: 'Hoch',
    sugarOfFruit: 'des Fruchtgewichts',
    sugarOfTotal: 'der Gesamtmenge',
    statusPerfect: 'Perfektes Gel',
    statusPerfectDesc: 'Ihre Verhältnisse sind ausgewogen. Die Marmelade geliert wunderschön mit einer seidigen, streichfähigen Textur und brillantem Glanz.',
    statusSlightlyThin: 'Leicht Dünnflüssig',
    statusSlightlyThinDesc: 'Die Marmelade könnte weich gelieren. Erwägen Sie mehr Pektin hinzuzufügen oder den Wassergehalt für ein festeres Gel zu reduzieren.',
    statusTooThin: 'Zu Dünnflüssig - Risiko Flüssiger Marmelade',
    statusTooThinDesc: 'Ohne Anpassung wird diese Marmelade wahrscheinlich flüssig bleiben. Erhöhen Sie den Zucker (für HM) oder fügen Sie mehr Pektin hinzu.',
    statusTooStiff: 'Zu Fest',
    statusTooStiffDesc: 'Das Gel könnte gummiartig werden. Reduzieren Sie das Pektin um die Hälfte oder erhöhen Sie das Fruchtgewicht leicht.',
    dropTestTitle: 'Kaltplattentest',
    dropTestHow: 'Auf einen gekühlten Teller tropfen',
    dropStatusLabel: 'Ergebnis',
    dropTestPerfect: 'Wird gelieren. Der Tropfen bildet Falten und hält',
    dropTestThin: 'Flüssig. Läuft den Teller hinunter',
    dropTestStiff: 'Zu fest. Bewegt sich kaum',
    dropPlateLabel: 'Teller',
    dropDropLabel: 'Tropfen',
    sugarAutoHint: 'automatisch berechnet',
    sugarManualHint: 'Menge eingeben',
    unitLabel: 'Maßsystem',
    metricLabel: 'Metrisch (g)',
    imperialLabel: 'Imperial (oz)',
    disclaimer: 'Wiegen Sie alle Zutaten mit einer digitalen Küchenwaage für beste Ergebnisse. Volumetrische Messungen sind beim Marmeladekochen unzuverlässig.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Die Vollständige Wissenschaft des Marmeladengelierens: Pektin-, Säure- und Zuckerbalance',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Marmelade kochen ist eine präzise Schnittstelle zwischen Chemie und Kochen. Im Kern hängt die Umwandlung von Fruchtmus in ein festes, streichfähiges Gel vom richtigen Gleichgewicht dreier Moleküle ab: <strong>Pektin</strong> (das Geliermittel), <strong>Säure</strong> (der Katalysator, der Pektin aktiviert) und <strong>Zucker</strong> (das Entwässerungsmittel, das Wasser von den Pektinketten entfernt). Ohne die richtigen Verhältnisse entsteht entweder Fruchtsuppe oder ein gummiartiger Block.',
    },
    {
      type: 'title',
      text: 'Wie Pektin ein Gelnetzwerk Bildet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektin ist ein komplexes Polysaccharid, das hauptsächlich aus Galakturonsäure-Einheiten besteht und in der Mittellamelle pflanzlicher Zellwände vorkommt. In seinem natürlichen Zustand sind Pektinmoleküle negativ geladen und stossen sich gegenseitig ab, wodurch sie im Fruchtwasser gelöst bleiben. Um ein Gel zu bilden, müssen drei Bedingungen gleichzeitig erfüllt sein: (1) es muss genügend Zucker vorhanden sein, um mit den Wassermolekülen zu konkurrieren und die Pektinstränge zu dehydrieren; (2) der pH-Wert muss unter 3,5 fallen, wodurch die negativen Ladungen durch Protonierung der Carboxylgruppen neutralisiert werden; und (3) die Temperatur muss 104-105 °C übersteigen, um das Pektin vollständig aufzulösen und zu aktivieren. Wenn diese Bedingungen zusammentreffen, bilden Pektinstränge Verbindungszonen - Bereiche, in denen sich die Ketten durch Wasserstoffbrückenbindungen und hydrophobe Wechselwirkungen verbinden - und schaffen ein kontinuierliches dreidimensionales schwammartiges Netzwerk, das den Fruchtsaft und den Zuckersirup einschließt.',
    },
    {
      type: 'title',
      text: 'Hochverestertes (HM) vs. Niederverestertes (LM) Pektin',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektin wird nach seinem Veresterungsgrad (DE) klassifiziert, dem Prozentsatz der mit Methanol veresterten Carboxylgruppen. <strong>Hochverestertes (HM) Pektin</strong> (DE > 50%) benötigt mindestens 55-65% lösliche Feststoffe (Zucker) und einen pH-Wert zwischen 2,8 und 3,5, um ein Gel zu bilden. Dies ist das klassische Pektin, das in traditionellen Marmeladenrezepten verwendet wird. Ohne ausreichend Zucker bildet HM-Pektin ein schwaches oder gar kein Gel. <strong>Niederverestertes (LM) Pektin</strong> (DE < 50%) geliert über einen anderen Mechanismus: Es vernetzt sich über zweiwertige Kalziumionen (Ca), die Brücken zwischen freien Carboxylgruppen bilden. LM-Pektin może zhelifikować się z małą ilością cukru lub bez cukru, co czyni go idealnym do niskokalorycznych przetworów. Einige LM-Pektine tolerieren zudem einen breiteren pH-Bereich bis 5,5, was für säurearme Früchte wie Feigen und Birnen nützlich ist.',
    },
    {
      type: 'title',
      text: 'Natürlicher Pektingehalt in Verschiedenen Obstsorten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nicht alle Früchte sind in Bezug auf Pektin gleich. Früchte fallen je nach ihrem natürlichen Pektin- und Säuregehalt in drei Kategorien. Zu wissen, wo sich Ihre Früchte in diesem Spektrum befinden, bestimmt, ob Sie mit Pektinpulver oder Zitronensäure ergänzen müssen.',
    },
    {
      type: 'table',
      headers: ['Pektingehalt', 'Säuregehalt', 'Beispielfrüchte', 'Benötigtes Zusatzpektin'],
      rows: [
        ['Hoch', 'Hoch', 'Apfel, Cranberry, Stachelbeere', '0% (keines)'],
        ['Hoch', 'Mittel/Niedrig', 'Quitte, Brombeere', '0% (keines)'],
        ['Mittel', 'Hoch', 'Himbeere, Loganbeere', '0,3% des Fruchtgewichts'],
        ['Mittel', 'Mittel', 'Pflaume, Aprikose', '0,3% des Fruchtgewichts'],
        ['Mittel', 'Niedrig', 'Heidelbeere', '0,3% des Fruchtgewichts'],
        ['Niedrig', 'Hoch', 'Kirsche, Traube', '0,6% des Fruchtgewichts'],
        ['Niedrig', 'Mittel', 'Pfirsich, Mango', '0,6% des Fruchtgewichts'],
        ['Niedrig', 'Niedrig', 'Erdbeere, Birne, Feige', '0,6% des Fruchtgewichts'],
      ],
    },
    {
      type: 'title',
      text: 'Die Kritische Rolle des pH-Werts bei der Marmeladengelierung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der pH-Wert der Marmeladenmischung ist wohl die am meisten übersehene Variable beim häuslichen Einkochen. Bei einem pH-Wert über 3,8 bleiben die Carboxylgruppen des Pektins ionisiert (negativ geladen), was eine elektrostatische Abstoßung erzeugt, die die Gelbildung unabhängig von der Menge an zugesetztem Zucker oder Pektin verhindert. Sinkt der pH-Wert durch Zugabe von Zitronensäure oder Zitronensaft unter 3,5, werden diese Gruppen protoniert, was die Bildung von Wasserstoffbrücken zwischen benachbarten Pektinketten ermöglicht. Die optimale Gelierzone liegt zwischen pH 2,8 und 3,2. Unter pH 2,8 wird das Gel spröde und kann Synärese (Flüssigkeitsabsonderung) zeigen. Über pH 3,5 tritt ebenfalls Synärese auf und das Gel ist zu schwach. Deshalb benötigen säurearme Früchte wie Feigen und Erdbeeren fast immer zugesetzte Zitronensäure - ihr natürlicher pH-Wert ist zu hoch, um das Pektin richtig zu aktivieren.',
    },
    {
      type: 'title',
      text: 'Zuckerkonzentration und Ihre Auswirkung auf die Gelfestigkeit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zucker erfüllt zwei Funktionen in HM-Pektin-Marmelade. Erstens ist er stark hygroskopisch - er konkurriert intensiv mit dem Pektin um Wassermoleküle, entzieht den Pektinsträngen ihre Hydrathüllen und zwingt sie, stattdessen miteinander zu interagieren. Zweitens erhöht er den Siedepunkt der Mischung, sodass die Marmelade den Gelierpunkt von 104-105 °C erreichen kann. Bei 65% Zuckerkonzentration sind die Pektinketten ausreichend dehydriert, um ein starkes Gel zu bilden. Unter 60% schwächt sich das Gel linear ab. Über 68% kann die Marmelade beim Abkühlen kristallisieren, wenn der Zucker seine Löslichkeitsgrenze überschreitet. Bei LM-Pektin-Marmeladen spielt Zucker nur eine geschmackliche Rolle, da die Gelierung auf Kalziumbrücken beruht. Der Zuckergehalt kann bei LM-Pektin-Konserven, die mit nicht-nahrhaften Süßstoffen gesüßt werden, nur 5-10% betragen.',
    },
    {
      type: 'title',
      text: 'Zitronensäure vs. Zitronensaft: Umrechnung und Bewährte Praktiken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zitronensäure (C₆H₈O₇) ist die Hauptsäure, die in der kommerziellen Marmeladenherstellung verwendet wird, weil sie standardisiert, geschmacksneutral und präzise ist. Zitronensaft enthält etwa 5% Zitronensäure nach Gewicht sowie Äpfelsäure und Ascorbinsäure (Vitamin C). <strong>1 Gramm reine Zitronensäure entspricht etwa 25 ml frischem Zitronensaft</strong> in Bezug auf die pH-senkende Wirkung. Zitronensaft fügt jedoch auch Flüssigkeitsvolumen hinzu, das im Gesamtwassergehalt berücksichtigt werden muss. Für die konstantesten Ergebnisse verwenden Sie Zitronensäurepulver, das in einer kleinen Menge Wasser aufgelöst ist. Bei Verwendung von Zitronensaft müssen zusätzlich 20-30 ml Flüssigkeit eingeplant werden, die bis zum Erreichen des Gelierpunkts verdampft werden muss.',
    },
    {
      type: 'title',
      text: 'Der Kaltplattentest: Eine Visuelle Methode zur Bestimmung des Gelierpunkts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der traditionelle Kaltplattentest (auch Falten- oder Untertassentest genannt) bleibt eine der zuverlässigsten Methoden für Hobby-Marmeladenkocher. Legen Sie einen kleinen Keramikteller vor Kochbeginn 10 Minuten lang ins Gefrierfach. Wenn Sie glauben, dass die Marmelade ihren Gelierpunkt erreicht hat, geben Sie einen Teelöffel heiße Marmelade auf den gekühlten Teller und lassen Sie sie 30 Sekunden abkühlen. Schieben Sie den Rand des Tropfens mit der Fingerspitze: Wenn sich die Oberfläche deutlich fältelt und der Tropfen seine Form hält, ist der Gelierpunkt erreicht. Läuft er frei, kochen Sie weitere 2-3 Minuten und testen Sie erneut. Dieser Rechner simuliert diesen Test visuell und zeigt Ihnen, ob die Verhältnisse Ihres Rezepts den Plattentest bestehen werden, bevor Sie überhaupt mit dem Kochen beginnen.',
    },
    {
      type: 'title',
      text: 'Fehlerbehebung: Warum Marmelade Misslingt und Wie Man Sie Repariert',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Flüssige Marmelade (nach dem Abkühlen nicht geliert):</strong> Die häufigste Ursache ist unzureichendes Kochen - die Mischung hat nie 104-105 °C erreicht. Kochen Sie die Marmelade erneut und geben Sie 1-2 g Zitronensäure pro kg Frucht hinzu und testen Sie mit der Kaltplattenmethode. Alternativ lösen Sie 5 g Pektinpulver in kaltem Wasser auf, rühren es in die kochende Marmelade und kochen Sie weitere 2 Minuten.',
        '<strong>Gummiartige oder zu feste Marmelade:</strong> Es wurde zu viel Pektin im Verhältnis zum Fruchtgewicht hinzugefügt, oder die Marmelade wurde über 106 °C hinaus verkocht, wodurch das Pektinnetzwerk zu einer starren, spröden Struktur abgebaut wurde. Zum Retten vorsichtig mit 100-200 ml Apfelsaft oder Wasser wieder erwärmen, um die Pektinkonzentration zu verringern.',
        '<strong>Synärese (Wasser tropft aus dem Gel):</strong> Dies deutet auf überschüssige Säure (pH unter 2,8) oder Zucker über 68% hin, was dazu führt, dass sich das Pektinnetzwerk zusammenzieht und Wasser auspresst. Fügen Sie eine kleine Menge Natron hinzu, um den pH-Wert schrittweise zu erhöhen.',
        '<strong>Kristallisation (körnige Textur):</strong> Die Zuckerkonzentration hat die Löslichkeit überschritten, oder ungelöste Zuckerkristalle wirkten als Kristallisationskeime. Rühren Sie während des letzten Aufkochens ständig und fügen Sie 1 Esslöffel Maissirup oder Glukose hinzu, was die Kristallisation hemmt.',
        '<strong>Schimmel an der Oberfläche während der Lagerung:</strong> Die Marmelade wurde nicht ausreichend gekocht (hat keine sterile Temperatur erreicht), enthielt zu wenig Zucker (unter 60% bei HM-Pektin) oder die Gläser wurden nicht richtig sterilisiert. Verwenden Sie stets sterilisierte Gläser und verarbeiten Sie sie 10 Minuten lang im Wasserbad.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
