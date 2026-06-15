import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Krzywa temperowania czekolady i przewodnik metody szczepienia";
const description = "Opanuj temperowanie czekolady w domu. Oblicz potrzebną wagę czekolady do szczepienia (callets) i śledź krok po kroku termodynamiczne krzywe temperatur dla gorzkiej, mlecznej i białej czekolady.";
const faq = [
  {
    "question": "Co to jest temperowanie czekolady ?",
    "answer": "Temperowanie czekolady to proces podgrzewania, schładzania i delikatnego ponownego podgrzewania czekolady w celu kontrolowania krystalizacji masła kakaowego. Zmusza to cząsteczki tłuszczu do krystalizacji w stabilne kryształy Formy V (Beta), nadając czekoladzie połysk, twardość i zapobiegając jej łatwemu roztapianiu w temperaturze pokojowej."
  },
  {
    "question": "Na czym polega metoda szczepienia ?",
    "answer": "Metoda szczepienia (seeding) polega na roztopieniu części czekolady, a następnie dodaniu stałych, już utemperowanych kawałków czekolady (szczepionki w postaci kaletek) podczas fazy schładzania. Te stałe kryształy służą jako szablon, kierując cząsteczki roztopionego tłuszczu do ułożenia się w stabilną strukturę Formy V."
  },
  {
    "question": "Dlaczego na czekoladzie pojawia się biały nalot ?",
    "answer": "Białe smugi lub plamy to tzw. wykwity tłuszczowe (fat bloom). Dzieje się tak, gdy czekolada nie jest odpowiednio utemperowana, co pozwala niestabilnym kryształom masła kakaowego migrować na powierzchnię i ponownie krystalizować. Jest bezpieczna do spożycia, ale traci połysk."
  },
  {
    "question": "Czy mogę temperować czekoladę, która już ma biały nalot ?",
    "answer": "Tak. Nalot to fizyczna separacja kryształów tłuszczu, a nie psucie chemiczne. Całkowite roztopienie czekolady w odpowiedniej temperaturze (ok. 45-50°C) niszczy niestabilne kryształy, umożliwiając rozpoczęcie procesu od nowa."
  },
  {
    "question": "Jak wilgotność i temperatura kuchni wpływają na temperowanie ?",
    "answer": "Czekolada jest niezwykle wrażliwa na otoczenie. Idealna temperatura w kuchni to 18-22°C, a wilgotność względna poniżej 50%. Wysoka wilgotność może powodować skraplanie pary wodnej na czekoladzie, co prowadzi do wykwitów cukrowych i zbijania się czekolady w gęstą masę."
  },
  {
    "question": "Czy mogę używać zwykłych groszków czekoladowych ze sklepu ?",
    "answer": "Standardowe groszki czekoladowe często zawierają stabilizatory i mniej masła kakaowego, aby nie tracić kształtu podczas pieczenia. Do temperowania zaleca się profesjonalną czekoladę kuwerturę zawierającą co najmniej 31% masła kakaowego."
  }
];

const howTo = [
  {
    "name": "Wybór czekolady",
    "text": "Wybierz czekoladę gorzką, mleczną lub białą, aby załadować odpowiednie progi temperatur."
  },
  {
    "name": "Wpisanie wagi",
    "text": "Wpisz docelową wagę czekolady, którą chcesz przygotować."
  },
  {
    "name": "Faza roztapiania",
    "text": "Roztop 75% czekolady do temperatury docelowej (np. 50C dla gorzkiej), aby rozbić kryształy."
  },
  {
    "name": "Faza chłodzenia i szczepienia",
    "text": "Schładzaj roztopioną czekoladę, mieszając i dodając pozostałe 25% stałej czekolady, aż osiągniesz docelową temperaturę."
  },
  {
    "name": "Faza robocza",
    "text": "Delikatnie podgrzej czekoladę do temperatury roboczej, aby rozpuścić niestabilne kryształy przed użyciem."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Co to jest temperowanie czekolady ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Temperowanie czekolady to proces podgrzewania, schładzania i delikatnego ponownego podgrzewania czekolady w celu kontrolowania krystalizacji masła kakaowego. Zmusza to cząsteczki tłuszczu do krystalizacji w stabilne kryształy Formy V (Beta), nadając czekoladzie połysk, twardość i zapobiegając jej łatwemu roztapianiu w temperaturze pokojowej."
      }
    },
    {
      "@type": "Question",
      "name": "Na czym polega metoda szczepienia ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Metoda szczepienia (seeding) polega na roztopieniu części czekolady, a następnie dodaniu stałych, już utemperowanych kawałków czekolady (szczepionki w postaci kaletek) podczas fazy schładzania. Te stałe kryształy służą jako szablon, kierując cząsteczki roztopionego tłuszczu do ułożenia się w stabilną strukturę Formy V."
      }
    },
    {
      "@type": "Question",
      "name": "Dlaczego na czekoladzie pojawia się biały nalot ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Białe smugi lub plamy to tzw. wykwity tłuszczowe (fat bloom). Dzieje się tak, gdy czekolada nie jest odpowiednio utemperowana, co pozwala niestabilnym kryształom masła kakaowego migrować na powierzchnię i ponownie krystalizować. Jest bezpieczna do spożycia, ale traci połysk."
      }
    },
    {
      "@type": "Question",
      "name": "Czy mogę temperować czekoladę, która już ma biały nalot ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak. Nalot to fizyczna separacja kryształów tłuszczu, a nie psucie chemiczne. Całkowite roztopienie czekolady w odpowiedniej temperaturze (ok. 45-50°C) niszczy niestabilne kryształy, umożliwiając rozpoczęcie procesu od nowa."
      }
    },
    {
      "@type": "Question",
      "name": "Jak wilgotność i temperatura kuchni wpływają na temperowanie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Czekolada jest niezwykle wrażliwa na otoczenie. Idealna temperatura w kuchni to 18-22°C, a wilgotność względna poniżej 50%. Wysoka wilgotność może powodować skraplanie pary wodnej na czekoladzie, co prowadzi do wykwitów cukrowych i zbijania się czekolady w gęstą masę."
      }
    },
    {
      "@type": "Question",
      "name": "Czy mogę używać zwykłych groszków czekoladowych ze sklepu ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standardowe groszki czekoladowe często zawierają stabilizatory i mniej masła kakaowego, aby nie tracić kształtu podczas pieczenia. Do temperowania zaleca się profesjonalną czekoladę kuwerturę zawierającą co najmniej 31% masła kakaowego."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Krzywa temperowania czekolady i przewodnik metody szczepienia",
  "description": "Opanuj temperowanie czekolady w domu. Oblicz potrzebną wagę czekolady do szczepienia (callets) i śledź krok po kroku termodynamiczne krzywe temperatur dla gorzkiej, mlecznej i białej czekolady.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Wybór czekolady",
      "text": "Wybierz czekoladę gorzką, mleczną lub białą, aby załadować odpowiednie progi temperatur."
    },
    {
      "@type": "HowToStep",
      "name": "Wpisanie wagi",
      "text": "Wpisz docelową wagę czekolady, którą chcesz przygotować."
    },
    {
      "@type": "HowToStep",
      "name": "Faza roztapiania",
      "text": "Roztop 75% czekolady do temperatury docelowej (np. 50C dla gorzkiej), aby rozbić kryształy."
    },
    {
      "@type": "HowToStep",
      "name": "Faza chłodzenia i szczepienia",
      "text": "Schładzaj roztopioną czekoladę, mieszając i dodając pozostałe 25% stałej czekolady, aż osiągniesz docelową temperaturę."
    },
    {
      "@type": "HowToStep",
      "name": "Faza robocza",
      "text": "Delikatnie podgrzej czekoladę do temperatury roboczej, aby rozpuścić niestabilne kryształy przed użyciem."
    }
  ]
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Krzywa temperowania czekolady i przewodnik metody szczepienia",
  "description": "Opanuj temperowanie czekolady w domu. Oblicz potrzebną wagę czekolady do szczepienia (callets) i śledź krok po kroku termodynamiczne krzywe temperatur dla gorzkiej, mlecznej i białej czekolady.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
};

export const content: ToolLocaleContent = {
  slug: 'temperowanie-czekolady-przewodnik-krzywa',
  title,
  description,
  faqTitle: 'Najczęściej zadawane pytania',
  ui: {
  "title": "Asystent Temperowania Czekolady",
  "subtitle": "Krzywe termodynamiczne i kalkulator szczepienia",
  "chocolateTypeLabel": "Rodzaj Czekolady",
  "totalWeightLabel": "Całkowita docelowa waga",
  "meltLabel": "Faza Roztapiania",
  "coolLabel": "Faza Chłodzenia & Szczepienia",
  "workLabel": "Faza Robocza",
  "meltTempLabel": "Temp. Roztapiania",
  "coolTempLabel": "Temp. Chłodzenia",
  "workTempLabel": "Temp. Robocza",
  "meltWeightLabel": "Waga do roztopienia",
  "seedWeightLabel": "Waga szczepionki (pastylki)",
  "molecularLabel": "Stan krystalizacji molekularnej",
  "seedingTitle": "Kalkulator metody szczepienia (25%)",
  "stepTitle": "Etapy temperowania",
  "darkOption": "Gorzka Czekolada",
  "milkOption": "Mleczna Czekolada",
  "whiteOption": "Biała Czekolada",
  "resetButton": "Resetuj przewodnik",
  "warningOverheated": "Ostrzeżenie: Temperatura jest zbyt wysoka! Możesz spalić masę kakaową lub zdenaturować białka mleka.",
  "warningUnderheated": "Ostrzeżenie: Temperatura jest zbyt niska. Stabilne kryształy nie powstały lub czekolada zastygła przedwcześnie.",
  "interactiveInfo": "Klikaj kroki lub przeciągaj termometr, aby podejrzeć stany molekularne"
},
  faq,
  howTo,
  seo: [
  {
    "type": "title",
    "text": "Termodynamika krystalizacji masła kakaowego",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Masło kakaowe jest polimorficzne, co oznacza, że może krzepnąć w sześciu różnych formach krystalicznych (I do VI). Każda forma ma inną temperaturę topnienia i stabilność. Celem temperowania jest uzyskanie kryształów Formy V (Beta). Zapewniają one połysk, twardość i charakterystyczne chrupnięcie."
  },
  {
    "type": "stats",
    "columns": 4,
    "items": [
      {
        "value": "Forma V",
        "label": "Kryształ Beta docelowy",
        "icon": "mdi:hexagon-multiple-outline"
      },
      {
        "value": "25-30%",
        "label": "Stosunek szczepienia",
        "icon": "mdi:scale"
      },
      {
        "value": "31-32°C",
        "label": "Temp. pracy gorzkiej",
        "icon": "mdi:thermometer"
      },
      {
        "value": "0.1-0.2C",
        "label": "Chłodzenie na min.",
        "icon": "mdi:trending-down"
      }
    ]
  },
  {
    "type": "title",
    "text": "Sześć form krystalicznych masła kakaowego",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Zrozumienie termodynamiki form krystalicznych pozwala uniknąć błędów podczas pracy z czekoladą. Oto właściwości tych form :"
  },
  {
    "type": "table",
    "headers": [
      "Forma",
      "Struktura",
      "Pkt topnienia",
      "Stabilność i właściwości"
    ],
    "rows": [
      [
        "Forma I",
        "Gamma (γ)",
        "17°C (62.6°F)",
        "Bardzo niestabilna, miękka, topi się w dłoni, brak trzasku."
      ],
      [
        "Forma II",
        "Alpha (α)",
        "21°C (69.8°F)",
        "Niestabilna, miękka, krucha struktura, topi się łatwo."
      ],
      [
        "Forma III",
        "Beta Prime (β')",
        "25.5°C (77.9°F)",
        "Niestabilna, jędrna ale brak chrupkości, matowa."
      ],
      [
        "Forma IV",
        "Beta Prime (β')",
        "27.3°C (81.1°F)",
        "Niestabilna, jędrna, topi się lekko zbyt łatwo, słaby połysk."
      ],
      [
        "Forma V",
        "Beta (β)",
        "33.8°C (92.8°F)",
        "Bardzo stabilna, piękny połysk, chrupnięcie (Forma pożądana)."
      ],
      [
        "Forma VI",
        "Beta (β)",
        "36.3°C (97.3°F)",
        "Najbardziej stabilna, twarda, tworzy się miesiącami, daje nalot."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Na czym polega metoda szczepienia",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Szczepienie to bezpieczna metoda temperowania bez używania marmurowego blatu. Zachowując 25% czekolady w stanie stałym, dodajemy stabilne kryształy Formy V bezpośrednio do ciepłej masy, co kieruje procesem krystalizacji."
  },
  {
    "type": "title",
    "text": "Nauka kryjąca się za krzywą temperowania czekolady",
    "level": 2
  },
  {
    "type": "list",
    "items": [
      "<strong>Faza 1: Roztapianie (T > 40°C):</strong> Podgrzewanie czekolady niszczy wszystkie kryształy (I do VI), dając amorficzny płynny stan tłuszczu.",
      "<strong>Faza 2: Chłodzenie i szczepienie (T ≈ 27°C):</strong> Chłodzenie rozpoczyna krystalizację. Dodanie 25% szczepionki wprowadza stabilne kryształy Form V.",
      "<strong>Faza 3: Praca (T ≈ 31°C):</strong> Podgrzanie topi niestabilne kryształy Form IV powstałe przy chłodzeniu, pozostawiając tylko Form V."
    ]
  },
  {
    "type": "title",
    "text": "Metody temperowania w domu",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Możesz uzyskać doskonałe rezultaty w domu. Zważ składniki dokładnie przy użyciu kalkulatora :"
  },
  {
    "type": "list",
    "items": [
      "<strong>Kąpiel wodna :</strong> Umieść 75% czekolady w misce nad parą wodną. Roztop ją do pożądanej temperatury, zdejmij z ognia i dodaj pozostałe 25% stałych pastylek. Mieszaj do schłodzenia, a następnie krótko podgrzej na parze do temperatury pracy.",
      "<strong>Kuchenka mikrofalowa :</strong> Podgrzewaj 75% czekolady w sesjach po 15-30s przy mocy 50%. Wymieszaj z 25% stałej czekolady do schłodzenia. Podgrzej w sesjach po 5-10s do temperatury pracy.",
      "<strong>Metoda sous vide :</strong> Zapakuj czekoladę w woreczek próżniowy. Roztop w kąpieli sous vide. Obniż temperaturę lodem i masuj woreczek. Podgrzej do temperatury roboczej."
    ]
  },
  {
    "type": "title",
    "text": "Jak wykonać test temperowania",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Przed użyciem czekolady wykonaj test. Zanurz końcówkę czystego noża w czekoladzie i odłóż w temperaturze 18-22°C. Jeśli jest temperowana, zastygne w ciągu 3-5 minut z połyskiem i chrupnięciem. Jeśli nie, roztop ją i zacznij od nowa."
  },
  {
    "type": "title",
    "text": "Rozwiązywanie problemów z temperowaniem",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Niewłaściwe temperowanie skutkuje szarym nalotem na powierzchni. Rozwiążesz to topiąc czekoladę i powtarzając proces."
  }
],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
