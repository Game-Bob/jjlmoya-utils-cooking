import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator Soli do Fermentacji Mlekowej Bio Organiczny Przewodnik Naukowy";
const description = "Oblicz precyzyjne procenty soli do solenia na sucho i solanki mokrej. Zrównoważ populacje bakterii, zapobiegaj pleśni i opanuj konserwację żywności.";
const faq = [
  {
    question: "Dlaczego procent soli jest krytyczny w fermentacji mlekowej?",
    answer: "Sól hamuje szkodliwe patogeny i pleśnie poprzez ciśnienie osmotyczne, jednocześnie umożliwiając bakteriom kwasu mlekowego (LAB) rozwój, fermentację cukrów i produkcję kwasu mlekowego."
  },
  {
    question: "Jaka jest różnica między soleniem na sucho a solanką mokrą?",
    answer: "Solenie na sucho wykorzystuje naturalną wilgoć żywności do rozpuszczenia soli (idealne do szatkowanej kapusty). Solanka mokra dodaje zewnętrzną wodę i sól, aby całkowicie zanurzyć całe lub kawałkowe warzywa."
  },
  {
    question: "Czy mogę używać chlorowanej wody z kranu do fermentacji?",
    answer: "Chlor może hamować wzrost bakterii. Zdecydowanie zaleca się używanie wody filtrowanej lub źródlanej dla uzyskania spójnych wyników fermentacji."
  },
  {
    question: "Czy procent wagowy jest lepszy niż pomiary objętościowe?",
    answer: "Tak. Różne rodzaje soli (koszerna, morska, stołowa) mają różne rozmiary kryształów i gęstości. Ważenie soli w gramach gwarantuje dokładną zawartość soli niezależnie od użytego rodzaju soli."
  }
];

const howTo = [
  {
    name: "Wybierz tryb fermentacji",
    text: "Wybierz tryb Suchy, jeśli używasz naturalnych soków warzyw, lub tryb Mokry, jeśli dodajesz wodę do przykrycia składników."
  },
  {
    name: "Zważ składniki",
    text: "Wprowadź dokładną wagę warzyw w gramach. W przypadku solanki mokrej wprowadź również wagę wody."
  },
  {
    name: "Dostosuj docelowe zasolenie",
    text: "Przesuń suwak procentu zasolenia. Celuj w 2,0%-3,5% dla ogólnego bezpieczeństwa i optymalnego wzrostu bakterii kwasu mlekowego."
  },
  {
    name: "Odmierz sól",
    text: "Użyj wagi cyfrowej, aby odmierzyć dokładne gramy soli. Dodaj ją do swojego naczynia fermentacyjnego."
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
  slug: 'kalkulator-soli-fermentacji-mlekowej',
  title: 'Kalkulator Soli do Fermentacji Mlekowej',
  description: 'Oblicz precyzyjne procenty soli do solenia na sucho i solanki mokrej. Zrównoważ populacje bakterii, zapobiegaj pleśni i opanuj konserwację żywności.',
  faqTitle: 'Często Zadawane Pytania',
  ui: {
    title: "Kalkulator Soli do Fermentacji Mlekowej",
    subtitle: "Precyzyjna kontrola zasolenia do bio organicznej konserwacji",
    unitLabel: "System Miar",
    metricUnit: "Metryczny (g / gramy)",
    imperialUnit: "Imperialny (oz / uncje)",
    modeLabel: "Tryb Fermentacji",
    dryMode: "Solenie na Sucho",
    wetMode: "Solanka Mokra",
    vegWeightLabel: "Waga Warzyw",
    waterWeightLabel: "Waga Wody",
    salinityLabel: "Docelowe Zasolenie (%)",
    saltGramsLabel: "Wymagana Sól",
    fineSaltLabel: "Sól Drobna (łyżeczki)",
    kosherSaltLabel: "Sól Koszerna (łyżeczki)",
    statusDanger: "Strefa Zagrożenia",
    statusDangerDesc: "Zasolenie poniżej 2,0% jest niewystarczające do zablokowania patogenów i pleśni. Zwiększ zasolenie, aby zapewnić bezpieczeństwo.",
    statusOptimal: "Optymalna Strefa LAB",
    statusOptimalDesc: "Zasolenie między 2,0% a 3,5% jest idealne, aby bakterie kwasu mlekowego (LAB) mogły dominować i bezpiecznie fermentować.",
    statusInhibited: "Strefa Zahamowana",
    statusInhibitedDesc: "Zasolenie powyżej 3,5% spowalnia lub zatrzymuje fermentację. Przydatne do długotrwałego przechowywania, ale opóźnia aktywność bakteryjną.",
    petriTitle: "Symulacja Mikrobiologiczna",
    scaleTitle: "Wyświetlacz Wagi Cyfrowej",
    disclaimer: "Uwaga: Ważenie soli za pomocą wagi cyfrowej jest zdecydowanie zalecane zamiast pomiarów objętościowych.",
    kosherLabel: "Sól Koszerna",
    fineLabel: "Sól Drobna",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Najlepszy Przewodnik po Chemii Fermentacji Mlekowej i Kontroli Zasolenia',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fermentacja mlekowa to dynamiczny proces biochemiczny napędzany przez bakterie kwasu mlekowego (LAB) w celu konserwacji warzyw i owoców. Cały mechanizm opiera się na stworzeniu selektywnego środowiska, w którym pożyteczne bakterie rozwijają się, a organizmy psujące, pleśnie i patogeny są tłumione. Kontrola zasolenia jest najważniejszym narzędziem do osiągnięcia tej biologicznej selektywności.',
    },
    {
      type: 'title',
      text: 'Biochemiczne Działanie Soli w Konserwacji',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gdy sól zostanie wprowadzona do surowych warzyw, działa poprzez proces fizyczny znany jako <strong>ciśnienie osmotyczne</strong>. Wysokie stężenie soli na zewnątrz komórek roślinnych wyciąga wodę i rozpuszczone cukry z tkanek roślinnych poprzez osmozę (plazmolizę). Tworzy to bogatą w składniki odżywcze solankę, która służy jako doskonałe paliwo dla bakterii kwasu mlekowego. Jednocześnie ciśnienie osmotyczne odwadnia i lizuje błony komórkowe niepożądanych pleśni, drożdży i bakterii chorobotwórczych, takich jak <em>Escherichia coli</em> czy <em>Clostridium botulinum</em>, które nie tolerują podwyższonego poziomu zasolenia.',
    },
    {
      type: 'title',
      text: 'Sukcesja Mikrobiologiczna: Jak LAB Kolonizują Fermenty',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fermentacja mlekowa nie jest przeprowadzana przez jeden gatunek bakterii, ale przez sukcesję różnych szczepów, które dominują wraz ze wzrostem kwasowości. W typowej fermentacji warzywnej cykl przebiega w trzech odrębnych fazach:',
    },
    {
      type: 'list',
      items: [
        '<strong>Faza 1 - Leuconostoc mesenteroides:</strong> Ta heterofermentatywna bakteria inicjuje fermentację. Jest bardzo aktywna na początku, wytwarzając kwas mlekowy, kwas octowy, dwutlenek węgla (który pomaga stworzyć atmosferę beztlenową) i etanol. Szybko obniża pH, przygotowując podłoże dla kolejnych gatunków.',
        '<strong>Faza 2 - Lactobacillus plantarum i Lactobacillus brevis:</strong> Gdy pH spadnie poniżej 5,0, <em>L. mesenteroides</em> obumiera, a kwasotolerancyjne bakterie homofermentatywne, takie jak <em>L. plantarum</em>, przejmują kontrolę. Fermentują pozostałe cukry proste wyłącznie do kwasu mlekowego, szybko obniżając pH.',
        '<strong>Faza 3 - Pediococcus pentosaceus i inne:</strong> W długoterminowych fermentacjach te wysoce kwasotolerancyjne bakterie kontynuują produkcję kwasu, aż do całkowitego wyczerpania cukrów lub osiągnięcia pH około 3,5-3,8, stabilizując środowisko na czas nieokreślony.'
      ],
    },
    {
      type: 'title',
      text: 'Ochrona Tekstury Warzyw: Połączenie Pektyny',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Częstym problemem w domowej fermentacji jest rozmiękczenie. Komórki roślinne są utrzymywane razem przez strukturalny polisacharyd zwany pektyną. Mikroorganizmy psujące wytwarzają enzymy zwane <strong>pektynazami</strong>, które rozkładają pektynę i niszczą ściany komórkowe, powodując rozmiękczenie. Utrzymanie poziomu zasolenia powyżej 2,0% bezpośrednio hamuje aktywność tych enzymów pektynolitycznych. Ponadto jony wapnia obecne w nierafinowanej soli morskiej lub dodawane jako chlorek wapnia mogą sieciować się z cząsteczkami pektyny, tworząc pektynian wapnia, który utrzymuje ogórki kiszone i kapustę kiszoną chrupiącymi.',
    },
    {
      type: 'title',
      text: 'Matematyka Solenia na Sucho a Solanki Mokrej',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zrozumienie wzoru do obliczania soli jest kluczowe. W przypadku solenia na sucho (powszechnie stosowanego do szatkowanych warzyw, takich jak kapusta do kiszenia), procent soli oblicza się wyłącznie na podstawie wagi warzyw. W przypadku solanki mokrej (stosowanej do całych lub większych kawałków warzyw, takich jak ogórki czy marchew), procent soli musi być obliczony na podstawie <strong>całkowitej wagi zarówno warzyw, jak i dodanej wody</strong>. Obliczanie soli wyłącznie na podstawie wagi wody jest częstym błędem, który rozcieńcza końcowe zasolenie, ponieważ woda wewnątrz warzyw ostatecznie rozcieńcza solankę.',
    },
    {
      type: 'table',
      headers: ['Zakres Zasolenia', 'Stan Mikrobiologiczny', 'Typowe Zastosowania', 'Poziom Bezpieczeństwa'],
      rows: [
        ['< 2,0%', 'Ryzyko Patogenów / Zagrożenie Pleśnią', 'Nie zalecane', 'Niski'],
        ['2,0% - 2,5%', 'Optymalny Rozkwit Bakterii Kwasu Mlekowego', 'Kapusta kiszona, Kimchi, Ogórki kiszone', 'Wysoki'],
        ['2,5% - 3,5%', 'Spowolniona fermentacja / Wysoka retencja tekstury', 'Ostre sosy, czosnek, warzywa korzeniowe', 'Wysoki'],
        ['> 3,5%', 'Hamowanie bakteryjne / Tylko konserwacja', 'Oliwki, długo dojrzewające papryki, wysoka temperatura', 'Bezpieczne ale nieaktywne'],
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego Ważenie Soli Jest Lepsze niż Pomiar Objętości',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Odmierzanie soli objętościowo (łyżkami stołowymi lub łyżeczkami) jest notorycznie niedokładne. Sól stołowa jest drobna i gęsto upakowana, łyżeczka może ważyć do 6 gramów. Z kolei sól koszerna ma duże, płatkowe kryształy z kieszeniami powietrznymi, ważąc zaledwie 4 gramy na łyżeczkę. Gruba sól morska znajduje się gdzieś pomiędzy. Używanie pomiarów objętościowych może łatwo spowodować, że ferment będzie niebezpiecznie niedosolony lub całkowicie zatrzymany z powodu przesolenia. Ważenie składników w gramach na wadze cyfrowej gwarantuje spójne, bezpieczne i powtarzalne wyniki.',
    },
    {
      type: 'title',
      text: 'Rozwiązywanie Problemów i Najlepsze Praktyki w Fermentacji Mlekowej',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aby zapewnić udaną fermentację, zawsze przestrzegaj tych zasad: Utrzymuj wszystkie warzywa całkowicie zanurzone pod solanką, aby zapobiec rozwojowi pleśni tlenowych. Używaj czystych naczyń i obciążników. Fermentuj w chłodnej temperaturze pokojowej (18°C do 22°C), aby zapobiec wyparciu bakterii fazy 1. Jeśli na powierzchni utworzy się biały nalot, sprawdź, czy to drożdże Kahm (nieszkodliwe dzikie drożdże powstające w wyniku ekspozycji na tlen) czy pleśń. Pleśń jest puszysta i kolorowa; jeśli jest obecna, ferment należy wyrzucić. Drożdże Kahm można usunąć, choć mogą wpłynąć na smak.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
