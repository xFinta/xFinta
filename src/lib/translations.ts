import type { GalleryCategory, Locale, VideoSubcategory } from "@/types";

interface Dictionary {
  common: {
    skipToContent: string;
    close: string;
  };
  /** Arabic overrides for siteConfig's free-text fields (role/tagline/bio) —
   *  siteConfig itself stays plain English strings, same pattern as the
   *  by-id content tables in lib/content-translations.ts. */
  site: {
    role: string;
    tagline: string;
    shortBio: string;
    bio: string;
  };
  /** Nav link labels, keyed by SECTION_IDS value — nav-config.ts keeps its
   *  English `label` field (used as the object key), this supplies the
   *  Arabic display text without restructuring NavLink. */
  navLabels: Record<string, string>;
  statsLabels: Record<string, string>;
  theme: {
    toLight: string;
    toDark: string;
  };
  language: {
    toEnglish: string;
    toArabic: string;
  };
  nav: {
    bookSession: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    ariaLabel: string;
    eyebrow: string;
    viewGallery: string;
    bookSession: string;
  };
  gallery: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    filterAriaLabel: string;
    allVideosTab: string;
    noVideosEmpty: string;
    searchPlaceholder: (category: string) => string;
    searchAriaLabel: (category: string) => string;
    noPhotosEmpty: string;
    openMediaAriaLabel: (category: string, title: string) => string;
    prev: string;
    next: string;
    categoryLabels: Record<GalleryCategory, string>;
    subcategoryLabels: Record<VideoSubcategory, string>;
  };
  services: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    bookFallback: string;
  };
  about: {
    ariaLabel: string;
    eyebrow: (name: string) => string;
    heading: (years: number) => string;
    portraitAlt: (name: string) => string;
    yearsCaption: string;
  };
  booking: {
    ariaLabel: string;
    eyebrow: string;
    heading: string;
    body: string;
    cta: string;
  };
  contact: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    videoBandEyebrow: string;
    videoBandHeading: string;
    playVideo: string;
    pauseVideo: string;
    channelsLabel: string;
  };
  footer: {
    navAriaLabel: string;
    copyright: (year: number, name: string) => string;
  };
  lightbox: {
    ariaLabel: (title: string) => string;
    close: string;
    previous: string;
    next: string;
    openAriaLabel: (title: string) => string;
  };
  video: {
    play: (title: string) => string;
    youtubeTitle: string;
    vimeoTitle: string;
  };
  testimonials: {
    ratingAriaLabel: (rating: number) => string;
    previous: string;
    next: string;
  };
  backToTop: string;
  notFound: {
    heading: string;
    body: (name: string) => string;
    cta: string;
  };
  placeholderVideo: {
    thumbnailAlt: string;
  };
}

const en: Dictionary = {
  common: {
    skipToContent: "Skip to content",
    close: "Close",
  },
  site: {
    role: "Photographer & Filmmaker",
    tagline: "Cinematic stories, frame by frame.",
    shortBio:
      "Photographer and video producer crafting cinematic content across product, wedding, and architecture photography — plus B-roll, interviews, and branded video production.",
    bio: "I'm Murtada AlHajari, working under the creative name xFinta. I specialize in two things: photography that makes a product, a building, or a wedding day look like it belongs in a magazine, and video production that gives brands and stories real cinematic weight — B-roll, interviews, and the intros/outros that tie a video together. Every project gets the same standard: clean composition, honest light, and a final result that feels premium, not templated.",
  },
  navLabels: {
    home: "Home",
    gallery: "Gallery",
    services: "Services",
    about: "About",
    contact: "Contact",
  },
  statsLabels: {
    "st-years": "Years of Experience",
    "st-projects": "Projects Delivered",
    "st-clients": "Happy Clients",
    "st-videos": "Videos Produced",
  },
  theme: {
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
  },
  language: {
    toEnglish: "Switch to English",
    toArabic: "التبديل إلى العربية",
  },
  nav: {
    bookSession: "Book a Session",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    ariaLabel: "Introduction",
    eyebrow: "Photography & Video Production",
    viewGallery: "View Gallery",
    bookSession: "Book a Session",
  },
  gallery: {
    ariaLabel: "Gallery",
    eyebrow: "The Work",
    title: "Photography & Video Production",
    description:
      "Product, wedding, and architecture photography — plus B-roll, interviews, and the video production that ties it all together.",
    filterAriaLabel: "Filter gallery by category",
    allVideosTab: "All Videos",
    noVideosEmpty: "No videos in this category yet — check back soon.",
    searchPlaceholder: (category) => `Search ${category}...`,
    searchAriaLabel: (category) => `Search ${category}`,
    noPhotosEmpty: "No photographs match that search — try another category or term.",
    openMediaAriaLabel: (category, title) => `Open ${category}: ${title}`,
    prev: "Previous",
    next: "Next",
    categoryLabels: {
      "Video Production": "Video Production",
      "Product Photography": "Product Photography",
      "Wedding Photography": "Wedding Photography",
      // "Architecture Photography": "Architecture Photography",
      // Random: "Random",
      // All: "All",
    },
    subcategoryLabels: {
      "B-roll Videos": "B-roll Videos",
      "A-roll Videos and Interviews": "A-roll Videos and Interviews",
      "Intro/Outro": "Intro/Outro",
    },
  },
  services: {
    ariaLabel: "Services",
    eyebrow: "What I Offer",
    title: "Services Built Around Your Story",
    description:
      "From intimate portraits to full-scale productions — every session is tailored, not templated.",
    bookFallback: "Book",
  },
  about: {
    ariaLabel: "About",
    eyebrow: (name) => `About ${name}`,
    heading: (years) => `Behind every frame is ${years}+ years of chasing light.`,
    portraitAlt: (name) => `Portrait of ${name}`,
    yearsCaption: "Years behind the lens",
  },
  booking: {
    ariaLabel: "Book a session",
    eyebrow: "Limited availability",
    heading: "Let's make something worth remembering.",
    body: "Dates are booked in advance — reach out early to secure your season.",
    cta: "Book Your Session",
  },
  contact: {
    ariaLabel: "Contact",
    eyebrow: "Get In Touch",
    title: "Let's Talk About Your Project",
    description: "No forms, no waiting — reach out directly and I'll get back to you fast.",
    videoBandEyebrow: "Every Project Starts With a Conversation",
    videoBandHeading: "Let's bring your next shoot or film to life.",
    playVideo: "Play background video",
    pauseVideo: "Pause background video",
    channelsLabel: "Fastest ways to reach me",
  },
  footer: {
    navAriaLabel: "Footer navigation",
    copyright: (year, name) => `© ${year} ${name}. All rights reserved.`,
  },
  lightbox: {
    ariaLabel: (title) => `${title} — fullscreen viewer`,
    close: "Close viewer",
    previous: "Previous photograph",
    next: "Next photograph",
    openAriaLabel: (title) => `Open ${title} in fullscreen`,
  },
  video: {
    play: (title) => `Play ${title}`,
    youtubeTitle: "YouTube video player",
    vimeoTitle: "Vimeo video player",
  },
  testimonials: {
    ratingAriaLabel: (rating) => `${rating} out of 5 stars`,
    previous: "Previous testimonial",
    next: "Next testimonial",
  },
  backToTop: "Back to top",
  notFound: {
    heading: "This frame doesn't exist.",
    body: (name) =>
      `The page you're looking for has moved or never existed. Let's get you back to ${name}'s work.`,
    cta: "Back to Home",
  },
  placeholderVideo: {
    thumbnailAlt: "Video placeholder thumbnail",
  },
};

const ar: Dictionary = {
  common: {
    skipToContent: "تخطَّ إلى المحتوى",
    close: "إغلاق",
  },
  site: {
    role: "مصور وصانع أفلام",
    tagline: "قصص سينمائية، لقطة بلقطة.",
    shortBio:
      "مصور فوتوغرافي ومنتج فيديو يصنع محتوى سينمائيًا يشمل تصوير المنتجات والأعراس والعمارة — بالإضافة إلى لقطات B-roll والمقابلات وإنتاج الفيديو بعلامة تجارية.",
    bio: "أنا مرتضى الحجري، أعمل تحت الاسم الإبداعي xFinta. أتخصص في أمرين: التصوير الفوتوغرافي الذي يجعل منتجًا أو مبنى أو يوم زفاف يبدو وكأنه ينتمي إلى مجلة، وإنتاج الفيديو الذي يمنح العلامات التجارية والقصص ثقلًا سينمائيًا حقيقيًا — لقطات B-roll والمقابلات والمقدمات والخواتيم التي تربط الفيديو معًا. كل مشروع يحصل على نفس المعيار: تكوين نظيف، إضاءة صادقة، ونتيجة نهائية تبدو راقية، لا نمطية.",
  },
  navLabels: {
    home: "الرئيسية",
    gallery: "المعرض",
    services: "الخدمات",
    about: "نبذة عني",
    contact: "تواصل",
  },
  statsLabels: {
    "st-years": "سنوات الخبرة",
    "st-projects": "مشاريع منجزة",
    "st-clients": "عملاء سعداء",
    "st-videos": "فيديوهات منتَجة",
  },
  theme: {
    toLight: "التبديل إلى الوضع الفاتح",
    toDark: "التبديل إلى الوضع الداكن",
  },
  language: {
    toEnglish: "Switch to English",
    toArabic: "التبديل إلى العربية",
  },
  nav: {
    bookSession: "احجز جلسة",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
  },
  hero: {
    ariaLabel: "مقدمة",
    eyebrow: "تصوير فوتوغرافي وإنتاج فيديو",
    viewGallery: "استعرض المعرض",
    bookSession: "احجز جلسة",
  },
  gallery: {
    ariaLabel: "المعرض",
    eyebrow: "الأعمال",
    title: "تصوير فوتوغرافي وإنتاج فيديو",
    description:
      "تصوير المنتجات وحفلات الزفاف والعمارة — بالإضافة إلى لقطات B-roll والمقابلات وإنتاج الفيديو الذي يجمع كل ذلك معًا.",
    filterAriaLabel: "تصفية المعرض حسب الفئة",
    allVideosTab: "كل الفيديوهات",
    noVideosEmpty: "لا توجد فيديوهات في هذه الفئة بعد — تحقق مرة أخرى قريبًا.",
    searchPlaceholder: (category) => `ابحث في ${category}...`,
    searchAriaLabel: (category) => `ابحث في ${category}`,
    noPhotosEmpty: "لا توجد صور تطابق هذا البحث — جرّب فئة أو مصطلحًا آخر.",
    openMediaAriaLabel: (category, title) => `فتح ${category}: ${title}`,
    prev: "السابق",
    next: "التالي",
    categoryLabels: {
      "Video Production": "إنتاج الفيديو",
      "Product Photography": "تصوير المنتجات",
      "Wedding Photography": "تصوير الأعراس",
      // "Architecture Photography": "تصوير العمارة",
      // Random: "متنوع",
      // All: "الكل",
    },
    subcategoryLabels: {
      "B-roll Videos": "لقطات B-roll",
      "A-roll Videos and Interviews": "لقطات A-roll والمقابلات",
      "Intro/Outro": "المقدمة/الخاتمة",
    },
  },
  services: {
    ariaLabel: "الخدمات",
    eyebrow: "ما أقدمه",
    title: "خدمات مصممة حول قصتك",
    description: "من اللقطات الحميمة إلى الإنتاجات الكاملة — كل جلسة مُصممة خصيصًا، وليست نمطية.",
    bookFallback: "احجز",
  },
  about: {
    ariaLabel: "نبذة عني",
    eyebrow: (name) => `نبذة عن ${name}`,
    heading: (years) => `خلف كل لقطة أكثر من ${years} سنوات من ملاحقة الضوء.`,
    portraitAlt: (name) => `صورة شخصية لـ ${name}`,
    yearsCaption: "سنوات خلف العدسة",
  },
  booking: {
    ariaLabel: "احجز جلسة",
    eyebrow: "أماكن محدودة",
    heading: "لنصنع شيئًا يستحق أن يُتذكّر.",
    body: "يتم حجز المواعيد مسبقًا — تواصل مبكرًا لتأمين موسمك.",
    cta: "احجز جلستك",
  },
  contact: {
    ariaLabel: "تواصل",
    eyebrow: "ابقَ على تواصل",
    title: "لنتحدث عن مشروعك",
    description: "بلا نماذج، بلا انتظار — تواصل مباشرة وسأرد عليك بسرعة.",
    videoBandEyebrow: "كل مشروع يبدأ بمحادثة",
    videoBandHeading: "لنُحيي جلستك أو فيلمك القادم.",
    playVideo: "تشغيل الفيديو الخلفي",
    pauseVideo: "إيقاف الفيديو الخلفي مؤقتًا",
    channelsLabel: "أسرع الطرق للتواصل معي",
  },
  footer: {
    navAriaLabel: "روابط تذييل الصفحة",
    copyright: (year, name) => `© ${year} ${name}. جميع الحقوق محفوظة.`,
  },
  lightbox: {
    ariaLabel: (title) => `${title} — عرض بملء الشاشة`,
    close: "إغلاق العارض",
    previous: "الصورة السابقة",
    next: "الصورة التالية",
    openAriaLabel: (title) => `فتح ${title} بملء الشاشة`,
  },
  video: {
    play: (title) => `تشغيل ${title}`,
    youtubeTitle: "مشغل فيديو يوتيوب",
    vimeoTitle: "مشغل فيديو Vimeo",
  },
  testimonials: {
    ratingAriaLabel: (rating) => `${rating} من 5 نجوم`,
    previous: "الشهادة السابقة",
    next: "الشهادة التالية",
  },
  backToTop: "العودة إلى الأعلى",
  notFound: {
    heading: "هذا الإطار غير موجود.",
    body: (name) => `الصفحة التي تبحث عنها انتقلت أو لم تكن موجودة أصلًا. لنعد بك إلى أعمال ${name}.`,
    cta: "العودة إلى الرئيسية",
  },
  placeholderVideo: {
    thumbnailAlt: "صورة مصغّرة بديلة للفيديو",
  },
};

export const translations: Record<Locale, Dictionary> = { en, ar };
export type { Dictionary };
