import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Et Bağlayıcı Transglutaminaz Hesaplayıcı: Moleküler Gastronomi Dozaj Kılavuzu';
const description = 'Et bağlama için hassas transglutaminaz (TG) dozajı hesaplayın. Kuru tozlama veya bulamaç oranları, inkübasyon süresi ve sıcaklık güvenlik uyarıları alın.';

const faq = [
  {
    question: 'Transglutaminaz nedir ve eti nasıl bağlar?',
    answer: 'Transglutaminaz (TG), "et tutkalı" olarak da bilinir, proteinlerdeki glutamin ve lizin amino asitleri arasında kovalent bağların oluşumunu katalize eden bir enzimdir. Et yüzeylerine uygulandığında, ayrı parçaları tek bir yekpare levha halinde birleştiren çapraz bağlar oluşturur. Reaksiyonun tam olarak gelişmesi için zamana ve soğuk sıcaklıklara (2:5°C) ihtiyaç vardır, tipik olarak 6 ila 24 saat.',
  },
  {
    question: 'Kuru tozlama ve bulamaç uygulaması arasındaki fark nedir?',
    answer: 'Kuru tozlama, TG tozunu doğrudan et yüzeyine et ağırlığının %0,75:1,5\'i oranında serpmeyi içerir. Bulamaç yöntemi, bir ölçü TG\'yi dört ölçü su ile karıştırarak fırçalanabilir bir macun oluşturur; düzensiz yüzeyleri kaplamak veya büyük rosto veya derili filetolara ince, eşit katmanlar uygulamak için idealdir.',
  },
  {
    question: 'Sıcaklık transglutaminaz aktivitesini etkiler mi?',
    answer: 'Evet. TG en aktiftir 2°C ile 15°C arasında. Daha yüksek sıcaklıklarda (40°C\'ye kadar) reaksiyon hızlanır ancak yakından izlenmelidir. 60°C\'nin üzerinde enzim denatüre olur ve kalıcı olarak aktif hale gelmez: çapraz bağlama reaksiyonu tamamen durur. Pişirme sırasında bağı korumak için TG ile bağlanmış eti her zaman 60°C\'nin altında tutun.',
  },
  {
    question: 'Transglutaminazı balık veya kabuklu deniz ürünlerinde kullanabilir miyim?',
    answer: 'Evet, ancak balık ve kabuklu deniz ürünlerinin kas proteinlerinde kırmızı et ve kümes hayvanlarına kıyasla daha düşük seviyelerde lizin ve glutamin bulunur. Daha yüksek bir TG oranına (%1,2:1,5) ve daha uzun inkübasyon sürelerine ihtiyacınız olabilir. Hassas deniz tarağı veya ince balık filetoları için daha eşit kaplama amacıyla bulamaç yöntemini düşünün.',
  },
];

const howTo = [
  {
    name: 'Uygulama yöntemini seçin',
    text: 'Rosto ve biftek gibi düz yüzeyler için Kuru Tozlama\'yı seçin. Düzensiz kesimler, ince katmanlar veya derili proteinler için Bulamaç\'ı seçin.',
  },
  {
    name: 'Et ağırlığını girin',
    text: 'Bağlamak istediğiniz et veya proteinin toplam ağırlığını gram cinsinden girin.',
  },
  {
    name: 'Protein türünü belirtin',
    text: 'Kesiminize en uygun protein türünü seçin. Kırmızı etler daha az TG gerektirir; balık ve kabuklu deniz ürünleri daha fazla gerektirir.',
  },
  {
    name: 'İnkübasyon sıcaklığını ayarlayın',
    text: 'Soğuk depolama sıcaklığını girin (2:40°C). Hesaplayıcı gerekli bağlanma süresini tahmin edecektir.',
  },
  {
    name: 'TG\'yi tartın ve uygulayın',
    text: 'Hesaplanan TG tozunu ölçün. Tozlama veya bulamacı fırçalayarak uygulayın, ardından protein yüzeylerini sıkıca birbirine bastırın.',
  },
  {
    name: 'Dinlendirin ve soğutun',
    text: 'Streç filme sıkıca sarın ve pişirmeden önce önerilen inkübasyon süresi boyunca buzdolabında bekletin.',
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
  slug: 'transglutaminaz-et-baglama-hesaplayici',
  title: 'Et Bağlayıcı Transglutaminaz Hesaplayıcı',
  description: 'Et bağlama için hassas transglutaminaz (TG) dozajı hesaplayın. Kuru tozlama veya bulamaç oranları, inkübasyon süresi ve sıcaklık güvenlik uyarıları alın.',
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    title: 'Et Bağlayıcı Transglutaminaz Hesaplayıcı',
    subtitle: 'Protein çapraz bağlama için moleküler hassasiyet',
    methodLabel: 'Uygulama Yöntemi',
    dryMethod: 'Kuru Tozlama',
    slurryMethod: 'Bulamaç (Fırçalanabilir Macun)',
    weightLabel: 'Et / Protein Ağırlığı',
    proteinLabel: 'Protein Türü',
    redMeat: 'Kırmızı Et (Sığır, Kuzu, Av eti)',
    poultry: 'Kümes Hayvanları (Tavuk, Hindi, Ördek)',
    fish: 'Balık (Sert Filetolar, Bütün Balık)',
    shellfish: 'Kabuklu Deniz Ürünleri (Deniz Tarağı, Karides, Istakoz)',
    unitLabel: 'Ölçüm Sistemi',
    metricUnit: 'Metrik (g / °C)',
    imperialUnit: 'Imperial (oz / °F)',
    tempLabel: 'İnkübasyon Sıcaklığı',
    resultTitle: 'Dozaj Sonuçları',
    tgAmount: 'Transglutaminaz (TG)',
    waterAmount: 'Su (Bulamaç için)',
    totalWeight: 'Toplam Bağlı Ağırlık',
    ratioLabel: 'TG Oranı',
    incubationLabel: 'Önerilen İnkübasyon',
    incubationRange: '{min}s ile {max}s arası',
    dryDustingDesc: 'TG tozunu et yüzeyine eşit şekilde serpin, ardından parçaları birbirine bastırın. Düz kesimler ve rostolar için idealdir.',
    slurryDesc: 'TG\'yi 4 ölçü su ile karıştırarak fırçalanabilir bir macun oluşturun. Düzensiz yüzeyler, filetolar veya deri yapıştırma için fırça ile uygulayın.',
    enzymeDestroyed: 'Enzim Yok Edildi: Sıcaklık denatürasyon eşiğini aşıyor. Transglutaminaz denatüre oldu ve bağlanmayacaktır.',
    noWarning: '',
    hours: 'saat',
    grams: 'g',
    milliliters: 'ml',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Kilogram et başına ne kadar transglutaminaz kullanmalısınız?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Doğru doz, protein türüne ve uygulama yöntemine bağlıdır. Kırmızı et için ağırlıkça %0,75:1,0 TG kullanın (kg başına 7,5:10 g). Kümes hayvanları için %1,0:1,2. Balık ve kabuklu deniz ürünleri için %1,2:1,5. Düz kesimler için kuru tozlama olarak uygulayın veya düzensiz yüzeyler için 4 ölçü su ile bulamaç olarak karıştırın. Tam ölçüm almak için yukarıdaki hesaplayıcıya protein ağırlığınızı girin.',
    },
    {
      type: 'title',
      text: 'Kuru tozlama ve bulamaç: hangi yöntemi seçmelisiniz?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kuru tozlama, biftek, rosto veya pirzola gibi düz, eşit yüzeylerde en iyi sonucu verir. TG tozunu doğrudan (et ağırlığının %0,75:1,5\'i) serpin ve parçaları birbirine bastırın. Bulamaç yöntemi (1 ölçü TG\'ye 4 ölçü su), eşit kaplamanın önemli olduğu düzensiz kesimler, derili filetolar veya hassas deniz tarağı için daha iyidir. Macunu fırçalayın, birleştirin ve sıkıca sarın. Her iki yöntem de bağın tamamlanması için soğuk inkübasyon gerektirir.',
    },
    {
      type: 'title',
      text: 'Sıcaklık kontrolü bağınızı neden yapar veya bozar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Transglutaminaz en iyi 2°C ile 5°C arasında çalışır ve 6:24 saat içinde güçlü çapraz bağlar oluşturur. Daha yüksek buzdolabı sıcaklıklarında (5:15°C) reaksiyon 3:8 saate kadar hızlanır, ancak bağlar daha sığ olabilir. 40°C\'nin üzerinde enzim hızla denatüre olur ve 60°C\'de anında yok olur: mevcut bağlar oluşmayı durdurur ve et pişirme sırasında ayrılır. Yukarıdaki görselleştiricideki gösterge ile soğuk depolama sıcaklığınızı her zaman izleyin.',
    },
    {
      type: 'table',
      headers: ['Protein', 'TG Dozu (ağırlık %\'si)', 'Yöntem', 'İnkübasyon (2:5°C)', 'Bağ Gücü'],
      rows: [
        ['Sığır, Kuzu, Av eti', '%0,75:1,0', 'Kuru toz', '6:12 s', 'Çok güçlü'],
        ['Tavuk, Hindi, Ördek', '%1,0:1,2', 'Her ikisi', '8:16 s', 'Güçlü'],
        ['Somon, Morina, Levrek', '%1,2:1,5', 'Bulamaç', '12:24 s', 'Orta'],
        ['Deniz Tarağı, Karides, Istakoz', '%1,0:1,5', 'Bulamaç', '12:24 s', 'Orta'],
      ],
    },
    {
      type: 'title',
      text: 'Eti TG ile bağlarken yapılan yaygın hatalar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Çok fazla enzim:</strong> %1,5\'ten fazla TG kullanmak görünür beyaz kalıntı ve tebeşirimsi bir doku bırakır. Fazlası bağı güçlendirmez.',
        '<strong>Yüzeyde yağ veya gümüş zar:</strong> TG yağa veya bağ dokusuna bağlanamaz. Uygulamadan önce yüzeyleri çıplak kas lifleri görünene kadar temizleyin.',
        '<strong>Dinlenme süresini atlamak:</strong> Çapraz bağlama reaksiyonu saatler alır. Birleştirmeden hemen sonra pişirmek, bağlar oluşmadan enzimi yıkayıp götürecektir.',
        '<strong>Pişirme sırasında 60°C\'nin üzerinde ısı:</strong> Bağ, nazik pişirme (sous vide 55:58°C idealdir) ile korunur, ancak yüksek mühürleme sıcaklıkları arayüzü zayıflatabilir.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
