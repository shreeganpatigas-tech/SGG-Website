"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function FloatingCertificate({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="metal-panel laser-edge group rounded-lg p-6"
    >
      <div className="mb-9 flex items-center justify-between">
        <ShieldCheck className="h-7 w-7 text-industrial-oxygen" />
        <span className="h-2 w-2 rounded-full bg-industrial-red shadow-redglow" />
      </div>
      <p className="font-display text-2xl font-semibold text-white">{name}</p>
      <p className="mt-3 text-sm text-white/[.56]">Certified operational credibility</p>
    </motion.div>
  );
}
