import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculadora de Curvas de Pasteurización para Sous Vide';
const description = 'Calcula el tiempo exacto necesario para una pasteurización segura del núcleo frente a Salmonella y Listeria en cocción sous vide, teniendo en cuenta la forma y el grosor de la carne.';

const faq = [
  {
    question: '¿Qué es la pasteurización en la cocción sous vide?',
    answer: 'La pasteurización es el proceso de calentar alimentos a una temperatura específica y mantenerlos el tiempo suficiente para reducir los microorganismos patógenos (como Salmonella, Listeria y E. coli) a niveles seguros y aceptables. A diferencia de la esterilización, no destruye todas las esporas bacterianas, pero hace que el alimento sea seguro para consumir.',
  },
  {
    question: '¿Por qué el grosor de la carne afecta tan drásticamente al tiempo de cocción?',
    answer: 'La transferencia de calor en los alimentos se rige por conducción. El tiempo necesario para que el núcleo (el punto más frío) del alimento alcance la temperatura del baño de agua aumenta de forma cuadrática con el grosor. Duplicar el grosor de un filete multiplica aproximadamente por cuatro el tiempo de calentamiento.',
  },
  {
    question: '¿Por qué se considera 54,4°C (130°F) la temperatura mínima segura para sous vide?',
    answer: 'A temperaturas inferiores a 54,4°C, patógenos comunes transmitidos por alimentos como Salmonella pueden sobrevivir y multiplicarse activamente. Si los alimentos se mantienen en esta "zona de peligro" durante más de 4 horas, pueden formarse toxinas resistentes al calor que suponen graves riesgos para la seguridad alimentaria.',
  },
  {
    question: '¿Qué es una reducción 6D o 6,5D?',
    answer: 'Una reducción D se refiere a una reducción decimal (logarítmica) de la población bacteriana. Una reducción de 6,5D significa que se elimina el 99,99995% del patógeno objetivo. Por ejemplo, si originalmente hubiera 1.000.000 de bacterias, sobreviviría menos de 1.',
  },
  {
    question: '¿Cómo afecta la geometría del alimento a la velocidad de calentamiento?',
    answer: 'El calor penetra una esfera desde todas las direcciones (3 dimensiones) y un cilindro desde los lados (2 dimensiones), mientras que una lámina plana se calienta principalmente desde arriba y abajo (1 dimensión). Por lo tanto, las esferas se calientan más rápido, seguidas de los cilindros, y las láminas tardan más tiempo.',
  },
];

const howTo = [
  {
    name: 'Ajusta la temperatura del baño',
    text: 'Mueve el deslizador para igualar la temperatura de tu baño de agua. Ten en cuenta que temperaturas más altas pasteurizan exponencialmente más rápido.',
  },
  {
    name: 'Especifica el grosor de la carne',
    text: 'Mide la parte más gruesa de la carne en milímetros e introdúcela en la calculadora.',
  },
  {
    name: 'Selecciona la forma geométrica',
    text: 'Elige si tu alimento tiene forma de lámina plana (filete, pechuga de pollo), cilindro (solomillo de ternera, ballotine) o esfera (albóndiga).',
  },
  {
    name: 'Selecciona el patógeno objetivo',
    text: 'Elige Salmonella para la seguridad estándar en carne y aves, o Listeria monocytogenes para personas de alto riesgo o mayor margen de seguridad.',
  },
  {
    name: 'Revisa el tiempo total de cocción',
    text: 'La calculadora muestra el tiempo de calentamiento del núcleo y el tiempo de mantenimiento de letalidad. Súmalos para obtener la duración total de cocción segura.',
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
  slug: 'curvas-pasteurizacion-sous-vide',
  title: 'Curvas de Pasteurización para Sous Vide',
  description: 'Calcula el tiempo exacto necesario para una pasteurización segura del núcleo frente a Salmonella y Listeria en cocción sous vide, teniendo en cuenta la forma y el grosor de la carne.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: 'Curvas de Pasteurización para Sous Vide',
    subtitle: 'Cinética de letalidad térmica y compensación de temperatura del núcleo',
    bathTempLabel: 'Temperatura del Baño de Agua',
    thicknessLabel: 'Grosor de la Carne',
    shapeLabel: 'Geometría de la Carne',
    shapeSlab: 'Lámina Plana (ej. Filete, Pechuga de Pollo)',
    shapeCylinder: 'Cilindro (ej. Solomillo, Roulade)',
    shapeSphere: 'Esfera (ej. Albóndiga)',
    pathogenLabel: 'Patógeno Objetivo',
    pathogenSalmonella: 'Salmonella (Estándar)',
    pathogenListeria: 'Listeria monocytogenes',
    resultsTitle: 'Tiempo de Pasteurización Segura',
    heatingTime: 'Tiempo de Calentamiento del Núcleo',
    lethalityTime: 'Tiempo de Letalidad del Patógeno',
    totalTime: 'Tiempo Total de Cocción',
    dangerZoneTitle: 'Zona de Peligro por Riesgo Biológico',
    dangerZoneDesc: 'Las temperaturas por debajo de 54,4°C (130°F) no pueden pasteurizar alimentos de forma segura porque la tasa de replicación bacteriana puede superar la tasa de muerte térmica. No cocines sous vide por debajo de esta temperatura durante más de 4 horas.',
    chartTitle: 'Curva Logarítmica de Reducción Bacteriana',
    chartXLabel: 'Tiempo (minutos)',
    chartYLabel: 'Reducción Logarítmica',
    disclaimer: 'Los cálculos asumen una temperatura inicial de 5°C y difusividad térmica de carne magra. Usa siempre un termómetro digital calibrado para verificar la temperatura del baño.',
    minutesUnit: 'min',
    mmUnit: 'mm',
    inUnit: 'pulg',
    tempUnitC: '°C',
    tempUnitF: '°F',
    systemLabel: 'Sistema de Medición',
    systemMetric: 'Métrico',
    systemImperial: 'Imperial'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Pasteurización Sous Vide: Guía Completa de Seguridad para Cocineros Caseros',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La cocción sous vide ha transformado las cocinas caseras al hacer accesibles filetes imposibles de sobrecocinar para cualquiera con un circulador de inmersión. Pero el método esconde una complejidad crítica: a las bajas temperaturas que producen ese borde rosado perfecto de punto medio, se opera a milímetros del umbral de muerte térmica de bacterias peligrosas. Esta guía explica exactamente cómo calcular tiempos de pasteurización seguros para cualquier corte de carne, a cualquier temperatura, para que nunca vuelvas a servir pollo o pescado poco cocinado.',
    },
    {
      type: 'title',
      text: 'Por Qué la Seguridad en Sous Vide Es Diferente a la Cocina Tradicional',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cuando sellas una pechuga de pollo a 200°C, la superficie alcanza temperaturas letales instantáneamente y las bacterias mueren en segundos. El sous vide invierte este modelo: el baño de agua funciona a la temperatura final exacta que quieres que alcance el alimento, a veces tan baja como 55°C. A estas temperaturas, matar Salmonella o Listeria no es instantáneo  -  es un proceso lento que depende del tiempo, medido en minutos o incluso horas. Las tablas del Apéndice A del USDA FSIS especifican que lograr una reducción de 6,5-log de Salmonella requiere mantener las aves a 60°C durante aproximadamente 28 minutos después de que el núcleo alcance la temperatura. A 55°C, este tiempo se extiende a casi 90 minutos. Si sacas la bolsa cuando suena el temporizador sin tener en cuenta el tiempo de letalidad, puedes estar sirviendo alimentos insuficientemente pasteurizados.',
    },
    {
      type: 'title',
      text: 'Tiempos Reales de Sous Vide: Lo Que los Cocineros Caseros Realmente Necesitan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La siguiente tabla refleja lo que los cocineros caseros realmente buscan: cortes específicos de carne, a temperaturas comunes, con tiempos totales que incluyen tanto el retraso de calentamiento como el tiempo de mantenimiento de letalidad del patógeno. Estos valores asumen un grosor de 25mm, partiendo de temperatura de refrigeración (5°C), buscando una reducción de 6,5-log de Salmonella.',
    },
    {
      type: 'table',
      headers: ['Alimento', 'Temp. del Baño', 'Calentamiento del Núcleo', 'Tiempo de Letalidad', 'Tiempo Total', 'Resultado'],
      rows: [
        ['Pechuga de Pollo', '60°C / 140°F', '~35 min', '~28 min', '~63 min', 'Jugosa, completamente pasteurizada'],
        ['Pechuga de Pollo', '65°C / 149°F', '~35 min', '~3 min', '~38 min', 'Más firme, textura tradicional'],
        ['Filete de Salmón', '50°C / 122°F', '~20 min', '~55 min', '~75 min', 'Mantecoso, traslúcido, seguro'],
        ['Filete de Ternera', '55°C / 131°F', '~40 min', '~89 min', '~129 min', 'Poco hecho, superficie pasteurizada'],
        ['Solomillo de Cerdo', '60°C / 140°F', '~35 min', '~28 min', '~63 min', 'Tierno con ligero tono rosado'],
        ['Pechuga de Pato', '57°C / 135°F', '~35 min', '~52 min', '~87 min', 'Sabrosa, al punto, inocua'],
        ['Pechuga de Pavo', '63°C / 145°F', '~40 min', '~9 min', '~49 min', 'Húmeda, nunca seca'],
        ['Albóndigas (esfera)', '60°C / 140°F', '~25 min', '~28 min', '~53 min', 'Cocción uniforme'],
      ],
    },
    {
      type: 'title',
      text: 'Las Matemáticas Logarítmicas de la Muerte Bacteriana: Valores D y Valores z Explicados',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Las bacterias no mueren todas a la vez como si se pulsara un interruptor. La muerte térmica sigue una cinética de primer orden: una fracción constante de la población muere por unidad de tiempo a una temperatura dada. El <strong>valor D</strong> (tiempo de reducción decimal) es el tiempo necesario a una temperatura específica para matar el 90% de las bacterias presentes  -  una reducción de 1-log. Para Salmonella a 60°C, el valor D es aproximadamente 4,3 minutos. El <strong>valor z</strong> (normalmente 5,5°C para Salmonella) nos indica cuánto necesitamos aumentar la temperatura para que el proceso sea 10 veces más rápido. Sube el baño de 55°C a 60,5°C, y el tiempo de letalidad necesario se reduce en un factor de 10  -  de 89 minutos a unos 9 minutos. Esta relación exponencial explica por qué cocinar a 65°C es drásticamente más rápido y seguro que cocinar a 55°C, aunque el alimento apenas parezca diferente.',
    },
    {
      type: 'title',
      text: 'La Zona de Peligro: Por Qué 54,4°C (130°F) Es el Límite Mínimo Absoluto',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Riesgo Biológico por Debajo de 54,4°C (130°F)',
      html: 'Nunca cocines sous vide por debajo de 54,4°C (130°F) durante más de 4 horas. A temperaturas inferiores a este umbral, la tasa de muerte térmica de bacterias como Salmonella y Clostridium perfringens es en realidad más lenta que su tasa natural de reproducción. La población bacteriana puede crecer durante la cocción. Peor aún, ciertos patógenos como Bacillus cereus y Clostridium botulinum Tipo E pueden producir toxinas termoestables que sobreviven a la cocción. Si tu circulador marca 52°C y dejas la carne durante 8 horas pensando que una cocción lenta y a baja temperatura es más segura, estás creando un riesgo biológico.',
    },
    {
      type: 'title',
      text: 'Cómo la Forma y el Grosor de la Carne Determinan el Tiempo de Cocción',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El centro térmico del alimento  -  el último punto en alcanzar la temperatura objetivo  -  determina el tiempo total de cocción. La conducción del calor sigue la ley de Fourier, y el tiempo para que el núcleo llegue a 1°C de la temperatura del baño escala con el <strong>cuadrado del grosor</strong>. Duplica el grosor de una pechuga de pollo de 25mm a 50mm, y el tiempo de calentamiento se cuadruplica de 35 minutos a aproximadamente 140 minutos. La forma importa enormemente: una <strong>lámina plana</strong> (filete, lomo) se calienta desde dos superficies opuestas y es la geometría más lenta. Un <strong>cilindro</strong> (solomillo, roulade) recibe calor radialmente desde todos los lados y se calienta aproximadamente 1,4 veces más rápido que una lámina del mismo grosor. Una <strong>esfera</strong> (albóndiga) se calienta desde todas las direcciones y es la geometría más rápida, aproximadamente 1,7 veces más rápida que una lámina. Por eso los alimentos esféricos como albóndigas o arancini alcanzan temperaturas seguras en el núcleo sorprendentemente rápido.',
    },
    {
      type: 'title',
      text: 'Salmonella vs. Listeria: Cómo Elegir el Patógeno Objetivo',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Salmonella (Estándar)',
          icon: 'mdi:bacteria-outline',
          description: 'El contaminante más común en aves de corral, moderadamente sensible al calor, ampliamente utilizado como patógeno de referencia en los estándares del USDA FSIS.',
          points: [
            'Valor z de 5,5°C: moderadamente sensible al calor',
            'Objetivo: reducción de 6,5-log para aves, 5-log para ternera',
            'D60 = 4,3 minutos: muere relativamente rápido a 60°C',
            'Seguro para adultos sanos con tiempos de pasteurización estándar',
            'Indicador subrogado para serovares de Salmonella enterica en todo tipo de carnes',
          ],
        },
        {
          title: 'Listeria monocytogenes',
          icon: 'mdi:shield-alert-outline',
          description: 'Mayor resistencia al calor que Salmonella. Crítica para poblaciones vulnerables, incluyendo mujeres embarazadas y personas inmunodeprimidas.',
          highlight: true,
          points: [
            'Mayor resistencia al calor que Salmonella',
            'Valor z de 6,0°C: requiere mayor aumento de temperatura para acelerar la eliminación',
            'Objetivo: reducción de 6-log recomendada',
            'D60 = 7,7 minutos: tarda casi el doble que Salmonella',
            'Crítica para mujeres embarazadas, personas mayores e inmunodeprimidas',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Seguridad Alimentaria para Poblaciones Vulnerables: Cuando la Pasteurización Estándar No Es Suficiente',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mujeres embarazadas, adultos mayores de 65 años, pacientes de quimioterapia, receptores de trasplantes y personas con VIH o enfermedades autoinmunes enfrentan riesgos drásticamente mayores de enfermedades transmitidas por alimentos. Listeria monocytogenes en particular puede atravesar la barrera placentaria y causar aborto espontáneo, muerte fetal o meningitis neonatal  -  incluso cuando la madre no muestra síntomas. Para estas poblaciones, la reducción estándar de 6,5-log de Salmonella es insuficiente. Selecciona Listeria como patógeno objetivo y extiende los tiempos de cocción en consecuencia. A 60°C, el tiempo adicional de letalidad para Listeria frente a Salmonella añade aproximadamente 16 minutos extra para una pechuga de pollo de 25mm  -  una pequeña inversión de tiempo para márgenes de seguridad sustanciales.',
    },
    {
      type: 'title',
      text: 'Por Qué la Temperatura Inicial en Frío Importa: Mide Siempre desde Refrigerado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora asume una temperatura inicial de 5°C  -  temperatura estándar de nevera. Si sacas la carne directamente del congelador a -18°C, el núcleo tardará significativamente más en alcanzar la temperatura objetivo. El calor latente de fusión del hielo dentro del tejido muscular congelado crea una meseta a 0°C que puede añadir un 30-50% al tiempo de calentamiento. Descongela siempre los productos congelados completamente en la nevera antes de cocinar al sous vide y verifica la temperatura inicial del núcleo. Del mismo modo, si dejas la carne atemperar en la encimera durante 30 minutos antes de envasar, el tiempo de calentamiento reducido no está reflejado en este modelo y podrías exceder la pasteurización  -  lo cual es seguro pero puede afectar a la textura.',
    },
    {
      type: 'title',
      text: 'Pasteurización No Significa Esterilización: Lo Que Sobrevive',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La pasteurización reduce los patógenos a niveles considerados seguros según los estándares de salud pública  -  típicamente una reducción de 5-log a 7-log. No produce un producto estéril. Ciertas esporas bacterianas, incluyendo <em>Clostridium botulinum</em> y <em>Clostridium perfringens</em>, pueden sobrevivir a las temperaturas de pasteurización y germinar si los alimentos se almacenan incorrectamente. Después de la cocción sous vide, los alimentos deben servirse inmediatamente, mantenerse por encima de 54,4°C para servicio, o enfriarse rápidamente en un baño de hielo por debajo de 4°C en un plazo de 2 horas. Las bolsas selladas al vacío crean un entorno anaeróbico que Clostridium botulinum encuentra ideal; nunca dejes bolsas de sous vide cocinadas a temperatura ambiente. Para almacenamiento prolongado en nevera más allá de 5 días, se recomienda la congelación.',
    },
    {
      type: 'title',
      text: 'Cumplimiento con USDA FSIS: Alcanzando Estándares Regulatorios en Casa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El Apéndice A del Servicio de Inocuidad e Inspección de Alimentos del USDA (FSIS) proporciona el marco regulatorio definitivo para los estándares de rendimiento de letalidad en productos cárnicos y avícolas. Estas tablas especifican las combinaciones de tiempo y temperatura necesarias para reducciones logarítmicas específicas de Salmonella. Aunque están diseñadas para procesadores comerciales, los cocineros caseros pueden aplicar la misma ciencia. Por ejemplo, el Apéndice A del FSIS exige que las aves listas para consumir alcancen una reducción de 6,5-log de Salmonella. A 60°C, el tiempo de mantenimiento necesario después de que todo el producto alcance la temperatura es de 28,1 minutos. Esta calculadora implementa el modelo matemático del FSIS utilizando cinética de Arrhenius de primer orden con valores D y valores z derivados de estudios de inactivación térmica revisados por pares, adaptado para uso con circuladores de inmersión domésticos.',
    },
    {
      type: 'title',
      text: 'Pescado y Marisco: Reglas Diferentes para Proteínas Diferentes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El músculo del pescado tiene propiedades térmicas diferentes a las de la carne de mamíferos o aves. El pescado se calienta más rápido debido a su menor densidad y cortes típicamente más finos, pero los patógenos que preocupan son distintos. Para el pescado crudo o ligeramente cocinado, las especies de <em>Vibrio</em> y los parásitos <em>Anisakis</em> son las principales preocupaciones, más que Salmonella. La FDA recomienda congelar el pescado a -20°C durante 7 días antes del consumo en crudo para eliminar los parásitos, y luego pasteurizar al sous vide frente a Listeria en la cocción final. El salmón cocinado a 50°C requiere aproximadamente 55 minutos de tiempo de mantenimiento para una reducción de 6-log de Listeria, produciendo una textura única imposible de conseguir con ningún otro método de cocción. El atún y otros pescados escómbridos requieren cuidados adicionales: la histamina producida por acción bacteriana antes de la cocción es termoestable y no se destruye con la pasteurización; compra siempre pescado de calidad sashimi de proveedores de confianza y mantenlo por debajo de 4°C antes de cocinar.',
    },
    {
      type: 'title',
      text: 'El Equilibrio Entre Textura y Seguridad: Por Qué Temperaturas Más Altas Son Más Rápidas Pero Diferentes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Todo cocinero de sous vide se enfrenta a la misma decisión: cocinar más bajo y más tiempo para obtener mejor textura, o cocinar más alto y más rápido por comodidad y margen de seguridad. La pechuga de pollo cocinada a 60°C produce una carne tan jugosa que desafía las expectativas de lo que puede ser el pollo, pero requiere un mantenimiento de letalidad de 28 minutos tras la equilibración del núcleo, para un tiempo total de cocción de más de una hora. A 65°C, la misma pechuga se pasteuriza en solo 3 minutos de mantenimiento para un total de 38 minutos, pero las fibras musculares se contraen más, expulsando parte de la humedad. Ninguno de los dos enfoques es incorrecto; la calculadora simplemente te da las cifras para que tomes una decisión informada. Para cenas donde el tiempo es flexible, opta por temperaturas bajas. Para cenas entre semana, usa temperaturas más altas. La comida siempre será segura si se respeta el tiempo calculado.',
    },
    {
      type: 'title',
      text: 'Calibración del Equipo: Tu Circulador Podría Estarte Mintiendo',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Verifica la temperatura de tu circulador de inmersión con un termómetro digital calibrado.</strong> Los circuladores de consumo pueden desviarse 1-2°C con el tiempo, lo que en los márgenes de la pasteurización (55-58°C) puede suponer la diferencia entre una cocción segura de 89 minutos y una peligrosa pasteurización insuficiente. Comprueba tu circulador frente a un termómetro de referencia en un recipiente bien aislado una vez al mes. Un error de 1°C a 55°C cambia el tiempo de letalidad en aproximadamente 30 minutos para Salmonella.',
    },
    {
      type: 'title',
      text: 'Cocinar Múltiples Piezas: Cómo la Cantidad de Bolsas Afecta la Transferencia de Calor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un error común es cargar un baño sous vide con múltiples bolsas y asumir que el tiempo calculado para una sola pieza sigue siendo válido. El agua debe circular libremente entre las bolsas para una transferencia de calor efectiva. Un baño demasiado apretado crea zonas frías estancadas donde las bolsas se aíslan mutuamente del agua caliente. Como regla general, deja al menos 2cm de espacio de agua entre bolsas y, si cocinas más de 4 piezas, aumenta el tiempo calculado en un 15-20% para compensar. Mejor aún, usa un recipiente lo suficientemente grande para que el agua pueda circular libremente alrededor de cada bolsa. Para alimentos esféricos como albóndigas, la ventaja geométrica disminuye significativamente si se tocan o se apilan, ya que los puntos de contacto bloquean la transferencia radial de calor.',
    },
    {
      type: 'title',
      text: 'Referencia Rápida: Temperaturas y Tiempos Mínimos Seguros por Tipo de Alimento',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Tipo de Alimento', 'Temp. Mínima del Núcleo', 'Tiempo de Pasteurización a Temp. Mínima', 'Más Rápido a', 'Recomendado Para'],
      rows: [
        ['Pollo y Aves', '60°C / 140°F', '~28 min (6,5-log Salmonella)', '65°C: ~3 min mantenimiento', 'Todos los consumidores'],
        ['Cerdo (cortes enteros)', '60°C / 140°F', '~28 min (6,5-log Salmonella)', '65°C: ~3 min mantenimiento', 'Todos los consumidores'],
        ['Ternera (filetes, asados)', '55°C / 131°F', '~89 min (6,5-log Salmonella)', '60°C: ~28 min mantenimiento', 'Adultos sanos (pasteurización superficial)'],
        ['Carne Picada', '60°C / 140°F', '~28 min (6,5-log Salmonella)', '65°C: inmediato', 'Todos los consumidores (bacterias dispersas en toda la masa)'],
        ['Pescado y Marisco', '50°C / 122°F', '~55 min (Listeria)', '55°C: ~22 min mantenimiento', 'Precongelado para control de parásitos'],
        ['Huevos (con cáscara)', '57°C / 135°F', '~75 min (Salmonella)', '60°C: ~28 min mantenimiento', 'Huevos con cáscara pasteurizados'],
        ['Verduras', '85°C / 185°F', 'No aplicable (inactivación enzimática)', 'N/A', 'Degradación de pectina, sin riesgo de patógenos'],
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
