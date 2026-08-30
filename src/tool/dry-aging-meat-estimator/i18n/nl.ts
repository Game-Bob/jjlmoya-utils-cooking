import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Dry Aging Vlees Rendement en Kosten Calculator";
const description = "Bereken het gewichtsverlies, het trimafval van de korst en de werkelijke kosten per kilogram bij het droogrijpen (dry aging) van rundvlees of ander vlees thuis of in een rijpingskast.";
const faq = [
  {
    question: "Hoeveel gewicht verliest vlees tijdens het droogrijpen?",
    answer: "Tijdens een standaard droogrijpingsproces van 30 tot 45 dagen verliest vlees ongeveer 15% tot 25% van zijn gewicht door verdamping van vocht. Daarnaast gaat ongeveer 15% van het begingewicht verloren bij het wegsnijden van de droge buitenkorst (pellikel) voor het bereiden."
  },
  {
    question: "Wat is de optimale luchtvochtigheid voor droogrijpen?",
    answer: "De ideale relatieve luchtvochtigheid voor het droogrijpen van vlees ligt tussen 75% en 85%. Als de vochtigheid te laag is (onder 75%), droogt het oppervlak te snel uit. Als deze te hoog is (boven 85%), stijgt het risico op schimmel."
  },
  {
    question: "Waarom stijgt de prijs per kilogram zo sterk?",
    answer: "Omdat u gewicht verliest door vochtverdamping en het wegsnijden van de korst, is het uiteindelijke bruikbare gewicht lager dan het startgewicht. De totale kosten blijven gelijk, waardoor de prijs per bruikbare kilogram stijgt."
  }
];

const howTo = [
  {
    name: "Voer startgewicht in",
    text: "Voer het startgewicht van het vlees in voordat het droogrijpen begint."
  },
  {
    name: "Stel het aantal dagen in",
    text: "Selecteer de totale duur van het droogrijpen, meestal tussen 1 en 60 dagen."
  },
  {
    name: "Pas relatieve luchtvochtigheid aan",
    text: "Stel de vochtigheid van uw rijpingskast in (ideaal is 75% tot 85%) om de verdampingssnelheid te bepalen."
  },
  {
    name: "Voer startprijs in",
    text: "Voer de kosten per kilogram van het rauwe vlees in om dit te vergelijken met de uiteindelijke prijs."
  }
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
  slug: 'droogrijpen-vlees-calculator',
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: 'Dry Aging Calculator',
    subtitle: 'Simuleer gewichtsverlies en bereken de kosten van het netto rendement',
    startWeightLabel: 'Startgewicht',
    daysLabel: 'Rijpingstijd',
    pricePerKgLabel: 'Originele Prijs',
    humidityLabel: 'Relatieve Luchtvochtigheid',
    finalWeightLabel: 'Eindgewicht Bruikbaar',
    yieldLabel: 'Totaal Bruikbaar Rendement',
    originalCostLabel: 'Initiële Totale Kosten',
    finalCostPerKgLabel: 'Uiteindelijke Bruikbare Prijs',
    moistureLossLabel: 'Vochtverdampingsverlies',
    trimmingLossLabel: 'Trimafval Droge Korst',
    warningLowHumidity: 'Waarschuwing: Luchtvochtigheid is onder 75%. Het oppervlak kan te snel uitdrogen, wat leidt tot korstverharding.',
    warningHighHumidity: 'Waarschuwing: Luchtvochtigheid is boven 85%. Verhoogd risico op bacterieel bederf of ongewenste schimmelgroei.',
    timelineTitle: 'Dry Aging Rijpingsverloop',
    timelineInfoText: 'Klik op de tijdlijn om de fysieke veranderingen in het vlees te bekijken'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Wetenschap en Economie van Dry Aging',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Dry aging is een culinaire kunst waarbij microbiologie, biochemie en fysica samenkomen om standaard rundvlees om te toveren in malse, smaakvolle delicatessen.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '75-85%',
          label: 'Ideale Vochtigheid',
          icon: 'mdi:water-percent'
        },
        {
          value: '1-3°C',
          label: 'Optimale Temp.',
          icon: 'mdi:thermometer'
        },
        {
          value: '15%',
          label: 'Trimverlies',
          icon: 'mdi:knife'
        },
        {
          value: '30-45 d',
          label: 'Standaard Rijping',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Het Begrijpen van Gewichtsverlies en de Asymptotische Curve',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Het gewichtsverlies tijdens dry aging is asymptotisch. In de eerste 14 dagen vliegt het vocht er snel uit. Er vormt zich een harde, donkere korst (pellikel) die verdere verdamping na 2 tot 3 weken vertraagt.'
    },
    {
      type: 'list',
      items: [
        '<strong>Dagen 1-14:</strong> Snelle verdamping. Het vlees verliest 10% tot 12% van zijn gewicht (voornamelijk water). Spiervezels krimpen en smaken worden geconcentreerd.',
        '<strong>Dagen 15-30:</strong> Verdamping vertraagt door de pellikelvorming. Enzymen (calpaïnes en cathepsines) breken collageen af, wat zorgt voor malsheid.',
        '<strong>Dagen 30-45:</strong> Minimaal extra waterverlies. Ontwikkeling van diepe nootachtige en blauwe kaas-achtige aroma\'s door vetoxidatie.',
        '<strong>Trimverlies:</strong> Na rijping moet de korst worden afgesneden, wat neerkomt op zo\'n 15% verlies van het totale gewicht.'
      ]
    },
    {
      type: 'title',
      text: 'Omgevingscontroles in de Rijpingskast',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Constante luchtkwaliteit, temperatuur en vochtigheid zijn essentieel. Afwijkingen kunnen het vlees doen bederven.'
    },
    {
      type: 'list',
      items: [
        '<strong>Temperatuur:</strong> Moet tussen 1°C en 3°C blijven. Onder 0°C bevriezen enzymen; boven 4°C groeien ziekteverwekkers.',
        '<strong>Relatieve Luchtvochtigheid (RLV):</strong> Het ideale bereik is 75% tot 85%. Onder 70% ontstaat korstverharding; boven 85% groeien ongewenste schimmels.',
        '<strong>Luchtstroom:</strong> Continue luchtcirculatie is nodig om het oppervlak gelijkmatig te drogen.'
      ]
    },
    {
      type: 'title',
      text: 'Financiële Implicaties en Kostenberekeningen',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Door verdamping en trimming wordt het eetbare gedeelte kleiner, wat de effectieve prijs per kilogram verhoogt.'
    },
    {
      type: 'table',
      headers: ['Rijpingsduur', 'Ø Verdampingsverlies', 'Ø Trimverlies', 'Totale Opbrengst', 'Kostenvermenigvuldiger'],
      rows: [
        ['14 Dagen', '10.5%', '15.0%', '74.5%', '1.34x'],
        ['21 Dagen', '13.5%', '15.0%', '71.5%', '1.40x'],
        ['30 Dagen', '17.5%', '15.0%', '67.5%', '1.48x'],
        ['45 Dagen', '21.0%', '15.0%', '64.0%', '1.56x'],
        ['60 Dagen', '24.0%', '15.0%', '61.0%', '1.64x']
      ]
    },
    {
      type: 'title',
      text: 'Veiligheidsrichtlijnen: Microbiologie en Goede vs Slechte Schimmels',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Veilige dry aging vertrouwt op de groei van nuttige microflora (schimmels uit het geslacht <em>Thamnidium</em>, <em>Mucor</em>, <em>Rhizopus</em>). Strikte hygiëne is essentieel.'
    },
    {
      type: 'list',
      items: [
        '<strong>Goede Indicatoren:</strong> Een droge, stevige, donkerpaarse of donkerbruine korst. Een dunne witte pluislaag (vergelijkbaar met kaaskorst) is normaal.',
        '<strong>Slechte Indicatoren:</strong> Plakkerige, slijmerige of natte oppervlakken. Groene, zwarte of gele schimmels. Een zure of ammoniakgeur wijst op bederf.',
        '<strong>Hygiëne:</strong> Steriliseer de kast, haken en roosters altijd voordat u nieuw vlees plaatst.'
      ]
    },
    {
      type: 'paragraph',
      html: 'Noteer tijdens het rijpen de startdatum, het gewicht en de temperatuur. Controleer regelmatig of de luchtstroom vrij blijft en vergelijk het eindgewicht met de berekende waarden. Snijd de korst pas weg na een zorgvuldige controle van geur, kleur en oppervlak.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
