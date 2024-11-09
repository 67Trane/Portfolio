/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3dcfb6',
        secondary: '#08463B',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'], // Hier wird die Karla-Schriftart eingebunden
        fira: ['fira', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('/assets/imgs/header-bg.svg')"
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
    },
  },
  plugins: [],
}

