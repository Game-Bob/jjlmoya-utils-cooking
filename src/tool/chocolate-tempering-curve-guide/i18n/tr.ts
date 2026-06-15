import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Çikolata temperleme eğrisi ve aşı yöntemi kılavuzu";
const description = "Evde çikolata temperlemede uzmanlaşın. Gerekli aşı çikolatası (callet) ağırlığını hesaplayın ve bitter, sütlü ve beyaz çikolata için adım adım termodinamik sıcaklık eğrilerini takip edin.";
const faq = [
  {
    "question": "Çikolata temperleme nedir ?",
    "answer": "Çikolata temperleme, kakao yağının kristalleşmesini kontrol etmek için çikolatanın ısıtılması, soğutulması ve hafifçe yeniden ısıtılması işlemidir. Bu, yağ moleküllerini kararlı Form V (Beta) kristallerine dönüşmeye zorlar. Çikolataya parlaklık, çıtır bir kırılma verir ve oda sıcaklığında kolayca erimesini önler."
  },
  {
    "question": "Aşı yöntemi nedir ?",
    "answer": "Aşı yöntemi (seeding), çikolatanın bir kısmını eritmeyi ve ardından soğutma aşamasında katı, önceden temperlenmiş çikolata parçaları (aşı çikolatası) eklemeyi içerir. Bu katı kristaller şablon görevi görerek erimiş yağ moleküllerini mermer tezgaha gerek kalmadan Form V yapısında kristalleşmeye yönlendirir."
  },
  {
    "question": "Çikolatamda neden beyaz lekeler (yağ çiçeklenmesi) oluştu ?",
    "answer": "Beyaz çizgiler veya lekeler yağ çiçeklenmesi (fat bloom) olarak bilinir. Çikolata düzgün temperlenmediğinde, kararsız kakao yağı kristallerinin yüzeye çıkıp yeniden kristalleşmesiyle oluşur. Tüketilmesi güvenlidir ancak dokusunu ve parlaklığını kaybeder."
  },
  {
    "question": "Yağ çiçeklenmesi olmuş çikolatayı tekrar temperleyebilir miyim ?",
    "answer": "Evet. Çiçeklenme kimyasal bir bozulma değil, kristallerin fiziksel olarak ayrışmasıdır. Çikolatanın eritme sıcaklığına (yaklaşık 45-50°C) eritilmesi, kararsız kristal yapıları yok ederek temperleme işlemine sıfırdan başlamanızı sağlar."
  },
  {
    "question": "Mutfak nemi ve sıcaklığı temperlemeyi nasıl etkiler ?",
    "answer": "Çikolata çevreye son derece duyarlıdır. İdeal mutfak sıcaklığı 18-22°C, bağıl nem %50'nin altında olmalıdır. Yüksek nem, çikolata üzerinde su yoğuşmasına neden olarak şeker çiçeklenmesine veya çikolatanın işlenemez kalın bir macuna dönüşmesine yol açar."
  },
  {
    "question": "Marketten alınan sıradan çikolata damlalarını kullanabilir miyim ?",
    "answer": "Sıradan çikolata damlaları fırında şekillerini korumak için stabilizatörler içerir ve kakao yağı oranları düşüktür. Parlak ve çıtır bir temperleme için en az %31 kakao yağı içeren profesyonel kuvertür çikolata kullanılması şiddetle tavsiye edilir."
  }
];

const howTo = [
  {
    "name": "Çikolata türünü seçin",
    "text": "Bitter, sütlü veya beyaz çikolatayı seçerek özel sıcaklık sınırlarını yükleyin."
  },
  {
    "name": "Toplam ağırlığı girin",
    "text": "Hazırlamak istediğiniz temperlenmiş çikolatanın hedef toplam ağırlığını girin."
  },
  {
    "name": "Eritme aşaması",
    "text": "Çikolatanın %75'ini eritme sıcaklığına ( bitter için 50C ) kadar eriterek tüm kristal yapılarını çözün."
  },
  {
    "name": "Soğutma ve aşı aşaması",
    "text": "Erimiş çikolatayı karıştırarak soğuturken, kalan %25 katı aşı çikolatasını ekleyin."
  },
  {
    "name": "Çalışma aşaması",
    "text": "Kullanmadan önce kararsız kristalleri eritmek için çikolatayı çalışma sıcaklığına kadar hafifçe ısıtın."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Çikolata temperleme nedir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Çikolata temperleme, kakao yağının kristalleşmesini kontrol etmek için çikolatanın ısıtılması, soğutulması ve hafifçe yeniden ısıtılması işlemidir. Bu, yağ moleküllerini kararlı Form V (Beta) kristallerine dönüşmeye zorlar. Çikolataya parlaklık, çıtır bir kırılma verir ve oda sıcaklığında kolayca erimesini önler."
      }
    },
    {
      "@type": "Question",
      "name": "Aşı yöntemi nedir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aşı yöntemi (seeding), çikolatanın bir kısmını eritmeyi ve ardından soğutma aşamasında katı, önceden temperlenmiş çikolata parçaları (aşı çikolatası) eklemeyi içerir. Bu katı kristaller şablon görevi görerek erimiş yağ moleküllerini mermer tezgaha gerek kalmadan Form V yapısında kristalleşmeye yönlendirir."
      }
    },
    {
      "@type": "Question",
      "name": "Çikolatamda neden beyaz lekeler (yağ çiçeklenmesi) oluştu ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beyaz çizgiler veya lekeler yağ çiçeklenmesi (fat bloom) olarak bilinir. Çikolata düzgün temperlenmediğinde, kararsız kakao yağı kristallerinin yüzeye çıkıp yeniden kristalleşmesiyle oluşur. Tüketilmesi güvenlidir ancak dokusunu ve parlaklığını kaybeder."
      }
    },
    {
      "@type": "Question",
      "name": "Yağ çiçeklenmesi olmuş çikolatayı tekrar temperleyebilir miyim ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet. Çiçeklenme kimyasal bir bozulma değil, kristallerin fiziksel olarak ayrışmasıdır. Çikolatanın eritme sıcaklığına (yaklaşık 45-50°C) eritilmesi, kararsız kristal yapıları yok ederek temperleme işlemine sıfırdan başlamanızı sağlar."
      }
    },
    {
      "@type": "Question",
      "name": "Mutfak nemi ve sıcaklığı temperlemeyi nasıl etkiler ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Çikolata çevreye son derece duyarlıdır. İdeal mutfak sıcaklığı 18-22°C, bağıl nem %50'nin altında olmalıdır. Yüksek nem, çikolata üzerinde su yoğuşmasına neden olarak şeker çiçeklenmesine veya çikolatanın işlenemez kalın bir macuna dönüşmesine yol açar."
      }
    },
    {
      "@type": "Question",
      "name": "Marketten alınan sıradan çikolata damlalarını kullanabilir miyim ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sıradan çikolata damlaları fırında şekillerini korumak için stabilizatörler içerir ve kakao yağı oranları düşüktür. Parlak ve çıtır bir temperleme için en az %31 kakao yağı içeren profesyonel kuvertür çikolata kullanılması şiddetle tavsiye edilir."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Çikolata temperleme eğrisi ve aşı yöntemi kılavuzu",
  "description": "Evde çikolata temperlemede uzmanlaşın. Gerekli aşı çikolatası (callet) ağırlığını hesaplayın ve bitter, sütlü ve beyaz çikolata için adım adım termodinamik sıcaklık eğrilerini takip edin.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Çikolata türünü seçin",
      "text": "Bitter, sütlü veya beyaz çikolatayı seçerek özel sıcaklık sınırlarını yükleyin."
    },
    {
      "@type": "HowToStep",
      "name": "Toplam ağırlığı girin",
      "text": "Hazırlamak istediğiniz temperlenmiş çikolatanın hedef toplam ağırlığını girin."
    },
    {
      "@type": "HowToStep",
      "name": "Eritme aşaması",
      "text": "Çikolatanın %75'ini eritme sıcaklığına ( bitter için 50C ) kadar eriterek tüm kristal yapılarını çözün."
    },
    {
      "@type": "HowToStep",
      "name": "Soğutma ve aşı aşaması",
      "text": "Erimiş çikolatayı karıştırarak soğuturken, kalan %25 katı aşı çikolatasını ekleyin."
    },
    {
      "@type": "HowToStep",
      "name": "Çalışma aşaması",
      "text": "Kullanmadan önce kararsız kristalleri eritmek için çikolatayı çalışma sıcaklığına kadar hafifçe ısıtın."
    }
  ]
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Çikolata temperleme eğrisi ve aşı yöntemi kılavuzu",
  "description": "Evde çikolata temperlemede uzmanlaşın. Gerekli aşı çikolatası (callet) ağırlığını hesaplayın ve bitter, sütlü ve beyaz çikolata için adım adım termodinamik sıcaklık eğrilerini takip edin.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
};

export const content: ToolLocaleContent = {
  slug: 'cikolata-temperleme-egrisi-kilavuzu',
  title,
  description,
  faqTitle: 'Sıkça sorulan sorular',
  ui: {
  "title": "Çikolata Temperleme Asistanı",
  "subtitle": "Termodinamik eğriler ve aşı hesaplayıcı",
  "chocolateTypeLabel": "Çikolata Türü",
  "totalWeightLabel": "Hedef toplam ağırlık",
  "meltLabel": "Eritme Aşaması",
  "coolLabel": "Soğutma & Aşı Aşaması",
  "workLabel": "Çalışma Aşaması",
  "meltTempLabel": "Eritme Sıcaklığı",
  "coolTempLabel": "Soğutma Sıcaklığı",
  "workTempLabel": "Çalışma Sıcaklığı",
  "meltWeightLabel": "Eritilecek ağırlık",
  "seedWeightLabel": "Aşı ağırlığı (callet)",
  "molecularLabel": "Moleküler kristalleşme durumu",
  "seedingTitle": "Aşı yöntemi hesaplayıcı (25% pay)",
  "stepTitle": "Temperleme adımları",
  "darkOption": "Bitter Çikolata",
  "milkOption": "Sütlü Çikolata",
  "whiteOption": "Beyaz Çikolata",
  "resetButton": "Kılavuzu sıfırla",
  "warningOverheated": "Uyarı: Sıcaklık çok yüksek! Kakao katı maddelerini yakabilir veya süt proteinlerini denatüre edebilirsiniz.",
  "warningUnderheated": "Uyarı: Sıcaklık çok düşük. Kararlı kristaller oluşmadı veya çikolata çok erken katılaşacak.",
  "interactiveInfo": "Moleküler aşamaları önizlemek için adımlarla etkileşime geçin veya termometreyi sürükleyin"
},
  faq,
  howTo,
  seo: [
  {
    "type": "title",
    "text": "Kakao yağının kristalleşmesinin termodinamiği",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Kakao yağı polimorfiktir, yani altı farklı kristal yapısında (I'den VI'ya) katılaşabilir. Her yapının erime noktası farklıdır. Temperlemenin amacı kararlı Form V (Beta) kristallerini maksimize etmektir. Form V, profesyonel çikolatanın parlaklığını ve çıtırlığını sağlar."
  },
  {
    "type": "stats",
    "columns": 4,
    "items": [
      {
        "value": "Form V",
        "label": "Hedef Beta kristali",
        "icon": "mdi:hexagon-multiple-outline"
      },
      {
        "value": "25-30%",
        "label": "Aşı oranı",
        "icon": "mdi:scale"
      },
      {
        "value": "31-32°C",
        "label": "Bitter çalışma sıc.",
        "icon": "mdi:thermometer"
      },
      {
        "value": "0.1-0.2C",
        "label": "Dakikada soğuma hızı",
        "icon": "mdi:trending-down"
      }
    ]
  },
  {
    "type": "title",
    "text": "Kakao yağının altı polimorfik kristal yapısı",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Kristal yapıların özelliklerini bilmek temperleme hatalarını önler. İşte kakao yağının kristal formları :"
  },
  {
    "type": "table",
    "headers": [
      "Kristal Formu",
      "Yapı Adı",
      "Erime Noktası",
      "Kararlılık ve Doku"
    ],
    "rows": [
      [
        "Form I",
        "Gamma (γ)",
        "17°C (62.6°F)",
        "Çok kararsız, yumuşak, elde hemen erir, çıtırlık yok."
      ],
      [
        "Form II",
        "Alpha (α)",
        "21°C (69.8°F)",
        "Kararsız, yumuşak, kırılgan yapı, kolayca erir."
      ],
      [
        "Form III",
        "Beta Prime (β')",
        "25.5°C (77.9°F)",
        "Kararsız, sert ama çıtır kırılma yok, mat yüzey."
      ],
      [
        "Form IV",
        "Beta Prime (β')",
        "27.3°C (81.1°F)",
        "Kararsız, sert, biraz kolay erir, zayıf parlaklık."
      ],
      [
        "Form V",
        "Beta (β)",
        "33.8°C (92.8°F)",
        "Çok kararlı, mükemmel parlaklık, çıtır kırılma (Hedeflenen form)."
      ],
      [
        "Form VI",
        "Beta (β)",
        "36.3°C (97.3°F)",
        "En kararlı, sert, aylarca oluşur, çiçeklenmeye yol açar."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Aşı yönteminin çalışma mantığı",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Aşı yöntemi mermer tezgah kullanmadan çikolata temperlemenin en güvenli yoludur. Çikolatanın %25'ini katı halde tutarak kararlı Form V kristallerini ılık çikolataya ekler ve kristalleşmeyi yönlendiririz."
  },
  {
    "type": "title",
    "text": "Adım adım temperleme eğrisinin arkasındaki bilim",
    "level": 2
  },
  {
    "type": "list",
    "items": [
      "<strong>Fase 1: Eritme (T > 40°C):</strong> Isıtma işlemi tüm kristalleri (I-VI) çözerek amorf akışkan bir yağ durumu sağlar.",
      "<strong>Fase 2: Soğutma ve aşı (T ≈ 27°C):</strong> Soğutma işlemi katılaşmayı başlatır. %25 katı çikolata eklemek kararlı Form V kristallerini getirir.",
      "<strong>Fase 3: Çalışma (T ≈ 31°C):</strong> Hafif ısıtma soğuma esnasında oluşan kararsız Form IV yapılarını eritir, geriye sadece Form V kalır."
    ]
  },
  {
    "type": "title",
    "text": "Evde pratik temperleme yöntemleri",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Evde profesyonel sonuçlar alabilirsiniz. Hesaplayıcıyı kullanarak oranları hassasça ölçün :"
  },
  {
    "type": "list",
    "items": [
      "<strong>Benmari yöntemi :</strong> Çikolatanın %75'ini kaynayan suyun üzerindeki kaba koyun. Kabın suya değmemesine ve buhar girmemesine dikkat edin. Eritin, ocaktan alın ve kalan %25 aşıyı ekleyin. Soğuyana dek karıştırıp çalışma sıcaklığına getirin.",
      "<strong>Mikrodalga yöntemi :</strong> Çikolatanın %75'ini 15-30s aralıklarla %50 güçte ısıtın. Soğutmak için %25 katı çikolatayı ekleyin. Çalışmak için 5-10s aralıklarla ısıtın.",
      "<strong>Sous vide yöntemi :</strong> Çikolatayı vakum poşetine koyun. Sıcaklıkta eritin. Buz ekleyerek sıcaklığı düşürün ve poşeti masaj yapın. Çalışma sıcaklığına getirin."
    ]
  },
  {
    "type": "title",
    "text": "Temperleme testi nasıl yapılır",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Çikolatayı kullanmadan önce test edin. Temiz bir bıçağın ucunu çikolataya batırıp oda sıcaklığında (18-22°C) bekletin. Temperlendiyse 3-5 dk içinde parlak ve çıtır katılaşacaktır. Katılaşmazsa eritin ve yeniden başlayın."
  },
  {
    "type": "title",
    "text": "Temperleme hatalarını giderme",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Hatalı temperleme yüzeyde gri lekelere yol açar. Çikolatayı eritip adımları en baştan tekrarlayarak çözebilirsiniz."
  }
],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
