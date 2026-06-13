import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Sorbet Brix Rechner: Zucker zu Frucht Verhältnis & Gefrierpunktkontrolle für perfekte Portionierbarkeit';
const description = 'Stimme die exakte Zucker-, Fruchtpüree- und Wasserbalance für jedes Mal portionierbares Sorbet ab. Berechne Brix, PAC-Gefrierpunktsenkung und behebe eisige oder suppige Texturprobleme mit präzisen Messungen.';

const faq = [
  {
    question: 'Was ist Brix und warum ist es bei Sorbet wichtig?',
    answer: 'Brix (°Bx) misst den Prozentsatz gelöster Feststoffe  -  hauptsächlich Zucker  -  in einer flüssigen Lösung. Bei Sorbets ist ein Brix-Wert zwischen 25 % und 30 % (idealerweise 28 %) entscheidend für die richtige Textur. Unter 25 % gefriert das Sorbet zu einem steinharten, eisigen Block, da nicht genug Zucker vorhanden ist, um die Bildung von Eiskristallen zu stören. Über 30 % sinkt der Gefrierpunkt so stark, dass das Sorbet suppig bleibt und in einem Standard-Gefrierschrank nie vollständig fest wird.',
  },
  {
    question: 'Wie berechne ich die richtige Zuckermenge für mein Sorbet-Rezept?',
    answer: 'Beginne damit, dein Fruchtpüree zu wiegen und seinen natürlichen Brix-Wert mit einem Refraktometer zu messen (oder einen voreingestellten Wert auszuwählen). Gib diese zusammen mit deiner gewünschten Chargengröße und dem Ziel-Brix (Standard 28 %) in den Rechner ein. Der Rechner ermittelt, wie viel Saccharose und Wasser du hinzufügen musst, um die Gesamtmischung in den optimalen Brix-Bereich von 25-30 % zu bringen. Er berücksichtigt auch die Gefrierpunktsenkung (PAC), sodass du Dextrose einsetzen kannst, falls das Sorbet sonst zu hart wäre.',
  },
  {
    question: 'Warum ist mein selbstgemachtes Sorbet immer zu hart oder eisig?',
    answer: 'Ein eisiges, steinhartes Sorbet bedeutet fast immer, dass die Gesamtzuckerkonzentration zu niedrig ist (unter 25 % Brix). Das Wasser in der Frucht gefriert zu großen Eiskristallen, anstatt teilweise flüssig zu bleiben. Die Lösung: Füge mehr Saccharose hinzu, um den Brix-Wert zu erhöhen, oder ersetze einen Teil der Saccharose durch Dextrose  -  Dextrose hat fast die doppelte Gefrierschutzwirkung (PAC 190 vs. 100) und ist 30 % weniger süß, sodass du den Gefrierpunkt senken kannst, ohne das Sorbet übermäßig süß zu machen.',
  },
  {
    question: 'Was ist der Unterschied zwischen der Verwendung von Saccharose und Dextrose in Sorbet?',
    answer: 'Saccharose (Haushaltszucker) ist das Standard-Süßungsmittel mit einem PAC von 100 und POD von 100. Dextrose (Glukosepulver) hat einen PAC von 190  -  fast die doppelte Gefrierpunktsenkung  -  aber nur 70 % der Süßkraft (POD 70). Das bedeutet, Dextrose macht Sorbet pro Gramm weitaus effektiver weich, ohne es zu übersüßen. Verwende Dextrose, wenn deine Frucht bereits von Natur aus süß ist (z. B. Mango, Banane) und du mehr Gefrierschutzwirkung ohne zusätzliche Süße benötigst.',
  },
  {
    question: 'Wie beeinflusst der natürliche Fruchtzucker die Berechnung?',
    answer: 'Verschiedene Früchte haben stark variierende natürliche Zuckergehalte: Zitronen und Limetten liegen bei etwa 2 % Brix, Erdbeeren bei etwa 8 %, Mangos und Trauben bei 14-18 % und Bananen bei bis zu 22 %. Der Rechner berücksichtigt den natürlichen Brix-Wert deiner Frucht, damit du die Gesamtzuckerkonzentration nicht versehentlich über- oder unterschreitest. Deshalb wird empfohlen, ein Refraktometer zur Messung deiner tatsächlichen Frucht zu verwenden  -  saisonale Schwankungen können den Brix-Wert um 3-4 Punkte verschieben.',
  },
];

const howTo = [
  {
    name: 'Fruchtpüree abwiegen',
    text: 'Miss das genaue Gewicht deines Fruchtpürees oder -safts in Gramm.',
  },
  {
    name: 'Frucht-Brix schätzen oder messen',
    text: 'Verwende ein Refraktometer, um den genauen Brix-Wert deiner Frucht zu ermitteln, oder wähle einen typischen Wert aus unserer Datenbank (z. B. Mango: 14 %, Erdbeere: 8 %).',
  },
  {
    name: 'Gewichte in den Rechner eingeben',
    text: 'Gib dein Fruchtgewicht, den Frucht-Brix und den Ziel-Brix-Wert ein (Standard ist 28 %).',
  },
  {
    name: 'Empfohlene Sirupzugaben prüfen',
    text: 'Der Rechner zeigt sofort den empfohlenen Zucker- und Wasserzusatz an, um den 28-%-Brix-Zielwert zu erreichen.',
  },
  {
    name: 'Zuckerarten bei Bedarf anpassen',
    text: 'Falls die Mischung eine unzureichende Gefrierpunktsenkung aufweist, ersetze Saccharose durch Dextrose.',
  },
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
  slug: 'brix-sorbet-dichte-rechner',
  title: 'Brix Sorbet Dichte Rechner',
  description: 'Stimme die exakte Zucker-, Fruchtpüree- und Wasserbalance für jedes Mal portionierbares Sorbet ab. Behebe eisige oder suppige Textur mit präzisen Brix- und PAC-Berechnungen.',
  faqTitle: 'Häufig gestellte Fragen',
  ui: {
    fruitWeightLabel: 'Fruchtpüree-Gewicht',
    fruitBrixLabel: 'Frucht-Brix',
    sugarWeightLabel: 'Saccharose-Gewicht (Zucker)',
    dextroseWeightLabel: 'Dextrose-Gewicht',
    waterWeightLabel: 'Zugegebenes Wassergewicht',
    targetBrixLabel: 'Ziel-Brix',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    brixUnit: '% Bx',
    totalBrixLabel: 'Gesamtmischung Brix',
    totalWeightLabel: 'Gesamtchargengewicht',
    totalPACLabel: 'Gefrierpunktsenkung (PAC)',
    statusLabel: 'Sorbet-Texturprofil',
    statusSoft: 'Zu weich / Suppig',
    statusOptimal: 'Optimale Portionierbarkeit',
    statusHard: 'Zu hart / Eisig',
    recommendedTitle: 'Sirup-Empfehlung (50 % Frucht)',
    recommendedSugarLabel: 'Benötigte Saccharose',
    recommendedWaterLabel: 'Benötigtes Wasser',
    fruitPresetLabel: 'Frucht-Voreinstellung',
    presetCustom: 'Eigene Frucht',
    presetLemon: 'Zitrone / Limette (2 % Bx)',
    presetStrawberry: 'Erdbeere / Himbeere (8 % Bx)',
    presetOrange: 'Orange / Pfirsich (10 % Bx)',
    presetMango: 'Mango / Traube / Kirsche (14 % Bx)',
    presetBanana: 'Banane (21 % Bx)',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Die Wissenschaft der Sorbet Balance: Brix, PAC und Feststoffe',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein professionelles Sorbet herzustellen ist eine Übung in Lebensmittelwissenschaft. Anders als Eiscreme, die auf Milchfetten und -proteinen für Struktur und Weichheit setzt, ist Sorbet vollständig auf gelöste Zucker und Stabilisatoren angewiesen. Die Konzentration dieser gelösten Zucker wird in Grad Brix (°Bx) gemessen. Eine perfekte Sorbet-Mischung benötigt eine Zuckerkonzentration von 25 % bis 30 % Brix. Ist der Zuckergehalt zu niedrig, gefriert das Wasser zu großen, nadelförmigen Eiskristallen, die einen körnigen, steinharten Block erzeugen. Ist er zu hoch, wird der Gefrierpunkt zu stark gesenkt und das Sorbet bleibt in typischen Haushalts- oder Gewerbegefrierschränken ein halbflüssiger Sirup.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '28%',
          label: 'Idealer Ziel-Brix',
          icon: 'mdi:target',
        },
        {
          value: '25-30%',
          label: 'Sicherer Brix-Bereich',
          icon: 'mdi:gauge',
        },
        {
          value: '≈50%',
          label: 'Optimales Fruchtverhältnis',
          icon: 'mdi:fruit-grapes',
        },
        {
          value: 'PAC 100/190',
          label: 'Saccharose / Dextrose',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: 'PAC verstehen: Der Gefrierpunktsenkungsfaktor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC (Potere Anticongelante oder Gefrierschutzwirkung) ist eine Kennzahl, die von Patissiers verwendet wird, um zu beziffern, wie stark eine Zutat den Gefrierpunkt von Wasser senkt. Saccharose, also normaler Haushaltszucker, ist die Basisreferenz mit einem PAC-Wert von 100. Allerdings ist Saccharose sehr süß. Wenn du mehr Feststoffe hinzufügen oder die Gefrierschutzwirkung erhöhen musst, ohne das Sorbet unangenehm süß zu machen, kannst du einen Teil der Saccharose durch Dextrose ersetzen. Dextrose hat einen PAC von 190, ist also fast doppelt so wirksam wie Saccharose bei der Verhinderung von Eiskristallbildung und dabei nur 70 % so süß.',
    },
    {
      type: 'title',
      text: 'Saccharose vs. Dextrose: Den richtigen Zucker für Sorbet wählen',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Saccharose (Haushaltszucker)',
          icon: 'mdi:cube-outline',
          description: 'Das Standard-Süßungsmittel und die Basis für alle PAC- und POD-Berechnungen. Bietet klare Süße und Körper.',
          points: [
            'PAC-Wert: 100 (Basis)',
            'POD-Wert: 100 (volle Süßkraft)',
            'Ideal für: Hauptsüßungsmittel',
            'Verleiht Körper und Standardtextur',
          ],
        },
        {
          title: 'Dextrose (Glukosepulver)',
          icon: 'mdi:grain',
          description: 'Ein Monosaccharid mit fast doppelter Gefrierpunktsenkungskraft und deutlich weniger Süße.',
          highlight: true,
          points: [
            'PAC-Wert: 190 (fast 2� -  Saccharose)',
            'POD-Wert: 70 (30 % weniger süß)',
            'Ideal für: Weichmachen harter Sorbets',
            'Ideal, wenn die Frucht bereits sehr süß ist',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Referenztabelle typischer Frucht Brix Werte',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Fruchtart', 'Durchschnittlicher Brix-Wert', 'Wassergehalt', 'Säuregrad'],
      rows: [
        ['Zitrone / Limette', '2 % - 4 % Bx', 'Sehr hoch', 'Extrem hoch'],
        ['Erdbeere / Himbeere', '7 % - 9 % Bx', 'Hoch', 'Mäßig'],
        ['Orange / Pfirsich', '9 % - 11 % Bx', 'Mittel-hoch', 'Niedrig-mäßig'],
        ['Apfel / Birne', '11 % - 13 % Bx', 'Mittel', 'Niedrig'],
        ['Mango / Traube / Kirsche', '14 % - 18 % Bx', 'Mittel-niedrig', 'Sehr niedrig'],
        ['Banane', '20 % - 22 % Bx', 'Niedrig', 'Vernachlässigbar'],
      ],
    },
    {
      type: 'title',
      text: 'So kalibrierst du deine Sorbet Mischung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um ein Sorbet auszubalancieren, miss zunächst das Gewicht und die Zuckerkonzentration deines Fruchtpürees. Die Verwendung eines Refraktometers wird für Genauigkeit dringend empfohlen, da die Fruchtsüße je nach Saison und Reifegrad variiert. Wenn du kein Refraktometer hast, kannst du anhand der obigen Tabelle schätzen. Sobald du diese Werte hast, gib sie in unseren Rechner ein, um die genaue Menge an Zuckersirup (Wasser und Zucker) zu ermitteln, die benötigt wird, um die Gesamtmischung auf den Zielwert von 28 % Brix zu bringen. Für eine optimale Textur strebe einen Fruchtanteil von etwa 50 % des Gesamtchargengewichts an.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Warum ist mein Sorbet eisig oder zu hart?',
      html: 'Ein Sorbet, das steinhart gefriert, hat fast immer <strong>zu wenig Zucker</strong> (Brix unter 25 %). Das Wasser im Fruchtpüree kristallisiert zu großen, gezackten Eissplittern. Behebe dies, indem du mehr Saccharose hinzufügst, um den Gesamt-Brix zu erhöhen, oder tausche einen Teil der Saccharose gegen Dextrose aus, um den PAC zu erhöhen, ohne zu übersüßen. Überprüfe auch, ob dein Fruchtanteil nicht zu hoch ist  -  mehr als 60 % Frucht lässt zu wenig Raum für Zuckerfeststoffe.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Warum ist mein Sorbet suppig oder gefriert nicht?',
      html: 'Ein Sorbet, das weich oder suppenartig bleibt, hat <strong>zu viel Zucker</strong> (Brix über 30 %). Der Gefrierpunkt wurde so stark gesenkt, dass dein Gefrierschrank die Mischung nicht verfestigen kann. Reduziere die Gesamtzuckerzufuhr oder verwende, falls die Frucht von Natur aus sehr süß ist (z. B. Banane oder Mango), proportional weniger zugesetzte Saccharose. Überprüfe deine Zieltemperatur: Haushaltsgefrierschränke laufen bei −18 °C; ein PAC, der für −12 °C geeignet ist, ist für Standard-Gefrierschränke zu hoch.',
    },
    {
      type: 'tip',
      title: 'Brix genau mit einem Refraktometer messen',
      html: 'Ein digitales oder optisches Refraktometer ist die beste Einzelinvestition für gleichmäßige Sorbets. Der Reifegrad von Früchten variiert stark je nach Saison, Sorte und Herkunft  -  eine Erdbeere im Juni kann 6 °Bx messen, während dieselbe Sorte im August 10 °Bx erreicht. Gib einen Tropfen Püree auf das Prisma, lies den Wert ab und gib ihn in den Rechner ein. Alleiniges Schätzen anhand von Tabellen führt zu uneinheitlichen Ergebnissen.',
    },
    {
      type: 'title',
      text: 'Schritt für Schritt: So verwendest du diesen Rechner',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Fruchtpüree abwiegen</strong>  -  Verwende eine digitale Waage, um das genaue Gewicht deines passierten Fruchtpürees oder -safts in Gramm zu messen.',
        '<strong>Frucht-Brix messen oder schätzen</strong>  -  Verwende ein Refraktometer für Präzision oder wähle eine Voreinstellung aus dem Dropdown (Zitrone 2 %, Erdbeere 8 %, Mango 14 % usw.).',
        '<strong>Ziel-Brix festlegen</strong>  -  Der Standard ist 28 %, der ideale Sweet Spot. Passe den Wert je nach Vorliebe zwischen 25 % und 30 % an.',
        '<strong>Sirup-Empfehlung prüfen</strong>  -  Der Rechner zeigt sofort an, wie viel Saccharose und Wasser hinzugefügt werden muss, um dein Ziel zu erreichen.',
        '<strong>Texturindikator prüfen</strong>  -  Die PAC-Anzeige zeigt dir, ob das Sorbet bei deiner Gefrierschranktemperatur zu hart, optimal portionierbar oder zu weich sein wird.',
        '<strong>Bei Bedarf mit Dextrose anpassen</strong>  -  Wenn das Sorbet als hart vorhergesagt wird, aber bereits süß genug ist, ersetze einen Teil der Saccharose durch Dextrose, um den PAC zu erhöhen, ohne zusätzliche Süße hinzuzufügen.',
      ],
    },
    {
      type: 'title',
      text: 'Wichtige Begriffe der Sorbet Herstellung',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Brix (°Bx)',
          definition: 'Der Prozentsatz gelöster Feststoffe (hauptsächlich Zucker) in einer flüssigen Lösung. Bei Sorbets ist 25-30 °Bx der Zielbereich für ideale Textur und Portionierbarkeit.',
        },
        {
          term: 'PAC (Potere Anticongelante)',
          definition: 'Gefrierschutzwirkung  -  ein Maß dafür, wie stark eine Zutat den Gefrierpunkt von Wasser senkt. Saccharose hat einen Basis-PAC von 100; Dextrose liegt bei 190.',
        },
        {
          term: 'POD (Potere Dolcificante)',
          definition: 'Süßkraft relativ zu Saccharose (Basis 100). Dextrose hat einen POD von 70, ist also Gramm für Gramm 30 % weniger süß als Haushaltszucker.',
        },
        {
          term: 'Dextrose',
          definition: 'Ein Monosaccharid (Glukosepulver), das in der Sorbet-Formulierung verwendet wird, um den Gefrierpunkt zu senken, ohne übermäßige Süße hinzuzufügen. PAC 190, POD 70.',
        },
        {
          term: 'Refraktometer',
          definition: 'Ein optisches oder digitales Instrument, das den Brix-Wert einer Flüssigkeit misst, indem es abliest, wie Licht durch die Probe gebrochen (refraktiert) wird. Unverzichtbar für gleichmäßige Sorbet-Qualität.',
        },
        {
          term: 'Zuckersirup',
          definition: 'Eine 50/50-Mischung nach Gewicht aus Saccharose und Wasser, erhitzt bis zur Auflösung. Das Standardmittel zur Zugabe von Zucker zu Sorbet-Basen.',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
