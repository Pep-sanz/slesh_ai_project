import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        "1400": "1400px",
        "1051": "1051px"
      },
      colors: {
        background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
      },
      boxShadow: {
        "bottom-search": "0 40px 50px -30px rgb(0 0 0 / 0.1)",
        "bottom-navigation": "0 20px 40px -25px rgb(0 0 0 / 0.1)",
      }
    },
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
    },
  },
  plugins: [],
  darkMode: ["class"],
} satisfies Config;
