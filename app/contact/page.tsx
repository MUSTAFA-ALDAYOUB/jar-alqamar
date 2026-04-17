import { site } from "@/config/site";
import { Card } from "@/components/ui";

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 pb-14">
      <section className="section pt-10">
        <Card className="p-6 md:p-10">
          <div className="text-white/60 font-extrabold text-sm">تواصل</div>
          <h1 className="mt-2 text-white font-black text-2xl md:text-4xl">معلومات التواصل</h1>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <Card className="p-6">
              <div className="text-white font-black">الموقع</div>
              <div className="mt-2 text-white/70 font-semibold">{site.country} • {site.city}</div>
              <div className="mt-1 text-white/60 font-semibold">{site.address}</div>

              {site.mapLink ? (
                <a className="mt-4 inline-block text-yellow-200 font-extrabold" href={site.mapLink} target="_blank" rel="noreferrer">
                  فتح الخريطة
                </a>
              ) : (
                <div className="mt-4 text-white/45 font-bold">رابط الخريطة لاحقاً</div>
              )}
            </Card>

            <Card className="p-6">
              <div className="text-white font-black">واتساب</div>
              {site.whatsappPhone ? (
                <>
                  <div className="mt-2 text-white/70 font-semibold" dir="ltr">+{site.whatsappPhone}</div>
                  <div className="mt-4 text-white/60 font-semibold">
                    يمكنك التواصل معنا وتثبيت طلبك عبر الواتساب.
                  </div>
                </>
              ) : (
                <div className="mt-2 text-white/45 font-bold">رقم واتساب لاحقاً</div>
              )}
            </Card>
          </div>
        </Card>
      </section>
    </main>
  );
}