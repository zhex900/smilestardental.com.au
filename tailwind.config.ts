import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "0.75rem", // rounded => rounded-xl
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      colors: {
        beige: {
          50: "#F3F3F3",
          100: "#E2E2E2",
          200: "#D1D1D1",
          300: "#B6B6B6",
          400: "#949494",
          500: "#767676",
          600: "#5E5E5E",
          700: "#474747",
          800: "#333333",
          900: "#1F1F1F",
        },
        gold: {
          50: "#FBF7E6",
          100: "#F5E7B8",
          200: "#E8D9A8",
          300: "#DCC67A",
          400: "#C4B583",
          500: "#B8963D",
          600: "#9E7F2F",
          700: "#7C6325",
          800: "#5F4A1C",
          900: "#3F3214",
        },
        neutral: {
          900: "#2B2B2B",
          700: "#6B645C",
        },
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
