import { Product } from "../types";
import GlassPanel from "./GlassPanel";
import GlowButton from "./GlowButton";
import { X, CheckCircle, Scale, Wind, ShieldAlert, FileText, ChevronRight } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md transition-all duration-300">
      
      {/* Absolute background click closure */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-none animate-in fade-in zoom-in-95 duration-200">
        
        <GlassPanel
          intensity="high"
          className="relative text-left p-6 md:p-10 border-white/[0.08]"
        >
          {/* Close button in top-right corner */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-none cursor-pointer bg-[#151515] border border-[#2A2A2A] text-white hover:bg-[#B5121B] hover:text-white hover:border-[#B5121B] transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.05] pb-6 mb-6">
            <div>
              <span className="font-mono text-[9px] text-[#B5121B] font-bold tracking-[0.25em] block uppercase mb-1">
                SGG MANIFOLD BOTTLING SPECS
              </span>
              <h3 className="text-2xl md:text-3xl font-sans font-semibold text-white tracking-tight flex items-center gap-3">
                <span>{product.name}</span>
                {product.formula && (
                  <span 
                    className="text-sm font-mono px-2 py-0.5 rounded-none border font-bold text-white shadow-inner"
                    style={{ backgroundColor: `${product.color}22`, borderColor: `${product.color}aa` }}
                  >
                    {product.formula}
                  </span>
                )}
              </h3>
              <p className="text-xs text-zinc-500 font-mono mt-0.5">{product.alias}</p>
            </div>

            {/* Quality badge stats */}
            <div className="flex flex-row items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-none bg-emerald-500 animate-ping" />
              <div className="text-xs font-mono font-bold" style={{ color: product.color }}>
                {product.purity} PURITY GRADE
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* SPECS COLUMN LEFT */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono font-bold tracking-widest text-[#B5121B] uppercase mb-2.5 flex items-center gap-2">
                  <Wind className="w-4 h-4" />
                  <span>CHEMICAL & PHYSICAL SPECS</span>
                </h4>
                
                <div className="bg-black/45 border border-[#2A2A2A] rounded-none divide-y divide-white/[0.03]">
                  <div className="flex justify-between items-center p-3 text-xs">
                    <span className="text-zinc-500 font-mono">NOMINAL FILL PRESSURE</span>
                    <span className="text-white font-semibold font-mono">{product.pressure}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 text-xs">
                    <span className="text-zinc-500 font-mono">VALVE SPEC CODES</span>
                    <span className="text-white font-semibold font-mono">{product.valveType}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 text-xs">
                    <span className="text-zinc-500 font-mono">MANUFACTURING AUDIT BASIS</span>
                    <span className="text-white font-semibold font-mono">IS:7285 PART II</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-zinc-500" />
                  <span>DEDICATED QUALITY ASSURANCE</span>
                </h4>
                
                <ul className="space-y-2.5 text-xs text-zinc-400">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#B5121B] mt-0.5 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* SAFETY COLUMN RIGHT */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono font-bold tracking-widest text-[#B5121B] uppercase mb-2.5 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>PESO HAZARD COMPLIANCE</span>
                </h4>
                
                <div className="bg-red-600/5 border border-red-600/15 p-4 rounded-none text-xs text-zinc-400 space-y-3.5 leading-relaxed">
                  <div className="font-mono text-[9px] text-[#B5121B] font-bold">
                    REGULATED UNDER EN-1089 SAFETY CODES
                  </div>
                  <p>
                    All cylinders are filled and inspected as per Petroleum and Explosives Safety Organisation guidelines. Cylinders feature official hydraulic water pressure testing validation dates stamped directly on neck rings.
                  </p>
                  <p className="text-[11px] font-sans text-red-400 font-semibold italic">
                    Caution: Cylinders must be stored in well-ventilated bays on flat surfaces, secured against mechanical toppling forces. Keep separated from combustible substances.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-3 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-zinc-500" />
                  <span>MAJOR INDUSTRY UTILIZATION</span>
                </h4>
                
                <div className="flex flex-wrap gap-1.5">
                  {product.applications.map((app, index) => (
                    <span
                      key={index}
                      className="text-[10px] font-sans px-3 py-1.5 rounded-none bg-zinc-900 border border-[#2A2A2A] text-zinc-300"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          <div className="border-t border-white/[0.05] pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[10px] font-mono text-zinc-500 max-w-md text-center sm:text-left">
              ISSUED BY QUALIFIED ANALYSTS OF SHREE GANPATI GASTECH PRIVATE LIMITED. TECHNICAL SHEETS SUBJECT TO REGULAR PESO AUDITING TIMELINES.
            </div>
            
            <GlowButton variant="primary" onClick={onClose} className="w-full sm:w-auto">
              <span>CONFIRM DOCUMENTATION</span>
            </GlowButton>
          </div>

        </GlassPanel>
      </div>

    </div>
  );
}
