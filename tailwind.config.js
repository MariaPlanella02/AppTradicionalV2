/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { 
    extend: { 
      colors: { 
        ink: "var(--ink)", 
        paper: "var(--paper)", 
        accent: "var(--accent)", 
        highlight: "var(--highlight)", }, 
        dropShadow: { 
          lg: "0 2px 6px rgba(0,0,0,1)", 
        },
        fontFamily: { 
          sans: ["TuTipografia", "sans-serif"], 
        } 
      }, 
    },
  plugins: [],
}

