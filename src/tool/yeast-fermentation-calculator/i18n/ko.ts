import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "빵, 사워도우, 맥주용 효모 발효 시간 계산기";
const description = "온도, 효모 양, 반죽/맥즙 양, 목표 부풀음 또는 발효도에 따른 빵, 사워도우, 맥주의 발효 시간을 예측합니다. 미터법 및 야드파운드법 지원.";

const faq = [
  {
    "question": "이 계산기는 무엇을 추정합니까?",
    "answer": "빵 반죽, 사워도우, 맥주의 계획용 발효 시간 범위를 추정합니다."
  },
  {
    "question": "온도가 결과에 왜 그렇게 큰 영향을 미칩니까?",
    "answer": "온도는 효모의 대사 활동 속도를 직접적으로 변화시킵니다."
  },
  {
    "question": "사워도우에는 무엇을 입력해야 합니까?",
    "answer": "밀가루 무게를 배치 크기로, 스타터 무게를 효모 양으로 입력합니다."
  },
  {
    "question": "맥주에는 무엇을 입력해야 합니까?",
    "answer": "맥즙 용량(L)과 건조 효모 무게(g)를 입력합니다."
  },
  {
    "question": "시간 창이 끝나면 발효를 중단해야 합니까?",
    "answer": "아닙니다. 반죽의 팽창 상태나 비중을 실제로 측정하여 확인하세요."
  },
  {
    "question": "야드파운드법을 사용할 수 있습니까?",
    "answer": "네, 상단 단위 전환 버튼으로 전환할 수 있습니다."
  }
];

const howTo = [
  {
    "name": "발효 모드 선택",
    "text": "빵, 사워도우, 맥주 중 선택하세요."
  },
  {
    "name": "효모 및 온도 설정",
    "text": "효모 종류와 발효 온도를 입력하세요."
  },
  {
    "name": "배치 및 효모 양 입력",
    "text": "밀가루/맥즙 양과 효모 무게를 입력하세요."
  },
  {
    "name": "목표값 설정",
    "text": "반죽 부풀음 배율 또는 목표 발효도를 설정하세요."
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
  "modeBread": "빵",
  "modeSourdough": "사워도우",
  "modeBeer": "맥주",
  "modeBreadHint": "상업용 효모",
  "modeSourdoughHint": "천연 발효종",
  "modeBeerHint": "에일 / 라거",
  "temperature": "발효 온도",
  "temperatureHelp": "실온이 아닌 반죽이나 맥즙의 실제 온도를 사용하세요.",
  "systemLabel": "측정 단위",
  "metricSystem": "미터법",
  "imperialSystem": "야드파운드법",
  "useImperial": "야드파운드 사용",
  "useMetric": "미터법 사용",
  "imperialTemperatureUnit": "°F",
  "metricTemperatureUnit": "°C",
  "imperialMassUnit": "oz",
  "metricMassUnit": "g",
  "imperialFlourUnit": "oz",
  "metricFlourUnit": "g",
  "imperialWortUnit": "gal",
  "metricWortUnit": "L",
  "batchSize": "배치 크기",
  "batchSizeHelp": "빵은 밀가루 무게(g), 맥주는 맥즙 용량(L).",
  "flour": "밀가루 무게",
  "wort": "맥즙 용량",
  "yeastAmount": "발효종/효모 양",
  "yeastAmountHelp": "효모나 스타터를 계량하세요. 맥주는 건조 효모 무게.",
  "yeastType": "발효종 종류",
  "instant": "인스턴트 드라이",
  "active": "액티브 드라이",
  "fresh": "생효모",
  "starter": "사워도우 스타터",
  "ale": "에일 효모",
  "lager": "라거 효모",
  "targetRise": "목표 부풀음",
  "targetAttenuation": "목표 발효도",
  "targetHelp": "이는 목표 기준점이며 자동 완료를 보장하지 않습니다.",
  "riseUnit": "배 부피",
  "attenuationUnit": "%",
  "presetRoom": "실온",
  "presetWarm": "따뜻함",
  "presetCool": "서늘함",
  "presetOvernight": "저온 저발효",
  "calculate": "추정치 업데이트",
  "reset": "빵으로 리셋",
  "estimatedWindow": "예상 발효 시간 창",
  "rate": "작업 속도",
  "pitchDensity": "피칭 밀도",
  "status": "상태",
  "steady": "안정적인 조건",
  "watch": "발효 경과 관찰",
  "caution": "권장 범위 벗어남",
  "invalid": "유효한 값을 입력하세요",
  "steadyText": "입력값이 기준 프로필에 가깝습니다. 시계 대신 반죽이나 맥즙을 관찰하세요.",
  "watchText": "가이드로 유용하지만 온도나 효모 상태에 따라 발효 시간이 달라집니다.",
  "cautionText": "기준에서 크게 벗어났습니다. 참고용으로만 사용하고 육안/측정으로 확인하세요.",
  "invalidText": "양수 값을 입력하세요.",
  "assumptions": "모델 가정 보기",
  "assumptionsText": "Q10 온도 계수 및 하위 선형 투여량 보정을 적용합니다.",
  "targetMarker": "목표",
  "riseScene": "반죽 부피",
  "attenuationScene": "당분 전환",
  "hours": "시간",
  "days": "일",
  "perLiter": "g/L",
  "perGallon": "oz/gal",
  "perFlour": "밀가루 대비",
  "enterValid": "값을 입력하세요.",
  "faqTitle": "자주 묻는 질문",
  "bibliographyTitle": "참고 문헌 및 출처"
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
    { type: 'title', text: "발효 시간 추정 작동 방식", level: 2 },
    { type: 'paragraph', html: "효모 발효 시간 계산기, 사워도우 발효 예측, 맥주 발효 가이드를 찾고 계신가요? 이 도구는 온도, 효모 양, 배치 크기, 목표 부풀음의 4가지 주요 수치를 바탕으로 실용적인 발효 시간 창을 제공합니다." },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "가지 발효 모드", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "온도 계수", icon: 'mdi:thermometer' }, { value: 'range', label: "결과 구간 형태", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "발효 시간에 영향을 주는 요소", level: 3 },
    { type: 'table', headers: ["항목","빵 및 사워도우","맥주"], rows: [["배치 크기","밀가루 (g)","맥즙 (L)"],["발효종 양","효모/스타터 (g)","건조 효모 (g)"],["최종 목표","반죽 부피 배율","목표 발효도 (%)"],["실제 확인","부피, 탄력 및 결","안정된 비중 측정값"]] },
    { type: 'title', text: "결과가 시간 범위로 표시되는 이유", level: 3 },
    { type: 'paragraph', html: "동일한 레시피라도 온도 변동과 효모 활성도에 따라 발효 속도가 달라집니다. 단일 수치가 아닌 범위로 표시하여 불확실성을 객관적으로 전달합니다." },
    { type: 'tip', title: "목표값을 시각 및 측정 지표로 활용하세요", html: "빵은 부풀어 오른 부피와 결을 확인하고, 맥주는 비중계로 수치가 안정되었는지 확인하세요." },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
