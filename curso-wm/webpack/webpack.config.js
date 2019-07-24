const modoDev = process.env.NODE_ENV !== "production"
const webpack = require("webpack")
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const uglifyJsPlugin = require("uglifyjs-webpack-plugin")
const optimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
  mode: modoDev ? "development" : "production", // production geraria um codigo minificado
  entry: "./src/principal.js", //ponto de entrada do webpack
  output: {
    filename: "principal.js",
    path: __dirname + "/public"
  },
  devServer: {
    contentBase: "./public",
    port: 9000
  },
  optimization: {
    minimizer: [
      new uglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new optimizeCssAssetsWebpackPlugin({})
    ]
  },

  plugins: [
    new miniCssExtractPlugin({
      filename: "estilo.css"
    })
  ],

  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/, // encontra .css  .scss  .sass
        use: [
          miniCssExtractPlugin.loader, //precisa vir primeiro
          //"style-loader", adiciona CSS à DOM injetando a tag <style>
          "css-loader", //interpretar @import, url(), ...
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
}

/**
 * apos isso, npm start para rodar o webpack
 * gera o arquivo main.js
 * */
