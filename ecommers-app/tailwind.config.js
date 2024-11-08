// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-light-blue': '#E3F5FF', // Equivalent to rgba(227, 245, 255, 1)
        'custom-light-grey': '#F7F9FB', // Equivalent to rgba(247, 249, 251, 1)
        'custom-extra-light-grey': '#F7F9FB', // Same as custom-light-grey
        'custom-extra-light-blue': '#E5ECF6', // Equivalent to rgba(229, 236, 246, 1)
        'custom-light-black': '#1C1C1C66', // Equivalent to rgba(229, 236, 246, 1)
        'custom-color-sidebar': 'rgba(28, 28, 28, 0.4)', // Equivalent to rgba(229, 236, 246, 1)

      },
    },
  },
  plugins: [],
}

