/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Cyber / SOC console palette
        primary: "#05070d",   // deep blue-black base
        secondary: "#7d8ba5", // muted slate text
        tertiary: "#0b1120",  // panel
        cyan: "#22d3ee",
        emerald: "#22e39a",
        amber: "#f5b731",
        critical: "#f43f5e",
        "black-100": "#0b1120",
        "black-200": "#080d18",
        "white-100": "#dbe4f0",
      },
      fontFamily: {
        display: ['"Chakra Petch"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
        body: ['"Space Grotesk"', "sans-serif"],
      },
      boxShadow: {
        card: "0px 24px 70px -30px rgba(34,211,238,0.35)",
        glow: "0 0 24px rgba(34,211,238,0.45)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
