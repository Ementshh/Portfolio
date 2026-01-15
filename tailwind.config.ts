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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'crt-blue': '#00aaff',
        'crt-blue-dim': '#006699',
        'crt-blue-glow': '#00ddff',
        'tv-bezel': '#1a1a1a',
        'tv-dark': '#0d0d0d',
        'tv-accent': '#2a2a2a',
      },
      fontFamily: {
        'crt': ['VT323', 'monospace'],
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'static': 'static 0.5s steps(10) infinite',
        'turn-on': 'turn-on 0.5s ease-out forwards',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.9' },
          '94%': { opacity: '1' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: 'inset 0 0 60px rgba(0, 170, 255, 0.1), 0 0 20px rgba(0, 170, 255, 0.2)' },
          '50%': { boxShadow: 'inset 0 0 80px rgba(0, 170, 255, 0.15), 0 0 30px rgba(0, 170, 255, 0.3)' },
        },
        static: {
          '0%, 100%': { backgroundPosition: '0 0' },
          '10%': { backgroundPosition: '-5% -10%' },
          '20%': { backgroundPosition: '-15% 5%' },
          '30%': { backgroundPosition: '7% -25%' },
          '40%': { backgroundPosition: '-5% 25%' },
          '50%': { backgroundPosition: '-15% 10%' },
          '60%': { backgroundPosition: '15% 0%' },
          '70%': { backgroundPosition: '0% 15%' },
          '80%': { backgroundPosition: '3% 35%' },
          '90%': { backgroundPosition: '-10% 10%' },
        },
        'turn-on': {
          '0%': { transform: 'scale(1, 0.01)', filter: 'brightness(10)' },
          '50%': { transform: 'scale(1, 1)', filter: 'brightness(5)' },
          '100%': { transform: 'scale(1, 1)', filter: 'brightness(1)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
