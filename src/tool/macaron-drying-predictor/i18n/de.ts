import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Makronen Trocknungsrechner: Trocknungszeit je nach Luftfeuchtigkeit und Temperatur';
const description = 'Berechnen Sie exakt, wie lange Makronenschalen je nach Luftfeuchtigkeit, Temperatur und Schalengrosse trocknen mussen. Vermeiden Sie Risse und erzielen Sie jedes Mal perfekte Fusschen.';

const faq = [
  {
    question: 'Warum mussen Makronenschalen vor dem Backen trocknen?',
    answer: 'Durch das Trocknen bildet sich eine dunne Haut auf der Oberflache der Makronenschale. Diese Haut ist entscheidend, weil sie den Dampf beim Backen einschliesst und ihn zwingt, nach unten durch die Fusschen zu entweichen, anstatt die Oberseite aufreissen zu lassen. Ohne ausreichende Trocknung reissen Makronen auf, bekommen keine Fusschen oder backen ungleichmassig.',
  },
  {
    question: 'Wie beeinflusst die Luftfeuchtigkeit die Trocknungszeit von Makronen?',
    answer: 'Die Luftfeuchtigkeit ist der wichtigste Faktor. Bei hoher Luftfeuchtigkeit (uber 60%) ist die Luft bereits mit Feuchtigkeit gesattigt, was die Verdunstung an der Schalenoberflache drastisch verlangsamt. Die Trocknungszeit kann sich im Vergleich zu einem trockenen Tag verdoppeln oder verdreifachen. Bei sehr trockener Luft (unter 30%) konnen die Schalen ubertrocknen und eine zu dicke Haut entwickeln, die das Aufgehen behindert.',
  },
  {
    question: 'Was ist die ideale Temperatur zum Trocknen von Makronenschalen?',
    answer: 'Eine Raumtemperatur zwischen 20Â°C und 25Â°C ist ideal. Warmere Luft nimmt mehr Feuchtigkeit auf und beschleunigt die Trocknung, aber zu grosse Hitze (uber 30Â°C) fuhrt zu ungleichmassiger Trocknung mit krustiger Aussenseite und feuchtem Inneren. Kuhle Temperaturen unter 18Â°C verlangsamen die Trocknung erheblich.',
  },
  {
    question: 'Wie wirkt sich die Schalengrosse auf die Trocknungszeit aus?',
    answer: 'Grossere Schalen haben mehr Oberflache und Volumen und benotigen daher proportional mehr Trocknungszeit. Eine Mini-Makrone mit 2cm kann in 15 Minuten trocknen, wahrend eine grosse Makrone mit 5cm uber eine Stunde brauchen kann. Der Zusammenhang ist nicht linear: Eine Verdopplung des Durchmessers verdreifacht die Trocknungszeit in etwa, bedingt durch das Quadrat-Kubik-Verhaltnis von Oberflache zu Volumen.',
  },
];

const howTo = [
  {
    name: 'Makronenschalen dressieren',
    text: 'Dressieren Sie gleichmassig grosse Tupfen auf Backpapier oder eine Silikonmatte. Verwenden Sie eine Schablone fur einheitliche Grossen.',
  },
  {
    name: 'Messen Sie Ihre Umgebungsbedingungen',
    text: 'Ermitteln Sie die Luftfeuchtigkeit und Temperatur Ihrer Kuche mit einem Hygrometer und Thermometer.',
  },
  {
    name: 'Geben Sie die Werte in den Rechner ein',
    text: 'Tragen Sie Luftfeuchtigkeit, Temperatur und Schalendurchmesser ein, um die geschatzte Trocknungszeit zu erhalten.',
  },
  {
    name: 'Testen Sie die Haut',
    text: 'Beruhren Sie nach Ablauf der berechneten Zeit vorsichtig die Oberflache einer Schale. Sie sollte sich trocken und matt anfuhlen, nicht klebrig. Bleibt sie am Finger kleben, braucht sie mehr Zeit.',
  },
  {
    name: 'Backen, sobald sie bereit sind',
    text: 'Sobald sich die Haut gebildet hat, sofort backen. Lassen Sie die Schalen nach dem Trocknen nicht zu lange stehen, sonst ubertrocknen sie und reissen.',
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
  slug: 'makronen-trocknungsrechner',
  title: 'Makronen Trocknungsrechner',
  description: 'Berechnen Sie exakt, wie lange Makronenschalen je nach Luftfeuchtigkeit, Temperatur und Schalengrosse trocknen mussen. Vermeiden Sie Risse und erzielen Sie jedes Mal perfekte Fusschen.',
  faqTitle: 'Haufig Gestellte Fragen',
  ui: {
    humidityLabel: 'Luftfeuchtigkeit',
    humidityUnit: '%',
    tempLabel: 'Raumtemperatur',
    tempUnit: 'Â°C',
    sizeLabel: 'Schalendurchmesser',
    sizeUnit: 'cm',
    dryingTimeLabel: 'Geschatzte Trocknungszeit',
    minutesUnit: 'min',
    readinessLabel: 'Oberflachenzustand',
    skinStatusReady: 'Backfertig',
    skinStatusForming: 'Haut bildet sich',
    skinStatusSticky: 'Noch klebrig',
    skinStatusOverDry: 'Ubertrocknet',
    humidityTagHigh: 'Hohe Luftfeuchtigkeit',
    humidityTagNormal: 'Normale Luftfeuchtigkeit',
    humidityTagLow: 'Niedrige Luftfeuchtigkeit',
    humidityDescHigh: 'Sehr feuchter Tag. Die Trocknung dauert deutlich langer. Nutzen Sie wenn moglich einen Luftentfeuchter oder einen klimatisierten Raum.',
    humidityDescNormal: 'Massige Luftfeuchtigkeit. Die Trocknung sollte in normalem Tempo mit guter Hautbildung verlaufen.',
    humidityDescLow: 'Sehr trockene Luft. Die Schalen konnen zu schnell trocknen und ubertrocknen. Gut uberwachen und Trocknungszeit verkurzen.',
    tempTagHot: 'Warmer Raum',
    tempTagIdeal: 'Ideale Raumtemperatur',
    tempTagCool: 'Kuhler Raum',
    sizeTagMini: 'Mini',
    sizeTagStandard: 'Standard',
    sizeTagLarge: 'Gross',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Die Wissenschaft der Makronentrocknung: Warum die Hautbildung uber Erfolg entscheidet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Makrone gehort zu den anspruchsvollsten Gebacken der franzosischen Patisserie. Ihre markante glatte Kuppel und der krause Fuss, bekannt als "Fusschen" oder "pied", hangen vollstandig von einem entscheidenden Schritt ab: dem Trocknen der dressierten Schalen vor dem Backen. Wahrend dieser Ruhezeit bildet sich ein dunner Proteinfilm auf der Oberflache jeder Schale. Beim Backen halt diese Haut den sich ausdehnenden Dampf in der Schale zuruck und zwingt ihn, nach unten durch den Boden zu entweichen, wodurch die Schale angehoben wird und der begehrte Fuss entsteht. Ohne ausreichende Trocknung bricht der Dampf durch die Oberseite und verursacht Risse. Bei ubermassiger Trocknung wird die Haut zu starr und die Schalen konnen nicht richtig aufgehen.',
    },
    {
      type: 'title',
      text: 'Luftfeuchtigkeit und ihre dominierende Rolle in der Trocknungskinetik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die relative Luftfeuchtigkeit ist die einflussreichste Variable bei der Makronentrocknung. Bei 50% relativer Luftfeuchtigkeit benotigt eine handelsubliche 3-cm-Schale in der Regel 30-40 Minuten, um eine ausreichende Haut zu entwickeln. Bei 70% Feuchtigkeit kann sich dies auf 60-90 Minuten verlangern. Bei 30% Feuchtigkeit kann die Trocknung bereits nach 15-20 Minuten abgeschlossen sein. Die zugrunde liegende Physik ist einfach: Die Verdunstungsrate ist proportional zum Dampfdruckdefizit zwischen Schalenoberflache und Umgebungsluft. Feuchte Luft hat ein geringeres Defizit, was die Verdunstung verlangsamt. Professionelle Patisserien kontrollieren die Luftfeuchtigkeit daher mit grosser Sorgfalt und unterhalten oft eigene Makronenraume mit 40-50% relativer Luftfeuchtigkeit.',
    },
    {
      type: 'title',
      text: 'Referenztabelle Trocknungszeiten nach Luftfeuchtigkeit und Schalengrosse',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Luftfeuchtigkeit', '2cm Mini', '3cm Standard', '4cm Gross', '5cm Extragross'],
      rows: [
        ['30% (Sehr trocken)', '10-15 min', '15-20 min', '25-30 min', '35-45 min'],
        ['40% (Trocken)', '15-20 min', '20-30 min', '30-40 min', '45-60 min'],
        ['50% (Massig)', '20-25 min', '30-40 min', '40-55 min', '55-75 min'],
        ['60% (Feucht)', '25-35 min', '40-55 min', '55-75 min', '75-100 min'],
        ['70% (Sehr feucht)', '35-50 min', '55-75 min', '75-100 min', '100-130 min'],
        ['80% (Extrem feucht)', '50-70 min', '75-100 min', '100-140 min', '130-180 min'],
      ],
    },
    {
      type: 'title',
      text: 'Die Rolle der Temperatur bei der Verdunstungsrate',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Temperatur beeinflusst die Trocknung uber zwei Mechanismen. Erstens kann warmere Luft mehr Wasserdampf aufnehmen, was die potenzielle Verdunstungsrate von der Schalenoberflache erhoht. Zweitens steigt die molekulare kinetische Energie mit der Temperatur, wodurch Wassermolekule schneller aus der flussigen Phase entweichen. Allerdings beeinflusst die Temperatur auch die Stabilitat der Baisermasse. Oberhalb von 28Â°C konnen die Eiklarproteine im Baiser beginnen sich zu destabilisieren, was zu einer geschwachten Struktur fuhrt. Der ideale Bereich fur die Makronentrocknung liegt bei 20-25Â°C. Unter 18Â°C verlangsamt sich die Verdunstung so stark, dass die Trocknung fur handelsubliche Schalengrossen unpraktikabel wird.',
    },
    {
      type: 'title',
      text: 'Schalengrosse und das Quadrat-Kubik-Gesetz der Trocknung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Schalendurchmesser wirkt sich aufgrund des Quadrat-Kubik-Verhaltnisses zwischen Oberflache und Volumen nichtlinear auf die Trocknungszeit aus. Eine 2-cm-Mini-Makrone hat etwa 3,1 cmÂ² Oberflache bei 0,5 cmÂ³ Volumen, was ein gunstiges Oberflachen-Volumen-Verhaltnis von 6:1 ergibt. Eine grosse 5-cm-Makrone hat etwa 19,6 cmÂ² Oberflache bei 8,2 cmÂ³ Volumen, ein Verhaltnis von nur 2,4:1. Das bedeutet: Grossere Schalen haben proportional weniger Oberflache, uber die Feuchtigkeit entweichen kann, was die Trocknungszeit drastisch erhoht. Der Rechner modelliert dies mit einer Potenzfunktion, die anhand empirischer Daten aus professionellen Patisseriekuchen kalibriert wurde.',
    },
    {
      type: 'title',
      text: 'Fehlerbehebung bei haufigen Trocknungsproblemen',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Aufgerissene Schalen ohne Fusschen',
      html: 'Das haufigste Makronenproblem. Dies weist fast immer darauf hin, dass die Schalen vor dem Backen nicht lange genug getrocknet wurden. Die Oberflachenhaut war zu schwach, um den sich ausdehnenden Dampf zu halten, der durch die Oberseite ausbrach. <strong>Losung: Trocknungszeit um 10-15 Minuten verlangern und die Oberflache vor dem Backen mit einer leichten Fingerberuhrung testen.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Schiefe oder einseitige Fusschen',
      html: 'Ungleichmassige Trocknung ist die Ursache. Wenn eine Seite des Blechs schneller trocknet als die andere, steigen die Fusschen ungleichmassig. Dies passiert oft, wenn Bleche in der Nahe eines Fensters, Ventilators oder einer Warmequelle stehen. <strong>Losung: Bleche wahrend des Trocknens drehen und fur gleichmassige Luftzirkulation um alle Schalen sorgen.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hohle Schalen nach dem Backen',
      html: 'Hohle Schalen konnen durch Ubertrocknung entstehen, die eine zu dicke und starre Haut erzeugt. Die Schale kann sich beim Backen nicht richtig ausdehnen, wodurch innen ein Hohlraum entsteht. <strong>Losung: Trocknungszeit verkurzen und fruher auf Hautbildung prufen. Die Oberflache sollte sich trocken anfuhlen, bei sanftem Druck aber noch leicht nachgeben.</strong>',
    },
    {
      type: 'title',
      text: 'Professionelle Tipps von Patisserie-Chefs',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Die Ofentur Technik fur feuchte Tage',
      html: 'An extrem feuchten Tagen verwenden Profikoche die sogenannte "Ofentrocknung". Heizen Sie den Ofen auf die niedrigste Stufe vor (in der Regel 50Â°C), schalten Sie ihn aus und stellen Sie die dressierten Makronen fur 5-10 Minuten bei leicht geoffneter Tur hinein. So entsteht ein warmes, trockenes Mikroklima, das die Hautbildung beschleunigt, ohne die Schalen zu backen.',
    },
    {
      type: 'tip',
      title: 'Der Finger Test fur die perfekte Haut',
      html: 'Der sicherste Test fur die Makronenbereitschaft: Beruhren Sie leicht die Oberflache einer Schale mit einer sauberen, trockenen Fingerspitze. Bleibt Teig am Finger haften, braucht sie mehr Zeit. Fuhlt sich die Oberflache trocken und matt an und klebt nicht, hat sich die Haut gebildet. Fuhlt sich die Oberflache hart und krustig an und gibt nicht nach, sind die Schalen ubertrocknet.',
    },
    {
      type: 'tip',
      title: 'Feuchtigkeitskontrolle ohne spezielle Gerate',
      html: 'Wenn Sie keinen Luftentfeuchter haben, stellen Sie eine Schale mit rohem Reis oder Silicagel-Packchen neben die trocknenden Makronen. Diese Trockenmittel absorbieren die Umgebungsfeuchtigkeit und schaffen ein trockeneres Mikroklima um das Blech. In Profikuchen ohne Klimatisierung kann dieser einfache Trick die Trocknungszeit an feuchten Tagen um 30-40% verkurzen.',
    },
    {
      type: 'title',
      text: 'Der Einfluss gereifter Eiklar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gereiftes Eiklar ergibt stabilere Baisermassen, die berechenbarer trocknen. Frisches Eiklar enthalt mehr Wasser und eine weniger elastische Proteinstruktur, was zu schwacheren Baisermassen fuhrt, die langer fur eine ordentliche Haut benotigen. Professionelle Rezepte setzen auf 24-72 Stunden bei Raumtemperatur bzw. 3-5 Tage im Kuhlschrank gereiftes Eiklar. Gereiftes Eiklar verliert durch Verdunstung etwa 10-15% seines Wassergehalts, wodurch die Proteine konzentriert und die Baiserfestigkeit verbessert werden.',
    },
    {
      type: 'title',
      text: 'Kurzreferenz: Trocknungszeiten fur typische Bedingungen',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Typische Trocknungszeiten fur Standard Makronenschalen mit 3cm',
      items: [
        'Klimatisierte Kuche (22Â°C, 45% Feuchte): 25-30 Minuten',
        'Fruhlingstag, Fenster offen (20Â°C, 55% Feuchte): 35-45 Minuten',
        'Sommertag, keine Klimaanlage (28Â°C, 70% Feuchte): 60-90 Minuten  -  Ofentrocknungstechnik verwenden',
        'Beheizte Wohnung im Winter (21Â°C, 30% Feuchte): 15-20 Minuten  -  auf Ubertrocknung achten',
        'Regentag (18Â°C, 80% Feuchte): 75-100 Minuten  -  Luftentfeuchter dringend empfohlen',
        'Professionelle PatisseriekÃ¼che (22Â°C, 45% Feuchte, Umluft): 20-25 Minuten',
      ],
    },
    {
      type: 'paragraph',
      html: 'Jede Kuchenumgebung ist einzigartig. Dieser Rechner berucksichtigt die drei entscheidenden Variablen  -  Luftfeuchtigkeit, Temperatur und Schalengrosse  -  um Ihnen eine personliche Prognose der Trocknungszeit zu liefern. Geben Sie Ihre Bedingungen ein und dressieren Sie mit Vertrauen.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
