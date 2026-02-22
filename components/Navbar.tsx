import Link from "next/link";
import { site } from "@/config/site";
import { Button } from "@/components/ui";
import { IconWhatsApp } from "@/components/Icons";
import { waLink, helloMessage } from "@/lib/whatsapp";

function hasWhatsApp(phone: string) {
  return phone && phone.trim().length >= 8;
}

export default function Navbar() {
  const showWA = hasWhatsApp(site.whatsappPhone);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="brandMark group-hover:scale-[1.03] transition" aria-hidden />
          <div>
            <div className="text-sm font-black text-white leading-none">{site.brand}</div>
            <div className="text-[12px] font-extrabold text-white/55">{site.city}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm font-extrabold">
          <Link className="navLink" href="/">الرئيسية</Link>
          <Link className="navLink" href="/products">الكاتالوج</Link>
          <Link className="navLink" href="/contact">تواصل</Link>
        </nav>

        {showWA ? (
          <a href={waLink(helloMessage())} target="_blank" rel="noreferrer">
            <Button variant="whatsapp">
              <IconWhatsApp className="h-5 w-5" />
              اطلب واتساب
            </Button>
          </a>
        ) : (
          <Button variant="ghost" disabled title="سيتم إضافة رقم واتساب لاحقاً">
            <IconWhatsApp className="h-5 w-5" />
            واتساب لاحقاً
          </Button>
        )}
      </div>
    </header>
  );
}