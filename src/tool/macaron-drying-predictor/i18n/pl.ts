import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Predyktor Suszenia Muszelek Makaronikow: Kalkulator Czasu Suszenia w Zaleznosci od Wilgotnosci i Temperatury';
const description = 'Oblicz dokladnie, ile czasu muszle makaronikow potrzebuja na wysuszenie w zaleznosci od wilgotnosci, temperatury i rozmiaru. Uniknij pekajacych muszelek i ciesz sie perfekcyjnym rantem za kazdym razem.';

const faq = [
  {
    question: 'Dlaczego muszle makaronikow musza schnac przed pieczeniem?',
    answer: 'Suszenie tworzy cienka blonke na powierzchni muszelki. Ta blonka jest niezbedna, poniewaz zatrzymuje pare podczas pieczenia i zmusza ja do ujscia dolem przez ran zamiast rozrywania wierzchu. Bez odpowiedniego wysuszenia makaroniki pekaja, nie maja rantu lub pieka sie nierowno.',
  },
  {
    question: 'Jak wilgotnosc wplywa na czas suszenia makaronikow?',
    answer: 'Wilgotnosc jest najbardziej krytycznym czynnikiem. Przy wysokiej wilgotnosci (powyzej 60%) powietrze jest juz nasycone wilgocia, co dramatycznie spowalnia parowanie z powierzchni muszelki. Czas suszenia moze byc dwa, a nawet trzy razy dluzszy niz w suchy dzien. W bardzo suchych warunkach (ponizej 30%) muszelki moga przeschnac i wytworzyc zbyt gruba blonke, ktora uniemozliwia prawidlowy wzrost.',
  },
  {
    question: 'Jaka jest idealna temperatura do suszenia muszelek makaronikow?',
    answer: 'Temperatura pokojowa miedzy 20 Â°C a 25 Â°C jest idealna. Cieplejsze powietrze zatrzymuje wiecej wilgoci i przyspiesza suszenie, ale gdy jest zbyt goraco (powyzej 30 Â°C), muszelki moga schnac nierowno  -  z chrupiaca warstwa na zewnatrz i wilgotnym wnetrzem. Temperatury ponizej 18 Â°C znacznie spowalniaja suszenie.',
  },
  {
    question: 'Jak wielkosc muszelki wplywa na czas suszenia?',
    answer: 'Wieksze muszelki maja wieksza powierzchnie i objetosc, co wymaga proporcjonalnie dluzszego suszenia. Mini makaronik o srednicy 2 cm moze wyschnac w 15 minut, podczas gdy duzy makaronik 5 cm moze potrzebowac ponad godziny. Zaleznosc nie jest liniowa: podwojenie srednicy mniej wiecej trzykrotnie wydluza czas suszenia ze wzgledu na stosunek powierzchni do objetosci.',
  },
];

const howTo = [
  {
    name: 'Wykonaj muszelki',
    text: 'Wykrecaj rowne krazki na papierze do pieczenia lub macie silikonowej. Uzyj szablonu, aby zachowac jednakowy rozmiar.',
  },
  {
    name: 'Zmierz warunki w otoczeniu',
    text: 'Sprawdz wilgotnosc i temperature w kuchni za pomoca higrometru i termometru.',
  },
  {
    name: 'Wprowadz wartosci do kalkulatora',
    text: 'Wprowadz wilgotnosc, temperature i srednice muszelki, aby uzyskac szacowany czas suszenia.',
  },
  {
    name: 'Sprawdz blonke',
    text: 'Po uplywie wskazanego czasu delikatnie dotknij powierzchni muszelki. Powinna byc sucha i matowa, nie lepka. Jesli klei sie do palca, daj jej wiecej czasu.',
  },
  {
    name: 'Piecz, gdy bedzie gotowa',
    text: 'Gdy blonka jest juz uformowana, piecz od razu. Nie zostawiaj muszelek zbyt dlugo po wysuszeniu, bo moga przeschnac i popekac.',
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
  title: 'Predyktor Suszenia Muszelek Makaronikow',
  description: 'Oblicz dokladnie, ile czasu muszle makaronikow potrzebuja na wysuszenie w zaleznosci od wilgotnosci, temperatury i rozmiaru. Uniknij pekajacych muszelek i ciesz sie perfekcyjnym rantem za kazdym razem.',
  faqTitle: 'Czesto Zadawane Pytania',
  ui: {
    humidityLabel: 'Wilgotnosc Otoczenia',
    humidityUnit: '%',
    tempLabel: 'Temperatura Pokojowa',
    tempUnit: 'Â°C',
    sizeLabel: 'Srednica Muszelki',
    sizeUnit: 'cm',
    dryingTimeLabel: 'Szacowany Czas Suszenia',
    minutesUnit: 'min',
    readinessLabel: 'Stan Powierzchni',
    skinStatusReady: 'Gotowa do Pieczenia',
    skinStatusForming: 'Tworzy Blonke',
    skinStatusSticky: 'Wciaz Lepka',
    skinStatusOverDry: 'Przesuszona',
    humidityTagHigh: 'Wysoka wilgotnosc',
    humidityTagNormal: 'Normalna wilgotnosc',
    humidityTagLow: 'Niska wilgotnosc',
    humidityDescHigh: 'Bardzo wilgotny dzien. Suszenie potrwa znacznie dluzej. Jesli to mozliwe, uzyj osuszacza powietrza lub klimatyzowanego pomieszczenia.',
    humidityDescNormal: 'Umiarkowana wilgotnosc. Suszenie powinno przebiegac normalnie, z dobrym formowaniem sie blonki.',
    humidityDescLow: 'Bardzo suche powietrze. Muszelki moga schnac zbyt szybko i istnieje ryzyko przesuszenia. Obserwuj uwaznie i skroc czas suszenia.',
    tempTagHot: 'Cieply pokoj',
    tempTagIdeal: 'Idealna temp. pokojowa',
    tempTagCool: 'Chlodny pokoj',
    sizeTagMini: 'Mini',
    sizeTagStandard: 'Standardowy',
    sizeTagLarge: 'Duzy',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Nauka Suszenia Muszelek Makaronikow: Dlaczego Blonka Decyduje o Sukcesie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Makaronik to jedno z najbardziej wymagajacych technicznie ciast w cukiernictwie francuskim. Jego charakterystyczna gladka kopulka i falbankowata podstawa, zwana "rantem" lub "pied", zaleza calkowicie od kluczowego etapu: suszenia wykreconych muszelek przed pieczeniem. Ten okres odpoczynku pozwala na wytworzenie sie cienkiego bialkowego filmu na powierzchni kazdej muszelki. Podczas pieczenia blonka ta zatrzymuje rozprezajaca sie pare wewnatrz muszelki, zmuszajac ja do ujscia dolem przez podstawe, co unosi muszelke i tworzy upragniony rant. Bez odpowiedniego suszenia para rozrywa wierzch, powodujac pekniecia. Przy nadmiernym suszeniu blonka staje sie zbyt sztywna i muszelki nie moga prawidlowo urosnac.',
    },
    {
      type: 'title',
      text: 'Wilgotnosc i Jej Dominujaca Rola w Kinetyce Suszenia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wilgotnosc wzgledna jest najbardziej wplywowa zmienna w suszeniu muszelek makaronikow. Przy 50% wilgotnosci wzglednej standardowa muszelka 3 cm potrzebuje zazwyczaj 30-40 minut na wytworzenie odpowiedniej blonki. Przy 70% wilgotnosci czas ten moze sie wydluzyc do 60-90 minut. Przy 30% wilgotnosci suszenie moze zakonczyc sie juz po 15-20 minutach. Fizyka stojaca za tym jest prosta: szybkosc parowania jest proporcjonalna do deficytu cisnienia pary miedzy powierzchnia muszelki a otaczajacym powietrzem. Wilgotne powietrze ma mniejszy deficyt, co spowalnia parowanie. Profesjonalne cukiernie skrupulatnie kontroluja wilgotnosc, czesto utrzymujac dedykowane pomieszczenia dla makaronikow przy wilgotnosci wzglednej 40-50%.',
    },
    {
      type: 'title',
      text: 'Tabela Referencyjna Czasow Suszenia wg Wilgotnosci i Wielkosci Muszelki',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Wilgotnosc', '2 cm Mini', '3 cm Standard', '4 cm Duza', '5 cm Bardzo Duza'],
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
      text: 'Rola Temperatury w Szybkosci Parowania',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Temperatura wplywa na suszenie poprzez dwa mechanizmy. Po pierwsze, cieplejsze powietrze moze pomiescic wiecej pary wodnej, zwiekszajac potencjalna szybkosc parowania z powierzchni muszelki. Po drugie, molekularna energia kinetyczna rosnie wraz z temperatura, przyspieszajac tempo, w jakim czasteczki wody opuszczaja faze ciekla. Jednak temperatura wplywa rowniez na stabilnosc bezy. Powyzej 28 Â°C bialka jaj w bezie moga zaczac sie destabilizowac, prowadzac do oslabionej struktury. Idealny zakres dla suszenia makaronikow to 20-25 Â°C. Ponizej 18 Â°C szybkosc parowania spowalnia do tego stopnia, ze suszenie staje sie niepraktyczne dla muszelek o standardowym rozmiarze.',
    },
    {
      type: 'title',
      text: 'Wielkosc Muszelki i Prawo Kwadrat-Szescian w Suszeniu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Srednica muszelki ma nieliniowy wplyw na czas suszenia ze wzgledu na stosunek powierzchni do objetosci. Mini makaronik 2 cm ma okolo 3,1 cmÂ² powierzchni na 0,5 cmÂ³ objetosci, co daje korzystny stosunek powierzchni do objetosci okolo 6:1. Duzy makaronik 5 cm ma okolo 19,6 cmÂ² powierzchni na 8,2 cmÂ³ objetosci  -  stosunek zaledwie 2,4:1. Oznacza to, ze wieksze muszelki maja proporcjonalnie mniejsza powierzchnie, przez ktora wilgoc moze uciekac, co dramatycznie wydluza czas suszenia. Kalkulator modeluje to za pomoca zaleznosci potegowej skalibrowanej na podstawie danych empirycznych z profesjonalnych cukierni.',
    },
    {
      type: 'title',
      text: 'Rozwiazywanie Typowych Problemow z Suszeniem Makaronikow',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pekniete muszelki bez rantu',
      html: 'Najczestsza porazka przy makaronikach. Prawie zawsze oznacza to, ze muszelki nie byly suszone wystarczajaco dlugo przed pieczeniem. Blonka powierzchniowa byla zbyt slaba, aby utrzymac rozprezajaca sie pare, ktora wyrwala sie przez wierzch. <strong>Rozwiazanie: wydluz czas suszenia o 10-15 minut i sprawdz powierzchnie lekkim dotykiem opuszkiem palca przed pieczeniem.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Krzywy lub pochylony rant',
      html: 'Winowajca jest nierowne suszenie. Jesli jedna strona blachy schnie szybciej niz druga, rant wyrosnie nierowno. Zdarza sie to czesto, gdy blachy stoja przy oknie, wentylatorze lub zrodle ciepla. <strong>Rozwiazanie: obracaj blachy w trakcie suszenia i zapewnij rownomierny przeplyw powietrza wokol wszystkich muszelek.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Puste muszelki po upieczeniu',
      html: 'Puste wnetrze moze byc skutkiem nadmiernego suszenia, ktore tworzy zbyt gruba i sztywna blonke. Muszelka nie moze prawidlowo wyrosnac podczas pieczenia, pozostawiajac w srodku pusta przestrzen. <strong>Rozwiazanie: skroc czas suszenia i wczesniej sprawdzaj, czy blonka sie formuje. Powierzchnia powinna byc sucha, ale powinna lekko uginac sie przy delikatnym nacisku.</strong>',
    },
    {
      type: 'title',
      text: 'Profesjonalne Porady od Cukiernikow',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Technika Suszenia w Piekarniku na Wilgotne Dni',
      html: 'W wyjatkowo wilgotne dni profesjonalni cukiernicy stosuja technike zwana "suszeniem w piekarniku". Rozgrzej piekarnik do najnizszej mozliwej temperatury (zazwyczaj 50 Â°C), wylacz go, a nastepnie wstaw wykrecone makaroniki do srodka z lekko uchylonymi drzwiczkami na 5-10 minut. Tworzy to cieply, suchy mikroklimat, ktory przyspiesza formowanie blonki, nie rozpoczynajac jeszcze pieczenia muszelek.',
    },
    {
      type: 'tip',
      title: 'Test Dotyku dla Perfekcyjnej Blonki',
      html: 'Ostateczny test gotowosci makaronikow: delikatnie dotknij powierzchni muszelki czystym, suchym opuszkiem palca. Jesli masa klei sie do palca, potrzebuje wiecej czasu. Jesli powierzchnia jest sucha i matowa i nie klei sie, blonka jest uformowana. Jesli powierzchnia jest twarda, skorupiasta i nie ugina sie, muszelki sa przesuszone.',
    },
    {
      type: 'tip',
      title: 'Kontrola Wilgotnosci bez Sprzetu',
      html: 'Jesli nie masz osuszacza, postaw miseczke z suchym ryzem lub saszetki zelowe z krzemionka obok schnacych makaronikow. Te srodki suszace pochlaniana wilgoc z otoczenia, tworzac bardziej suchy mikroklimat wokol blachy. W profesjonalnych kuchniach bez klimatyzacji ta prosta sztuczka moze skrocic czas suszenia o 30-40% w wilgotne dni.',
    },
    {
      type: 'title',
      text: 'Czynnik Starzenia Bialek Jaj',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Starzone bialka daja bardziej stabilne bezy, ktore schna w bardziej przewidywalny sposob. Swieze bialka zawieraja wiecej wody i mniej elastyczna strukture bialkowa, co prowadzi do slabszych bez, ktore potrzebuja wiecej czasu na wytworzenie wlasciwej blonki. Profesjonalne przepisy wymagaja bialek starzonych przez 24-72 godziny w temperaturze pokojowej lub 3-5 dni w lodowce. Starzone bialka traca okolo 10-15% swojej zawartosci wody przez parowanie, co zageszcza bialka i poprawia wytrzymalosc bezy.',
    },
    {
      type: 'title',
      text: 'Szybkie Zestawienie: Czasy Suszenia dla Typowych Warunkow',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Typowe czasy suszenia dla standardowych muszelek makaronikow 3 cm',
      items: [
        'Klimatyzowana kuchnia (22 Â°C, 45% wilgotnosci): 25-30 minut',
        'Wiosenny dzien, otwarte okna (20 Â°C, 55% wilgotnosci): 35-45 minut',
        'Letni dzien, bez klimatyzacji (28 Â°C, 70% wilgotnosci): 60-90 minut  -  zastosuj technike suszenia w piekarniku',
        'Ogrzewany dom zima (21 Â°C, 30% wilgotnosci): 15-20 minut  -  uwazaj na przesuszenie',
        'Deszczowy dzien (18 Â°C, 80% wilgotnosci): 75-100 minut  -  powaznie rozwaz uzycie osuszacza',
        'Profesjonalna cukiernia (22 Â°C, 45% wilgotnosci, konwekcja): 20-25 minut',
      ],
    },
    {
      type: 'paragraph',
      html: 'Kazda kuchnia jest wyjatkowym srodowiskiem. Ten kalkulator uwzglednia trzy kluczowe zmienne  -  wilgotnosc, temperature i rozmiar muszelki  -  aby podac Ci spersonalizowane przewidywanie czasu suszenia. Wprowadz swoje warunki i wykrej z pewnoscia siebie.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
