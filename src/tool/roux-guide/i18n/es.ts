import type { ToolLocaleContent } from '../../../types';

const title = "Guía Maestra de Roux y Salsas Madre";
const description = "Calculadora interactiva de Roux. Aprende a crear Bechamel, Velouté y Espagnole con proporciones exactas. La base de la alta cocina francesa.";
const faq = [
  {
    question: '¿Qué es un Roux y para qué sirve?',
    answer: 'Es una mezcla de grasa (normalmente mantequilla) y harina cocinada a fuego lento. Se utiliza como agente espesante base para las salsas madre francesas como la Bechamel o la Velouté.',
  },
  {
    question: '¿Cuál es la proporción ideal para un Roux?',
    answer: 'La proporción estándar es 1:1 en peso. Por ejemplo, 50g de mantequilla y 50g de harina. Esta mezcla puede espesar aproximadamente 1 litro de líquido dependiendo de la densidad deseada.',
  },
  {
    question: '¿Qué diferencia hay entre los tipos de Roux?',
    answer: 'El Roux blanco se cocina 2-3 min (Bechamel). El rubio 5-8 min (Velouté). El oscuro o "Brown" hasta 15-20 min (Española). A más color, más sabor a nuez pero menos capacidad espesante.',
  },
  {
    question: '¿Cómo evitar los grumos?',
    answer: 'La regla de oro es la temperatura opuesta: líquido frío sobre roux caliente, o líquido caliente sobre roux frío. Añade el líquido poco a poco y bate constantemente con varillas.',
  },
  {
    question: '¿Por qué necesito más roux oscuro?',
    answer: 'Al tostar el roux, el calor rompe las cadenas de almidón en cadenas cortas (dextrinas). Estas son sabrosas pero menos efectivas espesando. Por eso un roux oscuro necesita 15% más peso que uno blanco para espesar igual.',
  },
];
const howTo = [
  {
    name: 'Selecciona el tipo de líquido',
    text: 'Elige entre leche (Bechamel), fondo claro (Velouté), fondo oscuro (Espagnole) o tomate. Cada uno requiere un tipo diferente de roux.',
  },
  {
    name: 'Define el espesor deseado',
    text: 'Desde sopa/crema hasta masa para croquetas. La calculadora ajustará automáticamente el ratio de roux necesario.',
  },
  {
    name: 'Ingresa el volumen de líquido',
    text: 'Especifica cuántos ml de líquido necesitas espesar. La calculadora te dirá exactamente cuánta mantequilla y harina usar.',
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
  slug: 'guia-roux',
  title: 'Guía Maestra de Roux y Salsas Madre',
  description: 'Calculadora interactiva de Roux. Aprende a crear Bechamel, Velouté y Espagnole con proporciones exactas. La base de la alta cocina francesa.',
  faqTitle: 'Preguntas Frecuentes',
  faq: [
    {
      question: '¿Qué es un Roux y para qué sirve?',
      answer: 'Es una mezcla de grasa (normalmente mantequilla) y harina cocinada a fuego lento. Se utiliza como agente espesante base para las salsas madre francesas como la Bechamel o la Velouté.',
    },
    {
      question: '¿Cuál es la proporción ideal para un Roux?',
      answer: 'La proporción estándar es 1:1 en peso. Por ejemplo, 50g de mantequilla y 50g de harina. Esta mezcla puede espesar aproximadamente 1 litro de líquido dependiendo de la densidad deseada.',
    },
    {
      question: '¿Qué diferencia hay entre los tipos de Roux?',
      answer: 'El Roux blanco se cocina 2-3 min (Bechamel). El rubio 5-8 min (Velouté). El oscuro o "Brown" hasta 15-20 min (Española). A más color, más sabor a nuez pero menos capacidad espesante.',
    },
    {
      question: '¿Cómo evitar los grumos?',
      answer: 'La regla de oro es la temperatura opuesta: líquido frío sobre roux caliente, o líquido caliente sobre roux frío. Añade el líquido poco a poco y bate constantemente con varillas.',
    },
    {
      question: '¿Por qué necesito más roux oscuro?',
      answer: 'Al tostar el roux, el calor rompe las cadenas de almidón en cadenas cortas (dextrinas). Estas son sabrosas pero menos efectivas espesando. Por eso un roux oscuro necesita 15% más peso que uno blanco para espesar igual.',
    },
  ],
  bibliographyTitle: 'Bibliografía',
  bibliography: [
    {
      name: 'Larousse Gastronomique - La Biblia de la Cocina',
      url: 'https://www.laroussecocina.com/',
    },
    {
      name: 'Mastering the Art of French Cooking - Julia Child',
      url: 'https://www.juliachild.com/',
    },
    {
      name: 'On Food and Cooking - Harold McGee (La Ciencia del Roux)',
      url: 'https://www.foodscience.org/',
    },
  ],
  howTo: [
    {
      name: 'Selecciona el tipo de líquido',
      text: 'Elige entre leche (Bechamel), fondo claro (Velouté), fondo oscuro (Espagnole) o tomate. Cada uno requiere un tipo diferente de roux.',
    },
    {
      name: 'Define el espesor deseado',
      text: 'Desde sopa/crema hasta masa para croquetas. La calculadora ajustará automáticamente el ratio de roux necesario.',
    },
    {
      name: 'Ingresa el volumen de líquido',
      text: 'Especifica cuántos ml de líquido necesitas espesar. La calculadora te dirá exactamente cuánta mantequilla y harina usar.',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Guía Maestro para el Cálculo de Roux y Salsas Madre',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El <strong>roux</strong> es la base estructural de la cocina clásica francesa. Entender la relación entre la harina, la mantequilla y el líquido es la diferencia entre una salsa aterciopelada y un líquido con grumos o sabor a harina cruda.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:1',
          label: 'Proporción Harina:Grasa',
          icon: 'mdi:scale-balance',
        },
        {
          value: '3 min',
          label: 'Tiempo Roux Blanco',
          icon: 'mdi:timer-sand',
        },
        {
          value: '100g/L',
          label: 'Ratio Salsas Espesas',
          icon: 'mdi:waves',
        },
        {
          value: '15 min',
          label: 'Tiempo Roux Oscuro',
          icon: 'mdi:fire',
        },
      ],
    },
    {
      type: 'title',
      text: 'Niveles de Tostado y Poder Espesante',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Roux Blanco (White)',
          icon: 'mdi:flask-round-bottom-outline',
          description: 'Cocinado 2-3 minutos. El más potente esclerosante de almidón.',
          points: [
            'Base para Béchamel',
            'Máximo poder espesante',
            'Sabor neutro a crema/leche',
            'Sin coloración visible',
          ],
        },
        {
          title: 'Roux Rubio (Blond)',
          icon: 'mdi:gold',
          description: 'Cocinado 5-8 minutos hasta obtener un tono dorado pálido.',
          highlight: true,
          points: [
            'Base para Velouté',
            'Poder espesante medio',
            'Sabor ligero a avellana',
            'Ideal para fondos claros',
          ],
        },
        {
          title: 'Roux Oscuro (Brown)',
          icon: 'mdi:coffee',
          description: 'Cocinado hasta 15-20 minutos. Sabor profundo y tostado.',
          points: [
            'Base para Salsa Española',
            'Poder espesante bajo (-30%)',
            'Sabor complejo a nuez',
            'Textura más líquida',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Gramaje de Roux por Litro según Textura',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Textura Deseada', 'Mantequilla (g)', 'Harina (g)', 'Líquido (L)'],
      rows: [
        ['Sopa / Crema Ligera', '25g', '25g', '1 Litro'],
        ['Salsa de Cobertura', '50g', '50g', '1 Litro'],
        ['Salsa para Gratinar', '70g', '70g', '1 Litro'],
        ['Masa de Croquetas', '125g', '125g', '1 Litro'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '¿Salsa con Grumaje o Sabor a Harina?',
      html: 'Si la salsa tiene grumos, probablemente añadiste líquido caliente a un roux caliente. Aplica el choque térmico (liquide frío sobre roux caliente). Si sabe a harina, aumenta el tiempo de cocción inicial antes de añadir el líquido para gelatinizar el almidón correctamente.',
    },
    {
      type: 'title',
      text: 'Glosario de Tecnología de Salsas',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dextrinización',
          definition: 'Rotura térmica del almidón en cadenas cortas. Aumenta el sabor pero reduce el espesamiento.',
        },
        {
          term: 'Gelatinización',
          definition: 'Proceso por el cual los gránulos de almidón absorben líquido y se expanden, creando espesor.',
        },
        {
          term: 'Beurre Manié',
          definition: 'Mezcla de harina y mantequilla en frío usada para correcciones de textura al final.',
        },
        {
          term: 'Salsas Madre',
          definition: 'Las 5 salsas base de Escoffier (Béchamel, Velouté, Española, Holandesa y Tomate).',
        },
      ],
    },
    {
      type: 'tip',
      title: 'El truco de la Nuez de Mantequilla',
      html: 'Al finalizar la salsa, añade una nuez de mantequilla fría y no dejes de batir. Esto aporta un brillo espectacular y una sedosidad profesional al emplatar.',
    },
    {
      type: 'paragraph',
      html: 'Nuestra calculadora de proporciones roux permite que tus salsas tengan siempre la consistencia técnica perfecta para cada plato.',
    },
  ],

  ui: {
    baseLiquid: 'Líquido Base',
    volume: 'Volumen',
    ml: 'ml',
    liquidType: 'Tipo de Líquido',
    milk: 'Leche',
    lightStock: 'Fondo Claro',
    darkStock: 'Fondo Oscuro',
    tomato: 'Tomate',
    sauceTexture: 'Textura de la Salsa',
    soup: 'Sopa / Crema',
    normalSauce: 'Salsa Normal',
    thick: 'Espesa / Relleno',
    croquette: 'Croqueta / Masa',
    rouxMix: 'Mezcla Roux',
    butter: 'Mantequilla',
    flour: 'Harina',
    instructions: 'Instrucciones',
    sauceName: 'Tipo de Sauce',
    ratio: 'Ratio',
    chefTip: 'Tip del Chef',
    white: 'Blanco',
    blond: 'Rubio',
    brown: 'Oscuro',
    beurreManied: 'Beurre Manié (Si necesitas ajustar al final)',
    recipeBechamel: "Bechamel",
    recipeVeloute: "Velouté",
    recipeEspagnole: "Española",
    recipeTomato: "Salsa de Tomate",
    tipBechamel: "Usa leche fría. Añádela gradualmente al principio o de golpe si bates fuerte.",
    tipVeloute: "Usa fondo de ave o pescado. Deja que el roux huela a galleta antes de ligar.",
    tipEspagnole: "Para salsas oscuras potentes. El roux debe estar color chocolate, pero sin quemarse.",
    tipTomato: "El roux ayudará a dar cuerpo y suavidad a la textura final del tomate.",
    rouxWhiteLabel: "Roux Blanco",
    rouxBlondLabel: "Roux Rubio",
    rouxBrownLabel: "Roux Oscuro",
    descWhite: "Cocina solo hasta perder el olor a harina cruda. Sin color.",
    descBlond: "Busca un color de mantequilla tostada y un aroma a nueces.",
    descBrown: "Fuego muy suave. Color chocolate. Nota: requiere un 10% más de peso.",
    timeWhite: "2-3 min",
    timeBlond: "5-8 min",
    timeBrown: "15-20 min",
  },
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
