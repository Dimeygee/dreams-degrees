module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '85': '85%',
        '100p': "100%", 
        '50p': "50%", 
        "200":"200px",
        "50": "50px",
        "747": "747px",
      },
      height: {
        '40': "40px",
        '50': "50px",
      },
      colors: {
        'pry': '#D68676',
      },
    },
    minHeight: {
      '1/6': '110vh',
      '1/5': '100vh',
      '1/4': '90vh',
      '1/3': '25vh',
      '1/2': '35vh',
    },
    screens: {
      "xs":"280px",
      'sm': '541px',
      'md': '550px',
      'lg': '1024px',
      'xl': '1200px',
    },
    colors:{
      "bk": "#12022F",
      "bt-primary":"#D68676",
      "para": "#594D6D",
      "para2": "#797B89",
      "mtext": "#2D3748"
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald',],
      'body': ['"Open Sans"', "fellix"],
    },
    fontSize: {
      "56":"56px",
      "18":"18px",
      "21":"21px",
      "42":"42px",
      "14":"14px"
    },
  },
  plugins: [],
}
