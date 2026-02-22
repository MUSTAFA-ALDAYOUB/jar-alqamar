import { site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 text-white/70">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-white font-black">{site.brand}</div>
            <div className="text-sm font-semibold mt-2">{site.tagline}</div>
          </div>
          <div>
            <div className="text-white font-black">الموقع</div>
            <div className="text-sm font-semibold mt-2">{site.country} • {site.city}</div>
            <div className="text-sm font-semibold mt-1">{site.address}</div>
          </div>
          <div>
            <div className="text-white font-black">التحديث</div>
            <div className="text-sm font-semibold mt-2">
              تعديل الأقسام والأصناف من <span className="text-yellow-200">data/catalog.ts</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs font-bold text-white/45">
          © {new Date().getFullYear()} {site.brand}
        </div>
      </div>
    </footer>
  );
}