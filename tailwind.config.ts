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
        primary: {
          DEFAULT: "#8B1538", // Deep red - football coaching accent
          light: "#A01D3D",
          dark: "#6B0F2A",
        },
        charcoal: {
          DEFAULT: "#1a1a1a", // Near-black primary text
          light: "#2d2d2d",
        },
        "pastel-red": "#FEE2E2", // Pastel red for hero and special sections
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      spacing: {
        "section": "4rem", // 64px - generous section spacing
        "section-lg": "6rem", // 96px - larger section spacing
      },
      borderRadius: {
        "card": "0.75rem", // 12px - rounded corners on cards
        "image": "0.5rem", // 8px - rounded corners on image frames
      },
      boxShadow: {
        "card": "0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05)",
      },
      backgroundColor: {
        "section": "#f9fafb", // Very light gray for section backgrounds
        "section-alt": "rgba(139, 21, 56, 0.05)", // Pastel red tinted accent
      },
    },
  },
  plugins: [],
};
export default config;

