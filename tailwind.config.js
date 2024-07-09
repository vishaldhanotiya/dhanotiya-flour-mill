module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Adjust paths according to your project structure
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: {
      hero: "url('../src/res/background.png')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
