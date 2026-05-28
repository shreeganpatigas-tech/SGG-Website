import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type GlowButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function GlowButton({ href, children, variant = "primary", className }: GlowButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-md border px-6 py-3 font-display text-sm font-semibold uppercase tracking-[.12em] transition duration-300",
        "before:absolute before:inset-0 before:-translate-x-full before:bg-white/10 before:transition before:duration-500 hover:before:translate-x-0",
        "relative shadow-metal active:translate-y-[1px]",
        variant === "primary"
          ? "border-industrial-red/70 bg-industrial-red text-white hover:shadow-redglow"
          : "border-white/20 bg-white/5 text-white hover:border-industrial-oxygen/60 hover:shadow-glow",
        className,
      )}
    >
      <span className="relative">{children}</span>
      <ArrowRight className="relative h-4 w-4 transition group-hover:translate-x-1" />
    </Link>
  );
}
