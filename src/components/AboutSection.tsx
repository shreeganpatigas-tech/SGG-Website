import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Clock, Award } from "lucide-react";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const pillars = [
  {
    icon: Shield,
    title: "Zero-Failure Supply",
    desc: "27 years without a single safety incident. Our track record is our promise.",
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/25",
  },
  {
    icon: Zap,
    title: "Precision Delivery",
    desc: "GPS-tracked fleet ensuring on-time delivery across manufacturing & healthcare.",
    color: "from-amber-500/20 to-amber-500/5",
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/25",
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    desc: "Round-the-clock availability because your operations never sleep.",
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/25",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden section-light">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Visual */}
          <FadeIn>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 relative">
                <div className="w-full h-full bg-gradient-to-br from-primary/15 via-background to-accent/10 flex items-center justify-center relative">
                  {/* Decorative elements */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.15)_0%,transparent_50%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(245,158,11,0.1)_0%,transparent_50%)]" />
                  
                  {/* Large SGG text */}
                  <span className="font-mono text-5xl sm:text-6xl md:text-7xl font-bold text-white/8 select-none">SGG</span>
                  
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }} />
                </div>

                {/* Award badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5 active:scale-[0.98]">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 sm:-right-8 lg:-right-12 z-20
                           bg-white/[0.02] backdrop-blur-md border border-white/5
                           shadow-2xl rounded-2xl p-4 sm:p-5
                           max-w-[180px] sm:max-w-[220px]"
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold text-primary mb-0.5">27+</div>
                <div className="text-[11px] sm:text-xs text-white/70 leading-snug">Years of excellence in gas infrastructure</div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Right: Content */}
          <div className="mt-6 lg:mt-0">
            <FadeIn delay={0.1}>
              <span className="text-primary font-mono text-xs sm:text-sm uppercase tracking-[0.2em]">About SGG</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-6 text-white leading-tight">
                The invisible backbone of Indian Industry.
              </h2>
              <p className="text-white/65 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed">
                Shree Ganpati Gastech Pvt. Ltd. is a vertically integrated gas infrastructure company.
                We manufacture, purify, store, and deliver industrial &amp; medical gases with
                uncompromising precision to hospitals, factories, and fabrication units across India.
              </p>
            </FadeIn>

            {/* Pillar cards */}
            <div className="space-y-3 sm:space-y-4">
              {pillars.map((p, i) => (
                <FadeIn key={p.title} delay={0.2 + i * 0.1}>
                  <div className={`flex gap-3 sm:gap-4 items-start p-3 sm:p-4 rounded-xl sm:rounded-2xl
                                   border ${p.borderColor} bg-gradient-to-r ${p.color}
                                   group active:scale-[0.99] transition-all duration-300
                                   hover:border-white/20`}>
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white/5 border border-white/10
                                    flex items-center justify-center shrink-0
                                    group-hover:scale-110 group-active:scale-110 transition-transform duration-300`}>
                      <p.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${p.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base mb-0.5 text-white">{p.title}</h3>
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
