const path = require('path');

module.exports = {
  mode: process.env.SITE_ENV === "production" ? "production" : "development",
  devtool: process.env.SITE_ENV === "production" ? undefined : "eval",
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
