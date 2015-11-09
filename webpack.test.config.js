var webpack = require("webpack");

module.exports = {  
  devtool: "inline-source-map",
  resolve: {
    extensions: ["", ".ts", ".js"]
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts-loader" },
      { test: /\.scss$/, loader: "null" },
      { test: /\.html$/, loader: 'raw' }
    ]
  }
}