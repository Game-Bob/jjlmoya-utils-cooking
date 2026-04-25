import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Ingrediensomvandlare Receptjustering';
const description = 'Skala recept automatiskt efter antal portioner. Beräkna exakta mängder ingredienser genom att multiplicera eller minska ditt recept utan krångel.';

const faq = [
  {
    question: 'Varför innehåller min omvandlingsfaktor decimaler?',
    answer: 'Eftersom kulinariska proportioner inte alltid är jämna tal. Om du skalar ett recept från 4 till 7 personer är faktorn exakt 1,75. Ingredienserna multipliceras med det talet, även om det resulterar i bråktal. Det är mer exakt än att runda av godtyckligt.',
  },
  {
    question: 'Vad händer om jag skriver in "1/2 tsk salt"?',
    answer: 'Verktyget letar efter talet först. Det känner igen "1" som mängd och "/2" som en del av enheten. Resultatet blir "0,5" och kommer att skalas korrekt. För bråk som "1/2" kan du skriva "0,5" direkt (tydligare), annars tolkas det som en division.',
  },
  {
    question: 'Ska jag runda av slutresultaten?',
    answer: 'Det beror på ingrediensen. För mjöl, ja. För jäst eller kryddor är precision mindre viktig (skala till 75% av det angivna värdet). För ägg: om du får 2,3, använd 2 hela ägg + en del av ett tredje (vägt), eller runda ner till 2 om rätten tillåter det.',
  },
  {
    question: 'Varför ändras inte resultatet när jag ändrar portionerna?',
    answer: 'Se till att ingrediensfältet har innehåll. Om det är tomt finns det inget att skala. Kontrollera även att siffrorna i dina ingredienser är igenkännbara (t.ex. "500g", "1/2 tsk").',
  },
  {
    question: 'Fungerar det med imperialenheter (ounces, cups)?',
    answer: 'Tekniskt sett ja, verktyget läser siffror och skalar. Men precisionen är begränsad med "cups" (inkonsistent volym). Vi rekommenderar att du konverterar till gram innan du skalar.',
  },
];

const howTo = [
  {
    name: 'Ange dina portioner',
    text: 'I fältet "Original" anger du antalet personer som receptet är anpassat för. I "Önskat" anger du antalet personer du ska laga mat till.',
  },
  {
    name: 'Klistra in din ingredienslista',
    text: 'Kopiera och klistra in din lista precis som den är. En ingrediens per rad. Verktyget känner igen siffror i början (500g, 1/2, 2.5) och skalar automatiskt.',
  },
  {
    name: 'Justera efter sammanhang',
    text: 'Resultaten är matematiskt exakta, men matlagning är en konst. Kryddor: skala till 75%. Jäst: använd mindre än det teoretiska vid stora mängder. Tillagningstider skalas aldrig.',
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
  slug: 'omskalning-ingredienser',
  title,
  description,
  ui: {
    servings: 'Portioner',
    original: 'Original',
    desired: 'Önskat',
    multiplyingFactor: 'Multiplikationsfaktor',
    ingredientsList: 'Ingredienslista',
    pasteHere: 'Klistra in din lista här.',
    exampleLine1: 'Ex:',
    exampleLine2: '500g Mjöl',
    exampleLine3: '300ml Vatten',
    exampleLine4: '10g Salt',
    result: 'Resultat',
    copy: 'Kopiera',
    copied: 'Kopierat!',
    emptyState: 'Dina justerade ingredienser visas här...',
    defaultIngredient1: '200g Mjöl',
    defaultIngredient2: '100ml Mjölk',
    defaultIngredient3: '2 Ägg',
  },
  faqTitle: 'Vanliga Frågor',
  faq,  howTo,
  seo: [
    {
      type: 'title',
      text: 'Mästarguide för skalning och omvandling av recept',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att <strong>skala ingredienser</strong> är en av de mest kritiska och felbenägna uppgifterna i ett professionellt kök. Det handlar inte bara om att multiplicera siffror, utan om att förstå hur matens kemi och fysik reagerar på förändringar i volym och yta.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: 'x1.75',
          label: 'Faktor för 4 till 7 pers.',
          icon: 'mdi:calculator',
        },
        {
          value: '75%',
          label: 'Kryddjustering',
          icon: 'mdi:shaker-outline',
        },
        {
          value: '0%',
          label: 'Tidsskalning',
          icon: 'mdi:timer-off',
        },
        {
          value: '100g',
          label: 'Referensbas',
          icon: 'mdi:weight-gram',
        },
      ],
    },
    {
      type: 'title',
      text: 'Skillnader mellan linjär och kontextuell skalning',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Matematisk linjär skalning',
          icon: 'mdi:math-log',
          description: 'Direkt multiplikation av alla värden med den erhållna omvandlingsfaktorn.',
          points: [
            'Perfekt för mjöl och basvätskor',
            'Idealisk för precisionsbakning',
            'Fungerar bra vid små ändringar (x2, x0.5)',
            'Enkel att beräkna automatiskt',
          ],
        },
        {
          title: 'Kontextuell köksskalning',
          icon: 'mdi:chef-hat',
          description: 'Justering av proportioner baserat på smakintensitet och avdunstning.',
          highlight: true,
          points: [
            'Undviker överskott av salt och kryddor',
            'Tar hänsyn till avdunstningsyta',
            'Justerar jäst efter massa',
            'Kräver erfarenhet och kockens omdöme',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Omvandlingsfaktorer efter antal gäster',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Från Portioner', 'Till Portioner', 'Faktor (FC)', 'Svårighetsgrad'],
      rows: [
        ['2 personer', '4 personer', 'x 2.0', 'Låg (Linjär)'],
        ['4 personer', '6 personer', 'x 1.5', 'Låg (Linjär)'],
        ['4 personer', '10 personer', 'x 2.5', 'Medel (Se upp med kryddor)'],
        ['4 personer', '25 personer', 'x 6.25', 'Hög (Kontextuell)'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Vanliga problem när man dubblar ett recept',
      html: 'Om du märker att smaken är för intensiv efter skalning (särskilt med kryddor eller salt), minska skalningen av dessa ingredienser till 75%. Dubbla aldrig tillagningstiden; innertemperaturen uppnås beroende på tjocklek, inte totalvikt.',
    },
    {
      type: 'title',
      text: 'Ordlista för standardisering',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Omvandlingsfaktor',
          definition: 'Talet som alla ingredienser multipliceras med: Önskad mängd / Originalmängd.',
        },
        {
          term: 'Svinnhalt',
          definition: 'Viktförlust hos en ingrediens genom avdunstning eller fettförlust.',
        },
        {
          term: 'Bruttovikt vs Nettovikt',
          definition: 'Vikten före och efter anordning av ingrediensen.',
        },
        {
          term: 'Utbyte',
          definition: 'Total mängd färdig produkt efter skalning och tillagning.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Tricket med uppvispat ägg',
      html: 'Om kalkylatorn visar 2,3 ägg, vispa upp ett helt ägg, väg det och använd endast 30% av vikten. Det är det enda sättet att behålla precision i finare bakning.',
    },
    {
      type: 'paragraph',
      html: 'Vårt verktyg förenklar matematiken så att du kan ägna din energi åt det som verkligen betyder något: kreativitet och smak.',
    },
  ],
  bibliography,
  schemas: [appSchema, faqSchema, howToSchema],
};
