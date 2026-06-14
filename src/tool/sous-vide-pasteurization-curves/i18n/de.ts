import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Sous Vide Pasteurisierungs Kurvenrechner';
const description = 'Berechne die exakte Zeit für eine sichere Kernpasteurisierung gegen Salmonellen und Listerien beim Sous-Vide-Garen, unter Berücksichtigung von Fleischform und -dicke.';

const faq = [
  {
    question: 'Was bedeutet Pasteurisierung beim Sous-Vide-Garen?',
    answer: 'Pasteurisierung ist das Erhitzen von Lebensmitteln auf eine bestimmte Temperatur und das Halten dieser Temperatur über einen ausreichenden Zeitraum, um krankheitserregende Mikroorganismen (wie Salmonellen, Listerien und E. coli) auf ein unbedenkliches Niveau zu reduzieren. Anders als bei der Sterilisation werden nicht alle Bakteriensporen zerstört, aber das Lebensmittel wird sicher verzehrbar.',
  },
  {
    question: 'Warum beeinflusst die Fleischdicke die Garzeit so stark?',
    answer: 'Die Wärmeübertragung in Lebensmitteln erfolgt durch Wärmeleitung. Die Zeit, die der Kern (die kälteste Stelle) benötigt, um die Wasserbadtemperatur zu erreichen, steigt quadratisch mit der Dicke. Verdoppelt man die Dicke eines Steaks, vervierfacht sich die Aufheizzeit in etwa.',
  },
  {
    question: 'Warum gelten 54,4 °C (130 °F) als absolute Mindesttemperatur beim Sous-Vide?',
    answer: 'Unterhalb von 54,4 °C können häufige Lebensmittelkeime wie Salmonellen überleben und sich aktiv vermehren. Bleibt das Lebensmittel länger als 4 Stunden in dieser "Gefahrenzone", können hitzebeständige Toxine entstehen, die ein erhebliches Sicherheitsrisiko darstellen.',
  },
  {
    question: 'Was ist eine 6D- oder 6,5D-Reduktion?',
    answer: 'Eine D-Reduktion bezeichnet eine dezimale (logarithmische) Reduktion der Bakterienpopulation. Eine 6,5D-Reduktion bedeutet, dass 99,99995 % des Zielerregers abgetötet werden. Wären ursprünglich 1.000.000 Bakterien vorhanden, würde weniger als eines überleben.',
  },
  {
    question: 'Wie verändert die Lebensmittelgeometrie die Aufheizrate?',
    answer: 'Wärme dringt in eine Kugel aus allen Richtungen ein (3 Dimensionen), in einen Zylinder von den Seiten (2 Dimensionen) und in eine flache Platte hauptsächlich von oben und unten (1 Dimension). Daher heizen Kugeln am schnellsten auf, gefolgt von Zylindern; Platten benötigen die längste Zeit.',
  },
];

const howTo = [
  {
    name: 'Wasserbadtemperatur einstellen',
    text: 'Passe den Schieberegler an deine Wasserbadtemperatur an. Höhere Temperaturen pasteurisieren exponentiell schneller.',
  },
  {
    name: 'Fleischdicke angeben',
    text: 'Miss die dickste Stelle deines Fleischstücks in Millimetern und gib den Wert in den Rechner ein.',
  },
  {
    name: 'Geometrieform wählen',
    text: 'Wähle, ob dein Lebensmittel einer flachen Platte (Steak, Hähnchenbrust), einem Zylinder (Rinderfilet, Ballotine) oder einer Kugel (Frikadelle) ähnelt.',
  },
  {
    name: 'Zielerreger auswählen',
    text: 'Wähle Salmonellen für die Standardsicherheit bei Fleisch und Geflügel oder Listeria monocytogenes für Risikogruppen oder erweiterte Sicherheit.',
  },
  {
    name: 'Gesamtgarzeit prüfen',
    text: 'Der Rechner zeigt die Kernaufheizzeit und die Abtötungshaltezeit an. Addiere beide Werte für die gesamte sichere Gardauer.',
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
  slug: 'sous-vide-pasteurizierungs-kurven',
  title: 'Sous Vide Pasteurisierungs Kurven',
  description: 'Berechne die exakte Zeit für eine sichere Kernpasteurisierung gegen Salmonellen und Listerien beim Sous-Vide-Garen, unter Berücksichtigung von Fleischform und -dicke.',
  faqTitle: 'Häufig Gestellte Fragen',
  ui: {
    title: 'Sous Vide Pasteurisierungs Kurven',
    subtitle: 'Thermische Letalitätskinetik und Kerntemperatur Kompensation',
    bathTempLabel: 'Wasserbadtemperatur',
    thicknessLabel: 'Fleischdicke',
    shapeLabel: 'Fleischgeometrie',
    shapeSlab: 'Flache Platte (z. B. Steak, Hähnchenbrust)',
    shapeCylinder: 'Zylinder (z. B. Filet, Roulade)',
    shapeSphere: 'Kugel (z. B. Frikadelle)',
    pathogenLabel: 'Zielerreger',
    pathogenSalmonella: 'Salmonellen (Standard)',
    pathogenListeria: 'Listeria monocytogenes',
    resultsTitle: 'Sichere Pasteurisierungszeit',
    heatingTime: 'Kernaufheizzeit',
    lethalityTime: 'Erreger-Abtötungszeit',
    totalTime: 'Gesamtgarzeit',
    dangerZoneTitle: 'Biologische Gefahrenzone',
    dangerZoneDesc: 'Temperaturen unter 54,4 °C (130 °F) können Lebensmittel nicht sicher pasteurisieren, weil die Vermehrungsrate der Bakterien die thermische Abtötungsrate übersteigen kann. Sous-Vide-Garen unterhalb dieser Temperatur sollte nie länger als 4 Stunden dauern.',
    chartTitle: 'Logarithmische Bakterienreduktionskurve',
    chartXLabel: 'Zeit (Minuten)',
    chartYLabel: 'Log-Reduktion',
    disclaimer: 'Berechnungen gehen von einer Ausgangstemperatur von 5 °C und der thermischen Diffusivität von magerem Fleisch aus. Verwende stets ein kalibriertes Digitalthermometer zur Überprüfung der Wasserbadtemperatur.',
    minutesUnit: 'min',
    mmUnit: 'mm',
    inUnit: 'in',
    tempUnitC: '°C',
    tempUnitF: '°F',
    systemLabel: 'Maßeinheitensystem',
    systemMetric: 'Metrisch',
    systemImperial: 'Imperial'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Sous-Vide-Pasteurisierung: Der vollständige Sicherheitsleitfaden für Hobbyköche',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sous-Vide-Garen hat die heimische Küche revolutioniert, indem es unmöglich zu übergarende Steaks für jeden mit einem Stick-Zirkulator zugänglich macht. Doch die Methode birgt eine entscheidende Komplexität: Bei den niedrigen Temperaturen, die das perfekte medium rare von Rand zu Rand erzeugen, bewegt man sich nur Millimeter oberhalb der thermischen Todesschwelle gefährlicher Bakterien. Dieser Leitfaden erklärt genau, wie man sichere Pasteurisierungszeiten für jedes Fleischstück bei jeder Temperatur berechnet, damit du nie wieder unzureichend gegarte Hähnchen oder Fisch servierst.',
    },
    {
      type: 'title',
      text: 'Warum sich Sous-Vide-Sicherheit grundlegend vom herkömmlichen Garen unterscheidet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn man eine Hähnchenbrust bei 200 °C scharf anbrät, erreicht die Oberfläche sofort tödliche Temperaturen und Bakterien sterben innerhalb von Sekunden. Sous-Vide dreht dieses Modell um: Das Wasserbad läuft exakt auf der gewünschten Endtemperatur, manchmal nur 55 °C. Bei diesen Temperaturen ist das Abtöten von Salmonellen oder Listerien kein sofortiger Vorgang - es ist ein langsamer, zeitabhängiger Prozess, der in Minuten oder gar Stunden gemessen wird. Die USDA FSIS Appendix A-Tabellen legen fest, dass eine 6,5-log-Reduktion von Salmonellen in Geflügel ein Halten bei 60 °C für etwa 28 Minuten erfordert, nachdem der Kern die Temperatur erreicht hat. Bei 55 °C dehnt sich diese Zeit auf nahezu 90 Minuten aus. Nimmst du den Beutel beim Signalton des Timers aus dem Bad, ohne die Letalitätszeit zu berücksichtigen, servierst du möglicherweise unterpasteurisierte Lebensmittel.',
    },
    {
      type: 'title',
      text: 'Praktische Sous-Vide-Zeiten: Was Hobbyköche wirklich brauchen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die folgende Tabelle zeigt, wonach Hobbyköche tatsächlich suchen: konkrete Fleischstücke, bei gängigen Temperaturen, mit Gesamtzeiten, die sowohl die Aufheizverzögerung als auch die Erreger-Abtötungszeit enthalten. Die Werte gehen von 25 mm Dicke aus, startend bei Kühlschranktemperatur (5 °C), mit einer Zielvorgabe von 6,5-log Salmonellenreduktion.',
    },
    {
      type: 'table',
      headers: ['Lebensmittel', 'Badtemperatur', 'Kernaufheizung', 'Letalitätshaltung', 'Gesamtzeit', 'Ergebnis'],
      rows: [
        ['Hähnchenbrust', '60 °C / 140 °F', '~35 min', '~28 min', '~63 min', 'Saftig, vollständig pasteurisiert'],
        ['Hähnchenbrust', '65 °C / 149 °F', '~35 min', '~3 min', '~38 min', 'Festere, traditionelle Textur'],
        ['Lachsfilet', '50 °C / 122 °F', '~20 min', '~55 min', '~75 min', 'Buttrig, glasig, sicher'],
        ['Rindersteak', '55 °C / 131 °F', '~40 min', '~89 min', '~129 min', 'Medium rare, pasteurisierte Oberfläche'],
        ['Schweinefilet', '60 °C / 140 °F', '~35 min', '~28 min', '~63 min', 'Zart mit leicht rosa Kern'],
        ['Entenbrust', '57 °C / 135 °F', '~35 min', '~52 min', '~87 min', 'Reichhaltig, medium, lebensmittelsicher'],
        ['Putenbrust', '63 °C / 145 °F', '~40 min', '~9 min', '~49 min', 'Saftig, niemals trocken'],
        ['Frikadellen (Kugel)', '60 °C / 140 °F', '~25 min', '~28 min', '~53 min', 'Gleichmäßig gegart'],
      ],
    },
    {
      type: 'title',
      text: 'Die logarithmische Mathematik des Bakterientods: D-Werte und z-Werte erklärt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bakterien sterben nicht alle auf einmal, wie wenn man einen Schalter umlegt. Der thermische Tod folgt einer Kinetik erster Ordnung: Ein konstanter Anteil der Population wird pro Zeiteinheit bei einer bestimmten Temperatur abgetötet. Der <strong>D-Wert</strong> (Dezimale Reduktionszeit) ist die Zeit, die bei einer bestimmten Temperatur benötigt wird, um 90 % der vorhandenen Bakterien abzutöten - eine 1-log-Reduktion. Für Salmonellen bei 60 °C beträgt der D-Wert etwa 4,3 Minuten. Der <strong>z-Wert</strong> (typischerweise 5,5 °C für Salmonellen) sagt uns, wie stark wir die Temperatur erhöhen müssen, um den Prozess 10-mal schneller zu machen. Erhöht man das Bad von 55 °C auf 60,5 °C, sinkt die erforderliche Letalitätszeit um den Faktor 10 - von 89 Minuten auf etwa 9 Minuten. Diese exponentielle Beziehung erklärt, warum das Garen bei 65 °C dramatisch schneller und sicherer ist als bei 55 °C, obwohl das Lebensmittel kaum anders aussieht.',
    },
    {
      type: 'title',
      text: 'Die Gefahrenzone: Warum 54,4 °C (130 °F) die absolute Untergrenze ist',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Biologische Gefahr unter 54,4 C (130 F)',
      html: 'Sous-Vide niemals länger als 4 Stunden unter 54,4 C (130 F) garen. Unterhalb dieser Schwelle ist die thermische Abtötungsrate von Bakterien wie Salmonellen und Clostridium perfringens tatsächlich langsamer als ihre natürliche Vermehrungsrate. Die Bakterienpopulation kann während des Garvorgangs wachsen. Schlimmer noch: Bestimmte Erreger wie Bacillus cereus und Clostridium botulinum Typ E können hitzestabile Toxine bilden, die das Garen überstehen. Zeigt dein Zirkulator 52 C an und du lässt Fleisch 8 Stunden darin, im Glauben, niedrig und langsam sei sicherer, erschaffst du eine biologische Gefahrensituation.',
    },
    {
      type: 'title',
      text: 'Wie Fleischform und -dicke die Garzeit dominieren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der thermische Kern deines Lebensmittels - der letzte Punkt, der die Zieltemperatur erreicht - bestimmt die Gesamtgarzeit. Die Wärmeleitung folgt dem Fourier-Gesetz, und die Zeit, die der Kern benötigt, um bis auf 1 °C an die Badtemperatur heranzukommen, skaliert mit dem <strong>Quadrat der Dicke</strong>. Verdoppelt man die Dicke einer Hähnchenbrust von 25 mm auf 50 mm, vervierfacht sich die Aufheizzeit von 35 Minuten auf etwa 140 Minuten. Die Form spielt eine enorme Rolle: Eine <strong>flache Platte</strong> (Steak, Filet) heizt von zwei gegenüberliegenden Flächen und ist die langsamste Geometrie. Ein <strong>Zylinder</strong> (Filet, Roulade) nimmt Wärme radial von allen Seiten auf und heizt etwa 1,4-mal schneller als eine Platte gleicher Dicke. Eine <strong>Kugel</strong> (Frikadelle) heizt aus allen Richtungen und ist die schnellste Geometrie, etwa 1,7-mal schneller als eine Platte. Deshalb erreichen kugelförmige Lebensmittel wie Frikadellen oder Arancini überraschend schnell sichere Kerntemperaturen.',
    },
    {
      type: 'title',
      text: 'Salmonellen vs. Listerien: Den Zielerreger wählen',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Salmonellen (Standard)',
          icon: 'mdi:bacteria-outline',
          description: 'Häufigster Geflügelkeim, mäßig hitzeempfindlich, weit verbreitet als Referenzerreger in den USDA FSIS-Standards.',
          points: [
            'z-Wert von 5,5 C: mäßig hitzeempfindlich',
            'Ziel: 6,5-log-Reduktion für Geflügel, 5-log für Rind',
            'D60 = 4,3 Minuten: stirbt relativ schnell bei 60 C',
            'Sicher für gesunde Erwachsene bei Standard-Pasteurisierungszeiten',
            'Surrogat für Salmonella enterica Serovare in allen Fleischarten',
          ],
        },
        {
          title: 'Listeria monocytogenes',
          icon: 'mdi:shield-alert-outline',
          description: 'Höhere Hitzeresistenz als Salmonellen. Entscheidend für Risikogruppen, einschließlich Schwangerer und immungeschwächter Personen.',
          highlight: true,
          points: [
            'Höhere Hitzeresistenz als Salmonellen',
            'z-Wert von 6,0 C: Benötigt größeren Temperatursprung zur Beschleunigung der Abtötung',
            'Ziel: 6-log-Reduktion empfohlen',
            'D60 = 7,7 Minuten: benötigt fast doppelt so lange wie Salmonellen',
            'Entscheidend für Schwangere, Ältere und immungeschwächte Personen',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Lebensmittelsicherheit für Risikogruppen: Wenn Standardpasteurisierung nicht ausreicht',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Schwangere, Erwachsene über 65, Chemotherapiepatienten, Transplantationsempfänger und Menschen mit HIV oder Autoimmunerkrankungen sind dramatisch höheren Risiken durch Lebensmittelinfektionen ausgesetzt. Insbesondere Listeria monocytogenes kann die Plazentaschranke überwinden und Fehlgeburten, Totgeburten oder neonatale Meningitis verursachen - selbst wenn die Mutter keinerlei Symptome zeigt. Für diese Personengruppen reicht die standardmäßige 6,5-log-Salmonellenreduktion nicht aus. Wähle Listerien als Zielerreger und verlängere die Garzeiten entsprechend. Bei 60 °C beträgt die zusätzliche Letalitätszeit für Listerien im Vergleich zu Salmonellen etwa 16 Minuten bei einer 25 mm dicken Hähnchenbrust - ein geringer zeitlicher Mehraufwand für einen erheblichen Sicherheitsgewinn.',
    },
    {
      type: 'title',
      text: 'Warum die Kaltstarttemperatur zählt: Immer ab Kühlschranktemperatur messen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dieser Rechner geht von einer Ausgangstemperatur von 5 °C aus - normale Kühlschranktemperatur. Nimmst du Fleisch direkt aus dem Gefrierschrank bei -18 °C, braucht der Kern deutlich länger, um die Zieltemperatur zu erreichen. Die latente Schmelzwärme des Eises im gefrorenen Muskelgewebe erzeugt ein Plateau bei 0 °C, das die Aufheizzeit um 30-50 % verlängern kann. Gefrorene Ware immer vollständig im Kühlschrank auftauen lassen, bevor sie sous-vide gegart wird, und die Kernausgangstemperatur prüfen. Lässt du Fleisch umgekehrt 30 Minuten vor dem Vakuumieren auf der Arbeitsplatte temperieren, wird die verkürzte Aufheizzeit von diesem Modell nicht erfasst, und du könntest die Pasteurisierung überschreiten - das ist sicher, kann aber die Textur beeinflussen.',
    },
    {
      type: 'title',
      text: 'Pasteurisierung bedeutet nicht Sterilisation: Was überlebt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pasteurisierung reduziert Krankheitserreger auf ein Niveau, das nach Maßstäben der öffentlichen Gesundheit als sicher gilt - typischerweise eine 5-log- bis 7-log-Reduktion. Sie erzeugt kein steriles Produkt. Bestimmte Bakteriensporen, darunter <em>Clostridium botulinum</em> und <em>Clostridium perfringens</em>, können Pasteurisierungstemperaturen überleben und auskeimen, wenn das Lebensmittel unsachgemäß gelagert wird. Nach dem Sous-Vide-Garen muss das Lebensmittel entweder sofort serviert, über 54,4 °C warm gehalten oder innerhalb von 2 Stunden im Eisbad rasch auf unter 4 °C heruntergekühlt werden. Vakuumierte Beutel schaffen ein anaerobes Milieu, das Clostridium botulinum ideal findet; lass gegarte Sous-Vide-Beutel niemals bei Raumtemperatur stehen. Für eine Kühlschranklagerung von mehr als 5 Tagen wird Einfrieren empfohlen.',
    },
    {
      type: 'title',
      text: 'USDA FSIS-Konformität: Regulatorische Standards zu Hause einhalten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der USDA Food Safety and Inspection Service (FSIS) Appendix A liefert den maßgeblichen regulatorischen Rahmen für Letalitätsstandards bei Fleisch- und Geflügelprodukten. Diese Tabellen geben die Zeit-Temperatur-Kombinationen vor, die für bestimmte log-Reduktionen von Salmonellen erforderlich sind. Obwohl für gewerbliche Verarbeiter konzipiert, können Hobbyköche dieselbe Wissenschaft nutzen. Zum Beispiel schreibt FSIS Appendix A vor, dass verzehrfertiges Geflügel eine 6,5-log-Reduktion an Salmonellen erreichen muss. Bei 60 °C beträgt die erforderliche Haltezeit, nachdem das gesamte Produkt die Temperatur erreicht hat, 28,1 Minuten. Dieser Rechner setzt das mathematische FSIS-Modell unter Verwendung der Arrhenius-Kinetik erster Ordnung mit D-Werten und z-Werten aus begutachteten Studien zur thermischen Inaktivierung um, angepasst an den Einsatz von Stick-Zirkulatoren im Haushalt.',
    },
    {
      type: 'title',
      text: 'Fisch und Meeresfrüchte: Andere Regeln für andere Proteine',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fischmuskulatur hat andere thermische Eigenschaften als Säugetier- oder Geflügelfleisch. Fisch heizt aufgrund geringerer Dichte und typischerweise dünnerer Stücke schneller auf, aber die relevanten Erreger unterscheiden sich. Bei rohem oder leicht gegartem Fisch sind <em>Vibrio</em>-Arten und <em>Anisakis</em>-Parasiten die Hauptsorge, nicht Salmonellen. Die FDA empfiehlt, Fisch vor dem Rohverzehr 7 Tage bei -20 °C einzufrieren, um Parasiten abzutöten, und ihn anschließend sous-vide gegen Listerien zu pasteurisieren. Lachs, der bei 50 °C gegart wird, benötigt etwa 55 Minuten Haltezeit für eine 6-log-Listerienreduktion und ergibt eine einzigartige Textur, die mit keiner anderen Garmethode erreichbar ist. Thunfisch und andere Scombroid-Fische erfordern zusätzliche Vorsicht: Histamin, das vor dem Garen durch bakteriellen Abbau entsteht, ist hitzestabil und wird durch Pasteurisierung nicht zerstört; beziehe Sushi-Qualität stets von vertrauenswürdigen Händlern und halte sie vor dem Garen unter 4 °C.',
    },
    {
      type: 'title',
      text: 'Der Zielkonflikt zwischen Textur und Sicherheit: Warum höhere Temperaturen schneller, aber anders sind',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jeder Sous-Vide-Koch steht vor derselben Entscheidung: niedriger und länger garen für bessere Textur oder höher und schneller für Bequemlichkeit und Sicherheitsmarge. Eine bei 60 °C gegarte Hähnchenbrust liefert Fleisch, das so saftig ist, dass es alle Erwartungen an Geflügel infrage stellt, erfordert aber eine 28-minütige Letalitätshaltung nach Temperaturausgleich des Kerns - über eine Stunde Gesamtgarzeit. Bei 65 °C pasteurisiert dieselbe Brust in nur 3 Minuten Haltezeit, insgesamt 38 Minuten, aber die Muskelfasern kontrahieren stärker und geben etwas Feuchtigkeit ab. Kein Ansatz ist falsch; der Rechner liefert dir schlicht die Zahlen für eine informierte Entscheidung. Für Dinnerpartys mit flexiblem Timing: niedrig garen. Für Abendessen unter der Woche: höher ansetzen. Das Essen ist immer sicher, wenn die berechnete Zeit eingehalten wird.',
    },
    {
      type: 'title',
      text: 'Gerätekalibrierung: Dein Zirkulator könnte dich belügen',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Überprüfe die Temperatur deines Stick-Zirkulators mit einem kalibrierten Digitalthermometer.</strong> Verbraucher-Zirkulatoren können mit der Zeit um 1-2 °C abdriften, was an den Rändern der Pasteurisierung (55-58 °C) den Unterschied zwischen einem sicheren 89-Minuten-Garvorgang und einer gefährlichen Unterpasteurisierung bedeuten kann. Teste deinen Zirkulator einmal monatlich gegen ein Referenzthermometer in einem gut isolierten Behälter. Ein Fehler von 1 °C bei 55 °C verändert die Letalitätszeit für Salmonellen um etwa 30 Minuten.',
    },
    {
      type: 'title',
      text: 'Mehrere Stücke garen: Wie die Beutelanzahl die Wärmeübertragung beeinflusst',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ein häufiger Fehler ist, ein Sous-Vide-Bad mit mehreren Beuteln zu beladen und anzunehmen, die für ein einzelnes Stück berechnete Zeit gelte weiterhin. Wasser muss frei zwischen den Beuteln zirkulieren, damit die Wärmeübertragung effektiv bleibt. Ein dicht gepacktes Bad erzeugt stehende Kaltzonen, in denen sich die Beutel gegenseitig vom erwärmten Wasser isolieren. Als Faustregel gilt: Mindestens 2 cm Wasserabstand zwischen den Beuteln lassen. Bei mehr als 4 Stücken die berechnete Zeit um 15-20 % erhöhen. Besser noch: Ein Gefäß verwenden, das groß genug ist, damit Wasser frei um jeden Beutel zirkulieren kann. Bei kugelförmigen Stücken wie Frikadellen geht der Geometrievorteil deutlich zurück, wenn sie sich berühren oder gestapelt sind, da die Kontaktpunkte die radiale Wärmeübertragung blockieren.',
    },
    {
      type: 'title',
      text: 'Kurzreferenz: Mindesttemperaturen und -zeiten nach Lebensmittelart',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Lebensmittelart', 'Min. Kerntemperatur', 'Pasteurisierungszeit bei Min.-Temp.', 'Schneller bei', 'Empfohlen für'],
      rows: [
        ['Hähnchen & Geflügel', '60 °C / 140 °F', '~28 min (6,5-log Salmonella)', '65 °C: ~3 min Haltezeit', 'Alle Verbraucher'],
        ['Schwein (ganze Stücke)', '60 °C / 140 °F', '~28 min (6,5-log Salmonella)', '65 °C: ~3 min Haltezeit', 'Alle Verbraucher'],
        ['Rind (Steaks, Braten)', '55 °C / 131 °F', '~89 min (6,5-log Salmonella)', '60 °C: ~28 min Haltezeit', 'Gesunde Erwachsene (Oberflächenpasteurisierung)'],
        ['Rinderhack', '60 °C / 140 °F', '~28 min (6,5-log Salmonella)', '65 °C: sofort', 'Alle Verbraucher (Bakterien im gesamten Fleisch verteilt)'],
        ['Fisch & Meeresfrüchte', '50 °C / 122 °F', '~55 min (Listeria)', '55 °C: ~22 min Haltezeit', 'Vorgefroren zur Parasitenbekämpfung'],
        ['Eier (in Schale)', '57 °C / 135 °F', '~75 min (Salmonella)', '60 °C: ~28 min Haltezeit', 'Pasteurisierte Schaleneier'],
        ['Gemüse', '85 °C / 185 °F', 'Nicht anwendbar (Enzyminaktivierung)', 'N/A', 'Pektinabbau, keine Erregerproblematik'],
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
