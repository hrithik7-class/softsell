/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {fontFamily: {
'mysans': ['Roboto', 'system-ui', 'sans-serif'],
'serif': ['ui-serif', 'Georgia', 'serif'],
'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
'custom': ['"Custom Font"', 'sans-serif'],
}
    ,extend: {
      colors: {
        primary: {
          light : "#2563eb",//blue for light mode.
          dark: '#60a5fa',// lighter blue for dark mode
        },
        background:{
          light:'#2E415A',
          dark:'#1f2937',
          
        },
        text:{
          light:'#fffff',
          dark:'#f3f4f6',
        },
    },
  },
  },
  plugins: [],
  darkMode: 'class',   //Enable dark mode with 'dark' class

}

