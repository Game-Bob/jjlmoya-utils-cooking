import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Carry Over Cooking Rechner: Thermische Trägheit berechnen';
const description = 'Berechnen Sie, um wie viel Grad Ihr Braten nach dem Herausnehmen aus dem Ofen noch nachgart. Ermitteln Sie die exakte Entnahmetemperatur für perfekten Medium-Rare-Genuss.';

const faq = [
  {
    question: 'Was ist Carry-Over-Cooking und warum passiert es?',
    answer: 'Carry-Over-Cooking, auch thermische Trägheit genannt, beschreibt den weiteren Anstieg der Kerntemperatur nachdem das Gargut aus dem Ofen genommen wurde. Die in den äußeren Schichten gespeicherte Hitze leitet weiterhin zur Mitte hin. Ein bei 50°C entnommener Braten kann während des Ruhens 54°C erreichen - der Unterschied zwischen Rare und Medium-Rare.',
  },
  {
    question: 'Wie beeinflusst die Ofentemperatur den Carry-Over-Effekt?',
    answer: 'Höhere Ofentemperaturen (200-250°C) erzeugen einen größeren Temperaturgradienten zwischen Oberfläche und Kern und speichern mehr latente Wärme in der Kruste. Das verstärkt den Carry-Over-Effekt. Ein bei 120°C gegarter Braten hat praktisch keinen Nachgareffekt (~1°C), während einer bei 220°C während des Ruhens 5-8°C zulegen kann.',
  },
  {
    question: 'Verändert die Form des Fleisches die Carry-Over-Berechnung?',
    answer: 'Ja. Die Geometrie beeinflusst die Wärmedurchdringung erheblich. Ganze Vögel und dicke Braten haben mehr thermische Masse im Verhältnis zur Oberfläche, speichern daher mehr Wärme und garen stärker nach. Flache Stücke wie Steaks haben ein hohes Oberfläche-zu-Volumen-Verhältnis, kühlen schnell ab und haben nur einen minimalen Nachgareffekt.',
  },
  {
    question: 'Wie lange sollte ich das Fleisch nach der Entnahme ruhen lassen?',
    answer: 'Die Ruhezeit hängt von Gewicht und Geometrie ab. Eine Faustregel ist etwa 1 Minute pro 100 g Fleisch, mindestens 10 Minuten, maximal 45 Minuten. Ein 2-kg-Braten benötigt etwa 16 Minuten Ruhezeit. In dieser Zeit gleicht sich die Kerntemperatur aus und der Carry-Over-Effekt schließt ab.',
  },
];

const howTo = [
  {
    name: 'Fleischgeometrie auswählen',
    text: 'Wählen Sie "Ganzer Vogel" für Geflügel, "Zylindrischer Braten" für Filets und knochenlose Stücke oder "Flaches Stück" für Steaks und Filets.',
  },
  {
    name: 'Gewicht eingeben',
    text: 'Geben Sie das Gesamtgewicht Ihres Stücks in Gramm ein. Für jede Geometrie gelten Mindestgewichte.',
  },
  {
    name: 'Ofentemperatur einstellen',
    text: 'Geben Sie Ihre tatsächliche Ofentemperatur ein. Höhere Temperaturen verstärken den Carry-Over-Effekt.',
  },
  {
    name: 'Zieltemperatur festlegen',
    text: 'Geben Sie die gewünschte Endkerntemperatur ein (z. B. 54°C für Medium-Rare bei Rind, 74°C für Geflügel).',
  },
  {
    name: 'Entnahmetemperatur ablesen',
    text: 'Der Rechner sagt Ihnen genau, wann Sie das Fleisch entnehmen müssen, um Ihr Ziel nach dem Ruhen zu erreichen.',
  },
  {
    name: 'Fleisch ruhen lassen',
    text: 'Lassen Sie das Fleisch für die empfohlene Zeit ruhen. Decken Sie es nicht zu fest ab, sonst wird die Kruste weich.',
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
  slug: 'carry-over-garen-vorhersage',
  title: 'Carry Over Cooking Rechner',
  description: 'Berechnen Sie, um wie viel Grad Ihr Braten nach dem Herausnehmen aus dem Ofen noch nachgart. Ermitteln Sie die exakte Entnahmetemperatur für perfekten Medium-Rare-Genuss.',
  faqTitle: 'Häufig gestellte Fragen',
  ui: {
    title: 'Carry Over Cooking Rechner',
    subtitle: 'Rechner für thermische Trägheit beim Präzisionsbraten',
    geometryLabel: 'Fleischgeometrie',
    wholeBird: 'Ganzer Vogel (Geflügel)',
    cylindricalRoast: 'Zylindrischer Braten (Filet, Knochenlos)',
    flatCut: 'Flaches Stück (Steak, Filet)',
    weightLabel: 'Gewicht',
    ovenTempLabel: 'Ofentemperatur',
    targetTempLabel: 'Ziel-Kerntemperatur',
    pullTemp: 'Entnahmetemperatur',
    carryOver: 'Nachgare',
    restTime: 'Ruhezeit',
    minutes: 'Min.',
    degreesC: '°C',
    degreesF: '°F',
    unitLabel: 'Einheiten',
    metricUnit: 'Metrisch',
    imperialUnit: 'Imperial',
    geometryDescCylindrical: 'Zylindrische Bratengeometrie ausgewählt - mäßige thermische Trägheit mit vorhersagbarem Carry-Over.',
    weightG: 'g',
    weightOz: 'oz',
    errorTargetExceedsOven: 'Die Zieltemperatur darf die Ofentemperatur nicht überschreiten.',
    errorOvenTooHot: 'Die Ofentemperatur übersteigt 350 °C. Bitte reduzieren Sie die Temperatur.',
    errorWeightTooLow: 'Das Gewicht liegt unter dem Minimum für diese Geometrie.',
    errorWeightTooHigh: 'Das Gewicht überschreitet das Maximum für diese Geometrie.',
    pullNow: 'Fleisch jetzt entnehmen',
    pullAt: 'Entnehmen bei',
    toReach: 'um zu erreichen',
    afterRest: 'nach dem Ruhen',
    carryOverWillAdd: 'Die Nachgare beträgt voraussichtlich',
    footerTemplate: '{carry} Nachgare · {rest} ruhen · {weight}{wunit}, {oven} Ofen → {target} Ziel',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Carry-Over-Cooking-Rechner: Die perfekte Entnahmetemperatur jedes Mal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Carry-Over-Cooking beschreibt den weiteren Anstieg der Kerntemperatur, nachdem das Gargut den Ofen verlassen hat. Die äußeren Schichten speichern beim Braten Hitze, und diese Energie leitet während des Ruhens weiter in Richtung des kühleren Kerns. Ein dicker, bei 50°C entnommener Braten kann nach dem Ruhen 54°C erreichen - der Unterschied zwischen Rare und Medium-Rare. Dieser Rechner sagt exakt voraus, um wie viel Grad Ihr Braten noch steigt, damit Sie ihn im perfekten Moment entnehmen können.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5-8°C', label: 'Typische Nachgare (heißer Ofen)', icon: 'mdi:thermometer' },
        { value: '1-3°C', label: 'Minimale Nachgare (niedriger Ofen)', icon: 'mdi:thermometer-low' },
        { value: '16 Min.', label: 'Ruhezeit für 2-kg-Braten', icon: 'mdi:clock-outline' },
        { value: '45 Min.', label: 'Maximal empfohlene Ruhezeit', icon: 'mdi:clock-alert' },
      ],
    },
    {
      type: 'title',
      text: 'Entnahmetemperatur-Tabelle nach Garstufe',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nutzen Sie diese Tabelle, um Ihre Ziel-Kerntemperatur zu finden, und lassen Sie dann den Rechner die exakte Entnahmetemperatur bestimmen. Denken Sie daran: Die Entnahmetemperatur ist immer <strong>niedriger</strong> als Ihr Ziel, da der Carry-Over-Effekt während des Ruhens weitergart.',
    },
    {
      type: 'table',
      headers: ['Garstufe', 'Zieltemperatur', 'Entnahmetemperatur (200 °C Ofen)', 'Ruhezeit'],
      rows: [
        ['Rind - Rare', '52°C / 126°F', '46-48°C / 115-118°F', '10-15 Min.'],
        ['Rind - Medium-Rare', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 Min.'],
        ['Rind - Medium', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 Min.'],
        ['Rind - Well Done', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 Min.'],
        ['Schwein - Medium', '63°C / 145°F', '57-59°C / 135-138°F', '10-15 Min.'],
        ['Schwein - Well Done', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 Min.'],
        ['Hähnchen/Putenbrust', '74°C / 165°F', '68-70°C / 154-158°F', '15-20 Min.'],
        ['Hähnchen/Putenschenkel', '82°C / 180°F', '76-78°C / 169-172°F', '15-20 Min.'],
        ['Lamm - Medium-Rare', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 Min.'],
        ['Lamm - Medium', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 Min.'],
      ],
    },
    {
      type: 'title',
      text: 'Wie die Geometrie die Wärmeberechnung verändert',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Ganzer Vogel',
          icon: 'mdi:food-drumstick',
          description: 'Maximale thermische Masse im Verhältnis zur Oberfläche. Die dicken Brust- und Schenkelkerne speichern enorme latente Wärme.',
          highlight: false,
          points: ['Nachgare: 5-10°C bei 200 °C Ofen', 'Ruhen: 20-45 Minuten', 'Ideal für: Pute, ganzes Hähnchen, Ente', '8-10°C unter Ziel entnehmen'],
        },
        {
          title: 'Zylindrischer Braten',
          icon: 'mdi:food-steak',
          description: 'Die häufigste Bratenform. Moderate Wärmespeicherung mit vorhersagbaren Carry-Over-Werten.',
          highlight: true,
          points: ['Nachgare: 3-7°C bei 200 °C Ofen', 'Ruhen: 15-30 Minuten', 'Ideal für: Filet, Schweinelende, Lammkrone', '5-7°C unter Ziel entnehmen'],
        },
        {
          title: 'Flaches Stück',
          icon: 'mdi:food',
          description: 'Hohes Oberfläche-zu-Volumen-Verhältnis - die Hitze entweicht schnell. Die Nachgare ist minimal, aber dennoch relevant.',
          highlight: false,
          points: ['Nachgare: 1-3°C bei 200 °C Ofen', 'Ruhen: 5-15 Minuten', 'Ideal für: Steaks, Hähnchenbrust, Fischfilet', '1-3°C unter Ziel entnehmen'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Häufige Carry-Over-Fehler und wie man sie behebt',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Zu spät entnommen',
      html: 'Wenn Sie warten, bis das Thermometer die Zieltemperatur anzeigt, bevor Sie entnehmen, schießt die Nachgare um 3-8°C über das Ziel hinaus. Aus einem Medium-Rare-Braten wird Medium oder Medium-Well. <strong>Entnehmen Sie immer 5-8°C unter Ihrer Zieltemperatur.</strong> Nutzen Sie diesen Rechner, um den exakten Wert zu ermitteln.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Zu früh aufgeschnitten',
      html: 'Wenn Sie einen Braten sofort nach der Entnahme anschneiden, entweichen bis zu 30 % des Fleischsafts. Der Temperaturgradient hat keine Zeit, sich auszugleichen - der Kern bleibt roh, während die äußeren Schichten übergaren. <strong>Ruhen Sie die volle empfohlene Zeit.</strong> Decken Sie den Braten locker mit Folie ab - nicht fest einwickeln, sonst wird die Kruste durch den Dampf weich.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ofentemperatur zu niedrig',
      html: 'Ein niedriger Ofen (unter 150°C / 300°F) erzeugt nur einen minimalen Temperaturgradienten zwischen Oberfläche und Kern. Das bedeutet fast keinen Carry-Over-Effekt. Wenn Sie bei niedriger Temperatur garen, können Sie bei exakt Ihrer Zieltemperatur entnehmen, ohne ein Überschießen riskieren zu müssen. Allerdings wird die Krustenbildung deutlich geringer ausfallen.',
    },
    {
      type: 'title',
      text: 'Prof-Tipps für perfektes Braten',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Die 10 Grad Regel',
      html: 'Ein heißer Ofen (220°C / 425°F) erzeugt bei ganzen Vögeln etwa 1°C Nachgare pro 100 g Fleisch und bei zylindrischen Braten 0,7°C pro 100 g. Nutzen Sie dies als Plausibilitätsprüfung für den Rechner: Ein 2-kg-Hähnchen bei 220°C sollte etwa 7-9°C nachgaren.',
    },
    {
      type: 'tip',
      title: 'Die Ruheposition ist entscheidend',
      html: 'Lassen Sie Fleisch immer auf einem warmen Teller oder Brett ruhen, nicht auf einer kalten Oberfläche. Eine kalte Unterfläche entzieht dem Braten von unten Wärme und führt zu ungleichmäßigen Endtemperaturen. Bei ganzen Vögeln mit der Brust nach oben ruhen lassen, damit sich der Fleischsaft gleichmäßig im Brustfleisch verteilt.',
    },
    {
      type: 'tip',
      title: 'Abdecken, nicht einwickeln',
      html: 'Decken Sie den Braten während des Ruhens locker mit Alufolie ab. Festes Einwickeln staut Dampf und macht die Kruste matschig. Ein lockerer Deckel reduziert den Wärmeverlust um etwa 30 %, lässt aber Dampf entweichen - das bewahrt sowohl den Carry-Over-Effekt als auch die knusprige Kruste.',
    },
    {
      type: 'title',
      text: 'Glossar der wichtigsten Bratbegriffe',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Carry-Over-Cooking', definition: 'Der weitere Anstieg der Kerntemperatur nach Entfernen des Garguts von der Hitzequelle, verursacht durch Wärmeleitung von den äußeren Schichten zum Kern.' },
        { term: 'Entnahmetemperatur', definition: 'Die Kerntemperatur, bei der Sie das Fleisch aus dem Ofen nehmen sollten. Immer niedriger als die Zieltemperatur, um die Nachgare zu berücksichtigen.' },
        { term: 'Zieltemperatur', definition: 'Die endgültige Kerntemperatur, die das Fleisch nach dem Ruhen erreichen soll. Auch Serviertemperatur genannt.' },
        { term: 'Thermische Trägheit', definition: 'Die Tendenz einer Masse, Temperaturänderungen zu widerstehen. Schwerere, dichtere Stücke haben eine höhere thermische Trägheit und garen stärker nach.' },
        { term: 'Ruhen', definition: 'Die Phase nach dem Garen, in der das Fleisch unberührt liegt, damit sich die Hitze gleichmäßig verteilt und der Fleischsaft sich in den Fasern neu verteilt.' },
        { term: 'Temperaturgradient', definition: 'Der Temperaturunterschied zwischen der Oberfläche des Fleisches und seinem Kern. Ein größerer Gradient speichert mehr latente Wärme für die Nachgare.' },
        { term: 'Latente Wärme', definition: 'Die Wärmeenergie, die während des Garens in den äußeren Schichten des Fleisches gespeichert wird. Diese Energie wird freigesetzt, wenn sich die Temperatur während des Ruhens ausgleicht.' },
      ],
    },
    {
      type: 'title',
      text: 'Kurzreferenz: Empfohlene Entnahmetemperaturen',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Bei diesen Temperaturen entnehmen für perfekte Ergebnisse (200 °C / 400 °F Ofen)',
      items: [
        'Rind Medium-Rare: entnehmen bei 48-50°C / 118-122°F, Ziel 54°C / 129°F',
        'Rind Medium: entnehmen bei 54-56°C / 129-133°F, Ziel 60°C / 140°F',
        'Schweinelende: entnehmen bei 57-59°C / 135-138°F, Ziel 63°C / 145°F',
        'Hähnchenbrust: entnehmen bei 68-70°C / 154-158°F, Ziel 74°C / 165°F',
        'Ganze Pute: entnehmen bei 68-70°C / 154-158°F, Ziel 74°C / 165°F (Brust)',
        'Lammkrone: entnehmen bei 48-50°C / 118-122°F, Ziel 54°C / 129°F',
      ],
    },
    {
      type: 'paragraph',
      html: 'Jeder Braten ist anders. Gewicht, exakte Ofentemperatur und die Form des Stücks verschieben diese Werte. Genau das macht dieser Rechner - er nimmt Ihre spezifischen Eingaben und berechnet die präzise Entnahmetemperatur für Ihre genaue Situation. Kein Rätselraten, keine verdorbenen Braten.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
