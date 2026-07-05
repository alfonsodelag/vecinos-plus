/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#01267E",
        cocoa: "#54607D",
        rose: "#FE2400",
        sage: "#F47A0E",
        sageDark: "#D9660A",
        sageDeep: "#B8540A",
        cream: "#F7F8FA",
        shell: "#EAF0FB",
        borderc: "#D7E1F2",
        lavender: "#F47A0E"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 50, 70, 0.12)"
      }
    }
  },
  plugins: []
};
