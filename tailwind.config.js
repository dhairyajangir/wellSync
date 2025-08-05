/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // 'Inter var' is sometimes problematic
      },
      animation: {
        gradient: 'gradientShift 8s linear infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': {
            backgroundImage: 'linear-gradient(to right, #ff7e5f, #feb47b)',
          },
          '50%': {
            backgroundImage: 'linear-gradient(to right, #feb47b, #ff7e5f)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Optional: Adds better form styles
    require('@tailwindcss/typography'), // Optional: Improves text readability
  ],
};
