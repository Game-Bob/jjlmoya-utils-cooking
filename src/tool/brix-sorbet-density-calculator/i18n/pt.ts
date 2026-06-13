import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculadora de Brix para Sorbet: Proporção Açúcar Fruta & Controlo do Ponto de Congelação para Cremosidade Perfeita';
const description = 'Acerte o equilíbrio exato de açúcar, puré de fruta e água para um sorbet cremoso sempre. Calcule o Brix, a depressão do ponto de congelação PAC e corrija texturas geladas ou líquidas com medições precisas.';

const faq = [
  {
    question: 'O que é o Brix e porque é importante no sorbet?',
    answer: 'O Brix (°Bx) mede a percentagem de sólidos dissolvidos  -  principalmente açúcares  -  numa solução líquida. Nos sorbets, um nível de Brix entre 25% e 30% (idealmente 28%) é essencial para a textura correta. Abaixo de 25%, o sorbet congela num bloco duro e gelado porque não há açúcar suficiente para interferir na formação de cristais de gelo. Acima de 30%, o ponto de congelação desce tanto que o sorbet fica líquido e nunca solidifica completamente num congelador convencional.',
  },
  {
    question: 'Como calculo a quantidade certa de açúcar para a minha receita de sorbet?',
    answer: 'Comece por pesar o seu puré de fruta e medir o seu Brix natural com um refratómetro (ou selecionando um valor predefinido). Introduza estes valores na calculadora juntamente com o tamanho de lote desejado e o Brix alvo (padrão 28%). A calculadora determina quanto de sacarose e água precisa de adicionar para levar a mistura total ao intervalo ideal de 25-30% Brix. Também tem em conta a depressão do ponto de congelação (PAC) para que possa substituir por dextrose se o sorbet ficaria demasiado duro.',
  },
  {
    question: 'Porque é que o meu sorbet caseiro fica sempre demasiado duro ou gelado?',
    answer: 'Um sorbet gelado e duro como pedra significa quase sempre que a concentração total de açúcar é demasiado baixa (abaixo de 25% Brix). A água da fruta congela em grandes cristais de gelo em vez de permanecer parcialmente líquida. A solução: adicione mais sacarose para aumentar o Brix, ou substitua parte da sacarose por dextrose  -  a dextrose tem quase o dobro do poder anticongelante (PAC 190 vs 100) e é 30% menos doce, permitindo baixar o ponto de congelação sem tornar o sorbet enjoativo.',
  },
  {
    question: 'Qual é a diferença entre usar sacarose e dextrose no sorbet?',
    answer: 'A sacarose (açúcar de mesa) é o adoçante padrão com um PAC de 100 e POD de 100. A dextrose (glucose em pó) tem um PAC de 190  -  quase o dobro da depressão do ponto de congelação  -  mas apenas 70% da doçura (POD 70). Isto significa que a dextrose amacia o sorbet de forma muito mais eficaz por grama sem o tornar excessivamente doce. Use dextrose quando a sua fruta já é naturalmente doce (ex.: manga, banana) e precisa de mais poder anticongelante sem adicionar mais doçura.',
  },
  {
    question: 'Como é que o açúcar natural da fruta afeta o cálculo?',
    answer: 'Diferentes frutas têm níveis de açúcar natural muito variáveis: limões e limas rondam 2% Brix, morangos cerca de 8%, mangas e uvas 14-18%, e bananas até 22%. A calculadora tem em conta o Brix natural da sua fruta para que não ultrapasse nem fique aquém da concentração total de açúcar. É por isso que se recomenda usar um refratómetro para medir a sua fruta real  -  a variação sazonal pode alterar o Brix em 3-4 pontos.',
  },
];

const howTo = [
  {
    name: 'Pese o seu puré de fruta',
    text: 'Meça o peso exato do seu puré ou sumo de fruta em gramas.',
  },
  {
    name: 'Estime ou meça o Brix da fruta',
    text: 'Use um refratómetro para obter o Brix exato da sua fruta, ou selecione um valor típico da nossa base de dados (ex.: Manga: 14%, Morango: 8%).',
  },
  {
    name: 'Introduza os pesos na calculadora',
    text: 'Introduza o peso da fruta, o Brix da fruta e o nível de Brix alvo (padrão 28%).',
  },
  {
    name: 'Reveja as adições de xarope recomendadas',
    text: 'A calculadora mostrará imediatamente o açúcar e a água recomendados a adicionar para atingir o alvo de 28% Brix.',
  },
  {
    name: 'Ajuste os tipos de açúcar se necessário',
    text: 'Se a mistura não tiver depressão do ponto de congelação suficiente, introduza dextrose em vez de sacarose.',
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
  slug: 'calculadora-densidade-brix-sorbet',
  title: 'Calculadora de Densidade Brix para Sorbet',
  description: 'Acerte o equilíbrio exato de açúcar, puré de fruta e água para um sorbet cremoso sempre. Corrija texturas geladas ou líquidas com cálculos precisos de Brix e PAC.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    fruitWeightLabel: 'Peso do Puré de Fruta',
    fruitBrixLabel: 'Brix da Fruta',
    sugarWeightLabel: 'Peso de Sacarose (Açúcar)',
    dextroseWeightLabel: 'Peso de Dextrose',
    waterWeightLabel: 'Peso de Água Adicionada',
    targetBrixLabel: 'Brix Alvo',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    brixUnit: '% Bx',
    totalBrixLabel: 'Brix Total da Mistura',
    totalWeightLabel: 'Peso Total do Lote',
    totalPACLabel: 'Depressão do Ponto de Congelação (PAC)',
    statusLabel: 'Perfil de Textura do Sorbet',
    statusSoft: 'Demasiado Mole / Líquido',
    statusOptimal: 'Cremosidade Ideal',
    statusHard: 'Demasiado Duro / Gelado',
    recommendedTitle: 'Recomendação de Xarope (50% Fruta)',
    recommendedSugarLabel: 'Sacarose Necessária',
    recommendedWaterLabel: 'Água Necessária',
    fruitPresetLabel: 'Predefinição de Fruta',
    presetCustom: 'Fruta Personalizada',
    presetLemon: 'Limão / Lima (2% Bx)',
    presetStrawberry: 'Morango / Framboesa (8% Bx)',
    presetOrange: 'Laranja / Pêssego (10% Bx)',
    presetMango: 'Manga / Uva / Cereja (14% Bx)',
    presetBanana: 'Banana (21% Bx)',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'A Ciência do Equilíbrio do Sorbet: Brix, PAC e Sólidos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fazer um sorbet profissional é um exercício de ciência alimentar. Ao contrário do gelado, que depende das gorduras e proteínas do leite para criar estrutura e maciez, o sorbet depende inteiramente de açúcares dissolvidos e estabilizadores. A concentração destes açúcares dissolvidos mede-se em graus Brix (°Bx). Uma mistura de sorbet perfeita requer uma concentração de açúcar de 25% a 30% Brix. Se o teor de açúcar for demasiado baixo, a água congela em cristais de gelo grandes e agulhados, produzindo um bloco granuloso e duro como pedra. Se for demasiado alto, o ponto de congelação é demasiado deprimido e o sorbet permanece um xarope semilíquido nos congeladores domésticos ou comerciais típicos.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '28%',
          label: 'Brix Alvo Ideal',
          icon: 'mdi:target',
        },
        {
          value: '25-30%',
          label: 'Intervalo Seguro de Brix',
          icon: 'mdi:gauge',
        },
        {
          value: '≈50%',
          label: 'Proporção Ideal de Fruta',
          icon: 'mdi:fruit-grapes',
        },
        {
          value: 'PAC 100/190',
          label: 'Sacarose / Dextrose',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: 'Compreender o PAC: O Fator de Depressão do Ponto de Congelação',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O PAC (Potere Anticongelante, ou Poder Anticongelante) é uma métrica usada pelos pasteleiros para quantificar o quanto um ingrediente baixa o ponto de congelação da água. A sacarose, ou açúcar de mesa comum, é a referência de base com um valor PAC de 100. No entanto, a sacarose é muito doce. Se precisar de adicionar mais sólidos ou aumentar a capacidade anticongelante sem tornar o sorbet excessivamente doce, pode substituir uma parte da sacarose por dextrose. A dextrose tem um PAC de 190, tornando-a quase duas vezes mais eficaz do que a sacarose na prevenção da formação de cristais de gelo, sendo apenas 70% tão doce.',
    },
    {
      type: 'title',
      text: 'Sacarose vs Dextrose: Escolher o Açúcar Certo para Sorbet',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sacarose (Açúcar de Mesa)',
          icon: 'mdi:cube-outline',
          description: 'O adoçante padrão e referência para todos os cálculos de PAC e POD. Proporciona doçura limpa e corpo.',
          points: [
            'Valor PAC: 100 (referência)',
            'Valor POD: 100 (doçura total)',
            'Ideal para: função de adoçante principal',
            'Adiciona corpo e textura padrão',
          ],
        },
        {
          title: 'Dextrose (Glucose em Pó)',
          icon: 'mdi:grain',
          description: 'Um monossacarídeo com quase o dobro do poder de depressão do ponto de congelação e significativamente menos doçura.',
          highlight: true,
          points: [
            'Valor PAC: 190 (quase 2� -  sacarose)',
            'Valor POD: 70 (30% menos doce)',
            'Ideal para: amaciar sorbets duros',
            'Ideal quando a fruta já é muito doce',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tabela de Referência de Valores Típicos de Brix por Fruta',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tipo de Fruta', 'Valor Médio de Brix', 'Teor de Água', 'Nível de Acidez'],
      rows: [
        ['Limão / Lima', '2% - 4% Bx', 'Muito Alto', 'Extremamente Alto'],
        ['Morango / Framboesa', '7% - 9% Bx', 'Alto', 'Moderado'],
        ['Laranja / Pêssego', '9% - 11% Bx', 'Médio-Alto', 'Baixo-Moderado'],
        ['Maçã / Pera', '11% - 13% Bx', 'Médio', 'Baixo'],
        ['Manga / Uva / Cereja', '14% - 18% Bx', 'Médio-Baixo', 'Muito Baixo'],
        ['Banana', '20% - 22% Bx', 'Baixo', 'Irrelevante'],
      ],
    },
    {
      type: 'title',
      text: 'Como Calibrar a Sua Mistura de Sorbet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para equilibrar um sorbet, meça primeiro o peso e a concentração de açúcar do seu puré de fruta. É altamente recomendado usar um refratómetro para maior precisão, já que a doçura da fruta varia consoante a época e o grau de maturação. Se não tiver um refratómetro, pode estimar usando a tabela acima. Assim que tiver estes valores, introduza-os na nossa calculadora para determinar a quantidade exata de xarope simples (água e açúcar) necessária para levar a mistura total ao Brix alvo de 28%. Para uma textura ideal, procure uma proporção de fruta de cerca de 50% do peso total do lote.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Porque É Que o Meu Sorbet Fica Gelado ou Demasiado Duro?',
      html: 'Um sorbet que congela como pedra tem quase sempre <strong>açúcar a menos</strong> (Brix abaixo de 25%). A água do puré de fruta cristaliza em grandes lascas de gelo irregulares. Corrija isto adicionando mais sacarose para aumentar o Brix total, ou substitua parte da sacarose por dextrose para aumentar o PAC sem excesso de doçura. Verifique também se a proporção de fruta não é demasiado alta  -  exceder 60% de fruta deixa espaço insuficiente para os sólidos de açúcar.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Porque É Que o Meu Sorbet Fica Líquido ou Não Congela?',
      html: 'Um sorbet que permanece mole ou líquido tem <strong>açúcar a mais</strong> (Brix acima de 30%). O ponto de congelação foi tão deprimido que o seu congelador não consegue solidificar a mistura. Reduza a quantidade total de açúcar, ou se a fruta for naturalmente muito doce (ex.: banana ou manga), use proporcionalmente menos sacarose adicionada. Verifique a temperatura alvo: os congeladores domésticos funcionam a −18°C; um PAC apropriado para serviço a −12°C será demasiado alto para congeladores convencionais.',
    },
    {
      type: 'tip',
      title: 'Meça o Brix com Precisão Usando um Refratómetro',
      html: 'Um refratómetro digital ou ótico é o melhor investimento para sorbets consistentes. A maturação da fruta varia drasticamente consoante a época, variedade e origem  -  um morango em junho pode medir 6°Bx enquanto a mesma variedade em agosto atinge 10°Bx. Coloque uma gota de puré no prisma, leia o valor e introduza-o na calculadora. Adivinhar com base apenas em tabelas produzirá resultados inconsistentes.',
    },
    {
      type: 'title',
      text: 'Passo a Passo: Como Usar Esta Calculadora',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pese o seu puré de fruta</strong>  -  Use uma balança digital para medir o peso exato do seu puré de fruta coado ou sumo em gramas.',
        '<strong>Meça ou estime o Brix da fruta</strong>  -  Use um refratómetro para precisão, ou selecione uma predefinição do menu (Limão 2%, Morango 8%, Manga 14%, etc.).',
        '<strong>Defina o seu Brix alvo</strong>  -  O padrão é 28%, o ponto ideal. Ajuste entre 25% e 30% conforme a sua preferência.',
        '<strong>Reveja a recomendação de xarope</strong>  -  A calculadora mostra instantaneamente quanto de sacarose e água adicionar para atingir o seu alvo.',
        '<strong>Verifique o indicador de textura</strong>  -  O medidor PAC indica se o sorbet ficará demasiado duro, com cremosidade ideal, ou demasiado mole à temperatura do seu congelador.',
        '<strong>Ajuste com dextrose se necessário</strong>  -  Se o sorbet estiver previsto como duro mas já suficientemente doce, substitua parte da sacarose por dextrose para aumentar o PAC sem adicionar doçura.',
      ],
    },
    {
      type: 'title',
      text: 'Termos Essenciais para Fazer Sorbet',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Brix (°Bx)',
          definition: 'A percentagem de sólidos dissolvidos (principalmente açúcares) numa solução líquida. Nos sorbets, 25-30°Bx é o intervalo alvo para textura e cremosidade ideais.',
        },
        {
          term: 'PAC (Potere Anticongelante)',
          definition: 'Poder anticongelante  -  uma medida de quanto um ingrediente baixa o ponto de congelação da água. A sacarose tem um PAC de referência de 100; a dextrose é 190.',
        },
        {
          term: 'POD (Potere Dolcificante)',
          definition: 'Poder adoçante relativo à sacarose (referência 100). A dextrose tem um POD de 70, o que significa que é 30% menos doce grama por grama do que o açúcar de mesa.',
        },
        {
          term: 'Dextrose',
          definition: 'Um monossacarídeo (glucose em pó) usado na formulação de sorbet para baixar o ponto de congelação sem adicionar doçura excessiva. PAC 190, POD 70.',
        },
        {
          term: 'Refratómetro',
          definition: 'Um instrumento ótico ou digital que mede o valor Brix de um líquido lendo como a luz se curva (refrata) através da amostra. Essencial para a consistência do sorbet.',
        },
        {
          term: 'Xarope Simples',
          definition: 'Uma mistura 50/50 em peso de sacarose e água, aquecida até dissolver. O veículo padrão para adicionar açúcar às bases de sorbet.',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
