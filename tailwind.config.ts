import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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
        sans: ['var(--font-manrope)', 'sans-serif'],
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

