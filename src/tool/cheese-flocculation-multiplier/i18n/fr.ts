import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculateur Multiplicateur de Floculation du Fromage';
const description = 'Trouvez le moment exact pour couper le caille dans la fromagerie artisanale. Utilisez la methode du multiplicateur de floculation pour calculer le temps de coagulation, controler l humidite et ameliorer le rendement fromager avec notre calculateur gratuit.';
const faq = [
  {
    question: 'Qu est-ce que la methode de floculation en fromagerie?',
    answer: 'La methode de floculation est une technique utilisee pour determiner le moment precis de coupe du caille. Elle mesure le temps ecoule entre l ajout de la presure et les premiers signes de gelification (floculation), puis multiplie ce temps par un facteur specifique selon le style de fromage.'
  },
  {
    question: 'Comment detecter le point de floculation?',
    answer: 'La methode la plus courante est le test du bol. Placez un petit bol en plastique leger et sterilise a la surface du lait apres avoir ajoute la presure. Tapotez ou faites-le tourner doucement chaque minute. Au debut, il tourne librement. Le moment ou le bol arrete de tourner ou resiste au mouvement parce que le lait a commence a geler est le point de floculation.'
  },
  {
    question: 'Pourquoi le moment de la coupe du caille est-il si critique?',
    answer: 'Couper le caille au bon moment controle la synerese (perte d humidite). Couper trop tot donne des cailles fragiles, une perte de matiere grasse et un faible rendement. Couper trop tard produit un caille dur qui retient trop d humidite ou ne s egoutte pas correctement, conduisant a un fromage acide et suracidifie.'
  },
  {
    question: 'Qu est-ce qu un multiplicateur de floculation?',
    answer: 'Un multiplicateur est un facteur numerique applique au temps de floculation primaire pour calculer le temps total de coagulation avant la coupe. Les multiplicateurs standard vont de 2.0x (fromages secs comme le Parmesan) a 5.0x ou 6.0x (fromages humides comme le Camembert).'
  },
  {
    question: 'Comment la temperature et la force de la presure affectent-elles la floculation?',
    answer: 'Des temperatures plus elevees et une presure plus forte accelerent la floculation, ce qui signifie que le lait gele plus rapidement. Cependant, comme le temps total de coupe est directement proportionnel au temps de floculation, la methode du multiplicateur compense automatiquement ces variations, garantissant des proprietes de caille constantes.'
  }
];

const howTo = [
  {
    name: 'Ajouter la presure et demarrer le chronometre',
    text: 'Incorporez bien votre presure, puis lancez immediatement le chronometre de Phase 1 dans le calculateur.'
  },
  {
    name: 'Effectuer le test du bol',
    text: 'Placez un bol en plastique leger sur la surface du lait et testez la resistance regulierement.'
  },
  {
    name: 'Marquer le point de floculation',
    text: 'Au moment ou le bol resiste a la rotation ou au tapotement, cliquez sur le bouton d arret pour enregistrer le temps de floculation.'
  },
  {
    name: 'Choisir le type de fromage ou le multiplicateur',
    text: 'Choisissez un style de fromage dans la base de donnees ou entrez un multiplicateur personnalise. L application calcule le temps total et lance le compte a rebours pour la coupe.'
  },
  {
    name: 'Couper le caille au signal',
    text: 'Lorsque le chronometre atteint zero, le caille a atteint la tension optimale. Coupez le caille en cubes comme indique dans votre recette.'
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
  slug: 'calculateur-multiplicateur-floculation-fromage',
  title,
  description: 'Trouvez le moment exact pour couper le caille dans la fromagerie artisanale. Utilisez la methode du multiplicateur de floculation pour calculer le temps de coagulation, controler l humidite et ameliorer le rendement fromager avec notre calculateur gratuit.',
  faqTitle: 'Questions frequentes',
  ui: {
    title: 'Multiplicateur de Floculation du Fromage',
    subtitle: 'Trouvez la fenetre de coupe parfaite du caille en fonction du comportement reel de gelification',
    flocculationLabel: 'Temps de Floculation Primaire (minutes:secondes)',
    multiplierLabel: 'Multiplicateur de Floculation',
    cheeseTypeLabel: 'Preselection de Style de Fromage',
    totalCoagulationLabel: 'Temps Total de Coagulation',
    timeRemainingLabel: 'Temps Restant avant la Coupe',
    flocculationTimeLabel: 'Temps de Floculation',
    moistureLabel: 'Retention d Humidite Attendue du Caille',
    customOption: 'Multiplicateur Personnalise',
    startTimer: 'Demarrer le Chronometre de Presure',
    markFlocculation: 'Marquer la Floculation',
    resetTimer: 'Reinitialiser le Chronometre',
    warningTitle: 'Alerte de Qualite de la Presure',
    warningText: 'Le temps de floculation enregistre est exceptionnellement court. Cela peut indiquer une dose excessive de presure ou des reglages de temperature incorrects, ce qui pourrait causer une texture caoutchouteuse ou des saveurs ameres.',
    phase1Title: 'Phase 1: Emprésurage et Floculation',
    phase2Title: 'Phase 2: Compte a Rebours de Coagulation',
    phaseComplete: 'Le caille est pret a couper!',
    statusWaiting: 'Incorpore la presure...',
    statusFlocculated: 'Floculation detectee',
    statusCoagulating: 'Coagulation...',
    statusReady: 'Pret a Couper',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Quand couper le caille: La methode du multiplicateur de floculation pour un fromage parfait a chaque lot',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Si vous vous etes toujours demande <strong>"quand dois-je couper le caille?"</strong> ou <strong>"comment savoir si le caille est pret?"</strong>, la reponse reside dans la methode du multiplicateur de floculation. Contrairement a la fromagerie industrielle qui repose sur des minuteries fixes, les fromagers artisanaux mesurent le moment ou le lait commence a geler (le point de floculation) et multiplient ce temps par un facteur specifique au style. Cela capture toutes les variables - acidite du lait, taux de calcium, temperature, force de la presure - en une seule mesure. Notre <strong>calculateur de multiplicateur de floculation du fromage</strong> fait le calcul pour que vous puissiez couper au moment parfait, a chaque fois.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2.0x', label: 'Fromages a pate dure', icon: 'mdi:cheese' },
        { value: '3.0x', label: 'Fromages a Pate MiDure', icon: 'mdi:cheese' },
        { value: '5.0x', label: 'Fromages a pate molle', icon: 'mdi:cheese' },
        { value: '10-15m', label: 'Floculation typique', icon: 'mdi:timer-outline' }
      ]
    },
    {
      type: 'title',
      text: 'Problemes fromagers courants resolus par la methode de floculation',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Fermete inconsistante du caille:</strong> Les minuteries fixes ne peuvent pas tenir compte des variations de lot dans le lait. La methode de floculation s adapte a la chimie reelle de votre lait.',
        '<strong>Faible rendement fromager:</strong> Couper trop tot ou trop tard entraine une perte de matiere grasse et de proteines. La methode du multiplicateur cible la fenetre exacte pour une retention optimale.',
        '<strong>Teneur en humidite incorrecte:</strong> Les fromages a pate dure necessitent un caille sec; les fromages a pate molle necessitent un caille humide. Differents multiplicateurs (2.0x a 6.0x) controlent directement la synerese.',
        '<strong>Activite variable de la presure:</strong> La force de la presure change avec le temps et entre les marques. La mesure du temps de floculation capture l activite reelle dans votre cuve a l instant present.'
      ]
    },
    {
      type: 'title',
      text: 'Comment realiser le test du bol etape par etape',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Le test du bol est la facon la plus simple de detecter la floculation sans equipement special. Apres avoir ajoute la presure et bien remue, placez un petit bol en plastique sterilise ou un bouchon de bouteille sur la surface du lait. Toutes les 30 a 60 secondes, tapotez-le ou faites-le tourner doucement. Pendant que le lait est encore liquide, le bol bouge librement. Au moment ou il resiste au mouvement - c est votre <strong>point de floculation</strong>. Enregistrez ce temps et entrez-le dans le calculateur ci-dessus.'
    },
    {
      type: 'tip',
      title: 'Utilisez un bouchon de bouteille pour plus de sensibilite',
      html: 'Un bouchon de bouteille en plastique leger est plus sensible qu un bol et donne un point d arret plus clair. Sterilisez-le dans l eau bouillante pendant 2 minutes avant utilisation et maintenez-le flottant sur le lait a partir du moment ou vous ajoutez la presure.'
    },
    {
      type: 'tip',
      title: 'Gardez votre temperature stable',
      html: 'Le temps de floculation est fortement dependant de la temperature. Une baisse de seulement 2C peut doubler votre temps de floculation. Maintenez le lait a une temperature stable (generalement 30-35C selon le style de fromage) pendant toute la phase de coagulation.'
    },
    {
      type: 'tip',
      title: 'Surveillez une floculation tres rapide',
      html: 'Si la floculation se produit en moins de 8 minutes (480 secondes), vous avez peut-etre ajoute trop de presure ou la temperature de votre lait est trop elevee. Cela peut causer une texture caoutchouteuse et des saveurs ameres. Le calculateur vous avertira si cela se produit.'
    },
    {
      type: 'title',
      text: 'Reference du multiplicateur de floculation par type de fromage',
      level: 2
    },
    {
      type: 'table',
      headers: ['Style de Fromage', 'Multiplicateur', 'Humidite Attendue', 'Fermete de Coupe', 'Potentiel d Affinage'],
      rows: [
        ['Parmesan, Grana', '2.0x', 'Tres faible', 'Tres ferme', '12+ mois'],
        ['Mozzarella (fraiche)', '2.0x', 'Tres elevee', 'Molle / Filante', 'Fraiche seulement'],
        ['Suisse, Alpin', '2.5x', 'Faible', 'Ferme', '6-12 mois'],
        ['Cheddar, Gouda', '3.0x', 'Moyenne-faible', 'Ferme / Elastique', '3-12 mois'],
        ['Fromage Bleu', '3.5x - 4.0x', 'Moyenne', 'Tendre', '2-6 mois'],
        ['Camembert, Brie', '5.0x', 'Elevee', 'Tres tendre', '3-8 semaines'],
        ['Frais / Chevre', '5.0x - 6.0x', 'Tres elevee', 'Delicat', 'Frais - 2 semaines']
      ]
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Multiplicateur Bas 2.0x to 2.5x',
          icon: 'mdi:cheese',
          description: 'Utilise pour les varietes de fromages a pate dure et seche necessitant une faible retention d humidite.',
          highlight: false,
          points: ['Mozzarella et Parmesan: 2.0x', 'Styles alpins: 2.5x', 'Egouttage rapide du lactoserum', 'Produit un caille dense et affinable']
        },
        {
          title: 'Multiplicateur Moyen 3.0x to 4.0x',
          icon: 'mdi:cheese',
          description: 'Plage standard pour les fromages a Pate MiDure equilibrant humidite et acidite.',
          highlight: true,
          points: ['Cheddar et Gouda: 3.0x', 'Fromages bleus: 3.5x a 4.0x', 'Expulsion equilibree du lactoserum', 'Potentiel de maturation flexible']
        },
        {
          title: 'Multiplicateur Eleve 5.0x to 6.0x',
          icon: 'mdi:cheese',
          description: 'Utilise pour les fromages a pate molle, cremeuse et riche en humidite.',
          highlight: false,
          points: ['Camembert et Brie: 5.0x', 'Fromages frais et a croute fleurie', 'Haute retention d humidite', 'Developpement d une pate delicate et cremeuse']
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Depannage: 3 signes que votre caille ne prend pas correctement',
      html: '<strong>Floculation en moins de 6 minutes:</strong> Trop de presure ou lait trop chaud. Reduisez la presure de 25% au prochain lot. <strong>La floculation prend plus de 25 minutes:</strong> La presure peut etre perimee, le lait trop froid ou la teneur en calcium trop faible. Ajoutez du chlorure de calcium. <strong>Le caille est visqueux ou cassant au moment de la coupe:</strong> Le multiplicateur est peut-etre trop eleve ou trop bas pour votre style de fromage. Ajustez par increments de 0.5x.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Fromages a Pate Dure (Parmesan, Alpin)',
      html: 'Utilisez un <strong>multiplicateur de 2.0x - 2.5x</strong>. Coupez le caille plus tot pour une expulsion maximale du lactoserum. Ces cailles sont coupes lorsque le gel est encore relativement fragile, produisant un caille dense et sec ideal pour un long affinage. Le calculateur affichera un temps de coagulation total plus court.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Fromages a Pate MiDure (Cheddar, Gouda)',
      html: 'Utilisez un <strong>multiplicateur de 3.0x</strong>. La plage standard pour la plupart des fromageries artisanales. Equilibre la retention d humidite avec l egouttage du lactoserum. Le caille est elastique et se casse nettement. La plupart des recettes de fromage entrent dans cette categorie.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Fromages a Pate Molle (Camembert, Brie)',
      html: 'Utilisez un <strong>multiplicateur de 5.0x - 6.0x</strong>. Laissez le gel se renforcer significativement avant de couper. Cela retient l humidite a l interieur du caille, creant la texture cremeuse et tartinable caracteristique des fromages a croute fleurie. Manipulez le caille doucement pour eviter de perdre le lactoserum retenu.'
    },
    {
      type: 'title',
      text: 'Glossaire du caille pour la fromagerie artisanale',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Point de Floculation', definition: 'Le moment dans le processus de fromagerie ou les proteines du lait commencent a s agglomerer et a former un gel mou.' },
        { term: 'Presure', definition: 'Un complexe d enzymes (principalement de la chymosine) utilise pour coaguler le lait, le separant en solides (caille) et liquide (lactoserum).' },
        { term: 'Synerese', definition: 'L extraction ou l expulsion d un liquide d un gel, comme le lactoserum qui s egoutte du caille de fromage.' },
        { term: 'Temps de Coagulation', definition: 'La duree totale entre l ajout de la presure et le moment ou le caille est pret a etre coupe.' }
      ]
    },
    {
      type: 'summary',
      title: 'Points cles pour une coupe parfaite du caille',
      items: [
        'Mesurez le temps de floculation avec precision en utilisant le test du bol. Entrez-le dans le calculateur ci-dessus.',
        'Selectionnez le multiplicateur qui correspond a votre style de fromage: 2.0x pour les pates dures, 3.0x pour les pates mi-dures, 5.0x pour les pates molles.',
        'Maintenez la temperature du lait stable pendant la coagulation. Meme un changement de 2C modifie le temps de floculation de maniere significative.',
        'Si la floculation se produit en moins de 8 minutes, reduisez la presure la prochaine fois. Si elle depasse 25 minutes, verifiez la fraicheur de la presure.',
        'Le calculateur s occupe des calculs pour que vous puissiez vous concentrer sur la technique et la regularite.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
