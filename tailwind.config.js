module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      aspectRatio: {
        '2480/3508': '2480 / 3508', // Define the custom aspect ratio
      },
    },
    screens: {
      wrap: { max: "1700px" },
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
