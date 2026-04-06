import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'diagnostico-platanos',
  title: 'Diagnóstico y Conservación de Plátanos: Guía Científica',
  description: 'Analiza el estado de maduración de tus plátanos con precisión científica. Aprende técnicas de conservación, bioquímica del etileno y optimización nutricional.',
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Fuentes y Referencias',
  ui: {
    ripesnessLabel: 'Estado de Maduración',
    nextStageLabel: 'Próxima Etapa en',
    daysUnit: 'Días',
    tempLabel: 'Temperatura',
    humidityLabel: 'Humedad',
    partnerToggleTitle: 'Acompañamiento Climatérico',
    partnerToggleSubtitle: 'Efecto etileno externo',
    conservationTitle: 'Conservación',
    accelerationTitle: 'Aceleración',
    stage1Name: 'Verde Esmeralda',
    stage1Desc: 'Contenido máximo de almidón resistente. Firmeza total.',
    stage1Conservation: 'Ambiente (18-20°C). Evitar frío (<12°C).',
    stage1Acceleration: 'Bolsa de papel con una manzana o tomate maduro.',
    stage2Name: 'Amarillo Radiante',
    stage2Desc: 'Equilibrio perfecto entre firmeza y dulzor inicial.',
    stage2Conservation: 'Lugar fresco, separar del racimo para frenar etileno.',
    stage2Acceleration: 'Mantener en el racimo y envolver en plástico.',
    stage3Name: 'Moteado Dulce',
    stage3Desc: 'Pico de antioxidantes. Dulzor intenso y textura cremosa.',
    stage3Conservation: 'Refrigerar para conservar pulpa (aunque la piel se oscurezca).',
    stage3Acceleration: 'Calor suave (cerca de una fuente de calor, no directa).',
    stage4Name: 'Maduro Canela',
    stage4Desc: 'Textura muy blanda. Ideal para repostería sin azúcar.',
    stage4Conservation: 'Pelar y congelar inmediatamente.',
    stage4Acceleration: 'Ya ha alcanzado su máximo.',
    stage5Name: 'Pasado / Fermentado',
    stage5Desc: 'Proceso de degradación avanzado.',
    stage5Conservation: 'No recomendable para consumo directo.',
    stage5Acceleration: 'N/A',
  },
  faq: [
    {
      question: '¿Por qué se ponen negros los plátanos en la nevera?',
      answer: 'El frío rompe las paredes celulares de la cáscara, liberando enzimas que oxidan los fenoles y crean polifenoles negros. Sin embargo, el interior suele conservarse firme y dulce por más tiempo que fuera.',
    },
    {
      question: '¿Cómo puedo madurar un plátano rápido?',
      answer: 'Ponlos en una bolsa de papel cerrada con una manzana o un tomate. Estos emiten gas etileno, que acelera la maduración. Si tienes mucha prisa, puedes ponerlos unos minutos en el horno a baja temperatura.',
    },
    {
      question: '¿Es seguro comer plátanos con manchas?',
      answer: 'Sí, totalmente. De hecho, las manchas indican que el almidón se ha convertido en azúcar, haciéndolos más dulces y digeribles. Solo deséchalos si tienen moho, huelen mal o están excesivamente blandos.',
    },
    {
      question: '¿Qué es el etileno?',
      answer: 'Es una hormona vegetal en forma de gas que regula el crecimiento y la maduración. El plátano es una fruta climatérica, lo que significa que sigue produciendo etileno y madurando después de ser recolectado.',
    },
  ],
  howTo: [
    {
      name: 'Observar el color',
      text: 'Examina cuidadosamente el color de la cáscara, desde verde hasta marrón oscuro, para determinar el estado de maduración actual.',
    },
    {
      name: 'Usar el simulador',
      text: 'Desliza el indicador de maduración para ver predicciones precisas sobre cuándo alcanzará el siguiente estado.',
    },
    {
      name: 'Ajustar condiciones',
      text: 'Modifica temperatura y humedad para ver cómo afectan la velocidad de maduración.',
    },
    {
      name: 'Aplicar conservación',
      text: 'Sigue las recomendaciones específicas de conservación y aceleración según el estado actual.',
    },
  ],
  bibliography: [
    {
      name: 'Ethylene and Fruit Ripening: A Biological Review (Nature Research)',
      url: 'https://www.researchgate.net/profile/Jean-Claude-Pech/publication/284632414_Ethylene_and_Fruit_Ripening/links/5aef0bcbaca2727bc006482c/Ethylene-and-Fruit-Ripening.pdf',
    },
    {
      name: 'Biochemical Changes in Musa acuminata during Ripening (Journal of Food Science)',
      url: 'https://www.foodsciencejournal.com/assets/archives/2017/vol2issue5/2-5-31-566.pdf',
    },
    {
      name: 'The Role of Respiration in Climacteric Fruits (Scientific American)',
      url: 'https://www.nature.com/articles/226976b0',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Ciencia de la maduración del Musa × paradisiaca',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El plátano es una de las frutas más consumidas en el mundo, pero también una de las más incomprendidas biológicamente. A diferencia de las frutas no climatéricas, como los cítricos o las uvas, el plátano es una <strong>fruta climatérica</strong>. Esto significa que continúa madurando después de haber sido recolectado, incrementando drásticamente su respiración celular y la producción de una fitohormona gaseosa fundamental: el <strong>etileno</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Desde un punto de vista bioquímico, la maduración es una cascada de eventos enzimáticos. Durante este proceso, las enzimas como la amilasa descomponen los carbohidratos complejos (almidones) en azúcares simples (fructosa, glucosa y sacarosa). Este cambio no solo altera el sabor, haciéndolo más dulce, sino que también modifica la textura al degradar la pectina de las paredes celulares, resultando en esa consistencia suave y cremosa que caracteriza al plátano maduro.',
    },
    {
      type: 'title',
      text: 'El Ciclo del Etileno',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El etileno funciona como un interruptor biológico. Una vez que la fruta detecta una pequeña concentración, activa los genes responsables de la producción de más etileno, creando un bucle de retroalimentación positiva. Es por esto que un plátano muy maduro acelerará la maduración de todos sus vecinos en el frutero. Para ralentizar este proceso, es vital aislar los ejemplares que ya presenten motas marrones de aquellos que todavía estén verdes.',
    },
    {
      type: 'title',
      text: 'El Mito del Frigorífico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Existe la creencia popular de que los plátanos no deben ir a la nevera. La realidad es más compleja: el frío (por debajo de 12°C) causa daño por enfriamiento en las células de la cáscara, liberando enzimas que oxidan los fenoles y vuelven la piel negra. Sin embargo, esto solo afecta a la estética exterior. Si el interior ya ha alcanzado la madurez deseada, el frío detendrá casi por completo el ablandamiento de la pulpa, conservando el sabor y la textura interior durante varios días adicionales.',
    },
    {
      type: 'title',
      text: 'Estrategias Avanzadas de Conservación',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>El Sellado del Pedúnculo:</strong> Envolver el rabillo del racimo con film plástico reduce drásticamente la liberación de etileno, extendiendo la vida útil comercial de la unidad hasta en 72 horas adicionales.',
    },
    {
      type: 'paragraph',
      html: '<strong>Suspensión Dinámica:</strong> Colgar los plátanos evita los hematomas por presión. Los tejidos dañados liberan etileno más rápido, creando focos de maduración acelerada que se propagan por toda la fruta.',
    },
    {
      type: 'paragraph',
      html: '<strong>Crioterapia (Congelación):</strong> Para plátanos en fase 4 (marrón), la congelación es la mejor opción. Pelar la fruta antes de congelar evita que la humedad se quede atrapada, manteniendo la calidad de la fibra.',
    },
    {
      type: 'title',
      text: 'Cambios Nutricionales por Etapa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A medida que el plátano madura, su perfil nutricional se transforma de manera radical, lo que permite utilizarlo como una herramienta dietética específica según los objetivos del consumidor.',
    },
    {
      type: 'table',
      headers: ['Fase', 'Almidón Resistente', 'Características', 'Beneficio Principal'],
      rows: [
        ['Verde (1-2)', '~80%', 'Muy firme, contenido máximo de almidón', 'Salud intestinal y control glucémico'],
        ['Amarillo (3)', '~5%', 'Equilibrio de firmeza y dulzor', 'Energía rápida y vitaminas B'],
        ['Moteado (4)', 'Mínimo', 'Muy blando, alto contenido de azúcares', 'Potencial antioxidante máximo'],
        ['Marrón/Pasado (5)', 'Prácticamente nulo', 'Textura muy blanda, fermentación avanzada', 'No recomendable para consumo'],
      ],
    },
    {
      type: 'title',
      text: 'Conclusión y Aplicación Práctica',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Reducir desperdicio alimentario:</strong> El diagnóstico preciso del estado de un plátano permite identificar el momento óptimo de consumo, evitando que se pierdan frutas valiosas.',
        '<strong>Optimizar beneficios nutricionales:</strong> Desde el almidón resistente de los verdes para la salud intestinal, hasta los antioxidantes del moteado para potencial antioxidante máximo.',
        '<strong>Planificar consumo estratégico:</strong> Adapta el uso del plátano según tus objetivos de salud: control glucémico, energía rápida, digestión u antioxidantes.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Alerta de degradación:</strong> Factores externos como humedad relativa superior al 85% o temperaturas por encima de los 25°C pueden acelerar drásticamente la degradación, llevando el plátano de óptimo a incomestible en cuestión de horas. Este simulador te ayuda a anticipar estos cambios y planificar estratégicamente.',
    },
  ],
  schemas: [],
};
