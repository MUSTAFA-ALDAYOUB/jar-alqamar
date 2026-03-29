export const categories = [
  { id: "arabic", title: "حلويات عربية", description: "تشكيلة شرقية فاخرة بطابع حلبي." },
  { id: "pastries", title: "معجنات", description: "معجنات + كريب + أصناف شعبية." },
  { id: "petitfour", title: "بيتيفور", description: "حلويات صغيرة راقية للضيافة." },
  { id: "gateau", title: "كاتو", description: "تشكيلة رائعة من الكاتو (حسب الطلب)." },
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
  price?: string | number;        // لاحقاً (ضع رقم)
  image?: string;       // مسار الصورة داخل public
  badges?: string[];    // مثل: ["الأكثر طلباً"]
  available?: boolean;
};

const img = (cat: CategoryId, file: string, ext = "jpg") => `/products/${cat}/${file}.${ext}`;

export const products: Product[] = [
  // =========================
  // حلويات عربية
  // =========================
  { id: "mabroumeh-pistachio", name: "المبرومة بالفستق الحلبي", category: "arabic", price: "السعر لاحقاً", image: img("arabic","mabroumeh-pistachio"), badges: ["الأكثر طلباً"], available: true },
  { id: "mabroumeh-ground", name: "المبرومة بالفستق المطحون", category: "arabic", price: "السعر لاحقاً", image: img("arabic","mabroumeh-ground"), available: true },

  { id: "boloria", name: "بلورية", category: "arabic", price: "السعر لاحقاً", image: img("arabic","boloria"), badges: ["الأكثر طلباً"], available: true },
  { id: "osmalieh", name: "عصملية", category: "arabic", price: "السعر لاحقاً", image: img("arabic","osmalieh"), available: true },

  { id: "baklava", name: "بقلاوة", category: "arabic", price: "السعر لاحقاً", image: img("arabic","baklava"), badges: ["الأكثر طلباً"], available: true },
  { id: "baklava-cigar", name: " سيكار", category: "arabic", price: "السعر لاحقاً", image: img("arabic","cigar"), available: true },

  { id: "swar-kulshokor", name: "سوارة الست ", category: "arabic", price: "السعر لاحقاً", image: img("arabic","swar-kulshokor"), available: true },
  { id: "swar-pistachio", name: "سوارة الست فستق", category: "arabic", price: "السعر لاحقاً", image: img("arabic","swar-pistachio"), available: true },
  { id: "swar-cashew", name: "سوارة الست كاجو", category: "arabic", price: "السعر لاحقاً", image: img("arabic","swar-cashew"), available: true },

  { id: "asabea-pistachio", name: "أصابع فستق", category: "arabic", price: "السعر لاحقاً", image: img("arabic","asabea-pistachio"), badges: ["الأكثر طلباً"], available: true },
  { id: "asabea-pistachio-ground", name: "أصابع فستق مطحون", category: "arabic", price: "السعر لاحقاً", image: img("arabic","asabea-pistachio-ground"), available: true },
  { id: "asabea-cashew", name: "أصابع كاجو", category: "arabic", price: "السعر لاحقاً", image: img("arabic","asabea-cashew"), available: true },

  { id: "yebraq", name: "يبرقة", category: "arabic", price: "السعر لاحقاً", image: img("arabic","yebraq"), available: true },
  { id: "boqaj-khadra", name: "بقج خضراء", category: "arabic", price: "السعر لاحقاً", image: img("arabic","boqaj-khadra"), available: true },
  { id: "boqaj-halabi", name: "بقج حلبي", category: "arabic", price: "السعر لاحقاً", image: img("arabic","boqaj-halabi"), available: true },

  { id: "lesan-asfour", name: "لسان العصفور", category: "arabic", price: "السعر لاحقاً", image: img("arabic","lesan-asfour"), available: true },
  { id: "lesan-asfour-cashew", name: "لسان العصفور كاجو", category: "arabic", price: "السعر لاحقاً", image: img("arabic","lesan-asfour-cashew"), available: true },

  { id: "basli-halabi", name: "بصلة حلبي", category: "arabic", price: "السعر لاحقاً", image: img("arabic","basli-halabi"), available: true },

  { id: "rbat-qshta", name: "وربات قشطة", category: "arabic", price: "السعر لاحقاً", image: img("arabic","rbat-qshta"), available: true },
  { id: "rbat-pistachio", name: "وربات فستق", category: "arabic", price: "السعر لاحقاً", image: img("arabic","rbat-pistachio"), available: true },

  { id: "taj-baklava", name: "تاج بقلاوة", category: "arabic", price: "السعر لاحقاً", image: img("arabic","taj-baklava"), available: true },
  { id: "taj-almalik-pistachio", name: "تاج الملك فستق حلبي", category: "arabic", price: "السعر لاحقاً", image: img("arabic","taj-almalik-pistachio"), available: true },
  { id: "taj-almalik-cashew", name: "تاج الملك كاجو", category: "arabic", price: "السعر لاحقاً", image: img("arabic","taj-almalik-cashew"), available: true },

  { id: "loqmet-alzaeem", name: "لقمة الزعيم", category: "arabic", price: "السعر لاحقاً", image: img("arabic","loqmet-alzaeem"), available: true },
  { id: "kunafa", name: "كنافة", category: "arabic", price: "السعر لاحقاً", image: img("arabic","kunafa"), badges: ["الأكثر طلباً"], available: true },
  { id: "osh-albolbol-ground", name: "عش البلبل فستق مطحون", category: "arabic", price: "السعر لاحقاً", image: img("arabic","osh-albolbol-ground"), available: true },

  { id: "molokiya-nuts", name: "ملوكية مكسرات", category: "arabic", price: "السعر لاحقاً", image: img("arabic","molokiya-nuts"), available: true },
  { id: "harisa-nuts", name: "هريسي مكسرات", category: "arabic", price: "السعر لاحقاً", image: img("arabic","harisa-nuts"), available: true },

  { id: "shaabiyat-pistachio", name: "شعبيات فستق", category: "arabic", price: "السعر لاحقاً", image: img("arabic","shaabiyat-pistachio"), available: true },
  { id: "shaabiyat-walnut", name: "شعبيات جوز", category: "arabic", price: "السعر لاحقاً", image: img("arabic","shaabiyat-walnut"), available: true },

  // =========================
  // معجنات + كريب (داخل المعجنات كما طلبت)
  // =========================
  { id: "maamoul-date", name: "معمول تمر", category: "pastries", price: "السعر لاحقاً", image: img("pastries","maamoul-date"), available: true },
  { id: "maamoul-pistachio", name: "معمول فستق", category: "pastries", price: "السعر لاحقاً", image: img("pastries","maamoul-pistachio"), available: true },
  { id: "kaak-cheese", name: "كعك جبنة عربي", category: "pastries", price: "السعر لاحقاً", image: img("pastries","kaak-cheese"), available: true },
  { id: "barazek-pistachio", name: "برازق فستق", category: "pastries", price: "السعر لاحقاً", image: img("pastries","barazek-pistachio"), available: true },

  { id: "karabij-pistachio", name: "كرابيج فستق", category: "pastries", price: "السعر لاحقاً", image: img("pastries","karabij-pistachio"), available: true },
  { id: "ghraibeh-arabi", name: "غريبة عربي", category: "pastries", price: "السعر لاحقاً", image: img("pastries","ghraibeh-arabi"), available: true },
  { id: "ghraibeh-pistachio", name: "غريبة فستق حلبي", category: "pastries", price: "السعر لاحقاً", image: img("pastries","ghraibeh-pistachio"), available: true },
  { id: "mishmisheh-arabi", name: "مشمشية عربي", category: "pastries", price: "السعر لاحقاً", image: img("pastries","mishmisheh-arabi"), available: true },
  { id: "tashkilet-ajwat", name: "تشكيلة عجوات", category: "pastries", price: "السعر لاحقاً", image: img("pastries","tashkilet-ajwat"), available: true },
  { id: "maamoul-shami", name: "معمول شامي", category: "pastries", price: "السعر لاحقاً", image: img("pastries","maamoul-shami"), available: true },

  // =========================
  // بيتيفور
  // =========================
  { id: "petitfour-makbas", name: "بيتيفور مكبس", category: "petitfour", price: "السعر لاحقاً", image: img("petitfour","petitfour-makbas"), available: true },
  { id: "petitfour-sable", name: "بيتيفور سابليه", category: "petitfour", price: "السعر لاحقاً", image: img("petitfour","petitfour-sable"), available: true },
  { id: "simsimiyeh-ajweh", name: "سمسمية عجوة", category: "petitfour", price: "السعر لاحقاً", image: img("petitfour","simsimiyeh-ajweh"), available: true },

  // =========================
  // حلويات يومية
  // =========================
  { id: "eclair-fruit", name: "كلير فواكه", category: "daily", price: "السعر لاحقاً", image: img("daily","eclair-fruit"), available: true },
  { id: "eclair-fraise", name: "كلير فريز", category: "daily", price: "السعر لاحقاً", image: img("daily","eclair-fraise"), available: true },

  // =========================
  // ضيافات (خدمات)
  // =========================
  { id: "service-arabic-western", name: "أشهر الحلويات العربية والغربية", category: "hospitality", price: "السعر لاحقاً", image: img("hospitality","service-arabic-western"), available: true },
  { id: "service-event-packs", name: "تحضير حلويات وباكيتات خاصة للمناسبات", category: "hospitality", price: "السعر لاحقاً", image: img("hospitality","service-event-packs"), available: true },
  { id: "service-mansaf", name: "طبخ مناسف", category: "hospitality", price: "السعر لاحقاً", image: img("hospitality","service-mansaf"), available: true },
  { id: "service-lahm-bajeen", name: "طبخ لحم بعجين", category: "hospitality", price: "السعر لاحقاً", image: img("hospitality","service-lahm-bajeen"), available: true },
  { id: "service-wrap", name: "تلبية وتغليف بحسب الرغبة", category: "hospitality", price: "السعر لاحقاً", image: img("hospitality","service-wrap"), available: true },
  { id: "service-weddings", name: "الحلويات والضيافة للأفراح", category: "hospitality", price: "السعر لاحقاً", image: img("hospitality","service-weddings"), available: true },

  // =========================
  // مجففات / مكسرات / حلوي (مبدئيًا حتى لا تكون فارغة)
  // =========================
  { id: "dried-mix", name: "فواكه مجففة مشكلة", category: "dried-fruits", price: "السعر لاحقاً", image: img("dried-fruits","dried-mix"), available: true },
  { id: "nuts-mix", name: "مكسرات مشكلة", category: "nuts", price: "السعر لاحقاً", image: img("nuts","nuts-mix"), available: true },
  { id: "halawi-mix", name: "حلوي مشكلة", category: "halawi", price: "السعر لاحقاً", image: img("halawi","halawi-mix"), available: true },

  // =========================
  // الجاتو / الكاتو
  // =========================
  ...Array.from({ length: 21 }, (_, i) => ({
    id: `gateau-${i + 1}`,
    name: "كاتو حسب الطلب",
    category: "gateau" as CategoryId,
    image: img("gateau", `gateau-${i + 1}`, "jpeg"),
    available: true
  })),
];