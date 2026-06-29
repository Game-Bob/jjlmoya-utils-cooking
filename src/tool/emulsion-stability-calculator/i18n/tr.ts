import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Emülsiyon Stabilite ve Yağ Limiti Hesaplayıcı";
const description = "Mayonez, aioli ya da vinaigrette'inizin kesilmeden önce ne kadar yağ kaldırabileceğini tam olarak öğrenin. Ücretsiz emülsiyon stabilite hesaplayıcımızla bölünen sosları önleyin.";
const faq = [
  {
    question: "Mayonezime kesilmeden önce ne kadar yağ ekleyebilirim?",
    answer: "Emülgatöre bağlıdır. Yumurta sarısı ~%78'e kadar yağı destekler (su hacminin yaklaşık 3,5 katı), hardal %70'e kadar, soya lesitini %82'ye kadar ve polisorbat %85'e kadar. Spesifik miktarlarınız için tam maksimumu almak üstteki hesaplayıcıyı kullanın."
  },
  {
    question: "Emülsiyonum neden kesildi veya ayrıştı?",
    answer: "Bir emülsiyon, yağ hacim oranı emülgatörün maksimum paketleme limitini aştığında kesilir. Bu noktada, yağ damlacıkları o kadar sıkışır ki birleşir ve karışım ayrılır. Bu aniden olur - kademeli bir süreç değildir."
  },
  {
    question: "Kesilmiş bir mayonezi veya aioliyi nasıl düzeltebilirim?",
    answer: "Temiz bir kasede taze bir yumurta sarısı veya bir yemek kaşığı ılık su ile başlayın. Kesilmiş karışımı, çiğ yağ ekler gibi sürekli çırparak yavaşça ekleyin. Yukarıdaki hesaplayıcı tam olarak ne kadar su veya sarıya ihtiyacınız olduğunu söyler."
  },
  {
    question: "Yağı çok hızlı eklemek emülsiyonun kesilmesine neden olur mu?",
    answer: "Yağı çok hızlı eklemek emülgatörü geçici olarak aşırı yükleyebilir, ama kesilmenin gerçek nedeni her zaman yanlış faz oranıdır. Yağ oranınız emülgatörün limitinin altında kalırsa, emülsiyon hızdan bağımsız olarak stabil kalır. Limiti aşarsa, kesilme kaçınılmazdır."
  },
  {
    question: "Emülgatör olarak yumurta sarısı ile hardal arasındaki fark nedir?",
    answer: "Yumurta sarısı (%78 maksimum yağ), damlacıkların etrafında sağlam bir film oluşturan lesitin ve lipoproteinler içerir. Hardal (%70 maksimum yağ) müsilaj ve proteinlere dayanır - daha zayıftır ama lezzet katar. Soya lesitini (%82) ve polisorbat (%85) oldukça verimli endüstriyel sınıf emülgatörlerdir."
  }
];

const howTo = [
  {
    name: "Emülgatörünüzü seçin",
    text: "Tarifinizdeki emülgatörü seçin - klasik mayonez için yumurta sarısı, vinaigretteler için hardal veya modernist mutfak için soya lesitini/polisorbat. Her biri farklı bir maksimum yağ limiti belirler."
  },
  {
    name: "Su fazı hacminizi girin",
    text: "Sulu bileşenlerinizin toplam mililitresini girin: su, sirke, limon suyu, şarap veya su bazlı herhangi bir sıvı. Hesaplayıcı, seçtiğiniz emülgatörün su içeriğini otomatik olarak ekler."
  },
  {
    name: "Yağ hacminizi ayarlayın",
    text: "Kullanmayı planladığınız yağ miktarını girin. Kaydırıcıyı kullanın veya değeri yazın. Hesaplayıcı, bu miktarın stabil bir emülsiyon üretip üretmeyeceğini veya kesilmeye neden olup olmayacağını anında gösterir."
  },
  {
    name: "Stabilite sonucunu okuyun ve gerekirse düzeltin",
    text: "Yağ hacim oranı göstergesini kontrol edin. Stabil ise, devam edebilirsiniz. Kesilmişse, kurtarma paneli dengeyi sağlamak için ne kadar su (ml olarak) veya kaç ek yumurta sarısı eklemeniz gerektiğini tam olarak söyler."
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
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'emulsiyon-stabilite-hesaplayici',
  title: 'Emülsiyon Stabilite ve Yağ Limiti Hesaplayıcı',
  description: 'Mayonez, aioli ya da vinaigrette\'inizin kesilmeden önce ne kadar yağ kaldırabileceğini tam olarak öğrenin. Ücretsiz emülsiyon stabilite hesaplayıcımızla bölünen sosları önleyin.',
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    title: 'Emülsiyon Stabilite Analizörü',
    subtitle: 'Sosunuz kesilmeden önce ne kadar yağ kaldırabilir?',
    waterLabel: 'Su Fazı (ml)',
    oilLabel: 'Yağ Hacmi (ml)',
    emulsifierLabel: 'Emülgatör Türü',
    yolkOption: 'Yumurta Sarısı',
    mustardOption: 'Hardal',
    soyLecithinOption: 'Soya Lesitini',
    polysorbateOption: 'Polisorbat',
    stableStatus: 'Emülsiyon Stabil',
    brokenStatus: 'Kesilmiş Emülsiyon',
    ratioLabel: 'Yağ Hacim Oranı',
    maxLimitLabel: 'Maksimum Yağ Limiti',
    fixTitle: 'Kurtarma Stratejisi',
    waterFixText: 'Faz dengesini sağlamak için su ekleyin:',
    yolkFixText: 'Alternatif olarak, ek yumurta sarısı kullanın:',
    idealRangeText: 'İdeal aralık, kritik paketleme limiti olan %74 ile %80\'in altındadır.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Bir Mayonez veya Aioli Kesilmeden Önce Ne Kadar Yağ Kaldırabilir?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Her aşçı bu soruyu sormuştur: <strong>mayonezim neden kesildi?</strong> Cevap göründüğünden daha basit. Bir emülsiyon - ister klasik bir aioli, ister kremsi bir vinaigrette, isterse modernist bir köpük olsun - çökmeden önce ancak sınırlı miktarda yağ tutabilir. Bizim <strong>emülsiyon stabilite hesaplayıcımız</strong>, spesifik malzemelerinize ve miktarlarınıza dayanarak bu kırılma noktasının tam olarak nerede olduğunu söyler.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: 'Yumurta Sarısı Maks. Yağ',
          icon: 'mdi:egg-outline'
        },
        {
          value: '85%',
          label: 'Polisorbat Limiti',
          icon: 'mdi:flask-outline'
        },
        {
          value: '74%',
          label: 'Teorik Paketleme',
          icon: 'mdi:sphere'
        },
        {
          value: '15 ml',
          label: 'Sarısının Su İçeriği',
          icon: 'mdi:water'
        }
      ]
    },
    {
      type: 'title',
      text: 'Bilim: Emülsiyonlar Neden Kesilir',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Bir mutfak emülsiyonu, küçük yağ damlacıklarını sürekli bir su fazı boyunca dağıtarak çalışır. <strong>Emülgatörler</strong> - yumurta sarısındaki lesitin, hardaldaki müsilaj veya polisorbat gibi sentetik yüzey aktif maddeler - her damlacığı kaplar ve komşularıyla birleşmesini önler.'
    },
    {
      type: 'paragraph',
      html: 'Kırılma noktası tamamen geometri tarafından belirlenir. Yağ damlacıkları, bir araya paketlenmiş küçük küreler gibi davranır. Belirli bir alana sığdırabileceğiniz maksimum küre hacmi - <strong>Kepler sanısı</strong> olarak bilinir - yaklaşık %74\'tür. Gerçek mutfak sistemlerinde bu, güçlü emülgatörlerle %80-85\'e kadar çıkabilir, ancak bunun ötesinde damlacıklar o kadar sıkışır ki birleşir ve emülsiyon anında çöker.'
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Yumurta Sarısı',
          icon: 'mdi:egg-outline',
          description: 'Klasik mayonez emülgatörü. Lesitin ve lipoproteinler içerir.',
          highlight: true,
          points: [
            'Maks. yağ: %78',
            'Sarısı başına ~15 ml su',
            'Zenginlik ve renk katar',
            'Mayonez ve aioli için en iyisi'
          ]
        },
        {
          title: 'Hardal',
          icon: 'mdi:shaker-outline',
          description: 'Müsilaj ve tohum proteinlerine dayanır. Keskin tat katar.',
          points: [
            'Maks. yağ: %70',
            '~10 ml su içeriği',
            'Daha zayıf emülgatör gücü',
            'Vinaigretteler için ideal'
          ]
        },
        {
          title: 'Soya Lesitini',
          icon: 'mdi:leaf',
          description: 'Yüksek konsantre bitki bazlı yüzey aktif madde.',
          points: [
            'Maks. yağ: %82',
            '~5 ml su içeriği',
            'Nötr tat profili',
            'Modernist mutfak malzemesi'
          ]
        },
        {
          title: 'Polisorbat',
          icon: 'mdi:flask-outline',
          description: 'Maksimum yüzey aktif madde kapasiteli sentetik emülgatör.',
          points: [
            'Maks. yağ: %85',
            '~2 ml su içeriği',
            'En yüksek yağ toleransı',
            'Köpük ve havalandırmalarda kullanılır'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emülgatör', 'Maks. Yağ %', '100 ml Su Başına Yağ', 'En İyi Kullanım'],
      rows: [
        ['Yumurta Sarısı', '%78', '~355 ml', 'Mayonez, aioli, hollandez'],
        ['Hardal', '%70', '~233 ml', 'Vinaigretteler, hafif soslar'],
        ['Soya Lesitini', '%82', '~456 ml', 'Modernist soslar, köpükler'],
        ['Polisorbat', '%85', '~567 ml', 'Stabil köpükler, deneysel mutfak']
      ]
    },
    {
      type: 'title',
      text: 'Kesilmiş Bir Emülsiyonu Adım Adım Nasıl Kurtarırsınız',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Mayoneziniz veya sosunuz kestiyse, <strong>sakın atmayın</strong>. Çözüm basittir - ancak yalnızca faz oranını anlarsanız. Daha sert çırpmak işe yaramaz; daha fazla sürekli (su) fazı eklemeniz gerekir.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Emülsiyonunuzun Kesilmek Üzere Olduğunun Yaygın İşaretleri',
      html: 'Bir <strong>koyulaşma ve ardından ani incelme</strong>, <strong>parlak yüzeyin taneli hale gelmesi</strong> veya kenarlarda görünür yağ birikmesine dikkat edin. Bunlardan herhangi birini görürseniz, hemen yağ eklemeyi bırakın ve devam etmeden önce bir tatlı kaşığı soğuk su çırpın.'
    },
    {
      type: 'title',
      text: 'Her Zaman Mükemmel Emülsiyonlar İçin Pratik İpuçları',
      level: 3
    },
    {
      type: 'tip',
      title: 'Sıcaklık Önemlidir',
      html: 'Tüm malzemeler <strong>oda sıcaklığında</strong> olmalıdır. Soğuk yumurta veya soğuk yağ, kesilme riskini önemli ölçüde artırır. Malzemeleri başlamadan 30 dakika önce buzdolabından çıkarın.'
    },
    {
      type: 'tip',
      title: 'Su Güvenlik Ağı',
      html: 'Tarifiniz yeterli asit (sirke, limon suyu) içermiyorsa, yağ eklemeye başlamadan önce <strong>yumurta sarısı başına bir tatli kaşığı soğuk su</strong> ekleyin. Bu ekstra su daha geniş bir güvenlik marjı oluşturur.'
    },
    {
      type: 'tip',
      title: 'Kesilmiş Bir Partiyi Düzeltme',
      html: 'Temiz bir kaseye taze bir yumurta sarısı koyun. Bir tatlı kaşığı su ile çırpın. Ardından, <strong>kesilmiş karışımı mümkün olduğunca yavaşça ekleyin</strong>, tıpkı çiğ yağ ekler gibi. Tekrar emülsiyon haline geldiğinde, geri kalanını daha hızlı ekleyebilirsiniz.'
    },
    {
      type: 'title',
      text: 'Mutfak Emülsiyon Terimleri Sözlüğü',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Sürekli Faz',
          definition: 'Damlacıkları çevreleyen sıvı - mayonez gibi yağ-su emülsiyonlarında genellikle su, sirke veya narenciye suyu.'
        },
        {
          term: 'Dağılmış Faz',
          definition: 'Küçük damlacıklara ayrılmış sıvı - çoğu mutfak emülsiyonunda yağ. Ne kadar çok eklerseniz, damlacıklar o kadar sıkı paketlenir.'
        },
        {
          term: 'Hacim Oranı',
          definition: 'Yağ hacminin toplam hacme oranı. Yaklaşık %74-85\'te (emülgatöre bağlı olarak), emülsiyon geometrik kırılma noktasına ulaşır.'
        },
        {
          term: 'Birleşme (Koalesans)',
          definition: 'İki veya daha fazla yağ damlacığının daha büyük bir damlacıkta birleşmesi. Bu, görünür bir emülsiyon kırılmasını tetikleyen mikroskobik süreçtir.'
        },
        {
          term: 'Faz Tersinmesi',
          definition: 'Bir yağ-su emülsiyonunun su-yağ emülsiyonuna dönüştüğü nokta - kremadan tereyağı yaparken olduğu gibi. Bu, nihai başarısızlık modudur.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: 'İster klasik bir Fransız mayonezi, ister sarımsaklı bir aioli, ister stabil bir vinaigrette yapıyor olun, isterse modernist hidrokolloidlerle deney yapıyor olun, <strong>yağ-su oranını</strong> anlamak en önemli faktördür. Hesaplayıcımız matematiği halleder, böylece güvenle pişirebilirsiniz.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
