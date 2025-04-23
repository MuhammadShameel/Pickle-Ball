module.exports = {
  content: ["./src/**/*.{html,js}",
    "node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        allotrope: ['"Allotrope Variable"', "sans-serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
