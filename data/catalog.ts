export const categories = [
  { id: "arabic", title: "حلويات عربية", description: "الوصف لاحقاً." },
  { id: "pastries", title: "معجنات", description: "الوصف لاحقاً." },
  { id: "hospitality", title: "ضيافات", description: "الوصف لاحقاً." },
  { id: "dried-fruits", title: "فواكه مجففة", description: "الوصف لاحقاً." },
  { id: "daily", title: "حلويات يومية", description: "الوصف لاحقاً." },
  { id: "nuts", title: "مكسرات", description: "الوصف لاحقاً." },
  { id: "halawi", title: "حلوي", description: "الوصف لاحقاً." },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  description?: string;
  price?: number;  // لاحقاً
  image?: string;  // لاحقاً: "/products/xxx.jpg"
  available?: boolean;
};

export const products: Product[] = [
  // عناصر تجريبية فقط لتجربة الواجهة — لاحقاً نستبدلها بقائمتك الحقيقية
  { id: "arabic-1", name: "صنف تجريبي 1", category: "arabic", description: "الوصف لاحقاً", available: true },
  { id: "arabic-2", name: "صنف تجريبي 2", category: "arabic", description: "الوصف لاحقاً", available: true },

  { id: "pastries-1", name: "صنف تجريبي 1", category: "pastries", description: "الوصف لاحقاً", available: true },
  { id: "daily-1", name: "صنف تجريبي 1", category: "daily", description: "الوصف لاحقاً", available: true },

  { id: "nuts-1", name: "صنف تجريبي 1", category: "nuts", description: "الوصف لاحقاً", available: true },
  { id: "halawi-1", name: "صنف تجريبي 1", category: "halawi", description: "الوصف لاحقاً", available: true },
];