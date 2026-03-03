import Link from "next/link";
import { categories } from "@/data/catalog";
import { Card } from "@/components/ui";
import { IconArrowLeft } from "@/components/Icons";

export default function ProductsIndexPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 pb-14">
      <section className="section pt-10">
        <Card className="p-6 md:p-10">
          <div className="text-white/60 font-extrabold text-sm">الكاتالوج</div>
          <h1 className="mt-2 text-white font-black text-2xl md:text-4xl">الأقسام</h1>
          <p className="mt-3 text-white/70 font-semibold">اختر القسم لعرض الأصناف.</p>
        </Card>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((c) => (
            <Link key={c.id} href={`/products/${c.id}`}>
              <Card className="p-6 group">
                <div className="text-white font-black text-lg">{c.title}</div>
                <div className="text-white/60 font-semibold mt-2 text-sm">{c.description ?? "الوصف لاحقاً"}</div>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-yellow-200/90">
                  فتح القسم <IconArrowLeft className="h-4 w-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}