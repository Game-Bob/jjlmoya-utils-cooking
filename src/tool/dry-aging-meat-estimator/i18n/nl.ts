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
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
