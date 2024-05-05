/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#212a31",
        color2: "#2e3944",
        color3: "#124e66",
        color4: "#748d92",
        color5: "#d3d9d4",
      },
      fontFamily: {
        font1: ["Rajdhani"],
        font2: ["Rubik Scribble"],
        font3: ["Caveat"],
      },
    },
  },
  plugins: [],
};
