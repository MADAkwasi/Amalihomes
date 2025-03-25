const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: '#ea690c',
        'typo-1': '#6d6d6d',
        neutral: '#888888',
        footer: '#3d3d3d',
      },
      backgroundColor: {
        muted: 'hsl(var(--muted))',
        'primary-light': 'hsl(var(--primary-light))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
