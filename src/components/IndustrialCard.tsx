import React, { useState } from "react";
import { Product } from "../types";
import GlassPanel from "./GlassPanel";
import { Gauge, Sliders, ToggleLeft as Valve, CheckCircle } from "lucide-react";

interface IndustrialCardProps {
  product: Product;
  onSelect?: (product: Product) => void;
  key?: React.Key;
}

export default function IndustrialCard({ product, onSelect }: IndustrialCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlassPanel
        glowOnHover
        intensity="medium"
        className="flex-1 flex flex-col justify-between text-left h-full border-white/[0.05] hover:border-zinc-700 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] duration-300 transform hover:-translate-y-1"
      >
        {/* Dynamic Glowing Pipe header representing connected gas lines */}
        <div className="absolute top-0 left-6 right-6 h-[2px] transition-all duration-300 overflow-hidden">
          <div
            className="h-full transition-all duration-500 rounded-full"
            style={{
              backgroundColor: product.color,
              filter: isHovered ? `drop-shadow(0 0 8px ${product.color})` : "none",
              width: isHovered ? "100%" : "30%"
            }}
          />
        </div>

        {/* Card Header Section */}
        <div className="mb-5 relative">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="font-mono text-[9px] text-[#B5121B] font-bold tracking-[0.25em] uppercase">
              SGG CYLINDER BOTTLING // CERTFIED PURE
            </span>
            {product.formula && (
              <span 
                className="font-mono text-xs px-2.5 py-1 rounded-none bg-[#151515] border border-[#2A2A2A] font-bold text-white shadow-sm"
                style={{ borderColor: `${product.color}44` }}
              >
                {product.formula}
              </span>
            )}
          </div>
          <h3 className="text-xl font-sans font-semibold text-[#F7F7F7] tracking-tight group-hover:text-white transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-[11px] font-mono text-zinc-500 font-medium tracking-wide mt-0.5">
            {product.alias}
          </p>
        </div>

        {/* Spec Grid HUD */}
        <div className="grid grid-cols-2 gap-2 mb-5 font-mono text-[10px] bg-black/45 border border-[#2A2A2A] rounded-none p-2.5">
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Gauge className="w-3.5 h-3.5 shrink-0 text-zinc-500" />
            <div>
              <span className="text-zinc-600 block text-[8px]">VESSEL PRESSURE</span>
              <span className="text-white font-bold">{product.pressure}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Sliders className="w-3.5 h-3.5 shrink-0 text-zinc-500" />
            <div>
              <span className="text-zinc-600 block text-[8px]">PURITY GRADIENT</span>
              <span className="font-bold uppercase" style={{ color: product.color }}>
                {product.purity}
              </span>
            </div>
          </div>
          <div className="col-span-2 divide-y divide-white/[0.03] pt-1">
            <div className="flex items-center justify-between text-[8px] py-1 text-zinc-500">
              <span>VALVE INTERFACE CODES:</span>
              <span className="text-white font-semibold font-mono text-[9px]">{product.valveType}</span>
            </div>
          </div>
        </div>

        {/* Short description */}
        <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-5 flex-grow">
          {product.description}
        </p>

        {/* Applications pills */}
        <div className="space-y-3.5 mb-6">
          <div className="text-[9px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
            TARGETED APPLICATIONS:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {product.applications.map((app, index) => (
              <span
                key={index}
                className="text-[9px] font-sans px-2.5 py-1 rounded-none bg-[#151515] text-zinc-300 border border-[#2A2A2A]"
              >
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* Core detailed specs collapsed display list */}
        <div className="border-t border-white/[0.05] pt-4 flex items-center justify-between mt-auto">
          <button
            onClick={() => onSelect && onSelect(product)}
            className="text-[10px] font-mono font-bold text-white hover:text-[#B5121B] tracking-wider transition-colors duration-200 cursor-pointer uppercase flex items-center gap-1"
          >
            <span>ENGINEERING MEMO CERTIFICATE</span>
            <span className="text-xs">→</span>
          </button>
          
          {/* LED Active State Light */}
          <div className="flex items-center gap-1.5">
            <span className="text-[8px] font-mono text-zinc-500 uppercase">PESO SEAL</span>
            <span className="w-2 h-2 rounded-none bg-emerald-500 animate-pulse border border-emerald-400/40" />
          </div>
        </div>
      </GlassPanel>
    </div>
  );
}
