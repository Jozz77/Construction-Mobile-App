/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Gilroy', 'Arial'], // Custom font or fallback
      },
      colors: {
        'Primary':'#CAB074',
        "Red": "#F95E35"
      },
    },
  },
  plugins: [],
}
