import type { ToolLocaleContent } from '../../../types';

const title = "Smart Pannväljare: Guide för Köksredskap";
const description = "Interaktiv guide för att välja den bästa pannan eller grytan baserat på din matlagningsstil. Gjutjärn vs Stål vs Teflon. Hitta ditt perfekta verktyg.";
const faq = [
  {
    question: 'Vilken är den bästa pannan för daglig användning?',
    answer: 'För de flesta är en högkvalitativ stekpanna i rostfritt stål eller en väl inbränd gjutjärnspanna bäst. Stål är mångsidigt och evigt, medan järn erbjuder en naturlig non-stick-yta utan kemikalier.',
  },
  {
    question: 'Varför fastnar maten i rostfritt stål?',
    answer: 'Det beror oftast på för låg temperatur eller att maten lagts i för tidigt. Prova "Leidenfrost-effekten": värm pannan tills en vattendroppe rullar runt som en pärla. Då är den redo.',
  },
  {
    question: 'Hur vet jag om min panna är säker?',
    answer: 'Leta efter märkningen "PFOA Free". Pannor av järn, kolstål och rostfritt stål är de säkraste och mest hållbara alternativen, eftersom de inte har beläggningar som bryts ner med tiden.',
  },
  {
    question: 'Vad betyder det att "bränna in" en panna?',
    answer: 'Det är processen att skapa ett lager av polymeriserad olja på metallen (järn eller kolstål). Detta skyddar mot rost och skapar en naturlig non-stick-yta som blir bättre för varje användning.',
  },
  {
    question: 'Hur mycket ska jag lägga på en bra panna?',
    answer: 'Ett set med 2-3 kvalitetspannor (rostfritt stål eller järn) kan hålla i 20+ år. Det är bättre att investera i en riktigt bra panna än att köpa 5 billiga som bara håller i 2 år. Kvalitet före kvantitet.',
  },
];
const howTo = [
  {
    name: 'Välj din matlagningsstil',
    text: 'Välj mellan hög värme (bryna), delikat (ägg), grytor (långkok) or snabbmatlagning. Varje stil har olika krav.',
  },
  {
    name: 'Välj det perfekta materialet',
    text: 'Baserat på din stil rekommenderar verktyget det bästa materialet: järn, rostfritt stål, koppar eller teflon.',
  },
  {
    name: 'Läs om egenskaperna',
    text: 'Förstå fördelar, nackdelar, underhåll och hållbarhet. Välj sedan den specifika panna som passar din budget och dina behov.',
  },
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
  slug: 'pann-guide',
  title: 'Smart Pannväljare: Guide för Köksredskap',
  description: 'Interaktiv guide för att välja den bästa pannan eller grytan baserat på din matlagningsstil. Gjutjärn vs Stål vs Teflon. Hitta ditt perfekta verktyg.',
  faqTitle: 'Vanliga Frågor',
  faq,
  bibliographyTitle: 'Bibliografi',
  bibliography: [
    {
      name: 'The Flavor Bible - Pairing, and Progress in Food',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'On Food and Cooking - Harold McGee',
      url: 'https://www.foodscience.org/',
    },
    {
      name: 'Salt Fat Acid Heat - Samin Nosrat',
      url: 'https://www.saltfatacidheat.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Material i Pannor: Vetenskap och Praktik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alla pannor är inte likadana. Varje material har olika termodynamiska egenskaper som påverkar hur värme fördelas, vilka temperaturer det tål och hur det interagerar med maten. Att förstå dessa skillnader är nyckeln till att välja rätt verktyg.',
    },
    {
      type: 'title',
      text: 'Gjutjärn: Klassikern',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Fördelar:</strong> Utmärkt värmehållning, jämn fördelning, naturlig non-stick (när den är inbränd), håller i sekler, blir bättre med tiden. <strong>Nackdelar:</strong> Tung, kräver underhåll, kan rosta, tar längre tid att värma upp, inte lämplig för långvarig tillagning med syror.',
    },
    {
      type: 'title',
      text: 'Rostfritt Stål: Den Mångsidiga',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Fördelar:</strong> Hållbar, underhållsfri, tål syror (vin, tomater), lätt att rengöra, mångsidig, relativt prisvärd. <strong>Nackdelar:</strong> Inte naturligt non-stick, kräver teknik (förvärm ordentligt), ojämn värmefördelning (bättre med flerskiktsbotten).',
    },
    {
      type: 'title',
      text: 'Teflon/PTFE: Den Bekväma',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Fördelar:</strong> Direkt non-stick, enkel att laga i, lätt att rengöra, prisvärd. <strong>Nackdelar:</strong> Bryts ner med tid och temperatur, behöver bytas ut var 3-5 år, inte säker vid mycket höga temperaturer (>260°C).',
    },
  ],
  ui: {
    cookingStyle: 'Hur lagar du oftast mat?',
    material: 'Materialtyp',
    highHeat: 'Hög Värme',
    sear: 'Bryna / Försegla',
    delicate: 'Delikat',
    fry: 'Ägg / Omelett',
    stew: 'Grytor',
    slowCook: 'Långkok',
    fast: 'Snabb',
    quick: 'Snabbmatlagning',
    recommendation: 'Rekommendation',
    characteristics: 'Egenskaper',
    castIron: 'Gjutjärn',
    stainlessSteel: 'Rostfritt Stål',
    carbon: 'Kolstål',
    copper: 'Koppar',
    nonstick: 'Non-stick (Teflon)',
    advantages: 'Fördelar',
    disadvantages: 'Nackdelar',
    maintenance: 'Underhåll',
    durability: 'Hållbarhet',
    heatRetention: 'Värmehållning',
    price: 'Pris',
    step1: 'Hur lagar du oftast mat?',
    step2: 'Underhållsnivå',
    maintenanceLazy: 'Låg / Ingen',
    maintenanceLazyDesc: 'Inga krångliga tvättrutiner.',
    maintenanceCare: 'Medel',
    maintenanceCareDesc: 'Normal handdisk.',
    maintenanceRitual: 'Ritual (Hög)',
    maintenanceRitualDesc: 'Jag uppskattar inbränningsprocessen.',
    idealPan: 'Din Ideala Panna',
    selectOptions: 'Välj alternativ',
    seeRecommendation: 'För att se din rekommendation',
    pro: 'FÖR',
    con: 'EMOT',
    masterTip: 'Mästartips',
    defaultTip: 'Att kombinera en stålpanna för bryning och en non-stick för ägg är basen i varje effektivt kök.',
    stainlessName: 'Rostfritt Stål',
    stainlessTag: 'Proffsets Allt-i-allo',
    stainlessPro: 'Evig och reagerar inte med mat. Perfekt bryning.',
    stainlessCon: 'Kräver teknik (temp) för att inte fastna.',
    stainlessTip: 'Använd Leidenfrost-effekten: när en vattendroppe rullar som en pärla är pannan redo.',
    nonstickName: 'Non-stick',
    nonstickTag: 'Maximal Bekvämlighet',
    nonstickPro: 'Inget fastnar. Enkel rengöring.',
    nonstickCon: 'Håller kort tid (2-3 år). Inte för hög värme.',
    nonstickTip: 'Handdiska alltid och använd trä/silikon-redskap för att fördubbla livslängden.',
    castironName: 'Gjutjärn',
    castironTag: 'Den Tidlösa Klassikern',
    castironPro: 'Otrolig värmehållning. Evig.',
    castironCon: 'Väldigt tung. Kräver regelbunden inbränning.',
    castironTip: 'Värms upp långsamt, men är en pansarvagn när den är het. Idealisk för biffar.',
    carbonName: 'Kolstål',
    carbonTag: 'Smidighet på Spisen',
    carbonPro: 'Lätt som stål, prestanda som gjutjärn.',
    carbonCon: 'Rostar om den lämnas fuktig. Rustik estetik.',
    carbonTip: 'Ju svartare och fulare den blir, desto bättre fungerar den. Hemligheten bakom de bästa wokarna.',
    enamelName: 'Emaljerat Gjutjärn',
    enamelTag: 'Gourmetkvalitet',
    enamelPro: 'Bäst för långkok. Vacker estetik.',
    enamelCon: 'Väldigt dyr. Emaljen är känslig för slag.',
    enamelTip: 'Perfekt för oändliga grytor. Emaljen tillåter tillagning med syror (tomat) utan problem.',
  },
  schemas: [faqSchema, howToSchema, appSchema],
};
