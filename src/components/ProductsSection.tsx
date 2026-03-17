import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Wind, Flame, Snowflake, Atom, Droplets, RotateCcw, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const products = [
  {
    name: "Oxygen",
    formula: "O₂",
    icon: Wind,
    purity: "99.5%",
    desc: "Medical & industrial grade oxygen for hospitals, welding, and cutting operations.",
    accentColor: "#3b82f6",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    name: "Argon",
    formula: "Ar",
    icon: Atom,
    purity: "99.999%",
    desc: "Ultra-high purity argon for TIG/MIG welding, electronics, and semiconductor manufacturing.",
    accentColor: "#8b5cf6",
    tagColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  {
    name: "Carbon Dioxide",
    formula: "CO₂",
    icon: Snowflake,
    purity: "99.9%",
    desc: "Food-grade and industrial CO₂ for beverages, cold storage, and fire suppression.",
    accentColor: "#06b6d4",
    tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  {
    name: "Nitrogen",
    formula: "N₂",
    icon: Droplets,
    purity: "99.99%",
    desc: "High-purity nitrogen for inerting, blanketing, and cryogenic applications.",
    accentColor: "#10b981",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    name: "Nano Cut LPG",
    formula: "LPG",
    icon: Flame,
    purity: "Premium",
    desc: "Advanced LPG blend for precision metal cutting with superior flame characteristics.",
    accentColor: "#f59e0b",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  {
    name: "Cylinder Refilling",
    formula: "Service",
    icon: RotateCcw,
    purity: "Certified",
    desc: "BIS-certified cylinder testing and refilling with full traceability and compliance.",
    accentColor: "#14b8a6",
    tagColor: "bg-primary/10 text-primary border-primary/20",
  },
];

/* ── Product card ── */
function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="relative overflow-hidden rounded-2xl
                 bg-white/[0.02] backdrop-blur-sm
                 group active:scale-[0.98] transition-all duration-300
                 hover:bg-white/[0.05] w-full"
    >
      {/* Top accent */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${product.accentColor}, transparent)` }} />

      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `${product.accentColor}15`, border: `1px solid ${product.accentColor}30` }}
          >
            <product.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: product.accentColor }} strokeWidth={1.5} />
          </div>
          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${product.tagColor}`}>
            {product.formula}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold mb-1 text-white">{product.name}</h3>
        <div className="flex items-center gap-1.5 mb-2 sm:mb-3">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0" style={{ background: product.accentColor }} />
          <span className="font-mono text-[11px] sm:text-xs" style={{ color: product.accentColor }}>Purity: {product.purity}</span>
        </div>
        <p className="text-white/55 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{product.desc}</p>
        <a href="#contact" className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold" style={{ color: product.accentColor }}>
          Request Quote <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

/* ── Mobile carousel (no horizontal scroll — single card with swipe) ── */
function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const total = products.length;
  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  const touchStart = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
  };

  return (
    <div className="sm:hidden">
      <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ProductCard product={products[current]} index={0} />
        </motion.div>
      </div>

      {/* Nav row */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-1">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{ width: i === current ? 20 : 6, background: i === current ? products[current].accentColor : "rgba(255,255,255,0.2)" }}
            />
          ))}
        </div>
        <div className="flex gap-1.5">
          <button onClick={prev} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center active:scale-90 transition-transform">
            <ChevronLeft className="w-3.5 h-3.5 text-white/50" />
          </button>
          <button onClick={next} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center active:scale-90 transition-transform">
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
          </button>
        </div>
      </div>
      <p className="text-center text-[9px] text-white/20 uppercase tracking-[0.15em] mt-2">Swipe for more</p>
    </div>
  );
}

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-primary font-mono text-[11px] sm:text-sm uppercase tracking-[0.15em]">Our Products</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-white">Precision-grade gases</h2>
          <p className="text-white/55 mt-2 sm:mt-3 max-w-md mx-auto text-xs sm:text-sm leading-relaxed px-2">
            Every molecule matters. Certified purity, reliable delivery.
          </p>
        </motion.div>

        <MobileCarousel />
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {products.map((p, i) => <ProductCard key={p.name} product={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
