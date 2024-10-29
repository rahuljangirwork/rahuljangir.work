import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "85ch",
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
        offwhite: {
          css: {
            code: {
              color: "#F28D35", // Accent color for inline code
              backgroundColor: "#1A4D2E", // Dark forest green background
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
              fontWeight: "400",
            },
            pre: {
              backgroundColor: "#1A4D2E",
            },
            "pre code": {
              color: "#F28D35", // Accent color for code block text
              backgroundColor: "transparent", // Remove background from code inside pre
              padding: "0",
              borderRadius: "0",
              fontWeight: "400",
            },

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
            "--tw-prose-invert-th-borders": "#4F6F52", // palette-1
            "--tw-prose-invert-td-borders": "#4F6F52", // palette-1
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
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
