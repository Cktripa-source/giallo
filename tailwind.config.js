/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
      primary: {
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
        50:  '#fef2f2',
},

        accent: {
         50:  '#fefcf9',   // very light soil dust
         200: '#e5d3b3',   // light sandy brown
         300: '#d2b48c',   // tan
         400: '#b8860b',   // dark goldenrod
         500: '#a0522d',   // sienna
         600: '#8b4513',   // saddle brown
         700: '#7b3f00',   // raw umber
         800: '#5c3317',   // deep clay brown
         900: '#3e2610',   // dark soil
         100: '#f5eee6',   // pale clay

        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      boxShadow: {
        vignette: 'inset 0 0 100px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'blob-move': 'blob-move 25s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        'blob-move': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
      }
    },
  },
  plugins: [],
};
  