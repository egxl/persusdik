/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        parchment: {
          50: '#FAF8F5',
          100: '#F4EFE6',
          200: '#E8DEC9',
          300: '#D5C5A5',
        },
        ink: {
          950: '#060B14',
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
        },
        bronze: {
          400: '#D4AF37',
          500: '#C5A059',
          600: '#8C6D2B',
          700: '#73571E',
          800: '#5C4417',
        }
      }
    },
  },
  plugins: [],
}
