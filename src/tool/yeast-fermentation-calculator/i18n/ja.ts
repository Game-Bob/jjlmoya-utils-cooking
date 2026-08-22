import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "パン・サワー種・ビール用 イースト発酵時間計算ツール";
const description = "温度、イースト量、仕込み量、目標膨張率/発酵度からパンの発酵時間、サワー種、ビールの発酵時間を推定。メートル法とヤード・ポンド法に対応。";

const faq = [
  {
    "question": "このイースト発酵計算ツールは何を推定しますか？",
    "answer": "パン生地、サワー種、ビールの計画用発酵時間ウィンドウを透明なモデルで推定します。"
  },
  {
    "question": "なぜ温度がこれほど影響するのですか？",
    "answer": "温度はイーストの代謝活性に直接影響します。基準値からの離脱に応じて予測範囲を広げます。"
  },
  {
    "question": "サワー種の場合は何を入力すればよいですか？",
    "answer": "仕込み量に粉重量、酵母量に元種重量を入力します。ベーカーズ % として計算されます。"
  },
  {
    "question": "ビールの場合は何を入力すればよいですか？",
    "answer": "仕込み量に麦汁量(L)、酵母量にドライイースト重量(g)を入力します。"
  },
  {
    "question": "時間ウィンドウが終了したら発酵を止めるべきですか？",
    "answer": "いいえ。生地の膨らみや比重測定で実際の完了を確認してください。"
  },
  {
    "question": "ヤード・ポンド法（ imperial ）は使えますか？",
    "answer": "はい。上部の単位切替ボタンで変更できます。"
  }
];

const howTo = [
  {
    "name": "発酵モードを選択",
    "text": "パン、サワー種、ビールの中から選択します。"
  },
  {
    "name": "酵母と温度を設定",
    "text": "酵母の種類と発酵温度を入力します。"
  },
  {
    "name": "仕込み量とイースト量を入力",
    "text": "粉量/麦汁量とイースト量を入力します。"
  },
  {
    "name": "目標値を設定",
    "text": "生地の膨らみ倍率またはビールの目標発酵度を設定します。"
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
  "modeBread": "パン",
  "modeSourdough": "サワー種",
  "modeBeer": "ビール",
  "modeBreadHint": "市販イースト",
  "modeSourdoughHint": "自家製酵母",
  "modeBeerHint": "エール / ラガー",
  "temperature": "発酵温度",
  "temperatureHelp": "生地または麦汁の実際の温度を入力してください。",
  "systemLabel": "単位系",
  "metricSystem": "メートル法",
  "imperialSystem": "ヤード・ポンド法",
  "useImperial": "ヤード・ポンド表示",
  "useMetric": "メートル表示",
  "imperialTemperatureUnit": "°F",
  "metricTemperatureUnit": "°C",
  "imperialMassUnit": "oz",
  "metricMassUnit": "g",
  "imperialFlourUnit": "oz",
  "metricFlourUnit": "g",
  "imperialWortUnit": "gal",
  "metricWortUnit": "L",
  "batchSize": "仕込み量",
  "batchSizeHelp": "パンは小麦粉重量(g)、ビールは麦汁量(L)。",
  "flour": "小麦粉重量",
  "wort": "麦汁量",
  "yeastAmount": "酵母/元種量",
  "yeastAmountHelp": "イーストまたは元種を計量して入力。ビールはドライイースト量。",
  "yeastType": "酵母の種類",
  "instant": "インスタントドライ",
  "active": "アクティブドライ",
  "fresh": "生イースト",
  "starter": "サワー種元種",
  "ale": "エール酵母",
  "lager": "ラガー酵母",
  "targetRise": "目標膨張率",
  "targetAttenuation": "目標発酵度",
  "targetHelp": "これは目安の目標であり、自動的な完了保証ではありません。",
  "riseUnit": "倍率",
  "attenuationUnit": "%",
  "presetRoom": "室温",
  "presetWarm": "保温",
  "presetCool": "低温",
  "presetOvernight": "オーバーナイト",
  "calculate": "計算を更新",
  "reset": "パンにリセット",
  "estimatedWindow": "推定発酵時間ウィンドウ",
  "rate": "発酵速度",
  "pitchDensity": "ピッチング密度",
  "status": "状態",
  "steady": "安定した条件",
  "watch": "酵母の経過観察推奨",
  "caution": "推奨範囲外",
  "invalid": "有効な値を入力してください",
  "steadyText": "基準プロファイルに近い条件です。時計ではなく生地や麦汁の状態を観察してください。",
  "watchText": "目安として利用可能ですが、温度や酵母の状態により変動します。",
  "cautionText": "基準から大きく離れています。数値は参考程度にし、状態確認を優先してください。",
  "invalidText": "正の値を入力してください。",
  "assumptions": "モデルの前提条件を見る",
  "assumptionsText": "基準プロファイルに対し Q10 温度係数とサブリニアな量補正を適用しています。",
  "targetMarker": "目標",
  "riseScene": "生地体積",
  "attenuationScene": "糖分消費",
  "hours": "時間",
  "days": "日",
  "perLiter": "g/L",
  "perGallon": "oz/gal",
  "perFlour": "対粉",
  "enterValid": "値を入力してください。",
  "faqTitle": "よくある質問",
  "bibliographyTitle": "参考文献・リソース"
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
    { type: 'title', text: "発酵時間推定の仕組み", level: 2 },
    { type: 'paragraph', html: "イーストの発酵時間計算、サワー種の種継ぎ時間、ビールの発酵ガイドをお探しですか？本ツールは、酵母量・仕込み量・温度・目標値の4つの指標から実践的な発酵時間ウィンドウを算出します。" },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "発酵モード", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "温度係数", icon: 'mdi:thermometer' }, { value: 'range', label: "結果の出力形式", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "発酵時間を左右する要素", level: 3 },
    { type: 'table', headers: ["項目","パン・サワー種","ビール"], rows: [["仕込み量","小麦粉重量 (g)","麦汁量 (L)"],["酵母量","イースト/元種 (g)","ドライイースト (g)"],["目標値","生地の体積倍率","目標発酵度 (%)"],["実際の確認方法","体積・弾力・指触り","比重計の一定測定"]] },
    { type: 'title', text: "推定結果が「幅（範囲）」で表示される理由", level: 3 },
    { type: 'paragraph', html: "同じレシピでも温度の変動や酵母の活性度によって発酵速度は変化します。確定した単一時間ではなく範囲で示すことで、実際の不安定さを可視化しています。" },
    { type: 'tip', title: "目標値を視覚と測定の合図にする", html: "パン生地は膨らみと気泡構造を確認し、ビールは比重計で数値が安定したことを確認してください。タイマーは計画の補助です。" },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
