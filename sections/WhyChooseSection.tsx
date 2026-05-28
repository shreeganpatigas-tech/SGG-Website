import AnimatedCounter from "@/components/AnimatedCounter";
import GlassPanel from "@/components/GlassPanel";
import SectionTitle from "@/components/SectionTitle";
import { features, metrics } from "@/lib/data";

export default function WhyChooseSection() {
  return (
    <section className="industrial-section z-10">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Why Choose Us"
          title="Enterprise Reliability Built Into Every Supply Layer"
          body="A technical operating posture for clients who need predictable gas availability, quality discipline, and industrial safety."
        />
        <div className="grid gap-5 lg:grid-cols-[.82fr_1.18fr]">
          <GlassPanel className="p-7">
            <p className="font-display text-sm uppercase tracking-[.2em] text-industrial-silver">Operational Metrics</p>
            <div className="mt-8 grid gap-7">
              {metrics.map((metric) => (
                <div key={metric.label} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                  <p className="font-display text-5xl font-semibold text-white">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[.18em] text-white/50">{metric.label}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map(([title, body]) => (
              <div key={title} className="rounded-lg border border-white/10 bg-white/[.045] p-6 transition hover:border-industrial-oxygen/40 hover:bg-white/[.07]">
                <span className="block h-1 w-14 rounded-full bg-gradient-to-r from-industrial-red to-industrial-oxygen" />
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
