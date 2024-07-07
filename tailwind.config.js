/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Using modern `rgb`
        slatedark: 'rgb(var(--color-slatedark))',
        bgNeutralSilver: 'rgb(var(--color-bgNeutralSilver))',
        myGreen: 'rgb(var(--color-myGreen))',
        myWhite: 'rgb(var(--color-myWhite))',
        slate9: 'rgb(var(--color-slate9))',
        zinc9: 'rgb(var(--color-zinc9))',
        neutral5: 'rgb(var(--color-neutral5))',
        slate7: 'rgb(var(--color-slate7))',
        neutral7: 'rgb(var(--color-neutral7))',
        neutral6: 'rgb(var(--color-neutral6))',
        gray4: 'rgb(var(--color-gray4))',
        gray8: 'rgb(var(--color-gray8))',
        gray6: 'rgb(var(--color-gray6))',
        bgWhite: 'rgb(var(--color-bgWhite))',
  
        // // Using legacy `rgba`
        // primary: 'rgba(var(--color-primary), <alpha-value>)',
        // secondary: 'rgba(var(--color-secondary), <alpha-value>)',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
    // ...
  ],
}
