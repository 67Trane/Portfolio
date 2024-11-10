/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3dcfb6',
        secondary: '#1C1C1C',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        fira: ['fira', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('/assets/imgs/header-bg.svg')",
        'skillset': "url('/assets/imgs/skillset-bg.svg')"
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}

