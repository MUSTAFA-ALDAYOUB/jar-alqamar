import Link from "next/link";
import { site } from "@/config/site";
import { categories } from "@/data/catalog";
import { Button, Card } from "@/components/ui";
import { IconArrowLeft, IconWhatsApp } from "@/components/Icons";
import { waLink, helloMessage } from "@/lib/whatsapp";

function hasWhatsApp(phone: string) {
  return phone && phone.trim().length >= 8;
}

export default function HomePage() {
  const showWA = hasWhatsApp(site.whatsappPhone);

  return (
    <main className="max-w-6xl mx-auto px-4 pb-14">
      <section className="section pt-10">
        <div className="luxFrame">
          <div className="luxInner p-6 md:p-10">
            <div className="floatBlob b1" />
            <div className="floatBlob b2" />

            <div className="relative">
              <div className="text-sm font-extrabold text-white/65">
                {site.country} • {site.city}
              </div>

              <h1 className="mt-3 text-3xl md:text-6xl font-black leading-tight">
                <span className="goldText">{site.brand}</span>
              </h1>

              <div className="mt-3 shimmerLine" />

              <p className="mt-4 text-white/75 font-semibold max-w-3xl">
                أشهر الحلويات العربية والغربية • تحضير حلويات وباكيتات خاصة للمناسبات • طبخ مناسف ولحم بعجين •
                تلبية وتغليف بحسب الرغبة • الحلويات والضيافة للأفراح
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href="/products">
                  <Button>
                    تصفح الكاتالوج <IconArrowLeft className="h-5 w-5" />
                  </Button>
                </Link>

                {showWA ? (
                  <a href={waLink(helloMessage())} target="_blank" rel="noreferrer">
                    <Button variant="whatsapp">
                      واتساب <IconWhatsApp className="h-5 w-5" />
                    </Button>
                  </a>
                ) : (
                  <Button variant="ghost" disabled title="سيتم إضافة الرقم لاحقاً">
                    رقم واتساب لاحقاً
                  </Button>
                )}
              </div>

              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((c) => (
                  <Link key={c.id} href={`/products/${c.id}`}>
                    <Card className="p-6">
                      <div className="text-white font-black text-lg">{c.title}</div>
                      <div className="text-white/60 font-semibold mt-2 text-sm">{c.description ?? "الوصف لاحقاً"}</div>
                      <div className="mt-5 text-yellow-200/90 font-extrabold text-sm">
                        فتح القسم ←
                      </div>
                    </Card>
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