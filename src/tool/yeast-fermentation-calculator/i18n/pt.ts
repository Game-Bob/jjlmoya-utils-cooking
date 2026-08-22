import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "Calculadora de Tempo de Fermentação de Levedura para Pão, Massa Madre e Cerveja";
const description = "Estime o tempo de fermentação do pão, massa madre e cerveja com base na temperatura, quantidade de levedura e objetivo. Unidades métricas e imperiais.";

const faq = [
  {
    "question": "O que calcula esta calculadora de fermentação?",
    "answer": "Estima uma janela de planejamento para pão, massa madre ou cerveja."
  },
  {
    "question": "Por que a temperatura afeta tanto o resultado?",
    "answer": "A temperatura altera diretamente a atividade metabólica da levedura."
  },
  {
    "question": "O que inserir para massa madre?",
    "answer": "Peso da farinha como lote e massa madre como quantidade de cultura."
  },
  {
    "question": "O que inserir para cerveja?",
    "answer": "Volume do mosto em litros e fermento seco em gramas."
  },
  {
    "question": "Devo finalizar a fermentação ao fim do tempo estimado?",
    "answer": "Não, verifique visualmente a massa ou meça a densidade do mosto."
  },
  {
    "question": "Posso usar unidades imperiais?",
    "answer": "Sim, alternando no botão de sistema de medição."
  }
];

const howTo = [
  {
    "name": "Escolha o modo",
    "text": "Selecione pão, massa madre ou cerveja."
  },
  {
    "name": "Ajuste cultura e temperatura",
    "text": "Escolha o tipo de levedura e a temperatura."
  },
  {
    "name": "Insira lote e fermento",
    "text": "Informe peso de farinha/mosto e fermento."
  },
  {
    "name": "Defina a meta",
    "text": "Escolha o crescimento da massa ou atenuação."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
};

const ui: FermentationUI = {
  "modeBread": "Pão",
  "modeSourdough": "Massa madre",
  "modeBeer": "Cerveja",
  "modeBreadHint": "fermento comercial",
  "modeSourdoughHint": "cultura selvagem",
  "modeBeerHint": "ale ou lager",
  "temperature": "Temperatura de fermentação",
  "temperatureHelp": "Use a temperatura da massa ou do mosto.",
  "systemLabel": "Sistema de medição",
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
  "batchSize": "Tamanho do lote",
  "batchSizeHelp": "Peso da farinha para pão ou volume do mosto para cerveja.",
  "flour": "Peso da farinha",
  "wort": "Volume do mosto",
  "yeastAmount": "Quantidade de cultura",
  "yeastAmountHelp": "Pese o fermento ou massa madre.",
  "yeastType": "Tipo de cultura",
  "instant": "Seco instantâneo",
  "active": "Seco ativo",
  "fresh": "Fermento fresco",
  "starter": "Massa madre",
  "ale": "Levedura ale",
  "lager": "Levedura lager",
  "targetRise": "Crescimento alvo",
  "targetAttenuation": "Atenuação alvo",
  "targetHelp": "É uma meta de controle, não uma garantia automática.",
  "riseUnit": "x volume",
  "attenuationUnit": "%",
  "presetRoom": "Ambiente",
  "presetWarm": "Quente",
  "presetCool": "Fresco",
  "presetOvernight": "Noturno",
  "calculate": "Atualizar estimativa",
  "reset": "Redefinir para pão",
  "estimatedWindow": "Janela de fermentação estimada",
  "rate": "Taxa de trabalho",
  "pitchDensity": "Taxa de inoculação",
  "status": "Leitura",
  "steady": "condições estáveis",
  "watch": "observar cultura",
  "caution": "fora da zona ideal",
  "invalid": "insira valores válidos",
  "steadyText": "Os dados estão próximos do perfil de referência. Observe a massa ou mosto.",
  "watchText": "Estimativa útil como guia, mas a temperatura torna a janela variável.",
  "cautionText": "Combinação distante do perfil base. Use como sinal aproximado.",
  "invalidText": "Insira valores positivos.",
  "assumptions": "Abrir premissas do modelo",
  "assumptionsText": "O modelo aplica um fator de temperatura Q10 e um ajuste de dose sublinear.",
  "targetMarker": "meta",
  "riseScene": "volume da massa",
  "attenuationScene": "açúcar convertido",
  "hours": "horas",
  "days": "dias",
  "perLiter": "g/L",
  "perGallon": "oz/gal",
  "perFlour": "de farinha",
  "enterValid": "Insira valores para ler o recipiente.",
  "faqTitle": "Perguntas Frequentes",
  "bibliographyTitle": "Bibliografia e Referências"
};

export const content: ToolLocaleContent<FermentationUI> = {
  slug: "calculadora-tempo-fermentacao-levedura",
  title,
  description,
  ui,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  seo: [
    { type: 'title', text: "Como funciona a estimativa de fermentação", level: 2 },
    { type: 'paragraph', html: "Procura uma calculadora de tempo de fermentação de levedura, massa madre ou cerveja? Esta ferramenta fornece uma janela prática com base na temperatura, quantidade de levedura, tamanho do lote e objetivo." },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "modos de fermentação", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "fator de temperatura", icon: 'mdi:thermometer' }, { value: 'range', label: "formato do resultado", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "Variáveis que alteram a estimativa", level: 3 },
    { type: 'table', headers: ["Variável","Pão e massa madre","Cerveja"], rows: [["Tamanho do lote","Farinha em gramas","Mosto em litros"],["Quantidade de cultura","Fermento ou massa madre em gramas","Fermento seco em gramas"],["Meta final","Multiplicador de volume","Atenuação alvo"],["Verificação real","Volume e elasticidade","Medição de densidade estável"]] },
    { type: 'title', text: "Por que o resultado é uma janela de tempo", level: 3 },
    { type: 'paragraph', html: "A velocidade de fermentação varia conforme a farinha, vitalidade da levedura e temperatura. O intervalo reflete essa incerteza real." },
    { type: 'tip', title: "Use o alvo como guia visual", html: "Para pão, observe o crescimento e a estrutura. Para cerveja, confirme a densidade constante." },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
