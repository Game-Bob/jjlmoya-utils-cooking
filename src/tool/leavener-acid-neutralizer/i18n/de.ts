import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Natron und Backpulver Rechner: Säureneutralisator für Triebmittel";
const description = "Berechne das exakte Verhältnis von Natron und Backpulver für dein Rezept. Neutralisiere saure Zutaten wie Buttermilch und Joghurt, vermeide metallischen Beigeschmack und erziele jedes Mal ein perfektes Aufgehen.";
const faq = [
  {
    question: "Warum braucht man Säure, wenn man Backpulver durch Natron ersetzt?",
    answer: "Natron ist eine reine Base. Es benötigt eine Säurequelle, um aktiviert zu werden und Kohlendioxid freizusetzen. Ohne ausreichend Säure reagiert das Natron nicht vollständig und hinterlässt einen bitteren, metallischen Geschmack im Gebäck."
  },
  {
    question: "Was ist der Unterschied zwischen Natron und Backpulver?",
    answer: "Natron besteht zu 100% aus Natriumhydrogencarbonat, einer Base. Backpulver ist ein vollständiges Triebmittel, das Natron plus ein trockenes Säuerungsmittel (wie Weinstein) und Stärke enthält. Backpulver neutralisiert sich selbst."
  },
  {
    question: "Wie viel Backpulver entspricht 1 Teelöffel Natron?",
    answer: "Natron ist etwa 3-4 Mal stärker als Backpulver. Um 1 Teelöffel Natron zu ersetzen, benötigst du etwa 3-4 Teelöffel Backpulver. Allerdings fügt dieser Ersatz auch Säuresalze hinzu, die den Geschmack verändern können, daher nutze am besten unseren Rechner für präzise Umrechnungen."
  },
  {
    question: "Warum schmeckt mein Kuchen seifig oder metallisch?",
    answer: "Ein seifiger oder metallischer Nachgeschmack ist das klassische Anzeichen für nicht reagiertes Natron. Wenn nicht genug Säure im Teig is, um das Natriumhydrogencarbonat vollständig zu neutralisieren, bleibt der alkalische Rückstand nach dem Backen zurück und verleiht diesen unangenehmen chemischen Geschmack. Nutze unseren Rechner für eine vollständige Neutralisation."
  },
  {
    question: "Kann ich Dutch-Process-Kakaopulver als Säure verwenden?",
    answer: "Nein. Dutch-Process-Kakaopulver wurde mit einem Alkalisierungsmittel behandelt, um seine natürliche Säure zu reduzieren (pH ~7-8). Nur natürliches Kakaopulver (pH ~5-6) ist sauer und neutralisiert Natron."
  },
  {
    question: "Wie beeinflusst Natron die Bräunung von Gebäck?",
    answer: "Natron erhöht den pH-Wert des Teigs und macht ihn alkalischer. Ein höherer pH-Wert beschleunigt die Maillard-Bräunungsreaktion, was zu dunkleren Krusten und tieferen Aromen bei Keksen und Kuchen führt."
  }
];

const howTo = [
  {
    name: "Mehlgewicht eingeben",
    text: "Gib das Gesamtgewicht des Mehls in deinem Rezept in Gramm oder Unzen ein, um die benötigte Triebkraft zu berechnen."
  },
  {
    name: "Saure Zutaten hinzufügen",
    text: "Wähle die sauren Zutaten deines Rezepts (wie Buttermilch, Joghurt oder Zitronensaft) und gib ihre Gewichte ein."
  },
  {
    name: "pH-Gleichgewicht prüfen",
    text: "Beobachte die virtuelle pH-Waage. Eine ausgeglichene Waage zeigt optimale Neutralisation ohne metallischen Beigeschmack an."
  },
  {
    name: "Triebmittel abmessen",
    text: "Lies die empfohlene Menge Natron für die Neutralisation und den nötigen Backpulver-Booster ab, um das gewünschte Aufgehen zu erreichen."
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
  title: 'Säureneutralisator Triebmittel',
  description: 'Berechne das exakte Verhältnis von Natron und Backpulver für dein Rezept. Neutralisiere saure Zutaten wie Buttermilch und Joghurt, vermeide metallischen Beigeschmack und erziele jedes Mal ein perfektes Aufgehen.',
  faqTitle: 'Häufig gestellte Fragen',
  ui: {
    title: "Säureneutralisator Triebmittel",
    subtitle: "Präzise Stöchiometrie für perfektes Aufgehen und Aroma beim Backen",
    flourLabel: "Mehlgewicht",
    addAcidLabel: "Saure Zutat hinzufügen",
    weightLabel: "Gewicht",
    removeButton: "Entfernen",
    bakingSodaNeeded: "Neutralisiertes Natron",
    requiredBakingPowder: "Ziel-Triebkraft",
    providedBakingPowderEquivalent: "Triebkraft aus Natron",
    boosterBakingPowder: "Extra Backpulver-Booster",
    resultsTitle: "Berechnete Triebmittel",
    statusBalanced: "Ausgeglichen",
    statusAcidic: "Säureüberschuss",
    statusAlkaline: "Basenüberschuss",
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
    stoichiometryBadge: "pH-Stöchiometrie",
    simulateSodaLabel: "Zugegebenes Natron simulieren",
    autoBalanceBtn: "Auto-Balance",
    sodaAddedLabel: "Zugegebenes Natron"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: 'Kernerkenntnisse für perfektes Aufgehen',
      items: [
        'Natron braucht Säure zur Aktivierung; ohne sie schmeckt dein Gebäck seifig und metallisch',
        'Backpulver neutralisiert sich selbst und liefert zusätzliche Triebkraft als Booster',
        'Der Standard-Richtwert liegt bei 4% des Mehlgewichts in Backpulver-Äquivalent für gutes Aufgehen',
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
      html: 'Chemische Lockerung basiert auf <strong>Säure-Base-Neutralisationsreaktionen</strong>, die Kohlendioxid (CO2) erzeugen, das in der Teigmatrix eingeschlossen wird und das Gebäck aufgehen lässt. Das richtige Verhältnis zwischen Natriumhydrogencarbonat (Natron) und sauren Zutaten ist entscheidend. <strong>Zu viel Natron</strong> führt zu nicht reagierten alkalischen Rückständen, die einen seifigen, metallischen Geschmack und gelbe Verfärbungen verursachen. <strong>Zu viel Säure</strong> kann zu einem dichten, flachen Gebäck mit geringem Volumen führen.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '3-4x',
          label: 'Natron stärker als Backpulver',
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
          label: 'Neutralisationsverhältnis (Milchsäure)',
          icon: 'mdi:scale-balance'
        }
      ]
    },
    {
      type: 'title',
      text: 'Natron vs. Backpulver: Der vollständige Vergleich',
      level: 3
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Natron',
          icon: 'mdi:flask-outline',
          description: 'Reines Natriumhydrogencarbonat (NaHCO3). Eine starke alkalische Base, die externe Säure zur Aktivierung und CO2-Produktion benötigt.',
          points: [
            '3-4x stärker als Backpulver',
            'Braucht Säure (Buttermilch, Joghurt, Zitronensaft) zum Reagieren',
            'Überschuss verursacht seifigen, metallischen Geschmack und gelbe Krume',
            'Erhöht den pH-Wert; verstärkt Maillard-Bräunung bei Keksen',
            'Einfach wirkend: setzt CO2 sofort beim Mischen frei'
          ]
        },
        {
          title: 'Backpulver',
          icon: 'mdi:flask-round-bottom-outline',
          description: 'Ein vollständiges Triebmittelsystem mit Natron + trockenen Säuresalzen + Stärke. Selbstneutralisierend und zuverlässig.',
          highlight: true,
          points: [
            'Enthält seine eigene Säure (Monocalciumphosphat, SAP)',
            'Doppelt wirkend: setzt CO2 beim Mischen frei UND beim Erhitzen',
            'Kein metallischer Nachgeschmack; pH-Wert bereits ausgeglichen',
            'Schwächer pro Gramm; 3-4x mehr nötig, um Natron-Kraft zu erreichen',
            'Ideal als Booster, wenn Natron allein nicht das ganze Mehl heben kann'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Saure Zutat', 'Standardgewicht', 'Neutralisiertes Natron', 'Neutralisationsverhältnis'],
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
      html: '<strong>Wenn dein Kuchen zusammengefallen ist:</strong> Zu viel Säure oder insgesamt zu wenig Triebmittel; das CO2 ist entwichen, bevor die Struktur fest wurde.<br/><br/><strong>Wenn dein Kuchen dicht und flach ist:</strong> Zu viel Säure ohne ausreichend Natron zur Neutralisation oder zu wenig Gesamt-Triebkraft für das Mehlgewicht.<br/><br/><strong>Wenn dein Kuchen seifig oder metallisch schmeckt:</strong> Überschuss an nicht reagiertem Natron; mehr saure Zutaten hinzufügen oder das Natron reduzieren.<br/><br/><strong>Wenn dein Kuchen gelbe Flecken hat:</strong> Klassisches Zeichen für ungelöste, nicht reagierte Natron-Klumpen; siebe das Natron nächstes Mal mit dem Mehl.'
    },
    {
      type: 'title',
      text: 'So bringst du Triebmittel ins Gleichgewicht und vermeidest metallischen Geschmack',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Für optimales Aroma und Aufgehen folge diesem Ablauf: <strong>Zuerst</strong> bestimme die Natron-Menge, die nötig ist, um die sauren Bestandteile deines Teigs mit der obigen Tabelle vollständig zu neutralisieren. <strong>Dann</strong> rechne dieses Natron in sein Backpulver-Äquivalent um (multipliziere mit 4) und vergleiche es mit der benötigten Gesamt-Triebkraft für dein Mehl; in der Regel <strong>4% des Mehlgewichts</strong> in Backpulver-Äquivalent. <strong>Bei einer Unterdeckung</strong> füge die restliche Triebkraft in Form von neutralem Backpulver als Booster hinzu. Unser Rechner erledigt all das automatisch.'
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        'Ersetze Natron niemals 1:1 durch Backpulver; Natron ist 3-4x stärker und braucht Säure',
        'Siebe Natron immer mit den trockenen Zutaten, um bittere Klumpen zu vermeiden',
        'Dutch-Process-Kakao ist NICHT sauer; verwende Naturkakao-Pulver, wenn du Kakao als Säurequelle nutzt',
        'Honig und Melasse sind schwach sauer; sie brauchen viel weniger Natron pro Gramm als Zitronensaft',
        'Arbeite nach dem Mischen zügig: chemische Triebmittel beginnen sofort bei Kontakt mit Flüssigkeit zu reagieren'
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Neutralisationsverhältnis',
          definition: 'Das Verhältnis der Natron-Menge, die benötigt wird, um ein bestimmtes Gewicht einer sauren Zutat vollständig zu neutralisieren. Niedrigere Verhältnisse bedeuten, dass die Zutat pro Gramm weniger sauer ist.'
        },
        {
          term: 'Triebkraft',
          definition: 'Die Gesamtmenge an CO2-Gas, die ein Triebmittel erzeugen kann. Wird in Backpulver-Äquivalenten gemessen, wobei 4% des Mehlgewichts der Standard-Richtwert für Kuchen und Muffins ist.'
        },
        {
          term: 'Doppelt wirkendes Backpulver',
          definition: 'Backpulver, das CO2 in zwei Stufen freisetzen kann: zuerst beim Mischen mit Flüssigkeit bei Raumtemperatur und dann beim Erhitzen im Ofen. Sorgt für ein zuverlässigeres Aufgehen.'
        },
        {
          term: 'Maillard-Reaktion',
          definition: 'Eine chemical Reaction zwischen Aminosäuren und reduzierenden Zuckern, die Lebensmittel bräunt und komplexe Aromen erzeugt. Wird durch höheren pH-Wert durch überschüssiges Natron verstärkt; erwünscht bei Keksen, unerwünscht bei feinen Kuchen.'
        },
        {
          term: 'pH-Gleichgewicht',
          definition: 'Das Maß für Säure oder Alkalität des Teigs. Ein neutraler pH-Wert (etwa 7) bedeutet, dass das gesamte Natron mit der gesamten Säure reagiert hat. Leicht alkalisch begünstigt Bräunung; sauer begünstigt Zartheit.'
        }
      ]
    },
    {
      type: 'tip',
      html: '<strong>Bräunung und pH-Wert:</strong> Während vollständige Neutralisation für den Geschmack entscheidend ist, kann ein leicht alkalischer Teig (durch einen winzigen Natron-Überschuss) bei Schokoladenkuchen und Keksen erwünscht sein. Ein höherer pH-Wert verstärkt die Maillard-Bräunung und sorgt für dunklere Farben, knusprige Ränder und tiefere Karamellnoten. Bei feinen Vanillekuchen solltest du eine exakte Neutralisation anstreben, um einen reinen, klaren Geschmack zu bewahren.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
