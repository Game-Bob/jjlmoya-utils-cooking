import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator Inokulacji i Hydracji Koji";
const description = "Oblicz idealna zawartosc wilgoci, dawke zarodnikow i temperature inkubacji do domowej produkcji koji. Unikaj nieudanych partii dzieki naszemu bezplatnemu kalkulatorowi inokulacji i hydracji koji.";
const faq = [
  {
    question: "Jaka jest docelowa wilgotnosc podczas gotowania substratu koji?",
    answer: "Idealna calkowita wilgotnosc dla gotowanego na parze ryzu lub jeczmienia podczas inokulacji koji wynosi od 30% do 35%. Odpowiada to wadze po gotowaniu na parze wynoszacej okolo 1,35x do 1,40x poczatkowej suchej masy."
  },
  {
    question: "Ile proszku zarodnikowego (tane-koji) potrzebuje?",
    answer: "Standardowa dawka inokulacji to 1 gram standardowej mieszanki zarodnikowej na 1 kilogram suchego substratu. W przypadku skoncentrowanych zarodnikow potrzebujesz mniej (0,5 g), natomiast rozcienczone mieszanki wymagaja wiecej (2,0 g)."
  },
  {
    question: "Dlaczego kontrola temperatury jest kluczowa podczas inkubacji koji?",
    answer: "Aspergillus oryzae rosnie optymalnie w temperaturze od 28C do 34C. Jesli temperatura przekroczy 38C, ple sn moze sie przegrzac, przestac rosnac lub wytwarzac niepozadane zielone/czarne zarodniki. Ponizej 20C wzrost znacznie spowalnia."
  },
  {
    question: "Co dzieje sie podczas fazy egzotermicznej?",
    answer: "Po 18 do 24 godzinach inkubacji koji zaczyna szybko rosnac i wytwarzac wlasne cieplo. Podczas tego egzotermicznego szczytu nalezy mieszac substrat i obnizyc temperature inkubatora, aby zapobiec przegrzaniu."
  }
];

const howTo = [
  {
    name: "Wprowadz wage suchego substratu",
    text: "Wprowadz poczatkowa sucha wage swojego ryzu lub jeczmienia, aby ustalic docelowe progi hydratacji."
  },
  {
    name: "Sledz wage po gotowaniu",
    text: "Wprowadz rzeczywista wage po ugotowaniu na parze. Kalkulator okresla procent wilgotnosci i sprawdza, czy miesci sie w idealnym przedziale 30-35%."
  },
  {
    name: "Oblicz dawke zarodnikow",
    text: "Wybierz mocy swoich zarodnikow (standardowe, skoncentrowane lub rozcienczone), aby uzyskac dokladna wage proszku zarodnikowego do inokulacji."
  },
  {
    name: "Monitoruj parametry inkubacji",
    text: "Dostosuj temperature i wilgotnosc wzgledna, aby symulowac wzrost grzybni i przejrzyj 48-godzinna krzywa termiczna."
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
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'kalkulator-inokulacji-koji',
  title: 'Kalkulator Inokulacji i Hydracji Koji',
  description: 'Oblicz idealna zawartosc wilgoci, dawke zarodnikow i temperature inkubacji do domowej produkcji koji. Unikaj nieudanych partii dzieki naszemu bezplatnemu kalkulatorowi inokulacji i hydracji koji.',
  faqTitle: 'Czesto Zadawane Pytania',
  ui: {
    title: 'Analizator Inokulacji Koji',
    subtitle: 'Optymalizuj parametry fermentacji koji w stanie stalym',
    dryWeightLabel: 'Sucha Waga Substratu',
    steamedWeightLabel: 'Rzeczywista Waga Po Gotowaniu',
    targetRangeLabel: 'Docelowy Zakres Wagi Po Gotowaniu',
    moistureLabel: 'Biezaca Wilgotnosc',
    potencyLabel: 'Moc Zarodnikow',
    standardPotency: 'Standardowe Zarodniki',
    concentratedPotency: 'Skoncentrowane',
    dilutedPotency: 'Rozcienczona Mieszanka',
    sporeDosageLabel: 'Dawka Zarodnikow',
    tempLabel: 'Temperatura Inkubatora',
    humidityLabel: 'Wilgotnosc Wzgledna',
    statusIdeal: 'Idealna Inkubacja',
    statusSlow: 'Wolny Wzrost',
    statusInhibited: 'Zahamowany / Zimno',
    statusOverheating: 'Przegrzanie / Sporulacja',
    timelineTitle: '48h Termiczny Cykl Inkubacji',
    stage1Name: '0-18h: Ogrzewanie',
    stage2Name: '18-36h: Szczyt Egzotermiczny',
    stage3Name: '36-48h: Dojrzewanie'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Jak Zrobic Koji: Idealna Wilgotnosc, Dawka Zarodnikow i Temperatura dla Aspergillus Oryzae',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Domowa produkcja koji wymaga trzech rzeczy, ktore musza byc zrobione prawidlowo: <strong>hydratacja substratu</strong>, <strong>gestosc inokulacji zarodnikami</strong> i <strong>kontrola temperatury inkubacji</strong>. Jesli ktorakolwiek z nich jest nieprawidlowa, twoja partia moze sie przegrzac, nie zainokulowac lub wyrosnac nieprawidlowa ple sn. Nasz <strong>kalkulator inokulacji koji</strong> eliminuje zgadywanie, obliczajac docelowa wage po gotowaniu, dokladna dawke zarodnikow i biezacy status inkubacji na podstawie twoich konkretnych danych.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '30-35%',
          label: 'Docelowa Wilgotnosc',
          icon: 'mdi:water-percent'
        },
        {
          value: '1 g/kg',
          label: 'Standardowa Dawka Zarodnikow',
          icon: 'mdi:seed-outline'
        },
        {
          value: '28-34°C',
          label: 'Idealna Temperatura',
          icon: 'mdi:thermometer'
        },
        {
          value: '48 h',
          label: 'Calkowita Inkubacja',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Dlaczego Wilgotnosc Okresla Jakosc Koji',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Najwazniejszym czynnikiem w udanej uprawie koji jest <strong>wilgotnosc substratu</strong>. Kiedy ryz lub jeczmien jest gotowany na parze, granulki skrobi ulegaja zelatynizacji i absorbuja wode, stajac sie dostepne dla enzymow produkowanych przez Aspergillus oryzae. Idealny zakres wilgotnosci jest waski: <strong>30% do 35%</strong>. Poniezej 30% grzybnia nie moze pobrac wystarczajacej ilosci wody do wzrostu, a produkcja enzymow zatrzymuje sie. Powyzej 35% ziarna staja sie lepkie i zlepiaja sie, zmniejszajac porowatosc powietrza i duszac aerobowa ple sn.'
    },
    {
      type: 'list',
      items: [
        '<strong>Za sucho (ponizej 30%):</strong> Wzrost grzybni jest zahamowany, produkcja enzymow spada, a koji nigdy w pelni nie kolonizuje ziarna.',
        '<strong>Za mokro (powyzej 35%):</strong> Ziarna sklejaja sie, kieszenie powietrzne zapadaja, a bakterie lub niepozadane ple snie moga wyprzedzic Aspergillus oryzae.',
        '<strong>Zakres docelowy (30-35%):</strong> Ziarno jest zwarte, poszczegolne ziarna latwo sie rozdzielaja, a grzybnia rownomiernie sie rozrasta w ciagu 48 godzin.',
        '<strong>Jak mierzyc:</strong> Zwaz suche ziarno, ugotuj na parze, a nastepnie zwaz ponownie. Kalkulator oblicza dokladny procent wilgotnosci z tych dwoch liczb.'
      ]
    },
    {
      type: 'table',
      headers: ['Rodzaj Ziarna', 'Sucha Waga', 'Docelowa Waga Po Gotowaniu', 'Czas Moczenia', 'Czas Gotowania Na Parze'],
      rows: [
        ['Bialy Ryz (krotkoziarnisty)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['Bialy Ryz (dlugoziarnisty)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['Jeczmien Perlowy', '1000 g', '1350-1400 g', '4-8 h', '40-50 min'],
        ['Brazowy Ryz', '1000 g', '1350-1400 g', '8-12 h', '45-60 min']
      ]
    },
    {
      type: 'title',
      text: 'Inokulacja Zarodnikami: Ile Tane-Koji Potrzebujesz?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Gestosc inokulacji bezposrednio wplywa na to, jak szybko ple sn kolonizuje substrat i jak konkurencyjna jest wobec zanieczyszczen. Standardowa dawka to <strong>1 gram mieszanki zarodnikowej na kilogram suchego substratu</strong>, ale rozni sie to w zaleznosci od rodzaju zarodnikow.'
    },
    {
      type: 'proscons',
      title: 'Wyb Rodzaju Zarodnikow',
      items: [
        {
          pro: 'Standardowe zarodniki sa najbardziej popularnym formatem, wyrozumiale dla poczatkujacych i dobrze udokumentowane w literaturze domowego warzenia.',
          con: 'Wieksza objetosc proszku na partie i moga zawierac wypelniacz, ktory nie przyczynia sie do inokulacji.'
        },
        {
          pro: 'Skoncentrowane zarodniki uzywaja polowe proszku do tej samej inokulacji, maja wyzsza czystosc i sa bardziej ekonomiczne przy duzych partiach.',
          con: 'Latwiej przedawkowac, wymaga precyzyjnej wagi (rozdzielczosc 0,01 g) i pozostawia mniej miejsca na blad w przypadku niedoszacowania.'
        },
        {
          pro: 'Rozcienczone mieszanki latwo rozprowadzaja sie po duzych powierzchniach, sa bardziej wyrozumiale przy nierownomiernym mieszaniu i odpowiednie dla poczatkujacych, ktorzy preferuja widoczne pokrycie.',
          con: 'Uzywa wiecej proszku na partie i moze wprowadzac nadmiar skrobi z wypelniacza.'
        }
      ]
    },
    {
      type: 'title',
      text: 'Egzotermiczna Krzywa Ciepla: Dlaczego Koji Generuje Wlasne Cieplo',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Gdy Aspergillus oryzae zuzywa skrobie i przeksztalca ja w proste cukry, generuje metaboliczne cieplo. Miedzy <strong>18 a 36 godzina</strong> inkubacji aktywnosc biologiczna osiaga szczyt, powodujac egzotermiczny skok, ktory moze podniesc temperature loza ziarna o 5-10C powyzej temperatury otoczenia inkubatora.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Oznaki Przegrzewania Sie Koji',
      html: 'Jesli temperatura loza ziarna przekroczy <strong>38C</strong>, enzymy ple sni zaczynaja denaturowac, a grzyb przelacza sie w tryb reprodukcyjny, produkujac <strong>zielone lub czarne zarodniki</strong>. Partia bedzie pachniec amoniakiem zamiast slodko i orzechowo. Nalezy natychmiast wymieszac substrat i obnizyc temperature inkubatora, aby przywrocic ja ponizej 34C.'
    },
    {
      type: 'tip',
      title: 'Harmonogram Mieszania Co 12 Godzin',
      html: 'Poczawszy od 18 godziny, rozbij loze ziarna i mieszaj co 12 godzin. To uwalnia uwiezione cieplo, redystrybuuje wilgoc i zapewnia grzybni dostep do swiezego tlenu. Uzywaj czystych, zdezynfekowanych rak lub sterylnej lyzki.'
    },
    {
      type: 'tip',
      title: 'Wilgotnosc Tez Ma Znaczenie',
      html: 'Utrzymuj wilgotnosc wzgledna powyzej <strong>65%</strong> podczas inkubacji. Ponizej 40% substrat wysycha i wzrost ustaje. Powyzej 90% kondensacja moze sprzyjac rozwojowi bakterii na powierzchni ziarna.'
    },
    {
      type: 'tip',
      title: 'Zaufaj Swojemu Nosowi',
      html: 'Zdrowy koji pachnie slodkimi pieczonymi kasztanami lub swiezymi grzybami. Jesli wyczujesz amoniak, kwasnosc lub gnicie, partia mogla sie przegrzac lub zostac zanieczyszczona. Natychmiast usun i wyrzuc porazone ziarno.'
    },
    {
      type: 'card',
      icon: 'mdi:rice',
      title: 'Produkcja Sake i Miso',
      html: 'Ryz inokulowany koji to podstawa <strong>sake</strong>, <strong>miso</strong> i <strong>amazake</strong>. Precyzyjna kontrola wilgotnosci zapewnia prawidlowy rozwoj enzymow do konwersji skrobi w cukier.'
    },
    {
      type: 'card',
      icon: 'mdi:soy-sauce',
      title: 'Sos Sojowy i Tamari',
      html: 'Koji hodowane na <strong>soi</strong> lub mieszance soi i pszenicy napedza fermentacje produkujaca bogaty w umami sos sojowy. Stala temperatura zapobiega niepozadanym posmakom.'
    },
    {
      type: 'card',
      icon: 'mdi:shaker-outline',
      title: 'Shio Koji i Garum',
      html: '<strong>Shio koji</strong> (solona fermentacja koji) i <strong>garum miesne</strong> opieraja sie na w pelni skolonizowanym ziarnie. Nasz kalkulator zapewnia, ze twoj substrat znajduje sie w idealnym przedziale wilgotnosci przed inokulacja.'
    },
    {
      type: 'title',
      text: 'Slownik Inkubacji Koji',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Tane-Koji',
          definition: 'Proszek zarodnikowy uzywany do inokulacji gotowanego na parze ziarna. Zazwyczaj zarodniki Aspergillus oryzae zmieszane z nosnikiem skrobiowym, takim jak maka ryzowa.'
        },
        {
          term: 'Faza Egzotermiczna',
          definition: 'Okres miedzy 18 a 36 godzina inkubacji, podczas ktorego Aspergillus oryzae generuje wystarczajaco duzo metabolicznego ciepla, aby podniesc temperature loza ziarna powyzej poziomu otoczenia.'
        },
        {
          term: 'Zelatynizacja',
          definition: 'Proces podgrzewania skrobi w obecnosci wody, podczas ktorego granulki pecznieja i staja sie dostepne dla enzymow amylazy produkowanych przez ple sn.'
        },
        {
          term: 'Sporulacja',
          definition: 'Gdy ple sn przelacza sie ze wzrostu wegetatywnego w tryb reprodukcyjny, stajac sie zielona lub czarna. Jest to wywolane stresem cieplnym powyzej 38C i niszczy partie do uzytku kulinarnego.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Kluczowe Wnioski dla Idealnego Koji',
      items: [
        'Celuj w 30-35% wilgotnosci w gotowanym na parze ziarnie. Uzyj kalkulatora, aby znalezc dokladny docelowy ciezar po gotowaniu.',
        'Inokuluj w dawce 1 g/kg dla standardowych zarodnikow, 0,5 g/kg dla skoncentrowanych lub 2 g/kg dla rozcienczonych mieszanek.',
        'Utrzymuj 28-34C i powyzej 65% wilgotnosci podczas inkubacji. Mieszaj co 12 godzin po 18 godzinie.',
        'Obserwuj szczyt egzotermiczny w 18-36 godzinie. Jesli temperatura przekroczy 38C, natychmiast mieszaj i obniz ogrzewanie.',
        'Zaufaj swoim z myslom: slodki aromat kasztanow = dobry koji. Amoniak lub kwasny zapach = przegrzanie lub zanieczyszczenie.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
