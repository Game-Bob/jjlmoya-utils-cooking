import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Fleischbinder:Transglutaminase:Rechner: Dossier zur Molekularküche';
const description = 'Berechnen Sie die präzise Transglutaminase-Dosierung (TG) für die Fleischbindung. Erhalten Sie Trockenbestäubungs- oder Schlammverhältnisse, Inkubationszeit und Temperatur-Sicherheitswarnungen.';

const faq = [
  {
    question: 'Was ist Transglutaminase und wie bindet sie Fleisch?',
    answer: 'Transglutaminase (TG), auch bekannt als "Fleischkleber", ist ein Enzym, das die Bildung kovalenter Bindungen zwischen den Aminosäuren Glutamin und Lysin in Proteinen katalysiert. Beim Auftragen auf Fleischoberflächen erzeugt es Querverbindungen, die separate Stücke zu einer einzigen zusammenhängenden Platte verschmelzen. Die Reaktion benötigt Zeit und kalte Temperaturen (2-5 °C), um sich vollständig zu entwickeln, typischerweise 6 bis 24 Stunden.',
  },
  {
    question: 'Was ist der Unterschied zwischen Trockenbestäubung und Schlammauftrag?',
    answer: 'Bei der Trockenbestäubung wird das TG-Pulver direkt auf die Fleischoberfläche gestreut (0,75:1,5 % des Fleischgewichts). Die Schlamm-Methode mischt einen Teil TG mit vier Teilen Wasser zu einer streichfähigen Paste, ideal zum Beschichten unregelmäßiger Oberflächen oder zum Auftragen dünner, gleichmäßiger Schichten auf große Braten oder Filets mit Haut.',
  },
  {
    question: 'Beeinflusst die Temperatur die Transglutaminase-Aktivität?',
    answer: 'Ja. TG ist zwischen 2 °C und 15 °C am aktivsten. Bei höheren Temperaturen (bis zu 40 °C) beschleunigt sich die Reaktion, muss aber genau überwacht werden. Über 60 °C denaturiert das Enzym und wird dauerhaft inaktiv: die Quervernetzungsreaktion stoppt vollständig. Halten Sie TG-gebundenes Fleisch während des Garens stets unter 60 °C, um die Bindung zu erhalten.',
  },
  {
    question: 'Kann ich Transglutaminase bei Fisch oder Schalentieren verwenden?',
    answer: 'Ja, aber Fisch und Schalentiere haben geringere Mengen an Lysin und Glutamin in ihren Muskelproteinen als rotes Fleisch und Geflügel. Möglicherweise benötigen Sie ein höheres TG-Verhältnis (1,2:1,5 %) und längere Inkubationszeiten. Für empfindliche Jakobsmuscheln oder dünne Fischfilets empfiehlt sich die Schlamm-Methode für eine gleichmäßigere Abdeckung.',
  },
];

const howTo = [
  {
    name: 'Auftragsmethode wählen',
    text: 'Wählen Sie Trockenbestäubung für gleichmäßige Oberflächen wie Braten und Steaks. Wählen Sie Schlamm für unregelmäßige Schnitte, dünne Schichten oder Proteine mit Haut.',
  },
  {
    name: 'Fleischgewicht eingeben',
    text: 'Geben Sie das Gesamtgewicht des Fleisches oder Proteins in Gramm ein, das Sie binden möchten.',
  },
  {
    name: 'Proteinart angeben',
    text: 'Wählen Sie die Proteinart, die am besten zu Ihrem Stück passt. Rotes Fleisch benötigt weniger TG; Fisch und Schalentiere benötigen mehr.',
  },
  {
    name: 'Inkubationstemperatur einstellen',
    text: 'Geben Sie die Kühllagertemperatur (2:40 °C) ein. Der Rechner schätzt die erforderliche Bindungszeit.',
  },
  {
    name: 'TG abwiegen und auftragen',
    text: 'Messen Sie das berechnete TG-Pulver ab. Tragen Sie es durch Bestäuben oder Aufstreichen des Schlamms auf und drücken Sie die Proteinoberflächen fest zusammen.',
  },
  {
    name: 'Ruhen lassen und kühlen',
    text: 'Wickeln Sie es fest in Frischhaltefolie und kühlen Sie es für den empfohlenen Inkubationszeitraum, bevor Sie es garen.',
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
  slug: 'fleischbinder-transglutaminase-rechner',
  title: 'Fleischbinder:Transglutaminase:Rechner',
  description: 'Berechnen Sie die präzise Transglutaminase-Dosierung (TG) für die Fleischbindung. Erhalten Sie Trockenbestäubungs- oder Schlammverhältnisse, Inkubationszeit und Temperatur-Sicherheitswarnungen.',
  faqTitle: 'Häufig gestellte Fragen',
  ui: {
    title: 'Fleischbinder:Transglutaminase:Rechner',
    subtitle: 'Molekulare Präzision für Protein:Quervernetzung',
    methodLabel: 'Auftragsmethode',
    dryMethod: 'Trockenbestäubung',
    slurryMethod: 'Schlamm (streichfähige Paste)',
    weightLabel: 'Fleisch-/Protein-Gewicht',
    proteinLabel: 'Proteinart',
    redMeat: 'Rotes Fleisch (Rind, Lamm, Wild)',
    poultry: 'Geflügel (Huhn, Pute, Ente)',
    fish: 'Fisch (feste Filets, ganzer Fisch)',
    shellfish: 'Schalentiere (Jakobsmuscheln, Garnelen, Hummer)',
    unitLabel: 'Maßsystem',
    metricUnit: 'Metrisch (g / °C)',
    imperialUnit: 'Imperial (oz / °F)',
    tempLabel: 'Inkubationstemperatur',
    resultTitle: 'Dosierungsergebnisse',
    tgAmount: 'Transglutaminase (TG)',
    waterAmount: 'Wasser (für Schlamm)',
    totalWeight: 'Gesamtgewicht gebunden',
    ratioLabel: 'TG-Verhältnis',
    incubationLabel: 'Empfohlene Inkubation',
    incubationRange: '{min}h bis {max}h',
    dryDustingDesc: 'TG-Pulver gleichmäßig über die Fleischoberfläche streuen, dann die Stücke zusammendrücken. Ideal für flache Schnitte und Braten.',
    slurryDesc: 'TG mit 4 Teilen Wasser zu einer streichfähigen Paste mischen. Mit einem Pinsel für unregelmäßige Oberflächen, Filets oder Hautbindung auftragen.',
    enzymeDestroyed: 'Enzym zerstört: Temperatur überschreitet die Denaturierungsschwelle. Transglutaminase ist denaturiert und kann nicht binden.',
    noWarning: '',
    hours: 'Stunden',
    grams: 'g',
    milliliters: 'ml',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Wie viel Transglutaminase sollte man pro Kilo Fleisch verwenden?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die richtige Dosis hängt von der Proteinart und der Auftragsmethode ab. Für rotes Fleisch verwenden Sie 0,75:1,0 % TG bezogen auf das Gewicht (7,5:10 g pro kg). Für Geflügel 1,0:1,2 %. Für Fisch und Schalentiere 1,2:1,5 %. Für flache Schnitte als Trockenbestäubung auftragen oder für unregelmäßige Oberflächen mit 4 Teilen Wasser als Schlamm mischen. Geben Sie das Proteingewicht in den obigen Rechner ein, um eine genaue Messung zu erhalten.',
    },
    {
      type: 'title',
      text: 'Trockenbestäubung vs. Schlamm: Welche Methode sollten Sie wählen?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Trockenbestäubung funktioniert am besten auf flachen, gleichmäßigen Oberflächen wie Steaks, Braten oder Schnitzeln. Das TG-Pulver direkt aufstreuen (0,75:1,5 % des Fleischgewichts) und die Stücke zusammendrücken. Die Schlamm-Methode (1 Teil TG zu 4 Teilen Wasser) ist besser für unregelmäßige Schnitte, Filets mit Haut oder empfindliche Jakobsmuscheln, bei denen eine gleichmäßige Abdeckung wichtig ist. Die Paste aufstreichen, zusammensetzen und fest einwickeln. Beide Methoden erfordern eine kalte Inkubation, um die Bindung abzuschließen.',
    },
    {
      type: 'title',
      text: 'Warum Temperaturkontrolle über Ihre Bindung entscheidet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Transglutaminase arbeitet am besten zwischen 2 °C und 5 °C und bildet über 6:24 Stunden starke Querverbindungen. Bei höheren Kühlschranktemperaturen (5:15 °C) beschleunigt sich die Reaktion auf 3:8 Stunden, aber die Bindungen können schwächer sein. Über 40 °C denaturiert das Enzym schnell, und bei 60 °C wird es sofort zerstört: alle vorhandenen Bindungen hören auf, sich zu bilden, und das Fleisch trennt sich während des Garens. Überwachen Sie stets Ihre Kühllagertemperatur mit der Anzeige im obigen Visualizer.',
    },
    {
      type: 'table',
      headers: ['Protein', 'TG-Dosis (% des Gewichts)', 'Methode', 'Inkubation (2:5 °C)', 'Bindungsstärke'],
      rows: [
        ['Rind, Lamm, Wild', '0,75:1,0 %', 'Trockenbestäubung', '6:12 h', 'Sehr stark'],
        ['Huhn, Pute, Ente', '1,0:1,2 %', 'Beide', '8:16 h', 'Stark'],
        ['Lachs, Kabeljau, Wolfsbarsch', '1,2:1,5 %', 'Schlamm', '12:24 h', 'Mäßig'],
        ['Jakobsmuscheln, Garnelen, Hummer', '1,0:1,5 %', 'Schlamm', '12:24 h', 'Mäßig'],
      ],
    },
    {
      type: 'title',
      text: 'Häufige Fehler beim Binden von Fleisch mit TG',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Zu viel Enzym:</strong> Die Verwendung von mehr als 1,5 % TG hinterlässt einen sichtbaren weißen Rückstand und eine kreidige Textur. Die überschüssige Menge macht die Bindung nicht stärker.',
        '<strong>Fett oder Silberhaut auf der Oberfläche:</strong> TG kann nicht an Fett oder Bindegewebe binden. Schneiden Sie Oberflächen sauber, bis blanke Muskelfasern sichtbar sind, bevor Sie auftragen.',
        '<strong>Ruhezeit überspringen:</strong> Die Quervernetzungsreaktion dauert Stunden. Wenn Sie sofort nach dem Zusammensetzen garen, wird das Enzym weggespült, bevor sich Bindungen bilden.',
        '<strong>Hitze über 60 °C beim Garen:</strong> Die Bindung hält schonendem Garen stand (Sous-vide bei 55:58 °C ist ideal), aber hohe Brattemperaturen können die Grenzfläche schwächen.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
