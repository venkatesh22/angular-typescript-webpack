var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {  
  entry: "./source/index.ts",
  output: {
    path: __dirname + "/dist",
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
    new ExtractTextPlugin("bundle.css"),
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ]
};

