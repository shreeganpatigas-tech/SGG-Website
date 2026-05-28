"use client";

import type { industries } from "@/lib/data";

type Industry = (typeof industries)[number];

export default function IndustryNode({ industry }: { industry: Industry }) {
  const Icon = industry.icon;
  return (
    <div
      className="absolute hidden -translate-x-1/2 -translate-y-1/2 sm:block"
      style={{ left: industry.x, top: industry.y }}
    >
      <div className="group flex items-center gap-3 rounded-md border border-white/[.12] bg-black/[.55] px-4 py-3 backdrop-blur-md transition hover:border-industrial-oxygen/60 hover:shadow-glow">
        <span className="grid h-9 w-9 place-items-center rounded bg-white/[.08] text-industrial-oxygen">
          <Icon className="h-5 w-5" />
        </span>
        <span className="whitespace-nowrap font-display text-sm font-semibold text-white">{industry.name}</span>
      </div>
    </div>
  );
}
