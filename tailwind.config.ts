import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#46AEFE"
      },
      boxShadow: {
        "bottom-search": "0 40px 50px -30px rgb(0 0 0 / 0.1)",
        "bottom-navigation": "0 20px 40px -25px rgb(0 0 0 / 0.1)",
      }
    },
  },
  plugins: [],
  darkMode: "class"
} satisfies Config;
