/* eslint-disable @typescript-eslint/no-var-requires */
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");
const path = require("path");

module.exports = {
  // Webpack Config
  configureWebpack: {
    // Merged into the final Webpack config
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, "./src/index.html"),
          path.join(__dirname, "./**/*.vue"),
          path.join(__dirname, "./src/**/*.js"),
          path.join(__dirname, "./src/**/*.ts"),
          path.join(__dirname, "./node_modules/vuetify/lib/**/*.js"),
          path.join(__dirname, "./node_modules/vuetify/es5/**/*.js"),
          path.join(__dirname, "./node_modules/vuetify/src/**/*.js")
        ])
      })
    ]
  }
};
