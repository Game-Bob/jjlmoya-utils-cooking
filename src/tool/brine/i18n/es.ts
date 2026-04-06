import type { ToolLocaleContent } from "../../../types";

export const content: ToolLocaleContent = {
  slug: "salmuera",
  title: "Calculadora de Salmuera por Equilibrio",
  description:
    "La ciencia del equilibrio para carnes jugosas y fermentados perfectos. Calcula la salinidad exacta basada en el peso total de ingrediente y agua.",
  ui: {
    calculator: "Calculadora",
    subtitle: "Introduce los pesos para calcular el equilibrio perfecto.",
    productWeight: "Peso del Producto (g)",
    waterWeight: "Peso del Agua (g)",
    desiredSalinity: "Salinidad Deseada",
    meat: "Carnes (1.5%)",
    fermented: "Fermentados (2.0%)",
    sauces: "Salsas (3.5%)",
    preserves: "Conservas (5.0%)",
    addSugar: "Añadir Azúcar",
    sugarHint: "Equilibra el sabor y ayuda al dorado (50% de la sal)",
    saltNeeded: "Sal Necesaria",
    sugarOptional: "Azúcar (Opcional)",
    estimatedTime: "Tiempo Estimado",
    product: "Producto",
    total: "Total",
    unitGrams: "gramos",
    timeMeatsLabel: "Tiempo (Carnes)",
    timeMeatsDuration: "4 - 48 Horas",
    timeVegetablesLabel: "Tiempo (Vegetales)",
    timeVegetablesDuration: "1 - 3 Semanas",
    timePreservesLabel: "Tiempo (Conservas)",
    timePreservesDuration: "1+ Meses",
  },
  faqTitle: "Preguntas Frecuentes",
  bibliographyTitle: "Fuentes y Referencias",
  faq: [
    {
      question: "¿Qué es el método de salmuera por equilibrio?",
      answer:
        "El método de equilibrio calcula la sal en función del peso total (agua + ingrediente), no solo del agua. Esto garantiza una concentración de sal consistente independientemente de la cantidad de ingrediente que uses.",
    },
    {
      question: "¿Cuánta sal necesito para hacer encurtidos?",
      answer:
        "Para vegetales fermentados (pepinillos, chucrut, kimchi) se recomienda entre 2% y 3% de sal. Para carnes, entre 1.5% y 2%. La calculadora te da la cantidad exacta según tu peso de ingredientes.",
    },
    {
      question: "¿Puedo congelar la carne después de la salmuera?",
      answer:
        "Sí, es ideal. La salmuera protege contra quemaduras por congelación y la carne estará lista para cocinar al descongelar. Sin embargo, evita congelar vegetales fermentados ya que se volverán papilla.",
    },
    {
      question: "¿Por qué añadir azúcar a la salmuera?",
      answer:
        "El azúcar tiene dos funciones: facilita la reacción de Maillard (dorado) en carnes y equilibra el sabor salino sin hacer que el producto sepa dulce. No convierte tu salmuera en un postre.",
    },
  ],
  howTo: [
    {
      name: "Determina tu objetivo",
      text: "Decide si vas a hacer carnes en salmuera (1.5-2%), fermentados (2-3%), salsas (3.5%) o conservas de larga duración (5%+). Cada una tiene un tiempo y propósito diferente.",
    },
    {
      name: "Pesa ingrediente y agua",
      text: "Pesa el producto (carne, vegetales) y el agua exactamente. La precisión es crítica: incluso 5g de diferencia cambia el resultado. Usa una balanza de precisión.",
    },
    {
      name: "Calcula con la herramienta",
      text: "Introduce los pesos en la calculadora y ajusta la salinidad según tu tipo de producto. La herramienta te dirá exactamente cuánta sal y azúcar necesitas.",
    },
    {
      name: "Disuelve y mezcla",
      text: "Disuelve completamente la sal en agua fría antes de añadir el producto. Para carnes, asegúrate de que la salmuera cubra todo. Para fermentados, el peso debe estar sumergido.",
    },
    {
      name: "Fermenta o cura",
      text: "Refrigera según el tipo: 4-48 horas para carnes, 1-3 semanas para fermentados. El tiempo exacto depende de la temperatura y tu gusto personal.",
    },
  ],
  bibliography: [
    {
      name: "The Noma Guide to Fermentation - René Redzepi & David Zilber",
      url: "https://www.nomacph.com/",
    },
    {
      name: "Salt, Fat, Acid, Heat - Samin Nosrat",
      url: "https://www.saltfatacidheat.com/",
    },
    {
      name: "Pollan, Michael - Cooked",
      url: "https://michaelpollan.com/",
    },
  ],
  seo: [
    {
      type: "title",
      text: "¿Por Qué el Método del Equilibrio?",
    },
    {
      type: "paragraph",
      html: "La <strong>salmuera por equilibrio</strong> es la técnica profesional para garantizar resultados consistentes, seguros y deliciosos en cada fermentación. A diferencia de las recetas tradicionales que miden la sal solo por el volumen de agua (ej. \"100g por litro\"), este método considera el <strong>peso total</strong> (Agua + Ingrediente).",
    },
    {
      type: "tip",
      html: "El Problema de las Recetas Antiguas: Si llenas un frasco de pepinos, hay poca agua. Si pones un solo pepino, hay mucha agua. Usar la misma salmuera en ambos casos resulta en salinidades finales drásticamente diferentes, lo que puede llevar a <strong>moho</strong> (poca sal) o <strong>comida incomible</strong> (mucha sal).",
    },
    {
      type: "title",
      text: "La Importancia del Azúcar",
    },
    {
      type: "paragraph",
      html: "Añadir azúcar a una salmuera no la convierte en un postre. Es una herramienta química fundamental con dos funciones principales.",
    },
    {
      type: "comparative",
      columns: 2,
      items: [
        {
          title: "Reacción de Maillard",
          icon: "mdi:fire",
          description: "Esencial para carnes.",
          points: [
            "El azúcar facilita el dorado al cocinar la carne (plancha, horno, parrilla)",
            "Sin azúcar, una carne en salmuera puede quedar pálida y grisácea",
            "Crucial para resultados profesionales",
          ],
        },
        {
          title: "Equilibrio de Sabor",
          icon: "mdi:palette",
          description: "Suaviza y redondea el sabor.",
          points: [
            "La sal es agresiva. El azúcar suaviza esa mordida salina",
            "No hace que el producto sepa dulce",
            "Crea un perfil de sabor más redondo y complejo",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Ingredientes Críticos: Agua y Sal",
    },
    {
      type: "paragraph",
      html: "La calidad de los ingredientes base determina el éxito de tu salmuera. No todos los ingredientes son iguales.",
    },
    {
      type: "list",
      items: [
        "<strong>Agua Filtrada/Mineral:</strong> La mejor opción. Limpia y sin químicos.",
        "<strong>Agua del Grifo (Hervida):</strong> Hiérvela y déjala enfriar para evaporar el cloro. Nota: La cloramina no se evapora fácilmente.",
        "<strong>Sal Marina / Kosher:</strong> Pura y sin aditivos. Ideal para fermentaciones.",
        "<strong>Sal Yodada:</strong> Evítala. Puede oscurecer los vegetales e inhibir la fermentación.",
        "<strong>Sal de Mesa (con antiaglomerantes):</strong> Puede enturbiar la salmuera y alterar el sabor.",
      ],
    },
    {
      type: "title",
      text: "El Factor Tiempo",
    },
    {
      type: "paragraph",
      html: "La paciencia es el ingrediente secreto. El tiempo varía drásticamente según el objetivo y la temperatura de fermentación.",
    },
    {
      type: "table",
      headers: ["Tipo", "Salinidad", "Tiempo", "Temperatura Ideal"],
      rows: [
        ["Carnes (Dry/Wet Brine)", "1.5-2%", "4-48 horas", "4°C (nevera)"],
        ["Fermentados Vegetales", "2-3%", "1-3 semanas", "18-22°C"],
        ["Salsas Picantes", "3.5%", "2+ semanas", "18-22°C"],
        ["Conservas Largo Plazo", "5%+", "1+ mes", "18-22°C"],
      ],
    },
    {
      type: "tip",
      html: "<strong>El Papel de la Temperatura:</strong> A mayor temperatura, la fermentación es más rápida pero menos controlable. 18-22°C es el rango ideal para desarrollar sabor sin riesgo de patógenos. Si tu cocina es más fría, aumenta el tiempo de fermentación.",
    },
    {
      type: "title",
      text: "Congelación y Descongelación",
    },
    {
      type: "paragraph",
      html: "¿Se puede congelar en salmuera? La respuesta depende del tipo de producto.",
    },
    {
      type: "list",
      items: [
        "<strong>Carnes en Salmuera:</strong> ¡Excelente! La salmuera protege contra quemaduras por congelación. Una técnica profesional es hacer \"Equilibrium Thawing\": congela la carne directamente en salmuera y se descongela mientras se cura.",
        "<strong>Vegetales Fermentados:</strong> Evítalo. La congelación rompe las paredes celulares y al descongelar se vuelven papilla.",
        "<strong>Conservas:</strong> Solo si planeas usarlas de inmediato después de descongelar. La congelación altera la textura final.",
      ],
    },
    {
      type: "title",
      text: "Porcentajes de Sal por Aplicación",
    },
    {
      type: "list",
      items: [
        "<strong>1.5-2.0%:</strong> Carnes y aves (pechugas de pollo, pavo, chuletas). Jugosidad máxima.",
        "<strong>2.0-3.0%:</strong> Vegetales en lacto-fermentación (chucrut, kimchi, pepinillos). Seguridad contra patógenos.",
        "<strong>3.0-5.0%:</strong> Salsas picantes y fermentados especiales (ajos, jengibre). Sabor más intenso.",
        "<strong>5.0%+:</strong> Conservas de larga duración (quesos, aceitunas, limones). Fermentación muy lenta.",
      ],
    },
    {
      type: "title",
      text: "Ciencia Detrás del Proceso",
    },
    {
      type: "paragraph",
      html: "La sal en salmuera no solo da sabor. Actúa en tres niveles: <strong>desnaturaliza las proteínas</strong> (haciéndolas más retentivas de humedad), <strong>controla el crecimiento bacteriano</strong> (mata patógenos pero favorece bacterias lácticas beneficiosas), y <strong>extrae sabores</strong> de los ingredientes.",
    },
    {
      type: "paragraph",
      html: "La fermentación es un proceso anaeróbico donde bacterias lácticas beneficiosas convierten azúcares en ácido láctico. Este proceso requiere el porcentaje correcto de sal: muy poca y crece moho, demasiada y se inhiben incluso las bacterias buenas.",
    },
  ],
  schemas: [],
};
