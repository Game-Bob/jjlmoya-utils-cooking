import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kalkulator Dogotowania: Przewidywanie Bezwładności Cieplnej';
const description = 'Sprawdź, o ile stopni Twoja pieczeń będzie jeszcze rosła po wyjęciu z piekarnika. Wyznacz dokładną temperaturę wyciągnięcia, by uzyskać idealny medium rare.';

const faq = [
  {
    question: 'Czym jest dogotowanie i dlaczego występuje?',
    answer: 'Dogotowanie, nazywane też bezwładnością cieplną, to dalszy wzrost temperatury wewnętrznej po wyjęciu potrawy z piekarnika. Ciepło zgromadzone w zewnętrznych warstwach nadal przewodzi w kierunku środka. Pieczeń wyciągnięta przy 50°C może osiągnąć 54°C podczas odpoczynku - różnica między rare a medium-rare.',
  },
  {
    question: 'Jak temperatura piekarnika wpływa na dogotowanie?',
    answer: 'Wyższe temperatury piekarnika (200-250°C) tworzą większy gradient temperatury między powierzchnią a rdzeniem, magazynując więcej ciepła utajonego w skórce. Zwiększa to efekt dogotowania. Pieczeń pieczona w 120°C będzie miała minimalne dogotowanie (~1°C), podczas gdy ta w 220°C może zyskać 5-8°C podczas odpoczynku.',
  },
  {
    question: 'Czy kształt mięsa zmienia obliczenia dogotowania?',
    answer: 'Tak. Geometria znacząco wpływa na przenikanie ciepła. Całe ptaki i grube pieczenie mają większą masę cieplną względem powierzchni, więc zatrzymują więcej ciepła i dogotowują się bardziej. Płaskie kawałki, jak steki, mają wysoki stosunek powierzchni do objętości i szybko stygną, z minimalnym dogotowaniem.',
  },
  {
    question: 'Jak długo powinienem odpoczywać mięso po wyciągnięciu?',
    answer: 'Czas odpoczynku zależy od wagi i geometrii. Ogólna zasada to około 1 minuta na każde 100g mięsa, minimum 10 minut, maksimum 45 minut. Pieczeń o wadze 2 kg potrzebuje około 16 minut odpoczynku. W tym czasie temperatura wewnętrzna wyrównuje się, a efekt dogotowania się kończy.',
  },
];

const howTo = [
  {
    name: 'Wybierz geometrię mięsa',
    text: 'Wybierz Whole Bird dla drobiu, Cylindrical Roast dla polędwiczek i kawałków bez kości, lub Flat Cut dla steków i filetów.',
  },
  {
    name: 'Podaj wagę',
    text: 'Wprowadź całkowitą wagę kawałka w gramach. Minimalne wagi różnią się w zależności od geometrii.',
  },
  {
    name: 'Ustaw temperaturę piekarnika',
    text: 'Podaj rzeczywistą temperaturę piekarnika. Wyższe temperatury zwiększają efekt dogotowania.',
  },
  {
    name: 'Ustaw docelową temperaturę',
    text: 'Wprowadź pożądaną końcową temperaturę wewnętrzną (np. 54°C dla wołowiny medium-rare, 74°C dla drobiu).',
  },
  {
    name: 'Odczytaj temperaturę wyciągnięcia',
    text: 'Kalkulator podaje dokładny moment wyciągnięcia mięsa, by osiągnąć cel po odpoczynku.',
  },
  {
    name: 'Odstaw mięso do odpoczynku',
    text: 'Pozostaw mięso na zalecany czas. Nie przykrywaj zbyt szczelnie folią, bo skórka zmięknie.',
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
  slug: 'predyktor-gotowania',
  title: 'Kalkulator Dogotowania',
  description: 'Sprawdź, o ile stopni Twoja pieczeń będzie jeszcze rosła po wyjęciu z piekarnika. Wyznacz dokładną temperaturę wyciągnięcia, by uzyskać idealny medium rare.',
  faqTitle: 'Najczęściej Zadawane Pytania',
  ui: {
    title: 'Kalkulator Dogotowania',
    subtitle: 'Kalkulator bezwładności cieplnej do precyzyjnego pieczenia',
    geometryLabel: 'Geometria Mięsa',
    wholeBird: 'Cały Ptak (Drób)',
    cylindricalRoast: 'Pieczeń Cylindryczna (Polędwica, Bez Kości)',
    flatCut: 'Płaski Kawałek (Stek, Filet)',
    weightLabel: 'Waga',
    ovenTempLabel: 'Temperatura Piekarnika',
    targetTempLabel: 'Docelowa Temperatura Wewnętrzna',
    pullTemp: 'Temperatura Wyciągnięcia',
    carryOver: 'Dogotowanie',
    restTime: 'Czas Odpoczynku',
    minutes: 'min',
    degreesC: '°C',
    degreesF: '°F',
    unitLabel: 'Jednostki',
    metricUnit: 'Metryczne',
    imperialUnit: 'Imperialne',
    geometryDescCylindrical: 'Wybrano geometrię cylindryczną - umiarkowana bezwładność cieplna z przewidywalnym dogotowaniem.',
    weightG: 'g',
    weightOz: 'oz',
    errorTargetExceedsOven: 'Docelowa temperatura nie może przekraczać temperatury piekarnika.',
    errorOvenTooHot: 'Temperatura piekarnika przekracza 350°C. Obniż temperaturę.',
    errorWeightTooLow: 'Waga jest poniżej minimum dla tej geometrii.',
    errorWeightTooHigh: 'Waga przekracza maksimum dla tej geometrii.',
    pullNow: 'Wyciągnij mięso teraz',
    pullAt: 'Wyciągnij przy',
    toReach: 'aby osiągnąć',
    afterRest: 'po odpoczynku',
    carryOverWillAdd: 'Dogotowanie doda około',
    footerTemplate: '{carry} dogotowanie · {rest} odpoczynek · {weight}{wunit}, {oven} piekarnik → {target} cel',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Dogotowania: Wyznacz Idealną Temperaturę Wyciągnięcia za Każdym Razem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dogotowanie to dalszy wzrost temperatury wewnętrznej po wyjęciu potrawy z piekarnika. Zewnętrzne warstwy magazynują ciepło podczas pieczenia, a energia ta nadal przewodzi w kierunku chłodniejszego środka podczas odpoczynku. Gruba pieczeń wyciągnięta przy 50°C może osiągnąć 54°C po odpoczynku - różnica między rare a medium-rare. Ten kalkulator przewiduje dokładnie, o ile stopni wzrośnie temperatura, abyś mógł wyciągnąć mięso w idealnym momencie.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5-8°C', label: 'Typowe dogotowanie (gorący piekarnik)', icon: 'mdi:thermometer' },
        { value: '1-3°C', label: 'Minimalne dogotowanie (niska temperatura)', icon: 'mdi:thermometer-low' },
        { value: '16 min', label: 'Czas odpoczynku dla 2 kg pieczeni', icon: 'mdi:clock-outline' },
        { value: '45 min', label: 'Maksymalny zalecany odpoczynek', icon: 'mdi:clock-alert' },
      ],
    },
    {
      type: 'title',
      text: 'Tabela Temperatur Wyciągnięcia według Stopnia Wysmażenia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Skorzystaj z tej tabeli, aby znaleźć docelową temperaturę wewnętrzną, a następnie pozwól kalkulatorowi wyznaczyć dokładną temperaturę wyciągnięcia. Pamiętaj: temperatura wyciągnięcia jest zawsze <strong>niższa</strong> niż docelowa, ponieważ efekt dogotowania będzie kontynuował pieczenie podczas odpoczynku.',
    },
    {
      type: 'table',
      headers: ['Stopień Wysmażenia', 'Temp. Docelowa', 'Temp. Wyciągnięcia (200°C)', 'Czas Odpoczynku'],
      rows: [
        ['Wołowina Rare', '52°C / 126°F', '46-48°C / 115-118°F', '10-15 min'],
        ['Wołowina Medium-Rare', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 min'],
        ['Wołowina Medium', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 min'],
        ['Wołowina Well Done', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 min'],
        ['Wieprzowina Medium', '63°C / 145°F', '57-59°C / 135-138°F', '10-15 min'],
        ['Wieprzowina Well Done', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 min'],
        ['Pierś Kurczaka/Indyka', '74°C / 165°F', '68-70°C / 154-158°F', '15-20 min'],
        ['Udo Kurczaka/Indyka', '82°C / 180°F', '76-78°C / 169-172°F', '15-20 min'],
        ['Jagnięcina Medium-Rare', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 min'],
        ['Jagnięcina Medium', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 min'],
      ],
    },
    {
      type: 'title',
      text: 'Jak Geometria Zmienia Rachunek Cieplny',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Cały Ptak',
          icon: 'mdi:food-drumstick',
          description: 'Maksymalna masa cieplna względem powierzchni. Grube rdzenie piersi i ud magazynują ogromne ilości ciepła utajonego.',
          highlight: false,
          points: ['Dogotowanie: 5-10°C z piekarnika 200°C', 'Odpoczynek: 20-45 minut', 'Najlepsze dla: indyk, cały kurczak, kaczka', 'Wyciągnij 8-10°C poniżej celu'],
        },
        {
          title: 'Pieczeń Cylindryczna',
          icon: 'mdi:food-steak',
          description: 'Najpopularniejszy kształt pieczeni. Umiarkowane zatrzymywanie ciepła z przewidywalnym dogotowaniem.',
          highlight: true,
          points: ['Dogotowanie: 3-7°C z piekarnika 200°C', 'Odpoczynek: 15-30 minut', 'Najlepsze dla: polędwica, schab, combar jagnięcy', 'Wyciągnij 5-7°C poniżej celu'],
        },
        {
          title: 'Płaski Kawałek',
          icon: 'mdi:food',
          description: 'Wysoki stosunek powierzchni do objętości oznacza szybką utratę ciepła. Dogotowanie minimalne, ale wciąż istotne.',
          highlight: false,
          points: ['Dogotowanie: 1-3°C z piekarnika 200°C', 'Odpoczynek: 5-15 minut', 'Najlepsze dla: steki, pierś kurczaka, filet rybny', 'Wyciągnij 1-3°C poniżej celu'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Najczęstsze Błędy w Dogotowaniu i Jak Ich Uniknąć',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Zbyt późne wyciągnięcie',
      html: 'Jeśli czekasz, aż termometr wskaże docelową temperaturę przed wyciągnięciem, dogotowanie spowoduje przekroczenie o 3-8°C. Pieczeń medium-rare stanie się medium lub medium-well. <strong>Zawsze wyciągaj 5-8°C poniżej celu.</strong> Użyj tego kalkulatora, by poznać dokładną wartość.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Zbyt wczesne krojenie',
      html: 'Krojenie pieczeni natychmiast po wyciągnięciu uwalnia nawet do 30% soków. Gradient temperatury nie zdąży się wyrównać, przez co środek pozostaje niedopieczony, a zewnętrzne warstwy są przegotowane. <strong>Odstaw miasto na pełny zalecany czas.</strong> Przykryj luźno folią aluminiową - nie owijaj szczelnie, bo para zmiękczy skórkę.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Zbyt niska temperatura piekarnika',
      html: 'Niska temperatura piekarnika (poniżej 150°C / 300°F) tworzy minimalny gradient między powierzchnią a rdzeniem. Oznacza to praktycznie brak efektu dogotowania. Jeśli pieczesz w niskiej temperaturze, możesz wyciągnąć mięso w dokładnie docelowej temperaturze z minimalnym ryzykiem przekroczenia. Jednak rozwój skórki będzie znacznie ograniczony.',
    },
    {
      type: 'title',
      text: 'Porady Ekspertów do Idealnego Pieczenia',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Zasada 10 Stopni',
      html: 'Gorący piekarnik (220°C / 425°F) dodaje około 1°C dogotowania na każde 100g mięsa dla całych ptaków i 0,7°C na 100g dla pieczeni cylindrycznych. Użyj tego jako weryfikacji wyniku kalkulatora: 2 kg kurczak w 220°C powinien dogotować się o około 7-9°C.',
    },
    {
      type: 'tip',
      title: 'Pozycja odpoczynku ma znaczenie',
      html: 'Zawsze odstawiaj mięso na ciepły talerz lub deskę do krojenia, nie na zimną powierzchnię. Zimna powierzchnia odciągnie ciepło z dolnej części pieczeni, tworząc nierówne końcowe temperatury. W przypadku całych ptaków odstawiaj piersią do góry, aby soki równomiernie rozprowadziły się w białym mięsie.',
    },
    {
      type: 'tip',
      title: 'Przykrywaj, nie zawijaj',
      html: 'Przykryj pieczeń luźno folią aluminiową podczas odpoczynku. Szczelne zawinięcie zatrzymuje parę i sprawia, że skórka robi się miękka. Luźne przykrycie zmniejsza utratę ciepła o około 30%, pozwalając jednocześnie uciec parze, co zachowuje zarówno efekt dogotowania, jak i chrupiącą skórkę.',
    },
    {
      type: 'title',
      text: 'Słownik Kluczowych Terminów Pieczenia',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Dogotowanie (Carry-Over Cooking)', definition: 'Dalszy wzrost temperatury wewnętrznej po wyjęciu potrawy ze źródła ciepła, spowodowany przewodzeniem ciepła z zewnętrznych warstw w kierunku środka.' },
        { term: 'Temperatura Wyciągnięcia (Pull Temperature)', definition: 'Temperatura wewnętrzna, przy której należy wyjąć mięso z piekarnika. Zawsze niższa od docelowej, aby uwzględnić dogotowanie.' },
        { term: 'Temperatura Docelowa (Target Temperature)', definition: 'Końcowa temperatura wewnętrzna, jaką mięso ma osiągnąć po odpoczynku. Nazywana również temperaturą podania.' },
        { term: 'Bezwładność Cieplna (Thermal Inertia)', definition: 'Skłonność masy do opierania się zmianom temperatury. Cięższe, gęstsze kawałki mają wyższą bezwładność cieplną i dogotowują się bardziej.' },
        { term: 'Odpoczynek (Resting)', definition: 'Okres po pieczeniu, w którym mięso pozostaje nietknięte, umożliwiając wyrównanie temperatury i równomierne rozprowadzenie soków we włóknach.' },
        { term: 'Gradient Temperatury (Temperature Gradient)', definition: 'Różnica temperatury między powierzchnią mięsa a jego rdzeniem. Większy gradient magazynuje więcej ciepła utajonego do dogotowania.' },
        { term: 'Ciepło Utajone (Latent Heat)', definition: 'Energia cieplna zgromadzona w zewnętrznych warstwach mięsa podczas pieczenia. Energia ta jest uwalniana podczas wyrównywania temperatury w trakcie odpoczynku.' },
      ],
    },
    {
      type: 'title',
      text: 'Szybki Przewodnik: Zalecane Temperatury Wyciągnięcia',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Wyciągaj w tych temperaturach, aby uzyskać idealne efekty (piekarnik 200°C / 400°F)',
      items: [
        'Wołowina medium-rare: wyciągnij w 48-50°C / 118-122°F, cel 54°C / 129°F',
        'Wołowina medium: wyciągnij w 54-56°C / 129-133°F, cel 60°C / 140°F',
        'Schab wieprzowy: wyciągnij w 57-59°C / 135-138°F, cel 63°C / 145°F',
        'Pierś kurczaka: wyciągnij w 68-70°C / 154-158°F, cel 74°C / 165°F',
        'Cały indyk: wyciągnij w 68-70°C / 154-158°F, cel 74°C / 165°F (pierś)',
        'Combar jagnięcy: wyciągnij w 48-50°C / 118-122°F, cel 54°C / 129°F',
      ],
    },
    {
      type: 'paragraph',
      html: 'Każda pieczeń jest inna. Waga, dokładna temperatura piekarnika i kształt kawałka - wszystko to zmienia podane liczby. Właśnie to robi ten kalkulator - przyjmuje Twoje konkretne dane i oblicza precyzyjną temperaturę wyciągnięcia dla Twojej dokładnej sytuacji. Żadnych domysłów, żadnych zniszczonych pieczeni.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
