import { Separator } from "@/components/ui/separator";

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
    <footer className="px-4 md:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <Separator className="mb-10 bg-border" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-display font-bold text-xl text-foreground">
              SGG<span className="text-primary">.</span>
            </span>
            <p className="text-sm text-muted-foreground mt-1">Shree Ganpati Gastech Pvt. Ltd.</p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SGG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
