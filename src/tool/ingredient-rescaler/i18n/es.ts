import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'escalador-ingredientes',
  title: 'Escalador de Ingredientes - Ajusta tus Recetas Fácilmente',
  description: 'Escala recetas automáticamente según el número de raciones. Calcula las cantidades exactas de ingredientes multiplicando o reduciendo tu receta sin complicaciones.',
  ui: {
    servings: 'Raciones',
    original: 'Original',
    desired: 'Deseado',
    multiplyingFactor: 'Factor Multiplicador',
    ingredientsList: 'Lista de Ingredientes',
    pasteHere: 'Pega aquí tu lista.',
    exampleLine1: 'Ej:',
    exampleLine2: '500g Harina',
    exampleLine3: '300ml Agua',
    exampleLine4: '10g Sal',
    result: 'Resultado',
    copy: 'Copiar',
    copied: 'Copiado!',
    emptyState: 'Tus ingredientes ajustados aparecerán aquí...',
    defaultIngredient1: '200g Harina',
    defaultIngredient2: '100ml Leche',
    defaultIngredient3: '2 Huevos',
  },
  faqTitle: 'Preguntas Frecuentes',
  faq: [
    {
      question: '¿Por qué mi factor de conversión incluye decimales?',
      answer: 'Porque las proporciones culinarias no siempre son redondas. Si escalas una receta para 4 personas a 7, el factor es 1.75 exactamente. Los ingredientes se multiplican por ese número, aunque encuentres fracciones. Es más exacto que redondear arbitrariamente.',
    },
    {
      question: '¿Qué pasa si ingreso "1/2 cucharadita de sal"?',
      answer: 'El parser busca el número primero. Reconocerá "1" como cantidad, luego "/2" como parte de la unidad. El resultado será "0.5", y al escalar se multiplicará correctamente. Para fracciones como "1/2", ingresa "0.5" directamente (más claro) o la herramienta las interpreta como división.',
    },
    {
      question: '¿Debo redondear los resultados finales?',
      answer: 'Depende del ingrediente. Para harinas, sí. Para levaduras o especias, la precisión importa menos (escala al 75% de lo indicado). Para huevos: si obtienes 2.3, usa 2 completos + parte de un tercero (pesada), o redondea a 2 si el plato lo permite.',
    },
    {
      question: '¿Por qué no cambia el resultado cuando cambio las raciones?',
      answer: 'Asegúrate de que el campo de ingredientes tenga contenido. Si está vacío, no hay nada que escalar. También verifica que los números en tus ingredientes sean reconocibles (ej: "500g", "1/2 cucharadita").',
    },
    {
      question: '¿Funciona con medidas imperiales (onzas, tazas)?',
      answer: 'Técnicamente sí, la herramienta lee números y escala. Pero la precisión es limitada con tazas (volumen inconsistente). Se recomienda convertir a gramos antes de escalar.',
    },
  ],
  bibliographyTitle: 'Bibliografía',
  bibliography: [
    {
      name: 'Harold McGee - On Food and Cooking: The Science and Lore of the Kitchen',
      url: 'https://en.wikipedia.org/wiki/Harold_McGee',
    },
    {
      name: 'The Flavor Bible by Karen Page and Andrew Dornenburg',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'Modernist Cuisine - Técnicas de escalado científico',
      url: 'https://www.modernistcuisine.com/',
    },
  ],
  howTo: [
    {
      name: 'Ingresa tus raciones',
      text: 'En el campo "Original", coloca el número de personas para el que la receta está diseñada. En "Deseado", coloca el número de personas que vas a cocinar.',
    },
    {
      name: 'Pega tu lista de ingredientes',
      text: 'Copia y pega tu lista tal cual. Cada ingrediente en una línea. La herramienta reconoce números al inicio (500g, 1/2, 2.5) y escala automáticamente.',
    },
    {
      name: 'Ajusta según contexto',
      text: 'Los resultados son matemáticamente exactos, pero la cocina es arte. Especias: escala al 75%. Levaduras: menos de lo teórico en grandes cantidades. Tiempos: no se escalan nunca.',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'La Ciencia detrás del Escalado de Recetas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cocinar no es solo arte, es <strong>matemática aplicada</strong>. Entender cómo adaptar las proporciones de tus ingredientes es la diferencia entre un plato decente y una obra maestra, sin importar si cocinas para 2 o para 20.',
    },
    {
      type: 'title',
      text: '¿Cómo funciona el Factor de Conversión?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El corazón de cualquier adaptación culinaria es el <strong>Factor de Conversión (FC)</strong>. Aunque nuestra herramienta lo hace automáticamente, conocer la lógica te da control total sobre tu cocina. Es una simple proporción directa: <strong>Cantidad Deseada ÷ Cantidad Original = Factor (FC)</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Si tu receta es para 4 personas y quieres cocinar para 7, el factor es 1.75. Cada ingrediente se multiplica por ese número.',
    },
    {
      type: 'title',
      text: 'Lo que NO escala linealmente',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Multiplicar todos los ingredientes por 2 funciona para la harina y el agua, pero la cocina es química y termodinámica. Hay elementos que se comportan de forma exponencial o logarítmica, no lineal.',
    },
    {
      type: 'list',
      items: [
        '<strong>Especias y sal:</strong> La percepción del sabor se satura. Si triplicas un guiso, triplicar la pimienta cayena puede hacerlo incomible. Regla de oro: escala especias al 75% y ajusta al final.',
        '<strong>Levaduras:</strong> En grandes masas fermentadas, la fricción genera más calor y acelera la fermentación. Doblar la masa requiere menos del doble de levadura.',
        '<strong>Tiempos de cocción:</strong> Un pavo de 10kg no tarda el doble que uno de 5kg. La transmisión de calor depende del grosor. Usa siempre un termómetro sonda.',
      ],
    },
    {
      type: 'title',
      text: 'Trucos de Cocina Profesional',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Huevo como unidad:</strong> Si obtienes 2.3 huevos, pesa la cantidad exacta o redondea según el plato.',
        '<strong>Superficie vs Volumen:</strong> Al reducir salsas, la evaporación es más rápida. Vigila la reducción.',
        '<strong>Sistema Métrico:</strong> Pesa siempre en gramos, no en tazas. Es más preciso al escalar.',
      ],
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Escalador de Ingredientes',
      description: 'Escala recetas automáticamente según el número de raciones. Calcula las cantidades exactas de ingredientes multiplicando o reduciendo tu receta sin complicaciones.',
      url: 'https://jjlmoya.es/utilidades/escalador-ingredientes',
      applicationCategory: 'Utilities',
      inLanguage: 'es-ES',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Escalador de Ingredientes - Ajusta tus Recetas Fácilmente',
      description: 'Escala recetas automáticamente según el número de raciones. Calcula las cantidades exactas de ingredientes multiplicando o reduciendo tu receta sin complicaciones.',
      author: {
        '@type': 'Person',
        name: 'jjlmoya',
      },
      inLanguage: 'es-ES',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Utilidades jjlmoya',
        url: 'https://jjlmoya.es',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: 'https://jjlmoya.es',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Utilidades',
          item: 'https://jjlmoya.es/utilidades',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Cocina',
          item: 'https://jjlmoya.es/utilidades/cocina',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Escalador de Ingredientes',
          item: 'https://jjlmoya.es/utilidades/escalador-ingredientes',
        },
      ],
    },
  ],
};
