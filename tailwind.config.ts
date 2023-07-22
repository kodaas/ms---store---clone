/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],

  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        primary: ["Segoe UI"],
      },

      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
          hover: "hsl(var(--primary-hover))",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
          50: "hsl(var(--background-50))",
          100: "hsl(var(--background-100))",
          200: "hsl(var(--background-200))",
          500: "hsl(var(--background-500))",
        },

        foreground: {
          display: "hsl(var(--foreground-display))",
          body: "hsl(var(--foreground-body))",
        },
      },
    },
  },

  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
