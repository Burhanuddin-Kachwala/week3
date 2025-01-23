module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '640px',
      lg: '768px',
      xl: '1024px',
    },  
    extend: {
      colors: {
        primary: '#064e7e',
      },
    },
  },
  plugins: [],
};
