var path = require('path')

module.exports = {
  entry: './desktop/browser/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'desktop/public')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node-modules/
      }
    ]
  }
}