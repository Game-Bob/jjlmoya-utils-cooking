import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator Kapieli Sferyfikacji Precyzyjny Przewodnik Gastronomii Molekularnej";
const description = "Oblicz dokladne proporcje alginianu sodu i mleczanu wapnia do sferyfikacji bezposredniej i odwrotnej. Korekta lepkosci i kwasowosci za pomoca gumy ksantanowej i cytrynianu.";

const faq = [
  {
    question: "Jaka jest roznica miedzy sferyfikacja bezposrednia a odwrotna?",
    answer: "Sferyfikacja bezposrednia polega na dodaniu alginianu sodu do aromatyzowanej bazy i wkraplaniu jej do kąpieli wapniowej, co tworzy cienką membranę, która nadal żeluje do wewnątrz. Sferyfikacja odwrotna dodaje wapń do bazy i wkrapla ją do kąpieli alginianowej, tworząc membranę rosnącą na zewnątrz, która zatrzymuje proces żelowania po opłukaniu."
  },
  {
    question: "Dlaczego moje kule wychodzą płaskie lub nie toną?",
    answer: "Jeśli aromatyzowana ciecz bazowa jest mniej gęsta niż kąpiel alginianu sodu, będzie pływać zamiast formować kulę. Dodanie niewielkiej ilości gumy ksantanowej zwiększa lepkość bazy, umożliwiając jej zatonięcie i utworzenie idealnych kul."
  },
  {
    question: "Jaką rolę odgrywa cytrynian sodu w sferyfikacji?",
    answer: "Cytrinian sodu jest sekwestrantem, który wiąże jony wapnia i podnosi pH. Jeśli ciecz bazowa jest silnie kwaśna (pH poniżej 4,5) lub zawiera wapń, alginian sodu będzie żelować przedwcześnie. Dodanie cytrynianu neutralizuje tę kwasowość."
  },
  {
    question: "Czy mogę użyć dowolnej wody do kąpieli wapniowej?",
    answer: "Woda wodociągowa o wysokiej zawartości minerałów może powodować zbrylanie się lub przedwczesne żelowanie alginianu sodu. Najlepiej używać wody destylowanej lub butelkowanej o niskiej zawartości wapnia."
  }
];

const howTo = [
  {
    name: "Wybierz metode sferyfikacji",
    text: "Wybierz Bezposrednia dla cienkiej, natychmiastowej żelacji lub Odwrotna dla cieczy zawierających alkohol, nabiał lub wapń."
  },
  {
    name: "Wprowadź wagi cieczy",
    text: "Wprowadź wagę swojej aromatyzowanej cieczy bazowej oraz kąpieli wodnej w preferowanych jednostkach."
  },
  {
    name: "Dodaj korekty tekstury i kwasowości",
    text: "Włącz Gume Ksantanowa jeśli twoja ciecz bazowa jest rzadka, lub Cytrinian Sodu jeśli jest silnie kwaśna."
  },
  {
    name: "Odmierz składniki",
    text: "Odmierz dokładne ilości alginianu sodu, mleczanu lub chlorku wapnia oraz środków korygujących pokazane w podsumowaniu."
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
  slug: 'kalkulator-kapieli-sferyfikacji',
  title: 'Kalkulator Kapieli Sferyfikacji',
  description: 'Oblicz dokladne proporcje alginianu sodu i mleczanu wapnia do sferyfikacji bezposredniej i odwrotnej. Korekta lepkosci i kwasowosci za pomoca gumy ksantanowej i cytrynianu.',
  faqTitle: 'Czesto Zadawane Pytania',
  ui: {
    title: "Kalkulator Kapieli Sferyfikacji",
    subtitle: "Precyzyjna kontrola proporcji do sferyfikacji bezposredniej i odwrotnej",
    unitLabel: "System Miar",
    metricUnit: "Metryczny (g / gramy)",
    imperialUnit: "Imperialny (oz / uncje)",
    methodLabel: "Metoda Sferyfikacji",
    directMethod: "Sferyfikacja Bezposrednia",
    reverseMethod: "Sferyfikacja Odwrotna",
    baseWeightLabel: "Waga Cieczy Bazowej",
    bathWeightLabel: "Waga Wody Kapielowej",
    xanthanLabel: "Wlacz Gume Ksantanowa (Korekta Lepkosci)",
    citrateLabel: "Wlacz Cytrinian Sodu (Kwasowosc / Sekwestrant pH)",
    recipeTitle: "Podsumowanie Obliczonego Przepisu",
    baseGellingAgent: "Srodek Zelujacy Baze",
    bathGellingAgent: "Srodek Zelujacy Kapiel",
    xanthanGum: "Guma Ksantanowa (Zageszczacz)",
    sodiumCitrate: "Cytrinian Sodu (Bufor)",
    warningLabel: "Ostrzezenie o Rozpuszczalnosci",
    warningDesc: "Wymagana waga srodka jest bliska lub przekracza granice rozpuszczalnosci dla tej objetosci cieczy. Rozpuszczenie moze zajac wiecej czasu lub wymagac delikatnego podgrzania.",
    directDesc: "Idealny do lekkich cieczy o niskiej zawartosci wapnia. Tworzy delikatne, cienkoskore kule, ktore nalezy serwowac natychmiast.",
    reverseDesc: "Idealny do nabialu, alkoholu, cieczy bogatych w wapn lub kwasnych. Tworzy stabilne kule, ktore nie zeluja dalej po oplacznu.",
    sodiumAlginate: "Alginian Sodu",
    calciumChloride: "Chlorek Wapnia",
    calciumLactate: "Mleczan Wapnia",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Nauka Molekularnej Sferyfikacji i Zelowania Hydrokoloidow',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sferyfikacja to rewolucyjna technika kulinarna polegajaca na zamknieciu plynnego rdzenia wewnatrz cienkiej, zelowanej membrany. Wywodzaca sie z przemyslu opakowaniowego w latach 40. XX wieku, zostala zaadaptowana do kuchni modernistycznej na poczatku XXI wieku. Chemia lezaca u jej podstaw opiera sie na interakcjach hydrokoloidow, a konkretnie na sieciowaniu polimerow alginianu sodu pod wplywem dwuwartosciowych kationow wapnia.',
    },
    {
      type: 'title',
      text: 'Chemia Molekularna: Alginian Sodu i Jony Wapnia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alginian sodu to polisacharyd pozyskiwany z brunatnic, zlozony z lancuchow liniowych kwasu beta-D-mannuronowego (bloki M) i kwasu alfa-L-guluronowego (bloki G). W postaci soli sodowej jest w pelni rozpuszczalny w wodzie, tworzac lepki roztwor. Po wprowadzeniu jonow wapnia (takich jak chlorek wapnia lub glukonian mleczanu wapnia), dwuwartosciowe jony wapnia (Ca2+) zastepuja jednowartosciowe jony sodu (Na+). Poniewaz wapn ma dwa ladunki dodatnie, wiaze sie z dwoma blokami G na sasiednich lancuchach polimerowych, mostkujac je razem. Proces ten, naukowo opisywany jako <strong>model kartonika na jajka</strong> zelowania, laczy niezalezne lancuchy polisacharydowe w sztywna, trojwymiarowa siec hydrozelowa, ktora zatrzymuje czasteczki wody i smaku.',
    },
    {
      type: 'title',
      text: 'Mechanizmy Sferyfikacji Bezposredniej a Odwrotnej',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dwie glowne metody sferyfikacji roznia sie umiejscowieniem srodka zelujacego i soli wapnia, co prowadzi do roznych wlasciwosci mechanicznych:',
    },
    {
      type: 'list',
      items: [
        '<strong>Sferyfikacja Bezposrednia:</strong> Alginian sodu jest rozpuszczany w aromatyzowanej cieczy bazowej, ktora nastepnie wkrapla sie do kapieli wapniowej (zazwyczaj 1,0% chlorku wapnia). Zelowanie rozpoczyna sie natychmiast na granicy faz. Poniewaz jony wapnia sa male i ruchliwe, migruja ciagle z kapieli do rdzenia kuli, powodujac wzrost membrany zelowej do wewnatrz. Jesli kula nie zostanie natychmiast oplacznieta i podana, z czasem zeluje calkowicie, zamieniajac sie w stala, gumowata kuleczke.',
        '<strong>Sferyfikacja Odwrotna:</strong> Glukonian mleczanu wapnia (2,0%) jest rozpuszczany w aromatyzowanej cieczy bazowej, ktora nastepnie wkrapla sie do kapieli alginianu sodu (0,5%). Poniewaz czasteczki alginianu sa duze i wolno sie poruszaja, nie moga latwo przekroczyc nowo utworzonej bariery zelowej. Zamiast tego jony wapnia migruja na zewnatrz do kapieli, powodujac wzrost membrany na zewnatrz. To zatrzymuje zelowanie natychmiast po wyjeciu i oplacznu kuli w czystej wodzie, zachowujac calkowicie plynny rdzen przez nieokreslony czas.'
      ],
    },
    {
      type: 'title',
      text: 'Pokonywanie Barier Kwasowosci i pH za Pomoca Cytrinianu Sodu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alginian sodu jest bardzo wrazliwy na kwasy. Gdy pH aromatyzowanej cieczy bazowej spadnie ponizej 4,5, czasteczki alginianu nie moga sie prawidlowo uwodnic. Zamiast rozpuszczac sie, lancuchy alginianu wytrqcaja sie w postaci nierozpuszczalnego kwasu alginowego, tworzac klaczki. Aby temu zaradzic, szefowie kuchni uzywaja <strong>cytrinianu sodu</strong> jako srodka buforujacego. Cytrinian sodu neutralizuje jony wodorowe, podnoszac pH kwasnych skladnikow, takich jak sok z marakui czy limonki, powyzej krytycznego progu 4,5, umozliwiajac alginianowi pelne uwodnienie i utworzenie czystych, kulistych ksztaqtow.',
    },
    {
      type: 'title',
      text: 'Regulacja Gestosci i Lepkosci Cieczy za Pomoca Gumy Ksantanowej',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aby utworzyc kule, kropla aromatyzowanej cieczy bazowej musi calkowicie zanurzyc sie w kapieli zelujacej. Jesli aromatyzowana ciecz bazowa jest mniej gesta niz kapiel (taka jak lekki alkohol lub sok na bazie wody w gestej kapieli alginianu sodu podczas sferyfikacji odwrotnej), bedzie plywac na powierzchni, splaszczajac sie. Dodanie malenkiej ilosci <strong>gumy ksantanowej</strong> (zazwyczaj 0,1% do 0,2%) zwieksza lepkosc cieczy bazowej. To dodatkowe cialo zapewnia ped potrzebny do zanurzenia kropli w kapieli, pozwalajac napieciu powierzchniowemu uformowac ja w idealna kule.',
    },
    {
      type: 'table',
      headers: ['Metoda Sferyfikacji', 'Idealne Skladniki', 'Wymagane Dodatki', 'Charakterystyka Przechowywania', 'Kierunek Wzrostu Zelu'],
      rows: [
        ['Metoda Bezposrednia', 'Soki owocowe o niskiej zawartosci wapnia, czyste buliony, slodkie syropy', '0,5% Alginianu Sodu w bazie, 1,0% Chlorku Wapnia w kapieli', 'Nalezy podac natychmiast, z czasem zeluje calkowicie', 'Do wewnatrz (w kierunku srodka)'],
        ['Metoda Odwrotna', 'Nabial, alkohol, ciecze bogate w wapn lub silnie kwasne', '2,0% Mleczanu Wapnia w bazie, 0,5% Alginianu Sodu w kapieli', 'Bardzo stabilna, mozna przechowywac w oleju lub wodzie godzinami', 'Na zewnatrz (od srodka)'],
      ],
    },
    {
      type: 'title',
      text: 'Oplaczywanie i Ostateczne Kroki Konserwacji',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zawsze oplaczi gotowe kule w kapieli czystej, zimnej wody natychmiast po wyjeciu ich z kapieli zelujacej. To zmywa wszelki pozostaly wapn lub alginian przylegajacy do zewnetrznej powierzchni, zatrzymujac reakcje chemiczna i zapobiegajac niepozadanym smakom (zwlaszcza lekko gorzkiemu smaku chlorku wapnia). Do przechowywania zanurz kule w cieczy o dopasowanej gestosci (takiej jak aromatyzowana ciecz bazowa bez dodatkow lub lekki syrop cukrowy), aby zapobiec przemieszczaniu sie wody przez membrane na drodze osmozy, co mogloby spowodowac kurczenie sie lub pekanie kul.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
