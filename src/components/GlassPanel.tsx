import React, { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
  intensity?: "low" | "medium" | "high";
  showCorners?: boolean;
  key?: React.Key;
}

export default function GlassPanel({
  children,
  className = "",
  glowOnHover = false,
  intensity = "low",
  showCorners = true
}: GlassPanelProps) {
  const opacities = {
    low: "bg-[#111111] border-[#2A2A2A]",
    medium: "bg-[#151515] border-[#2A2A2A]",
    high: "bg-[#0A0A0A] border-[#2A2A2A]"
  };

  return (
    <div
      className={`relative rounded-none border ${opacities[intensity]} p-6 transition-all duration-300 group ${
        glowOnHover ? "hover:border-[#B5121B]/60" : ""
      } ${className}`}
    >
      {/* Structural Corner Bracket Details (CAD Look) */}
      {showCorners && (
        <>
          <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#B5121B]/40 group-hover:border-[#B5121B] group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/[0.12] group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
          <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white/[0.12] group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#B5121B]/40 group-hover:border-[#B5121B] group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
        </>
      )}

      {/* Grid Pattern Mesh overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] rounded-none pointer-events-none"
        style={{ maskImage: "radial-gradient(circle at center, white, transparent 90%)" }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
