import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "巧克力调温曲线与播种法指南";
const description = "在家掌握巧克力调温技术。计算所需的调温巧克力豆（播种）重量，并遵循黑巧克力、牛奶巧克力和白巧克力的一步步热力学温度曲线。";
const faq = [
  {
    "question": "什么是巧克力调温？",
    "answer": "巧克力调温是通过加热、冷却和温和重新加热巧克力的过程，以控制可可脂的结晶。这会促使脂肪分子结晶成稳定的 V 型（Beta）结晶，使巧克力具有光泽、清脆的质地，并防止其在室温下轻易融化。"
  },
  {
    "question": "什么是播种法？",
    "answer": "播种法（seeding）是指先融化一部分巧克力，然后在冷却阶段加入未融化的、已经调温好的固体巧克力碎（种子或巧克力豆）。这些固体结晶起到了模板的作用，引导融化的脂肪分子凝固成所需的 V 型结晶结构，而无需使用大理石台面。"
  },
  {
    "question": "为什么我的巧克力会出现白斑（起霜）？",
    "answer": "白色的条纹或斑点被称为起霜（fat bloom）。当巧克力未正确调温时，不稳定的可可脂结晶会浮出表面并重新结晶，从而导致起霜。起霜的巧克力仍可安全食用，但失去了原有的质感和光泽。"
  },
  {
    "question": "我可以对已经起霜的巧克力进行调温吗？",
    "answer": "可以。起霜纯粹是脂肪或糖晶体的物理分离，而不是化学变质。将起霜的巧克力完全加热至合适的融化温度（约 45-50°C）可以打破所有不稳定的结晶结构，让您能够重新开始调温过程。"
  },
  {
    "question": "厨房的湿度和温度如何影响调温？",
    "answer": "巧克力对环境极为敏感。理想的调温厨房温度为 18°C 至 22°C，相对湿度应低于 50%。高湿度会导致水分在巧克力上凝结，导致糖霜或使巧克力凝固成粘稠的、无法操作的糊状物。"
  },
  {
    "question": "我可以使用超市买的普通巧克力豆进行调温吗？",
    "answer": "普通超市售卖的巧克力豆通常含有添加的稳定剂和较少的可可脂，以便在烘焙时保持形状。为了获得成功且光亮的调温效果，强烈建议使用可可脂含量至少为 31% 的专业调温巧克力（couverture）。"
  }
];

const howTo = [
  {
    "name": "选择巧克力类型",
    "text": "选择黑巧克力、牛奶巧克力或白巧克力以加载特定的温度阈值。"
  },
  {
    "name": "输入总重量",
    "text": "输入您想要准备的调温巧克力的目标总重量。"
  },
  {
    "name": "融化阶段",
    "text": "将 75% 的巧克力加热融化至目标温度（例如黑巧克力为 50°C），以打破所有现有的结晶结构。"
  },
  {
    "name": "冷却与播种阶段",
    "text": "在搅拌的同时冷却融化的巧克力，并逐步加入剩余 25% 的固体巧克力豆，直至达到冷却温度。"
  },
  {
    "name": "操作阶段",
    "text": "将巧克力轻轻加热至操作温度，以在开始使用前融化任何不稳定的结晶。"
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "什么是巧克力调温？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "巧克力调温是通过加热、冷却和温和重新加热巧克力的过程，以控制可可脂的结晶。这会促使脂肪分子结晶成稳定的 V 型（Beta）结晶，使巧克力具有光泽、清脆的质地，并防止其在室温下轻易融化。"
      }
    },
    {
      "@type": "Question",
      "name": "什么是播种法？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "播种法（seeding）是指先融化一部分巧克力，然后在冷却阶段加入未融化的、已经调温好的固体巧克力碎（种子或巧克力豆）。这些固体结晶起到了模板的作用，引导融化的脂肪分子凝固成所需的 V 型结晶结构，而无需使用大理石台面。"
      }
    },
    {
      "@type": "Question",
      "name": "为什么我的巧克力会出现白斑（起霜）？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "白色的条纹或斑点被称为起霜（fat bloom）。当巧克力未正确调温时，不稳定的可可脂结晶会浮出表面并重新结晶，从而导致起霜。起霜的巧克力仍可安全食用，但失去了原有的质感和光泽。"
      }
    },
    {
      "@type": "Question",
      "name": "我可以对已经起霜的巧克力进行调温吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "可以。起霜纯粹是脂肪或糖晶体的物理分离，而不是化学变质。将起霜的巧克力完全加热至合适的融化温度（约 45-50°C）可以打破所有不稳定的结晶结构，让您能够重新开始调温过程。"
      }
    },
    {
      "@type": "Question",
      "name": "厨房的湿度和温度如何影响调温？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "巧克力对环境极为敏感。理想的调温厨房温度为 18°C 至 22°C，相对湿度应低于 50%。高湿度会导致水分在巧克力上凝结，导致糖霜或使巧克力凝固成粘稠的、无法操作的糊状物。"
      }
    },
    {
      "@type": "Question",
      "name": "我可以使用超市买的普通巧克力豆进行调温吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "普通超市售卖的巧克力豆通常含有添加的稳定剂和较少的可可脂，以便在烘焙时保持形状。为了获得成功且光亮的调温效果，强烈建议使用可可脂含量至少为 31% 的专业调温巧克力（couverture）。"
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "巧克力调温曲线与播种法指南",
  "description": "在家掌握巧克力调温技术。计算所需的调温巧克力豆（播种）重量，并遵循黑巧克力、牛奶巧克力和白巧克力的一步步热力学温度曲线。",
  "step": [
    {
      "@type": "HowToStep",
      "name": "选择巧克力类型",
      "text": "选择黑巧克力、牛奶巧克力或白巧克力以加载特定的温度阈值。"
    },
    {
      "@type": "HowToStep",
      "name": "输入总重量",
      "text": "输入您想要准备的调温巧克力的目标总重量。"
    },
    {
      "@type": "HowToStep",
      "name": "融化阶段",
      "text": "将 75% 的巧克力加热融化至目标温度（例如黑巧克力为 50°C），以打破所有现有的结晶结构。"
    },
    {
      "@type": "HowToStep",
      "name": "冷却与播种阶段",
      "text": "在搅拌的同时冷却融化的巧克力，并逐步加入剩余 25% 的固体巧克力豆，直至达到冷却温度。"
    },
    {
      "@type": "HowToStep",
      "name": "操作阶段",
      "text": "将巧克力轻轻加热至操作温度，以在开始使用前融化任何不稳定的结晶。"
    }
  ]
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "巧克力调温曲线与播种法指南",
  "description": "在家掌握巧克力调温技术。计算所需的调温巧克力豆（播种）重量，并遵循黑巧克力、牛奶巧克力和白巧克力的一步步热力学温度曲线。",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
};

export const content: ToolLocaleContent = {
  slug: 'chocolate-tempering-curve-guide',
  title,
  description,
  faqTitle: '常见问题解答',
  ui: {
  "title": "巧克力调温助手",
  "subtitle": "热力学曲线与播种法计算器",
  "chocolateTypeLabel": "巧克力类型",
  "totalWeightLabel": "目标总重量",
  "meltLabel": "融化阶段",
  "coolLabel": "冷却与播种阶段",
  "workLabel": "操作阶段",
  "meltTempLabel": "融化温度",
  "coolTempLabel": "冷却温度",
  "workTempLabel": "操作温度",
  "meltWeightLabel": "需融化重量",
  "seedWeightLabel": "播种重量（巧克力豆）",
  "molecularLabel": "分子结晶状态",
  "seedingTitle": "播种法（25% 比例）计算器",
  "stepTitle": "调温步骤",
  "darkOption": "黑巧克力",
  "milkOption": "牛奶巧克力",
  "whiteOption": "白巧克力",
  "resetButton": "重置指南",
  "warningOverheated": "警告：温度过高！可能会烧焦可可固形物或使牛奶蛋白变性。",
  "warningUnderheated": "警告：温度过低。未形成稳定的结晶，或巧克力会过早凝固。",
  "interactiveInfo": "点击步骤或拖动温计以预览分子结晶状态"
},
  faq,
  howTo,
  seo: [
  {
    "type": "title",
    "text": "可可脂结晶的热力学机制",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "可可脂是多晶型的，这意味着它可以凝固成六种不同的结晶形式（I 至 VI）。每种形式都有独特的熔点和稳定性。巧克力调温的目的在于最大化 V 型（Beta）结晶，同时抑制不稳定的 I 至 IV 型结晶。V 型结晶带来了专业巧克力所特有的光泽表面、坚实手感和清脆的断裂感。"
  },
  {
    "type": "stats",
    "columns": 4,
    "items": [
      {
        "value": "V 型结晶",
        "label": "目标 Beta 结晶",
        "icon": "mdi:hexagon-multiple-outline"
      },
      {
        "value": "25-30%",
        "label": "播种比例",
        "icon": "mdi:scale"
      },
      {
        "value": "31-32°C",
        "label": "黑巧克力操作温度",
        "icon": "mdi:thermometer"
      },
      {
        "value": "0.1-0.2C",
        "label": "每分钟冷却率",
        "icon": "mdi:trending-down"
      }
    ]
  },
  {
    "type": "title",
    "text": "可可脂的六种同质多晶结晶形式",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "了解每种结晶形式的热力学性质对于避免调温失败至关重要。以下是可可脂晶体形式的科学性质 :"
  },
  {
    "type": "table",
    "headers": [
      "晶体形式",
      "结构名称",
      "熔点",
      "稳定性与质地"
    ],
    "rows": [
      [
        "I 型",
        "Gamma (γ)",
        "17°C (62.6°F)",
        "极不稳定，质地柔软，在手中即刻融化，无断裂声。"
      ],
      [
        "II 型",
        "Alpha (α)",
        "21°C (69.8°F)",
        "不稳定，质地柔软，易碎结构，极易融化。"
      ],
      [
        "III 型",
        "Beta Prime (β')",
        "25.5°C (77.9°F)",
        "不稳定，较结实但无清脆感，表面黯淡。"
      ],
      [
        "IV 型",
        "Beta Prime (β')",
        "27.3°C (81.1°F)",
        "不稳定，结实，较易融化，光泽度差。"
      ],
      [
        "V 型",
        "Beta (β)",
        "33.8°C (92.8°F)",
        "高度稳定，非常光亮，清脆折断（理想形式）。"
      ],
      [
        "VI 型",
        "Beta (β)",
        "36.3°C (97.3°F)",
        "最稳定，硬度高，需数月形成，导致起霜。"
      ]
    ]
  },
  {
    "type": "title",
    "text": "播种法的基本原理",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "播种法是在不使用大理石台面的情况下调温巧克力的极佳方法。通过保留 25% 的巧克力作为未融化的固体，我们将高浓度的稳定 V 型晶体直接引入温热的巧克力中，引导其结晶。"
  },
  {
    "type": "title",
    "text": "一步步调温曲线的科学原理",
    "level": 2
  },
  {
    "type": "list",
    "items": [
      "<strong>融化阶段（T > 40°C）：</strong> 加热使巧克力完全融化所有的晶体结构（I 至 VI），生成无定形的液态脂肪。",
      "<strong>冷却与播种（T ≈ 27°C）：</strong> 冷却启动了结晶。添加 25% 的固体巧克力豆引入了稳定的 V 型晶体。",
      "<strong>操作阶段（T ≈ 31°C）：</strong> 轻微加热融化了冷却时生成的、不稳定的 IV 型晶体，仅保留 V 型结晶。"
    ]
  },
  {
    "type": "title",
    "text": "家用巧克力调温的实用方法",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "您可以在家中获得出色的效果。使用上方的计算器精确称量您的重量 :"
  },
  {
    "type": "list",
    "items": [
      "<strong>隔水加热法：</strong> 将 75% 的巧克力放入耐热碗中，置于微沸的水锅上。不要让碗底接触到水，防止蒸汽进入。融化后离火，擦干碗底并拌入 25% 固体巧克力豆。搅拌至冷却，然后再隔水短暂加热至操作温度。",
      "<strong>微波炉调温法：</strong> 将 75% 的巧克力放入微波炉安全碗中。以 50% 的功率每次加热 15-30 秒，中途充分搅拌。融化后，拌入 25% 的播种固体，不停搅拌。以 5-10 秒的段加热以进行操作。",
      "<strong>真空慢煮（低温慢煮）法：</strong> 将所有巧克力装入真空密封袋中。在慢煮锅中加热融化。加入冰块以降低温度，并频繁揉捏袋子。加热到工作温度。"
    ]
  },
  {
    "type": "title",
    "text": "如何进行调温测试",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "在使用巧克力前先做测试。将干净的刀尖浸入巧克力中，放在 18-22°C 的室温下。如果调温成功，它将在 3-5 分钟内凝固，并具有光泽和脆度。如果仍粘手，需重新融化并再次操作。"
  },
  {
    "type": "title",
    "text": "调温常见故障排除",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "不正确的调温会导致表面出现灰斑（起霜）。这可以通过重新融化巧克力并从第一阶段重新开始来解决。"
  }
],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
