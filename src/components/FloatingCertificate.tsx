import React from "react";
import { Certification } from "../types";
import GlassPanel from "./GlassPanel";
import { Award, ShieldCheck, CheckSquare, Zap } from "lucide-react";

interface FloatingCertificateProps {
  certification: Certification;
  key?: React.Key;
}

export default function FloatingCertificate({ certification }: FloatingCertificateProps) {
  
  // Choose icon based on registration ID
  const getIcon = () => {
    switch (certification.id) {
      case "iso":
        return <Award className="w-8 h-8 text-[#B5121B]" />;
      case "peso":
        return <ShieldCheck className="w-8 h-8 text-[#8E44AD]" />;
      case "startup-india":
        return <Zap className="w-8 h-8 text-[#3498DB]" />;
      default:
        return <CheckSquare className="w-8 h-8 text-[#F39C12]" />;
    }
  };

  return (
    <GlassPanel
      glowOnHover
      intensity="high"
      className="relative text-left border-white/[0.04] p-8 hover:border-zinc-700/80 duration-500 hover:-translate-y-1.5 shadow-2xl overflow-hidden group"
    >
      {/* High-Tech Glowing Laser Laser-Edge Line */}
      <span 
        className="absolute top-0 right-0 h-10 w-[2px] transition-all duration-300 pointer-events-none group-hover:h-full group-hover:translate-y-full"
        style={{
          background: `linear-gradient(to bottom, transparent, ${certification.accentColor}, transparent)`,
        }}
      />
      
      <div className="flex flex-col gap-6 h-full justify-between">
        <div className="flex items-start justify-between gap-4">
          <div className="p-3 bg-zinc-900 border border-[#2A2A2A] rounded-none">
            {getIcon()}
          </div>
          
          {/* Statutory clearance code overlay */}
          <div className="text-right">
            <span className="font-mono text-[8px] text-zinc-600 block leading-tight font-bold">REGISTRY SERIAL CODE</span>
            <span className="font-mono text-[10px] text-zinc-300 font-semibold bg-zinc-950 p-1 border border-[#2A2A2A] rounded-none block mt-0.5 shadow-sm uppercase">
              {certification.regNo}
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-sans font-semibold text-white tracking-tight leading-snug group-hover:text-red-500 duration-300">
            {certification.name}
          </h4>
          <span className="font-mono text-[9px] text-[#B5121B] font-bold tracking-widest block mt-1 uppercase">
            {certification.authority}
          </span>
          <p className="text-xs text-zinc-400 font-sans leading-relaxed mt-3.5">
            {certification.description}
          </p>
        </div>

        {/* Security checklist validation seals */}
        <div className="border-t border-white/[0.03] pt-4 flex items-center justify-between font-mono text-[9px] text-zinc-500">
          <div className="flex items-center gap-1.5 text-emerald-500">
            <span className="w-1.5 h-1.5 rounded-none bg-emerald-500" />
            <span>AUTHENTICATED STATUS</span>
          </div>
          <span className="text-[8px] bg-[#151515] border border-[#2A2A2A] px-2 py-0.5 rounded-none">
            SECURE PORTAL
          </span>
        </div>
      </div>
    </GlassPanel>
  );
}
