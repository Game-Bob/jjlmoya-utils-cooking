import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Inteligentny Dobór Patelni: Przewodnik po Naczyniach Kuchennych";
const description = "Interaktywny przewodnik pomagający wybrać najlepszą patelnię lub garnek zależnie od stylu gotowania. Żeliwo vs Stal vs Teflon. Znajdź swoje idealne narzędzie.";
const faq = [
  {
    question: 'Jaka patelnia jest najlepsza do codziennego użytku?',
    answer: 'Dla większości osób najlepsza będzie wysokiej jakości patelnia ze stali nierdzewnej lub dobrze wypielęgnowana patelnia żeliwna. Stal jest wszechstronna i niezniszczalna, natomiast żeliwo oferuje naturalną nieprzywieralność bez chemikaliów.',
  },
  {
    question: 'Dlaczego jedzenie przywiera do stali nierdzewnej?',
    answer: 'Zwykle dzieje się tak z powodu zbyt niskiej temperatury lub zbyt wczesnego włożenia jedzenia. Wypróbuj "efekt Leidenfrosta": rozgrzewaj patelnię, aż kropla wody zacznie toczyć się po niej jak perła. Wtedy jest gotowa.',
  },
  {
    question: 'Skąd mam wiedzieć, czy moja patelnia jest bezpieczna?',
    answer: 'Szukaj oznaczeń "PFOA Free". Patelnie z żeliwa, stali węglowej i stali nierdzewnej to najbezpieczniejsze i najtrwalsze opcje, ponieważ nie posiadają powłok, które ulegają degradacji z upływem czasu.',
  },
  {
    question: 'Co oznacza "sezonowanie" (hartowanie) patelni?',
    answer: 'To proces tworzenia warstwy spolimeryzowanego oleju na metalu (żelazie lub stali). Chroni to przed rdzą i tworzy naturalną powierzchnię nieprzywierającą, która poprawia się z każdym użyciem.',
  },
  {
    question: 'Ile powinno się wydać na dobrą patelnię?',
    answer: 'Zestaw 2-3 patelni średniej-wysokiej jakości (stal nierdzewna lub żeliwo) może służyć ponad 20 lat. Lepiej zainwestować w jedną porządną patelnię niż kupować 5 tanich, które starczają na 2 lata. Jakość ponad ilość.',
  },
];
const howTo = [
  {
    name: 'Wybierz swój styl gotowania',
    text: 'Wybierz między wysokim ogniem (smażenie/rumienienie), delikatnymi daniami (jajka), gulaszami (wolne gotowanie) lub szybką kuchnią. Każdy styl ma inne wymagania.',
  },
  {
    name: 'Wybierz idealny materiał',
    text: 'Na podstawie Twojego stylu narzędzie zarekomenduje najlepszy materiał: żeliwo, stal nierdzewna, miedź lub teflon.',
  },
  {
    name: 'Zapoznaj się z charakterystyką',
    text: 'Zrozum zalety, wady, zasady konserwacji i trwałość. Następnie wybierz konkretną patelnię dopasowaną do Twojego budżetu i potrzeb.',
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
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'przewodnik-po-patelniach',
  title: 'Inteligentny Dobór Patelni: Przewodnik po Naczyniach Kuchennych',
  description: 'Interaktywny przewodnik pomagający wybrać najlepszą patelnię lub garnek zależnie od stylu gotowania. Żeliwo vs Stal vs Teflon. Znajdź swoje idealne narzędzie.',
  faqTitle: 'Często Zadawane Pytania',
  faq,  howTo,
  seo: [
    {
      type: 'title',
      text: 'Materiały Patelni: Nauka i Praktyka',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nie wszystkie patelnie są takie same. Każdy materiał ma inne właściwości termodynamiczne, które wpływają na sposób rozprowadzania ciepła, wytrzymałość na temperatury i interakcję z żywnością. Zrozumienie tych różnic jest kluczem do wyboru właściwego narzędzia.',
    },
    {
      type: 'title',
      text: 'Żeliwo: Klasyka',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Zalety:</strong> Doskonałe utrzymanie ciepła, równomierny rozkład, naturalna nieprzywieralność (po sezonowaniu), trwałość na wieki, poprawia się z czasem. <strong>Wady:</strong> Ciężkie, wymaga konserwacji, może rdzewieć, wolniej się nagrzewa, nie nadaje się do długiego gotowania kwasów.',
    },
    {
      type: 'title',
      text: 'Stal nierdzewna: Wszechstronność',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Zalety:</strong> Trwała, nie wymaga konserwacji, odporna na kwasy (wina, pomidory), łatwa w czyszczeniu, uniwersalna, stosunkowo niedroga. <strong>Wady:</strong> Naturalnie przywierająca, wymaga techniki (dobrego rozgrzania), nierównomierny rozkład ciepła (lepiej jeśli ma dno wielowarstwowe).',
    },
    {
      type: 'title',
      text: 'Teflon/PTFE: Wygoda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Zalety:</strong> Natychmiastowa nieprzywieralność, łatwość gotowania, łatwość czyszczenia, tania. <strong>Wady:</strong> Degraduje się z czasem i temperaturą, wymaga wymiany co 3-5 lat, niebezpieczna w bardzo wysokich temperaturach (&gt;260°C).',
    },
  ],
  ui: {
    cookingStyle: 'Jak zazwyczaj gotujesz?',
    material: 'Rodzaj Materiału',
    highHeat: 'Wysoki Ogień',
    sear: 'Podsmażanie / Smażenie',
    delicate: 'Delikatne',
    fry: 'Jajka / Omlety',
    stew: 'Gulasze',
    slowCook: 'Wolne Gotowanie',
    fast: 'Szybkie',
    quick: 'Szybka Kuchnia',
    recommendation: 'Rekomendacja',
    characteristics: 'Charakterystyka',
    castIron: 'Żeliwo',
    stainlessSteel: 'Stal Nierdzewna',
    carbon: 'Stal Węglowa',
    copper: 'Miedź',
    nonstick: 'Nieprzywierająca (Teflon)',
    advantages: 'Zalety',
    disadvantages: 'Wady',
    maintenance: 'Konserwacja',
    durability: 'Trwałość',
    heatRetention: 'Utrzymanie Ciepła',
    price: 'Cena',
    step1: 'Jak zazwyczaj gotujesz?',
    step2: 'Poziom Konserwacji',
    maintenanceLazy: 'Niski / Brak',
    maintenanceLazyDesc: 'Bez komplikacji przy myciu.',
    maintenanceCare: 'Średni',
    maintenanceCareDesc: 'Zwykłe mycie ręczne.',
    maintenanceRitual: 'Rytuał (Wysoki)',
    maintenanceRitualDesc: 'Cieszy mnie proces sezonowania.',
    idealPan: 'Twoja Idealna Patelnia',
    selectOptions: 'Wybierz opcje',
    seeRecommendation: 'Aby zobaczyć rekomendację',
    pro: 'ZA',
    con: 'PRZECIW',
    masterTip: 'Porada Mistrza',
    defaultTip: 'Połączenie stalowej patelni do podsmażania i nieprzywierającej do jajek to podstawa każdej efektywnej kuchni.',
    stainlessName: 'Stal Nierdzewna',
    stainlessTag: 'Wszechstronny Pro',
    stainlessPro: 'Wieczna i nie reaguje z żywnością. Idealne smażenie.',
    stainlessCon: 'Wymaga techniki (temp.), aby nie przywierało.',
    stainlessTip: 'Używaj efektu Leidenfrosta: kiedy kropla wody toczy się jak perła, patelnia jest gotowa.',
    nonstickName: 'Nieprzywierająca',
    nonstickTag: 'Maksymalna Wygoda',
    nonstickPro: 'Nic nie przywiera. Łatwe czyszczenie.',
    nonstickCon: 'Krótko służy (2-3 lata). Nie na wysoki ogień.',
    nonstickTip: 'Zawsze myj ręcznie i używaj drewnianych/silikonowych przyborów, aby podwoić jej życie.',
    castironName: 'Żeliwo',
    castironTag: 'Ponadczasowa Klasyka',
    castironPro: 'Niesamowite utrzymanie ciepła. Wieczna.',
    castironCon: 'Bardzo ciężka. Wymaga regularnego sezonowania.',
    castironTip: 'Nagrzewa się powoli, ale po nagrzaniu jest jak czołg. Idealna do steków.',
    carbonName: 'Stal Węglowa',
    carbonTag: 'Zwinność na Ogniu',
    carbonPro: 'Lekka jak stal, skuteczna jak żeliwo.',
    carbonCon: 'Rdzewieje, jeśli zostawi się mokrą. Surowa estetyka.',
    carbonTip: 'Czym czarniejsza i brzydsza się staje, tym lepiej działa. To sekret najlepszych woków.',
    enamelName: 'Żeliwo Emaliowane',
    enamelTag: 'Jakość Gourmet',
    enamelPro: 'Najlepsza do wolnego gotowania. Piękna estetyka.',
    enamelCon: 'Bardzo droga. Emalia wrażliwa na uderzenia punktowe.',
    enamelTip: 'Idealna do długich gulaszy. Emalia pozwala na gotowanie kwasów (pomidorów) bez problemów.',
  },
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
