import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Isıl Atalet Hesaplayıcı: Carry Over Cooking Tahmin Aracı';
const description = 'Fırından çıkardıktan sonra rostonuzun kaç derece daha pişmeye devam edeceğini tahmin edin. Mükemmel bir medium rare için tam çekme sıcaklığını alın.';

const faq = [
  {
    question: 'Carry-over cooking nedir ve neden olur?',
    answer: 'Carry-over cooking, aynı zamanda termal atalet olarak da adlandırılır, yiyecek fırından çıkarıldıktan sonra iç sıcaklığın yükselmeye devam etmesidir. Dış katmanlarda depolanan ısı, merkeze doğru iletilmeye devam eder. 50°C\'de çekilen bir rost, dinlenme sırasında 54°C\'ye ulaşabilir - rare ile medium-rare arasındaki fark budur.',
  },
  {
    question: 'Fırın sıcaklığı carry-over\'u nasıl etkiler?',
    answer: 'Daha yüksek fırın sıcaklıkları (200-250°C), yüzey ile çekirdek arasında daha büyük bir sıcaklık gradyanı oluşturarak kabukta daha fazla gizli ısı depolar. Bu, carry-over etkisini artırır. 120°C\'de pişirilen bir rost minimal carry-over (~1°C) gösterirken, 220°C\'deki bir rost dinlenme sırasında 5-8°C kazanabilir.',
  },
  {
    question: 'Etin şekli carry-over hesaplamasını değiştirir mi?',
    answer: 'Evet. Geometri, ısı nüfuziyetini önemli ölçüde etkiler. Bütün kuşlar ve kalın rostolar yüzey alanına kıyasla daha fazla termal kütleye sahiptir, bu nedenle daha fazla ısı tutar ve daha çok carry-over yapar. Biftek gibi düz kesimler yüksek yüzey-hacim oranına sahiptir ve minimal carry-over ile hızla soğur.',
  },
  {
    question: 'Eti çektikten sonra ne kadar dinlendirmeliyim?',
    answer: 'Dinlenme süresi, ağırlık ve geometriye bağlıdır. Genel kural, her 100g et için yaklaşık 1 dakika, minimum 10 dakika, maksimum 45 dakikadır. 2 kg\'lık bir rost yaklaşık 16 dakika dinlenmeye ihtiyaç duyar. Bu süre boyunca iç sıcaklık dengelenir ve carry-over etkisi tamamlanır.',
  },
];

const howTo = [
  {
    name: 'Et geometrisini seçin',
    text: 'Kümes hayvanları için Bütün Kuş, bonfile ve kemiksiz parçalar için Silindirik Rost veya biftek ve filetolar için Düz Kesim\'i seçin.',
  },
  {
    name: 'Ağırlığı girin',
    text: 'Kesiminizin toplam ağırlığını gram cinsinden girin. Geometri türüne göre minimum ağırlıklar uygulanır.',
  },
  {
    name: 'Fırın sıcaklığını ayarlayın',
    text: 'Gerçek fırın sıcaklığınızı girin. Daha yüksek sıcaklıklar carry-over etkisini artırır.',
  },
  {
    name: 'Hedef sıcaklığınızı ayarlayın',
    text: 'İstenen nihai iç sıcaklığı girin (ör. 54°C medium-rare dana eti için, 74°C kümes hayvanları için).',
  },
  {
    name: 'Çekme sıcaklığını okuyun',
    text: 'Hesaplayıcı, dinlenme sonrası hedefe ulaşmak için eti tam olarak ne zaman çekmeniz gerektiğini söyler.',
  },
  {
    name: 'Eti dinlendirin',
    text: 'Eti önerilen süre boyunca dinlendirin. Çok sıkı örtmeyin, aksi halde kabuk yumuşar.',
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
  slug: 'pisirme-tahmin-araci',
    title: 'Carry Over Cooking Tahmin Aracı',
  description: 'Fırından çıkardıktan sonra rostonuzun kaç derece daha pişmeye devam edeceğini tahmin edin. Mükemmel bir medium rare için tam çekme sıcaklığını alın.',
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
  title: 'Carry Over Cooking Tahmin Aracı',
    subtitle: 'Hassas kızartma için termal atalet hesaplayıcısı',
    geometryLabel: 'Et Geometrisi',
    wholeBird: 'Bütün Kuş (Kümes Hayvanları)',
    cylindricalRoast: 'Silindirik Rost (Bonfile, Kemiksiz)',
    flatCut: 'Düz Kesim (Biftek, Fileto)',
    weightLabel: 'Ağırlık',
    ovenTempLabel: 'Fırın Sıcaklığı',
    targetTempLabel: 'Hedef İç Sıcaklık',
    pullTemp: 'Çekme Sıcaklığı',
    carryOver: 'Carry-Over',
    restTime: 'Dinlenme Süresi',
    minutes: 'dk',
    degreesC: '°C',
    degreesF: '°F',
    unitLabel: 'Birimler',
    metricUnit: 'Metrik',
    imperialUnit: 'Imperial',
    geometryDescCylindrical: 'Silindirik rost geometrisi seçildi - öngörülebilir carry-over ile orta düzeyde termal atalet.',
    weightG: 'g',
    weightOz: 'oz',
    errorTargetExceedsOven: 'Hedef sıcaklık, fırın sıcaklığını aşamaz.',
    errorOvenTooHot: 'Fırın sıcaklığı 350°C\'yi aşıyor. Lütfen sıcaklığı düşürün.',
    errorWeightTooLow: 'Ağırlık, bu geometri için minimumun altında.',
    errorWeightTooHigh: 'Ağırlık, bu geometri için maksimumu aşıyor.',
    pullNow: 'Eti şimdi çekin',
    pullAt: 'Şurada çek',
    toReach: 'ulaşmak için',
    afterRest: 'dinlenme sonrası',
    carryOverWillAdd: 'Carry-over yaklaşık olarak ekleyecek',
    footerTemplate: '{carry} carry-over · {rest} dinlenme · {weight}{wunit}, {oven} fırın → {target} hedef',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Carry-Over Cooking Tahmin Aracı: Her Seferinde Mükemmel Çekme Sıcaklığını Alın',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Carry-over cooking, yiyecek fırından çıktıktan sonra iç sıcaklığın yükselmeye devam etmesidir. Dış katmanlar kızartma sırasında ısı depolar ve bu enerji, dinlenme sırasında daha soğuk merkeze doğru iletilmeye devam eder. 50°C\'de çekilen kalın bir rost, dinlenme sonrası 54°C\'ye ulaşabilir - rare ile medium-rare arasındaki fark. Bu hesaplayıcı, rostonuzun tam olarak kaç derece yükseleceğini tahmin eder, böylece onu doğru anda çekebilirsiniz.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5-8°C', label: 'Tipik carry-over (sıcak fırın)', icon: 'mdi:thermometer' },
        { value: '1-3°C', label: 'Minimal carry-over (düşük fırın)', icon: 'mdi:thermometer-low' },
        { value: '16 dk', label: '2kg rost için dinlenme süresi', icon: 'mdi:clock-outline' },
        { value: '45 dk', label: 'Maksimum önerilen dinlenme', icon: 'mdi:clock-alert' },
      ],
    },
    {
      type: 'title',
      text: 'Pişme Derecesine Göre Çekme Sıcaklığı Tablosu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hedef iç sıcaklığınızı bulmak için bu tabloyu kullanın, ardından hesaplayıcının kesin çekme sıcaklığını belirlemesine izin verin. Unutmayın: çekme sıcaklığı her zaman hedefinizden <strong>daha düşüktür</strong> çünkü carry-over etkisi dinlenme sırasında pişirmeye devam edecektir.',
    },
    {
      type: 'table',
      headers: ['Pişme Derecesi', 'Hedef Sıcaklık', 'Çekme Sıcaklığı (200°C fırın)', 'Dinlenme Süresi'],
      rows: [
        ['Dana Eti Rare', '52°C / 126°F', '46-48°C / 115-118°F', '10-15 dk'],
        ['Dana Eti Medium-Rare', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 dk'],
        ['Dana Eti Medium', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 dk'],
        ['Dana Eti Well Done', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 dk'],
        ['Domuz Eti Medium', '63°C / 145°F', '57-59°C / 135-138°F', '10-15 dk'],
        ['Domuz Eti Well Done', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 dk'],
        ['Tavuk/Hindi Göğsü', '74°C / 165°F', '68-70°C / 154-158°F', '15-20 dk'],
        ['Tavuk/Hindi But', '82°C / 180°F', '76-78°C / 169-172°F', '15-20 dk'],
        ['Kuzu Eti Medium-Rare', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 dk'],
        ['Kuzu Eti Medium', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 dk'],
      ],
    },
    {
      type: 'title',
      text: 'Geometri Termal Hesaplamayı Nasıl Değiştirir',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Bütün Kuş',
          icon: 'mdi:food-drumstick',
          description: 'Yüzey alanına göre maksimum termal kütle. Kalın göğüs ve but çekirdekleri muazzam gizli ısı depolar.',
          highlight: false,
          points: ['Carry-over: 200°C fırından 5-10°C', 'Dinlenme: 20-45 dakika', 'En iyisi: hindi, bütün tavuk, ördek', 'Hedefin 8-10°C altında çekin'],
        },
        {
          title: 'Silindirik Rost',
          icon: 'mdi:food-steak',
          description: 'En yaygın kızartma şekli. Öngörülebilir carry-over değerleriyle orta düzeyde ısı tutma.',
          highlight: true,
          points: ['Carry-over: 200°C fırından 3-7°C', 'Dinlenme: 15-30 dakika', 'En iyisi: bonfile, domuz bonfile, kuzu pirzola', 'Hedefin 5-7°C altında çekin'],
        },
        {
          title: 'Düz Kesim',
          icon: 'mdi:food',
          description: 'Yüksek yüzey-hacim oranı, ısının hızla kaçtığı anlamına gelir. Carry-over minimaldir ancak yine de önemlidir.',
          highlight: false,
          points: ['Carry-over: 200°C fırından 1-3°C', 'Dinlenme: 5-15 dakika', 'En iyisi: biftek, tavuk göğsü, balık fileto', 'Hedefin 1-3°C altında çekin'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Yaygın Carry-Over Hataları ve Bunları Düzeltme Yolları',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Çok geç çekmek',
      html: 'Termometre hedef sıcaklığınızı gösterene kadar bekler ve sonra çekerseniz, carry-over 3-8°C aşacaktır. Medium-rare rost, medium veya medium-well olur. <strong>Her zaman hedefinizin 5-8°C altında çekin.</strong> Kesin rakamı almak için bu hesaplayıcıyı kullanın.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Çok erken dilimlemek',
      html: 'Rostoyu çektikten hemen sonra kesmek, suların %30\'a kadarını serbest bırakır. Termal gradyanın dengelenmesi için zaman yoktur, bu nedenle merkez az pişmiş kalırken dış katmanlar aşırı pişer. <strong>Tam önerilen süre boyunca dinlendirin.</strong> Folyo ile gevşekçe örtün - sıkıca sarmayın, aksi halde buhar kabuğu yumuşatır.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Fırın sıcaklığı çok düşük',
      html: 'Düşük fırın (150°C / 300°F altında), yüzey ve çekirdek arasında minimum sıcaklık gradyanı oluşturur. Bu, neredeyse hiç carry-over etkisi olmadığı anlamına gelir. Düşük sıcaklıkta pişiriyorsanız, minimum aşma riskiyle tam hedef sıcaklığınızda çekebilirsiniz. Ancak, kabuk gelişimi önemli ölçüde azalacaktır.',
    },
    {
      type: 'title',
      text: 'Mükemmel Kızartma İçin Profesyonel İpuçları',
      level: 3,
    },
    {
      type: 'tip',
      title: '10 Derece Kuralı',
      html: 'Sıcak bir fırın (220°C / 425°F), bütün kuşlar için her 100g et başına yaklaşık 1°C ve silindirik rostolar için 0,7°C carry-over ekler. Bunu hesaplayıcıya karşı bir sağlama olarak kullanın: 220°C\'de 2 kg\'lık bir tavuk yaklaşık 7-9°C carry-over yapmalıdır.',
    },
    {
      type: 'tip',
      title: 'Dinlenme Pozisyonu Önemlidir',
      html: 'Eti her zaman sıcak bir tabak veya kesme tahtasında dinlendirin, soğuk bir yüzeyde değil. Soğuk bir yüzey, rostun tabanından ısı çekerek dengesiz son sıcaklıklar oluşturur. Bütün kuşlarda, suların beyaz et boyunca eşit dağılması için göğüs tarafı yukarı bakacak şekilde dinlendirin.',
    },
    {
      type: 'tip',
      title: 'Örtün, Sarmayın',
      html: 'Dinlenme sırasında rostoyu alüminyum folyo ile gevşekçe örtün. Sıkıca sarmak buharı hapseder ve kabuğun yumuşamasına neden olur. Gevşek bir örtü, buharın kaçmasına izin verirken ısı kaybını yaklaşık %30 azaltır, hem carry-over etkisini hem de çıtır dış yüzeyi korur.',
    },
    {
      type: 'title',
      text: 'Temel Kızartma Terimleri Sözlüğü',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Carry-Over Cooking', definition: 'Yiyecek ısı kaynağından çıkarıldıktan sonra iç sıcaklığın yükselmeye devam etmesi, dış katmanlardan merkeze doğru ısı iletiminden kaynaklanır.' },
        { term: 'Çekme Sıcaklığı (Pull Temperature)', definition: 'Etin fırından çıkarılması gereken iç sıcaklık. Carry-over\'u hesaba katmak için hedef sıcaklıktan her zaman daha düşüktür.' },
        { term: 'Hedef Sıcaklık (Target Temperature)', definition: 'Etin dinlenme sonrasında ulaşmasını istediğiniz nihai iç sıcaklık. Servis sıcaklığı olarak da adlandırılır.' },
        { term: 'Termal Atalet (Thermal Inertia)', definition: 'Bir kütlenin sıcaklık değişimine direnme eğilimi. Daha ağır, daha yoğun kesimler daha yüksek termal atalete sahiptir ve daha fazla carry-over yapar.' },
        { term: 'Dinlenme (Resting)', definition: 'Pişirme sonrası etin dokunulmadan bekletildiği, ısının dengelenmesine ve suların lifler boyunca yeniden dağılmasına izin verilen süre.' },
        { term: 'Sıcaklık Gradyanı (Temperature Gradient)', definition: 'Etin yüzeyi ile çekirdeği arasındaki sıcaklık farkı. Daha büyük bir gradyan, carry-over için daha fazla gizli ısı depolar.' },
        { term: 'Gizli Isı (Latent Heat)', definition: 'Pişirme sırasında etin dış katmanlarında depolanan ısı enerjisi. Bu enerji, dinlenme sırasında sıcaklık dengelenirken salınır.' },
      ],
    },
    {
      type: 'title',
      text: 'Hızlı Başvuru: Önerilen Çekme Sıcaklıkları',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Mükemmel sonuçlar için bu sıcaklıklarda çekin (200°C / 400°F fırın)',
      items: [
        'Dana eti medium-rare: 48-50°C / 118-122°F\'de çekin, hedef 54°C / 129°F',
        'Dana eti medium: 54-56°C / 129-133°F\'de çekin, hedef 60°C / 140°F',
        'Domuz bonfile: 57-59°C / 135-138°F\'de çekin, hedef 63°C / 145°F',
        'Tavuk göğsü: 68-70°C / 154-158°F\'de çekin, hedef 74°C / 165°F',
        'Bütün hindi: 68-70°C / 154-158°F\'de çekin, hedef 74°C / 165°F (göğüs)',
        'Kuzu pirzola: 48-50°C / 118-122°F\'de çekin, hedef 54°C / 129°F',
      ],
    },
    {
      type: 'paragraph',
      html: 'Her rost farklıdır. Ağırlık, tam fırın sıcaklığı ve kesimin şekli tüm bu sayıları değiştirir. İşte bu hesaplayıcı tam olarak bunu yapar - sizin özel girdilerinizi alır ve sizin durumunuz için kesin çekme sıcaklığını hesaplar. Tahmin yok, mahvolmuş rostolar yok.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
