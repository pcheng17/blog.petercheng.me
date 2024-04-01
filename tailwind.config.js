/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "penn-red": "#a00000",
        "teal": "#006a80",
      },
      // fontSize: {
      //   'xs': '13px',
      //   'sm': '15px',
      //   'base': '17px',
      //   'lg': '19px',
      //   'xl': '21px',
      //   '2xl': '24px',
      //   '3xl': '28px',
      //   '4xl': '32px',
      //   '5xl': '36px',
      // },
      fontFamily: {
        mono: ["ui-monospace", ...defaultTheme.fontFamily.mono],
        serif: ["Spectral", ...defaultTheme.fontFamily.serif],
      },
      typography(theme) {
        return {
          DEFAULT: {
            css: {
              pre: {
                whiteSpace: "pre-wrap",
                overflowX: "auto",
                marginLeft: theme("spacing[4]"),
                marginRight: theme("spacing[4]"),
                marginTop: theme("spacing[4]"),
                marginBottom: theme("spacing[4]"),
              },
              "code::before": {
                content: "none", // don’t generate the pseudo-element
              },
              "code::after": {
                content: "none",
              },
              code: {
                whiteSpace: "pre",
                fontFace: theme("fontFamily.mono"),
                fontSize: theme("fontSize.base"),
                fontWeight: theme("fontWeight.light"),
                backgroundColor: theme("colors.gray.100"),
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
