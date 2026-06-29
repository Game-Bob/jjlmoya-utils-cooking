import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Emulsionsstabilität und Oelgrenzrechner";
const description = "Finden Sie genau heraus, wie viel Öl Ihre Mayonnaise, Aioli oder Vinaigrette verträgt, bevor sie bricht. Verhindern Sie getrennte Saucen mit unserem kostenlosen Emulsionsstabilitätsrechner.";
const faq = [
  {
    question: "Wie viel Öl kann ich zu meiner Mayonnaise geben, bevor sie bricht?",
    answer: "Das hängt vom Emulgator ab. Eigelb unterstützt bis zu ca. 78% Öl (etwa das 3,5-fache des Wasservolumens), Senf bis zu 70%, Sojalecithin bis zu 82% und Polysorbat bis zu 85%. Nutzen Sie den obigen Rechner, um das genaue Maximum für Ihre Mengen zu ermitteln."
  },
  {
    question: "Warum ist meine Emulsion gebrochen oder getrennt?",
    answer: "Eine Emulsion bricht, wenn der Ölvolumenanteil die maximale Packungsgrenze des Emulgators überschreitet. An diesem Punkt werden die Öltröpfchen so stark zusammengedrückt, dass sie verschmelzen und sich die Mischung trennt. Dies geschieht sofort - es ist kein allmählicher Prozess."
  },
  {
    question: "Wie repariere ich eine gebrochene Mayonnaise oder Aioli?",
    answer: "Beginnen Sie mit einem frischen Eigelb oder einem Esslöffel warmem Wasser in einer sauberen Schüssel. Träufeln Sie die gebrochene Mischung langsam ein, während Sie ständig rühren, genau als ob Sie rohes Öl hinzufügen würden. Der obige Rechner sagt Ihnen genau, wie viel Wasser oder Eigelb Sie benötigen."
  },
  {
    question: "Führt zu schnelles Hinzufügen von Öl zum Brechen einer Emulsion?",
    answer: "Zu schnelles Hinzufügen von Öl kann den Emulgator vorübergehend überlasten, aber die wahre Ursache für das Brechen ist immer ein falsches Phasenverhältnis. Wenn Ihr Ölanteil unter der Grenze des Emulgators bleibt, bleibt die Emulsion unabhängig von der Geschwindigkeit stabil. Wird die Grenze überschritten, ist das Brechen unvermeidlich."
  },
  {
    question: "Was ist der Unterschied zwischen Eigelb und Senf als Emulgatoren?",
    answer: "Eigelb (max. 78% Öl) enthält Lecithin und Lipoproteine, die einen robusten Film um die Tröpfchen bilden. Senf (max. 70% Öl) basiert auf Schleimstoffen und Proteinen - er ist schwächer, verleiht aber Geschmack. Sojalecithin (82%) und Polysorbat (85%) sind hochwirksame industrielle Emulgatoren."
  }
];

const howTo = [
  {
    name: "Emulgator auswählen",
    text: "Wählen Sie den Emulgator in Ihrem Rezept - Eigelb für klassische Mayo, Senf für Vinaigretten oder Sojalecithin/Polysorbat für die moderne Küche. Jeder setzt eine andere maximale Ölgrenze."
  },
  {
    name: "Wasserphasenvolumen eingeben",
    text: "Geben Sie die Gesamtmilliliter Ihrer wässrigen Zutaten ein: Wasser, Essig, Zitronensaft, Wein oder jede andere wasserbasierte Flüssigkeit. Der Rechner addiert automatisch den Wassergehalt des gewählten Emulgators."
  },
  {
    name: "Ölmenge festlegen",
    text: "Geben Sie die Ölmenge ein, die Sie verwenden möchten. Nutzen Sie den Schieberegler oder geben Sie den Wert ein. Der Rechner zeigt sofort an, ob diese Menge eine stabile Emulsion ergibt oder zum Bruch führt."
  },
  {
    name: "Stabilitätsergebnis ablesen und ggf. korrigieren",
    text: "Überprüfen Sie die Ölvolumenanteil-Anzeige. Bei Stabilität können Sie loslegen. Bei Bruch sagt Ihnen das Rettungspanel genau, wie viel Wasser (in ml) oder wie viele zusätzliche Eigelb Sie benötigen, um das Gleichgewicht wiederherzustellen."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo' as const,
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
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'emulsionsstabilitaet-oelgrenzrechner',
  title: 'Emulsionsstabilität und Oelgrenzrechner',
  description: 'Finden Sie genau heraus, wie viel Öl Ihre Mayonnaise, Aioli oder Vinaigrette verträgt, bevor sie bricht. Verhindern Sie getrennte Saucen mit unserem kostenlosen Emulsionsstabilitätsrechner.',
  faqTitle: 'Häufig gestellte Fragen',
  ui: {
    title: 'Emulsionsstabilitätsanalysator',
    subtitle: 'Wie viel Öl verträgt Ihre Sauce vor dem Brechen?',
    waterLabel: 'Wasserphase (ml)',
    oilLabel: 'Ölvolumen (ml)',
    emulsifierLabel: 'Emulgatortyp',
    yolkOption: 'Eigelb',
    mustardOption: 'Senf',
    soyLecithinOption: 'Sojalecithin',
    polysorbateOption: 'Polysorbat',
    stableStatus: 'Stabile Emulsion',
    brokenStatus: 'Gebrochene Emulsion',
    ratioLabel: 'Ölvolumenanteil',
    maxLimitLabel: 'Maximale Ölgrenze',
    fixTitle: 'Rettungsstrategie',
    waterFixText: 'Wasser hinzufügen, um das Phasengleichgewicht wiederherzustellen:',
    yolkFixText: 'Alternativ zusätzliches Eigelb verwenden:',
    idealRangeText: 'Der ideale Bereich liegt unter der kritischen Packungsgrenze von 74% bis 80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Wie Viel Öl Verträgt Eine Mayonnaise Oder Aioli Vor Dem Brechen?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Jeder Koch hat sich diese Frage gestellt: <strong>Warum ist meine Mayonnaise geronnen?</strong> Die Antwort ist einfacher als es scheint. Eine Emulsion - ob eine klassische Aioli, eine cremige Vinaigrette oder ein modernistischer Schaum - kann nur eine begrenzte Menge Öl aufnehmen, bevor sie zusammenfällt. Unser <strong>Emulsionsstabilitätsrechner</strong> sagt Ihnen genau, wo dieser Bruchpunkt liegt, basierend auf Ihren spezifischen Zutaten und Mengen.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: 'Eigelb Max. Öl',
          icon: 'mdi:egg-outline'
        },
        {
          value: '85%',
          label: 'Polysorbat Grenze',
          icon: 'mdi:flask-outline'
        },
        {
          value: '74%',
          label: 'Theoretische Packung',
          icon: 'mdi:sphere'
        },
        {
          value: '15 ml',
          label: 'Eigelb Wassergehalt',
          icon: 'mdi:water'
        }
      ]
    },
    {
      type: 'title',
      text: 'Die Wissenschaft: Warum Emulsionen Brechen',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Eine kulinarische Emulsion funktioniert, indem winzige Öltröpfchen in einer kontinuierlichen Wasserphase verteilt werden. <strong>Emulgatoren</strong> - wie das Lecithin im Eigelb, der Schleimstoff im Senf oder synthetische Tenside wie Polysorbat - umhüllen jedes Tröpfchen und verhindern, dass es mit seinen Nachbarn verschmilzt.'
    },
    {
      type: 'paragraph',
      html: 'Der Bruchpunkt wird durch reine Geometrie bestimmt. Öltröpfchen verhalten sich wie winzige Kugeln, die zusammengepackt werden. Das maximale Volumen an Kugeln, das in einen gegebenen Raum passt - bekannt als <strong>Keplersche Vermutung</strong> - beträgt etwa 74%. In realen Küchensystemen kann dies mit starken Emulgatoren auf 80-85% gedehnt werden, aber darüber hinaus werden die Tröpfchen so stark zusammengedrückt, dass sie verschmelzen und die Emulsion sofort zusammenbricht.'
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Eigelb',
          icon: 'mdi:egg-outline',
          description: 'Der klassische Mayonnaise-Emulgator. Enthält Lecithin und Lipoproteine.',
          highlight: true,
          points: [
            'Max. Öl: 78%',
            '~15 ml Wasser pro Eigelb',
            'Verleiht Reichhaltigkeit und Farbe',
            'Am besten für Mayo und Aioli'
          ]
        },
        {
          title: 'Senf',
          icon: 'mdi:shaker-outline',
          description: 'Basiert auf Schleimstoffen und Samenproteinen. Verleiht würzigen Geschmack.',
          points: [
            'Max. Öl: 70%',
            '~10 ml Wassergehalt',
            'Schwächere Emulgierkraft',
            'Ideal für Vinaigretten'
          ]
        },
        {
          title: 'Sojalecithin',
          icon: 'mdi:leaf',
          description: 'Hochkonzentriertes pflanzliches Tensid.',
          points: [
            'Max. Öl: 82%',
            '~5 ml Wassergehalt',
            'Neutrales Geschmacksprofil',
            'Grundnahrungsmittel der modernen Küche'
          ]
        },
        {
          title: 'Polysorbat',
          icon: 'mdi:flask-outline',
          description: 'Synthetischer Emulgator mit maximaler Tensidkapazität.',
          points: [
            'Max. Öl: 85%',
            '~2 ml Wassergehalt',
            'Höchste Öltoleranz',
            'Verwendet in Schäumen und Airs'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulgator', 'Max. Öl %', 'Öl pro 100 ml Wasser', 'Beste Verwendung'],
      rows: [
        ['Eigelb', '78%', '~355 ml', 'Mayonnaise, Aioli, Hollandaise'],
        ['Senf', '70%', '~233 ml', 'Vinaigretten, leichte Dressings'],
        ['Sojalecithin', '82%', '~456 ml', 'Moderne Saucen, Schäume'],
        ['Polysorbat', '85%', '~567 ml', 'Stabile Schäume, experimentelle Küche']
      ]
    },
    {
      type: 'title',
      text: 'Wie Man Eine Gebrochene Emulsion Schritt Für Schritt Rettet',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Wenn Ihre Mayonnaise oder Sauce bereits getrennt ist, <strong>werfen Sie sie nicht weg</strong>. Die Reparatur ist unkompliziert - aber nur, wenn Sie das Phasenverhältnis verstehen. Stärkeres Rühren hilft nicht; Sie müssen mehr von der kontinuierlichen (Wasser-)Phase hinzufügen.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Häufige Anzeichen, Dass Ihre Emulsion Zu Brechen Droht',
      html: 'Achten Sie auf <strong>Verdickung gefolgt von plötzlicher Verdünnung</strong>, eine <strong>glänzende Oberfläche die körnig wird</strong> oder sichtbare Ölansammlungen an den Rändern. Wenn Sie eines davon sehen, stoppen Sie sofort die Ölzugabe und rühren Sie einen Teelöffel kaltes Wasser ein, bevor Sie fortfahren.'
    },
    {
      type: 'title',
      text: 'Praktische Tipps Für Perfekte Emulsionen Jedes Mal',
      level: 3
    },
    {
      type: 'tip',
      title: 'Temperatur Ist Wichtig',
      html: 'Alle Zutaten sollten <strong>Zimmertemperatur</strong> haben. Kalte Eier oder kaltes Öl erhöhen das Bruchrisiko drastisch. Nehmen Sie die Zutaten 30 Minuten vor Beginn aus dem Kühlschrank.'
    },
    {
      type: 'tip',
      title: 'Das Wasser Sicherheitsnetz',
      html: 'Wenn Ihr Rezept nicht genug Säure (Essig, Zitronensaft) enthält, geben Sie <strong>einen Teelöffel kaltes Wasser pro Eigelb</strong> hinzu, bevor Sie mit der Ölzugabe beginnen. Dieses zusätzliche Wasser schafft eine breitere Sicherheitsmarge.'
    },
    {
      type: 'tip',
      title: 'Eine Geronnene Charge Retten',
      html: 'Geben Sie ein frisches Eigelb in eine saubere Schüssel. Verrühren Sie es mit einem Teelöffel Wasser. Dann <strong>träufeln Sie die gebrochene Mischung so langsam wie möglich ein</strong>, genau als ob es rohes Öl wäre. Sobald es sich re-emulgiert hat, können Sie den Rest schneller hinzufügen.'
    },
    {
      type: 'title',
      text: 'Kulinarisches Emulsionsglossar',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Kontinuierliche Phase',
          definition: 'Die Flüssigkeit, die die Tröpfchen umgibt - normalerweise Wasser, Essig oder Zitronensaft bei Öl-in-Wasser-Emulsionen wie Mayonnaise.'
        },
        {
          term: 'Disperse Phase',
          definition: 'Die Flüssigkeit, die in winzige Tröpfchen zerbrochen ist - Öl in den meisten kulinarischen Emulsionen. Je mehr Sie hinzufügen, desto enger packen sich die Tröpfchen zusammen.'
        },
        {
          term: 'Volumenanteil',
          definition: 'Das Verhältnis von Ölvolumen zu Gesamtvolumen. Bei etwa 74-85% (abhängig vom Emulgator) erreicht die Emulsion ihren geometrischen Bruchpunkt.'
        },
        {
          term: 'Koaleszenz',
          definition: 'Wenn zwei oder mehr Öltröpfchen zu einem größeren verschmelzen. Dies ist der mikroskopische Prozess, der einen sichtbaren Emulsionsbruch auslöst.'
        },
        {
          term: 'Phaseninversion',
          definition: 'Der Punkt, an dem eine Öl-in-Wasser-Emulsion zu Wasser-in-Öl umschlägt - wie bei der Herstellung von Butter aus Sahne. Dies ist die ultimative Versagensform.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: 'Egal, ob Sie eine klassische französische Mayonnaise, eine knoblauchige Aioli, eine stabile Vinaigrette zubereiten oder mit modernistischen Hydrokolloiden experimentieren, das Verständnis des <strong>Öl-Wasser-Verhältnisses</strong> ist der wichtigste Faktor. Unser Rechner übernimmt die Mathematik, damit Sie mit Zuversicht kochen können.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
