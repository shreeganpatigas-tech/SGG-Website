import IndustryNode from "@/components/IndustryNode";
import SectionTitle from "@/components/SectionTitle";
import { industries } from "@/lib/data";

export default function IndustriesSection() {
  return (
    <section id="industries" className="industrial-section z-10">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Industries Served"
          title="Connected Supply Routes Across Critical Industrial Segments"
          body="The visual network represents SGG Gas Dynamics as a gas infrastructure ecosystem serving heavy industry, healthcare, and construction-led growth."
        />
        <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-white/10 bg-black/[.35] p-6">
          <div className="absolute inset-0 grid-surface opacity-50" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 520" preserveAspectRatio="none" aria-hidden="true">
            <path d="M500 250 L160 175 M500 250 L320 355 M500 250 L500 130 M500 250 L650 330 M500 250 L800 185 M500 250 L880 380" stroke="rgba(110,193,228,.45)" strokeWidth="2" strokeDasharray="10 12" />
            <circle cx="500" cy="250" r="52" fill="rgba(181,18,27,.18)" stroke="rgba(181,18,27,.75)" />
          </svg>
          <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-industrial-red/60 bg-black/70 shadow-redglow">
            <span className="text-center font-display text-sm font-semibold uppercase tracking-[.16em] text-white">SGG Supply Core</span>
          </div>
          {industries.map((industry) => (
            <IndustryNode key={industry.name} industry={industry} />
          ))}
          <div className="relative z-10 grid gap-4 sm:hidden">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div key={industry.name} className="flex items-center gap-3 rounded-md border border-white/10 bg-black/60 p-4">
                  <Icon className="h-5 w-5 text-industrial-oxygen" />
                  <span className="font-display font-semibold">{industry.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
