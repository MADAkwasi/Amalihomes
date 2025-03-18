const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, '../../libs/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, '../../libs/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      screens: {
        xsm: '380px',
      },
      fontFamily: {
        lato: '"Lato", sans-serif',
      },
      keyframes: {
        loading: {
          '40%': { opacity: 0.3 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        skeleton: 'loading 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        border: 'hsl(var(--border))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
