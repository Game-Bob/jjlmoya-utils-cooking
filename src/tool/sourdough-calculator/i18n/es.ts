import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'calculadora-masa-madre',
  title: 'Calculadora de Masa Madre - Ratios Exactos para Fermentación',
  description: 'Calcula automáticamente las proporciones de masa madre, harina y agua para mantener tu cultivo. Ratios predefinidos o personalizados.',
  faqTitle: 'Preguntas Frecuentes',
  faq: [
    {
      question: '¿Qué es el ratio 1:1:1?',
      answer: 'Es el ratio más común para mantener la masa madre a temperatura ambiente. Significa 1 parte de masa madre, 1 parte de harina y 1 parte de agua. Útil cuando refrescas diariamente.',
    },
    {
      question: '¿Cuándo uso 1:2:2?',
      answer: 'El ratio 1:2:2 es para activar la masa madre. Genera una fermentación más lenta pero predecible. Ideal si guardarás el cultivo en frío y quieres revigorarlo.',
    },
    {
      question: '¿Cuál es el "sweet spot" 1:5:5?',
      answer: 'El ratio 1:5:5 es el "sweet spot" para muchos panaderos. Permite 8-12 horas de fermentación a temperatura ambiente antes de que la masa madre esté lista. Equilibra comodidad con control de tiempo.',
    },
    {
      question: '¿Puedo usar ratios personalizados?',
      answer: 'Absolutamente. Si tienes un protocolo específico, puedes ingresar tus propios ratios. Algunos panaderos usan 1:10:10 para fermentación lentísima, otros 1:1:0.8 para menos agua.',
    },
    {
      question: '¿La calculadora redondea los gramos?',
      answer: 'Sí. Redondea al número entero más cercano para practicidad. Si necesitas máxima precisión, usa una báscula digital. Los pequeños redondeos no afectan significativamente la fermentación.',
    },
  ],
  bibliographyTitle: 'Bibliografía',
  bibliography: [
    {
      name: 'Tartine Bread - Chad Robertson',
      url: 'https://www.penguinrandomhouse.com/books/310016/tartine-bread-by-chad-robertson/',
    },
    {
      name: 'The Flavor Bible - Scaling and Ratios',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'Full Proof Baking - Guides on Sourdough',
      url: 'https://www.fullproofbaking.com/',
    },
  ],
  howTo: [
    {
      name: 'Ingresa la cantidad total que necesitas',
      text: 'Define el peso total de masa madre que requieres para tu receta (ej: 300g para un pan típico).',
    },
    {
      name: 'Selecciona el ratio de refresco',
      text: 'Elige entre los ratios predefinidos (Mantener, Activar, Retardar, Fuerte, Sweet Spot) o crea uno personalizado.',
    },
    {
      name: 'Obtén las cantidades exactas',
      text: 'La calculadora te muestra cuánto de masa madre, harina y agua necesitas. Mezcla estos ingredientes y deja fermentar según tu protocolo.',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Ciencia y Precisión en la Masa Madre',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>masa madre</strong> es un cultivo vivo de bacterias lácticas y levaduras salvajes. Su fuerza y comportamiento dependen de cuándo y cómo la refrescas. Los <strong>ratios de refresco</strong> (el balance entre masa madre, harina y agua) determinan la velocidad de fermentación y la actividad del cultivo.',
    },
    {
      type: 'title',
      text: 'Ratios Predefinidos Explicados',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>1:1:1 (Mantener):</strong> Ideal para refrescos diarios a temperatura ambiente. La masa madre duplica su volumen en 4-8 horas.',
        '<strong>1:2:2 (Activar):</strong> Más alimento relativo. Si tu cultivo está dormido (refrigerado), este ratio lo despierta rápidamente en 6-12 horas.',
        '<strong>1:3:3 (Retardar):</strong> Proporciona aún más comida. Excelente para fermentaciones controladas y predecibles de 8-16 horas.',
        '<strong>1:4:4 (Fuerte):</strong> Exceso de alimento significa fermentación muy lenta (12-24h). Útil si necesitas horarios flexibles o si buscas sabores más complejos.',
        '<strong>1:5:5 (Sweet Spot):</strong> El balance perfecto para muchos. Fermenta en 8-12 horas, produciendo una masa madre activa y predecible. El estándar de la industria artesanal.',
      ],
    },
    {
      type: 'title',
      text: 'Hidratación y Comportamiento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Por defecto, esta calculadora usa <strong>100% de hidratación</strong> (agua = harina en peso). Esto significa que el agua y la harina tienen pesos iguales. Si tu protocolo requiere menor hidratación, puedes ajustar manualmente los ratios personalizados.',
    },
    {
      type: 'title',
      text: 'Temperatura y Tiempo de Fermentación',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Recuerda que estos tiempos asumen <strong>68-72°F (20-22°C)</strong>. A temperaturas más altas (75-80°F), la fermentación es 20-30% más rápida. A temperaturas más bajas, es considerablemente más lenta. Ajusta tu protocolo según tu clima.',
    },
  ],
  ui: {
    totalAmount: 'Cantidad Final',
    refreshRatio: 'Ratio de Refresco',
    maintain: 'Mantener',
    activate: 'Activar',
    retard: 'Retardar',
    strong: 'Fuerte',
    sweetSpot: 'Sweet Spot',
    custom: 'Custom',
    sourdough: 'Masa Madre',
    activeCulture: 'Cultivo activo',
    flour: 'Harina',
    flourType: 'Fuerza o Integral',
    water: 'Agua',
    chlorineFree: 'Sin cloro',
    todayFormula: 'Formula de Hoy',
    hydration: 'Hidratación 100 %',
    totalDough: 'Total Masa',
    mm: 'MM',
  },
  schemas: [],
};
