import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          red: "#B5121B",
          graphite: "#111111",
          steel: "#2A2A2A",
          silver: "#BFC3C7",
          white: "#F7F7F7",
          oxygen: "#6EC1E4",
          lpg: "#D7782A",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "Inter", "sans-serif"],
        body: ["var(--font-inter-tight)", "Inter", "sans-serif"],
      },
      boxShadow: {
        metal: "0 24px 80px rgba(0,0,0,.32), inset 0 1px 0 rgba(255,255,255,.12)",
        glow: "0 0 34px rgba(110,193,228,.28)",
        redglow: "0 0 38px rgba(181,18,27,.28)",
      },
      keyframes: {
        flow: {
          "0%": { strokeDashoffset: "900" },
          "100%": { strokeDashoffset: "0" },
        },
        pressure: {
          "0%, 100%": { opacity: ".28", transform: "scaleX(.82)" },
          "50%": { opacity: ".78", transform: "scaleX(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        flow: "flow 12s linear infinite",
        pressure: "pressure 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
