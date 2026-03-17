import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Clock } from "lucide-react";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const pillars = [
  { icon: Shield, title: "Zero-Failure Supply", desc: "27 years without a single safety incident. Our track record is our promise." },
  { icon: Zap, title: "Precision Delivery", desc: "GPS-tracked fleet ensuring on-time delivery across manufacturing & healthcare." },
  { icon: Clock, title: "24/7 Operations", desc: "Round-the-clock availability because your operations never sleep." },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <FadeIn>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-secondary overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                  <span className="font-mono text-6xl font-bold text-primary/30">SGG</span>
                </div>
              </div>
              {/* Floating glass card */}
              <div className="absolute -bottom-8 -right-4 md:right-8 glass-card rounded-2xl p-6 max-w-xs">
                <div className="font-mono text-3xl font-bold text-primary mb-1">27+</div>
                <div className="text-sm text-muted-foreground">Years of excellence in industrial & medical gas infrastructure</div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Content */}
          <div>
            <FadeIn delay={0.1}>
              <span className="text-primary font-mono text-sm uppercase tracking-widest">About SGG</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                The invisible backbone of Indian Industry.
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Shree Ganpati Gastech Pvt. Ltd. is a vertically integrated gas infrastructure company.
                We manufacture, purify, store, and deliver industrial &amp; medical gases with
                uncompromising precision to hospitals, factories, and fabrication units across India.
              </p>
            </FadeIn>

            <div className="space-y-6">
              {pillars.map((p, i) => (
                <FadeIn key={p.title} delay={0.2 + i * 0.1}>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <p.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{p.title}</h3>
                      <p className="text-muted-foreground text-sm">{p.desc}</p>
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
