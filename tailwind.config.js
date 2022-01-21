module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: { max: "362px" },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#885FFF",
          "primary-focus": "#685FFF",
          "primary-content": "#ffffff",

          secondary: "#9932CC",
          "secondary-focus": "#9902CC",
          "secondary-content": "#ffffff",
        },
      },
    ],
  },
};
