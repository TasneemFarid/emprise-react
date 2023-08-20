module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#E81A46",
        subHeadText: "#1D293F",
        subPara: "#546179",
        lightText: "#99A3AD",
        yellow: "#F5A623",
      },
      maxWidth: {
        container: "1600px",
      },
      fontSize: {
        para: '24px',
        subHead: '40px',
      }
    },
  },
  plugins: [],
};
