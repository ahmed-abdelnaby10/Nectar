/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main": "#53B175",
        "fc": "#FCFCFC",
        "b3": "#B3B3B3",
        "f8a44c": "#F8A44C",
        "e2": "#E2E2E2",
        "7c": "#7C7C7C",
        "txt-main": "#181725",
        "82": "#828282",
        "btn": "#5383EC",
        "facebook": "#4A66AC",
        "carrot": "#F3603F",
        "sec-color": "#F2F3F2",
        'cate-1': "#F8A44C",
        'cate-2': "#53B175",
        'cate-3': "#F7A593",
        'cate-4': "#D3B0E0",
      },
      height:{
        '800':'800px',
        '850':'850px',
        '900':'900px',
        '115':'115px',
        'btn':'55px',
        '5/12': '41.667%',
        '7/12': '58.333%',
        'input': '52px',
      },
      width:{
        '100':'calc(100% - 40px)',
        '640': '640px'
      },
      letterSpacing:{
        '4.5': '4.5px'
      },
      screens:{
        'tab': {'min': '460px'},
      },
      maxWidth:{
        '640':'640px',
      },
      minHeight:{
        '555':'555px'
      },
      inset:{
        '500px': '500px',
        '37%':'37%',
      },
      keyframes:{
        leftRight: {
          '0%, 50%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(50px)' },
          '75%': { transform: 'translateX(-50px)' },
        },
      },
      animation:{
        leftRight: 'leftRight 2s linear infinite'
      },
      backgroundImage:{
        'main-page': 'linear-gradient(153deg, rgba(242,242,239,1) 0%, rgba(242,245,241,1) 0%, rgba(252,252,252,1) 28.999999999999996%, rgba(251,251,251,1) 28.999999999999996%, rgba(253,253,253,1) 73%, rgba(250,245,243,1) 100%)',
        'main-page-dark': 'linear-gradient(153deg, rgb(102 102 102) 0%, rgb(106 106 106) 0%, rgb(125 123 123) 28.999999999999996%, rgb(125 125 125) 28.999999999999996%, rgb(99 99 99) 73%, rgb(20 20 20) 100%)',
      },
    },
  },
  plugins: [],
  darkMode:'class'
}

