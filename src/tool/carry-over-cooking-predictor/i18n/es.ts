import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Predictor de Cocción Residual: Calculadora de Inercia Térmica';
const description = 'Predice cuántos grados seguirá cocinándose tu asado después de sacarlo del horno. Obtén la temperatura exacta de retirada para un término medio perfecto.';

const faq = [
  {
    question: '¿Qué es la cocción residual y por qué ocurre?',
    answer: 'La cocción residual, también llamada inercia térmica, es el aumento continuo de la temperatura interna después de retirar la comida del horno. El calor almacenado en las capas exteriores sigue conduciéndose hacia el centro. Un asado retirado a 50°C puede alcanzar 54°C durante el reposo: la diferencia entre término rojo y término medio.',
  },
  {
    question: '¿Cómo afecta la temperatura del horno a la cocción residual?',
    answer: 'Las temperaturas altas de horno (200-250°C) crean un gradiente térmico mayor entre la superficie y el centro, almacenando más calor latente en la corteza. Esto incrementa el efecto residual. Un asado cocinado a 120°C tendrá una cocción residual mínima (~1°C), mientras que uno a 220°C puede ganar 5-8°C durante el reposo.',
  },
  {
    question: '¿La forma de la pieza de carne cambia el cálculo de la cocción residual?',
    answer: 'Sí. La geometría afecta significativamente la penetración del calor. Las aves enteras y los asados gruesos tienen mayor masa térmica en relación con su superficie, por lo que retienen más calor y tienen mayor efecto residual. Los cortes planos como los filetes tienen una alta relación superficie-volumen y se enfrían rápido, con un efecto residual mínimo.',
  },
  {
    question: '¿Cuánto tiempo debo reposar la carne después de retirarla?',
    answer: 'El tiempo de reposo depende del peso y la geometría. Una regla general es aproximadamente 1 minuto por cada 100g de carne, mínimo 10 minutos, máximo 45 minutos. Un asado de 2kg necesita unos 16 minutos de reposo. Durante este tiempo la temperatura interna se iguala y el efecto de cocción residual se completa.',
  },
];

const howTo = [
  {
    name: 'Selecciona la geometría de la carne',
    text: 'Elige Ave Entera para aves, Asado Cilíndrico para lomos y cortes deshuesados, o Corte Plano para filetes y medallones.',
  },
  {
    name: 'Ingresa el peso',
    text: 'Introduce el peso total de tu pieza en gramos. Se aplican pesos mínimos por cada tipo de geometría.',
  },
  {
    name: 'Configura la temperatura del horno',
    text: 'Introduce la temperatura real de tu horno. Las temperaturas más altas aumentan el efecto de cocción residual.',
  },
  {
    name: 'Define tu temperatura objetivo',
    text: 'Introduce la temperatura interna final deseada (ej. 54°C para carne de res término medio, 74°C para aves).',
  },
  {
    name: 'Lee la temperatura de retirada',
    text: 'La calculadora te indica exactamente cuándo retirar la carne para alcanzar tu objetivo después del reposo.',
  },
  {
    name: 'Reposa la carne',
    text: 'Deja reposar la carne el tiempo recomendado. No la cubras demasiado apretado o la corteza se ablandará.',
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
  slug: 'predictor-coccion-residual',
  title: 'Predictor de Cocción Residual',
  description: 'Predice cuántos grados seguirá cocinándose tu asado después de sacarlo del horno. Obtén la temperatura exacta de retirada para un término medio perfecto.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: 'Predictor de Cocción Residual',
    subtitle: 'Calculadora de inercia térmica para asados de precisión',
    geometryLabel: 'Geometría de la Carne',
    wholeBird: 'Ave Entera (Pollo, Pavo)',
    cylindricalRoast: 'Asado Cilíndrico (Lomo, Deshuesado)',
    flatCut: 'Corte Plano (Filete, Medallón)',
    weightLabel: 'Peso',
    ovenTempLabel: 'Temperatura del Horno',
    targetTempLabel: 'Temperatura Interna Objetivo',
    pullTemp: 'Temperatura de Retirada',
    carryOver: 'Cocción Residual',
    restTime: 'Tiempo de Reposo',
    minutes: 'min',
    degreesC: '°C',
    degreesF: '°F',
    unitLabel: 'Unidades',
    metricUnit: 'Métrico',
    imperialUnit: 'Imperial',
    geometryDescCylindrical: 'Geometría cilíndrica seleccionada - inercia térmica moderada con cocción residual predecible.',
    weightG: 'g',
    weightOz: 'oz',
    errorTargetExceedsOven: 'La temperatura objetivo no puede superar la temperatura del horno.',
    errorOvenTooHot: 'La temperatura del horno supera los 350°C. Reduce la temperatura.',
    errorWeightTooLow: 'El peso está por debajo del mínimo para esta geometría.',
    errorWeightTooHigh: 'El peso supera el máximo para esta geometría.',
    pullNow: 'Retira la carne ahora',
    pullAt: 'Retirar a',
    toReach: 'para alcanzar',
    afterRest: 'tras el reposo',
    carryOverWillAdd: 'La cocción residual añadirá aproximadamente',
    footerTemplate: '{carry} residual · {rest} reposo · {weight}{wunit}, {oven} horno → {target} objetivo',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Predictor de Cocción Residual: Obtén la Temperatura de Retirada Perfecta Cada Vez',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La cocción residual es el aumento continuo de la temperatura interna después de que la comida sale del horno. Las capas exteriores almacenan calor durante el asado, y esta energía sigue conduciéndose hacia el centro más frío durante el reposo. Un asado grueso retirado a 50°C puede alcanzar 54°C después de reposar: la diferencia entre término rojo y término medio. Esta calculadora predice exactamente cuántos grados subirá tu asado para que puedas retirarlo en el momento preciso.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5-8°C', label: 'Residual típico (horno caliente)', icon: 'mdi:thermometer' },
        { value: '1-3°C', label: 'Residual mínimo (horno bajo)', icon: 'mdi:thermometer-low' },
        { value: '16 min', label: 'Reposo para asado de 2kg', icon: 'mdi:clock-outline' },
        { value: '45 min', label: 'Reposo máximo recomendado', icon: 'mdi:clock-alert' },
      ],
    },
    {
      type: 'title',
      text: 'Tabla de Temperaturas de Retirada por Término',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Usa esta tabla para encontrar tu temperatura interna objetivo, luego deja que la calculadora determine la temperatura exacta de retirada. Recuerda: la temperatura de retirada siempre es <strong>menor</strong> que tu objetivo porque el efecto de cocción residual seguirá cocinando durante el reposo.',
    },
    {
      type: 'table',
      headers: ['Término', 'Temp. Objetivo', 'Temp. Retirada (horno 200°C)', 'Tiempo Reposo'],
      rows: [
        ['Res Término Rojo', '52°C / 126°F', '46-48°C / 115-118°F', '10-15 min'],
        ['Res Término Medio', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 min'],
        ['Res Término Medio Hecho', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 min'],
        ['Res Bien Hecho', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 min'],
        ['Cerdo Término Medio', '63°C / 145°F', '57-59°C / 135-138°F', '10-15 min'],
        ['Cerdo Bien Hecho', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 min'],
        ['Pechuga Pollo/Pavo', '74°C / 165°F', '68-70°C / 154-158°F', '15-20 min'],
        ['Muslo Pollo/Pavo', '82°C / 180°F', '76-78°C / 169-172°F', '15-20 min'],
        ['Cordero Término Medio', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 min'],
        ['Cordero Medio Hecho', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 min'],
      ],
    },
    {
      type: 'title',
      text: 'Cómo la Geometría Cambia el Cálculo Térmico',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Ave Entera',
          icon: 'mdi:food-drumstick',
          description: 'Máxima masa térmica en relación con la superficie. Los gruesos centros de la pechuga y el muslo almacenan un enorme calor latente.',
          highlight: false,
          points: ['Residual: 5-10°C en horno a 200°C', 'Reposo: 20-45 minutos', 'Ideal para: pavo, pollo entero, pato', 'Retirar 8-10°C antes del objetivo'],
        },
        {
          title: 'Asado Cilíndrico',
          icon: 'mdi:food-steak',
          description: 'La forma de asado más común. Retención de calor moderada con valores de cocción residual predecibles.',
          highlight: true,
          points: ['Residual: 3-7°C en horno a 200°C', 'Reposo: 15-30 minutos', 'Ideal para: lomo, lomo de cerdo, rack de cordero', 'Retirar 5-7°C antes del objetivo'],
        },
        {
          title: 'Corte Plano',
          icon: 'mdi:food',
          description: 'La alta relación superficie-volumen hace que el calor escape rápidamente. La cocción residual es mínima pero sigue siendo relevante.',
          highlight: false,
          points: ['Residual: 1-3°C en horno a 200°C', 'Reposo: 5-15 minutos', 'Ideal para: filetes, pechuga de pollo, filete de pescado', 'Retirar 1-3°C antes del objetivo'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Errores Comunes de Cocción Residual y Cómo Solucionarlos',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Retirar demasiado tarde',
      html: 'Si esperas a que el termómetro marque tu temperatura objetivo antes de retirar, la cocción residual se disparará entre 3-8°C. Un asado término medio se vuelve medio hecho o casi hecho. <strong>Retira siempre 5-8°C antes de tu objetivo.</strong> Usa esta calculadora para obtener el número exacto.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Cortar demasiado pronto',
      html: 'Cortar un asado inmediatamente después de retirarlo libera hasta un 30% de los jugos. El gradiente térmico no tiene tiempo de igualarse, por lo que el centro queda crudo mientras las capas externas se sobrecocinan. <strong>Reposa durante el tiempo completo recomendado.</strong> Cubre holgadamente con papel aluminio - no envuelvas apretado o el vapor ablandará la corteza.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Temperatura del horno demasiado baja',
      html: 'Un horno bajo (por debajo de 150°C / 300°F) crea un gradiente térmico mínimo entre la superficie y el centro. Esto significa que casi no hay efecto de cocción residual. Si cocinas a baja temperatura, puedes retirar exactamente en tu temperatura objetivo con riesgo mínimo de sobrepasar. Sin embargo, el desarrollo de la corteza se reducirá significativamente.',
    },
    {
      type: 'title',
      text: 'Consejos Profesionales para un Asado Perfecto',
      level: 3,
    },
    {
      type: 'tip',
      title: 'La Regla de los 10 Grados',
      html: 'Un horno caliente (220°C / 425°F) añade aproximadamente 1°C de cocción residual por cada 100g de carne en aves enteras, y 0.7°C por cada 100g en asados cilíndricos. Úsalo como comprobación frente a la calculadora: un pollo de 2kg a 220°C debería tener unos 7-9°C de cocción residual.',
    },
    {
      type: 'tip',
      title: 'La Posición de Reposo Importa',
      html: 'Reposa siempre la carne en un plato caliente o tabla de cortar, no en una superficie fría. Una superficie fría extraerá calor de la base del asado, creando temperaturas finales desiguales. Para aves enteras, reposa con la pechuga hacia arriba para que los jugos se redistribuyan uniformemente por la carne blanca.',
    },
    {
      type: 'tip',
      title: 'Cubrir, No Envolver',
      html: 'Cubre holgadamente el asado con papel aluminio durante el reposo. Envolver apretado atrapa el vapor y vuelve la corteza blanda. Una cobertura holgada reduce la pérdida de calor en un 30% mientras permite que el vapor escape, preservando tanto el efecto de cocción residual como el exterior crujiente.',
    },
    {
      type: 'title',
      text: 'Glosario de Términos Clave de Asado',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Cocción Residual', definition: 'El aumento continuo de la temperatura interna después de retirar la comida de la fuente de calor, causado por la conducción del calor desde las capas exteriores hacia el centro.' },
        { term: 'Temperatura de Retirada', definition: 'La temperatura interna a la que debes sacar la carne del horno. Siempre menor que la temperatura objetivo para compensar la cocción residual.' },
        { term: 'Temperatura Objetivo', definition: 'La temperatura interna final que deseas que alcance la carne después del reposo. También llamada temperatura de servicio.' },
        { term: 'Inercia Térmica', definition: 'La tendencia de una masa a resistir cambios de temperatura. Los cortes más pesados y densos tienen mayor inercia térmica y mayor cocción residual.' },
        { term: 'Reposo', definition: 'El período posterior a la cocción en el que la carne reposa sin tocarse, permitiendo que el calor se iguale y los jugos se redistribuyan por las fibras.' },
        { term: 'Gradiente Térmico', definition: 'La diferencia de temperatura entre la superficie de la carne y su centro. Un gradiente mayor almacena más calor latente para la cocción residual.' },
        { term: 'Calor Latente', definition: 'La energía térmica almacenada en las capas exteriores de la carne durante la cocción. Esta energía se libera a medida que la temperatura se iguala durante el reposo.' },
      ],
    },
    {
      type: 'title',
      text: 'Referencia Rápida: Temperaturas de Retirada Recomendadas',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Retira a estas temperaturas para resultados perfectos (horno a 200°C / 400°F)',
      items: [
        'Res término medio: retirar a 48-50°C / 118-122°F, objetivo 54°C / 129°F',
        'Res medio hecho: retirar a 54-56°C / 129-133°F, objetivo 60°C / 140°F',
        'Lomo de cerdo: retirar a 57-59°C / 135-138°F, objetivo 63°C / 145°F',
        'Pechuga de pollo: retirar a 68-70°C / 154-158°F, objetivo 74°C / 165°F',
        'Pavo entero: retirar a 68-70°C / 154-158°F, objetivo 74°C / 165°F (pechuga)',
        'Rack de cordero: retirar a 48-50°C / 118-122°F, objetivo 54°C / 129°F',
      ],
    },
    {
      type: 'paragraph',
      html: 'Cada asado es diferente. El peso, la temperatura exacta del horno y la forma del corte modifican estas cifras. Eso es exactamente lo que hace esta calculadora: toma tus datos específicos y calcula la temperatura de retirada precisa para tu situación exacta. Sin conjeturas, sin asados arruinados.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
