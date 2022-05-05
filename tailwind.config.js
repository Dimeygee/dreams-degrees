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
        '50': "50%", 
        "200":"200px",
        "50": "50px",
      },
      height: {
        '40': "40px",
        '50': "50px",
      }
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
      '2xl': '1536px',
      '3xl': '2000px',
      '4xl': '3056px',
    },
    colors:{
      "bk": "#12022F"
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald',],
      'body': ['"Open Sans"', "fellix"],
    }
  },
  plugins: [],
}
