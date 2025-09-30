/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0D10",
        surface: "#121418",
        surface2: "#171A1F",
        text: "#E6E8EA",
        accent: "#39FF88",
        accent2: "#56CCF2",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
