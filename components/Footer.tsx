import { site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 text-white/70">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="goldText text-2xl font-black">{site.brand}</div>
            <div className="text-sm font-semibold mt-3 text-white/70 leading-relaxed">
              تذوق الأصالة والأجواء العربية الفخمة في كل قطعة. نحضّر حلوياتنا بشغف من أجود المكونات الطبيعية لنضمن لك ضيافة لا تُنسى في كافة مناسباتك.
            </div>
          </div>
          <div>
            <div className="text-white font-black text-lg">الموقع</div>
            <div className="text-sm font-semibold mt-3 text-white/80">{site.country} • {site.city}</div>
            <div className="text-sm font-semibold mt-1 text-white/60">{site.address}</div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-center gap-3">
          <div className="text-white/90 text-sm font-bold">
            Developed by <a href="https://wa.me/963968804006" target="_blank" rel="noreferrer" className="text-yellow-300 font-black hover:text-yellow-100 transition-colors">ENG.Mustafa AL-Dayoub 💻</a>
          </div>
          <div className="text-xs font-bold text-white/45">
            © {new Date().getFullYear()} {site.brand}
          </div>
        </div>
      </div>
    </footer>
  );
}