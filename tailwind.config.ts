import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16130F",
        charcoal: "#1E1A15",
        cream: "#FAF6EF",
        sand: "#F1E9DB",
        muted: "#7A7065",
        gold: {
          light: "#E0C684",
          DEFAULT: "#C8A24C",
          dark: "#A7842F",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 20px 45px -20px rgba(22, 19, 15, 0.25)",
        gold: "0 18px 40px -18px rgba(200, 162, 76, 0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 18s linear infinite",
      },
      backgroundImage: {
        "grain":
          "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
