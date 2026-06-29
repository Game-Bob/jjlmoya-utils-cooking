import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Koji Impfung und Hydratation Rechner";
const description = "Berechnen Sie den perfekten Feuchtigkeitsgehalt, die Sporeninokulationsdosis und die Inkubationstemperatur für die Herstellung von Koji zu Hause. Vermeiden Sie fehlgeschlagene Chargen mit unserem kostenlosen Koji-Inokulations- und Hydratationsrechner.";
const faq = [
  {
    question: "Was ist der ideale Feuchtigkeitsgehalt für das Kochen von Koji-Substrat?",
    answer: "Der ideale Gesamtfeuchtigkeitsgehalt für gedämpften Reis oder Gerste bei der Inokulation von Koji liegt zwischen 30% und 35%. Dies entspricht einem Dampfgewicht von etwa 1,35x bis 1,40x des anfänglichen Trockengewichts."
  },
  {
    question: "Wie viel Sporenpulver (Tane-Koji) benötige ich?",
    answer: "Die standardmässige Inokulationsrate beträgt 1 Gramm Standard-Sporenmischung pro 1 Kilogramm Trockensubstrat. Bei konzentrierten Sporen benötigen Sie weniger (0,5 g), während verdünnte Mischungen mehr erfordern (2,0 g)."
  },
  {
    question: "Warum ist die Temperaturkontrolle wahrend der Koji-Inkubation entscheidend?",
    answer: "Aspergillus oryzae wachst optimal zwischen 28C und 34C. Uberschreitet die Temperatur 38C, kann der Schimmelpilz uberhitzen, aufhoren zu wachsen oder unerwunschte grune/schwarze Sporen produzieren. Unter 20C verlangsamt sich das Wachstum erheblich."
  },
  {
    question: "Was passiert wahrend der exothermen Phase?",
    answer: "Nach 18 bis 24 Stunden Inkubation beginnt der Koji schnell zu wachsen und erzeugt eigene Warme. Wahrend dieser exothermen Spitze mussen Sie das Substrat umruhren und die Inkubatorheizung reduzieren, um eine Uberhitzung zu verhindern."
  }
];

const howTo = [
  {
    name: "Trockensubstratgewicht eingeben",
    text: "Geben Sie das anfangliche Trockengewicht Ihres Reises oder Ihrer Gerste ein, um die Ziel-Hydratationsschwellenwerte zu ermitteln."
  },
  {
    name: "Dampfgewicht verfolgen",
    text: "Geben Sie das tatsachliche Dampfgewicht nach dem Kochen ein. Der Rechner bestimmt den Feuchtigkeitsprozentsatz und pruft, ob er innerhalb des idealen Bereichs von 30-35% liegt."
  },
  {
    name: "Sporendosierung berechnen",
    text: "Wahlen Sie Ihre Sporenstarke (Standard, konzentriert oder verdunnt), um das genaue Gewicht des Sporenpulvers fur die Inokulation zu erhalten."
  },
  {
    name: "Inkubationsparameter uberwachen",
    text: "Passen Sie Temperatur und relative Luftfeuchtigkeit an, um das Myzelwachstum zu simulieren, und uberprufen Sie den 48-Stunden-Temperaturverlauf."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
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
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'koji-inokulation-rechner',
  title: 'Koji Impfung und Hydratation Rechner',
  description: 'Berechnen Sie den perfekten Feuchtigkeitsgehalt, die Sporeninokulationsdosis und die Inkubationstemperatur fur die Herstellung von Koji zu Hause. Vermeiden Sie fehlgeschlagene Chargen mit unserem kostenlosen Koji-Inokulations- und Hydratationsrechner.',
  faqTitle: 'Haufig gestellte Fragen',
  ui: {
    title: 'Koji Inokulations Analysator',
    subtitle: 'Optimieren Sie die Feststoff Fermentationsparameter von Koji',
    dryWeightLabel: 'Trockensubstratgewicht',
    steamedWeightLabel: 'Tatsachliches Dampfgewicht',
    targetRangeLabel: 'Ziel-Dampfgewicht-Bereich',
    moistureLabel: 'Aktuelle Feuchtigkeit',
    potencyLabel: 'Sporenstarke',
    standardPotency: 'Standardsporen',
    concentratedPotency: 'Konzentriert',
    dilutedPotency: 'Verdunnte Mischung',
    sporeDosageLabel: 'Sporendosierung',
    tempLabel: 'Inkubatortemperatur',
    humidityLabel: 'Relative Luftfeuchtigkeit',
    statusIdeal: 'Ideale Inkubation',
    statusSlow: 'Langsames Wachstum',
    statusInhibited: 'Gehemmt / Kalt',
    statusOverheating: 'Uberhitzung / Sporulation',
    timelineTitle: '48h Thermischer Inkubationszyklus',
    stage1Name: '0-18h: Aufwarmen',
    stage2Name: '18-36h: Exothermer Peak',
    stage3Name: '36-48h: Reifung'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Wie man Koji herstellt: Die perfekte Feuchtigkeit, Sporendosierung und Temperatur fur Aspergillus Oryzae',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Die Herstellung von Koji zu Hause erfordert drei Dinge, die richtig laufen mussen: <strong>Substrat-Hydratation</strong>, <strong>Sporeninokulationsdichte</strong> und <strong>Inkubationstemperaturkontrolle</strong>. Wenn eines davon falsch lauft, kann Ihre Charge uberhitzen, nicht inokulieren oder den falschen Schimmelpilz wachsen lassen. Unser <strong>Koji-Inokulationsrechner</strong> nimmt das Ratespiel heraus, indem er Ihr Ziel-Dampfgewicht, die genaue Sporendosierung und den Echtzeit-Inkubationsstatus basierend auf Ihren spezifischen Eingaben berechnet.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '30-35%',
          label: 'Ziel-Feuchtigkeit',
          icon: 'mdi:water-percent'
        },
        {
          value: '1 g/kg',
          label: 'Standard-Sporenrate',
          icon: 'mdi:seed-outline'
        },
        {
          value: '28-34C',
          label: 'Ideale Temperatur',
          icon: 'mdi:thermometer'
        },
        {
          value: '48 h',
          label: 'Gesamt-Inkubation',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Warum der Feuchtigkeitsgehalt die Koji-Qualitat bestimmt',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Der wichtigste Einzelfaktor fur eine erfolgreiche Koji-Kultivierung ist die <strong>Substratfeuchtigkeit</strong>. Wenn Reis oder Gerste gedampft wird, gelatinieren die Starkekorner und nehmen Wasser auf, wodurch sie fur die von Aspergillus oryzae produzierten Enzyme zuganglich werden. Der ideale Feuchtigkeitsbereich ist eng: <strong>30% bis 35%</strong>. Unter 30% kann das Myzel nicht genug Wasser aufnehmen, um zu wachsen, und die Enzymproduktion stagniert. Uber 35% werden die Korner klebrig und verklumpen, was die Luftporositat verringert und den aeroben Schimmelpilz erstickt.'
    },
    {
      type: 'list',
      items: [
        '<strong>Zu trocken (unter 30%):</strong> Das Myzelwachstum ist gehemmt, die Enzymproduktion sinkt und der Koji besiedelt das Getreide nie vollstandig.',
        '<strong>Zu nass (uber 35%):</strong> Die Korner kleben zusammen, Lufttaschen fallen zusammen und Bakterien oder unerwunschte Schimmelpilze konnen Aspergillus oryzae uberholen.',
        '<strong>Zielbereich (30-35%):</strong> Das Getreide fuhlt sich fest an, einzelne Korner lassen sich leicht trennen und das Myzel breitet sich innerhalb von 48 Stunden gleichmassig aus.',
        '<strong>Wie man misst:</strong> Wiegen Sie Ihr trockenes Getreide, dampfen Sie es, dann wiegen Sie es erneut. Der Rechner berechnet Ihren genauen Feuchtigkeitsprozentsatz aus diesen beiden Zahlen.'
      ]
    },
    {
      type: 'table',
      headers: ['Getreidesorte', 'Trockengewicht', 'Ziel-Dampfgewicht', 'Einweichzeit', 'Dampfzeit'],
      rows: [
        ['Weisser Reis (Kurzorn)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['Weisser Reis (Langorn)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['Perlgerste', '1000 g', '1350-1400 g', '4-8 h', '40-50 min'],
        ['Brauner Reis', '1000 g', '1350-1400 g', '8-12 h', '45-60 min']
      ]
    },
    {
      type: 'title',
      text: 'Sporeninokulation: Wie viel Tane-Koji benotigen Sie?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Die Inokulationsdichte beeinflusst direkt, wie schnell der Schimmelpilz das Substrat besiedelt und wie konkurrenzfahig er gegen Verunreinigungen ist. Die Standardrate betragt <strong>1 Gramm Sporenmischung pro Kilogramm Trockensubstrat</strong>, aber dies variiert je nach Sporentyp.'
    },
    {
      type: 'proscons',
      title: 'Wahl Ihres Sporentyps',
      items: [
        {
          pro: 'Standardsporen sind das haufigste Format, fehlerverzeihend fur Anfanger und gut dokumentiert in der Heimbrau-Literatur.',
          con: 'Hoheres Pulvervolumen pro Charge und kann Fullstoff enthalten, der nicht zur Inokulation beitragt.'
        },
        {
          pro: 'Konzentrierte Sporen verwenden die Halfte des Pulvers fur die gleiche Inokulation, haben eine hohere Reinheit und sind wirtschaftlicher fur grobe Chargen.',
          con: 'Leichter zu uberdosieren, erfordert eine prazise Waage (0,01 g Auflosung) und lasst weniger Spielraum bei Unterdosierung.'
        },
        {
          pro: 'Verdunnte Mischungen verteilen sich leicht auf groben Flachen, sind fehlerverzeihender bei ungleichmassigem Mischen und eignen sich fur Anfanger, die sichtbare Abdeckung bevorzugen.',
          con: 'Verwendet mehr Pulver pro Charge und kann uberschussige Starke aus Fullstoff einbringen.'
        }
      ]
    },
    {
      type: 'title',
      text: 'Die exotherme Warmekurve: Warum Koji seine eigene Warme erzeugt',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Wenn Aspergillus oryzae Starken verbraucht und in einfache Zucker umwandelt, erzeugt es metabolische Warme. Zwischen den Stunden <strong>18 und 36</strong> der Inkubation erreicht die biologische Aktivitat ihren Hohepunkt und erzeugt einen exothermen Schub, der die Temperatur des Getreidebetts um 5-10C uber die Inkubator-Umgebungstemperatur anheben kann.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Anzeichen fur Uberhitzung Ihres Koji',
      html: 'Wenn die Temperatur des Getreidebetts <strong>38C</strong> uberschreitet, beginnen die Schimmelpilzenzyme zu denaturieren und der Pilz wechselt in den Fortpflanzungsmodus, wobei er <strong>grune oder schwarze Sporen</strong> produziert. Die Charge riecht dann ammoniakartig statt suS und maronenartig. Sie mussen das Substrat sofort umruhren und die Inkubatortemperatur senken, um sie wieder unter 34C zu bringen.'
    },
    {
      type: 'tip',
      title: 'Der 12 Stunden Wendeplan',
      html: 'Beginnend bei Stunde 18, brechen Sie das Getreidebett auf und ruhen Sie es alle 12 Stunden um. Dies gibt eingeschlossene Warme frei, verteilt die Feuchtigkeit neu und gibt dem Myzel Zugang zu frischem Sauerstoff. Verwenden Sie saubere, desinfizierte Hande oder einen sterilen Loffel.'
    },
    {
      type: 'tip',
      title: 'Luftfeuchtigkeit ist auch wichtig',
      html: 'Halten Sie die relative Luftfeuchtigkeit wahrend der Inkubation uber <strong>65%</strong>. Unter 40% trocknet das Substrat aus und das Wachstum stoppt. Uber 90% kann Kondensation das Bakterienwachstum auf der Getreideoberflache fordern.'
    },
    {
      type: 'tip',
      title: 'Vertrauen Sie Ihrer Nase',
      html: 'Gesunder Koji riecht nach suBen gerosteten Maronen oder frischen Pilzen. Wenn Sie Ammoniak, Sauerkeit oder Faule bemerken, ist die Charge moglicherweise uberhitzt oder kontaminiert. Entfernen und entsorgen Sie betroffenes Getreide sofort.'
    },
    {
      type: 'card',
      icon: 'mdi:rice',
      title: 'Sake & Miso Herstellung',
      html: 'Koji-inokulierter Reis ist die Grundlage von <strong>Sake</strong>, <strong>Miso</strong> und <strong>Amazake</strong>. Prazise Feuchtigkeitskontrolle gewahrleistet die richtige Enzymentwicklung fur die Umwandlung von Starke in Zucker.'
    },
    {
      type: 'card',
      icon: 'mdi:soy-sauce',
      title: 'Sojasauce & Tamari',
      html: 'Koji, das auf <strong>Sojabohnen</strong> oder einer Sojabohnen-Weizen-Mischung wachst, treibt die Fermentation an, die umami-reiche Sojasauce produziert. Eine konstante Temperatur vermeidet Fehlaromen.'
    },
    {
      type: 'card',
      icon: 'mdi:shaker-outline',
      title: 'Shio Koji & Garum',
      html: '<strong>Shio Koji</strong> (salzfermentierter Koji) und <strong>Fleischgarums</strong> basieren auf vollstandig besiedeltem Getreide. Unser Rechner stellt sicher, dass Ihr Substrat vor der Inokulation im idealen Feuchtigkeitsfenster liegt.'
    },
    {
      type: 'title',
      text: 'Koji-Inkubations-Glossar',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Tane-Koji',
          definition: 'Das Sporenpulver, das zur Inokulation von gedampftem Getreide verwendet wird. Typischerweise Aspergillus oryzae Sporen gemischt mit einem Starketrager wie Reismehl.'
        },
        {
          term: 'Exotherme Phase',
          definition: 'Der Zeitraum zwischen 18 und 36 Stunden der Inkubation, in dem Aspergillus oryzae genug metabolische Warme erzeugt, um die Temperatur des Getreidebetts uber die Umgebungstemperatur zu heben.'
        },
        {
          term: 'Gelatinierung',
          definition: 'Der Prozess des Erhitzens von Starke in Gegenwart von Wasser, sodass die Korner anschwellen und fur die vom Schimmelpilz produzierten Amylase-Enzyme zuganglich werden.'
        },
        {
          term: 'Sporulation',
          definition: 'Wenn der Schimmelpilz vom vegetativen Wachstum in den Fortpflanzungsmodus wechselt und grun oder schwarz wird. Dies wird durch Hitzestress uber 38C ausgelost und macht die Charge fur den kulinarischen Gebrauch unbrauchbar.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Wichtige Erkenntnisse fur perfekten Koji',
      items: [
        'Zielen Sie auf 30-35% Feuchtigkeit im gedampften Getreide. Verwenden Sie den Rechner, um Ihr genaues Dampfgewicht-Ziel zu finden.',
        'Inokulieren Sie mit 1 g/kg fur Standardsporen, 0,5 g/kg fur konzentrierte oder 2 g/kg fur verdunnte Mischungen.',
        'Halten Sie 28-34C und uber 65% Luftfeuchtigkeit wahrend der Inkubation. Ruhen Sie alle 12 Stunden nach Stunde 18 um.',
        'Achten Sie auf den exothermen Peak bei 18-36 Stunden. Wenn die Temperatur 38C uberschreitet, sofort umruhren und Hitze reduzieren.',
        'Vertrauen Sie Ihren Sinnen: suBer Maronenaroma = guter Koji. Ammoniak- oder Sauergeruch = Uberhitzung oder Kontamination.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
