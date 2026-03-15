import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf7f0',
          100: '#dff3e6',
          500: '#0f8f4b',
          600: '#0f8f4b',
          700: '#0b6f3a',
        },
      },
      boxShadow: {
        soft: '0 20px 45px -30px rgba(17, 24, 39, 0.45)',
      },
    },
  },
  plugins: [],
};

export default config;
