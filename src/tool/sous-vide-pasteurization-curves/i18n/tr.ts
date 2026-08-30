import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Sous Vide Pastörizasyon Eğrileri Hesaplama';
const description = 'Etin şeklini ve kalınlığını hesaba katarak sous vide pişirmede Salmonella ve Listeria\'ya karşı güvenli merkez pastörizasyonu için gereken kesin süreyi hesaplayın.';

const faq = [
  {
    question: 'Sous vide pişirmede pastörizasyon nedir?',
    answer: 'Pastörizasyon, gıdaların belirli bir sıcaklığa kadar ısıtılması ve patojen mikroorganizmaları (Salmonella, Listeria ve E. coli gibi) güvenli, kabul edilebilir seviyelere indirmek için orada yeterince uzun süre tutulması işlemidir. Sterilizasyondan farklı olarak tüm bakteri sporlarını yok etmez ancak gıdayı tüketim için güvenli hale getirir.',
  },
  {
    question: 'Et kalınlığı pişirme süresini neden bu kadar dramatik etkiler?',
    answer: 'Gıdalarda ısı transferi iletim yoluyla gerçekleşir. Gıdanın merkezinin (en soğuk noktası) su banyosu sıcaklığına ulaşması için gereken süre, kalınlığın karesiyle doğru orantılı olarak artar. Bir antrikotun kalınlığını iki katına çıkarmak, ısıtma süresini yaklaşık dört kat artırır.',
  },
  {
    question: 'Neden 54.4°C (130°F) en düşük güvenli sous vide sıcaklığı olarak kabul edilir?',
    answer: '54.4°C\'nin altındaki sıcaklıklarda, Salmonella gibi yaygın gıda kaynaklı patojenler hayatta kalabilir ve aktif olarak çoğalabilir. Gıdalar 4 saatten fazla bu "tehlike bölgesinde" tutulursa, ısıya dayanıklı toksinler oluşabilir ve bu da ciddi gıda güvenliği riskleri oluşturur.',
  },
  {
    question: '6D veya 6.5D azaltma nedir?',
    answer: 'D-azaltma, bakteri popülasyonundaki logaritmik düşüşü ifade eder. 6.5D azaltma, hedef patojenin %99.99995\'inin öldürülmesi anlamına gelir. Örneğin başlangıçta 1.000.000 bakteri varsa, 1\'den azı hayatta kalacaktır.',
  },
  {
    question: 'Gıda geometrisi ısıtma hızını nasıl değiştirir?',
    answer: 'Isı bir küreye her yönden (3 boyutlu) ve bir silindire yanlardan (2 boyutlu) nüfuz ederken, düz bir plaka esas olarak üstten ve alttan (1 boyutlu) ısıtılır. Bu nedenle küreler en hızlı ısınır, bunu silindirler takip eder ve düz plakalar en uzun süreyi alır.',
  },
];

const howTo = [
  {
    name: 'Su banyosu sıcaklığını ayarlayın',
    text: 'Kaydırıcıyı su banyosu sıcaklığınıza uyacak şekilde ayarlayın. Daha yüksek sıcaklıkların pastörize etme işlemini katlanarak hızlandırdığını unutmayın.',
  },
  {
    name: 'Et kalınlığını belirtin',
    text: 'Etinizin en kalın kısmını milimetre cinsinden ölçün ve hesaplayıcıya girin.',
  },
  {
    name: 'Geometri şeklini seçin',
    text: 'Gıdanızın düz bir plaka (bonfile, tavuk göğsü), silindir (rosto, rulo et) veya küre (köfte) şeklinde olup olmadığını seçin.',
  },
  {
    name: 'Hedef patojeni seçin',
    text: 'Standart et ve kümes hayvanları güvenliği için Salmonella\'yı, yüksek riskli durumlar veya gelişmiş güvenlik için Listeria monocytogenes\'i seçin.',
  },
  {
    name: 'Toplam pişirme süresini inceleyin',
    text: 'Hesaplayıcı, merkez ısıtma süresini ve pastörizasyon bekleme süresini verir. Toplam güvenli pişirme süresi için bunları toplayın.',
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
  slug: 'sous-vide-pastorizasyon-egrileri',
  title: 'Sous Vide Pastörizasyon Eğrileri',
  description: 'Etin şeklini ve kalınlığını hesaba katarak sous vide pişirmede Salmonella ve Listeria\'ya karşı güvenli merkez pastörizasyonu için gereken kesin süreyi hesaplayın.',
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    title: 'Sous Vide Pastörizasyon Eğrileri',
    subtitle: 'Termal letalite kinetiği ve merkez sıcaklık kompanzasyonu',
    bathTempLabel: 'Su Banyosu Sıcaklığı',
    thicknessLabel: 'Et Kalınlığı',
    shapeLabel: 'Et Geometrisi',
    shapeSlab: 'Düz Plaka (örn. Antrikot, Tavuk Göğsü)',
    shapeCylinder: 'Silindir (örn. Rosto, Rulo Et)',
    shapeSphere: 'Küre (örn. Köfte)',
    pathogenLabel: 'Hedef Patojen',
    pathogenSalmonella: 'Salmonella (Standart)',
    pathogenListeria: 'Listeria monocytogenes',
    resultsTitle: 'Güvenli Pastörizasyon Süresi',
    heatingTime: 'Merkezin Banyo Sıcaklığına Ulaşma Süresi',
    lethalityTime: 'Pastörizasyon Bekleme Süresi',
    totalTime: 'Toplam Pişirme Süresi',
    dangerZoneTitle: 'Biyolojik Tehlike Bölgesi',
    dangerZoneDesc: '54.4°C\'nin altındaki sıcaklıklar gıdaları güvenli bir şekilde pastörize edemez çünkü bakteri üreme hızı termal ölüm hızını aşabilir. Bu sıcaklığın altında 4 saatten fazla sous vide pişirmeyin.',
    chartTitle: 'Logaritmik Bakteri Azalma Eğrisi',
    chartXLabel: 'Süre (dakika)',
    chartYLabel: 'Logaritmik Azalma',
    disclaimer: 'Hesaplamalar 5°C başlangıç sıcaklığı ve yağsız etin termal difüzyon katsayısı varsayımıyla yapılmıştır. Banyo sıcaklığını daima kalibre edilmiş bir termometreyle doğrulayın.',
    minutesUnit: 'dk',
    mmUnit: 'mm',
    inUnit: 'inç',
    tempUnitC: '°C',
    tempUnitF: '°F',
    systemLabel: 'Ölçüm Sistemi',
    systemMetric: 'Metrik',
    systemImperial: 'İmparatorluk'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Sous Vide Pastörizasyon: Ev Aşçıları İçin Kapsamlı Güvenlik Rehberi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sous vide pişirme, kusursuz mühürlenmiş etleri ev ortamında kolayca hazırlamayı sağlayarak mutfakları dönüştürdü. Ancak bu yöntem önemli bir karmaşıklık barındırır: Düşük sıcaklıklarda tehlikeli bakterilerin termal ölüm eşiğinde çalışırsınız. Bu rehber, her et kesimi için güvenli pastörizasyon sürelerini nasıl hesaplayacağınızı açıklar.',
    },
    {
      type: 'title',
      text: 'Sous Vide Güvenliği Neden Geleneksel Pişirmeden Farklıdır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir tavuk göğsünü 200°C\'de mühürlediğinizde yüzey anında yüksek sıcaklığa ulaşır ve bakteriler saniyeler içinde ölür. Sous vide ise farklıdır: Su banyosu hedef sıcaklıkta (örneğin 55°C) çalışır. Bu sıcaklıklarda Salmonella veya Listeria\'yı öldürmek dakikalar ve saatler alan bir süreçtir.',
    },
    {
      type: 'title',
      text: 'Gerçek Dünya Sous Vide Süreleri: Ev Aşçılarının İhtiyaç Duyduğu Bilgiler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Aşağıdaki tablo ev aşçılarının aradığı bilgileri içerir: Belirli et kesimleri, yaygın sıcaklıklar ve 25 mm kalınlık için buzdolabı sıcaklığından (5°C) başlanarak hesaplanan toplam pişirme süreleri.',
    },
    {
      type: 'table',
      headers: ['Gıda', 'Banyo Sıcaklığı', 'Merkez Isınma', 'Pastörizasyon Süresi', 'Toplam Süre', 'Sonuç'],
      rows: [
        ['Tavuk Göğsü', '60°C / 140°F', '~35 dk', '~28 dk', '~63 dk', 'Sulu, tam pastörize'],
        ['Tavuk Göğsü', '65°C / 149°F', '~35 dk', '~3 dk', '~38 dk', 'Daha sıkı, geleneksel doku'],
        ['Somon Fileto', '50°C / 122°F', '~20 dk', '~55 dk', '~75 dk', 'Yumuşak, güvenli'],
        ['Dana Biftek', '55°C / 131°F', '~40 dk', '~89 dk', '~129 dk', 'Orta az pişmiş, yüzey pastörize'],
        ['Domuz Bonfile', '60°C / 140°F', '~35 dk', '~28 dk', '~63 dk', 'Yumuşak, hafif pembe'],
        ['Ördek Göğsü', '57°C / 135°F', '~35 dk', '~52 dk', '~87 dk', 'Lezzetli, güvenli'],
        ['Hindi Göğsü', '63°C / 145°F', '~40 dk', '~9 dk', '~49 dk', 'Sulu, kuru değil'],
        ['Köfte (küre)', '60°C / 140°F', '~25 dk', '~28 dk', '~53 dk', 'Eşit pişmiş'],
      ],
    },
    {
      type: 'title',
      text: 'Bakteri Ölümünün Logaritmik Matematiği: D ve z Değerleri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bakteri ölümü birinci derece kinetiğe uyar. <strong>D-değeri</strong>, belirli bir sıcaklıkta bakterilerin %90\'ını öldürmek için gereken süredir. <strong>z-değeri</strong> ise süreci 10 kat hızlandırmak için gereken sıcaklık artışını gösterir.',
    },
    {
      type: 'title',
      text: 'Tehlike Bölgesi: 54.4°C (130°F) Neden Mutlak Alt Sınırdır',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '54.4°C (130°F) Altında Biyolojik Tehlike',
      html: '54.4°C altındaki sıcaklıklarda 4 saatten fazla sous vide pişirmeyin. Bu sınırın altında bakteriler ölme hızlarından daha hızlı çoğalabilir.',
    },
    {
      type: 'title',
      text: 'Et Şekli ve Kalınlığının Pişirme Süresine Etkisi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Isı iletimi Fourier kanununa uyar. Merkezin ısınma süresi <strong>kalınlığın karesiyle</strong> orantılı olarak artar. Düz parçalar en yavaş, silindir ve küre şeklindeki gıdalar ise daha hızlı ısınır.',
    },
    {
      type: 'title',
      text: 'Salmonella ve Listeria: Hedef Patojen Seçimi',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Salmonella (Standart)',
          icon: 'mdi:bacteria-outline',
          description: 'Kümes hayvanları ve ette yaygın görülen, ısıya orta derecede duyarlı patojen.',
          points: [
            'z-değeri 5.5°C',
            'Hedef: Kanatlılar için 6.5-log azalma',
            'D60 = 4.3 dakika',
            'Sağlıklı yetişkinler için güvenli',
            'Et güvenliğinde standart referans',
          ],
        },
        {
          title: 'Listeria monocytogenes',
          icon: 'mdi:shield-alert-outline',
          description: 'Salmonella\'ya göre ısıya daha dayanıklıdır. Risk grupları için kritiktir.',
          highlight: true,
          points: [
            'Salmonella\'dan daha yüksek ısı direnci',
            'z-değeri 6.0°C',
            'Hedef: 6-log azalma önerilir',
            'D60 = 7.7 dakika: İki kata yakın süre gerektirir',
            'Hamileler ve bağışıklığı zayıf olanlar için kritik',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Hassas Gruplar İçin Gıda Güvenliği',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hamileler ve bağışıklık sistemi zayıf bireyler hedef patojen olarak Listeria\'yı seçmeli ve pişirme sürelerini uzatmalıdır.',
    },
    {
      type: 'title',
      text: 'Buzdolabı Başlangıç Sıcaklığının Önemi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hesaplayıcı 5°C buzdolabı başlangıç sıcaklığını esas alır. Donmuş gıdalar çözünme nedeniyle ek süre gerektirir.',
    },
    {
      type: 'title',
      text: 'Pastörizasyon Sterilizasyon Demek Değildir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pastörizasyon tüm bakteri sporlarını öldürmez. Pişen gıdalar hemen tüketilmeli veya buzlu suda hızla soğutulmalıdır.',
    },
    {
      type: 'title',
      text: 'USDA FSIS Standartlarına Uyum',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hesaplama modeli, resmi USDA FSIS Ek A termal öldürme standartlarını temel alır.',
    },
    {
      type: 'title',
      text: 'Balık ve Deniz Ürünleri Özel Kuralları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Balıklar daha hızlı ısınır ancak parazit riski taşır. Hafif pişirilecek balıklar önceden dondurulmalıdır.',
    },
    {
      type: 'title',
      text: 'Doku ve Güvenlik Dengesi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Düşük sıcaklıklar daha sulu doku sağlar ancak süreyi uzatır. Yüksek sıcaklıklar daha hızlı pişirir.',
    },
    {
      type: 'title',
      text: 'Ekipman Kalibrasyonu',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Cihazınızın sıcaklığını kalibre bir termometre ile doğrulayın.</strong> 1°C sapma bile pastörizasyon süresini etkiler.',
    },
    {
      type: 'title',
      text: 'Birden Fazla Poşet Pişirme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Su banyosunda poşetler arasında suyun serbestçe dolaşabildiğinden emin olun.',
    },
    {
      type: 'title',
      text: 'Hızlı Referans: Minimum Güvenli Sıcaklıklar ve Süreler',
      level: 2,
    },
    {
      type: 'title',
      text: 'Servis Öncesi Pratik Kontrol',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Servisten önce poşetin tamamen suya battığını, su dolaşımının engellenmediğini ve termometrenin kalibre edildiğini kontrol edin. Farklı kalınlıktaki parçalar için süreyi en kalın parçaya göre değerlendirin. Yemek hemen tüketilmeyecekse soğuk zincir ve hızlı soğutma kurallarına uyun.',
    },
    {
      type: 'table',
      headers: ['Gıda Türü', 'Min. Merkez Sıcaklık', 'Min. Sıcaklıkta Süre', 'Daha Hızlı Sıcaklık', 'Önerilen Grup'],
      rows: [
        ['Tavuk ve Kanatlılar', '60°C / 140°F', '~28 dk (6.5-log Salmonella)', '65°C: ~3 dk bekleme', 'Tüm tüketiciler'],
        ['Domuz Eti', '60°C / 140°F', '~28 dk (6.5-log Salmonella)', '65°C: ~3 dk bekleme', 'Tüm tüketiciler'],
        ['Dana Eti', '55°C / 131°F', '~89 dk (6.5-log Salmonella)', '60°C: ~28 dk bekleme', 'Sağlıklı yetişkinler'],
        ['Kıyma', '60°C / 140°F', '~28 dk (6.5-log Salmonella)', '65°C: anında', 'Tüm tüketiciler'],
        ['Balık ve Deniz Ürünleri', '50°C / 122°F', '~55 dk (Listeria)', '55°C: ~22 dk bekleme', 'Önceden dondurulmuş'],
        ['Yumurta (kabuklu)', '57°C / 135°F', '~75 dk (Salmonella)', '60°C: ~28 dk bekleme', 'Pastörize yumurta'],
        ['Sebzeler', '85°C / 185°F', 'Uygulanamaz (enzim inaktivasyonu)', 'N/A', 'Pektin yumuşatma'],
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
