import type { ToolLocaleContent } from "../../../types";

export const content: ToolLocaleContent = {
  slug: "pizza",
  title: "Calculadora de Masa Pizza Napolitana",
  description:
    "Calcula las proporciones exactas de harina, agua, sal y levadura para preparar la auténtica pizza napolitana en casa.",
  faqTitle: "Preguntas Frecuentes",
  bibliographyTitle: "Referencias",
  ui: {
    parameters: "Parámetros",
    quantity: "Cantidad",
    pizzas: "pizzas",
    weight: "Peso por bola",
    small: "Pequeña (180g)",
    standard: "Estándar (260g)",
    large: "Grande (350g)",
    hydration: "Hidratación",
    classic: "Clásica (55-60%)",
    modern: "Moderna (65-70%)",
    high: "Alta (75%+)",
    salt: "Sal",
    fermentation_tip_title: "Tip de Fermentación",
    fermentation_tip:
      "Para una masa más digerible y sabrosa, deja fermentar la masa en bloque durante 24h en nevera (4°C) usando <strong>0.3g</strong> de levadura fresca por cada 100g de harina.",
    your_recipe: "Tu Receta",
    fresh_yeast: "Levadura Fresca",
    dry_yeast: "Seca",
    flour: "Harina (W260-300)",
    water: "Agua",
    salt_label: "Sal Marina",
    yeast: "Levadura",
    yeast_note: "Para 8h a T.A. (20°C)",
    total_weight: "Peso Total Masa",
    approx: "aprox.",
    visual_note:
      "El tamaño visual representa el diámetro aproximado de la pizza estirada según el peso de la bola.",
  },
  faq: [
    {
      question: "¿Cuál es la hidratación ideal para la pizza napolitana?",
      answer:
        "Según el protocolo AVPN, la hidratación estándar es 63-67%. Para principiantes, 60-62% es más manejable. Para pizzeros avanzados con harina fuerte (W300+), 70-75% produce masas extraordinarias pero requiere técnica.",
    },
    {
      question: "¿Cuánto tiempo debe fermentar la masa?",
      answer:
        "Mínimo 24 horas en nevera (4°C) para activar las enzimas. El óptimo es 48-72 horas. Más allá de 72 horas, necesitas harina muy fuerte (W300+) o la masa se vuelve ácida.",
    },
    {
      question: "¿Se puede hacer con levadura seca?",
      answer:
        "Sí. La levadura seca equivale a 0.4x la fresca (1g seca = 2.5g fresca). La calidad es similar, pero la fresca aporta un sabor más completo.",
    },
    {
      question: "¿Puedo hacer pizza napolitana en horno doméstico?",
      answer:
        "Sí, pero con adaptaciones. Precalienta a máximo (250-280°C) con piedra refractaria 45-60 minutos. La cocción durará 5-7 minutos en lugar de 60-90 segundos, pero el resultado es aceptable.",
    },
    {
      question: "¿Qué harina debo usar?",
      answer:
        "Ideal: Caputo Pizzeria (W260-280) o Manitoba (W350-400). Alternativa: cualquier harina con 11-13g de proteína por 100g. Evita harinas débiles (W130-160) para fermentaciones largas.",
    },
    {
      question: "¿La masa se rompe al estirar?",
      answer:
        "El gluten no está relajado. Deja reposar la bola 2-3 horas a temperatura ambiente. Si repites el error, el amasado fue insuficiente o la harina es muy débil.",
    },
  ],
  howTo: [
    {
      name: "Calcula las proporciones",
      text: "Usa esta calculadora para obtener los gramos exactos de cada ingrediente según el número de pizzas y el peso de cada bola.",
    },
    {
      name: "Mezcla la masa",
      text: "Combina la harina con agua tibia (22-25°C), sal (disuelta primero) y levadura. Amasa 8-10 minutos con amasadora o 15-20 minutos a mano.",
    },
    {
      name: "Fermenta en bloque",
      text: "Deja fermentar la masa entera 1-2 horas a temperatura ambiente (20-25°C) hasta que doble volumen.",
    },
    {
      name: "Divide en bolas",
      text: "Divide la masa en porciones del peso indicado. Deja reposar 15-20 minutos antes de formar bolas.",
    },
    {
      name: "Fermentación larga",
      text: "Coloca las bolas en recipiente hermético en nevera (4°C) durante 24-72 horas. Éste es el paso crítico que genera sabor y digestibilidad.",
    },
    {
      name: "Estira y hornea",
      text: "Saca del frío 30 minutos antes. Estira desde el centro hacia afuera. Hornea a máxima temperatura 60-90 segundos (leña) o 5-7 minutos (doméstico).",
    },
  ],
  bibliography: [
    {
      name: "Associazione Verace Pizza Napoletana",
      url: "https://www.pizzanapoletana.org/",
    },
    {
      name: "The Pizza Bible - Tony Gemignani",
      url: "https://www.amazon.es/Pizza-Bible-Everything-Need-Perfect/dp/0393634039/",
    },
    {
      name: "Franco Pepe - Pepe in Grani",
      url: "https://www.pepeingranitalia.com/",
    },
    {
      name: "Harina Caputo",
      url: "https://www.caputoprepara.com/",
    },
  ],
  seo: [
    {
      type: "title",
      text: "La Ciencia detrás de la Masa de Pizza Napolitana",
    },
    {
      type: "paragraph",
      html: "La <strong>pizza napolitana</strong> es mucho más que una receta: es un protocolo científico certificado por la Associazione Verace Pizza Napoletana (AVPN) que define con precisión milimétrica cada variable de la masa. La harina debe tener entre 11 y 13 gramos de proteína por cada 100 gramos, el agua debe estar entre 22 y 25°C, la sal se disuelve antes que la levadura, y la fermentación no baja nunca de 8 horas a temperatura ambiente ni de 24 horas en nevera.",
    },
    {
      type: "paragraph",
      html: "La diferencia entre una pizza memorable y una pizza mediocre no está en la salsa ni en los ingredientes: está en la <strong>hidratación</strong>, la <strong>fuerza de la harina</strong> y el <strong>tiempo de fermentación</strong>. Estos tres factores determinan la extensibilidad de la masa, la textura del cornicione (el borde), el desarrollo de los alvéolos y la digestibilidad final del producto.",
    },
    {
      type: "title",
      text: "Hidratación: El Parámetro que lo Cambia Todo",
    },
    {
      type: "paragraph",
      html: "La hidratación es el porcentaje de agua respecto al peso de la harina. Es el parámetro más influyente en la textura final de la pizza: a mayor hidratación, mayor extensibilidad, alvéolos más grandes y miga más abierta; pero también una masa más pegajosa que requiere más técnica para manejar.",
    },
    {
      type: "title",
      text: "Harinas para Pizza: Comparativa Completa",
    },
    {
      type: "paragraph",
      html: "No todas las harinas son iguales para la pizza. El índice <strong>W</strong> mide la fuerza del gluten (su capacidad de retener gases durante la fermentación) y es el parámetro más importante para elegir harina para masa de pizza. Una harina W150 es buena para bizcochos pero se destruye en una fermentación de 48 horas.",
    },
    {
      type: "table",
      headers: [
        "Harina",
        "Fuerza (W)",
        "Proteína",
        "Hidratación máx.",
        "Fermentación óptima",
      ],
      rows: [
        [
          "00 Napolitana (Caputo Pizzeria)",
          "260-280",
          "12.5g/100g",
          "67%",
          "24-48h nevera",
        ],
        ["00 Manitoba", "350-400", "13-14g/100g", "75-80%", "48-72h nevera"],
        [
          "Fuerza / Gran Fuerza",
          "300-350",
          "12-13g/100g",
          "70-75%",
          "36-60h nevera",
        ],
        [
          "Harina 0 normal (supermercado)",
          "180-220",
          "10-11g/100g",
          "60%",
          "8-16h TA",
        ],
      ],
    },
    {
      type: "tip",
      html: "Con harina de supermercado genérica (W130-160), la masa se convierte en una papilla ácida y sin estructura después de 24 horas en nevera. Si no encuentras harina específica para pizza, busca en la etiqueta al menos 11g de proteína por 100g.",
    },
    {
      type: "title",
      text: "Fermentación: La Variable que Más Marca la Diferencia",
    },
    {
      type: "paragraph",
      html: "La fermentación es el proceso por el que las levaduras convierten los azúcares de la harina en CO₂ (que infla la masa) y alcohol (que aporta sabor). Pero más importante aún es la <strong>maduración</strong>: las enzimas presentes en la harina descomponen lentamente las proteínas del gluten y el almidón.",
    },
    {
      type: "list",
      items: [
        "<strong>4h a temperatura ambiente (25°C):</strong> Fermentación de urgencia.",
        "<strong>8-12h a temperatura ambiente:</strong> Aceptable para uso doméstico frecuente.",
        "<strong>24h en nevera (4°C):</strong> El estándar mínimo de calidad.",
        "<strong>48-72h en nevera:</strong> El óptimo para masa napolitana de calidad.",
      ],
    },
    {
      type: "title",
      text: "Levaduras: Fresca, Seca Instantánea y Masa Madre",
    },
    {
      type: "paragraph",
      html: "La levadura es el motor de la fermentación, pero no todas las formas funcionan igual. La equivalencia entre tipos es fundamental para no cometer errores de cálculo: demasiada levadura produce una fermentación demasiado rápida.",
    },
    {
      type: "table",
      headers: ["Tipo", "Equivalencia", "Activación", "Conservación", "Sabor"],
      rows: [
        [
          "Fresca (prensada)",
          "Referencia (x1)",
          "Directa, 5 min en agua tibia",
          "2-3 semanas en nevera",
          "Suave y limpio",
        ],
        [
          "Seca activa",
          "x0.4 (1g seca = 2.5g fresca)",
          "Rehidratar en agua 5-10 min",
          "1-2 años en despensa",
          "Similar a fresca",
        ],
        [
          "Instantánea (instant dry)",
          "x0.33 (1g inst. = 3g fresca)",
          "Directa a la harina sin disolver",
          "1-2 años en despensa",
          "Muy neutro",
        ],
      ],
    },
    {
      type: "title",
      text: "El Horno: Por Qué la Temperatura lo Es Todo",
    },
    {
      type: "paragraph",
      html: "La temperatura del horno es el factor que más diferencia a la pizza napolitana de cualquier otra pizza. A 480°C, la masa pasa de cruda a perfectamente cocida en 60-90 segundos.",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          value: "480°C",
          label: "Temperatura horno napolitano",
          icon: "mdi:fire",
        },
        {
          value: "60-90s",
          label: "Tiempo cocción en horno de leña",
          icon: "mdi:timer-outline",
        },
        {
          value: "24-72h",
          label: "Fermentación óptima en nevera",
          icon: "mdi:clock-outline",
        },
        {
          value: "11-13g",
          label: "Proteína por 100g harina ideal",
          icon: "mdi:grain",
        },
      ],
    },
    {
      type: "title",
      text: "Hidratación: El Parámetro que lo Cambia Todo",
    },
    {
      type: "paragraph",
      html: "La hidratación es el porcentaje de agua respecto al peso de la harina. Es el parámetro más influyente en la textura final de la pizza: a mayor hidratación, mayor extensibilidad, alvéolos más grandes y miga más abierta; pero también una masa más pegajosa que requiere más técnica para manejar. Elegir bien la hidratación depende de tu nivel, de la harina disponible y del resultado que buscas.",
    },
    {
      type: "comparative",
      columns: 3,
      items: [
        {
          title: "Hidratación Baja — 55-60%",
          icon: "mdi:water-minus",
          description: "El punto de partida para principiantes. La masa es firme, manejable y perdona los errores de técnica. Ideal para hornos domésticos sin piedra refractaria.",
          points: [
            "Fácil de estirar sin que se rompa",
            "Menos alvéolos en el cornicione",
            "Funciona bien con harina de supermercado",
            "Corteza más crujiente y compacta",
          ],
        },
        {
          title: "Hidratación Media — 63-67%",
          icon: "mdi:water",
          description: "El rango de la pizza napolitana clásica según el protocolo AVPN. Equilibrio perfecto entre manejabilidad y resultado. El objetivo para la mayoría de cocineros en casa.",
          highlight: true,
          points: [
            "Cornicione aireado con alvéolos visibles",
            "Textura elástica y extensible",
            "Requiere harina W260 o superior",
            "Fermentación mínima 24h en nevera",
          ],
        },
        {
          title: "Hidratación Alta — 70-80%",
          icon: "mdi:water-plus",
          description: "Territorio de pizzeros avanzados y hornos de alta temperatura. Produce masas extraordinariamente ligeras con burbujas espectaculares, pero exige técnica y harina fuerte.",
          points: [
            "Alvéolos grandes, miga muy abierta",
            "Necesita harina W320+ (Manitoba)",
            "Difícil de manejar sin experiencia",
            "Mejor resultado con horno 350°C+",
          ],
        },
      ],
    },
    {
      type: "tip",
      title: "La harina define el techo de hidratación",
      html: "Una harina de fuerza W280 admite hasta 70% de hidratación; con una W200 de supermercado no pases de 60% o la masa se romperá durante la fermentación. La proteína de la harina (indicada en la etiqueta nutricional) es el mejor indicador rápido: 11g/100g = hidratación máx 65%; 13g/100g = admite hasta 75%.",
    },
    {
      type: "title",
      text: "Problemas Comunes al Hacer Masa de Pizza",
    },
    {
      type: "diagnostic",
      variant: "warning",
      icon: "mdi:alert-outline",
      title: "Masa que Se Rompe al Estirar",
      html: "<p>Si la masa se rompe o desgarra al intentar estirarla, el gluten no está relajado. Puede deberse a tres causas principales:</p><ul><li><strong>Reposo insuficiente:</strong> La bola necesita al menos 2-3 horas a temperatura ambiente antes de estirar (incluso si venía de la nevera). Cúbrela y espera.</li><li><strong>Amasado excesivo o poco:</strong> El gluten mal desarrollado no tiene extensibilidad. Con amasadora, 8-10 minutos a velocidad media es suficiente. A mano, 15-20 minutos.</li><li><strong>Harina demasiado débil:</strong> Con W inferior a 200, el gluten se cansa rápido. Cambia a harina de fuerza o mezcla 50/50.</li></ul><p>Solución rápida: deja reposar la bola tapada a temperatura ambiente durante 30 minutos más antes de volver a intentarlo.</p>",
    },
    {
      type: "diagnostic",
      variant: "error",
      icon: "mdi:water-alert",
      title: "Masa Pegajosa que No Se Puede Manejar",
      html: "<p>Una masa que se pega a todo y no tiene estructura puede tener varios orígenes:</p><ul><li><strong>Hidratación mal calculada:</strong> Comprueba que usaste la balanza, no tazas ni cucharas. Incluso 5g de diferencia en el agua cambia la consistencia.</li><li><strong>Temperatura de la cocina:</strong> Por encima de 28°C la masa se calienta y se vuelve pegajosa. Trabaja con las manos mojadas (no enharinadas) o refrigera la masa 20 minutos antes de estirar.</li><li><strong>Sobrefermentación:</strong> Si la masa lleva demasiado tiempo y huele claramente ácida, el gluten se ha degradado. No tiene solución; hay que empezar de nuevo con más harina.</li></ul><p>Truco profesional: para masas de alta hidratación, usa la técnica de <em>slap and fold</em> (amasado por golpes) en lugar del amasado tradicional, que genera calor y empeora la pegajosidad.</p>",
    },
    {
      type: "diagnostic",
      variant: "info",
      icon: "mdi:pizza",
      title: "Pizza Plana sin Alvéolos en el Cornicione",
      html: "<p>Si el borde de tu pizza no sube ni forma burbujas durante el horneado, el problema suele estar en la temperatura del horno o en la levadura:</p><ul><li><strong>Horno doméstico a baja temperatura:</strong> Un horno a 220°C no genera el \"shock térmico\" necesario para el desarrollo rápido de gas. Precalienta al máximo (250-280°C) durante al menos 45 minutos con la piedra refractaria dentro.</li><li><strong>Levadura muerta:</strong> Si el agua estaba a más de 40°C al mezclar, mató la levadura. La masa subirá poco o nada. Comprueba que la levadura fresca está activa disolviéndola en agua tibia (25°C) con una pizca de azúcar: debe hacer espuma en 10 minutos.</li><li><strong>Fermentación insuficiente:</strong> Una masa que fermenta menos de 6 horas no tiene suficiente gas retenido. Amplía el tiempo de fermentación.</li></ul>",
    },
    {
      type: "title",
      text: "Biga y Poolish: Los Pre-fermentos que Usan las Pizzerías de Élite",
    },
    {
      type: "paragraph",
      html: "Los pre-fermentos son masas parciales que fermentan por separado antes de incorporarse a la masa final. Permiten desarrollar sabores más complejos con menor cantidad de levadura porque la fermentación previa genera una mayor cantidad de compuestos aromáticos. Son el secreto detrás del sabor irrepetible de muchas pizzerías napolitanas de élite que no usan levadura directa en la masa final sino que trabajan con un porcentaje de biga o poolish.",
    },
    {
      type: "comparative",
      columns: 2,
      items: [
        {
          title: "Biga — Pre-fermento Rígido",
          icon: "mdi:bread-slice-outline",
          description: "La biga es una masa seca con hidratación del 44-50% que fermenta entre 16 y 24 horas a temperatura ambiente (16-18°C idealmente). Es el pre-fermento más utilizado en las pizzerías napolitanas de élite.",
          points: [
            "Hidratación 44-50% (masa muy rígida)",
            "16-24h a 16-18°C (o 8-12h a 20°C)",
            "Usa el 50-70% del total de harina",
            "Genera sabor profundo y complejo",
            "Mejora la estructura de gluten significativamente",
          ],
        },
        {
          title: "Poolish — Pre-fermento Líquido",
          icon: "mdi:beaker-outline",
          description: "El poolish es una mezcla al 100% de hidratación (igual peso de harina y agua) con muy poca levadura. Fermenta 8-16 horas y aporta una miga extraordinariamente alveolada y ligera.",
          highlight: true,
          points: [
            "Hidratación 100% (consistencia de masa líquida)",
            "8-16h a temperatura ambiente",
            "0.1-0.5% de levadura fresca sobre la harina",
            "Alvéolos grandes y distribución uniforme",
            "Más fácil de preparar que la biga",
          ],
        },
      ],
    },
    {
      type: "tip",
      title: "Cómo incorporar un poolish a esta calculadora",
      html: "Si quieres usar poolish, reserva el 30-40% de la harina y el mismo peso de agua de la receta calculada. Mezcla con 0.1g de levadura fresca y deja fermentar 12h. Al día siguiente, añade el poolish a la harina restante, el agua restante, la sal y la levadura calculada para el resto (que puedes reducir un 50% gracias al pre-fermento).",
    },
    {
      type: "title",
      text: "Glosario de Pizza Napolitana para Entender la Receta",
    },
    {
      type: "glossary",
      items: [
        {
          term: "Hidratación",
          definition: "Porcentaje de agua respecto al peso total de harina. 65% significa 650g de agua por cada kilogramo de harina. Es la variable más influyente en la textura de la masa.",
        },
        {
          term: "W (Fuerza de la Harina)",
          definition: "Índice que mide la capacidad del gluten para retener gases durante la fermentación. W130 = harina débil para bizcochos; W280 = harina de pizza estándar; W400 = Manitoba para fermentaciones muy largas.",
        },
        {
          term: "Biga",
          definition: "Pre-fermento rígido (hidratación 44-50%) que fermenta 16-24 horas antes de incorporarse a la masa final. Aporta complejidad de sabor y mejora la estructura del gluten.",
        },
        {
          term: "Poolish",
          definition: "Pre-fermento líquido al 100% de hidratación. Fermenta 8-16 horas y produce una miga muy alveolada. Es el pre-fermento más utilizado en panadería artesanal francesa y en pizzas modernas.",
        },
        {
          term: "Cornicione",
          definition: "El borde elevado y aireado de la pizza napolitana. En italiano significa 'cornisa'. Un cornicione auténtico tiene alvéolos irregulares visibles, manchas de leopardo y un interior húmedo y elástico.",
        },
        {
          term: "Leopardatura",
          definition: "Las manchas oscuras características del cornicione de la pizza napolitana horneada en horno de leña a alta temperatura. Indican una cocción correcta y rápida; no son quemado sino caramelización del gluten.",
        },
        {
          term: "Maturazione (Maduración)",
          definition: "Proceso enzimático durante el que las enzimas de la harina descomponen las proteínas y el almidón, haciendo la masa más extensible y digestible. Distinto a la fermentación (que es la producción de gas por levaduras).",
        },
        {
          term: "AVPN / Verace Pizza Napoletana",
          definition: "Associazione Verace Pizza Napoletana, fundada en Nápoles en 1984. Organismo que certifica la auténtica pizza napolitana y define los estándares oficiales: tipo de harina, hidratación, levadura, temperatura de horno y técnica de amasado.",
        },
      ],
    },
  ],
  schemas: [],
};
