import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Sous Vide Pasteuriseringstabeller';
const description = 'Beräkna den exakta tiden som krävs för säker pasteurisering mot Salmonella och Listeria vid sous vide-tillagning baserat på köttets form och tjocklek.';

const faq = [
  {
    question: 'Vad är pasteurisering vid sous vide-tillagning?',
    answer: 'Pasteurisering är processen att värma upp mat till en specifik temperatur och hålla den där tillräckligt länge för att reducera sjukdomsframkallande mikroorganismer (som Salmonella, Listeria och E. coli) till säkra nivåer. Till skillnad från sterilisering förstör det inte alla bakteriesporer men gör maten helt säker att äta.',
  },
  {
    question: 'Varför påverkar köttets tjocklek tillagningstiden så drastiskt?',
    answer: 'Värmeöverföring i mat sker genom ledning. Tiden det tar för kärnan (den kallaste punkten) att nå vattenbadets temperatur ökar kvadratiskt med tjockleken. Att fördubbla tjockleken på en köttbit fyrdubblar uppvärmningstiden.',
  },
  {
    question: 'Varför är 54.4°C (130°F) den absolut lägsta säkra sous vide-temperaturen?',
    answer: 'Vid temperaturer under 54.4°C kan vanliga livsmedelsburna patogener som Salmonella överleva och föröka sig. Om mat hålls i denna riskzon i mer än 4 timmar kan det bildas värmeresistenta toxiner som utgör en allvarlig hälsorisk.',
  },
  {
    question: 'Vad innebär en 6D- eller 6.5D-reduktion?',
    answer: 'En D-reduktion refererar till en logaritmisk minskning av bakteriepopulationen. En 6.5D-reduktion innebär att 99.99995% av patogenerna dör. Om det ursprungligen fanns 1 000 000 bakterier kommer färre än en att överleva.',
  },
  {
    question: 'Hur påverkar matens geometri uppvärmningshastigheten?',
    answer: 'Värme tränger in i en sfär från alla håll (3 dimensioner) och i en cylinder från sidorna (2 dimensioner), medan en platt skiva värms primärt från ovan- och undersidan (1 dimension). Sfärer värms snabbast, följt av cylindrar, medan platta skivor tar längst tid.',
  },
];

const howTo = [
  {
    name: 'Ställ in badets temperatur',
    text: 'Justera reglaget för att matcha vattenbadets temperatur. Högre temperaturer pasteuriserar exponentiellt snabbare.',
  },
  {
    name: 'Ange köttets tjocklek',
    text: 'Mät köttets tjockaste del i millimeter och ange det i kalkylatorn.',
  },
  {
    name: 'Välj geometri',
    text: 'Välj om din mat är formad som en platt skiva (stek, kycklingfilé), en cylinder (fläskfilé, rullad) eller en sfär (köttbulle).',
  },
  {
    name: 'Välj patogen',
    text: 'Välj Salmonella för allmän köttsäkerhet eller Listeria monocytogenes för riskgrupper eller förlängd säkerhet.',
  },
  {
    name: 'Kontrollera tillagningstiden',
    text: 'Kalkylatorn visar tid för uppvärmning samt hålltid för pasteurisering. Lägg ihop dem för den totala säkra tillagningstiden.',
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
  slug: 'sous-vide-pasteuriseringskurvor',
  title: 'Sous Vide Pasteuriseringstabeller',
  description: 'Beräkna den exakta tiden som krävs för säker pasteurisering mot Salmonella och Listeria vid sous vide-tillagning baserat på köttets form och tjocklek.',
  faqTitle: 'Vanliga frågor',
  ui: {
    title: 'Sous Vide Pasteuriseringstabeller',
    subtitle: 'Termisk letalitetskinetik och kompensation för kärntemperatur',
    bathTempLabel: 'Vattenbadstemperatur',
    thicknessLabel: 'Köttets tjocklek',
    shapeLabel: 'Köttets geometri',
    shapeSlab: 'Platt skiva (t.ex. stek, kycklingfilé)',
    shapeCylinder: 'Cylinder (t.ex. filé, rullad)',
    shapeSphere: 'Sfär (t.ex. köttbulle)',
    pathogenLabel: 'Målpatogen',
    pathogenSalmonella: 'Salmonella (Standard)',
    pathogenListeria: 'Listeria monocytogenes',
    resultsTitle: 'Säker pasteuriseringstid',
    heatingTime: 'Uppvärmningstid till badtemp i kärnan',
    lethalityTime: 'Hålltid för pasteurisering',
    totalTime: 'Total tillagningstid',
    dangerZoneTitle: 'Biologisk riskzon',
    dangerZoneDesc: 'Temperaturer under 54.4°C kan inte pasteurisera mat säkert eftersom bakterietillväxten kan överstiga avdödningstakten. Tillaga inte sous vide under denna temperatur i mer än 4 timmar.',
    chartTitle: 'Logaritmisk bakteriereduktionskurva',
    chartXLabel: 'Tid (minuter)',
    chartYLabel: 'Log-reduktion',
    disclaimer: 'Beräkningar antar starttemperatur på 5°C och termisk diffusivitet för magert kött. Verifiera alltid badets temperatur med en kalibrerad termometer.',
    minutesUnit: 'min',
    mmUnit: 'mm',
    inUnit: 'tum',
    tempUnitC: '°C',
    tempUnitF: '°F',
    systemLabel: 'Måttsystem',
    systemMetric: 'Metrisk',
    systemImperial: 'Imperial'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Sous vide-pasteurisering: Den kompletta säkerhetsguiden för hemmakockar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sous vide-tillagning har förvandlat hemmaköken genom att göra det enkelt att tillaga stekar med perfekt medium-rare resultat ända ut till kanten. Men metoden döljer en kritisk komplexitet: vid låga temperaturer arbetar du nära tröskeln för värmedöd för farliga bakterier. Denna guide förklarar exakt hur du beräknar säkra pasteuriseringstider för alla köttbitar och temperaturer.',
    },
    {
      type: 'title',
      text: 'Varför sous vide-säkerhet skiljer sig från traditionell tillagning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'När du steker en kycklingfilé vid 200°C når ytan dödliga temperaturer direkt och bakterier dör på sekunder. Sous vide vänder på detta: vattenbadet håller exakt den slutliga måltemperaturen, ibland så låg som 55°C. Vid dessa temperaturer tar det tid att avdöda Salmonella eller Listeria  -  en process som mäts i minuter eller timmar.',
    },
    {
      type: 'title',
      text: 'Verkliga sous vide-tider: Vad hemmakockar faktiskt behöver',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Följande tabell visar vad hemmakockar söker efter: specifika köttbitar, vanliga temperaturer och totala tider som inkluderar både uppvärmning och hålllid för pasteurisering vid 25 mm tjocklek från kylskåpstemperatur (5°C).',
    },
    {
      type: 'table',
      headers: ['Råvara', 'Badtemp', 'Uppvärmning kärna', 'Hålltid pasteurisering', 'Total tid', 'Resultat'],
      rows: [
        ['Kycklingfilé', '60°C / 140°F', '~35 min', '~28 min', '~63 min', 'Saftig, helt pasteuriserad'],
        ['Kycklingfilé', '65°C / 149°F', '~35 min', '~3 min', '~38 min', 'Fastare, traditionell konsistens'],
        ['Laxfilé', '50°C / 122°F', '~20 min', '~55 min', '~75 min', 'Mör, glansig, säker'],
        ['Nötstek', '55°C / 131°F', '~40 min', '~89 min', '~129 min', 'Medium-rare, pasteuriserad yta'],
        ['Fläskfilé', '60°C / 140°F', '~35 min', '~28 min', '~63 min', 'Mör med lätt rosa ton'],
        ['Ankbröst', '57°C / 135°F', '~35 min', '~52 min', '~87 min', 'Smakrik, medium, säker'],
        ['Kalkonbröst', '63°C / 145°F', '~40 min', '~9 min', '~49 min', 'Saftig, inte torr'],
        ['Köttbullar (sfär)', '60°C / 140°F', '~25 min', '~28 min', '~53 min', 'Jämnt tillagade'],
      ],
    },
    {
      type: 'title',
      text: 'Logaritmen bakom bakteriedöd: D-värden och z-värden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bakteriedöd följer första ordningens kinetik. <strong>D-värdet</strong> anger tiden som krävs vid en viss temperatur för att döda 90% av bakterierna. <strong>z-värdet</strong> visar hur mycket temperaturen behöver höjas för att avdödningen ska gå 10 gånger snabbare.',
    },
    {
      type: 'title',
      text: 'Riskzonen: Varför 54.4°C (130°F) är den absolut lägsta gränsen',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Biologisk risk under 54.4°C (130°F)',
      html: 'Tillaga aldrig sous vide under 54.4°C i mer än 4 timmar. Under denna gräns kan bakterier föröka sig snabbare än de dör.',
    },
    {
      type: 'title',
      text: 'Hur köttets form och tjocklek påverkar tillagningstiden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Värmeledning följer Fouriers lag. Tiden för kärnan att värmas upp ökar med <strong>kvadraten på tjockleken</strong>. En platt skiva värms från två sidor och är långsammast, medan cylindrar och sfärer värms snabbare.',
    },
    {
      type: 'title',
      text: 'Salmonella vs. Listeria: Att välja målpatogen',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Salmonella (Standard)',
          icon: 'mdi:bacteria-outline',
          description: 'Vanlig bakterie i fågel och kött, måttligt värmekänslig.',
          points: [
            'z-värde 5.5°C: måttligt värmekänslig',
            'Mål: 6.5-log reduktion för fågel',
            'D60 = 4.3 minuter',
            'Säker för friska vuxna',
            'Standardreferens för köttsäkerhet',
          ],
        },
        {
          title: 'Listeria monocytogenes',
          icon: 'mdi:shield-alert-outline',
          description: 'Högre värmeresistens än Salmonella. Kritisk för riskgrupper.',
          highlight: true,
          points: [
            'Högre värmeresistens än Salmonella',
            'z-värde 6.0°C',
            'Mål: 6-log reduktion rekommenderas',
            'D60 = 7.7 minuter: tar nästan dubbelt så lång tid',
            'Kritisk för gravida och immuninsvaga',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Matlagning för riskgrupper',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gravida och immuninsvaga bör välja Listeria som målpatogen och förlänga tillagningstiden därefter.',
    },
    {
      type: 'title',
      text: 'Vikten av starttemperatur från kylskåp',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kalkylatorn antar en starttemperatur på 5°C. Frysta råvaror kräver avsevärd extra tid för att tina i badet.',
    },
    {
      type: 'title',
      text: 'Pasteurisering är inte sterilisering',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pasteurisering dödar inte alla sporbildande bakterier. Maten måste serveras direkt eller kylas snabbt i isbad.',
    },
    {
      type: 'title',
      text: 'Efterlevnad av USDA FSIS-standarder',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Denna kalkylator baseras på FSIS Apändice A-modellen för termisk letalitet och bakteriell inaktivering.',
    },
    {
      type: 'title',
      text: 'Fisk och skaldjur: Särskilda regler för marina proteiner',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fisk värms snabbare men har andra patogener och parasiter att ta hänsyn till. Frys in före tillagning om fisken ska serveras lätttillagad.',
    },
    {
      type: 'title',
      text: 'Balansen mellan konsistens och säkerhet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lägre temperatur ger saftigare resultat men kräver längre hålltid. Högre temperatur tillagar snabbare.',
    },
    {
      type: 'title',
      text: 'Kalibrering av utrustning',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Kontrollera din cirkulator med en kalibrerad termometer.</strong> Även små avvikelser på 1°C kan påverka pasteuriseringstiden avsevärt.',
    },
    {
      type: 'title',
      text: 'Tillagning av flera påsar samtidigt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se till att vattnet kan cirkulera fritt mellan alla påsar i badet så att värmeöverföringen inte hindras.',
    },
    {
      type: 'title',
      text: 'Snabbreferens: Minsta säkra temperaturer och tider',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Råvarutyp', 'Minsta kärntemp', 'Pasteuriseringstid vid min temp', 'Snabbare vid', 'Rekommenderas för'],
      rows: [
        ['Kyckling & Fågel', '60°C / 140°F', '~28 min (6.5-log Salmonella)', '65°C: ~3 min hålltid', 'Alla konsumenter'],
        ['Fläskkött', '60°C / 140°F', '~28 min (6.5-log Salmonella)', '65°C: ~3 min hålltid', 'Alla konsumenter'],
        ['Nötkött', '55°C / 131°F', '~89 min (6.5-log Salmonella)', '60°C: ~28 min hålltid', 'Friska vuxna'],
        ['Nötneutral färs', '60°C / 140°F', '~28 min (6.5-log Salmonella)', '65°C: direkt', 'Alla konsumenter'],
        ['Fisk & Skaldjur', '50°C / 122°F', '~55 min (Listeria)', '55°C: ~22 min hålltid', 'Förfryst råvara'],
        ['Ägg (med skal)', '57°C / 135°F', '~75 min (Salmonella)', '60°C: ~28 min hålltid', 'Pasteuriserade ägg'],
        ['Grönsaker', '85°C / 185°F', 'Ej tillämpbart (enzyminaktivering)', 'N/A', 'Mjukgörning av pektin'],
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
