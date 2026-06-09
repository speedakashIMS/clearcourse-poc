/** @type {import('tailwindcss').Config} */
export default { 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        accent: ["Dancing Script", "cursive"],
      },
    },
  },
  safelist: [
    'w-full',
    'md:w-1/2',
    'lg:w-1/3',
    'lg:w-1/4',
    'xl:w-1/5',
    'xl:w-1/6',
  ],
  plugins: [],
  corePlugins: {
    placeContent: true, 
  }
}