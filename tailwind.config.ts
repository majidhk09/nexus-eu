import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nexus EU palette — matches the PDF
        navy: {
          DEFAULT: "#0B2E5C",
          dark: "#061A3A",
        },
        gold: {
          DEFAULT: "#F4C430",
          soft: "#FFF4D1",
        },
        lithGreen: "#0C7C59",
        lithRed: "#C8102E",
        cream: "#FBFAF6",
        ink: {
          DEFAULT: "#1B1B1F",
          soft: "#4A4A52",
        },
        line: "#D9DDE3",
        cardbg: "#F7F8FB",
        muted: "#7A7E89",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-in-right": "slideInRight 0.4s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
