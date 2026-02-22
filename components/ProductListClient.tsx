"use client";

import { useMemo, useState } from "react";
import { Product } from "@/data/catalog";
import { Card, Input } from "@/components/ui";
import { IconSearch } from "@/components/Icons";

export default function ProductListClient({ products }: { products: Product[] }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    if (!qq) return products;
    return products.filter((p) => (p.name + " " + (p.description ?? "")).toLowerCase().includes(qq));
  }, [q, products]);

  return (
    <div className="mt-6">
      <div className="relative max-w-md">
        <IconSearch className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/45" />
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="ابحث عن صنف…" className="pr-12" />
      </div>

      {filtered.length === 0 ? (
        <Card className="mt-6 p-8 text-center">
          <div className="text-white font-black text-lg">لا توجد نتائج</div>
          <div className="text-white/60 font-semibold mt-2">جرّب كلمة أخرى.</div>
        </Card>
      ) : (
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <Card key={p.id} className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-white font-black truncate">{p.name}</div>
                  <div className="text-white/60 font-semibold mt-2 text-sm">
                    {p.description ?? "الوصف لاحقاً"}
                  </div>
                </div>

                <div className="shrink-0 rounded-full px-3 py-2 text-xs font-black border border-white/10 bg-white/5 text-white/75">
                  {typeof p.price === "number" ? `${p.price} ل.س` : "السعر لاحقاً"}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}