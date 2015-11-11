var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {  
  entry: {
    app: "./source/index.ts",
    styles: "./source/styles.scss" 
  },
  output: {
    filename: "[name].js"
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".ts", ".js"]
  },
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ["ts-loader"] },
      { test: /\.scss$/, loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"] },
      { test: /\.html$/, loaders: ["raw"] },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: "url" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: true
    })
  ]
};

