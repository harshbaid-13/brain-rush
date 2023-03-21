/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      logoYellow: "#ffbd59",
      background: "#0f172a",
      navcol:"#F1B860",

      white: "#fff",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
      },
      yellow: {
        300: "#fde047",
        500: "#eab308",
      },
    },
  },
  plugins: [],
};
