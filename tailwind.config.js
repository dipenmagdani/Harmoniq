/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        redHat: ["Red Hat Display", "sans-serif"],
        inter: ["Inter","sans-serif"]
      }
    },
  },
  colors:{
      "canvasIndex0" : "#171719",
      "canvasIndex1" : "#212124",
      "canvasIndex2" : "#1F1F22",
      "fgDefault" : "#FCFCFC",
      "fgHighlight" : "#00FFFF", 
      "fgDefault065": "#FCFCFCa6",
      "fgSubtle": "#9898A6",
      "bgHover": "#4C4E54",
      "actionBorder": "#EBEBFFd"
  },
  plugins: [],
}