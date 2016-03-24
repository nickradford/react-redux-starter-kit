var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/main.js',
  ],


  output: {
    filename: 'app.js',
    path: __dirname + '/public'
  },

  devtool: 'source-map',
  resolve: {
    root: [
      path.resolve('./src')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      }

    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
