/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f6f7fb",
        gray: {
          "100": "#222",
          "200": "#1d1b20",
        },
        lightsteelblue: "#a6a6d3",
        "schemes-primary": "#65558f",
        "m3-state-layers-light-on-primary-opacity-008":
          "rgba(255, 255, 255, 0.08)",
        "schemes-secondary-container": "#e8def8",
        white: "#fff",
        "schemes-surface": "#fef7ff",
        "schemes-surface-container-highest": "#e6e0e9",
        "schemes-error": "#b3261e",
        "schemes-on-surface-variant": "#49454f",
        blueviolet: "#9747ff",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "m3-title-small": "Roboto",
        "bohemian-soul": "'Bohemian Soul'",
      },
      borderRadius: {
        "6xl": "25px",
        "81xl": "100px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq424: {
        raw: "screen and (max-width: 424px)",
      },
      mq416: {
        raw: "screen and (max-width: 416px)",
      },
      mq399: {
        raw: "screen and (max-width: 399px)",
      },
      mq373: {
        raw: "screen and (max-width: 373px)",
      },
      mq359: {
        raw: "screen and (max-width: 359px)",
      },
      mq344: {
        raw: "screen and (max-width: 344px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
