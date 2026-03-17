import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ShieldCheck } from "lucide-react";

const certs = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "ISO 45001:2018",
  "BIS Certified",
  "PESO Approved",
  "NABL Accredited",
  "GMP Compliant",
  "Drug License",
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
      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0"
    >
      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" strokeWidth={2.5} />
    </motion.div>
  );
}

export default function SafetySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="safety" className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 mb-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-primary font-mono text-[11px] sm:text-sm uppercase tracking-[0.15em]">Compliance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Safety is non-negotiable</h2>
        </motion.div>

        {/* Certs — wrapping flex on mobile, marquee on desktop */}
        <div className="mb-8 sm:mb-12">
          {/* Mobile: wrapping tags (NO scroll) */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:hidden">
            {certs.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[10px] font-medium text-white/80 border border-white/10 bg-white/[0.02]"
              >
                <span className="w-1 h-1 rounded-full bg-primary" />
                {c}
              </motion.span>
            ))}
          </div>

          {/* Desktop: marquee */}
          <div className="hidden sm:block overflow-hidden py-2">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...certs, ...certs].map((c, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 mx-3 px-4 py-2 rounded-full text-sm font-medium text-white/90 border border-white/10 bg-white/[0.02] shrink-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Standards card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-6 md:p-8"
        >
          <h3 className="text-sm sm:text-base font-bold text-white mb-4 sm:mb-5 flex items-center gap-2">
            <span className="w-1 h-4 rounded-full bg-primary" />
            Our Safety Standards
          </h3>
          <div className="space-y-2.5 sm:space-y-3">
            {standards.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="flex items-start gap-2.5 sm:gap-3"
              >
                <AnimatedCheck delay={i * 0.05} />
                <span className="text-white/75 text-xs sm:text-sm leading-relaxed pt-1">{s}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
