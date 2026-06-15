import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kase Flockungsmultiplikator Rechner';
const description = 'Finden Sie den genauen Zeitpunkt zum Schneiden des Bruchs in der handwerklichen Kaseherstellung. Nutzen Sie die Flockungsmultiplizermethode zur Berechnung der Gerinnungszeit, Steuerung der Feuchtigkeit und Verbesserung der Kaseausbeute mit unserem kostenlosen Rechner.';
const faq = [
  {
    question: 'Was ist die Flockungsmethode in der Kaseherstellung?',
    answer: 'Die Flockungsmethode ist eine Technik zur Bestimmung des genauen Zeitpunkts zum Schneiden des Bruchs. Sie misst die Zeit von der Zugabe des Labs bis zum ersten Anzeichen der Gelbildung (Flockung) und multipliziert diese Zeit mit einem spezifischen Faktor, der vom Kasestil abhangt.'
  },
  {
    question: 'Wie erkenne ich den Flockungszeitpunkt?',
    answer: 'Die gebrauchlichste Methode ist der Schalentest. Legen Sie eine kleine, sterilisierte, leichte Kunststoffschale auf die Milchoberflache nach der Labzugabe. Tippen oder drehen Sie sie sanft jede Minute. Anfangs dreht sie sich frei. Der Moment, in dem die Schale aufgrund der beginnenden Gelbildung stehen bleibt oder Widerstand bietet, ist der Flockungszeitpunkt.'
  },
  {
    question: 'Warum ist der Zeitpunkt des Bruchschnitts so entscheidend?',
    answer: 'Das Schneiden des Bruchs zum richtigen Zeitpunkt kontrolliert die Synarese (Feuchtigkeitsverlust). Zu fruhes Schneiden fuhrt zu zerbrechlichem Bruch, Fettverlust und geringer Ausbeute. Zu spates Schneiden ergibt einen zahlen Bruch, der zu viel Feuchtigkeit halt oder nicht richtig abtropft, was zu saurem, uberansauertem Kase fuhrt.'
  },
  {
    question: 'Was ist ein Flockungsmultiplikator?',
    answer: 'Ein Multiplikator ist ein numerischer Faktor, der auf die primare Flockungszeit angewendet wird, um die gesamte Gerinnungszeit vor dem Schneiden zu berechnen. Standardmultiplikatoren reichen von 2.0x (trockene Kase wie Parmesan) bis 5.0x oder 6.0x (feuchte Kase wie Camembert).'
  },
  {
    question: 'Wie beeinflussen Temperatur und Labstarke die Flockung?',
    answer: 'Hohere Temperaturen und starkeres Lab beschleunigen die Flockung, was bedeutet, dass die Milch schneller geliert. Da die gesamte Schneidezeit direkt proportional zur Flockungszeit ist, kompensiert die Multiplikatormethode diese Anderungen automatisch und gewahrleistet konsistente Brucheigenschaften.'
  }
];

const howTo = [
  {
    name: 'Lab zugeben und Timer starten',
    text: 'Ruhren Sie Ihr Lab grundlich ein und starten Sie sofort die Phase-1-Stoppuhr im Rechner.'
  },
  {
    name: 'Schalentest durchfuhren',
    text: 'Legen Sie eine leichte Kunststoffschale auf die Milchoberflache und prufen Sie regelmaBig auf Widerstand.'
  },
  {
    name: 'Flockungszeitpunkt markieren',
    text: 'In dem Moment, in dem die Schale dem Drehen oder Antippen widersteht, klicken Sie auf die Stopp-Taste, um die Flockungszeit zu erfassen.'
  },
  {
    name: 'Kasetyp oder Multiplikator auswahlen',
    text: 'Wahlen Sie einen Kasestil aus der Datenbank oder geben Sie einen benutzerdefinierten Multiplikator ein. Die App berechnet die Gesamtzeit und startet den Countdown zum Schneiden.'
  },
  {
    name: 'Bruch zum Signal schneiden',
    text: 'Wenn der Timer Null erreicht, hat der Bruch die optimale Spannung erreicht. Schneiden Sie den Bruch wie in Ihrem Rezept angegeben in Wurfel.'
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
  slug: 'kaese-flockungsmultiplikator-rechner',
  title,
  description: 'Finden Sie den genauen Zeitpunkt zum Schneiden des Bruchs in der handwerklichen Kaseherstellung. Nutzen Sie die Flockungsmultiplizermethode zur Berechnung der Gerinnungszeit, Steuerung der Feuchtigkeit und Verbesserung der Kaseausbeute mit unserem kostenlosen Rechner.',
  faqTitle: 'Haufig gestellte Fragen',
  ui: {
    title: 'Kase Flockungsmultiplikator',
    subtitle: 'Finden Sie das perfekte Bruchschneidefenster basierend auf dem tatsachlichen Gelierverhalten',
    flocculationLabel: 'Primare Flockungszeit (Minuten:Sekunden)',
    multiplierLabel: 'Flockungsmultiplikator',
    cheeseTypeLabel: 'Kasestil Voreinstellung',
    totalCoagulationLabel: 'Gesamte Gerinnungszeit',
    timeRemainingLabel: 'Verbleibende Zeit bis zum Schnitt',
    flocculationTimeLabel: 'Flockungszeit',
    moistureLabel: 'Erwartete Bruchfeuchtigkeitsretention',
    customOption: 'Benutzerdefinierter Multiplikator',
    startTimer: 'Lab Timer starten',
    markFlocculation: 'Flockung markieren',
    resetTimer: 'Timer zurucksetzen',
    warningTitle: 'Labqualitat Warnung',
    warningText: 'Die aufgezeichnete Flockungszeit ist außergewohnlich kurz. Dies kann auf eine ubermaßige Labdosis oder falsche Temperatureinstellungen hindeuten, was zu einer gummiartigen Textur oder bitteren Aromen fuhren kann.',
    phase1Title: 'Phase 1: Labung und Flockung',
    phase2Title: 'Phase 2: Gerinnungs Countdown',
    phaseComplete: 'Bruch ist bereit zum Schneiden!',
    statusWaiting: 'Lab einruhren...',
    statusFlocculated: 'Flockung erkannt',
    statusCoagulating: 'Gerinnung...',
    statusReady: 'Bereit zum Schneiden',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Wann den Bruch schneiden: Die Flockungsmultiplizermethode fur perfekten Kase bei jeder Charge',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie sich jemals gefragt haben <strong>"wann sollte ich den Bruch schneiden?"</strong> oder <strong>"woran erkenne ich, dass der Bruch bereit ist?"</strong>, liegt die Antwort in der Flockungsmultiplizermethode. Im Gegensatz zur industriellen Kaseherstellung, die auf festen Timern basiert, messen handwerkliche Kasere den Moment, in dem die Milch zu gelieren beginnt (den Flockungspunkt) und multiplizieren diese Zeit mit einem stilabhangigen Faktor. Dies erfasst alle Variablen - Milchsäuregehalt, Kalziumspiegel, Temperatur, Labstarke - in einer einzigen Messung. Unser <strong>Kase Flockungsmultiplikator Rechner</strong> erledigt die Mathematik, damit Sie zum perfekten Zeitpunkt schneiden konnen, jedes Mal.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2.0x', label: 'Hartkase', icon: 'mdi:cheese' },
        { value: '3.0x', label: 'Schnitthartkase', icon: 'mdi:cheese' },
        { value: '5.0x', label: 'Weichkase', icon: 'mdi:cheese' },
        { value: '10-15m', label: 'Typische Flockungszeit', icon: 'mdi:timer-outline' }
      ]
    },
    {
      type: 'title',
      text: 'Haufige Kaseherstellungsprobleme gelost durch die Flockungsmethode',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Inkonsistente Bruchfestigkeit:</strong> Feste Timer konnen Chargenschwankungen der Milch nicht berucksichtigen. Die Flockungsmethode passt sich Ihrer tatsachlichen Milchchemie an.',
        '<strong>Geringe Kaseausbeute:</strong> Zu fruhes oder zu spates Schneiden verursacht Fett- und Proteinverlust. Die Multiplikatormethode trifft das exakte Fenster fur optimale Retention.',
        '<strong>Falscher Feuchtigkeitsgehalt:</strong> Hartkase benotigt trockenen Bruch; Weichkase benotigt feuchten Bruch. Unterschiedliche Multiplikatoren (2.0x bis 6.0x) steuern die Synarese direkt.',
        '<strong>Variable Labaktivitat:</strong> Die Labstarke andert sich im Laufe der Zeit und zwischen Marken. Die Flockungszeitmessung erfasst die tatsachliche Aktivitat in Ihrem Kessel genau jetzt.'
      ]
    },
    {
      type: 'title',
      text: 'So funktioniert der Schalentest Schritt fur Schritt',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Der Schalentest ist die einfachste Methode, um Flockung ohne spezielle Ausrustung zu erkennen. Nachdem Sie das Lab zugegeben und grundlich eingeruhrt haben, legen Sie eine kleine sterilisierte Kunststoffschale oder einen Flaschendeckel auf die Milchoberflache. Alle 30 bis 60 Sekunden tippen oder drehen Sie sie sanft. Wahrend die Milch noch flussig ist, bewegt sich die Schale frei. In dem Moment, in dem sie Widerstand bietet - das ist Ihr <strong>Flockungspunkt</strong>. Notieren Sie diese Zeit und geben Sie sie in den obigen Rechner ein.'
    },
    {
      type: 'tip',
      title: 'Flaschendeckel fur mehr Empfindlichkeit verwenden',
      html: 'Ein leichter Kunststoffflaschendeckel ist empfindlicher als eine Schale und liefert einen klareren Stoppunkt. Sterilisieren Sie ihn 2 Minuten in kochendem Wasser vor der Verwendung und lassen Sie ihn ab dem Zeitpunkt der Labzugabe auf der Milch schwimmen.'
    },
    {
      type: 'tip',
      title: 'Temperatur stabil halten',
      html: 'Die Flockungszeit ist stark temperaturabhangig. Ein Abfall von nur 2C kann Ihre Flockungszeit verdoppeln. Halten Sie die Milch wahrend der gesamten Gerinnungsphase bei einer stabilen Temperatur (typischerweise 30-35C, je nach Kasestil).'
    },
    {
      type: 'tip',
      title: 'Auf sehr schnelle Flockung achten',
      html: 'Wenn die Flockung in unter 8 Minuten (480 Sekunden) eintritt, haben Sie moglicherweise zu viel Lab zugegeben oder Ihre Milchtemperatur ist zu hoch. Dies kann eine gummiartige Textur und bittere Aromen verursachen. Der Rechner warnt Sie, wenn dies passiert.'
    },
    {
      type: 'title',
      text: 'Flockungsmultiplikator Referenz nach Kasetyp',
      level: 2
    },
    {
      type: 'table',
      headers: ['Kasestil', 'Multiplikator', 'Erwartete Feuchtigkeit', 'Schnittfestigkeit', 'Alterungspotenzial'],
      rows: [
        ['Parmesan, Grana', '2.0x', 'Sehr niedrig', 'Sehr fest', '12+ Monate'],
        ['Mozzarella (frisch)', '2.0x', 'Sehr hoch', 'Weich / Dehnbar', 'Nur frisch'],
        ['Swiss, Alpine', '2.5x', 'Niedrig', 'Fest', '6-12 Monate'],
        ['Cheddar, Gouda', '3.0x', 'Mittel-niedrig', 'Fest / Federnd', '3-12 Monate'],
        ['Blauschimmelkase', '3.5x - 4.0x', 'Mittel', 'Zart', '2-6 Monate'],
        ['Camembert, Brie', '5.0x', 'Hoch', 'Sehr zart', '3-8 Wochen'],
        ['Lab / Frischer Chevre', '5.0x - 6.0x', 'Sehr hoch', 'Delikat', 'Frisch - 2 Wochen']
      ]
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Niedriger Multiplikator 2.0x to 2.5x',
          icon: 'mdi:cheese',
          description: 'Verwendet fur harte, trockene Kasesorten, die eine niedrige Feuchtigkeitsretention erfordern.',
          highlight: false,
          points: ['Mozzarella & Parmesan: 2.0x', 'Alpine Stile: 2.5x', 'Schnelle Molkenentwasserung', 'Erzeugt dichten, alterungsfahigen Bruch']
        },
        {
          title: 'Mittlerer Multiplikator 3.0x to 4.0x',
          icon: 'mdi:cheese',
          description: 'Standardbereich fur schnittharte Kase, der Feuchtigkeit und Saure ausgleicht.',
          highlight: true,
          points: ['Cheddar & Gouda: 3.0x', 'Blauschimmelkase: 3.5x bis 4.0x', 'Ausgewogene Molkenabgabe', 'Flexibles Reifungspotenzial']
        },
        {
          title: 'Hoher Multiplikator 5.0x to 6.0x',
          icon: 'mdi:cheese',
          description: 'Verwendet fur weiche, cremige, feuchtigkeitsreiche Kase.',
          highlight: false,
          points: ['Camembert & Brie: 5.0x', 'Lab & weiche Edelschimmelsorten', 'Hohe Feuchtigkeitsretention', 'Delikate, cremige Pastenentwicklung']
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Fehlerbehebung: 3 Anzeichen, dass Ihr Bruch nicht richtig stockt',
      html: '<strong>Flockung in unter 6 Minuten:</strong> Zu viel Lab oder Milch zu hei&szlig;. Reduzieren Sie das Lab um 25% nachste Charge. <strong>Flockung dauert uber 25 Minuten:</strong> Lab konnte abgelaufen sein, Milch zu kalt oder Kalziumgehalt zu niedrig. Kalziumchlorid zugeben. <strong>Bruch ist beim Schneiden schleimig oder sprode:</strong> Der Multiplikator konnte zu hoch oder zu niedrig fur Ihren Kasestil sein. In 0.5x-Schritten anpassen.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Hartkase (Parmesan, Alpine)',
      html: 'Verwenden Sie <strong>2.0x - 2.5x Multiplikator</strong>. Schneiden Sie den Bruch fruher fur maximale Molkenabgabe. Diese Bruche werden geschnitten, wenn das Gel noch relativ empfindlich ist, was einen dichten, trockenen Bruch ergibt, der ideal fur lange Reifung ist. Der Rechner zeigt eine kurzere gesamte Gerinnungszeit an.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Schnitthartkase (Cheddar, Gouda)',
      html: 'Verwenden Sie <strong>3.0x Multiplikator</strong>. Der Standardbereich fur die meisten handwerklichen Kaseherstellungen. Gleicht Feuchtigkeitsretention mit Molkenabgabe aus. Der Bruch ist federnd und bricht sauber. Die meisten Kaserezepte fallen in diese Kategorie.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Weichkase (Camembert, Brie)',
      html: 'Verwenden Sie <strong>5.0x - 6.0x Multiplikator</strong>. Lassen Sie das Gel deutlich starken, bevor Sie schneiden. Dies schlie&szlig;t Feuchtigkeit im Bruch ein und erzeugt die cremige, streichfahige Textur, die fur Edelschimmelkase charakteristisch ist. Behandeln Sie den Bruch vorsichtig, um die zuruckgehaltene Molke nicht zu verlieren.'
    },
    {
      type: 'title',
      text: 'Fachbegriffe der handwerklichen Kaseherstellung',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Flockungspunkt', definition: 'Der Moment im Kaseherstellungsprozess, in dem Milchproteine beginnen, sich zusammenballen und ein weiches Gel zu bilden.' },
        { term: 'Lab', definition: 'Ein Enzymkomplex (hauptsachlich Chymosin), der verwendet wird, um Milch zu koagulieren und sie in Feststoffe (Bruch) und Flussigkeit (Molke) zu trennen.' },
        { term: 'Synarese', definition: 'Die Extraktion oder Abgabe einer Flussigkeit aus einem Gel, wie Molke, die aus Kasebruch abtropft.' },
        { term: 'Gerinnungszeit', definition: 'Die Gesamtdauer von der Labzugabe bis der Bruch bereit zum Schneiden ist.' }
      ]
    },
    {
      type: 'summary',
      title: 'Wichtige Erkenntnisse fur den perfekten Bruchschnitt',
      items: [
        'Messen Sie die Flockungszeit prazise mit dem Schalentest. Geben Sie sie in den obigen Rechner ein.',
        'Wahlen Sie den Multiplikator passend zu Ihrem Kasestil: 2.0x fur Hartkase, 3.0x fur Schnitthartkase, 5.0x fur Weichkase.',
        'Halten Sie die Milchtemperatur wahrend der Gerinnung stabil. Schon eine Anderung von 2C verandert die Flockungszeit erheblich.',
        'Wenn die Flockung in unter 8 Minuten eintritt, reduzieren Sie das Lab nachstes Mal. Wenn uber 25 Minuten, prufen Sie die Labfrische.',
        'Der Rechner erledigt die Mathematik, damit Sie sich auf Technik und Konsistenz konzentrieren konnen.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
