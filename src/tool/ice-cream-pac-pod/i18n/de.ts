import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Eis PAC POD Rechner Kryo Formulierungs Leitfaden";
const description = "Berechnen Sie die Gefrierkraft und Susskraft fur Speiseeis. Formulieren Sie prazise Zuckerprofile, Feststoffanteil und Serviertemperaturen.";
const faq = [
  {
    question: "Was ist PAC in der Eisformulierung?",
    answer: "PAC steht fur Potere Anticongelante und reprasentiert die Gefrierkraft. Es bestimmt, wie viel Wasser bei einer bestimmten Serviertemperatur gefroren bleibt, und kontrolliert die physikalische Harte des Eises."
  },
  {
    question: "Was ist POD und warum ist es wichtig?",
    answer: "POD steht fur Potere Dolcificante und reprasentiert die relative Susskraft. Es misst die Susse im Vergleich zu Saccharose (Haushaltszucker), die einen Basiswert von 100 hat."
  },
  {
    question: "Warum gleichen wir mehrere Zucker in Speiseeis aus?",
    answer: "Verschiedene Zucker haben einzigartige PAC und POD Eigenschaften. Dextrose bietet beispielsweise eine hohe Gefrierkraft bei moderater Susse, wahrend Saccharose standardmassig Korper und Susse liefert. Durch Mischen kann man die Cremigkeit steuern, ohne das Produkt ubermassig sus zu machen."
  },
  {
    question: "Was ist der optimale Feststoffanteil fur Speiseeis?",
    answer: "Der Gesamtfeststoffanteil liegt typischerweise zwischen 36% und 42%. Ein Feststoffanteil unterhalb dieses Bereichs fuhrt zu eisigen Texturen, wahrend ein Anteil daruber zu Sandigkeit oder schwerem Mundgefuhl fuhren kann."
  }
];

const howTo = [
  {
    name: "Basismischung und Serviertemperatur einstellen",
    text: "Definieren Sie das Gewicht Ihrer flussigen Basismischung und geben Sie die angestrebte Serviertemperatur ein, bei der Sie das Eis servieren mochten."
  },
  {
    name: "Zuckermengen eingeben",
    text: "Passen Sie die Schieberegler fur verschiedene Zucker wie Saccharose, Dextrose, Glukose, Invertzucker und Trehalose an, um Ihr Rezept zu erstellen."
  },
  {
    name: "PAC und POD Werte analysieren",
    text: "Vergleichen Sie die berechneten PAC und POD Werte mit den fur Ihre Zieltemperatur empfohlenen Zielwerten."
  },
  {
    name: "Feststoffverhaltnis und Textur uberprufen",
    text: "Stellen Sie sicher, dass der Gesamtfeststoffanteil im optimalen Bereich liegt, und prufen Sie den Texturindikator, um die endgultige Konsistenz vorherzusagen."
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
  slug: 'eis-pac-pod',
  title: 'Eis PAC POD Rechner',
  description: 'Berechnen Sie die Gefrierkraft und Susskraft fur Speiseeis. Formulieren Sie prazise Zuckerprofile, Feststoffanteil und Serviertemperaturen.',
  faqTitle: 'Haufig Gestellte Fragen',
  ui: {
    title: "Eis Kryo Rechner",
    subtitle: "Prazises Kryo Formulierungs Dashboard fur Molekularkuche",
    unitLabel: "Einheitensystem",
    metricUnit: "Metrisch (Gramm)",
    imperialUnit: "Imperial (Unzen)",
    baseWeightLabel: "Basismischungs Gewicht",
    targetTempLabel: "Serviertemperatur",
    sucroseLabel: "Saccharose",
    dextroseLabel: "Dextrose",
    glucoseLabel: "Glukose DE40",
    invertedLabel: "Invertzucker",
    trehaloseLabel: "Trehalose",
    pacLabel: "Gefrierkraft (PAC)",
    podLabel: "Susskraft (POD)",
    solidsLabel: "Gesamtfeststoffe",
    targetPacLabel: "Ziel PAC",
    scoopabilityLabel: "Texturzustand",
    stoneState: "Hart wie Stein",
    creamyState: "Perfekte Cremigkeit",
    soupState: "Schmelzsuppe",
    stoneDesc: "Die Gefrierkraft ist fur diese Temperatur zu gering. Die Mischung wird steinhart gefrieren.",
    creamyDesc: "Das PAC Gleichgewicht ist optimal. Das Eis wird cremig und leicht portionierbar sein.",
    soupDesc: "Die Gefrierkraft ist zu hoch. Das Eis wird schnell schmelzen undflussig bleiben.",
    gLabel: "g",
    ozLabel: "oz",
    cLabel: "Grad C",
    fLabel: "Grad F",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Wissenschaftliche Prinzipien der Kryo Formulierung von Speiseeis und Glasubergangs Phasenkontrolle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Speiseeis ist eine komplexe mehrphasige thermodynamische Emulsion, bestehend aus Luftzellen, Fettkugelchen, Eiskristallen und einer ungefrorenen konzentrierten Serumphase. Die perfekte Cremigkeit und Textur zu erreichen, erfordert eine sorgfaltige Kontrolle der Gefrierpunkterniedrigung des Wassers in der Mischung. Wenn die Temperatur unter den Gefrierpunkt fallt, beginnt Wasser zu Eiskristallen zu gefrieren. Die Konzentration geloster Stoffe im verbleibenden flussigen Serum steigt, was dessen Gefrierpunkt weiter senkt. Das Gleichgewicht zwischen gefrorenen Wasserkristallen und der ungefrorenen Sirupphase bestimmt die Harte und Geschmeidigkeit des Endprodukts.',
    },
    {
      type: 'title',
      text: 'PAC Verstehen: Gefrierkraft und Depressionsmathematik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC, oder Potere Anticongelante, reprasentiert die Gefrierkraft eines gelosten Stoffes im Verhaltnis zu Saccharose. Saccharose wird als Referenzstandard mit einem PAC Wert von 100 festgelegt. Der Mechanismus wird durch kolligative Eigenschaften bestimmt, was bedeutet, dass die Gefrierpunkterniedrigung von der Anzahl der aktiven Molekule im Wasser abhangt, nicht von ihrer Masse. Monosaccharide wie Dextrose (Molekulargewicht 180 g/mol) liefern etwa doppelt so viele Molekule pro Gramm wie Disaccharide wie Saccharose (Molekulargewicht 342 g/mol), was zu einem PAC von 190 fuhrt. Hohere PAC Werte bedeuten, dass bei einer gegebenen Temperatur mehr Wasserflussig bleibt, was verhindert, dass das Eis steinhart gefriert.',
    },
    {
      type: 'title',
      text: 'POD Verstehen: Susskraft und Sensorisches Gleichgewicht',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD, oder Potere Dolcificante, ist eine Kennzahl fur die relative Susse im Vergleich zu Saccharose (Basiswert 100). Bei der Formulierung hochwertiger Speiseeis ist das Ausbalancieren der Susse genauso wichtig wie die strukturelle Festigkeit. Wenn ein Formulierer nur Saccharose verwendet, um den Gefrierpunkt zu senken (PAC zu erhohen), wird das Eis krankend sus, bevor es die gewunschte Weichheit erreicht. Um diese Einschrankung zu umgehen, nutzt die Molekularkuche Zucker wie Dextrose (POD 70), Trehalose (POD 45) oder atomisierte Glukose DE40 (POD 40). Diese ermoglichen eine individuelle Konfiguration der Gefrierkurve, ohne den Gaumen zu uberwaltigen.',
    },
    {
      type: 'title',
      text: 'Vergleichende Datenbankublicher Kryo Formulierungs Zucker',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Zuckerart', 'Relativer PAC', 'Relativer POD', 'Feststoffgehalt (%)', 'Kulinarische Verwendung'],
      rows: [
        ['Saccharose', '100', '100', '100%', 'Standardkorper, sauberes Susseprofil, Standardbasislinie'],
        ['Dextrose', '190', '70', '100%', 'Senkt Gefrierpunkt, erhoht Weichheit, reduziert Susse'],
        ['Glukose DE40', '90', '40', '95%', 'Gibt Korper, verhindert Rekristallisation, erhoht Viskositat'],
        ['Invertzucker', '190', '130', '70%', 'Gibt Weichheit, feuchthaltende Eigenschaften, verstarkt Fruchtaromen'],
        ['Trehalose', '100', '45', '90%', 'Niedrigsusser Korperbildner, schutzt Proteine, sauberer Abgang'],
      ],
    },
    {
      type: 'title',
      text: 'Gesamtfeststoffverhaltnis und Strukturelle Emulsionsstabilitat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Gesamtfeststoffe umfassen alle nicht wassrigen Elemente in der Formulierung, einschliesslich Fette, fettfreie Milchtrockenmasse, Stabilisatoren, Emulgatoren und Zucker. Eine optimale Eismischung enthalt zwischen 36% und 42% Gesamtfeststoffe. Wenn der Feststoffgehalt zu niedrig ist, fuhrt der hohe Wassergehalt zu grossen Eiskristallen und einer groben Textur. Wenn der Feststoffgehalt zu hoch ist, steigt die Viskositat ubermassig, was zu einem schweren Mundgefuhl und moglicher Sandigkeit durch Laktosekristallisation fuhrt.',
    },
    {
      type: 'title',
      text: 'Praktische Schritte fur Erfolgreiche Kryo Formulierung',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bestimmen Sie die angestrebte Serviertemperatur Ihrer Vitrine. Gelati werden typischerweise bei -12 Grad Celsius serviert, wahrend industrielle Speiseeis kalter bei -18 Grad Celsius serviert werden.',
        'Berechnen Sie den PAC Zielwert mit der Standardtemperaturformel. Fur -12 Grad Celsius betragt der PAC Zielwert etwa 216.',
        'Wahlen Sie eine Zuckermischung. Kombinieren Sie Saccharose fur standard Susse, Dextrose zur Senkung des Gefrierpunkts und Glukose zur Verbesserung von Korper und Textur.',
        'Uberprufen Sie, dass die Gesamtfeststoffe im sicheren Bereich von 36% bis 42% liegen, um optimale Beluftung und ein glattes Schmelzprofil auf der Zunge zu gewahrleisten.'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
