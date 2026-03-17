import { Separator } from "@/components/ui/separator";
import VisitorCounter from "@/components/VisitorCounter";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Safety", href: "#safety" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 md:px-8 py-6 sm:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Separator className="mb-6 sm:mb-8 bg-white/10" />

        {/* Top row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mb-5 sm:mb-6">
          <div className="text-center sm:text-left">
            <span className="font-display font-bold text-base sm:text-lg text-white">
              SGG<span className="text-primary">.</span>
            </span>
            <p className="text-[10px] sm:text-xs text-white/50 mt-0.5">Shree Ganpati Gastech Pvt. Ltd.</p>
          </div>

          {/* Nav — wrapping flex */}
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 sm:gap-x-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] sm:text-xs text-white/60 hover:text-white active:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <VisitorCounter />
          <p className="text-[9px] sm:text-[10px] text-white/45">
            © {new Date().getFullYear()} SGG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
