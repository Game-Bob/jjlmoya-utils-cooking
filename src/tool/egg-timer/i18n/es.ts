import type { ToolLocaleContent } from "../../../types";

export const content: ToolLocaleContent = {
  slug: "huevos",
  title: "Cronómetro de Huevos Científico",
  description:
    "Calculadora termodinámica para la cocción perfecta de huevos según altitud, temperatura y tamaño.",
  faqTitle: "Preguntas Frecuentes",
  bibliographyTitle: "Referencias Científicas",
  ui: {
    parameters: "Parámetros",
    initial_temperature: "Temperatura Inicial",
    fridge: "Nevera",
    ambient: "Ambiente",
    egg_size: "Tamaño del Huevo",
    altitude: "Altitud",
    use_location: "Usar mi ubicación",
    altitude_help:
      "El agua hierve a menor temperatura a mayor altitud, afectando el tiempo de cocción.",
    sea_level: "Mar",
    soft_cooked: "Clara Cuajada",
    soft_description: "Yema líquida, clara blanca y suave.",
    mollet: "Mollet",
    mollet_description: "Yema cremosa, clara firme.",
    hard_cooked: "Duro",
    hard_description: "Totalmente cocido, yema firme.",
  },
  faq: [
    {
      question: "¿Por qué importa la altitud al cocer huevos?",
      answer:
        "El agua no siempre hierve a 100°C. A mayor altitud, menor presión atmosférica, y el agua hierve a menor temperatura. En Madrid (600m) hierve a 98°C, requiriendo más tiempo que a nivel del mar. En el Everest (70°C) es imposible cocer un huevo duro.",
    },
    {
      question: "¿Huevo de nevera o temperatura ambiente?",
      answer:
        "Huevo de nevera (4°C) necesita más tiempo que uno a temperatura ambiente (20°C). La diferencia puede ser de 2-3 minutos. Esta calculadora ajusta el tiempo automáticamente según la temperatura inicial.",
    },
    {
      question: "¿Por qué aparece un anillo verde en la yema?",
      answer:
        "Es sulfuro ferroso, resultado de sobrecocción. Cuando superas 80°C por mucho tiempo, el azufre de la clara reacciona con el hierro de la yema. No es tóxico, pero indica que te pasaste de tiempo. Usa baño de hielo inmediato para evitarlo.",
    },
    {
      question: "¿Cómo pelo un huevo fácilmente?",
      answer:
        "Usa huevos de 1-2 semanas (no frescos del día), empieza con agua hirviendo (no fría), y sumerge en agua helada inmediatamente al terminar. El choque térmico contrae el huevo y facilita el pelado.",
    },
  ],
  bibliography: [
    {
      name: "The Science of Boiling an Egg - Charles D. H. Williams",
      url: "https://newton.ex.ac.uk/teaching/CDHW/Egg/",
    },
    {
      name: "The Food Lab: The Science of the Best Hard Boiled Eggs - J. Kenji López-Alt",
      url: "https://www.seriouseats.com/the-food-lab-hard-boiled-eggs-recipe",
    },
    {
      name: "The Food Lab: Perfect Soft Boiled Eggs",
      url: "https://www.seriouseats.com/soft-boiled-eggs-recipe",
    },
  ],
  howTo: [
    {
      name: "Selecciona la temperatura inicial",
      text: "Elige si tu huevo está en nevera (4°C) o a temperatura ambiente (20°C). Esta es la temperatura interna del huevo, no la del aire.",
    },
    {
      name: "Elige el tamaño del huevo",
      text: "S (pequeño, 53g), M (mediano, 58g), L (grande, 63g), o XL (muy grande, 73g). El tamaño determina cuánto tiempo tarda el calor en alcanzar el centro.",
    },
    {
      name: "Especifica tu altitud",
      text: "Introduce manualmente, usa el botón Mar para nivel del mar (0m), Madrid para 600m, o geoposiciona tu ubicación. Cada 300m baja 1°C el punto de ebullición del agua.",
    },
    {
      name: "Aplica choque térmico",
      text: "Cuando el temporizador suene, sumerge inmediatamente en agua con hielo. Esto detiene la cocción y facilita el pelado. El choque térmico es crítico para la precisión.",
    },
  ],
  seo: [
    {
      type: "title",
      text: "La Ciencia del Huevo Perfecto",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Cocer un huevo parece la tarea culinaria más simple, pero es un problema de <strong>termodinámica compleja</strong>. La diferencia entre un huevo perfecto y uno mediocre es cuestión de grados y segundos. Esta herramienta no es un simple temporizador; es una calculadora física basada en el modelo de <strong>Charles Williams</strong> de la Universidad de Exeter.",
    },
    {
      type: "title",
      text: "¿Por qué importa la altitud?",
      level: 3,
    },
    {
      type: "paragraph",
      html: "El agua no siempre hierve a 100°C. A medida que subimos en altitud, la presión atmosférica disminuye, facilitando que las moléculas de agua escapen al aire. Por cada 300 metros de elevación, el punto de ebullición desciende aproximadamente <strong>1°C</strong>.",
    },
    {
      type: "paragraph",
      html: "En el Everest, el agua hierve a 70°C, lo que hace imposible cocer un huevo duro (las proteínas necesitan más temperatura para desnaturalizarse completamente). En Madrid (600m), el agua hierve a 98°C, requiriendo más tiempo de cocción que en Alicante a nivel del mar.",
    },
    {
      type: "title",
      text: "La Fórmula Termodinámica",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Este cálculo se basa en la <strong>ecuación de conducción de calor</strong> derivada por Charles Williams. La fórmula asume que el huevo es una esfera, que el calor se transfiere uniformemente desde la superficie, y que el punto objetivo es el centro de la yema.",
    },
    {
      type: "code",
      text: "t = 0.451 * M^(2/3) * ln((Tw - To) / (Tw - Ty))",
    },
    {
      type: "list",
      items: [
        "<strong>M:</strong> Masa del huevo en gramos",
        "<strong>Tw:</strong> Temperatura de ebullición del agua (depende de la altitud)",
        "<strong>To:</strong> Temperatura inicial del huevo (4°C o 20°C)",
        "<strong>Ty:</strong> Temperatura objetivo deseada en la yema",
      ],
    },
    {
      type: "title",
      text: "Guía de Temperaturas Internas",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Cada temperatura produce una estructura proteica diferente. Las proteínas del huevo desnaturalizan en rangos específicos:",
    },
    {
      type: "table",
      headers: ["Temperatura", "Estado", "Descripción"],
      rows: [
        [
          "62°C - 65°C",
          "Clara Cuajada",
          "La proteína <em>ovotransferrina</em> coagula. Clara blanca y suave, yema líquida.",
        ],
        [
          "65°C - 70°C",
          "Mollet/Ceroso",
          "La yema empieza a espesar. <em>Ovalbúmina</em> coagulada, estructura tierna.",
        ],
        [
          "&gt; 77°C",
          "Duro",
          "Coagulación total. Si superas 80°C, forma sulfuro ferroso (anillo verde).",
        ],
      ],
    },
    {
      type: "title",
      text: "Consejos Profesionales",
      level: 3,
    },
    {
      type: "list",
      items: [
        "<strong>Choque Térmico:</strong> Sumerge en agua con hielo inmediatamente. Detiene la cocción y contrae el huevo dentro de la cáscara, facilitando el pelado.",
        "<strong>Huevos Frescos vs Viejos:</strong> Los huevos muy frescos adhieren a la membrana (pH bajo). Para duros, usa huevos de 1-2 semanas.",
        "<strong>Agua Hirviendo:</strong> Introduce el huevo en agua ya hirviendo (no fría). Ofrece control de tiempo más preciso y facilita el pelado.",
        "<strong>Precisión del Tiempo:</strong> Cada 5-10 segundos cuenta. La diferencia entre una yema cremosa y sobrecocida es mínima.",
      ],
    },
    {
      type: "tip",
      html: "<strong>Dato científico:</strong> La transferencia de calor en un huevo es un problema de conducción térmica tridimensional. Por eso la fórmula de Williams usa la masa elevada a la potencia 2/3 (relación entre volumen y superficie).",
    },
  ],
  schemas: [],
};
