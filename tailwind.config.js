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
    animation: {
      'infinite-scroll': 'infinite-scroll 15s linear infinite',
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      }
    }    
  },
  plugins: [],
}

