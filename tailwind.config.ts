import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFAF7",
        espresso: "#472D27",
        taupe: "#CFA188",
        blush: "#F8EDE9",
        neutral: "#E7D3C9"
      },
      fontFamily: {
        sans: ["var(--font-body)", "Avenir Next", "Segoe UI", "sans-serif"],
        serif: ["Bodoni 72", "Bodoni MT", "Didot", "Baskerville", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(71, 45, 39, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
