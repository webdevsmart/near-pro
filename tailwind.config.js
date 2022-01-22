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

          neutral: "#414047",
          "neutral-focus": "#413047",
          "neutral-content": "#ffffff",
        },
      },
    ],
  },
};
