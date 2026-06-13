import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Optymalizator Reakcji Maillarda: Kalkulator Brązowienia pH i Temperatury';
const description = 'Oblicz dokładnie, ile sody oczyszczonej dodać na kilogram żywności, aby przyspieszyć reakcję Maillarda. Unikaj mydlanych posmaków, pozostając w bezpiecznych granicach zasadowości.';

const faq = [
  {
    question: 'Czym jest reakcja Maillarda i dlaczego ma znaczenie w gotowaniu?',
    answer: 'Reakcja Maillarda to reakcja chemiczna między aminokwasami a cukrami redukującymi, która nadaje zrumienionej żywności jej charakterystyczny smak. Odpowiada za skórkę na obsmażanym steku, złocisty kolor chleba, paloną kawę i karmelizowaną cebulę. Reakcja przebiega najszybciej w temperaturze od 140°C do 165°C.',
  },
  {
    question: 'Jak soda oczyszczona (wodorowęglan sodu) przyspiesza brązowienie?',
    answer: 'Soda oczyszczona podnosi pH powierzchni żywności, czyniąc ją bardziej zasadową. Reakcja Maillarda przebiega znacząco szybciej w środowisku zasadowym. Podniesienie pH z 6 do 8 może podwoić, a nawet potroić szybkość brązowienia. Jednak zbyt duża ilość sody powoduje metaliczny, mydlany posmak  -  dlatego ten kalkulator wymusza bezpieczne limity.',
  },
  {
    question: 'Jaka jest maksymalna bezpieczna ilość sody oczyszczonej na kilogram żywności?',
    answer: 'Ogólny bezpieczny limit wynosi 1,5 grama sody oczyszczonej na kilogram żywności. Powyżej tego progu ryzyko nieprzyjemnych posmaków (metalicznych, mydlanych lub chemicznych) gwałtownie rośnie. Nasza zalecana ilość to połowa maksimum, co zapewnia znaczące przyspieszenie brązowienia przy minimalnym ryzyku dla smaku.',
  },
  {
    question: 'Co się dzieje, gdy temperatura jest zbyt niska dla reakcji Maillarda?',
    answer: 'Poniżej 110°C zachodzi głównie parowanie wody i nie występuje znaczące brązowienie Maillarda. Między 110°C a 140°C brązowienie zachodzi powoli. Optymalny zakres temperatury to 140°C do 180°C. Powyżej 180°C rozpoczyna się piroliza  -  żywność ulega spaleniu, wytwarzając gorzkie, gryzące związki zamiast pożądanych aromatów brązowienia.',
  },
];

const howTo = [
  {
    name: 'Zważ swoją żywność',
    text: 'Wprowadź całkowitą wagę żywności, którą chcesz zrumienić, w gramach.',
  },
  {
    name: 'Ustaw temperaturę gotowania',
    text: 'Wprowadź temperaturę powierzchni gotowania lub piekarnika. Optymalna strefa Maillarda to 140-180°C.',
  },
  {
    name: 'Dostosuj ilość sody oczyszczonej',
    text: 'Suwak domyślnie ustawiony jest na połowę bezpiecznego maksimum. Zwiększaj ostrożnie  -  kalkulator ostrzeże Cię, zanim osiągniesz niebezpieczną strefę.',
  },
  {
    name: 'Sprawdź szacowane pH i mnożnik prędkości',
    text: 'Kalkulator pokazuje, o ile szybciej zachodzi brązowienie przy wybranym poziomie pH w porównaniu do domyślnego pH 6.',
  },
  {
    name: 'Sprawdź poziom ryzyka dla smaku',
    text: 'Wskaźnik smaku pokazuje strefę bezpieczną, ostrzegawczą lub niebezpieczną na podstawie szacowanego pH powierzchni. Pozostań w zielonej strefie dla najlepszych rezultatów.',
  },
  {
    name: 'Rozprowadź sodę oczyszczoną równomiernie',
    text: 'Rozpuść zalecaną ilość w niewielkiej ilości wody i posmaruj lub wymieszaj z żywnością przed gotowaniem. Nierównomierne rozprowadzenie powoduje niejednolite brązowienie.',
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
  slug: 'optymalizator-reakcji-maillarda',
  title: 'Optymalizator Reakcji Maillarda',
  description: 'Oblicz dokładnie, ile sody oczyszczonej dodać na kilogram żywności, aby przyspieszyć reakcję Maillarda. Unikaj mydlanych posmaków, pozostając w bezpiecznych granicach zasadowości.',
  faqTitle: 'Często Zadawane Pytania',
  ui: {
    title: 'Optymalizator Reakcji Maillarda',
    headerLabel: 'Chemia Brązowienia',
    flavorSafe: 'Bezpieczne pH',
    flavorCaution: 'Uwaga: Zasadowe',
    flavorDanger: 'Niebezpieczeństwo: Ryzyko Mydlanego Smaku',
    unitLabel: 'Jednostki',
    metricUnit: 'Metryczne',
    imperialUnit: 'Imperialne',
    weightLabel: 'Waga Żywności',
    weightUnit: 'g',
    weightOz: 'oz',
    tempLabel: 'Temperatura Powierzchni',
    tempUnit: '°C',
    degreesF: '°F',
    tempLow: 'Wolne: {min} - {max}',
    tempOpt: 'Optymalne: {min} - {max}',
    tempHigh: 'Piroliza: >{min}',
    sodaLabel: 'Soda Oczyszczona',
    sodaUnit: 'g',
    sodaOz: 'oz',
    sodaNote: 'Połowa bezpiecznego maksimum, łagodne przyspieszenie brązowienia',
    sodaCautionNote: 'Zbliżanie się do maksimum, uważnie monitoruj smak',
    sodaDangerNote: 'Przekracza bezpieczne maksimum, ryzyko mydlanego posmaku',
    sodaRecommended: 'Zalecana Soda Oczyszczona',
    sodaMax: 'Bezpieczne Maksimum',
    speedLabel: 'Szybkość Reakcji',
    browningLabel: 'Postęp Brązowienia',
    rawLabel: 'Surowy',
    goldenLabel: 'Złocisty',
    burntLabel: 'Spalony',
    phEstimated: 'Szac. pH Powierzchni',
    timeSaved: 'Zaoszczędzony Czas',
    errorTempTooLow: 'Temperatura jest poniżej 110°C. Reakcja Maillarda wymaga co najmniej 110°C, aby się rozpocząć. Poniżej tego progu zachodzi tylko parowanie wody bez znaczącego brązowienia.',
    errorWeightTooLow: 'Waga żywności musi być większa niż 0g.',
    footerTemplate: '<span class="mr-footer-stat"><strong>{weight}</strong><small>{wunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">przy <strong>{temp}</strong><small>{tunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{soda}</strong><small>{sunit}</small> sody oczyszczonej</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">x<strong>{multiplier}</strong> prędkości</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{timeSaved}</strong>% zaoszczędzone</span>',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Optymalizator Reakcji Maillarda: Opanuj Naukę Brązowienia',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Reakcja Maillarda to Święty Graal kuchni wytrawnej. Tworzy głębokie, złożone smaki obsmażanego steku, złocistej skórki chleba i karmelizowanej cebuli. Nazwana na cześć francuskiego chemika Louisa-Camille\'a Maillarda, ta reakcja między aminokwasami a cukrami redukującymi wytwarza setki związków smakowych. Manipulując pH za pomocą sody oczyszczonej, możesz <strong>podwoić lub potroić</strong> szybkość brązowienia bez przypalania. Ten kalkulator pokazuje dokładnie, ile użyć, i ostrzega przed przekroczeniem granicy mydlanego posmaku.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '~140°C', label: 'Temperatura aktywacji Maillarda', icon: 'mdi:thermometer' },
        { value: '2-3x', label: 'Wzrost prędkości przy pH 8', icon: 'mdi:speedometer' },
        { value: '1,5 g/kg', label: 'Maks. bezpieczna ilość sody', icon: 'mdi:scale' },
        { value: 'pH 8,5', label: 'Próg mydlanego smaku', icon: 'mdi:alert-circle' },
      ],
    },
    {
      type: 'title',
      text: 'Tabela Dawkowania Sody Oczyszczonej według Wagi Żywności',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Skorzystaj z tej tabeli referencyjnej, aby szybko określić zalecane i maksymalne ilości sody oczyszczonej dla typowych wag żywności. Zalecana ilość to <strong>połowa bezpiecznego maksimum</strong>, zapewniająca zauważalne przyspieszenie brązowienia przy minimalnym ryzyku dla smaku.',
    },
    {
      type: 'table',
      headers: ['Waga Żywności', 'Zalecana (g)', 'Bezp. Maks. (g)', 'Szac. pH', 'Wzrost Prędkości'],
      rows: [
        ['250g (1 cebula)', '0,19 g', '0,38 g', '6,5', 'x1,2'],
        ['500g (2 cebule)', '0,38 g', '0,75 g', '6,5', 'x1,2'],
        ['750g (3 cebule)', '0,56 g', '1,13 g', '6,5', 'x1,2'],
        ['1000g (1 kg)', '0,75 g', '1,50 g', '7,0', 'x1,6'],
        ['1500g', '1,13 g', '2,25 g', '7,0', 'x1,6'],
        ['2000g', '1,50 g', '3,00 g', '7,0', 'x2,0'],
        ['3000g', '2,25 g', '4,50 g', '7,0', 'x2,0'],
        ['5000g', '3,75 g', '7,50 g', '7,0', 'x2,0'],
      ],
    },
    {
      type: 'title',
      text: 'Zrozumienie pH Powierzchni i Jego Wpływu na Brązowienie',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Neutralne pH (6,0)',
          icon: 'mdi:water',
          description: 'Naturalne pH większości surowego mięsa i warzyw. Reakcja Maillarda przebiega z bazową prędkością.',
          highlight: false,
          points: ['Prędkość reakcji: x1,0 (bazowa)', 'Całkowicie naturalnie, bez dodatków', 'Najlepsze dla: purystów, metod tradycyjnych', 'Wolniejsze brązowienie, więcej czasu na kontrolę wysmażenia'],
        },
        {
          title: 'Łagodnie Zasadowe (pH 7,0 do 7,5)',
          icon: 'mdi:flask-round-bottom',
          description: 'Osiągane przy zalecanej ilości sody oczyszczonej. Zauważalny wzrost prędkości bez wpływu na smak.',
          highlight: true,
          points: ['Prędkość reakcji: x1,5-2,0', '½ łyżeczki na kg (ok. 0,75g)', 'Najlepsze dla: karmelizowanej cebuli, pieczonych warzyw', 'Idealny punkt dla większości kucharzy domowych'],
        },
        {
          title: 'Silnie Zasadowe (pH 8,0 do 8,5)',
          icon: 'mdi:alert',
          description: 'Maksymalna praktyczna zasadowość przed pojawieniem się wad smakowych. Podwaja prędkość brązowienia, ale wymaga uważnego monitorowania.',
          highlight: false,
          points: ['Prędkość reakcji: x2,0-3,0', '1 łyżeczka na kg (ok. 1,5g)', 'Najlepsze dla: ciemnych skórek precli, ekstremalnej karmelizacji', 'Spróbuj przed podaniem  -  na granicy mydlanego smaku'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Strefy Temperaturowe i Ich Znaczenie dla Brązowienia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Temperatura to druga kluczowa zmienna dla reakcji Maillarda. Każda strefa daje zasadniczo inne rezultaty. Zrozumienie tych progów pomaga wybrać właściwy poziom ciepła do celu kulinarnego.',
    },
    {
      type: 'table',
      headers: ['Strefa', 'Zakres Temp.', 'Co Się Dzieje', 'Najlepsze Do'],
      rows: [
        ['Parowanie', 'Poniżej 110°C', 'Woda paruje, brak brązowienia', 'Sous vide, gotowanie w wodzie, gotowanie na parze'],
        ['Wolne Brązowienie', '110-139°C', 'Maillard zaczyna się powoli, delikatny rozwój koloru', 'Wolno pieczone pomidory, suszenie w niskiej temperaturze'],
        ['Strefa Optymalna', '140-180°C', 'Maksymalna prędkość brązowienia bez przypalania', 'Obsmażanie, pieczenie, smażenie, wypiekanie'],
        ['Piroliza', 'Powyżej 180°C', 'Rozpoczyna się przypalanie, tworzą się gorzkie, gryzące związki', 'Szybkie opalanie dla akcentu smakowego (używaj oszczędnie)'],
      ],
    },
    {
      type: 'title',
      text: 'Częste Błędy w Reakcji Maillarda i Jak Ich Uniknąć',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Dodawanie zbyt dużej ilości sody oczyszczonej',
      html: 'W przypadku sody oczyszczonej więcej nie znaczy lepiej. Przekroczenie 1,5g na kilogram żywności wprowadza metaliczny, mydlany lub chemiczny posmak. Związki smakowe powstające przy nadmiernej zasadowości nie są tym samym, co bogate, wytrawne nuty prawidłowego brązowienia Maillarda. <strong>Trzymaj się zalecanej ilości wskazanej przez kalkulator.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Gotowanie w zbyt niskiej temperaturze',
      html: 'Poniżej 110°C zasadniczo gotujesz na parze lub suszysz żywność  -  nie rumienisz jej. Reakcja Maillarda ma minimalną temperaturę aktywacji. Jeśli chcesz głębokich, złożonych smaków, <strong>powierzchnia żywności musi osiągnąć co najmniej 140°C.</strong> Użyj metody gotowania w wysokiej temperaturze, takiej jak obsmażanie, opiekanie lub pieczenie w piekarniku powyżej 180°C.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ignorowanie wilgoci',
      html: 'Woda jest wrogiem reakcji Maillarda. Mokre powierzchnie nie mogą przekroczyć 100°C, dopóki woda nie odparuje. Zawsze <strong>dokładnie osusz żywność</strong> przed obsmażaniem. Soda oczyszczona pomaga, ponieważ przyspiesza również odparowywanie wody powierzchniowej poprzez rozbijanie ścian komórkowych, ale nie poradzi sobie z widocznie mokrą żywnością. Suche powierzchnie = lepsze brązowienie.',
    },
    {
      type: 'title',
      text: 'Wskazówki Profesjonalistów dla Idealnego Brązowienia',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Technika Zawiesiny z Sody Oczyszczonej',
      html: 'Nigdy nie posypuj suchą sodą oczyszczoną bezpośrednio na żywność  -  nie rozprowadzi się równomiernie. Rozpuść odmierzoną ilość w 1-2 łyżkach ciepłej wody, a następnie posmaruj lub wymieszaj zawiesinę z żywnością. Zapewnia to jednolitą zasadowość na całej powierzchni dla równego, spójnego brązowienia.',
    },
    {
      type: 'tip',
      title: 'Połącz Sodę Oczyszczoną z Soleniem na Sucho',
      html: 'Soda oczyszczona i sól działają synergistycznie. Natrzyj mięso solą na sucho na 1-24 godziny przed gotowaniem, a następnie nałóż zawiesinę z sody oczyszczonej tuż przed kontaktem z ciepłem. Sól wyciąga białka uczestniczące w reakcji Maillarda, a soda oczyszczona ją przyspiesza. Ta kombinacja daje najgłębszą, najbogatszą skórkę.',
    },
    {
      type: 'tip',
      title: 'Sztuczka na Karmelizację Cebuli',
      html: 'Szczypta sody oczyszczonej (0,3g na dużą cebulę) może skrócić czas karmelizacji z 45 minut do 20 minut. Środowisko zasadowe szybciej rozbija ściany komórkowe cebuli, uwalniając cukry i aminokwasy napędzające reakcję Maillarda. Ale bądź precyzyjny  -  zbyt dużo sody zamienia cebulę w papkę z chemicznym posmakiem.',
    },
    {
      type: 'title',
      text: 'Glosariusz Kluczowych Pojęć Brązowienia',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Reakcja Maillarda', definition: 'Nieenzymatyczna reakcja chemiczna między aminokwasami a cukrami redukującymi, która tworzy brązowy kolor i złożone wytrawne smaki w gotowanej żywności. Zachodzi powyżej 110°C i różni się od karmelizacji.' },
        { term: 'Piroliza', definition: 'Termiczny rozkład materii organicznej w wysokich temperaturach (powyżej 180°C). W przeciwieństwie do brązowienia Maillarda, piroliza wytwarza gorzkie, gryzące, a czasem rakotwórcze związki. To właśnie dzieje się, gdy żywność się przypala.' },
        { term: 'pH', definition: 'Skala od 0 do 14 mierząca kwasowość (niskie) lub zasadowość (wysokie). Neutralne to 7. Większość surowej żywności ma pH między 5,5 a 6,5. Soda oczyszczona podnosi pH do poziomu zasadowego, przyspieszając reakcję Maillarda.' },
        { term: 'Wodorowęglan Sodu', definition: 'Soda oczyszczona  -  biały krystaliczny proszek (NaHCO₃) działający jako łagodna zasada. W gotowaniu podnosi pH powierzchni, przyspiesza brązowienie, zmiękcza mięso i pomaga warzywom zachować kolor podczas gotowania.' },
        { term: 'Zasadowość', definition: 'Zdolność roztworu do neutralizowania kwasów. W kontekście przyspieszania Maillarda zasadowość odnosi się do wartości pH powyżej 7,0. Nadmierna zasadowość powoduje gorzkie, mydlane posmaki.' },
        { term: 'Mnożnik Prędkości Reakcji', definition: 'Określa, ile razy szybciej przebiega reakcja Maillarda w porównaniu do poziomu bazowego (pH 6). Mnożnik x2,0 oznacza, że brązowienie zachodzi dwukrotnie szybciej, efektywnie skracając o połowę czas potrzebny do uzyskania tego samego koloru.' },
        { term: 'pH Powierzchni', definition: 'pH na samej powierzchni żywności, gdzie zachodzi reakcja Maillarda, a nie pH wewnętrzne. Soda oczyszczona wpływa głównie na pH powierzchni, ponieważ nie wnika głęboko w żywność podczas krótkiego czasu gotowania.' },
      ],
    },
    {
      type: 'title',
      text: 'Szybki Poradnik: Soda Oczyszczona do Popularnych Potraw',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Zalecane ilości sody oczyszczonej do codziennego gotowania',
      items: [
        'Karmelizowana cebula (1 duża): 0,3g sody  -  skraca czas z 45 do ~20 minut',
        'Pieczone ziemniaki (500g): 0,4g sody  -  bardziej chrupiąca, złocista powierzchnia',
        'Stek smażony na patelni (250g): 0,2g sody  -  ciemniejsza skórka w krótszym czasie',
        'Skrzydełka z kurczaka (1kg): 0,75g sody  -  bardziej chrupiąca skórka, szybsze brązowienie',
        'Ciasto na precle (500g mąki): 1,5g sody  -  głęboko brązowa skórka po kąpieli alkalicznej',
        'Pieczone warzywa (1kg mieszanki): 0,75g sody  -  bardziej jednolita karmelizacja',
      ],
    },
    {
      type: 'paragraph',
      html: 'Każda żywność ma inny idealny poziom zasadowości w zależności od naturalnego pH i zawartości wilgoci. Ten kalkulator eliminuje zgadywanie  -  wprowadź dokładną wagę żywności i temperaturę, a otrzymasz precyzyjną ilość sody oczyszczonej do idealnego brązowienia za każdym razem.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
