"use client";

import Link from "next/link";
import { site } from "@/config/site";
import { categories } from "@/data/catalog";
import { Button, Card } from "@/components/ui";
import { IconArrowLeft, IconWhatsApp } from "@/components/Icons";
import { waLink, helloMessage } from "@/lib/whatsapp";
import { motion, Variants } from "framer-motion";

function hasWhatsApp(phone: string) {
  return typeof phone === "string" && phone.trim().length >= 8;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HomePage() {
  const showWA = hasWhatsApp(site.whatsappPhone);

  return (
    <main className="max-w-6xl mx-auto px-4 pb-14">
      <section className="section pt-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="luxFrame"
        >
          <div className="luxInner p-6 md:p-10 relative overflow-hidden">
            <div className="floatBlob b1" />
            <div className="floatBlob b2" />

            {/* Video or dynamic background optional overlay here */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />

            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm font-extrabold text-white/65"
              >
                {site.country} • {site.city}
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-3 text-3xl md:text-6xl font-black leading-tight"
              >
                <span className="goldText">{site.brand}</span>
              </motion.h1>

              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                style={{ originX: 1 }}
                className="mt-3 shimmerLine" 
              />

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-4 text-white/80 font-semibold max-w-3xl text-lg leading-relaxed mix-blend-screen"
              >
                أشهر الحلويات العربية والغربية • تحضير حلويات وباكيتات خاصة للمناسبات • طبخ مناسف ولحم بعجين •
                تلبية وتغليف بحسب الرغبة • الحلويات والضيافة للأفراح بأرقى المستويات.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Link href="/products">
                  <Button className="w-full sm:w-auto h-14 px-8 text-base shadow-2xl hover:scale-105 transition-transform">
                    تصفح المنيو والكاتالوج <IconArrowLeft className="h-6 w-6" />
                  </Button>
                </Link>

                {showWA ? (
                  <a href={waLink(helloMessage())} target="_blank" rel="noreferrer">
                    <Button variant="whatsapp" className="w-full sm:w-auto h-14 px-8 hover:scale-105 transition-transform">
                      تواصل للطلب <IconWhatsApp className="h-6 w-6" />
                    </Button>
                  </a>
                ) : (
                  <Button variant="ghost" disabled title="سيتم إضافة الرقم لاحقاً" className="h-14">
                    رقم واتساب لاحقاً
                  </Button>
                )}
              </motion.div>

              {/* Bento Grid layout for categories */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
              >
                {categories.map((c, i) => (
                  <Link 
                    key={c.id} 
                    href={`/products/${c.id}`}
                    // Make the first item take more space for Bento effect
                    className={i === 0 ? "md:col-span-2 md:row-span-2" : i === 3 ? "lg:col-span-2" : ""}
                  >
                    <motion.div variants={itemVariants} className="w-full h-full">
                      <Card className="p-6 h-full flex flex-col justify-between group overflow-hidden relative border-white/10 bg-white/5 hover:bg-white/10 hover:border-yellow-300/30 transition-all duration-500">
                        {/* Soft Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/0 to-yellow-300/0 group-hover:from-yellow-300/5 group-hover:to-transparent transition-all duration-500" />
                        
                        <div className="relative z-10">
                          <div className="text-white font-black text-2xl group-hover:text-yellow-100 transition-colors">{c.title}</div>
                          <div className="text-white/70 font-semibold mt-3 text-sm leading-relaxed">{c.description ?? "الوصف سيظهر لاحقاً هنا."}</div>
                        </div>
                        
                        <div className="relative z-10 mt-5 text-yellow-300/90 font-extrabold text-sm flex items-center gap-2 group-hover:translate-x-[-8px] transition-transform">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity">تصفح</span>
                          ←
                        </div>
                      </Card>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>

            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}