import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Vochtcalculator Voedseldrogers';
const description = 'Schat gewichtsverlies, waterverdamping en droogtijd in op basis van vochtgehalte.';

const faq = [
  {
    question: 'Hoe bereken je het gewichtsverlies bij drogen?',
    answer: 'Het gewichtsverlies wordt berekend door vaste stoffen te scheiden van het water. Omdat vaste stoffen constant blijven, is het eindgewicht gelijk aan vaste stoffen gedeeld door 1 minus het gewenste doelvochtpercentage.'
  }
];

const howTo = [
  {
    name: 'Selecteer een ingrediënt preset of handmatige invoer',
    text: 'Kies een preset of pas de vochtigheid handmatig aan.'
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
  slug: 'vochtcalculator-voedseldrogers',
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: 'Vochtschatting Dehydrator',
    subtitle: 'Bereken gewichtsverlies en schat de droogtijd in',
    unitSystemLabel: 'Eenhedenstelsel',
    metricOption: 'Metrisch (g, °C)',
    imperialOption: 'Imperiaal (oz, °F)',
    ingredientLabel: 'Ingrediënt Preset',
    initialMoistureLabel: 'Anfangs Feuchtigkeit (%)',
    targetMoistureLabel: 'Doel Vochtigheid (%)',
    weightLabel: 'Anfangsgewicht',
    tempLabel: 'Droogtemperatuur',
    customOption: 'Aangepast / Handmatig',
    beefOption: 'Beef Jerky',
    watermelonOption: 'Watermeloen Snaps',
    appleOption: 'Appelringen',
    mangoOption: 'Mangoschijfjes',
    mushroomOption: 'Paddenstoelen',
    targetWeightLabel: 'Eindgewicht',
    waterEvaporatedLabel: 'Verdampt Water',
    estimatedHoursLabel: 'Geschatte Droogtijd',
    shrinkageLabel: 'Gewichtsverlies'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Hoeveel gewicht verliest uw voedsel in de voedseldroger? Bereken droogtijd en vochtgehalte',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Of u nu <strong>beef jerky</strong>, <strong>fruitleer</strong>, <strong>gedroogde appelringen</strong> of <strong>gedroogde watermeloen</strong> maakt, de sleutel tot consistente resultaten is het begrijpen van het vochtgehalte. Voedselveiligheid en houdbaarheid zijn afhankelijk van het bereiken van het juiste doelvochtgehalte. Onze <strong>vochtcalculator voor de voedseldroger</strong> voorspelt het eindgewicht, de waterverdamping en de droogtijd op basis van uw specifieke ingrediënt en instellingen.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '70%', label: 'Vochtgehalte Vlees', icon: 'mdi:food' },
        { value: '92%', label: 'Vochtgehalte Watermeloen', icon: 'mdi:water' },
        { value: '10%', label: 'Doel voor Jerky', icon: 'mdi:shield' },
        { value: '55°C', label: 'Gem. Droogtemp.', icon: 'mdi:thermometer' }
      ]
    },
    {
      type: 'title',
      text: 'Wat is het juiste vochtgehalte voor gedroogd voedsel?',
      level: 2
    },
    {
      type: 'table',
      headers: ['Ingrediënt', 'Beginvochtgehalte', 'Doelvochtgehalte', 'Typische Droogtijd', 'Kenmerk van Droogheid'],
      rows: [
        ['Beef Jerky', '70%', '10-15%', '4-8 uur', 'Taai en buigt zonder te breken'],
        ['Appelringen', '86%', '15-20%', '6-10 uur', 'Buigzaam en leerachtig, geen plakkerige plekken'],
        ['Mangoschijfjes', '84%', '15-18%', '6-10 uur', 'Taai zonder zichtbaar vocht'],
        ['Paddenstoelen', '92%', '5-8%', '4-8 uur', 'Broos en knapperig'],
        ['Gedroogde Watermeloen', '92%', '10-12%', '10-16 uur', 'Breekt met een knak bij het buigen']
      ]
    },
    {
      type: 'title',
      text: 'Veelvoorkomende droogproblemen en hoe u ze oplost',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Harde korstvorming (Case hardening):</strong> De buitenste laag droogt te snel, waardoor vocht binnenin opgesloten raakt. Verlaag de temperatuur met 5-10 °C en zorg voor meer luchtcirculatie.',
        '<strong>Schimmel tijdens opslag:</strong> Het voedsel was niet droog genoeg. Gebruik de calculator om uw doelgewicht te bepalen en controleer dit met een vochttest.',
        '<strong>Ongelijkmatig drogen:</strong> Stukken zijn in verschillende diktes gesneden of de voedseldroger is te vol. Snijd gelijkmatige stukken en laat ruimte ertussen open.',
        '<strong>Voedsel is te droog en broos:</strong> Te lang drogen leidt tot verlies van smaak en textuur. Controleer het doelvochtgehalte voor uw specifieke ingrediënt.'
      ]
    },
    {
      type: 'title',
      text: 'Richtlijn droogtemperatuur per type voedsel',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Temperatuur heeft invloed op zowel de droogsnelheid als de voedselkwaliteit. Hogere temperaturen verdampen water sneller, maar kunnen leiden tot case hardening, verlies van voedingsstoffen en ongelijkmatige resultaten. Gebruik deze algemene richtlijnen voor uw voedseldroger:'
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lage temperatuur 40 tot 50 °C',
          icon: 'mdi:thermometer',
          description: 'Ideaal voor het behoud van enzymen, voedingsstoffen en delicate smaken.',
          points: ['Kruiden en bladgroenten', 'Paddenstoelen', 'Raw food conservering', 'Langere droogtijd vereist']
        },
        {
          title: 'Gemiddelde temperatuur 50 tot 60 °C',
          icon: 'mdi:thermometer',
          description: 'Standaardbereik voor de meeste soorten fruit en groenten.',
          highlight: true,
          points: ['Appelringen en mangoschijfjes', 'De meeste groenten', 'Fruitleer', 'Balans tussen snelheid en kwaliteit']
        },
        {
          title: 'Hoge temperatuur 60 tot 70 °C',
          icon: 'mdi:thermometer',
          description: 'Gebruikt voor vlees (jerky) en compact voedsel dat voedselveiligheid vereist.',
          points: ['Beef jerky en kalkoen jerky', 'Compacte wortelgroenten', 'Prioriteit voor voedselveiligheid', 'Kortere droogtijd']
        }
      ]
    },
    {
      type: 'tip',
      title: 'Behandel fruit altijd voor',
      html: 'Dompel appels, bananen en peren voor het drogen onder in citroensap of een ascorbinezuuroplossing om bruinverkleuring te voorkomen en kleur te behouden.'
    },
    {
      type: 'tip',
      title: 'Draai de roosters tijdens het drogen',
      html: 'Voedseldrogers hebben vaak warmere zones. Wissel de roosters om (boven/onder en voor/achter) om de 2-3 uur voor een gelijkmatig resultaat.'
    },
    {
      type: 'tip',
      title: 'Conditioneer voor het opbergen',
      html: 'Laat het voedsel na het drogen afkoelen en conditioneer het gedurende 1 week in een gesloten pot. Schud dagelijks. Als er condens ontstaat, moet het langer drogen.'
    },
    {
      type: 'title',
      text: 'Verklarende woordenlijst drogen en vochtgehalte',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Harde korstvorming', definition: 'Een toestand waarbij het buitenoppervlak van voedsel te snel droogt, waardoor een harde schil ontstaat die vocht binnenin opsluit en een goede droging verhindert.' },
        { term: 'Wateractiviteit (aw)', definition: 'Een maatstaf voor het vrije water dat beschikbaar is voor microbiële groei. Houdbaar gedroogd voedsel heeft doorgaans een aw-waarde van minder dan 0,60.' },
        { term: 'Vochtgehalte', definition: 'Het percentage watergewicht ten opzichte van het totale gewicht van het voedsel. Wordt gebruikt om de droogvoortgang en doelwaarden voor voedselveiligheid te bepalen.' },
        { term: 'Krimpratio', definition: 'Het aandeel van het oorspronkelijke gewicht dat overblijft na drogen. Een belangrijke waarde voor het plannen van partijgroottes en opslag.' }
      ]
    },
    {
      type: 'summary',
      title: 'Belangrijkste tips voor perfect drogen',
      items: [
        'Verschillende ingrediënten hebben een sterk afwijkend beginvochtgehalte (70-92%). Gebruik de presets voor nauwkeurige schattingen.',
        'Het doelvochtgehalte verschilt per voedingsmiddel: 10% voor jerky, 15-20% voor fruit, 5-8% voor groenten en paddenstoelen.',
        'De droogtemperatuur beïnvloedt zowel de snelheid als de kwaliteit. Blijf voor de meeste voedingsmiddelen in het bereik van 50-60 °C.',
        'Harde korstvorming verpest de textuur. Vermijd temperatures boven 70 °C en zorg voor een goede luchtcirculatie.',
        'Conditioneer gedroogd voedsel altijd 1 week voor langdurige opslag om een gelijkmatige vochtverdeling te garanderen.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
