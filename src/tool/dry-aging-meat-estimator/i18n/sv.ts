import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkylator för Hängmörning och Köttkostnad";
const description = "Beräkna köttets viktförlust, putsningsavfall från skorpan och den faktiska kostnaden per kilogram vid hängmörning (dry aging) av nötkött eller annat kött hemma eller i mörningsskåp.";
const faq = [
  {
    question: "Hur mycket vikt förlorar kött under hängmörning?",
    answer: "Under en standard mörningsprocess på 30 till 45 dagar förlorar köttet cirka 15% till 25% av sin vikt på grund av avdunstning av fukt. Dessutom försvinner cirka 15% av ursprungsvikten när man putsar bort den torra yttre skorpan innan tillagning."
  },
  {
    question: "Vad är den optimala luftfuktigheten vid hängmörning?",
    answer: "Den idealiska relativa luftfuktigheten för hängmörning är mellan 75% och 85%. Om luftfuktigheten är för låg (under 75%) torkar ytan för snabbt och kapslar in fukten. Om den är för hög (över 85%) ökar risken för mögel."
  },
  {
    question: "Varför stiger priset per kilogram så mycket?",
    answer: "Eftersom du förlorar vikt genom avdunstning och putsning blir den slutliga användbara vikten lägre än startvikten. Den totala kostnaden för köttet är densamma, vilket gör att kilopriset för den färdigputsade biten ökar proportionellt."
  }
];

const howTo = [
  {
    name: "Ange startvikt",
    text: "Mata in köttets ursprungliga vikt innan mörningen påbörjas."
  },
  {
    name: "Välj antal dagar",
    text: "Välj den totala mörningstiden, vanligtvis mellan 1 och 60 dagar."
  },
  {
    name: "Justera relativ luftfuktighet",
    text: "Ställ in luftfuktigheten i mörningsskåpet (rekommenderat 75% till 85%) för att beräkna avdunstningshastigheten."
  },
  {
    name: "Ange ursprungligt pris",
    text: "Fyll i kilopriset för det färska köttet för att jämföra med slutpriset efter putsning."
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
  slug: 'kalkylator-hangmorning-kott',
  title,
  description,
  faqTitle: 'Vanliga frågor',
  ui: {
    title: 'Hängmörningskalkylator',
    subtitle: 'Simulera viktförlust och beräkna kostnad för slutligt utbyte',
    startWeightLabel: 'Startvikt',
    daysLabel: 'Mörningstid',
    pricePerKgLabel: 'Ursprungligt Pris',
    humidityLabel: 'Relativ Luftfuktighet',
    finalWeightLabel: 'Slutlig Användbar Vikt',
    yieldLabel: 'Totalt Användbart Utbyte',
    originalCostLabel: 'Initial Total Kostnad',
    finalCostPerKgLabel: 'Slutligt Användbart Pris',
    moistureLossLabel: 'Vattenavdunstningsförlust',
    trimmingLossLabel: 'Putsningsavfall (Skorpa)',
    warningLowHumidity: 'Varning: Luftfuktigheten är under 75%. Ytan kan torka ut för snabbt, vilket orsakar ythärdning.',
    warningHighHumidity: 'Varning: Luftfuktigheten är över 85%. Ökad risk för bakteriell förskämning eller oönskad mögeltillväxt.',
    timelineTitle: 'Förloppsguide för Hängmörning',
    timelineInfoText: 'Klicka längs tidslinjen för att förhandsgranska de fysiska förändringarna i köttbiten'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Vetenskapen och Ekonomin bakom Hängmörning',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Hängmörning är en kulinarisk konst som kombinerar mikrobiologi, biokemi och fysik för att förvandla vanliga köttdetaljer till möra, smakkoncentrerade delikatesser.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '75-85%',
          label: 'Ideal Luftfuktighet',
          icon: 'mdi:water-percent'
        },
        {
          value: '1-3°C',
          label: 'Optimal Temp.',
          icon: 'mdi:thermometer'
        },
        {
          value: '15%',
          label: 'Putsförlust',
          icon: 'mdi:knife'
        },
        {
          value: '30-45 d',
          label: 'Standardmörning',
          icon: 'mdi:clock-outline'
        }
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
