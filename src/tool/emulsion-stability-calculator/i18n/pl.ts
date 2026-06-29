import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator Stabilności Emulsji i Maksymalnej Ilości Oleju";
const description = "Sprawdź dokładnie, ile oleju wytrzyma twój majonez, aioli lub winegret, zanim się zwarzy. Unikaj rozwarstwiania się sosów dzięki naszemu darmowemu kalkulatorowi stabilności emulsji.";
const faq = [
  {
    question: "Ile oleju mogę dodać do majonezu, zanim się zwarzy?",
    answer: "To zależy od emulgatora. Żółtko jajka wytrzymuje do ~78% oleju (około 3,5 razy objętość wody), musztarda do 70%, lecytyna sojowa do 82%, a polisorbat do 85%. Użyj kalkulatora powyżej, aby uzyskać dokładne maksimum dla twoich konkretnych ilości."
  },
  {
    question: "Dlaczego moja emulsja się zwarzyła lub rozwarstwiła?",
    answer: "Emulsja warzy się, gdy ułamek objętości oleju przekroczy maksymalny limit upakowania emulgatora. W tym momencie kropelki oleju są tak mocno ściśnięte, że łączą się, a mieszanina się rozdziela. Dzieje się to natychmiastowo - to nie jest proces stopniowy."
  },
  {
    question: "Jak naprawić zwarzonego majonezu lub aioli?",
    answer: "Zacznij od świeżego żółtka jajka lub łyżki ciepłej wody w czystej misce. Powoli wlewaj zwarzoną mieszaninę, cały czas energicznie mieszając, tak jakbyś dodawał surowy olej. Kalkulator powyżej podaje dokładnie, ile wody lub żółtek potrzebujesz."
  },
  {
    question: "Czy dodawanie oleju zbyt szybko powoduje zwarzenie emulsji?",
    answer: "Dodawanie oleju zbyt szybko może tymczasowo przeciążyć emulgator, ale prawdziwą przyczyną zwarzenia jest zawsze nieprawidłowy stosunek faz. Jeśli ułamek oleju pozostaje poniżej limitu emulgatora, emulsja pozostaje stabilna niezależnie od szybkości. Jeśli przekroczy limit, zwarzenie jest nieuniknione."
  },
  {
    question: "Jaka jest różnica między żółtkiem jajka a musztardą jako emulgatorami?",
    answer: "Żółtko jajka (max 78% oleju) zawiera lecytynę i lipoproteiny, które tworzą solidną warstwę wokół kropelek. Musztarda (max 70% oleju) opiera się na śluzie i białkach - jest słabsza, ale dodaje smaku. Lecytyna sojowa (82%) i polisorbat (85%) to wysokowydajne emulgatory przemysłowe."
  }
];

const howTo = [
  {
    name: "Wybierz swój emulgator",
    text: "Wybierz emulgator w swoim przepisie - żółtko jajka do klasycznego majonezu, musztardę do winegretów lub lecytynę sojową/polisorbat do kuchni molekularnej. Każdy z nich ustala inną maksymalną granicę oleju."
  },
  {
    name: "Wprowadź objętość fazy wodnej",
    text: "Podaj całkowitą liczbę mililitrów składników wodnych: wody, octu, soku z cytryny, wina lub dowolnego płynu na bazie wody. Kalkulator automatycznie dodaje zawartość wody twojego wybranego emulgatora."
  },
  {
    name: "Ustaw objętość oleju",
    text: "Wprowadź ilość oleju, którą planujesz użyć. Użyj suwaka lub wpisz wartość. Kalkulator natychmiast pokazuje, czy ta ilość da stabilną emulsję, czy spowoduje zwarzenie."
  },
  {
    name: "Sprawdź wynik stabilności i w razie potrzeby napraw",
    text: "Sprawdź wskaźnik ułamka objętości oleju. Jeśli jest stabilny, możesz działać. Jeśli zwarzone, panel ratunkowy podaje dokładnie, ile wody (w ml) lub dodatkowych żółtek jajek musisz dodać, aby przywrócić równowagę."
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
  slug: 'kalkulator-stabilnosci-emulsji',
  title: 'Kalkulator Stabilności Emulsji i Maksymalnej Ilości Oleju',
  description: 'Sprawdź dokładnie, ile oleju wytrzyma twój majonez, aioli lub winegret, zanim się zwarzy. Unikaj rozwarstwiania się sosów dzięki naszemu darmowemu kalkulatorowi stabilności emulsji.',
  faqTitle: 'Najczęściej Zadawane Pytania',
  ui: {
    title: 'Analizator Stabilności Emulsji',
    subtitle: 'Ile oleju wytrzyma twój sos, zanim się zwarzy?',
    waterLabel: 'Faza Wodna (ml)',
    oilLabel: 'Objętość Oleju (ml)',
    emulsifierLabel: 'Rodzaj Emulgatora',
    yolkOption: 'Żółtko Jajka',
    mustardOption: 'Musztarda',
    soyLecithinOption: 'Lecytyna Sojowa',
    polysorbateOption: 'Polisorbat',
    stableStatus: 'Emulsja Stabilna',
    brokenStatus: 'Emulsja Zwarzona',
    ratioLabel: 'Ułamek Objętości Oleju',
    maxLimitLabel: 'Maksymalny Limit Oleju',
    fixTitle: 'Strategia Ratunkowa',
    waterFixText: 'Dodaj wodę, aby przywrócić równowagę faz:',
    yolkFixText: 'Alternatywnie, użyj dodatkowego żółtka jajka:',
    idealRangeText: 'Idealny zakres znajduje się poniżej krytycznego limitu upakowania wynoszącego 74% do 80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Ile Oleju Wytrzyma Majonez lub Aioli, Zanim Się Zwarzy?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Każdy kucharz zadał sobie to pytanie: <strong>dlaczego mój majonez się zwarzył?</strong> Odpowiedź jest prostsza, niż się wydaje. Emulsja - czy to klasyczne aioli, kremowy winegret czy molekularna piana - może pomieścić tylko ograniczoną ilość oleju, zanim się załamie. Nasz <strong>kalkulator stabilności emulsji</strong> podaje dokładnie, gdzie znajduje się ten punkt krytyczny, w oparciu o twoje konkretne składniki i proporcje.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: 'Max Oleju Żółtko Jajka',
          icon: 'mdi:egg-outline'
        },
        {
          value: '85%',
          label: 'Limit Polisorbatu',
          icon: 'mdi:flask-outline'
        },
        {
          value: '74%',
          label: 'Upakowanie Teoretyczne',
          icon: 'mdi:sphere'
        },
        {
          value: '15 ml',
          label: 'Zawartość Wody w Żółtku',
          icon: 'mdi:water'
        }
      ]
    },
    {
      type: 'title',
      text: 'Nauka: Dlaczego Emulsje Sie Warzą',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Emulsja kulinarna działa poprzez rozproszenie maleńkich kropelek oleju w ciągłej fazie wodnej. <strong>Emulgatory</strong> - takie jak lecytyna w żółtku jajka, śluz w musztardzie czy syntetyczne surfaktanty jak polisorbat - pokrywają każdą kropelkę i zapobiegają jej łączeniu się z sąsiednimi.'
    },
    {
      type: 'paragraph',
      html: 'Punkt krytyczny jest określony przez czystą geometrię. Kropelki oleju zachowują się jak małe, ciasno upakowane kule. Maksymalna objętość kul, jaką można zmieścić w danej przestrzeni - znana jako <strong>hipoteza Keplera</strong> - wynosi około 74%. W rzeczywistych systemach kuchennych może to sięgać 80-85% przy silnych emulgatorach, ale powyżej tego progu kropelki są tak mocno ściśnięte, że łączą się, a emulsja natychmiast się załamuje.'
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Żółtko Jajka',
          icon: 'mdi:egg-outline',
          description: 'Klasyczny emulgator do majonezu. Zawiera lecytynę i lipoproteiny.',
          highlight: true,
          points: [
            'Max oleju: 78%',
            '~15 ml wody na żółtko',
            'Dodaje bogactwa i koloru',
            'Najlepsze do majonezu i aioli'
          ]
        },
        {
          title: 'Musztarda',
          icon: 'mdi:shaker-outline',
          description: 'Opiera się na śluzie i białkach nasion. Dodaje ostry smak.',
          points: [
            'Max oleju: 70%',
            '~10 ml zawartości wody',
            'Słabsza moc emulgująca',
            'Idealna do winegretów'
          ]
        },
        {
          title: 'Lecytyna Sojowa',
          icon: 'mdi:leaf',
          description: 'Wysoko skoncentrowany surfaktant roślinny.',
          points: [
            'Max oleju: 82%',
            '~5 ml zawartości wody',
            'Neutralny profil smakowy',
            'Podstawa kuchni molekularnej'
          ]
        },
        {
          title: 'Polisorbat',
          icon: 'mdi:flask-outline',
          description: 'Syntetyczny emulgator o maksymalnej zdolności surfaktantu.',
          points: [
            'Max oleju: 85%',
            '~2 ml zawartości wody',
            'Najwyższa tolerancja na olej',
            'Stosowany w pianach'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulgator', 'Max % Oleju', 'Olej na 100 ml Wody', 'Najlepsze Zastosowanie'],
      rows: [
        ['Żółtko Jajka', '78%', '~355 ml', 'Majonez, aioli, holenderski'],
        ['Musztarda', '70%', '~233 ml', 'Winegrety, lekkie dressingi'],
        ['Lecytyna Sojowa', '82%', '~456 ml', 'Sosy molekularne, piany'],
        ['Polisorbat', '85%', '~567 ml', 'Stabilne piany, kuchnia eksperymentalna']
      ]
    },
    {
      type: 'title',
      text: 'Jak Krok po Kroku Uratować Zwarzone Emulsje',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Jeśli twój majonez lub sos już się zwarzył, <strong>nie wyrzucaj go</strong>. Naprawa jest prosta - ale tylko jeśli rozumiesz stosunek faz. Mocniejsze mieszanie nie pomoże; musisz dodać więcej fazy ciągłej (wodnej).'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Typowe Oznaki, że Twoja Emulsja Zaraz Sie Zwarzy',
      html: 'Zwróć uwagę na <strong>zagęszczenie, po którym następuje nagłe rozrzedzenie</strong>, <strong>błyszczącą powierzchnię stającą się ziarnistą</strong> lub widoczne kropelki oleju na brzegach. Jeśli zauważysz którykolwiek z tych objawów, natychmiast przestań dodawać olej i wmieszaj łyżeczkę zimnej wody przed kontynuowaniem.'
    },
    {
      type: 'title',
      text: 'Praktyczne Wskazówki do Idealnych Emulsji Za Każdym Razem',
      level: 3
    },
    {
      type: 'tip',
      title: 'Temperatura Ma Znaczenie',
      html: 'Wszystkie składniki powinny mieć <strong>temperaturę pokojową</strong>. Zimne jajka lub zimny olej drastycznie zwiększają ryzyko zwarzenia. Wyjmij składniki z lodówki na 30 minut przed rozpoczęciem.'
    },
    {
      type: 'tip',
      title: 'Wodna Siatka Bezpieczeństwa',
      html: 'Jeśli twój przepis nie zawiera wystarczającej ilości kwasu (ocet, sok z cytryny), dodaj <strong>jedną łyżeczkę zimnej wody na żółtko jajka</strong> przed rozpoczęciem dodawania oleju. Ta dodatkowa woda tworzy większy margines bezpieczeństwa.'
    },
    {
      type: 'tip',
      title: 'Naprawa Zwarzonej Porcji',
      html: 'Umieść świeże żółtko jajka w czystej misce. Ubij je z łyżeczką wody. Następnie <strong>wlewaj zwarzoną mieszaninę tak wolno, jak to możliwe</strong>, dokładnie tak, jakby to był surowy olej. Gdy się reemulguje, resztę możesz dodawać szybciej.'
    },
    {
      type: 'title',
      text: 'Słownik Emulsji Kulinarnych',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Faza Ciągła',
          definition: 'Ciecz otaczająca kropelki - zazwyczaj woda, ocet lub sok cytrusowy w emulsjach olej-w-wodzie, takich jak majonez.'
        },
        {
          term: 'Faza Rozproszona',
          definition: 'Ciecz rozbita na maleńkie kropelki - olej w większości emulsji kulinarnych. Im więcej dodajesz, tym ciaśniej kropelki się upakowują.'
        },
        {
          term: 'Ułamek Objętości',
          definition: 'Stosunek objętości oleju do całkowitej objętości. Przy około 74-85% (w zależności od emulgatora) emulsja osiąga swój geometryczny punkt krytyczny.'
        },
        {
          term: 'Koalescencja',
          definition: 'Gdy dwie lub więcej kropelek oleju łączy się w jedną większą. Jest to mikroskopijny proces wywołujący widoczne zwarzenie emulsji.'
        },
        {
          term: 'Inwersja Faz',
          definition: 'Moment, w którym emulsja olej-w-wodzie przekształca się w emulsję woda-w-oleju - jak przy robieniu masła ze śmietany. To ostateczna forma załamania.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: 'Niezależnie od tego, czy robisz klasyczny francuski majonez, czosnkowe aioli, stabilny winegret, czy eksperymentujesz z molekularnymi hydrokoloidami, zrozumienie <strong>stosunku oleju do wody</strong> jest najważniejszym czynnikiem. Nasz kalkulator zajmuje się matematyką, abyś mógł gotować z pewnością siebie.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
