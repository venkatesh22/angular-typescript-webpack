var webpack = require("webpack");

module.exports = {  
  entry: "./source/index.ts",
  output: {
    filename: "bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".ts", ".js"]
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts-loader" },
      { test: /\.scss$/, loaders: ["style", "css", "sass"]},
      { test: /\.html$/, loader: 'raw' }
    ]
  }
}