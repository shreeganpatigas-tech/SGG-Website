import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Plot No. 12, Industrial Area, Pune, MH 411001" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Mail, label: "Email", value: "info@sggastech.com", href: "mailto:info@sggastech.com" },
  { icon: Clock, label: "Hours", value: "24/7 · 365 Days" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass = `w-full bg-white/[0.04] border border-white/10 rounded-xl
                      px-3 py-2.5 sm:px-4 sm:py-3
                      text-white text-sm placeholder:text-white/20
                      focus:border-primary/50 focus:ring-1 focus:ring-primary/15
                      outline-none transition-all duration-300`;

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 section-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-primary font-mono text-[11px] sm:text-sm uppercase tracking-[0.15em]">Contact</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-white">Let's talk supply</h2>
          <p className="text-white/55 mt-2 text-xs sm:text-sm max-w-sm mx-auto">
            Get a custom quote. We respond within 4 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-5 sm:gap-8">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5"
          >
            {/* Contact cards — 2-col grid on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-5">
              {contactInfo.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-2 sm:gap-3 items-start p-2.5 sm:p-3 rounded-xl
                             border border-white/5 bg-white/[0.02]
                             active:scale-[0.99] transition-all"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <c.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-wider">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-white active:text-primary transition-colors font-medium text-[11px] sm:text-sm break-all leading-tight">
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-white font-medium text-[11px] sm:text-sm leading-tight">{c.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden aspect-video border border-white/5 bg-white/[0.02] hidden sm:block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.92836999874!2d73.78056437912922!3d18.524766496218465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3)" }}
                allowFullScreen
                loading="lazy"
                title="SGG Location"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/5 bg-white/[0.02]
                         p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] sm:text-xs text-white/60 font-medium">Full Name</label>
                  <input type="text" required className={inputClass} placeholder="Name" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] sm:text-xs text-white/60 font-medium">Company</label>
                  <input type="text" className={inputClass} placeholder="Company" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] sm:text-xs text-white/60 font-medium">Email</label>
                  <input type="email" required className={inputClass} placeholder="Email" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] sm:text-xs text-white/60 font-medium">Phone</label>
                  <input type="tel" required className={inputClass} placeholder="Phone" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] sm:text-xs text-white/60 font-medium">Gas Required</label>
                <select className={inputClass}>
                  <option value="">Select gas</option>
                  <option>Oxygen</option>
                  <option>Argon</option>
                  <option>Carbon Dioxide</option>
                  <option>Nitrogen</option>
                  <option>Nano Cut LPG</option>
                  <option>Cylinder Refilling</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] sm:text-xs text-white/40 font-medium">Message</label>
                <textarea rows={3} className={`${inputClass} resize-none`} placeholder="Your requirements..." />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full py-4 sm:py-5 text-sm active:scale-[0.98] gap-2"
                disabled={submitted}
              >
                {submitted ? (
                  <motion.span initial={{ scale: 0.8 }} animate={{ scale: 1 }}>✓ Request Received</motion.span>
                ) : (
                  <><Send className="w-4 h-4" /> Send Request</>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
