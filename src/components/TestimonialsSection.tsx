import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Plant Manager, Tata Steel",
    quote: "SGG has been our go-to supplier for 8+ years. Their zero-failure delivery record and 99.99% purity argon has been critical to our welding operations.",
    stars: 5,
  },
  {
    name: "Dr. Priya Sharma",
    role: "Medical Director, Apollo Hospitals",
    quote: "During the pandemic, SGG was the only supplier who maintained uninterrupted medical oxygen supply to our ICU. They literally saved lives.",
    stars: 5,
  },
  {
    name: "Vikram Patel",
    role: "Owner, Patel Fabrication Works",
    quote: "Switching to Nano Cut LPG from SGG improved our cutting precision dramatically. Their on-site technical support is unmatched in the industry.",
    stars: 5,
  },
  {
    name: "Anita Desai",
    role: "Procurement Head, Bharat Forge",
    quote: "Reliable, consistent, and always on time. SGG's bulk supply pipeline has eliminated our production bottlenecks completely.",
    stars: 5,
  },
];

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-3xl p-8 flex flex-col justify-between glow-hover"
    >
      <div>
        <Quote className="w-8 h-8 text-primary/30 mb-4" strokeWidth={1.5} />
        <p className="text-foreground leading-relaxed mb-6">"{t.quote}"</p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-bold text-foreground">{t.name}</div>
          <div className="text-sm text-muted-foreground">{t.role}</div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: t.stars }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Trusted by industry leaders</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From steel plants to hospitals, hear why 500+ clients rely on SGG for their critical gas supply.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
