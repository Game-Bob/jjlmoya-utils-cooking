import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Maillardreaktionsoptimerare: pH & temperaturbaserad bryningskalkylator';
const description = 'Beräkna exakt hur mycket bikarbonat du ska tillsätta per kilo livsmedel för att accelerera maillardreaktionen. Undvik tvålaktiga bismaker genom att hålla dig inom säkra alkalinitetsgränser.';

const faq = [
  {
    question: 'Vad är maillardreaktionen och varför spelar den roll i matlagning?',
    answer: 'Maillardreaktionen är en kemisk reaktion mellan aminosyror och reducerande sockerarter som ger brynt mat dess karakteristiska smak. Den ligger bakom skorpan på en stekt biff, den gyllene färgen på bröd, rostat kaffe och karamelliserad lök. Reaktionen sker snabbast mellan 140 °C och 165 °C.',
  },
  {
    question: 'Hur påskyndar bikarbonat (natriumbikarbonat) bryningen?',
    answer: 'Bikarbonat höjer pH-värdet på livsmedlets yta och gör den mer alkalisk. Maillardreaktionen går betydligt snabbare i alkaliska miljöer. Att höja pH från 6 till 8 kan fördubbla eller tredubbla bryningshastigheten. För mycket bikarbonat ger dock en metallisk, tvålaktig eftersmak - därför tillämpar denna kalkylator säkra gränser.',
  },
  {
    question: 'Vad är den maximalt säkra mängden bikarbonat per kilogram livsmedel?',
    answer: 'Den allmänna säkerhetsgränsen är 1,5 gram bikarbonat per kilogram livsmedel. Över denna tröskel ökar risken för bismaker (metalliska, tvålaktiga eller kemiska) dramatiskt. Vår rekommenderade mängd är hälften av maximum, vilket ger en märkbar bryningsacceleration med minimal smakrisk.',
  },
  {
    question: 'Vad händer om temperaturen är för låg för maillardreaktionen?',
    answer: 'Under 110 °C sker främst vattenavdunstning utan någon meningsfull maillardbryning. Mellan 110 °C och 140 °C sker bryningen långsamt. Det optimala temperaturintervallet är 140 °C till 180 °C. Över 180 °C börjar pyrolys - då maten bränns och producerar bittra, fräna ämnen istället för önskvärda bryningsaromer.',
  },
];

const howTo = [
  {
    name: 'Väg ditt livsmedel',
    text: 'Ange den totala vikten av det livsmedel du vill bryna, i gram.',
  },
  {
    name: 'Ställ in tillagningstemperaturen',
    text: 'Ange din stekyta eller ugnstemperatur. Det optimala maillardintervallet är 140-180 °C.',
  },
  {
    name: 'Justera bikarbonatmängden',
    text: 'Reglaget är förinställt på hälften av det säkra maxvärdet. Öka försiktigt - kalkylatorn varnar dig innan du når riskzonen.',
  },
  {
    name: 'Läs av uppskattat pH och hastighetsmultiplikator',
    text: 'Kalkylatorn visar hur mycket snabbare bryningen sker vid ditt valda pH-värde jämfört med standard-pH 6.',
  },
  {
    name: 'Kontrollera smakrisknivån',
    text: 'Smakmärkningen visar säker, varning eller fara baserat på det uppskattade yt-pH-värdet. Håll dig i den gröna zonen för bästa resultat.',
  },
  {
    name: 'Applicera bikarbonatet jämnt',
    text: 'Lös upp den rekommenderade mängden i en liten mängd vatten och pensla eller vänd ner i maten före tillagning. Ojämn fördelning ger fläckvis bryning.',
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
  slug: 'maillardreaktionsoptimerare',
  title: 'Maillardreaktionsoptimerare',
  description: 'Beräkna exakt hur mycket bikarbonat du ska tillsätta per kilo livsmedel för att accelerera maillardreaktionen. Undvik tvålaktiga bismaker genom att hålla dig inom säkra alkalinitetsgränser.',
  faqTitle: 'Vanliga frågor',
  ui: {
    title: 'Maillardreaktionsoptimerare',
    headerLabel: 'Bryningskemi',
    flavorSafe: 'Säkert pH',
    flavorCaution: 'Varning: Alkaliskt',
    flavorDanger: 'Fara: Risk för tvålaktig smak',
    unitLabel: 'Enheter',
    metricUnit: 'Metrisk',
    imperialUnit: 'Imperiell',
    weightLabel: 'Livsmedelsvikt',
    weightUnit: 'g',
    weightOz: 'oz',
    tempLabel: 'Yttemperatur',
    tempUnit: '°C',
    degreesF: '°F',
    tempLow: 'Långsam: {min} - {max}',
    tempOpt: 'Optimal: {min} - {max}',
    tempHigh: 'Pyrolys: >{min}',
    sodaLabel: 'Bikarbonat',
    sodaUnit: 'g',
    sodaOz: 'oz',
    sodaNote: 'Hälften av säkert max, mild bryningsboost',
    sodaCautionNote: 'Närmar sig max, övervaka smaken noga',
    sodaDangerNote: 'Överskrider säkert max, risk för tvålaktig smak',
    sodaRecommended: 'Rekommenderad bikarbonat',
    sodaMax: 'Säkert max',
    speedLabel: 'Reaktionshastighet',
    browningLabel: 'Bryningsförlopp',
    rawLabel: 'Rå',
    goldenLabel: 'Gyllene',
    burntLabel: 'Bränt',
    phEstimated: 'Uppsk. yt-pH',
    timeSaved: 'Tid sparad',
    errorTempTooLow: 'Temperaturen ligger under 110 °C. Maillardreaktionen kräver minst 110 °C för att starta. Under denna tröskel sker endast vattenavdunstning utan meningsfull bryning.',
    errorWeightTooLow: 'Livsmedelsvikten måste vara större än 0 g.',
    footerTemplate: '<span class="mr-footer-stat"><strong>{weight}</strong><small>{wunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">vid <strong>{temp}</strong><small>{tunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{soda}</strong><small>{sunit}</small> bikarbonat</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">x<strong>{multiplier}</strong> hastighet</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{timeSaved}</strong>% sparad</span>',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Maillardreaktionsoptimerare: Bemästra vetenskapen bakom bryning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Maillardreaktionen är den heliga graalen inom mustig matlagning. Den skapar de djupa, komplexa smakerna hos en nystekt biff, en gyllene brödskorpa och karamelliserad lök. Reaktionen, uppkallad efter den franske kemisten Louis-Camille Maillard, sker mellan aminosyror och reducerande sockerarter och producerar hundratals smakämnen. Genom att påverka pH-värdet med bikarbonat kan du <strong>fördubbla eller tredubbla</strong> bryningshastigheten utan att bränna maten. Denna kalkylator visar exakt hur mycket du ska använda och varnar innan du hamnar i den tvålaktiga zonen.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '~140 °C', label: 'Maillard aktiveringstemp', icon: 'mdi:thermometer' },
        { value: '2-3x', label: 'Hastighetsökning vid pH 8', icon: 'mdi:speedometer' },
        { value: '1,5 g/kg', label: 'Max säker bikarbonat', icon: 'mdi:scale' },
        { value: 'pH 8,5', label: 'Gräns för tvålaktig smak', icon: 'mdi:alert-circle' },
      ],
    },
    {
      type: 'title',
      text: 'Doseringstabell för bikarbonat efter livsmedelsvikt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Använd denna referenstabell för att snabbt avgöra rekommenderad och maximal bikarbonatmängd för vanliga livsmedelsvikter. Den rekommenderade mängden är <strong>hälften av det säkra maxvärdet</strong>, vilket ger märkbar bryningsacceleration med minimal smakrisk.',
    },
    {
      type: 'table',
      headers: ['Livsmedelsvikt', 'Rekommenderad (g)', 'Säkert max (g)', 'Uppsk. pH', 'Hastighetsboost'],
      rows: [
        ['250 g (1 lök)', '0,19 g', '0,38 g', '6,5', 'x1,2'],
        ['500 g (2 lökar)', '0,38 g', '0,75 g', '6,5', 'x1,2'],
        ['750 g (3 lökar)', '0,56 g', '1,13 g', '6,5', 'x1,2'],
        ['1000 g (1 kg)', '0,75 g', '1,50 g', '7,0', 'x1,6'],
        ['1500 g', '1,13 g', '2,25 g', '7,0', 'x1,6'],
        ['2000 g', '1,50 g', '3,00 g', '7,0', 'x2,0'],
        ['3000 g', '2,25 g', '4,50 g', '7,0', 'x2,0'],
        ['5000 g', '3,75 g', '7,50 g', '7,0', 'x2,0'],
      ],
    },
    {
      type: 'title',
      text: 'Förstå yt-pH och dess effekt på bryning',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Neutralt pH (6,0)',
          icon: 'mdi:water',
          description: 'Det naturliga pH-värdet hos det mesta råa köttet och grönsakerna. Maillardreaktionen går i bashastighet.',
          highlight: false,
          points: ['Reaktionshastighet: x1,0 (baslinje)', 'Helt naturligt, inga tillsatser', 'Bäst för: purister, traditionella metoder', 'Långsammare bryning, mer tid att kontrollera tillagningsgraden'],
        },
        {
          title: 'Milt alkaliskt (pH 7,0 till 7,5)',
          icon: 'mdi:flask-round-bottom',
          description: 'Uppnås med den rekommenderade bikarbonatmängden. Märkbar hastighetsökning utan smakpåverkan.',
          highlight: true,
          points: ['Reaktionshastighet: x1,5-2,0', '½ tsk per kg (ca 0,75 g)', 'Bäst för: karamelliserad lök, rostade grönsaker', 'Den perfekta balansen för de flesta hemmakockar'],
        },
        {
          title: 'Högt alkaliskt (pH 8,0 till 8,5)',
          icon: 'mdi:alert',
          description: 'Maximal praktisk alkalinitet innan smakdefekter uppstår. Fördubblar bryningshastigheten men kräver noggrann kontroll.',
          highlight: false,
          points: ['Reaktionshastighet: x2,0-3,0', '1 tsk per kg (ca 1,5 g)', 'Bäst för: mörka pretzelskorpar, extrem karamellisering', 'Smaka av före servering - på gränsen till tvålaktigt'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Temperaturzoner och vad de betyder för bryning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Temperatur är den andra kritiska variabeln för maillardreaktionen. Varje zon ger fundamentalt olika resultat. Att förstå dessa tröskelvärden hjälper dig att välja rätt värmenivå för ditt matlagningsmål.',
    },
    {
      type: 'table',
      headers: ['Zon', 'Temperaturintervall', 'Vad som händer', 'Bäst för'],
      rows: [
        ['Avdunstning', 'Under 110 °C', 'Vatten avdunstar, ingen bryning sker', 'Sous vide, pochering, ångkokning'],
        ['Långsam bryning', '110-139 °C', 'Maillard börjar långsamt, varsam färgutveckling', 'Långrostade tomater, lågtemperaturtorkning'],
        ['Optimal zon', '140-180 °C', 'Maximal bryningshastighet utan att bränna', 'Stekning, rostning, fritering, bakning'],
        ['Pyrolys', 'Över 180 °C', 'Förbränning börjar, bittra fräna ämnen bildas', 'Snabb sotning för smakaccent (använd sparsamt)'],
      ],
    },
    {
      type: 'title',
      text: 'Vanliga maillardmisstag och hur du åtgärdar dem',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'För mycket bikarbonat',
      html: 'Mer är inte bättre med bikarbonat. Över 1,5 g per kilogram livsmedel ger en metallisk, tvålaktig eller kemisk eftersmak. De smakämnen som bildas vid överdriven alkalinitet är inte samma som de rika, mustiga tonerna från korrekt maillardbryning. <strong>Håll dig till den rekommenderade mängden som kalkylatorn visar.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'För låg tillagningstemperatur',
      html: 'Under 110 °C ångkokar eller torkar du i princip din mat - du bryner den inte. Maillardreaktionen har en lägsta aktiveringstemperatur. Om du vill ha djupa, komplexa smaker <strong>måste livsmedlets yta nå minst 140 °C.</strong> Använd en högtemperaturmetod som stekning, grillning eller ugnsrostning över 180 °C.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ignorera fukt',
      html: 'Vatten är maillardreaktionens fiende. Blöta ytor kan inte överstiga 100 °C förrän vattnet har avdunstat. <strong>Torka alltid maten helt torr</strong> före stekning. Bikarbonat hjälper eftersom det också påskyndar avdunstning av ytvatten genom att bryta ner cellväggar, men det kan inte kompensera för synligt blöt mat. Torra ytor = bättre bryning.',
    },
    {
      type: 'title',
      text: 'Proffstips för perfekt bryning',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Bikarbonatslurry tekniken',
      html: 'Strö aldrig torr bikarbonat direkt på maten - den fördelas inte jämnt. Lös upp den uppmätta mängden i 1-2 matskedar varmt vatten och pensla eller vänd sedan slurryn med maten. Detta säkerställer jämn alkalinitet över hela ytan för enhetlig, konsekvent bryning.',
    },
    {
      type: 'tip',
      title: 'Kombinera bikarbonat med torrsaltning',
      html: 'Bikarbonat och salt samverkar synergistiskt. Torrsalta ditt kött med salt i 1-24 timmar före tillagning och applicera sedan bikarbonatslurryn precis innan det åker i pannan. Saltet drar ut proteiner som deltar i maillardreaktionen, medan bikarbonatet accelererar den. Denna kombination ger den djupaste, mest smakrika skorpan.',
    },
    {
      type: 'tip',
      title: 'Lökkaramelliseringsknepet',
      html: 'En nypa bikarbonat (0,3 g per stor lök) kan minska karamelliseringstiden från 45 minuter till 20 minuter. Den alkaliska miljön bryter ner lökens cellväggar snabbare och frigör sockerarter och aminosyror som driver maillardreaktionen. Men var exakt - för mycket bikarbonat förvandlar löken till mos med en kemisk eftersmak.',
    },
    {
      type: 'title',
      text: 'Ordlista över viktiga bryningstermer',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Maillardreaktion', definition: 'En icke-enzymatisk kemisk reaktion mellan aminosyror och reducerande sockerarter som skapar den bruna färgen och de komplexa mustiga smakerna i tillagad mat. Sker över 110 °C och skiljer sig från karamellisering.' },
        { term: 'Pyrolys', definition: 'Termisk nedbrytning av organiskt material vid höga temperaturer (över 180 °C). Till skillnad från maillardbryning producerar pyrolys bittra, fräna och ibland cancerogena ämnen. Det är vad som händer när mat bränns.' },
        { term: 'pH', definition: 'En skala från 0 till 14 som mäter surhet (lågt) eller alkalinitet (högt). Neutralt är 7. De flesta råa livsmedel ligger mellan pH 5,5 och 6,5. Bikarbonat höjer pH till alkaliska nivåer och accelererar maillardreaktionen.' },
        { term: 'Natriumbikarbonat', definition: 'Bikarbonat - ett vitt kristallint pulver (NaHCO₃) som fungerar som en mild bas. I matlagning höjer det yt-pH, accelererar bryning, mörar kött och hjälper grönsaker att behålla färgen under tillagning.' },
        { term: 'Alkalinitet', definition: 'En lösnings förmåga att neutralisera syror. I samband med maillardacceleration avser alkalinitet pH-värden över 7,0. Överskott av alkalinitet ger bittra, tvålaktiga bismaker.' },
        { term: 'Hastighetsmultiplikator', definition: 'Hur många gånger snabbare maillardreaktionen går jämfört med baslinjen (pH 6). En multiplikator på x2,0 innebär att bryningen sker dubbelt så snabbt, vilket effektivt halverar tillagningstiden för samma färgutveckling.' },
        { term: 'Yt-pH', definition: 'pH-värdet precis på livsmedlets yta där maillardreaktionen sker, inte det interna pH-värdet. Bikarbonat påverkar främst yt-pH eftersom det inte tränger djupt in i livsmedlet under korta tillagningstider.' },
      ],
    },
    {
      type: 'title',
      text: 'Snabbreferens: Bikarbonat för vanliga livsmedel',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Rekommenderade bikarbonatmängder för vardagsmatlagning',
      items: [
        'Karamelliserad lök (1 stor): 0,3 g bikarbonat - minskar tiden från 45 till ~20 minuter',
        'Rostad potatis (500 g): 0,4 g bikarbonat - krispigare, mer gyllene yta',
        'Stekt biff (250 g): 0,2 g bikarbonat - mörkare skorpa på kortare tid',
        'Kycklingvingar (1 kg): 0,75 g bikarbonat - krispigare skinn, snabbare bryning',
        'Pretzeldeg (500 g mjöl): 1,5 g bikarbonat - djupbrun skorpa efter alkalisk doppning',
        'Rostade grönsaker (1 kg blandning): 0,75 g bikarbonat - jämnare karamellisering',
      ],
    },
    {
      type: 'paragraph',
      html: 'Varje livsmedel har en annan ideal alkalinitetsnivå baserat på dess naturliga pH och fuktinnehåll. Denna kalkylator tar gissningsleken ur ekvationen - ange din exakta livsmedelsvikt och temperatur så får du den precisa bikarbonatmängden för perfekt bryning varje gång.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
