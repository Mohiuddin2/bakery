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
        // Warm bakery neutrals
        ink: "#2A1B12", // deep espresso brown — primary text / darkest
        charcoal: "#3A2618", // alt dark brown
        cream: "#FFF9EF", // warm dough white — page background
        sand: "#F6E8CE", // wheat — subtle fills & borders
        muted: "#8A7763", // warm taupe — secondary text
        // Brand: yellow / brown / green
        yellow: {
          light: "#FCD968",
          DEFAULT: "#F6B42C",
          dark: "#E0991A",
        },
        brown: {
          light: "#9C6B3F",
          DEFAULT: "#6B4226",
          dark: "#43281A",
        },
        green: {
          light: "#9ECB5A",
          DEFAULT: "#7FB439",
          dark: "#5E8A26",
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
        card: "0 22px 50px -24px rgba(67, 40, 26, 0.35)",
        warm: "0 18px 40px -18px rgba(246, 180, 44, 0.55)",
        green: "0 18px 40px -18px rgba(127, 180, 57, 0.45)",
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
        // Slow cinematic zoom for the active hero slide
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 18s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
        kenburns: "kenburns 7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
