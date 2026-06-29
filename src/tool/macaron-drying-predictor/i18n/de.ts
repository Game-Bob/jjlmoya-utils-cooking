import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Makronen Trocknungsrechner: Trocknungszeit je nach Luftfeuchtigkeit und Temperatur';
const description = 'Berechnen Sie exakt, wie lange Makronenschalen je nach Luftfeuchtigkeit, Temperatur und Schalengröße trocknen müssen. Vermeiden Sie Risse und erzielen Sie jedes Mal perfekte Füßchen.';

const faq = [
  {
    question: 'Warum müssen Makronenschalen vor dem Backen trocknen?',
    answer: 'Durch das Trocknen bildet sich eine dünne Haut auf der Oberfläche der Makronenschale. Diese Haut ist entscheidend, weil sie den Dampf beim Backen einschließt und ihn zwingt, nach unten durch die Füßchen zu entweichen, anstatt die Oberseite aufreißen zu lassen. Ohne ausreichende Trocknung reißen Makronen auf, bekommen keine Füßchen oder backen ungleichmäßig.',
  },
  {
    question: 'Wie beeinflusst die Luftfeuchtigkeit die Trocknungszeit von Makronen?',
    answer: 'Die Luftfeuchtigkeit ist der wichtigste Faktor. Bei hoher Luftfeuchtigkeit (über 60%) ist die Luft bereits mit Feuchtigkeit gesättigt, was die Verdunstung an der Schalenoberfläche drastisch verlangsamt. Die Trocknungszeit kann sich im Vergleich zu einem trockenen Tag verdoppeln oder verdreifachen. Bei sehr trockener Luft (unter 30%) können die Schalen übertrocknen und eine zu dicke Haut entwickeln, die das Aufgehen behindert.',
  },
  {
    question: 'Was ist die ideale Temperatur zum Trocknen von Makronenschalen?',
    answer: 'Eine Raumtemperatur zwischen 20 °C und 25 °C ist ideal. Wärmere Luft nimmt mehr Feuchtigkeit auf und beschleunigt die Trocknung, aber zu große Hitze (über 30 °C) führt zu ungleichmäßiger Trocknung mit krustiger Außenseite und feuchtem Inneren. Kühle Temperaturen unter 18 °C verlangsamen die Trocknung erheblich.',
  },
  {
    question: 'Wie wirkt sich die Schalengröße auf die Trocknungszeit aus?',
    answer: 'Größere Schalen haben mehr Oberfläche und Volumen und benötigen daher proportional mehr Trocknungszeit. Eine Mini-Makrone mit 2cm kann in 15 Minuten trocknen, während eine große Makrone mit 5cm über eine Stunde brauchen kann. Der Zusammenhang ist nicht linear: Eine Verdopplung des Durchmessers verdreifacht die Trocknungszeit in etwa, bedingt durch das Quadrat-Kubik-Verhältnis von Oberfläche zu Volumen.',
  },
];

const howTo = [
  {
    name: 'Makronenschalen dressieren',
    text: 'Dressieren Sie gleichmäßig große Tupfen auf Backpapier oder eine Silikonmatte. Verwenden Sie eine Schablone für einheitliche Größen.',
  },
  {
    name: 'Messen Sie Ihre Umgebungsbedingungen',
    text: 'Ermitteln Sie die Luftfeuchtigkeit und Temperatur Ihrer Küche mit einem Hygrometer und Thermometer.',
  },
  {
    name: 'Geben Sie die Werte in den Rechner ein',
    text: 'Tragen Sie Luftfeuchtigkeit, Temperatur und Schalendurchmesser ein, um die geschätzte Trocknungszeit zu erhalten.',
  },
  {
    name: 'Testen Sie die Haut',
    text: 'Berühren Sie nach Ablauf der berechneten Zeit vorsichtig die Oberfläche einer Schale. Sie sollte sich trocken und matt anfühlen, nicht klebrig. Bleibt sie am Finger kleben, braucht sie mehr Zeit.',
  },
  {
    name: 'Backen, sobald sie bereit sind',
    text: 'Sobald sich die Haut gebildet hat, sofort backen. Lassen Sie die Schalen nach dem Trocknen nicht zu lange stehen, sonst übertrocknen sie und reißen.',
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
  description: 'Berechnen Sie exakt, wie lange Makronenschalen je nach Luftfeuchtigkeit, Temperatur und Schalengröße trocknen müssen. Vermeiden Sie Risse und erzielen Sie jedes Mal perfekte Füßchen.',
  faqTitle: 'Häufig Gestellte Fragen',
  ui: {
    humidityLabel: 'Luftfeuchtigkeit',
    humidityUnit: '%',
    tempLabel: 'Raumtemperatur',
    tempUnit: '°C',
    sizeLabel: 'Schalendurchmesser',
    sizeUnit: 'cm',
    dryingTimeLabel: 'Geschätzte Trocknungszeit',
    minutesUnit: 'min',
    readinessLabel: 'Oberflächenzustand',
    skinStatusReady: 'Backfertig',
    skinStatusForming: 'Haut bildet sich',
    skinStatusSticky: 'Noch klebrig',
    skinStatusOverDry: 'Übertrocknet',
    humidityTagHigh: 'Hohe Luftfeuchtigkeit',
    humidityTagNormal: 'Normale Luftfeuchtigkeit',
    humidityTagLow: 'Niedrige Luftfeuchtigkeit',
    humidityDescHigh: 'Sehr feuchter Tag. Die Trocknung dauert deutlich länger. Nutzen Sie wenn möglich einen Luftentfeuchter oder einen klimatisierten Raum.',
    humidityDescNormal: 'Mäßige Luftfeuchtigkeit. Die Trocknung sollte in normalem Tempo mit guter Hautbildung verlaufen.',
    humidityDescLow: 'Sehr trockene Luft. Die Schalen können zu schnell trocknen und übertrocknen. Gut überwachen und Trocknungszeit verkürzen.',
    tempTagHot: 'Warmer Raum',
    tempTagIdeal: 'Ideale Raumtemperatur',
    tempTagCool: 'Kühler Raum',
    sizeTagMini: 'Mini',
    sizeTagStandard: 'Standard',
    sizeTagLarge: 'Groß',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Die Wissenschaft der Makronentrocknung: Warum die Hautbildung über Erfolg entscheidet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Makrone gehört zu den anspruchsvollsten Gebäcken der französischen Patisserie. Ihre markante glatte Kuppel und der krause Fuß, bekannt als \"Füßchen\" oder \"pied\", hängen vollständig von einem entscheidenden Schritt ab: dem Trocknen der dressierten Schalen vor dem Backen. Während dieser Ruhezeit bildet sich ein dünner Proteinfilm auf der Oberfläche jeder Schale. Beim Backen hält diese Haut den sich ausdehnenden Dampf in der Schale zurück und zwingt ihn, nach unten durch den Boden zu entweichen, wodurch die Schale angehoben wird und der begehrte Fuß entsteht. Ohne ausreichende Trocknung bricht der Dampf durch die Oberseite und verursacht Risse. Bei übermäßiger Trocknung wird die Haut zu starr und die Schalen können nicht richtig aufgehen.',
    },
    {
      type: 'title',
      text: 'Luftfeuchtigkeit und ihre dominierende Rolle in der Trocknungskinetik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die relative Luftfeuchtigkeit ist die einflussreichste Variable bei der Makronentrocknung. Bei 50% relativer Luftfeuchtigkeit benötigt eine handelsübliche 3-cm-Schale in der Regel 30-40 Minuten, um eine ausreichende Haut zu entwickeln. Bei 70% Feuchtigkeit kann sich dies auf 60-90 Minuten verlängern. Bei 30% Feuchtigkeit kann die Trocknung bereits nach 15-20 Minuten abgeschlossen sein. Die zugrunde liegende Physik ist einfach: Die Verdunstungsrate ist proportional zum Dampfdruckdefizit zwischen Schalenoberfläche und Umgebungsluft. Feuchte Luft hat ein geringeres Defizit, was die Verdunstung verlangsamt. Professionelle Patisserien kontrollieren die Luftfeuchtigkeit daher mit großer Sorgfalt und unterhalten oft eigene Makronenräume mit 40-50% relativer Luftfeuchtigkeit.',
    },
    {
      type: 'title',
      text: 'Referenztabelle Trocknungszeiten nach Luftfeuchtigkeit und Schalengröße',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Luftfeuchtigkeit', '2cm Mini', '3cm Standard', '4cm Gross', '5cm Extragross'],
      rows: [
        ['30% (Sehr trocken)', '10-15 min', '15-20 min', '25-30 min', '35-45 min'],
        ['40% (Trocken)', '15-20 min', '20-30 min', '30-40 min', '45-60 min'],
        ['50% (Mässig)', '20-25 min', '30-40 min', '40-55 min', '55-75 min'],
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
      html: 'Die Temperatur beeinflusst die Trocknung über zwei Mechanismen. Erstens kann wärmere Luft mehr Wasserdampf aufnehmen, was die potenzielle Verdunstungsrate von der Schalenoberfläche erhöht. Zweitens steigt die molekulare kinetische Energie mit der Temperatur, wodurch Wassermoleküle schneller aus der flüssigen Phase entweichen. Allerdings beeinflusst die Temperatur auch die Stabilität der Baisermasse. Oberhalb von 28 °C können die Eiklarproteine im Baiser beginnen sich zu destabilisieren, was zu einer geschwächten Struktur führt. Der ideale Bereich für die Makronentrocknung liegt bei 20-25 °C. Unter 18 °C verlangsamt sich die Verdunstung so stark, dass die Trocknung für handelsübliche Schalengrößen unpraktikabel wird.',
    },
    {
      type: 'title',
      text: 'Schalengröße und das Quadrat-Kubik-Gesetz der Trocknung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Schalendurchmesser wirkt sich aufgrund des Quadrat-Kubik-Verhältnisses zwischen Oberfläche und Volumen nichtlinear auf die Trocknungszeit aus. Eine 2-cm-Mini-Makrone hat etwa 3,1 cm² Oberfläche bei 0,5 cm³ Volumen, was ein günstiges Oberflächen-Volumen-Verhältnis von 6:1 ergibt. Eine große 5-cm-Makrone hat etwa 19,6 cm² Oberfläche bei 8,2 cm³ Volumen, ein Verhältnis von nur 2,4:1. Das bedeutet: Größere Schalen haben proportional weniger Oberfläche, über die Feuchtigkeit entweichen kann, was die Trocknungszeit drastisch erhöht. Der Rechner modelliert dies mit einer Potenzfunktion, die anhand empirischer Daten aus professionellen Patisserieküchen kalibriert wurde.',
    },
    {
      type: 'title',
      text: 'Fehlerbehebung bei häufigen Trocknungsproblemen',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Aufgerissene Schalen ohne Füßchen',
      html: 'Das häufigste Makronenproblem. Dies weist fast immer darauf hin, dass die Schalen vor dem Backen nicht lange genug getrocknet wurden. Die Oberflächenhaut war zu schwach, um den sich ausdehnenden Dampf zu halten, der durch die Oberseite ausbrach. <strong>Lösung: Trocknungszeit um 10-15 Minuten verlängern und die Oberfläche vor dem Backen mit einer leichten Fingerberührung testen.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Schiefe oder einseitige Füßchen',
      html: 'Ungleichmäßige Trocknung ist die Ursache. Wenn eine Seite des Blechs schneller trocknet als die andere, steigen die Füßchen ungleichmäßig. Dies passiert oft, wenn Bleche in der Nähe eines Fensters, Ventilators oder einer Wärmequelle stehen. <strong>Lösung: Bleche während des Trocknens drehen und für gleichmäßige Luftzirkulation um alle Schalen sorgen.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hohle Schalen nach dem Backen',
      html: 'Hohle Schalen können durch Übertrocknung entstehen, die eine zu dicke und starre Haut erzeugt. Die Schale kann sich beim Backen nicht richtig ausdehnen, wodurch innen ein Hohlraum entsteht. <strong>Lösung: Trocknungszeit verkürzen und früher auf Hautbildung prüfen. Die Oberfläche sollte sich trocken anfühlen, bei sanftem Druck aber noch leicht nachgeben.</strong>',
    },
    {
      type: 'title',
      text: 'Professionelle Tipps von Patisserie-Chefs',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Die Ofentür Technik für feuchte Tage',
      html: 'An extrem feuchten Tagen verwenden Profiköche die sogenannte \"Ofentrocknung\". Heizen Sie den Ofen auf die niedrigste Stufe vor (in der Regel 50 °C), schalten Sie ihn aus und stellen Sie die dressierten Makronen für 5-10 Minuten bei leicht geöffneter Tür hinein. So entsteht ein warmes, trockenes Mikroklima, das die Hautbildung beschleunigt, ohne die Schalen zu backen.',
    },
    {
      type: 'tip',
      title: 'Der Finger Test für die perfekte Haut',
      html: 'Der sicherste Test für die Makronenbereitschaft: Berühren Sie leicht die Oberfläche einer Schale mit einer sauberen, trockenen Fingerspitze. Bleibt Teig am Finger haften, braucht sie mehr Zeit. Fühlt sich die Oberfläche trocken und matt an und klebt nicht, hat sich die Haut gebildet. Fühlt sich die Oberfläche hart und krustig an und gibt nicht nach, sind die Schalen übertrocknet.',
    },
    {
      type: 'tip',
      title: 'Feuchtigkeitskontrolle ohne spezielle Geräte',
      html: 'Wenn Sie keinen Luftentfeuchter haben, stellen Sie eine Schale mit rohem Reis oder Silicagel-Päckchen neben die trocknenden Makronen. Diese Trockenmittel absorbieren die Umgebungsfeuchtigkeit und schaffen ein trockeneres Mikroklima um das Blech. In Profiküchen ohne Klimatisierung kann dieser einfache Trick die Trocknungszeit an feuchten Tagen um 30-40% verkürzen.',
    },
    {
      type: 'title',
      text: 'Der Einfluss gereifter Eiklar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gereiftes Eiklar ergibt stabilere Baisermassen, die berechenbarer trocknen. Frisches Eiklar enthält mehr Wasser und eine weniger elastische Proteinstruktur, was zu schwächeren Baisermassen führt, die länger für eine ordentliche Haut benötigen. Professionelle Rezepte setzen auf 24-72 Stunden bei Raumtemperatur bzw. 3-5 Tage im Kühlschrank gereiftes Eiklar. Gereiftes Eiklar verliert durch Verdunstung etwa 10-15% seines Wassergehalts, wodurch die Proteine konzentriert und die Baiserfestigkeit verbessert werden.',
    },
    {
      type: 'title',
      text: 'Kurzreferenz: Trocknungszeiten für typische Bedingungen',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Typische Trocknungszeiten für Standard Makronenschalen mit 3cm',
      items: [
        'Klimatisierte Küche (22 °C, 45% Feuchte): 25-30 Minuten',
        'Frühlingstag, Fenster offen (20 °C, 55% Feuchte): 35-45 Minuten',
        'Sommertag, keine Klimaanlage (28 °C, 70% Feuchte): 60-90 Minuten  -  Ofentrocknungstechnik verwenden',
        'Beheizte Wohnung im Winter (21 °C, 30% Feuchte): 15-20 Minuten  -  auf Übertrocknung achten',
        'Regentag (18 °C, 80% Feuchte): 75-100 Minuten  -  Luftentfeuchter dringend empfohlen',
        'Professionelle Patisserie-Küche (22 °C, 45% Feuchte, Umluft): 20-25 Minuten',
      ],
    },
    {
      type: 'paragraph',
      html: 'Jede Küchenumgebung ist einzigartig. Dieser Rechner berücksichtigt die drei entscheidenden Variablen  -  Luftfeuchtigkeit, Temperatur und Schalengröße  -  um Ihnen eine persönliche Prognose der Trocknungszeit zu liefern. Geben Sie Ihre Bedingungen ein und dressieren Sie mit Vertrauen.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
