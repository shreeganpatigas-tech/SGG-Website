import GlassPanel from "@/components/GlassPanel";
import SectionTitle from "@/components/SectionTitle";

export default function CompanySection() {
  return (
    <section id="about" className="industrial-section z-10">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr]">
        <GlassPanel className="relative min-h-[420px] overflow-hidden p-8">
          <div className="absolute inset-0 grid-surface opacity-45" />
          <div className="relative h-full">
            <div className="absolute left-8 top-12 h-56 w-24 rounded-t-full border border-industrial-silver/30 bg-white/[.05]" />
            <div className="absolute left-32 top-24 h-44 w-24 rounded-t-full border border-industrial-silver/30 bg-white/[.04]" />
            <div className="absolute left-8 right-8 top-72 h-5 rounded-full border border-industrial-oxygen/40 bg-industrial-oxygen/10 shadow-glow" />
            <div className="absolute left-20 top-64 h-24 w-5 rounded-full border border-industrial-lpg/40 bg-industrial-lpg/[.15]" />
            <div className="absolute bottom-8 right-8 max-w-56 text-sm leading-6 text-white/[.62]">
              Layered production, storage, and dispatch systems engineered for industrial continuity.
            </div>
          </div>
        </GlassPanel>
        <div>
          <SectionTitle
            eyebrow="Company Introduction"
            title="Industrial Gas Infrastructure Built on Reliability"
            body="SGG Gas Dynamics operates with the mindset of an infrastructure partner: manufacturing capability, safety standards, certified processes, and supply readiness for critical industrial and medical demand."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {["Manufacturing capability", "Operational reliability", "Industrial-scale supply", "Safety-led workflows"].map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/[.04] p-5">
                <span className="block h-1 w-12 rounded-full bg-industrial-red" />
                <p className="mt-4 font-display text-lg font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
