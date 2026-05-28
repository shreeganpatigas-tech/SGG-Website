import { useState, useEffect } from "react";
import { Mail, Phone, Menu, X, Landmark, ShieldCheck, Linkedin, Instagram, Youtube } from "lucide-react";
import GlowButton from "./GlowButton";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Products", id: "products" },
    { label: "Industries", id: "industries" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-transform duration-300">
      
      {/* 1. TOP HEADER (Email, Phone, Monochrome Socials) */}
      <div className="bg-[#0A0A0A] text-[#BFC3C7] border-b border-[#2A2A2A] text-[10px] sm:text-xs py-2 px-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2.5">
          
          <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-center">
            <a 
              href="mailto:shreeganpatigastech@gmail.com" 
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5 text-[#B5121B]" />
              <span>shreeganpatigastech@gmail.com</span>
            </a>
            
            <a 
              href="tel:+917987594387" 
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#B5121B]" />
              <span>+91 7987594387</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-600 block text-[9px] uppercase tracking-wider font-mono mr-2 hidden md:inline">
              ISO & PESO COMPLIANT MANUFACTURER
            </span>
            <div className="flex items-center gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                className="text-zinc-500 hover:text-white hover:drop-shadow-[0_0_6px_#B5121B] transition-all duration-200"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="text-zinc-500 hover:text-white hover:drop-shadow-[0_0_6px_#B5121B] transition-all duration-200"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="YouTube"
                className="text-zinc-500 hover:text-white hover:drop-shadow-[0_0_6px_#B5121B] transition-all duration-200"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav 
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-[#111111]/90 backdrop-blur-md py-4 border-[#2A2A2A]" 
            : "bg-[#111111]/80 backdrop-blur-md py-6 border-[#2A2A2A]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo / Brand Ident */}
          <button 
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
          >
            <div className="relative">
              {/* Rotating abstract hydraulic valve icon for brand logo */}
              <div className="absolute inset-0 bg-[#B5121B]/15 blur-md rounded-none group-hover:bg-[#B5121B]/35 transition-all duration-300" />
              <div className="h-10 w-10 bg-[#111111] border-2 border-[#B5121B] rounded-none flex items-center justify-center font-bold text-[#B5121B] text-lg relative z-10 font-sans tracking-tight">
                SGG
              </div>
            </div>
            
            <div className="font-sans leading-none">
              <div className="text-white font-black text-sm tracking-tighter uppercase font-display">
                GAS DYNAMICS
              </div>
              <div className="text-[8px] text-[#BFC3C7] font-mono font-medium tracking-[0.2em] mt-0.5 uppercase">
                Shree Ganpati Gastech Pvt. Ltd.
              </div>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-1.5 font-mono text-xs tracking-widest uppercase transition-colors duration-200 font-bold cursor-pointer ${
                    isActive ? "text-[#B5121B]" : "text-white hover:text-[#B5121B]"
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Subtle clean bottom marker if active */}
                  {isActive && (
                    <span className="absolute bottom-[-14px] inset-x-4 h-[2px] bg-[#B5121B] rounded-none" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Secure CTA */}
          <div className="hidden lg:block">
            <GlowButton 
              variant="outline" 
              onClick={() => handleNavClick("contact")}
              className="text-[10px] py-1.5 px-4 font-mono font-semibold"
            >
              <span>CONNECT OFFICE</span>
            </GlowButton>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </nav>

      {/* MOBILE CONSOL DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[88px] bg-[#111111] border-b border-[#2A2A2A] p-6 flex flex-col gap-4 font-mono shadow-2xl animate-in slide-in-from-top duration-300 z-50">
          <div className="text-zinc-500 text-[9px] uppercase tracking-wider mb-2 border-b border-[#2A2A2A] pb-2">
            SGG MOBILE COMMAND LOGISTICS
          </div>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left py-2 px-3 text-sm font-sans tracking-wide uppercase rounded-none transition-colors duration-200 ${
                  isActive 
                    ? "text-[#B5121B] bg-white/[0.02] border-l-2 border-[#B5121B] font-semibold" 
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
          
          <div className="pt-2 mt-2 border-t border-white/[0.03]">
            <GlowButton 
              variant="primary" 
              onClick={() => handleNavClick("contact")}
              className="w-full text-center"
            >
              <span>CONNECT REGISTRY</span>
            </GlowButton>
          </div>
        </div>
      )}

    </header>
  );
}
