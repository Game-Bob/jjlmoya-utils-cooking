import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Eis PAC POD Rechner Kryo Formulierungs Leitfaden";
const description = "Berechnen Sie die Gefrierkraft und Süßkraft für Speiseeis. Formulieren Sie präzise Zuckerprofile, Feststoffanteil und Serviertemperaturen.";
const faq = [
  {
    question: "Was ist PAC in der Eisformulierung?",
    answer: "PAC steht für Potere Anticongelante und repräsentiert die Gefrierkraft. Es bestimmt, wie viel Wasser bei einer bestimmten Serviertemperatur gefroren bleibt, und kontrolliert die physikalische Härte des Eises."
  },
  {
    question: "Was ist POD und warum ist es wichtig?",
    answer: "POD steht für Potere Dolcificante und repräsentiert die relative Süßkraft. Es misst die Süße im Vergleich zu Saccharose (Haushaltszucker), die einen Basiswert von 100 hat."
  },
  {
    question: "Warum gleichen wir mehrere Zucker in Speiseeis aus?",
    answer: "Verschiedene Zucker haben einzigartige PAC und POD Eigenschaften. Dextrose bietet beispielsweise eine hohe Gefrierkraft bei moderater Süße, während Saccharose standardmäßig Körper und Süße liefert. Durch Mischen kann man die Cremigkeit steuern, ohne das Produkt übermäßig süß zu machen."
  },
  {
    question: "Was ist der optimale Feststoffanteil für Speiseeis?",
    answer: "Der Gesamtfeststoffanteil liegt typischerweise zwischen 36% und 42%. Ein Feststoffanteil unterhalb dieses Bereichs führt zu eisigen Texturen, während ein Anteil darüber zu Sandigkeit oder schwerem Mundgefühl führen kann."
  }
];

const howTo = [
  {
    name: "Basismischung und Serviertemperatur einstellen",
    text: "Definieren Sie das Gewicht Ihrer flüssigen Basismischung und geben Sie die angestrebte Serviertemperatur ein, bei der Sie das Eis servieren möchten."
  },
  {
    name: "Zuckermengen eingeben",
    text: "Passen Sie die Schieberegler für verschiedene Zucker wie Saccharose, Dextrose, Glukose, Invertzucker und Trehalose an, um Ihr Rezept zu erstellen."
  },
  {
    name: "PAC und POD Werte analysieren",
    text: "Vergleichen Sie die berechneten PAC und POD Werte mit den für Ihre Zieltemperatur empfohlenen Zielwerten."
  },
  {
    name: "Feststoffverhältnis und Textur überprüfen",
    text: "Stellen Sie sicher, dass der Gesamtfeststoffanteil im optimalen Bereich liegt, und prüfen Sie den Texturindikator, um die endgültige Konsistenz vorherzusagen."
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
  applicationCategory: 'SoftwareApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'eis-pac-pod',
  title: 'Eis PAC POD Rechner',
  description: 'Berechnen Sie die Gefrierkraft und Süßkraft für Speiseeis. Formulieren Sie präzise Zuckerprofile, Feststoffanteil und Serviertemperaturen.',
  faqTitle: 'Häufig Gestellte Fragen',
  ui: {
    title: "Eis Kryo Rechner",
    subtitle: "Präzises Kryo Formulierungs Dashboard für Molekularküche",
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
    podLabel: "Süßkraft (POD)",
    solidsLabel: "Gesamtfeststoffe",
    targetPacLabel: "Ziel PAC",
    scoopabilityLabel: "Texturzustand",
    stoneState: "Hart wie Stein",
    creamyState: "Perfekte Cremigkeit",
    soupState: "Schmelzsuppe",
    stoneDesc: "Die Gefrierkraft ist für diese Temperatur zu gering. Die Mischung wird steinhart gefrieren.",
    creamyDesc: "Das PAC Gleichgewicht ist optimal. Das Eis wird cremig und leicht portionierbar sein.",
    soupDesc: "Die Gefrierkraft ist zu hoch. Das Eis wird schnell schmelzen und flüssig bleiben.",
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
      text: 'Wissenschaftliche Prinzipien der Kryo Formulierung von Speiseeis und Glasübergangs Phasenkontrolle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Speiseeis ist eine komplexe mehrphasige thermodynamische Emulsion, bestehend aus Luftzellen, Fettkügelchen, Eiskristallen und einer ungefrorenen konzentrierten Serumphase. Die perfekte Cremigkeit und Textur zu erreichen, erfordert eine sorgfältige Kontrolle der Gefrierpunkterniedrigung des Wassers in der Mischung. Wenn die Temperatur unter den Gefrierpunkt fällt, beginnt Wasser zu Eiskristallen zu gefrieren. Die Konzentration gelöster Stoffe im verbleibenden flüssigen Serum steigt, was dessen Gefrierpunkt weiter senkt. Das Gleichgewicht zwischen gefrorenen Wasserkristallen und der ungefrorenen Sirupphase bestimmt die Härte und Geschmeidigkeit des Endprodukts.',
    },
    {
      type: 'title',
      text: 'PAC Verstehen: Gefrierkraft und Depressionsmathematik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC, oder Potere Anticongelante, repräsentiert die Gefrierkraft eines gelösten Stoffes im Verhältnis zu Saccharose. Saccharose wird als Referenzstandard mit einem PAC Wert von 100 festgelegt. Der Mechanismus wird durch kolligative Eigenschaften bestimmt, was bedeutet, dass die Gefrierpunkterniedrigung von der Anzahl der aktiven Moleküle im Wasser abhängt, nicht von ihrer Masse. Monosaccharide wie Dextrose (Molekulargewicht 180 g/mol) liefern etwa doppelt so viele Moleküle pro Gramm wie Disaccharide wie Saccharose (Molekulargewicht 342 g/mol), was zu einem PAC von 190 führt. Höhere PAC Werte bedeuten, dass bei einer gegebenen Temperatur mehr Wasser flüssig bleibt, was verhindert, dass das Eis steinhart gefriert.',
    },
    {
      type: 'title',
      text: 'POD Verstehen: Süßkraft und Sensorisches Gleichgewicht',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD, oder Potere Dolcificante, ist eine Kennzahl für die relative Süße im Vergleich zu Saccharose (Basiswert 100). Bei der Formulierung hochwertiger Speiseeis ist das Ausbalancieren der Süße genauso wichtig wie die strukturelle Festigkeit. Wenn ein Formulierer nur Saccharose verwendet, um den Gefrierpunkt zu senken (PAC zu erhöhen), wird das Eis kränkend süß, bevor es die gewünschte Weichheit erreicht. Um diese Einschränkung zu umgehen, nutzt die Molekularküche Zucker wie Dextrose (POD 70), Trehalose (POD 45) oder atomisierte Glukose DE40 (POD 40). Diese ermöglichen eine individuelle Konfiguration der Gefrierkurve, ohne den Gaumen zu überwältigen.',
    },
    {
      type: 'title',
      text: 'Vergleichende Datenbank üblicher Kryo Formulierungs Zucker',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Zuckerart', 'Relativer PAC', 'Relativer POD', 'Feststoffgehalt (%)', 'Kulinarische Verwendung'],
      rows: [
        ['Saccharose', '100', '100', '100%', 'Standardkörper, sauberes Süßeprofil, Standardbasislinie'],
        ['Dextrose', '190', '70', '100%', 'Senkt Gefrierpunkt, erhöht Weichheit, reduziert Süße'],
        ['Glukose DE40', '90', '40', '95%', 'Gibt Körper, verhindert Rekristallisation, erhöht Viskosität'],
        ['Invertzucker', '190', '130', '70%', 'Gibt Weichheit, feuchthaltende Eigenschaften, verstärkt Fruchtaromen'],
        ['Trehalose', '100', '45', '90%', 'Niedrigsüßer Körperbildner, schützt Proteine, sauberer Abgang'],
      ],
    },
    {
      type: 'title',
      text: 'Gesamtfeststoffverhältnis und Strukturelle Emulsionsstabilität',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Gesamtfeststoffe umfassen alle nicht wässrigen Elemente in der Formulierung, einschließlich Fette, fettfreie Milchtrockenmasse, Stabilisatoren, Emulgatoren und Zucker. Eine optimale Eismischung enthält zwischen 36% und 42% Gesamtfeststoffe. Wenn der Feststoffgehalt zu niedrig ist, führt der hohe Wassergehalt zu großen Eiskristallen und einer groben Textur. Wenn der Feststoffgehalt zu hoch ist, steigt die Viskosität übermäßig, was zu einem schweren Mundgefühl und möglicher Sandigkeit durch Laktosekristallisation führt.',
    },
    {
      type: 'title',
      text: 'Praktische Schritte für Erfolgreiche Kryo Formulierung',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bestimmen Sie die angestrebte Serviertemperatur Ihrer Vitrine. Gelati werden typischerweise bei -12 Grad Celsius serviert, während industrielle Speiseeis kälter bei -18 Grad Celsius serviert werden.',
        'Berechnen Sie den PAC Zielwert mit der Standardtemperaturformel. Für -12 Grad Celsius beträgt der PAC Zielwert etwa 216.',
        'Wählen Sie eine Zuckermischung. Kombinieren Sie Saccharose für standard Süße, Dextrose zur Senkung des Gefrierpunkts und Glukose zur Verbesserung von Körper und Textur.',
        'Überprüfen Sie, dass die Gesamtfeststoffe im sicheren Bereich von 36% bis 42% liegen, um optimale Belüftung und ein glattes Schmelzprofil auf der Zunge zu gewährleisten.'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
