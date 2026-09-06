/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1B2B",
        deep: "#08131F",
        brand: "#1479FF",
        accent: "#FF7A00",
        paper: "#F7FAFC",
        muted: "#6B7785",
        soft: "#EEF3F7",
      },
      fontFamily: {
        display: ['"Inter Tight"', "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // fluid editorial display sizes
        display: ["clamp(2.75rem, 8vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        headline: ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      maxWidth: { shell: "1240px" },
      transitionTimingFunction: { premium: "cubic-bezier(0.16, 1, 0.3, 1)" },
      keyframes: {
        "fade-up": { from: { opacity: 0, transform: "translateY(16px)" }, to: { opacity: 1, transform: "none" } },
      },
      animation: { "fade-up": "fade-up .6s cubic-bezier(0.16,1,0.3,1) both" },
    },
  },
  plugins: [],
};
