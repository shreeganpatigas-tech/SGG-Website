import GlassPanel from "@/components/GlassPanel";
import SectionTitle from "@/components/SectionTitle";

export default function DirectorSection() {
  return (
    <section className="industrial-section z-10 bg-black/[.24]">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1fr_.72fr]">
        <div>
          <SectionTitle
            eyebrow="Director Message"
            title="Building Gas Infrastructure for India’s Industrial Growth"
            body="Our focus is to strengthen dependable industrial and medical gas availability for enterprises that power regional development, healthcare resilience, manufacturing capacity, and infrastructure progress."
          />
          <blockquote className="border-l-2 border-industrial-red pl-6 text-xl leading-9 text-white/[.78]">
            We see gas manufacturing as a critical infrastructure responsibility. SGG Gas Dynamics is committed to disciplined operations, certified systems, and a supply culture that industrial clients can plan around with confidence.
          </blockquote>
        </div>
        <GlassPanel className="relative min-h-[430px] overflow-hidden p-8">
          <div className="absolute inset-0 bg-[url('/images/industrial-hero.jpg')] bg-cover bg-center opacity-18 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="relative mx-auto mt-10 h-72 w-56 overflow-hidden rounded-t-full border border-white/[.12] bg-gradient-to-b from-industrial-silver/[.18] to-industrial-steel">
            <div className="absolute left-1/2 top-16 h-24 w-24 -translate-x-1/2 rounded-full bg-industrial-silver/[.35]" />
            <div className="absolute bottom-0 left-1/2 h-40 w-44 -translate-x-1/2 rounded-t-full bg-industrial-red/[.28]" />
          </div>
          <p className="relative mt-8 text-center font-display text-sm uppercase tracking-[.22em] text-industrial-silver">
            Executive Leadership
          </p>
        </GlassPanel>
      </div>
    </section>
  );
}
