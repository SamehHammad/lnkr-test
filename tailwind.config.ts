/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        bgColor: "#F8FAFC",
        bg2Color: "#F0F3F4",
        mainColor: "#0D6EFD",
        lightText: "#002233",
        softText: "#2d4a59",
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "spin-slow-nolinear": "spin 6s reverse infinite",
        "anim-ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      fontFamily: {
        opensans: [`var(--font-opensans)`, "sans-serif"],
        secondary: [`var(--font-title)`, "sans-serif"],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  plugins: [require("flowbite/plugin")],
});
