import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Sal para Fermentación Lacto: Guía Científica Bio Orgánica";
const description = "Calcula porcentajes precisos de sal para salado en seco y salmuera húmeda. Equilibra poblaciones bacterianas, previene mohos y domina la conservación de alimentos.";
const faq = [
  {
    question: "¿Por qué es crítico el porcentaje de sal en la fermentación lacto?",
    answer: "La sal suprime patógenos y mohos mediante presión osmótica, mientras permite que las bacterias del ácido láctico (LAB) prosperen, fermenten azúcares y produzcan ácido láctico."
  },
  {
    question: "¿Cuál es la diferencia entre salado en seco y salmuera húmeda?",
    answer: "El salado en seco usa la humedad natural del alimento para disolver la sal (ideal para repollo rallado). La salmuera húmeda añade agua externa y sal para sumergir completamente verduras enteras o en trozos."
  },
  {
    question: "¿Puedo usar agua del grifo con cloro para fermentar?",
    answer: "El cloro puede inhibir el crecimiento bacteriano. Se recomienda usar agua filtrada o de manantial para obtener resultados de fermentación consistentes."
  },
  {
    question: "¿Es mejor el porcentaje en peso que las medidas de volumen?",
    answer: "Sí. Los diferentes tipos de sal (kosher, marina, de mesa) tienen tamaños de cristal y densidades variables. Pesar la sal en gramos garantiza una salinidad exacta independientemente del tipo de sal utilizado."
  }
];

const howTo = [
  {
    name: "Elige el modo de fermentación",
    text: "Selecciona modo Seco si usas los jugos naturales de las verduras, o modo Húmedo si añades agua para cubrir los ingredientes."
  },
  {
    name: "Pesa los ingredientes",
    text: "Ingresa el peso exacto de las verduras en gramos. Si usas salmuera húmeda, ingresa también el peso del agua."
  },
  {
    name: "Ajusta la salinidad objetivo",
    text: "Desliza el control de porcentaje de salinidad. Apunta a 2.0%-3.5% para seguridad general y crecimiento óptimo de bacterias lácticas."
  },
  {
    name: "Mide la sal",
    text: "Usa la báscula digital para medir los gramos exactos de sal necesarios. Añádelos a tu recipiente de fermentación."
  }
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
  slug: 'calculadora-sal-fermentacion-lacto',
  title: 'Calculadora de Sal para Fermentación Lacto',
  description: 'Calcula porcentajes precisos de sal para salado en seco y salmuera húmeda. Equilibra poblaciones bacterianas, previene mohos y domina la conservación de alimentos.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: "Calculadora de Sal para Fermentación Lacto",
    subtitle: "Control preciso de salinidad para conservación bio orgánica",
    unitLabel: "Sistema de Medida",
    metricUnit: "Métrico (g / gramos)",
    imperialUnit: "Imperial (oz / onzas)",
    modeLabel: "Modo de Fermentación",
    dryMode: "Salado en Seco",
    wetMode: "Salmuera Húmeda",
    vegWeightLabel: "Peso de Verduras",
    waterWeightLabel: "Peso del Agua",
    salinityLabel: "Salinidad Objetivo (%)",
    saltGramsLabel: "Sal Requerida",
    fineSaltLabel: "Sal Fina (cucharaditas)",
    kosherSaltLabel: "Sal Kosher (cucharaditas)",
    statusDanger: "Zona de Peligro",
    statusDangerDesc: "Una salinidad inferior al 2.0% es insuficiente para bloquear patógenos y mohos. Aumenta la salinidad para garantizar la seguridad.",
    statusOptimal: "Zona LAB Óptima",
    statusOptimalDesc: "La salinidad entre 2.0% y 3.5% es ideal para que las bacterias del ácido láctico (LAB) dominen y fermenten de forma segura.",
    statusInhibited: "Zona Inhibida",
    statusInhibitedDesc: "La salinidad superior al 3.5% ralentiza o detiene la fermentación. Útil para conservación a largo plazo pero retrasa la actividad bacteriana.",
    petriTitle: "Simulación Microbiológica",
    scaleTitle: "Pantalla de Báscula Digital",
    disclaimer: "Nota: Se recomienda pesar la sal con una báscula digital en lugar de usar medidas volumétricas.",
    kosherLabel: "Sal Kosher",
    fineLabel: "Sal Fina",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Guía Definitiva de la Química de la Fermentación Lacto y el Control de Salinidad',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La fermentación lacto es un proceso bioquímico dinámico impulsado por bacterias del ácido láctico (LAB) para conservar verduras y frutas. Todo el mecanismo depende de crear un entorno selectivo donde las bacterias beneficiosas prosperen mientras los organismos de deterioro, mohos y patógenos son suprimidos. El control de la salinidad es la palanca más crítica para lograr esta selectividad biológica.',
    },
    {
      type: 'title',
      text: 'La Acción Bioquímica de la Sal en la Conservación',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cuando se introduce sal a las verduras crudas, actúa mediante un proceso físico conocido como <strong>presión osmótica</strong>. La alta concentración de sal fuera de las células vegetales extrae agua y azúcares disueltos de los tejidos vegetales por ósmosis (plasmólisis). Esto crea una salmuera rica en nutrientes que sirve como combustible perfecto para las bacterias del ácido láctico. Simultáneamente, la presión osmótica deshidrata y lisa las membranas celulares de mohos, levaduras y bacterias patógenas como <em>Escherichia coli</em> o <em>Clostridium botulinum</em>, que no toleran niveles elevados de salinidad.',
    },
    {
      type: 'title',
      text: 'Sucesión Microbiológica: Cómo las LAB Colonizan los Fermentos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La fermentación lacto no la realiza una sola especie bacteriana, sino una sucesión de cepas que dominan a medida que aumenta la acidez. En un fermento vegetal típico, el ciclo ocurre en tres fases distintas:',
    },
    {
      type: 'list',
      items: [
        '<strong>Fase 1 - Leuconostoc mesenteroides:</strong> Esta bacteria heterofermentativa inicia la fermentación. Es muy activa al comienzo, produciendo ácido láctico, ácido acético, dióxido de carbono (que ayuda a crear una atmósfera anaeróbica) y etanol. Rápidamente baja el pH, preparando el medio para especies posteriores.',
        '<strong>Fase 2 - Lactobacillus plantarum y Lactobacillus brevis:</strong> Cuando el pH baja de 5.0, <em>L. mesenteroides</em> muere y bacterias homofermentativas acidotolerantes como <em>L. plantarum</em> toman el control. Fermentan los azúcares simples restantes exclusivamente en ácido láctico, bajando el pH rápidamente.',
        '<strong>Fase 3 - Pediococcus pentosaceus y otras:</strong> En fermentos prolongados, estas bacterias altamente acidotolerantes continúan produciendo ácido hasta agotar los azúcares o hasta que el pH llega a aproximadamente 3.5-3.8, estabilizando el entorno indefinidamente.'
      ],
    },
    {
      type: 'title',
      text: 'Protegiendo la Textura Vegetal: La Conexión de la Pectina',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un problema común en la fermentación casera es que las verduras se ablanden. Las células vegetales se mantienen unidas por un polisacárido estructural llamado pectina. Los microorganismos de deterioro producen enzimas llamadas <strong>pectinasas</strong>, que descomponen la pectina y degradan las paredes vegetales, causando ablandamiento. Mantener una salinidad superior al 2.0% inhibe directamente la actividad de estas enzimas pectinasas. Además, los iones de calcio presentes en la sal marina sin refinar o añadidos como cloruro de calcio pueden entrecruzarse con las moléculas de pectina, formando pectato de calcio, que mantiene los encurtidos y el chucrut crujientes.',
    },
    {
      type: 'title',
      text: 'Matemáticas del Salado en Seco vs. Salmuera Húmeda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Entender la fórmula para calcular la sal es fundamental. Para el salado en seco (comúnmente usado para verduras ralladas como el repollo en el chucrut), el porcentaje de sal se calcula únicamente sobre el peso de la verdura. Para la salmuera húmeda (usada para verduras enteras o en trozos grandes como pepinos o zanahorias), el porcentaje de sal debe calcularse sobre el <strong>peso total de las verduras más el agua añadida</strong>. Calcular la sal basándose solo en el peso del agua es un error común que diluye la salinidad final, ya que el agua dentro de las verduras acaba diluyendo la salmuera.',
    },
    {
      type: 'table',
      headers: ['Rango de Salinidad', 'Estado Microbiológico', 'Usos Típicos', 'Nivel de Seguridad'],
      rows: [
        ['< 2.0%', 'Riesgo de Patógenos / Peligro de Moho', 'No recomendado', 'Bajo'],
        ['2.0% - 2.5%', 'Brote Óptimo de Bacterias del Ácido Láctico', 'Chucrut, Kimchi, Pepinillos', 'Alto'],
        ['2.5% - 3.5%', 'Fermentación lenta / Alta retención de textura', 'Salsas picantes, ajos, raíces', 'Alto'],
        ['> 3.5%', 'Inhibición bacteriana / Solo conservación', 'Aceitunas, pimientos añejos, alta temperatura', 'Seguro pero inactivo'],
      ],
    },
    {
      type: 'title',
      text: 'Por Qué Pesar la Sal es Mejor que Medir en Volumen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Medir la sal en volumen (cucharadas o cucharaditas) es notoriamente impreciso. La sal de mesa es fina y densa, una cucharadita puede pesar hasta 6 gramos. En cambio, la sal kosher tiene cristales grandes y escamosos con bolsas de aire, pesando tan solo 4 gramos por cucharadita. La sal marina gruesa se sitúa en un punto intermedio. Usar medidas de volumen puede provocar fermentos peligrosamente poco salados o completamente paralizados por exceso de sal. Pesar los ingredientes en gramos con una báscula digital garantiza resultados consistentes, seguros y repetibles.',
    },
    {
      type: 'title',
      text: 'Solución de Problemas y Buenas Prácticas en Fermentación Lacto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para asegurar una fermentación exitosa, sigue siempre estas reglas: Mantén todas las verduras completamente sumergidas bajo la salmuera para evitar mohos aeróbicos. Usa recipientes y pesas limpias. Fermenta a temperatura ambiente fresca (18°C a 22°C) para evitar que las bacterias de fase 1 sean superadas. Si aparece una película blanca en la superficie, verifica si es levadura Kahm (una levadura silvestre inofensiva que se forma por exposición al oxígeno) o moho. El moho es difuso y colorido; si está presente, el fermento debe desecharse. La levadura Kahm se puede retirar, aunque puede afectar el sabor.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
