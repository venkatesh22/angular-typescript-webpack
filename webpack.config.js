var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader?sourceMap") },
      { test: /\.html$/, loaders: ["raw", "html-minify"] }
    ]
  },
  "html-minify-loader": {
    empty: true
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ]
};

