import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator Stabilnosci Emulsji i Maksymalnej Ilosci Oleju";
const description = "Sprawdz dokladnie, ile oleju wytrzyma twoja majonez, aioli lub winegret, zanim sie zwarzy. Unikaj rozwarstwiania sie sosow dzieki naszemu darmowemu kalkulatorowi stabilnosci emulsji.";
const faq = [
  {
    question: "Ile oleju moge dodac do majonezu, zanim sie zwarzy?",
    answer: "To zalezy od emulgatora. Zoltko jajka wytrzymuje do ~78% oleju (okolo 3,5 razy objetosc wody), musztarda do 70%, lecytyna sojowa do 82%, a polisorbat do 85%. Uzyj kalkulatora powyzej, aby uzyskac dokladne maksimum dla twoich konkretnych ilosci."
  },
  {
    question: "Dlaczego moja emulsja sie zwarzyla lub rozwarstwila?",
    answer: "Emulsja warzy sie, gdy ulamek objetosci oleju przekroczy maksymalny limit upakowania emulgatora. W tym momencie kropelki oleju sa tak mocno scisniete, ze lacza sie, a mieszanina sie rozdziela. Dzieje sie to natychmiastowo - to nie jest proces stopniowy."
  },
  {
    question: "Jak naprawic zwarzonego majonezu lub aioli?",
    answer: "Zacznij od swiezego zoltka jajka lub lyzki cieplej wody w czystej misce. Powoli wlewaj zwarzona mieszanine, caly czas energicznie mieszajac, tak jakbys dodawal surowy olej. Kalkulator powyzej podaje dokladnie, ile wody lub zoltek potrzebujesz."
  },
  {
    question: "Czy dodawanie oleju zbyt szybko powoduje zwarzenie emulsji?",
    answer: "Dodawanie oleju zbyt szybko moze tymczasowo przeciazyc emulgator, ale prawdziwa przyczyna zwarzenia jest zawsze nieprawidlowy stosunek faz. Jesli ulamek oleju pozostaje ponizej limitu emulgatora, emulsja pozostaje stabilna niezaleznie od szybkosci. Jesli przekroczy limit, zwarzenie jest nieuniknione."
  },
  {
    question: "Jaka jest roznica miedzy zoltkiem jajka a musztarda jako emulgatorami?",
    answer: "Zoltko jajka (max 78% oleju) zawiera lecytyne i lipoproteiny, ktore tworza solidna warstwe wokol kropelek. Musztarda (max 70% oleju) opiera sie na sluzie i bialkach - jest slabsza, ale dodaje smaku. Lecytyna sojowa (82%) i polisorbat (85%) to wysokowydajne emulgatory przemyslowe."
  }
];

const howTo = [
  {
    name: "Wybierz swoj emulgator",
    text: "Wybierz emulgator w swoim przepisie - zoltko jajka do klasycznego majonezu, musztarde do winegretow lub lecytyne sojowa/polisorbat do kuchni molekularnej. Kazdy z nich ustala inna maksymalna granice oleju."
  },
  {
    name: "Wprowadz objetosc fazy wodnej",
    text: "Podaj calkowita liczbe mililitrow skladnikow wodnych: wody, octu, soku z cytryny, wina lub dowolnego plynu na bazie wody. Kalkulator automatycznie dodaje zawartosc wody twojego wybranego emulgatora."
  },
  {
    name: "Ustaw objetosc oleju",
    text: "Wprowadz ilosc oleju, ktora planujesz uzyc. Uzyj suwaka lub wpisz wartosc. Kalkulator natychmiast pokazuje, czy ta ilosc da stabilna emulsje, czy spowoduje zwarzenie."
  },
  {
    name: "Sprawdz wynik stabilnosci i w razie potrzeby napraw",
    text: "Sprawdz wskaznik ulamka objetosci oleju. Jesli jest stabilny, mozesz dzialac. Jesli zwarzone, panel ratunkowy podaje dokladnie, ile wody (w ml) lub dodatkowych zoltek jajek musisz dodac, aby przywrocic rownowage."
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
  title: 'Kalkulator Stabilnosci Emulsji i Maksymalnej Ilosci Oleju',
  description: 'Sprawdz dokladnie, ile oleju wytrzyma twoja majonez, aioli lub winegret, zanim sie zwarzy. Unikaj rozwarstwiania sie sosow dzieki naszemu darmowemu kalkulatorowi stabilnosci emulsji.',
  faqTitle: 'Najczesciej Zadawane Pytania',
  ui: {
    title: 'Analizator Stabilnosci Emulsji',
    subtitle: 'Ile oleju wytrzyma twoj sos, zanim sie zwarzy?',
    waterLabel: 'Faza Wodna (ml)',
    oilLabel: 'Objetosc Oleju (ml)',
    emulsifierLabel: 'Rodzaj Emulgatora',
    yolkOption: 'Zoltko Jajka',
    mustardOption: 'Musztarda',
    soyLecithinOption: 'Lecytyna Sojowa',
    polysorbateOption: 'Polisorbat',
    stableStatus: 'Emulsja Stabilna',
    brokenStatus: 'Emulsja Zwarzona',
    ratioLabel: 'Ulamek Objetosci Oleju',
    maxLimitLabel: 'Maksymalny Limit Oleju',
    fixTitle: 'Strategia Ratunkowa',
    waterFixText: 'Dodaj wode, aby przywrocic rownowage faz:',
    yolkFixText: 'Alternatywnie, uzyj dodatkowego zoltka jajka:',
    idealRangeText: 'Idealny zakres znajduje sie ponizej krytycznego limitu upakowania wynoszacego 74% do 80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Ile Oleju Wytrzyma Majonez lub Aioli, Zanim Sie Zwarzy?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Kazdy kucharz zadal sobie to pytanie: <strong>dlaczego moj majonez sie zwarzyl?</strong> Odpowiedz jest prostsza, niz sie wydaje. Emulsja - czy to klasyczne aioli, kremowy winegret czy molekularna piana - moze pomiescic tylko ograniczona ilosc oleju, zanim sie zalamie. Nasz <strong>kalkulator stabilnosci emulsji</strong> podaje dokladnie, gdzie znajduje sie ten punkt krytyczny, w oparciu o twoje konkretne skladniki i proporcje.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: 'Max Oleju Zoltko Jajka',
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
          label: 'Zawartosc Wody w Zoltku',
          icon: 'mdi:water'
        }
      ]
    },
    {
      type: 'title',
      text: 'Nauka: Dlaczego Emulsje Sie Warza',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Emulsja kulinarna dziala poprzez rozproszenie malenkich kropelek oleju w ciaglej fazie wodnej. <strong>Emulgatory</strong> - takie jak lecytyna w zoltku jajka, sluz w musztardzie czy syntetyczne surfaktanty jak polisorbat - pokrywaja kazda kropelke i zapobiegaja jej laczeniu sie z sasiednimi.'
    },
    {
      type: 'paragraph',
      html: 'Punkt krytyczny jest okreslony przez czysta geometrie. Kropelki oleju zachowuja sie jak male, ciasno upakowane kule. Maksymalna objetosc kul, jaka mozna zmiescic w danej przestrzeni - znana jako <strong>hipoteza Keplera</strong> - wynosi okolo 74%. W rzeczywistych systemach kuchennych moze to siegac 80-85% przy silnych emulgatorach, ale powyzej tego progu kropelki sa tak mocno scisniete, ze lacza sie, a emulsja natychmiast sie zalamuje.'
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Zoltko Jajka',
          icon: 'mdi:egg-outline',
          description: 'Klasyczny emulgator do majonezu. Zawiera lecytyne i lipoproteiny.',
          highlight: true,
          points: [
            'Max oleju: 78%',
            '~15 ml wody na zoltko',
            'Dodaje bogactwa i koloru',
            'Najlepsze do majonezu i aioli'
          ]
        },
        {
          title: 'Musztarda',
          icon: 'mdi:shaker-outline',
          description: 'Opiera sie na sluzie i bialkach nasion. Dodaje ostry smak.',
          points: [
            'Max oleju: 70%',
            '~10 ml zawartosci wody',
            'Slabsza moc emulgujaca',
            'Idealna do winegretow'
          ]
        },
        {
          title: 'Lecytyna Sojowa',
          icon: 'mdi:leaf',
          description: 'Wysoko skoncentrowany surfaktant roslinny.',
          points: [
            'Max oleju: 82%',
            '~5 ml zawartosci wody',
            'Neutralny profil smakowy',
            'Podstawa kuchni molekularnej'
          ]
        },
        {
          title: 'Polisorbat',
          icon: 'mdi:flask-outline',
          description: 'Syntetyczny emulgator o maksymalnej zdolnosci surfaktantu.',
          points: [
            'Max oleju: 85%',
            '~2 ml zawartosci wody',
            'Najwyzsza tolerancja na olej',
            'Stosowany w pianach'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulgator', 'Max % Oleju', 'Olej na 100 ml Wody', 'Najlepsze Zastosowanie'],
      rows: [
        ['Zoltko Jajka', '78%', '~355 ml', 'Majonez, aioli, holenderski'],
        ['Musztarda', '70%', '~233 ml', 'Winegrety, lekkie dressingi'],
        ['Lecytyna Sojowa', '82%', '~456 ml', 'Sosy molekularne, piany'],
        ['Polisorbat', '85%', '~567 ml', 'Stabilne piany, kuchnia eksperymentalna']
      ]
    },
    {
      type: 'title',
      text: 'Jak Krok po Kroku Uratowac Zwarzone Emulsje',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Jesli twoj majonez lub sos juz sie zwarzyl, <strong>nie wyrzucaj go</strong>. Naprawa jest prosta - ale tylko jesli rozumiesz stosunek faz. Mocniejsze mieszanie nie pomoze; musisz dodac wiecej fazy ciaglej (wodnej).'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Typowe Oznaki, ze Twoja Emulsja Zaraz Sie Zwarzy',
      html: 'Zwroc uwage na <strong>zageszczenie, po ktorym nastepuje nagle rozrzedzenie</strong>, <strong>blyszczaca powierzchnie stajaca sie ziarnista</strong> lub widoczne kropelki oleju na brzegach. Jesli zauwazysz ktorykolwiek z tych objawow, natychmiast przestan dodawac olej i wmieszaj lyzeczke zimnej wody przed kontynuowaniem.'
    },
    {
      type: 'title',
      text: 'Praktyczne Wskazowki do Idealnych Emulsji Za Kazdym Razem',
      level: 3
    },
    {
      type: 'tip',
      title: 'Temperatura Ma Znaczenie',
      html: 'Wszystkie skladniki powinny miec <strong>temperature pokojowa</strong>. Zimne jajka lub zimny olej drastycznie zwiekszaja ryzyko zwarzenia. Wyjmij skladniki z lodowki na 30 minut przed rozpoczeciem.'
    },
    {
      type: 'tip',
      title: 'Wodna Siatka Bezpieczenstwa',
      html: 'Jesli twoj przepis nie zawiera wystarczajacej ilosci kwasu (oct, sok z cytryny), dodaj <strong>jedna lyzeczke zimnej wody na zoltko jajka</strong> przed rozpoczeciem dodawania oleju. Ta dodatkowa woda tworzy wiekszy margines bezpieczenstwa.'
    },
    {
      type: 'tip',
      title: 'Naprawa Zwarzonej Porcji',
      html: 'Umiesc swieze zoltko jajka w czystej misce. Ubij je z lyzeczka wody. Nastepnie <strong>wlewaj zwarzone mieszanine tak wolno, jak to mozliwe</strong>, dokladnie tak, jakby to byl surowy olej. Gdy sie reemulguje, reszte mozesz dodawac szybciej.'
    },
    {
      type: 'title',
      text: 'Slownik Emulsji Kulinarnych',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Faza Ciagla',
          definition: 'Ciecz otaczajaca kropelki - zazwyczaj woda, ocet lub sok cytrusowy w emulsjach olej-w-wodzie, takich jak majonez.'
        },
        {
          term: 'Faza Rozproszona',
          definition: 'Ciecz rozbita na malenkie kropelki - olej w wiekszosci emulsji kulinarnych. Im wiecej dodajesz, tym ciasniej kropelki sie upakowuja.'
        },
        {
          term: 'Ulamek Objetosci',
          definition: 'Stosunek objetosci oleju do calkowitej objetosci. Przy okolo 74-85% (w zaleznosci od emulgatora) emulsja osiaga swoj geometryczny punkt krytyczny.'
        },
        {
          term: 'Koalescencja',
          definition: 'Gdy dwie lub wiecej kropelek oleju laczy sie w jedna wieksza. Jest to mikroskopijny proces wywolujacy widoczne zwarzenie emulsji.'
        },
        {
          term: 'Inwersja Faz',
          definition: 'Moment, w ktorym emulsja olej-w-wodzie przeksztalca sie w emulsje woda-w-oleju - jak przy robieniu masla ze smietany. To ostateczna forma zalamania.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: 'Niezaleznie od tego, czy robisz klasyczny francuski majonez, czosnkowe aioli, stabilny winegret, czy eksperymentujesz z molekularnymi hydrokoloidami, zrozumienie <strong>stosunku oleju do wody</strong> jest najwazniejszym czynnikiem. Nasz kalkulator zajmuje sie matematyka, abys mogl gotowac z pewnoscia siebie.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
