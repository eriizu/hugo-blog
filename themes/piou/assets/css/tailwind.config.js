const themeDir = __dirname + '/../../';

module.exports = {
//   mode: "jit",
  purge: {
    enabled: false,
    content: [themeDir+ 'layouts/**/*.html']
  },
  darkMode: "media", // or 'media' or 'class'

  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
}
