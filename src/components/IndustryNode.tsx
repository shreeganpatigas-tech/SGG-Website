import { useState } from "react";
import { INDUSTRIES } from "../data";
import { Industry } from "../types";
import GlassPanel from "./GlassPanel";
import { Network, ArrowUpRight, Zap, RefreshCw, CheckCircle } from "lucide-react";

export default function IndustryNode() {
  const [selectedId, setSelectedId] = useState<string>("power-plants");
  const selectedIndustry = INDUSTRIES.find((ind) => ind.id === selectedId) || INDUSTRIES[0];

  // Map representation positions for SVG HUD network overlay
  const nodes = [
    { id: "power-plants", label: "Power Grid Hub", x: "20%", y: "30%", color: "#6EC1E4" },
    { id: "cement-plants", label: "Kiln Preheaters", x: "75%", y: "20%", color: "#F39C12" },
    { id: "hospitals", label: "Medical Care Wing", x: "85%", y: "70%", color: "#00E5FF" },
    { id: "manufacturing", label: "Cutter Girders", x: "50%", y: "45%", color: "#BFC3C7" },
    { id: "fabrication", label: "Weld Platforms", x: "18%", y: "75%", color: "#E74C3C" },
    { id: "infrastructure", label: "Civil Site Hub", x: "42%", y: "82%", color: "#F1C40F" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6">
      
      {/* COLUMN 1: INTERACTIVE HUD MAP (7 Cols) */}
      <div className="lg:col-span-7 flex flex-col">
        <GlassPanel
          intensity="medium"
          className="flex-grow flex flex-col justify-between relative min-h-[420px] overflow-hidden p-6 border-white/[0.04]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.04] pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-[#B5121B]" />
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                COOPERATIVE SUPPLY TRANSIT MAP // ACTIVE SENSORS
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[9px] text-[#B5121B] font-bold">
              <span className="w-2 h-2 rounded-none bg-[#B5121B] animate-[pulse_1.2s_infinite]" />
              <span>LOGISTIC BROADCAST FEED</span>
            </div>
          </div>

          <p className="text-zinc-500 font-sans text-xs text-left mb-6 max-w-xl">
            Click on active supply nodes below to calibrate delivery parameters and trace specific gas volumes routed to key industrial clusters across Central India.
          </p>

          {/* Map Vector Stage */}
          <div className="relative flex-grow bg-[#0B0B0C] border border-[#2A2A2A] rounded-none overflow-hidden h-[240px] md:h-[280px]">
            {/* Tech Radar Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#B5121B]/[0.025] rounded-none pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#B5121B]/[0.015] rounded-none pointer-events-none animate-[ping_8s_infinite]" />
            
            {/* Ambient India/MP Matrix Coordinates */}
            <div className="absolute bottom-3 left-3 font-mono text-[8px] text-zinc-600 block text-left">
              GRID SCALE: 1 : 120,000 // DATUM WGS84
            </div>

            {/* SVG Network Connections (Supply pipelines representation) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Draw connected lines from selected node to all other nodes to represent active feed */}
              {nodes.map((node, idx) => {
                const targetNode = nodes.find((n) => n.id === selectedId);
                if (!targetNode || node.id === selectedId) return null;
                return (
                  <g key={idx}>
                    <line
                      x1={targetNode.x}
                      y1={targetNode.y}
                      x2={node.x}
                      y2={node.y}
                      stroke={targetNode.color}
                      strokeWidth="1.5"
                      className="opacity-20"
                    />
                    <line
                      x1={targetNode.x}
                      y1={targetNode.y}
                      x2={node.x}
                      y2={node.y}
                      stroke={targetNode.color}
                      strokeWidth="2.5"
                      strokeDasharray="8 22"
                      className="opacity-60"
                      style={{
                        animation: "dashOffset 4s linear infinite"
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Interactive Node Anchors */}
            {nodes.map((node) => {
              const isSelected = selectedId === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedId(node.id)}
                  className="absolute cursor-pointer -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                  style={{ left: node.x, top: node.y }}
                >
                  {/* Selectable Ring Aura */}
                  <span
                    className={`absolute -inset-4 rounded-none transition-all duration-300 scale-50 group-hover:scale-100 ${
                      isSelected ? "bg-[#B5121B]/15 border border-[#B5121B]/40" : "bg-white/[0.01] border border-white/[0.04]"
                    }`}
                  />
                  
                  {/* Active node light bulb */}
                  <span
                    className={`relative flex h-3.5 w-3.5 items-center justify-center rounded-none border shadow-lg transition-transform duration-300 hover:scale-110`}
                    style={{
                      backgroundColor: isSelected ? node.color : "#111111",
                      borderColor: isSelected ? "#FFFFFF" : node.color || "#888",
                      boxShadow: isSelected ? `0 0 14px ${node.color}` : "none"
                    }}
                  />

                  {/* Bubble tooltip hovering below node */}
                  <span
                    className={`absolute mt-2.5 top-full left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] px-2.5 py-1 rounded-none shadow-lg transition-all duration-200 border ${
                      isSelected 
                        ? "bg-zinc-950 border-[#B5121B] text-white opacity-100 translate-y-0"
                        : "bg-black/90 border-white/[0.05] text-zinc-500 opacity-60 translate-y-0.5 group-hover:opacity-90"
                    }`}
                  >
                    {node.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/[0.03] justify-start text-[9px] uppercase font-mono">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setSelectedId(ind.id)}
                className={`px-3 py-1.5 rounded-none cursor-pointer border transition-all duration-200 ${
                  selectedId === ind.id
                    ? "bg-[#B5121B]/15 text-[#F7F7F7] border-[#B5121B] font-semibold"
                    : "bg-zinc-900/60 text-zinc-500 border-white/[0.04] hover:border-zinc-700 hover:text-zinc-300"
                }`}
              >
                {ind.name.split(" ")[0]}
              </button>
            ))}
          </div>

        </GlassPanel>
      </div>

      {/* COLUMN 2: PARAMETERS CONSOLE PANEL (5 Cols) */}
      <div className="lg:col-span-5 flex flex-col">
        <GlassPanel
          intensity="high"
          className="flex-grow flex flex-col justify-between text-left p-8 border-white/[0.04]"
        >
          <div>
            <div className="font-mono text-[9px] text-[#B5121B] font-bold tracking-[0.2em] mb-2 uppercase">
              ACTIVE SECTOR CALIBRATION
            </div>
            
            <h3 className="text-2xl font-sans font-semibold text-white tracking-tight mb-2.5 leading-tight">
              {selectedIndustry.name}
            </h3>
            
            <div className="font-sans text-xs text-[#B5121B] font-semibold flex items-center gap-1.5 mb-5">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>{selectedIndustry.shortDesc}</span>
            </div>

            <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-6">
              {selectedIndustry.description}
            </p>

            {/* Gases utilised list */}
            <div className="space-y-4 pt-1 mb-6">
              <span className="font-mono text-[9px] text-zinc-500 font-bold tracking-wider uppercase block">
                ROUTED COMPRESSED SOLUTIONS:
              </span>
              <div className="flex flex-col gap-2">
                {selectedIndustry.gasUtilization.map((gas, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 p-2.5 bg-black/45 border border-[#2A2A2A] rounded-none text-xs font-sans text-white text-left"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{gas}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Counter parameters */}
          <div className="border-t border-white/[0.04] pt-5 mt-auto flex items-center justify-between">
            <div className="font-mono text-left">
              <span className="text-zinc-600 block text-[8px] leading-tight">SUPPLY SECURITY LEVEL</span>
              <span className="text-[#6EC1E4] text-sm font-semibold">{selectedIndustry.metric}</span>
            </div>
            
            <span className="font-mono text-[9px] bg-red-600/10 border border-red-600/30 px-3 py-1 rounded-none text-[#B5121B] font-bold">
              LOGISTIC SEALED
            </span>
          </div>

        </GlassPanel>
      </div>

      <style>{`
        @keyframes dashOffset {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: 400;
          }
        }
      `}</style>
    </div>
  );
}
