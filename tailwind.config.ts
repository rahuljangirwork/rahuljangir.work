import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A4D2E", // dark forrest green
        palette: {
          1: "#4F6F52", // lighter muted forrest green
          2: "#E8DFCA", // light beige
          3: "#F5E5E6", // off-white
          4: "#C84B31", // ACCENT: terracotta
          5: "#4D1A39", // ACCENT: purple
        },
      },
      /*
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      */
    },
  },
  plugins: [],
};
export default config;
