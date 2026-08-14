import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maritime: {
          950: "#030712",
          900: "#0b1329",
          800: "#111c3a",
          700: "#1a2a54",
          accent: "#06b6d4",
          blueAccent: "#0284c7",
          emerald: "#10b981",
          amber: "#f59e0b",
        },
      },
      animation: {
        'radar-sweep': 'radarSweep 4s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glowPulse: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 4px #06b6d4)' },
          '100%': { opacity: '1', filter: 'drop-shadow(0 0 12px #06b6d4)' },
        },
      },
      backgroundImage: {
        'radar-grid': 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 1px, transparent 1px)',
        'maritime-gradient': 'linear-gradient(to bottom, #030712, #0b1329, #030712)',
      },
    },
  },
  plugins: [],
};

export default config;
