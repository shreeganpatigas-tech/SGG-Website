import { motion } from "framer-motion";
import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

/* ───── detect mobile ───── */
function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

/* ───── animated counter ───── */
function AnimatedValue({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const duration = 2200;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;

      if (suffix === "%") {
        setDisplay(current.toFixed(2));
      } else {
        setDisplay(Math.round(current).toLocaleString());
      }

      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [value, suffix]);

  return (
    <span className="font-mono text-xl sm:text-2xl md:text-3xl font-bold text-white">
      {display}{suffix}
    </span>
  );
}

/* ───── floating particles (fewer on mobile) ───── */
function Particles({ count = 25 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 15,
        size: 2 + Math.random() * 2,
        opacity: 0.1 + Math.random() * 0.15,
      })),
    [count],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            bottom: "-5%",
            opacity: 0,
          }}
          animate={{
            y: [0, -1200],
            x: [0, (Math.random() - 0.5) * 40],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/* ───── mouse glow (desktop only) ───── */
function useMouseGlow(ref: React.RefObject<HTMLElement | null>, enabled: boolean) {
  const [pos, setPos] = useState({ x: 0, y: 0, active: false });

  const handleMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
  }, [ref]);

  const handleLeave = useCallback(() => {
    setPos((prev) => ({ ...prev, active: false }));
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [ref, handleMove, handleLeave, enabled]);

  return pos;
}

/* ───── stagger-in wrapper for mobile sections ───── */
export function MobileSlideIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const ref = useRef(null);
  const initial = direction === "up" ? { y: 40 } : direction === "left" ? { x: -40 } : { x: 40 };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initial }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───── main hero ───── */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const mouse = useMouseGlow(sectionRef, !isMobile);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-svh flex items-center overflow-hidden"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" as const }}
      >
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20 md:from-black/60 md:via-black/40 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />

      {/* Mouse glow (desktop only) */}
      {mouse.active && (
        <div
          className="absolute pointer-events-none z-[5] transition-opacity duration-300 hidden md:block"
          style={{
            left: mouse.x - 200,
            top: mouse.y - 200,
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      )}

      {/* Particles — fewer on mobile for performance */}
      <Particles count={isMobile ? 10 : 25} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-6 md:px-12 py-24 sm:py-28 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block font-mono text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] bg-primary text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-sm mb-6 sm:mb-8">
              Certified Industrial Excellence
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" as const }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] sm:leading-[1] mb-5 sm:mb-8 text-white"
          >
            High purity medical and{" "}
            <span className="text-gradient-accent">
              industrial gas.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" as const }}
            className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl text-white/70"
          >
            Powering industries and saving lives with premium quality gases.
            SGG provides high-purity Oxygen, Argon, and CO₂.
          </motion.p>

          {/* CTAs — stacked on small mobile, row on sm+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            <Button
              variant="hero"
              size="lg"
              className="px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-bold uppercase tracking-wider touch-ripple active:scale-[0.97] transition-transform"
              asChild
            >
              <a href="#products">
                Explore Products <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className="px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-bold uppercase tracking-wider touch-ripple active:scale-[0.97] transition-transform"
              asChild
            >
              <a href="https://wa.me/917987594387" target="_blank" rel="noopener noreferrer">Contact Us</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 max-w-sm sm:max-w-md"
          >
            {[
              { value: 99.99, suffix: "%", label: "Purity" },
              { value: 30, suffix: "+", label: "Years" },
              { value: 500, suffix: "+", label: "Clients" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-primary/50 pl-3 sm:pl-4">
                <AnimatedValue value={s.value} suffix={s.suffix} />
                <div className="text-[10px] sm:text-xs text-white/50 mt-1 uppercase tracking-wider font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <span className="text-[9px] sm:text-[10px] text-white/30 uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white/30 animate-scroll-bounce" />
      </motion.div>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/917987594387"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow hover:scale-110 active:scale-95 transition-transform touch-target"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </section>
  );
}
