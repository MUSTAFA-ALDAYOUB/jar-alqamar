import { notFound, redirect } from "next/navigation";
import Link from "next/link";

import { categories, products, type CategoryId } from "@/data/catalog";
import { Card } from "@/components/ui";
import ProductListClient from "@/components/ProductListClient";
import { IconArrowLeft } from "@/components/Icons";

function slugify(s: string) {
  return s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}-]+/gu, "");
}

function normalizeParam(s: string) {
  let raw = (s ?? "").trim();

  try {
    raw = decodeURIComponent(raw);
  } catch {}

  raw = raw.split("?")[0].split("#")[0].trim();
  raw = raw.replace(/[–—]/g, "-").trim();

  // لو النص مركّب مثل "حلويات عربية - arabic" نلتقط الـ id الصحيح
  const parts = raw.split("-").map((x) => x.trim()).filter(Boolean);
  for (let i = parts.length - 1; i >= 0; i--) {
    if (categories.some((c) => c.id === parts[i])) return parts[i];
  }

  return raw;
}

function findCategory(catParam: string) {
  const raw = normalizeParam(catParam);

  // 1) by id
  let c = categories.find((x) => x.id === raw);
  if (c) return { category: c, id: c.id as CategoryId };

  // 2) by title
  c = categories.find((x) => x.title === raw);
  if (c) return { category: c, id: c.id as CategoryId };

  // 3) by slug(title)
  const slug = slugify(raw);
  c = categories.find((x) => slugify(x.title) === slug);
  if (c) return { category: c, id: c.id as CategoryId };

  // 4) by slug(id)
  c = categories.find((x) => slugify(x.id) === slug);
  if (c) return { category: c, id: c.id as CategoryId };

  return null;
}

export function generateStaticParams() {
  return categories.map((c) => ({ cat: c.id }));
}

// ✅ Next.js 16: params هو Promise، لازم await
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ cat: string }>;
}) {
  const { cat } = await params;

  const found = findCategory(cat);
  if (!found) return notFound();

  // ✅ لو دخل بعنوان عربي/slug نعيده إلى /products/{id}
  if (cat !== found.id) {
    redirect(`/products/${found.id}`);
  }

  const { category, id } = found;
  const list = products.filter((p) => p.category === id);

  return (
    <main className="max-w-6xl mx-auto px-4 pb-14">
      <section className="section pt-10">
        <Card className="p-6 md:p-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-white/60 font-extrabold text-sm">قسم</div>
              <h1 className="mt-2 text-white font-black text-2xl md:text-4xl">
                {category.title}
              </h1>
              <p className="mt-3 text-white/70 font-semibold">
                {category.description ?? "الوصف لاحقاً"}
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-yellow-200/90 hover:text-yellow-200"
            >
              رجوع للأقسام <IconArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </Card>

        <ProductListClient products={list} />
      </section>
    </main>
  );
}