/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Charles Rosie"', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        cyan: 'var(--cyan)',
        blue: 'var(--blue)',
        pink: 'var(--pink)',
        ink: 'var(--ink)',
      },
    },
  },
  plugins: [],
};
