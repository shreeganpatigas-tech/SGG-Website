import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Factory, Hospital, Wrench, FlaskConical, ArrowRight } from "lucide-react";

const industries = [
  {
    id: "manufacturing",
    label: "Mfg",
    fullLabel: "Manufacturing",
    icon: Factory,
    title: "Steel and Thermal Manufacturing",
    desc: "Industrial gases for furnaces and heat treatment. Supplying to major steel and thermal plants.",
    stats: ["200+ Plants", "Bulk Supply", "On-demand supply"],
    number: "01",
  },
  {
    id: "hospitals",
    label: "Health",
    fullLabel: "Hospitals",
    icon: Hospital,
    title: "Healthcare & Medical",
    desc: "Medical-grade oxygen conforming to IP standards. From ICU pipeline systems to portable cylinders for hospitals.",
    stats: ["IP Grade O₂", "50+ Hospitals", "Emergency Chain"],
    number: "02",
  },
  {
    id: "fabrication",
    label: "Fab",
    fullLabel: "Fabrication",
    icon: Wrench,
    title: "Welding & Fabrication",
    desc: "Industrial gas and commercial LPG.",
    stats: ["Mixed Gas", "LPG Commercial", "On-Site"],
    number: "03",
  },
  {
    id: "labs",
    label: "Labs",
    fullLabel: "Laboratories",
    icon: FlaskConical,
    title: "Research & Labs",
    desc: "Ultra-high purity gases for analytical instruments, chromatography, and pharmaceutical R&D.",
    stats: ["99.999%", "Certified", "Custom Mix"],
    number: "04",
  },
];

export default function IndustriesSection() {
  const [active, setActive] = useState("manufacturing");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const current = industries.find((i) => i.id === active)!;
  const currentIndex = industries.findIndex((i) => i.id === active);

  return (
    <section id="industries" className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 section-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-10"
        >
          <span className="text-primary font-mono text-[11px] sm:text-sm uppercase tracking-[0.15em]">Industries</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-white">Built for your sector</h2>
        </motion.div>

        {/* Mobile: inline tabs that wrap · Desktop: sidebar */}
        <div className="grid md:grid-cols-12 gap-3 sm:gap-5">
          {/* Tabs — wrapping grid on mobile (no horizontal scroll!) */}
          <motion.div 
            className="md:col-span-4 lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="grid grid-cols-4 md:grid-cols-1 gap-1.5 sm:gap-2">
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActive(ind.id)}
                  className={`flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-3
                             px-2 md:px-4 py-2.5 md:py-3 rounded-lg sm:rounded-xl
                             text-center md:text-left transition-all duration-300
                             active:scale-[0.95] w-full ${
                    active === ind.id
                      ? "bg-primary/20 border border-primary/30 text-white"
                      : "bg-white/[0.02] border border-transparent text-white/55 active:text-white"
                  }`}
                >
                  <ind.icon className={`w-4 h-4 shrink-0 ${active === ind.id ? "text-primary" : ""}`} strokeWidth={1.5} />
                  {/* Short label on mobile, full on desktop */}
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium md:hidden">{ind.label}</span>
                  <span className="text-sm font-medium hidden md:block">{ind.fullLabel}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content panel */}
          <div className="md:col-span-8 lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-4 sm:p-6 md:p-8
                           border border-white/5 bg-white/[0.02]
                           relative overflow-hidden"
              >
                {/* Large bg number */}
                <span className="absolute top-2 right-3 sm:top-4 sm:right-6 font-mono text-[60px] sm:text-[100px] md:text-[130px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                  {current.number}
                </span>

                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 sm:mb-5">
                    <current.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white">{current.title}</h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">{current.desc}</p>

                  {/* Stats – wrapping badges */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                    {current.stats.map((s, i) => (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.06 }}
                        className="font-mono text-[10px] sm:text-xs border border-white/10 text-white/65 rounded-full px-2.5 sm:px-3 py-1 bg-white/[0.02]"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>

                  <a href={`https://wa.me/917987594387?text=${encodeURIComponent(`Hi SGG, I am looking for gas supply for the ${current.title} sector.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-semibold">
                    Get Supply <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Progress */}
                <div className="flex items-center gap-2 mt-4 sm:mt-6 text-white/25">
                  <span className="font-mono text-[10px]">{String(currentIndex + 1).padStart(2, "0")}</span>
                  <div className="flex-1 max-w-[60px] h-0.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${((currentIndex + 1) / industries.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <span className="font-mono text-[10px]">{String(industries.length).padStart(2, "0")}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
