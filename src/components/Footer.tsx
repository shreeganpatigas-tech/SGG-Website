import { Mail, Phone, MapPin, Landmark, Award, ShieldAlert, ArrowUpCircle } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  
  const handleLogoClick = () => {
    onNavigate("hero");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-white/[0.04] pt-16 pb-8 relative overflow-hidden font-sans">
      
      {/* Dynamic Ambient Background Blue grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"
        style={{ maskImage: "radial-gradient(circle at bottom right, white, transparent 75%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Core Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/[0.04]">
          
          {/* Main Brand Column (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-left">
            <button 
              onClick={handleLogoClick}
              className="flex items-center gap-3 pr-4 text-left cursor-pointer group"
            >
              <div className="h-10 w-10 bg-zinc-900 border-2 border-[#B5121B] rounded-none flex items-center justify-center font-black text-[#B5121B] text-sm font-sans">
                SGG
              </div>
              <div className="leading-none">
                <div className="text-white font-black text-sm tracking-tighter uppercase font-display">
                  GAS DYNAMICS
                </div>
                <div className="text-[8px] text-[#BFC3C7] font-mono tracking-widest mt-0.5 uppercase">
                  Shree Ganpati Gastech
                </div>
              </div>
            </button>
            
            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm mt-2">
              Shree Ganpati Gastech Private Limited manufactures and distributes premium-grade industrial and pharmacopoeia medical gases, bringing operational reliability to critical infrastructure corridors across Central India.
            </p>
            
            <div className="font-mono text-[9px] text-[#B5121B] font-bold tracking-widest mt-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-none animate-ping" />
              <span>ACTIVE BOTTLING SYSTEM STATUS</span>
            </div>
          </div>

          {/* Quick links directory (2 Cols) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-mono text-[9px] text-white font-bold tracking-[0.2em] mb-4 uppercase">
              RESOURCES
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate("hero")} 
                  className="text-zinc-500 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Home Console
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("about")} 
                  className="text-zinc-500 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Factory Profile
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("products")} 
                  className="text-zinc-500 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Gas Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("industries")} 
                  className="text-zinc-500 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Sectors Served
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("certifications")} 
                  className="text-zinc-500 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Certificates
                </button>
              </li>
            </ul>
          </div>

          {/* Registries lists (3 Cols) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-mono text-[9px] text-white font-bold tracking-[0.2em] mb-4 uppercase">
              STATUTORY ENROLMENTS
            </h4>
            <div className="space-y-3.5">
              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#B5121B] mt-0.5 shrink-0" />
                <div className="text-[10px] leading-relaxed">
                  <span className="text-zinc-300 font-semibold block">Quality Assured</span>
                  <span className="text-zinc-500 font-mono text-[9px]">ISO 9001:2015 // EMS 14001</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                <div className="text-[10px] leading-relaxed">
                  <span className="text-zinc-300 font-semibold block">PESO Fill Clearance</span>
                  <span className="text-zinc-500 font-mono text-[9px]">EXPLOSIVES DEPT CIVIL COMPLY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact coordinates quick list (3 Cols) */}
          <div className="lg:col-span-3 text-left font-sans">
            <h4 className="font-mono text-[9px] text-white font-bold tracking-[0.2em] mb-4 uppercase">
              CENTRAL OFFICE
            </h4>
            <ul className="space-y-3 text-xs leading-relaxed">
              <li className="flex items-start gap-2 text-zinc-400">
                <MapPin className="w-4 h-4 text-[#B5121B] shrink-0 mt-0.5" />
                <span>Burhar, Shahdol, Madhya Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <Phone className="w-4 h-4 text-[#B5121B] shrink-0" />
                <span>+91 7987594387</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <Mail className="w-4 h-4 text-[#B5121B] shrink-0" />
                <span>shreeganpatigastech@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-zinc-500 font-mono text-center md:text-left">
          <div>
            © 2026 Shree Ganpati Gastech Private Limited (SGG Gas Dynamics). All Rights Reserved.
          </div>
          
          <div className="text-[9px] flex items-center gap-3">
            <span>GST COMPLIANT</span>
            <span className="text-zinc-700">|</span>
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{ cursor: "pointer" }}
              className="hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <span>RETURN CONSOLE TOP</span>
              <ArrowUpCircle className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
