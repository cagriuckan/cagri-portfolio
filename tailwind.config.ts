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
        bg: "#272722",
        "bg-light": "#2f2f29",
        cream: "#f0ebe0",
        "cream-dim": "#a8a49a",
        accent: "#c8b89a",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
