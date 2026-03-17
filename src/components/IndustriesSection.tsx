import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Factory, Hospital, Wrench, FlaskConical } from "lucide-react";

const industries = [
  {
    id: "manufacturing",
    label: "Manufacturing",
    icon: Factory,
    title: "Steel & Manufacturing",
    desc: "Oxygen and Argon for furnaces, heat treatment, and laser cutting. We supply major steel plants and auto ancillaries with uninterrupted bulk gas delivery.",
    stats: ["200+ Plants Served", "Bulk & Cylinder Supply", "24/7 Pipeline Gas"],
  },
  {
    id: "hospitals",
    label: "Hospitals",
    icon: Hospital,
    title: "Healthcare & Medical",
    desc: "Medical-grade oxygen conforming to IP standards. From ICU pipeline systems to portable cylinders, we keep hospitals running when it matters most.",
    stats: ["IP Grade Oxygen", "50+ Hospitals", "Emergency Supply Chain"],
  },
  {
    id: "fabrication",
    label: "Fabrication",
    icon: Wrench,
    title: "Welding & Fabrication",
    desc: "Argon, CO₂, and Nano Cut LPG for precision welding, metal cutting, and fabrication workshops. Superior flame quality for cleaner cuts.",
    stats: ["Mixed Gas Expertise", "Nano Cut Technology", "On-Site Support"],
  },
  {
    id: "labs",
    label: "Laboratories",
    icon: FlaskConical,
    title: "Research & Labs",
    desc: "Ultra-high purity gases for analytical instruments, chromatography, and pharmaceutical R&D. Full traceability with every batch.",
    stats: ["99.999% Purity", "Certified Batches", "Custom Mixtures"],
  },
];

export default function IndustriesSection() {
  const [active, setActive] = useState("manufacturing");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const current = industries.find((i) => i.id === active)!;

  return (
    <section id="industries" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">Industries</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Built for your sector</h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActive(ind.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === ind.id
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              <ind.icon className="w-4 h-4" strokeWidth={1.5} />
              {ind.label}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <current.icon className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl font-bold mb-4">{current.title}</h3>
                <p className="text-muted-foreground text-lg mb-8">{current.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {current.stats.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs border border-primary/30 text-primary rounded-full px-4 py-1.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                <current.icon className="w-32 h-32 text-primary/20" strokeWidth={0.5} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
