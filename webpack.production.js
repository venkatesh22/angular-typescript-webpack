var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {  
  entry: {
    app: "./source/index.ts",
    styles: "./source/styles.scss" 
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".ts", ".js"]
  },
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ["ng-annotate", "ts-loader"] },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader?sourceMap") },
      { test: /\.html$/, loaders: ["raw", "html-minify"] },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: "url?limit=10000" }
    ]
  },
  "html-minify-loader": {
    empty: true // don't remove empty attributes
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new HtmlWebpackPlugin({
      template: "index.html",
      favicon: "favicon.ico",
      inject: true,
      hash: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

