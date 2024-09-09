import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#1A4D2E", // dark forrest green
        palette: {
          1: "#4F6F52", // lighter muted forrest green
          2: "#E8DFCA", // light beige
          3: "#F5E5E6", // off-white
          4: "#F28D35", // ACCENT: Vibrant Orange
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              maxWidth: "85ch",
            },
          ],
        },
        offwhite: {
          css: {
            "--tw-prose-body": "#F5E5E6", // palette-3
            "--tw-prose-headings": "#E8DFCA", // palette-2
            "--tw-prose-lead": "#E8DFCA", // palette-2
            "--tw-prose-links": "#F28D35", // palette-4
            "--tw-prose-bold": "#E8DFCA", // palette-2
            "--tw-prose-counters": "#F5E5E6", // palette-3
            "--tw-prose-bullets": "#F5E5E6", // palette-3
            "--tw-prose-hr": "#4F6F52", // palette-1
            "--tw-prose-quotes": "#E8DFCA", // palette-2
            "--tw-prose-quote-borders": "#4F6F52", // palette-1
            "--tw-prose-captions": "#F5E5E6", // palette-3
            "--tw-prose-code": "#F28D35", // palette-4
            "--tw-prose-pre-code": "#F5E5E6", // palette-3
            "--tw-prose-pre-bg": "#0D2718", // Darker shade of primary
            "--tw-prose-th-borders": "#4F6F52", // palette-1
            "--tw-prose-td-borders": "#4F6F52", // palette-1
            "--tw-prose-invert-body": "#E8DFCA", // palette-2
            "--tw-prose-invert-headings": "#F5E5E6", // palette-3
            "--tw-prose-invert-lead": "#F5E5E6", // palette-3
            "--tw-prose-invert-links": "#F28D35", // palette-4
            "--tw-prose-invert-bold": "#F5E5E6", // palette-3
            "--tw-prose-invert-counters": "#E8DFCA", // palette-2
            "--tw-prose-invert-bullets": "#E8DFCA", // palette-2
            "--tw-prose-invert-hr": "#4F6F52", // palette-1
            "--tw-prose-invert-quotes": "#F5E5E6", // palette-3
            "--tw-prose-invert-quote-borders": "#4F6F52", // palette-1
            "--tw-prose-invert-captions": "#E8DFCA", // palette-2
            "--tw-prose-invert-code": "#F28D35", // palette-4
            "--tw-prose-invert-pre-code": "#E8DFCA", // palette-2
            "--tw-prose-invert-pre-bg": "#0D2718", // Darker shade of primary
            "--tw-prose-invert-th-borders": "#4F6F52", // palette-1
            "--tw-prose-invert-td-borders": "#4F6F52", // palette-1
          },
        },
      }),
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    addVariablesForColors,
  ],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
