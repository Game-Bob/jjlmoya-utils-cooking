import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Lacto Fermentationsalz Rechner Bio Organischer Wissenschaftlicher Leitfaden";
const description = "Berechnen Sie präzise Salzprozente für Trockensalzen und Nasspökelung. Gleichen Sie Bakterienpopulationen aus, verhindern Sie Schimmel und meistern Sie die Lebensmittelkonservierung.";
const faq = [
  {
    question: "Warum ist der Salzprozentsatz bei der Lacto-Fermentation entscheidend?",
    answer: "Salz unterdrückt schädliche Krankheitserreger und Schimmelpilze durch osmotischen Druck, während es salztoleranten Milchsäurebakterien (LAB) ermöglicht, zu gedeihen, Zucker zu vergären und Milchsäure zu produzieren."
  },
  {
    question: "Was ist der Unterschied zwischen Trockensalzen und Nasspökelung?",
    answer: "Beim Trockensalzen wird die eigene Feuchtigkeit des Lebensmittels genutzt, um das Salz zu lösen (ideal für geraspelten Kohl). Bei der Nasspökelung wird externes Wasser und Salz hinzugefügt, um ganze oder stückige Gemüse vollständig zu bedecken."
  },
  {
    question: "Kann ich gechlortes Leitungswasser zur Fermentation verwenden?",
    answer: "Chlor kann das Bakterienwachstum hemmen. Es wird dringend empfohlen, gefiltertes oder Quellwasser für gleichmäßige Fermentationsergebnisse zu verwenden."
  },
  {
    question: "Ist der Gewichtsprozentsatz besser als Volumenmessungen?",
    answer: "Ja. Verschiedene Salzsorten (Kosher, Meersalz, Tafelsalz) haben unterschiedliche Kristallgrößen und Dichten. Das Abwiegen von Salz in Gramm gewährleistet eine exakte Salinität, unabhängig von der verwendeten Salzart."
  }
];

const howTo = [
  {
    name: "Fermentationsmodus wählen",
    text: "Wählen Sie den Trockenmodus, wenn Sie den eigenen Saft des Gemüses nutzen, oder den Nassmodus, wenn Sie Wasser hinzufügen, um die Zutaten zu bedecken."
  },
  {
    name: "Zutaten abwiegen",
    text: "Geben Sie das genaue Gewicht des Gemüses in Gramm ein. Bei Nasspökelung geben Sie auch das Gewicht des Wassers ein."
  },
  {
    name: "Salzgehalt anpassen",
    text: "Schieben Sie den Regler für den Salzprozentsatz. Zielen Sie auf 2,0 % bis 3,5 % für allgemeine Sicherheit und optimales Milchsäurebakterienwachstum."
  },
  {
    name: "Salz abmessen",
    text: "Verwenden Sie die Digitalwaage, um die exakten Gramm Salz abzumessen. Geben Sie es in Ihr Fermentationsgefäß."
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
  slug: 'lacto-fermentationsalz-rechner',
  title: 'Lacto Fermentationsalz Rechner',
  description: 'Berechnen Sie präzise Salzprozente für Trockensalzen und Nasspökelung. Gleichen Sie Bakterienpopulationen aus, verhindern Sie Schimmel und meistern Sie die Lebensmittelkonservierung.',
  faqTitle: 'Häufig Gestellte Fragen',
  ui: {
    title: "Lacto Fermentationsalz Rechner",
    subtitle: "Präzise Salinitätskontrolle für bio organische Konservierung",
    unitLabel: "Maßsystem",
    metricUnit: "Metrisch (g / Gramm)",
    imperialUnit: "Imperial (oz / Unzen)",
    modeLabel: "Fermentationsmodus",
    dryMode: "Trockensalzen",
    wetMode: "Nasspökelung",
    vegWeightLabel: "Gemüsegewicht",
    waterWeightLabel: "Wassergewicht",
    salinityLabel: "Zielsalinität (%)",
    saltGramsLabel: "Benötigtes Salz",
    fineSaltLabel: "Feinsalz (Teelöffel)",
    kosherSaltLabel: "Koshersalz (Teelöffel)",
    statusDanger: "Gefahrenzone",
    statusDangerDesc: "Eine Salinität unter 2,0 % reicht nicht aus, um Krankheitserreger und Schimmel zu blockieren. Erhöhen Sie die Salinität, um die Sicherheit zu gewährleisten.",
    statusOptimal: "Optimale LAB-Zone",
    statusOptimalDesc: "Eine Salinität zwischen 2,0 % und 3,5 % ist ideal, damit Milchsäurebakterien (LAB) dominieren und sicher fermentieren können.",
    statusInhibited: "Gehemmte Zone",
    statusInhibitedDesc: "Eine Salinität über 3,5 % verlangsamt oder stoppt die Fermentation. Nützlich für die Langzeitkonservierung, verzögert aber die bakterielle Aktivität.",
    petriTitle: "Mikrobiologische Simulation",
    scaleTitle: "Digitalwaagen Anzeige",
    disclaimer: "Hinweis: Das Abwiegen von Salz mit einer Digitalwaage wird gegenüber Volumenmessungen dringend empfohlen.",
    kosherLabel: "Koshersalz",
    fineLabel: "Feinsalz",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Der Ultimative Leitfaden zur Chemie der Lacto-Fermentation und Salinitätskontrolle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Lacto-Fermentation ist ein dynamischer biochemischer Prozess, der von Milchsäurebakterien (LAB) angetrieben wird, um Gemüse und Obst zu konservieren. Der gesamte Mechanismus hängt davon ab, eine selektive Umgebung zu schaffen, in der nützliche Bakterien gedeihen, während Verderbniserreger, Schimmelpilze und Krankheitserreger unterdrückt werden. Die Kontrolle der Salinität ist der kritischste Hebel, um diese biologische Selektivität zu erreichen.',
    },
    {
      type: 'title',
      text: 'Die Biochemische Wirkung von Salz bei der Konservierung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn Salz auf rohes Gemüse aufgebracht wird, wirkt es durch einen physikalischen Prozess, der als <strong>osmotischer Druck</strong> bekannt ist. Die hohe Salzkonzentration außerhalb der pflanzlichen Zellen entzieht den pflanzlichen Geweben durch Osmose (Plasmolyse) Wasser und gelöste Zucker. Dadurch entsteht eine nährstoffreiche Lake, die den Milchsäurebakterien als perfekter Brennstoff dient. Gleichzeitig dehydriert und lysiert der osmotische Druck die Zellmembranen unerwünschter Schimmelpilze, Hefen und pathogener Bakterien wie <em>Escherichia coli</em> oder <em>Clostridium botulinum</em>, die erhöhte Salinitätswerte nicht tolerieren können.',
    },
    {
      type: 'title',
      text: 'Mikrobiologische Sukzession: Wie LAB Fermente Besiedelt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Lacto-Fermentation wird nicht von einer einzigen Bakterienart durchgeführt, sondern von einer Abfolge verschiedener Stämme, die mit zunehmendem Säuregehalt dominieren. Bei einem typischen Gemüseferment durchläuft der Zyklus drei verschiedene Phasen:',
    },
    {
      type: 'list',
      items: [
        '<strong>Phase 1 - Leuconostoc mesenteroides:</strong> Dieses heterofermentative Bakterium leitet die Fermentation ein. Es ist zu Beginn sehr aktiv und produziert Milchsäure, Essigsäure, Kohlendioxid (das zur Schaffung einer anaeroben Atmosphäre beiträgt) und Ethanol. Es senkt schnell den pH-Wert und bereitet das Medium für nachfolgende Arten vor.',
        '<strong>Phase 2 - Lactobacillus plantarum und Lactobacillus brevis:</strong> Wenn der pH-Wert unter 5,0 fällt, stirbt <em>L. mesenteroides</em> ab, und säuretolerante homofermentative Bakterien wie <em>L. plantarum</em> übernehmen. Sie vergären die verbleibenden einfachen Zucker ausschließlich zu Milchsäure und senken den pH-Wert rapide.',
        '<strong>Phase 3 - Pediococcus pentosaceus und andere:</strong> Bei Langzeitfermentationen produzieren diese hochgradig säuretoleranten Bakterien weiterhin Säure, bis der Zucker vollständig aufgebraucht ist oder der pH-Wert bei etwa 3,5 bis 3,8 seinen Tiefpunkt erreicht, wodurch die Umgebung auf unbestimmte Zeit stabilisiert wird.'
      ],
    },
    {
      type: 'title',
      text: 'Schutz der Gemüsetextur: Die Pektin-Verbindung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ein häufiges Problem bei der Fermentation zu Hause ist die Matschigkeit. Pflanzenzellen werden durch ein strukturelles Polysaccharid namens Pektin zusammengehalten. Verderbniserreger produzieren Enzyme namens <strong>Pektinasen</strong>, die Pektin abbauen und die pflanzlichen Zellwände zerstören, was zu Matschigkeit führt. Die Aufrechterhaltung eines Salzgehalts von über 2,0 % hemmt direkt die Aktivität dieser Pekinase-Enzyme. Darüber hinaus können Kalziumionen, die in unraffiniertem Meersalz enthalten oder als Kalziumchlorid zugesetzt werden, mit Pekinmolekülen vernetzen und Kalziumpektat bilden, das Gurken und Sauerkraut knackig hält.',
    },
    {
      type: 'title',
      text: 'Mathematik des Trockensalzens vs. Nasspökelung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das Verständnis der Formel zur Salzberechnung ist entscheidend. Beim Trockensalzen (üblich für geraspeltes Gemüse wie Kohl für Sauerkraut) wird der Salzprozentsatz ausschließlich auf Basis des Gemüsegewichts berechnet. Bei der Nasspökelung (für ganze oder größere Gemüsestücke wie Gurken oder Karotten) muss der Salzprozentsatz auf Basis des <strong>Gesamtgewichts von Gemüse und zugegebenem Wasser</strong> berechnet werden. Die Berechnung des Salzes allein auf Basis des Wassergewichts ist ein häufiger Fehler, der die endgültige Salinität verwässert, da das Wasser im Gemüse die Lake letztendlich verdünnt.',
    },
    {
      type: 'table',
      headers: ['Salinitätsbereich', 'Mikrobiologischer Zustand', 'Typische Anwendungen', 'Sicherheitsniveau'],
      rows: [
        ['< 2,0 %', 'Krankheitserreger-Risiko / Schimmelgefahr', 'Nicht empfohlen', 'Niedrig'],
        ['2,0 % - 2,5 %', 'Optimale Milchsäurebakterien-Blüte', 'Sauerkraut, Kimchi, Gewürzgurken', 'Hoch'],
        ['2,5 % - 3,5 %', 'Verlangsamte Fermentation / Hohe Texturerhaltung', 'Scharfe Soßen, Knoblauch, Wurzelgemüse', 'Hoch'],
        ['> 3,5 %', 'Bakterienhemmung / Nur Konservierung', 'Oliven, lang gereifte Paprika, Hochtemperaturlagerung', 'Sicher aber inaktiv'],
      ],
    },
    {
      type: 'title',
      text: 'Warum Salzwiegen Besser Ist Als Volumenmessung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das Messen von Salz nach Volumen (Esslöffel oder Teelöffel) ist bekanntermaßen ungenau. Tafelsalz ist fein und dicht gepackt, ein Teelöffel kann bis zu 6 Gramm wiegen. Koshersalz hingegen hat große, flockige Kristalle mit Lufteinschlüssen und wiegt nur etwa 4 Gramm pro Teelöffel. Grobes Meersalz liegt irgendwo dazwischen. Die Verwendung von Volumenmessungen kann leicht dazu führen, dass ein Ferment entweder unsicher zu wenig gesalzen oder völlig zum Stillstand gebracht wird. Das Abwiegen der Zutaten in Gramm auf einer Digitalwaage garantiert konstante, sichere und wiederholbare Ergebnisse.',
    },
    {
      type: 'title',
      text: 'Fehlerbehebung und Bewährte Praktiken bei der Lacto-Fermentation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Befolgen Sie für eine erfolgreiche Fermentation stets diese Regeln: Halten Sie das gesamte Gemüse vollständig unter der Lake bedeckt, um aeroben Schimmelbefall zu verhindern. Verwenden Sie saubere Gefäße und Gewichte. Fermentieren Sie bei kühler Raumtemperatur (18 °C bis 22 °C), um zu verhindern, dass Bakterien der Phase 1 verdrängt werden. Wenn sich ein weißer Film auf der Oberfläche bildet, prüfen Sie, ob es sich um Kahm-Hefe (eine harmlose Wildhefe, die durch Sauerstoffeinwirkung entsteht) oder Schimmel handelt. Schimmel ist flauschig und farbig; falls vorhanden, sollte der Ferment verworfen werden. Kahm-Hefe kann abgeschöpft werden, beeinträchtigt jedoch möglicherweise den Geschmack.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
