const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/main.ts",
  },
  output: {
    // write directly to built site
    path: path.resolve(__dirname, './_site/assets'),
    filename: "main.js"
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      { 
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  }
};
