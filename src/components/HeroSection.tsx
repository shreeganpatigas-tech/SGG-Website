import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const container = {
  hidden: { opacity: 0 },
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-svh flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto text-center px-4"
      >
        <motion.div variants={item}>
          <span className="inline-block font-mono text-sm text-primary border border-primary/30 rounded-full px-4 py-1.5 mb-8">
            27 Years · Zero Safety Incidents
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6"
        >
          Powering Industries.
          <br />
          <span className="text-gradient-orange">Saving Lives.</span>
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          From high-purity medical oxygen to industrial-grade Argon, we deliver
          the elements of progress with precision and zero-failure supply.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="px-8 py-6 text-base" asChild>
            <a href="#products">
              Explore Gases <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" className="px-8 py-6 text-base" asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "99.99%", label: "Purity" },
            { value: "24/7", label: "Delivery" },
            { value: "500+", label: "Clients" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-mono text-2xl md:text-3xl font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </section>
  );
}
