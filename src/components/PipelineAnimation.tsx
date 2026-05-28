import { useEffect, useState } from "react";
import { Activity, Thermometer, ShieldAlert } from "lucide-react";

interface PipelineProps {
  gasType?: "oxygen" | "lpg" | "nitrogen";
  flowSpeed?: number; // scale from 1 to 5
  showDetails?: boolean;
}

export default function PipelineAnimation({
  gasType = "oxygen",
  flowSpeed = 2,
  showDetails = true
}: PipelineProps) {
  const [pressure, setPressure] = useState<number>(148.6);
  const [isNormal, setIsNormal] = useState<boolean>(true);

  // Map configurations based on gas types
  const gasConfigs = {
    oxygen: {
      color: "#6EC1E4",
      highlight: "rgba(110, 193, 228, 0.4)",
      label: "OXYGEN (O₂)",
      defaultPressure: 150.0,
      prefix: "OX"
    },
    lpg: {
      color: "#F39C12",
      highlight: "rgba(243, 156, 18, 0.4)",
      label: "LIQUEFIED PETROLEUM GAS (LPG)",
      defaultPressure: 9.8,
      prefix: "LP"
    },
    nitrogen: {
      color: "#BFC3C7",
      highlight: "rgba(191, 195, 199, 0.4)",
      label: "NITROGEN (N₂)",
      defaultPressure: 180.0,
      prefix: "NT"
    }
  };

  const config = gasConfigs[gasType] || gasConfigs.oxygen;

  // Simulate gauge telemetry reading
  useEffect(() => {
    const scale = gasType === "lpg" ? 0.05 : 0.3;
    const interval = setInterval(() => {
      setPressure((prev) => {
        const fuzz = (Math.random() - 0.5) * scale;
        return parseFloat((config.defaultPressure + fuzz).toFixed(2));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [gasType, config.defaultPressure]);

  return (
    <div className="w-full bg-[#111111]/85 border border-white/[0.05] p-6 rounded-2xl relative overflow-hidden font-mono text-zinc-400">
      {/* Decorative Blueprint Background Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"
        style={{ maskImage: "radial-gradient(circle, white, transparent 95%)" }}
      />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Metric Console Details */}
        <div className="flex flex-col gap-2 min-w-[200px]">
          <div className="flex items-center gap-2">
            <span 
              className="w-2.5 h-2.5 rounded-full inline-block animate-ping"
              style={{ backgroundColor: config.color }}
            />
            <span className="text-white text-xs font-bold tracking-widest uppercase">
              {config.label}
            </span>
          </div>
          <div className="text-[10px] text-zinc-500">
            SGG CORE FLOW LINE // {config.prefix}-LINE-09
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-bold text-white tracking-tight">
              {pressure}
            </span>
            <span className="text-[10px] text-zinc-500 font-medium">BAR</span>
          </div>
        </div>

        {/* Dynamic Pipe SVG */}
        <div className="flex-1 w-full relative h-16 flex items-center">
          <svg className="w-full h-12 overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 48">
            {/* Transparent Pipe casing */}
            <path
              d="M 0 24 L 500 24"
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="24"
              strokeLinecap="round"
            />
            {/* Outer high-spec core conduit pipe */}
            <path
              d="M 0 24 L 500 24"
              fill="none"
              stroke="rgba(255, 255, 255, 0.03)"
              strokeWidth="28"
              strokeLinecap="round"
            />
            {/* Interior color line */}
            <path
              d="M 0 24 L 500 24"
              fill="none"
              stroke={config.color}
              strokeWidth="2"
              strokeDasharray="4, 16"
              className="opacity-40"
            />
            {/* Flow Gas Pulses */}
            <path
              d="M 0 24 L 500 24"
              fill="none"
              stroke={config.color}
              strokeWidth="10"
              strokeDasharray="40 110"
              strokeLinecap="round"
              className="opacity-60"
              style={{
                animation: `flowAnimation ${20 / flowSpeed}s linear infinite`
              }}
            />
            {/* Super Highlight Central Beam */}
            <path
              d="M 0 24 L 500 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeDasharray="20 130"
              strokeLinecap="round"
              className="opacity-80"
              style={{
                animation: `flowAnimation ${25 / flowSpeed}s linear infinite`
              }}
            />
          </svg>

          {/* Inline Analog Pressure Gauge Details */}
          <div className="absolute left-[30%] -translate-x-1/2 scale-75 bg-zinc-950/95 border border-white/[0.12] rounded p-1.5 flex items-center gap-1.5 shadow-xl">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <div className="text-[8px] leading-tight">
              <span className="text-zinc-500 block">FLOW RATING</span>
              <span className="text-white font-bold font-mono">NOMINAL</span>
            </div>
          </div>

          <div className="absolute left-[70%] -translate-x-1/2 scale-75 bg-zinc-950/95 border border-white/[0.12] rounded p-1.5 flex items-center gap-1.5 shadow-xl">
            <Thermometer className="w-3.5 h-3.5" style={{ color: config.color }} />
            <div className="text-[8px] leading-tight">
              <span className="text-zinc-500 block">TEMP CORE</span>
              <span className="text-white font-bold font-mono">
                {gasType === "oxygen" ? "-183.0°C" : gasType === "nitrogen" ? "-196.2°C" : "15.4°C"}
              </span>
            </div>
          </div>
        </div>

        {/* Status Indicators Console */}
        {showDetails && (
          <div className="flex gap-4 p-2 bg-zinc-900/60 border border-white/[0.04] rounded-lg min-w-[180px] justify-between">
            <div className="text-[9px]">
              <div className="text-zinc-500 font-semibold mb-1">SAFETY METRICS</div>
              <div className="text-white flex items-center gap-1 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                PESO SECURED
              </div>
            </div>
            
            <div className="text-[9px] text-right">
              <div className="text-zinc-500 font-semibold mb-1">DENSITY INDEX</div>
              <div className="text-white font-bold">
                {gasType === "oxygen" ? "1.429 g/L" : gasType === "nitrogen" ? "1.251 g/L" : "0.54 kg/L"}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Styled animation styles */}
      <style>{`
        @keyframes flowAnimation {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -300;
          }
        }
      `}</style>
    </div>
  );
}
