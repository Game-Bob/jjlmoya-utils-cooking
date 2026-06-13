import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Optimizador de la Reacción de Maillard: Calculadora de pH y Temperatura para el Dorado';
const description = 'Calcula exactamente cuánto bicarbonato de sodio añadir por kilo de alimento para acelerar la reacción de Maillard. Evita sabores jabonosos manteniéndote dentro de los límites seguros de alcalinidad.';

const faq = [
  {
    question: '¿Qué es la reacción de Maillard y por qué es importante en la cocina?',
    answer: 'La reacción de Maillard es una reacción química entre aminoácidos y azúcares reductores que otorga a los alimentos dorados su sabor característico. Es la responsable de la costra del filete sellado, el color dorado del pan, el café tostado y las cebollas caramelizadas. La reacción ocurre con mayor rapidez entre 140 °C y 165 °C.',
  },
  {
    question: '¿Cómo acelera el dorado el bicarbonato de sodio?',
    answer: 'El bicarbonato de sodio eleva el pH de la superficie del alimento, volviéndola más alcalina. La reacción de Maillard avanza mucho más rápido en entornos alcalinos. Subir el pH de 6 a 8 puede duplicar o triplicar la velocidad de dorado. Sin embargo, un exceso de bicarbonato produce un regusto metálico y jabonoso  -  por eso esta calculadora impone límites seguros.',
  },
  {
    question: '¿Cuál es la cantidad máxima segura de bicarbonato de sodio por kilogramo de alimento?',
    answer: 'El límite seguro general es de 1,5 gramos de bicarbonato de sodio por kilogramo de alimento. Más allá de este umbral, el riesgo de sabores desagradables (metálicos, jabonosos o químicos) aumenta drásticamente. Nuestra cantidad recomendada es la mitad del máximo, lo que proporciona una aceleración notable del dorado con un riesgo mínimo para el sabor.',
  },
  {
    question: '¿Qué ocurre si la temperatura es demasiado baja para la reacción de Maillard?',
    answer: 'Por debajo de 110 °C predomina la evaporación del agua y no hay un dorado de Maillard significativo. Entre 110 °C y 140 °C, el dorado ocurre lentamente. El rango óptimo de temperatura es de 140 °C a 180 °C. Por encima de 180 °C comienza la pirólisis  -  el alimento se quema y produce compuestos amargos y acres en lugar de los sabores deseables del dorado.',
  },
];

const howTo = [
  {
    name: 'Pesa tu alimento',
    text: 'Introduce el peso total del alimento que quieres dorar en gramos.',
  },
  {
    name: 'Ajusta la temperatura de cocción',
    text: 'Introduce la temperatura de la superficie de cocción o del horno. La zona óptima de Maillard está entre 140 y 180 °C.',
  },
  {
    name: 'Ajusta la cantidad de bicarbonato',
    text: 'El deslizador comienza en la mitad del máximo seguro. Auméntalo con cuidado: la calculadora te avisará antes de que llegues a la zona de peligro.',
  },
  {
    name: 'Lee el pH estimado y el multiplicador de velocidad',
    text: 'La calculadora muestra cuánto más rápido ocurre el dorado con el nivel de pH elegido en comparación con el pH de referencia de 6.',
  },
  {
    name: 'Comprueba el nivel de riesgo para el sabor',
    text: 'El indicador de sabor muestra seguro, precaución o peligro según el pH superficial estimado. Mantente en la zona verde para obtener los mejores resultados.',
  },
  {
    name: 'Aplica el bicarbonato de forma uniforme',
    text: 'Disuelve la cantidad recomendada en un poco de agua y pincela o mezcla con el alimento antes de cocinar. Una distribución desigual provoca un dorado irregular.',
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
  slug: 'optimizador-reaccion-maillard',
  title: 'Optimizador de la Reacción de Maillard',
  description: 'Calcula exactamente cuánto bicarbonato de sodio añadir por kilo de alimento para acelerar la reacción de Maillard. Evita sabores jabonosos manteniéndote dentro de los límites seguros de alcalinidad.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: 'Optimizador de la Reacción de Maillard',
    headerLabel: 'Química del Dorado',
    flavorSafe: 'pH Seguro',
    flavorCaution: 'Precaución: Alcalino',
    flavorDanger: 'Peligro: Riesgo Jabonoso',
    unitLabel: 'Unidades',
    metricUnit: 'Métrico',
    imperialUnit: 'Imperial',
    weightLabel: 'Peso del Alimento',
    weightUnit: 'g',
    weightOz: 'oz',
    tempLabel: 'Temperatura Superficial',
    tempUnit: '°C',
    degreesF: '°F',
    tempLow: 'Lento: {min} - {max}',
    tempOpt: 'Óptimo: {min} - {max}',
    tempHigh: 'Pirólisis: >{min}',
    sodaLabel: 'Bicarbonato',
    sodaUnit: 'g',
    sodaOz: 'oz',
    sodaNote: 'Mitad del máximo seguro, impulso suave al dorado',
    sodaCautionNote: 'Acercándose al máximo, vigila el sabor de cerca',
    sodaDangerNote: 'Supera el máximo seguro, riesgo de sabor jabonoso',
    sodaRecommended: 'Bicarbonato Recomendado',
    sodaMax: 'Máximo Seguro',
    speedLabel: 'Velocidad de Reacción',
    browningLabel: 'Progresión del Dorado',
    rawLabel: 'Crudo',
    goldenLabel: 'Dorado',
    burntLabel: 'Quemado',
    phEstimated: 'pH Superficial Est.',
    timeSaved: 'Tiempo Ahorrado',
    errorTempTooLow: 'La temperatura está por debajo de 110 °C. La reacción de Maillard necesita al menos 110 °C para comenzar. Por debajo de este umbral solo ocurre evaporación de agua, sin dorado significativo.',
    errorWeightTooLow: 'El peso del alimento debe ser mayor que 0 g.',
    footerTemplate: '<span class="mr-footer-stat"><strong>{weight}</strong><small>{wunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">a <strong>{temp}</strong><small>{tunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{soda}</strong><small>{sunit}</small> de bicarbonato</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">x<strong>{multiplier}</strong> velocidad</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{timeSaved}</strong>% ahorrado</span>',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Optimizador de la Reacción de Maillard: Domina la Ciencia del Dorado',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La reacción de Maillard es el Santo Grial de la cocina salada. Crea los sabores profundos y complejos del filete sellado, la corteza dorada del pan y las cebollas caramelizadas. Nombrada en honor al químico francés Louis-Camille Maillard, esta reacción entre aminoácidos y azúcares reductores produce cientos de compuestos aromáticos. Manipulando el pH con bicarbonato de sodio, puedes <strong>duplicar o triplicar</strong> la velocidad de dorado sin quemar. Esta calculadora te muestra exactamente cuánto usar y te avisa antes de cruzar al terreno jabonoso.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '~140 °C', label: 'Temperatura de activación de Maillard', icon: 'mdi:thermometer' },
        { value: '2-3x', label: 'Aumento de velocidad a pH 8', icon: 'mdi:speedometer' },
        { value: '1,5 g/kg', label: 'Bicarbonato máximo seguro', icon: 'mdi:scale' },
        { value: 'pH 8,5', label: 'Umbral de sabor jabonoso', icon: 'mdi:alert-circle' },
      ],
    },
    {
      type: 'title',
      text: 'Tabla de Dosificación de Bicarbonato por Peso del Alimento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Usa esta tabla de referencia para determinar rápidamente las cantidades recomendadas y máximas de bicarbonato para pesos de alimento comunes. La cantidad recomendada es <strong>la mitad del máximo seguro</strong>, lo que proporciona una aceleración notable del dorado con un riesgo mínimo para el sabor.',
    },
    {
      type: 'table',
      headers: ['Peso del Alimento', 'Recomendado (g)', 'Máximo Seguro (g)', 'pH Est.', 'Aumento de Velocidad'],
      rows: [
        ['250 g (1 cebolla)', '0,19 g', '0,38 g', '6,5', 'x1,2'],
        ['500 g (2 cebollas)', '0,38 g', '0,75 g', '6,5', 'x1,2'],
        ['750 g (3 cebollas)', '0,56 g', '1,13 g', '6,5', 'x1,2'],
        ['1000 g (1 kg)', '0,75 g', '1,50 g', '7,0', 'x1,6'],
        ['1500 g', '1,13 g', '2,25 g', '7,0', 'x1,6'],
        ['2000 g', '1,50 g', '3,00 g', '7,0', 'x2,0'],
        ['3000 g', '2,25 g', '4,50 g', '7,0', 'x2,0'],
        ['5000 g', '3,75 g', '7,50 g', '7,0', 'x2,0'],
      ],
    },
    {
      type: 'title',
      text: 'Comprendiendo el pH Superficial y su Efecto en el Dorado',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'pH Neutro (6,0)',
          icon: 'mdi:water',
          description: 'El pH natural de la mayoría de carnes y verduras crudas. La reacción de Maillard avanza a velocidad base.',
          highlight: false,
          points: ['Velocidad de reacción: x1,0 (referencia)', 'Totalmente natural, sin aditivos', 'Ideal para: puristas, métodos tradicionales', 'Dorado más lento, más tiempo para controlar el punto'],
        },
        {
          title: 'Ligeramente Alcalino (pH 7,0 a 7,5)',
          icon: 'mdi:flask-round-bottom',
          description: 'Se consigue con la cantidad recomendada de bicarbonato. Aumento notable de velocidad sin impacto en el sabor.',
          highlight: true,
          points: ['Velocidad de reacción: x1,5-2,0', '½ cdta. por kg (aprox. 0,75 g)', 'Ideal para: cebollas caramelizadas, verduras asadas', 'El punto dulce para la mayoría de cocineros caseros'],
        },
        {
          title: 'Altamente Alcalino (pH 8,0 a 8,5)',
          icon: 'mdi:alert',
          description: 'Alcalinidad máxima práctica antes de que aparezcan defectos de sabor. Duplica la velocidad de dorado pero requiere una monitorización cuidadosa.',
          highlight: false,
          points: ['Velocidad de reacción: x2,0-3,0', '1 cdta. por kg (aprox. 1,5 g)', 'Ideal para: cortezas oscuras de pretzel, caramelización extrema', 'Probar antes de servir  -  al borde del sabor jabonoso'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Zonas de Temperatura y lo que Significan para el Dorado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La temperatura es la otra variable crítica para la reacción de Maillard. Cada zona produce resultados fundamentalmente diferentes. Comprender estos umbrales te ayuda a elegir el nivel de calor adecuado para tu objetivo culinario.',
    },
    {
      type: 'table',
      headers: ['Zona', 'Rango de Temp.', 'Qué Ocurre', 'Ideal Para'],
      rows: [
        ['Evaporación', 'Por debajo de 110 °C', 'El agua se evapora, no hay dorado', 'Sous vide, escalfado, cocción al vapor'],
        ['Dorado Lento', '110-139 °C', 'Maillard comienza lentamente, desarrollo de color suave', 'Tomates asados lentamente, deshidratación a baja temperatura'],
        ['Zona Óptima', '140-180 °C', 'Velocidad máxima de dorado sin quemar', 'Sellado, asado, fritura, horneado'],
        ['Pirólisis', 'Por encima de 180 °C', 'Comienza la combustión, se forman compuestos amargos y acres', 'Carbonizado rápido para acento de sabor (usar con moderación)'],
      ],
    },
    {
      type: 'title',
      text: 'Errores Comunes con la Reacción de Maillard y Cómo Solucionarlos',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Añadir demasiado bicarbonato',
      html: 'Más no es mejor con el bicarbonato. Superar 1,5 g por kilogramo de alimento introduce un regusto metálico, jabonoso o químico. Los compuestos aromáticos producidos por una alcalinidad excesiva no son los mismos que las notas ricas y sabrosas de un dorado de Maillard adecuado. <strong>Ajústate a la cantidad recomendada que muestra la calculadora.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Cocinar a temperatura demasiado baja',
      html: 'Por debajo de 110 °C, básicamente estás cociendo al vapor o deshidratando tu alimento  -  no dorándolo. La reacción de Maillard tiene una temperatura mínima de activación. Si buscas sabores profundos y complejos, <strong>la superficie del alimento debe alcanzar al menos 140 °C.</strong> Usa un método de cocción a alta temperatura como sellar, asar a la parrilla u hornear por encima de 180 °C en el horno.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ignorar la humedad',
      html: 'El agua es la enemiga de la reacción de Maillard. Las superficies húmedas no pueden superar los 100 °C hasta que el agua se evapora. <strong>Seca completamente el alimento</strong> con papel antes de sellar. El bicarbonato ayuda porque también acelera la evaporación del agua superficial al romper las paredes celulares, pero no puede compensar un alimento visiblemente mojado. Superficies secas = mejor dorado.',
    },
    {
      type: 'title',
      text: 'Consejos Profesionales para un Dorado Perfecto',
      level: 3,
    },
    {
      type: 'tip',
      title: 'La Técnica de la Pasta de Bicarbonato',
      html: 'Nunca espolvorees bicarbonato seco directamente sobre el alimento  -  no se distribuirá uniformemente. Disuelve la cantidad medida en 1-2 cucharadas de agua templada, luego pincela o mezcla la pasta con el alimento. Esto asegura una alcalinidad uniforme en toda la superficie para un dorado homogéneo y consistente.',
    },
    {
      type: 'tip',
      title: 'Combina Bicarbonato con Salazón en Seco',
      html: 'El bicarbonato y la sal funcionan de forma sinérgica. Sala en seco tu carne durante 1-24 horas antes de cocinar, luego aplica la pasta de bicarbonato justo antes de que llegue al fuego. La sal extrae proteínas que participan en la reacción de Maillard, mientras que el bicarbonato la acelera. Esta combinación produce la corteza más profunda y rica.',
    },
    {
      type: 'tip',
      title: 'Truco para Caramelizar Cebollas',
      html: 'Una pizca de bicarbonato (0,3 g por cebolla grande) puede reducir el tiempo de caramelización de 45 minutos a 20 minutos. El entorno alcalino rompe las paredes celulares de la cebolla más rápido, liberando azúcares y aminoácidos que alimentan la reacción de Maillard. Pero sé preciso  -  demasiado bicarbonato convierte las cebollas en puré con un regusto químico.',
    },
    {
      type: 'title',
      text: 'Glosario de Términos Clave sobre el Dorado',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Reacción de Maillard', definition: 'Una reacción química no enzimática entre aminoácidos y azúcares reductores que crea el color marrón y los sabores complejos en los alimentos cocinados. Ocurre por encima de 110 °C y es distinta de la caramelización.' },
        { term: 'Pirólisis', definition: 'La descomposición térmica de material orgánico a altas temperaturas (por encima de 180 °C). A diferencia del dorado de Maillard, la pirólisis produce compuestos amargos, acres y a veces carcinógenos. Es lo que ocurre cuando el alimento se quema.' },
        { term: 'pH', definition: 'Una escala de 0 a 14 que mide la acidez (bajo) o alcalinidad (alto). Neutro es 7. La mayoría de alimentos crudos están entre pH 5,5 y 6,5. El bicarbonato eleva el pH a niveles alcalinos, acelerando la reacción de Maillard.' },
        { term: 'Bicarbonato de Sodio', definition: 'Polvo cristalino blanco (NaHCO₃) que actúa como base suave. En cocina, eleva el pH superficial, acelera el dorado, ablanda la carne y ayuda a las verduras a conservar el color durante la cocción.' },
        { term: 'Alcalinidad', definition: 'La capacidad de una solución para neutralizar ácidos. En el contexto de la aceleración de Maillard, la alcalinidad se refiere a valores de pH superiores a 7,0. El exceso de alcalinidad produce sabores desagradables amargos y jabonosos.' },
        { term: 'Multiplicador de Velocidad de Reacción', definition: 'Cuántas veces más rápido avanza la reacción de Maillard en comparación con la referencia (pH 6). Un multiplicador de x2,0 significa que el dorado ocurre el doble de rápido, reduciendo efectivamente a la mitad el tiempo de cocción necesario para el mismo desarrollo de color.' },
        { term: 'pH Superficial', definition: 'El pH en la superficie misma del alimento donde ocurre la reacción de Maillard, no el pH interno. El bicarbonato afecta principalmente al pH superficial ya que no penetra profundamente en el alimento durante cocciones cortas.' },
      ],
    },
    {
      type: 'title',
      text: 'Referencia Rápida: Bicarbonato para Alimentos Comunes',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Cantidades recomendadas de bicarbonato para la cocina diaria',
      items: [
        'Cebollas caramelizadas (1 grande): 0,3 g de bicarbonato  -  reduce el tiempo de 45 a ~20 minutos',
        'Patatas asadas (500 g): 0,4 g de bicarbonato  -  exterior más crujiente y dorado',
        'Filete sellado (250 g): 0,2 g de bicarbonato  -  corteza más oscura en menos tiempo',
        'Alitas de pollo (1 kg): 0,75 g de bicarbonato  -  piel más crujiente, dorado más rápido',
        'Masa de pretzel (500 g de harina): 1,5 g de bicarbonato  -  corteza marrón oscuro tras el baño alcalino',
        'Verduras asadas (1 kg variadas): 0,75 g de bicarbonato  -  caramelización más uniforme',
      ],
    },
    {
      type: 'paragraph',
      html: 'Cada alimento tiene un nivel de alcalinidad ideal diferente según su pH natural y su contenido de humedad. Esta calculadora elimina las conjeturas  -  introduce el peso exacto de tu alimento y la temperatura, y te dará la cantidad precisa de bicarbonato para un dorado perfecto en cada ocasión.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
