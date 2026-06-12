import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Spherification Bath Calculator Precision Molecular Gastronomy Guide";
const description = "Berechne exakte Verhaltnisse von Natriumalginat und Calciumlactat fur direkte und reverse Spharifikation. Korrigiere Viskositat und Aziditat mit Xanthan und Citrat.";

const faq = [
  {
    question: "Was ist der Unterschied zwischen direkter und reverser Spharifikation?",
    answer: "Bei der direkten Spharifikation wird Natriumalginat zur aromatisierten Basis gegeben und in ein Calciumbad getropft, wodurch eine dunne Membran entsteht, die nach innen geliert. Bei der reversen Spharifikation wird Calcium zur Basis gegeben und in ein Alginatbad getropft, wodurch eine Membran nach auBen wachst und der Gelierprozess durch Abspulen gestoppt wird."
  },
  {
    question: "Warum werden meine Kugeln flach oder sinken nicht?",
    answer: "Wenn die aromatisierte Basisflussigkeit eine geringere Dichte als das Natriumalginatbad hat, schwimmt sie anstatt eine Kugel zu bilden. Durch Zugabe einer kleinen Menge Xanthan erhohst du die Viskositat der Basis, sodass sie sinkt und perfekte Kugeln bildet."
  },
  {
    question: "Was bewirkt Natriumcitrat bei der Spharifikation?",
    answer: "Natriumcitrat ist ein Sequestrierungsmittel, das Calciumionen bindet und den pH-Wert erhoht. Wenn eine Basisflussigkeit stark sauer ist (pH unter 4,5) oder Calcium enthalt, geliert das Natriumalginat vorzeitig. Die Zugabe von Citrat neutralisiert diese Saure."
  },
  {
    question: "Kann ich jedes beliebige Wasser fur das Calciumbad verwenden?",
    answer: "Leitungswasser mit hohem Mineralgehalt kann dazu fuhren, dass Natriumalginat verklumpt oder vorzeitig geliert. Verwende am besten destilliertes Wasser oder calciumarmes Flaschenwasser."
  }
];

const howTo = [
  {
    name: "Spharifikationsmethode auswahlen",
    text: "Wahle Direkt fur dunnflussige, sofortige Gelierung oder Revers fur Flussigkeiten mit Alkohol, Milchprodukten oder Calcium."
  },
  {
    name: "Flussigkeitsmengen eingeben",
    text: "Gib das Gewicht deiner aromatisierten Basisflussigkeit und des Wasserbads in deiner bevorzugten Einheit ein."
  },
  {
    name: "Textur- und Saurekorrekturen hinzufugen",
    text: "Aktiviere Xanthan, wenn deine Basisflussigkeit dunn ist, oder Natriumcitrat, wenn sie stark sauer ist."
  },
  {
    name: "Zutaten abmessen",
    text: "Wiege die genauen Mengen an Natriumalginat, Calciumlactat oder -chlorid sowie die Korrekturmittel ab, die in der Zusammenfassung angezeigt werden."
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
  slug: 'spherifikationsbad-rechner',
  title: 'Spherifikationsbad Rechner',
  description: 'Berechne exakte Verhaltnisse von Natriumalginat und Calciumlactat fur direkte und reverse Spharifikation. Korrigiere Viskositat und Aziditat mit Xanthan und Citrat.',
  faqTitle: 'Haufig gestellte Fragen',
  ui: {
    title: "Spherifikationsbad Rechner",
    subtitle: "Prazise Verhaltnissteuerung fur direkte und reverse Spharifikation",
    unitLabel: "Maßeinheit",
    metricUnit: "Metrisch (g / Gramm)",
    imperialUnit: "Imperial (oz / Unzen)",
    methodLabel: "Spharifikationsmethode",
    directMethod: "Direkte Spharifikation",
    reverseMethod: "Reverse Spharifikation",
    baseWeightLabel: "Gewicht der Basisflussigkeit",
    bathWeightLabel: "Gewicht des Badewassers",
    xanthanLabel: "Xanthan aktivieren (Viskositatskorrektur)",
    citrateLabel: "Natriumcitrat aktivieren (Saure/pH-Sequestrierung)",
    recipeTitle: "Berechnete Rezeptzusammenfassung",
    baseGellingAgent: "Geliermittel fur die Basis",
    bathGellingAgent: "Geliermittel fur das Bad",
    xanthanGum: "Xanthan (Verdickungsmittel)",
    sodiumCitrate: "Natriumcitrat (Puffer)",
    warningLabel: "Loslichkeitswarnung",
    warningDesc: "Das erforderliche Wirkstoffgewicht liegt nahe an oder uber der Loslichkeitsgrenze fur diese Flussigkeitsmenge. Das Auflosen kann langer dauern oder eine sanfte Erwarmung erfordern.",
    directDesc: "Ideal fur leichte Flussigkeiten mit niedrigem Calciumgehalt. Erzeugt delikate, dunnhautige Kugeln, die sofort serviert werden mussen.",
    reverseDesc: "Ideal fur Milchprodukte, Alkohol, calciumreiche oder saure Flussigkeiten. Erzeugt stabile Kugeln, die nach dem Abspulen nicht weiter gelieren.",
    sodiumAlginate: "Natriumalginat",
    calciumChloride: "Calciumchlorid",
    calciumLactate: "Calciumlactat",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Die Wissenschaft der molekularen Spharifikation und Hydrokolloidgelierung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Spharifikation ist eine revolutionare kulinarische Technik, die einen flussigen Kern in einer dunnen, gelierten Membran einschließt. Ursprunglich in den 1940er Jahren in der industriellen Verpackungsbranche entwickelt, wurde sie Anfang der 2000er Jahre fur die moderne Kuche adaptiert. Die zugrundeliegende Chemie beruht auf den Wechselwirkungen von Hydrokolloiden, insbesondere der Vernetzung von Natriumalginatpolymeren bei Kontakt mit divalenten Calciumkationen.',
    },
    {
      type: 'title',
      text: 'Die molekulare Chemie: Natriumalginat und Calciumionen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Natriumalginat ist ein aus Braunalgen gewonnenes Polysaccharid, das aus linearen Ketten von beta-D-Mannuronsaure (M-Blocke) und alpha-L-Guluronsaure (G-Blocke) besteht. In seiner Natriumsalzform ist es vollstandig wasserloslich und bildet eine viskose Losung. Wenn Calciumionen (wie Calciumchlorid oder Calciumlactatgluconat) zugefugt werden, ersetzen die zweiwertigen Calciumionen (Ca2+) die einwertigen Natriumionen (Na+). Da Calcium zwei positive Ladungen tragt, bindet es an zwei G-Blocke benachbarter Polymerketten und verbruckt sie miteinander. Dieser Prozess, wissenschaftlich als <strong>Eierkartonmodell</strong> der Gelierung bezeichnet, verbindet die unabhangigen Polysaccharidketten zu einem starren, dreidimensionalen Hydrogelnetzwerk, das Wasser und Aromamolekule einschließt.',
    },
    {
      type: 'title',
      text: 'Direkte versus reverse Spharifikation: Mechanismen im Vergleich',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die beiden Hauptmethoden der Spharifikation unterscheiden sich darin, wo Geliermittel und Calciumsalze platziert werden, was zu unterschiedlichen mechanischen Eigenschaften fuhrt:',
    },
    {
      type: 'list',
      items: [
        '<strong>Direkte Spharifikation:</strong> Natriumalginat wird in der aromatisierten Basisflussigkeit gelost, die dann in ein Calciumbad (ublicherweise 1,0% Calciumchlorid) getropft wird. Die Gelierung beginnt sofort an der Grenzflache. Da Calciumionen klein und mobil sind, wandern sie kontinuierlich vom Bad in den Kern der Kugel, wodurch die Gelmembran nach innen wachst. Wird die Kugel nicht sofort abgespult und serviert, geliert sie schließlich vollstandig durch und verwandelt sich in eine feste, gummartige Perle.',
        '<strong>Reverse Spharifikation:</strong> Calciumlactatgluconat (2,0%) wird in der aromatisierten Basisflussigkeit gelost, die dann in ein Natriumalginatbad (0,5%) getropft wird. Da Alginatmolekule groB und langsam sind, konnen sie die neu gebildete Gelbarriere nicht leicht uberqueren. Stattdessen wandern Calciumionen nach außen in das Bad und lassen die Membran nach außen wachsen. Dies stoppt die Gelierung sofort, sobald die Kugel entnommen und in klarem Wasser abgespult wird, und erhalt einen vollstandig flussigen Kern auf unbestimmte Zeit.'
      ],
    },
    {
      type: 'title',
      text: 'Saure- und pH-Barrieren mit Natriumcitrat uberwinden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Natriumalginat reagiert stark empfindlich auf Saure. Wenn der pH-Wert einer aromatisierten Basisflussigkeit unter 4,5 fallt, konnen sich die Alginatmolekule nicht richtig hydratisieren. Statt sich aufzulosen, fallen die Alginatketten als unlosliche Alginsaure aus und bilden fadenformige Klumpen. Um dies zu losen, verwenden Koche <strong>Natriumcitrat</strong> als Puffermittel. Natriumcitrat neutralisiert die Wasserstoffionen und erhoht den pH-Wert von sauren Zutaten wie Passionsfrucht- oder Limettensaft uber die kritische Schwelle von 4,5, sodass sich das Alginat vollstandig hydratisieren und saubere, kugelformige Gebilde formen kann.',
    },
    {
      type: 'title',
      text: 'Anpassung von Dichte und Viskositat mit Xanthan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um eine Kugel zu formen, muss der Tropfen der aromatisierten Basisflussigkeit vollstandig im Gelierbad eintauchen. Wenn die aromatisierte Basisflussigkeit eine geringere Dichte als das Bad hat (wie ein leichter Alkohol oder ein saft auf Wasserbasis in einem dicken Natriumalginatbad bei der reversen Spharifikation), schwimmt sie an der Oberflache und flacht ab. Die Zugabe einer winzigen Menge <strong>Xanthan</strong> (typischerweise 0,1% bis 0,2%) erhoht die Viskositat der Basisflussigkeit. Diese zusatzliche Korperhaftigkeit verleiht dem Tropfen den nötigen Schwung, um in das Bad einzutauchen, sodass die Oberflachenspannung den Tropfen zu einer perfekten Kugel formen kann.',
    },
    {
      type: 'table',
      headers: ['Spharifikationsmethode', 'Ideale Zutaten', 'Erforderliche Zusatze', 'Lagereigenschaften', 'Gelierrichtung'],
      rows: [
        ['Direkte Methode', 'Calciumarme Fruchtsafte, klare Bruhen, suße Sirupe', '0,5% Natriumalginat in der Basis, 1,0% Calciumchlorid im Bad', 'Muss sofort serviert werden, geliert mit der Zeit durch', 'Nach innen (zum Zentrum hin)'],
        ['Reverse Methode', 'Milchprodukte, Alkohol, calciumreiche oder stark saure Flussigkeiten', '2,0% Calciumlactat in der Basis, 0,5% Natriumalginat im Bad', 'Sehr stabil, kann stundenlang in Ol oder Wasser aufbewahrt werden', 'Nach außen (vom Zentrum weg)'],
      ],
    },
    {
      type: 'title',
      text: 'Abspulen und abschließende Konservierung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Spule die fertigen Kugeln sofort nach der Entnahme aus dem Gelierbad in einem Bad mit sauberem, kaltem Wasser ab. Dies entfernt anhaftende Calcium- oder Alginatreste von der Außenhaut, stoppt die chemische Reaktion und verhindert Fehlgeschmack (insbesondere den leicht bitteren Geschmack von Calciumchlorid). Zur Aufbewahrung kannst du die Kugeln in eine Flussigkeit mit passender Dichte legen (wie die aromatisierte Basisflussigkeit ohne Zusatze oder einen leichten Zuckersirup), um zu verhindern, dass Wasser durch Osmose durch die Membran wandert und die Kugeln schrumpfen oder platzen.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
