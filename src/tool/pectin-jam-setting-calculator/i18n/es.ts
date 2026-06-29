import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculadora de Pectina y Cuajado de Mermelada para un Gel Perfecto en Cada Ocasión';
const description = 'Calcula exactamente cuánta pectina, ácido cítrico y azúcar necesita tu fruta para lograr el cuajado perfecto de la mermelada. Evita conservas demasiado líquidas o gomosas con química de precisión.';

const faq = [
  {
    question: '¿Por qué la pectina hace gelificar la mermelada?',
    answer: 'La pectina es un polisacárido natural que se encuentra en las paredes celulares de las frutas. Al calentarse con azúcar y ácido (pH 2,8-3,5), las moléculas de pectina forman una red tridimensional de gel que atrapa el agua y el azúcar, creando la textura untable de la mermelada.',
  },
  {
    question: '¿Cual es la diferencia entre pectina HM y LM?',
    answer: 'La pectina de alto metoxilo (HM) requiere al menos un 60% de azúcar y un pH inferior a 3,5 para gelificar, ideal para mermeladas tradicionales. La pectina de bajo metoxilo (LM) gelifica mediante iones de calcio en lugar de azúcar, permitiendo conservas bajas en azúcar o sin azúcar.',
  },
  {
    question: '¿Por qué mi mermelada a veces queda líquida?',
    answer: 'Una mermelada líquida suele deberse a pectina insuficiente (la fruta carece de ella de forma natural), ácido insuficiente (pH demasiado alto para la gelificación) o falta de azúcar (para pectina HM). La dilución excesiva con agua o una cocción insuficiente también pueden impedir el cuajado.',
  },
  {
    question: '¿Puedo usar zumo de limón en lugar de ácido cítrico en polvo?',
    answer: 'Sí. Esta calculadora convierte el ácido cítrico en equivalentes de zumo de limón. Aproximadamente 25 ml de zumo de limón proporcionan la misma acidez que 1 g de ácido cítrico. El zumo de limón también aporta sabor fresco a las mermeladas.',
  },
  {
    question: '¿Qué frutas son naturalmente ricas en pectina?',
    answer: 'Las manzanas, el membrillo, las moras, los arándanos rojos y las grosellas son naturalmente ricas en pectina y a menudo no requieren pectina añadida. La fruta poco madura también contiene más pectina que la fruta completamente madura.',
  },
];

const howTo = [
  {
    name: 'Selecciona tu fruta',
    text: 'Elige la fruta con la que vas a hacer la mermelada. Cada fruta tiene diferentes niveles naturales de pectina y acidez que determinan qué aditivos se necesitan.',
  },
  {
    name: 'Pesa la fruta preparada',
    text: 'Introduce el peso de tu fruta limpia y troceada en gramos. Un pesaje preciso es esencial para hacer mermelada con exactitud.',
  },
  {
    name: 'Elige el tipo de pectina',
    text: 'Selecciona Clásica (HM) para mermelada tradicional con alto contenido de azúcar, o Baja en Azúcar (LM) si quieres una conserva más saludable y con azúcar reducido activada por calcio.',
  },
  {
    name: 'Revisa tu receta perfecta',
    text: 'La calculadora indica los gramos exactos de pectina en polvo, ácido cítrico (o zumo de limón) y azúcar necesarios. Añádelos durante la cocción para un cuajado garantizado.',
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
  slug: 'calculadora-pectina-mermelada',
  title: 'Calculadora de Pectina y Cuajado de Mermelada',
  description: 'Calcula exactamente cuánta pectina, ácido cítrico y azúcar necesita tu fruta para lograr el cuajado perfecto de la mermelada - sin conservas líquidas ni gomosas.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: 'Calculadora de Pectina y Cuajado de Mermelada',
    subtitle: 'Química de gelificación de precisión para conservas perfectas',
    fruitLabel: 'Elige tu fruta',
    allFruits: 'Todas',
    highPectin: 'Alta en Pectina',
    mediumPectin: 'Media en Pectina',
    lowPectin: 'Baja en Pectina',
    weightLabel: 'Peso de la fruta',
    weightPlaceholder: 'ej. 1000',
    weightUnitMetric: 'g',
    weightUnitImperial: 'oz',
    pectinTypeLabel: 'Tipo de pectina',
    pectinHM: 'Clásica (HM)',
    pectinLM: 'Baja en Azúcar (LM)',
    sugarModeLabel: 'Modo de azúcar',
    sugarModeAuto: 'Auto',
    sugarModeManual: 'Manual',
    sugarLabel: 'Peso del azúcar',
    sugarPlaceholder: 'ej. 650',
    recipeTitle: 'Receta',
    pectinNeeded: 'Pectina',
    citricAcidNeeded: 'Ácido Cítrico',
    lemonJuiceNeeded: 'Zumo de Limón',
    sugarNeeded: 'Azúcar',
    totalYield: 'Rendimiento Total',
    sugarPercent: 'Azúcar',
    sugarLow: 'Bajo',
    sugarIdeal: 'Ideal',
    sugarHigh: 'Alto',
    sugarOfFruit: 'del peso de la fruta',
    sugarOfTotal: 'del total',
    statusPerfect: 'Gel Perfecto',
    statusPerfectDesc: 'Tus proporciones están equilibradas. La mermelada cuajará hermosamente con una textura sedosa y untable y un brillo espléndido.',
    statusSlightlyThin: 'Ligeramente Líquida',
    statusSlightlyThinDesc: 'La mermelada puede cuajar de forma suave. Considera añadir más pectina o reducir el contenido de agua para un gel más firme.',
    statusTooThin: 'Demasiado Líquida - Riesgo de Mermelada Fluida',
    statusTooThinDesc: 'Sin ajustes, esta mermelada probablemente permanecerá líquida. Aumenta el azúcar (para HM) o añade más pectina.',
    statusTooStiff: 'Demasiado Firme',
    statusTooStiffDesc: 'El gel puede volverse gomoso. Reduce la pectina a la mitad o aumenta ligeramente el peso de la fruta.',
    dropTestTitle: 'Prueba del Plato Frío',
    dropTestHow: 'Dejar caer sobre un plato frío',
    dropStatusLabel: 'Resultado',
    dropTestPerfect: 'Cuajará. La gota se arruga y se mantiene',
    dropTestThin: 'Líquida. Se desliza por el plato',
    dropTestStiff: 'Demasiado firme. Apenas se mueve',
    dropPlateLabel: 'plato',
    dropDropLabel: 'gota',
    sugarAutoHint: 'calculado automáticamente',
    sugarManualHint: 'introducir cantidad',
    unitLabel: 'Sistema de Medidas',
    metricLabel: 'Métrico (g)',
    imperialLabel: 'Imperial (oz)',
    disclaimer: 'Pesa todos los ingredientes con una báscula de cocina digital para obtener los mejores resultados. Las mediciones volumétricas no son fiables para hacer mermelada.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'La Ciencia Completa del Cuajado de Mermelada: Equilibrio de Pectina, Ácido y Azúcar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hacer mermelada es una intersección precisa entre química y cocina. En su esencia, la transformación de la pulpa de fruta en un gel firme y untable depende del equilibrio correcto de tres moléculas: <strong>pectina</strong> (el agente gelificante), <strong>ácido</strong> (el catalizador que activa la pectina) y <strong>azúcar</strong> (el agente deshidratante que extrae el agua de las cadenas de pectina). Sin las proporciones correctas, se obtiene una sopa de fruta o un bloque gomoso.',
    },
    {
      type: 'title',
      text: 'Cómo Forma la Pectina una Red de Gel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La pectina es un polisacárido complejo compuesto principalmente por unidades de ácido galacturónico, que se encuentra en la lámina media de las paredes celulares vegetales. En su estado natural, las moléculas de pectina tienen carga negativa y se repelen entre sí, permaneciendo disueltas en el agua de la fruta. Para formar un gel, deben cumplirse tres condiciones simultáneamente: (1) debe haber suficiente azúcar para competir por las moléculas de agua, deshidratando las cadenas de pectina; (2) el pH debe descender por debajo de 3,5, neutralizando las cargas negativas mediante la protonación de los grupos carboxilo; y (3) la temperatura debe superar los 104-105 C para disolver y activar completamente la pectina. Cuando estas condiciones se alinean, las cadenas de pectina forman zonas de unión - regiones donde las cadenas se asocian mediante puentes de hidrógeno e interacciones hidrófobas - creando una red tridimensional continua similar a una esponja que atrapa el zumo de fruta y el almíbar de azúcar.',
    },
    {
      type: 'title',
      text: 'Pectina de Alto Metoxilo (HM) vs. Bajo Metoxilo (LM)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La pectina se clasifica por su grado de esterificación (DE), que es el porcentaje de grupos carboxilo esterificados con metanol. <strong>La pectina de alto metoxilo (HM)</strong> (DE > 50%) requiere un mínimo de 55-65% de sólidos solubles (azúcar) y un pH entre 2,8 и 3,5 para formar un gel. Esta es la pectina clásica utilizada en recetas tradicionales de mermelada. Sin suficiente azúcar, la pectina HM forma un gel débil o inexistente. <strong>La pectina de bajo metoxilo (LM)</strong> (DE < 50%) gelifica mediante un mecanismo diferente: se reticula a través de iones de calcio divalentes (Ca) que forman puentes entre los grupos carboxilo libres. La pectina LM puede gelificar con poco o ningún azúcar añadido, lo que la hace ideal para conservas bajas en calorías, aptas para diabéticos o endulzadas naturalmente. Algunas pectinas LM también toleran un rango de pH más amplio hasta 5,5, útil para frutas de baja acidez como higos y peras.',
    },
    {
      type: 'title',
      text: 'Contenido Natural de Pectina en Diferentes Variedades de Fruta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'No todas las frutas son iguales en cuanto a pectina. Las frutas se clasifican en tres categorías según sus niveles naturales de pectina y acidez. Saber en qué punto del espectro se encuentra tu fruta determina si necesitas suplementar con pectina en polvo o ácido cítrico.',
    },
    {
      type: 'table',
      headers: ['Nivel de Pectina', 'Nivel de Acidez', 'Frutas de Ejemplo', 'Pectina Añadida Necesaria'],
      rows: [
        ['Alto', 'Alto', 'Manzana, Arándano Rojo, Grosella', '0% (nada)'],
        ['Alto', 'Medio/Bajo', 'Membrillo, Mora', '0% (nada)'],
        ['Medio', 'Alto', 'Frambuesa, Loganberry', '0,3% del peso de la fruta'],
        ['Medio', 'Medio', 'Ciruela, Albaricoque', '0,3% del peso de la fruta'],
        ['Medio', 'Bajo', 'Arándano Azul', '0,3% del peso de la fruta'],
        ['Bajo', 'Alto', 'Cereza, Uva', '0,6% del peso de la fruta'],
        ['Bajo', 'Medio', 'Melocotón, Mango', '0,6% del peso de la fruta'],
        ['Bajo', 'Bajo', 'Fresa, Pera, Higo', '0,6% del peso de la fruta'],
      ],
    },
    {
      type: 'title',
      text: 'El Papel Crítico del pH en la Gelificación de la Mermelada',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El pH de la mezcla de mermelada es posiblemente la variable más ignorada en la conservación casera. A un pH superior a 3,8, los grupos carboxilo de la pectina permanecen ionizados (con carga negativa), creando repulsión electrostática que impide la formación del gel independientemente de la cantidad de azúcar o pectina que se añada. Cuando el pH desciende por debajo de 3,5 mediante la adición de ácido cítrico o zumo de limón, estos grupos se protonan, permitiendo la formación de puentes de hidrógeno entre cadenas de pectina adyacentes. La zona óptima de gelificación está entre pH 2,8 y 3,2. Por debajo de pH 2,8, el gel se vuelve quebradizo y puede mostrar sinéresis (exudación de líquido). Por encima de pH 3,5, también se produce sinéresis y el gel es demasiado débil. Por eso las frutas de baja acidez como los higos y las fresas casi siempre necesitan ácido cítrico añadido: su pH natural es demasiado alto para activar la pectina correctamente.',
    },
    {
      type: 'title',
      text: 'Concentración de Azúcar y su Efecto en la Fuerza del Gel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El azúcar cumple dos funciones en la mermelada con pectina HM. Primero, es altamente higroscópico: compite intensamente con la pectina por las moléculas de agua, eliminando las capas de hidratación de las cadenas de pectina y forzándolas a interactuar entre sí. Segundo, eleva el punto de ebullición de la mezcla, permitiendo que la mermelada alcance el punto de cuajado de 104-105 C. Con una concentración de azúcar del 65%, las cadenas de pectina están suficientemente deshidratadas para formar un gel fuerte. Por debajo del 60%, el gel se debilita linealmente. Por encima del 68%, la mermelada puede cristalizar al enfriarse cuando el azúcar supera su límite de solubilidad. Para mermeladas con pectina LM, el azúcar solo desempeña un papel de sabor ya que la gelificación depende de los puentes de calcio. El contenido de azúcar puede ser tan bajo como 5-10% en conservas con pectina LM endulzadas con edulcorantes no nutritivos.',
    },
    {
      type: 'title',
      text: 'Ácido Cítrico vs. Zumo de Limón: Conversión y Buenas Prácticas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El ácido cítrico (CHO) es el ácido principal utilizado en la fabricación comercial de mermeladas porque es estandarizado, insípido y preciso. El zumo de limón contiene aproximadamente un 5% de ácido cítrico en peso, además de ácido málico y ácido ascórbico (vitamina C). <strong>1 gramo de ácido cítrico puro equivale aproximadamente a 25 ml de zumo de limón fresco</strong> en cuanto a capacidad de reducción del pH. Sin embargo, el zumo de limón también añade volumen de líquido, lo que debe tenerse en cuenta en el contenido total de agua. Para obtener los resultados más consistentes, utiliza ácido cítrico en polvo disuelto en una pequeña cantidad de agua. Al usar zumo de limón, ten en cuenta unos 20-30 ml adicionales de líquido que deben evaporarse para alcanzar el punto de cuajado.',
    },
    {
      type: 'title',
      text: 'La Prueba del Plato Frío: Un Método Visual para Determinar el Punto de Cuajado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La tradicional prueba del plato frío (también llamada prueba de la arruga o del platillo) sigue siendo uno de los métodos más fiables para los elaboradores caseros de mermelada. Coloca un plato pequeño de cerámica en el congelador durante 10 minutos antes de empezar a cocinar. Cuando creas que la mermelada ha alcanzado su punto de cuajado, deja caer una cucharadita de mermelada caliente sobre el plato frío y déjala enfriar durante 30 segundos. Empuja el borde de la gota con la yema del dedo: si la superficie se arruga de forma característica y la gota mantiene su forma, se ha alcanzado el punto de gel. Si se desliza libremente, continúa hirviendo durante 2-3 minutos y prueba de nuevo. Esta calculadora simula esa prueba visualmente, mostrándote si las proporciones de tu receta superarán la prueba del plato antes incluso de empezar a cocinar.',
    },
    {
      type: 'title',
      text: 'Solución de Problemas: Por qué Falla la Mermelada y Cómo Solucionarlo',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Mermelada líquida (no cuaja después de enfriar):</strong> La causa más común es una cocción insuficiente: la mezcla nunca alcanzó los 104-105 C. Vuelve a hervir la mermelada, añadiendo 1-2 g de ácido cítrico por kg de fruta y comprueba con el método del plato frío. Alternativamente, disuelve 5 g de pectina en polvo en agua fría, incorpóralo a la mermelada mientras hierve y cuece durante 2 minutos adicionales.',
        '<strong>Mermelada gomosa o demasiado firme:</strong> Se añadió demasiada pectina en relación al peso de la fruta, o la mermelada se coció en exceso por encima de 106 C, degradando la red de pectina en una estructura rígida y quebradiza. Para recuperarla, recalienta suavemente con 100-200 ml de zumo de manzana o agua para diluir la concentración de pectina.',
        '<strong>Sinéresis (agua que exuda del gel):</strong> Esto indica exceso de ácido (pH por debajo de 2,8) o azúcar por encima del 68%, lo que hace que la red de pectina se contraiga y expulse agua. Añade una pequeña cantidad de bicarbonato de sodio para elevar el pH gradualmente.',
        '<strong>Cristalización (textura granulosa):</strong> La concentración de azúcar superó la solubilidad, o cristales de azúcar no disueltos actuaron como puntos de nucleación. Remueve constantemente durante la ebullición final y añade 1 cucharada de jarabe de maíz o glucosa, que inhibe la cristalización.',
        '<strong>Moho en la superficie durante el almacenamiento:</strong> La mermelada no se coció lo suficiente (no alcanzó la temperatura de esterilización), contenía demasiado poco azúcar (por debajo del 60% para pectina HM) o los tarros no se esterilizaron correctamente. Utiliza siempre tarros esterilizados y procesa al baño María durante 10 minutos.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
