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
        cream: "#F6F4F0",
        espresso: "#3B2C24",
        taupe: "#9D8F83",
        blush: "#E8DBD2",
        neutral: "#D1C5BB"
      },
      fontFamily: {
        sans: ["var(--font-body)", "Segoe UI", "sans-serif"],
        serif: ["var(--font-heading)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(59, 44, 36, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
