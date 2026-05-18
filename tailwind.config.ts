import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:          "#070B14",
        "bg-deep":   "#040608",
        gold:        "#C9A84C",
        "gold-light":"#E8D070",
        "gold-dim":  "#7A5E28",
        "gold-muted":"rgba(201,168,76,0.15)",
        cream:       "#F0EEE9",
        "cream-dim": "#A8A49E",
        "cream-faint":"#5C5855",
        surface:     "#0D1421",
        "surface-2": "#111927",
        "surface-3": "#161F30",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.4em",
      },
      animation: {
        "fade-up":      "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":      "fadeIn 0.6s ease forwards",
        "glow-pulse":   "glowPulse 2.5s ease-in-out infinite",
        "marquee":      "marquee 22s linear infinite",
        "spin-slow":    "spin 12s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(201,168,76,0.35)" },
          "50%":     { boxShadow: "0 0 0 8px rgba(201,168,76,0)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(rgba(201,168,76,0.15) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-grid": "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
