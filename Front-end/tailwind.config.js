/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif'], // 'anton' adında bir sınıf ekledik. İsmi istediğiniz gibi değiştirebilirsiniz.
      },
    },
  },
  plugins: [],
}