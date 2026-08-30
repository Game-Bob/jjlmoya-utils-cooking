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
    },
    {
      type: 'title',
      text: 'Förstå Viktminskningsdynamik och den Asymptotiska Kurvan',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Viktminskningen under hängmörning är asymptotisk. Under de första 14 dagarna avdunstar vatten snabbt. En hård, mörk skorpa (pellikel) bildas och bromsar vidare avdunstning efter 2-3 veckor.'
    },
    {
      type: 'list',
      items: [
        '<strong>Dag 1-14:</strong> Snabb avdunstning. Köttet tappar 10% till 12% av sin vikt (främst vatten). Muskelfibrer krymper och smakerna koncentreras.',
        '<strong>Dag 15-30:</strong> Avdunstningen saktar ner tack vare pellikeln. Enzymer (kalpainer och katepsiner) bryter ner kollagen och gör köttet mört.',
        '<strong>Dag 30-45:</strong> Minimal ytterligare vattenförlust. Djupa nötiga och ädelostliknande aromer utvecklas genom fettoxidation.',
        '<strong>Putsförlust:</strong> När mörningen är klar måste den yttre skorpan skäras bort, vilket motsvarar ca 15% förlust av totalvikten.'
      ]
    },
    {
      type: 'title',
      text: 'Miljökontroll i Mörningsskåpet',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Konstant luftkvalitet, temperatur och luftfuktighet är avgörande. Avvikelser kan förstöra köttet.'
    },
    {
      type: 'list',
      items: [
        '<strong>Temperatur:</strong> Måste hållas mellan 1°C och 3°C. Under 0°C fryser enzymerna; över 4°C växer bakterier.',
        '<strong>Relativ Luftfuktighet (RH):</strong> Idealiskt intervall är 75% till 85%. Under 70% uppstår ythärdning; över 85% växer oönskat mögel.',
        '<strong>Luftflöde:</strong> Kontinuerlig luftcirkulation krävs för att torka ytan jämnt.'
      ]
    },
    {
      type: 'title',
      text: 'Ekonomiska Effekter och Kostnadsberäkningar',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'På grund av avdunstning och putsning blir den ätbara delen mindre, vilket höjer det effektiva kilopriset.'
    },
    {
      type: 'table',
      headers: ['Mörningstid', 'Ø Avdunstningsförlust', 'Ø Putsförlust', 'Total Utbyte', 'Kostnadsmultiplikator'],
      rows: [
        ['14 Dagar', '10.5%', '15.0%', '74.5%', '1.34x'],
        ['21 Dagar', '13.5%', '15.0%', '71.5%', '1.40x'],
        ['30 Dagar', '17.5%', '15.0%', '67.5%', '1.48x'],
        ['45 Dagar', '21.0%', '15.0%', '64.0%', '1.56x'],
        ['60 Dagar', '24.0%', '15.0%', '61.0%', '1.64x']
      ]
    },
    {
      type: 'title',
      text: 'Säkerhetsriktlinjer: Mikrobiologi och Bra vs Dåligt Mögel',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Säker hängmörning bygger på tillväxt av nyttig mikroflora (svampar ur släktena <em>Thamnidium</em>, <em>Mucor</em>, <em>Rhizopus</em>). Strikt hygien är ett krav.'
    },
    {
      type: 'list',
      items: [
        '<strong>Bra Indikatorer:</strong> Torr, fast, mörklila eller mörkbrun skorpa. Ett tunt vitt mögellager (likt ostkant) är normalt.',
        '<strong>Dåliga Indikatorer:</strong> Klibbiga, glatta eller blöta ytor. Grönt, svart eller gulaktigt mögel. Lukt av ammoniak eller röta tyder på förskämning.',
        '<strong>Hygien:</strong> Sterilisera alltid skåpet, krokar och hyllor innan nytt kött sätts in.'
      ]
    },
    {
      type: 'paragraph',
      html: 'Under torrmognaden bör du skriva ned startdatum, vikt och temperatur. Kontrollera regelbundet att luftflödet är fritt och jämför slutvikten med uppskattningen. Skär bort ytan först efter en noggrann kontroll av lukt, färg och köttets struktur. Förvara sedan köttet kallt och rent. Anteckningar om varje kontroll gör det lättare att upptäcka förändringar i tid och att använda samma metod vid nästa styckdetalj.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
