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
      text: 'Sous Vide Pişirmede Termal Letalite Bilimi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sous vide pişirme, aşırı pişirmeye neden olmadan güvenli gıda koruması sağlamak için hassas sıcaklık kontrolüne dayanır. Yüzeyleri neredeyse anında sterilize eden geleneksel yüksek ısı yöntemlerinin aksine sous vide, yaygın patojenlerin termal ölüm eşiğine daha yakın çalışır. Güvenliği garanti altına almak için, sıcaklığa, maruz kalma süresine ve ısının gıda merkezine geçiş hızına bağlı olan bakteriyel inaktivasyon kinetiğini kesin olarak hesaplamalıyız.',
    },
    {
      type: 'title',
      text: 'D-Değerleri ve z-Değerlerini Anlamak',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bakteriyel termal ölüm logaritmik bir süreçtir. <strong>D-değeri</strong>, belirli bir sıcaklıkta mikrobiyal popülasyonu %90 oranında azaltmak (1-log azalma) için gereken süre olarak tanımlanır. <strong>z-değeri</strong>, D-değerini 10 kat azaltmak için gereken sıcaklık artışını temsil eder. Kümes hayvanlarındaki Salmonella için tipik bir z-değeri 5.5°C\'dir. Bu, pastörizasyonun 55°C\'de 90 dakika sürmesi durumunda, 60.5°C\'de yaklaşık 9 dakika süreceği anlamına gelir.',
    },
    {
      type: 'title',
      text: 'Geçici Isı İletimi ve Merkez Sıcaklık Gecikmesi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gıdalar anında ısınmaz. Isı, su banyosundan vakum poşeti yoluyla etin merkezine iletilmelidir. Bu geçici ısı iletimi, sıcaklık değişim hızının gıdanın termal difüzyon katsayısına (yağsız kas için tipik olarak yaklaşık 0.14 mm²/s) ve geometrik sınır koşullarına bağlı olduğu Fourier kanunu kullanılarak modellenir. Düz bir biftek esas olarak iki karşıt yüzeyden ısınırken, silindirik bir rosto ısıyı her yönden alarak ısı nüfuzunu hızlandırır.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
