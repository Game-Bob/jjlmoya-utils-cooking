import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
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
      name: 'The Flavor Bible - Scaling Principles',
      url: 'https://www.worldcat.org/title/flavor-bible-the-essential-reference-for-more-than-150-essential-ingredients-and-how-to-cook-with-them/oclc/173496220',
    },
    {
      name: 'Harold McGee - On Food and Cooking',
      url: 'https://www.worldcat.org/title/on-food-and-cooking-the-science-and-lore-of-the-kitchen/oclc/1048131836',
    },
    {
      name: 'The Science of Cooking - Conversión de Recetas',
      url: 'https://www.worldcat.org/title/the-science-of-cooking/oclc/911012387',
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
  seo: {
    title: 'Escalador de Ingredientes - Escala tus Recetas Fácilmente',
    description: 'Escala recetas automáticamente según el número de raciones. Cálculos exactos para multiplicar o reducir ingredientes sin complicaciones.',
    sections: [
      {
        heading: 'La Ciencia detrás del Escalado de Recetas',
        content: 'Cocinar no es solo arte, es matemática aplicada. Entender cómo adaptar las proporciones de tus ingredientes es la diferencia entre un plato decente y una obra maestra, sin importar si cocinas para 2 o para 20.',
      },
      {
        heading: '¿Cómo funciona el Factor de Conversión?',
        content: 'El corazón de cualquier adaptación culinaria es el Factor de Conversión (FC). Aunque nuestra herramienta lo hace automáticamente, conocer la lógica te da control total sobre tu cocina. Es una simple proporción directa: Cantidad Deseada ÷ Cantidad Original = Factor (FC). Si tu receta es para 4 personas y quieres cocinar para 7, el factor es 1.75. Cada ingrediente se multiplica por ese número.',
      },
      {
        heading: 'Lo que NO escala linealmente',
        content: 'Multiplicar todos los ingredientes por 2 funciona para la harina y el agua, pero la cocina es química y termodinámica. Hay elementos que se comportan de forma exponencial o logarítmica, no lineal. Las especias y la sal: la percepción del sabor se satura. Si triplicas un guiso, triplicar la pimienta cayena o el clavo puede hacerlo incomible. Regla de oro: escala especias al 75% y ajusta al final. Las levaduras: en grandes masas fermentadas, la fricción genera más calor y acelera la fermentación. A menudo, doblar la masa requiere menos del doble de levadura para mantener los tiempos controlados. Tiempos de cocción: quizás el error más común. Un pavo de 10kg no tarda el doble que uno de 5kg. La transmisión de calor depende del grosor, no solo del peso total. Usa siempre un termómetro sonda.',
      },
      {
        heading: 'Trucos de Cocina Profesional',
        content: 'Huevo como unidad: si el escalado te pide "2.3 huevos", bate 3 huevos ligeramente y pesa la cantidad exacta (un huevo L son ~50g-55g sin cáscara), o simplemente redondea si la repostería no es crítica. Superficie vs Volumen: al reducir recetas de salsas, la evaporación será mucho más rápida porque la superficie relativa es mayor. Vigila la reducción o añade un poco más de líquido. El Sistema Métrico es tu amigo: olvida las "tazas" y "cucharas". Escalar "1 taza + 1/4" es una pesadilla. Escalar "180g" es multiplicar un número. Pesa siempre tus ingredientes.',
      },
      {
        heading: 'Ventajas de Escalar Correctamente',
        content: 'Entender y aplicar correctamente el escalado de recetas tiene múltiples beneficios: consistencia en los platos (el mismo sabor y textura cada vez), economia de ingredientes (no desperdiciar), adaptabilidad (cocinar para diferentes cantidades de personas sin perder calidad), y control culinario (saber exactamente qué estás haciendo en tu cocina).',
      },
      {
        heading: 'Herramientas Complementarias',
        content: 'Este escalador de ingredientes es perfecto para ajustar recetas, pero complementa bien con otras herramientas culinarias: un calculador de conversiones de medidas (para convertir entre tazas y gramos), un temporizador de cocina para controlar tiempos, y un analizador de proporciones (como nuestro Calculador de Punto de Nieve de Merengue o Escalador de Moldes para repostería).',
      },
    ],
  },
};
