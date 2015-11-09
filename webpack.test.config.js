var webpack = require("webpack");

module.exports = {  
  //entry: "./source/greeter.controller.spec.ts",
  /*output: {
    filename: "spec.bundle.js"
  },*/
  devtool: "inline-source-map",
  resolve: {
    extensions: ["", ".ts", ".js"]
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts-loader" },
      //{ test: /\.scss$/, loaders: ["style", "css", "sass"]},
      //{ test: /\.html$/, loader: 'raw' }
    ]
  }
}