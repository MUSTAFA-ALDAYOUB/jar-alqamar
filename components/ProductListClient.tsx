"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Product } from "@/data/catalog";
import { Card, Input, Chip } from "@/components/ui";
import { IconSearch } from "@/components/Icons";

function isBestSeller(p: Product) {
  return p.badges?.includes("الأكثر طلباً");
}

function imgPath(p: Product) {
  return `/products/${p.category}/${p.id}.jpg`; // إذا صورك PNG غيّرها إلى .png
}

export default function ProductListClient({ products }: { products: Product[] }) {
  const [q, setQ] = useState("");
  const [onlyBest, setOnlyBest] = useState(false);

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return products
      .filter((p) => (onlyBest ? isBestSeller(p) : true))
      .filter((p) => (!qq ? true : (p.name + " " + (p.description ?? "")).toLowerCase().includes(qq)))
      .sort((a, b) => Number(isBestSeller(b)) - Number(isBestSeller(a)));
  }, [q, products, onlyBest]);

  return (
    <div className="mt-6">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <div className="relative max-w-md w-full">
          <IconSearch className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/45" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="ابحث عن صنف…" className="pr-12" />
        </div>

        <div className="flex items-center gap-2">
          <Chip active={!onlyBest} onClick={() => setOnlyBest(false)}>الكل</Chip>
          <Chip active={onlyBest} onClick={() => setOnlyBest(true)}>الأكثر طلباً</Chip>
          <div className="text-sm font-extrabold text-white/60 mr-2">{filtered.length} صنف</div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <Card className="mt-6 p-10 text-center">
          <div className="text-white font-black text-lg">لا توجد نتائج</div>
          <div className="text-white/60 font-semibold mt-2">جرّب كلمة أخرى أو أزل الفلتر.</div>
        </Card>
      ) : (
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductCard({ p }: { p: Product }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const showPlaceholder = !loaded || failed;

  return (
    <Card className="p-5 group">
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
        <div className="relative h-40">
          {/* الصورة */}
          <Image
            src={imgPath(p)}
            alt={p.name}
            fill
            className="object-cover"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.55),transparent)]" />

          {/* Placeholder: يظهر فقط إذا لم تحمل الصورة */}
          {showPlaceholder ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-yellow-200 font-black text-2xl">
                {p.name.trim()[0] ?? "☆"}
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(520px_220px_at_60%_10%,rgba(212,175,55,.18),transparent_60%)]" />
            </div>
          ) : null}

          {/* Badge */}
          {isBestSeller(p) ? (
            <div className="absolute top-3 right-3 text-xs font-black px-3 py-2 rounded-full border border-yellow-300/35 bg-yellow-300/15 text-yellow-200">
              الأكثر طلباً
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-4">
        <div className="text-white font-black text-lg">{p.name}</div>
        <div className="mt-2 text-sm font-semibold text-white/60">
          {p.description?.trim() ? p.description : "الوصف لاحقاً"}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="text-xs font-black rounded-full px-3 py-2 border border-white/10 bg-white/5 text-white/75">
            {typeof p.price === "number" ? `${p.price} ل.س` : "السعر لاحقاً"}
          </div>
          {p.available === false ? (
            <div className="text-xs font-black text-rose-300">غير متوفر</div>
          ) : (
            <div className="text-xs font-black text-emerald-200">متوفر</div>
          )}
        </div>
      </div>
    </Card>
  );
}