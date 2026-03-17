import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const certs = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "ISO 45001:2018",
  "BIS Certified",
  "PESO Approved",
  "NABL Accredited",
  "GMP Compliant",
  "Drug License Holder",
];

const standards = [
  "All cylinders tested at 250 bar hydraulic pressure",
  "Real-time gas purity monitoring systems",
  "CCTV-monitored filling stations",
  "Complete batch traceability for every cylinder",
  "Trained & certified handling team",
];

function AnimatedCheck({ delay }: { delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={inView ? { scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay }}
      className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0"
    >
      <motion.div
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
      >
        <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
      </motion.div>
    </motion.div>
  );
}

export default function SafetySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="safety" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">Compliance</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Safety is non-negotiable</h2>
        </motion.div>

        {/* Marquee */}
        <div className="overflow-hidden mb-16 py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...certs, ...certs].map((c, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 mx-4 glass-card rounded-full px-6 py-3 text-sm font-medium text-foreground shrink-0"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Standards grid */}
        <div className="max-w-2xl mx-auto space-y-5">
          {standards.map((s, i) => (
            <div key={s} className="flex items-center gap-4">
              <AnimatedCheck delay={i * 0.1} />
              <span className="text-foreground">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
