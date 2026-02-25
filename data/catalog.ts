export const categories = [
  { id: "arabic", title: "حلويات عربية", description: "أشهر الحلويات العربية بطابع فاخر." },
  { id: "pastries", title: "معجنات", description: "معجنات ومخبوزات شعبية ومميزة." },
  { id: "petitfour", title: "بيتيفور", description: "حلويات صغيرة راقية للضيافة." },
  { id: "hospitality", title: "ضيافات", description: "باكيتات وتجهيزات للأفراح والمناسبات." },
  { id: "daily", title: "حلويات يومية", description: "تشكيلة يومية متجددة." },
  { id: "nuts-dried", title: "مكسرات ومجففات", description: "مكسرات وفواكه مجففة مختارة." },

  // الأقسام الإضافية المطلوبة (لإضافة صور لاحقاً)
  { id: "crepe-banana", title: "كريب موز", description: "كريب موز (صور لاحقاً)." },
  { id: "crepe-chocolate", title: "كريب شوكولاتة", description: "كريب شوكولاتة (صور لاحقاً)." },
  { id: "banana-moghattas", title: "بنانا مغطسي", description: "بنانا مغطسي (صور لاحقاً)." },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  description?: string; // لاحقاً
  price?: number;       // لاحقاً
  image?: string;       // لاحقاً
  available?: boolean;
};

export const products: Product[] = [
  // =========================
  // حلويات عربية
  // =========================
  { id: "mabroumeh-pistachio", name: "المبرومة بالفستق الحلبي", category: "arabic", available: true },
  { id: "swar-elsit-kulshokor", name: "سوارة الست كول وشكور", category: "arabic", available: true },
  { id: "asabea-pistachio", name: "أصابع فستق", category: "arabic", available: true },
  { id: "asabea-pistachio-ground", name: "أصابع فستق مطحون", category: "arabic", available: true },
  { id: "yebraq", name: "يبرقة", category: "arabic", available: true },
  { id: "boqaj-khadra", name: "بقج خضراء", category: "arabic", available: true },
  { id: "lesan-asfour", name: "لسان العصفور", category: "arabic", available: true },
  { id: "lesan-asfour-cashew", name: "لسان العصفور كاجو", category: "arabic", available: true },
  { id: "basli-halabi", name: "بصلي حلبي", category: "arabic", available: true },

  { id: "rbat-qshta", name: "ربات قشطة", category: "arabic", available: true },
  { id: "rbat-pistachio", name: "ربات فستق", category: "arabic", available: true },

  { id: "baklava", name: "بقلاوة", category: "arabic", available: true },
  { id: "baklava-cigar", name: "بقلاوة سيكار", category: "arabic", available: true },
  { id: "baklava-nuts", name: "مكسرات بقلاوة", category: "arabic", available: true },
  { id: "osmalieh", name: "عسملية", category: "arabic", available: true },
  { id: "boloria", name: "بلورية", category: "arabic", available: true },

  { id: "taj-baklava", name: "تاج بقلاوة", category: "arabic", available: true },
  { id: "taj-almalik-pistachio", name: "تاج الملك فستق حلبي", category: "arabic", available: true },
  { id: "taj-almalik-cashew", name: "تاج الملك كاجو", category: "arabic", available: true },

  { id: "swar-elsit-pistachio", name: "سوارة الست فستق", category: "arabic", available: true },
  { id: "swar-elsit-cashew", name: "سوارة الست كاجو", category: "arabic", available: true },

  { id: "loqmet-alzaeem", name: "لقمة الزعيم", category: "arabic", available: true },

  { id: "molokiya-mixnuts", name: "ملوكية مكسرات", category: "arabic", available: true },
  { id: "mabroumeh-ground", name: "مبروومي فستق مطحون", category: "arabic", available: true },
  { id: "harisa-nuts", name: "هريسي مكسرات", category: "arabic", available: true },

  { id: "kunafa", name: "كنافي", category: "arabic", available: true },
  { id: "osh-albolbol-ground", name: "عش البلبل فستق مطحون", category: "arabic", available: true },
  { id: "boqaj-halabi", name: "بقج حلبي", category: "arabic", available: true },
  { id: "asabea-cashew", name: "أصابع كاجو", category: "arabic", available: true },

  { id: "shaabiyat-pistachio", name: "شعبيات فستق", category: "arabic", available: true },
  { id: "shaabiyat-walnut", name: "شعبيات جوز", category: "arabic", available: true },

  // =========================
  // معجنات (كما طلبت)
  // =========================
  { id: "maamoul-walnut", name: "معمول جوز", category: "pastries", available: true },
  { id: "maamoul-date", name: "معمول تمر", category: "pastries", available: true },
  { id: "maamoul-pistachio", name: "معمول فستق", category: "pastries", available: true },
  { id: "kaak-cheese", name: "كعك جبني", category: "pastries", available: true },
  { id: "barazek-pistachio", name: "برازق فستق", category: "pastries", available: true },
  { id: "smen-arabi", name: "سمن عربي", category: "pastries", available: true },
  { id: "seniora", name: "سينيورا", category: "pastries", available: true },

  // طلبات طبخ (حسب كلامك) — يمكن نقلها لاحقاً لقسم خاص إذا أحببت
  { id: "lahm-bajeen", name: "لحم بعجين", category: "pastries", available: true },
  { id: "mansaf", name: "منسف", category: "pastries", available: true },

  // =========================
  // بيتيفور
  // =========================
  { id: "petitfour-sab", name: "بيتيفور صاب", category: "petitfour", available: true },
  { id: "petitfour-makbas", name: "بيتيفور مكبس", category: "petitfour", available: true },
  { id: "petitfour-sable", name: "بيتيفور سبليه", category: "petitfour", available: true },
  { id: "jawzi", name: "جوزي", category: "petitfour", available: true },
  { id: "kaak-hليب", name: "كعك حليب", category: "petitfour", available: true },
  { id: "fourieh-choc", name: "فيوريه شوكولاتة", category: "petitfour", available: true },
  { id: "kaak-helw", name: "كعك حلو", category: "petitfour", available: true },
  { id: "seniora-choc", name: "سينيورا شوكولاتة", category: "petitfour", available: true },
  { id: "fourieh-fruit", name: "فيوريه فواكه", category: "petitfour", available: true },

  // =========================
  // حلويات يومية (كلير/إكلير)
  // =========================
  { id: "eclair-fruit", name: "كلير فواكه", category: "daily", available: true },
  { id: "eclair-strawberry", name: "كلير فريز", category: "daily", available: true },

  // =========================
  // ضيافات (خدمات/باكيتات)
  // =========================
  { id: "event-packs", name: "باكيتات خاصة للمناسبات", category: "hospitality", available: true },
  { id: "wedding-hospitality", name: "حلويات وضيافة للأفراح", category: "hospitality", available: true },
  { id: "custom-wrapping", name: "تغليف حسب الرغبة", category: "hospitality", available: true },

  // =========================
  // مكسرات ومجففات
  // =========================
  { id: "mixed-nuts", name: "مكسرات مشكلة", category: "nuts-dried", available: true },
  { id: "mixed-dried-fruits", name: "فواكه مجففة مشكلة", category: "nuts-dried", available: true },

  // =========================
  // أقسام كريب/بنانا المطلوبة
  // =========================
  { id: "crepe-banana-pack", name: "بقج كريب موز", category: "crepe-banana", available: true },
  { id: "crepe-choc-pack", name: "بقج كريب شوكولاتة", category: "crepe-chocolate", available: true },
  { id: "banana-moghattas", name: "بنانا مغطسي", category: "banana-moghattas", available: true },
];