/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        push: { black: '#000000', white: '#FFFFFF', charcoal: '#1A1A1A', mid: '#888888',
          light: '#F5F5F5', border: '#CCCCCC', olive: '#5C6E2E', tint: '#EEF2E6' },
      },
      fontFamily: { 
        sans: ['"Neue Haas Grotesk Display Pro"', '"Neue Haas Grotesk Display Pro 55 Roman"', 'Inter', 'Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
      },
      letterSpacing: { label: '0.25em' },
      transitionTimingFunction: { push: 'cubic-bezier(0.22, 1, 0.36, 1)' },
    },
  },
  plugins: [],
};
