import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculateur de Sechage des Macarons: Temps de Sechage selon Humidite et Temperature';
const description = 'Calculez exactement combien de temps les coques de macaron doivent secher en fonction de l\'humidite, de la temperature et de la taille des coques. Evitez les coques fissurees et obtenez un pied parfait a chaque fois.';

const faq = [
  {
    question: 'Pourquoi les coques de macaron doivent-elles secher avant la cuisson ?',
    answer: 'Le sechage forme une fine pellicule a la surface de la coque. Cette croÃƒÂ"te est essentielle car elle emprisonne la vapeur pendant la cuisson, la forcant a s\'echapper vers le bas par le pied au lieu de fissurer le dessus. Sans un sechage adequat, les macarons craquent, n\'ont pas de pied ou cuisent de maniere irreguliere.',
  },
  {
    question: 'Comment l\'humidite affecte-t-elle le temps de sechage des macarons ?',
    answer: 'L\'humidite est le facteur le plus determinant. En atmosphere humide (au-dessus de 60%), l\'air est deja sature d\'humidite, ce qui ralentit considerablement l\'evaporation a la surface de la coque. Le temps de sechage peut doubler, voire tripler par rapport a un jour sec. En conditions tres seches (en dessous de 30%), les coques risquent de sur-secher et de former une croÃƒÂ"te trop epaisse qui empeche une bonne montee.',
  },
  {
    question: 'Quelle est la temperature ideale pour secher les coques de macaron ?',
    answer: 'Une temperature ambiante entre 20Ã‚Â°C et 25Ã‚Â°C est ideale. L\'air plus chaud contient plus d\'humidite et accelere le sechage, mais une chaleur excessive (au-dessus de 30Ã‚Â°C) provoque un sechage irregulier avec un exterieur croustillant et un interieur encore humide. Les temperatures fraÃƒÂ®ches en dessous de 18Ã‚Â°C ralentissent nettement le sechage.',
  },
  {
    question: 'Quel impact a la taille des coques sur le temps de sechage ?',
    answer: 'Les coques plus grandes ont davantage de surface et de volume, ce qui demande proportionnellement plus de temps de sechage. Un macaron mini de 2cm peut secher en 15 minutes, tandis qu\'un grand macaron de 5cm peut prendre plus d\'une heure. La relation n\'est pas lineaire: doubler le diametre triple environ le temps de sechage en raison du rapport carre-cube entre la surface et le volume.',
  },
];

const howTo = [
  {
    name: 'Dressez vos coques de macaron',
    text: 'Dressez des ronds de taille reguliere sur du papier sulfurise ou un tapis en silicone. Utilisez un gabarit pour des tailles constantes.',
  },
  {
    name: 'Mesurez votre environnement',
    text: 'Relevez l\'humidite et la temperature ambiantes de votre cuisine avec un hygrometre et un thermometre.',
  },
  {
    name: 'Entrez les valeurs dans le calculateur',
    text: 'Saisissez l\'humidite, la temperature et le diametre de vos coques pour obtenir le temps de sechage estime.',
  },
  {
    name: 'Testez la croÃƒÂ"te',
    text: 'Apres le temps indique, effleurez legerement la surface d\'une coque. Elle doit etre seche et mate, pas collante. Si elle colle au doigt, prolongez le sechage.',
  },
  {
    name: 'Enfournez des que pret',
    text: 'Une fois la croÃƒÂ"te formee, enfournez immediatement. Ne laissez pas les coques reposer trop longtemps apres le sechage, au risque de sur-secher et de fissurer.',
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
  slug: 'calculateur-sechage-macarons',
  title: 'Calculateur de Sechage des Macarons',
  description: 'Calculez exactement combien de temps les coques de macaron doivent secher en fonction de l\'humidite, de la temperature et de la taille des coques. Evitez les coques fissurees et obtenez un pied parfait a chaque fois.',
  faqTitle: 'Foire Aux Questions',
  ui: {
    humidityLabel: 'Humidite Ambiante',
    humidityUnit: '%',
    tempLabel: 'Temperature Ambiante',
    tempUnit: 'Ã‚Â°C',
    sizeLabel: 'Diametre de la Coque',
    sizeUnit: 'cm',
    dryingTimeLabel: 'Temps de Sechage Estime',
    minutesUnit: 'min',
    readinessLabel: 'Etat de la Surface',
    skinStatusReady: 'Pret a Enfourner',
    skinStatusForming: 'CroÃƒÂ"te en Formation',
    skinStatusSticky: 'Encore Collant',
    skinStatusOverDry: 'Trop Seche',
    humidityTagHigh: 'Humidite elevee',
    humidityTagNormal: 'Humidite normale',
    humidityTagLow: 'Humidite basse',
    humidityDescHigh: 'Journee tres humide. Le sechage sera nettement plus long. Utilisez un deshumidificateur ou une piece climatisee si possible.',
    humidityDescNormal: 'Humidite moderee. Le sechage devrait se derouler a un rythme normal avec une bonne formation de croÃƒÂ"te.',
    humidityDescLow: 'Air tres sec. Les coques risquent de secher trop vite et de sur-secher. Surveillez de pres et reduisez le temps de sechage.',
    tempTagHot: 'Piece chaude',
    tempTagIdeal: 'Temperature ideale',
    tempTagCool: 'Piece fraÃƒÂ®che',
    sizeTagMini: 'Mini',
    sizeTagStandard: 'Standard',
    sizeTagLarge: 'Grand',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'La Science du Sechage des Coques de Macaron: Pourquoi la Formation de la CroÃƒÂ"te Determine la Reussite',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le macaron est l\'une des preparations les plus techniques de la patisserie francaise. Son dome lisse caracteristique et sa collerette frangee, appelee "pied", dependent entierement d\'une etape cruciale: le sechage des coques dressees avant la cuisson. Ce temps de repos permet la formation d\'un fin film proteique a la surface de chaque coque. Pendant la cuisson, cette croÃƒÂ"te emprisonne la vapeur en expansion a l\'interieur de la coque et la force a s\'echapper vers le bas par le pied, ce qui souleve la coque et cree le pied tant recherche. Sans sechage suffisant, la vapeur perce le dessus et provoque des fissures. Avec un sechage excessif, la croÃƒÂ"te devient trop rigide et les coques ne peuvent pas lever correctement.',
    },
    {
      type: 'title',
      text: 'L\'Humidite et son Role Preponderant dans la Cinetique de Sechage',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'humidite relative est la variable qui influence le plus le sechage des coques de macaron. A 50% d\'humidite relative, une coque standard de 3cm demande generalement 30 a 40 minutes pour former une croÃƒÂ"te adequate. A 70% d\'humidite, ce temps peut s\'allonger a 60-90 minutes. A 30% d\'humidite, le sechage peut etre termine en seulement 15 a 20 minutes. La physique qui sous-tend ce phenomene est simple: la vitesse d\'evaporation est proportionnelle au deficit de pression de vapeur entre la surface de la coque et l\'air ambiant. L\'air humide presente un deficit plus faible, ce qui ralentit l\'evaporation. Les patisseries professionnelles controlent l\'humidite avec la plus grande rigueur et disposent souvent de pieces dediees aux macarons, maintenues a 40-50% d\'humidite relative.',
    },
    {
      type: 'title',
      text: 'Tableau de Reference des Temps de Sechage selon l\'Humidite et la Taille des Coques',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Humidite', '2cm Mini', '3cm Standard', '4cm Grand', '5cm Tres Grand'],
      rows: [
        ['30% (Tres Sec)', '10-15 min', '15-20 min', '25-30 min', '35-45 min'],
        ['40% (Sec)', '15-20 min', '20-30 min', '30-40 min', '45-60 min'],
        ['50% (Modere)', '20-25 min', '30-40 min', '40-55 min', '55-75 min'],
        ['60% (Humide)', '25-35 min', '40-55 min', '55-75 min', '75-100 min'],
        ['70% (Tres Humide)', '35-50 min', '55-75 min', '75-100 min', '100-130 min'],
        ['80% (Extremement Humide)', '50-70 min', '75-100 min', '100-140 min', '130-180 min'],
      ],
    },
    {
      type: 'title',
      text: 'Le Role de la Temperature dans la Vitesse d\'Evaporation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La temperature influence le sechage par deux mecanismes. Premierement, l\'air plus chaud peut contenir davantage de vapeur d\'eau, ce qui augmente le taux potentiel d\'evaporation depuis la surface de la coque. Deuxiemement, l\'energie cinetique moleculaire augmente avec la temperature, accelerant la vitesse a laquelle les molecules d\'eau quittent la phase liquide. Cependant, la temperature affecte egalement la stabilite de la meringue. Au-dessus de 28Ã‚Â°C, les proteines du blanc d\'oeuf peuvent commencer a se destabiliser, ce qui affaiblit la structure. La plage ideale pour le sechage des macarons est de 20-25Ã‚Â°C. En dessous de 18Ã‚Â°C, la vitesse d\'evaporation ralentit au point ou le sechage devient impraticable pour des coques de taille standard.',
    },
    {
      type: 'title',
      text: 'La Taille des Coques et la Loi Carre-Cube du Sechage',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le diametre des coques a un effet non lineaire sur le temps de sechage en raison du rapport carre-cube entre la surface et le volume. Un macaron mini de 2cm presente environ 3,1 cmÃ‚Â² de surface pour 0,5 cmÃ‚Â³ de volume, soit un rapport surface-volume favorable d\'environ 6:1. Un macaron de 5cm presente environ 19,6 cmÃ‚Â² de surface pour 8,2 cmÃ‚Â³ de volume, soit un rapport de seulement 2,4:1. Cela signifie que les coques plus grandes ont proportionnellement moins de surface par laquelle l\'humidite peut s\'echapper, ce qui augmente considerablement le temps de sechage. Ce calculateur modelise ce phenomene a l\'aide d\'une loi de puissance calibree sur des donnees empiriques issues de laboratoires de patisserie professionnelle.',
    },
    {
      type: 'title',
      text: 'Diagnostic des Defauts de Sechage les Plus Courants',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Coques fissurees sans pied',
      html: 'Le defaut le plus frequent sur les macarons. Cela indique presque toujours que les coques n\'ont pas suffisamment seche avant la cuisson. La croÃƒÂ"te de surface etait trop fragile pour contenir la vapeur en expansion, qui a perce par le dessus. <strong>Solution: prolongez le sechage de 10 a 15 minutes et testez la surface du bout du doigt avant d\'enfourner.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Pied de travers ou irregulier',
      html: 'Un sechage irregulier en est la cause. Si un cote de la plaque seche plus vite que l\'autre, le pied monte de travers. Cela arrive souvent lorsque les plaques sont placees pres d\'une fenetre, d\'un ventilateur ou d\'une source de chaleur. <strong>Solution: faites pivoter les plaques pendant le sechage et veillez a ce que l\'air circule de maniere homogene autour de toutes les coques.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Coques creuses apres la cuisson',
      html: 'Des coques creuses peuvent resulter d\'un sechage excessif, qui cree une croÃƒÂ"te trop epaisse et trop rigide. La coque ne peut pas se dilater correctement pendant la cuisson, laissant une poche d\'air a l\'interieur. <strong>Solution: reduisez le temps de sechage et verifiez la formation de la croÃƒÂ"te plus tot. La surface doit etre seche au toucher mais legerement souple sous une pression douce.</strong>',
    },
    {
      type: 'title',
      text: 'Conseils de Chefs Patissiers Professionnels',
      level: 3,
    },
    {
      type: 'tip',
      title: 'La Technique de la Porte du Four pour les Jours Humides',
      html: 'Par temps extremement humide, les chefs professionnels utilisent une technique appelee "sechage au four". Prechauffez le four au minimum (generalement 50Ã‚Â°C), eteignez-le, puis placez les macarons dresses a l\'interieur avec la porte entrouverte pendant 5 a 10 minutes. Cela cree un microclimat chaud et peu humide qui accelere la formation de la croÃƒÂ"te sans commencer a cuire les coques.',
    },
    {
      type: 'tip',
      title: 'Le Test du Toucher pour une CroÃƒÂ"te Parfaite',
      html: 'Le test ultime pour savoir si les macarons sont prets: effleurez la surface d\'une coque avec le bout d\'un doigt propre et sec. Si la pate colle au doigt, il faut plus de temps. Si la surface est seche et mate et ne colle pas, la croÃƒÂ"te est formee. Si la surface est dure et croustillante, sans aucune souplesse, les coques ont trop seche.',
    },
    {
      type: 'tip',
      title: 'Controler l\'Humidite sans Equipement',
      html: 'Si vous n\'avez pas de deshumidificateur, placez un bol de riz cru ou des sachets de gel de silice pres des macarons en train de secher. Ces deshydratants absorbent l\'humidite ambiante et creent un microclimat plus sec autour de la plaque. Dans les cuisines professionnelles sans climatisation, cette astuce toute simple peut reduire le temps de sechage de 30 a 40% les jours humides.',
    },
    {
      type: 'title',
      text: 'L\'Influence du Vieillissement des Blancs d\'Oeuf',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les blancs d\'oeuf vieillis produisent des meringues plus stables qui sechent de maniere plus previsible. Les blancs frais contiennent plus d\'eau et une structure proteique moins elastique, ce qui donne des meringues plus faibles qui mettent plus de temps a former une croÃƒÂ"te correcte. Les recettes professionnelles preconisent des blancs vieillis 24 a 72 heures a temperature ambiante, ou 3 a 5 jours au refrigerateur. Les blancs vieillis perdent environ 10 a 15% de leur teneur en eau par evaporation, concentrant ainsi les proteines et ameliorant la tenue de la meringue.',
    },
    {
      type: 'title',
      text: 'Aide-Memoire: Temps de Sechage selon les Conditions Courantes',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Temps de sechage types pour des coques de macaron standard de 3cm',
      items: [
        'Cuisine climatisee (22Ã‚Â°C, 45% d\'humidite): 25-30 minutes',
        'Jour de printemps, fenetres ouvertes (20Ã‚Â°C, 55% d\'humidite): 35-45 minutes',
        'Jour d\'ete, sans climatisation (28Ã‚Â°C, 70% d\'humidite): 60-90 minutes  -  utilisez la technique du sechage au four',
        'Maison chauffee en hiver (21Ã‚Â°C, 30% d\'humidite): 15-20 minutes  -  surveillez le sur-sechage',
        'Jour de pluie (18Ã‚Â°C, 80% d\'humidite): 75-100 minutes  -  deshumidificateur fortement recommande',
        'Laboratoire de patisserie professionnel (22Ã‚Â°C, 45% d\'humidite, chaleur tournante): 20-25 minutes',
      ],
    },
    {
      type: 'paragraph',
      html: 'Chaque cuisine est unique. Ce calculateur prend en compte les trois variables essentielles  -  humidite, temperature et taille des coques  -  pour vous fournir une estimation personnalisee du temps de sechage. Entrez vos conditions et dressez en toute confiance.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
