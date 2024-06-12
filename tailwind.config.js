/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      '2xl': { max: '1190px' },

      xl: { max: '968px' },

      lg: { max: '768px' },

      md: { max: '600px' },

      sm: { max: '468px' },

      ssm: { max: '339px' },
    },
  },
  plugins: [],
};
