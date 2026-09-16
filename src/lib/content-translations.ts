import type { Locale } from "@/types";

interface LocalizedContent {
  title: string;
  description?: string;
}

/**
 * Applies an Arabic override (by stable `id`) onto any content item shaped
 * like `{ id, title, description? }` — used for portfolio images, videos,
 * and services so config files stay pure English data and don't need a
 * `{en, ar}` field on every entry. English locale returns the item as-is.
 */
export function localizeContent<T extends { id: string; title: string; description?: string }>(
  item: T,
  table: Record<string, LocalizedContent>,
  locale: Locale
): T {
  if (locale === "en") return item;
  const translated = table[item.id];
  if (!translated) return item;
  return { ...item, title: translated.title, description: translated.description ?? item.description };
}

// ---- Portfolio (src/config/portfolio-data.ts) ----
export const portfolioContentAr: Record<string, LocalizedContent> = {
  // Product Photography
  "prod-01": { title: "هوديي أساسي", description: "لقطة استوديو نظيفة من الأعلى لكتالوج ملابس." },
  "prod-02": { title: "تفاصيل الملصق", description: "لقطة مقربة على القماش والعلامة التجارية لتيشيرت من الصوف الميرينو." },
  "prod-03": { title: "تفاصيل الجورب", description: "لقطة ماكرو للنسيج تُبرز الحياكة وخياطة مقدمة القدم." },
  "prod-04": { title: "جوارب قصيرة مخططة", description: "لقطة استوديو نظيفة على خلفية بيضاء." },
  "prod-05": { title: "يماج آيسد مينت", description: "تصوير رذاذ عالي السرعة لعلامة مشروبات تجارية." },
  "prod-06": { title: "چُكر بلوبيري مينت", description: "توت أزرق متساقط مجمّد في لحظة الرذاذ لحملة مشروبات." },
  "prod-07": { title: "ثنائي بوبا باي", description: "نكهتان منسّقتان معًا على خشب طبيعي." },
  "prod-08": { title: "بوبا باي شاي تايلندي", description: "لقطة المنتج الرئيسية مع كمية إضافية من لآلئ التابيوكا." },
  "prod-09": { title: "آيس كريم جوز الهند", description: "لقطة حركة لرقائق جوز الهند وهي تُنهي مخروط الآيس كريم الطري." },
  "prod-10": { title: "بوبا باي سكر بني", description: "لقطة استوديو منسّقة على خلفية خضراء هادئة." },
  "prod-11": { title: "حملة بوبا باي قهوة", description: "لقطة حملة مركّبة بتأثيرات رذاذ وحبوب قهوة." },
  "prod-12": { title: "حملة بوبا باي توت أحمر", description: "لقطة حملة مركّبة لمشروب شاي مثلج بالتوت الأحمر الموسمي." },
  // Wedding Photography
  "wed-01": { title: "العريس", description: "بورتريه رسمي قبل لحظات من بدء الاحتفال." },
  "wed-02": { title: "والد العريس", description: "بورتريه هادئ ومهيب لأحد كبار العائلة." },
  "wed-03": { title: "خلف الستار", description: "لمحة عفوية للعريس قبل خروجه." },
  "wed-04": { title: "ابتسامة وسط الحشد", description: "لحظة فرح عفوية بينما يتجول العريس بين ضيوفه." },
  "wed-05": { title: "الموكب", description: "العريس يشق طريقه وسط حشد من المهنئين." },
  "wed-06": { title: "الاحتفال", description: "الأهل والأصدقاء يحتفلون بالعريس حتى وقت متأخر من الليل." },
  "wed-07": { title: "إكليل من الورود", description: "بورتريه دافئ، يد على القلب، ملفوفًا بإكليل زهور." },
  "wed-08": { title: "جالسًا بالأحمر والأبيض", description: "بورتريه رسمي جالسًا مؤطرًا بإكليل من الورود." },
  "wed-09": { title: "ترحيب حار", description: "مصافحة وابتسامة بين الضيوف." },
  // Architecture Photography
  // "arch-01": { title: "المئذنة عبر المظلات", description: "مئذنة مؤطرة بمظلات الفناء القابلة للطي." },
  // "arch-02": { title: "تحت أقواس الفناء", description: "منظر بزاوية منخفضة عبر أقواس فناء المسجد المخططة." },
  // "arch-03": { title: "أقواس متلاحقة", description: "أقواس متكررة تقود العين إلى عمق الداخل." },
  // "arch-04": { title: "باب نحو السماء", description: "إطار باب مزخرف يفتح على مئذنة تحت السماء." },
  // "arch-05": { title: "رافعة وسقالات", description: "رافعة إنشائية ترتفع فوق مبنى ملفوف بالسقالات." },
  // "arch-06": { title: "مئذنة وجبال", description: "مئذنة تلتقط آخر الضوء وخلفها تلال وعرة." },
  // "arch-07": { title: "مئذنتان عند الغسق", description: "مئذنتان تقفان أمام سماء دافئة آفلة." },
  // "arch-08": { title: "تفاصيل بوابة منحوتة", description: "زخارف مشبكة وخط عربي فوق مدخل المسجد." },
  // "arch-09": { title: "المسجد ليلًا", description: "إضاءة دافئة من الأسفل تُحيي الواجهة بعد حلول الظلام." },
  // "arch-10": { title: "برج المياه ليلًا", description: "برج مياه بارز يتوهج بالوردي والأخضر فوق النخيل." },
  // "arch-11": { title: "مئذنة عند الغروب", description: "أسوار مسننة تقود العين صعودًا نحو مئذنة عند الغروب." },
  // "arch-12": { title: "سقف القبة", description: "نمط نجمي هندسي يمتد عبر قبة مزخرفة." },
  // "arch-13": { title: "ضوء دافئ وخضرة", description: "مصباح فتيلي يتوهج تحت كروم متدلية في الداخل." },
  // "arch-14": { title: "واجهة صالة المطار", description: "واجهة مدخل أحد المطارات الدولية الكبرى." },
  // "arch-15": { title: "ممر مغطى", description: "ممر مظلل تحت مظلة خشبية يقود نحو مدخل حديقة." },
  // "arch-16": { title: "كرات من الضوء", description: "تجمّع من الإضاءات المعلقة اللامعة يملأ تجويف سقف منحني." },
  // "arch-17": { title: "الكعبة", description: "الحجاج يتجمعون حول الكعبة، وسط أعمال توسعة مستمرة." },
  // "arch-18": { title: "برج الساعة", description: "برج مكة الملكي للساعة يرتفع فوق جسر تاريخي." },
  // // Random
  // "rand-01": { title: "ألوان الفريق", description: "لاعب صغير يبرز من التشكيلة، لون وسط الأبيض والأسود." },
  // "rand-02": { title: "الإقلاع", description: "طائر يقلع من المياه الضحلة على طول شاطئ صخري." },
  // "rand-03": { title: "على الغصن", description: "لحظة هادئة بين سعف النخيل والسماء المفتوحة." },
  // "rand-04": { title: "أجنحة بين الغيوم", description: "نورسان ينسابان عبر سماء غائمة ناعمة." },
  // "rand-05": { title: "ظل في الطيران", description: "غراب يرسم شكلًا حادًا أمام جدار من الغيوم." },
  // "rand-06": { title: "رمان ونعناع", description: "دراسة ماكرو بالألوان — رمان وفلفل ونعناع طازج." },
  // "rand-07": { title: "قراءة ممتعة", description: "أمسية هادئة مع مذكرات سفر مفضلة، وضوء شموع في الخلفية." },
  // "rand-08": { title: "في غرفة المونتاج", description: "كواليس عملية تصحيح الألوان في منتصف المشروع." },
  // "rand-09": { title: "القمر خلف الغيوم", description: "بدر يخترق الغيوم الليلية المتحركة." },
  // "rand-10": { title: "أصلي", description: "تركيبة إبداعية تجمع بين هلال ومصباح فتيلي متوهج." },
  // "rand-11": { title: "انطلاقة سريعة", description: "شرر يتطاير أثناء شحن بطارية سيارة على جانب الطريق." },
  // "rand-12": { title: "في مواجهة البحر", description: "لحظة هادئة على الصخور، في مواجهة الماء." },
  // "rand-13": { title: "شارد", description: "قطة صغيرة شاردة تجد ركنًا هادئًا للراحة." },
  // "rand-14": { title: "طقس الصباح", description: "قهوة، وكتاب جيد، وبداية هادئة لليوم." },
  // "rand-15": { title: "غير مكتمل", description: "درج داخل مبنى خرساني غير مكتمل." },
  // "rand-16": { title: "تحت الأقواس", description: "منظر بزاوية منخفضة عبر أقواس فناء المسجد." },
  // "rand-17": { title: "زاوية المئذنة", description: "إطار باب مزخرف يفتح على مئذنة تحت السماء." },
  // "rand-18": { title: "أقواس بلا نهاية", description: "أقواس متكررة تتلاشى في عمق المسجد." },
  // "rand-19": { title: "ضوء عبر الشبكة", description: "أنماط نوافذ هندسية تُلقي ضوءًا ناعمًا داخل المسجد." },
  // "rand-20": { title: "البوابة الثامنة عشرة", description: "مدخل مسجد مزخرف، مرقّم ومزيّن بالذهبي." },
  // "rand-21": { title: "الباب الذهبي", description: "خط عربي معقّد وزخرفة ذهبية على باب المسجد." },
  // "rand-22": { title: "ارتقاء", description: "رافعة إنشائية ترتفع فوق مبنى ملفوف بالسقالات." },
  // "rand-23": { title: "مئذنة ونخلة", description: "مئذنة خضراء القبة مؤطرة بسعف النخيل." },
  // "rand-24": { title: "مونتاج المدينة", description: "الإطار الافتتاحي لمونتاج سفر مصوّر في المدينة المنورة." },
  // "rand-25": { title: "المسجد النبوي من الأعلى", description: "منظر واسع فوق الفناء والمآذن والجبال خلفها." },
};

// ---- Videos (src/config/videos-data.ts) ----
export const videoContentAr: Record<string, LocalizedContent> = {
  "broll-01": { title: "البراحة — البيت القطيفي", description: "لقطات بي-رول لبيت تراثي قطيفي تقليدي." },
  "broll-02": { title: "فيديو Pure التجاري للمنتجات", description: "تصوير استوديو لمنتجات معزز الترطيب من Pure." },
  "broll-03": { title: "جولة جمالية في مقهى إنوفيشن", description: "لقطات سلسة لمقهى إنوفيشن بمناسبة الذكرى الرابعة." },
  "broll-04": { title: "حرفية المعجنات السينمائية في Jo's", description: "عرض بصري مذهل بأسلوب B-roll يوثق فن صناعة المعجنات، بلقطات بطيئة عالية الإطارات ولقطات ماكرو درامية للمكونات وإضاءة سينمائية دافئة تُبرز حرفية الشيف جو." },
  "broll-05": { title: "آيس كريم البحار النابض بالحياة", description: "لقطة تجارية منعشة وعالية الطاقة بأسلوب B-roll تُبرز آيس كريم البحار المميز بحركة بطيئة فائقة لالتقاط الملمس." },
  "aroll-01": { title: "مقابلة ماس", description: "مقطع مقابلة أمام الكاميرا." },
  "aroll-02": { title: "مسك × مسمار", description: "مقطع مقابلة تعاون بين علامتين تجاريتين." },
  "aroll-03": { title: "سباق القطيف — نشيطة 2023", description: "تغطية ميدانية لفعالية سباق نشيطة في القطيف." },
  "introoutro-01": { title: "أهل البيت — مقدمة عميل", description: "مقدمة متحركة بعلامة تجارية صُممت لمشروع فيديو أحد العملاء." },
};

// ---- Services (src/config/services-data.ts) ----
export const serviceContentAr: Record<string, LocalizedContent> = {
  "s-video-production": {
    title: "إنتاج الفيديو",
    description:
      "إنتاج فيديو متكامل — من الفكرة إلى التصوير والمونتاج والتصحيح اللوني — للعلامات التجارية التي تريد أن تُروى قصتها بثقل سينمائي حقيقي.",
  },
  "s-broll": {
    title: "لقطات B-roll",
    description:
      "لقطات داعمة تُبرز منتجًا أو مساحة أو لحظة في حركة — الطريقة الأكثر فعالية لجذب الانتباه وإيصال الرسالة.",
  },
  "s-aroll": {
    title: "مقابلات A-roll",
    description:
      "مقابلات وشهادات أمام الكاميرا مباشرة، مُضاءة ومُخرجة لتبدو طبيعية — مصممة لحمل سرد الفيديو.",
  },
  "s-intro-outro": {
    title: "تصميم المقدمة / الخاتمة",
    description: "مقدمات وخواتيم بعلامة تجارية تفتتح فيديوهاتك وتختمها بهوية احترافية متسقة.",
  },
  "s-product": {
    title: "تصوير المنتجات",
    description: "لقطات استوديو نظيفة ودقيقة للمنتجات، مصممة للتجارة الإلكترونية والتغليف والحملات.",
  },
  "s-wedding": {
    title: "تصوير الأعراس",
    description: "تغطية ليوم كامل تلتقط العهود والفوضى وكل ما بينهما — تُسلَّم كقصة، لا كقائمة مهام.",
  },
  "s-architecture": {
    title: "تصوير العمارة",
    description: "واجهات خارجية عند الغسق وداخليات مضيئة صادقة المساحة، للعقارات والضيافة والقوائم التجارية.",
  },
};
