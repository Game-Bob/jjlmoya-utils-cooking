import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Botulisme Conservering Veiligheid Calculator Thermische Dood";
const description = "Bereken de thermische sporenreductie en F0 sterilisatie lethaliteit voor Clostridium botulinum. Beoordeel de veiligheidszones voor conserven met lage zuurgraad en zure voedingsmiddelen.";
const faq = [
  {
    question: "Waarom is Clostridium botulinum een groot probleem bij thuisconserven?",
    answer: "Clostridium botulinum is een anaerobe sporenvormende bacterie die botulinetoxine produceert, een van de dodelijkste bekende biologische stoffen. Sporen zijn extreem hittebestendig en kunnen overleven in anaerobe omstandigheden in afgesloten potten als de temperaturen onvoldoende zijn."
  },
  {
    question: "Wat is het kritieke belang van pH 4.6 bij het conserveren van voedingsmiddelen?",
    answer: "Voedingsmiddelen met een pH lager dan 4.6 worden geclassificeerd als zuur. In deze omgevingen kunnen Botulinum sporen niet ontkiemen of toxines produceren. Voor voedingsmiddelen met een pH van 4.6 of hoger is inmaak onder druk verplicht om temperaturen boven 116 graden Celsius te bereiken en de sporen te vernietigen."
  },
  {
    question: "Wat is de F0 sterilisatie lethaliteitswaarde?",
    answer: "De F0 waarde meet de equivalente sterilisatietijd bij 121.11 graden Celsius. Een standaard sterilisatieproces voor voedingsmiddelen met lage zuurgraad vereist een F0 waarde van 3.0 minuten of hoger, wat overeenkomt met een twaalfdecimale reductie van de sporenpopulatie."
  },
  {
    question: "Waarom kan ik geen waterbad gebruiken voor voedingsmiddelen met lage zuurgraad?",
    answer: "Inmaak in een waterbad bereikt alleen het kookpunt (100 graden Celsius). Deze temperatuur is onvoldoende om hittebestendige sporen van Clostridium botulinum in voedingsmiddelen met lage zuurgraad te doden. Sporen overleven en produceren toxine bij kamertemperatuur."
  }
];

const howTo = [
  {
    name: "Voer het zuurgraadniveau van het voedingsmiddel in",
    text: "Bepaal en voer de pH waarde van je ingrediënten in. Als de pH gelijk is aan of hoger dan 4.6, is het voedingsmiddel laag in zuur."
  },
  {
    name: "Selecteer de inmaaktechniek",
    text: "Kies tussen inmaak in een waterbad of inmaak onder druk, afhankelijk van je conserveringsapparatuur."
  },
  {
    name: "Stel temperatuur en duur in",
    text: "Voer de verwerkingstemperatuur en de tijd in minuten in gedurende welke de potten op die temperatuur blijven."
  },
  {
    name: "Evalueer de veiligheidsdiagnoses",
    text: "Controleer de resulterende F0 waarde, de decimale sporenreductietelling en de veiligheidszone indicator om naleving te bevestigen."
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
  slug: 'botulisme-conservering-veiligheid',
  title: 'Botulisme Conservering Veiligheid Calculator',
  description: 'Bereken de thermische sporenreductie en F0 sterilisatie lethaliteit voor Clostridium botulinum. Beoordeel de veiligheidszones voor conserven met lage zuurgraad en zure voedingsmiddelen.',
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: "Autoclaaf Monitor voor Conserven",
    subtitle: "Thermische dood diagnostiek en botulisme veiligheidsevaluator",
    methodLabel: "Inmaakmethode",
    waterBath: "Inmaak in Waterbad",
    pressureCanner: "Inmaak onder Druk",
    tempLabel: "Inmaaktemperatuur",
    timeLabel: "Verwerkingstijd",
    phLabel: "Voedingsmiddel pH",
    f0Label: "F0 Lethaliteitswaarde",
    dLabel: "Berekende D Waarde",
    sporesLabel: "Sporenpopulatie",
    statusSafe: "Sterilisatie Voltooid",
    statusMarginal: "Marginale Sterilisatie",
    statusUnsafe: "Hoog Botulisme Risico",
    statusSafeDesc: "Thermische lethaliteit overschrijdt de doel F0 van 3.0 minuten. Sporen zijn volledig gedeactiveerd.",
    statusMarginalDesc: "Het proces bereikt gedeeltelijke deactivering maar blijft onder de 12D veiligheidsnorm. Pas tijd of temperatuur aan.",
    statusUnsafeDesc: "Het proces deactiveert Clostridium botulinum niet. Voedingsmiddelen met lage zuurgraad in waterbaden blijven gevaarlijk.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "min",
    logReductionLabel: "Decimale Reductie",
    dValueUnit: "minuten",
    indicatorSectionTitle: "Diagnostische Meters",
    visualizerSectionTitle: "Sporenreductie",
    f0Tooltip: "Equivalente sterilisatietijd in minuten bij 121.11°C. Veilige drempel is 3.0 of hoger.",
    dTooltip: "Decimale reductietijd: duur in minuten vereist om 90% van de sporen te vernietigen bij de huidige temperatuur.",
    logReductionTooltip: "Aantal decimale (10 voudige) reducties. Een 12D reductie is de veiligheidsnorm.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Wetenschappelijke Mechanismen van Thermische Verwerking en Sporendeactiveringskinetiek',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Thermische verwerking bij het inmaken zorgt voor commerciële steriliteit door pathogene en bederfveroorzakende micro organismen te vernietigen. De primaire focus van veiligheidsrichtlijnen bij het conserveren van voedingsmiddelen met lage zuurgraad is Clostridium botulinum. Botulinum sporen zijn zeer hittebestendig vergeleken met vegetatieve cellen. Het deactiveren van deze sporen vereist een thermisch doodtijdproces dat hoge temperatuur toepast gedurende een berekende duur. De wiskundige relatie tussen temperatuur en deactiveringssnelheid wordt uitgedrukt door de decimale reductietijd (D waarde) en de temperatuurafhankelijkheidsfactor (z waarde).',
    },
    {
      type: 'title',
      text: 'Voedselclassificatie en de Cruciale Veiligheidsdrempel pH 4.6',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een pH waarde van 4.6 is de scheidslijn voor conserveringsveiligheid. Zure voedingsmiddelen onder pH 4.6 remmen van nature de ontkieming en toxineproductie van Botulinum sporen. Voor deze voedingsmiddelen is verwerking bij 100 graden Celsius in een kokend waterbad voldoende. Echter, voedingsmiddelen met lage zuurgraad boven pH 4.6 moeten onder druk worden ingemaakt om de stoomtemperatuur te verhogen en volledige thermische sporenvernietiging te bereiken. De onderstaande tabel geeft de classificaties en inmaakmethoden voor veelvoorkomende ingrediënten weer:',
    },
    {
      type: 'table',
      headers: ['Voedselgroep', 'pH Bereik', 'Vereiste Inmaakmethode', 'Veelvoorkomende Voorbeelden'],
      rows: [
        ['Hoge Zuurgraad', 'Onder 4.0', 'Inmaak in Waterbad', 'Appels, Bessen, Citrus, Perziken, Augurken'],
        ['Aangezuurd of Gemiddelde Zuurgraad', '4.0 tot 4.6', 'Waterbad met Zuuraanpassing', 'Tomaten, Vijgen, Peren'],
        ['Lage Zuurgraad', '4.6 en hoger', 'Inmaak onder Druk Verplicht', 'Vlees, Zeevruchten, Bonen, Maïs, Aardappelen, Soepen'],
      ],
    },
    {
      type: 'title',
      text: 'Hoogteaanpassingen en Veiligheidscorrecties van het Kookpunt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Naarmate de hoogte toeneemt, daalt de atmosferische druk, waardoor het kookpunt van water onder 100 graden Celsius komt. Bij inmaak in een waterbad verhoogt deze lagere temperatuur de D waarde van sporen, wat langere verwerkingstijden vereist. Bij inmaak onder druk moeten de instellingen van de wijzer of gewichtmanometer worden verhoogd om de beoogde interne sterilisatietemperatuur te handhaven. Hieronder staat de referentiegids voor kookpunten en de vereiste aanpassingen voor inmaak onder druk:',
    },
    {
      type: 'table',
      headers: ['Hoogtebereik', 'Kookpunt van Water', 'Vereiste Wijzermanometer Druk', 'Vereiste Gewichtmanometer Druk'],
      rows: [
        ['0 tot 300 meter', '100.0 °C', '11 PSI (121 °C)', '10 PSI (121 °C)'],
        ['300 tot 600 meter', '99.0 °C', '11 PSI (121 °C)', '15 PSI (121 °C)'],
        ['600 tot 900 meter', '98.0 °C', '12 PSI (121 °C)', '15 PSI (121 °C)'],
        ['900 tot 1200 meter', '97.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1200 tot 1500 meter', '96.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1500 tot 2000 meter', '94.5 °C', '14 PSI (121 °C)', '15 PSI (121 °C)'],
      ],
    },
    {
      type: 'title',
      text: 'Waarom het 12D Sporenreductie Concept Botulisme Voorkomt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bacteriële vernietiging door hitte is logaritmisch. De D waarde vertegenwoordigt de tijd die nodig is bij een specifieke temperatuur om 90% van de sporenpopulatie te vernietigen, wat overeenkomt met een decimale log reductie. De referentiestandaard voor Clostridium botulinum is een D waarde van 0.21 minuten bij 121.11 graden Celsius. Om hoge veiligheidsmarges te bereiken, eisen commerciële normen een twaalfdecimale reductieproces (12D), wat betekent dat de sporenpopulatie wordt verminderd met twaalf factoren van tien. Dit levert een doel F0 waarde van 3.0 minuten op, die veiligheid garandeert in voedingsmiddelen met lage zuurgraad.',
    },
    {
      type: 'title',
      text: 'Praktische Richtlijnen voor Thuisconserven en Veiligheidstips',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Verzuur tomaten altijd met citroensap of citroenzuur voordat je ze in een waterbad verwerkt, omdat hun natuurlijke pH dicht bij de kritische drempel van 4.6 schommelt.',
        'Verkort nooit de verwerkingstijden of verlaag de temperaturen. Thermische doodskinetiek is logaritmisch en kleine aanpassingen kunnen ervoor zorgen dat sporen overleven.',
        'Zorg ervoor dat wijzermanometers op drukconservenapparatuur jaarlijks worden getest op nauwkeurigheid, omdat onjuiste drukmetingen direct de interne sterilisatietemperaturen in gevaar brengen.',
        'Compenseer hoogteverschillen door verwerkingstijden in waterbaden aan te passen of PSI instellingen op drukconservenapparatuur te verhogen.',
        'Vermijd het inmaken van gemengde recepten met ingrediënten met lage zuurgraad zoals vlees of bonen in een waterbadconservenapparaat, zelfs als het totale recept zuur bevat.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
