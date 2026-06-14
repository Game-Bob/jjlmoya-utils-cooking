import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator Sody Oczyszczonej i Proszku do Pieczenia: Neutralizator Kwasow Zaczynu";
const description = "Oblicz dokladna proporcje sody oczyszczonej i proszku do pieczenia dla swojego przepisu. Neutralizuj kwasne skladniki, takie jak maslanka i jogurt, unikaj metalicznego posmaku i osiagaj idealne wyrosniecie za kazdym razem.";
const faq = [
  {
    question: "Dlaczego zastepowanie proszku do pieczenia soda wymaga dodatku kwasu?",
    answer: "Soda oczyszczona jest czysta zasada. Do aktywacji i uwolnienia dwutlenku wegla potrzebuje zrodla kwasu. Bez wystarczajacej ilosci kwasu soda nie przereaguje calkowicie, pozostawiajac gorzki, metaliczny posmak w wypiekach."
  },
  {
    question: "Jaka jest roznica miedzy soda oczyszczona a proszkiem do pieczenia?",
    answer: "Soda oczyszczona to 100% weglan sodu, czyli zasada. Proszek do pieczenia to pelny srodek spulchniajacy, zawierajacy sode, suchy skladnik zakwaszajacy (np. winian potasu) i skrobie. Proszek do pieczenia jest samoneutralizujacy."
  },
  {
    question: "Ile proszku do pieczenia odpowiada 1 lyzeczce sody oczyszczonej?",
    answer: "Soda oczyszczona jest okolo 3-4 razy silniejsza niz proszek do pieczenia. Aby zastepic 1 lyzeczke sody, potrzebujesz okolo 3-4 lyzeczek proszku do pieczenia. Jednak to zastepstwo dodaje rowniez sole kwasowe, ktore moga zmienic smak, dlatego najlepiej uzyc naszego kalkulatora do precyzyjnych przeliczen."
  },
  {
    question: "Dlaczego moje ciasto ma mydlany lub metaliczny posmak?",
    answer: "Mydlany lub metaliczny posmak to klasyczny objaw nieprzereagowanej sody oczyszczonej. Gdy w ciescie nie ma wystarczajacej ilosci kwasu, aby calkowicie zneutralizowac weglan sodu, alkaliczne pozostalosci utrzymuja sie po upieczeniu, nadajac ten nieprzyjemny chemiczny smak. Uzyj naszego kalkulatora, aby zapewnic pelna neutralizacje."
  },
  {
    question: "Czy moge uzyc kakao alkalizowanego jako skladnika kwasowego?",
    answer: "Nie. Kakao alkalizowane (typu holenderskiego) zostalo poddane dzialaniu srodka alkalizujacego, ktory zmniejsza jego naturalna kwasowosc (pH ~7-8). Tylko naturalne kakao w proszku (pH ~5-6) jest kwasne i zneutralizuje sode oczyszczona."
  },
  {
    question: "Jak soda oczyszczona wplywa na brazowienie wypiekow?",
    answer: "Soda oczyszczona podnosi pH ciasta, czyniac je bardziej zasadowym. Wyzsze pH przyspiesza reakcje brazowienia Maillarda, co daje ciemniejsza skorke i glebszy smak w ciastkach i biszkoptach."
  }
];

const howTo = [
  {
    name: "Wprowadz wage maki",
    text: "Podaj calkowita wage maki w swoim przepisie w gramach lub uncjach, aby obliczyc wymagana calkowita sile spulchniania."
  },
  {
    name: "Dodaj skladniki kwasowe",
    text: "Wybierz kwasne skladniki swojego przepisu (takie jak maslanka, jogurt lub sok z cytryny) i podaj ich wagi."
  },
  {
    name: "Sprawdz rownowage pH",
    text: "Obserwuj wirtualna wage pH. Zrownowazona waga wskazuje optymalna neutralizacje bez metalicznych posmakow."
  },
  {
    name: "Odmierz srodki spulchniajace",
    text: "Odczytaj zalecana ilosc sody oczyszczonej do neutralizacji oraz niezbedne wzmocnienie proszkiem do pieczenia, aby osiagnac docelowe wyrosniecie."
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
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'neutralizator-kwasu-proszek-do-pieczenia',
  title: 'Neutralizator Kwasow Zaczynu',
  description: 'Oblicz dokladna proporcje sody oczyszczonej i proszku do pieczenia dla swojego przepisu. Neutralizuj kwasne skladniki, takie jak maslanka i jogurt, unikaj metalicznego posmaku i osiagaj idealne wyrosniecie za kazdym razem.',
  faqTitle: 'Najczesciej Zadawane Pytania',
  ui: {
    title: "Neutralizator Kwasow Zaczynu",
    subtitle: "Precyzyjna stechiometria dla idealnego wyrosniecia i smaku wypiekow",
    flourLabel: "Waga Maki",
    addAcidLabel: "Dodaj Skladnik Kwasowy",
    weightLabel: "Waga",
    removeButton: "Usun",
    bakingSodaNeeded: "Soda do Neutralizacji",
    requiredBakingPowder: "Docelowe Spulchnianie",
    providedBakingPowderEquivalent: "Spulchnianie z Sody",
    boosterBakingPowder: "Wzmocnienie Proszkiem do Pieczenia",
    resultsTitle: "Obliczone Srodki Spulchniajace",
    statusBalanced: "Zrownowazone",
    statusAcidic: "Nadmiar Kwasu",
    statusAlkaline: "Nadmiar Zasady",
    gramsUnit: "g",
    ouncesUnit: "oz",
    teaspoonsUnit: "lyzeczka",
    scaleBalanceTitle: "Wirtualna Waga pH",
    acidListTitle: "Skladniki Kwasowe",
    unitLabel: "System Miary",
    metricUnit: "Metryczny (g)",
    imperialUnit: "Imperialny (oz)",
    acid_buttermilk: "Maslanka",
    acid_yogurt: "Jogurt",
    acid_sour_cream: "Smietana",
    acid_honey: "Miod",
    acid_molasses: "Melasa",
    acid_cocoa: "Naturalne Kakao w Proszku",
    acid_lemon_juice: "Sok z Cytryny",
    acid_vinegar: "Ocet",
    stoichiometryBadge: "Stechiometria pH",
    simulateSodaLabel: "Symuluj dodaną sodę",
    autoBalanceBtn: "Automatyczny bilans",
    sodaAddedLabel: "Dodana soda"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: 'Kluczowe Wskazowki dla Idealnego Spulchniania',
      items: [
        'Soda oczyszczona potrzebuje kwasu do aktywacji; bez niego wypiek bedzie mial mydlany i metaliczny posmak',
        'Proszek do pieczenia jest samoneutralizujacy i zapewnia dodatkowa sile spulchniania jako wzmocnienie',
        'Standardowym celem jest 4% wagi maki w ekwiwalencie proszku do pieczenia dla prawidlowego wyrosniecia',
        'Uzyj ponizszej tabeli neutralizacji, aby dopasowac kwasne skladniki do odpowiedniej ilosci sody oczyszczonej'
      ]
    },
    {
      type: 'title',
      text: 'Chemia Srodkow Spulchniajacych w Wypiekach',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Spulchnianie chemiczne opiera sie na <strong>reakcjach neutralizacji kwasowo-zasadowej</strong>, w wyniku ktorych powstaje dwutlenek wegla (CO2), uwieziony w strukturze ciasta i powodujacy jego wzrost podczas pieczenia. Osiagniecie prawidlowej proporcji miedzy weglanem sodu (soda oczyszczona) a skladnikami kwasowymi jest kluczowe. <strong>Zbyt duzo sody</strong> prowadzi do nieprzereagowanych alkalicznych pozostalosci, ktore nadaja mydlany, metaliczny smak i zolte przebarwienia. <strong>Zbyt duzo kwasu</strong> moze skutkowac gestym, plaskim wypiekiem o malej objetosci.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '3-4x',
          label: 'Soda silniejsza niz proszek do pieczenia',
          icon: 'mdi:flash'
        },
        {
          value: '4%',
          label: 'Docelowe spulchnianie (% wagi maki)',
          icon: 'mdi:target'
        },
        {
          value: '1/4 lyzeczki',
          label: 'Sody na 120g maslanki/jogurtu',
          icon: 'mdi:spoon-sugar'
        },
        {
          value: '0.0125',
          label: 'Wspolczynnik neutralizacji (kwasy mleczne)',
          icon: 'mdi:scale-balance'
        }
      ]
    },
    {
      type: 'title',
      text: 'Soda Oczyszczona a Proszek do Pieczenia: Pelne Porownanie',
      level: 3
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Soda Oczyszczona',
          icon: 'mdi:flask-outline',
          description: 'Czysty weglan sodu (NaHCO3). Silna zasada alkaliczna, ktora do aktywacji i produkcji CO2 wymaga zewnetrznego kwasu.',
          points: [
            '3-4x silniejsza niz proszek do pieczenia',
            'Potrzebuje kwasu (maslanka, jogurt, sok z cytryny) do reakcji',
            'Nadmiar powoduje mydlany, metaliczny smak i zolty miasz',
            'Podnosi pH; wzmaga brazowienie Maillarda w ciastkach',
            'Dzialanie pojedyncze: uwalnia CO2 natychmiast po wymieszaniu'
          ]
        },
        {
          title: 'Proszek do Pieczenia',
          icon: 'mdi:flask-round-bottom-outline',
          description: 'Kompletny system spulchniajacy zawierajacy sode + suche sole kwasowe + skrobie. Samoneutralizujacy i niezawodny.',
          highlight: true,
          points: [
            'Zawiera wlasny kwas (fosforan jednowapniowy, SAP)',
            'Dzialanie podwojne: uwalnia CO2 przy mieszaniu ORAZ przy ogrzewaniu',
            'Bez metalicznego posmaku; pH juz zrownowazone',
            'Slabszy na gram; uzyj 3-4x wiecej, aby dorownac sodzie',
            'Najlepszy jako wzmocnienie, gdy sama soda nie moze spulchnic calej maki'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Skladnik Kwasowy', 'Waga Standardowa', 'Soda do Neutralizacji', 'Wspol. Neutralizacji'],
      rows: [
        ['Maslanka / Jogurt / Smietana', '120g (1/2 szklanki)', '1.5g (1/4 lyzeczki)', '0.0125'],
        ['Sok z Cytryny / Ocet', '15g (1 lyzka)', '1.5g (1/4 lyzeczki)', '0.1000'],
        ['Naturalne Kakao w Proszku', '80g (1 szklanka)', '3.0g (1/2 lyzeczki)', '0.0375'],
        ['Miod', '340g (1 szklanka)', '3.0g (1/2 lyzeczki)', '0.0088'],
        ['Melasa', '328g (1 szklanka)', '3.0g (1/2 lyzeczki)', '0.0091']
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Rozwiazywanie Problemow: Czy Twoje Spulchnianie Jest Niezrownowazone?',
      badge: 'Szybkie Sprawdzenie',
      html: '<strong>Jesli ciasto opadlo:</strong> Za duzo kwasu lub za malo srodka spulchniajacego ogolem; CO2 uciekl, zanim struktura sie ustabilizowala.<br/><br/><strong>Jesli ciasto jest geste i plaskie:</strong> Nadmiar kwasu bez wystarczajacej ilosci sody do neutralizacji lub niewystarczajaca calkowita sila spulchniania w stosunku do wagi maki.<br/><br/><strong>Jesli ciasto ma smak mydlany lub metaliczny:</strong> Nadmiar nieprzereagowanej sody oczyszczonej; dodaj wiecej skladnikow kwasowych lub zmniejsz ilosc sody.<br/><br/><strong>Jesli ciasto ma zolte plamki:</strong> Klasyczny objaw nierozpuszczonych, nieprzereagowanych grudek sody; nastepnym razem przesiej sode razem z maka.'
    },
    {
      type: 'title',
      text: 'Jak Zrownowazyc Srodki Spulchniajace i Uniknac Metalicznego Posmaku',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Aby osiagnac optymalny smak i wyrosniecie, postepuj zgodnie z tym procesem: <strong>Po pierwsze</strong>, okresl ilosc sody oczyszczonej potrzebna do calkowitego zneutralizowania kwasowych skladnikow ciasta, korzystajac z powyzszej tabeli. <strong>Nastepnie</strong>, przelicz te sode na ekwiwalent proszku do pieczenia (pomnoz przez 4) i porownaj z calkowita sila spulchniania potrzebna dla twojej maki; zazwyczaj <strong>4% wagi maki</strong> w ekwiwalencie proszku do pieczenia. <strong>Jesli wystepuje niedobor</strong>, dodaj pozostala sile spulchniania w postaci neutralnego proszku do pieczenia jako wzmocnienie. Nasz kalkulator robi to wszystko automatycznie.'
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        'Nigdy nie zastepuj sody proszkiem do pieczenia w stosunku 1:1; soda jest 3-4x silniejsza i potrzebuje kwasu',
        'Zawsze przesiewaj sode z suchymi skladnikami, aby uniknac gorzkich grudek',
        'Kakao alkalizowane NIE jest kwasne; uzywaj naturalnego kakao w proszku, jesli polegasz na kakao jako zrodle kwasu',
        'Miod i melasa sa lekko kwasne; potrzebuja znacznie mniej sody na gram niz sok z cytryny',
        'Pracuj szybko po wymieszaniu: spulchnianie chemiczne zaczyna reagowac natychmiast po kontakcie z plynami'
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Wspolczynnik Neutralizacji',
          definition: 'Proporcja sody oczyszczonej potrzebna do calkowitego zneutralizowania danej wagi skladnika kwasowego. Nizsze wspolczynniki oznaczaja, ze skladnik jest mniej kwasny na gram.'
        },
        {
          term: 'Sila Spulchniania',
          definition: 'Calkowita ilosc CO2, jaka moze wytworzyc srodek spulchniajacy. Mierzona w ekwiwalentach proszku do pieczenia, gdzie 4% wagi maki to standardowy cel dla biszkoptow i muffinek.'
        },
        {
          term: 'Proszek do Pieczenia o Podwojnym Dzialaniu',
          definition: 'Proszek do pieczenia, ktory uwalnia CO2 w dwoch etapach: najpierw przy mieszaniu z plynami w temperaturze pokojowej, a nastepnie pod wplywem ciepla piekarnika. Zapewnia bardziej niezawodne wyrosniecie.'
        },
        {
          term: 'Reakcja Maillarda',
          definition: 'Reakcja chemiczna miedzy aminokwasami a cukrami redukujacymi, ktora brazowi zywnosc i tworzy zlozone aromaty. Wzmacniana przez wyzsze pH z nadmiaru sody; pozadana w ciastkach, niepozadana w delikatnych biszkoptach.'
        },
        {
          term: 'Rownowaga pH',
          definition: 'Miara kwasowosci lub zasadowosci ciasta. Neutralne pH (okolo 7) oznacza, ze cala soda przereagowala z calym kwasem. Lekko zasadowe sprzyja brazowieniu; kwasne sprzyja delikatnosci.'
        }
      ]
    },
    {
      type: 'tip',
      html: '<strong>Brazowienie a pH:</strong> Choc calkowita neutralizacja jest kluczowa dla smaku, lekko zasadowe ciasto (z powodu niewielkiego nadmiaru sody) moze byc pozadane w ciastach czekoladowych i ciastkach. Wyzsze pH wzmaga brazowienie Maillarda, dajac ciemniejsze kolory, bardziej chrupiace brzegi i glebsze karmelowe nuty. W przypadku delikatnych biszkoptow waniliowych daz do dokladnej neutralizacji, aby zachowac czysty, naturalny smak.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
