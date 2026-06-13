import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Maillard Reaktions Optimierer: pH & Temperatur Bräunungsrechner';
const description = 'Berechnen Sie genau, wie viel Natron Sie pro Kilogramm Lebensmittel hinzufügen müssen, um die Maillard-Reaktion zu beschleunigen. Vermeiden Sie seifige Aromen, indem Sie die sicheren Alkalinitätsgrenzen einhalten.';

const faq = [
  {
    question: 'Was ist die Maillard-Reaktion und warum ist sie beim Kochen wichtig?',
    answer: 'Die Maillard-Reaktion ist eine chemische Reaktion zwischen Aminosäuren und reduzierenden Zuckern, die gebräunten Lebensmitteln ihr charakteristisches Aroma verleiht. Sie ist verantwortlich für die Kruste eines scharf angebratenen Steaks, die goldene Farbe von Brot, Röstkaffee und karamellisierte Zwiebeln. Die Reaktion läuft am schnellsten zwischen 140 °C und 165 °C ab.',
  },
  {
    question: 'Wie beschleunigt Natron die Bräunung?',
    answer: 'Natron erhöht den pH-Wert der Lebensmitteloberfläche und macht sie alkalischer. Die Maillard-Reaktion läuft in alkalischen Umgebungen wesentlich schneller ab. Eine Erhöhung des pH-Werts von 6 auf 8 kann die Bräunungsgeschwindigkeit verdoppeln oder verdreifachen. Allerdings erzeugt zu viel Natron einen metallischen, seifigen Nachgeschmack - deshalb erzwingt dieser Rechner sichere Grenzwerte.',
  },
  {
    question: 'Was ist die maximal sichere Menge Natron pro Kilogramm Lebensmittel?',
    answer: 'Die allgemein sichere Grenze liegt bei 1,5 Gramm Natron pro Kilogramm Lebensmittel. Jenseits dieser Schwelle steigt das Risiko von Fehlgeschmack (metallisch, seifig oder chemisch) drastisch an. Unsere empfohlene Menge ist die Hälfte des Maximums, was eine deutliche Bräunungsbeschleunigung bei minimalem Geschmacksrisiko bietet.',
  },
  {
    question: 'Was passiert, wenn die Temperatur zu niedrig für die Maillard-Reaktion ist?',
    answer: 'Unter 110 °C findet hauptsächlich Wasserverdunstung und keine nennenswerte Maillard-Bräunung statt. Zwischen 110 °C und 140 °C verläuft die Bräunung langsam. Der optimale Temperaturbereich liegt zwischen 140 °C und 180 °C. Oberhalb von 180 °C beginnt die Pyrolyse - das Lebensmittel verbrennt und bildet bittere, stechende Verbindungen anstelle der wünschenswerten Bräunungsaromen.',
  },
];

const howTo = [
  {
    name: 'Wiegen Sie Ihr Lebensmittel',
    text: 'Geben Sie das Gesamtgewicht des Lebensmittels, das Sie bräunen möchten, in Gramm ein.',
  },
  {
    name: 'Stellen Sie die Kochtemperatur ein',
    text: 'Geben Sie Ihre Kochflächen- oder Ofentemperatur an. Der optimale Maillard-Bereich liegt bei 140-180 °C.',
  },
  {
    name: 'Passen Sie die Natronmenge an',
    text: 'Der Schieberegler beginnt bei der Hälfte des sicheren Maximums. Erhöhen Sie vorsichtig - der Rechner warnt Sie, bevor Sie den Gefahrenbereich erreichen.',
  },
  {
    name: 'Lesen Sie den geschätzten pH-Wert und den Geschwindigkeitsmultiplikator',
    text: 'Der Rechner zeigt an, um wie viel schneller die Bräunung bei Ihrem gewählten pH-Wert im Vergleich zum Referenz-pH-Wert von 6 abläuft.',
  },
  {
    name: 'Prüfen Sie das Risikoniveau für den Geschmack',
    text: 'Das Geschmacksabzeichen zeigt sicher, Vorsicht oder Gefahr basierend auf dem geschätzten Oberflächen-pH-Wert. Bleiben Sie im grünen Bereich für beste Ergebnisse.',
  },
  {
    name: 'Tragen Sie das Natron gleichmäßig auf',
    text: 'Lösen Sie die empfohlene Menge in etwas Wasser auf und pinseln oder vermischen Sie sie mit dem Lebensmittel vor dem Kochen. Ungleichmäßige Verteilung führt zu fleckiger Bräunung.',
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
  slug: 'maillard-reaktions-optimierer',
  title: 'Maillard Reaktions Optimierer',
  description: 'Berechnen Sie genau, wie viel Natron Sie pro Kilogramm Lebensmittel hinzufügen müssen, um die Maillard-Reaktion zu beschleunigen. Vermeiden Sie seifige Aromen, indem Sie die sicheren Alkalinitätsgrenzen einhalten.',
  faqTitle: 'Häufig gestellte Fragen',
  ui: {
    title: 'Maillard Reaktions Optimierer',
    headerLabel: 'Bräunungschemie',
    flavorSafe: 'Sicherer pH',
    flavorCaution: 'Vorsicht: Alkalisch',
    flavorDanger: 'Gefahr: Seifiges Risiko',
    unitLabel: 'Einheiten',
    metricUnit: 'Metrisch',
    imperialUnit: 'Imperial',
    weightLabel: 'Lebensmittelgewicht',
    weightUnit: 'g',
    weightOz: 'oz',
    tempLabel: 'Oberflächentemperatur',
    tempUnit: '°C',
    degreesF: '°F',
    tempLow: 'Langsam: {min} - {max}',
    tempOpt: 'Optimal: {min} - {max}',
    tempHigh: 'Pyrolyse: >{min}',
    sodaLabel: 'Natron',
    sodaUnit: 'g',
    sodaOz: 'oz',
    sodaNote: 'Hälfte des sicheren Maximums, leichter Bräunungsschub',
    sodaCautionNote: 'Nähert sich dem Maximum, Geschmack genau beobachten',
    sodaDangerNote: 'Überschreitet das sichere Maximum, Risiko von seifigem Geschmack',
    sodaRecommended: 'Empfohlenes Natron',
    sodaMax: 'Sicheres Maximum',
    speedLabel: 'Reaktionsgeschwindigkeit',
    browningLabel: 'Bräunungsverlauf',
    rawLabel: 'Roh',
    goldenLabel: 'Goldbraun',
    burntLabel: 'Verbrannt',
    phEstimated: 'Gesch. Oberflächen-pH',
    timeSaved: 'Zeitersparnis',
    errorTempTooLow: 'Die Temperatur liegt unter 110 °C. Die Maillard-Reaktion benötigt mindestens 110 °C, um zu beginnen. Unterhalb dieser Schwelle findet nur Wasserverdunstung ohne nennenswerte Bräunung statt.',
    errorWeightTooLow: 'Das Lebensmittelgewicht muss größer als 0 g sein.',
    footerTemplate: '<span class="mr-footer-stat"><strong>{weight}</strong><small>{wunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">bei <strong>{temp}</strong><small>{tunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{soda}</strong><small>{sunit}</small> Natron</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">x<strong>{multiplier}</strong> Geschwindigkeit</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{timeSaved}</strong>% gespart</span>',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Maillard-Reaktions-Optimierer: Die Wissenschaft der Bräunung meistern',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Maillard-Reaktion ist der heilige Gral der herzhaften Küche. Sie erzeugt die tiefen, komplexen Aromen von scharf gebratenem Steak, goldener Brotkruste und karamellisierten Zwiebeln. Benannt nach dem französischen Chemiker Louis-Camille Maillard, produziert diese Reaktion zwischen Aminosäuren und reduzierenden Zuckern Hunderte von Aromastoffen. Durch Manipulation des pH-Werts mit Natron können Sie die Bräunungsgeschwindigkeit <strong>verdoppeln oder verdreifachen</strong>, ohne zu verbrennen. Dieser Rechner zeigt Ihnen genau, wie viel Sie verwenden sollten, und warnt Sie, bevor Sie in den seifigen Bereich geraten.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '~140 °C', label: 'Maillard-Aktivierungstemperatur', icon: 'mdi:thermometer' },
        { value: '2-3x', label: 'Geschwindigkeitszuwachs bei pH 8', icon: 'mdi:speedometer' },
        { value: '1,5 g/kg', label: 'Maximal sicheres Natron', icon: 'mdi:scale' },
        { value: 'pH 8,5', label: 'Seifengeschmack-Schwelle', icon: 'mdi:alert-circle' },
      ],
    },
    {
      type: 'title',
      text: 'Natron-Dosierungstabelle nach Lebensmittelgewicht',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nutzen Sie diese Referenztabelle, um schnell die empfohlenen und maximalen Natronmengen für gängige Lebensmittelgewichte zu ermitteln. Die empfohlene Menge ist <strong>die Hälfte des sicheren Maximums</strong> und bietet eine spürbare Bräunungsbeschleunigung bei minimalem Geschmacksrisiko.',
    },
    {
      type: 'table',
      headers: ['Lebensmittelgewicht', 'Empfohlen (g)', 'Sicheres Max. (g)', 'Gesch. pH', 'Geschwindigkeitsschub'],
      rows: [
        ['250 g (1 Zwiebel)', '0,19 g', '0,38 g', '6,5', 'x1,2'],
        ['500 g (2 Zwiebeln)', '0,38 g', '0,75 g', '6,5', 'x1,2'],
        ['750 g (3 Zwiebeln)', '0,56 g', '1,13 g', '6,5', 'x1,2'],
        ['1000 g (1 kg)', '0,75 g', '1,50 g', '7,0', 'x1,6'],
        ['1500 g', '1,13 g', '2,25 g', '7,0', 'x1,6'],
        ['2000 g', '1,50 g', '3,00 g', '7,0', 'x2,0'],
        ['3000 g', '2,25 g', '4,50 g', '7,0', 'x2,0'],
        ['5000 g', '3,75 g', '7,50 g', '7,0', 'x2,0'],
      ],
    },
    {
      type: 'title',
      text: 'Oberflächen-pH-Wert und seine Auswirkung auf die Bräunung verstehen',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Neutraler pH (6,0)',
          icon: 'mdi:water',
          description: 'Der natürliche pH-Wert der meisten rohen Fleisch- und Gemüsesorten. Die Maillard-Reaktion läuft mit Basisgeschwindigkeit ab.',
          highlight: false,
          points: ['Reaktionsgeschwindigkeit: x1,0 (Basis)', 'Völlig natürlich, keine Zusätze', 'Ideal für: Puristen, traditionelle Methoden', 'Langsamere Bräunung, mehr Zeit zur Kontrolle des Garzustands'],
        },
        {
          title: 'Leicht alkalisch (pH 7,0 bis 7,5)',
          icon: 'mdi:flask-round-bottom',
          description: 'Wird mit der empfohlenen Natronmenge erreicht. Spürbare Geschwindigkeitszunahme ohne Geschmacksbeeinträchtigung.',
          highlight: true,
          points: ['Reaktionsgeschwindigkeit: x1,5-2,0', '½ TL pro kg (ca. 0,75 g)', 'Ideal für: karamellisierte Zwiebeln, Ofengemüse', 'Der Sweet Spot für die meisten Hobbyköche'],
        },
        {
          title: 'Stark alkalisch (pH 8,0 bis 8,5)',
          icon: 'mdi:alert',
          description: 'Maximale praktische Alkalinität, bevor Geschmacksfehler auftreten. Verdoppelt die Bräunungsgeschwindigkeit, erfordert jedoch sorgfältige Überwachung.',
          highlight: false,
          points: ['Reaktionsgeschwindigkeit: x2,0-3,0', '1 TL pro kg (ca. 1,5 g)', 'Ideal für: dunkle Brezelkrusten, extreme Karamellisierung', 'Vor dem Servieren probieren - grenzwertig seifig'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Temperaturzonen und was sie für die Bräunung bedeuten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Temperatur ist die andere entscheidende Variable für die Maillard-Reaktion. Jede Zone liefert grundlegend unterschiedliche Ergebnisse. Das Verständnis dieser Schwellenwerte hilft Ihnen, die richtige Hitzestufe für Ihr Kochziel zu wählen.',
    },
    {
      type: 'table',
      headers: ['Zone', 'Temperaturbereich', 'Was passiert', 'Ideal für'],
      rows: [
        ['Verdunstung', 'Unter 110 °C', 'Wasser verdunstet, keine Bräunung', 'Sous-vide, Pochieren, Dämpfen'],
        ['Langsame Bräunung', '110-139 °C', 'Maillard beginnt langsam, sanfte Farbentwicklung', 'Langsam geröstete Tomaten, Niedertemperatur-Dörrung'],
        ['Optimale Zone', '140-180 °C', 'Maximale Bräunungsgeschwindigkeit ohne Verbrennen', 'Scharf anbraten, Braten, Frittieren, Backen'],
        ['Pyrolyse', 'Über 180 °C', 'Verbrennung beginnt, bittere stechende Verbindungen entstehen', 'Schnelles Ankohlen als Aromaakzent (sparsam verwenden)'],
      ],
    },
    {
      type: 'title',
      text: 'Häufige Maillard-Fehler und wie man sie behebt',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Zu viel Natron hinzufügen',
      html: 'Mehr ist nicht besser bei Natron. Mehr als 1,5 g pro Kilogramm Lebensmittel führen zu einem metallischen, seifigen oder chemischen Nachgeschmack. Die durch übermäßige Alkalinität erzeugten Aromastoffe sind nicht dasselbe wie die reichhaltigen, herzhaften Noten einer ordentlichen Maillard-Bräunung. <strong>Halten Sie sich an die vom Rechner angezeigte empfohlene Menge.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Bei zu niedriger Temperatur kochen',
      html: 'Unter 110 °C dämpfen oder dörren Sie Ihr Lebensmittel im Grunde nur - Sie bräunen es nicht. Die Maillard-Reaktion hat eine Mindestaktivierungstemperatur. Wenn Sie tiefe, komplexe Aromen wünschen, <strong>muss die Oberfläche des Lebensmittels mindestens 140 °C erreichen.</strong> Verwenden Sie eine Hochtemperatur-Kochmethode wie scharfes Anbraten, Grillen oder Braten bei über 180 °C Ofentemperatur.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Feuchtigkeit ignorieren',
      html: 'Wasser ist der Feind der Maillard-Reaktion. Nasse Oberflächen können 100 °C erst überschreiten, wenn das Wasser verdunstet ist. <strong>Tupfen Sie das Lebensmittel immer vollständig trocken</strong>, bevor Sie es scharf anbraten. Natron hilft, weil es auch die Verdunstung von Oberflächenwasser beschleunigt, indem es Zellwände aufbricht, aber es kann sichtbar nasses Lebensmittel nicht ausgleichen. Trockene Oberflächen = bessere Bräunung.',
    },
    {
      type: 'title',
      text: 'Profitipps für perfekte Bräunung',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Die Natron Aufschlämmungstechnik',
      html: 'Streuen Sie trockenes Natron niemals direkt auf das Lebensmittel - es verteilt sich nicht gleichmäßig. Lösen Sie die abgemessene Menge in 1-2 Esslöffeln warmem Wasser auf, dann pinseln oder vermischen Sie die Aufschlämmung mit dem Lebensmittel. Dies gewährleistet eine gleichmäßige Alkalinität auf der gesamten Oberfläche für eine einheitliche, konsistente Bräunung.',
    },
    {
      type: 'tip',
      title: 'Natron mit Trockenpökeln kombinieren',
      html: 'Natron und Salz wirken synergistisch. Pökeln Sie Ihr Fleisch 1-24 Stunden vor dem Kochen trocken mit Salz, dann tragen Sie die Natron-Aufschlämmung kurz vor dem Kontakt mit der Hitze auf. Das Salz zieht Proteine heraus, die an der Maillard-Reaktion teilnehmen, während das Natron sie beschleunigt. Diese Kombination erzeugt die tiefste, reichhaltigste Kruste.',
    },
    {
      type: 'tip',
      title: 'Zwiebel Karamellisierungs Trick',
      html: 'Eine Prise Natron (0,3 g pro große Zwiebel) kann die Karamellisierungszeit von 45 Minuten auf 20 Minuten reduzieren. Die alkalische Umgebung bricht die Zellwände der Zwiebel schneller auf und setzt Zucker und Aminosäuren frei, die die Maillard-Reaktion antreiben. Aber seien Sie präzise - zu viel Natron verwandelt Zwiebeln in Brei mit einem chemischen Nachgeschmack.',
    },
    {
      type: 'title',
      text: 'Glossar der wichtigsten Bräunungsbegriffe',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Maillard-Reaktion', definition: 'Eine nicht-enzymatische chemische Reaktion zwischen Aminosäuren und reduzierenden Zuckern, die die braune Farbe und die komplexen herzhaften Aromen in gekochten Lebensmitteln erzeugt. Sie tritt oberhalb von 110 °C auf und unterscheidet sich von der Karamellisierung.' },
        { term: 'Pyrolyse', definition: 'Die thermische Zersetzung von organischem Material bei hohen Temperaturen (über 180 °C). Anders als die Maillard-Bräunung erzeugt die Pyrolyse bittere, stechende und manchmal krebserregende Verbindungen. Sie tritt auf, wenn Lebensmittel verbrennen.' },
        { term: 'pH-Wert', definition: 'Eine Skala von 0 bis 14, die Säure (niedrig) oder Alkalinität (hoch) misst. Neutral ist 7. Die meisten rohen Lebensmittel liegen zwischen pH 5,5 und 6,5. Natron erhöht den pH-Wert auf alkalische Werte und beschleunigt die Maillard-Reaktion.' },
        { term: 'Natriumhydrogencarbonat', definition: 'Natron - ein weißes kristallines Pulver (NaHCO₃), das als milde Base wirkt. Beim Kochen erhöht es den Oberflächen-pH-Wert, beschleunigt die Bräunung, macht Fleisch zarter und hilft Gemüse, während des Kochens die Farbe zu behalten.' },
        { term: 'Alkalinität', definition: 'Die Fähigkeit einer Lösung, Säuren zu neutralisieren. Im Kontext der Maillard-Beschleunigung bezieht sich Alkalinität auf pH-Werte über 7,0. Übermäßige Alkalinität erzeugt bittere, seifige Fehlaromen.' },
        { term: 'Reaktionsgeschwindigkeitsmultiplikator', definition: 'Wie viel schneller die Maillard-Reaktion im Vergleich zur Basis (pH 6) abläuft. Ein Multiplikator von x2,0 bedeutet, dass die Bräunung doppelt so schnell erfolgt, was die für die gleiche Farbentwicklung benötigte Kochzeit effektiv halbiert.' },
        { term: 'Oberflächen-pH-Wert', definition: 'Der pH-Wert direkt an der Oberfläche des Lebensmittels, wo die Maillard-Reaktion stattfindet, nicht der pH-Wert im Inneren. Natron beeinflusst hauptsächlich den Oberflächen-pH-Wert, da es bei kurzen Kochzeiten nicht tief in das Lebensmittel eindringt.' },
      ],
    },
    {
      type: 'title',
      text: 'Kurzreferenz: Natron für gängige Lebensmittel',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Empfohlene Natronmengen für die Alltagsküche',
      items: [
        'Karamellisierte Zwiebeln (1 große): 0,3 g Natron - reduziert die Zeit von 45 auf ~20 Minuten',
        'Ofenkartoffeln (500 g): 0,4 g Natron - knusprigere, goldbraunere Oberfläche',
        'Scharf gebratenes Steak (250 g): 0,2 g Natron - dunklere Kruste in kürzerer Zeit',
        'Hähnchenflügel (1 kg): 0,75 g Natron - knusprigere Haut, schnellere Bräunung',
        'Brezelteig (500 g Mehl): 1,5 g Natron - tiefbraune Kruste nach alkalischem Tauchbad',
        'Ofengemüse (1 kg gemischt): 0,75 g Natron - gleichmäßigere Karamellisierung',
      ],
    },
    {
      type: 'paragraph',
      html: 'Jedes Lebensmittel hat je nach natürlichem pH-Wert und Feuchtigkeitsgehalt einen anderen idealen Alkalinitätsgrad. Dieser Rechner nimmt Ihnen die Rätselraterei ab - geben Sie das genaue Gewicht Ihres Lebensmittels und die Temperatur ein, und er liefert Ihnen die präzise Natronmenge für jedes Mal perfekte Bräunung.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
