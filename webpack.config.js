module.exports = {
  // webpack folder’s entry js — excluded from jekll’s build process.
  entry: "./webpack/entry.js",
  output: {
    // we’re going to put the generated file in the assets folder so jekyll will grab it.
    // if using GitHub Pages, use the following:
    // path: "assets/javascripts"
    path: __dirname + "/assets/javascripts/",
    filename: "bundle.js"
  },
  module : {
    rules: [
  // the 'transform-runtime' plugin tells babel to require the runtime
  // instead of inlining it.
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: [
        'babel-loader'
      ]
    }
    ]
  }
};