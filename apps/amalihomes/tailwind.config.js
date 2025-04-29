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
      fontSize: {
        'dynamic-heading': [
          '24px',
          {
            lineHeight: '32px',
            fontWeight: '700',
          },
        ],
      },
      fontFamily: {
        lato: '"Lato", sans-serif',
      },
      width: {
        modalLarge: '34.3125rem' /* 549px */,
        modalMedium: '30.75rem' /* 492px */,
      },
      gap: {
        extraLarge: '2.75rem' /* 44px */,
      },

      keyframes: {
        loading: {
          '40%': { opacity: 0.3 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { translateY: '50%' },
          '100%': { translateY: '0%' },
        },
      },
      animation: {
        skeleton: 'loading 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        slideUp: 'slideUp 0.5s linear 0.1s',
      },
      colors: {
        border: 'hsl(var(--border))',
        primary: '#ea690c',
        'typo-1': '#6d6d6d',
        neutral: '#888888',
        footer: '#3d3d3d',
        grayText: '#5d5d5d',
        icon: 'hsl(var(--icons-color))',
        strong: 'hsl(var(--text-strong))',
        weak: 'hsl(var(--text-weak))',
        'stroke-strong': 'hsl(var(--stroke-strong))',
        'stroke-weak': 'hsl(var(--stroke-weak))',
        'fill-strong': 'hsl(var(--fill-strong))',
        'fill-weaker': 'hsl(var(--fill-weaker))',
      },
      backgroundColor: {
        muted: 'hsl(var(--muted))',
        'primary-light': 'hsl(var(--primary-light))',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar-hide')],
};
