import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculateur de Stabilite d Emulsion et Limite d Huile";
const description = "Decouvrez exactement combien d huile votre mayonnaise, aioli ou vinaigrette peut supporter avant de se briser. Evitez les sauces qui tranchent avec notre calculateur gratuit de stabilite d emulsion.";
const faq = [
  {
    question: "Combien d huile puis-je ajouter a ma mayonnaise avant qu elle ne se brise?",
    answer: "Cela depend de l emulsifiant. Le jaune d oeuf supporte jusqu a ~78% d huile (environ 3,5 fois le volume d eau), la moutarde jusqu a 70%, la lecithine de soja jusqu a 82% et le polysorbate jusqu a 85%. Utilisez le calculateur ci-dessus pour obtenir le maximum exact pour vos quantites specifiques."
  },
  {
    question: "Pourquoi mon emulsion s est-elle brisee ou separee?",
    answer: "Une emulsion se brise lorsque la fraction volumique d huile depasse la limite maximale de compactage de l emulsifiant. A ce stade, les gouttelettes d huile sont si fortement comprimees qu elles fusionnent et le melange se separe. Cela se produit instantanement - ce n est pas un processus graduel."
  },
  {
    question: "Comment reparer une mayonnaise ou un aioli brise?",
    answer: "Commencez avec un jaune d oeuf frais ou une cuillere a soupe d eau tiede dans un bol propre. Versez lentement le melange brise en fouettant constamment, exactement comme si vous ajoutiez de l huile brute. Le calculateur ci-dessus vous indique exactement combien d eau ou de jaune vous avez besoin."
  },
  {
    question: "Ajouter de l huile trop vite provoque-t-il la rupture d une emulsion?",
    answer: "Ajouter de l huile trop rapidement peut temporairement surcharger l emulsifiant, mais la cause reelle de la rupture est toujours un mauvais rapport de phases. Si votre fraction d huile reste en dessous de la limite de l emulsifiant, l emulsion reste stable quelle que soit la vitesse. Si elle depasse la limite, la rupture est inevitable."
  },
  {
    question: "Quelle est la difference entre le jaune d oeuf et la moutarde comme emulsifiants?",
    answer: "Le jaune d oeuf (78% max d huile) contient de la lecithine et des lipoproteines qui forment un film robuste autour des gouttelettes. La moutarde (70% max d huile) repose sur le mucilage et les proteines - elle est plus faible mais ajoute de la saveur. La lecithine de soja (82%) et le polysorbate (85%) sont des emulsifiants industriels tres efficaces."
  }
];

const howTo = [
  {
    name: "Selectionnez votre emulsifiant",
    text: "Choisissez l emulsifiant de votre recette - jaune d oeuf pour la mayo classique, moutarde pour les vinaigrettes, ou lecithine de soja/polysorbate pour la cuisine moderniste. Chacun fixe une limite d huile maximale differente."
  },
  {
    name: "Entrez le volume de votre phase aqueuse",
    text: "Saisissez les millilitres totaux de vos ingredients aqueux: eau, vinaigre, jus de citron, vin ou tout liquide a base d eau. Le calculateur ajoute automatiquement la teneur en eau de l emulsifiant choisi."
  },
  {
    name: "Definissez votre volume d huile",
    text: "Entrez la quantite d huile que vous prevoyez d utiliser. Utilisez le curseur ou saisissez la valeur. Le calculateur affiche instantanement si cette quantité produira une emulsion stable ou la fera se briser."
  },
  {
    name: "Lisez le resultat de stabilite et corrigez si necessaire",
    text: "Verifiez l indicateur de fraction volumique d huile. Si stable, vous pouvez y aller. Si brise, le panneau de sauvetage vous indique exactement combien d eau (en ml) ou combien de jaunes d oeuf supplementaires vous devez ajouter pour retablir l equilibre."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo' as const,
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
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'calculateur-stabilite-emulsion',
  title: 'Calculateur de Stabilite d Emulsion et Limite d Huile',
  description: 'Decouvrez exactement combien d huile votre mayonnaise, aioli ou vinaigrette peut supporter avant de se briser. Evitez les sauces qui tranchent avec notre calculateur gratuit de stabilite d emulsion.',
  faqTitle: 'Questions Frequentes',
  ui: {
    title: 'Analyseur de Stabilite d Emulsion',
    subtitle: 'Capacité limite en huile de votre sauce avant déstabilisation',
    waterLabel: 'Phase Aqueuse (ml)',
    oilLabel: 'Volume d Huile (ml)',
    emulsifierLabel: 'Type d Emulsifiant',
    yolkOption: 'Jaune d Oeuf',
    mustardOption: 'Moutarde',
    soyLecithinOption: 'Lecithine de Soja',
    polysorbateOption: 'Polysorbate',
    stableStatus: 'Emulsion Stable',
    brokenStatus: 'Emulsion Brisee',
    ratioLabel: 'Fraction Volumique d Huile',
    maxLimitLabel: 'Limite Maximale d Huile',
    fixTitle: 'Strategie de Sauvetage',
    waterFixText: 'Ajoutez de l eau pour retablir l equilibre des phases:',
    yolkFixText: 'Alternativement, utilisez un jaune d oeuf supplementaire:',
    idealRangeText: 'La plage ideale se situe sous la limite critique de compactage de 74% a 80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Combien d Huile une Mayonnaise ou un Aioli Peut-il Supporter Avant de se Briser?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Tout cuisinier s est pose cette question: <strong>pourquoi ma mayonnaise a-t-elle tranche?</strong> La reponse est plus simple qu il n y parait. Une emulsion - qu il s agisse d un aioli classique, d une vinaigrette cremeuse ou d une mousse moderniste - ne peut contenir qu une quantite finie d huile avant de s effondrer. Notre <strong>calculateur de stabilite d emulsion</strong> vous indique exactement ou se trouve ce point de rupture, en fonction de vos ingredients et portions specifiques.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: 'Jaune d Oeuf Max Huile',
          icon: 'mdi:egg-outline'
        },
        {
          value: '85%',
          label: 'Limite Polysorbate',
          icon: 'mdi:flask-outline'
        },
        {
          value: '74%',
          label: 'Compactage Theorique',
          icon: 'mdi:sphere'
        },
        {
          value: '15 ml',
          label: 'Eau du Jaune',
          icon: 'mdi:water'
        }
      ]
    },
    {
      type: 'title',
      text: 'La Science: Pourquoi les Emulsions se Brisent',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Une emulsion culinaire fonctionne en dispersant de minuscules gouttelettes d huile dans une phase aqueuse continue. <strong>Les emulsifiants</strong> - comme la lecithine du jaune d oeuf, le mucilage de la moutarde ou les tensioactifs synthetiques comme le polysorbate - enrobent chaque gouttelette et l empechent de fusionner avec ses voisines.'
    },
    {
      type: 'paragraph',
      html: 'Le point de rupture est determine par la pure geometrie. Les gouttelettes d huile se comportent comme de minuscules spheres empilees. Le volume maximum de spheres pouvant tenir dans un espace donne - connu sous le nom de <strong>conjecture de Kepler</strong> - est d environ 74%. Dans les systemes de cuisine reels, cela peut s etendre a 80-85% avec des emulsifiants puissants, mais au-dela, les gouttelettes sont si comprimees qu elles fusionnent et l emulsion s effondre instantanement.'
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Jaune d Oeuf',
          icon: 'mdi:egg-outline',
          description: 'L emulsifiant classique de la mayonnaise. Contient lecithine et lipoproteines.',
          highlight: true,
          points: [
            'Max huile: 78%',
            '~15 ml eau par jaune',
            'Ajoute richesse et couleur',
            'Meilleur pour mayo et aioli'
          ]
        },
        {
          title: 'Moutarde',
          icon: 'mdi:shaker-outline',
          description: 'Repose sur le mucilage et les proteines des graines. Ajoute une saveur piquante.',
          points: [
            'Max huile: 70%',
            '~10 ml teneur en eau',
            'Pouvoir emulsifiant plus faible',
            'Ideale pour vinaigrettes'
          ]
        },
        {
          title: 'Lecithine de Soja',
          icon: 'mdi:leaf',
          description: 'Tensioactif vegetal hautement concentre.',
          points: [
            'Max huile: 82%',
            '~5 ml teneur en eau',
            'Profil de gout neutre',
            'Incontournable en cuisine moderniste'
          ]
        },
        {
          title: 'Polysorbate',
          icon: 'mdi:flask-outline',
          description: 'Emulsifiant synthetique a capacite tensioactive maximale.',
          points: [
            'Max huile: 85%',
            '~2 ml teneur en eau',
            'Plus haute tolerance a l huile',
            'Utilise dans les mousses et airs'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulsifiant', 'Max Huile %', 'Huile pour 100 ml Eau', 'Meilleure Utilisation'],
      rows: [
        ['Jaune d Oeuf', '78%', '~355 ml', 'Mayonnaise, aioli, hollandaise'],
        ['Moutarde', '70%', '~233 ml', 'Vinaigrettes, assaisonnements legers'],
        ['Lecithine de Soja', '82%', '~456 ml', 'Sauces modernistes, mousses'],
        ['Polysorbate', '85%', '~567 ml', 'Mousses stables, cuisine experimentale']
      ]
    },
    {
      type: 'title',
      text: 'Comment Sauver une Emulsion Brisee Etape par Etape',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Si votre mayonnaise ou sauce a deja tranche, <strong>ne la jetez pas</strong>. La solution est simple - mais seulement si vous comprenez le rapport de phases. Fouetter plus fort n aidera pas; vous devez ajouter plus de phase continue (eau).'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Signes Courants Que Votre Emulsion Est Sur le Point de se Briser',
      html: 'Surveillez un <strong>epaississement suivi d un amincissement soudain</strong>, une <strong>surface brillante devenant granuleuse</strong> ou de l huile visible s accumulant sur les bords. Si vous voyez l un de ces signes, arretez d ajouter de l huile immediatement et incorporez une cuillere a cafe d eau froide avant de continuer.'
    },
    {
      type: 'title',
      text: 'Conseils Pratiques pour des Emulsions Parfaites a Chaque Fois',
      level: 3
    },
    {
      type: 'tip',
      title: 'La Temperature Compte',
      html: 'Tous les ingredients doivent etre a <strong>temperature ambiante</strong>. Les oeufs ou l huile froids augmentent considerablement le risque de rupture. Sortez les ingredients du refrigerateur 30 minutes avant de commencer.'
    },
    {
      type: 'tip',
      title: 'Le Filet de Securite de l Eau',
      html: 'Si votre recette ne contient pas assez d acide (vinaigre, jus de citron), ajoutez <strong>une cuillere a cafe d eau froide par jaune d oeuf</strong> avant de commencer a ajouter de l huile. Cette eau supplementaire cree une marge de securite plus large.'
    },
    {
      type: 'tip',
      title: 'Sauver un Lot Brise',
      html: 'Mettez un jaune d oeuf frais dans un bol propre. Fouettez-le avec une cuillere a cafe d eau. Ensuite, <strong>versez le melange brise aussi lentement que possible</strong>, exactement comme s il s agissait d huile brute. Une fois qu il se re-emulsifie, vous pouvez ajouter le reste plus rapidement.'
    },
    {
      type: 'title',
      text: 'Glossaire Culinaire des Emulsions',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Phase Continue',
          definition: 'Le liquide qui entoure les gouttelettes - generalement de l eau, du vinaigre ou du jus d agrumes dans les emulsions huile-dans-eau comme la mayonnaise.'
        },
        {
          term: 'Phase Dispersee',
          definition: 'Le liquide divise en minuscules gouttelettes - l huile dans la plupart des emulsions culinaires. Plus vous en ajoutez, plus les gouttelettes se compactent.'
        },
        {
          term: 'Fraction Volumique',
          definition: 'Le rapport du volume d huile au volume total. A environ 74-85% (selon l emulsifiant), l emulsion atteint son point de rupture geometrique.'
        },
        {
          term: 'Coalescence',
          definition: 'Lorsque deux ou plusieurs gouttelettes d huile fusionnent en une plus grosse. C est le processus microscopique qui declenche une rupture visible de l emulsion.'
        },
        {
          term: 'Inversion de Phase',
          definition: 'Le point ou une emulsion huile-dans-eau se transforme en eau-dans-huile - comme lors de la fabrication du beurre a partir de la creme. C est le mode de defaillance ultime.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: 'Que vous prepariez une mayonnaise francaise classique, un aioli a l ail, une vinaigrette stable ou que vous experimentiez avec des hydrocolloides modernistes, comprendre le <strong>rapport huile-eau</strong> est le facteur le plus important. Notre calculateur gere les maths pour que vous puissiez cuisiner en toute confiance.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
