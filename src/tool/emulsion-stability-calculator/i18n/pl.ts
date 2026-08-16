import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator Stabilności Emulsji i Limitu Oleju";
const description = "Dowiedz się dokładnie, ile oleju może utrzymać Twój majonez, aioli lub sos vinaigrette, zanim się zwarzy. Zapobiegaj zważeniu sosów dzięki naszemu darmowemu kalkulatorowi stabilności emulsji.";

const faq = [
  {
    question: "Ile oleju mogę dodać do majonezu, zanim się zwarzy?",
    answer: "To zależy od emulsyfikatora. Żółtko jaja utrzymuje do ~78% oleju (około 3,5 razy więcej niż objętość wody), musztarda do 70%, lecytyna sojowa do 82%, a polisorbat do 85%. Użyj kalkulatora powyżej, aby uzyskać dokładny limit dla swoich proporcji."
  },
  {
    question: "Dlaczego moja emulsja się zwarzyła lub rozdzieliła?",
    answer: "Emulsja warzy się, gdy ułamek objętościowy oleju przekracza maksymalny limit upakowania emulsyfikatora. W tym momencie krople oleju są tak ściśnięte, że łączą się i mieszanina się rozdziela. Dzieje się to natychmiastowo - nie jest to proces stopniowy."
  },
  {
    question: "Jak naprawić zwarzony majonez lub aioli?",
    answer: "Zacznij od świeżego żółtka lub łyżki ciepłej wody w czystej misce. Powoli wlewaj zwarzoną mieszankę, cały czas ubijając, dokładnie tak, jak przy dodawaniu surowego oleju. Kalkulator powyżej podaje dokładną ilość wody lub żółtek potrzebnych do naprawy."
  },
  {
    question: "Czy zbyt szybkie dodawanie oleju powoduje zważenie emulsji?",
    answer: "Zbyt szybkie dodawanie oleju może tymczasowo przeciążyć emulsyfikator, ale prawdziwą przyczyną zważenia jest zawsze niewłaściwy stosunek faz. Jeśli ułamek oleju pozostaje poniżej limitu emulsyfikatora, emulsja zachowuje stabilność bez względu na prędkość. Po przekroczeniu limitu zważenie jest nieuniknione."
  },
  {
    question: "Jaka jest różnica między żółtkiem jaja a musztardą jako emulsyfikatorami?",
    answer: "Żółtko jaja (maks. 78% oleju) zawiera lecytynę i lipoproteiny, które tworzą trwałą otoczkę wokół kropli. Musztarda (maks. 70% oleju) opiera się na śluzach i białkach - jest słabsza, ale dodaje smaku. Lecytyna sojowa (82%) i polisorbat (85%) to wysoce wydajne emulsyfikatory przemysłowe."
  }
];

const howTo = [
  {
    name: "Wybierz swój emulsyfikator",
    text: "Wybierz emulsyfikator użyty w przepisie - żółtko jaja do klasycznego majonezu, musztardę do vinaigrette lub lecytynę sojową/polisorbat do kuchni modernistycznej. Każdy z nich ustala inny maksymalny limit oleju."
  },
  {
    name: "Wprowadź objętość fazy wodnej",
    text: "Wpisz łączną ilość mililitrów składników wodnych: wody, octu, soku z cytryny, wina lub dowolnego płynu na bazie wody. Kalkulator automatycznie uwzględnia zawartość wody w wybranym emulsyfikatorze."
  },
  {
    name: "Ustaw objętość oleju",
    text: "Wpisz ilość oleju, którą planujesz użyć. Użyj suwaka lub wpisz wartość. Kalkulator natychmiast pokaże, czy ta ilość pozwoli uzyskać stabilną emulsję, czy doprowadzi do zważenia."
  },
  {
    name: "Odczytaj wynik stabilności i skoryguj w razie potrzeby",
    text: "Sprawdź wskaźnik ułamka objętościowego oleju. Jeśli jest stabilnie, możesz działać. Jeśli emulsja się zwarzyła, panel ratunkowy wskaże dokładną ilość wody (w ml) lub dodatkowych żółtek potrzebnych do przywrócenia równowagi."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'emulsion-stability-calculator',
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  ui: {
    title: 'Analizator Stabilności Emulsji',
    subtitle: 'Ile oleju może utrzymać Twój sos, zanim się zwarzy?',
    waterLabel: 'Faza Wodna (ml)',
    oilLabel: 'Objętość Oleju (ml)',
    emulsifierLabel: 'Typ Emulsyfikatora',
    yolkOption: 'Żółtko Jaja',
    mustardOption: 'Musztarda',
    soyLecithinOption: 'Lecytyna Sojowa',
    polysorbateOption: 'Polisorbat',
    stableStatus: 'Emulsja Stabilna',
    brokenStatus: 'Emulsja Zwarzona',
    ratioLabel: 'Ułamek Objętościowy Oleju',
    maxLimitLabel: 'Maksymalny Limit Oleju',
    fixTitle: 'Strategia Ratunkowa',
    waterFixText: 'Dodaj wodę, aby przywrócić równowagę faz:',
    yolkFixText: 'Alternatywnie użyj dodatkowego żółtka:',
    idealRangeText: 'Idealny zakres znajduje się poniżej krytycznego limitu upakowania 74% do 80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Ile Oleju Może Utrzymać Majonez lub Aioli, Zanim Się Zwarzy?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Każdy kucharz zadawał sobie to pytanie: <strong>dlaczego mój majonez się zwarzył?</strong> Odpowiedź jest prostsza, niż się wydaje. Emulsja - czy to klasyczne aioli, kremowy vinaigrette, czy modernistyczna pianka - może utrzymać tylko określoną ilość oleju, zanim ulegnie rozpaść. Nasz <strong>kalkulator stabilności emulsji</strong> wskazuje dokładnie, gdzie znajduje się ten punkt krytyczny na podstawie Twoich składników.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '78%', label: 'Żółtko Maks. Oleju', icon: 'mdi:egg-outline' },
        { value: '85%', label: 'Limit Polisorbatu', icon: 'mdi:flask-outline' },
        { value: '74%', label: 'Upakowanie Teoretyczne', icon: 'mdi:sphere' },
        { value: '15 ml', label: 'Woda w Żółtku', icon: 'mdi:water' }
      ]
    },
    {
      type: 'list',
      items: [
        '<strong>Dodajesz olej zbyt szybko</strong> - Szybkość rzadko jest prawdziwą przyczyną. Jeśli udział oleju pozostaje poniżej limitu emulsyfikatora, emulsja utrzyma się bez względu na tempo wlewania.',
        '<strong>Składniki są zbyt zimne</strong> - Zimne jaja lub zimny olej zwiększają lepkość i utrudniają tworzenie kropli. Zawsze doprowadzaj składniki do temperatury pokojowej.',
        '<strong>Przekroczono limit oleju dla danego emulsyfikatora</strong> - Każdy emulsyfikator ma maksymalny ułamek upakowania. Żółtko do 78%, musztarda 70%, lecytyna sojowa 82% i polisorbat 85%.',
        '<strong>Faza wodna jest zbyt mała</strong> - Bez wystarczającej ilości wody do otoczenia kropli oleju, nie mają one dokąd ujść i łączą się ze sobą.'
      ]
    },
    {
      type: 'title',
      text: 'Jakiego emulsyfikatora powinieneś użyć? Praktyczne porównanie',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Wybór odpowiedniego emulsyfikatora zależy od przepisu, profilu smakowego i pożądanej pojemności oleju. Oto jak wypada porównanie czterech najczęstszych emulsyfikatorów kulinarnych.'
    },
    {
      type: 'proscons',
      title: 'Żółtko Jaja',
      items: [
        { pro: 'Maksymalna kompatybilność smakowa dla klasycznych sosów', con: 'Dodaje żółtka i posmak jajeczny' },
        { pro: 'Zawiera lecytynę i lipoproteiny dla trwałych emulsji', con: 'Wymaga starannej kontroli temperatury' },
        { pro: 'Dodaje naturalny kolor i bogactwo smaku', con: 'Nieodpowiednie dla dań wegańskich' },
        { pro: 'Działa do 78% ułamka oleju', con: 'Ograniczone do około 15 ml wkładu wody na żółtko' }
      ]
    },
    {
      type: 'proscons',
      title: 'Musztarda',
      items: [
        { pro: 'Dodaje pikantnego smaku i złożoności dressingom', con: 'Niższa maksymalna pojemność oleju (70%)' },
        { pro: 'Powszechnie dostępna i łatwa w użyciu', con: 'Słabsza siła emulgowania niż żółtko jaja' },
        { pro: 'Dobrze działa w temperaturze pokojowej', con: 'Smak może dominować delikatne sosy' },
        { pro: 'Idealna do szybkich sosów vinaigrette', con: 'Nieodpowiednia do emulsji o neutralnym smaku' }
      ]
    },
    {
      type: 'proscons',
      title: 'Lecytyna Sojowa',
      items: [
        { pro: 'Wysoka tolerancja na olej (82%) dla stabilnych sosów', con: 'Wymaga precyzyjnego ważenia' },
        { pro: 'Neutralny smak nie zmienia przepisów', con: 'Mniej wybacza błędy niż żółtko jaja' },
        { pro: 'Pochodzenia roślinnego i przyjazna dla wegan', con: 'Rzadziej spotykana w domowej spiżarni' },
        { pro: 'Działa przy małych objętościach wody', con: 'Może tworzyć lekko sztuczną teksturę' }
      ]
    },
    {
      type: 'proscons',
      title: 'Polisorbat',
      items: [
        { pro: 'Najwyższa pojemność oleju spośród wszystkich emulsyfikatorów (85%)', con: 'Syntetyczny dodatek, nienaturalny' },
        { pro: 'Tworzy ultra-stabilne piany i struktury', con: 'Trudny do zdobycia w kuchni domowej' },
        { pro: 'Działa przy minimalnej fazie wodnej', con: 'Wymaga wagi do dokładnego dozowania' },
        { pro: 'Idealny do kuchni modernistycznej i eksperymentalnej', con: 'Dominujący przy nadmiernym użyciu' }
      ]
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Żółtko Jaja',
          icon: 'mdi:egg-outline',
          description: 'Klasyczny emulsyfikator majonezu. Zawiera lecytynę i lipoproteiny.',
          highlight: true,
          points: ['Maks. olej: 78%', '~15 ml wody na żółtko', 'Dodaje bogactwo i kolor', 'Najlepsze do majonezu i aioli']
        },
        {
          title: 'Musztarda',
          icon: 'mdi:shaker-outline',
          description: 'Opiera się na śluzach i białkach nasion. Dodaje pikantny smak.',
          points: ['Maks. olej: 70%', '~10 ml zawartości wody', 'Słabsza siła emulgowania', 'Idealna do vinaigrette']
        },
        {
          title: 'Lecytyna Sojowa',
          icon: 'mdi:leaf',
          description: 'Skoncentrowany surfaktant roślinny.',
          points: ['Maks. olej: 82%', '~5 ml zawartości wody', 'Neutralny profil smakowy', 'Podstawa kuchni modernistycznej']
        },
        {
          title: 'Polisorbat',
          icon: 'mdi:flask-outline',
          description: 'Syntetyczny emulsyfikator o maksymalnej zdolności surfaktantowej.',
          points: ['Maks. olej: 85%', '~2 ml zawartości wody', 'Najwyższa tolerancja na olej', 'Używany w pianach i strukturach']
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulsyfikator', 'Maks. Olej %', 'Olej na 100 ml Wody', 'Najlepsze Zastosowanie'],
      rows: [
        ['Żółtko Jaja', '78%', '~355 ml', 'Majonez, aioli, sos holenderski'],
        ['Musztarda', '70%', '~233 ml', 'Vinaigrette, lekkie dressingi'],
        ['Lecytyna Sojowa', '82%', '~456 ml', 'Sosy modernistyczne, piany'],
        ['Polisorbat', '85%', '~567 ml', 'Stabilne piany, dania eksperymentalne']
      ]
    },
    {
      type: 'title',
      text: 'Nauka: Dlaczego Emulsje Się Warzą i Hipoteza Keplera w Kuchni',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Emulsja kulinarna działa poprzez rozproszenie drobnych kropelek oleju w ciągłej fazie wodnej. <strong>Emulsyfikatory</strong> - takie jak lecytyna w żółtku, śluzy w musztardzie czy syntetyczne surfaktanty - otaczają każdą kropelkę i zapobiegają ich łączeniu.'
    },
    {
      type: 'paragraph',
      html: 'Punkt zważenia wynika z czystej geometrii. Krople oleju zachowują się jak małe upakowane kule. Maksymalna objętość kul w danej przestrzeni - znana jako <strong>hipoteza Keplera</strong> - wynosi około 74%. W rzeczywistych warunkach kuchennych można ją rozciągnąć do 80-85% przy silnych emulsyfikatorach, ale powyżej tej wartości kropelki ulegają tak silnemu ściskaniu, że łączą się i emulsja natychmiast ulega rozpaść.'
    },
    {
      type: 'card',
      columns: 2,
      items: [
        {
          icon: 'mdi:egg-outline',
          title: 'Klasyczny Majonez & Aioli',
          html: 'Używaj <strong>żółtka jaja</strong> do 78% oleju. Zacznij od jednego żółtka na szklankę oleju. Dodaj łyżeczkę wody lub soku z cytryny przed wlaniem oleju, aby uzyskać większy margines bezpieczeństwa.'
        },
        {
          icon: 'mdi:shaker-outline',
          title: 'Vinaigrette & Lekkie Dressingi',
          html: 'Używaj <strong>musztardy</strong> do 70% oleju. Śluzy zawarte w musztardzie zapewniają wystarczające emulgowanie dla tymczasowego dressingu.'
        },
        {
          icon: 'mdi:leaf',
          title: 'Sosy Modernistyczne & Stabilne Piany',
          html: 'Używaj <strong>lecytyny sojowej</strong> do 82% oleju. Idealna do emulsji o neutralnym smaku, gdzie ma dominować smak oleju i kwasu.'
        },
        {
          icon: 'mdi:flask-outline',
          title: 'Eksperymentalne Piany & Struktury',
          html: 'Używaj <strong>polisorbatu</strong> do 85% oleju. Niezastąpiony wybór w technikach modernistycznych wymagających maksymalnego obciążenia olejem.'
        }
      ]
    },
    {
      type: 'title',
      text: 'Jak Ratować Zwarzoną Emulsję Krok po Kroku',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Jeśli Twój majonez lub sos już się zwarzył, <strong>nie wyrzucaj go</strong>. Rozwiązanie jest proste - ale tylko pod warunkiem zrozumienia stosunku faz. Mocniejsze ubijanie nie pomoże; musisz dodać więcej fazy ciągłej (wody).'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '3 Częste Oznaki, że Emulsja Za Chwilę Się Zwarzy',
      html: 'Uważaj na <strong>zgęstnienie, po którym następuje nagłe rozrzedzenie</strong>. Następnie obserwuj, czy <strong>błyszcząca powierzchnia staje się ziarnista</strong> lub czy <strong>na brzegach pojawia się olej</strong>. Jeśli zauważysz którykolwiek z tych objawów, natychmiast przestań dodawać olej i wmieszaj łyżeczkę zimnej wody przed kontynuowaniem.'
    },
    {
      type: 'title',
      text: 'Praktyczne Wskazówki dla Idealnych Emulsji Za Każdym Razem',
      level: 3
    },
    {
      type: 'message',
      html: '<strong>Złota zasada:</strong> Stosunek oleju do wody jest ważniejszy niż technika, temperatura czy prędkość ubijania. Użyj naszego kalkulatora, aby znaleźć dokładny limit oleju przed rozpoczęciem ubijania.'
    },
    {
      type: 'tip',
      title: 'Temperatura Ma Znaczenie',
      html: 'Wszystkie składniki powinny mieć <strong>temperaturę pokojową</strong>. Zimne jaja lub zimny olej drastycznie zwiększają ryzyko zważenia. Wyjmij składniki z lodówki 30 minut przed rozpoczęciem.'
    },
    {
      type: 'tip',
      title: 'Wodna Siatka Bezpieczeństwa',
      html: 'Jeśli przepis nie zawiera wystarczającej ilości kwasu (octu, soku z cytryny), dodaj <strong>jedną łyżeczkę zimnej wody na żółtko</strong> przed rozpoczęciem dodawania oleju. Dodatkowa woda tworzy większy margines bezpieczeństwa.'
    },
    {
      type: 'tip',
      title: 'Naprawa Zwarzonej Porcji',
      html: 'Umieść świeże żółtko w czystej misce. Ubij je z łyżeczką wody. Następnie <strong>wlewaj zwarzoną mieszankę tak wolno, jak to możliwe</strong>, dokładnie tak, jakby to był surowy olej. Gdy ponownie ulegnie emulgowaniu, resztę możesz dodać szybciej.'
    },
    {
      type: 'title',
      text: 'Słowniczek Emulsji Kulinarnych',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Faza Ciągła',
          definition: 'Ciecz otaczająca kropelki - zazwyczaj woda, ocet lub sok z cytryny w emulsjach typu olej w wodzie, takich jak majonez.'
        },
        {
          term: 'Faza Rozproszona',
          definition: 'Ciecz rozbita na drobne krople - olej w większości emulsji kulinarnych. Im więcej go dodajesz, tym ściślej krople są upakowane.'
        },
        {
          term: 'Ułamek Objętościowy',
          definition: 'Stosunek objętości oleju do objętości całkowitej. Przy około 74-85% (w zależności od emulsyfikatora) emulsja osiąga punkt zważenia.'
        },
        {
          term: 'Koalescencja',
          definition: 'Proces, w którym dwie lub więcej kropli oleju łączy się w jedną większą. To mikroskopijny proces prowadzący do widocznego zważenia.'
        },
        {
          term: 'Inwersja Fazy',
          definition: 'Punkt, w którym emulsja typu olej w wodzie przekształca się w wodę w oleju - jak przy robieniu masła ze śmietanki.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Kluczowe Punkty dla Stabilnych Emulsji',
      items: [
        'Każdy emulsyfikator ma maksymalny udział oleju: żółtko 78%, musztarda 70%, lecytyna sojowa 82%, polisorbat 85%.',
        'Punkt zważenia zależy od geometrii (hipoteza Keplera 74%), a nie od prędkości ubijania.',
        'Zawsze zaczynaj od składników w temperaturze pokojowej i dodaj niewielką ilość wody jako bufor bezpieczeństwa.',
        'Zwarzoną emulsję można uratować, dodając świeży emulsyfikator i więcej wody, a nie poprzez mocniejsze ubijanie.',
        'Użyj naszego kalkulatora stabilności emulsji powyżej, aby uzyskać dokładny limit oleju dla swoich składników.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
