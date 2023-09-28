/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "penn-red": "#a00000",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
