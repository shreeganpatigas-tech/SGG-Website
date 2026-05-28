"use client";

export default function PipelineAnimation() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
      <svg className="h-full w-full" viewBox="0 0 1440 1600" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <filter id="pipeGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="steelPipe" x1="0" x2="1">
            <stop offset="0%" stopColor="#BFC3C7" stopOpacity=".18" />
            <stop offset="50%" stopColor="#F7F7F7" stopOpacity=".42" />
            <stop offset="100%" stopColor="#BFC3C7" stopOpacity=".18" />
          </linearGradient>
        </defs>
        <path d="M-40 220 C 300 160, 310 480, 610 420 S 930 160, 1470 260" stroke="url(#steelPipe)" strokeWidth="18" fill="none" />
        <path className="pipe-line" d="M-40 220 C 300 160, 310 480, 610 420 S 930 160, 1470 260" stroke="#6EC1E4" strokeWidth="3" fill="none" filter="url(#pipeGlow)" />
        <path d="M1450 650 C 1140 560, 1040 820, 750 760 S 280 720, -30 930" stroke="url(#steelPipe)" strokeWidth="16" fill="none" />
        <path className="pipe-line" d="M1450 650 C 1140 560, 1040 820, 750 760 S 280 720, -30 930" stroke="#D7782A" strokeWidth="3" fill="none" filter="url(#pipeGlow)" />
        <path d="M-60 1260 C 250 1080, 430 1370, 730 1210 S 1090 1030, 1490 1150" stroke="url(#steelPipe)" strokeWidth="14" fill="none" />
        <path className="pipe-line" d="M-60 1260 C 250 1080, 430 1370, 730 1210 S 1090 1030, 1490 1150" stroke="#BFC3C7" strokeWidth="3" fill="none" filter="url(#pipeGlow)" />
      </svg>
    </div>
  );
}
