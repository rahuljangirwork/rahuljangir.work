import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./posts/**/*.{md,mdx}"],
  prefix: "",
  theme: {
    extend: {

      colors: {
        primary: "#4F200D", // deep earthy brown (unchanged)
        palette: {
          1: "#7B4019", // Adjusted lighter muted forest green (more vibrant)
          2: "#F0F2BD", // light beige (unchanged)
          3: "#F6F1E9", // Slightly adjusted off-white (softer)
          4: "#FF8400", // Muted vibrant orange (slightly deeper)
        },
      },
      // accordion animations used by shadcn-ui
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
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
        offwhite: {
          css: {
            code: {
              color: "#D45D29", // Your adjusted palette-4 color (muted vibrant orange)
              backgroundColor: "#4F200D", // Your primary color (deep earthy brown)
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
              fontWeight: "400",
            },
            pre: {
              padding: "0",
              backgroundColor: "transparent",
              margin: "0",
              border: "1px solid #5C2C16", // Adjusted palette-1 color (lighter forest green)
              borderRadius: "0.5rem",
              overflow: "hidden",
            },
            "pre code.hljs": {
              display: "block",
              padding: "1em",
              overflowX: "auto",
              fontSize: "0.875rem",
              lineHeight: "1.7142857",
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            },
            // Your color variables (keeping the most important ones)
            "--tw-prose-body": "#F3E6E7", // Adjusted off-white for softer text body
            "--tw-prose-headings": "#E8DFCA", // light beige for headings
            "--tw-prose-links": "#D45D29", // Muted Vibrant Orange for links
            "--tw-prose-bold": "#E8DFCA", // Light beige (same for bold text)
            "--tw-prose-quotes": "#E8DFCA", // Light beige for quotes
            "--tw-prose-quote-borders": "#5C2C16", // Adjusted forest green for quote borders
            "--tw-prose-hr": "#5C2C16", // Adjusted forest green for horizontal rule
            "--tw-prose-th-borders": "#5C2C16", // Adjusted forest green for table borders
            "--tw-prose-td-borders": "#5C2C16", // Adjusted forest green for table cell borders
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;