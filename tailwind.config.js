module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["IranYekan"],
      serif: ["IranYekan"],
      mono: ["IranYekan"],
      display: ["IranYekan"],
      body: ["IranYekan"],
    },
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      colors: {
        primary: '#2ED573',
        secondary: '#242532',
        secondary800: '#2f3041',
      },
      transitionProperty: {
        bg: 'background-image'
      },
      backgroundImage: {
        'hero': "url('/public/Images/person-is-working.jpg')",
      }
    },
  },
  plugins: [],
}