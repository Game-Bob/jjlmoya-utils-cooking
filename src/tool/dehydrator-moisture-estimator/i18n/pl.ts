import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kalkulator Wilgotności Dehydratora';
const description = 'Oszacuj utratę wagi, parowanie wody i czas suszenia żywności w dehydratorze.';

const faq = [
  {
    question: 'Jak oblicza się utratę wagi podczas dehydratacji?',
    answer: 'Utratę wagi oblicza się, rozdzielając suchą masę od zawartości wody. Ponieważ sucha masa pozostaje stała, końcowa waga to sucha masa podzielona przez 1 minus docelowy procent wilgotności.'
  }
];

const howTo = [
  {
    name: 'Wybierz gotowe ustawienie składnika lub wilgotność ręczną',
    text: 'Wybierz składnik z listy lub ręcznie ustaw wilgotność początkową.'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
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
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'kalkulator-wilgotnosci-dehydratora',
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  ui: {
    title: 'Kalkulator Wilgotności',
    subtitle: 'Oblicz kurczenie się wagi i szacowany czas suszenia',
    unitSystemLabel: 'Układ Jednostek',
    metricOption: 'Metryczny (g, °C)',
    imperialOption: 'Imperialny (oz, °F)',
    ingredientLabel: 'Ustawienie Składnika',
    initialMoistureLabel: 'Wilgotność Początkowa (%)',
    targetMoistureLabel: 'Wilgotność Docelowa (%)',
    weightLabel: 'Waga Początkowa',
    tempLabel: 'Temperatura Suszenia',
    customOption: 'Niestandardowe / Ręcznie',
    beefOption: 'Suszona Wołowina',
    watermelonOption: 'Suszony Arbuz',
    appleOption: 'Krążki Jabłek',
    mangoOption: 'Plastry Mango',
    mushroomOption: 'Grzyby',
    targetWeightLabel: 'Waga Docelowa',
    waterEvaporatedLabel: 'Odparowana Woda',
    estimatedHoursLabel: 'Szacowany Czas Suszenia',
    shrinkageLabel: 'Kurczenie się Wagi'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Ile wagi straci Twoja żywność w dehydratorze? Oblicz czas suszenia i wilgotność',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Niezależnie od tego, czy przygotowujesz <strong>suszony produkt mięsny (beef jerky)</strong>, <strong>skórę owocową (fruit leather)</strong>, <strong>suszone krążki jabłek</strong> czy <strong>suszony arbuz</strong>, kluczem do uzyskania spójnych rezultatów jest zrozumienie zawartości wilgoci. Bezpieczeństwo żywności i stabilność podczas przechowywania zależą od osiągnięcia odpowiedniego docelowego poziomu wilgotności. Nasz <strong>kalkulator wilgotności w dehydratorze</strong> przewiduje wagę końcową, ilość odparowanej wody oraz czas suszenia na podstawie wybranego składnika i ustawień.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '70%', label: 'Wilgotność Mięsa', icon: 'mdi:food' },
        { value: '92%', label: 'Wilgotność Arbuza', icon: 'mdi:water' },
        { value: '10%', label: 'Cel dla Jerky', icon: 'mdi:shield' },
        { value: '55°C', label: 'Śr. Temp. Suszenia', icon: 'mdi:thermometer' }
      ]
    },
    {
      type: 'title',
      text: 'Jaki jest odpowiedni poziom wilgotności dla suszonej żywności?',
      level: 2
    },
    {
      type: 'table',
      headers: ['Składnik', 'Wilgotność Początkowa', 'Wilgotność Docelowa', 'Typowy Czas', 'Oznaka Gotowości'],
      rows: [
        ['Beef Jerky', '70%', '10-15%', '4-8 godz.', 'Twarde i wygina się bez pękania'],
        ['Krążki Jabłek', '86%', '15-20%', '6-10 godz.', 'Giętkie i skórzaste, bez lepkich miejsc'],
        ['Plastry Mango', '84%', '15-18%', '6-10 godz.', 'Ciągliwe, bez widocznej wilgoci'],
        ['Grzyby', '92%', '5-8%', '4-8 godz.', 'Kruche i chrupkie'],
        ['Suszony Arbuz', '92%', '10-12%', '10-16 godz.', 'Pęka z trzaskiem przy zginaniu']
      ]
    },
    {
      type: 'title',
      text: 'Typowe problemy podczas suszenia i jak je rozwiązać',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Twardnienie powierzchniowe (Case hardening):</strong> Zewnętrzna warstwa wysycha zbyt szybko, zatrzymując wilgoć w środku. Obniż temperaturę o 5-10 °C i zwiększ cyrkulację powietrza.',
        '<strong>Pleśń podczas przechowywania:</strong> Żywność nie została wysuszona do dostatecznie niskiego poziomu wilgotności. Użyj kalkulatora, aby znaleźć wagę docelową i zweryfikuj ją testem wilgotności.',
        '<strong>Nierównomierne suszenie:</strong> Kawałki zostały pokrojone na różne grubości lub dehydrator jest przepełniony. Krój kawałki równomiernie i zostawiaj między nimi odstępy.',
        '<strong>Żywność jest zbyt sucha i krucha:</strong> Przesuszenie powoduje utratę smaku i tekstury. Sprawdź docelowe poziomy wilgotności dla konkretnego składnika.'
      ]
    },
    {
      type: 'title',
      text: 'Przewodnik po temperaturach suszenia według rodzaju żywności',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Temperatura wpływa zarówno na szybkość suszenia, jak i na jakość żywności. Wyższe temperatury przyspieszają parowanie wody, ale mogą powodować twardnienie powierzchniowe, utratę składników odżywczych i nierównomierne rezultaty. Postępuj zgodnie z poniższymi ogólnymi wytycznymi dotyczącymi ustawień dehydratora:'
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Niska Temperatura 40 do 50 °C',
          icon: 'mdi:thermometer',
          description: 'Najlepsza do zachowania enzymów, składników odżywczych i delikatnych aromatów.',
          points: ['Zioła i warzywa liściaste', 'Grzyby', 'Konserwacja surowej żywności (raw food)', 'Wymagany dłuższy czas suszenia']
        },
        {
          title: 'Średnia Temperatura 50 do 60 °C',
          icon: 'mdi:thermometer',
          description: 'Standardowy zakres dla większości owoców i warzyw.',
          highlight: true,
          points: ['Krążki jabłek i plastry mango', 'Większość warzyw', 'Skóry owocowe', 'Zrównoważona szybkość i jakość']
        },
        {
          title: 'Wysoka Temperatura 60 do 70 °C',
          icon: 'mdi:thermometer',
          description: 'Stosowana do suszonego mięsa oraz gęstych produktów wymagających zachowania bezpieczeństwa żywności.',
          points: ['Suszona wołowina i indyk', 'Gęste warzywa korzeniowe', 'Priorytet bezpieczeństwa żywności', 'Krótsze okno suszenia']
        }
      ]
    },
    {
      type: 'tip',
      title: 'Zawsze przygotuj owoce przed suszeniem',
      html: 'Przed suszeniem zanurz jabłka, banany i gruszki w soku z cytryny lub roztworze kwasu askorbinowego, aby zapobiec brązowieniu i zachować kolor.'
    },
    {
      type: 'tip',
      title: 'Obracaj tace podczas suszenia',
      html: 'Dehydratory często posiadają cieplejsze strefy. Obracaj tace z góry na dół i z przodu do tyłu co 2-3 godziny w celu uzyskania równomiernego wysuszenia.'
    },
    {
      type: 'tip',
      title: 'Kondycjonuj przed przechowywaniem',
      html: 'Po wysuszeniu pozwól żywności ostygnąć i umieść ją w szczelnym pojemniku na 1 tydzień. Potrząsaj codziennie. Jeśli pojawi się wilgoć, dosusz produkt.'
    },
    {
      type: 'title',
      text: 'Słownik pojęć związanych z wilgotnością w dehydratorze',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Twardnienie powierzchniowe', definition: 'Stan, w którym zewnętrzna powierzchnia żywności wysycha zbyt szybko, tworząc twardą skorupę, która zatrzymuje wilgoć wewnątrz i uniemożliwia prawidłowe wysuszenie.' },
        { term: 'Aktywność wody (aw)', definition: 'Miara wolnej wody dostępnej dla wzrostu drobnoustrojów. Trwała suszona żywność zazwyczaj charakteryzuje się aktywnością wody poniżej 0,60.' },
        { term: 'Zawartość wilgoci', definition: 'Procentowy stosunek wagi wody do całkowitej wagi żywności. Służy do określania postępu suszenia i docelowych poziomów bezpieczeństwa.' },
        { term: 'Wskaźnik kurczenia', definition: 'Proporcja pierwotnej wagi pozostała po dehydratacji. Kluczowy wskaźnik przy planowaniu wielkości partii i przechowywania.' }
      ]
    },
    {
      type: 'summary',
      title: 'Kluczowe wskazówki do idealnego suszenia',
      items: [
        'Różne składniki mają bardzo różną wilgotność początkową (70-92%). Używaj gotowych zestawów dla dokładnych szacunków.',
        'Wilgotność docelowa różni się w zależności od żywności: 10% dla jerky, 15-20% dla owoców, 5-8% dla warzyw i grzybów.',
        'Temperatura suszenia wpływa na szybkość i jakość. Trzymaj się zakresu 50-60 °C dla większości produktów.',
        'Twardnienie powierzchniowe niszczy teksturę. Unikaj temperatur powyżej 70 °C i dbaj o właściwy przepływ powietrza.',
        'Zawsze kondycjonuj suszoną żywność przez 1 tydzień przed długoterminowym przechowywaniem, aby zapewnić równomierny rozkład wilgoci.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
