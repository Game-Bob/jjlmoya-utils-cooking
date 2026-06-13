import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Öl Rauchpunkt Tracker: Lebensdauer und Zersetzungsschätzung für Frittieröl';
const description = 'Überwachen Sie die Qualität von Frittieröl und schätzen Sie die aktuelle Rauchpunktabsenkung ein. Verfolgen Sie Nutzungen, Temperaturen und Lebensmittelarten, um die schädliche Anreicherung polarer Verbindungen zu vermeiden.';

const faq = [
  {
    question: 'Warum sinkt der Rauchpunkt von Frittieröl mit der Zeit?',
    answer: 'Jedes Mal, wenn Öl auf Frittiertemperaturen erhitzt wird, zersetzen thermischer Abbau, Hydrolyse und Oxidation die Triglyceride in freie Fettsäuren (FFS), Monoacylglycerine und Diacylglycerine. Diese Abbauprodukte haben einen viel niedrigeren Siede- und Rauchpunkt als intakte Triglyceride, wodurch das Öl bei wiederholtem Gebrauch bereits bei niedrigeren Temperaturen zu rauchen beginnt.',
  },
  {
    question: 'Was sind polare Verbindungen und warum sind sie reguliert?',
    answer: 'Polare Verbindungen (TPC) sind die beim Frittieren entstehenden Abbauprodukte. Wenn sie 25 % des Ölgewichts überschreiten, gilt das Öl als zersetzt, oxidiert und gesundheitsschädlich  -  es verursacht Fehlaromen und potenzielle Herz-Kreislauf-Risiken. In vielen europäischen Ländern ist es gesetzlich vorgeschrieben, Frittieröl zu entsorgen, sobald der TPC-Wert 25 % übersteigt.',
  },
  {
    question: 'Wie beeinflussen Panade oder Mehl den Ölabbau?',
    answer: 'Panaden, Backteige und loses Mehl setzen Lebensmittelpartikel im heißen Öl frei. Diese Partikel verkohlen bei Temperaturen über 180 Grad Celsius schnell, setzen freie Fettsäuren frei und wirken als Katalysatoren, die den thermischen Abbau beschleunigen. Saubere Stärken wie Kartoffeln bauen Öl deutlich langsamer ab.',
  },
  {
    question: 'Was ist die sichere Grenze für die Wiederverwendung von Öl?',
    answer: 'Als Faustregel können raffinierte Hochtemperaturöle wie Raps- oder Erdnussöl unter sauberen Bedingungen 5- bis 8-mal wiederverwendet werden. Unraffinierte Öle oder Öle, die Temperaturen über 190 Grad Celsius oder panierten Lebensmitteln ausgesetzt waren, sollten jedoch nach 1 bis 3 Verwendungen entsorgt werden.',
  },
];

const howTo = [
  {
    name: 'Frittieröl-Typ auswählen',
    text: 'Wählen Sie Ihr Öl aus der Datenbankliste. Raffinierte Hochtemperaturöle haben einen höheren Ausgangsrauchpunkt als unraffinierte Optionen.',
  },
  {
    name: 'Frittierzyklen verfolgen',
    text: 'Geben Sie die Gesamtzahl der Frittiervorgänge ein, die die aktuelle Ölcharge bereits durchlaufen hat.',
  },
  {
    name: 'Frittiertemperatur eingeben',
    text: 'Passen Sie den Schieberegler an die Durchschnittstemperatur Ihrer Frittiervorgänge an. Temperaturen über 180 Grad Celsius beschleunigen den Abbau.',
  },
  {
    name: 'Art der Lebensmittelbeschichtung bestimmen',
    text: 'Geben Sie an, ob Sie saubere Stärken oder mehlierte/panierte Lebensmittel frittieren, die karbonisierte Rückstände hinterlassen.',
  },
  {
    name: 'Rauchpunkt und Entsorgungsstatus prüfen',
    text: 'Überprüfen Sie den abgesenkten Rauchpunkt und die Entsorgungsanzeige. Entsorgen Sie das Öl sofort, wenn die Ölqualität den kritischen Bereich erreicht.',
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent = {
  slug: 'oel-rauchpunkt-tracker',
  title: 'Öl Rauchpunkt Tracker',
  description: 'Überwachen Sie die Qualität von Frittieröl und schätzen Sie die aktuelle Rauchpunktabsenkung ein. Verfolgen Sie Nutzungen, Temperaturen und Lebensmittelarten, um die schädliche Anreicherung polarer Verbindungen zu vermeiden.',
  faqTitle: 'Häufig Gestellte Fragen',
  ui: {
    oilPresetLabel: 'Frittieröl-Typ',
    presetAvocadoRefined: 'Avocadoöl (Raffiniert)',
    presetSunflowerRefined: 'Sonnenblumenöl (Raffiniert)',
    presetPeanutRefined: 'Erdnussöl (Raffiniert)',
    presetCanolaRefined: 'Rapsöl (Raffiniert)',
    presetOliveEV: 'Natives Olivenöl Extra',
    presetOlivePomace: 'Oliventresteröl',
    presetCoconutUnrefined: 'Kokosöl (Unraffiniert)',
    presetSunflowerUnrefined: 'Sonnenblumenöl (Unraffiniert)',
    usesLabel: 'Frittierzyklen (Verwendungen)',
    tempLabel: 'Frittiertemperatur',
    foodTypeLabel: 'Lebensmittelzubereitung / Panade',
    optionStarch: 'Saubere Stärke (Kartoffeln, Pommes Frites)',
    optionBreading: 'Mehlierte, Backteig- oder Panierte Lebensmittel',
    baseSmokePointLabel: 'Ausgangsrauchpunkt',
    currentSmokePointLabel: 'Abgesenkter Rauchpunkt',
    polarCompoundsLabel: 'Polare Verbindungen (TPC)',
    polymerizationLabel: 'Öl-Polymerisationszustand',
    statusLabel: 'Öl-Sicherheitsprofil',
    statusGood: 'SICHER ZUR WIEDERVERWENDUNG',
    statusCaution: 'VORSICHT - BALD FILTERN',
    statusDiscard: 'SOFORT ENTSORGEN',
    adviceGood: 'Die Öleigenschaften sind stabil. Frittieren Sie weiter, aber filtern Sie nach dem Abkühlen restliche Lebensmittelpartikel heraus.',
    adviceCaution: 'Der Abbau hat begonnen. Der Rauchpunkt ist gesunken. Wir empfehlen, zu filtern und nur noch einmal zu verwenden.',
    adviceDiscard: 'Kritischer Abbau erreicht. Hohe Konzentration polarer Verbindungen. Entsorgen, um Ranzigkeit und Gesundheitsrisiken zu vermeiden.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Die Chemie des Frittierens: Warum Öle sich zersetzen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Frittieren ist eine der chemisch intensivsten Kochtechniken. Wenn Lebensmittel bei hohen Temperaturen (typischerweise zwischen 160 und 190 Grad Celsius) in Öl eingetaucht werden, ist das Öl gleichzeitig Hitze, Feuchtigkeit aus den Lebensmitteln und Sauerstoff aus der Luft ausgesetzt. Dies löst drei verschiedene chemische Reaktionen aus: Hydrolyse (Wasser spaltet Esterbindungen), Oxidation (Sauerstoff erzeugt Hydroperoxide) und Polymerisation (abgebaute Moleküle verbinden sich zu dicken, zähflüssigen Ketten). Mit fortschreitenden Reaktionen steigt die Konzentration der gesamten polaren Verbindungen (TPC), und die Temperatur, bei der das Öl zu zerfallen und zu rauchen beginnt, sinkt erheblich.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '25 % TPC',
          label: 'Gesetzliche Entsorgungsgrenze',
          icon: 'mdi:alert-octagon',
        },
        {
          value: '180 °C',
          label: 'Kritische Temperaturschwelle',
          icon: 'mdi:thermometer-alert',
        },
        {
          value: '2,2x',
          label: 'Abbaurate mit Panade',
          icon: 'mdi:chart-timeline-variant',
        },
        {
          value: 'FFS',
          label: 'Ursache: Freie Fettsäuren',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: 'Polare Verbindungen und Gesundheitsvorschriften',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die gesamten polaren Verbindungen (TPC) dienen als internationaler Standard zur Messung des Abbaugrads von Frittierfetten. In professionellen Küchen ist die Verwendung von Öl mit einer TPC-Konzentration von über 25 % in mehreren Ländern aus Sicherheitsgründen gesetzlich verboten. Diese polaren Verbindungen wirken als Absorptionshemmer, verringern die Kocheffizienz und beeinträchtigen die Knusprigkeit der frittierten Kruste. Noch wichtiger: Der regelmäßige Verzehr von oxidiertem Öl trägt zur Aufnahme freier Radikale und toxischer Verbindungen bei, die mit Herz-Kreislauf-Problemen in Verbindung gebracht werden.',
    },
    {
      type: 'title',
      text: 'Öltypen im Vergleich: Ausgangsrauchpunkte',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Raffinierte Öle (Hochtemperatur)',
          icon: 'mdi:shield-check',
          description: 'Öle, die behandelt wurden, um flüchtige Verbindungen, freie Fettsäuren und Verunreinigungen zu entfernen. Sie haben außergewöhnlich hohe Ausgangsrauchpunkte.',
          points: [
            'Raffiniertes Avocadoöl: 270 °C / 518 °F',
            'Raffiniertes Sonnenblumenöl: 232 °C / 450 °F',
            'Raffiniertes Erdnussöl: 232 °C / 450 °F',
            'Hohe Beständigkeit gegen anfänglichen Abbau',
          ],
        },
        {
          title: 'Unraffinierte Öle (Niedrigtemperatur / Aromatisch)',
          icon: 'mdi:leaf',
          description: 'Kaltgepresste oder native Öle mit hohem Gehalt an natürlichen Elementen, Mineralien und freien Fettsäuren.',
          highlight: true,
          points: [
            'Natives Olivenöl Extra: 190 °C / 374 °F',
            'Unraffiniertes Kokosöl: 177 °C / 350 °F',
            'Unraffiniertes Sonnenblumenöl: 107 °C / 225 °F',
            'Zersetzt sich unter Hitze extrem schnell',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Referenztabelle: Rauchpunkt und Maximale Wiederverwendung von Frittieröl',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Ölsorte', 'Ausgangsrauchpunkt (°C)', 'Ausgangsrauchpunkt (°F)', 'Zustand / Verarbeitung', 'Empfohlene Max. Verwendungen'],
      rows: [
        ['Avocadoöl (Raffiniert)', '270 °C', '518 °F', 'Raffiniert', '10 bis 12 Verwendungen'],
        ['Oliventresteröl', '238 °C', '460 °F', 'Raffiniert', '8 bis 10 Verwendungen'],
        ['Sonnenblumenöl (Raffiniert)', '232 °C', '450 °F', 'Raffiniert', '6 bis 8 Verwendungen'],
        ['Erdnussöl (Raffiniert)', '232 °C', '450 °F', 'Raffiniert', '6 bis 8 Verwendungen'],
        ['Rapsöl (Raffiniert)', '204 °C', '400 °F', 'Raffiniert', '5 bis 7 Verwendungen'],
        ['Natives Olivenöl Extra', '190 °C', '374 °F', 'Kaltgepresst', '2 bis 3 Verwendungen'],
        ['Kokosöl (Unraffiniert)', '177 °C', '350 °F', 'Unraffiniert', '1 bis 2 Verwendungen'],
        ['Sonnenblumenöl (Unraffiniert)', '107 °C', '225 °F', 'Unraffiniert', 'Nicht zum Frittieren verwenden'],
      ],
    },
    {
      type: 'title',
      text: 'Kritische Warnsignale für zersetztes Öl',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gefahr: Wenn Frittieröl giftig wird',
      html: 'Verwenden Sie das Öl nicht weiter, wenn Sie eines der folgenden Symptome bemerken: <strong>ranziger oder seifiger Geruch</strong>, eine dunkle und trübe Farbe oder <strong>übermäßige Schaumbildung</strong> um die Lebensmittel herum. Wenn das Öl bei normalen Kochtemperaturen (170-180 °C) zu rauchen beginnt, ist der Rauchpunkt aufgrund einer extremen Anreicherung freier Fettsäuren (FFS) drastisch gesunken. Das Kochen mit zersetztem Öl überträgt giftige polare Verbindungen und krebserregende Elemente auf Ihre Lebensmittel und schadet sowohl Geschmack als auch Gesundheit.',
    },
    {
      type: 'title',
      text: 'So verlängern Sie die Qualität von Frittieröl',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Karbonisierte Rückstände sofort herausfiltern',
      html: 'Das Frittieren von panierten oder mehlierten Lebensmitteln hinterlässt Mikropartikel, die sich am Boden der Fritteuse absetzen. Diese Partikel verkohlen während des Kochens weiter und wirken als Katalysatoren, die den Ölabbau beschleunigen. Um diesen Prozess zu verlangsamen, schöpfen Sie während des Frittierens stets die Oberfläche ab und <strong>filtern Sie das abgekühlte Öl</strong> nach jeder Frittiersession durch ein feines Sieb, ein Passiertuch oder einen Kaffeefilter. Bewahren Sie gefiltertes Öl in einem verschlossenen Glasbehälter an einem dunklen, kühlen Ort auf.',
    },
    {
      type: 'title',
      text: 'Bewährte Verfahren für das Frittieren',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Lebensmitteloberflächen gründlich trocknen</strong> - Überschüssige Feuchtigkeit löst eine schnelle Hydrolyse aus und zersetzt das Öl in freie Fettsäuren.',
        '<strong>Vor dem Frittieren nicht salzen</strong> - Salz wirkt als Katalysator, der die Öloxidation beschleunigt; würzen Sie Lebensmittel sofort nach dem Herausnehmen aus dem heißen Öl.',
        '<strong>Optimale Temperaturen einhalten</strong> - Bleiben Sie zwischen 170 °C und 180 °C. Höhere Temperaturen beschleunigen den thermischen Abbau, niedrigere führen dazu, dass Lebensmittel überschüssiges Fett aufnehmen.',
        '<strong>Kein frisches Öl nachfüllen</strong> - Das Mischen von frischem Öl mit zersetztem Öl beschleunigt den Abbau des neuen Öls, anstatt es wiederherzustellen.',
      ],
    },
    {
      type: 'title',
      text: 'Glossar: Frittieren und Lipidabbau',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Rauchpunkt',
          definition: 'Die Temperatur, bei der ein Öl oder Fett beginnt, sich kontinuierlich zu zersetzen und sichtbaren bläulichen Rauch zu erzeugen, wobei Acrolein freigesetzt wird.',
        },
        {
          term: 'Gesamte Polare Verbindungen (TPC)',
          definition: 'Der weltweite Standardindikator für den Ölabbau, der den Gesamtgewichtsanteil an oxidierten Verbindungen, FFS und Polymeren darstellt.',
        },
        {
          term: 'Hydrolyse',
          definition: 'Eine chemische Reaktion, bei der Wassermoleküle Triglyceride in freie Fettsäuren und Glycerin spalten. Ausgelöst durch Lebensmittelfeuchtigkeit.',
        },
        {
          term: 'Polymerisation',
          definition: 'Der Prozess, bei dem sich hitzegeschädigte Ölmoleküle zu großen makromolekularen Strukturen verbinden, wodurch die Ölviskosität steigt.',
        },
        {
          term: 'Freie Fettsäuren (FFS)',
          definition: 'Carbonsäuren, die bei der Hydrolyse aus Triglyceriden freigesetzt werden. Sie senken direkt den Ausgangsrauchpunkt des Fettes.',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
