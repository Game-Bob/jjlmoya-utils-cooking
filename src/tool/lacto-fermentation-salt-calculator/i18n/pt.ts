import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Sal para Fermentação Láctea Guia Científica Bio Orgânica";
const description = "Calcule percentagens precisas de sal para salga seca e salmoura húmida. Equilibre populações bacterianas, previna bolores e domine a conservação de alimentos.";
const faq = [
  {
    question: "Por que a percentagem de sal é crítica na fermentação láctea?",
    answer: "O sal suprime agentes patogénicos e bolores através da pressão osmótica, enquanto permite que as bactérias do ácido láctico (LAB) prosperem, fermentem açúcares e produzam ácido láctico."
  },
  {
    question: "Qual é a diferença entre salga seca e salmoura húmida?",
    answer: "A salga seca usa a humidade natural do alimento para dissolver o sal (ideal para repolho ralado). A salmoura húmida adiciona água externa e sal para submergir completamente vegetais inteiros ou em pedaços."
  },
  {
    question: "Posso usar água da torneira clorada para fermentação?",
    answer: "O cloro pode inibir o crescimento bacteriano. É altamente recomendado usar água filtrada ou de nascente para resultados consistentes de fermentação."
  },
  {
    question: "A percentagem por peso é melhor que as medições por volume?",
    answer: "Sim. Diferentes tipos de sal (kosher, marinho, de mesa) têm tamanhos de cristal e densidades variáveis. Pesar o sal em gramas garante salinidade exata independentemente do tipo de sal utilizado."
  }
];

const howTo = [
  {
    name: "Escolha o modo de fermentação",
    text: "Selecione o modo Seco se estiver a usar os sucos naturais dos vegetais, ou o modo Húmido se adicionar água para cobrir os ingredientes."
  },
  {
    name: "Pese os ingredientes",
    text: "Insira o peso exato dos vegetais em gramas. Se usar salmoura húmida, insira também o peso da água."
  },
  {
    name: "Ajuste a salinidade alvo",
    text: "Deslize o controlo da percentagem de salinidade. Aponte para 2,0% a 3,5% para segurança geral e crescimento ideal de bactérias lácticas."
  },
  {
    name: "Meça o sal",
    text: "Use a balança digital para medir os gramas exatos de sal necessários. Adicione ao seu recipiente de fermentação."
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
  slug: 'calculadora-sal-fermentacao-lactea',
  title: 'Calculadora de Sal para Fermentação Láctea',
  description: 'Calcule percentagens precisas de sal para salga seca e salmoura húmida. Equilibre populações bacterianas, previna bolores e domine a conservação de alimentos.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: "Calculadora de Sal para Fermentação Láctea",
    subtitle: "Controlo preciso da salinidade para conservação bio orgânica",
    unitLabel: "Sistema de Medida",
    metricUnit: "Métrico (g / gramas)",
    imperialUnit: "Imperial (oz / onças)",
    modeLabel: "Modo de Fermentação",
    dryMode: "Salga Seca",
    wetMode: "Salmoura Húmida",
    vegWeightLabel: "Peso dos Vegetais",
    waterWeightLabel: "Peso da Água",
    salinityLabel: "Salinidade Alvo (%)",
    saltGramsLabel: "Sal Necessário",
    fineSaltLabel: "Sal Fino (colheres de chá)",
    kosherSaltLabel: "Sal Kosher (colheres de chá)",
    statusDanger: "Zona de Perigo",
    statusDangerDesc: "Uma salinidade inferior a 2,0% é insuficiente para bloquear agentes patogénicos e bolores. Aumente a salinidade para garantir a segurança.",
    statusOptimal: "Zona LAB Ótima",
    statusOptimalDesc: "A salinidade entre 2,0% e 3,5% é ideal para que as bactérias do ácido láctico (LAB) dominem e fermentem em segurança.",
    statusInhibited: "Zona Inibida",
    statusInhibitedDesc: "A salinidade acima de 3,5% retarda ou interrompe a fermentação. Útil para conservação a longo prazo, mas atrasa a atividade bacteriana.",
    petriTitle: "Simulação Microbiológica",
    scaleTitle: "Ecrã da Balança Digital",
    disclaimer: "Nota: Pesar o sal usando uma balança digital é fortemente recomendado em vez de medições volumétricas.",
    kosherLabel: "Sal Kosher",
    fineLabel: "Sal Fino",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Guia Definitivo da Química da Fermentação Láctea e Controlo da Salinidade',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A fermentação láctea é um processo bioquímico dinâmico impulsionado por bactérias do ácido láctico (LAB) para preservar vegetais e frutas. Todo o mecanismo depende da criação de um ambiente seletivo onde as bactérias benéficas prosperam enquanto os organismos de deterioração, bolores e agentes patogénicos são suprimidos. O controlo da salinidade é a alavanca mais crítica para alcançar esta seletividade biológica.',
    },
    {
      type: 'title',
      text: 'A Ação Bioquímica do Sal na Conservação',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando o sal é introduzido em vegetais crus, atua através de um processo físico conhecido como <strong>pressão osmótica</strong>. A alta concentração de sal fora das células vegetais extrai água e açúcares dissolvidos dos tecidos vegetais através da osmose (plasmólise). Isto cria uma salmoura rica em nutrientes que serve como combustível perfeito para as bactérias do ácido láctico. Simultaneamente, a pressão osmótica desidrata e lisa as membranas celulares de bolores indesejados, leveduras e bactérias patogénicas como <em>Escherichia coli</em> ou <em>Clostridium botulinum</em>, que não toleram níveis elevados de salinidade.',
    },
    {
      type: 'title',
      text: 'Sucessão Microbiológica: Como as LAB Colonizam os Fermentos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A fermentação láctea não é realizada por uma única espécie bacteriana, mas por uma sucessão de diferentes estirpes que dominam à medida que a acidez aumenta. Num fermento vegetal típico, o ciclo ocorre em três fases distintas:',
    },
    {
      type: 'list',
      items: [
        '<strong>Fase 1 - Leuconostoc mesenteroides:</strong> Esta bactéria heterofermentativa inicia a fermentação. É altamente ativa no início, produzindo ácido láctico, ácido acético, dióxido de carbono (que ajuda a criar uma atmosfera anaeróbica) e etanol. Abaixa rapidamente o pH, preparando o meio para as espécies subsequentes.',
        '<strong>Fase 2 - Lactobacillus plantarum e Lactobacillus brevis:</strong> À medida que o pH desce abaixo de 5,0, <em>L. mesenteroides</em> morre e bactérias homofermentativas ácido-tolerantes como <em>L. plantarum</em> assumem o controlo. Fermentam os açúcares simples restantes exclusivamente em ácido láctico, baixando o pH rapidamente.',
        '<strong>Fase 3 - Pediococcus pentosaceus e outros:</strong> Em fermentações de longa duração, estas bactérias altamente ácido-tolerantes continuam a produzir ácido até os açúcares estarem completamente esgotados ou o pH atingir cerca de 3,5 a 3,8, estabilizando o ambiente indefinidamente.'
      ],
    },
    {
      type: 'title',
      text: 'Protegendo a Textura Vegetal: A Conexão da Pectina',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um problema comum na fermentação caseira é o amolecimento. As células vegetais são mantidas unidas por um polissacarídeo estrutural chamado pectina. Os microrganismos de deterioração produzem enzimas chamadas <strong>pectinases</strong>, que degradam a pectina e rompem as paredes vegetais, causando amolecimento. Manter um nível de salinidade acima de 2,0% inibe diretamente a atividade destas enzimas pectinásicas. Além disso, os iões de cálcio presentes no sal marinho não refinado ou adicionados como cloreto de cálcio podem fazer ligações cruzadas com as moléculas de pectina, formando pectato de cálcio, que mantém pickles e chucrute crocantes.',
    },
    {
      type: 'title',
      text: 'Matemática da Salga Seca vs. Salmoura Húmida',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Compreender a fórmula para calcular o sal é fundamental. Para a salga seca (comum em vegetais ralados como repolho para chucrute), a percentagem de sal é calculada apenas com base no peso do vegetal. Para a salmoura húmida (usada para vegetais inteiros ou em pedaços grandes como pepinos ou cenouras), a percentagem de sal deve ser calculada com base no <strong>peso total dos vegetais e da água adicionada</strong>. Calcular o sal apenas com base no peso da água é um erro comum que dilui a salinidade final, pois a água dentro dos vegetais acaba por diluir a salmoura.',
    },
    {
      type: 'table',
      headers: ['Intervalo de Salinidade', 'Estado Microbiológico', 'Usos Típicos', 'Nível de Segurança'],
      rows: [
        ['< 2,0%', 'Risco de Patogénicos / Perigo de Bolor', 'Não recomendado', 'Baixo'],
        ['2,0% - 2,5%', 'Floração Ótima de Bactérias do Ácido Láctico', 'Chucrute, Kimchi, Pepinos em conserva', 'Alto'],
        ['2,5% - 3,5%', 'Fermentação lenta / Alta retenção de textura', 'Molhos picantes, alho, raízes', 'Alto'],
        ['> 3,5%', 'Inibição bacteriana / Apenas conservação', 'Azeitonas, pimentos envelhecidos, alta temperatura', 'Seguro mas inativo'],
      ],
    },
    {
      type: 'title',
      text: 'Porque Pesar o Sal é Melhor que Medir por Volume',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Medir o sal por volume (colheres de sopa ou de chá) é notoriamente impreciso. O sal de mesa é fino e compacto, uma colher de chá pode pesar até 6 gramas. Por outro lado, o sal kosher tem cristais grandes e escamosos com bolsas de ar, pesando apenas 4 gramas por colher de chá. O sal marinho grosso situa-se algures no meio. Usar medições por volume pode facilmente fazer com que um fermento fique perigosamente sub-salgado ou completamente paralisado por excesso de sal. Pesadar os ingredientes em gramas numa balança digital garante resultados consistentes, seguros e repetíveis.',
    },
    {
      type: 'title',
      text: 'Resolução de Problemas e Boas Práticas na Fermentação Láctea',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para garantir uma fermentação bem-sucedida, siga sempre estas regras: Mantenha todos os vegetais completamente submersos abaixo da salmoura para evitar o crescimento de bolores aeróbicos. Use recipientes e pesos limpos. Fermente a uma temperatura ambiente fresca (18°C a 22°C) para evitar que as bactérias da fase 1 sejam suplantadas. Se formar um filme branco na superfície, verifique se é levedura Kahm (uma levedura selvagem inofensiva que se forma devido à exposição ao oxigénio) ou bolor. O bolor é difuso e colorido; se presente, o fermento deve ser descartado. A levedura Kahm pode ser removida, embora possa afetar o sabor.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
