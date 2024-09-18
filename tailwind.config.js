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
        'bannerImg': "url('./assets/ban-img.png')",
        'aboutImg': "url('./assets/aboutImg.png')",
        'blogImg': "url('./assets/blog-img1.png')",
        'blogImg2': "url('./assets/blog-img2.png')",
        'blogImg3': "url('./assets/blog-img3.png')",
         },
    },
  },
  plugins: [],
}