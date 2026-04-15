import type { ToolLocaleContent } from '../../../types';

const title = 'Kalkulator Skalowania Ingrediencji Dostosowanie Przepisu';
const description = 'Automatycznie skaluj przepisy według liczby porcji. Oblicz dokładne ilości składników, mnożąc lub zmniejszając swój przepis bez żadnych komplikacji.';

const faq = [
  {
    question: 'Dlaczego mój współczynnik konwersji zawiera ułamki dziesiętne?',
    answer: 'Ponieważ proporcje kulinarne nie zawsze są liczbami całkowitymi. Jeśli skalujesz przepis z 4 osób na 7, współczynnik wynosi dokładnie 1,75. Składniki są mnożone przez tę liczbę, nawet jeśli wynik zawiera ułamki. Jest to dokładniejsze niż arbitralne zaokrąglanie.',
  },
  {
    question: 'Co się stanie, jeśli wpiszę "1/2 łyżeczki soli"?',
    answer: 'Narzędzie najpierw szuka liczby. Rozpozna "1" jako ilość, a następnie "/2" jako część jednostki. Wynik wyniesie "0,5" i zostanie poprawnie przeskalowany. W przypadku ułamków takich jak "1/2" możesz wpisać bezpośrednio "0,5" (tak jest czytelniej) lub narzędzie zinterpretuje to jako dzielenie.',
  },
  {
    question: 'Czy powinienem zaokrąglać wyniki końcowe?',
    answer: 'To zależy od składnika. W przypadku mąki — tak. Przy drożdżach lub przyprawach precyzja ma mniejsze znaczenie (skaluj do 75% wskazanej wartości). Dla jajek: jeśli otrzymasz 2,3, użyj 2 całych + części trzeciego (odważonej) lub zaokrąglij do 2, jeśli potrawa na to pozwala.',
  },
  {
    question: 'Dlaczego wynik nie zmienia się po zmianie porcji?',
    answer: 'Upewnij się, że pole składników nie jest puste. Jeśli jest puste, nie ma czego skalować. Sprawdź również, czy liczby w składnikach są rozpoznawalne (np. "500g", "1/2 łyżeczki").',
  },
  {
    question: 'Czy to działa z miarami imperialnymi (uncje, szklanki)?',
    answer: 'Technicznie tak, narzędzie odczytuje liczby i skaluje. Ale precyzja w przypadku szklanek jest ograniczona (niejednolita objętość). Zaleca się przeliczenie na gramy przed skalowaniem.',
  },
];

const howTo = [
  {
    name: 'Wprowadź swoje porcje',
    text: 'W polu "Oryginalnie" wpisz liczbę osób, na którą został opracowany przepis. W polu "Docelowo" wpisz liczbę osób, dla których będziesz gotować.',
  },
  {
    name: 'Wklej listę składników',
    text: 'Skopiuj i wklej swoją listę tak, jak jest. Każdy składnik w nowej linii. Narzędzie rozpoznaje liczby na początku (500g, 1/2, 2.5) i automatycznie skaluje.',
  },
  {
    name: 'Dostosuj według kontekstu',
    text: 'Wyniki są matematycznie dokładne, ale gotowanie to sztuka. Przyprawy: skaluj do 75%. Drożdże: przy dużych ilościach używaj mniej niż wynika z teorii. Czasy gotowania nigdy nie ulegają skalowaniu.',
  },
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
  operatingSystem: 'All',
};

export const content: ToolLocaleContent = {
  slug: 'przeskalowywanie-skladnikow',
  title,
  description,
  ui: {
    servings: 'Porcje',
    original: 'Oryginalnie',
    desired: 'Docelowo',
    multiplyingFactor: 'Współczynnik Mnożący',
    ingredientsList: 'Lista Składników',
    pasteHere: 'Wklej tutaj swoją listę.',
    exampleLine1: 'Np:',
    exampleLine2: '500g Mąki',
    exampleLine3: '300ml Wody',
    exampleLine4: '10g Soli',
    result: 'Wynik',
    copy: 'Kopiuj',
    copied: 'Skopiowano!',
    emptyState: 'Twoje dostosowane składniki pojawią się tutaj...',
    defaultIngredient1: '200g Mąki',
    defaultIngredient2: '100ml Mleka',
    defaultIngredient3: '2 Jajka',
  },
  faqTitle: 'Często Zadawane Pytania',
  faq,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'Harold McGee - On Food and Cooking: The Science and Lore of the Kitchen',
      url: 'https://en.wikipedia.org/wiki/Harold_McGee',
    },
    {
      name: 'The Flavor Bible by Karen Page and Andrew Dornenburg',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'Modernist Cuisine - Techniki skalowania naukowego',
      url: 'https://www.modernistcuisine.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Mistrzowski przewodnik po skalowaniu i konwersji przepisów',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Skalowanie składników</strong> jest jednym z najbardziej krytycznych i podatnych na błędy zadań w profesjonalnej kuchni. Nie polega to jedynie na mnożeniu liczb, ale na zrozumieniu, jak chemia i fizyka żywności reagują na zmiany objętości i powierzchni.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: 'x1.75',
          label: 'Współczynnik z 4 na 7 os.',
          icon: 'mdi:calculator',
        },
        {
          value: '75%',
          label: 'Regulacja Przypraw',
          icon: 'mdi:shaker-outline',
        },
        {
          value: '0%',
          label: 'Skalowanie Czasu',
          icon: 'mdi:timer-off',
        },
        {
          value: '100g',
          label: 'Baza Referencyjna',
          icon: 'mdi:weight-gram',
        },
      ],
    },
    {
      type: 'title',
      text: 'Różnice między skalowaniem liniowym a kontekstowym',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Skalowanie Liniowe Matematyczne',
          icon: 'mdi:math-log',
          description: 'Bezpośrednie mnożenie wszystkich wartości przez uzyskany współczynnik konwersji.',
          points: [
            'Idealne dla mąki i płynów bazowych',
            'Optymalne dla precyzyjnego cukiernictwa',
            'Sprawdza się przy małych zmianach (x2, x0.5)',
            'Łatwe do automatycznego obliczenia',
          ],
        },
        {
          title: 'Skalowanie Kontekstowe Kuchenne',
          icon: 'mdi:chef-hat',
          description: 'Dostosowanie proporcji na podstawie nasycenia smaku i parowania.',
          highlight: true,
          points: [
            'Zapobiega nadmiarowi soli i przypraw',
            'Uwzględnia powierzchnię parowania',
            'Dostosowuje drożdże do masy ciasta',
            'Wymaga doświadczenia i oceny szefa kuchni',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Współczynniki Konwersji według liczby gości',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Z Porcji', 'Na Porcje', 'Współczynnik (FC)', 'Trudność'],
      rows: [
        ['2 osoby', '4 osoby', 'x 2.0', 'Niska (Liniowo)'],
        ['4 osoby', '6 osób', 'x 1.5', 'Niska (Liniowo)'],
        ['4 osoby', '10 osób', 'x 2.5', 'Średnia (Uwaga na przyprawy)'],
        ['4 osoby', '25 osób', 'x 6.25', 'Wysoka (Kontekstowo)'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Typowe problemy przy podwajaniu przepisu',
      html: 'Jeśli zauważysz, że smak jest zbyt intensywny po przeskalowaniu (szczególnie przy ostrości lub soli), zmniejsz skalowanie tych konkretnych składników do 75%. Nigdy nie podwajaj czasu gotowania; temperatura wewnętrzna jest osiągana zależnie od grubości, a nie masy całkowitej.',
    },
    {
      type: 'title',
      text: 'Glosariusz terminologii standaryzacji',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Współczynnik Konwersji',
          definition: 'Liczba, przez którą mnoży się wszystkie składniki: Ilość Docelowa / Ilość Oryginalna.',
        },
        {
          term: 'Ubytek Wagowy',
          definition: 'Strata wagi składnika przez parowanie lub wytapianie tłuszczu.',
        },
        {
          term: 'Waga Brutto vs Netto',
          definition: 'Waga przed i po oczyszczeniu składnika.',
        },
        {
          term: 'Wydajność',
          definition: 'Całkowita ilość gotowego produktu po skalowaniu i gotowaniu.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Triki z roztrzepanym jajkiem',
      html: 'Jeśli kalkulator wskazuje 2,3 jajka, roztrzep całe jajko, zważ je i użyj tylko 30% wagi. To jedyny sposób na precyzję w wykwintnym cukiernictwie.',
    },
    {
      type: 'paragraph',
      html: 'Nasze narzędzie upraszcza matematykę, abyś mógł poświęcić energię na to, co naprawdę ważne: kreatywność i smak.',
    },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
