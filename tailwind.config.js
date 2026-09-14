/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        navy: {
          950: '#060A14',
          900: '#0B132B',
          850: '#111C38',
          800: '#1A2748',
          700: '#273863',
          600: '#384D82',
        },
        command: {
          50: '#F0F4FF',
          100: '#DDE6FD',
          200: '#BFCEFA',
          500: '#2B55B0',
          600: '#1E3E8A',
          700: '#162C66',
          800: '#112250',
          900: '#0B132B',
          950: '#060A14',
        },
        brass: {
          50: '#FBF9F3',
          100: '#F5EFE0',
          200: '#EBDCB9',
          300: '#DEC488',
          400: '#D8B872',
          500: '#C5A059',
          600: '#A3803E',
          700: '#7F622C',
          800: '#5F481E',
        },
        canvas: {
          50: '#FAFBFD',
          100: '#F6F7F9',
          200: '#EEF1F6',
          300: '#DDE2EB',
          400: '#CBD1DE',
        },
        crimson: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        }
      }
    },
  },
  plugins: [],
}

