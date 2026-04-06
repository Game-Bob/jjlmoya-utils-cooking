import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'conversor-unidades-cocina-americana',
  title: 'Conversor Cocina Americana: Cups a Gramos, Fahrenheit a Celsius',
  description: 'Convierte cups, tablespoons y Fahrenheit al sistema métrico. La brújula para descifrar recetas estadounidenses con precisión profesional.',
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Bibliografía',
  ui: {
    copied: 'Copiado',
    noHistory: 'Sin historial',
    load: 'Cargar',
    delete: 'Eliminar',
  },
  seo: [
    {
      type: 'title',
      text: 'Guía de Conversión de Unidades de Cocina Americana: Cups a Gramos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Si alguna vez has intentado seguir una receta de un blog estadounidense, te habrás encontrado con el desafío de las <strong>"Cups"</strong>. A diferencia del sistema métrico, donde medimos por peso (gramos), la cocina americana se basa en el volumen. Esto supone un problema crítico: la densidad de los ingredientes varía enormemente.',
    },
    {
      type: 'title',
      text: 'Volumen vs Peso: ¿Por qué es Vital Convertir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Medir harina por volumen es arriesgado. Si hundes la taza en el saco, la harina se compacta y puedes estar usando 150g en lugar de los 120g que indica la receta. Esta diferencia del 25% es la responsable de que bizcochos y panes queden secos o no suban correctamente. Por eso, <strong>convertir tazas a gramos</strong> no es opcional, es una necesidad técnica.',
    },
    {
      type: 'title',
      text: 'Sistema Imperial vs Sistema Métrico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Sistema Imperial (Volumen):</strong> Basado en tazas (cups) y cucharas. Es impreciso para sólidos porque depende de cuánto compactes el ingrediente, con margen de error de hasta un 30% en harinas. Requiere múltiples cacharros medidores e es inconsistente según el país (US vs UK).',
    },
    {
      type: 'paragraph',
      html: '<strong>Sistema Métrico (Peso):</strong> Basado en gramos y mililitros. Es el estándar de la repostería profesional. Ofrece precisión absoluta: 100g siempre son 100g. Los resultados son consistentes y repetibles, menos limpieza al pesar todo en un mismo bol, y facilita el escalado de recetas.',
    },
    {
      type: 'title',
      text: 'Equivalencias de Harinas y Polvos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cada tipo de harina tiene un peso distinto por taza. No es lo mismo una harina de fuerza que una integral o de repostería:',
    },
    {
      type: 'table',
      headers: ['Ingrediente', 'Volumen (Cup)', 'Peso (Gramos)'],
      rows: [
        ['Harina de trigo (todo uso)', '1 taza (cup)', '<strong>120 g</strong>'],
        ['Harina integral', '1 taza (cup)', '<strong>113 g</strong>'],
        ['Harina de repostería', '1 taza (cup)', '<strong>110 g</strong>'],
        ['Harina de fuerza', '1 taza (cup)', '<strong>130 g</strong>'],
        ['Almidón de maíz', '1 taza (cup)', '<strong>128 g</strong>'],
      ],
    },
    {
      type: 'title',
      text: 'Azúcares: La Densidad Cambia Dramáticamente',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El azúcar granulado pesa casi el doble que la harina por volumen. El azúcar moreno, al estar compactado, es aún más denso. Esta es la razón por la cual una receta con proporción incorrecta de azúcar resulta en postres demasiado dulces o con textura grasienta.',
    },
    {
      type: 'title',
      text: 'Temperaturas del Horno: Fahrenheit a Celsius',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Las recetas estadounidenses siempre indican temperaturas en Fahrenheit. La conversión es crítica porque 25°C de diferencia puede ser la línea entre un bizcocho perfecto y uno quemado. La fórmula es: <strong>°C = (°F - 32) × 5/9</strong>',
    },
    {
      type: 'list',
      items: [
        '<strong>350°F = 175°C</strong> - La temperatura más común para horneado',
        '<strong>375°F = 190°C</strong> - Para masas que necesitan color dorado rápido',
        '<strong>400°F = 200°C</strong> - Para pizzas y panes',
        '<strong>325°F = 160°C</strong> - Para pasteles delicados',
      ],
    },
  ],
  faq: [
    {
      question: '¿Cuál es la diferencia entre 1 cup y 250ml?',
      answer: '1 cup estadounidense = 236.588ml, no 250ml. Para propósitos prácticos, usamos 240ml. Aunque parece pequeña, esta diferencia de 4% puede afectar en recetas sensibles como macarons o mousses.',
    },
    {
      question: '¿Por qué la harina no siempre pesa lo mismo?',
      answer: 'Porque la harina se compacta con el tiempo y el transporte. Una harina recién tamizada pesa menos que una que ha estado en la despensa. Por eso, los panaderos profesionales siempre pesan, nunca miden volumen.',
    },
    {
      question: '¿Cuál es la diferencia entre Tbsp y tsp?',
      answer: '1 Tablespoon (Tbsp) = 15ml. 1 Teaspoon (tsp) = 5ml. Una cucharada es 3 veces una cucharita. En recetas de repostería, los errores con especias (que se miden en tsp) son comunes.',
    },
    {
      question: '¿Es lo mismo una cup US que una cup imperial?',
      answer: 'No. 1 US cup = 236ml. 1 Imperial cup (UK) = 284ml. Una diferencia del 20%. La mayoría de blogs estadounidenses usan US cups. Si la receta no especifica, asume US.',
    },
    {
      question: '¿A qué temperatura corresponde el "gas 4" del horno?',
      answer: 'Gas 4 = 180°C = 350°F. Es la escala británica. En repostería española, buscamos el número equivalente en tu horno: algunos usan gas, otros electrónico.',
    },
  ],
  bibliography: [
    {
      name: 'King Arthur Baking: Ingredient Weight Chart',
      url: 'https://www.kingarthurbaking.com/learn/ingredient-weight-chart',
    },
    {
      name: 'Culinary Institute of America: Conversions and Equivalents',
      url: 'https://www.ciachef.edu/',
    },
  ],
  howTo: [
    {
      name: 'Selecciona el tipo de conversión',
      text: 'Elige entre Cups a Gramos, Tablespoons/Teaspoons a Gramos, o Fahrenheit a Celsius.',
    },
    {
      name: 'Escoge el ingrediente',
      text: 'Cada alimento tiene una densidad diferente. La harina, azúcar, mantequilla: todos pesan distinto.',
    },
    {
      name: 'Ingresa la cantidad',
      text: 'Escribe el número de cups, cucharas o grados. El conversor calcula el equivalente al instante.',
    },
    {
      name: 'Ajusta tu receta',
      text: 'Con la conversión exacta, ahora puedes seguir la receta estadounidense con precisión profesional.',
    },
  ],
  schemas: [],
};
