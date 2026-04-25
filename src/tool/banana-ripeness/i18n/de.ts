import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Bananen Diagnose und Konservierung: Wissenschaftlicher Leitfaden";
const description = "Analysieren Sie den Reifegrad Ihrer Bananen mit wissenschaftlicher Präzision. Lernen Sie Konservierungstechniken, die Biochemie von Ethylen und die Ernährungsoptimierung kennen.";
const faq = [
  {
    question: 'Warum werden Bananen im Kühlschrank schwarz?',
    answer: 'Die Kälte bricht die Zellwände der Schale auf und setzt Enzyme frei, die Phenole oxidieren und schwarze Polyphenole erzeugen. Das Innere bleibt jedoch meist länger fest und süß als außerhalb des Kühlschranks.',
  },
  {
    question: 'Wie kann ich eine Banane schnell reifen lassen?',
    answer: 'Legen Sie sie zusammen mit einem Apfel oder einer Tomate in eine geschlossene Papiertüte. Diese geben Ethylengas ab, welches die Reifung beschleunigt. Wenn es sehr schnell gehen muss, können Sie sie für einige Minuten bei niedriger Temperatur in den Ofen legen.',
  },
  {
    question: 'Ist es sicher, Bananen mit braunen Flecken zu essen?',
    answer: 'Ja, absolut. Tatsächlich zeigen die Flecken an, dass die Stärke in Zucker umgewandelt wurde, was sie süßer und verdaulicher macht. Entsorgen Sie sie nur, wenn sie schimmeln, unangenehm riechen oder extrem weich sind.',
  },
  {
    question: 'Was ist Ethylen?',
    answer: 'Es ist ein Pflanzenhormon in Form eines Gases, das Wachstum und Reifung reguliert. Die Banane ist eine klimakterische Frucht, was bedeutet, dass sie auch nach der Ernte weiterhin Ethylen produziert und nachreift.',
  },
];
const howTo = [
  {
    name: 'Farbe beobachten',
    text: 'Untersuchen Sie sorgfältig die Farbe der Schale, von grün bis dunkelbraun, um den aktuellen Reifegrad zu bestimmen.',
  },
  {
    name: 'Simulator nutzen',
    text: 'Verschieben Sie den Reifegrad-Regler, um genaue Vorhersagen darüber zu erhalten, wann die nächste Stufe erreicht wird.',
  },
  {
    name: 'Bedingungen anpassen',
    text: 'Ändern Sie Temperatur und Luftfeuchtigkeit, um zu sehen, wie sie die Reifungsgeschwindigkeit beeinflussen.',
  },
  {
    name: 'Konservierung anwenden',
    text: 'Befolgen Sie die spezifischen Empfehlungen zur Konservierung und Beschleunigung je nach aktuellem Zustand.',
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
  slug: 'bananen-diagnose',
  title: 'Bananen Diagnose und Konservierung: Wissenschaftlicher Leitfaden',
  description: 'Analysieren Sie den Reifegrad Ihrer Bananen mit wissenschaftlicher Präzision. Lernen Sie Konservierungstechniken, die Biochemie von Ethylen und die Ernährungsoptimierung kennen.',
  faqTitle: 'Häufig gestellte Fragen',
  ui: {
    ripesnessLabel: 'Reifegrad',
    nextStageLabel: 'Nächste Stufe in',
    daysUnit: 'Tage',
    tempLabel: 'Temperatur',
    humidityLabel: 'Luftfeuchtigkeit',
    partnerToggleTitle: 'Klimakterische Begleitung',
    partnerToggleSubtitle: 'Externer Ethyleneffekt',
    conservationTitle: 'Konservierung',
    accelerationTitle: 'Beschleunigung',
    stage1Name: 'Smaragdgrün',
    stage1Desc: 'Maximaler Gehalt an resistenter Stärke. Volle Festigkeit.',
    stage1Conservation: 'Raumtemperatur (18-20°C). Kälte vermeiden (<12°C).',
    stage1Acceleration: 'Papiertüte mit einem Apfel oder einer reifen Tomate.',
    stage2Name: 'Strahlendes Gelb',
    stage2Desc: 'Perfekt ausgewogen zwischen Festigkeit und beginnender Süße.',
    stage2Conservation: 'Kühler Ort, von der Staude trennen, um Ethylen zu bremsen.',
    stage2Acceleration: 'An der Staude lassen und in Plastik einwickeln.',
    stage3Name: 'Süß Gepunktet',
    stage3Desc: 'Höchststand an Antioxidantien. Intensive Süße und cremige Textur.',
    stage3Conservation: 'Kühlen, um das Fruchtfleisch zu erhalten (auch wenn die Schale nachdunkelt).',
    stage3Acceleration: 'Sanfte Wärme (in der Nähe einer Wärmequelle, nicht direkt).',
    stage4Name: 'Zimtbraun Reif',
    stage4Desc: 'Sehr weiche Textur. Ideal für zuckerfreies Backen.',
    stage4Conservation: 'Sofort schälen und einfrieren.',
    stage4Acceleration: 'Hat das Maximum bereits erreicht.',
    stage5Name: 'Überreif / Fermentiert',
    stage5Desc: 'Fortgeschrittener Abbauprozess.',
    stage5Conservation: 'Nicht für den direkten Verzehr empfohlen.',
    stage5Acceleration: 'N/V',
  },
  faq: [
    {
      question: 'Warum werden Bananen im Kühlschrank schwarz?',
      answer: 'Die Kälte bricht die Zellwände der Schale auf und setzt Enzyme frei, die Phenole oxidieren und schwarze Polyphenole erzeugen. Das Innere bleibt jedoch meist länger fest und süß als außerhalb des Kühlschranks.',
    },
    {
      question: 'Wie kann ich eine Banane schnell reifen lassen?',
      answer: 'Legen Sie sie zusammen mit einem Apfel oder einer Tomate in eine geschlossene Papiertüte. Diese geben Ethylengas ab, welches die Reifung beschleunigt. Wenn es sehr schnell gehen muss, können Sie sie für einige Minuten bei niedriger Temperatur in den Ofen legen.',
    },
    {
      question: 'Ist es sicher, Bananen mit braunen Flecken zu essen?',
      answer: 'Ja, absolut. Tatsächlich zeigen die Flecken an, dass die Stärke in Zucker umgewandelt wurde, was sie süßer und verdaulicher macht. Entsorgen Sie sie nur, wenn sie schimmeln, unangenehm riechen oder extrem weich sind.',
    },
    {
      question: 'Was ist Ethylen?',
      answer: 'Es ist ein Pflanzenhormon in Form eines Gases, das Wachstum und Reifung reguliert. Die Banane ist eine klimakterische Frucht, was bedeutet, dass sie auch nach der Ernte weiterhin Ethylen produziert und nachreift.',
    },
  ],
  howTo: [
    {
      name: 'Farbe beobachten',
      text: 'Untersuchen Sie sorgfältig die Farbe der Schale, von grün bis dunkelbraun, um den aktuellen Reifegrad zu bestimmen.',
    },
    {
      name: 'Simulator nutzen',
      text: 'Verschieben Sie den Reifegrad-Regler, um genaue Vorhersagen darüber zu erhalten, wann die nächste Stufe erreicht wird.',
    },
    {
      name: 'Bedingungen anpassen',
      text: 'Ändern Sie Temperatur und Luftfeuchtigkeit, um zu sehen, wie sie die Reifungsgeschwindigkeit beeinflussen.',
    },
    {
      name: 'Konservierung anwenden',
      text: 'Befolgen Sie die spezifischen Empfehlungen zur Konservierung und Beschleunigung je nach aktuellem Zustand.',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Wissenschaft der Reifung von Musa × paradisiaca',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Banane ist eine der meistverzehrten Früchte der Welt, gehört aber auch zu den biologisch am missverstandensten. Im Gegensatz zu nicht-klimakterischen Früchten wie Zitrusfrüchten oder Weintrauben ist die Banane eine <strong>klimakterische Frucht</strong>. Das bedeutet, dass sie nach der Ernte weiterreift, ihre Zellatmung drastisch erhöht und ein grundlegendes gasförmiges Phytohormon produziert: <strong>Ethylen</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Aus biochemischer Sicht ist die Reifung eine Kaskade von enzymatischen Ereignissen. Während dieses Prozesses bauen Enzyme wie Amylase komplexe Kohlenhydrate (Stärken) in einfache Zucker (Fruktose, Glukose und Saccharose) ab. Diese Veränderung verändert nicht nur den Geschmack und macht sie süßer, sondern modifiziert auch die Textur durch den Abbau von Pektin in den Zellwänden, was zu der für reife Bananen charakteristischen weichen und cremigen Konsistenz führt.',
    },
    {
      type: 'title',
      text: 'Der Ethylen-Zyklus',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ethylen fungiert als biologischer Schalter. Sobald die Frucht eine geringe Konzentration feststellt, aktiviert sie die Gene, die für die Produktion von noch mehr Ethylen verantwortlich sind, wodurch eine positive Rückkopplungsschleife entsteht. Aus diesem Grund beschleunigt eine sehr reife Banane die Reifung all ihrer Nachbarn in der Obstschale. Um diesen Prozess zu verlangsamen, ist es wichtig, Exemplare, die bereits braune Flecken aufweisen, von den noch grünen zu isolieren.',
    },
    {
      type: 'title',
      text: 'Der Kühlschrank-Mythos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Es hält sich hartnäckig der Glaube, Bananen gehörten nicht in den Kühlschrank. Die Realität ist komplexer: Kälte (unter 12°C) verursacht Kälteschäden an den Schalenzellen und setzt Enzyme frei, die Phenole oxidieren und die Schale schwarz werden lassen. Dies betrifft jedoch nur die äußere Ästhetik. Wenn das Innere bereits die gewünschte Reife erreicht hat, stoppt die Kälte das Weichwerden des Fruchtfleisches fast vollständig und bewahrt den Geschmack und die Textur des Inneren für mehrere zusätzliche Tage.',
    },
    {
      type: 'title',
      text: 'Fortgeschrittene Konservierungsstrategien',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Versiegelung des Stielansatzes:</strong> Das Umwickeln des Stielendes mit Plastikfolie reduziert die Ethylenfreisetzung drastisch und verlängert die Haltbarkeit der Einheit um bis zu 72 zusätzliche Stunden.',
    },
    {
      type: 'paragraph',
      html: '<strong>Dynamische Aufhängung:</strong> Das Aufhängen der Bananen verhindert Druckstellen. Beschädigtes Gewebe setzt Ethylen schneller frei und bildet Zentren beschleunigter Reifung, die sich über die ganze Frucht ausbreiten.',
    },
    {
      type: 'paragraph',
      html: '<strong>Kryotherapie (Einfrieren):</strong> Für Bananen in Phase 4 (braun) ist Einfrieren die beste Option. Das Schälen der Frucht vor dem Einfrieren verhindert, dass Feuchtigkeit eingeschlossen wird und erhält die Qualität der Fasern.',
    },
    {
      type: 'title',
      text: 'Ernährungsbezogene Veränderungen pro Phase',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Während die Banane reift, verändert sich ihr Nährstoffprofil radikal, was es ermöglicht, sie als spezifisches diätetisches Werkzeug je nach den Zielen des Verbrauchers einzusetzen.',
    },
    {
      type: 'table',
      headers: ['Phase', 'Resistente Stärke', 'Eigenschaften', 'Hauptvorteil'],
      rows: [
        ['Grün (1-2)', '~80%', 'Sehr fest, maximaler Stärkegehalt', 'Darmgesundheit und Blutzuckerkontrolle'],
        ['Gelb (3)', '~5%', 'Ausgewogene Festigkeit und Süße', 'Schnelle Energie und B-Vitamine'],
        ['Gepunktet (4)', 'Minimal', 'Sehr weich, hoher Zuckergehalt', 'Maximales antioxidatives Potenzial'],
        ['Braun/Überreif (5)', 'Praktisch null', 'Sehr weiche Textur, fortgeschrittene Fermentation', 'Nicht zum Verzehr empfohlen'],
      ],
    },
    {
      type: 'title',
      text: 'Fazit und praktische Anwendung',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Lebensmittelverschwendung reduzieren:</strong> Die genaue Diagnose des Zustands einer Banane ermöglicht es, den optimalen Zeitpunkt für den Verzehr zu bestimmen und so den Verlust wertvoller Früchte zu vermeiden.',
        '<strong>Nährstoffvorteile optimieren:</strong> Von der resistenten Stärke der grünen Bananen für die Darmgesundheit bis hin zu den Antioxidantien der gepunkteten für maximales antioxidatives Potenzial.',
        '<strong>Strategische Verzehrplanung:</strong> Passen Sie die Verwendung der Banane an Ihre Gesundheitsziele an: Blutzuckerkontrolle, schnelle Energie, Verdauung oder Antioxidantien.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Abbau-Warnung:</strong> Externe Faktoren wie eine relative Luftfeuchtigkeit von über 85% oder Temperaturen über 25°C können den Abbau drastisch beschleunigen, sodass die Banane innerhalb weniger Stunden von optimal zu ungenießbar wird. Dieser Simulator hilft Ihnen, diese Veränderungen vorherzusehen und strategisch zu planen.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
