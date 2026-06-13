import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculadora de Brix para Sorbetes: Proporción Azúcar y Fruta y Control del Punto de Congelación para una Cremosidad al Servir Perfecta';
const description = 'Ajusta el equilibrio exacto de azúcar, puré de fruta y agua para obtener un sorbete con la cremosidad perfecta al servir siempre. Calcula el Brix, la depresión del punto de congelación PAC y soluciona problemas de textura helada o aguada con medidas precisas.';

const faq = [
  {
    question: '¿Qué es el Brix y por qué es importante en el sorbete?',
    answer: 'El Brix (°Bx) mide el porcentaje de sólidos disueltos  -  principalmente azúcares  -  en una solución líquida. En los sorbetes, un nivel de Brix entre el 25% y el 30% (idealmente 28%) es esencial para la textura adecuada. Por debajo del 25%, el sorbete se congela como un bloque duro y helado porque no hay suficiente azúcar para interferir en la formación de cristales de hielo. Por encima del 30%, el punto de congelación desciende tanto que el sorbete queda aguado y nunca llega a cuajar completamente en un congelador estándar.',
  },
  {
    question: '¿Cómo calculo la cantidad adecuada de azúcar para mi receta de sorbete?',
    answer: 'Empieza pesando tu puré de fruta y midiendo su Brix natural con un refractómetro (o seleccionando un valor predefinido). Introduce estos valores en la calculadora junto con el tamaño de lote deseado y el Brix objetivo (28% por defecto). La calculadora determina cuánta sacarosa y agua necesitas añadir para llevar la mezcla total al rango óptimo de 25-30% Brix. También tiene en cuenta la depresión del punto de congelación (PAC) para que puedas sustituir parte por dextrosa si el sorbete quedaría demasiado duro.',
  },
  {
    question: '¿Por qué mi sorbete casero siempre queda demasiado duro o helado?',
    answer: 'Un sorbete helado y duro como una piedra casi siempre significa que la concentración total de azúcar es demasiado baja (por debajo del 25% Brix). El agua de la fruta se congela en grandes cristales de hielo en lugar de permanecer parcialmente líquida. La solución: añade más sacarosa para subir el Brix, o sustituye parte de la sacarosa por dextrosa  -  la dextrosa tiene casi el doble de poder anticongelante (PAC 190 vs 100) y es un 30% menos dulce, por lo que puedes bajar el punto de congelación sin empalagar el sorbete.',
  },
  {
    question: '¿Cuál es la diferencia entre usar sacarosa y dextrosa en el sorbete?',
    answer: 'La sacarosa (azúcar de mesa) es el edulcorante estándar con un PAC de 100 y POD de 100. La dextrosa (glucosa en polvo) tiene un PAC de 190  -  casi el doble de depresión del punto de congelación  -  pero solo el 70% del dulzor (POD 70). Esto significa que la dextrosa ablanda el sorbete mucho más eficazmente por gramo sin sobredulcificar. Usa dextrosa cuando tu fruta ya sea naturalmente dulce (ej. mango, plátano) y necesites más poder anticongelante sin añadir más dulzor.',
  },
  {
    question: '¿Cómo afecta el azúcar natural de la fruta al cálculo?',
    answer: 'Las distintas frutas tienen niveles de azúcar natural muy variables: los limones y limas rondan el 2% Brix, las fresas alrededor del 8%, los mangos y uvas 14-18%, y los plátanos hasta el 22%. La calculadora tiene en cuenta el Brix natural de tu fruta para que no te pases ni te quedes corto accidentalmente con la concentración total de azúcar. Por eso se recomienda usar un refractómetro para medir tu fruta real  -  la variación estacional puede cambiar el Brix en 3-4 puntos.',
  },
];

const howTo = [
  {
    name: 'Pesa tu puré de fruta',
    text: 'Mide el peso exacto de tu puré o zumo de fruta en gramos.',
  },
  {
    name: 'Estima o mide el Brix de la fruta',
    text: 'Usa un refractómetro para obtener el Brix exacto de tu fruta, o selecciona un valor típico de nuestra base de datos (ej. Mango: 14%, Fresa: 8%).',
  },
  {
    name: 'Introduce los pesos en la calculadora',
    text: 'Introduce el peso de la fruta, el Brix de la fruta y el nivel de Brix objetivo (28% por defecto).',
  },
  {
    name: 'Revisa las adiciones de almíbar recomendadas',
    text: 'La calculadora mostrará inmediatamente el azúcar y agua recomendados para alcanzar el objetivo del 28% Brix.',
  },
  {
    name: 'Ajusta los tipos de azúcar si es necesario',
    text: 'Si la mezcla carece de suficiente depresión del punto de congelación, incorpora dextrosa en lugar de sacarosa.',
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
  slug: 'calculadora-densidad-brix-sorbetes',
  title: 'Calculadora de Densidad de Brix para Sorbetes',
  description: 'Ajusta el equilibrio exacto de azúcar, puré de fruta y agua para obtener un sorbete cremoso al servir siempre. Soluciona la textura helada o aguada con cálculos precisos de Brix y PAC.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    fruitWeightLabel: 'Peso del Puré de Fruta',
    fruitBrixLabel: 'Brix de la Fruta',
    sugarWeightLabel: 'Peso de Sacarosa (Azúcar)',
    dextroseWeightLabel: 'Peso de Dextrosa',
    waterWeightLabel: 'Peso del Agua Añadida',
    targetBrixLabel: 'Brix Objetivo',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    brixUnit: '% Bx',
    totalBrixLabel: 'Brix Total de la Mezcla',
    totalWeightLabel: 'Peso Total del Lote',
    totalPACLabel: 'Depresión del Punto de Congelación (PAC)',
    statusLabel: 'Perfil de Textura del Sorbete',
    statusSoft: 'Demasiado Blando / Aguado',
    statusOptimal: 'Cremosidad al Servir Óptima',
    statusHard: 'Demasiado Duro / Helado',
    recommendedTitle: 'Recomendación de Almíbar (50% Fruta)',
    recommendedSugarLabel: 'Sacarosa Necesaria',
    recommendedWaterLabel: 'Agua Necesaria',
    fruitPresetLabel: 'Fruta Predefinida',
    presetCustom: 'Fruta Personalizada',
    presetLemon: 'Limón / Lima (2% Bx)',
    presetStrawberry: 'Fresa / Frambuesa (8% Bx)',
    presetOrange: 'Naranja / Melocotón (10% Bx)',
    presetMango: 'Mango / Uva / Cereza (14% Bx)',
    presetBanana: 'Plátano (21% Bx)',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'La Ciencia del Equilibrio en Sorbetes: Brix, PAC y Sólidos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Elaborar un sorbete profesional es un ejercicio de ciencia alimentaria. A diferencia del helado, que depende de las grasas y proteínas lácteas para crear estructura y suavidad, el sorbete depende enteramente de los azúcares disueltos y estabilizantes. La concentración de estos azúcares disueltos se mide en grados Brix (°Bx). Una mezcla de sorbete perfecta requiere una concentración de azúcar del 25% al 30% Brix. Si el contenido de azúcar es demasiado bajo, el agua se congelará en grandes cristales de hielo en forma de aguja, produciendo un bloque granuloso y duro como una piedra. Si es demasiado alto, el punto de congelación desciende demasiado y el sorbete queda como un jarabe semilíquido en los congeladores domésticos o comerciales típicos.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '28%',
          label: 'Brix Objetivo Ideal',
          icon: 'mdi:target',
        },
        {
          value: '25-30%',
          label: 'Rango de Brix Seguro',
          icon: 'mdi:gauge',
        },
        {
          value: '≈50%',
          label: 'Proporción Óptima de Fruta',
          icon: 'mdi:fruit-grapes',
        },
        {
          value: 'PAC 100/190',
          label: 'Sacarosa / Dextrosa',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: 'Entendiendo el PAC: El Factor de Depresión del Punto de Congelación',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El PAC (Potere Anticongelante, o Poder Anticongelante) es una métrica utilizada por los pasteleros para cuantificar cuánto reduce un ingrediente el punto de congelación del agua. La sacarosa, o azúcar de mesa estándar, es la referencia base con un valor PAC de 100. Sin embargo, la sacarosa es muy dulce. Si necesitas añadir más sólidos o aumentar la capacidad anticongelante sin que el sorbete resulte empalagosamente dulce, puedes sustituir una parte de la sacarosa por dextrosa. La dextrosa tiene un PAC de 190, lo que la hace casi el doble de eficaz que la sacarosa para prevenir la formación de cristales de hielo, siendo solo un 70% tan dulce.',
    },
    {
      type: 'title',
      text: 'Sacarosa vs Dextrosa: Eligiendo el Azúcar Adecuado para el Sorbete',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sacarosa (Azúcar de Mesa)',
          icon: 'mdi:cube-outline',
          description: 'El edulcorante estándar y referencia base para todos los cálculos de PAC y POD. Aporta dulzor limpio y cuerpo.',
          points: [
            'Valor PAC: 100 (referencia)',
            'Valor POD: 100 (dulzor completo)',
            'Ideal para: rol de edulcorante principal',
            'Aporta cuerpo y textura estándar',
          ],
        },
        {
          title: 'Dextrosa (Glucosa en Polvo)',
          icon: 'mdi:grain',
          description: 'Un monosacárido con casi el doble de poder de depresión del punto de congelación y significativamente menos dulzor.',
          highlight: true,
          points: [
            'Valor PAC: 190 (casi 2� -  sacarosa)',
            'Valor POD: 70 (30% menos dulce)',
            'Ideal para: ablandar sorbetes duros',
            'Ideal cuando la fruta ya es muy dulce',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tabla de Referencia de Valores Brix Típicos por Fruta',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tipo de Fruta', 'Valor Brix Medio', 'Contenido de Agua', 'Nivel de Acidez'],
      rows: [
        ['Limón / Lima', '2% - 4% Bx', 'Muy Alto', 'Extremadamente Alta'],
        ['Fresa / Frambuesa', '7% - 9% Bx', 'Alto', 'Moderada'],
        ['Naranja / Melocotón', '9% - 11% Bx', 'Medio-Alto', 'Baja-Moderada'],
        ['Manzana / Pera', '11% - 13% Bx', 'Medio', 'Baja'],
        ['Mango / Uva / Cereza', '14% - 18% Bx', 'Medio-Bajo', 'Muy Baja'],
        ['Plátano', '20% - 22% Bx', 'Bajo', 'Insignificante'],
      ],
    },
    {
      type: 'title',
      text: 'Cómo Calibrar tu Mezcla de Sorbete',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para equilibrar un sorbete, primero mide el peso y la concentración de azúcar de tu puré de fruta. Se recomienda encarecidamente usar un refractómetro para mayor precisión, ya que el dulzor de la fruta varía según la temporada y la madurez. Si no dispones de un refractómetro, puedes estimarlo usando la tabla anterior. Una vez tengas estos valores, introdúcelos en nuestra calculadora para determinar la cantidad exacta de almíbar (agua y azúcar) necesaria para llevar la mezcla total al 28% Brix objetivo. Para una textura óptima, busca una proporción de fruta de alrededor del 50% del peso total del lote.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '¿Por Qué Mi Sorbete Está Helado o Demasiado Duro?',
      html: 'Un sorbete que se congela duro como una piedra casi siempre tiene <strong>muy poco azúcar</strong> (Brix por debajo del 25%). El agua del puré de fruta cristaliza en grandes fragmentos de hielo dentados. Soluciónalo añadiendo más sacarosa para subir el Brix total, o sustituye parte de la sacarosa por dextrosa para aumentar el PAC sin sobredulcificar. Comprueba también que la proporción de fruta no sea demasiado alta  -  superar el 60% de fruta deja espacio insuficiente para los sólidos de azúcar.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '¿Por Qué Mi Sorbete Está Aguado o No se Congela?',
      html: 'Un sorbete que se mantiene blando o aguado tiene <strong>demasiado azúcar</strong> (Brix por encima del 30%). El punto de congelación ha descendido tanto que tu congelador no puede solidificar la mezcla. Reduce el aporte total de azúcar, o si la fruta es naturalmente muy dulce (ej. plátano o mango), usa proporcionalmente menos sacarosa añadida. Comprueba tu temperatura objetivo: los congeladores domésticos funcionan a −18°C; un PAC apropiado para servicio a −12°C será demasiado alto para congeladores estándar.',
    },
    {
      type: 'tip',
      title: 'Mide el Brix con Precisión Usando un Refractómetro',
      html: 'Un refractómetro digital u óptico es la mejor inversión para obtener sorbetes consistentes. La madurez de la fruta varía drásticamente según la temporada, variedad y origen  -  una fresa en junio puede medir 6°Bx mientras que la misma variedad en agosto alcanza 10°Bx. Exprime una gota de puré sobre el prisma, lee el valor e introdúcelo en la calculadora. Adivinar basándose solo en tablas producirá resultados inconsistentes.',
    },
    {
      type: 'title',
      text: 'Paso a Paso: Cómo Usar Esta Calculadora',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pesa tu puré de fruta</strong>  -  Usa una báscula digital para medir el peso exacto de tu puré o zumo de fruta colado en gramos.',
        '<strong>Mide o estima el Brix de la fruta</strong>  -  Usa un refractómetro para mayor precisión, o selecciona un valor predefinido del menú desplegable (Limón 2%, Fresa 8%, Mango 14%, etc.).',
        '<strong>Establece tu Brix objetivo</strong>  -  El valor por defecto es 28%, el punto dulce ideal. Ajusta entre 25% y 30% según tu preferencia.',
        '<strong>Revisa la recomendación de almíbar</strong>  -  La calculadora muestra al instante cuánta sacarosa y agua añadir para alcanzar tu objetivo.',
        '<strong>Comprueba el indicador de textura</strong>  -  El medidor de PAC te indica si el sorbete quedará demasiado duro, con cremosidad al servir óptima, o demasiado blando a la temperatura de tu congelador.',
        '<strong>Ajusta con dextrosa si es necesario</strong>  -  Si se prevé que el sorbete quede duro pero ya está suficientemente dulce, sustituye parte de la sacarosa por dextrosa para aumentar el PAC sin añadir dulzor.',
      ],
    },
    {
      type: 'title',
      text: 'Términos Clave para la Elaboración de Sorbetes',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Brix (°Bx)',
          definition: 'El porcentaje de sólidos disueltos (principalmente azúcares) en una solución líquida. En sorbetes, 25-30°Bx es el rango objetivo para una textura y cremosidad al servir ideales.',
        },
        {
          term: 'PAC (Potere Anticongelante)',
          definition: 'Poder anticongelante  -  una medida de cuánto reduce un ingrediente el punto de congelación del agua. La sacarosa tiene un PAC de referencia de 100; la dextrosa es 190.',
        },
        {
          term: 'POD (Potere Dolcificante)',
          definition: 'Poder edulcorante relativo a la sacarosa (referencia 100). La dextrosa tiene un POD de 70, lo que significa que es un 30% menos dulce gramo por gramo que el azúcar de mesa.',
        },
        {
          term: 'Dextrosa',
          definition: 'Un monosacárido (glucosa en polvo) utilizado en la formulación de sorbetes para bajar el punto de congelación sin añadir dulzor excesivo. PAC 190, POD 70.',
        },
        {
          term: 'Refractómetro',
          definition: 'Un instrumento óptico o digital que mide el valor Brix de un líquido leyendo cómo se curva (refracta) la luz a través de la muestra. Esencial para la consistencia del sorbete.',
        },
        {
          term: 'Almíbar',
          definition: 'Una mezcla al 50/50 en peso de sacarosa y agua, calentada hasta disolver. El vehículo estándar para añadir azúcar a las bases de sorbete.',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
