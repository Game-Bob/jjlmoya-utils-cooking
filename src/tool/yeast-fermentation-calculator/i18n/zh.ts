import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "酵母发酵时间计算器（面包、酸酵母与啤酒）";
const description = "根据温度、酵母用量、面粉/麦汁总量及目标膨胀率或发酵度，估算面包、酸酵母与啤酒的发酵时间窗口。支持公制与英制切换。";

const faq = [
  {
    "question": "本发酵计算器可以估算什么？",
    "answer": "它通过透明的速率模型估算面包、酸酵头或啤酒的发酵时间窗口。"
  },
  {
    "question": "为什么温度对结果影响如此巨大？",
    "answer": "温度直接改变酵母的代谢速率。计算器应用 Q10 温度系数并在偏离基准时扩大时间范围。"
  },
  {
    "question": "酸酵头模式下应该输入什么？",
    "answer": "批次量输入面粉重量，酵母量输入酸酵头重量，系统将按烘焙百分比进行计算。"
  },
  {
    "question": "啤酒模式下应该输入什么？",
    "answer": "批次量输入麦汁升数，酵母量输入干酵母克数。"
  },
  {
    "question": "时间窗口结束后是否应立即停止发酵？",
    "answer": "不应该。请通过面团膨胀状态或比重计实测来判定发酵终点。"
  },
  {
    "question": "可以使用英制单位吗？",
    "answer": "可以。顶部有公制/英制一键切换按钮。"
  }
];

const howTo = [
  {
    "name": "选择发酵模式",
    "text": "选择面包、酸酵母或啤酒模式。"
  },
  {
    "name": "设置酵母与温度",
    "text": "选择酵母种类并输入发酵温度。"
  },
  {
    "name": "输入批次量与酵母量",
    "text": "输入面粉/麦汁量及酵母重量。"
  },
  {
    "name": "设定发酵终点",
    "text": "选择目标膨胀倍数或啤酒发酵度。"
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
  "modeBread": "面包",
  "modeSourdough": "酸酵母",
  "modeBeer": "啤酒",
  "modeBreadHint": "商业酵母",
  "modeSourdoughHint": "天然酵母",
  "modeBeerHint": "艾尔 / 拉格",
  "temperature": "发酵温度",
  "temperatureHelp": "请使用面团或麦汁的实际温度，而非室温。",
  "systemLabel": "计量单位",
  "metricSystem": "公制",
  "imperialSystem": "英制",
  "useImperial": "切换为英制",
  "useMetric": "切换为公制",
  "imperialTemperatureUnit": "°F",
  "metricTemperatureUnit": "°C",
  "imperialMassUnit": "oz",
  "metricMassUnit": "g",
  "imperialFlourUnit": "oz",
  "metricFlourUnit": "g",
  "imperialWortUnit": "gal",
  "metricWortUnit": "L",
  "batchSize": "总批次量",
  "batchSizeHelp": "面包请输入面粉重量，啤酒请输入麦汁体积。",
  "flour": "面粉重量",
  "wort": "麦汁体积",
  "yeastAmount": "酵母/酵头用量",
  "yeastAmountHelp": "称量酵母或酸酵头。啤酒请输入干酵母克数。",
  "yeastType": "酵母种类",
  "instant": "即发干酵母",
  "active": "活性干酵母",
  "fresh": "鲜酵母",
  "starter": "酸酵头",
  "ale": "艾尔酵母",
  "lager": "拉格酵母",
  "targetRise": "目标膨胀倍数",
  "targetAttenuation": "目标发酵度",
  "targetHelp": "此为检验目标，非自动判定发酵完成的唯一标准。",
  "riseUnit": "倍体积",
  "attenuationUnit": "%",
  "presetRoom": "常温",
  "presetWarm": "偏温",
  "presetCool": "偏凉",
  "presetOvernight": "隔夜冷藏",
  "calculate": "更新估算",
  "reset": "重置为面包",
  "estimatedWindow": "预估发酵时间窗口",
  "rate": "工作速率",
  "pitchDensity": "接种密度",
  "status": "状态",
  "steady": "条件稳定",
  "watch": "建议观察",
  "caution": "超出偏好区间",
  "invalid": "请输入有效数值",
  "steadyText": "参数接近参考模型。请观察面团或麦汁状态而非单纯看表。",
  "watchText": "估算值可作参考，但温度或菌株活性会增加发酵时间的不确定性。",
  "cautionText": "此组合偏离标准模型较远，请仅作为大致信号，以实测为准。",
  "invalidText": "请输入正数。",
  "assumptions": "查看模型假设",
  "assumptionsText": "本模型在基准线基础上应用了 Q10 温度系数与亚线性用量修正。",
  "targetMarker": "目标",
  "riseScene": "面团体积",
  "attenuationScene": "糖分转化",
  "hours": "小时",
  "days": "天",
  "perLiter": "g/L",
  "perGallon": "oz/gal",
  "perFlour": "占面粉",
  "enterValid": "请输入参数以读取数据。",
  "faqTitle": "常见问题解答",
  "bibliographyTitle": "参考文献与资源"
};

export const content: ToolLocaleContent<FermentationUI> = {
  slug: "yeast-fermentation-calculator",
  title,
  description,
  ui,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  seo: [
    { type: 'title', text: "发酵时间估算的工作原理", level: 2 },
    { type: 'paragraph', html: "在寻找酵母发酵时间计算器、酸酵母发酵预估或啤酒发酵指南吗？本工具基于酵母用量、批次总量、发酵温度与目标终点四个关键指标，为您提供实用的时间窗口。" },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "种发酵模式", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "温度系数", icon: 'mdi:thermometer' }, { value: 'range', label: "结果区间形式", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "影响发酵时间窗口的核心参数", level: 3 },
    { type: 'table', headers: ["参数","面包与酸酵母","啤酒"], rows: [["批次总量","面粉重量 (克)","麦汁体积 (升)"],["酵母/酵头用量","酵母或酵头重量 (克)","干酵母重量 (克)"],["发酵终点","面团膨胀倍数","目标发酵度 (%)"],["实际检验方法","体积、弹性与网状结构","比重计连续测量稳定"]] },
    { type: 'title', text: "为什么结果显示为一个时间区间", level: 3 },
    { type: 'paragraph', html: "即使配方相同，温度波动与酵母活力也会导致发酵速度差异。显示区间能够客观呈现这种真实的不确定性。" },
    { type: 'tip', title: "将目标值作为视觉与测量依据", html: "面包请观察膨胀体积与气孔结构；啤酒请通过比重计确认读数稳定。定时器仅作为规划辅助。" },
    { type: 'paragraph', html: '发酵时请同时观察温度和体积。时间只是估计值，应结合面团状态或稳定的啤酒密度读数判断。' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
