import Link from "next/link";
import { site } from "@/config/site";
import { categories, products } from "@/data/catalog";
import { Button, Card } from "@/components/ui";
import {
  IconArrowLeft,
  IconPin,
  IconWhatsApp,
  IconArabic,
  IconPastries,
  IconHospitality,
  IconDried,
  IconDaily,
  IconNuts,
  IconHalawi,
} from "@/components/Icons";
import { waLink, helloMessage } from "@/lib/whatsapp";

function hasWhatsApp(phone: string) {
  return phone && phone.trim().length >= 8;
}

function CategoryIcon({ id }: { id: string }) {
  const cls = "h-7 w-7";
  switch (id) {
    case "arabic": return <IconArabic className={cls} />;
    case "pastries": return <IconPastries className={cls} />;
    case "hospitality": return <IconHospitality className={cls} />;
    case "dried-fruits": return <IconDried className={cls} />;
    case "daily": return <IconDaily className={cls} />;
    case "nuts": return <IconNuts className={cls} />;
    case "halawi": return <IconHalawi className={cls} />;
    default: return <IconDaily className={cls} />;
  }
}

export default function HomePage() {
  const showWA = hasWhatsApp(site.whatsappPhone);

  const counts = Object.fromEntries(
    categories.map((c) => [c.id, products.filter((p) => p.category === c.id).length])
  );

  return (
    <main className="max-w-6xl mx-auto px-4 pb-14">
      {/* HERO */}
      <section className="section pt-10">
        <div className="luxFrame">
          <div className="luxInner p-6 md:p-10">
            <div className="floatBlob b1" />
            <div className="floatBlob b2" />

            <div className="relative">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div>
                  <div className="text-sm font-extrabold text-white/65">
                    {site.country} • {site.city}
                  </div>

                  <h1 className="mt-3 text-3xl md:text-6xl font-black leading-tight">
                    <span className="goldText">{site.brand}</span>
                  </h1>

                  <div className="mt-3 shimmerLine" />

                  <p className="mt-4 text-white/75 font-semibold max-w-xl">
                    تجربة كاتالوج فاخرة باللون الأخضر والذهبي — تصميم حديث، تفاعل سلس، وواجهة “مبهرة” للعميل.
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm font-bold text-white/60">
                    <IconPin className="h-4 w-4" />
                    {site.address}
                  </div>

                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <Link href="/products">
                      <Button>
                        تصفح الكاتالوج <IconArrowLeft className="h-5 w-5" />
                      </Button>
                    </Link>

                    {showWA ? (
                      <a href={waLink(helloMessage())} target="_blank" rel="noreferrer">
                        <Button variant="whatsapp">
                          اطلب عبر واتساب <IconWhatsApp className="h-5 w-5" />
                        </Button>
                      </a>
                    ) : (
                      <Button variant="ghost" disabled title="سيتم إضافة الرقم لاحقاً">
                        رقم واتساب لاحقاً
                      </Button>
                    )}
                  </div>
                </div>

                {/* Premium Side Card */}
                <Card className="p-6 md:p-7 w-full lg:w-[420px]">
                  <div className="text-white/60 font-extrabold text-sm">لماذا نحن؟</div>
                  <div className="mt-2 text-white font-black text-xl">
                    جودة، ذوق، وتقديم يليق بالمناسبات
                  </div>

                  <div className="mt-5 grid gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="font-black text-white">تشكيلة يومية</div>
                      <div className="text-sm font-semibold text-white/60 mt-1">متاح يومياً — مع تحديثات مستمرة.</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="font-black text-white">ضيافات ومناسبات</div>
                      <div className="text-sm font-semibold text-white/60 mt-1">خيارات راقية للضيوف والفعاليات.</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="font-black text-white">تصميم طلب سريع</div>
                      <div className="text-sm font-semibold text-white/60 mt-1">زر واتساب جاهز للتفعيل فور إضافة الرقم.</div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Category Grid */}
              <div className="mt-10">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <div className="text-white/60 font-extrabold text-sm">الأقسام</div>
                    <h2 className="mt-1 text-white font-black text-2xl md:text-3xl">
                      اختر القسم وابدأ التصفح
                    </h2>
                  </div>
                  <Link href="/products" className="text-sm font-extrabold text-yellow-200/90 hover:text-yellow-200 transition">
                    عرض الكل
                  </Link>
                </div>

                <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((c) => (
                    <Link key={c.id} href={`/products/${c.id}`}>
                      <Card className="p-6 group">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-yellow-200 group-hover:scale-[1.06] transition">
                              <CategoryIcon id={c.id} />
                            </div>
                            <div>
                              <div className="text-white font-black text-lg">{c.title}</div>
                              <div className="text-white/60 font-semibold text-sm mt-1">
                                {c.description ?? "الوصف لاحقاً"}
                              </div>
                            </div>
                          </div>

                          <div className="text-xs font-black text-white/70 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                            {counts[c.id] ?? 0} صنف
                          </div>
                        </div>

                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-yellow-200/90">
                          تصفح الآن <IconArrowLeft className="h-4 w-4" />
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}