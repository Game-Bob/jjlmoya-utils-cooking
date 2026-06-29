import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Predyktor Suszenia Muszelek Makaroników: Kalkulator Czasu Suszenia w Zależności od Wilgotności i Temperatury';
const description = 'Oblicz dokładnie, ile czasu muszle makaroników potrzebują na wysuszenie w zależności od wilgotności, temperatury i rozmiaru. Uniknij pękających muszelek i ciesz się perfekcyjnym rantem za każdym razem.';

const faq = [
  {
    question: 'Dlaczego muszle makaroników muszą schnąć przed pieczeniem?',
    answer: 'Suszenie tworzy cienką błonkę na powierzchni muszelki. Ta błonka jest niezbędna, ponieważ zatrzymuje parę podczas pieczenia i zmusza ją do ujścia dołem przez rant zamiast rozrywania wierzchu. Bez odpowiedniego wysuszenia makaroniki pękają, nie mają rantu lub pieką się nierówno.',
  },
  {
    question: 'Jak wilgotność wpływa na czas suszenia makaroników?',
    answer: 'Wilgotność jest najbardziej krytycznym czynnikiem. Przy wysokiej wilgotności (powyżej 60%) powietrze jest już nasycone wilgocią, co dramatycznie spowalnia parowanie z powierzchni muszelki. Czas suszenia może być dwa, a nawet trzy razy dłuższy niż w suchy dzień. W bardzo suchych warunkach (poniżej 30%) muszelki mogą przeschnąć i wytworzyć zbyt grubą błonkę, która uniemożliwia prawidłowy wzrost.',
  },
  {
    question: 'Jaka jest idealna temperatura do suszenia muszelek makaroników?',
    answer: 'Temperatura pokojowa między 20 °C a 25 °C jest idealna. Cieplejsze powietrze zatrzymuje więcej wilgoci i przyspiesza suszenie, ale gdy jest zbyt gorąco (powyżej 30 °C), muszelki mogą schnąć nierówno  -  z chrupiącą warstwą na zewnątrz i wilgotnym wnętrzem. Temperatury poniżej 18 °C znacznie spowalniają suszenie.',
  },
  {
    question: 'Jak wielkość muszelki wpływa na czas suszenia?',
    answer: 'Większe muszelki mają większą powierzchnię i objętość, co wymaga proporcjonalnie dłuższego suszenia. Mini makaronik o średnicy 2 cm może wyschnąć w 15 minut, podczas gdy duży makaronik 5 cm może potrzebować ponad godziny. Zależność nie jest liniowa: podwojenie średnicy mniej więcej trzykrotnie wydłuża czas suszenia ze względu na stosunek powierzchni do objętości.',
  },
];

const howTo = [
  {
    name: 'Wykonaj muszelki',
    text: 'Wykręcaj równe krążki na papierze do pieczenia lub macie silikonowej. Użyj szablonu, aby zachować jednakowy rozmiar.',
  },
  {
    name: 'Zmierz warunki w otoczeniu',
    text: 'Sprawdź wilgotność i temperaturę w kuchni za pomocą higrometru i termometru.',
  },
  {
    name: 'Wprowadź wartości do kalkulatora',
    text: 'Wprowadź wilgotność, temperaturę i średnicę muszelki, aby uzyskać szacowany czas suszenia.',
  },
  {
    name: 'Sprawdź błonkę',
    text: 'Po upływie wskazanego czasu delikatnie dotknij powierzchni muszelki. Powinna być sucha i matowa, nie lepka. Jeśli klei się do palca, daj jej więcej czasu.',
  },
  {
    name: 'Piecz, gdy będzie gotowa',
    text: 'Gdy błonka jest już uformowana, piecz od razu. Nie zostawiaj muszelek zbyt długo po wysuszeniu, bo mogą przeschnąć i popękać.',
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
  slug: 'predyktor-suszenia-makaronikow',
  title: 'Predyktor Suszenia Muszelek Makaroników',
  description: 'Oblicz dokładnie, ile czasu muszle makaroników potrzebują na wysuszenie w zależności od wilgotności, temperatury i rozmiaru. Uniknij pękających muszelek i ciesz się perfekcyjnym rantem za każdym razem.',
  faqTitle: 'Często Zadawane Pytania',
  ui: {
    humidityLabel: 'Wilgotność Otoczenia',
    humidityUnit: '%',
    tempLabel: 'Temperatura Pokojowa',
    tempUnit: '°C',
    sizeLabel: 'Średnica Muszelki',
    sizeUnit: 'cm',
    dryingTimeLabel: 'Szacowany Czas Suszenia',
    minutesUnit: 'min',
    readinessLabel: 'Stan Powierzchni',
    skinStatusReady: 'Gotowa do Pieczenia',
    skinStatusForming: 'Tworzy Błonkę',
    skinStatusSticky: 'Wciąż Lepka',
    skinStatusOverDry: 'Przesuszona',
    humidityTagHigh: 'Wysoka wilgotność',
    humidityTagNormal: 'Normalna wilgotność',
    humidityTagLow: 'Niska wilgotność',
    humidityDescHigh: 'Bardzo wilgotny dzień. Suszenie potrwa znacznie dłużej. Jeśli to możliwe, użyj osuszacza powietrza lub klimatyzowanego pomieszczenia.',
    humidityDescNormal: 'Umiarkowana wilgotność. Suszenie powinno przebiegać normalnie, z dobrym formowaniem się błonki.',
    humidityDescLow: 'Bardzo suche powietrze. Muszelki mogą schnąć zbyt szybko i istnieje ryzyko przesuszenia. Obserwuj uważnie i skróć czas suszenia.',
    tempTagHot: 'Ciepły pokój',
    tempTagIdeal: 'Idealna temp. pokojowa',
    tempTagCool: 'Chłodny pokój',
    sizeTagMini: 'Mini',
    sizeTagStandard: 'Standardowy',
    sizeTagLarge: 'Duży',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Nauka Suszenia Muszelek Makaroników: Dlaczego Błonka Decyduje o Sukcesie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Makaronik to jedno z najbardziej wymagających technicznie ciast w cukiernictwie francuskim. Jego charakterystyczna gładka kopułka i falbankowata podstawa, zwana "rantem" lub "pied", zależą całkowicie od kluczowego etapu: suszenia wykręconych muszelek przed pieczeniem. Ten okres odpoczynku pozwala na wytworzenie się cienkiego białkowego filmu na powierzchni każdej muszelki. Podczas pieczenia błonka ta zatrzymuje rozprężającą się parę wewnątrz muszelki, zmuszając ją do ujścia dołem przez podstawę, co unosi muszelkę i tworzy upragniony rant. Bez odpowiedniego suszenia para rozrywa wierzch, powodując pęknięcia. Przy nadmiernym suszeniu błonka staje się zbyt sztywna i muszelki nie mogą prawidłowo urosnąć.',
    },
    {
      type: 'title',
      text: 'Wilgotność i Jej Dominująca Rola w Kinetyce Suszenia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wilgotność względna jest najbardziej wpływową zmienną w suszeniu muszelek makaroników. Przy 50% wilgotności względnej standardowa muszelka 3 cm potrzebuje zazwyczaj 30-40 minutos na wytworzenie odpowiedniej błonki. Przy 70% wilgotności czas ten może się wydłużyć do 60-90 minut. Przy 30% wilgotności suszenie może zakończyć się już po 15-20 minutach. Fizyka stojąca za tym jest prosta: szybkość parowania jest proporcjonalna do deficytu ciśnienia pary między powierzchnią muszelki a otaczającym powietrzem. Wilgotne powietrze ma mniejszy deficyt, co spowalnia parowanie. Profesjonalne cukiernie skrupulatnie kontrolują wilgotność, często utrzymując dedykowane pomieszczenia dla makaroników przy wilgotności względnej 40-50%.',
    },
    {
      type: 'title',
      text: 'Tabela Referencyjna Czasów Suszenia wg Wilgotności i Wielkości Muszelki',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Wilgotność', '2 cm Mini', '3 cm Standard', '4 cm Duża', '5 cm Bardzo Duża'],
      rows: [
        ['30% (Bardzo sucho)', '10-15 min', '15-20 min', '25-30 min', '35-45 min'],
        ['40% (Sucho)', '15-20 min', '20-30 min', '30-40 min', '45-60 min'],
        ['50% (Umiarkowanie)', '20-25 min', '30-40 min', '40-55 min', '55-75 min'],
        ['60% (Wilgotno)', '25-35 min', '40-55 min', '55-75 min', '75-100 min'],
        ['70% (Bardzo wilgotno)', '35-50 min', '55-75 min', '75-100 min', '100-130 min'],
        ['80% (Ekstremalnie wilgotno)', '50-70 min', '75-100 min', '100-140 min', '130-180 min'],
      ],
    },
    {
      type: 'title',
      text: 'Rola Temperatury w Szybkości Parowania',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Temperatura wpływa na suszenie poprzez dwa mechanizmy. Po pierwsze, cieplejsze powietrze może pomieścić więcej pary wodnej, zwiększając potencjalną szybkość parowania z powierzchni muszelki. Po drugie, molekularna energia kinetyczna rośnie wraz z temperaturą, przyspieszając tempo, w jakim cząsteczki wody opuszczają fazę ciekłą. Jednak temperatura wpływa również na stabilność bezy. Powyżej 28 °C białka jaj w bezie mogą zacząć się destabilizować, prowadząc do osłabionej struktury. Idealny zakres dla suszenia makaroników to 20-25 °C. Poniżej 18 °C szybkość parowania spowalnia do tego stopnia, ze suszenie staje się niepraktyczne dla muszelek o standardowym rozmiarze.',
    },
    {
      type: 'title',
      text: 'Wielkość Muszelki i Prawo Kwadrat-Sześcian w Suszeniu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Średnica muszelki ma nieliniowy wpływ na czas suszenia ze względu na stosunek powierzchni do objętości. Mini makaronik 2 cm ma około 3,1 cm² powierzchni na 0,5 cm³ objętości, co daje korzystny stosunek powierzchni do objętości około 6:1. Duży makaronik 5 cm ma około 19,6 cm² powierzchni na 8,2 cm³ objętości  -  stosunek zaledwie 2,4:1. Oznacza to, ze większe muszelki mają proporcjonalnie mniejszą powierzchnię, przez którą wilgoć może uciekać, co dramatycznie wydłuża czas suszenia. Kalkulator modeluje to za pomocą zależności potęgowej skalibrowanej na podstawie danych empirycznych z profesjonalnych cukierni.',
    },
    {
      type: 'title',
      text: 'Rozwiązywanie Typowych Problemów z Suszeniem Makaroników',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pęknięte muszelki bez rantu',
      html: 'Najczęstsza porażka przy makaronikach. Prawie zawsze oznacza to, ze muszelki nie były suszone wystarczająco długo przed pieczeniem. Błonki powierzchniowa była zbyt słaba, aby utrzymać rozprężającą się parę, która wyrwała się przez wierzch. <strong>Rozwiązanie: wydłuż czas suszenia o 10-15 minut i sprawdź powierzchnię lekkim dotykiem opuszkiem palca przed pieczeniem.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Krzywy lub pochylony rant',
      html: 'Winowajcą jest nierówne suszenie. Jeśli jedna strona blachy schnie szybciej niż druga, rant wyrośnie nierówno. Zdarza się to często, gdy blachy stoją przy oknie, wentylatorze lub źródle ciepła. <strong>Rozwiązanie: obracaj blachy w trakcie suszenia i zapewnij równomierny przepływ powietrza wokół wszystkich muszelek.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Puste muszelki po upieczeniu',
      html: 'Puste wnętrze może być skutkiem nadmiernego suszenia, które tworzy zbyt grubą i sztywną błonkę. Muszelka nie może prawidłowo wyrosnąć podczas pieczenia, pozostawiając w środku pustą przestrzeń. <strong>Rozwiązanie: skróć czas suszenia i wcześniej sprawdzaj, czy błonka się formuje. Powierzchnia powinna być sucha, ale powinna lekko uginać się przy delikatnym nacisku.</strong>',
    },
    {
      type: 'title',
      text: 'Profesjonalne Porady od Cukierników',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Technika Suszenia w Piekarniku na Wilgotne Dni',
      html: 'W wyjątkowo wilgotne dni profesjonalni cukiernicy stosują technikę zwaną "suszeniem w piekarniku". Rozgrzej piekarnik do najniższej możliwej temperatury (zazwyczaj 50 °C), wyłącz go, a następnie wstaw wykręcone makaroniki do środka z lekko uchylonymi drzwiczkami na 5-10 minut. Tworzy to ciepły, suchy mikroklimat, który przyspiesza formowanie błonki, nie rozpoczynając jeszcze pieczenia muszelek.',
    },
    {
      type: 'tip',
      title: 'Test Dotyku dla Perfekcyjnej Błonki',
      html: 'Ostateczny test gotowości makaroników: delikatnie dotknij powierzchni muszelki czystym, suchym opuszkiem palca. Jeśli masa klei się do palca, potrzebuje więcej czasu. Jeśli powierzchnia jest sucha i matowa i nie klei się, błonka jest uformowana. Jeśli powierzchnia jest twarda, skorupiasta i nie ugina się, muszelki są przesuszone.',
    },
    {
      type: 'tip',
      title: 'Kontrola Wilgotności bez Sprzętu',
      html: 'Jeśli nie masz osuszacza, postaw miseczkę z suchym ryżem lub saszetki żelowe z krzemionką obok schnących makaroników. Te środki suszące pochłaniają wilgoć z otoczenia, tworząc bardziej suchy mikroklimat wokół blachy. W profesjonalnych kuchniach bez klimatyzacji ta prosta sztuczka może skrócić czas suszenia o 30-40% w wilgotne dni.',
    },
    {
      type: 'title',
      text: 'Czynnik Starzenia Białek Jaj',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Starzone białka dają bardziej stabilne bezy, które schną w bardziej przewidywalny sposób. Świeże białka zawierają więcej wody i mniej elastyczną strukturę białkową, co prowadzi do słabszych bez, które potrzebują więcej czasu na wytworzenie właściwej błonki. Profesjonalne przepisy wymagają białek starzonych przez 24-72 godziny w temperaturze pokojowej lub 3-5 dni w lodówce. Starzone białka tracą około 10-15% swojej zawartości wody przez parowanie, co zagęszcza białka i poprawia wytrzymałość bezy.',
    },
    {
      type: 'title',
      text: 'Szybkie Zestawienie: Czasy Suszenia dla Typowych Warunków',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Typowe czasy suszenia dla standardowych muszelek makaroników 3 cm',
      items: [
        'Klimatyzowana kuchnia (22 °C, 45% wilgotności): 25-30 minut',
        'Wiosenny dzień, otwarte okna (20 °C, 55% wilgotności): 35-45 minut',
        'Letni dzień, bez klimatyzacji (28 °C, 70% wilgotności): 60-90 minut  -  zastosuj technikę suszenia w piekarniku',
        'Ogrzewany dom zimą (21 °C, 30% wilgotności): 15-20 minut  -  uważaj na przesuszenie',
        'Deszczowy dzień (18 °C, 80% wilgotności): 75-100 minut  -  poważnie rozważ użycie osuszacza',
        'Profesjonalna cukiernia (22 °C, 45% wilgotności, konwekcja): 20-25 minut',
      ],
    },
    {
      type: 'paragraph',
      html: 'Każda kuchnia jest wyjątkowym środowiskiem. Ten kalkulator uwzględnia trzy kluczowe zmienne  -  wilgotność, temperaturę i rozmiar muszelki  -  aby podać Ci spersonalizowane przewidywanie czasu suszenia. Wprowadź swoje warunki i wykreuj z pewnością siebie.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
