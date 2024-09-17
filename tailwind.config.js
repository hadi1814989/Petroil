import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        Container: "1140px",
      },
      backgroundColor:{
        hbg : "#282828",
      },
      fontFamily: {
        'pops': ['Poppins', 'sans-serif'],
        
      },
      backgroundImage: {
        'ban-img': "url('C:\Users\Ulumid diniyyah\Desktop\myProject\Teliwind Project\my-project\src\assets\ban-img.png')",
      },
    },
  },
  plugins: [],
}