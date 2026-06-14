import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculateur de Courbes de Pasteurisation Sous Vide';
const description = 'Calculez le temps exact necessaire pour une pasteurisation a cœur securitaire contre Salmonella et Listeria en cuisson sous vide, en tenant compte de la forme et de l epaisseur de la viande.';

const faq = [
  {
    question: 'Qu est ce que la pasteurisation en cuisson sous vide ?',
    answer: 'La pasteurisation consiste a chauffer un aliment a une temperature precise et a l y maintenir suffisamment longtemps pour reduire les micro-organismes pathogenes (comme Salmonella, Listeria et E. coli) a des niveaux surs et acceptables. Contrairement a la sterilisation, elle ne detruit pas toutes les spores bacteriennes mais rend l aliment propre a la consommation.',
  },
  {
    question: 'Pourquoi l epaisseur de la viande influence t elle autant le temps de cuisson ?',
    answer: 'Le transfert de chaleur dans les aliments se fait par conduction. Le temps necessaire pour que le cœur (le point le plus froid) atteigne la temperature du bain marie augmente de maniere quadratique avec l epaisseur. Doubler l epaisseur d un steak multiplie le temps de chauffe par quatre environ.',
  },
  {
    question: 'Pourquoi 54,4 °C (130 °F) est elle consideree comme la temperature minimale de securite en sous vide ?',
    answer: 'En dessous de 54,4 °C, des pathogenes alimentaires courants comme Salmonella peuvent survivre et se multiplier activement. Si les aliments restent dans cette zone de danger plus de 4 heures, des toxines resistantes a la chaleur peuvent se former, posant des risques graves pour la securite alimentaire.',
  },
  {
    question: 'Qu est ce qu une reduction 6D ou 6,5D ?',
    answer: 'Une reduction D correspond a une reduction decimale (logarithmique) de la population bacterienne. Une reduction de 6,5D signifie que 99,99995 % du pathogene cible est detruit. Par exemple, si l on partait de 1 000 000 de bacteries, il en resterait moins d une.',
  },
  {
    question: 'Comment la geometrie de l aliment modifie t elle la vitesse de chauffe ?',
    answer: 'La chaleur penetre une sphere depuis toutes les directions (3 dimensions) et un cylindre par les cotes (2 dimensions), tandis qu une plaque plate est principalement chauffee par le dessus et le dessous (1 dimension). Les spheres chauffent donc le plus vite, suivies des cylindres, les plaques prenant le plus de temps.',
  },
];

const howTo = [
  {
    name: 'Regler la temperature du bain',
    text: 'Ajustez le curseur pour qu il corresponde a la temperature de votre bain marie. Les temperatures plus elevees pasteurisent de maniere exponentielle plus rapide.',
  },
  {
    name: 'Preciser l epaisseur de la viande',
    text: 'Mesurez la partie la plus epaisse de votre viande en millimetres et saisissez la dans le calculateur.',
  },
  {
    name: 'Choisir la forme geometrique',
    text: 'Selectionnez si votre aliment a la forme d une plaque plate (steak, blanc de poulet), d un cylindre (filet de bœuf, ballotine) ou d une sphere (boulette de viande).',
  },
  {
    name: 'Choisir le pathogene cible',
    text: 'Choisissez Salmonella pour la securite standard des viandes et volailles, ou Listeria monocytogenes pour les personnes a risque ou une securite renforcee.',
  },
  {
    name: 'Verifier le temps de cuisson total',
    text: 'Le calculateur affiche le temps de chauffe a cœur et le temps de letalite. Additionnez les pour obtenir la duree totale de cuisson securitaire.',
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
  slug: 'courbes-pasteurisation-sous-vide',
  title: 'Courbes de Pasteurisation Sous Vide',
  description: 'Calculez le temps exact necessaire pour une pasteurisation a cœur securitaire contre Salmonella et Listeria en cuisson sous vide, en tenant compte de la forme et de l epaisseur de la viande.',
  faqTitle: 'Questions Frequentes',
  ui: {
    title: 'Courbes de Pasteurisation Sous Vide',
    subtitle: 'Cinetique de letalite thermique et compensation de la temperature a cœur',
    bathTempLabel: 'Temperature du Bain Marie',
    thicknessLabel: 'Epaisseur de la Viande',
    shapeLabel: 'Geometrie de la Viande',
    shapeSlab: 'Plaque Plate (ex. Steak, Blanc de Poulet)',
    shapeCylinder: 'Cylindre (ex. Filet, Roulade)',
    shapeSphere: 'Sphere (ex. Boulette de Viande)',
    pathogenLabel: 'Pathogene Cible',
    pathogenSalmonella: 'Salmonella (Standard)',
    pathogenListeria: 'Listeria monocytogenes',
    resultsTitle: 'Temps de Pasteurisation Securitaire',
    heatingTime: 'Temps de Chauffe a Cœur',
    lethalityTime: 'Temps de Letalite du Pathogene',
    totalTime: 'Temps de Cuisson Total',
    dangerZoneTitle: 'Zone de Danger Biologique',
    dangerZoneDesc: 'Les temperatures inferieures a 54,4 °C ne permettent pas de pasteuriser les aliments de maniere sure car le taux de replication bacterienne peut depasser le taux de destruction thermique. Ne pas cuire sous vide en dessous de cette temperature pendant plus de 4 heures.',
    chartTitle: 'Courbe Logarithmique de Reduction Bacterienne',
    chartXLabel: 'Temps (minutes)',
    chartYLabel: 'Reduction Logarithmique',
    disclaimer: 'Les calculs supposent une temperature de depart de 5 °C et la diffusivite thermique d une viande maigre. Utilisez toujours un thermometre numerique etalonne pour verifier la temperature du bain.',
    minutesUnit: 'min',
    mmUnit: 'mm',
    inUnit: 'po',
    tempUnitC: '°C',
    tempUnitF: '°F',
    systemLabel: 'Systeme de Mesure',
    systemMetric: 'Metrique',
    systemImperial: 'Imperial'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Pasteurisation Sous Vide: Le Guide Complet de Securite pour le Cuisinier Amateur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La cuisson sous vide a transforme les cuisines domestiques en rendant accessible a tous, avec un simple thermoplongeur, cette texture parfaite qu il est impossible de rater. Mais la methode cache une complexite critique: aux basses temperatures qui donnent ce rose uniforme de bord en bord, on travaille a quelques millimetres au dessus du seuil de mort thermique des bacteries dangereuses. Ce guide explique precisement comment calculer les temps de pasteurisation securitaires pour chaque morceau de viande, a chaque temperature, pour ne plus jamais servir de volaille ou de poisson insuffisamment traite.',
    },
    {
      type: 'title',
      text: 'Pourquoi la Securite en Sous Vide est Differente de la Cuisson Traditionnelle',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quand on saisit un blanc de poulet dans une poele a 200 °C, la surface atteint instantanement des temperatures letales et les bacteries meurent en quelques secondes. La cuisson sous vide inverse ce modele: le bain marie est regle a la temperature finale souhaitee, parfois aussi bas que 55 °C. A ces temperatures, eliminer Salmonella ou Listeria n est pas instantane, c est un processus lent qui se mesure en minutes, voire en heures. Les tables de l annexe A du FSIS de l USDA indiquent que pour obtenir une reduction de 6,5 log de Salmonella dans la volaille, il faut maintenir le produit a 60 °C pendant environ 28 minutes apres que le cœur a atteint la temperature. A 55 °C, ce temps grimpe a pres de 90 minutes. Si l on retire le sachet des que le minuteur sonne sans tenir compte du temps de letalite, on risque de servir un aliment sous pasteurise.',
    },
    {
      type: 'title',
      text: 'Temps de Cuisson Sous Vide en Pratique: Ce Dont le Cuisinier a Vraiment Besoin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le tableau ci dessous reflete ce que les cuisiniers recherchent vraiment: des morceaux precis de viande, aux temperatures les plus courantes, avec des durees totales qui incluent a la fois le temps de montee en temperature et le temps de letalite du pathogene. Ces valeurs supposent une epaisseur de 25 mm, une temperature de depart de 5 °C et une cible de reduction de 6,5 log de Salmonella.',
    },
    {
      type: 'table',
      headers: ['Aliment', 'T° du Bain', 'Montee a Cœur', 'Letalite', 'Temps Total', 'Resultat'],
      rows: [
        ['Blanc de Poulet', '60 °C / 140 °F', '~35 min', '~28 min', '~63 min', 'Juteux, pleinement pasteurise'],
        ['Blanc de Poulet', '65 °C / 149 °F', '~35 min', '~3 min', '~38 min', 'Plus ferme, texture traditionnelle'],
        ['Filet de Saumon', '50 °C / 122 °F', '~20 min', '~55 min', '~75 min', 'Fondant, translucide, sur'],
        ['Steak de Bœuf', '55 °C / 131 °F', '~40 min', '~89 min', '~129 min', 'Saignant, surface pasteurisee'],
        ['Filet de Porc', '60 °C / 140 °F', '~35 min', '~28 min', '~63 min', 'Tendre avec un leger rose'],
        ['Magret de Canard', '57 °C / 135 °F', '~35 min', '~52 min', '~87 min', 'Riche, rose, securitaire'],
        ['Filet de Dinde', '63 °C / 145 °F', '~40 min', '~9 min', '~49 min', 'Moelleux, jamais sec'],
        ['Boulettes de Viande (sphere)', '60 °C / 140 °F', '~25 min', '~28 min', '~53 min', 'Cuisson uniforme'],
      ],
    },
    {
      type: 'title',
      text: 'Les Mathematiques Logarithmiques de la Mort Bacterienne: Valeurs D et Valeurs z Expliquees',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les bacteries ne meurent pas toutes en meme temps comme si l on appuyait sur un interrupteur. La mort thermique suit une cinetique de premier ordre: une fraction constante de la population est detruite par unite de temps a une temperature donnee. La <strong>valeur D</strong> (temps de reduction decimale) est le temps necessaire a une temperature specifique pour tuer 90 % des bacteries presentes, soit une reduction de 1 log. Pour Salmonella a 60 °C, la valeur D est d environ 4,3 minutes. La <strong>valeur z</strong> (generalement 5,5 °C pour Salmonella) indique de combien il faut augmenter la temperature pour accelerer le processus d un facteur 10. Augmentez le bain de 55 °C a 60,5 °C et le temps de letalite necessaire chute d un facteur 10, passant de 89 minutes a environ 9 minutes. Cette relation exponentielle explique pourquoi cuire a 65 °C est radicalement plus rapide et plus sur que cuire a 55 °C, meme si l aliment semble visuellement presque identique.',
    },
    {
      type: 'title',
      text: 'La Zone de Danger: Pourquoi 54,4 °C (130 °F) est le Plancher Absolu',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Danger Biologique en Dessous de 54,4 °C (130 °F)',
      html: 'Ne jamais cuire sous vide en dessous de 54,4 °C (130 °F) pendant plus de 4 heures. A ces temperatures, le taux de destruction thermique de bacteries comme Salmonella et Clostridium perfringens est en realite plus lent que leur taux de reproduction naturel. La population bacterienne peut augmenter pendant la cuisson. Pire encore, certains pathogenes comme Bacillus cereus et Clostridium botulinum de type E peuvent produire des toxines thermostables qui survivent a la cuisson. Si votre thermoplongeur affiche 52 °C et que vous laissez la viande pendant 8 heures en pensant que le basse temperature longue duree est plus sur, vous creez un danger biologique.',
    },
    {
      type: 'title',
      text: 'Comment la Forme et l Epaisseur de la Viande Dictent le Temps de Cuisson',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le centre thermique de votre aliment, le dernier point a atteindre la temperature cible, dicte le temps de cuisson total. La conduction de la chaleur suit la loi de Fourier et le temps necessaire pour que le cœur arrive a 1 °C pres de la temperature du bain depend du <strong>carre de l epaisseur</strong>. Doublez l epaisseur d un blanc de poulet de 25 mm a 50 mm et le temps de chauffe quadruple, passant de 35 minutes a environ 140 minutes. La forme joue un role enorme: une <strong>plaque plate</strong> (steak, filet) recoit la chaleur par deux faces opposees et constitue la geometrie la plus lente. Un <strong>cylindre</strong> (filet, roulade) recoit la chaleur radialement par les cotes et chauffe environ 1,4 fois plus vite qu une plaque de meme epaisseur. Une <strong>sphere</strong> (boulette) recoit la chaleur de toutes les directions et est la geometrie la plus rapide, environ 1,7 fois plus vite qu une plaque. C est pourquoi les aliments spheriques comme les boulettes de viande ou les arancini atteignent etonnamment vite des temperatures a cœur securitaires.',
    },
    {
      type: 'title',
      text: 'Salmonella ou Listeria: Choisir son Pathogene Cible',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Salmonella (Standard)',
          icon: 'mdi:bacteria-outline',
          description: 'Contaminant le plus frequent des volailles, moderement sensible a la chaleur, largement utilise comme pathogene de reference dans les normes FSIS de l USDA.',
          points: [
            'Valeur z de 5,5 °C: moderement thermosensible',
            'Cible: reduction 6,5 log pour la volaille, 5 log pour le bœuf',
            'D60 = 4,3 minutes: meurt relativement vite a 60 °C',
            'Sur pour les adultes en bonne sante avec des temps de pasteurisation standard',
            'Substitut pour les serovars de Salmonella enterica dans tous les types de viande',
          ],
        },
        {
          title: 'Listeria monocytogenes',
          icon: 'mdi:shield-alert-outline',
          description: 'Resistance thermique superieure a Salmonella. Critique pour les populations vulnerables, notamment les femmes enceintes et les personnes immunodeprimees.',
          highlight: true,
          points: [
            'Resistance thermique superieure a Salmonella',
            'Valeur z de 6,0 °C: necessite une hausse de temperature plus importante pour accelerer la destruction',
            'Cible: reduction de 6 log recommandee',
            'D60 = 7,7 minutes: prend presque deux fois plus de temps que Salmonella',
            'Critique pour les femmes enceintes, les personnes agees et les immunodeprimes',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Securite Alimentaire pour les Personnes Vulnerables: Quand la Pasteurisation Standard ne Suffit Pas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les femmes enceintes, les adultes de plus de 65 ans, les patients sous chimiotherapie, les greffes et les personnes atteintes de VIH ou de maladies auto-immunes font face a des risques considerablement plus eleves de maladies d origine alimentaire. Listeria monocytogenes en particulier peut traverser la barriere placentaire et provoquer une fausse couche, une mort foetale ou une meningite neonatale, meme lorsque la mere ne presente aucun symptome. Pour ces populations, la reduction standard de 6,5 log de Salmonella est insuffisante. Choisissez Listeria comme pathogene cible et prolongez les temps de cuisson en consequence. A 60 °C, le temps de letalite supplementaire pour Listeria par rapport a Salmonella ajoute environ 16 minutes pour un blanc de poulet de 25 mm, un petit investissement en temps pour des marges de securite substantielles.',
    },
    {
      type: 'title',
      text: 'Pourquoi la Temperature de Depart est Importante: Toujours Partir du Froid',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ce calculateur part du principe que la temperature de depart est de 5 °C, la temperature standard d un refrigerateur. Si vous prenez la viande directement au congelateur a -18 °C, le cœur mettra beaucoup plus de temps a atteindre la temperature cible. La chaleur latente de fonte de la glace dans les tissus musculaires creer un plateau a 0 °C qui peut ajouter 30 a 50 % au temps de chauffe. Decongelez toujours les produits surgeles entierement au refrigerateur avant la cuisson sous vide et verifiez la temperature de depart a cœur. De meme, si vous laissez la viande sur le plan de travail pour la temperer 30 minutes avant la mise sous vide, la reduction du temps de chauffe n est pas prise en compte par ce modele et vous pourriez depasser la pasteurisation, ce qui est sans danger mais peut affecter la texture.',
    },
    {
      type: 'title',
      text: 'Pasteurisation ne Signifie pas Sterilisation: Ce Qui Survit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La pasteurisation reduit les pathogenes a des niveaux consideres comme surs par les normes de sante publique, generalement une reduction de 5 a 7 log. Elle ne produit pas un produit sterile. Certaines spores bacteriennes, notamment <em>Clostridium botulinum</em> et <em>Clostridium perfringens</em>, peuvent survivre aux temperatures de pasteurisation et germer si les aliments sont mal conserves. Apres la cuisson sous vide, les aliments doivent etre soit servis immediatement, maintenus au dessus de 54,4 °C pour le service, soit refroidis rapidement dans un bain de glace en dessous de 4 °C dans les 2 heures. Les sachets sous vide creent un environnement anaerobie dans lequel Clostridium botulinum se developpe idealement ; ne laissez jamais un sachet sous vide cuit a temperature ambiante. Pour une conservation au refrigerateur au dela de 5 jours, la congelation est recommandee.',
    },
    {
      type: 'title',
      text: 'Conformite FSIS de l USDA: Respecter les Normes Reglementaires a la Maison',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L annexe A du Food Safety and Inspection Service (FSIS) de l USDA fournit le cadre reglementaire de reference pour les standards de performance de letalite dans les produits carnes et la volaille. Ces tables indiquent les combinaisons temps temperature requises pour des reductions logarithmiques specifiques de Salmonella. Bien que concues pour les industriels, les cuisiniers particuliers peuvent appliquer la meme science. Par exemple, l annexe A du FSIS exige qu une volaille prete a consommer atteigne une reduction de 6,5 log de Salmonella. A 60 °C, le temps de maintien requis apres que l ensemble du produit a atteint la temperature est de 28,1 minutes. Ce calculateur met en œuvre le modele mathematique du FSIS utilisant la cinetique d Arrhenius du premier ordre avec les valeurs D et z issues d etudes de desactivation thermique evaluees par des pairs et adaptees a l usage domestique du thermoplongeur.',
    },
    {
      type: 'title',
      text: 'Poisson et Fruits de Mer: Des Regles Differentes pour des Proteines Differentes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La chair du poisson a des proprietes thermiques differentes de celles des viandes mammaliennes ou aviaires. Le poisson chauffe plus vite en raison de sa densite plus faible et de la finesse typique des morceaux, mais les pathogenes preoccupants ne sont pas les memes. Pour le poisson cru ou legerement cuit, les especes <em>Vibrio</em> et le parasite <em>Anisakis</em> sont les principaux risques plutot que Salmonella. La FDA recommande de congelar le poisson a -20 °C pendant 7 jours avant consommation crue pour detruire les parasites, puis de pasteuriser sous vide contre Listeria lors de la cuisson finale. Le saumon cuit a 50 °C necessite environ 55 minutes de maintien pour une reduction de 6 log de Listeria, produisant une texture unique impossible a obtenir par toute autre methode de cuisson. Le thon et autres poissons scombroides exigent une vigilance particuliere: l histamine produite par l action bacterienne avant cuisson est thermostable et n est pas detruite par la pasteurisation ; toujours se procurer du poisson de qualite sushi aupres de fournisseurs reputes et le maintenir en dessous de 4 °C avant cuisson.',
    },
    {
      type: 'title',
      text: 'Le Compromis Texture Securite: Pourquoi les Temperatures Plus Elevees Vont Plus Vite mais Changent le Resultat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Chaque adepte du sous vide fait face au meme choix: cuire plus bas et plus longtemps pour une meilleure texture, ou cuire plus haut et plus vite pour la commodite et la marge de securite. Un blanc de poulet cuit a 60 °C donne une chair si juteuse qu elle defie les attentes sur ce que peut etre la volaille, mais necessite un maintien letal de 28 minutes apres equilibrage a cœur, pour un temps total de plus d une heure. A 65 °C, le meme blanc se pasteurise en seulement 3 minutes de maintien pour un total de 38 minutes, mais les fibres musculaires se contractent davantage et expulsent de l humidite. Aucune approche n est mauvaise ; le calculateur vous donne simplement les chiffres pour faire un choix eclaire. Pour les diners entre amis ou le timing est flexible, visez bas. Pour les soirs de semaine, montez la temperature. L aliment sera toujours sur si le temps calcule est respecte.',
    },
    {
      type: 'title',
      text: 'Etalonnage du Materiel: Votre Thermoplongeur Vous Ment Peut Etre',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Verifiez la temperature de votre thermoplongeur avec un thermometre numerique etalonne.</strong> Les thermoplongeurs grand public peuvent deriver de 1 a 2 °C avec le temps, ce qui, aux marges de la pasteurisation (55 a 58 °C), peut faire la difference entre une cuisson sure de 89 minutes et une sous pasteurisation dangereuse. Testez votre thermoplongeur par rapport a un thermometre de reference dans un recipient bien isole une fois par mois. Une erreur de 1 °C a 55 °C modifie le temps de letalite d environ 30 minutes pour Salmonella.',
    },
    {
      type: 'title',
      text: 'Cuire Plusieurs Pieces: Comment le Nombre de Sachets Affecte le Transfert de Chaleur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une erreur frequente consiste a charger un bain sous vide de multiples sachets en supposant que le temps calcule pour un seul aliment reste valable. L eau doit circuler librement entre les sachets pour un transfert thermique efficace. Un bain trop dense cree des zones froides stagnantes ou les sachets s isolent mutuellement de l eau chauffee. En regle generale, laissez au moins 2 cm d espace d eau entre les sachets et si vous cuisinez plus de 4 pieces, augmentez le temps calcule de 15 a 20 % pour compenser. Mieux encore, utilisez un recipient assez grand pour que l eau circule librement autour de chaque sachet. Pour les aliments spheriques comme les boulettes, l avantage geometrique diminue fortement si elles se touchent ou s empilent, les points de contact bloquant le transfert thermique radial.',
    },
    {
      type: 'title',
      text: 'Aide Memoire: Temperatures et Temps de Securite Minimaux par Type d Aliment',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Type d Aliment', 'T° a Cœur Minimale', 'Temps de Pasteurisation a T° Mini', 'Plus Rapide a', 'Recommande pour'],
      rows: [
        ['Poulet et Volaille', '60 °C / 140 °F', '~28 min (6,5 log Salmonella)', '65 °C: ~3 min de maintien', 'Tous les consommateurs'],
        ['Porc (morceaux entiers)', '60 °C / 140 °F', '~28 min (6,5 log Salmonella)', '65 °C: ~3 min de maintien', 'Tous les consommateurs'],
        ['Bœuf (steaks, rotis)', '55 °C / 131 °F', '~89 min (6,5 log Salmonella)', '60 °C: ~28 min de maintien', 'Adultes en bonne sante (pasteurisation de surface)'],
        ['Bœuf hache', '60 °C / 140 °F', '~28 min (6,5 log Salmonella)', '65 °C: immediat', 'Tous les consommateurs (bacteries melangees dans la masse)'],
        ['Poisson et Fruits de Mer', '50 °C / 122 °F', '~55 min (Listeria)', '55 °C: ~22 min de maintien', 'Pre congeles pour le controle des parasites'],
        ['Œufs (en coquille)', '57 °C / 135 °F', '~75 min (Salmonella)', '60 °C: ~28 min de maintien', 'Œufs coquille pasteurises'],
        ['Legumes', '85 °C / 185 °F', 'Non applicable (inactivation enzymatique)', 'N/A', 'Degradation de la pectine, pas de risque pathogene'],
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
