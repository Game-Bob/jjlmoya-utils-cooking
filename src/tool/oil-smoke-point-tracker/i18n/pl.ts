import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Monitor Punktu Dymienia Oleju: Szacowanie Żywotności i Degradacji Oleju do Smażenia';
const description = 'Monitoruj jakość oleju do głębokiego smażenia i szacuj spadki punktu dymienia. Śledź użycia, temperatury i rodzaje żywności, aby zapobiec szkodliwemu gromadzeniu się związków polarnych.';

const faq = [
  {
    question: 'Dlaczego punkt dymienia oleju do smażenia spada z czasem?',
    answer: 'Za każdym razem, gdy olej jest podgrzewany do temperatur smażenia, degradacja termiczna, hydroliza i utlenianie rozkładają triglicerydy na wolne kwasy tłuszczowe (FFA), monoacyloglicerole i diacyloglicerole. Te produkty rozpadu mają znacznie niższą temperaturę wrzenia i punkt dymienia niż nienaruszone triglicerydy, powodując, że olej zaczyna dymić w niższych temperaturach przy wielokrotnym użyciu.',
  },
  {
    question: 'Czym są związki polarne i dlaczego są regulowane?',
    answer: 'Związki polarne (TPC) to produkty degradacji powstające podczas smażenia. Gdy przekraczają 25% masy oleju, olej jest uważany za zdegradowany, utleniony i szkodliwy do spożycia, powodując nieprzyjemny posmak i potencjalne ryzyko sercowo-naczyniowe. Wiele krajów europejskich prawnie nakazuje wyrzucanie oleju do smażenia, gdy TPC przekracza 25%.',
  },
  {
    question: 'Jak panierka lub mąka wpływają na degradację oleju?',
    answer: 'Panierka, ciasto i luźna mąka pozostawiają drobinki jedzenia w gorącym oleju. Cząsteczki te szybko się zwęglają w temperaturach powyżej 180 stopni Celsjusza, uwalniając wolne kwasy tłuszczowe i działając jako katalizatory przyspieszające degradację termiczną. Czyste skrobie, takie jak ziemniaki, degradują olej znacznie wolniej.',
  },
  {
    question: 'Jaki jest bezpieczny limit ponownego użycia oleju?',
    answer: 'Zgodnie z ogólną zasadą, rafinowane oleje wysokotemperaturowe, takie jak rzepakowy lub arachidowy, można ponownie wykorzystać od 5 do 8 razy w czystych warunkach. Jednak oleje nierafinowane lub oleje narażone na temperatury powyżej 190 stopni Celsjusza lub potrawy panierowane należy wyrzucić po 1 do 3 użyciach.',
  },
];

const howTo = [
  {
    name: 'Wybierz rodzaj oleju do smażenia',
    text: 'Wybierz olej z listy bazy danych. Rafinowane oleje wysokotemperaturowe mają wyższy początkowy punkt dymienia niż opcje nierafinowane.',
  },
  {
    name: 'Śledź cykle smażenia',
    text: 'Wprowadź całkowitą liczbę sesji smażenia, którym poddana została bieżąca porcja oleju.',
  },
  {
    name: 'Wprowadź temperaturę smażenia',
    text: 'Dostosuj suwak, aby dopasować średnią temperaturę sesji smażenia. Temperatury powyżej 180 stopni Celsjusza przyspieszają rozkład.',
  },
  {
    name: 'Określ rodzaj panierki',
    text: 'Wskaż, czy smażysz czyste skrobie, czy potrawy panierowane/otoczkowane, które pozostawiają zwęglone pozostałości.',
  },
  {
    name: 'Sprawdź punkt dymienia i status wyrzucenia',
    text: 'Sprawdź obniżony punkt dymienia i wskaźnik konieczności wyrzucenia. Wyrzuć natychmiast, jeśli stan oleju wejdzie w strefę krytyczną.',
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent = {
  slug: 'monitor-punktu-dymienia-oleju',
  title: 'Monitor Punktu Dymienia Oleju',
  description: 'Monitoruj jakość oleju do głębokiego smażenia i szacuj spadki punktu dymienia. Śledź użycia, temperatury i rodzaje żywności, aby zapobiec szkodliwemu gromadzeniu się związków polarnych.',
  faqTitle: 'Często Zadawane Pytania',
  ui: {
    oilPresetLabel: 'Rodzaj oleju do smażenia',
    presetAvocadoRefined: 'Olej z awokado (Rafinowany)',
    presetSunflowerRefined: 'Olej słonecznikowy (Rafinowany)',
    presetPeanutRefined: 'Olej arachidowy (Rafinowany)',
    presetCanolaRefined: 'Olej rzepakowy (Rafinowany)',
    presetOliveEV: 'Oliwa z oliwek Extra Virgin',
    presetOlivePomace: 'Olej z wytłoków oliwnych',
    presetCoconutUnrefined: 'Olej kokosowy (Nierafinowany)',
    presetSunflowerUnrefined: 'Olej słonecznikowy (Nierafinowany)',
    usesLabel: 'Cykle smażenia (Użycia)',
    tempLabel: 'Temperatura smażenia',
    foodTypeLabel: 'Przygotowanie żywności / Panierka',
    optionStarch: 'Czysta skrobia (Ziemniaki, Frytki)',
    optionBreading: 'Potrawy panierowane, w cieście lub otoczkowane',
    baseSmokePointLabel: 'Początkowy punkt dymienia',
    currentSmokePointLabel: 'Obniżony punkt dymienia',
    polarCompoundsLabel: 'Związki polarne (TPC)',
    polymerizationLabel: 'Stan polimeryzacji oleju',
    statusLabel: 'Profil bezpieczeństwa oleju',
    statusGood: 'BEZPIECZNY DO PONOWNEGO UŻYCIA',
    statusCaution: 'UWAGA - PRZEFILTRUJ WKRÓTCE',
    statusDiscard: 'WYRZUĆ NATYCHMIAST',
    adviceGood: 'Właściwości oleju są stabilne. Kontynuuj smażenie, ale odfiltruj resztki jedzenia po ostygnięciu.',
    adviceCaution: 'Rozpoczęła się degradacja. Punkt dymienia spadł. Zalecamy filtrację i użycie tylko jeszcze jeden raz.',
    adviceDiscard: 'Osiągnięto krytyczną degradację. Wysokie stężenie związków polarnych. Wyrzuć, aby zapobiec jełczeniu i zagrożeniom dla zdrowia.',
    gaugeSafe: 'Bezpieczny',
    gaugeCaution: 'Ostrzeżenie',
    gaugeDiscard: 'Wyrzucić',
    limitLabel: 'Limit',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Chemia głębokiego smażenia: Dlaczego oleje ulegają degradacji',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Głębokie smażenie jest jedną z najbardziej intensywnych chemicznie technik kulinarnych. Gdy żywność jest zanurzana w oleju w wysokich temperaturach (zazwyczaj między 160 a 190 stopni Celsjusza), olej jest jednocześnie narażony na działanie ciepła, wilgoci z żywności i tlenu z powietrza. Wywołuje to trzy odrębne reakcje chemiczne: hydrolizę (woda rozrywa wiązania estrowe), utlenianie (tlen tworzy wodoronadtlenki) i polimeryzację (zdegradowane cząsteczki łączą się w gęste, lepkie łańcuchy). W miarę postępu tych reakcji stężenie całkowitych związków polarnych (TPC) wzrasta, a temperatura, w której olej zaczyna się rozpadać i dymić, znacznie spada.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '25% TPC', label: 'Prawny limit wyrzucenia', icon: 'mdi:alert-octagon' },
        { value: '180°C', label: 'Krytyczny próg temperatury', icon: 'mdi:thermometer-alert' },
        { value: '2,2x', label: 'Tempo rozpadu przy panierce', icon: 'mdi:chart-timeline-variant' },
        { value: 'FFA', label: 'Wolne kwasy tłuszczowe powodują', icon: 'mdi:molecule' },
      ],
    },
    {
      type: 'title',
      text: 'Związki polarne i regulacje zdrowotne',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Całkowite związki polarne (TPC) służą jako międzynarodowy standard pomiaru poziomu degradacji tłuszczów do smażenia. W profesjonalnych kuchniach używanie oleju o stężeniu TPC przekraczającym 25% jest prawnie zabronione w kilku krajach ze względów bezpieczeństwa. Te związki polarne są inhibitorami wchłaniania, zmniejszają wydajność gotowania i pogarszają chrupkość smażonej skórki. Co ważniejsze, regularne spożywanie utlenionego oleju przyczynia się do przyjmowania wolnych rodników i toksycznych związków, które są powiązane z problemami sercowo-naczyniowymi.',
    },
    {
      type: 'title',
      text: 'Porównanie rodzajów olejów: Początkowe punkty dymienia',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Oleje rafinowane (Wysokotemperaturowe)',
          icon: 'mdi:shield-check',
          description: 'Oleje przetworzone w celu usunięcia związków lotnych, wolnych kwasów tłuszczowych i zanieczyszczeń. Mają wyjątkowo wysokie początkowe punkty dymienia.',
          points: ['Awokado rafinowane: 270°C / 518°F', 'Słonecznik rafinowany: 232°C / 450°F', 'Arachidowy rafinowany: 232°C / 450°F', 'Wysoka odporność na początkowy rozkład'],
        },
        {
          title: 'Oleje nierafinowane (Niskotemperaturowe / Aromatyczne)',
          icon: 'mdi:leaf',
          description: 'Oleje tłoczone na zimno lub virgin zawierające duże ilości naturalnych składników, minerałów i wolnych kwasów tłuszczowych.',
          highlight: true,
          points: ['Oliwa Extra Virgin: 190°C / 374°F', 'Kokosowy nierafinowany: 177°C / 350°F', 'Słonecznik nierafinowany: 107°C / 225°F', 'Degraduje się wyjątkowo szybko pod wpływem ciepła'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tabela referencyjna punktu dymienia oleju do smażenia i maksymalnego ponownego użycia',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Odmiana oleju', 'Początkowy punkt dymienia (°C)', 'Początkowy punkt dymienia (°F)', 'Stan / Przetworzenie', 'Zalecana maks. liczba użyć'],
      rows: [
        ['Olej z awokado (Rafinowany)', '270°C', '518°F', 'Rafinowany', '10 do 12 użyć'],
        ['Olej z wytłoków oliwnych', '238°C', '460°F', 'Rafinowany', '8 do 10 użyć'],
        ['Olej słonecznikowy (Rafinowany)', '232°C', '450°F', 'Rafinowany', '6 do 8 użyć'],
        ['Olej arachidowy (Rafinowany)', '232°C', '450°F', 'Rafinowany', '6 do 8 użyć'],
        ['Olej rzepakowy (Rafinowany)', '204°C', '400°F', 'Rafinowany', '5 do 7 użyć'],
        ['Oliwa z oliwek Extra Virgin', '190°C', '374°F', 'Tłoczona na zimno', '2 do 3 użyć'],
        ['Olej kokosowy (Nierafinowany)', '177°C', '350°F', 'Nierafinowany', '1 do 2 użyć'],
        ['Olej słonecznikowy (Nierafinowany)', '107°C', '225°F', 'Nierafinowany', 'Nie używać do głębokiego smażenia'],
      ],
    },
    {
      type: 'title',
      text: 'Krytyczne oznaki ostrzegawcze zdegradowanego oleju',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Niebezpieczeństwo: Gdy olej do smażenia staje się toksyczny',
      html: 'Nie kontynuuj ponownego używania oleju, jeśli zaobserwujesz którykolwiek z poniższych objawów: <strong>zjełczały lub mydlany zapach</strong>, ciemny i mętny kolor lub <strong>nadmierne pienienie się</strong> wokół jedzenia. Jeśli olej zaczyna dymić w normalnych temperaturach gotowania (170-180°C), oznacza to, że punkt dymienia gwałtownie spadł z powodu ekstremalnego nagromadzenia wolnych kwasów tłuszczowych (FFA). Gotowanie na zdegradowanym oleju przenosi toksyczne związki polarne i rakotwórcze pierwiastki do żywności, szkodząc zarówno smakowi, jak i zdrowiu.',
    },
    {
      type: 'title',
      text: 'Jak przedłużyć jakość oleju do smażenia',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Natychmiast odfiltruj zwęglone pozostałości',
      html: 'Smażenie potraw panierowanych lub mącznych pozostawia mikrocząsteczki, które osiadają na dnie frytkownicy. Cząsteczki te nadal się zwęglają podczas gotowania, działając jako katalizatory przyspieszające rozkład oleju. Aby spowolnić ten proces, zawsze zbieraj szumowiny z powierzchni podczas smażenia i <strong>filtruj ostudzony olej</strong> przez drobne sito, gazę lub filtr do kawy po każdej sesji smażenia. Przechowuj przefiltrowany olej w szczelnym szklanym pojemniku w ciemnym, chłodnym miejscu.',
    },
    {
      type: 'title',
      text: 'Najlepsze praktyki głębokiego smażenia',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Dokładnie osusz powierzchnie żywności</strong> - Nadmiar wilgoci wywołuje szybką hydrolizę, rozkładając olej na wolne kwasy tłuszczowe.',
        '<strong>Unikaj solenia przed smażeniem</strong> - Sól działa jako katalizator przyspieszający utlenianie oleju; przyprawiaj potrawy natychmiast po wyjęciu z gorącego oleju.',
        '<strong>Utrzymuj optymalne temperatury</strong> - Trzymaj się między 170°C a 180°C. Wyższe temperatury przyspieszają rozkład termiczny, podczas gdy niższe powodują, że żywność wchłania nadmiar tłuszczu.',
        '<strong>Nie dolewaj świeżego oleju do starego</strong> - Mieszanie świeżego oleju ze zdegradowanym przyspiesza rozkład nowego oleju, zamiast go odświeżać.',
      ],
    },
    {
      type: 'title',
      text: 'Słownik głębokiego smażenia i degradacji lipidów',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Punkt dymienia', definition: 'Temperatura, w której olej lub tłuszcz zaczyna się nieprzerwanie rozpadać i wytwarzać widoczny niebieskawy dym, uwalniając akroleinę.' },
        { term: 'Całkowite związki polarne (TPC)', definition: 'Globalny standardowy wskaźnik degradacji oleju, reprezentujący całkowity procent wagowy utlenionych związków, FFA i polimerów.' },
        { term: 'Hydroliza', definition: 'Reakcja chemiczna, w której cząsteczki wody rozkładają triglicerydy na wolne kwasy tłuszczowe i glicerol. Wywoływana przez wilgoć z żywności.' },
        { term: 'Polimeryzacja', definition: 'Proces, w którym uszkodzone termicznie cząsteczki oleju łączą się, tworząc duże struktury makromolekularne, zwiększając lepkość oleju.' },
        { term: 'Wolne kwasy tłuszczowe (FFA)', definition: 'Kwasy karboksylowe uwalniane z triglicerydów podczas hydrolizy. Bezpośrednio obniżają początkowy punkt dymienia tłuszczu.' },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
