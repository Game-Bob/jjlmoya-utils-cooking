import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora PAC POD de Sorvete Guia de Formulacao Criogenica";
const description = "Calcule o poder anticongelante e o poder de dulcificacao para sorvete. Formule perfis precisos de acucares, percentual de solidos e temperaturas de servico.";
const faq = [
  {
    question: "O que e PAC na formulacao de sorvete?",
    answer: "PAC significa Potere Anticongelante, que representa o poder anticongelante. Determina quanta agua permanece congelada em uma determinada temperatura de servico, controlando a dureza fisica do sorvete."
  },
  {
    question: "O que e POD e por que e importante?",
    answer: "POD significa Potere Dolcificante, representando o poder de dulcificacao relativo. Mede a doçura em relacao a sacarose (acucar de mesa), que tem um valor base de 100."
  },
  {
    question: "Por que equilibramos varios acucares no sorvete?",
    answer: "Diferentes acucares tem caracteristicas unicas de PAC e POD. Por exemplo, a dextrose oferece alto poder anticongelante com doçura moderada, enquanto a sacarose fornece corpo e doçura padrao. Mistura-los permite controlar a cremosidade sem tornar o produto excessivamente doce."
  },
  {
    question: "Qual e o percentual ideal de solidos para sorvete?",
    answer: "O percentual total de solidos normalmente varia entre 36% e 42%. Um percentual abaixo dessa faixa leva a texturas geladas, enquanto um percentual acima pode resultar em arenosidade ou sensacao pesada na boca."
  }
];
const howTo = [
  {
    name: "Defina a mistura base e a temperatura de servico",
    text: "Defina o peso da sua mistura liquida base e insira a temperatura de servico alvo na qual pretende servir o sorvete."
  },
  {
    name: "Insira as quantidades de acucar",
    text: "Ajuste os controles deslizantes para diferentes acucares como sacarose, dextrose, glicose, acucar invertido e trealose para construir sua receita."
  },
  {
    name: "Analise os valores de PAC e POD",
    text: "Compare os valores calculados de PAC e POD com os valores alvo recomendados para sua temperatura alvo."
  },
  {
    name: "Verifique a proporcao de solidos e a escavabilidade",
    text: "Garanta que o percentual total de solidos esteja dentro da zona otima e verifique o indicador de escavabilidade para prever a textura final."
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
  slug: 'calculadora-sorvete-pac-pod',
  title: 'Calculadora PAC POD de Sorvete',
  description: 'Calcule o poder anticongelante e o poder de dulcificacao para sorvete. Formule perfis precisos de acucares, percentual de solidos e temperaturas de servico.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: "Calculadora Criogenica de Sorvete",
    subtitle: "Painel de formulacao criogenica de precisao para gastronomia molecular",
    unitLabel: "Sistema de Unidades",
    metricUnit: "Metrico (gramas)",
    imperialUnit: "Imperial (oncas)",
    baseWeightLabel: "Peso da Mistura Base",
    targetTempLabel: "Temperatura de Servico",
    sucroseLabel: "Sacarose",
    dextroseLabel: "Dextrose",
    glucoseLabel: "Glicose DE40",
    invertedLabel: "Acucar Invertido",
    trehaloseLabel: "Trealose",
    pacLabel: "Poder Anticongelante (PAC)",
    podLabel: "Poder de Dulcificacao (POD)",
    solidsLabel: "Solidos Totais",
    targetPacLabel: "PAC Alvo",
    scoopabilityLabel: "Estado de Escavabilidade",
    stoneState: "Duro como Pedra",
    creamyState: "Cremosidade Perfeita",
    soupState: "Sopa Derretida",
    stoneDesc: "O poder anticongelante esta muito baixo para esta temperatura. A mistura congelara dura como pedra.",
    creamyDesc: "O equilibrio de PAC esta otimo. O sorvete sera escavavel e cremoso.",
    soupDesc: "O poder anticongelante esta muito alto. O sorvete derretera rapidamente e permanecera liquido.",
    gLabel: "g",
    ozLabel: "oz",
    cLabel: "°C",
    fLabel: "°F",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Principios Cientificos da Formulacao Criogenica de Sorvete e Controle de Fase de Transicao Vitrea',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O sorvete e uma emulsao termodinamica multifasica complexa composta por celulas de ar, globulos de gordura, cristais de gelo e uma fase serica concentrada nao congelada. Alcancar a cremosidade e escavabilidade perfeitas requer controle cuidadoso da depressao do ponto de congelamento da agua na mistura. A medida que a temperatura cai abaixo do congelamento, a agua comeca a cristalizar em gelo. A concentracao de solutos dissolvidos no serum liquido restante aumenta, o que reduz ainda mais seu ponto de congelamento. O equilibrio entre cristais de agua congelada e a fase de xarope nao congelado determina a dureza e suavidade do produto final.',
    },
    {
      type: 'title',
      text: 'Entendendo o PAC: Poder Anticongelante e Matematica da Depressao',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC, ou Potere Anticongelante, representa o poder anticongelante de um soluto em relacao a sacarose. A sacarose e designada como padrao de referencia com um valor de PAC de 100. O mecanismo e governado por propriedades coligativas, ou seja, a depressao do ponto de congelamento depende do numero de moleculas ativas dissolvidas na agua, e nao de sua massa. Monossacarideos como a dextrose (peso molecular 180 g/mol) fornecem aproximadamente o dobro de moleculas por grama em comparacao com dissacarideos como a sacarose (peso molecular 342 g/mol), resultando em um PAC de 190. Valores mais altos de PAC significam que mais agua permanece liquida em uma determinada temperatura, evitando que o sorvete congele endurecido.',
    },
    {
      type: 'title',
      text: 'Entendendo o POD: Poder de Dulcificacao e Equilibrio Sensorial',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD, ou Potere Dolcificante, e uma metrica que mede a doçura relativa em comparacao com a sacarose (valor base de 100). Ao formular sorvetes ou gelatos de alta qualidade, equilibrar a doçura e tao importante quanto a solidez estrutural. Se um formulador usar apenas sacarose para reduzir o ponto de congelamento (aumentar o PAC), o sorvete se tornara enjoativamente doce antes de atingir a maciez desejada. Para contornar essa limitacao, a gastronomia molecular utiliza acucares como dextrose (POD 70), trealose (POD 45) ou glicose atomizada DE40 (POD 40). Estes permitem configuracao personalizada da curva de congelamento sem sobrecarregar o paladar.',
    },
    {
      type: 'title',
      text: 'Banco de Dados Comparativo de Acucares Comuns para Formulacao Criogenica',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tipo de Acucar', 'PAC Relativo', 'POD Relativo', 'Teor de Solidos (%)', 'Utilidade Culinaria'],
      rows: [
        ['Sacarose', '100', '100', '100%', 'Corpo padrao, perfil doce limpo, linha de base padrao'],
        ['Dextrose', '190', '70', '100%', 'Deprime o ponto de congelamento, aumenta a maciez, reduz a doçura'],
        ['Glicose DE40', '90', '40', '95%', 'Adiciona corpo, previne recristalizacao, aumenta a viscosidade'],
        ['Acucar Invertido', '190', '130', '70%', 'Adiciona maciez, propriedades umectantes, realca sabores de frutas'],
        ['Trealose', '100', '45', '90%', 'Agente de corpo de baixa doçura, protege proteinas, final limpo'],
      ],
    },
    {
      type: 'title',
      text: 'Proporcao de Solidos Totais e Estabilidade Estrutural da Emulsao',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Os solidos totais compreendem todos os elementos nao agua na formulacao, incluindo gorduras, solidos de leite nao gordurosos, estabilizantes, emulsificantes e acucares. Uma mistura de sorvete ideal possui entre 36% e 42% de solidos totais. Se os solidos forem muito baixos, o alto teor de agua leva ao crescimento de grandes cristais de gelo e uma textura grossa. Se os solidos forem muito altos, a viscosidade aumenta excessivamente, resultando em uma sensacao pesada na boca e potencial arenosidade devido a cristalizacao da lactose.',
    },
    {
      type: 'title',
      text: 'Passos Praticos para o Sucesso na Formulacao Criogenica',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Determine a temperatura de servico alvo do seu balcao expositor. Gelatos sao tipicamente servidos a -12 graus Celsius, enquanto sorvetes industriais sao servidos mais frios a -18 graus Celsius.',
        'Calcule o PAC alvo usando a formula padrao de temperatura. Para -12 graus Celsius, o PAC alvo e de aproximadamente 216.',
        'Selecione uma mistura de acucares. Combine sacarose para doçura padrao, dextrose para deprimir o ponto de congelamento e glicose para melhorar corpo e textura.',
        'Verifique se os solidos totais estao dentro da faixa segura de 36% a 42% para garantir aeracao otima e um perfil de fusao suave na lingua.'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
