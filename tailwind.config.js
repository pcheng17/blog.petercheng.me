/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "penn-red": "#a00000",
      },
      fontFamily: {
        mono: ["Ubuntu Mono", ...defaultTheme.fontFamily.mono],
      },
      typography(theme) {
        return {
          DEFAULT: {
            css: {
              "code::before": {
                content: "none", // don’t generate the pseudo-element
              },
              "code::after": {
                content: "none",
              },
              code: {
                fontFace: theme("fontFamily.mono"),
                fontSize: theme("fontSize.base"),
                fontWeight: theme("fontWeight.normal"),
                backgroundColor: theme("colors.neutral.100"),
                borderRadius: theme("borderRadius.md"),
                border: `1px solid ${theme("colors.neutral.200")}`,
                paddingLeft: theme("spacing[1.5]"),
                paddingRight: theme("spacing[1.5]"),
                paddingTop: theme("spacing[0.5]"),
                paddingBottom: theme("spacing[0.5]"),
              },
            },
          },
        };
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
