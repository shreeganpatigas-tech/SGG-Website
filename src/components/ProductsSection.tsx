import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Wind, Flame, Snowflake, Atom, Droplets, RotateCcw } from "lucide-react";

const products = [
  {
    name: "Oxygen",
    formula: "O₂",
    icon: Wind,
    purity: "99.5%",
    desc: "Medical & industrial grade oxygen for hospitals, welding, and cutting operations.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    name: "Argon",
    formula: "Ar",
    icon: Atom,
    purity: "99.999%",
    desc: "Ultra-high purity argon for TIG/MIG welding, electronics, and semiconductor manufacturing.",
    color: "from-violet-500/20 to-violet-600/5",
  },
  {
    name: "Carbon Dioxide",
    formula: "CO₂",
    icon: Snowflake,
    purity: "99.9%",
    desc: "Food-grade and industrial CO₂ for beverages, cold storage, and fire suppression.",
    color: "from-cyan-500/20 to-cyan-600/5",
  },
  {
    name: "Nitrogen",
    formula: "N₂",
    icon: Droplets,
    purity: "99.99%",
    desc: "High-purity nitrogen for inerting, blanketing, and cryogenic applications.",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    name: "Nano Cut LPG",
    formula: "LPG",
    icon: Flame,
    purity: "Premium",
    desc: "Advanced LPG blend for precision metal cutting with superior flame characteristics.",
    color: "from-orange-500/20 to-orange-600/5",
  },
  {
    name: "Cylinder Refilling",
    formula: "Service",
    icon: RotateCcw,
    purity: "Certified",
    desc: "BIS-certified cylinder testing and refilling with full traceability and compliance.",
    color: "from-primary/20 to-primary/5",
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-card rounded-3xl p-8 relative overflow-hidden cursor-pointer glow-hover group"
    >
      {/* Gradient bg */}
      <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <product.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
          </div>
          <span className="font-mono text-sm text-muted-foreground">{product.formula}</span>
        </div>

        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <div className="font-mono text-sm text-primary mb-4">Purity: {product.purity}</div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={hovered ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-muted-foreground text-sm mb-4">{product.desc}</p>
          <Button variant="hero" size="sm" className="px-6" asChild>
            <a href="#contact">Request Quote</a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">The Vault</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Precision-grade gases
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Every molecule matters. Explore our range of industrial and medical gases, each delivered with certified purity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
