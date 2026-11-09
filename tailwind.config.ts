import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          offwhite: '#F6FAF9',
          offwhitesubtle: '#EDF5F3',
          green: '#079B78',
          teal: '#20B99A',
          navy: '#142B45',
          navylight: '#233B58',
          navymuted: '#4A607A',
          blue: '#3679CE',
          purple: '#8067D9',
          mint: '#E5F6F0',
          lavender: '#F0EEFF',
          border: '#E8EFED',
          bordersubtle: '#D4E3E0',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        // Desktop / Mobile typography scale
        'display': [
          'clamp(2.5rem, 1.84rem + 2.7vw, 4rem)', // 40px -> 64px
          {
            lineHeight: '1.08',
            letterSpacing: '-0.04em',
            fontWeight: '600',
          },
        ],
        'h1': [
          'clamp(2.25rem, 1.81rem + 1.8vw, 3.25rem)', // 36px -> 52px
          {
            lineHeight: '1.1',
            letterSpacing: '-0.035em',
            fontWeight: '600',
          },
        ],
        'h2': [
          'clamp(1.875rem, 1.55rem + 1.35vw, 2.625rem)', // 30px -> 42px
          {
            lineHeight: '1.15',
            letterSpacing: '-0.03em',
            fontWeight: '600',
          },
        ],
        'h3': [
          'clamp(1.5rem, 1.39rem + 0.45vw, 1.75rem)', // 24px -> 28px
          {
            lineHeight: '1.25',
            letterSpacing: '-0.02em',
            fontWeight: '600',
          },
        ],
        'h4': [
          'clamp(1.1875rem, 1.13rem + 0.23vw, 1.3125rem)', // 19px -> 21px
          {
            lineHeight: '1.3',
            letterSpacing: '-0.015em',
            fontWeight: '600',
          },
        ],
        'body-lg': [
          'clamp(1rem, 0.945rem + 0.23vw, 1.125rem)', // 16px -> 18px
          {
            lineHeight: '1.65',
            fontWeight: '400',
          },
        ],
        'body': [
          'clamp(0.9375rem, 0.91rem + 0.11vw, 1rem)', // 15px -> 16px
          {
            lineHeight: '1.6',
            fontWeight: '400',
          },
        ],
        'body-sm': [
          'clamp(0.8125rem, 0.785rem + 0.11vw, 0.875rem)', // 13px -> 14px
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        'label': [
          'clamp(0.6875rem, 0.66rem + 0.11vw, 0.75rem)', // 11px -> 12px
          {
            lineHeight: '1.4',
            fontWeight: '500',
          },
        ],
        'btn': [
          '15px',
          {
            lineHeight: '1.4',
            fontWeight: '500',
          },
        ],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(20, 43, 69, 0.05)',
        'soft-md': '0 8px 24px -4px rgba(20, 43, 69, 0.08), 0 2px 6px -1px rgba(20, 43, 69, 0.04)',
        'soft-lg': '0 16px 40px -8px rgba(20, 43, 69, 0.10), 0 4px 12px -2px rgba(20, 43, 69, 0.04)',
        'glow-teal': '0 0 35px -5px rgba(32, 185, 154, 0.25)',
        'glow-green': '0 0 40px -8px rgba(7, 155, 120, 0.22)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      transitionTimingFunction: {
        'smooth-spring': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
