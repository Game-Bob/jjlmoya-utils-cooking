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
  title,
  description,
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
        { value: '78%', label: 'Jaune d Oeuf Max Huile', icon: 'mdi:egg-outline' },
        { value: '85%', label: 'Limite Polysorbate', icon: 'mdi:flask-outline' },
        { value: '74%', label: 'Compactage Theorique', icon: 'mdi:sphere' },
        { value: '15 ml', label: 'Eau du Jaune', icon: 'mdi:water' }
      ]
    },
    {
      type: 'list',
      items: [
        '<strong>Vous ajoutez l huile trop vite</strong> - La vitesse est rarement la vraie cause. Si la fraction d huile reste sous la limite de l emulsifiant, l emulsion tiendra quelle que soit la vitesse de versement.',
        '<strong>Vos ingredients sont trop froids</strong> - Les oeufs ou l huile froids augmentent la viscosite et rendent la formation des gouttes plus difficile. Mettez toujours vos ingredients a temperature ambiante.',
        '<strong>Vous avez depasse la limite d huile pour votre emulsifiant</strong> - Chaque emulsifiant a une fraction maximale de compactage. Jaune d oeuf jusqu a 78%, moutarde 70%, lecithine de soja 82% et polysorbate 85%.',
        '<strong>Votre phase aqueuse est trop petite</strong> - Sans assez d eau pour entourer les gouttes d huile, elles n ont nulle part ou aller sauf fusionner entre elles.'
      ]
    },
    {
      type: 'title',
      text: 'Quel emulsifiant devriez-vous utiliser ? Comparaison pratique',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Choisir le bon emulsifiant dépend de votre recette, de votre profil de saveur et de la capacité d huile souhaitée. Voici comment se comparent les quatre emulsifiants culinaires les plus courants.'
    },
    {
      type: 'proscons',
      title: 'Jaune d Oeuf',
      items: [
        { pro: 'Compatibilité de saveur maximale pour les sauces classiques', con: 'Ajoute du cholestérol et un goût d œuf' },
        { pro: 'Contient de la lécithine et des lipoprotéines pour des émulsions robustes', con: 'Nécessite un contrôle rigoureux de la température' },
        { pro: 'Ajoute une couleur naturelle et de la richesse', con: 'Ne convient pas aux préparations végétaliennes' },
        { pro: 'Fonctionne jusqu à 78% de fraction d huile', con: 'Limité à environ 15 ml d apport d eau par jaune' }
      ]
    },
    {
      type: 'proscons',
      title: 'Moutarde',
      items: [
        { pro: 'Ajoute une saveur piquante et de la complexité aux assaisonnements', con: 'Capacité maximale d huile plus faible (70%)' },
        { pro: 'Largement disponible et facile à utiliser', con: 'Pouvoir émulsifiant plus faible que le jaune d œuf' },
        { pro: 'Fonctionne bien à température ambiante', con: 'La saveur peut entrer en conflit avec les sauces délicates' },
        { pro: 'Idéale pour les vinaigrettes rapides', con: 'Ne convient pas aux émulsions de goût neutre' }
      ]
    },
    {
      type: 'proscons',
      title: 'Lécithine de Soja',
      items: [
        { pro: 'Haute tolérance à l huile (82%) pour des sauces stables', con: 'Nécessite un pesage précis' },
        { pro: 'Le goût neutre n altère pas les recettes', con: 'Moins indulgente que le jaune d œuf' },
        { pro: 'D origine végétale et adaptée aux végétaliens', con: 'Pas un ingrédient de base courant dans les cuisines domestiques' },
        { pro: 'Fonctionne avec de petits volumes d eau', con: 'Peut créer une texture légèrement artificielle' }
      ]
    },
    {
      type: 'proscons',
      title: 'Polysorbate',
      items: [
        { pro: 'Capacité d huile la plus élevée de tous les émulsifiants (85%)', con: 'Additif synthétique, non naturel' },
        { pro: 'Crée des mousses et airs ultra-stables', con: 'Difficile à trouver pour la cuisine à la maison' },
        { pro: 'Fonctionne avec une phase aqueuse minimale', con: 'Nécessite une balance pour un dosage précis' },
        { pro: 'Idéal pour la cuisine moderniste et expérimentale', con: 'Dominant si utilisé en excès' }
      ]
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
          points: ['Max huile: 78%', '~15 ml eau par jaune', 'Ajoute richesse et couleur', 'Meilleur pour mayo et aioli']
        },
        {
          title: 'Moutarde',
          icon: 'mdi:shaker-outline',
          description: 'Repose sur le mucilage et les proteines des graines. Ajoute une saveur piquante.',
          points: ['Max huile: 70%', '~10 ml teneur en eau', 'Pouvoir emulsifiant plus faible', 'Ideale pour vinaigrettes']
        },
        {
          title: 'Lecithine de Soja',
          icon: 'mdi:leaf',
          description: 'Tensioactif vegetal hautement concentre.',
          points: ['Max huile: 82%', '~5 ml teneur en eau', 'Profil de gout neutre', 'Incontournable en cuisine moderniste']
        },
        {
          title: 'Polysorbate',
          icon: 'mdi:flask-outline',
          description: 'Emulsifiant synthetique a capacite tensioactive maximale.',
          points: ['Max huile: 85%', '~2 ml teneur en eau', 'Plus haute tolerance a l huile', 'Utilise dans les mousses et airs']
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
      text: 'La Science: Pourquoi les Emulsions se Brisent et Comment la Conjecture de Kepler S Applique',
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
      type: 'card',
      columns: 2,
      items: [
        {
          icon: 'mdi:egg-outline',
          title: 'Mayonnaise & Aïoli Classiques',
          html: 'Utilisez du <strong>jaune d œuf</strong> jusqu à 78% d huile. Commencez avec un jaune par tasse d huile. Ajoutez une cuillère à café d eau ou de jus de citron avant de verser l huile pour une marge de sécurité plus large.'
        },
        {
          icon: 'mdi:shaker-outline',
          title: 'Vinaigrettes & Assaisonnements Légers',
          html: 'Utilisez de la <strong>moutarde</strong> jusqu à 70% d huile. Le mucilage de la moutarde fournit suffisamment d émulsification pour une vinaigrette temporaire.'
        },
        {
          icon: 'mdi:leaf',
          title: 'Sauces Modernistes & Mousses Stables',
          html: 'Utilisez de la <strong>lécithine de soja</strong> jusqu à 82% d huile. Idéal pour les émulsions de goût neutre où vous souhaitez que la saveur de l huile et de l acide ressorte.'
        },
        {
          icon: 'mdi:flask-outline',
          title: 'Mousses Expérimentales & Airs',
          html: 'Utilisez du <strong>polysorbate</strong> jusqu à 85% d huile. Le choix incontournable pour les techniques modernistes nécessitant une charge en huile et une stabilité maximales.'
        }
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
      title: '3 signes courants que votre émulsion est sur le point de se briser',
      html: 'Surveillez un <strong>epaississement suivi d un amincissement soudain</strong>, une <strong>surface brillante devenant granuleuse</strong> ou de l huile visible s accumulant sur les bords. Si vous voyez l un de ces signes, arretez d ajouter de l huile immediatement et incorporez une cuillere a cafe d eau froide avant de continuer.'
    },
    {
      type: 'title',
      text: 'Conseils Pratiques pour des Emulsions Parfaites a Chaque Fois',
      level: 3
    },
    {
      type: 'message',
      html: '<strong>La règle d or:</strong> Le rapport huile/eau compte plus que la technique ou la vitesse. Utilisez notre calculateur pour trouver votre limite exacte avant de fouetter.'
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
      html: 'Mettez un jaune d oeuf frais dans un bol propre. Fouettez-le avec une cuillere a cafe d eau. Ensuite, <strong>versez le melange brise aussi lentamente que possible</strong>, exactamente comme s il s agissait d huile brute. Une fois qu il se re-emulsifie, vous pouvez ajouter le reste plus rapidement.'
    },
    {
      type: 'title',
      text: 'Glossaire des émulsions culinaires',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Phase Continue', definition: 'Le liquide qui entoure les gouttelettes - généralement de l eau, du vinaigre ou du jus de citron dans les émulsions huile-dans-l eau comme la mayonnaise.' },
        { term: 'Phase Dispersée', definition: 'Le liquide divisé en minuscules gouttelettes - l huile dans la plupart des émulsions culinaires.' },
        { term: 'Fraction Volumique', definition: 'Le rapport du volume d huile sur le volume total.' },
        { term: 'Coalescence', definition: 'Lorsque deux ou plusieurs gouttelettes d huile fusionnent pour en former une plus grande.' },
        { term: 'Inversion de Phase', definition: 'Le point où une émulsion huile-dans-l eau bascule en eau-dans-l eau.' }
      ]
    },
    {
      type: 'summary',
      title: 'Points Clés pour des Émulsions Stables',
      items: [
        'Chaque émulsifiant a une fraction maximale d huile: jaune d œuf 78%, moutarde 70%, lécithine de soja 82%, polysorbate 85%.',
        'Le point de rupture est déterminé par la géométrie (conjecture de Kepler à 74%), et non par la vitesse de fouettage.',
        'Commencez toujours avec des ingrédients à température ambiante et ajoutez une petite quantité d eau comme marge de sécurité.',
        'Une émulsion brisée se sauve en ajoutant de l émulsifiant frais et plus de phase aqueuse, pas en fouettant plus fort.',
        'Utilisez notre calculateur de stabilité d émulsion pour obtenir la limite exacte selon vos ingrédients.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
