import { notFound } from "next/navigation";
import Link from "next/link";

import { categories, products, type CategoryId } from "@/data/catalog";
import { Card } from "@/components/ui";
import ProductListClient from "@/components/ProductListClient";
import { IconArrowLeft } from "@/components/Icons";

export function generateStaticParams() {
  return categories.map((c) => ({ cat: c.id }));
}

export default function CategoryPage({ params }: { params: { cat: string } }) {
  const cat = params.cat as CategoryId;
  const category = categories.find((c) => c.id === cat);
  if (!category) return notFound();

  const list = products.filter((p) => p.category === cat);

  return (
    <main className="max-w-6xl mx-auto px-4 pb-14">
      <section className="section pt-10">
        <Card className="p-6 md:p-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-white/60 font-extrabold text-sm">قسم</div>
              <h1 className="mt-2 text-white font-black text-2xl md:text-4xl">{category.title}</h1>
              <p className="mt-3 text-white/70 font-semibold">{category.description ?? "الوصف لاحقاً"}</p>
            </div>

            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-extrabold text-yellow-200/90 hover:text-yellow-200">
              رجوع للأقسام <IconArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </Card>

        <ProductListClient products={list} />
      </section>
    </main>
  );
}