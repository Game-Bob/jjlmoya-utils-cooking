import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Pektin und Marmeladengelier Rechner fur perfektes Gel bei jedem Mal';
const description = 'Berechnen Sie genau, wie viel Pektin, Zitronensaure und Zucker Ihre Fruchte benotigen, um das perfekte Gelierergebnis zu erzielen. Vermeiden Sie zu flussige oder gummiartige Konserven mit Prazisionschemie.';

const faq = [
  {
    question: 'Warum lasst Pektin Marmelade gelieren?',
    answer: 'Pektin ist ein naturliches Polysaccharid, das in den Zellwanden von Fruchten vorkommt. Beim Erhitzen mit Zucker und Saure (pH 2,8-3,5) bilden Pektinmolekule ein dreidimensionales Gelnetzwerk, das Wasser und Zucker einschliesst und die streichfahige Textur von Marmelade erzeugt.',
  },
  {
    question: 'Was ist der Unterschied zwischen HM- und LM-Pektin?',
    answer: 'Hochverestertes (HM) Pektin benotigt mindestens 60% Zucker und einen pH-Wert unter 3,5 zum Gelieren - ideal fur traditionelle Marmeladen. Niederverestertes (LM) Pektin geliert uber Kalziumionen statt Zucker und ermoglicht zuckerarme oder zuckerfreie Konserven.',
  },
  {
    question: 'Warum wird meine Marmelade manchmal zu flussig?',
    answer: 'Flussige Marmelade entsteht typischerweise durch zu wenig Pektin (die Frucht enthalt von Natur aus zu wenig), zu wenig Saure (pH zu hoch fur die Gelierung) oder zu wenig Zucker (bei HM-Pektin). Zu starke Verwasserung oder zu kurzes Kochen konnen das Gelieren ebenfalls verhindern.',
  },
  {
    question: 'Kann ich Zitronensaft anstelle von Zitronensaurepulver verwenden?',
    answer: 'Ja. Dieser Rechner wandelt Zitronensaure in Zitronensaft-Aquivalente um. Etwa 25 ml Zitronensaft liefern die gleiche Saure wie 1 g Zitronensaure. Zitronensaft verleiht Marmeladen zudem ein frisches Aroma.',
  },
  {
    question: 'Welche Fruchte sind von Natur aus pektinreich?',
    answer: 'Apfel, Quitten, Brombeeren, Cranberries und Stachelbeeren sind von Natur aus pektinreich und benotigen oft kein zusatzliches Pektin. Unreife Fruchte enthalten ebenfalls mehr Pektin als vollreife Fruchte.',
  },
];

const howTo = [
  {
    name: 'Wahlen Sie Ihre Frucht aus',
    text: 'Wahlen Sie die Frucht, mit der Sie Marmelade machen. Jede Frucht hat unterschiedliche naturliche Pektin- und Sauregehalte, die bestimmen, welche Zusatzstoffe benotigt werden.',
  },
  {
    name: 'Wiegen Sie Ihre vorbereitete Frucht',
    text: 'Geben Sie das Gewicht Ihrer geputzten, zerkleinerten Frucht in Gramm ein. Genaues Wiegen ist fur prazises Marmeladekochen unerlasslich.',
  },
  {
    name: 'Wahlen Sie Ihren Pektintyp',
    text: 'Wahlen Sie Klassisch (HM) fur traditionelle zuckerreiche Marmelade oder Zuckerarm (LM) fur eine gesundere, zuckerreduzierte Konserve, die durch Kalzium aktiviert wird.',
  },
  {
    name: 'Prufen Sie Ihr perfektes Rezept',
    text: 'Der Rechner gibt die exakten Gramm Pektinpulver, Zitronensaure (oder Zitronensaft) und Zucker an, die benotigt werden. Fugen Sie diese wahrend des Kochens fur ein garantiertes Gelieren hinzu.',
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
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'pektin-marmeladen-rechner',
  title: 'Pektin und Marmeladengelier Rechner',
  description: 'Berechnen Sie genau, wie viel Pektin, Zitronensaure und Zucker Ihre Fruchte fur das perfekte Gelierergebnis benotigen - keine flussigen oder gummiartigen Konserven mehr.',
  faqTitle: 'Haufig Gestellte Fragen',
  ui: {
    title: 'Pektin und Marmeladengelier Rechner',
    subtitle: 'Prazisions Gelierchemie fur perfekte Konserven',
    fruitLabel: 'Wahlen Sie Ihre Frucht',
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
    citricAcidNeeded: 'Zitronensaure',
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
    statusPerfectDesc: 'Ihre Verhaltnisse sind ausgewogen. Die Marmelade geliert wunderschon mit einer seidigen, streichfahigen Textur und brillantem Glanz.',
    statusSlightlyThin: 'Leicht Dunnflussig',
    statusSlightlyThinDesc: 'Die Marmelade konnte weich gelieren. Erwagen Sie mehr Pektin hinzuzufugen oder den Wassergehalt fur ein festeres Gel zu reduzieren.',
    statusTooThin: 'Zu Dunnflussig - Risiko Flussiger Marmelade',
    statusTooThinDesc: 'Ohne Anpassung wird diese Marmelade wahrscheinlich flussig bleiben. Erhohen Sie den Zucker (fur HM) oder fugen Sie mehr Pektin hinzu.',
    statusTooStiff: 'Zu Fest',
    statusTooStiffDesc: 'Das Gel konnte gummiartig werden. Reduzieren Sie das Pektin um die Halfte oder erhohen Sie das Fruchtgewicht leicht.',
    dropTestTitle: 'Kaltplattentest',
    dropTestHow: 'Auf einen gekuhlten Teller tropfen',
    dropStatusLabel: 'Ergebnis',
    dropTestPerfect: 'Wird gelieren. Der Tropfen bildet Falten und halt',
    dropTestThin: 'Flussig. Lauft den Teller hinunter',
    dropTestStiff: 'Zu fest. Bewegt sich kaum',
    dropPlateLabel: 'Teller',
    dropDropLabel: 'Tropfen',
    sugarAutoHint: 'automatisch berechnet',
    sugarManualHint: 'Menge eingeben',
    unitLabel: 'Masssystem',
    metricLabel: 'Metrisch (g)',
    imperialLabel: 'Imperial (oz)',
    disclaimer: 'Wiegen Sie alle Zutaten mit einer digitalen Kuchenwaage fur beste Ergebnisse. Volumetrische Messungen sind beim Marmeladekochen unzuverlassig.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Die Vollstandige Wissenschaft des Marmeladengelierens: Pektin-, Saure- und Zuckerbalance',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Marmelade kochen ist eine prazise Schnittstelle zwischen Chemie und Kochen. Im Kern hangt die Umwandlung von Fruchtmus in ein festes, streichfahiges Gel vom richtigen Gleichgewicht dreier Molekule ab: <strong>Pektin</strong> (das Geliermittel), <strong>Saure</strong> (der Katalysator, der Pektin aktiviert) und <strong>Zucker</strong> (das Entwasserungsmittel, das Wasser von den Pektinketten entfernt). Ohne die richtigen Verhaltnisse entsteht entweder Fruchtsuppe oder ein gummiartiger Block.',
    },
    {
      type: 'title',
      text: 'Wie Pektin ein Gelnetzwerk Bildet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektin ist ein komplexes Polysaccharid, das hauptsachlich aus Galakturonsaure-Einheiten besteht und in der Mittellamelle pflanzlicher Zellwande vorkommt. In seinem naturlichen Zustand sind Pektinmolekule negativ geladen und stossen sich gegenseitig ab, wodurch sie im Fruchtwasser gelost bleiben. Um ein Gel zu bilden, mussen drei Bedingungen gleichzeitig erfullt sein: (1) es muss genugend Zucker vorhanden sein, um mit den Wassermolekulen zu konkurrieren und die Pektinstrange zu dehydrieren; (2) der pH-Wert muss unter 3,5 fallen, wodurch die negativen Ladungen durch Protonierung der Carboxylgruppen neutralisiert werden; und (3) die Temperatur muss 104-105 C ubersteigen, um das Pektin vollstandig aufzulosen und zu aktivieren. Wenn diese Bedingungen zusammentreffen, bilden Pektinstrange Verbindungszonen - Bereiche, in denen sich die Ketten durch Wasserstoffbruckenbindungen und hydrophobe Wechselwirkungen verbinden - und schaffen ein kontinuierliches dreidimensionales schwammartiges Netzwerk, das den Fruchtsaft und den Zuckersirup einschliesst.',
    },
    {
      type: 'title',
      text: 'Hochverestertes (HM) vs. Niederverestertes (LM) Pektin',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektin wird nach seinem Veresterungsgrad (DE) klassifiziert, dem Prozentsatz der mit Methanol veresterten Carboxylgruppen. <strong>Hochverestertes (HM) Pektin</strong> (DE > 50%) benotigt mindestens 55-65% losliche Feststoffe (Zucker) und einen pH-Wert zwischen 2,8 und 3,5, um ein Gel zu bilden. Dies ist das klassische Pektin, das in traditionellen Marmeladenrezepten verwendet wird. Ohne ausreichend Zucker bildet HM-Pektin ein schwaches oder gar kein Gel. <strong>Niederverestertes (LM) Pektin</strong> (DE < 50%) geliert uber einen anderen Mechanismus: Es vernetzt sich uber zweiwertige Kalziumionen (Ca), die Brucken zwischen freien Carboxylgruppen bilden. LM-Pektin kann mit wenig oder gar keinem zugesetzten Zucker gelieren und eignet sich daher ideal fur kalorienarme, diabetikerfreundliche oder naturlich gesusste Konserven. Einige LM-Pektine tolerieren zudem einen breiteren pH-Bereich bis 5,5, was fur saurearme Fruchte wie Feigen und Birnen nutzlich ist.',
    },
    {
      type: 'title',
      text: 'Naturlicher Pektingehalt in Verschiedenen Obstsorten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nicht alle Fruchte sind in Bezug auf Pektin gleich. Fruchte fallen je nach ihrem naturlichen Pektin- und Sauregehalt in drei Kategorien. Zu wissen, wo sich Ihre Frucht in diesem Spektrum befindet, bestimmt, ob Sie mit Pektinpulver oder Zitronensaure erganzen mussen.',
    },
    {
      type: 'table',
      headers: ['Pektingehalt', 'Sauregehalt', 'Beispielfruchte', 'Benotigtes Zusatzpektin'],
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
      html: 'Der pH-Wert der Marmeladenmischung ist wohl die am meisten ubersehene Variable beim hauslichen Einkochen. Bei einem pH-Wert uber 3,8 bleiben die Carboxylgruppen des Pektins ionisiert (negativ geladen), was eine elektrostatische Abstossung erzeugt, die die Gelbildung unabhangig von der Menge an zugesetztem Zucker oder Pektin verhindert. Sinkt der pH-Wert durch Zugabe von Zitronensaure oder Zitronensaft unter 3,5, werden diese Gruppen protoniert, was die Bildung von Wasserstoffbrucken zwischen benachbarten Pektinketten ermoglicht. Die optimale Gelierzone liegt zwischen pH 2,8 und 3,2. Unter pH 2,8 wird das Gel sprode und kann Synarese (Flussigkeitsabsonderung) zeigen. Uber pH 3,5 tritt ebenfalls Synarese auf und das Gel ist zu schwach. Deshalb benotigen saurearme Fruchte wie Feigen und Erdbeeren fast immer zugesetzte Zitronensaure - ihr naturlicher pH-Wert ist zu hoch, um das Pektin richtig zu aktivieren.',
    },
    {
      type: 'title',
      text: 'Zuckerkonzentration und Ihre Auswirkung auf die Gelfestigkeit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zucker erfullt zwei Funktionen in HM-Pektin-Marmelade. Erstens ist er stark hygroskopisch - er konkurriert intensiv mit dem Pektin um Wassermolekule, entzieht den Pektinstrangen ihre Hydrathullen und zwingt sie, stattdessen miteinander zu interagieren. Zweitens erhoht er den Siedepunkt der Mischung, sodass die Marmelade den Gelierpunkt von 104-105 C erreichen kann. Bei 65% Zuckerkonzentration sind die Pektinketten ausreichend dehydriert, um ein starkes Gel zu bilden. Unter 60% schwacht sich das Gel linear ab. Uber 68% kann die Marmelade beim Abkuhlen kristallisieren, wenn der Zucker seine Loslichkeitsgrenze uberschreitet. Bei LM-Pektin-Marmeladen spielt Zucker nur eine geschmackliche Rolle, da die Gelierung auf Kalziumbrucken beruht. Der Zuckergehalt kann bei LM-Pektin-Konserven, die mit nicht-nahrhaften Sussstoffen gesusst werden, nur 5-10% betragen.',
    },
    {
      type: 'title',
      text: 'Zitronensaure vs. Zitronensaft: Umrechnung und Bewahrte Praktiken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zitronensaure (CHO) ist die Hauptsaure, die in der kommerziellen Marmeladenherstellung verwendet wird, weil sie standardisiert, geschmacksneutral und prazise ist. Zitronensaft enthalt etwa 5% Zitronensaure nach Gewicht sowie Apfelsaure und Ascorbinsaure (Vitamin C). <strong>1 Gramm reine Zitronensaure entspricht etwa 25 ml frischem Zitronensaft</strong> in Bezug auf die pH-senkende Wirkung. Zitronensaft fugt jedoch auch Flussigkeitsvolumen hinzu, das im Gesamtwassergehalt berucksichtigt werden muss. Fur die konstantesten Ergebnisse verwenden Sie Zitronensaurepulver, das in einer kleinen Menge Wasser aufgelost ist. Bei Verwendung von Zitronensaft mussen zusatzlich 20-30 ml Flussigkeit eingeplant werden, die bis zum Erreichen des Gelierpunkts verdampft werden muss.',
    },
    {
      type: 'title',
      text: 'Der Kaltplattentest: Eine Visuelle Methode zur Bestimmung des Gelierpunkts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der traditionelle Kaltplattentest (auch Falten- oder Untertassentest genannt) bleibt eine der zuverlassigsten Methoden fur Hobby-Marmeladenkocher. Legen Sie einen kleinen Keramikteller vor Kochbeginn 10 Minuten lang ins Gefrierfach. Wenn Sie glauben, dass die Marmelade ihren Gelierpunkt erreicht hat, geben Sie einen Teeloffel heisse Marmelade auf den gekuhlten Teller und lassen Sie sie 30 Sekunden abkuhlen. Schieben Sie den Rand des Tropfens mit der Fingerspitze: Wenn sich die Oberflache deutlich faltelt und der Tropfen seine Form halt, ist der Gelierpunkt erreicht. Lauft er frei, kochen Sie weitere 2-3 Minuten und testen Sie erneut. Dieser Rechner simuliert diesen Test visuell und zeigt Ihnen, ob die Verhaltnisse Ihres Rezepts den Plattentest bestehen werden, bevor Sie uberhaupt mit dem Kochen beginnen.',
    },
    {
      type: 'title',
      text: 'Fehlerbehebung: Warum Marmelade Misslingt und Wie Man Sie Repariert',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Flussige Marmelade (nach dem Abkuhlen nicht geliert):</strong> Die haufigste Ursache ist unzureichendes Kochen - die Mischung hat nie 104-105 C erreicht. Kochen Sie die Marmelade erneut und geben Sie 1-2 g Zitronensaure pro kg Frucht hinzu und testen Sie mit der Kaltplattenmethode. Alternativ losen Sie 5 g Pektinpulver in kaltem Wasser auf, ruhren es in die kochende Marmelade und kochen Sie weitere 2 Minuten.',
        '<strong>Gummiartige oder zu feste Marmelade:</strong> Es wurde zu viel Pektin im Verhaltnis zum Fruchtgewicht hinzugefugt, oder die Marmelade wurde uber 106 C hinaus verkocht, wodurch das Pektinnetzwerk zu einer starren, sproden Struktur abgebaut wurde. Zum Retten vorsichtig mit 100-200 ml Apfelsaft oder Wasser wieder erwarmen, um die Pektinkonzentration zu verringern.',
        '<strong>Synarese (Wasser tropft aus dem Gel):</strong> Dies deutet auf uberschussige Saure (pH unter 2,8) oder Zucker uber 68% hin, was dazu fuhrt, dass sich das Pektinnetzwerk zusammenzieht und Wasser auspresst. Fugen Sie eine kleine Menge Natron hinzu, um den pH-Wert schrittweise zu erhohen.',
        '<strong>Kristallisation (kornige Textur):</strong> Die Zuckerkonzentration hat die Loslichkeit uberschritten, oder ungeloste Zuckerkristalle wirkten als Kristallisationskeime. Ruhren Sie wahrend des letzten Aufkochens standig und fugen Sie 1 Essloffel Maissirup oder Glukose hinzu, was die Kristallisation hemmt.',
        '<strong>Schimmel an der Oberflache wahrend der Lagerung:</strong> Die Marmelade wurde nicht ausreichend gekocht (hat keine sterile Temperatur erreicht), enthielt zu wenig Zucker (unter 60% bei HM-Pektin) oder die Glaser wurden nicht richtig sterilisiert. Verwenden Sie stets sterilisierte Glaser und verarbeiten Sie sie 10 Minuten lang im Wasserbad.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
