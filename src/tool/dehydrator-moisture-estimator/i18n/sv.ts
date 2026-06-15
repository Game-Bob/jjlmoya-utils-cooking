import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Fuktkalkylator för Mattork';
const description = 'Uppskatta viktminskning, vattenavdunstning och torktid i din mattork.';

const faq = [
  {
    question: 'Hur beräknas viktminskningen vid torkning?',
    answer: 'Viktminskningen beräknas genom att separera torrsubstans från vatten. Eftersom torrsubstansen förblir konstant beräknas slutvikten som torrsubstansen delat med 1 minus målfuktighetsprocenten.'
  }
];

const howTo = [
  {
    name: 'Välj en ingrediens eller manuell fuktighet',
    text: 'Välj en förinställning eller ställ in fuktigheten manuellt.'
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
  slug: 'fuktkalkylator-for-mattork',
  title,
  description,
  faqTitle: 'Vanliga Frågor',
  ui: {
    title: 'Fuktkalkylator',
    subtitle: 'Beräkna viktminskning och uppskatta torktid',
    unitSystemLabel: 'Enhetssystem',
    metricOption: 'Metrisk (g, °C)',
    imperialOption: 'Imperial (oz, °F)',
    ingredientLabel: 'Ingrediens',
    initialMoistureLabel: 'Ursprunglig Fukthalt (%)',
    targetMoistureLabel: 'Målfukthalt (%)',
    weightLabel: 'Ursprunglig Vikt',
    tempLabel: 'Torkningstemperatur',
    customOption: 'Anpassad / Manuell',
    beefOption: 'Beef Jerky',
    watermelonOption: 'Torkad Vattenmelon',
    appleOption: 'Äppelringar',
    mangoOption: 'Mangoskivor',
    mushroomOption: 'Svampar',
    targetWeightLabel: 'Målvikt',
    waterEvaporatedLabel: 'Evaporerat Vatten',
    estimatedHoursLabel: 'Uppskattad Torktid',
    shrinkageLabel: 'Viktminskning'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Hur mycket vikt tappar din mat i mattorken? Beräkna torktid och fukthalt',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Oavsett om du gör <strong>beef jerky</strong>, <strong>fruktläder</strong>, <strong>torkade äppelringar</strong> eller <strong>torkad vattenmelon</strong>, är nyckeln till jämna resultat att förstå fukthalten. Livsmedelssäkerhet och långvarig förvaring beror på att uppnå rätt målfukthalt. Vår <strong>fuktighetsberäknare för mattork</strong> förutsäger slutvikt, vattenavdunstning och torktid baserat på din specifika ingrediens och inställningar.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '70%', label: 'Köttfuktighet', icon: 'mdi:food' },
        { value: '92%', label: 'Vattenmelonsfuktighet', icon: 'mdi:water' },
        { value: '10%', label: 'Mål för Jerky', icon: 'mdi:shield' },
        { value: '55°C', label: 'Genomsnittlig Torktemp.', icon: 'mdi:thermometer' }
      ]
    },
    {
      type: 'title',
      text: 'Vad är rätt fukthalt för torkad mat?',
      level: 2
    },
    {
      type: 'table',
      headers: ['Ingrediens', 'Ursprunglig Fukthalt', 'Målfukthalt', 'Typisk Tid', 'Tecken på Klarhet'],
      rows: [
        ['Beef Jerky', '70%', '10-15%', '4-8 tim', 'Seg och går att böja utan att gå av'],
        ['Äppelringar', '86%', '15-20%', '6-10 tim', 'Smidig och läderartad, inga klibbiga fläckar'],
        ['Mangoskivor', '84%', '15-18%', '6-10 tim', 'Seg utan synlig fukt'],
        ['Svampar', '92%', '5-8%', '4-8 tim', 'Spröd och krispig'],
        ['Torkad Vattenmelon', '92%', '10-12%', '10-16 tim', 'Bryts med ett knäck när den böjs']
      ]
    },
    {
      type: 'title',
      text: 'Vanliga problem vid torkning och hur du löser dem',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Skalbildning (Case hardening):</strong> Det yttre skiktet torkar för snabbt och stänger in fukt. Sänk temperaturen med 5-10 °C och öka luftcirkulationen.',
        '<strong>Mögel under förvaring:</strong> Maten torkades inte till en tillräckligt låg fukthalt. Använd beräknaren för att hitta din målvikt och verifiera med ett fuktighetstest.',
        '<strong>Ojämn torkning:</strong> Bitarna skar i olika tjocklekar eller mattorken var överbelastad. Skär jämna bitar och lämna utrymme mellan dem.',
        '<strong>Maten är för torr och spröd:</strong> Övertorkning leder till förlorad smak och sämre konsistens. Kontrollera målfukthalten för din specifika ingrediens.'
      ]
    },
    {
      type: 'title',
      text: 'Guide för torktemperatur per typ av livsmedel',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Temperaturen påverkar både torkhastighet och matkvalitet. Högre temperaturer avdunstar vatten snabbare men kan orsaka skalbildning, näringsförlust och ojämna resultat. Använd dessa allmänna riktlinjer för din mattork:'
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Låg Temperatur 40 till 50 °C',
          icon: 'mdi:thermometer',
          description: 'Bäst för att bevara enzymer, näringsämnen och känsliga smaker.',
          points: ['Örter och bladgrönt', 'Svampar', 'Råkonservering', 'Längre torktid krävs']
        },
        {
          title: 'Medium Temperatur 50 till 60 °C',
          icon: 'mdi:thermometer',
          description: 'Standardintervall för de flesta frukter och grönsaker.',
          highlight: true,
          points: ['Äppelringar och mangoskivor', 'De flesta grönsaker', 'Fruktläder', 'Balans mellan hastighet och kvalitet']
        },
        {
          title: 'Hög Temperatur 60 till 70 °C',
          icon: 'mdi:thermometer',
          description: 'Används för kött (jerky) och kompakta livsmedel som kräver hög livsmedelssäkerhet.',
          points: ['Beef jerky och kalkon jerky', 'Kompakta rotfrukter', 'Prioritet på livsmedelssäkerhet', 'Kortare torkfönster']
        }
      ]
    },
    {
      type: 'tip',
      title: 'Förbehandla alltid frukt',
      html: 'Doppa äpplen, bananen och päron i citronjuice eller askorbinsyralösning före torkning för att förhindra missfärgning och bevara färgen.'
    },
    {
      type: 'tip',
      title: 'Rotera brickor under torkningen',
      html: 'Mattorkar har ofta varma zoner. Rotera brickorna uppifrån och ner samt framifrån och bak varannan till var tredje timme för jämn torkning.'
    },
    {
      type: 'tip',
      title: 'Konditionera före förvaring',
      html: 'Låt maten svalna efter torkning och konditionera den i en försluten behållare under 1 vecka. Skaka dagligen. Om kondens uppstår behövs mer torktid.'
    },
    {
      type: 'title',
      text: 'Ordlista för mattorkning och fuktighet',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Skalbildning', definition: 'Ett tillstånd där matens yttre yta torkar för snabbt och bildar ett hårt skal som stänger in fukt och hindrar ordentlig uttorkning.' },
        { term: 'Vattenaktivitet (aw)', definition: 'Ett mått på fritt vatten tillgängligt för mikrobiell tillväxt. Hållbar torkad mat har vanligtvis en aw under 0,60.' },
        { term: 'Fukthalt', definition: 'Procentandelen vattenvikt i förhållande till matens totala vikt. Används för att bestämma torkningsprocessen och målnivåer för säkerhet.' },
        { term: 'Krympningsförhållande', definition: 'Andelen av den ursprungliga vikten som återstår efter torkning. Ett viktigt mått för att planera satser och förvaring.' }
      ]
    },
    {
      type: 'summary',
      title: 'Viktiga slutsatser för perfekt torkning',
      items: [
        'Olika ingredienser har mycket olika ursprunglig fukthalt (70-92%). Använd förvalen för noggranna uppskattningar.',
        'Målfukthalten varierar beroende på mat: 10% för jerky, 15-20% för frukt, 5-8% för grönsaker och svamp.',
        'Torktemperaturen påverkar både hastighet och kvalitet. Håll dig i intervallet 50-60 °C för de flesta livsmedel.',
        'Skalbildning förstör konsistensen. Undvik temperaturer över 70 °C och se till att ha god luftcirkulation.',
        'Konditionera alltid torkad mat i 1 vecka före långtidsförvaring för att säkerställa jämn fuktfordelning.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
