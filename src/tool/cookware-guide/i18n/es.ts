import type { ToolLocaleContent } from '../../../types';

const title = "Selector de Sartenes Inteligente: Guía de Utensilios de Cocina";
const description = "Guía interactiva para elegir la mejor sartén u olla según tu estilo de cocina. Hierro vs Acero vs Teflón. Encuentra tu herramienta perfecta.";
const faq = [
    {
      question: '¿Cuál es la mejor sartén para uso diario?',
      answer: 'Para la mayoría, una sartén de acero inoxidable de alta calidad o una de hierro fundido bien curada son las mejores. El acero es versátil y eterno, mientras que el hierro ofrece una antiadherencia natural sin químicos.',
    },
    {
      question: '¿Por qué se pega la comida en el acero inoxidable?',
      answer: 'Suele ser por falta de temperatura o por poner la comida antes de tiempo. Prueba el "efecto Leidenfrost": calienta la sartén hasta que una gota de agua ruede como una perla. Entonces está lista.',
    },
    {
      question: '¿Cómo sé si mi sartén es segura?',
      answer: 'Busca etiquetas "PFOA Free". Las sartenes de hierro, acero al carbono y acero inoxidable son las opciones más seguras y duraderas, ya que no tienen recubrimientos que se degraden con el tiempo.',
    },
    {
      question: '¿Qué significa "curar" una sartén?',
      answer: 'Es el proceso de crear una capa de aceite polimerizado sobre el metal (hierro o carbono). Esto protege contra el óxido y crea una superficie antiadherente natural que mejora con cada uso.',
    },
    {
      question: '¿Cuánto debo gastar en una buena sartén?',
      answer: 'Un set de 2-3 sartenes de calidad media-alta (acero inoxidable o hierro) puede durar 20+ años. Es mejor invertir bien una sola sartén que comprar 5 baratas que duran 2 años. Calidad sobre cantidad.',
    },
  ];
const howTo = [
    {
      name: 'Selecciona tu estilo de cocina',
      text: 'Elige entre fuego alto (dorar), delicado (huevos), guisos (cocción lenta) o cocina rápida. Cada estilo tiene requirements distintos.',
    },
    {
      name: 'Elige el material ideal',
      text: 'Basado en tu estilo, la herramienta te recomendará el mejor material: hierro, acero inoxidable, cobre o teflón.',
    },
    {
      name: 'Lee las características',
      text: 'Entiende ventajas, desventajas, mantenimiento y durabilidad. Luego elige la sartén específica que se ajusta a tu presupuesto y necesidades.',
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
  slug: 'guia-sartenes',
  title: 'Selector de Sartenes Inteligente: Guía de Utensilios de Cocina',
  description: 'Guía interactiva para elegir la mejor sartén u olla según tu estilo de cocina. Hierro vs Acero vs Teflón. Encuentra tu herramienta perfecta.',
  faqTitle: 'Preguntas Frecuentes',
  faq: [
    {
      question: '¿Cuál es la mejor sartén para uso diario?',
      answer: 'Para la mayoría, una sartén de acero inoxidable de alta calidad o una de hierro fundido bien curada son las mejores. El acero es versátil y eterno, mientras que el hierro ofrece una antiadherencia natural sin químicos.',
    },
    {
      question: '¿Por qué se pega la comida en el acero inoxidable?',
      answer: 'Suele ser por falta de temperatura o por poner la comida antes de tiempo. Prueba el "efecto Leidenfrost": calienta la sartén hasta que una gota de agua ruede como una perla. Entonces está lista.',
    },
    {
      question: '¿Cómo sé si mi sartén es segura?',
      answer: 'Busca etiquetas "PFOA Free". Las sartenes de hierro, acero al carbono y acero inoxidable son las opciones más seguras y duraderas, ya que no tienen recubrimientos que se degraden con el tiempo.',
    },
    {
      question: '¿Qué significa "curar" una sartén?',
      answer: 'Es el proceso de crear una capa de aceite polimerizado sobre el metal (hierro o carbono). Esto protege contra el óxido y crea una superficie antiadherente natural que mejora con cada uso.',
    },
    {
      question: '¿Cuánto debo gastar en una buena sartén?',
      answer: 'Un set de 2-3 sartenes de calidad media-alta (acero inoxidable o hierro) puede durar 20+ años. Es mejor invertir bien una sola sartén que comprar 5 baratas que duran 2 años. Calidad sobre cantidad.',
    },
  ],
  bibliographyTitle: 'Bibliografía',
  bibliography: [
    {
      name: 'The Flavor Bible - Pairing, and Progress in Food',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'On Food and Cooking - Harold McGee (La Ciencia de la Cocina)',
      url: 'https://www.foodscience.org/',
    },
    {
      name: 'Salt Fat Acid Heat - Samin Nosrat',
      url: 'https://www.saltfatacidheat.com/',
    },
  ],
  howTo: [
    {
      name: 'Selecciona tu estilo de cocina',
      text: 'Elige entre fuego alto (dorar), delicado (huevos), guisos (cocción lenta) o cocina rápida. Cada estilo tiene requirements distintos.',
    },
    {
      name: 'Elige el material ideal',
      text: 'Basado en tu estilo, la herramienta te recomendará el mejor material: hierro, acero inoxidable, cobre o teflón.',
    },
    {
      name: 'Lee las características',
      text: 'Entiende ventajas, desventajas, mantenimiento y durabilidad. Luego elige la sartén específica que se ajusta a tu presupuesto y necesidades.',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Materiales de Sartenes: Ciencia y Práctica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No todas las sartenes son iguales. Cada material tiene propiedades termodinámicas distintas que afectan cómo distribuye el calor, qué temperaturas soporta, y cómo interactúa con los alimentos. Entender estas diferencias es la clave para elegir la herramienta correcta.',
    },
    {
      type: 'title',
      text: 'Hierro Fundido: La Clásica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Ventajas:</strong> Excelente retención de calor, distribucion uniforme, antiadherencia natural (cuando está curada), dura siglos, mejora con el tiempo. <strong>Desventajas:</strong> Pesada, requiere mantenimiento, puede oxidarse, tarda más en calentarse, no es apta para ácidos prolongados.',
    },
    {
      type: 'title',
      text: 'Acero Inoxidable: La Versátil',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Ventajas:</strong> Durable, no requiere mantenimiento, apta para ácidos (vinos, tomates), fácil limpiar, versátil, relativamente económica. <strong>Desventajas:</strong> No antiadherente naturalmente, requiere técnica (precalentar bien), distribucion de calor desigual (mejor si tiene fondo multicapa).',
    },
    {
      type: 'title',
      text: 'Teflón/PTFE: La Conveniente',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Ventajas:</strong> Antiadherente instant, fácil de cocinar, fácil de limpiar, económico. <strong>Desventajas:</strong> Se degrada con tiempo y temperatura, necesita reemplazo cada 3-5 años, no segura a temperaturas muy altas (>500°F), está en debate si PTFE es 100% seguro.',
    },
  ],
  ui: {
    cookingStyle: '¿Cómo cocinas habitualmente?',
    material: 'Tipo de Material',
    highHeat: 'Fuego Alto',
    sear: 'Dorar / Sellar',
    delicate: 'Delicado',
    fry: 'Huevos / Tortillas',
    stew: 'Guisos',
    slowCook: 'Cocción Lenta',
    fast: 'Rápido',
    quick: 'Cocina Rápida',
    recommendation: 'Recomendación',
    characteristics: 'Características',
    castIron: 'Hierro Fundido',
    stainlessSteel: 'Acero Inoxidable',
    carbon: 'Acero al Carbono',
    copper: 'Cobre',
    nonstick: 'Antiadherente (Teflón)',
    advantages: 'Ventajas',
    disadvantages: 'Desventajas',
    maintenance: 'Mantenimiento',
    durability: 'Durabilidad',
    heatRetention: 'Retención de Calor',
    price: 'Precio',
    step1: '¿Cómo cocinas habitualmente?',
    step2: 'Nivel de Mantenimiento',
    maintenanceLazy: 'Bajo / Nulo',
    maintenanceLazyDesc: 'Sin complicaciones lavado.',
    maintenanceCare: 'Medio',
    maintenanceCareDesc: 'Lavado a mano normal.',
    maintenanceRitual: 'Ritual (Alto)',
    maintenanceRitualDesc: 'Disfruto del curado.',
    idealPan: 'Tu Sartén Ideal',
    selectOptions: 'Selecciona opciones',
    seeRecommendation: 'Para ver tu recomendación',
    pro: 'PRO',
    con: 'CONTRA',
    masterTip: 'Consejo Maestro',
    defaultTip: 'Combinar una opción de acero para dorar y una antiadherente para huevos es la base de cualquier cocina eficiente.',
    stainlessName: 'Acero Inoxidable',
    stainlessTag: 'El Todoterreno Pro',
    stainlessPro: 'Eterna y no reactiva. Dorado perfecto.',
    stainlessCon: 'Requiere técnica (Tª) para no pegarse.',
    stainlessTip: 'Usa el efecto Leidenfrost: cuando una gota de agua ruede como una perla, está lista.',
    nonstickName: 'Antiadherente',
    nonstickTag: 'Máxima Comodidad',
    nonstickPro: 'Nada se pega. Fácil limpieza.',
    nonstickCon: 'Dura poco (2-3 años). No fuego alto.',
    nonstickTip: 'Lávala siempre a mano y usa utensilios de madera/silicona para duplicar su vida útil.',
    castironName: 'Hierro Fundido',
    castironTag: 'La Clásica de Siempre',
    castironPro: 'Retención de calor increíble. Eterna.',
    castironCon: 'Muy pesada. Requiere curado habitual.',
    castironTip: 'Se calienta lento, pero una vez caliente es un tanque. Ideal para chuletones.',
    carbonName: 'Acero al Carbono',
    carbonTag: 'Agilidad en el Fuego',
    carbonPro: 'Ligera como el acero, casi como hierro.',
    carbonCon: 'Se oxida si se deja húmeda. Estética sufrida.',
    carbonTip: 'Cuanto más negra y fea se pone, mejor funciona. Es el secreto de los mejores woks.',
    enamelName: 'Hierro Esmaltado',
    enamelTag: 'Calidad Gourmet',
    enamelPro: 'Mejor cocción lenta. Preciosa estética.',
    enamelCon: 'Muy cara. Esmalte frágil a golpes secos.',
    enamelTip: 'Perfecta para guisos interminables. El esmalte permite cocinar ácidos (tomate) sin problemas.',
  },
  schemas: [faqSchema, howToSchema, appSchema],
};
