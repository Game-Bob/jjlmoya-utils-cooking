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
      text: 'Nauka o Letalności Termicznej w Gotowaniu Sous Vide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gotowanie sous vide opiera się na precyzyjnej kontroli temperatury w celu osiągnięcia bezpiecznego zakonserwowania żywności bez jej rozgotowania. W przeciwieństwie do tradycyjnych metod wysokotemperaturowych, które sterylizują powierzchnie niemal natychmiast, sous vide działa bliżej progu letalności termicznej powszechnych patogenów. Aby zagwarantować bezpieczeństwo, musimy dokładnie obliczyć kinetykę inaktywacji bakterii, która zależy od temperatury, czasu ekspozycji i szybkości przenikania ciepła do rdzenia żywności.',
    },
    {
      type: 'title',
      text: 'Zrozumienie Wartości D i Wartości z',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bakteriobójcza śmierć termiczna jest procesem logarytmicznym. <strong>Wartość D</strong> definiowana jest jako czas wymagany w określonej temperaturze do zmniejszenia populacji mikroorganizmów o 90% (redukcja o 1 log). <strong>Wartość z</strong> reprezentuje wzrost temperatury wymagany do zmniejszenia wartości D o współczynnik 10. Dla Salmonelli w drobiu typowa wartość z wynosi 5.5°C. Oznacza to, że jeśli pasteryzacja trwa 90 minut w temperaturze 55°C, w temperaturze 60.5°C zajmie około 9 minut.',
    },
    {
      type: 'title',
      text: 'Niestacjonarne Przewodzenie Ciepła i Opóźnienie Temperatury Rdzenia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Żywność nie nagrzewa się natychmiastowo. Ciepło musi przewodzone być z kąpieli wodnej przez woreczek próżniowy do rdzenia mięsa. To niestacjonarne przewodzenie ciepła jest modelowane przy użyciu prawa Fouriera, gdzie szybkość zmian temperatury zależy od przewodności termicznej żywności (zwykle około 0.14 mm²/s dla chudej tkanki mięśniowej) i jej geometrycznych warunków brzegowych. Płaski stek nagrzewa się głównie z dwóch przeciwległych powierzchni, podczas gdy cylindryczna polędwica pobiera ciepło promieniście ze wszystkich stron, przyspieszając przenikanie ciepła.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
