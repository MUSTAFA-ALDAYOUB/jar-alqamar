export const categories = [
  { id: "arabic", title: "حلويات عربية", description: "تشكيلة شرقية فاخرة بطابع حلبي." },
  { id: "pastries", title: "معجنات", description: "معجنات + كريب + أصناف شعبية." },
  { id: "petitfour", title: "بيتيفور", description: "حلويات صغيرة راقية للضيافة." },
  { id: "hospitality", title: "ضيافات", description: "تجهيزات وباكيتات للمناسبات والأفراح." },
  { id: "daily", title: "حلويات يومية", description: "تشكيلة يومية (كلير وغيره)." },
  { id: "dried-fruits", title: "فواكه مجففة", description: "مجففات مختارة." },
  { id: "nuts", title: "مكسرات", description: "مكسرات طازجة." },
  { id: "halawi", title:"حلاوة", description: "حلويات متنوعة." },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  description?: string; // لاحقاً
  price?: number;        // لاحقاً (ضع رقم)
  image?: string;       // مسار الصورة داخل public
  badges?: string[];    // مثل: ["الأكثر طلباً"]
  available?: boolean;
};

const img = (cat: CategoryId, file: string) => `/products/${cat}/${file}.jpg`;

export const products: Product[] = [
  // =========================
  // حلويات عربية
  // =========================
  { id: "mabroumeh-pistachio", name: "المبرومة بالفستق الحلبي", category: "arabic", image: img("arabic","mabroumeh-pistachio"), badges: ["الأكثر طلباً"], available: true },
  { id: "mabroumeh-ground", name: "المبرومة بالفستق المطحون", category: "arabic", image: img("arabic","mabroumeh-ground"), available: true },

  { id: "boloria", name: "بلورية", category: "arabic", image: img("arabic","boloria"), badges: ["الأكثر طلباً"], available: true },
  { id: "osmalieh", name: "عصملية", category: "arabic", image: img("arabic","osmalieh"), available: true },

  { id: "baklava", name: "بقلاوة", category: "arabic", image: img("arabic","baklava"), badges: ["الأكثر طلباً"], available: true },
  { id: "baklava-cigar", name: " سيكار", category: "arabic", image: img("arabic","cigar"), available: true },

  { id: "swar-kulshokor", name: "سوارة الست ", category: "arabic", image: img("arabic","swar-kulshokor"), available: true },
  { id: "swar-pistachio", name: "سوارة الست فستق", category: "arabic", image: img("arabic","swar-pistachio"), available: true },
  { id: "swar-cashew", name: "سوارة الست كاجو", category: "arabic", image: img("arabic","swar-cashew"), available: true },

  { id: "asabea-pistachio", name: "أصابع فستق", category: "arabic", image: img("arabic","asabea-pistachio"), badges: ["الأكثر طلباً"], available: true },
  { id: "asabea-pistachio-ground", name: "أصابع فستق مطحون", category: "arabic", image: img("arabic","asabea-pistachio-ground"), available: true },
  { id: "asabea-cashew", name: "أصابع كاجو", category: "arabic", image: img("arabic","asabea-cashew"), available: true },

  { id: "yebraq", name: "يبرقة", category: "arabic", image: img("arabic","yebraq"), available: true },
  { id: "boqaj-khadra", name: "بقج خضراء", category: "arabic", image: img("arabic","boqaj-khadra"), available: true },
  { id: "boqaj-halabi", name: "بقج حلبي", category: "arabic", image: img("arabic","boqaj-halabi"), available: true },

  { id: "lesan-asfour", name: "لسان العصفور", category: "arabic", image: img("arabic","lesan-asfour"), available: true },
  { id: "lesan-asfour-cashew", name: "لسان العصفور كاجو", category: "arabic", image: img("arabic","lesan-asfour-cashew"), available: true },

  { id: "basli-halabi", name: "بصلة حلبي", category: "arabic", image: img("arabic","basli-halabi"), available: true },

  { id: "rbat-qshta", name: "وربات قشطة", category: "arabic", image: img("arabic","rbat-qshta"), available: true },
  { id: "rbat-pistachio", name: "وربات فستق", category: "arabic", image: img("arabic","rbat-pistachio"), available: true },

  { id: "taj-baklava", name: "تاج بقلاوة", category: "arabic", image: img("arabic","taj-baklava"), available: true },
  { id: "taj-almalik-pistachio", name: "تاج الملك فستق حلبي", category: "arabic", image: img("arabic","taj-almalik-pistachio"), available: true },
  { id: "taj-almalik-cashew", name: "تاج الملك كاجو", category: "arabic", image: img("arabic","taj-almalik-cashew"), available: true },

  { id: "loqmet-alzaeem", name: "لقمة الزعيم", category: "arabic", image: img("arabic","loqmet-alzaeem"), available: true },
  { id: "kunafa", name: "كنافة", category: "arabic", image: img("arabic","kunafa"), badges: ["الأكثر طلباً"], available: true },
  { id: "osh-albolbol-ground", name: "عش البلبل فستق مطحون", category: "arabic", image: img("arabic","osh-albolbol-ground"), available: true },

  { id: "molokiya-nuts", name: "ملوكية مكسرات", category: "arabic", image: img("arabic","molokiya-nuts"), available: true },
  { id: "harisa-nuts", name: "هريسي مكسرات", category: "arabic", image: img("arabic","harisa-nuts"), available: true },

  { id: "shaabiyat-pistachio", name: "شعبيات فستق", category: "arabic", image: img("arabic","shaabiyat-pistachio"), available: true },
  { id: "shaabiyat-walnut", name: "شعبيات جوز", category: "arabic", image: img("arabic","shaabiyat-walnut"), available: true },

  // =========================
  // معجنات + كريب (داخل المعجنات كما طلبت)
  // =========================
  { id: "maamoul-walnut", name: "معمول جوز", category: "pastries", image: img("pastries","maamoul-walnut"), available: true },
  { id: "maamoul-date", name: "معمول تمر", category: "pastries", image: img("pastries","maamoul-date"), available: true },
  { id: "maamoul-pistachio", name: "معمول فستق", category: "pastries", image: img("pastries","maamoul-pistachio"), available: true },
  { id: "kaak-cheese", name: "كعك جبني", category: "pastries", image: img("pastries","kaak-cheese"), available: true },
  { id: "barazek-pistachio", name: "برازق فستق", category: "pastries", image: img("pastries","barazek-pistachio"), available: true },
  { id: "smen-arabi", name: "سمن عربي", category: "pastries", image: img("pastries","smen-arabi"), available: true },
  { id: "seniora", name: "سينيورا", category: "pastries", image: img("pastries","seniora"), available: true },

  { id: "crepe-banana", name: "كريب موز", category: "pastries", image: img("pastries","crepe-banana"), badges: ["الأكثر طلباً"], available: true },
  { id: "crepe-chocolate", name: "كريب شوكولاتة", category: "pastries", image: img("pastries","crepe-chocolate"), badges: ["الأكثر طلباً"], available: true },
  { id: "banana-moghattas", name: "بنانا مغطسي", category: "pastries", image: img("pastries","banana-moghattas"), available: true },
  { id: "crepe-pack", name: "بقج كريب", category: "pastries", image: img("pastries","crepe-pack"), available: true },

  // =========================
  // بيتيفور
  // =========================
  { id: "petitfour-sab", name: "بيتيفور صب", category: "petitfour", image: img("petitfour","petitfour-sab"), available: true },
  { id: "petitfour-makbas", name: "بيتيفور مكبس", category: "petitfour", image: img("petitfour","petitfour-makbas"), available: true },
  { id: "petitfour-sable", name: "بيتيفور سابليه", category: "petitfour", image: img("petitfour","petitfour-sable"), available: true },
  { id: "jawzi", name: "جوزية", category: "petitfour", image: img("petitfour","jawzi"), available: true },
  { id: "kaak-milk", name: "كعك حليب", category: "petitfour", image: img("petitfour","kaak-milk"), available: true },
  { id: "fourieh-choc", name: "فيوريه شوكولاتة", category: "petitfour", image: img("petitfour","fourieh-choc"), available: true },
  { id: "kaak-sweet", name: "كعك حلو", category: "petitfour", image: img("petitfour","kaak-sweet"), available: true },
  { id: "seniora-choc", name: "سينيورا شوكولاتة", category: "petitfour", image: img("petitfour","seniora-choc"), available: true },
  { id: "fourieh-fruit", name: "فيوريه فواكه", category: "petitfour", image: img("petitfour","fourieh-fruit"), available: true },

  // =========================
  // حلويات يومية
  // =========================
  { id: "eclair-fruit", name: "كلير فواكه", category: "daily", image: img("daily","eclair-fruit"), available: true },
  { id: "eclair-fraise", name: "كلير فريز", category: "daily", image: img("daily","eclair-fraise"), available: true },

  // =========================
  // ضيافات (خدمات)
  // =========================
  { id: "service-arabic-western", name: "أشهر الحلويات العربية والغربية", category: "hospitality", image: img("hospitality","service-arabic-western"), available: true },
  { id: "service-event-packs", name: "تحضير حلويات وباكيتات خاصة للمناسبات", category: "hospitality", image: img("hospitality","service-event-packs"), available: true },
  { id: "service-mansaf", name: "طبخ مناسف", category: "hospitality", image: img("hospitality","service-mansaf"), available: true },
  { id: "service-lahm-bajeen", name: "طبخ لحم بعجين", category: "hospitality", image: img("hospitality","service-lahm-bajeen"), available: true },
  { id: "service-wrap", name: "تلبية وتغليف بحسب الرغبة", category: "hospitality", image: img("hospitality","service-wrap"), available: true },
  { id: "service-weddings", name: "الحلويات والضيافة للأفراح", category: "hospitality", image: img("hospitality","service-weddings"), available: true },

  // =========================
  // مجففات / مكسرات / حلوي (مبدئيًا حتى لا تكون فارغة)
  // =========================
  { id: "dried-mix", name: "فواكه مجففة مشكلة", category: "dried-fruits", image: img("dried-fruits","dried-mix"), available: true },
  { id: "nuts-mix", name: "مكسرات مشكلة", category: "nuts", image: img("nuts","nuts-mix"), available: true },
  { id: "halawi-mix", name: "حلوي مشكلة", category: "halawi", image: img("halawi","halawi-mix"), available: true },
];