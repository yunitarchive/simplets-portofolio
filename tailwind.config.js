/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-400":"#0B0C0E",
        "black-600":"#0B0C0E",
        "neutral-400":"#F4F7FA",
        "gray-400": "#C7D0D9",
      

      },
      fontFamily:{
        dmsans:["DM Sans", "sans-serif"],
        
      },
      content: {
        profilephoto: "url('./assets/profile_photo.png')",
       
      },
    },
    screens:{
      xs:"320px",
      sm:"480px",
      md:"768px",
      lg:"1025px",
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    }
  },
  plugins: [],
}

