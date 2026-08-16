import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kalkulator Krzywych Pasteryzacji Sous Vide';
const description = 'Oblicz dokładny czas wymagany do bezpiecznej pasteryzacji rdzenia przed Salmonella i Listeria w gotowaniu sous vide, uwzględniając kształt i grubość mięsa.';

const faq = [
  {
    question: 'Co to jest pasteryzacja w gotowaniu sous vide?',
    answer: 'Pasteryzacja to proces podgrzewania żywności do określonej temperatury i utrzymywania jej tam wystarczająco długo, aby zmniejszyć populację mikroorganizmów chorobotwórczych (takich jak Salmonella, Listeria i E. coli) do bezpiecznego, akceptowalnego poziomu. W przeciwieństwie do sterylizacji nie niszczy wszystkich zarodników bakterii, ale sprawia, że żywność jest bezpieczna do spożycia.',
  },
  {
    question: 'Dlaczego grubość mięsa tak drastycznie wpływa na czas gotowania?',
    answer: 'Przenikanie ciepła w żywności odbywa się drogą przewodzenia. Czas potrzebny, aby rdzeń (najzimniejszy punkt) żywności osiągnął temperaturę kąpieli wodnej, rośnie kwadratowo wraz z grubością. Podwojenie grubości steku wydłuża czas nagrzewania około czterokrotnie.',
  },
  {
    question: 'Dlaczego 54.4°C (130°F) jest uważane za minimalną bezpieczną temperaturę sous vide?',
    answer: 'W temperaturach poniżej 54.4°C pospolite patogeny przenoszone przez żywność, takie jak Salmonella, mogą przetrwać i aktywnie się namnażać. Jeśli żywność jest trzymana w tej "strefie zagrożenia" dłużej än 4 godziny, mogą powstać ciepłoodporne toksyny, stwarzając poważne zagrożenie dla bezpieczeństwa żywności.',
  },
  {
    question: 'Co to jest redukcja 6D lub 6.5D?',
    answer: 'Redukcja D odnosi się do dziesiętnego (logarytmicznego) zmniejszenia populacji bakterii. Redukcja 6.5D oznacza, że 99.99995% docelowego patogenu zostaje zabitych. Na przykład, jeśli początkowo było 1 000 000 bakterii, przeżyje mniej niż jedna.',
  },
  {
    question: 'Jak geometria żywności wpływa na szybkość nagrzewania?',
    answer: 'Ciepło wnika w sferę ze wszystkich kierunków (3 wymiary) i w cylinder z boków (2 wymiary), podczas gdy płaska płyta jest ogrzewana głównie z góry i z dołu (1 wymiar). W związku z tym sfery nagrzewają się najszybciej, a następnie cylindry, a płaskie płyty zajmują najwięcej czasu.',
  },
];

const howTo = [
  {
    name: 'Ustaw temperaturę kąpieli',
    text: 'Dostosuj suwak tak, aby odpowiadał temperaturze kąpieli wodnej. Pamiętaj, że wyższe temperatury pasteryzują wykładniczo szybciej.',
  },
  {
    name: 'Określ grubość mięsa',
    text: 'Zmierz najgrubszą część mięsa w milimetrach i wprowadź ją do kalkulatora.',
  },
  {
    name: 'Wybierz kształt geometrii',
    text: 'Wybierz, czy Twoje jedzenie ma kształt płaskiego płata (stek, pierś z kurczaka), cylindra (polędwica, rolada) czy kuli (pulpety).',
  },
  {
    name: 'Wybierz docelowy patogen',
    text: 'Wybierz Salmonella w celu uzyskania standardowego bezpieczeństwa mięsa i drobiu lub Listeria monocytogenes dla osób z grup podwyższonego ryzyka.',
  },
  {
    name: 'Sprawdź całkowity czas',
    text: 'Kalkulator podaje czas nagrzewania rdzenia oraz czas utrzymywania pasteryzacji. Dodaj je do siebie, aby uzyskać całkowity bezpieczny czas gotowania.',
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
  slug: 'krzywe-pasteryzacji-sous-vide',
  title: 'Kalkulator Krzywych Pasteryzacji Sous Vide',
  description: 'Oblicz dokładny czas wymagany do bezpiecznej pasteryzacji rdzenia przed Salmonella i Listeria w gotowaniu sous vide, uwzględniając kształt i grubość mięsa.',
  faqTitle: 'Często Zadawane Pytania',
  ui: {
    title: 'Krzywe Pasteryzacji Sous Vide',
    subtitle: 'Kinetyka letalności termicznej i kompensacja temperatury rdzenia',
    bathTempLabel: 'Temperatura Kąpieli Wodnej',
    thicknessLabel: 'Grubość Mięsa',
    shapeLabel: 'Geometria Mięsa',
    shapeSlab: 'Płaski Płat (np. Stek, Pierś z Kurczaka)',
    shapeCylinder: 'Cylinder (np. Polędwica, Rolada)',
    shapeSphere: 'Kula (np. Pulpety)',
    pathogenLabel: 'Docelowy Patogen',
    pathogenSalmonella: 'Salmonella (Standard)',
    pathogenListeria: 'Listeria monocytogenes',
    resultsTitle: 'Bezpieczny Czas Pasteryzacji',
    heatingTime: 'Czas Nagrzewania Rdzenia do Temp. Kąpieli',
    lethalityTime: 'Czas Utrzymywania Pasteryzacji',
    totalTime: 'Całkowity Czas Gotowania',
    dangerZoneTitle: 'Strefa Zagrożenia Biologicznego',
    dangerZoneDesc: 'Temperatury poniżej 54.4°C nie pozwalają na bezpieczną pasteryzację żywności, ponieważ tempo namnażania bakterii może przewyższać tempo ich obumierania. Nie gotuj metodą sous vide poniżej tej temperatury dłużej niż 4 godziny.',
    chartTitle: 'Logarytmiczna Krzywa Redukcji Bakterii',
    chartXLabel: 'Czas (minuty)',
    chartYLabel: 'Redukcja Logarytmiczna',
    disclaimer: 'Obliczenia zakładają temperaturę początkową 5°C i przewodność termiczną chudego mięsa. Zawsze weryfikuj temperaturę kąpieli za pomocą skalibrowanego termometru.',
    minutesUnit: 'min',
    mmUnit: 'mm',
    inUnit: 'cal',
    tempUnitC: '°C',
    tempUnitF: '°F',
    systemLabel: 'Układ Miar',
    systemMetric: 'Metryczny',
    systemImperial: 'Imperialny'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Pasteryzacja Sous Vide: Kompletny Przewodnik Bezpieczeństwa dla Kucharzy Domowych',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gotowanie sous vide odmieniło domowe kuchnie, umożliwiając przygotowanie idealnie różowych steków bez ryzyka rozgotowania. Jednak metoda ta kryje w sobie istotną złożoność: przy niskich temperaturach pracujesz tuż przy progu letalności termicznej groźnych bakterii. Ten przewodnik wyjaśnia, jak dokładnie obliczać bezpieczne czasy pasteryzacji dla każdego kawałka mięsa.',
    },
    {
      type: 'title',
      text: 'Dlaczego Bezpieczeństwo Sous Vide Różni się od Tradycyjnego Gotowania',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gdy smażysz pierś z kurczaka w 200°C, powierzchnia natychmiast osiąga zabójczą temperaturę, a bakterie giną w sekundy. Sous vide działa inaczej: kąpiel wodna ma dokładnie taką temperaturę, jaką ma osiągnąć potrawa, czasem zaledwie 55°C. W tej temperaturze niszczenie Salmonelli czy Listerii to powolny proces mierzony w minutach i godzinach.',
    },
    {
      type: 'title',
      text: 'Rzeczywiste Czasy Sous Vide: Co Naprawdę Jest Potrzebne w Domowej Kuchni',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Poniższa tabela przedstawia to, czego kucharze domowi faktycznie szukają: konkretne kawałki mięsa, popularne temperatury i całkowity czas obejmujący nagrzewanie rdzenia oraz czas utrzymania pasteryzacji dla grubości 25 mm z lodówki (5°C).',
    },
    {
      type: 'table',
      headers: ['Produkt', 'Temp. Kąpieli', 'Nagrzewanie Rdzenia', 'Czas Pasteryzacji', 'Czas Całkowity', 'Rezultat'],
      rows: [
        ['Pierś z Kurczaka', '60°C / 140°F', '~35 min', '~28 min', '~63 min', 'Soczysta, w pełni spasteryzowana'],
        ['Pierś z Kurczaka', '65°C / 149°F', '~35 min', '~3 min', '~38 min', 'Jędrniejsza, tradycyjna struktura'],
        ['Filet z Łososia', '50°C / 122°F', '~20 min', '~55 min', '~75 min', 'Delikatny, maślany, bezpieczny'],
        ['Stek Wołowy', '55°C / 131°F', '~40 min', '~89 min', '~129 min', 'Medium-rare, bezpieczna powierzchnia'],
        ['Polędwiczka Wieprzowa', '60°C / 140°F', '~35 min', '~28 min', '~63 min', 'Krucha z lekko różowym odcieniem'],
        ['Pierś z Kaczki', '57°C / 135°F', '~35 min', '~52 min', '~87 min', 'Wyrazista w smaku, bezpieczna'],
        ['Pierś z Indyka', '63°C / 145°F', '~40 min', '~9 min', '~49 min', 'Wilgotna, nieprzesuszona'],
        ['Pulpety (sfera)', '60°C / 140°F', '~25 min', '~28 min', '~53 min', 'Równomiernie ugotowane'],
      ],
    },
    {
      type: 'title',
      text: 'Logarytmiczne Matematyka Śmierci Bakterii: Wartości D i z',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Śmierć bakterii podlega kinetyce pierwszego rzędu. <strong>Wartość D</strong> oznacza czas w danej temperaturze potrzebny do uśmiercenia 90% bakterii. <strong>Wartość z</strong> określa, o ile należy podnieść temperaturę, aby przyspieszyć ten proces 10-krotnie.',
    },
    {
      type: 'title',
      text: 'Strefa Zagrożenia: Dlaczego 54.4°C (130°F) to Bezwzględne Minimum',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Zagrożenie Biologiczne Poniżej 54.4°C (130°F)',
      html: 'Nigdy nie gotuj sous vide w temperaturze poniżej 54.4°C dłużej niż przez 4 godziny. Poniżej tej progu bakterie mogą namnażać się szybciej, niż giną.',
    },
    {
      type: 'title',
      text: 'Wpływ Kształtu i Grubości Mięsa na Czas Gotowania',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Przewodzenie ciepła opiera się na prawie Fouriera. Czas nagrzewania rdzenia rośnie z <strong>kwadratem grubości</strong>. Płaski płat nagrzewa się najwolniej, natomiast cylindry i sfery nagrzewają się szybciej.',
    },
    {
      type: 'title',
      text: 'Salmonella vs. Listeria: Wybór Patogenu Docelowego',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Salmonella (Standard)',
          icon: 'mdi:bacteria-outline',
          description: 'Częsty patogen w drobiu i mięsie, umiarkowanie wrażliwy na ciepło.',
          points: [
            'Wartość z 5.5°C',
            'Cel: redukcja 6.5-log dla drobiu',
            'D60 = 4.3 minuty',
            'Bezpieczne dla zdrowych dorosłych',
            'Standard odniesienia dla mięsa',
          ],
        },
        {
          title: 'Listeria monocytogenes',
          icon: 'mdi:shield-alert-outline',
          description: 'Wyższa odporność na ciepło. Kluczowa dla grup ryzyka.',
          highlight: true,
          points: [
            'Wyższa odporność na ciepło niż Salmonella',
            'Wartość z 6.0°C',
            'Cel: zalecana redukcja 6-log',
            'D60 = 7.7 minuty: wymaga prawie dwukrotnie dłuższego czasu',
            'Krytyczna dla kobiet w ciąży i osób z obniżoną odpornością',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Bezpieczeństwo Żywności dla Grup Podwyższonego Ryzyka',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kobiety w ciąży oraz osoby z osłabioną odpornością powinny wybierać Listerię jako patogen docelowy i odpowiednio wydłużyć czas gotowania.',
    },
    {
      type: 'title',
      text: 'Znaczenie Początkowej Temperatury z Lodówki',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator zakłada temperaturę początkową 5°C. Produkty zamrożone wymagają znacznie dłuższego czasu na rozmrożenie w kąpieli.',
    },
    {
      type: 'title',
      text: 'Pasteryzacja to Nie Sterylizacja',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pasteryzacja nie niszczy przetrwalników bakterii. Potrawy należy podawać od razu lub szybko schłodzić w kąpieli z lodem.',
    },
    {
      type: 'title',
      text: 'Zgodność ze Standardami USDA FSIS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Model matematyczny kalkulatora opiera się na oficjalnych wytycznych FSIS Appendix A dotyczących inaktywacji termicznej.',
    },
    {
      type: 'title',
      text: 'Ryby i Owoce Morza: Inne Zasady dla Białek Morskich',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ryby nagrzewają się szybciej, ale wymagają uwzględnienia innych patogenów i pasożytów. Przed obróbką poddać zamrożeniu.',
    },
    {
      type: 'title',
      text: 'Kompromis Między Strukturą a Bezpieczeństwem',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Niższa temperatura daje bardziej soczyste mięso, ale wymaga dłuższego czasu pasteryzacji. Wyższa temperatura gotuje szybciej.',
    },
    {
      type: 'title',
      text: 'Kalibracja Sprzętu',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Sprawdzaj cyrkulator skalibrowanym termometrem.</strong> Odchylenie o 1°C znacząco zmienia czas pasteryzacji.',
    },
    {
      type: 'title',
      text: 'Gotowanie Wielu Woreczków Jednocześnie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zapewnij swobodną cyrkulację wody między woreczkami w naczyniu.',
    },
    {
      type: 'title',
      text: 'Szybka Ściąga: Minimalne Bezpieczne Temperatury i Czasy',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Rodzaj Żywności', 'Min. Temp. Rdzenia', 'Czas w Min. Temp.', 'Szybciej przy', 'Zalecane dla'],
      rows: [
        ['Kurczak i Drób', '60°C / 140°F', '~28 min (6.5-log Salmonella)', '65°C: ~3 min', 'Wszyscy konsumenci'],
        ['Wieprzowina', '60°C / 140°F', '~28 min (6.5-log Salmonella)', '65°C: ~3 min', 'Wszyscy konsumenci'],
        ['Wołowina', '55°C / 131°F', '~89 min (6.5-log Salmonella)', '60°C: ~28 min', 'Zdrowi dorośli'],
        ['Mięso Mielone', '60°C / 140°F', '~28 min (6.5-log Salmonella)', '65°C: natychmiast', 'Wszyscy konsumenci'],
        ['Ryby i Owoce Morza', '50°C / 122°F', '~55 min (Listeria)', '55°C: ~22 min', 'Wcześniej zamrożone'],
        ['Jaja (w skorupce)', '57°C / 135°F', '~75 min (Salmonella)', '60°C: ~28 min', 'Spasteryzowane jaja'],
        ['Warzywa', '85°C / 185°F', 'Nie dotyczy (inaktywacja enzymów)', 'N/A', 'Zmiękczanie pektyn'],
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
