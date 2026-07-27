/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2540",
          50: "#EEF2F6",
          100: "#D9E2EA",
          200: "#B3C5D6",
          300: "#8CA7C1",
          400: "#5A7FA0",
          500: "#2F5578",
          600: "#1C3A5E",
          700: "#152D4A",
          800: "#0F2540",
          900: "#0A1A2E",
        },
        cream: {
          DEFAULT: "#FAF7F1",
          50: "#FFFFFF",
          100: "#FAF7F1",
          200: "#F2ECE0",
          300: "#E7DFCF",
        },
        ink: {
          DEFAULT: "#2A2F37",
          light: "#6B7280",
        },
        wa: {
          DEFAULT: "#22C35E",
          dark: "#1AA34E",
        },
      },
      fontFamily: {
        display: ["Cairo", "sans-serif"],
        body: ["Tajawal", "sans-serif"],
      },
      borderRadius: {
        xl2: "20px",
      },
      boxShadow: {
        soft: "0 4px 24px -6px rgba(15, 37, 64, 0.08)",
        card: "0 2px 14px -4px rgba(15, 37, 64, 0.10)",
        lift: "0 14px 34px -10px rgba(15, 37, 64, 0.18)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
