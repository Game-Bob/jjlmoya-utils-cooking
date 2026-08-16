import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Emülsiyon Stabilitesi ve Yağ Limiti Hesaplayıcı";
const description = "Mayonez, aioli veya sirke sosunuzun kesilmeden önce ne kadar yağ taşıyabileceğini tam olarak öğrenin. Ücretsiz emülsiyon stabilitesi hesaplayıcımızla kesilen sosların önüne geçin.";

const faq = [
  {
    question: "Mayonezime kesilmeden önce ne kadar yağ ekleyebilirim?",
    answer: "Bu emülgatöre bağlıdır. Yumurta sarısı ~%78'e kadar yağı (su hacminin yaklaşık 3,5 katı), hardal %70'e kadar, soya lesitini %82'ye kadar ve polisorbat %85'e kadar destekler. Özel miktarlarınız için kesin maksimum değeri almak üzere yukarıdaki hesaplayıcıyı kullanın."
  },
  {
    question: "Emülsiyonum neden kesildi veya ayrıştı?",
    answer: "Bir emülsiyon, yağ hacim oranı emülgatörün maksimum paketleme limitini aştığında kesilir. Bu noktada yağ damlacıkları o kadar sıkışır ki birleşir ve karışım ayrışır. Bu anında gerçekleşir - kademeli bir süreç değildir."
  },
  {
    question: "Kesilen bir mayonezi veya aioliyi nasıl düzeltebilirim?",
    answer: "Temiz bir kasede taze bir yumurta sarısı veya bir yemek kaşığı ılık su ile başlayın. Ham yağ ekler gibi sürekli çırparak kesilen karışımı yavaşça dökün. Yukarıdaki hesaplayıcı size tam olarak ne kadar su veya yumurta sarısına ihtiyacınız olduğunu söyler."
  },
  {
    question: "Yağı çok hızlı eklemek emülsiyonun kesilmesine neden olur mu?",
    answer: "Yağı çok hızlı eklemek emülgatörü geçici olarak aşırı yükleyebilir, ancak kesilmenin gerçek nedeni her zaman yanlış faz oranıdır. Yağ oranınız emülgatör limitinin altında kalırsa emülsiyon hızdan bağımsız olarak stabil kalır. Limiti aşarsanız kesilme kaçınılmazdır."
  },
  {
    question: "Emülgatör olarak yumurta sarısı ile hardal arasındaki fark nedir?",
    answer: "Yumurta sarısı (maks %78 yağ) damlacıkların etrafında güçlü bir film oluşturan lesitin ve lipoproteinler içerir. Hardal (maks %70 yağ) müsilaj ve proteinlere dayanır - daha zayıftır ancak lezzet katar. Soya lesitini (%82) ve polisorbat (%85) son derece etkili endüstriyel emülgatörlerdir."
  }
];

const howTo = [
  {
    name: "Emülgatörünüzü seçin",
    text: "Tarifinizdeki emülgatörü seçin - klasik mayonez için yumurta sarısı, soslar için hardal veya modern mutfak için soya lesitini/polisorbat. Her biri farklı bir maksimum yağ limiti belirler."
  },
  {
    name: "Su fazı hacminizi girin",
    text: "Sulu malzemelerinizin toplam mililitresini girin: su, sirke, limon suyu, şarap veya su bazlı herhangi bir sıvı. Hesaplayıcı seçtiğiniz emülgatörün su içeriğini otomatik olarak ekler."
  },
  {
    name: "Yağ hacminizi ayarlayın",
    text: "Kullanmayı planladığınız yağ miktarını girin. Kaydırıcıyı kullanın veya değeri yazın. Hesaplayıcı bu miktarın stabil bir emülsiyon üretip üretmeyeceğini veya kesilmeye neden olup olmayacağını anında gösterir."
  },
  {
    name: "Stabilite sonucunu okuyun ve gerekirse düzeltin",
    text: "Yağ hacim oranı göstergesini kontrol edin. Stabilse hazırsınız. Kesilmişse, kurtarma paneli dengeyi sağlamak için tam olarak ne kadar su (ml) veya kaç ekstra yumurta sarısı eklemeniz gerektiğini söyler."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'emulsion-stability-calculator',
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    title: 'Emülsiyon Stabilitesi Analizörü',
    subtitle: 'Sosunuz kesilmeden önce ne kadar yağa dayanabilir?',
    waterLabel: 'Su Fazı (ml)',
    oilLabel: 'Yağ Hacmi (ml)',
    emulsifierLabel: 'Emülgatör Tipi',
    yolkOption: 'Yumurta Sarısı',
    mustardOption: 'Hardal',
    soyLecithinOption: 'Soya Lesitini',
    polysorbateOption: 'Polisorbat',
    stableStatus: 'Stabil Emülsiyon',
    brokenStatus: 'Kesilmiş Emülsiyon',
    ratioLabel: 'Yağ Hacim Oranı',
    maxLimitLabel: 'Maksimum Yağ Limiti',
    fixTitle: 'Kurtarma Stratejisi',
    waterFixText: 'Faz dengesini sağlamak için su ekleyin:',
    yolkFixText: 'Alternatif olarak ekstra yumurta sarısı kullanın:',
    idealRangeText: 'İdeal aralık %74 ile %80 arasındaki kritik paketleme limitinin altındadır.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Bir Mayonez veya Aioli Kesilmeden Önce Ne Kadar Yağ Taşıyabilir?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Her aşçı kendine şu soruyu sormuştur: <strong>mayonezim neden kesildi?</strong> Cevap göründüğünden daha basittir. Bir emülsiyon - ister klasik bir aioli, ister kremamsı bir sirke sosu veya modern bir köpük olsun - çökmeden önce yalnızca sınırlı miktarda yağ tutabilir. <strong>Emülsiyon stabilitesi hesaplayıcımız</strong>, özel malzemelerinize ve porsiyonlarınıza göre bu kırılma noktasının tam olarak nerede olduğunu gösterir.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '%78', label: 'Yumurta Sarısı Maks Yağ', icon: 'mdi:egg-outline' },
        { value: '%85', label: 'Polisorbat Limiti', icon: 'mdi:flask-outline' },
        { value: '%74', label: 'Teorik Paketleme', icon: 'mdi:sphere' },
        { value: '15 ml', label: 'Sarının Su İçeriği', icon: 'mdi:water' }
      ]
    },
    {
      type: 'list',
      items: [
        '<strong>Yağı çok hızlı ekliyorsunuz</strong> - Hız nadiren gerçek nedendir. Yağ oranı emülgatör limitinin altında kalırsa, ne kadar hızlı dökerseniz dökün emülsiyon tutar.',
        '<strong>Malzemeleriniz çok soğuk</strong> - Soğuk yumurta veya soğuk yağ viskoziteyi artırır ve damlacık oluşumunu zorlaştırır. Malzemeleri her zaman oda sıcaklığına getirin.',
        '<strong>Emülgatörünüzün yağ limitini aştınız</strong> - Her emülgatörün maksimum paketleme oranı vardır. Yumurta sarısı %78\'e kadar, hardal %70, soya lesitini %82 ve polisorbat %85.',
        '<strong>Su fazınız çok küçük</strong> - Yağ damlacıklarını çevreleyecek yeterli su olmadığında, birbirleriyle birleşmekten başka çareleri kalmaz.'
      ]
    },
    {
      type: 'title',
      text: 'Hangi emülgatörü kullanmalısınız? Pratik bir karşılaştırma',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Doğru emülgatörü seçmek tarifinize, lezzet profilinize ve istenen yağ kapasitesine bağlıdır. En yaygın dört mutfak emülgatörünün karşılaştırması aşağıdadır.'
    },
    {
      type: 'proscons',
      title: 'Yumurta Sarısı',
      items: [
        { pro: 'Klasik soslar için maksimum lezzet uyumu', con: 'Kolesterol ve yumurta lezzeti katar' },
        { pro: 'Güçlü emülsiyonlar için lesitin ve lipoproteinler içerir', con: 'Dikkatli sıcaklık kontrolü gerektirir' },
        { pro: 'Doğal renk ve zenginlik katar', con: 'Vegan hazırlıklar için uygun değildir' },
        { pro: '%78 yağ oranına kadar çalışır', con: 'Sarı başına yaklaşık 15 ml su katkısı ile sınırlıdır' }
      ]
    },
    {
      type: 'proscons',
      title: 'Hardal',
      items: [
        { pro: 'Soslara keskin lezzet ve karmaşıklık katar', con: 'Daha düşük maksimum yağ kapasitesi (%70)' },
        { pro: 'Yaygın olarak bulunur ve kullanımı kolaydır', con: 'Yumurta sarısına göre daha zayıf emülsiyon gücü' },
        { pro: 'Oda sıcaklığında iyi çalışır', con: 'Lezzet hassas soslarla çakışabilir' },
        { pro: 'Hızlı soslar için idealdir', con: 'Nötr lezzetli emülsiyonlar için uygun değildir' }
      ]
    },
    {
      type: 'proscons',
      title: 'Soya Lesitini',
      items: [
        { pro: 'Stabil soslar için yüksek yağ toleransı (%82)', con: 'Hassas tartım gerektirir' },
        { pro: 'Nötr lezzet tarifleri değiştirmez', con: 'Yumurta sarısına göre daha az affedicidir' },
        { pro: 'Bitki bazlı ve vegan dostudur', con: 'Çoğu ev aşçısı için standart bir kiler ürünü değildir' },
        { pro: 'Küçük su hacimleriyle çalışır', con: 'Hafif yapay bir doku oluşturabilir' }
      ]
    },
    {
      type: 'proscons',
      title: 'Polisorbat',
      items: [
        { pro: 'Tüm emülgatörler arasında en yüksek yağ kapasitesi (%85)', con: 'Sentetik katkı maddesidir, doğal değildir' },
        { pro: 'Ultra stabil köpükler ve havalar oluşturur', con: 'Ev mutfağı için temini zordur' },
        { pro: 'Minimum su fazı ile çalışır', con: 'Doğru dozaj için terazi gerektirir' },
        { pro: 'Modernist ve deneysel mutfak için idealdir', con: 'Aşırı kullanımda baskındır' }
      ]
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
          points: ['Maks yağ: %78', 'Sarı başına ~15 ml su', 'Zenginlik ve renk katar', 'Mayonez ve aioli için en iyisi']
        },
        {
          title: 'Hardal',
          icon: 'mdi:shaker-outline',
          description: 'Müsilaj ve tohum proteinlerine dayanır. Keskin lezzet katar.',
          points: ['Maks yağ: %70', '~10 ml su içeriği', 'Daha zayıf emülsiyon gücü', 'Soslar için ideal']
        },
        {
          title: 'Soya Lesitini',
          icon: 'mdi:leaf',
          description: 'Yoğunlaştırılmış bitki bazlı surfaktan.',
          points: ['Maks yağ: %82', '~5 ml su içeriği', 'Nötr lezzet profili', 'Modern mutfağın temeli']
        },
        {
          title: 'Polisorbat',
          icon: 'mdi:flask-outline',
          description: 'Maksimum surfaktan kapasitesine sahip sentetik emülgatör.',
          points: ['Maks yağ: %85', '~2 ml su içeriği', 'En yüksek yağ toleransı', 'Köpük ve havalarda kullanılır']
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emülgatör', 'Maks Yağ %', '100 ml Su İçin Yağ', 'En İyi Kullanım'],
      rows: [
        ['Yumurta Sarısı', '%78', '~355 ml', 'Mayonez, aioli, holandez'],
        ['Hardal', '%70', '~233 ml', 'Sirke sosları, hafif soslar'],
        ['Soya Lesitini', '%82', '~456 ml', 'Modernist soslar, köpükler'],
        ['Polisorbat', '%85', '~567 ml', 'Stabil köpükler, deneysel yemekler']
      ]
    },
    {
      type: 'title',
      text: 'Bilim: Emülsiyonlar Neden Kesilir ve Mutfakta Kepler Varsayımı',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Bir mutfak emülsiyonu, küçük yağ damlacıklarını sürekli bir su fazı boyunca dağıtarak çalışır. <strong>Emülgatörler</strong> - yumurta sarısındaki lesitin, hardaldaki müsilaj veya polisorbata benzer sentetik surfaktanlar - her bir damlacığı kaplar ve komşularıyla birleşmesini önler.'
    },
    {
      type: 'paragraph',
      html: 'Kırılma noktası saf geometri ile belirlenir. Yağ damlacıkları küçük paketlenmiş küreler gibi davranır. Belirli bir alana sığabilecek maksimum küre hacmi - <strong>Kepler varsayımı</strong> olarak bilinir - yaklaşık %74\'tür. Gerçek mutfak sistemlerinde bu, güçlü emülgatörlerle %80-85\'e kadar esnetilebilir, ancak bunun ötesinde damlacıklar o kadar sıkışır ki birleşir ve emulsi̇yon anında çöker.'
    },
    {
      type: 'card',
      columns: 2,
      items: [
        {
          icon: 'mdi:egg-outline',
          title: 'Klasik Mayonez & Aioli',
          html: '%78 yağa kadar <strong>yumurta sarısı</strong> kullanın. Su bardağı yağ başına bir sarı ile başlayın. Daha geniş bir güvenlik marjı için yağı dökmeden önce bir çay kaşığı su veya limon suyu ekleyin.'
        },
        {
          icon: 'mdi:shaker-outline',
          title: 'Sirke Sosları & Hafif Soslar',
          html: '%70 yağa kadar <strong>hardal</strong> kullanın. Hardaldaki müsilaj geçici bir sos için yeterli emülsiyonlaşma sağlar.'
        },
        {
          icon: 'mdi:leaf',
          title: 'Modernist Soslar & Stabil Köpükler',
          html: '%82 yağa kadar <strong>soya lesitini</strong> kullanın. Yağ ve asit lezzetinin öne çıkmasını istediğiniz nötr lezzetli emülsiyonlar için idealdir.'
        },
        {
          icon: 'mdi:flask-outline',
          title: 'Deneysel Köpükler & Havalar',
          html: '%85 yağa kadar <strong>polisorbate</strong> kullanın. Maksimum yağ yükü ve köpük stabilitesi gerektiren modernist teknikler için ilk tercihtir.'
        }
      ]
    },
    {
      type: 'title',
      text: 'Adım Adım Kesilmiş Bir Emülsiyonu Kurtarma',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Mayoneziniz veya sosunuz zaten kesildiyse <strong>atmayın</strong>. Çözüm basittir - ancak yalnızca faz oranını anlıyorsanız. Daha sert çırpmak işe yaramaz; daha fazla sürekli faz (su) eklemeniz gerekir.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Emülsiyonunuzun Kesilmek Üzere Olduğunu Gösteren 3 Yaygın Belirti',
      html: 'İlk uyarı olarak <strong>koyulaşmanın ardından aniden incelmeye</strong> dikkat edin. Ardından <strong>parlak yüzeyin pütürlü hale gelip gelmediğine</strong> veya <strong>kenarlarda görünür yağ birikip birikmediğine</strong> bakın. Bunlardan birini görürseniz, yağ eklemeyi hemen durdurun ve devam etmeden önce bir çay kaşığı soğuk su ekleyip çırpın.'
    },
    {
      type: 'title',
      text: 'Her Seferinde Mükemmel Emülsiyonlar İçin Pratik İpuçları',
      level: 3
    },
    {
      type: 'message',
      html: '<strong>Altın kural:</strong> Yağ-su oranı teknik, sıcaklık veya çırpma hızından daha önemlidir. Çırpmaya başlamadan önce kesin yağ limitinizi bulmak için hesaplayıcımızı kullanın.'
    },
    {
      type: 'tip',
      title: 'Sıcaklık Önemlidir',
      html: 'Tüm malzemeler <strong>oda sıcaklığında</strong> olmalıdır. Soğuk yumurta veya soğuk yağ kesilme riskini önemli ölçüde artırır. Malzemeleri başlamadan 30 dakika önce buzdolabından çıkarın.'
    },
    {
      type: 'tip',
      title: 'Su Güvenlik Ağı',
      html: 'Tarifiniz yeterince asit (sirke, limon suyu) içermiyorsa, yağ eklemeye başlamadan önce <strong>yumurta sarısı başına bir çay kaşığı soğuk su</strong> ekleyin. Bu ekstra su daha geniş bir güvenlik marjı oluşturur.'
    },
    {
      type: 'tip',
      title: 'Kesilmiş Bir Karışımı Düzeltme',
      html: 'Temiz bir kaseye taze bir yumurta sarısı koyun. Bir çay kaşığı su ile çırpın. Ardından <strong>kesilmiş karışımı sanki ham yağmış gibi olabildiğince yavaş dökün</strong>. Tekrar emülsiyon haline geldikten sonra geri kalanını daha hızlı ekleyebilirsiniz.'
    },
    {
      type: 'title',
      text: 'Mutfak Emülsiyonları Sözlüğü',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Sürekli Faz',
          definition: 'Damlacıkları çevreleyen sıvı - mayonez gibi yağ-içinde-su emülsiyonlarında genellikle su, sirke veya limon suyu.'
        },
        {
          term: 'Dağılan Faz',
          definition: 'Küçük damlacıklara ayrılan sıvı - çoğu mutfak emülsiyonunda yağ. Ne kadar çok eklerseniz damlacıklar o kadar sıkışır.'
        },
        {
          term: 'Hacim Oranı',
          definition: 'Yağ hacminin toplam hacme oranı. Yaklaşık %74-85\'te (emülgatöre bağlı olarak) emülsiyon geometrik kırılma noktasına ulaşır.'
        },
        {
          term: 'Birleşme (Koalesans)',
          definition: 'İki veya daha fazla yağ damlacığının birleşerek daha büyük bir damlacık oluşturması. Bu, görünür kesilmeyi tetikleyen mikroskobik süreçtir.'
        },
        {
          term: 'Faz Dönüşümü',
          definition: 'Yağ-içinde-su emülsiyonunun su-içinde-yağ emülsiyonuna dönüştüğü nokta - kremadan tereyağı yaparken olduğu gibi.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Stabil Emülsiyonlar İçin Önemli Noktalar',
      items: [
        'Her emülgatörün maksimum yağ oranı vardır: yumurta sarısı %78, hardal %70, soya lesitini %82, polisorbat %85.',
        'Kırılma noktası çırpma hızına değil, geometriye (Kepler varsayımı %74) bağlıdır.',
        'Her zaman oda sıcaklığındaki malzemelerle başlayın ve güvenlik marjı olarak az miktarda su ekleyin.',
        'Kesilmiş bir emülsiyon daha sert çırpılarak değil, taze emülgatör ve daha fazla su fazı eklenerek kurtarılabilir.',
        'Malzemeleriniz için kesin yağ limitini almak üzere yukarıdaki emülsiyon stabilitesi hesaplayıcımızı kullanın.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
