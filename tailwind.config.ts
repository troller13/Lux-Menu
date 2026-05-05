import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0c0c0c",
          soft: "#141414",
          card: "#1a1a1a",
          line: "#262626"
        },
        gold: {
          DEFAULT: "#f3c14b",
          soft: "#f7d680",
          dark: "#c69a2c"
        },
        muted: "#9a9a9a"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "hero-grad":
          "linear-gradient(180deg, rgba(12,12,12,0.55) 0%, rgba(12,12,12,0.85) 60%, #0c0c0c 100%)"
      }
    }
  },
  plugins: []
};

export default config;
