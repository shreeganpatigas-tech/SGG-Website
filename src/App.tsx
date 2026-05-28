import { useState } from "react";
import { PRODUCTS, CERTIFICATIONS, INDUSTRIES, METRICS } from "./data";
import { Product } from "./types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionTitle from "./components/SectionTitle";
import IndustrialScene from "./components/IndustrialScene";
import PipelineAnimation from "./components/PipelineAnimation";
import IndustrialCard from "./components/IndustrialCard";
import GlowButton from "./components/GlowButton";
import GlassPanel from "./components/GlassPanel";
import AnimatedCounter from "./components/AnimatedCounter";
import FloatingCertificate from "./components/FloatingCertificate";
import IndustryNode from "./components/IndustryNode";
import HeroLighting from "./components/HeroLighting";
import GlobeScene from "./components/GlobeScene";
import ProductModal from "./components/ProductModal";

// Interactive structural icons
import { 
  Building2, 
  ShieldCheck, 
  Settings, 
  CheckCircle, 
  Factory, 
  Briefcase, 
  Award, 
  FileCheck, 
  Users, 
  Globe2, 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Instagram, 
  Youtube,
  Quote,
  Flame,
  Droplet,
  Compass
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#F7F7F7] selection:bg-[#B5121B]/50 selection:text-white font-sans antialiased overflow-x-hidden pt-[115px]">
      
      {/* Dynamic Header console */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* SECTION 1: HERO */}
      <section id="hero" className="relative w-full overflow-hidden py-10 md:py-16 border-b border-white/[0.03]">
        <HeroLighting />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Hero text branding information */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6 text-left max-w-2xl">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-none bg-zinc-900 border border-[#2A2A2A] font-mono text-[10px] text-[#B5121B] font-bold tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-none bg-[#B5121B] animate-[pulse_1.5s_infinite]" />
              <span>INFRASTRUCTURE PLANT LEVEL CERTIFIED</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-[62px] font-display font-black tracking-tighter text-white leading-[0.95] uppercase">
              RELIABLE <span className="text-[#B5121B]">INDUSTRIAL</span> <br className="hidden sm:inline" />
              & MEDICAL GAS MANUFACTURING
            </h1>

            <p className="text-base text-zinc-400 font-sans leading-relaxed tracking-wide">
              Shree Ganpati Gastech Private Limited manufactures and supplies high-purity industrial and medical gases, serving critical power generation networks, healthcare chains, steel fabrication shops, and kilns of Central India under strict PESO surveillance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              <GlowButton 
                variant="primary" 
                onClick={() => handleNavigate("products")}
              >
                <span>EXPLORE PRODUCTS</span>
              </GlowButton>
              
              <GlowButton 
                variant="secondary" 
                onClick={() => handleNavigate("about")}
              >
                <span>FACTORY DETAILS</span>
              </GlowButton>
            </div>

            {/* Quick mini-spec details */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.04] w-full font-mono text-[10px] text-zinc-500">
              <div>
                <span className="text-white font-bold block text-xs">Burhar Hub</span>
                <span>CENTRAL PRODUCTION</span>
              </div>
              <div>
                <span className="text-white font-bold block text-xs">PESO / ISO</span>
                <span>SECURED ENROLMENT</span>
              </div>
              <div>
                <span className="text-white font-bold block text-xs">UHP Gases</span>
                <span>99.999% PURITY LIMIT</span>
              </div>
            </div>
          </div>

          {/* Interactive 3D Industrial viewport */}
          <div className="lg:col-span-6 w-full">
            <IndustrialScene />
          </div>

        </div>
      </section>

      {/* CONTINUOUS PIPELINE SEPARATOR: OXYGEN SYSTEM (Blue flow) */}
      <div className="bg-[#111111] py-4 border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <PipelineAnimation gasType="oxygen" flowSpeed={1.5} showDetails={true} />
        </div>
      </div>

      {/* SECTION 2: COMPANY INTRODUCTION */}
      <section id="about" className="relative py-20 bg-[#0E0E0F]">
        {/* Subtle grid pattern behind introduction section */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <GlassPanel
              intensity="high"
              className="p-8 border-white/[0.04] text-left relative overflow-hidden"
            >
              <div className="text-[#B5121B] font-mono text-[9px] font-bold tracking-[0.25em] h-4 uppercase mb-2">
                SGG LOGISTICS OPERATIONAL CONTROL
              </div>
              <h3 className="text-2xl font-sans font-semibold text-white tracking-tight mb-5">
                Large-Scale High Pressure Manufacturing Ecosystem
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-zinc-900 border border-[#2A2A2A] rounded-none flex gap-4">
                  <Factory className="w-8 h-8 text-[#B5121B] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">PESO Audited Facilities</h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Equipped with high-performance automated manifolds, filling cylinders safely under statutory gas codes with certified transport logs.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-zinc-900 border border-[#2A2A2A] rounded-none flex gap-4">
                  <ShieldCheck className="w-8 h-8 text-[#B5121B] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Advanced Lab Purity Testers</h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Each batch is vetted using moisture analyzers and gas chromatographs to support sensitive medical and high-heat engineering laser works.
                    </p>
                  </div>
                </div>
              </div>

              {/* Coordinates label */}
              <div className="font-mono text-[8px] text-zinc-600 border-t border-white/[0.04] pt-4 mt-6 flex justify-between uppercase">
                <span>MP CENTRAL FACTORY SYSTEM</span>
                <span>SHAHDOL SEC: 09</span>
              </div>
            </GlassPanel>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start gap-6 text-left order-1 lg:order-2">
            <SectionTitle 
              tag="FACTORY STATUS"
              title="Industrial Gas Infrastructure Built on Operational Trust"
              subtitle="With decades of manufacturing experience, SGG Gas Dynamics delivers engineering precision directly to heavy-industry projects."
            />

            <div className="text-sm text-zinc-400 space-y-4 font-sans leading-relaxed tracking-wide">
              <p>
                At Shree Ganpati Gastech Private Limited, we manufacture gases required for industrial operations and medical setups. Located strategically in Burhar, Shahdol, Madhya Pradesh, we provide continuous supply cycles directly to key cement manufacturers, regional government hospitals, and infrastructure welding hubs.
              </p>
              <p>
                Our vision bridges the gap between raw chemical output and rigorous certification standards. We implement automated line purge checks and certified steel valve alignments to guarantee zero leakages, secure high-pressure stability, and absolute safety assurance.
              </p>
            </div>

            <div className="flex gap-10 pt-4 font-sans">
              <div>
                <span className="text-white text-3xl font-bold tracking-tight block">99.99%</span>
                <span className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase inline-block mt-1">
                  Average Oxygen Purity
                </span>
              </div>
              <div className="border-l border-white/[0.05] pl-10">
                <span className="text-white text-3xl font-bold tracking-tight block">24/7</span>
                <span className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase inline-block mt-1">
                  Supply Reliability Window
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONTINUOUS PIPELINE SEPARATOR: LPG SYSTEM (Orange flow) */}
      <div className="bg-[#111111] py-4 border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <PipelineAnimation gasType="lpg" flowSpeed={2.5} showDetails={true} />
        </div>
      </div>

      {/* SECTION 3: PRODUCTS */}
      <section id="products" className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-left md:text-center max-w-3xl md:mx-auto mb-16">
            <SectionTitle
              align="center"
              tag="MANUFACTURING CATALOG"
              title="Certified Compressed Gases Catalog"
              subtitle="Explore SGG Gas Dynamics' certified high-pressure gases catalog, packed securely using standardized industrial steel manifolds to match intense engineering profiles."
            />
          </div>

          {/* Catalog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PRODUCTS.map((prod) => (
              <IndustrialCard
                key={prod.id}
                product={prod}
                onSelect={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* CONTINUOUS PIPELINE SEPARATOR: NITROGEN SYSTEM (Silver flow) */}
      <div className="bg-[#111111] py-4 border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <PipelineAnimation gasType="nitrogen" flowSpeed={1.0} showDetails={true} />
        </div>
      </div>

      {/* SECTION 4: INDUSTRIES SERVED */}
      <section id="industries" className="py-20 bg-[#0E0E0F]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-left max-w-3xl mb-12">
            <SectionTitle
              tag="SYSTEM LOGISTICS"
              title="Heavy Industry Logistics & Networks"
              subtitle="Our automated gas supply networks are engineered for heavy-duty setups, guaranteeing continuous pressure to power generators, healthcare centers, and cement processing lines."
            />
          </div>

          {/* Interactive map node console */}
          <IndustryNode />

        </div>
      </section>

      {/* SECTION 5: CERTIFICATIONS */}
      <section id="certifications" className="py-20 bg-[#111111] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-left md:text-center max-w-3xl md:mx-auto mb-16">
            <SectionTitle
              align="center"
              tag="STATUTORY TRUST"
              title="Enterprise Clearance & Compliance Files"
              subtitle="All operations are strictly backed by Indian statutory licenses, demonstrating certified environmental protection controls, security clearances, and tax transparency."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {CERTIFICATIONS.map((cert) => (
              <FloatingCertificate key={cert.id} certification={cert} />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE US & DASHBOARD METRICS */}
      <section id="metrics" className="py-20 bg-[#0D0D0E] border-t border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 flex flex-col items-start gap-6 text-left">
              <SectionTitle
                tag="METRICS HUB"
                title="B2B Supply Assurance By The Numbers"
                subtitle="We maintain an exemplary safety record paired with reliable gas bottling volumes to assist engineering and medical teams in Madhya Pradesh."
              />
              <p className="text-xs text-zinc-500 font-sans leading-relaxed tracking-wide">
                Our plant coordinates centralize daily bottling flows using high-performance safety manifolds. Each parameter is documented directly for regular internal factory clearing processes.
              </p>
              
              <GlowButton variant="outline" onClick={() => handleNavigate("contact")}>
                <span>CONTACT DISPATCH OFFICE</span>
              </GlowButton>
            </div>

            {/* Metrics digital display screen */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {METRICS.map((met, index) => (
                <GlassPanel
                  key={index}
                  intensity="medium"
                  showCorners={true}
                  className="p-6 border-white/[0.04] text-left relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-[9px] text-[#B5121B] font-bold tracking-widest uppercase">
                      SGG LIVE DATA // SYS-{index + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
                      <AnimatedCounter value={met.value} />
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-[#B5121B]">{met.suffix}</span>
                  </div>

                  <h4 className="text-sm font-semibold text-white tracking-wide mb-1.5">
                    {met.label}
                  </h4>
                  
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {met.subtext}
                  </p>
                </GlassPanel>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7: DIRECTOR MESSAGE */}
      <section className="py-24 bg-[#111111] relative overflow-hidden">
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-80 bg-red-600/[0.015] filter blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-zinc-900 border border-[#2A2A2A] rounded-none">
              <Quote className="w-8 h-8 text-[#B5121B] rotate-180" />
            </div>
          </div>

          <span className="font-mono text-[9px] text-[#B5121B] font-bold tracking-[0.25em] block mb-4 uppercase">
            LEADERSHIP REFLECTION
          </span>

          <h3 className="text-2xl sm:text-3xl font-sans font-medium text-[#F7F7F7] tracking-tight leading-relaxed max-w-3xl mx-auto italic mb-8">
            "Industrial gas is not simply a commodity; it is the structural lifeblood of modern construction and healthcare ecosystems. Shree Ganpati Gastech guarantees that this flow continues safely, cleanly, and reliably."
          </h3>

          <div className="inline-block border-t border-white/[0.05] pt-4 mt-2">
            <div className="text-sm font-sans font-bold text-white tracking-wide">
              Executive Directorate Message
            </div>
            <div className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase mt-0.5">
              Shree Ganpati Gastech Private Limited
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 8: CONTACT */}
      <section id="contact" className="py-20 bg-[#0E0E0F] border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-left md:text-center max-w-3xl md:mx-auto mb-16">
            <SectionTitle
              align="center"
              tag="SECURE CORRESPONDENCE"
              title="Establish Technical Contact"
              subtitle="Connect directly with our central dispatch office in Shahdol, Madhya Pradesh to negotiate delivery frequencies, verify manifold schedules, and request formal specifications."
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Direct Information (6 Cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              
              <GlassPanel
                intensity="high"
                className="flex-grow flex flex-col justify-between text-left p-8 border-white/[0.05]"
              >
                <div>
                  <div className="font-mono text-[9px] text-[#B5121B] font-bold tracking-[0.2em] mb-4 uppercase text-left">
                    SGG DISPATCH REGISTRY CODES
                  </div>

                  <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-8">
                    Shree Ganpati Gastech Private Limited accepts physical and formal digital correspondence from verified purchase managers, power grids, government municipal clinics, and industrial trading firms.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 text-left">
                      <div className="p-2.5 bg-zinc-900 border border-[#2A2A2A] rounded-none">
                        <MapPin className="w-5 h-5 text-[#B5121B]" />
                      </div>
                      <div>
                        <span className="font-mono text-[9px] text-zinc-600 block font-bold">OFFICE & BOTTLING FACTORY</span>
                        <span className="text-sm font-semibold text-white block mt-0.5">
                          Burhar, Shahdol, Madhya Pradesh, India
                        </span>
                        <span className="text-xs text-zinc-400 mt-1 block">
                          Pin Code Location: 484110
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 text-left">
                      <div className="p-2.5 bg-zinc-900 border border-[#2A2A2A] rounded-none">
                        <Phone className="w-5 h-5 text-[#B5121B]" />
                      </div>
                      <div>
                        <span className="font-mono text-[9px] text-zinc-600 block font-bold">DIRECT DISPATCH VOICE CALLS</span>
                        <a 
                          href="tel:+917987594387" 
                          className="text-sm font-semibold text-white block mt-0.5 hover:text-red-500 transition-colors"
                        >
                          +91 7987594387
                        </a>
                        <span className="text-xs text-zinc-400 mt-1 block">
                          Operational Timing: 24/7 Hotline
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 text-left">
                      <div className="p-2.5 bg-zinc-900 border border-[#2A2A2A] rounded-none">
                        <Mail className="w-5 h-5 text-[#B5121B]" />
                      </div>
                      <div>
                        <span className="font-mono text-[9px] text-zinc-600 block font-bold">COMMERCIAL ENQUIRY EMAILS</span>
                        <a 
                          href="mailto:shreeganpatigastech@gmail.com" 
                          className="text-sm font-semibold text-white block mt-0.5 hover:text-red-500 transition-colors"
                        >
                          shreeganpatigastech@gmail.com
                        </a>
                        <span className="text-xs text-zinc-400 mt-1 block">
                          Invoices & RFPs Cleared within 16 Hours
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/[0.04] pt-6 mt-8 flex items-center justify-between font-mono text-[9px] text-zinc-600">
                  <span>GST REG: 23AAYCS3412B1Z8</span>
                  <span className="text-emerald-500 font-bold">GRID LINK STABLE</span>
                </div>

              </GlassPanel>

            </div>

            {/* 3D Rotating Globe Viewport (6 Cols) */}
            <div className="lg:col-span-6">
              <GlobeScene />
            </div>

          </div>

        </div>
      </section>

      {/* Dark premium footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Specification drawer modal overlay */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </div>
  );
}
