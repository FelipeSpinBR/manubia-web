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
          50: '#eef6ff',
          100: '#dbeafe',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e3a8a',
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
