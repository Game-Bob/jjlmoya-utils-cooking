import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kalkulator Brix Sorbetu: Proporcje Cukru do Owoców i Kontrola Punktu Zamrażania dla Idealnej Kremowości';
const description = 'Ustal dokładną równowagę cukru, purée owocowego i wody dla kremowego sorbetu za każdym razem. Oblicz Brix, obniżenie punktu zamrażania PAC i rozwiąż problemy z lodowatą lub zbyt płynną konsystencją dzięki precyzyjnym pomiarom.';

const faq = [
  {
    question: 'Czym jest Brix i dlaczego ma znaczenie w sorbecie?',
    answer: 'Brix (°Bx) mierzy procent rozpuszczonych ciał stałych  -  głównie cukrów  -  w roztworze wodnym. W sorbetach poziom Brix między 25% a 30% (optymalnie 28%) jest niezbędny dla właściwej konsystencji. Poniżej 25% sorbet zamarza w twardy, lodowaty blok, ponieważ nie ma wystarczającej ilości cukru, aby zakłócić tworzenie się kryształków lodu. Powyżej 30% punkt zamrażania spada tak nisko, że sorbet pozostaje płynny i nigdy w pełni nie zestala się w standardowej zamrażarce.',
  },
  {
    question: 'Jak obliczyć odpowiednią ilość cukru do mojego przepisu na sorbet?',
    answer: 'Zacznij od zważenia purée owocowego i zmierzenia jego naturalnego Brix za pomocą refraktometru (lub wybrania wartości z listy). Wprowadź te dane do kalkulatora wraz z docelową wielkością porcji i docelowym Brix (domyślnie 28%). Kalkulator określa, ile sacharozy i wody należy dodać, aby doprowadzić całą mieszankę do optymalnego zakresu 25-30% Brix. Uwzględnia również obniżenie punktu zamrażania (PAC), dzięki czemu możesz zastąpić część sacharozy dekstrozą, jeśli sorbet byłby zbyt twardy.',
  },
  {
    question: 'Dlaczego mój domowy sorbet zawsze jest zbyt twardy lub lodowaty?',
    answer: 'Lodowaty, twardy sorbet prawie zawsze oznacza, że całkowite stężenie cukru jest zbyt niskie (poniżej 25% Brix). Woda w owocach zamarza w duże kryształki lodu, zamiast pozostać częściowo płynną. Rozwiązanie: dodaj więcej sacharozy, aby podnieść Brix, lub zastąp część sacharozy dekstrozą  -  dekstroza ma prawie dwukrotnie większą siłę przeciw zamarzaniu (PAC 190 vs 100) i jest o 30% mniej słodka, więc możesz obniżyć punkt zamrażania bez przesładzania sorbetu.',
  },
  {
    question: 'Jaka jest różnica między stosowaniem sacharozy a dekstrozy w sorbecie?',
    answer: 'Sacharoza (cukier stołowy) to standardowy słodzik o PAC 100 i POD 100. Dekstroza (glukoza w proszku) ma PAC 190  -  prawie dwukrotnie większe obniżenie punktu zamrażania  -  ale tylko 70% słodkości (POD 70). Oznacza to, że dekstroza znacznie skuteczniej zmiękcza sorbet w przeliczeniu na gram bez przesładzania. Używaj dekstrozy, gdy owoce są już naturalnie słodkie (np. mango, banan) i potrzebujesz większej siły przeciw zamarzaniu bez dodawania więcej słodkości.',
  },
  {
    question: 'Jak naturalny cukier owoców wpływa na obliczenia?',
    answer: 'Różne owoce mają znacznie zróżnicowany poziom naturalnych cukrów: cytryny i limonki mają około 2% Brix, truskawki około 8%, mango i winogrona 14-18%, a banany do 22%. Kalkulator uwzględnia naturalny Brix owoców, aby nie przekroczyć ani nie zaniżyć całkowitego stężenia cukru. Dlatego zaleca się używanie refraktometru do pomiaru rzeczywistych owoców  -  sezonowe wahania mogą zmienić Brix o 3-4 punkty.',
  },
];

const howTo = [
  {
    name: 'Zważ purée owocowe',
    text: 'Zmierz dokładną wagę purée owocowego lub soku w gramach.',
  },
  {
    name: 'Oszacuj lub zmierz Brix owoców',
    text: 'Użyj refraktometru, aby znaleźć dokładny Brix owoców, lub wybierz typową wartość z naszej bazy danych (np. Mango: 14%, Truskawka: 8%).',
  },
  {
    name: 'Wprowadź wagi do kalkulatora',
    text: 'Wprowadź wagę owoców, Brix owoców i docelowy poziom Brix (domyślnie 28%).',
  },
  {
    name: 'Sprawdź zalecane dodatki syropu',
    text: 'Kalkulator natychmiast pokaże zalecaną ilość cukru i wody do dodania, aby osiągnąć docelowe 28% Brix.',
  },
  {
    name: 'Dostosuj rodzaje cukru w razie potrzeby',
    text: 'Jeśli mieszanka ma niewystarczające obniżenie punktu zamrażania, wprowadź dekstrozę zamiast sacharozy.',
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
  slug: 'kalkulator-gestosci-brix-sorbet',
  title: 'Kalkulator Gęstości Brix Sorbetu',
  description: 'Ustal dokładną równowagę cukru, purée owocowego i wody dla kremowego sorbetu za każdym razem. Rozwiąż problemy z lodowatą lub zbyt płynną konsystencją dzięki precyzyjnym obliczeniom Brix i PAC.',
  faqTitle: 'Często Zadawane Pytania',
  ui: {
    fruitWeightLabel: 'Waga Purée Owocowego',
    fruitBrixLabel: 'Brix Owoców',
    sugarWeightLabel: 'Waga Sacharozy (Cukru)',
    dextroseWeightLabel: 'Waga Dekstrozy',
    waterWeightLabel: 'Waga Dodanej Wody',
    targetBrixLabel: 'Docelowy Brix',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    brixUnit: '% Bx',
    totalBrixLabel: 'Brix Całej Mieszanki',
    totalWeightLabel: 'Całkowita Waga Porcji',
    totalPACLabel: 'Obniżenie Punktu Zamrażania (PAC)',
    statusLabel: 'Profil Konsystencji Sorbetu',
    statusSoft: 'Zbyt Miękki / Płynny',
    statusOptimal: 'Optymalna Kremowość',
    statusHard: 'Zbyt Twardy / Lodowaty',
    recommendedTitle: 'Zalecenie Syropu (50% Owoców)',
    recommendedSugarLabel: 'Wymagana Sacharoza',
    recommendedWaterLabel: 'Wymagana Woda',
    fruitPresetLabel: 'Ustawienie Owoców',
    presetCustom: 'Własne Owoce',
    presetLemon: 'Cytryna / Limonka (2% Bx)',
    presetStrawberry: 'Truskawka / Malina (8% Bx)',
    presetOrange: 'Pomarańcza / Brzoskwinia (10% Bx)',
    presetMango: 'Mango / Winogrono / Wiśnia (14% Bx)',
    presetBanana: 'Banan (21% Bx)',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Nauka Równoważenia Sorbetu: Brix, PAC i Ciała Stałe',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Przygotowanie profesjonalnego sorbetu to ćwiczenie z nauki o żywności. W przeciwieństwie do lodów, które opierają się na tłuszczach mlecznych i białkach, aby stworzyć strukturę i miękkość, sorbet opiera się wyłącznie na rozpuszczonych cukrach i stabilizatorach. Stężenie tych rozpuszczonych cukrów mierzy się w stopniach Brix (°Bx). Idealna mieszanka sorbetowa wymaga stężenia cukru od 25% do 30% Brix. Jeśli zawartość cukru jest zbyt niska, woda zamarznie w duże, igiełkowate kryształki lodu, tworząc ziarnisty, twardy blok. Jeśli jest zbyt wysoka, punkt zamrażania jest zbyt mocno obniżony, a sorbet pozostaje półpłynnym syropem w typowych domowych lub komercyjnych zamrażarkach.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '28%',
          label: 'Idealny Docelowy Brix',
          icon: 'mdi:target',
        },
        {
          value: '25-30%',
          label: 'Bezpieczny Zakres Brix',
          icon: 'mdi:gauge',
        },
        {
          value: '≈50%',
          label: 'Optymalna Proporcja Owoców',
          icon: 'mdi:fruit-grapes',
        },
        {
          value: 'PAC 100/190',
          label: 'Sacharoza / Dekstroza',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: 'Zrozumienie PAC: Czynnik Obniżenia Punktu Zamrażania',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC (Potere Anticongelante, czyli Siła Przeciw Zamarzaniu) to wskaźnik używany przez cukierników do określenia, jak bardzo dany składnik obniża punkt zamrażania wody. Sacharoza, czyli standardowy cukier stołowy, jest punktem odniesienia o wartości PAC 100. Jednak sacharoza jest bardzo słodka. Jeśli potrzebujesz dodać więcej ciał stałych lub zwiększyć zdolność przeciw zamarzaniu bez przesładzania sorbetu, możesz zastąpić część sacharozy dekstrozą. Dekstroza ma PAC 190, co czyni ją prawie dwukrotnie skuteczniejszą od sacharozy w zapobieganiu tworzeniu się kryształków lodu, będąc jednocześnie tylko w 70% tak słodką.',
    },
    {
      type: 'title',
      text: 'Sacharoza vs Dekstroza: Wybór Odpowiedniego Cukru do Sorbetu',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sacharoza (Cukier Stołowy)',
          icon: 'mdi:cube-outline',
          description: 'Standardowy słodzik i punkt odniesienia dla wszystkich obliczeń PAC i POD. Zapewnia czystą słodycz i strukturę.',
          points: [
            'Wartość PAC: 100 (punkt odniesienia)',
            'Wartość POD: 100 (pełna słodycz)',
            'Najlepsza do: roli głównego słodzika',
            'Dodaje struktury i standardowej konsystencji',
          ],
        },
        {
          title: 'Dekstroza (Glukoza w Proszku)',
          icon: 'mdi:grain',
          description: 'Monosacharyd o prawie dwukrotnie większej sile obniżania punktu zamrażania i znacznie mniejszej słodkości.',
          highlight: true,
          points: [
            'Wartość PAC: 190 (prawie 2� -  sacharozy)',
            'Wartość POD: 70 (30% mniej słodka)',
            'Najlepsza do: zmiękczania twardych sorbetów',
            'Idealna, gdy owoce są już bardzo słodkie',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tabela Referencyjna Typowych Wartości Brix Owoców',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Rodzaj Owoców', 'Średnia Wartość Brix', 'Zawartość Wody', 'Poziom Kwasowości'],
      rows: [
        ['Cytryna / Limonka', '2% - 4% Bx', 'Bardzo Wysoka', 'Ekstremalnie Wysoki'],
        ['Truskawka / Malina', '7% - 9% Bx', 'Wysoka', 'Umiarkowany'],
        ['Pomarańcza / Brzoskwinia', '9% - 11% Bx', 'Średnio-Wysoka', 'Nisko-Umiarkowany'],
        ['Jabłko / Gruszka', '11% - 13% Bx', 'Średnia', 'Niski'],
        ['Mango / Winogrono / Wiśnia', '14% - 18% Bx', 'Średnio-Niska', 'Bardzo Niski'],
        ['Banan', '20% - 22% Bx', 'Niska', 'Pomijalny'],
      ],
    },
    {
      type: 'title',
      text: 'Jak Skalibrować Mieszankę Sorbetową',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aby zrównoważyć sorbet, najpierw zmierz wagę i stężenie cukru w purée owocowym. Użycie refraktometru jest wysoce zalecane dla dokładności, ponieważ słodkość owoców różni się w zależności od sezonu i dojrzałości. Jeśli nie masz refraktometru, możesz oszacować, korzystając z powyższej tabeli. Po uzyskaniu tych wartości wprowadź je do naszego kalkulatora, aby określić dokładną ilość syropu cukrowego (wody i cukru) potrzebną do doprowadzenia całej mieszanki do docelowego 28% Brix. Dla optymalnej konsystencji dąż do proporcji owoców około 50% całkowitej wagi porcji.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Dlaczego Mój Sorbet Jest Lodowaty lub Zbyt Twardy?',
      html: 'Sorbet, który zamarza na kamień, prawie zawsze ma <strong>za mało cukru</strong> (Brix poniżej 25%). Woda w purée owocowym krystalizuje w duże, postrzępione odłamki lodu. Rozwiąż to, dodając więcej sacharozy, aby podnieść całkowity Brix, lub zastąp część sacharozy dekstrozą, aby zwiększyć PAC bez przesładzania. Sprawdź również, czy proporcja owoców nie jest zbyt wysoka  -  przekroczenie 60% owoców pozostawia niewystarczającą ilość miejsca na cukry.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Dlaczego Mój Sorbet Jest Płynny lub Nie Zamarza?',
      html: 'Sorbet, który pozostaje miękki lub przypomina zupę, ma <strong>za dużo cukru</strong> (Brix powyżej 30%). Punkt zamrażania został obniżony tak bardzo, że zamrażarka nie może zestalić mieszanki. Zmniejsz całkowitą ilość cukru lub, jeśli owoce są naturalnie bardzo słodkie (np. banan lub mango), użyj proporcjonalnie mniej dodanej sacharozy. Sprawdź docelową temperaturę: domowe zamrażarki działają w temperaturze −18°C; PAC odpowiedni dla serwowania w −12°C będzie zbyt wysoki dla standardowych zamrażarek.',
    },
    {
      type: 'tip',
      title: 'Dokładny Pomiar Brix za Pomocą Refraktometru',
      html: 'Cyfrowy lub optyczny refraktometr to najlepsza inwestycja dla uzyskania spójnych sorbetów. Dojrzałość owoców różni się znacznie w zależności od sezonu, odmiany i pochodzenia  -  truskawka w czerwcu może mieć 6°Bx, podczas gdy ta sama odmiana w sierpniu osiąga 10°Bx. Wyciśnij kroplę purée na pryzmat, odczytaj wartość i wprowadź ją do kalkulatora. Zgadywanie na podstawie samych tabel przyniesie niespójne rezultaty.',
    },
    {
      type: 'title',
      text: 'Krok po Kroku: Jak Korzystać z Tego Kalkulatora',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Zważ purée owocowe</strong>  -  Użyj wagi cyfrowej, aby zmierzyć dokładną wagę przecedzonego purée owocowego lub soku w gramach.',
        '<strong>Zmierz lub oszacuj Brix owoców</strong>  -  Użyj refraktometru dla precyzji lub wybierz ustawienie z listy rozwijanej (Cytryna 2%, Truskawka 8%, Mango 14% itd.).',
        '<strong>Ustaw docelowy Brix</strong>  -  Domyślnie 28%, idealny punkt. Dostosuj między 25% a 30% w zależności od preferencji.',
        '<strong>Sprawdź zalecenie dotyczące syropu</strong>  -  Kalkulator natychmiast pokazuje, ile sacharozy i wody dodać, aby osiągnąć cel.',
        '<strong>Sprawdź wskaźnik konsystencji</strong>  -  Wskaźnik PAC informuje, czy sorbet będzie zbyt twardy, optymalnie kremowy, czy zbyt miękki w temperaturze zamrażarki.',
        '<strong>Dostosuj dekstrozą w razie potrzeby</strong>  -  Jeśli sorbet ma być twardy, ale jest już wystarczająco słodki, zastąp część sacharozy dekstrozą, aby zwiększyć PAC bez dodawania słodkości.',
      ],
    },
    {
      type: 'title',
      text: 'Kluczowe Terminy w Produkcji Sorbetów',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Brix (°Bx)',
          definition: 'Procent rozpuszczonych ciał stałych (głównie cukrów) w roztworze wodnym. W sorbetach zakres 25-30°Bx jest docelowy dla idealnej konsystencji i kremowości.',
        },
        {
          term: 'PAC (Potere Anticongelante)',
          definition: 'Siła przeciw zamarzaniu  -  miara tego, jak bardzo składnik obniża punkt zamrażania wody. Sacharoza ma bazowy PAC 100; dekstroza ma 190.',
        },
        {
          term: 'POD (Potere Dolcificante)',
          definition: 'Siła słodząca w stosunku do sacharozy (bazowo 100). Dekstroza ma POD 70, co oznacza, że jest o 30% mniej słodka gram za gram niż cukier stołowy.',
        },
        {
          term: 'Dekstroza',
          definition: 'Monosacharyd (glukoza w proszku) stosowany w formulacji sorbetu do obniżania punktu zamrażania bez dodawania nadmiernej słodkości. PAC 190, POD 70.',
        },
        {
          term: 'Refraktometr',
          definition: 'Optyczny lub cyfrowy przyrząd, który mierzy wartość Brix cieczy poprzez odczyt, jak światło załamuje się (refrakcja) w próbce. Niezbędny dla spójności sorbetów.',
        },
        {
          term: 'Syrop Cukrowy',
          definition: 'Mieszanka sacharozy i wody w proporcji wagowej 50/50, podgrzewana do rozpuszczenia. Standardowy nośnik do dodawania cukru do baz sorbetowych.',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
