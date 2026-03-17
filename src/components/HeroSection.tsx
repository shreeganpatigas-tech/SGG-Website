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
    <section id="hero" className="relative min-h-svh flex items-end overflow-hidden">
      {/* Background with slow zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <img src={heroBg} alt="Industrial gas facility" className="w-full h-full object-cover" />
      </motion.div>
      {/* Darker overlay for readability — left-heavy gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

      {/* Content — left-aligned like reference */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-20 md:pb-28 pt-32"
      >
        {/* Badge */}
        <motion.div variants={item}>
          <span className="inline-block bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest px-5 py-2 mb-8">
            Certified Industrial Excellence
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 max-w-4xl"
        >
          Reliable Industrial &amp;
          <br />
          <span className="text-gradient-orange">Medical Gas Supply.</span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Powering industries and saving lives with premium quality gases. SGG provides high-purity Oxygen, Argon, and CO₂ with 24/7 logistical support.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
          <Button variant="hero" size="lg" className="px-10 py-6 text-sm uppercase tracking-widest font-bold" asChild>
            <a href="#products">
              Explore Products <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" className="px-10 py-6 text-sm uppercase tracking-widest font-bold" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={item}
          className="mt-16 flex flex-wrap gap-10 border-t border-foreground/10 pt-8"
        >
          {[
            { value: "99.99%", label: "Gas Purity" },
            { value: "27+", label: "Years Experience" },
            { value: "500+", label: "Happy Clients" },
            { value: "24/7", label: "Delivery Support" },
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
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </section>
  );
}
