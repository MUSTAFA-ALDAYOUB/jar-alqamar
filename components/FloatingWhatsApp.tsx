"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { IconWhatsApp } from "@/components/Icons";
import { waLink, helloMessage } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showWA = typeof site.whatsappPhone === "string" && site.whatsappPhone.trim().length >= 8;

  if (!showWA) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          href={waLink(helloMessage())}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[linear-gradient(135deg,#10b981,#059669)] text-white shadow-[0_12px_45px_rgba(16,185,129,.5)] hover:bg-[linear-gradient(135deg,#34d399,#10b981)] hover:-translate-y-1 transition-all duration-300 group"
          aria-label="اطلب عبر واتساب"
        >
          <IconWhatsApp className="h-8 w-8 group-hover:scale-110 transition-transform" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
