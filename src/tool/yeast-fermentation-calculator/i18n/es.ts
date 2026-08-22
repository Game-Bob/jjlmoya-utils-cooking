import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "Calculadora de Tiempo de Fermentación de Levadura para Pan, Masa Madre y Cerveza";
const description = "Estima el tiempo de fermentación del pan, masa madre y cerveza según la temperatura, cantidad de levadura, volumen de lote y objetivo de fermentación o atenuación. Alterna entre unidades métricas e imperiales.";

const faq = [
  {
    "question": "¿Qué estima esta calculadora de fermentación de levadura?",
    "answer": "Estima una ventana de planificación para masa de pan, masa madre o cerveza mediante un modelo de tasa transparente. El resultado es un rango orientativo, ya que la harina, densidad del mosto, hidratación y estado de la levadura influyen en el tiempo real."
  },
  {
    "question": "¿Por qué influye tanto la temperatura en el resultado?",
    "answer": "La temperatura altera directamente la actividad metabólica de la levadura. La calculadora aplica un factor de temperatura tipo Q10 sobre una referencia y amplía el margen a medida que la temperatura se aleja de la zona idónea."
  },
  {
    "question": "¿Qué debo introducir como cantidad de masa madre?",
    "answer": "Introduce el peso de harina como tamaño del lote y el peso de masa madre como cantidad de cultivo. La herramienta calcula el porcentaje de panadero y aplica un perfil de referencia más lento que el de la levadura comercial."
  },
  {
    "question": "¿Qué debo introducir en el modo cerveza?",
    "answer": "Introduce el volumen de mosto en litros y la masa de levadura seca en gramos. El resultado utiliza gramos por litro como indicador de tasa de inoculación. Para planificar tu elaboración, consulta la ficha del fabricante y mide la densidad."
  },
  {
    "question": "¿Debo dar por terminada la fermentación al finalizar la ventana estimada?",
    "answer": "No. Usa la ventana como aviso para inspeccionar la masa o tomar una lectura de densidad. En panadería, comprueba el volumen y la elasticidad. En cerveza, confirma la densidad estable en lecturas repetidas."
  },
  {
    "question": "¿Puedo usar unidades imperiales?",
    "answer": "Sí. Utiliza el botón global de sistema de medida para alternar la temperatura, peso de harina, volumen de mosto y densidad de inoculación entre métrico e imperial."
  }
];

const howTo = [
  {
    "name": "Elige un modo de fermentación",
    "text": "Selecciona pan, masa madre o cerveza para que la calculadora aplique las unidades y cultivos de referencia adecuados."
  },
  {
    "name": "Ajusta el cultivo y la temperatura",
    "text": "Elige el tipo de levadura, cambia entre métrico e imperial si lo deseas, e indica la temperatura de trabajo o usa un ajuste predefinido."
  },
  {
    "name": "Introduce el lote y la levadura",
    "text": "Para pan y masa madre, introduce la harina y el cultivo en gramos. Para cerveza, indica el volumen de mosto en litros y la levadura seca en gramos."
  },
  {
    "name": "Define la meta de fermentación",
    "text": "Selecciona el aumento de volumen deseado o la atenuación de la cerveza, y utiliza la ventana resultante como guía de planificación."
  }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({ '@type': 'Question' as const, name: item.question, acceptedAnswer: { '@type': 'Answer' as const, text: item.answer } })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep' as const, name: step.name, text: step.text })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
};

const ui: FermentationUI = {
  "modeBread": "Pan",
  "modeSourdough": "Masa madre",
  "modeBeer": "Cerveza",
  "modeBreadHint": "levadura comercial",
  "modeSourdoughHint": "cultivo salvaje",
  "modeBeerHint": "ale o lager",
  "temperature": "Temperatura de fermentación",
  "temperatureHelp": "Usa la temperatura de la masa o del mosto, no la de la estancia si difieren.",
  "systemLabel": "Sistema de medida",
  "metricSystem": "Métrico",
  "imperialSystem": "Imperial",
  "useImperial": "Usar imperial",
  "useMetric": "Usar métrico",
  "imperialTemperatureUnit": "°F",
  "metricTemperatureUnit": "°C",
  "imperialMassUnit": "oz",
  "metricMassUnit": "g",
  "imperialFlourUnit": "oz",
  "metricFlourUnit": "g",
  "imperialWortUnit": "gal",
  "metricWortUnit": "L",
  "batchSize": "Tamaño del lote",
  "batchSizeHelp": "Peso de harina para pan/masa madre o volumen de mosto para cerveza.",
  "flour": "Peso de harina",
  "wort": "Volumen de mosto",
  "yeastAmount": "Cantidad de cultivo",
  "yeastAmountHelp": "Pesa la levadura o la masa madre. Para cerveza, usa masa de levadura seca.",
  "yeastType": "Tipo de cultivo",
  "instant": "Seca instantánea",
  "active": "Seca activa",
  "fresh": "Levadura fresca",
  "starter": "Masa madre",
  "ale": "Levadura ale",
  "lager": "Levadura lager",
  "targetRise": "Crecimiento objetivo",
  "targetAttenuation": "Atenuación objetivo",
  "targetHelp": "Esta es la meta de fermentación, no una garantía fija por sí sola.",
  "riseUnit": "x volumen",
  "attenuationUnit": "%",
  "presetRoom": "Ambiente",
  "presetWarm": "Cálido",
  "presetCool": "Fresco",
  "presetOvernight": "Nocturno",
  "calculate": "Actualizar estimación",
  "reset": "Restablecer a pan",
  "estimatedWindow": "Ventana de fermentación estimada",
  "rate": "Ritmo de trabajo",
  "pitchDensity": "Tasa de inoculación",
  "status": "Lectura",
  "steady": "condiciones estables",
  "watch": "observar el cultivo",
  "caution": "fuera de rango idóneo",
  "invalid": "introduce valores válidos",
  "steadyText": "Los datos están cerca del perfil de referencia. Observa la masa o mosto en lugar del reloj.",
  "watchText": "La estimación sirve de guía, pero la temperatura o cultivo harán la ventana menos predecible.",
  "cautionText": "Esta combinación está muy alejada del perfil de referencia. Usa la cifra como orientación y verifica visualmente o midiendo.",
  "invalidText": "Introduce valores positivos para temperatura, tamaño de lote, cantidad de cultivo y objetivo.",
  "assumptions": "Ver premisas del modelo",
  "assumptionsText": "El modelo aplica un ajuste de tasa transparente sobre un perfil de referencia. La temperatura usa un factor tipo Q10 y la cantidad de cultivo un factor sublineal. No conoce la fuerza de la harina, densidad del mosto, hidratación, pH, oxígeno ni salud de la levadura.",
  "targetMarker": "meta",
  "riseScene": "volumen de masa",
  "attenuationScene": "azúcar convertido",
  "hours": "horas",
  "days": "días",
  "perLiter": "g/L",
  "perGallon": "oz/gal",
  "perFlour": "de harina",
  "enterValid": "Introduce valores para leer el recipiente.",
  "faqTitle": "Preguntas Frecuentes",
  "bibliographyTitle": "Bibliografía y Referencias"
};

export const content: ToolLocaleContent<FermentationUI> = {
  slug: "calculadora-tiempo-fermentacion-levadura",
  title,
  description,
  ui,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  seo: [
    { type: 'title', text: "Cómo funciona la estimación de fermentación", level: 2 },
    { type: 'paragraph', html: "¿Buscas una calculadora de tiempo de fermentación de levadura, estimación para masa madre o guía de fermentación de cerveza? Esta herramienta proporciona una ventana práctica a partir de las cuatro variables más fáciles de medir: cantidad de cultivo, tamaño del lote, temperatura y crecimiento o atenuación objetivo. Cambia entre unidades métricas e imperiales y verifica siempre el resultado con la masa o la densidad." },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "modos de fermentación", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "factor de temperatura", icon: 'mdi:thermometer' }, { value: 'range', label: "formato del resultado", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "Variables que modifican la ventana estimada", level: 3 },
    { type: 'table', headers: ["Variable","Pan y masa madre","Cerveza"], rows: [["Tamaño del lote","Harina en gramos","Mosto en litros"],["Cantidad de cultivo","Levadura o masa madre en gramos","Levadura seca en gramos"],["Meta de fermentación","Multiplicador de volumen de masa","Atenuación objetivo"],["Verificación real","Volumen, elasticidad y aspecto","Lecturas de densidad estables"]] },
    { type: 'title', text: "Por qué el resultado es una ventana de rango", level: 3 },
    { type: 'paragraph', html: "Dos elaboraciones con la misma receta pueden fermentar a velocidades distintas debido a oscilaciones de temperatura, vitalidad del cultivo o densidad del mosto. Por ello, el rango se amplía cuando las condiciones se alejan del perfil de referencia para reflejar la incertidumbre real en lugar de ocultarla." },
    { type: 'tip', title: "Usa la meta como señal visual o de medición", html: "En masas de pan, busca el volumen deseado y una estructura esponjosa y elástica. En cerveza, confirma una densidad estable mediante densímetro o refractómetro. El tiempo es una ayuda para planificar, no la señal definitiva de finalización." },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
