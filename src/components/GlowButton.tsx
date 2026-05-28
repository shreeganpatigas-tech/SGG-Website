import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  glowColor?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function GlowButton({
  children,
  variant = "primary",
  glowColor = "#B5121B",
  className = "",
  ...props
}: GlowButtonProps) {
  
  const baseStyle = "relative font-mono text-xs font-bold uppercase tracking-widest py-3.5 px-7 rounded-none overflow-hidden select-none transition-all duration-300 transform active:translate-y-[2px] cursor-pointer flex items-center justify-center gap-2.5";
  
  const variantStyles = {
    primary: "bg-[#B5121B] text-white border border-[#B5121B] hover:bg-transparent hover:text-[#B5121B] duration-300",
    secondary: "bg-transparent border border-[#BFC3C7] text-[#F7F7F7] hover:border-[#B5121B] hover:text-[#B5121B] duration-300",
    outline: "bg-transparent border border-white/20 text-[#F7F7F7] hover:border-[#B5121B] hover:text-[#B5121B] duration-300"
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {/* Heavy metallic top glow bar reflection */}
      <span className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
      
      {/* Label Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {/* Hydraulic Press active glow layer */}
      {variant === "primary" && (
        <span 
          className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-300 mix-blend-screen pointer-events-none"
          style={{ backgroundColor: glowColor }}
        />
      )}
    </button>
  );
}
