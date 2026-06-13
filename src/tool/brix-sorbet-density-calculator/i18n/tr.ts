import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Sorbet Brix Hesaplayıcısı: Mükemmel Kremsi Kıvam için ŞekerMeyve Oranı ve Donma Noktası Kontrolü';
const description = 'Her seferinde kremsi kıvamda sorbet için tam şeker, meyve püresi ve su dengesini ayarlayın. Hassas Brix ve PAC hesaplamalarıyla buzlu veya cıvık doku sorunlarını düzeltin.';

const faq = [
  {
    question: 'Brix nedir ve sorbette neden önemlidir?',
    answer: 'Brix (°Bx), bir sıvı çözeltideki çözünmüş katı maddelerin  -  özellikle şekerlerin  -  yüzdesini ölçer. Sorbetlerde, %25 ile %30 arasında (ideal olarak %28) bir Brix seviyesi doğru doku için gereklidir. %25\'in altında, yeterli şeker buz kristali oluşumunu engelleyemediği için sorbet kaya gibi sert buzlu bir blok halinde donar. %30\'un üzerinde ise donma noktası o kadar düşer ki sorbet cıvık kalır ve standart bir dondurucuda asla tam olarak katılaşmaz.',
  },
  {
    question: 'Sorbet tarifim için doğru şeker miktarını nasıl hesaplarım?',
    answer: 'Meyve pürenizi tartarak ve doğal Brix değerini bir refraktometre ile ölçerek (veya hazır bir değer seçerek) başlayın. Bunları, istediğiniz parti büyüklüğü ve hedef Brix (varsayılan %28) ile birlikte hesaplayıcıya girin. Hesaplayıcı, toplam karışımı optimum %25-30 Brix aralığına getirmek için ne kadar sakkaroz ve su eklemeniz gerektiğini belirler. Ayrıca donma noktası düşüşünü (PAC) de hesaba katar, böylece sorbet aksi takdirde çok sert olacaksa dekstroz ile değiştirme yapabilirsiniz.',
  },
  {
    question: 'Ev yapımı sorbetim neden her zaman çok sert veya buzlu oluyor?',
    answer: 'Buzlu, kaya gibi sert bir sorbet neredeyse her zaman toplam şeker konsantrasyonunun çok düşük (%25 Brix\'in altında) olduğu anlamına gelir. Meyvedeki su kısmen sıvı kalmak yerine büyük buz kristallerine dönüşerek donar. Çözüm: Brix\'i yükseltmek için daha fazla sakkaroz ekleyin veya bir miktar sakkarozu dekstroz ile değiştirin  -  dekstroz neredeyse iki kat anti-donma gücüne sahiptir (PAC 190\'a karşı 100) ve %30 daha az tatlıdır, böylece sorbeti aşırı tatlı yapmadan donma noktasını düşürebilirsiniz.',
  },
  {
    question: 'Sorbette sakkaroz ve dekstroz kullanımı arasındaki fark nedir?',
    answer: 'Sakkaroz (sofra şekeri) PAC değeri 100 ve POD değeri 100 olan standart tatlandırıcıdır. Dekstroz (glikoz tozu) PAC değeri 190  -  neredeyse iki kat donma noktası düşüşü  -  ancak tatlılığın yalnızca %70\'ine (POD 70) sahiptir. Bu, dekstrozun gram başına aşırı tatlandırmadan sorbeti çok daha etkili şekilde yumuşattığı anlamına gelir. Meyveniz zaten doğal olarak tatlıysa (örn. mango, muz) ve daha fazla tatlılık eklemeden daha fazla anti-donma gücüne ihtiyacınız varsa dekstroz kullanın.',
  },
  {
    question: 'Meyvenin doğal şekeri hesaplamayı nasıl etkiler?',
    answer: 'Farklı meyveler büyük ölçüde değişen doğal şeker seviyelerine sahiptir: limon ve misket limonu yaklaşık %2 Brix, çilek yaklaşık %8, mango ve üzüm %14-18 ve muz %22\'ye kadar çıkabilir. Hesaplayıcı, toplam şeker konsantrasyonunu yanlışlıkla aşmamanız veya altında kalmamanız için meyvenizin doğal Brix değerini hesaba katar. Bu nedenle gerçek meyvenizi ölçmek için bir refraktometre kullanmanız önerilir  -  mevsimsel değişim Brix değerini 3-4 puan oynatabilir.',
  },
];

const howTo = [
  {
    name: 'Meyve pürenizi tartın',
    text: 'Meyve pürenizin veya suyunuzun tam ağırlığını gram cinsinden ölçün.',
  },
  {
    name: 'Meyve Brix değerini tahmin edin veya ölçün',
    text: 'Meyvenizin tam Brix değerini bulmak için bir refraktometre kullanın veya veritabanımızdan tipik bir değer seçin (örn. Mango: %14, Çilek: %8).',
  },
  {
    name: 'Ağırlıkları hesaplayıcıya girin',
    text: 'Meyve ağırlığınızı, meyve Brix değerini ve hedef Brix seviyesini (varsayılan %28) girin.',
  },
  {
    name: 'Önerilen şurup eklemelerini inceleyin',
    text: 'Hesaplayıcı, %28 Brix hedefine ulaşmak için eklenmesi gereken şeker ve suyu hemen gösterecektir.',
  },
  {
    name: 'Gerekirse şeker türlerini ayarlayın',
    text: 'Karışım yeterli donma noktası düşüşüne sahip değilse, sakkaroz yerine dekstroz ekleyin.',
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
  slug: 'brix-sorbet-yogunluk-hesaplayici',
  title: 'Brix Sorbet Yoğunluk Hesaplayıcısı',
  description: 'Her seferinde kremsi kıvamda sorbet için tam şeker, meyve püresi ve su dengesini ayarlayın. Hassas Brix ve PAC hesaplamalarıyla buzlu veya cıvık dokuyu düzeltin.',
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    fruitWeightLabel: 'Meyve Püresi Ağırlığı',
    fruitBrixLabel: 'Meyve Brix Değeri',
    sugarWeightLabel: 'Sakkaroz (Şeker) Ağırlığı',
    dextroseWeightLabel: 'Dekstroz Ağırlığı',
    waterWeightLabel: 'Eklenen Su Ağırlığı',
    targetBrixLabel: 'Hedef Brix',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    brixUnit: '% Bx',
    totalBrixLabel: 'Toplam Karışım Brix',
    totalWeightLabel: 'Toplam Parti Ağırlığı',
    totalPACLabel: 'Donma Noktası Düşüşü (PAC)',
    statusLabel: 'Sorbet Doku Profili',
    statusSoft: 'Çok Yumuşak / Cıvık',
    statusOptimal: 'Optimum Kremsi Kıvam',
    statusHard: 'Çok Sert / Buzlu',
    recommendedTitle: 'Şurup Önerisi (%50 Meyve)',
    recommendedSugarLabel: 'Gereken Sakkaroz',
    recommendedWaterLabel: 'Gereken Su',
    fruitPresetLabel: 'Meyve Hazır Değeri',
    presetCustom: 'Özel Meyve',
    presetLemon: 'Limon / Misket Limonu (%2 Bx)',
    presetStrawberry: 'Çilek / Ahududu (%8 Bx)',
    presetOrange: 'Portakal / Şeftali (%10 Bx)',
    presetMango: 'Mango / Üzüm / Kiraz (%14 Bx)',
    presetBanana: 'Muz (%21 Bx)',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Sorbet Dengeleme Bilimi: Brix, PAC ve Katı Maddeler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Profesyonel bir sorbet yapmak, gıda bilimi alıştırmasıdır. Yapı ve yumuşaklık oluşturmak için süt yağları ve proteinlerine dayanan dondurmanın aksine, sorbet tamamen çözünmüş şekerlere ve stabilizatörlere dayanır. Bu çözünmüş şekerlerin konsantrasyonu Brix derecesi (°Bx) cinsinden ölçülür. Mükemmel bir sorbet karışımı %25 ila %30 Brix şeker konsantrasyonu gerektirir. Şeker içeriği çok düşükse, su büyük, iğne benzeri buz kristalleri halinde donarak pütürlü, kaya gibi sert bir blok oluşturur. Çok yüksekse, donma noktası aşırı düşer ve sorbet tipik ev veya ticari dondurucularda yarı sıvı bir şurup olarak kalır.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '28%',
          label: 'İdeal Hedef Brix',
          icon: 'mdi:target',
        },
        {
          value: '25-30%',
          label: 'Güvenli Brix Aralığı',
          icon: 'mdi:gauge',
        },
        {
          value: '≈50%',
          label: 'Optimum Meyve Oranı',
          icon: 'mdi:fruit-grapes',
        },
        {
          value: 'PAC 100/190',
          label: 'Sakkaroz / Dekstroz',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: 'PAC\'ı Anlamak: Donma Noktası Düşüş Faktörü',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC (Potere Anticongelante veya Anti-Donma Gücü), pastacı şeflerinin bir bileşenin suyun donma noktasını ne kadar düşürdüğünü ölçmek için kullandığı bir ölçüdür. Sakkaroz veya standart sofra şekeri, PAC değeri 100 olan referans noktasıdır. Ancak sakkaroz oldukça tatlıdır. Sorbeti aşırı tatlı yapmadan daha fazla katı madde eklemeniz veya anti-donma kapasitesini artırmanız gerekiyorsa, sakkarozun bir kısmını dekstroz ile değiştirebilirsiniz. Dekstrozun PAC değeri 190\'dır, bu da onu buz kristali oluşumunu önlemede sakkarozdan neredeyse iki kat daha etkili kılarken, yalnızca %70 oranında tatlıdır.',
    },
    {
      type: 'title',
      text: 'Sakkaroz ve Dekstroz Karşılaştırması: Sorbet için Doğru Şekeri Seçmek',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sakkaroz (Sofra Şekeri)',
          icon: 'mdi:cube-outline',
          description: 'Tüm PAC ve POD hesaplamaları için standart tatlandırıcı ve referans noktası. Temiz tatlılık ve gövde sağlar.',
          points: [
            'PAC değeri: 100 (referans)',
            'POD değeri: 100 (tam tatlılık)',
            'En iyi kullanım: birincil tatlandırıcı rolü',
            'Gövde ve standart doku katar',
          ],
        },
        {
          title: 'Dekstroz (Glikoz Tozu)',
          icon: 'mdi:grain',
          description: 'Neredeyse iki kat donma noktası düşürme gücüne ve önemli ölçüde daha az tatlılığa sahip bir monosakkarit.',
          highlight: true,
          points: [
            'PAC değeri: 190 (sakkarozun yaklaşık 2 katı)',
            'POD değeri: 70 (%30 daha az tatlı)',
            'En iyi kullanım: sert sorbetleri yumuşatma',
            'Meyve zaten çok tatlı olduğunda idealdir',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tipik Meyve Brix Değerleri Referans Tablosu',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Meyve Türü', 'Ortalama Brix Değeri', 'Su İçeriği', 'Asitlik Seviyesi'],
      rows: [
        ['Limon / Misket Limonu', '2% - 4% Bx', 'Çok Yüksek', 'Aşırı Yüksek'],
        ['Çilek / Ahududu', '7% - 9% Bx', 'Yüksek', 'Orta'],
        ['Portakal / Şeftali', '9% - 11% Bx', 'Orta-Yüksek', 'Düşük-Orta'],
        ['Elma / Armut', '11% - 13% Bx', 'Orta', 'Düşük'],
        ['Mango / Üzüm / Kiraz', '14% - 18% Bx', 'Orta-Düşük', 'Çok Düşük'],
        ['Muz', '20% - 22% Bx', 'Düşük', 'İhmal Edilebilir'],
      ],
    },
    {
      type: 'title',
      text: 'Sorbet Karışımınızı Nasıl Kalibre Edersiniz',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir sorbeti dengelemek için önce meyve pürenizin ağırlığını ve şeker konsantrasyonunu ölçün. Meyve tatlılığı mevsime ve olgunluğa göre değiştiğinden, doğruluk için bir refraktometre kullanmanız şiddetle tavsiye edilir. Refraktometreniz yoksa, yukarıdaki tabloyu kullanarak tahmin edebilirsiniz. Bu değerleri aldıktan sonra, toplam karışımı hedef %28 Brix\'e getirmek için gereken şeker şurubu (su ve şeker) miktarını tam olarak belirlemek üzere hesaplayıcımıza girin. Optimum doku için, toplam parti ağırlığının yaklaşık %50\'si oranında meyve hedefleyin.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Sorbetim Neden Buzlu veya Çok Sert?',
      html: 'Kaya gibi sert donan bir sorbet neredeyse her zaman <strong>çok az şeker</strong> (Brix %25\'in altında) olduğu anlamına gelir. Meyve püresindeki su, büyük, pürüzlü buz parçaları halinde kristalleşir. Toplam Brix\'i yükseltmek için daha fazla sakkaroz ekleyerek veya aşırı tatlandırmadan PAC\'ı artırmak için bir miktar sakkarozu dekstroz ile değiştirerek bunu düzeltin. Ayrıca meyve oranınızın çok yüksek olmadığını kontrol edin  -  %60\'ı aşan meyve oranı şeker katıları için yetersiz alan bırakır.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Sorbetim Neden Cıvık veya Donmuyor?',
      html: 'Yumuşak veya çorba kıvamında kalan bir sorbet <strong>çok fazla şeker</strong> (Brix %30\'un üzerinde) olduğu anlamına gelir. Donma noktası o kadar düşmüştür ki dondurucunuz karışımı katılaştıramaz. Toplam şeker girdisini azaltın veya meyve doğal olarak çok tatlıysa (örn. muz veya mango), orantılı olarak daha az eklenmiş sakkaroz kullanın. Hedef sıcaklığınızı kontrol edin: ev dondurucuları −18°C\'de çalışır; −12°C servis için uygun olan bir PAC, standart dondurucular için çok yüksek olacaktır.',
    },
    {
      type: 'tip',
      title: 'Bir Refraktometre ile Brix\'i Hassas Şekilde Ölçün',
      html: 'Dijital veya optik bir refraktometre, tutarlı sorbetler için yapabileceğiniz en iyi yatırımdır. Meyve olgunluğu mevsime, çeşide ve kökene göre önemli ölçüde değişir  -  Haziran\'da bir çilek 6°Bx ölçerken, aynı çeşit Ağustos\'ta 10°Bx\'e ulaşabilir. Prizmaya bir damla püre sıkın, değeri okuyun ve hesaplayıcıya girin. Yalnızca tablolara dayanarak tahmin yapmak tutarsız sonuçlar üretecektir.',
    },
    {
      type: 'title',
      text: 'Adım Adım: Bu Hesaplayıcı Nasıl Kullanılır',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Meyve pürenizi tartın</strong>  -  Süzülmüş meyve pürenizin veya suyunuzun tam ağırlığını gram cinsinden ölçmek için dijital bir tartı kullanın.',
        '<strong>Meyve Brix değerini ölçün veya tahmin edin</strong>  -  Hassasiyet için bir refraktometre kullanın veya açılır menüden bir hazır değer seçin (Limon %2, Çilek %8, Mango %14, vb.).',
        '<strong>Hedef Brix değerinizi ayarlayın</strong>  -  Varsayılan, ideal tatlı nokta olan %28\'dir. Tercihinize bağlı olarak %25 ile %30 arasında ayarlayın.',
        '<strong>Şurup önerisini inceleyin</strong>  -  Hesaplayıcı, hedefinize ulaşmak için ne kadar sakkaroz ve su eklemeniz gerektiğini anında gösterir.',
        '<strong>Doku göstergesini kontrol edin</strong>  -  PAC ölçer, dondurucu sıcaklığınızda sorbetin çok sert mi, optimum kremsi kıvamda mı yoksa çok yumuşak mı olacağını söyler.',
        '<strong>Gerekirse dekstroz ile ayarlayın</strong>  -  Sorbetin sert olacağı öngörülüyor ancak zaten yeterince tatlıysa, tatlılık eklemeden PAC\'ı artırmak için bir miktar sakkarozu dekstroz ile değiştirin.',
      ],
    },
    {
      type: 'title',
      text: 'Temel Sorbet Yapım Terimleri',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Brix (°Bx)',
          definition: 'Bir sıvı çözeltideki çözünmüş katı maddelerin (öncelikle şekerlerin) yüzdesi. Sorbetlerde, ideal doku ve kremsi kıvam için hedef aralık 25-30°Bx\'tir.',
        },
        {
          term: 'PAC (Potere Anticongelante)',
          definition: 'Anti-donma gücü  -  bir bileşenin suyun donma noktasını ne kadar düşürdüğünün ölçüsü. Sakkarozun referans PAC değeri 100; dekstrozunki 190\'dır.',
        },
        {
          term: 'POD (Potere Dolcificante)',
          definition: 'Sakkaroza göre tatlandırma gücü (referans 100). Dekstrozun POD değeri 70\'tir, yani gram başına sofra şekerinden %30 daha az tatlıdır.',
        },
        {
          term: 'Dekstroz',
          definition: 'Sorbet formülasyonunda aşırı tatlılık eklemeden donma noktasını düşürmek için kullanılan bir monosakkarit (glikoz tozu). PAC 190, POD 70.',
        },
        {
          term: 'Refraktometre',
          definition: 'Bir sıvının Brix değerini, ışığın numuneden geçerken nasıl kırıldığını (refraksiyon) okuyarak ölçen optik veya dijital bir cihaz. Sorbet tutarlılığı için gereklidir.',
        },
        {
          term: 'Şeker Şurubu',
          definition: 'Sakkaroz ve suyun ağırlıkça 50/50 karışımı, çözünene kadar ısıtılır. Sorbet bazlarına şeker eklemenin standart aracıdır.',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
