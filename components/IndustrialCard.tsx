"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { products } from "@/lib/data";

type Product = (typeof products)[number];

const toneMap = {
  oxygen: "text-industrial-oxygen shadow-glow",
  silver: "text-industrial-silver",
  lpg: "text-industrial-lpg",
};

export default function IndustrialCard({ product, index }: { product: Product; index: number }) {
  const Icon = product.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
      className="group metal-panel laser-edge relative min-h-[290px] overflow-hidden rounded-lg p-6"
    >
      <div className="absolute -right-12 top-8 h-28 w-28 rounded-full bg-industrial-oxygen/10 blur-2xl transition group-hover:bg-industrial-red/[.18]" />
      <div className="mb-8 flex items-center justify-between">
        <div className={cn("grid h-14 w-14 place-items-center rounded-md border border-white/10 bg-white/[.06]", toneMap[product.tone as keyof typeof toneMap])}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="h-2 w-24 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 origin-left animate-pressure bg-current opacity-60" />
        </div>
      </div>
      <h3 className="font-display text-xl font-semibold text-white">{product.name}</h3>
      <p className="mt-4 text-sm leading-6 text-white/[.66]">{product.description}</p>
      <p className="mt-7 border-t border-white/10 pt-5 text-xs uppercase tracking-[.14em] text-industrial-silver/80">
        {product.applications}
      </p>
      <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-industrial-red via-industrial-oxygen to-transparent transition duration-500 group-hover:scale-x-100" />
    </motion.article>
  );
}
