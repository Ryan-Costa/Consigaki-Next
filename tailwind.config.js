/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        deg1: '#002a7c',
        deg2: '#000008',
        deg3: '#ff0ffc',
        'click-here': '#EFC03F',
        'button-sign': '#2B3155',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
    },
    
  },
  plugins: [],
};