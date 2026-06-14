import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kalkulyator Pektina i Dzhema dlya Idealnogo Gelya Kazhdyj Raz';
const description = 'Tochno rasschitajte, skolko pektina, limonnoj kisloty i sahara nuzhno vashim fruktam dlya idealnogo dzhema. Izbezhite zhidkih ili rezinovyh konservov s pomoshchyu tochnoj himii.';

const faq = [
  {
    question: 'Pochemu pektin zastavlyaet dzhem gelirovatsya?',
    answer: 'Pektin - eto prirodnyj polisaharid, soderzhashchijsya v kletochnyh stenkah fruktov. Pri nagrevanii s saharom i kislotoj (pH 2,8-3,5) molekuly pektina obrazuyut trehmernuyu gelevuyu set, kotoraya uderzhivaet vodu i sahar, sozdavaya namazyvaemuyu teksturu dzhema.',
  },
  {
    question: 'V chem raznitsa mezhdu HM i LM pektinom?',
    answer: 'Vysokometoksilirovannyj (HM) pektin trebuet ne menee 60% sahara i pH nizhe 3,5 dlya gelirovaniya - idealno dlya traditsionnogo dzhema. Nizkometoksilirovannyj (LM) pektin geliruetsya cherez iony kalciya vmesto sahara, pozvolyaya delat konservy s nizkim soderzhaniem sahara ili voobshche bez nego.',
  },
  {
    question: 'Pochemu moj dzhem inogda poluchaetsya zhidkim?',
    answer: 'Zhidkij dzhem obychno poluchaetsya iz-za nedostatka pektina (vo fruktah ego prirodno malo), nedostatka kisloty (pH slishkom vysokij dlya gelirovaniya) ili nedostatka sahara (dlya HM pektina). Izbytochnoe razbavlenie vodoj ili nedovarka takzhe mogut pomeshat zastyvaniyu.',
  },
  {
    question: 'Mozhno li ispolzovat limonnyj sok vmesto poroshka limonnoj kisloty?',
    answer: 'Da. Etot kalkulyator perevodit limonnuyu kislotu v ekvivalenty limonnogo soka. Primerno 25 ml limonnogo soka obespechivayut tu zhe kislotnost, chto i 1 g limonnoj kisloty. Limonnyj sok takzhe dobavlyaet svezhij vkus dzhemu.',
  },
  {
    question: 'Kakie frukty ot prirody bogaty pektinom?',
    answer: 'Yabloki, ajva, ezhevika, klyukva i kryzhovnik ot prirody bogaty pektinom i chasto ne trebuyut dobavleniya pektina. Nedozrelye frukty takzhe soderzhat bolshe pektina, chem polnostyu spelye.',
  },
];

const howTo = [
  {
    name: 'Vyberite svoi frukty',
    text: 'Vyberite frukty, iz kotoryh vy gotovite dzhem. U kazhdogo frukta raznye estestvennye urovni pektina i kislotnosti, opredelyayushchie, kakie dobavki nuzhny.',
  },
  {
    name: 'Vzveste podgotovlennye frukty',
    text: 'Vvedite ves vashih ochishchennyh, narezannyh fruktov v grammah. Tochnoe vzveshivanie neobhodimo dlya precizionnogo prigotovleniya dzhema.',
  },
  {
    name: 'Vyberite tip pektina',
    text: 'Vyberite Klassicheskij (HM) dlya traditsionnogo dzhema s vysokim soderzhaniem sahara, ili Nizkij Sahar (LM) dlya bolee zdorovyh konservov s ponizhennym soderzhaniem sahara, aktiviruemyh kalciem.',
  },
  {
    name: 'Proverte svoj idealnyj recept',
    text: 'Kalkulyator vyvodit tochnye grammy pektinovogo poroshka, limonnoj kisloty (ili limonnogo soka) i neobhodimyj sahar. Dobavte eto vo vremya varki dlya garantirovannogo zastyvaniya.',
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
  slug: 'kalkulyator-pektina-dzhema',
  title: 'Kalkulyator Pektina i Dzhema',
  description: 'Tochno rasschitajte, skolko pektina, limonnoj kisloty i sahara nuzhno vashim fruktam dlya idealnogo dzhema - bolshe nikakih zhidkih ili rezinovyh konservov.',
  faqTitle: 'Chasto Zadavaemye Voprosy',
  ui: {
    title: 'Kalkulyator Pektina i Dzhema',
    subtitle: 'Precizionnaya himiya gelya dlya idealnyh konservov',
    fruitLabel: 'Vyberite Frukty',
    allFruits: 'Vse',
    highPectin: 'Vysokij Pektin',
    mediumPectin: 'Srednij Pektin',
    lowPectin: 'Nizkij Pektin',
    weightLabel: 'Ves Fruktov',
    weightPlaceholder: 'napr. 1000',
    weightUnitMetric: 'g',
    weightUnitImperial: 'oz',
    pectinTypeLabel: 'Tip Pektina',
    pectinHM: 'Klassicheskij (HM)',
    pectinLM: 'Nizkij Sahar (LM)',
    sugarModeLabel: 'Rezhim Sahara',
    sugarModeAuto: 'Avto',
    sugarModeManual: 'Ruchnoj',
    sugarLabel: 'Ves Sahara',
    sugarPlaceholder: 'napr. 650',
    recipeTitle: 'Recept',
    pectinNeeded: 'Pektin',
    citricAcidNeeded: 'Limonnnaya Kislota',
    lemonJuiceNeeded: 'Limonnyj Sok',
    sugarNeeded: 'Sahar',
    totalYield: 'Obshchij Vyhod',
    sugarPercent: 'Sahar',
    sugarLow: 'Nizkij',
    sugarIdeal: 'Idealno',
    sugarHigh: 'Vysokij',
    sugarOfFruit: 'ot vesa fruktov',
    sugarOfTotal: 'ot obshchego',
    statusPerfect: 'Idealnyj Gel',
    statusPerfectDesc: 'Vashi proportsii sbalansirovany. Dzhem prekrasno zastyvaet s shelkovistoj, namazyvaemoj teksturoj i blestyashchim bleskom.',
    statusSlightlyThin: 'Slegka Zhidkovat',
    statusSlightlyThinDesc: 'Dzhem mozhet zastyat myagko. Rassmotrite vozmozhnost dobavit bolshe pektina ili umenshit soderzhanie vody dlya bolee tverdogo gelya.',
    statusTooThin: 'Slishkom Zhidkij - Risk Zhidkogo Dzhema',
    statusTooThinDesc: 'Bez korrektirovki etot dzhem, veroyatno, ostanetsya zhidkim. Uvelichte sahar (dlya HM) ili dobavte bolshe pektina.',
    statusTooStiff: 'Slishkom Tverdyj',
    statusTooStiffDesc: 'Gel mozhet stat rezinovym. Umenshite pektin vdvoe ili nemnogo uvelichte ves fruktov.',
    dropTestTitle: 'Test na Holodnoj Tarelke',
    dropTestHow: 'Kapnite na ohlazhdennuyu tarelku',
    dropStatusLabel: 'Rezultat',
    dropTestPerfect: 'Zastyvaet. Kaplya smorshchivaetsya i derzhitsya',
    dropTestThin: 'Zhidkij. Stekaet s tarelki',
    dropTestStiff: 'Slishkom tverdyj. Pochti ne dvizhetsya',
    dropPlateLabel: 'tarelka',
    dropDropLabel: 'kaplya',
    sugarAutoHint: 'avtomaticheskij raschet',
    sugarManualHint: 'vvedite kolichestvo',
    unitLabel: 'Sistema Izmereniya',
    metricLabel: 'Metricheskaya (g)',
    imperialLabel: 'Imperskaya (oz)',
    disclaimer: 'Vzveshivajte vse ingredienty na cifrovyh kuhonnyh vesah dlya nailuchshih rezultatov. Obemnye izmereniya nenadezhny dlya prigotovleniya dzhema.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Polnaya Nauka o Zastyvanii Dzhema: Balans Pektina, Kisloty i Sahara',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Prigotovlenie dzhema - eto tochnoe peresechenie himii i kulinarii. Po suti, prevrashchenie fruktovoj myakoti v tverdyj, namazyvaemyj gel zavisit ot pravilnogo balansa treh molekul: <strong>pektina</strong> (zheliruyushchego agenta), <strong>kisloty</strong> (katalizatora, aktiviruyushchego pektin) i <strong>sahara</strong> (obezvozhivayushchego agenta, kotoryj ottyagivaet vodu ot pektinovyh cepej). Bez pravilnyh proportsij vy poluchite libo fruktovyj sup, libo rezinovyj blok.',
    },
    {
      type: 'title',
      text: 'Kak Pektin Obrazuet Gelevuyu Set',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektin - eto slozhnyj polisaharid, sostoyashchij preimushchestvenno iz edinic galakturonovoj kisloty, nahodyashchijsya v sredinnoj plastinke kletochnyh stenok rastenij. V estestvennom sostoyanii molekuly pektina otritsatelno zaryazheny i ottalkivayutsya drug ot druga, ostavayas rastvorennymi v vode fruktov. Dlya obrazovaniya gelya dolzhny byt odnovremenno vypolneny tri usloviya: (1) dolzhno byt dostatochno sahara, chtoby konkurirovat za molekuly vody, obezvozhivaya pektinovye cepi; (2) pH dolzhen opustitsya nizhe 3,5, nejtralizuya otritsatelnye zaryady putem protonirovaniya karboksilnyh grupp; i (3) temperatura dolzhna prevysit 104-105°C, chtoby polnostyu rastvorit i aktivirovat pektin. Kogda eti usloviya sovpadayut, pektinovye cepi obrazuyut zonnye soyedineniya - uchastki, gde cepi associiruyutsya cherez vodorodnye svyazi i gidrofobnye vzaimodejstviya - sozdavaya nepreryvnuyu trehmernuyu gubchastuyu set, kotoraya uderzhivaet fruktovyj sok i saharnyj sirop.',
    },
    {
      type: 'title',
      text: 'Vysokometoksilirovannyj (HM) protiv Nizkometoksilirovannogo (LM) Pektina',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektin klassificiruetsya po stepeni eterifikacii (DE), kotoraya predstavlyaet soboj procent karboksilnyh grupp, eterificirovannyh metanolom. <strong>Vysokometoksilirovannyj (HM) pektin</strong> (DE > 50%) trebuet minimalno 55-65% rastvorimyh suhih veshchestv (sahar) i pH mezhdu 2,8 i 3,5 dlya obrazovaniya gelya. Eto klassicheskij pektin, ispolzuemyj v tradicionnyh receptah dzhema. Bez dostatochnogo kolichestva sahara HM pektin obrazuet slabyj ili otsutstvuyushchij gel. <strong>Nizkometoksilirovannyj (LM) pektin</strong> (DE < 50%) geliruetsya cherez drugoj mehanizm: on sshivaetsya cherez dvuhvalentnye iony kalciya (Ca²⁺), kotorye soedinyayut svobodnye karboksilnye gruppy. LM pektin mozhet gelirovatsya s malym kolichestvom ili voobshche bez dobavlennogo sahara, chto delaet ego idealnym dlya nizkokalorijnyh, diabeticheskih ili naturalno podslashchennyh konservov. Nekotorye LM pektiny takzhe vyderzhivayut bolee shirokij diapazon pH do 5,5, chto polezno dlya nizkokislotnyh fruktov, takih kak inzhir i grushi.',
    },
    {
      type: 'title',
      text: 'Prirodnoe Soderzhanie Pektina v Razlichnyh Sortah Fruktov',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ne vse frukty odinakovy po soderzhaniyu pektina. Frukty delyatsya na tri kategorii na osnove ih estestvennyh urovnej pektina i kisloty. Ponimanie togo, gde vash frukt nahoditsya na etom spektre, opredelyaet, nuzhno li dobavlyat poroshok pektina ili limonnuyu kislotu.',
    },
    {
      type: 'table',
      headers: ['Uroven Pektina', 'Uroven Kislotnosti', 'Primery Fruktov', 'Nuzhno Dobavit Pektina'],
      rows: [
        ['Vysokij', 'Vysokij', 'Yabloko, Klyukva, Kryzhovnik', '0% (net)'],
        ['Vysokij', 'Srednij/Nizkij', 'Ajva, Ezhevika', '0% (net)'],
        ['Srednij', 'Vysokij', 'Malina, Loganova Yagoda', '0,3% ot vesa fruktov'],
        ['Srednij', 'Srednij', 'Sliva, Abrikos', '0,3% ot vesa fruktov'],
        ['Srednij', 'Nizkij', 'Chernika', '0,3% ot vesa fruktov'],
        ['Nizkij', 'Vysokij', 'Vishnya, Vinograd', '0,6% ot vesa fruktov'],
        ['Nizkij', 'Srednij', 'Persik, Mango', '0,6% ot vesa fruktov'],
        ['Nizkij', 'Nizkij', 'Klubnika, Grusha, Inzhir', '0,6% ot vesa fruktov'],
      ],
    },
    {
      type: 'title',
      text: 'Kriticheskaya Rol pH v Gelirovanii Dzhema',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'pH dzhemovoj smesi, pozhaluj, samaya ignoriruemaya peremennaya v domashnem konservirovanii. Pri pH vyshe 3,8 karboksilnye gruppy pektina ostayutsya ionizirovannymi (otritsatelno zaryazhennymi), sozdavaya elektrostaticheskoe ottalkivanie, kotoroe predotvrashchaet gelirovanie nezavisimo ot togo, skolko sahara ili pektina vy dobavlyaete. Po mere snizheniya pH nizhe 3,5 za schet dobavleniya limonnoj kisloty ili limonnogo soka eti gruppy protoniruyutsya, pozvolyaya obrazovyvat vodorodnye svyazi mezhdu sosednimi pektinovymi cepyami. Optimalnaya zona gelirovaniya nahoditsya mezhdu pH 2,8 i 3,2. Nizhe pH 2,8 gel stanovitsya hrupkim i mozhet proyavlyat sinerezis (vydelenie zhidkosti). Vyshe pH 3,5 takzhe proiskhodit sinerezis, i gel slishkom slab. Vot pochemu nizkokislotnye frukty, takie kak inzhir i klubnika, pochti vsegda nuzhdayutsya v dobavlenii limonnoj kisloty - ih estestvennyj pH slishkom vysokij dlya pravilnoj aktivacii pektina.',
    },
    {
      type: 'title',
      text: 'Koncentraciya Sahara i Ee Vliyanie na Prochnost Gelya',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sahar vypolnyaet dve funkcii v dzheme s HM pektinom. Vo-pervyh, on silno gigroskopichen - on yarostno konkuriruet s pektinom za molekuly vody, ottyagivaya gidratacionnye obolochki ot pektinovyh cepej i zastavlyaya ih vzaimodejstvovat drug s drugom. Vo-vtoryh, on povyshaet temperaturu kipeniya smesi, pozvolyaya dzhemu dostich temperatury zastyvaniya 104-105°C. Pri 65% koncentracii sahara pektinovye cepi dostatochno obezvozheny dlya obrazovaniya prochnogo gelya. Nizhe 60% gel oslabevaet linejno. Vyshe 68% dzhem mozhet kristallizovatsya pri ohlazhdenii, kogda sahar prevyshaet predel rastvorimosti. Dlya dzhema s LM pektinom sahar igraet tolko vkusovuyu rol, poskolku gelirovanie zavisit ot kalcievyh mostikov. Soderzhanie sahara mozhet byt takim nizkim, kak 5-10% v LM pektinovyh konservah, podslashchennyh nepitatelnymi podslastitelyami.',
    },
    {
      type: 'title',
      text: 'Limonnnaya Kislota protiv Limonnogo Soka: Pereschet i Luchshie Praktiki',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Limonnnaya kislota (C₆H₈O₇) yavlyaetsya osnovnoj kislotoj, ispolzuemoj v promyshlennom proizvodstve dzhema, poskolku ona standartizirovana, bezvkusna i tochna. Limonnyj sok soderzhit primerno 5% limonnoj kisloty po vesu, a takzhe yablochnuyu kislotu i askorbinovuyu kislotu (vitamin C). <strong>1 gramm chistoj limonnoj kisloty priblizitelno ekvivalenten 25 ml svezhego limonnogo soka</strong> po snizhayushchej pH sposobnosti. Odnako limonnyj sok takzhe dobavlyaet obem zhidkosti, chto neobhodimo uchityvat v obshchem soderzhanii vody. Dlya naibolee posledovatelnyh rezultatov ispolzujte poroshok limonnoj kisloty, rastvorennyj v nebolshom kolichestve vody. Pri ispolzovanii limonnogo soka uchityvajte dopolnitelnye 20-30 ml zhidkosti, kotoruyu neobhodimo vyparit, chtoby dostich tochki zastyvaniya.',
    },
    {
      type: 'title',
      text: 'Test na Holodnoj Tarelke: Vizualnyj Metod Opredeleniya Tochki Zastyvaniya',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tradicionnyj test na holodnoj tarelke (takzhe nazyvaemyj testom na smorshchivanie ili testom na blyudce) ostaetsya odnim iz samyh nadezhnyh metodov dlya domashnih proizvoditelej dzhema. Postavte nebolshuyu keramicheskuyu tarelku v morozilnik na 10 minut pered nachalom varki. Kogda vy schitaete, chto dzhem dostig tochki zastyvaniya, kapnite chajnuyu lozhku goryachego dzhema na ohlazhdennuyu tarelku i dajte ostyt 30 sekund. Natisnite na kraj kapli konchikom palca: esli poverhnost otchetlivo smorshchivaetsya i kaplya derzhit formu, tochka gelya dostignuta. Esli on svobodno rastekaetsya, prodolzhajte kipyatit 2-3 minuty i proverte snova. Etot kalkulyator modeliruet etot test vizualno, pokazyvaya, projdut li proportsii vashego recepta tarelkovyj test dazhe do nachala varki.',
    },
    {
      type: 'title',
      text: 'Ustranenie Nepoladok: Pochemu Dzhem Ne Poluchaetsya i Kak Eto Ispravit',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Zhidkij dzhem (ne zastyvaet posle ohlazhdeniya):</strong> Samaya chastaya prichina - nedostatochnoe kipyachenie - smes nikogda ne dostigla 104-105°C. Prokipyatite dzhem snova, dobaviv 1-2 g limonnoj kisloty na kg fruktov, i proverte metodom holodnoj tarelki. Libo rastvorite 5 g pektinovogo poroshka v holodnoj vode, vzbeyte v kipyashchij dzhem i varite eshche 2 minuty.',
        '<strong>Rezinovyj ili slishkom tverdyj dzhem:</strong> Slishkom mnogo pektina dobavleno otnositelno vesa fruktov, ili dzhem byl perevaren vyshe 106°C, razrushaya pektinovuyu set do plotnoj, hrupkoj struktury. Chtoby spasti, ostorozhno podogrejte s 100-200 ml yablochnogo soka ili vody, chtoby razbavit koncentraciyu pektina.',
        '<strong>Sinerezis (vydelenie vody iz gelya):</strong> Eto ukazyvaet na izbytok kisloty (pH nizhe 2,8) ili sahara vyshe 68%, chto zastavlyaet pektinovuyu set szhimatsya i vydavlivat vodu. Dobavte nebolshoe kolichestvo pishchevoj sody (gidrokarbonata natriya), chtoby postepenno povysit pH.',
        '<strong>Kristallizaciya (zernistaya tekstura):</strong> Koncentraciya sahara prevysila rastvorimost, ili nerastvorennye kristally sahara dejstvovali kak centry nukleacii. Postoyanno pomeshivajte vo vremya poslednego kipyacheniya i dobavte 1 stolovuyu lozhku kukuruznogo siropa ili glyukozy, kotorye ingibiruyut kristallizaciyu.',
        '<strong>Plesen na poverhnosti pri hranenii:</strong> Dzhem byl nedovaren (ne dostig sterilnoj temperatury), soderzhal slishkom malo sahara (nizhe 60% dlya HM pektina) ili banki ne byli dolzhnym obrazom prosterilizovany. Vsegda ispolzujte sterilizovannye banki i obrabatyvajte na vodyanoj bane v techenie 10 minut.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
