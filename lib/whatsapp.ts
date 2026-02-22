import { site } from "@/config/site";

export function waLink(text: string) {
  const msg = encodeURIComponent(text);
  const phone = site.whatsappPhone?.trim();

  if (!phone) return `https://wa.me/?text=${msg}`;
  return `https://wa.me/${phone}?text=${msg}`;
}

export function helloMessage() {
  return `السلام عليكم 🌙✨
أريد الاستفسار/الطلب من ${site.brand}.`;
}

export function orderMessage(items: string[]) {
  const lines = [
    `السلام عليكم 🌙✨`,
    `طلب من ${site.brand}`,
    ``,
    `الأصناف المطلوبة:`,
    ...items.map((x, i) => `${i + 1}) ${x}`),
    ``,
    `شكراً لكم.`,
  ];
  return lines.join("\n");
}