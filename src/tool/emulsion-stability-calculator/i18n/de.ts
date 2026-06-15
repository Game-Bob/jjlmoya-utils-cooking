import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Emulsionsstabilitaet und Oelgrenzrechner";
const description = "Finden Sie genau heraus, wie viel Oel Ihre Mayonnaise, Aioli oder Vinaigrette vertraegt, bevor sie bricht. Verhindern Sie getrennte Saucen mit unserem kostenlosen Emulsionsstabilitaetsrechner.";
const faq = [
  {
    question: "Wie viel Oel kann ich zu meiner Mayonnaise geben, bevor sie bricht?",
    answer: "Das haengt vom Emulgator ab. Eigelb unterstuetzt bis zu ca. 78% Oel (etwa das 3,5-fache des Wasservolumens), Senf bis zu 70%, Sojalecithin bis zu 82% und Polysorbat bis zu 85%. Nutzen Sie den obigen Rechner, um das genaue Maximum fuer Ihre Mengen zu ermitteln."
  },
  {
    question: "Warum ist meine Emulsion gebrochen oder getrennt?",
    answer: "Eine Emulsion bricht, wenn der Oelvolumenanteil die maximale Packungsgrenze des Emulgators ueberschreitet. An diesem Punkt werden die Oeltroepfchen so stark zusammengedrueckt, dass sie verschmelzen und sich die Mischung trennt. Dies geschieht sofort - es ist kein allmaehlicher Prozess."
  },
  {
    question: "Wie repariere ich eine gebrochene Mayonnaise oder Aioli?",
    answer: "Beginnen Sie mit einem frischen Eigelb oder einem Essloeffel warmem Wasser in einer sauberen Schuessel. Traufeln Sie die gebrochene Mischung langsam ein, waehrend Sie staendig ruehren, genau als ob Sie rohes Oel hinzufuegen wuerden. Der obige Rechner sagt Ihnen genau, wie viel Wasser oder Eigelb Sie benoetigen."
  },
  {
    question: "Fuehrt zu schnelles Hinzufuegen von Oel zum Brechen einer Emulsion?",
    answer: "Zu schnelles Hinzufuegen von Oel kann den Emulgator voruebergehend ueberlasten, aber die wahre Ursache fuer das Brechen ist immer ein falsches Phasenverhaeltnis. Wenn Ihr Oelanteil unter der Grenze des Emulgators bleibt, bleibt die Emulsion unabhaengig von der Geschwindigkeit stabil. Wird die Grenze ueberschritten, ist das Brechen unvermeidlich."
  },
  {
    question: "Was ist der Unterschied zwischen Eigelb und Senf als Emulgatoren?",
    answer: "Eigelb (max. 78% Oel) enthaelt Lecithin und Lipoproteine, die einen robusten Film um die Troepfchen bilden. Senf (max. 70% Oel) basiert auf Schleimstoffen und Proteinen - er ist schwaecher, verleiht aber Geschmack. Sojalecithin (82%) und Polysorbat (85%) sind hochwirksame industrielle Emulgatoren."
  }
];

const howTo = [
  {
    name: "Emulgator auswaehlen",
    text: "Waehlen Sie den Emulgator in Ihrem Rezept - Eigelb fuer klassische Mayo, Senf fuer Vinaigretten oder Sojalecithin/Polysorbat fuer die moderne Kueche. Jeder setzt eine andere maximale Oelgrenze."
  },
  {
    name: "Wasserphasenvolumen eingeben",
    text: "Geben Sie die Gesamtmilliliter Ihrer waessrigen Zutaten ein: Wasser, Essig, Zitronensaft, Wein oder jede andere wasserbasierte Fluessigkeit. Der Rechner addiert automatisch den Wassergehalt des gewaehlten Emulgators."
  },
  {
    name: "Oelmenge festlegen",
    text: "Geben Sie die Oelmenge ein, die Sie verwenden moechten. Nutzen Sie den Schieberegler oder geben Sie den Wert ein. Der Rechner zeigt sofort an, ob diese Menge eine stabile Emulsion ergibt oder zum Bruch fuehrt."
  },
  {
    name: "Stabilitaetsergebnis ablesen und ggf. korrigieren",
    text: "Ueberpruefen Sie die Oelvolumenanteil-Anzeige. Bei Stabilitat koennen Sie loslegen. Bei Bruch sagt Ihnen das Rettungspanel genau, wie viel Wasser (in ml) oder wie viele zusaetzliche Eigelb Sie benoetigen, um das Gleichgewicht wiederherzustellen."
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
  title: 'Emulsionsstabilitaet und Oelgrenzrechner',
  description: 'Finden Sie genau heraus, wie viel Oel Ihre Mayonnaise, Aioli oder Vinaigrette vertraegt, bevor sie bricht. Verhindern Sie getrennte Saucen mit unserem kostenlosen Emulsionsstabilitaetsrechner.',
  faqTitle: 'Haeufig gestellte Fragen',
  ui: {
    title: 'Emulsionsstabilitaetsanalysator',
    subtitle: 'Wie viel Oel vertraegt Ihre Sauce vor dem Brechen?',
    waterLabel: 'Wasserphase (ml)',
    oilLabel: 'Oelvolumen (ml)',
    emulsifierLabel: 'Emulgatortyp',
    yolkOption: 'Eigelb',
    mustardOption: 'Senf',
    soyLecithinOption: 'Sojalecithin',
    polysorbateOption: 'Polysorbat',
    stableStatus: 'Stabile Emulsion',
    brokenStatus: 'Gebrochene Emulsion',
    ratioLabel: 'Oelvolumenanteil',
    maxLimitLabel: 'Maximale Oelgrenze',
    fixTitle: 'Rettungsstrategie',
    waterFixText: 'Wasser hinzufuegen, um das Phasengleichgewicht wiederherzustellen:',
    yolkFixText: 'Alternativ zusaetzliches Eigelb verwenden:',
    idealRangeText: 'Der ideale Bereich liegt unter der kritischen Packungsgrenze von 74% bis 80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Wie Viel Oel Vertraegt Eine Mayonnaise Oder Aioli Vor Dem Brechen?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Jeder Koch hat sich diese Frage gestellt: <strong>Warum ist meine Mayonnaise geronnen?</strong> Die Antwort ist einfacher als es scheint. Eine Emulsion - ob eine klassische Aioli, eine cremige Vinaigrette oder ein modernistischer Schaum - kann nur eine begrenzte Menge Oel aufnehmen, bevor sie zusammenfaellt. Unser <strong>Emulsionsstabilitaetsrechner</strong> sagt Ihnen genau, wo dieser Bruchpunkt liegt, basierend auf Ihren spezifischen Zutaten und Mengen.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: 'Eigelb Max. Oel',
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
      html: 'Eine kulinarische Emulsion funktioniert, indem winzige Oeltroepfchen in einer kontinuierlichen Wasserphase verteilt werden. <strong>Emulgatoren</strong> - wie das Lecithin im Eigelb, der Schleimstoff im Senf oder synthetische Tenside wie Polysorbat - umhuellen jedes Troepfchen und verhindern, dass es mit seinen Nachbarn verschmilzt.'
    },
    {
      type: 'paragraph',
      html: 'Der Bruchpunkt wird durch reine Geometrie bestimmt. Oeltroepfchen verhalten sich wie winzige Kugeln, die zusammengepackt werden. Das maximale Volumen an Kugeln, das in einen gegebenen Raum passt - bekannt als <strong>Keplersche Vermutung</strong> - betraegt etwa 74%. In realen Kuechensystemen kann dies mit starken Emulgatoren auf 80-85% gedehnt werden, aber darueber hinaus werden die Troepfchen so stark zusammengedrueckt, dass sie verschmelzen und die Emulsion sofort zusammenbricht.'
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Eigelb',
          icon: 'mdi:egg-outline',
          description: 'Der klassische Mayonnaise-Emulgator. Enthaelt Lecithin und Lipoproteine.',
          highlight: true,
          points: [
            'Max. Oel: 78%',
            '~15 ml Wasser pro Eigelb',
            'Verleiht Reichhaltigkeit und Farbe',
            'Am besten fuer Mayo und Aioli'
          ]
        },
        {
          title: 'Senf',
          icon: 'mdi:shaker-outline',
          description: 'Basiert auf Schleimstoffen und Samenproteinen. Verleiht wuerzigen Geschmack.',
          points: [
            'Max. Oel: 70%',
            '~10 ml Wassergehalt',
            'Schwaechere Emulgierkraft',
            'Ideal fuer Vinaigretten'
          ]
        },
        {
          title: 'Sojalecithin',
          icon: 'mdi:leaf',
          description: 'Hochkonzentriertes pflanzliches Tensid.',
          points: [
            'Max. Oel: 82%',
            '~5 ml Wassergehalt',
            'Neutrales Geschmacksprofil',
            'Grundnahrungsmittel der modernen Kueche'
          ]
        },
        {
          title: 'Polysorbat',
          icon: 'mdi:flask-outline',
          description: 'Synthetischer Emulgator mit maximaler Tensidkapazitaet.',
          points: [
            'Max. Oel: 85%',
            '~2 ml Wassergehalt',
            'Hoechste Oeltoleranz',
            'Verwendet in Schaumen und Airs'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulgator', 'Max. Oel %', 'Oel pro 100 ml Wasser', 'Beste Verwendung'],
      rows: [
        ['Eigelb', '78%', '~355 ml', 'Mayonnaise, Aioli, Hollandaise'],
        ['Senf', '70%', '~233 ml', 'Vinaigretten, leichte Dressings'],
        ['Sojalecithin', '82%', '~456 ml', 'Moderne Saucen, Schaume'],
        ['Polysorbat', '85%', '~567 ml', 'Stabile Schaume, experimentelle Kueche']
      ]
    },
    {
      type: 'title',
      text: 'Wie Man Eine Gebrochene Emulsion Schritt Fuer Schritt Rettet',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Wenn Ihre Mayonnaise oder Sauce bereits getrennt ist, <strong>werfen Sie sie nicht weg</strong>. Die Reparatur ist unkompliziert - aber nur, wenn Sie das Phasenverhaeltnis verstehen. Staerkeres Ruehren hilft nicht; Sie muessen mehr von der kontinuierlichen (Wasser-)Phase hinzufuegen.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Haeufige Anzeichen, Dass Ihre Emulsion Zu Brechen Droht',
      html: 'Achten Sie auf <strong>Verdickung gefolgt von ploetzlicher Verduennung</strong>, eine <strong>glanzende Oberflaeche die koernig wird</strong> oder sichtbare Oelansammlungen an den Raendern. Wenn Sie eines davon sehen, stoppen Sie sofort die Oelzugabe und ruehren Sie einen Teeloeffel kaltes Wasser ein, bevor Sie fortfahren.'
    },
    {
      type: 'title',
      text: 'Praktische Tipps Fuer Perfekte Emulsionen Jedes Mal',
      level: 3
    },
    {
      type: 'tip',
      title: 'Temperatur Ist Wichtig',
      html: 'Alle Zutaten sollten <strong>Zimmertemperatur</strong> haben. Kalte Eier oder kaltes Oel erhoehen das Bruchrisiko drastisch. Nehmen Sie die Zutaten 30 Minuten vor Beginn aus dem Kuehlschrank.'
    },
    {
      type: 'tip',
      title: 'Das Wasser Sicherheitsnetz',
      html: 'Wenn Ihr Rezept nicht genug Saeure (Essig, Zitronensaft) enthaelt, geben Sie <strong>einen Teeloeffel kaltes Wasser pro Eigelb</strong> hinzu, bevor Sie mit der Oelzugabe beginnen. Dieses zusaetzliche Wasser schafft eine breitere Sicherheitsmarge.'
    },
    {
      type: 'tip',
      title: 'Eine Geronnene Charge Retten',
      html: 'Geben Sie ein frisches Eigelb in eine saubere Schuessel. Verruehren Sie es mit einem Teeloeffel Wasser. Dann <strong>traeufeln Sie die gebrochene Mischung so langsam wie moeglich ein</strong>, genau als ob es rohes Oel waere. Sobald es sich re-emulgiert hat, koennen Sie den Rest schneller hinzufuegen.'
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
          definition: 'Die Fluessigkeit, die die Troepfchen umgibt - normalerweise Wasser, Essig oder Zitronensaft bei Oel-in-Wasser-Emulsionen wie Mayonnaise.'
        },
        {
          term: 'Disperse Phase',
          definition: 'Die Fluessigkeit, die in winzige Troepfchen zerbrochen ist - Oel in den meisten kulinarischen Emulsionen. Je mehr Sie hinzufuegen, desto enger packen sich die Troepfchen zusammen.'
        },
        {
          term: 'Volumenanteil',
          definition: 'Das Verhaeltnis von Oelvolumen zu Gesamtvolumen. Bei etwa 74-85% (abhaengig vom Emulgator) erreicht die Emulsion ihren geometrischen Bruchpunkt.'
        },
        {
          term: 'Koaleszenz',
          definition: 'Wenn zwei oder mehr Oeltroepfchen zu einem groesseren verschmelzen. Dies ist der mikroskopische Prozess, der einen sichtbaren Emulsionsbruch ausloest.'
        },
        {
          term: 'Phaseninversion',
          definition: 'Der Punkt, an dem eine Oel-in-Wasser-Emulsion zu Wasser-in-Oel umschlaegt - wie bei der Herstellung von Butter aus Sahne. Dies ist die ultimative Versagensform.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: 'Egal, ob Sie eine klassische franzoesische Mayonnaise, eine knoblauchige Aioli, eine stabile Vinaigrette zubereiten oder mit modernistischen Hydrokolloiden experimentieren, das Verstaendnis des <strong>Oel-Wasser-Verhaeltnisses</strong> ist der wichtigste Faktor. Unser Rechner uebernimmt die Mathematik, damit Sie mit Zuversicht kochen koennen.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
