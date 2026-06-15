import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Curva de temperagem de chocolate e guia de indução";
const description = "Domine a temperagem de chocolate em casa. Calcule o peso necessário de chocolate de indução (callets) e siga as curvas de temperatura termodinâmicas passo a passo para chocolate amargo, ao leite e branco.";
const faq = [
  {
    "question": "O que é a temperagem do chocolate ?",
    "answer": "A temperagem é o processo de aquecimento, resfriamento e leve reaquecimento do chocolate para controlar a cristalização da manteiga de cacau. Isso força as moléculas de gordura a se cristalizarem na forma estável V (Beta), dando ao chocolate um acabamento brilhante, um quebrar limpo e evitando que derreta facilmente em temperatura ambiente."
  },
  {
    "question": "O que é o método de indução (seeding) ?",
    "answer": "O método de indução consiste em derreter uma parte do chocolate e depois adicionar pedaços sólidos de chocolate já temperado (sementes ou callets) durante o resfriamento. Estes cristais sólidos servem de modelo, orientando as moléculas fofas a se cristalizarem na estrutura estável da forma V sem a necessidade de mármore."
  },
  {
    "question": "Porque é que o meu chocolate tem manchas brancas (floração da gordura) ?",
    "answer": "Manchas ou listras brancas são chamadas de floração da gordura (fat bloom). Ocorre quando o chocolate não é temperado corretamente, permitindo que cristais instáveis migrem para a superfície e recristalizem. Continua seguro para consumo mas perde o brilho e a textura."
  },
  {
    "question": "Posso temperar chocolate que já apresenta manchas brancas (florecido) ?",
    "answer": "Sim. A floração é apenas uma separação física dos cristais, não uma deterioração química. Derreter o chocolate completamente à temperatura de fusão adequada (cerca de 45-50°C) destrói as estruturas instáveis, permitindo recomeçar o processo do zero."
  },
  {
    "question": "Como a humidade e a temperatura da cozinha afetam a temperagem ?",
    "answer": "O chocolate é extremamente sensível ao ambiente. A temperatura ideal da cozinha situa-se entre 18°C e 22°C com humidade inferior a 50%. Humidade elevada pode condensar água sobre o chocolate, causando fustigamento ou endurecendo o chocolate numa pasta inutilizável."
  },
  {
    "question": "Posso usar gotas de chocolate de supermercado comuns ?",
    "answer": "Gotas de chocolate comuns contêm frequentemente estabilizadores e menos manteiga de cacau para reter a forma no forno. Para temperagem profissional brilhante, recomenda-se cobertura de chocolate profissional com pelo menos 31% de manteiga de cacau."
  }
];

const howTo = [
  {
    "name": "Escolher tipo de chocolate",
    "text": "Selecione chocolate amargo, ao leite ou branco para carregar os limites de temperatura específicos."
  },
  {
    "name": "Inserir peso total",
    "text": "Introduza o peso total pretendido do chocolate temperado."
  },
  {
    "name": "Fase de derretimento",
    "text": "Derreta 75% do chocolate (conforme calculado) até à temperatura alvo (ex: 50C para o amargo) para quebrar todas as estruturas."
  },
  {
    "name": "Fase de resfriamento e indução",
    "text": "Resfrie o chocolate derretido mexendo e incorporando o restante 25% de caletas sólidas até atingir a temperatura limite."
  },
  {
    "name": "Fase de trabalho",
    "text": "Aqueça suavemente o chocolate até à temperatura de trabalho para derreter cristais instáveis antes de usar."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é a temperagem do chocolate ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A temperagem é o processo de aquecimento, resfriamento e leve reaquecimento do chocolate para controlar a cristalização da manteiga de cacau. Isso força as moléculas de gordura a se cristalizarem na forma estável V (Beta), dando ao chocolate um acabamento brilhante, um quebrar limpo e evitando que derreta facilmente em temperatura ambiente."
      }
    },
    {
      "@type": "Question",
      "name": "O que é o método de indução (seeding) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O método de indução consiste em derreter uma parte do chocolate e depois adicionar pedaços sólidos de chocolate já temperado (sementes ou callets) durante o resfriamento. Estes cristais sólidos servem de modelo, orientando as moléculas fofas a se cristalizarem na estrutura estável da forma V sem a necessidade de mármore."
      }
    },
    {
      "@type": "Question",
      "name": "Porque é que o meu chocolate tem manchas brancas (floração da gordura) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Manchas ou listras brancas são chamadas de floração da gordura (fat bloom). Ocorre quando o chocolate não é temperado corretamente, permitindo que cristais instáveis migrem para a superfície e recristalizem. Continua seguro para consumo mas perde o brilho e a textura."
      }
    },
    {
      "@type": "Question",
      "name": "Posso temperar chocolate que já apresenta manchas brancas (florecido) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. A floração é apenas uma separação física dos cristais, não uma deterioração química. Derreter o chocolate completamente à temperatura de fusão adequada (cerca de 45-50°C) destrói as estruturas instáveis, permitindo recomeçar o processo do zero."
      }
    },
    {
      "@type": "Question",
      "name": "Como a humidade e a temperatura da cozinha afetam a temperagem ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O chocolate é extremamente sensível ao ambiente. A temperatura ideal da cozinha situa-se entre 18°C e 22°C com humidade inferior a 50%. Humidade elevada pode condensar água sobre o chocolate, causando fustigamento ou endurecendo o chocolate numa pasta inutilizável."
      }
    },
    {
      "@type": "Question",
      "name": "Posso usar gotas de chocolate de supermercado comuns ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gotas de chocolate comuns contêm frequentemente estabilizadores e menos manteiga de cacau para reter a forma no forno. Para temperagem profissional brilhante, recomenda-se cobertura de chocolate profissional com pelo menos 31% de manteiga de cacau."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Curva de temperagem de chocolate e guia de indução",
  "description": "Domine a temperagem de chocolate em casa. Calcule o peso necessário de chocolate de indução (callets) e siga as curvas de temperatura termodinâmicas passo a passo para chocolate amargo, ao leite e branco.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Escolher tipo de chocolate",
      "text": "Selecione chocolate amargo, ao leite ou branco para carregar os limites de temperatura específicos."
    },
    {
      "@type": "HowToStep",
      "name": "Inserir peso total",
      "text": "Introduza o peso total pretendido do chocolate temperado."
    },
    {
      "@type": "HowToStep",
      "name": "Fase de derretimento",
      "text": "Derreta 75% do chocolate (conforme calculado) até à temperatura alvo (ex: 50C para o amargo) para quebrar todas as estruturas."
    },
    {
      "@type": "HowToStep",
      "name": "Fase de resfriamento e indução",
      "text": "Resfrie o chocolate derretido mexendo e incorporando o restante 25% de caletas sólidas até atingir a temperatura limite."
    },
    {
      "@type": "HowToStep",
      "name": "Fase de trabalho",
      "text": "Aqueça suavemente o chocolate até à temperatura de trabalho para derreter cristais instáveis antes de usar."
    }
  ]
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Curva de temperagem de chocolate e guia de indução",
  "description": "Domine a temperagem de chocolate em casa. Calcule o peso necessário de chocolate de indução (callets) e siga as curvas de temperatura termodinâmicas passo a passo para chocolate amargo, ao leite e branco.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
};

export const content: ToolLocaleContent = {
  slug: 'guia-curva-tempera-chocolate',
  title,
  description,
  faqTitle: 'Perguntas frequentes',
  ui: {
  "title": "Assistente de Temperagem de Chocolate",
  "subtitle": "Curvas termodinâmicas e calculadora de indução",
  "chocolateTypeLabel": "Tipo de Chocolate",
  "totalWeightLabel": "Peso total desejado",
  "meltLabel": "Fase de Derretimento",
  "coolLabel": "Fase de Resfriamento & Indução",
  "workLabel": "Fase de Trabalho",
  "meltTempLabel": "Temp. de Derretimento",
  "coolTempLabel": "Temp. de Resfriamento",
  "workTempLabel": "Temp. de Trabalho",
  "meltWeightLabel": "Peso a derreter",
  "seedWeightLabel": "Peso de indução (callets)",
  "molecularLabel": "Estado de cristalização molecular",
  "seedingTitle": "Calculadora do método de indução (25%)",
  "stepTitle": "Passos da temperagem",
  "darkOption": "Chocolate Amargo",
  "milkOption": "Chocolate ao Leite",
  "whiteOption": "Chocolate Branco",
  "resetButton": "Reiniciar guia",
  "warningOverheated": "Aviso: A temperatura está muito alta! Você pode queimar os sólidos do cacau ou desnaturar as proteínas do leite.",
  "warningUnderheated": "Aviso: A temperatura está muito baixa. Os cristais estáveis não se formaram ou o chocolate solidificará muito cedo.",
  "interactiveInfo": "Interaja com os passos ou arraste o termômetro para pré-visualizar os estados moleculares"
},
  faq,
  howTo,
  seo: [
  {
    "type": "title",
    "text": "Termodinâmica da cristalização da manteiga de cacau",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "A manteiga de cacau é polimórfica, podendo solidificar-se em seis formas cristalinas diferentes (I a VI). Cada forma tem estabilidade e ponto de fusão únicos. O objetivo da temperagem é maximizar os cristais de forma V (Beta) suprimindo as formas instáveis. Os cristais de forma V proporcionam brilho, textura firme e quebra limpa do chocolate profissional."
  },
  {
    "type": "stats",
    "columns": 4,
    "items": [
      {
        "value": "Forma V",
        "label": "Cristal Beta alvo",
        "icon": "mdi:hexagon-multiple-outline"
      },
      {
        "value": "25-30%",
        "label": "Rácio de indução",
        "icon": "mdi:scale"
      },
      {
        "value": "31-32°C",
        "label": "Temp. trabalho amargo",
        "icon": "mdi:thermometer"
      },
      {
        "value": "0.1-0.2C",
        "label": "Resfriamento por min",
        "icon": "mdi:trending-down"
      }
    ]
  },
  {
    "type": "title",
    "text": "As seis formas cristalinas da manteiga de cacau",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Compreender a termodinâmica de cada forma cristalina é essencial para evitar falhas. Abaixo descreve-se a estrutura das formas cristalinas :"
  },
  {
    "type": "table",
    "headers": [
      "Forma",
      "Estrutura",
      "Ponto de fusão",
      "Estabilidade e textura"
    ],
    "rows": [
      [
        "Forma I",
        "Gama (γ)",
        "17°C (62.6°F)",
        "Muito instável, mole, derrete na mão, sem quebra."
      ],
      [
        "Forma II",
        "Alfa (α)",
        "21°C (69.8°F)",
        "Instável, mole, quebradiço, derrete facilmente."
      ],
      [
        "Forma III",
        "Beta Prime (β')",
        "25.5°C (77.9°F)",
        "Instável, firme mas sem quebra limpa, baço."
      ],
      [
        "Forma IV",
        "Beta Prime (β')",
        "27.3°C (81.1°F)",
        "Instável, firme, derrete fácil, pouco brilho."
      ],
      [
        "Forma V",
        "Beta (β)",
        "33.8°C (92.8°F)",
        "Muito estável, excelente brilho, quebra limpa (Forma pretendida)."
      ],
      [
        "Forma VI",
        "Beta (β)",
        "36.3°C (97.3°F)",
        "Mais estável, duro, demora meses a formar-se, causa floração."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Como funciona o método de indução",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "A indução é um método altamente fiável para temperar chocolate sem mesa de mármore. Ao guardar 25% do peso total como chocolate sólido não derretido, introduz-se uma alta concentração de cristais Form V no chocolate quente, que guiam a cristalização uniforme."
  },
  {
    "type": "title",
    "text": "A ciência da curva de temperagem passo a passo",
    "level": 2
  },
  {
    "type": "list",
    "items": [
      "<strong>Fase 1: Derretimento (T > 40°C):</strong> O aquecimento derrete todas as estruturas cristalinas (I a VI). Cria-se um estado de gordura líquida amorfa ideal para começar.",
      "<strong>Fase 2: Resfriamento e indução (T ≈ 27°C):</strong> O resfriamento inicia a cristalização. Adicionar 25% de sementes sólidas traz cristais Form V que servem de modelo.",
      "<strong>Fase 3: Trabalho (T ≈ 31°C):</strong> Aquecer ligeiramente derrete cristais Form IV instáveis criados ao resfriar, restando apenas cristais estáveis Form V."
    ]
  },
  {
    "type": "title",
    "text": "Métodos práticos de temperagem em casa",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Obtenha resultados fantásticos em casa utilizando um dos seguintes métodos. Use a calculadora para pesar com precisão :"
  },
  {
    "type": "list",
    "items": [
      "<strong>Banhomaria :</strong> Coloque 75% do chocolate numa tigela sobre água fervente. Não deixe a tigela tocar na água nem entrar vapor no chocolate. Aqueça até derreter, retire do calor e adicione os 25% de indução. Mexa até arrefecer, depois aqueça ligeiramente no banho até à temperatura de trabalho.",
      "<strong>Microondas :</strong> Aqueça 75% do chocolate em intervalos de 15-30s a 50% de potência. Incorpore os 25% de caletas sólidas ao derreter e mexa. Reaqueça em frações de 5-10s para trabalhar.",
      "<strong>Sous vide :</strong> Coloque todo o chocolate num saco de vácuo. Coloque no banho à temperatura de fusão. Reduza a temperatura adicionando gelo e amasse o saco com frequência. Aqueça até à temperatura de trabalho."
    ]
  },
  {
    "type": "title",
    "text": "Como fazer o teste de temperagem",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Antes de moldar o chocolate, teste-o. Molhe a ponta de uma faca limpa no chocolate e deixe repousar a temperatura ambiente (18-22°C). Se temperado, endurecerá em 3-5 minutos com brilho e quebra nítidos. Se continuar mole, deve ser derretido e temperado novamente."
  },
  {
    "type": "title",
    "text": "Resolução de problemas de temperagem",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Se o chocolate não for temperado corretamente, a gordura separa-se e migra para a superfície criando um véu cinzento. Resolva derretendo o chocolate de novo e repetindo o processo."
  }
],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
