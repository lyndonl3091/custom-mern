const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    // loaders: [{
    //   exclude: /node_modules/,
    //   loader: 'babel',
    //   query: {
    //     presets: ['react', 'es2015', 'stage-1']
    //   }
    // }]
    rules: {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      options: {
        presets: ['babel-preset-env', 'babel-preset-react']
      }
    }
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
