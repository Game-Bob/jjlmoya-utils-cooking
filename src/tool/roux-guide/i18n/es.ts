import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'guia-maestro-roux',
  title: 'Guía Maestra de Roux y Salsas Madre | Utilidades de Cocina',
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
      text: 'La Química Estructural: Gelatinización',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Para dominar el roux, hay que entender qué ocurre a nivel microscópico. La harina de trigo contiene gránulos de almidón (amilosa y amilopectina) empaquetados firmemente. Al calentar la harina en grasa (que aísla las partículas), preparamos el almidón. Cuando añadimos el líquido caliente, los gránulos absorben agua, se hinchan hasta 10 veces su tamaño y explotan, liberando las moléculas de almidón que forman una red tridimensional que "atrapa" el agua. <strong>Eso es espesar.</strong>',
    },
    {
      type: 'title',
      text: 'El Coste del Sabor: Dextrinización',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Al tostar el roux para obtener sabor (Roux Oscuro), el calor rompe las cadenas largas de almidón en cadenas más cortas llamadas <em>dextrinas</em>. Estas cadenas cortas son sabrosas (tostadas/dulces) pero peores construyendo redes de espesamiento. Por eso, <strong>cuanto más oscuro es el roux, más cantidad necesitas para espesar lo mismo.</strong>',
    },
    {
      type: 'title',
      text: 'Las Salsas Madre de Escoffier',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Auguste Escoffier codificó las 5 Salsas Madre a principios del siglo XX. Tres de ellas dependen estrictamente del Roux: <strong>Béchamel</strong> (Roux Blanco + Leche), <strong>Velouté</strong> (Roux Rubio + Fondo Claro), y <strong>Espagnole</strong> (Roux Oscuro + Fondo Oscuro). Dominarlas es dominar cientos de salsas derivadas.',
    },
    {
      type: 'title',
      text: 'Errores Comunes y Soluciones',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Demasiado líquida:</strong> Usaste menos de 60g de roux/litro.',
        '<strong>Sabor a harina:</strong> No cocinaste el roux blanco los 2 minutos mínimos necesarios.',
        '<strong>Grumos:</strong> Añadiste leche caliente a roux caliente. ¡Usa choque térmico!',
        '<strong>Salsa oscura aguada:</strong> No compensaste la pérdida de poder espesante del tostado.',
      ],
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
    sauceName: 'Tipo de Salsa',
    ratio: 'Ratio',
    chefTip: 'Tip del Chef',
    white: 'Blanco',
    blond: 'Rubio',
    brown: 'Oscuro',
    beurreManied: 'Beurre Manié (Si necesitas ajustar al final)',
  },
  schemas: [],
};
