import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "whatsapp";
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-black transition active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none overflow-hidden";

  const shine =
    "after:content-[''] after:absolute after:inset-0 after:translate-x-[-130%] after:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.35),transparent)] after:transition-transform after:duration-700 hover:after:translate-x-[130%]";

  const styles =
    variant === "whatsapp"
      ? "bg-[linear-gradient(90deg,#10b981,#34d399,#fde68a)] text-[#0b1f16] shadow-[0_18px_55px_rgba(16,185,129,.22)]"
      : variant === "ghost"
      ? "bg-white/5 border border-white/10 text-white hover:bg-white/10"
      : "bg-[linear-gradient(90deg,#fff2b3,#d4af37,#fff7cc,#b8871d)] text-[#0b1f16] shadow-[0_18px_55px_rgba(212,175,55,.18)]";

  return <button className={cn(base, shine, styles, className)} {...props} />;
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...rest } = props;
  return (
    <input
      className={cn(
        "w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm font-bold text-white placeholder:text-white/40 outline-none",
        "focus:border-yellow-300/40 focus:ring-2 focus:ring-yellow-300/15 transition",
        className
      )}
      {...rest}
    />
  );
}

export function Chip({
  active,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-full text-sm font-black border transition",
        "hover:translate-y-[-1px] active:translate-y-0",
        active
          ? "bg-yellow-300/15 border-yellow-300/40 text-yellow-200"
          : "bg-white/5 border-white/10 text-white/75 hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
}

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("glassCard", className)} {...props} />;
}