/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Update this to match your project's structure
  ],
  theme: {
    extend: {
      colors: {
        primary: "#266FDB",
        secondary: {
          light: "#EAEAEA",
          medium: "#D9D9D9",
          heavy: "#999999",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slide-in": {
          "0%": { transform: "translateX(-25%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "slide-out": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-left": {
          "0%": { opacity: 0, transform: "translateX(-30%)"},
          "75%": { opacity: 0 },
          "100%": { transform: "translateX(0%)", opacity: 1 },
        },
        "slide-down": {
          "0%": { opacity: 0, transform: "translateY(-15%)" },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "wave-back": {
          "0%": { transform: "rotate(-100deg)", opacity: "0" },
          "50%": { transform: "rotate(10deg)", opacity: "1" },
          "75%": { transform: "rotate(-20deg)" },
          "100%": { transform: "rotate(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.5s ease-in-out",
        "slide-out": "slide-out 0.5s ease-out",
        "slide-down": "slide-down 1s ease-out",
        "slide-down-skills": "slide-down 2s ease-in-out",
        "slide-left": "slide-left 1s ease-in-out",
        "slide-left-slow": "slide-left 1.3s ease-in-out",
        "wave-back": "wave-back 2s ease-in-out",
      },
      screens: {
        laptop: "1540px",
        lp: { max: "1300px" },
        pn: { max: "530px" },
        smLogo: { raw: "(max-height: 880px)" },
        noLogo: { raw: "(max-height: 600px)" },
      },
    },
    fontSize: {
      sm: ["14px", "20px"],
      md: ["16px", "24px"],
      lg: ["18px", "28px"],
      xl: ["20px", "30px"],
      "2xl": ["24px", "36px"],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}