import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Botulizm Konservirovanie Bezopasnost Proverka Kalkulyator Termicheskoy Smerti";
const description = "Rasschitayte termicheskoe snizhenie spor i letalnost sterilizatsii F0 dlya Clostridium botulinum. Otsenite zony bezopasnosti konservirovaniya malokislotnykh i kislotnykh produktov.";
const faq = [
  {
    question: "Pochemu Clostridium botulinum yavlyaetsya glavnoy problemoy pri domashnem konservirovanii?",
    answer: "Clostridium botulinum eto anaerobnaya sporoobrazuyushchaya bakteriya, kotoraya proizvodit botulinicheskiy toksin, odno iz samykh smertelnykh biologicheskikh veshchestv. Spory chrezvychayno termoustoychivy i mogut vyzhivat v anaerobnykh usloviyakh vnutri zakrytykh banok, esli temperatura nedostatochna."
  },
  {
    question: "Kakovo kriticheskoe znachenie pH 4.6 v konservirovanii pishchevykh produktov?",
    answer: "Produkty s pH nizhe 4.6 klassifitsiruyutsya kak kislotnye. V etikh sredakh spory botulizma ne mogut prorastat ili proizvodit toksiny. Dlya produktov s pH 4.6 ili vyshe obyazatelno avtoklavirovanie dlya dostizheniya temperatur vyshe 116 gradusov Tselsiya dlya unichtozheniya spor."
  },
  {
    question: "Chto takoe znachenie letalnosti sterilizatsii F0?",
    answer: "Znachenie F0 izmeryaet ekvivalentnoe vremya sterilizatsii pri 121.11 gradusa Tselsiya. Standartny protsess sterilizatsii malokislotnykh produktov trebuet znacheniya F0 3.0 minuty ili vyshe, chto sootvetstvuet dvenadtsatikratnomu desyatichnomu snizheniyu populyatsii spor."
  },
  {
    question: "Pochemu nelzya ispolzovat vodyanuyu banyu dlya malokislotnykh produktov?",
    answer: "Konservirovanie v vodyanoy bane dostigaet lish temperatury kipeniya (100 gradusov Tselsiya). Etoy temperatury nedostatochno dlya unichtozheniya termoustoychivykh spor Clostridium botulinum v malokislotnykh produktakh. Spory vyzhivut i budut proizvodit toksin pri komnatnoy temperature."
  }
];

const howTo = [
  {
    name: "Vvedite uroven kislotnosti pishchi",
    text: "Opredelite i vvedite znachenie pH vashikh ingredientov. Esli pH raven ili vyshe 4.6, produkt yavlyaetsya malokislotnym."
  },
  {
    name: "Vyberite tekhniku konservirovaniya",
    text: "Vyberite mezhdu konservirovaniem v vodyanoy bane ili avtoklavirovaniem v zavisimosti ot vashego oborudovaniya."
  },
  {
    name: "Opredelite temperaturu i dlitelnost",
    text: "Vvedite temperaturu protsessa konservirovaniya i vremya v minutakh, v techenie kotorogo banki nakhodyatsya pri etoy temperature."
  },
  {
    name: "Otsenite diagnostiku bezopasnosti",
    text: "Proverte poluchennoe znachenie F0, kolichestvo desyatichnykh snizheniy spor i indikator zony bezopasnosti dlya podtverzhdeniya sootvetstviya."
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
  slug: 'botulizm-konservirovanie-bezopasnost',
  title: 'Botulizm Konservirovanie Bezopasnost Proverka',
  description: 'Rasschitayte termicheskoe snizhenie spor i letalnost sterilizatsii F0 dlya Clostridium botulinum. Otsenite zony bezopasnosti konservirovaniya malokislotnykh i kislotnykh produktov.',
  faqTitle: 'Chasto Zadavaemye Voprosy',
  ui: {
    title: "Monitor avtoklava dlya konservirovaniya",
    subtitle: "Diagnostika termicheskoy smerti i otsenka bezopasnosti botulizma",
    methodLabel: "Metod konservirovaniya",
    waterBath: "Konservirovanie v vodyanoy bane",
    pressureCanner: "Avtoklavirovanie",
    tempLabel: "Temperatura konservirovaniya",
    timeLabel: "Vremya obrabotki",
    phLabel: "pH produktov",
    f0Label: "Znachenie letalnosti F0",
    dLabel: "Rasschitannoe znachenie D",
    sporesLabel: "Populyatsiya spor",
    statusSafe: "Sterilizatsiya zavershena",
    statusMarginal: "Granichnaya sterilizatsiya",
    statusUnsafe: "Vysokiy risk botulizma",
    statusSafeDesc: "Termicheskaya letalnost prevyshaet tselevoe F0 3.0 minuty. Spory polnostyu deaktivirovany.",
    statusMarginalDesc: "Protsess dostigaet chastichnoy deaktivatsii, no ostaetsya nizhe standarta bezopasnosti 12D. Skorrektiruyte vremya ili temperaturu.",
    statusUnsafeDesc: "Protsess ne mozhet deaktivirovat Clostridium botulinum. Malokislotnye produkty v vodyanoy bane ostayutsya opasnymi.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "min",
    logReductionLabel: "Desyatichnoe snizhenie",
    dValueUnit: "minuty",
    indicatorSectionTitle: "Diagnosticheskie indikatory",
    visualizerSectionTitle: "Snizhenie spor",
    f0Tooltip: "Ekvivalentnoe vremya sterilizatsii v minutakh pri 121.11°C. Bezopasny porog 3.0 ili vyshe.",
    dTooltip: "Vremya desyatichnogo snizheniya: dlitelnost v minutakh, neobkhodimaya dlya unichtozheniya 90% spor pri tekushchey temperature.",
    logReductionTooltip: "Kolichestvo desyatichnykh (10-kratnykh) snizheniy. Snizhenie 12D eto standart bezopasnosti.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Nauchnye Mekhanizmy Termicheskoy Obrabotki i Kinetika Deaktivatsii Spor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Termicheskaya obrabotka pri konservirovanii obespechivaet kommercheskuyu sterilnost putem unichtozheniya patogennykh i portyashchikh mikroorganizmov. Osnovnoy tselyu rekomendatsiy po bezopasnosti v konservirovanii malokislotnykh produktov yavlyaetsya Clostridium botulinum. Spory botulizma ochen termoustoychivy po sravneniyu s vegetativnymi kletkami. Deaktivatsiya etikh spor trebuet protsessa termicheskoy smerti, kotoryy primenyaet vysokuyu temperaturu v techenie rasschitannoy dlitelnosti. Matematicheskaya svyaz mezhdu temperaturoy i skorostyu deaktivatsii vyrazhaetsya cherez vremya desyatichnogo snizheniya (znachenie D) i faktor temperaturnoy zavisimosti (znachenie Z).',
    },
    {
      type: 'title',
      text: 'Klassifikatsiya Produktov i Kriticheskiy Porog Bezopasnosti pH 4.6',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Znachenie pH 4.6 yavlyaetsya razdelitelnoy liniey dlya bezopasnosti konservirovaniya. Kislotnye produkty s pH nizhe 4.6 estestvenno podavlyayut prorastanie i proizvodstvo toksinov sporami botulizma. Dlya etikh produktov dostatochno obrabotki pri 100 gradusov Tselsiya v kipyashchey vodyanoy bane. Odnako malokislotnye produkty s pH vyshe 4.6 dolzhny proyti avtoklavirovanie dlya povysheniya temperatury para i dostizheniya polnogo termicheskogo unichtozheniya spor. Tablitsa nizhe detaliziruet klassifikatsii i metody konservirovaniya dlya obshchikh ingredientov:',
    },
    {
      type: 'table',
      headers: ['Gruppa produktov', 'Diapazon pH', 'Trebuemy metod konservirovaniya', 'Obshchie primary'],
      rows: [
        ['Vysokokislotnye', 'Nizhe 4.0', 'Konservirovanie v vodyanoy bane', 'Yabloki, Yagody, Tsitrusovye, Persiki, Uksusnye marinady'],
        ['Podkislennye ili srednekislotnye', '4.0 do 4.6', 'Vodyanaya banya s regulirovkoy kislotnosti', 'Pomidory, Inzhir, Grushi'],
        ['Malokislotnye', '4.6 i vyshe', 'Obyazatelnoe avtoklavirovanie', 'Myaso, Moreprodukty, Fasol, Kukuruza, Kartofel, Supy'],
      ],
    },
    {
      type: 'title',
      text: 'Korrektirovki Vysoty i Bezopasnye Popravki Temperatury Kipeniya',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'S uvelicheniem vysoty atmosfernoe davlenie umenshaetsya, chto privodit k snizheniyu temperatury kipeniya vody nizhe 100 gradusov Tselsiya. Pri konservirovanii v vodyanoy bane eta bolee nizkaya temperatura uvelichivaet znachenie D spor, chto trebuet bolee dlitelnogo vremeni obrabotki. Pri avtoklavirovanii nastroyki manometricheskogo ili gruzovogo klapana dolzhny byt uvelicheny dlya podderzhaniya tselevoy vnutrenney temperatury sterilizatsii. Nizhe privedeno spravochnoe rukovodstvo po temperaturam kipeniya i trebuemym korrektirovkam dlya avtoklavirovaniya:',
    },
    {
      type: 'table',
      headers: ['Diapazon vysoty', 'Temperatura kipeniya vody', 'Trebuemoe davlenie manometra', 'Trebuemoe davlenie gruzovogo klapana'],
      rows: [
        ['0 do 300 metrov', '100.0 °C', '11 PSI (121 °C)', '10 PSI (121 °C)'],
        ['300 do 600 metrov', '99.0 °C', '11 PSI (121 °C)', '15 PSI (121 °C)'],
        ['600 do 900 metrov', '98.0 °C', '12 PSI (121 °C)', '15 PSI (121 °C)'],
        ['900 do 1200 metrov', '97.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1200 do 1500 metrov', '96.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1500 do 2000 metrov', '94.5 °C', '14 PSI (121 °C)', '15 PSI (121 °C)'],
      ],
    },
    {
      type: 'title',
      text: 'Pochemu Kontseptsiya Snizheniya Spor 12D Predotvrashchaet Botulizm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bakterialnoe unichtozhenie teplom nosit logarifmicheskiy kharakter. Znachenie D predstavlyaet vremya, neobkhodimoe pri opredelennoy temperature dlya unichtozheniya 90% populyatsii spor, chto sootvetstvuet odnomu desyatichnomu log snizheniyu. Etalonnym standartom dlya Clostridium botulinum yavlyaetsya znachenie D 0.21 minuty pri 121.11 gradusa Tselsiya. Dlya dostizheniya vysokikh zapasov bezopasnosti kommercheskie standarty trebuyut protsessa dvenadtsatikratnogo desyatichnogo snizheniya (12D), chto oznachaet umenshenie populyatsii spor v dvenadtsat raz na desyat. Eto daet tselevoe znachenie F0 3.0 minuty, chto garantiruet bezopasnost malokislotnykh produktov.',
    },
    {
      type: 'title',
      text: 'Prakticheskie Rekomendatsii po Domashnemu Konservirovaniyu i Sovety po Bezopasnosti',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Vsegda podkishlyayte pomidory limonnym sokom ili limonnoy kislotoy pered obrabotkoy v vodyanoy bane, tak kak ikh estestvenny pH kolebletsya blizko kriticheskogo poroga 4.6.',
        'Nikogda ne sokrashchayte vremya obrabotki i ne snizhayte temperaturu. Kinetika termicheskoy smerti logarifmicheska, i nebolshie korrektirovki mogut pozvolit sporam vyzhit.',
        'Ubedites, chto manometry na avtoklavakh proveryayutsya ezhegodno na tochnost, tak kak nepravilnye pokazaniya davleniya pryamo stavyt pod ugrozu vnutrennie temperatury sterilizatsii.',
        'Kompensiruyte razlitsiya vysoty, reguliruya vremya obrabotki v vodyanykh banyakh ili uvelichivaya nastroyki PSI na avtoklavakh.',
        'Izbegayte konservirovaniya smeshannykh retseptov, soderzhashchikh malokislotnye ingredienty kak myaso ili fasol, v vodyanoy bane, dazhe esli ves retsept soderzhit kislotu.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
