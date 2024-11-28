/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "hero-primary": "hero-primary 8s ease-in-out infinite",
        "hero-secondary": "hero-secondary 8s ease-in-out infinite",
      },
      keyframes: {
        "hero-primary": {
          "0%, 100%": { "border-radius": "65% 35% 29% 71% / 55% 30% 70% 45%" },
          "50%": { "border-radius": "21% 79% 50% 50% / 21% 50% 50% 79%" },
        },
        "hero-secondary": {
          "0%, 100%": { "border-radius": "20% 80% 50% 50% / 20% 50% 50% 80%" },
          "50%": { "border-radius": "65% 35% 30% 70% / 55% 30% 70% 45%" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
