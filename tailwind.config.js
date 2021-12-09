module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      hero: "Merriweather, ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
      plex: "'IBM Plex Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    },
    extend: {
      gridTemplateColumns: {
        index: "1fr 0fr 1fr",
        scaffold: "1fr 4fr 1fr",
        centre: "1fr 4fr 1fr",
        centre2L: "1fr 5fr 0.5fr",
        centre2R: "0.5fr 5fr 1fr",
        modal: "1fr 4fr 1fr",
      },
      gridTemplateRows: {
        mobCenter: "min-content 1fr",
        centre: "100vh",
        w: "1fr 3fr",
        modal: "4fr 1fr",
      },
      outline: {
        screenshot: "2px solid white",
      },
    },
  },
  variants: {
    extend: {},
    scrollbar: ["rounded"],
  },
  plugins: [require("tailwind-scrollbar")],
};
