/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: "#0D0C0B",
          surface: "#141311",
          card: "#191815",
          border: "#292724",
          light: "#F6F5F2",
          lightSurface: "#EFECE6",
          lightBorder: "#DDD8CF",
          gold: "#C5A85C",
          goldLight: "#D9BE76",
          goldMuted: "#8E773D",
          mute: "#858178",
          ink: "#11100E",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      letterSpacing: {
        editorial: "0.2em",
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
