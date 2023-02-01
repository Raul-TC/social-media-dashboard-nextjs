module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': 'hsl(230,17%,14%)',
        'light': 'hsl(0,0%,100%)',
        'header-dark': 'hsl(232,19%,15%)',
        'header-light': 'hsl(225,100%,98%)',
        'titles-dark': 'hsl(0,0%,100%)',
        'titles-light': 'hsl(230,17%,14%)',
        'card-dark': 'hsl(228,28%,20%)',
        'card-light': 'hsl(227,47%,96%)',
        'text-dark': 'hsl(228,34%,66%)',
        'text-light': 'hsl(228,12%,44%)',
        'fb-color': 'hsl(208,92%,53%)',
        'tw-color': 'hsl(203,89%,53%)',
        'ig-left-gradient': 'hsl(37,97%,70%)',
        'ig-right-gradient': 'hsl(329,70%,58%)',
        'yt-color': 'hsl(348,97%,39%)',
        'text-green-arrow': 'hsl(163,72%,41%)',
        'text-red-arrow': 'hsl(356,69%,56%)',
        'toggle-dark': 'hsl(232,19%,15%)',
        'toggle-light': 'hsl(230,22%,74%)',
        'toogle-gradient-left': 'hsl(210,78%,56%)',
        'toogle-gradient-right': 'hsl(146,68%,55%)',

      }
    },
  },
  plugins: [],
}