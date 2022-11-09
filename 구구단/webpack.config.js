const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval', // hidden-source-map 개발일 땐 eval, 배포일 땐 hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  entry: {
    app: './client',
  },
  module: {
    result: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },

  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
};
