import Image from "next/image";
import Link from "next/link";

import { site } from "@/config/site";
import { categories } from "@/data/catalog";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 pb-14">
      <section className="section pt-10">
        <div className="luxFrame">
          <div className="luxInner p-6 md:p-10">
            <div className="floatBlob b1" />
            <div className="floatBlob b2" />

            <div className="relative flex flex-col lg:flex-row gap-10 lg:items-start lg:justify-between">
              {/* LEFT */}
              <div className="max-w-xl">
                <div className="text-sm font-extrabold text-white/70">
                  {site.country} • {site.city}
                </div>

                <h1 className="mt-3 text-3xl md:text-6xl font-black leading-tight">
                  <span className="goldText">{site.brand}</span>
                </h1>

                <div className="mt-3 shimmerLine" />

                <p className="mt-4 text-white/75 font-semibold">
                  أشهر الحلويات العربية والغربية — تحضير حلويات وباكيتات خاصة للمناسبات —
                  طبخ مناسف ولحم بعجين — تلبية وتغليف بحسب الرغبة — والحلويات والضيافة للأفراح.
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link href="/products" className="w-fit">
                    <button className="btnGold">
                      تصفح الكاتالوج
                      <span className="btnArrow">←</span>
                    </button>
                  </Link>

                  <Link href="/contact" className="w-fit">
                    <button className="btnGhost">تواصل معنا</button>
                  </Link>
                </div>
              </div>

              {/* RIGHT - LOGO MEDAL */}
              <div className="flex flex-col items-center gap-3">
                <div className="logoMedal">
                  <Image
                    src="/brand/mark.png"
                    alt="Jar Alqamar Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="originTag">
                  <span className="originPin" aria-hidden>📍</span>
                  أصالة المطبخ الحلبي
                </div>

                <div className="mt-2 text-white/60 text-sm font-semibold text-center max-w-sm">
                  (الصور والأسعار تُضاف لاحقاً بسهولة من ملف <span className="text-yellow-200">data/catalog.ts</span>)
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="mt-10">
              <div className="text-white/60 font-extrabold text-sm">الأقسام</div>
              <h2 className="mt-1 text-white font-black text-2xl md:text-3xl">
                اختر القسم وابدأ التصفح
              </h2>

              <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((c) => (
                  <Link key={c.id} href={`/products/${c.id}`}>
                    <div className="glassCard p-6">
                      <div className="text-white font-black text-lg">{c.title}</div>
                      <div className="text-white/60 font-semibold mt-2 text-sm">
                        {c.description ?? "الوصف لاحقاً"}
                      </div>
                      <div className="mt-5 text-yellow-200/90 font-extrabold text-sm">
                        فتح القسم ←
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}