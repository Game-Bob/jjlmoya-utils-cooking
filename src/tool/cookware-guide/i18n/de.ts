import type { ToolLocaleContent } from '../../../types';

const title = "Intelligenter Pfannen Finder: Kochgeschirr Leitfaden";
const description = "Interaktiver Leitfaden zur Auswahl der besten Pfanne oder des besten Topfes passend zu Ihrem Kochstil. Eisen vs. Stahl vs. Teflon. Finden Sie Ihr perfektes Werkzeug.";
const faq = [
  {
    question: 'Welche Pfanne ist die beste für den täglichen Gebrauch?',
    answer: 'Für die meisten sind eine hochwertige Edelstahlpfanne oder eine gut eingebrannte Gusseisenpfanne am besten. Edelstahl ist vielseitig und unvergänglich, während Eisen eine natürliche Antihaftbeschichtung ohne Chemikalien bietet.',
  },
  {
    question: 'Warum bleiben Lebensmittel in Edelstahlpfannen kleben?',
    answer: 'Meist liegt es an zu niedriger Temperatur oder daran, dass das Bratgut zu früh hineingegeben wurde. Probieren Sie den "Leidenfrost-Effekt": Erhitzen Sie die Pfanne, bis ein Wassertropfen wie eine Perle rollt. Dann ist sie bereit.',
  },
  {
    question: 'Woher weiß ich, ob meine Pfanne sicher ist?',
    answer: 'Achten Sie auf das Label "PFOA-frei". Pfannen aus Eisen, Carbonstahl und Edelstahl sind die sichersten und langlebigsten Optionen, da sie keine Beschichtungen haben, die mit der Zeit zerfallen.',
  },
  {
    question: 'Was bedeutet es, eine Pfanne "einzubrennen"?',
    answer: 'Es ist der Prozess, bei dem eine Schicht aus polymerisiertem Öl auf dem Metall (Eisen oder Stahl) erzeugt wird. Dies schützt vor Rost und schafft eine natürliche Antihaftoberfläche, die mit jedem Gebrauch besser wird.',
  },
  {
    question: 'Wie viel sollte ich für eine gute Pfanne ausgeben?',
    answer: 'Ein Set aus 2-3 hochwertigen Pfannen (Edelstahl oder Eisen) kann 20+ Jahre halten. Es ist besser, einmal in eine sehr gute Pfanne zu investieren, als 5 billige zu kaufen, die nur 2 Jahre halten. Qualität vor Quantität.',
  },
];
const howTo = [
  {
    name: 'Kochstil wählen',
    text: 'Wählen Sie zwischen hoher Hitze (Anbraten), empfindlichen Speisen (Eier), Schmorgerichten (langsames Garen) oder schnellem Kochen. Jeder Stil hat andere Anforderungen.',
  },
  {
    name: 'Ideales Material wählen',
    text: 'Basierend auf Ihrem Stil empfiehlt das Tool das beste Material: Eisen, Edelstahl, Kupfer oder Teflon.',
  },
  {
    name: 'Eigenschaften lesen',
    text: 'Verstehen Sie Vor- und Nachteile, Wartung und Langlebigkeit. Wählen Sie dann die spezifische Pfanne, die zu Ihrem Budget und Ihren Bedürfnissen passt.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
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
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'pfannen-guide',
  title: 'Intelligenter Pfannen Finder: Kochgeschirr Leitfaden',
  description: 'Interaktiver Leitfaden zur Auswahl der besten Pfanne oder des besten Topfes passend zu Ihrem Kochstil. Eisen vs. Stahl vs. Teflon. Finden Sie Ihr perfektes Werkzeug.',
  faqTitle: 'Häufig gestellte Fragen',
  faq,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: 'The Flavor Bible - Pairing, and Progress in Food',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'On Food and Cooking - Harold McGee',
      url: 'https://www.foodscience.org/',
    },
    {
      name: 'Salt Fat Acid Heat - Samin Nosrat',
      url: 'https://www.saltfatacidheat.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Pfannenmaterialien: Wissenschaft und Praxis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nicht alle Pfannen sind gleich. Jedes Material hat unterschiedliche thermodynamische Eigenschaften, die beeinflussen, wie es Wärme verteilt, welche Temperaturen es aushält und wie es mit Lebensmitteln interagiert. Diese Unterschiede zu verstehen, ist der Schlüssel zur Wahl des richtigen Werkzeugs.',
    },
    {
      type: 'title',
      text: 'Gusseisen: Der Klassiker',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Vorteile:</strong> Exzellente Wärmespeicherung, gleichmäßige Verteilung, natürliche Antihaftwirkung (wenn eingebrannt), hält Jahrhunderte, wird mit der Zeit besser. <strong>Nachteile:</strong> Schwer, erfordert Pflege, kann rosten, braucht länger zum Aufheizen, nicht geeignet für längeres Kochen mit Säuren.',
    },
    {
      type: 'title',
      text: 'Edelstahl: Der Allrounder',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Vorteile:</strong> Langlebig, pflegeleicht, säurebeständig (Wein, Tomaten), leicht zu reinigen, vielseitig, relativ preiswert. <strong>Nachteile:</strong> Nicht von Natur aus antihaftbeschichtet, erfordert Technik (gut vorheizen), ungleichmäßige Wärmeverteilung (besser bei Mehrschichtboden).',
    },
    {
      type: 'title',
      text: 'Teflon/PTFE: Die Bequeme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Vorteile:</strong> Sofortige Antihaftwirkung, einfaches Kochen, leicht zu reinigen, preiswert. <strong>Nachteile:</strong> Zerfällt mit Zeit und Temperatur, muss alle 3-5 Jahre ersetzt werden, nicht sicher bei sehr hohen Temperaturen (>260°C).',
    },
  ],
  ui: {
    cookingStyle: 'Wie kochen Sie normalerweise?',
    material: 'Materialart',
    highHeat: 'Hohe Hitze',
    sear: 'Anbraten / Versiegeln',
    delicate: 'Empfindlich',
    fry: 'Eier / Omeletts',
    stew: 'Schmorgerichte',
    slowCook: 'Langsames Garen',
    fast: 'Schnell',
    quick: 'Schnelles Kochen',
    recommendation: 'Empfehlung',
    characteristics: 'Eigenschaften',
    castIron: 'Gusseisen',
    stainlessSteel: 'Edelstahl',
    carbon: 'Carbonstahl',
    copper: 'Kupfer',
    nonstick: 'Antihaft (Teflon)',
    advantages: 'Vorteile',
    disadvantages: 'Nachteile',
    maintenance: 'Pflege',
    durability: 'Langlebigkeit',
    heatRetention: 'Wärmespeicherung',
    price: 'Preis',
    step1: 'Wie kochen Sie normalerweise?',
    step2: 'Pflegeaufwand',
    maintenanceLazy: 'Niedrig / Keiner',
    maintenanceLazyDesc: 'Keine komplizierte Reinigung.',
    maintenanceCare: 'Mittel',
    maintenanceCareDesc: 'Normale Handwäsche.',
    maintenanceRitual: 'Ritual (Hoch)',
    maintenanceRitualDesc: 'Ich genieße das Einbrennen.',
    idealPan: 'Ihre ideale Pfanne',
    selectOptions: 'Optionen wählen',
    seeRecommendation: 'Um Ihre Empfehlung zu sehen',
    pro: 'PRO',
    con: 'CONTRA',
    masterTip: 'Meister-Tipp',
    defaultTip: 'Die Kombination aus einer Edelstahlpfanne zum Anbraten und einer Antihaftpfanne für Eier ist die Basis jeder effizienten Küche.',
    stainlessName: 'Edelstahl',
    stainlessTag: 'Der Profi-Allrounder',
    stainlessPro: 'Ewig haltbar und reaktionsfrei. Perfektes Anbraten.',
    stainlessCon: 'Erfordert Technik (Temp.), damit nichts klebt.',
    stainlessTip: 'Nutzen Sie den Leidenfrost-Effekt: Wenn ein Wassertropfen wie eine Perle rollt, ist sie bereit.',
    nonstickName: 'Antihaftbeschichtet',
    nonstickTag: 'Maximaler Komfort',
    nonstickPro: 'Nichts bleibt kleben. Einfache Reinigung.',
    nonstickCon: 'Hält kurz (2-3 Jahre). Keine hohe Hitze.',
    nonstickTip: 'Immer von Hand waschen und Holz-/Silikonwerkzeuge verwenden, um die Lebensdauer zu verdoppeln.',
    castironName: 'Gusseisen',
    castironTag: 'Der zeitlose Klassiker',
    castironPro: 'Unglaubliche Wärmespeicherung. Unvergänglich.',
    castironCon: 'Sehr schwer. Erfordert regelmäßiges Einbrennen.',
    castironTip: 'Heizt langsam auf, ist aber einmal heiß wie ein Panzer. Ideal für Steaks.',
    carbonName: 'Carbonstahl',
    carbonTag: 'Agilität am Herd',
    carbonPro: 'Leicht wie Edelstahl, fast so gut wie Gusseisen.',
    carbonCon: 'Rostet, wenn sie feucht bleibt. Rustikale Ästhetik.',
    carbonTip: 'Je schwärzer und hässlicher sie wird, desto besser funktioniert sie. Geheimnis der besten Woks.',
    enamelName: 'Emaille-Gusseisen',
    enamelTag: 'Gourmet-Qualität',
    enamelPro: 'Bestes langsames Kochen. Wunderschöne Ästhetik.',
    enamelCon: 'Sehr teuer. Emaille ist stoßempfindlich.',
    enamelTip: 'Perfekt für endlose Schmorgerichte. Die Emaille erlaubt problemloses Kochen mit Säuren (Tomate).',
  },
  schemas: [faqSchema, howToSchema, appSchema],
};
