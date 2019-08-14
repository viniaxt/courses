const webpack = require("webpack")
const nodeENV = process.env.NODE_ENV || 'production'

/**
 * Source-map links both archives ( app and build )
 * so it's easier to debug in console because, now, you
 * can see what's wrong and in which line of the original
 * code ( app ).
 *  */

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: "./app.js"
  },
  output: {
    filename: "./build.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeENV)}
    })
  ]
}
