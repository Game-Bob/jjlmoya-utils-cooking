import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Natron und Backpulver Rechner: Saeureneutralisator fuer Triebmittel";
const description = "Berechne das exakte Verhaeltnis von Natron und Backpulver fuer dein Rezept. Neutralisiere saure Zutaten wie Buttermilch und Joghurt, vermeide metallischen Beigeschmack und erziele jedes Mal ein perfektes Aufgehen.";
const faq = [
  {
    question: "Warum braucht man Saeure, wenn man Backpulver durch Natron ersetzt?",
    answer: "Natron ist eine reine Base. Es benoetigt eine Saeurequelle, um aktiviert zu werden und Kohlendioxid freizusetzen. Ohne ausreichend Saeure reagiert das Natron nicht vollstaendig und hinterlaesst einen bitteren, metallischen Geschmack im Gebaeck."
  },
  {
    question: "Was ist der Unterschied zwischen Natron und Backpulver?",
    answer: "Natron besteht zu 100% aus Natriumhydrogencarbonat, einer Base. Backpulver ist ein vollstaendiges Triebmittel, das Natron plus ein trockenes Saeuerungsmittel (wie Weinstein) und Staerke enthaelt. Backpulver neutralisiert sich selbst."
  },
  {
    question: "Wie viel Backpulver entspricht 1 Teeloeffel Natron?",
    answer: "Natron ist etwa 3-4 Mal staerker als Backpulver. Um 1 Teeloeffel Natron zu ersetzen, benoetigst du etwa 3-4 Teeloeffel Backpulver. Allerdings fuegt dieser Ersatz auch Saeuresalze hinzu, die den Geschmack veraendern koennen, daher nutze am besten unseren Rechner fuer praezise Umrechnungen."
  },
  {
    question: "Warum schmeckt mein Kuchen seifig oder metallisch?",
    answer: "Ein seifiger oder metallischer Nachgeschmack ist das klassische Anzeichen fuer nicht reagiertes Natron. Wenn nicht genug Saeure im Teig ist, um das Natriumhydrogencarbonat vollstaendig zu neutralisieren, bleibt der alkalische Rueckstand nach dem Backen zurueck und verleiht diesen unangenehmen chemischen Geschmack. Nutze unseren Rechner fuer eine vollstaendige Neutralisation."
  },
  {
    question: "Kann ich Dutch-Process-Kakaopulver als Saeure verwenden?",
    answer: "Nein. Dutch-Process-Kakaopulver wurde mit einem Alkalisierungsmittel behandelt, um seine natuerliche Saeure zu reduzieren (pH ~7-8). Nur natuerliches Kakaopulver (pH ~5-6) ist sauer und neutralisiert Natron."
  },
  {
    question: "Wie beeinflusst Natron die Braeunung von Gebaeck?",
    answer: "Natron erhoeht den pH-Wert des Teigs und macht ihn alkalischer. Ein hoeherer pH-Wert beschleunigt die Maillard-Braeunungsreaktion, was zu dunkleren Krusten und tieferen Aromen bei Keksen und Kuchen fuehrt."
  }
];

const howTo = [
  {
    name: "Mehlgewicht eingeben",
    text: "Gib das Gesamtgewicht des Mehls in deinem Rezept in Gramm oder Unzen ein, um die benoetigte Triebkraft zu berechnen."
  },
  {
    name: "Saure Zutaten hinzufuegen",
    text: "Waehle die sauren Zutaten deines Rezepts (wie Buttermilch, Joghurt oder Zitronensaft) und gib ihre Gewichte ein."
  },
  {
    name: "pH-Gleichgewicht pruefen",
    text: "Beobachte die virtuelle pH-Waage. Eine ausgeglichene Waage zeigt optimale Neutralisation ohne metallischen Beigeschmack an."
  },
  {
    name: "Triebmittel abmessen",
    text: "Lies die empfohlene Menge Natron fuer die Neutralisation und den noetigen Backpulver-Booster ab, um das gewuenschte Aufgehen zu erreichen."
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
  slug: 'saeureneutralisator-triebmittel',
  title: 'Saeureneutralisator Triebmittel',
  description: 'Berechne das exakte Verhaeltnis von Natron und Backpulver fuer dein Rezept. Neutralisiere saure Zutaten wie Buttermilch und Joghurt, vermeide metallischen Beigeschmack und erziele jedes Mal ein perfektes Aufgehen.',
  faqTitle: 'Haeufig gestellte Fragen',
  ui: {
    title: "Saeureneutralisator Triebmittel",
    subtitle: "Praezise Stoechiometrie fuer perfektes Aufgehen und Aroma beim Backen",
    flourLabel: "Mehlgewicht",
    addAcidLabel: "Saure Zutat hinzufuegen",
    weightLabel: "Gewicht",
    removeButton: "Entfernen",
    bakingSodaNeeded: "Neutralisiertes Natron",
    requiredBakingPowder: "Ziel-Triebkraft",
    providedBakingPowderEquivalent: "Triebkraft aus Natron",
    boosterBakingPowder: "Extra Backpulver-Booster",
    resultsTitle: "Berechnete Triebmittel",
    statusBalanced: "Ausgeglichen",
    statusAcidic: "Saeureueberschuss",
    statusAlkaline: "Basenueberschuss",
    gramsUnit: "g",
    ouncesUnit: "oz",
    teaspoonsUnit: "TL",
    scaleBalanceTitle: "Virtuelle pH-Waage",
    acidListTitle: "Saure Zutaten",
    unitLabel: "Masssystem",
    metricUnit: "Metrisch (g)",
    imperialUnit: "Imperial (oz)",
    acid_buttermilk: "Buttermilch",
    acid_yogurt: "Joghurt",
    acid_sour_cream: "Sauerrahm",
    acid_honey: "Honig",
    acid_molasses: "Melasse",
    acid_cocoa: "Naturkakao-Pulver",
    acid_lemon_juice: "Zitronensaft",
    acid_vinegar: "Essig",
    stoichiometryBadge: "pH-Stoechiometrie",
    simulateSodaLabel: "Zugegebenes Natron simulieren",
    autoBalanceBtn: "Auto-Balance",
    sodaAddedLabel: "Zugegebenes Natron"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: 'Kernerkenntnisse fuer perfektes Aufgehen',
      items: [
        'Natron braucht Saeure zur Aktivierung; ohne sie schmeckt dein Gebaeck seifig und metallisch',
        'Backpulver neutralisiert sich selbst und liefert zusaetzliche Triebkraft als Booster',
        'Der Standard-Richtwert liegt bei 4% des Mehlgewichts in Backpulver-Aequivalent fuer gutes Aufgehen',
        'Nutze die Neutralisationstabelle unten, um deine sauren Zutaten der richtigen Natron-Menge zuzuordnen'
      ]
    },
    {
      type: 'title',
      text: 'Die Chemie chemischer Triebmittel beim Backen',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Chemische Lockerung basiert auf <strong>Saeure-Base-Neutralisationsreaktionen</strong>, die Kohlendioxid (CO2) erzeugen, das in der Teigmatrix eingeschlossen wird und das Gebaeck aufgehen laesst. Das richtige Verhaeltnis zwischen Natriumhydrogencarbonat (Natron) und sauren Zutaten ist entscheidend. <strong>Zu viel Natron</strong> fuehrt zu nicht reagierten alkalischen Rueckstaenden, die einen seifigen, metallischen Geschmack und gelbe Verfaerbungen verursachen. <strong>Zu viel Saeure</strong> kann zu einem dichten, flachen Gebaeck mit geringem Volumen fuehren.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '3-4x',
          label: 'Natron staerker als Backpulver',
          icon: 'mdi:flash'
        },
        {
          value: '4%',
          label: 'Ziel-Triebkraft (% des Mehlgewichts)',
          icon: 'mdi:target'
        },
        {
          value: '1/4 TL',
          label: 'Natron pro 120g Buttermilch/Joghurt',
          icon: 'mdi:spoon-sugar'
        },
        {
          value: '0,0125',
          label: 'Neutralisationsverhaeltnis (Milchsaeure)',
          icon: 'mdi:scale-balance'
        }
      ]
    },
    {
      type: 'title',
      text: 'Natron vs. Backpulver: Der vollstaendige Vergleich',
      level: 3
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Natron',
          icon: 'mdi:flask-outline',
          description: 'Reines Natriumhydrogencarbonat (NaHCO3). Eine starke alkalische Base, die externe Saeure zur Aktivierung und CO2-Produktion benoetigt.',
          points: [
            '3-4x staerker als Backpulver',
            'Braucht Saeure (Buttermilch, Joghurt, Zitronensaft) zum Reagieren',
            'Ueberschuss verursacht seifigen, metallischen Geschmack und gelbe Krume',
            'Erhoeht den pH-Wert; verstaerkt Maillard-Braeunung bei Keksen',
            'Einfach wirkend: setzt CO2 sofort beim Mischen frei'
          ]
        },
        {
          title: 'Backpulver',
          icon: 'mdi:flask-round-bottom-outline',
          description: 'Ein vollstaendiges Triebmittelsystem mit Natron + trockenen Saeuresalzen + Staerke. Selbstneutralisierend und zuverlaessig.',
          highlight: true,
          points: [
            'Enthaelt seine eigene Saeure (Monocalciumphosphat, SAP)',
            'Doppelt wirkend: setzt CO2 beim Mischen frei UND beim Erhitzen',
            'Kein metallischer Nachgeschmack; pH-Wert bereits ausgeglichen',
            'Schwaecher pro Gramm; 3-4x mehr noetig, um Natron-Kraft zu erreichen',
            'Ideal als Booster, wenn Natron allein nicht das ganze Mehl heben kann'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Saure Zutat', 'Standardgewicht', 'Neutralisiertes Natron', 'Neutralisationsverhaeltnis'],
      rows: [
        ['Buttermilch / Joghurt / Sauerrahm', '120g (1/2 Tasse)', '1,5g (1/4 TL)', '0,0125'],
        ['Zitronensaft / Essig', '15g (1 EL)', '1,5g (1/4 TL)', '0,1000'],
        ['Naturkakao-Pulver', '80g (1 Tasse)', '3,0g (1/2 TL)', '0,0375'],
        ['Honig', '340g (1 Tasse)', '3,0g (1/2 TL)', '0,0088'],
        ['Melasse', '328g (1 Tasse)', '3,0g (1/2 TL)', '0,0091']
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Fehlersuche: Ist dein Triebmittel aus dem Gleichgewicht?',
      badge: 'Schnell-Check',
      html: '<strong>Wenn dein Kuchen zusammengefallen ist:</strong> Zu viel Saeure oder insgesamt zu wenig Triebmittel; das CO2 ist entwichen, bevor die Struktur fest wurde.<br/><br/><strong>Wenn dein Kuchen dicht und flach ist:</strong> Zu viel Saeure ohne ausreichend Natron zur Neutralisation oder zu wenig Gesamt-Triebkraft fuer das Mehlgewicht.<br/><br/><strong>Wenn dein Kuchen seifig oder metallisch schmeckt:</strong> Ueberschuss an nicht reagiertem Natron; mehr saure Zutaten hinzufuegen oder das Natron reduzieren.<br/><br/><strong>Wenn dein Kuchen gelbe Flecken hat:</strong> Klassisches Zeichen fuer ungeloeste, nicht reagierte Natron-Klumpen; siebe das Natron naechstes Mal mit dem Mehl.'
    },
    {
      type: 'title',
      text: 'So bringst du Triebmittel ins Gleichgewicht und vermeidest metallischen Geschmack',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Fuer optimales Aroma und Aufgehen folge diesem Ablauf: <strong>Zuerst</strong> bestimme die Natron-Menge, die noetig ist, um die sauren Bestandteile deines Teigs mit der obigen Tabelle vollstaendig zu neutralisieren. <strong>Dann</strong> rechne dieses Natron in sein Backpulver-Aequivalent um (multipliziere mit 4) und vergleiche es mit der benoetigten Gesamt-Triebkraft fuer dein Mehl; in der Regel <strong>4% des Mehlgewichts</strong> in Backpulver-Aequivalent. <strong>Bei einer Unterdeckung</strong> fuege die restliche Triebkraft in Form von neutralem Backpulver als Booster hinzu. Unser Rechner erledigt all das automatisch.'
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        'Ersetze Natron niemals 1:1 durch Backpulver; Natron ist 3-4x staerker und braucht Saeure',
        'Siebe Natron immer mit den trockenen Zutaten, um bittere Klumpen zu vermeiden',
        'Dutch-Process-Kakao ist NICHT sauer; verwende Naturkakao-Pulver, wenn du Kakao als Saeurequelle nutzt',
        'Honig und Melasse sind schwach sauer; sie brauchen viel weniger Natron pro Gramm als Zitronensaft',
        'Arbeite nach dem Mischen zuegig: chemische Triebmittel beginnen sofort bei Kontakt mit Fluessigkeit zu reagieren'
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Neutralisationsverhaeltnis',
          definition: 'Das Verhaeltnis der Natron-Menge, die benoetigt wird, um ein bestimmtes Gewicht einer sauren Zutat vollstaendig zu neutralisieren. Niedrigere Verhaeltnisse bedeuten, dass die Zutat pro Gramm weniger sauer ist.'
        },
        {
          term: 'Triebkraft',
          definition: 'Die Gesamtmenge an CO2-Gas, die ein Triebmittel erzeugen kann. Wird in Backpulver-Aequivalenten gemessen, wobei 4% des Mehlgewichts der Standard-Richtwert fuer Kuchen und Muffins ist.'
        },
        {
          term: 'Doppelt wirkendes Backpulver',
          definition: 'Backpulver, das CO2 in zwei Stufen freisetzt: zuerst beim Mischen mit Fluessigkeit bei Raumtemperatur und dann beim Erhitzen im Ofen. Sorgt fuer ein zuverlaessigeres Aufgehen.'
        },
        {
          term: 'Maillard-Reaktion',
          definition: 'Eine chemische Reaktion zwischen Aminosaeuren und reduzierenden Zuckern, die Lebensmittel braeunt und komplexe Aromen erzeugt. Wird durch hoeheren pH-Wert durch ueberschuessiges Natron verstaerkt; erwuenscht bei Keksen, unerwuenscht bei feinen Kuchen.'
        },
        {
          term: 'pH-Gleichgewicht',
          definition: 'Das Mass fuer Saeure oder Alkalitaet des Teigs. Ein neutraler pH-Wert (etwa 7) bedeutet, dass das gesamte Natron mit der gesamten Saeure reagiert hat. Leicht alkalisch beguenstigt Braeunung; sauer beguenstigt Zartheit.'
        }
      ]
    },
    {
      type: 'tip',
      html: '<strong>Braeunung und pH-Wert:</strong> Waehrend vollstaendige Neutralisation fuer den Geschmack entscheidend ist, kann ein leicht alkalischer Teig (durch einen winzigen Natron-Ueberschuss) bei Schokoladenkuchen und Keksen erwuenscht sein. Ein hoeherer pH-Wert verstaerkt die Maillard-Braeunung und sorgt fuer dunklere Farben, knoesprige Raender und tiefere Karamellnoten. Bei feinen Vanillekuchen solltest du eine exakte Neutralisation anstreben, um einen reinen, klaren Geschmack zu bewahren.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
