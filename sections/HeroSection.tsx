import GlowButton from "@/components/GlowButton";
import HeroLighting from "@/components/HeroLighting";
import IndustrialScene from "@/components/IndustrialScene";

export default function HeroSection() {
  return (
    <section id="home" className="relative z-10 min-h-screen overflow-hidden pt-36">
      <HeroLighting />
      <div className="absolute inset-0 bg-[url('/images/industrial-hero.jpg')] bg-cover bg-center opacity-18 mix-blend-screen" />
      <div className="absolute inset-0 grid-surface opacity-45" />
      <div className="container-shell relative grid min-h-[calc(100vh-9rem)] items-center gap-10 pb-16 lg:grid-cols-[1.02fr_.98fr]">
        <div className="max-w-3xl">
          <p className="mb-5 font-display text-xs font-semibold uppercase tracking-[.3em] text-industrial-oxygen">
            Certified Gas Manufacturing Infrastructure
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Reliable Industrial & Medical Gas Manufacturing Solutions
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Manufacturing and supplying high-quality industrial and medical gases for power plants, hospitals, cement industries, and modern industrial applications.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <GlowButton href="#products">Explore Products</GlowButton>
            <GlowButton href="#about" variant="secondary">About Company</GlowButton>
          </div>
        </div>
        <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-white/10 bg-black/20">
          <IndustrialScene />
          <div className="pointer-events-none absolute inset-x-8 bottom-8 rounded-md border border-white/10 bg-black/[.45] p-4 backdrop-blur-md">
            <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[.18em] text-white/[.62]">
              <span>Oxygen</span><span>LPG</span><span>Nitrogen</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              <span className="h-1 rounded-full bg-industrial-oxygen shadow-glow" />
              <span className="h-1 rounded-full bg-industrial-lpg" />
              <span className="h-1 rounded-full bg-industrial-silver" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
