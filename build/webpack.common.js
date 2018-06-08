const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};