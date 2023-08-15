/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(179deg, #3E5AC4 0%, #5547C4 100%)",
        img: 'url("./src/Assest/bg-img.png")',
      },
    },
  },
  plugins: [],
};
