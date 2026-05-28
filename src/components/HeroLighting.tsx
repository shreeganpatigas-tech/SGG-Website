export default function HeroLighting() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Cinematic ambient spotlight halo focused in the top center background */}
      <div 
        className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[1100px] h-[650px] rounded-full filter blur-[150px] opacity-25 mix-blend-screen transition-all duration-1000"
        style={{
          background: "radial-gradient(ellipse at center, #B5121B, rgba(110, 193, 228, 0.4) 40%, transparent 75%)"
        }}
      />
      
      {/* Laser-guided structural lines simulating blueprint projection */}
      <div 
        className="absolute top-0 inset-x-0 h-[400px] opacity-[0.035]"
        style={{
          backgroundImage: "linear-gradient(to right, #B5121B 1px, transparent 1px), linear-gradient(to bottom, #B5121B 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      
      {/* Light ray beam projecting from top center */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[450px] bg-gradient-to-b from-red-600/30 to-transparent pointer-events-none"
      />
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[240px] h-[350px] bg-gradient-to-b from-red-500/5 to-transparent filter blur-md transform origin-top rotate-12 pointer-events-none"
      />
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[245px] h-[350px] bg-gradient-to-b from-cyan-500/5 to-transparent filter blur-md transform origin-top -rotate-12 pointer-events-none"
      />

      {/* Extreme dark vignetting around boundaries for maximum cinematic contrast */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#111111] to-transparent" />
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#111111] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#111111] to-transparent" />
    </div>
  );
}
